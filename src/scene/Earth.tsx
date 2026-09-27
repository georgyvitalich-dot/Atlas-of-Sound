import { useTexture } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useMemo, useRef } from 'react';
import { DataTexture, MathUtils, SRGBColorSpace, ShaderMaterial, type Texture, TextureLoader, Vector4 } from 'three';
import { getCountry } from '../data/registry';
import type { DetailPatch, DetailTexture } from '../data/types';
import { useAtlas } from '../store/useAtlasStore';
import { SUN_DIR, sceneState } from './sceneState';

/** Sharper global day map, fetched after the first frame on capable devices. */
const DAY_8K = '/textures/earth_day_8k.jpg';

const vertex = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vNormalW;
  varying vec3 vPosW;
  void main() {
    vUv = uv;
    vNormalW = normalize(mat3(modelMatrix) * normal);
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vPosW = wp.xyz;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`;

const fragment = /* glsl */ `
  uniform sampler2D uDay;
  uniform sampler2D uNight;
  uniform sampler2D uTerrain;      // R,G = relief normal (east, north), B = water mask
  uniform sampler2D uDetailDay;
  uniform sampler2D uDetailTerrain;
  uniform vec4 uDetailDayRect;     // west, south, east, north (degrees)
  uniform vec4 uDetailTerrainRect;
  uniform float uDetail;           // 0..1 fade of the explored region's patch
  uniform float uRelief;
  uniform vec3 uSunDir;
  uniform float uReveal;
  varying vec2 vUv;
  varying vec3 vNormalW;
  varying vec3 vPosW;

  vec2 rectUv(vec2 lonLat, vec4 r) { return (lonLat - r.xy) / (r.zw - r.xy); }

  void main() {
    vec3 n0 = normalize(vNormalW);
    vec3 v = normalize(cameraPosition - vPosW);
    float ndl0 = dot(n0, uSunDir);

    vec3 day = texture2D(uDay, vUv).rgb;
    vec3 night = texture2D(uNight, vUv).rgb;
    vec3 terr = texture2D(uTerrain, vUv).rgb;

    // Close-up patch of the explored region, dissolving softly into the global map.
    if (uDetail > 0.001) {
      vec2 lonLat = vec2(vUv.x * 360.0 - 180.0, vUv.y * 180.0 - 90.0);
      vec2 du = rectUv(lonLat, uDetailDayRect);
      vec2 tu = rectUv(lonLat, uDetailTerrainRect);
      vec2 edge = smoothstep(0.0, 0.07, du) * smoothstep(0.0, 0.07, 1.0 - du);
      float w = edge.x * edge.y * uDetail;
      day = mix(day, texture2D(uDetailDay, du).rgb, w);
      terr = mix(terr, texture2D(uDetailTerrain, tu).rgb, w);
    }

    // Water: oceans from the mask, inland lakes (near-black in the source) from colour.
    float lum = dot(day, vec3(0.3, 0.5, 0.2));
    float lake = 1.0 - smoothstep(0.004, 0.012, lum);
    day = mix(day, vec3(0.006, 0.02, 0.05), lake);
    float water = max(smoothstep(0.35, 0.65, terr.b), lake);

    // Relief normal from the east/north tilt, in the sphere's local frame.
    vec3 east = normalize(vec3(n0.z, 0.0, -n0.x) + vec3(1e-5, 0.0, 0.0));
    vec3 north = cross(n0, east);
    vec2 tilt = terr.rg * 2.0 - 1.0;
    float up = sqrt(max(0.0, 1.0 - dot(tilt, tilt)));
    vec3 n = normalize(east * tilt.x * uRelief + north * tilt.y * uRelief + n0 * up);
    n = normalize(mix(n, n0, water));

    // Cinematic grade: deeper oceans, slightly warmer land.
    day = mix(day * vec3(1.06, 1.0, 0.9), day * vec3(0.55, 0.7, 0.95), water);

    vec3 sunCol = vec3(1.0, 0.84, 0.62);
    // Terrain lighting: slopes toward the sun brighten, away from it fall into shadow.
    float ndl = dot(n, uSunDir);
    float diffuse = max(ndl, 0.0);
    vec3 h = normalize(uSunDir + v);
    float spec = pow(max(dot(n0, h), 0.0), 1200.0) * water * 0.35;
    vec3 lit = day * sunCol * (0.08 + 1.15 * diffuse) + spec * vec3(1.0, 0.7, 0.4);

    // Night side: amber city lights on deep blue.
    vec3 nightCol = pow(night, vec3(1.4)) * vec3(1.0, 0.68, 0.36) * 2.2 + vec3(0.002, 0.004, 0.012);

    float dayMix = smoothstep(-0.12, 0.22, ndl0);
    vec3 col = mix(nightCol, lit, dayMix);

    // Golden band along the terminator.
    float term = exp(-pow(ndl0 * 4.5, 2.0));
    col += vec3(0.5, 0.22, 0.06) * term * 0.12;

    // Inner atmospheric rim — blue on the day side, amber near the sun edge.
    float fres = pow(1.0 - max(dot(n0, v), 0.0), 2.6);
    vec3 atm = mix(vec3(0.3, 0.55, 1.0), vec3(1.0, 0.72, 0.45), 0.35);
    col += atm * fres * smoothstep(-0.35, 0.5, ndl0) * 0.85 * uReveal;

    gl_FragColor = vec4(col, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

/** 8K only where it's clearly affordable: desktop-class GPU, enough memory, not a touch device. */
function wantsHighRes(maxTextureSize: number) {
  if (typeof window === 'undefined') return false;
  const memory = (navigator as { deviceMemory?: number }).deviceMemory ?? 8;
  return maxTextureSize >= 8192 && memory >= 4 && !window.matchMedia('(pointer: coarse)').matches;
}

const rect = (t: DetailTexture, out: Vector4) => out.set(t.west, t.south, t.east, t.north);

/** Placeholder bound to the detail samplers while no region patch is loaded (flat, dry). */
const emptyTexture = new DataTexture(new Uint8Array([128, 128, 0, 255]), 1, 1);
emptyTexture.needsUpdate = true;

interface LoadedPatch {
  id: string;
  day: Texture;
  terrain: Texture;
  patch: DetailPatch;
}

export function Earth() {
  const gl = useThree((s) => s.gl);
  const [day, night, terrain] = useTexture([
    '/textures/earth_day.jpg',
    '/textures/earth_night.jpg',
    '/textures/earth_terrain_4k.jpg',
  ]);
  const countryId = useAtlas((s) => s.countryId);
  const selected = useAtlas((s) => s.selectedRegionId);
  const aniso = Math.min(8, gl.capabilities.getMaxAnisotropy());

  const material = useMemo(() => {
    for (const t of [day, night]) {
      t.colorSpace = SRGBColorSpace;
      t.anisotropy = aniso;
    }
    // Normals and the mask are data, not colour.
    terrain.anisotropy = Math.min(4, aniso);
    return new ShaderMaterial({
      vertexShader: vertex,
      fragmentShader: fragment,
      uniforms: {
        uDay: { value: day },
        uNight: { value: night },
        uTerrain: { value: terrain },
        uDetailDay: { value: emptyTexture },
        uDetailTerrain: { value: emptyTexture },
        uDetailDayRect: { value: new Vector4(0, 0, 1, 1) },
        uDetailTerrainRect: { value: new Vector4(0, 0, 1, 1) },
        uDetail: { value: 0 },
        uRelief: { value: 1 },
        uSunDir: { value: SUN_DIR },
        uReveal: { value: 0 },
      },
    });
  }, [day, night, terrain, aniso]);

  // Swap in the 8K day map once it has loaded; the 4K one is freed from the GPU.
  useEffect(() => {
    if (!wantsHighRes(gl.capabilities.maxTextureSize)) return;
    let cancelled = false;
    let hi: Texture | undefined;
    new TextureLoader().loadAsync(DAY_8K).then((t) => {
      if (cancelled) return t.dispose();
      hi = t;
      t.colorSpace = SRGBColorSpace;
      t.anisotropy = aniso;
      material.uniforms.uDay.value = t;
      day.dispose();
    });
    return () => {
      cancelled = true;
      if (hi) {
        material.uniforms.uDay.value = day;
        hi.dispose();
      }
    };
  }, [gl, material, day, aniso]);

  // Region close-up: at most one patch lives on the GPU; it fades in on entry
  // and is disposed after fading out when the region is left.
  const active = useRef<LoadedPatch | null>(null);
  const pending = useRef<LoadedPatch | null>(null);
  useEffect(() => {
    // Phones and small GPUs keep the global maps only: patches add up to ~50 MB of GPU memory.
    if (!wantsHighRes(gl.capabilities.maxTextureSize)) return;
    const patch = selected ? getCountry(countryId).detailPatches?.[selected] : undefined;
    if (!selected || !patch || active.current?.id === selected) return;
    let cancelled = false;
    const loader = new TextureLoader();
    Promise.all([loader.loadAsync(patch.day.url), loader.loadAsync(patch.terrain.url)]).then(([d, t]) => {
      if (cancelled || useAtlas.getState().selectedRegionId !== selected) {
        d.dispose();
        t.dispose();
        return;
      }
      d.colorSpace = SRGBColorSpace;
      d.anisotropy = aniso;
      t.anisotropy = Math.min(4, aniso);
      pending.current?.day.dispose();
      pending.current?.terrain.dispose();
      pending.current = { id: selected, day: d, terrain: t, patch };
    });
    return () => {
      cancelled = true;
    };
  }, [selected, countryId, aniso, gl]);

  useEffect(
    () => () => {
      for (const p of [active.current, pending.current]) {
        p?.day.dispose();
        p?.terrain.dispose();
      }
    },
    [],
  );

  useFrame((_, dt) => {
    const u = material.uniforms;
    u.uReveal.value = sceneState.reveal;
    const current = useAtlas.getState().selectedRegionId;
    const a = active.current;
    const target = a && a.id === current ? 1 : 0;
    u.uDetail.value = MathUtils.damp(u.uDetail.value, target, 2.2, dt);
    if (u.uDetail.value > 0.01) return;
    // Faded out: free the old patch, then bring in the one that has loaded.
    if (a && a.id !== current) {
      a.day.dispose();
      a.terrain.dispose();
      active.current = null;
      u.uDetailDay.value = emptyTexture;
      u.uDetailTerrain.value = emptyTexture;
    }
    const p = pending.current;
    if (p && p.id === current && !active.current) {
      active.current = p;
      pending.current = null;
      u.uDetailDay.value = p.day;
      u.uDetailTerrain.value = p.terrain;
      rect(p.patch.day, u.uDetailDayRect.value);
      rect(p.patch.terrain, u.uDetailTerrainRect.value);
    } else if (p && p.id !== current) {
      p.day.dispose();
      p.terrain.dispose();
      pending.current = null;
    }
  });

  return (
    <mesh material={material}>
      <sphereGeometry args={[1, 128, 96]} />
    </mesh>
  );
}
