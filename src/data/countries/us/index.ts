import type { Country, DetailPatch } from '../../types';
import detailPatches from './geo/detailPatches.json';
import { US_ARTISTS } from './content/artists';
import { US_REGION_CONTENT } from './content/regions';
import { US_SCENES } from './content/scenes';
import { US_CITIES } from './geo/cities';
import { loadUsGeometry } from './geo/loadGeometry';
import { US_REGIONS } from './geo/regions';

export const unitedStates: Country = {
  id: 'us',
  name: { en: 'United States', pl: 'Stany Zjednoczone', ru: 'Соединённые Штаты' },
  camera: {
    center: [-97, 38.5],
    distance: 3.1,
    // Generous to the west so Alaska and Hawaii stay reachable.
    bounds: { west: 1.05, east: 0.5, north: 0.55, south: 0.45 },
  },
  regions: US_REGIONS,
  cities: US_CITIES,
  loadGeometry: loadUsGeometry,
  detailPatches: detailPatches as Record<string, DetailPatch>,
  content: { regions: US_REGION_CONTENT, artists: US_ARTISTS, scenes: US_SCENES },
};
