import type { Artist, Country, EraId, Genre, GenreId, Scene, SceneLinkKind, Track } from './types';

/**
 * Pure query functions over a country's data. UI components call these
 * instead of filtering raw arrays themselves.
 */

export interface ArtistQuery {
  regionId: string;
  eraId: EraId;
  genres: GenreId[]; // empty = all genres
}

/** Empty genre list = all genres. */
export const matchesGenres = (a: Artist, genres: GenreId[]) =>
  genres.length === 0 || a.genres.some((g) => genres.includes(g));

export function queryArtists(country: Country, q: ArtistQuery): Artist[] {
  return country.content.artists
    .filter((a) => a.regionId === q.regionId && a.eras.includes(q.eraId) && matchesGenres(a, q.genres))
    .sort((a, b) => b.significance - a.significance);
}

/** How many artists each region has for an era + genre slice (the globe's "musical picture"). */
export function regionPresence(country: Country, eraId: EraId, genres: GenreId[]): Map<string, number> {
  const counts = new Map<string, number>();
  for (const a of country.content.artists) {
    if (a.eras.includes(eraId) && matchesGenres(a, genres)) counts.set(a.regionId, (counts.get(a.regionId) ?? 0) + 1);
  }
  return counts;
}

export const topArtists = (country: Country, q: ArtistQuery, limit = 3) =>
  queryArtists(country, q).slice(0, limit);

export const regionHasContent = (country: Country, regionId: string) =>
  country.content.regions.some((r) => r.regionId === regionId);

export const getRegion = (country: Country, regionId: string) =>
  country.regions.find((r) => r.id === regionId);

export const getRegionContent = (country: Country, regionId: string) =>
  country.content.regions.find((r) => r.regionId === regionId);

export const getCity = (country: Country, cityId: string) =>
  country.cities.find((c) => c.id === cityId);

export const trackForEra = (artist: Artist, eraId: EraId): Track =>
  artist.eraTracks?.[eraId] ?? artist.featuredTrack;

export const regionArtists = (country: Country, regionId: string) =>
  country.content.artists.filter((a) => a.regionId === regionId);

/**
 * Eras in which a region has artists — optionally only for some genres and/or
 * one city. Drives the "through the decades" strip in Explore.
 */
export function regionEraCoverage(
  country: Country,
  regionId: string,
  filter: { genres?: GenreId[]; cityId?: string | null } = {},
): Set<EraId> {
  const list = regionArtists(country, regionId).filter(
    (a) => matchesGenres(a, filter.genres ?? []) && (!filter.cityId || a.cityId === filter.cityId),
  );
  return new Set(list.flatMap((a) => a.eras));
}

/**
 * Genres that actually occur in a country's artists, in the shared dictionary's
 * order — so filters never offer a genre the active country has no one for.
 */
export function countryGenres(country: Country, dictionary: Genre[]): Genre[] {
  const used = new Set(country.content.artists.flatMap((a) => a.genres));
  return dictionary.filter((g) => used.has(g.id));
}

/** Eras in which the whole country has artists for these genres (globe-level "Found in"). */
export function countryEraCoverage(country: Country, genres: GenreId[]): Set<EraId> {
  return new Set(country.content.artists.filter((a) => matchesGenres(a, genres)).flatMap((a) => a.eras));
}

// ─── Scenes ─────────────────────────────────────────────────────────────────

export const countryScenes = (country: Country): Scene[] => country.content.scenes ?? [];

export const getScene = (country: Country, id: string) => countryScenes(country).find((s) => s.id === id);

/** Scenes touching a region through any of their cities, optionally narrowed to an era and genres. */
export function scenesForRegion(
  country: Country,
  regionId: string,
  options: { eraId?: EraId; genres?: GenreId[] } = {},
): Scene[] {
  const { eraId, genres = [] } = options;
  return countryScenes(country).filter(
    (s) =>
      s.cityIds.some((id) => getCity(country, id)?.regionId === regionId) &&
      (!eraId || s.eras.includes(eraId)) &&
      (genres.length === 0 || s.genres.some((g) => genres.includes(g))),
  );
}

export const scenesForCity = (country: Country, cityId: string) =>
  countryScenes(country).filter((s) => s.cityIds.includes(cityId));

export const artistScenes = (country: Country, artistId: string) =>
  countryScenes(country).filter((s) => s.artistIds.includes(artistId));

/**
 * How a connected scene relates to the one being explored. A link is stored once,
 * on its source scene, and read from both ends: "influenced" becomes
 * "influencedBy" and "evolvedInto" becomes "grewOutOf" when seen from the target.
 */
export type SceneConnectionKind = SceneLinkKind | 'influencedBy' | 'grewOutOf';

export interface SceneConnection {
  scene: Scene;
  kind: SceneConnectionKind;
}

const INCOMING: Record<SceneLinkKind, SceneConnectionKind> = {
  influenced: 'influencedBy',
  evolvedInto: 'grewOutOf',
  contemporaryOf: 'contemporaryOf',
};

/** Editorial links of a scene in both directions; roots first, then offspring, then contemporaries. */
export function sceneConnections(country: Country, scene: Scene): SceneConnection[] {
  const out: SceneConnection[] = [];
  for (const link of scene.related ?? []) {
    const target = getScene(country, link.sceneId);
    if (target) out.push({ scene: target, kind: link.kind });
  }
  for (const other of countryScenes(country)) {
    for (const link of other.related ?? []) {
      if (link.sceneId === scene.id) out.push({ scene: other, kind: INCOMING[link.kind] });
    }
  }
  const order: SceneConnectionKind[] = ['grewOutOf', 'influencedBy', 'evolvedInto', 'influenced', 'contemporaryOf'];
  return out.sort((a, b) => order.indexOf(a.kind) - order.indexOf(b.kind));
}

/** The region a scene is entered from: the region of its first city. */
export const sceneHomeRegion = (country: Country, scene: Scene) => getCity(country, scene.cityIds[0])?.regionId;

/** A scene's artists in editorial order, optionally only those active in an era. */
export function sceneArtists(country: Country, scene: Scene, eraId?: EraId): Artist[] {
  const byId = new Map(country.content.artists.map((a) => [a.id, a]));
  return scene.artistIds
    .map((id) => byId.get(id))
    .filter((a): a is Artist => !!a && (!eraId || a.eras.includes(eraId)));
}

export interface CityProfile {
  artists: number;
  /** Most frequent genres among the city's artists (max 3). */
  genres: GenreId[];
  /** First and last era with artists from this city. */
  firstEra?: EraId;
  lastEra?: EraId;
}

/** Derived, always-in-sync summary of what a city contributed (no extra content needed). */
export function cityProfile(country: Country, cityId: string, eraOrder: EraId[]): CityProfile {
  const list = country.content.artists.filter((a) => a.cityId === cityId);
  const freq = new Map<GenreId, number>();
  for (const a of list) for (const g of a.genres) freq.set(g, (freq.get(g) ?? 0) + 1);
  const genres = [...freq.entries()].sort((a, b) => b[1] - a[1]).slice(0, 3).map(([g]) => g);
  const eras = eraOrder.filter((e) => list.some((a) => a.eras.includes(e)));
  return { artists: list.length, genres, firstEra: eras[0], lastEra: eras[eras.length - 1] };
}

/** Distinct genres present in a set of artists, in first-seen order. */
export const genresOf = (artists: Artist[]): GenreId[] => [
  ...new Set(artists.flatMap((a) => a.genres)),
];

/** Year shown on cards: birth year for people, formation year for groups. */
export function artistYear(a: Artist): number | undefined {
  const year = a.kind === 'group' ? a.formed : a.born ? Number(a.born.slice(0, 4)) : undefined;
  // Guards against malformed dates ("c. 1917") rendering as "b. NaN".
  return year !== undefined && Number.isFinite(year) ? year : undefined;
}
