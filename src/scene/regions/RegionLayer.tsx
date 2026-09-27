import { Line } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  type BufferGeometry,
  MathUtils,
  Raycaster,
  ShaderMaterial,
  Sphere,
  Vector2,
  Vector3,
} from 'three';
import type { Line2 } from 'three-stdlib';
import { getCountry } from '../../data/registry';
import { regionHasContent, regionPresence } from '../../data/selectors';
import { useAtlas } from '../../store/useAtlasStore';
import { vec3ToLonLat } from '../utils/geo';
import { buildBorderGeometry, buildFillGeometry, regionOutline } from './buildRegionGeometry';
import { type RegionShape, buildShapes, findRegionAt, useShapes } from './regionShapes';

const MAX_REGIONS = 64;

const fillVertex = /* glsl */ `
  attribute float aRegion;
  uniform float uGlow[${MAX_REGIONS}];
  uniform float uPresence[${MAX_REGIONS}];
  uniform float uSelected;
  varying float vGlow;
  varying float vData;
  varying float vSel;
  varying vec3 vPosW;
  void main() {
    int id = int(aRegion + 0.5);
    vGlow = uGlow[id];
    vData = uPresence[id];
    vSel = step(abs(aRegion - uSelected), 0.5);
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vPosW = wp.xyz;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`;

const fillFragment = /* glsl */ `
  uniform float uDim;
  uniform float uReveal;
  varying float vGlow;
  varying float vData;
  varying float vSel;
  varying vec3 vPosW;
  void main() {
    vec3 n = normalize(vPosW);
    vec3 v = normalize(cameraPosition - vPosW);
    float facing = smoothstep(0.0, 0.3, dot(n, v));
    vec3 base = vec3(0.95, 0.86, 0.7);
    vec3 warm = vec3(1.0, 0.72, 0.36);
    // vData = how rich the current era + genre slice is in this state (0..1).
    vec3 col = mix(base, warm, clamp(0.3 + vGlow + vData * 0.35, 0.0, 1.0));
    // Strong enough to read at globe distance which states hold music right now.
    float a = 0.02 + vData * 0.2 + vGlow * 0.3;
    a *= mix(1.0, 0.25, uDim * (1.0 - vSel));
    gl_FragColor = vec4(col, a * facing * uReveal);
  }
`;

const lineVertex = /* glsl */ `
  varying vec3 vPosW;
  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vPosW = wp.xyz;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`;

const lineFragment = /* glsl */ `
  uniform float uOpacity;
  varying vec3 vPosW;
  void main() {
    vec3 n = normalize(vPosW);
    vec3 v = normalize(cameraPosition - vPosW);
    float facing = smoothstep(0.0, 0.35, dot(n, v));
    gl_FragColor = vec4(1.0, 0.88, 0.68, uOpacity * facing);
  }
`;

export function RegionLayer() {
  const countryId = useAtlas((s) => s.countryId);
  const country = getCountry(countryId);
  const [data, setData] = useState<{ fill: BufferGeometry; borders: BufferGeometry } | null>(null);
  const shapes = useShapes((s) => s.shapes);

  useEffect(() => {
    let cancelled = false;
    country.loadGeometry().then(({ regions, borders }) => {
      if (cancelled) return;
      const built = buildShapes(country, regions);
      // uGlow/uPresence are fixed-size shader arrays: extra regions would silently get no glow.
      if (import.meta.env.DEV && built.list.length > MAX_REGIONS) {
        throw new Error(
          `[RegionLayer] Country "${country.id}" has ${built.list.length} regions, ` +
            `but the region shader supports at most MAX_REGIONS = ${MAX_REGIONS}.`,
        );
      }
      useShapes.setState({ shapes: built });
      setData({ fill: buildFillGeometry(built.list), borders: buildBorderGeometry(borders) });
    });
    return () => {
      cancelled = true;
    };
  }, [country]);

  // These geometries are created here (not by R3F JSX), so R3F won't free them.
  useEffect(
    () => () => {
      data?.fill.dispose();
      data?.borders.dispose();
    },
    [data],
  );

  const fillMat = useMemo(() => {
    return new ShaderMaterial({
      vertexShader: fillVertex,
      fragmentShader: fillFragment,
      uniforms: {
        uGlow: { value: new Float32Array(MAX_REGIONS) },
        uPresence: { value: new Float32Array(MAX_REGIONS) },
        uSelected: { value: -10 },
        uDim: { value: 0 },
        uReveal: { value: 0 },
      },
      transparent: true,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -2,
      polygonOffsetUnits: -2,
    });
  }, []);

  const lineMat = useMemo(
    () =>
      new ShaderMaterial({
        vertexShader: lineVertex,
        fragmentShader: lineFragment,
        uniforms: { uOpacity: { value: 0 } },
        transparent: true,
        depthWrite: false,
      }),
    [],
  );

  // The globe's "musical picture": each state warms up by how many artists it
  // has for the current era + genre. Recomputed only when the filters change.
  const eraId = useAtlas((s) => s.eraId);
  const genres = useAtlas((s) => s.genres);
  const presenceTarget = useRef(new Float32Array(MAX_REGIONS));
  useEffect(() => {
    if (!shapes) return;
    const counts = regionPresence(country, eraId, genres);
    const target = presenceTarget.current;
    for (const s of shapes.list) {
      const n = counts.get(s.regionId) ?? 0;
      // Even a single artist must read clearly against states without this slice.
      target[s.index] = n > 0
        ? 0.65 + 0.35 * Math.min(1, (n - 1) / 3)
        : regionHasContent(country, s.regionId) ? 0.08 : 0;
    }
  }, [shapes, country, eraId, genres]);

  useFrame((_, dt) => {
    if (!shapes) return;
    const { hoveredRegionId, selectedRegionId, phase } = useAtlas.getState();
    const glow = fillMat.uniforms.uGlow.value as Float32Array;
    const presence = fillMat.uniforms.uPresence.value as Float32Array;
    const target = presenceTarget.current;
    for (const s of shapes.list) {
      const g = s.regionId === hoveredRegionId ? 1 : s.regionId === selectedRegionId ? 0.45 : 0;
      glow[s.index] = MathUtils.damp(glow[s.index], g, 9, dt);
      presence[s.index] = MathUtils.damp(presence[s.index], target[s.index], 3.5, dt);
    }
    const sel = selectedRegionId ? shapes.byId.get(selectedRegionId)?.index ?? -10 : -10;
    fillMat.uniforms.uSelected.value = sel;
    const u = fillMat.uniforms;
    u.uDim.value = MathUtils.damp(u.uDim.value, phase === 'explore' ? 1 : 0, 4, dt);
    const reveal = phase === 'intro' ? 0 : 1;
    u.uReveal.value = MathUtils.damp(u.uReveal.value, reveal, 2.5, dt);
    const lineTarget = phase === 'intro' ? 0 : phase === 'explore' ? 0.28 : 0.5;
    lineMat.uniforms.uOpacity.value = MathUtils.damp(lineMat.uniforms.uOpacity.value, lineTarget, 2.5, dt);
  });

  if (!data || !shapes) return null;

  return (
    <group>
      <mesh geometry={data.fill} material={fillMat} renderOrder={4} raycast={() => null} />
      <lineSegments geometry={data.borders} material={lineMat} renderOrder={5} raycast={() => null} />
      <HighlightOutlines />
      <RegionPicker />
    </group>
  );
}

/** Crisp, thicker outline for the hovered and selected regions. */
function HighlightOutlines() {
  const shapes = useShapes((s) => s.shapes)!;
  const hovered = useAtlas((s) => s.hoveredRegionId);
  const selected = useAtlas((s) => s.selectedRegionId);
  const selectedShape = selected ? shapes.byId.get(selected) : undefined;
  const hoveredShape = hovered && hovered !== selected ? shapes.byId.get(hovered) : undefined;
  return (
    <>
      {selectedShape && <Outline key={`s-${selected}`} shape={selectedShape} opacity={0.75} />}
      {hoveredShape && <Outline key={`h-${hovered}`} shape={hoveredShape} opacity={0.95} />}
    </>
  );
}

/** Outline vertices per region, computed once — hover remounts <Outline> often. */
const outlineCache = new WeakMap<RegionShape, number[]>();
function outlineOf(shape: RegionShape) {
  let pts = outlineCache.get(shape);
  if (!pts) outlineCache.set(shape, (pts = regionOutline(shape)));
  return pts;
}

function Outline({ shape, opacity }: { shape: RegionShape; opacity: number }) {
  const points = outlineOf(shape);
  const ref = useRef<Line2>(null);
  useFrame((_, dt) => {
    const m = ref.current?.material;
    if (m) m.opacity = MathUtils.damp(m.opacity, opacity, 10, dt);
  });
  return (
    <Line
      ref={ref}
      points={points}
      segments
      color="#ffd59a"
      lineWidth={1.6}
      transparent
      opacity={0}
      depthWrite={false}
      renderOrder={6}
    />
  );
}

/**
 * Picking without raycasting thousands of triangles: intersect the view ray
 * with the unit sphere, convert to lon/lat and test the state polygons.
 */
function RegionPicker() {
  const { gl, camera } = useThree();
  const shapes = useShapes((s) => s.shapes)!;

  useEffect(() => {
    const el = gl.domElement;
    const raycaster = new Raycaster();
    const sphere = new Sphere(new Vector3(), 1);
    const hit = new Vector3();
    const ndc = new Vector2();
    let down: { x: number; y: number; t: number } | null = null;
    // Pointers on the screen; a pinch (two or more fingers) never ends in a tap.
    const active = new Set<number>();
    let multi = false;

    const regionAt = (clientX: number, clientY: number) => {
      const rect = el.getBoundingClientRect();
      ndc.set(
        ((clientX - rect.left) / rect.width) * 2 - 1,
        -((clientY - rect.top) / rect.height) * 2 + 1,
      );
      raycaster.setFromCamera(ndc, camera);
      if (!raycaster.ray.intersectSphere(sphere, hit)) return null;
      return findRegionAt(shapes, vec3ToLonLat(hit));
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return; // touch uses tap-to-preview
      const st = useAtlas.getState();
      if (st.phase === 'intro' || e.buttons !== 0) return;
      const r = regionAt(e.clientX, e.clientY);
      st.setHovered(r && r.regionId !== st.selectedRegionId ? r.regionId : null);
      el.style.cursor = r ? 'pointer' : 'grab';
    };
    const onDown = (e: PointerEvent) => {
      // A mouse is a single pointer: a release outside the canvas can't leave a stale one behind.
      if (e.pointerType === 'mouse') active.clear();
      active.add(e.pointerId);
      if (active.size > 1) multi = true;
      down = { x: e.clientX, y: e.clientY, t: performance.now() };
      el.style.cursor = 'grabbing';
      // Mouse: the hover card hides while dragging. Touch: the preview stays,
      // so the second tap on the same state can open it.
      if (e.pointerType !== 'touch') useAtlas.getState().setHovered(null);
    };
    const onUp = (e: PointerEvent) => {
      el.style.cursor = 'grab';
      active.delete(e.pointerId);
      if (multi) {
        if (active.size === 0) multi = false;
        down = null;
        return;
      }
      const st = useAtlas.getState();
      if (!down || st.phase === 'intro') return;
      const moved = Math.hypot(e.clientX - down.x, e.clientY - down.y);
      const quick = performance.now() - down.t < 600;
      down = null;
      if (moved > 6 || !quick) return;
      const r = regionAt(e.clientX, e.clientY);
      if (!r) {
        if (e.pointerType === 'touch') st.setHovered(null);
        return;
      }
      if (e.pointerType === 'touch' && st.hoveredRegionId !== r.regionId && r.regionId !== st.selectedRegionId) {
        st.setHovered(r.regionId); // first tap = preview
        return;
      }
      if (r.regionId !== st.selectedRegionId) st.select(r.regionId);
    };
    const onLeave = (e: PointerEvent) => {
      // A finger lifting off also "leaves" the canvas — keep the touch preview.
      if (e.pointerType !== 'touch') useAtlas.getState().setHovered(null);
    };
    const onCancel = (e: PointerEvent) => {
      active.delete(e.pointerId);
      if (active.size === 0) multi = false;
      down = null;
    };

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerdown', onDown);
    el.addEventListener('pointerup', onUp);
    el.addEventListener('pointerleave', onLeave);
    el.addEventListener('pointercancel', onCancel);
    el.style.cursor = 'grab';
    return () => {
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerdown', onDown);
      el.removeEventListener('pointerup', onUp);
      el.removeEventListener('pointerleave', onLeave);
      el.removeEventListener('pointercancel', onCancel);
    };
  }, [gl, camera, shapes]);

  return null;
}
