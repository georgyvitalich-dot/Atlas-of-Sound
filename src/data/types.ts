/**
 * Core domain model of the atlas.
 *
 * Geography (regions, cities, geometry) and music content (artists, taglines)
 * are deliberately separate — they are joined only by string ids like `us-mi`.
 * Adding a new country means adding a new folder under `countries/`,
 * not touching the scene or UI.
 */

export type Locale = 'en' | 'pl' | 'ru';
export const LOCALES: Locale[] = ['en', 'pl', 'ru'];

/** Text that exists in every supported language. */
export type LocalizedText = Record<Locale, string>;

/** Proper names may stay untranslated; use a plain string then. */
export type MaybeLocalized = string | LocalizedText;

export type EraId =
  | '1940s' | '1950s' | '1960s' | '1970s' | '1980s'
  | '1990s' | '2000s' | '2010s' | '2020s';

export interface Era {
  id: EraId;
  start: number;
  end: number;
  label: LocalizedText;
}

export type GenreId = string;

export interface Genre {
  id: GenreId;
  label: LocalizedText;
  /** Accent used for monograms and subtle chips. */
  color: string;
}

// ─── Geography ──────────────────────────────────────────────────────────────

export type LonLat = [lon: number, lat: number];

export interface Region {
  id: string;           // 'us-mi'
  countryId: string;    // 'us'
  /** Key that links to the geometry source (FIPS code for US states). */
  geoKey: string;
  code: string;         // 'MI'
  name: MaybeLocalized;
  /** Where cards and the camera anchor. Falls back to the geometric centroid. */
  labelPoint?: LonLat;
}

export interface City {
  id: string;           // 'us-mi-detroit'
  regionId: string;
  name: string;
  coords: LonLat;
}

/** Geometry for one region, independent of where it was loaded from. */
export interface RegionGeometry {
  regionId: string;
  feature: GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.MultiPolygon>;
}

export interface CountryGeometry {
  regions: RegionGeometry[];
  /** All region borders as lines, each shared border drawn once. */
  borders: GeoJSON.MultiLineString;
}

export interface CountryCamera {
  /** Point the globe view centers on. */
  center: LonLat;
  /** Camera distance from the globe center (globe radius = 1). */
  distance: number;
  /** Soft limits (radians) around the center, west/east/north/south. */
  bounds: { west: number; east: number; north: number; south: number };
}

/** An equirectangular texture covering a lon/lat box (built by scripts/build-textures.mjs). */
export interface DetailTexture {
  url: string;
  west: number;
  south: number;
  east: number;
  north: number;
  width: number;
  height: number;
}

/** High-resolution surface for one region, loaded only while that region is explored. */
export interface DetailPatch {
  day: DetailTexture;
  /** Relief normals (R,G) + water mask (B). */
  terrain: DetailTexture;
}

export interface Country {
  id: string;
  name: LocalizedText;
  camera: CountryCamera;
  regions: Region[];
  cities: City[];
  /** Lazily loads region shapes — each country can use its own source. */
  loadGeometry: () => Promise<CountryGeometry>;
  /** Optional close-up surface detail per region id. */
  detailPatches?: Record<string, DetailPatch>;
  content: CountryContent;
}

// ─── Music content ──────────────────────────────────────────────────────────
//
// Content is split into FACTS (verifiable, may carry sources) and EDITORIAL
// choices (our wording and curation). Eras are neither: they are the atlas's
// navigation categories and stay separate from real dates.

export interface Track {
  title: string;
  /** Original release year (a fact). */
  year: number;
}

export interface ArtistImage {
  src: string;
  credit: string;
  license: string;
}

export const SOURCE_TYPES = ['encyclopedia', 'official', 'discography', 'press', 'book', 'other'] as const;
export type SourceType = (typeof SOURCE_TYPES)[number];

/** Where a fact comes from. Needs a url or a title; everything else is optional. */
export interface Source {
  url?: string;
  title?: string;
  type?: SourceType;
  /** Which facts of the record this source supports, e.g. ['born', 'activeFrom']. */
  supports?: string[];
}

/**
 * How an artist relates to a place beyond the primary `cityId`.
 * bornIn / formedIn — where a person was born / a group was formed;
 * basedIn — lived and worked there; activeIn — a notable scene or period there;
 * associatedWith — a documented link that fits none of the above.
 */
export const PLACE_RELATIONS = ['bornIn', 'formedIn', 'basedIn', 'activeIn', 'associatedWith'] as const;
export type PlaceRelationKind = (typeof PLACE_RELATIONS)[number];

export interface PlaceRelation {
  kind: PlaceRelationKind;
  /** A city of this atlas… */
  cityId?: string;
  /** …or a free-text place outside it, e.g. "Liverpool, England". One of the two is required. */
  place?: string;
  from?: number;
  to?: number;
  sources?: Source[];
}

/** Verifiable facts. Everything optional here is left empty when unknown — never guessed. */
export interface ArtistFacts {
  kind: 'person' | 'group';
  /** People: ISO date or year of birth. */
  born?: string;
  /** Groups: formation year. */
  formed?: number;
  /** Groups: year the group (first) split up. */
  disbanded?: number;
  /** First and last year of musical activity; no `activeTo` = still active or unknown. */
  activeFrom?: number;
  activeTo?: number;
  /** Human-readable place of birth, e.g. "Tupelo, Mississippi". */
  birthplace?: string;
  /** Primary city: where the artist's music was formed (see CONTENT_GUIDELINES §3). */
  cityId: string;
  /** Optional finer location, e.g. a borough or neighbourhood. */
  district?: string;
  regionId: string;
  genres: GenreId[];
  /** Further documented place links; the primary `cityId` is not repeated here. */
  places?: PlaceRelation[];
  sources?: Source[];
}

/** Our curation and wording on top of the facts. */
export interface ArtistEditorial {
  /** Navigation eras the artist appears in (not factual dates). */
  eras: EraId[];
  /** 1–5, used to pick the top artists for previews. */
  significance: number;
  featuredTrack: Track;
  /** Era-specific highlight overriding featuredTrack. */
  eraTracks?: Partial<Record<EraId, Track>>;
  description: LocalizedText;
  image?: ArtistImage;
  links?: { spotify?: string; youtube?: string };
}

export interface Artist extends ArtistFacts, ArtistEditorial {
  id: string;
  name: string;
}

/** Editorial text about a region. */
export interface RegionContent {
  regionId: string;
  tagline: LocalizedText;
  summary: LocalizedText;
}

export const SCENE_LINKS = ['influenced', 'evolvedInto', 'contemporaryOf'] as const;
export type SceneLinkKind = (typeof SCENE_LINKS)[number];

/** Directed link: this scene → `sceneId`. */
export interface SceneLink {
  sceneId: string;
  kind: SceneLinkKind;
}

/**
 * A musical scene: an editorial grouping of artists around places and a period.
 * Membership is explicit (`artistIds`), never derived from city + genre + era —
 * e.g. Detroit soul of the 1960s is not the same thing as Motown.
 */
export interface Scene {
  id: string;
  name: LocalizedText;
  /** One or more atlas cities; regions follow from the cities. */
  cityIds: string[];
  /** Navigation eras the scene appears in. */
  eras: EraId[];
  /** Factual span in years, only when verified. */
  from?: number;
  to?: number;
  genres: GenreId[];
  /** Editorial membership, in display order. Only artists of this dataset. */
  artistIds: string[];
  description: LocalizedText;
  related?: SceneLink[];
  sources?: Source[];
}

export interface CountryContent {
  regions: RegionContent[];
  artists: Artist[];
  /** Optional: a country without scenes works exactly as before. */
  scenes?: Scene[];
}
