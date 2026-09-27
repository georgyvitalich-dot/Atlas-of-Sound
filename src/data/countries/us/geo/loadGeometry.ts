import { feature, mesh } from 'topojson-client';
import type { GeometryCollection, Topology } from 'topojson-specification';
import statesUrl from 'us-atlas/states-10m.json?url';
import type { CountryGeometry, RegionGeometry } from '../../../types';
import { US_REGIONS } from './regions';

/**
 * US state shapes from us-atlas (U.S. Census Bureau cartographic boundaries,
 * public domain). Loaded as a separate file so it doesn't bloat the JS bundle.
 */
export async function loadUsGeometry(): Promise<CountryGeometry> {
  const topo = (await fetch(statesUrl).then((r) => r.json())) as Topology;
  const states = topo.objects.states as GeometryCollection;
  const fc = feature(topo, states) as GeoJSON.FeatureCollection<
    GeoJSON.Polygon | GeoJSON.MultiPolygon
  >;
  const byFips = new Map(fc.features.map((f) => [String(f.id), f]));
  const known = new Set(US_REGIONS.map((r) => r.geoKey));

  const regions: RegionGeometry[] = US_REGIONS.flatMap((region) => {
    const f = byFips.get(region.geoKey);
    return f ? [{ regionId: region.id, feature: f }] : [];
  });

  // Only borders touching the 50 states (drops territories like Puerto Rico).
  const borders = mesh(topo, states, (a, b) =>
    known.has(String(a.id)) || known.has(String(b.id)),
  );

  return { regions, borders };
}
