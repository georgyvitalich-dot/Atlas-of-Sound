import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { type Material, type Mesh, type Points, Texture } from 'three';

/**
 * TEMPORARY dev-only instrumentation (mounted only when import.meta.env.DEV).
 * Call `__atlasStats()` in the browser console to print what the last frame cost.
 */
export function DevRenderStats() {
  const { gl, scene, camera, size } = useThree();
  const last = useRef({ calls: 0, triangles: 0, points: 0, lines: 0 });

  // Priority 0 runs before this frame's render, so info holds the previous frame.
  useFrame(() => {
    const r = gl.info.render;
    last.current = { calls: r.calls, triangles: r.triangles, points: r.points, lines: r.lines };
  });

  useEffect(() => {
    const w = window as unknown as { __atlasStats?: () => unknown };
    w.__atlasStats = () => {
      const textures = new Map<Texture, { name: string; w: number; h: number; estMB: number }>();
      const meshes: { name: string; type: string; vertices: number; triangles: number; visible: boolean }[] = [];
      scene.traverse((o) => {
        const m = o as Mesh | Points;
        if (!m.geometry) return;
        const g = m.geometry;
        const vertices = g.attributes.position?.count ?? 0;
        const triangles = g.index ? g.index.count / 3 : vertices / 3;
        meshes.push({
          name: m.name || (m.material as Material)?.type || m.type,
          type: m.type,
          vertices,
          triangles: Math.round(triangles),
          visible: m.visible,
        });
        const mats = Array.isArray(m.material) ? m.material : [m.material];
        for (const mat of mats) {
          const uniforms = (mat as { uniforms?: Record<string, { value: unknown }> }).uniforms ?? {};
          const maps = [...Object.values(uniforms).map((u) => u.value), ...Object.values(mat ?? {})];
          for (const v of maps) {
            if (!(v instanceof Texture) || textures.has(v)) continue;
            const img = v.image as { width?: number; height?: number; currentSrc?: string; src?: string } | undefined;
            const tw = img?.width ?? 0;
            const th = img?.height ?? 0;
            // RGBA8 + full mip chain ≈ ×4/3.
            textures.set(v, {
              name: (img?.currentSrc || img?.src || v.name || 'texture').split('/').pop()!,
              w: tw,
              h: th,
              estMB: +((tw * th * 4 * 4) / 3 / 1048576).toFixed(1),
            });
          }
        }
      });
      const texList = [...textures.values()];
      const report = {
        frame: last.current,
        memory: gl.info.memory,
        programs: gl.info.programs?.length,
        canvas: { css: `${size.width}×${size.height}`, dpr: gl.getPixelRatio(), drawingBuffer: `${gl.domElement.width}×${gl.domElement.height}` },
        camera: { distance: +camera.position.length().toFixed(3), fov: (camera as { fov?: number }).fov },
        gpu: {
          maxTextureSize: gl.capabilities.maxTextureSize,
          maxAnisotropy: gl.capabilities.getMaxAnisotropy(),
          renderer: (() => {
            const ctx = gl.getContext();
            const ext = ctx.getExtension('WEBGL_debug_renderer_info');
            return ext ? ctx.getParameter(ext.UNMASKED_RENDERER_WEBGL) : 'n/a';
          })(),
        },
        textures: texList,
        textureMBEstimate: +texList.reduce((s, t) => s + t.estMB, 0).toFixed(1),
        meshes,
      };
      console.log('[atlas stats]', report);
      return report;
    };
    return () => {
      delete w.__atlasStats;
    };
  }, [gl, scene, camera, size]);

  // GPU time per frame via EXT_disjoint_timer_query_webgl2 (when the browser exposes it).
  useEffect(() => {
    const ctx = gl.getContext() as WebGL2RenderingContext;
    const ext = ctx.getExtension('EXT_disjoint_timer_query_webgl2');
    const g = window as unknown as Record<string, unknown>;
    g.__atlasScene = scene;
    g.__atlasRenderer = gl;
    if (!ext) return;
    const samples: number[] = [];
    const pending: WebGLQuery[] = [];
    let collecting = false;
    const original = gl.render.bind(gl);
    gl.render = (s, c) => {
      if (!collecting) return original(s, c);
      const q = ctx.createQuery()!;
      ctx.beginQuery(ext.TIME_ELAPSED_EXT, q);
      original(s, c);
      ctx.endQuery(ext.TIME_ELAPSED_EXT);
      pending.push(q);
      // Resolve finished queries from earlier frames.
      while (pending.length && ctx.getQueryParameter(pending[0], ctx.QUERY_RESULT_AVAILABLE)) {
        const done = pending.shift()!;
        if (!ctx.getParameter(ext.GPU_DISJOINT_EXT)) samples.push(ctx.getQueryParameter(done, ctx.QUERY_RESULT) / 1e6);
        ctx.deleteQuery(done);
      }
    };
    g.__atlasGpu = {
      begin: () => {
        samples.length = 0;
        collecting = true;
      },
      result: () => {
        collecting = false;
        const s = [...samples].sort((a, b) => a - b);
        const avg = s.reduce((a, b) => a + b, 0) / (s.length || 1);
        return { frames: s.length, avgMs: +avg.toFixed(2), p50Ms: +(s[s.length >> 1] ?? 0).toFixed(2), maxMs: +(s[s.length - 1] ?? 0).toFixed(2) };
      },
    };
    return () => {
      gl.render = original;
      delete g.__atlasGpu;
    };
  }, [gl, scene]);

  return null;
}
