import earcut from 'earcut';
import { BufferGeometry, Float32BufferAttribute, Vector3 } from 'three';
import type { RegionShape } from './regionShapes';
import { REGION_RADIUS } from './regionShapes';
import { lonLatToVec3 } from '../utils/geo';

/**
 * Flat triangles spanning several degrees would cut through the curved
 * globe, so big triangles are subdivided until edges are ≤ MAX_EDGE_DEG.
 */
const MAX_EDGE_DEG = 1.5;
const tmp = new Vector3();

type P = [number, number];

function pushVertex(out: number[], lon: number, lat: number, radius: number) {
  lonLatToVec3(lon, lat, radius, tmp);
  out.push(tmp.x, tmp.y, tmp.z);
}

function edgeLen(a: P, b: P) {
  return Math.hypot(a[0] - b[0], a[1] - b[1]);
}

/** Uniformly subdivides triangle abc into n² triangles (barycentric grid). */
function emitTriangle(a: P, b: P, c: P, pos: number[], ids: number[], id: number) {
  const n = Math.max(1, Math.ceil(Math.max(edgeLen(a, b), edgeLen(b, c), edgeLen(c, a)) / MAX_EDGE_DEG));
  const at = (i: number, j: number): P => {
    const u = i / n, v = j / n, w = 1 - u - v;
    return [a[0] * w + b[0] * u + c[0] * v, a[1] * w + b[1] * u + c[1] * v];
  };
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      const tri: P[][] = [[at(i, j), at(i + 1, j), at(i, j + 1)]];
      if (j < n - i - 1) tri.push([at(i + 1, j), at(i + 1, j + 1), at(i, j + 1)]);
      for (const t of tri) {
        for (const p of t) {
          pushVertex(pos, p[0], p[1], REGION_RADIUS);
          ids.push(id);
        }
      }
    }
  }
}

/** One merged mesh for all regions; `aRegion` tells the shader which region a vertex belongs to. */
export function buildFillGeometry(shapes: RegionShape[]) {
  const pos: number[] = [];
  const ids: number[] = [];
  for (const shape of shapes) {
    const g = shape.feature.geometry;
    const polygons = g.type === 'Polygon' ? [g.coordinates] : g.coordinates;
    for (const rings of polygons) {
      const flat: number[] = [];
      const holes: number[] = [];
      rings.forEach((ring, k) => {
        if (k > 0) holes.push(flat.length / 2);
        for (let i = 0; i < ring.length - 1; i++) flat.push(ring[i][0], ring[i][1]);
      });
      const tris = earcut(flat, holes, 2);
      const pt = (i: number): P => [flat[i * 2], flat[i * 2 + 1]];
      for (let i = 0; i < tris.length; i += 3) {
        emitTriangle(pt(tris[i]), pt(tris[i + 1]), pt(tris[i + 2]), pos, ids, shape.index);
      }
    }
  }
  const geom = new BufferGeometry();
  geom.setAttribute('position', new Float32BufferAttribute(pos, 3));
  geom.setAttribute('aRegion', new Float32BufferAttribute(ids, 1));
  geom.computeBoundingSphere();
  return geom;
}

/** Converts line strings to LineSegments pairs, densified so they hug the sphere. */
export function lineStringsToSegments(lines: number[][][], radius: number): number[] {
  const out: number[] = [];
  for (const line of lines) {
    for (let i = 0; i < line.length - 1; i++) {
      const [x0, y0] = line[i];
      const [x1, y1] = line[i + 1];
      // Skip segments that jump across the antimeridian.
      if (Math.abs(x1 - x0) > 180) continue;
      const steps = Math.max(1, Math.ceil(Math.hypot(x1 - x0, y1 - y0) / 0.5));
      for (let s = 0; s < steps; s++) {
        const t0 = s / steps, t1 = (s + 1) / steps;
        pushVertex(out, x0 + (x1 - x0) * t0, y0 + (y1 - y0) * t0, radius);
        pushVertex(out, x0 + (x1 - x0) * t1, y0 + (y1 - y0) * t1, radius);
      }
    }
  }
  return out;
}

export function buildBorderGeometry(borders: GeoJSON.MultiLineString) {
  const geom = new BufferGeometry();
  geom.setAttribute(
    'position',
    new Float32BufferAttribute(lineStringsToSegments(borders.coordinates, REGION_RADIUS + 0.0006), 3),
  );
  return geom;
}

/** Outline of a single region as segment pairs (used for hover/selection). */
export function regionOutline(shape: RegionShape): number[] {
  const g = shape.feature.geometry;
  const polygons = g.type === 'Polygon' ? [g.coordinates] : g.coordinates;
  return lineStringsToSegments(polygons.flat(), REGION_RADIUS + 0.0012);
}
