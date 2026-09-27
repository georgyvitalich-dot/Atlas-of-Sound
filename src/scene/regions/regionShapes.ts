import { geoBounds, geoCentroid, geoContains, geoDistance } from 'd3-geo';
import { create } from 'zustand';
import { Vector3 } from 'three';
import type { Country, LonLat, RegionGeometry } from '../../data/types';
import { lonLatToVec3 } from '../utils/geo';

/** Radius at which region fills, borders and anchors sit above the globe. */
export const REGION_RADIUS = 1.0022;

/** Runtime info about a region's shape, derived once from its geometry. */
export interface RegionShape {
  regionId: string;
  index: number;
  feature: RegionGeometry['feature'];
  anchor: LonLat;
  anchorVec: Vector3;
  /** [minLon, minLat, maxLon, maxLat]; minLon > maxLon when crossing 180°. */
  bbox: [number, number, number, number];
  /** Angular radius in radians — used to size the camera zoom. */
  angularRadius: number;
}

export interface RegionShapes {
  list: RegionShape[];
  byId: Map<string, RegionShape>;
}

export function buildShapes(country: Country, geoms: RegionGeometry[]): RegionShapes {
  const list = geoms.map((g, index): RegionShape => {
    const region = country.regions.find((r) => r.id === g.regionId)!;
    const anchor = region.labelPoint ?? (geoCentroid(g.feature) as LonLat);
    const [[x0, y0], [x1, y1]] = geoBounds(g.feature);
    const corners: LonLat[] = [[x0, y0], [x1, y0], [x0, y1], [x1, y1]];
    // Alaska's Aleutians wrap the globe; cap it so the zoom stays sensible.
    const angularRadius = Math.min(0.28, Math.max(...corners.map((c) => geoDistance(anchor, c))));
    return {
      regionId: g.regionId,
      index,
      feature: g.feature,
      anchor,
      anchorVec: lonLatToVec3(anchor[0], anchor[1], REGION_RADIUS),
      bbox: [x0, y0, x1, y1],
      angularRadius,
    };
  });
  return { list, byId: new Map(list.map((s) => [s.regionId, s])) };
}

export function findRegionAt(shapes: RegionShapes, [lon, lat]: LonLat): RegionShape | null {
  for (const s of shapes.list) {
    const [x0, y0, x1, y1] = s.bbox;
    if (lat < y0 || lat > y1) continue;
    const inLon = x0 <= x1 ? lon >= x0 && lon <= x1 : lon >= x0 || lon <= x1;
    if (!inLon) continue;
    if (geoContains(s.feature, [lon, lat])) return s;
  }
  return null;
}

/** Loaded shapes for the active country, shared by scene and overlays. */
export const useShapes = create<{ shapes: RegionShapes | null }>(() => ({ shapes: null }));
