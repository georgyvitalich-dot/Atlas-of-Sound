import type { Artist, ArtistFacts, Country, Era, Genre, LonLat, MaybeLocalized, Scene, Source } from './types';
import { LOCALES, PLACE_RELATIONS, SCENE_LINKS, SOURCE_TYPES } from './types';

/**
 * Content validation + completeness report for one country.
 * Pure (no Node/DOM APIs) so it runs in the CLI (`npm run validate:data`,
 * `npm run content:report`) and inside the Vite plugin during dev/build.
 * Rules mirror CONTENT_GUIDELINES.md — keep them in sync.
 */

export type IssueLevel = 'error' | 'warning' | 'info';

export interface Issue {
  level: IssueLevel;
  /** What the issue is about, e.g. "artist us-mi/eminem" or "city us-ga-macon". */
  target: string;
  message: string;
  regionId?: string;
}

export interface StateReport {
  regionId: string;
  code: string;
  name: string;
  hasContent: boolean;
  artists: number;
  citiesTotal: number;
  citiesWithArtists: number;
  erasCovered: string[];
  erasMissing: string[];
  genresCovered: string[];
  genresMissing: string[];
  /** Count of artists per significance 1..5. */
  significance: Record<1 | 2 | 3 | 4 | 5, number>;
  status: 'empty' | 'started' | 'thin' | 'good';
  errors: number;
  warnings: number;
}

export interface ValidationResult {
  issues: Issue[];
  states: StateReport[];
  totals: { artists: number; cities: number; statesWithContent: number };
}

export interface ValidationOptions {
  genres: Genre[];
  eras: Era[];
  /** Optional geometry check: is this point inside the region's shape? */
  regionContains?: (regionId: string, point: LonLat) => boolean | undefined;
  currentYear?: number;
}

const ID_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const DATE_RE = /^(\d{4})(-(\d{2})-(\d{2}))?$/;
const LINK_HOSTS = ['open.spotify.com', 'www.youtube.com', 'youtube.com', 'music.youtube.com', 'youtu.be'];
const DESCRIPTION_MAX = 220;
/** Facts a source may support (plus track facts). Typed so a renamed field breaks the build. */
const FACT_KEYS: (keyof ArtistFacts | 'name' | 'featuredTrack' | 'eraTracks')[] = [
  'name', 'kind', 'born', 'formed', 'disbanded', 'activeFrom', 'activeTo', 'birthplace',
  'cityId', 'district', 'regionId', 'genres', 'places', 'featuredTrack', 'eraTracks',
];
const FACT_FIELDS = new Set<string>(FACT_KEYS);
/** Scene facts a source may support. */
const SCENE_FACT_KEYS: (keyof Scene)[] = ['name', 'cityIds', 'from', 'to', 'genres', 'artistIds'];
const SCENE_FACT_FIELDS = new Set<string>(SCENE_FACT_KEYS);

/** Thresholds used for the per-state status. */
export const COMPLETENESS = { thinArtists: 8, thinEras: 5 };

function isValidDate(s: string) {
  const m = DATE_RE.exec(s);
  if (!m) return false;
  if (!m[2]) return true;
  const d = new Date(`${s}T00:00:00Z`);
  return !Number.isNaN(d.getTime()) && d.toISOString().startsWith(s);
}

function missingLocales(text: MaybeLocalized | undefined): string[] {
  if (text === undefined) return [...LOCALES];
  if (typeof text === 'string') return text.trim() ? [] : [...LOCALES];
  return LOCALES.filter((l) => !text[l]?.trim());
}

const CYRILLIC = /[Ѐ-ӿ]/;

/**
 * Catches copy-paste slips in translations: Russian text without Cyrillic,
 * Cyrillic in the EN/PL fields, or a Polish text identical to the English one.
 */
function translationProblems(text: MaybeLocalized | undefined, requireDifferentPl = true): string[] {
  if (!text || typeof text === 'string') return [];
  const out: string[] = [];
  if (text.ru?.trim() && !CYRILLIC.test(text.ru)) out.push('ru has no Cyrillic — untranslated?');
  if (CYRILLIC.test(text.en ?? '')) out.push('en contains Cyrillic');
  if (CYRILLIC.test(text.pl ?? '')) out.push('pl contains Cyrillic');
  if (requireDifferentPl && text.pl?.trim() && text.pl.trim() === text.en?.trim()) out.push('pl is identical to en — untranslated?');
  return out;
}

/** Problems in a list of sources; `supports` may only name keys from `facts`. */
function sourceProblems(label: string, sources: Source[] | undefined, facts: Set<string>): string[] {
  const out: string[] = [];
  for (const [i, s] of (sources ?? []).entries()) {
    const sl = `${label}[${i}]`;
    if (!s.url?.trim() && !s.title?.trim()) out.push(`${sl} needs a url or a title`);
    if (s.url) {
      try {
        if (new URL(s.url).protocol !== 'https:') out.push(`${sl}.url must be https`);
      } catch {
        out.push(`${sl}.url "${s.url}" is not a valid URL`);
      }
    }
    if (s.type !== undefined && !(SOURCE_TYPES as readonly string[]).includes(s.type)) out.push(`${sl}.type "${s.type}" is unknown`);
    for (const f of s.supports ?? []) if (!facts.has(f)) out.push(`${sl}.supports "${f}" is not a fact field`);
  }
  return out;
}

function eraOf(year: number, eras: Era[]) {
  return eras.find((e) => year >= e.start && year <= e.end);
}

export function validateCountry(country: Country, opts: ValidationOptions): ValidationResult {
  const { genres, eras } = opts;
  const year = opts.currentYear ?? new Date().getFullYear();
  const issues: Issue[] = [];
  const add = (level: IssueLevel, target: string, message: string, regionId?: string) =>
    issues.push({ level, target, message, regionId });

  const regionById = new Map(country.regions.map((r) => [r.id, r]));
  const cityById = new Map(country.cities.map((c) => [c.id, c]));
  const genreIds = new Set(genres.map((g) => g.id));
  const eraById = new Map(eras.map((e) => [e.id as string, e]));

  // ── Registries ────────────────────────────────────────────────────────────
  const seenGenre = new Set<string>();
  for (const g of genres) {
    if (seenGenre.has(g.id)) add('error', `genre ${g.id}`, 'duplicate genre id');
    seenGenre.add(g.id);
    const miss = missingLocales(g.label);
    if (miss.length) add('error', `genre ${g.id}`, `label missing locales: ${miss.join(', ')}`);
  }
  for (const e of eras) {
    const miss = missingLocales(e.label);
    if (miss.length) add('error', `era ${e.id}`, `label missing locales: ${miss.join(', ')}`);
  }
  for (const r of country.regions) {
    const miss = missingLocales(r.name);
    if (miss.length) add('error', `region ${r.id}`, `name missing locales: ${miss.join(', ')}`, r.id);
  }

  // ── Cities ────────────────────────────────────────────────────────────────
  const seenCity = new Set<string>();
  for (const c of country.cities) {
    const t = `city ${c.id}`;
    if (seenCity.has(c.id)) add('error', t, 'duplicate city id', c.regionId);
    seenCity.add(c.id);
    if (!regionById.has(c.regionId)) add('error', t, `unknown regionId "${c.regionId}"`);
    if (!c.name?.trim()) add('error', t, 'empty name', c.regionId);
    const [lon, lat] = c.coords ?? [NaN, NaN];
    if (!(lon >= -180 && lon <= 180 && lat >= -90 && lat <= 90)) {
      add('error', t, `invalid coords [${c.coords}] — expected [lon, lat]`, c.regionId);
    } else if (opts.regionContains?.(c.regionId, c.coords) === false) {
      add('error', t, `coords [${lon}, ${lat}] fall outside ${c.regionId} — swapped lon/lat or wrong state?`, c.regionId);
    }
    if (!c.id.startsWith(`${c.regionId}-`)) add('warning', t, `id should start with "${c.regionId}-"`, c.regionId);
  }

  // ── Region content ────────────────────────────────────────────────────────
  const contentFor = new Set<string>();
  for (const rc of country.content.regions) {
    const t = `region content ${rc.regionId}`;
    if (!regionById.has(rc.regionId)) add('error', t, 'unknown regionId');
    if (contentFor.has(rc.regionId)) add('error', t, 'duplicate region content');
    contentFor.add(rc.regionId);
    const mt = missingLocales(rc.tagline);
    if (mt.length) add('error', t, `tagline missing locales: ${mt.join(', ')}`, rc.regionId);
    const ms = missingLocales(rc.summary);
    if (ms.length) add('error', t, `summary missing locales: ${ms.join(', ')}`, rc.regionId);
    for (const m of translationProblems(rc.summary)) add('warning', t, `summary: ${m}`, rc.regionId);
    for (const m of translationProblems(rc.tagline, false)) add('warning', t, `tagline: ${m}`, rc.regionId);
  }

  // ── Artists ───────────────────────────────────────────────────────────────
  const seenId = new Set<string>();
  const seenName = new Map<string, string>();
  const norm = (s: string) => s.toLowerCase().replace(/^the\s+/, '').replace(/[^a-z0-9]/g, '');

  for (const a of country.content.artists as Artist[]) {
    const t = `artist ${a.regionId}/${a.id}`;
    const r = a.regionId;
    const err = (m: string) => add('error', t, m, r);
    const warn = (m: string) => add('warning', t, m, r);

    if (!a.id || !ID_RE.test(a.id)) err(`id "${a.id}" must be kebab-case (a-z, 0-9, -)`);
    if (seenId.has(a.id)) err('duplicate artist id');
    seenId.add(a.id);
    if (!a.name?.trim()) err('empty name');
    else {
      const key = norm(a.name);
      const other = seenName.get(key);
      if (other) err(`duplicate artist — same name as "${other}" (one artist = one entry, see guidelines §8)`);
      seenName.set(key, a.id);
    }

    if (!regionById.has(a.regionId)) err(`unknown regionId "${a.regionId}"`);
    const city = cityById.get(a.cityId);
    if (!city) err(`unknown cityId "${a.cityId}" — add it to geo/cities.ts`);
    else if (city.regionId !== a.regionId) err(`city "${a.cityId}" belongs to ${city.regionId}, not ${a.regionId}`);
    if (a.district !== undefined && !a.district.trim()) err('empty district (omit the field instead)');

    if (a.kind !== 'person' && a.kind !== 'group') err(`kind must be "person" or "group"`);
    if (a.kind === 'person') {
      if (a.born === undefined) add('info', t, 'no birth date (allowed only when disputed — guidelines §4)', r);
      else if (!isValidDate(a.born)) err(`born "${a.born}" must be YYYY or a real YYYY-MM-DD date`);
      if (a.formed !== undefined) err('persons use "born", not "formed"');
    } else if (a.kind === 'group') {
      if (!a.formed || !Number.isInteger(a.formed) || a.formed < 1850 || a.formed > year) {
        err(`group needs a valid "formed" year (got ${a.formed})`);
      }
      if (a.born !== undefined) err('groups use "formed", not "born"');
    }
    if (!a.birthplace?.trim() && a.kind === 'person') warn('missing birthplace');

    if (!a.genres?.length) err('no genres');
    for (const g of a.genres ?? []) if (!genreIds.has(g)) err(`unknown genre "${g}"`);
    if (new Set(a.genres).size !== a.genres?.length) err('duplicate genre in list');
    if ((a.genres?.length ?? 0) > 3) warn('more than 3 genres — keep only the defining ones');

    if (!a.eras?.length) err('no eras');
    for (const e of a.eras ?? []) if (!eraById.has(e)) err(`unknown era "${e}"`);
    if (new Set(a.eras).size !== a.eras?.length) err('duplicate era in list');

    if (!Number.isInteger(a.significance) || a.significance < 1 || a.significance > 5) {
      err(`significance must be an integer 1–5 (got ${a.significance})`);
    }

    const miss = missingLocales(a.description);
    if (miss.length) err(`description missing locales: ${miss.join(', ')}`);
    for (const l of LOCALES) {
      const len = a.description?.[l]?.length ?? 0;
      if (len > DESCRIPTION_MAX) warn(`description.${l} is ${len} chars (max ${DESCRIPTION_MAX})`);
    }
    for (const m of translationProblems(a.description)) warn(`description: ${m}`);

    // Tracks
    const birthYear = a.kind === 'person' && a.born && isValidDate(a.born) ? Number(a.born.slice(0, 4)) : undefined;
    const startYear = a.kind === 'group' ? a.formed : birthYear;
    const checkTrack = (label: string, tr: Artist['featuredTrack'] | undefined) => {
      if (!tr || !tr.title?.trim()) return err(`${label}: missing title`);
      if (!Number.isInteger(tr.year) || tr.year < 1900 || tr.year > year) {
        return err(`${label} "${tr.title}": invalid year ${tr.year}`);
      }
      if (birthYear && tr.year < birthYear + 10) err(`${label} "${tr.title}" (${tr.year}) predates the artist's teens (born ${birthYear})`);
      if (a.kind === 'group' && startYear && tr.year < startYear) err(`${label} "${tr.title}" (${tr.year}) is before the group formed (${startYear})`);
    };
    checkTrack('featuredTrack', a.featuredTrack);
    for (const [era, tr] of Object.entries(a.eraTracks ?? {})) {
      if (!(a.eras as string[]).includes(era)) err(`eraTracks has ${era}, which is not in eras`);
      checkTrack(`eraTracks.${era}`, tr);
      const e = eraById.get(era);
      if (tr && e && (tr.year < e.start || tr.year > e.end)) err(`eraTracks.${era} "${tr.title}" is from ${tr.year}, outside the ${era}`);
    }
    if (a.featuredTrack) {
      const fe = eraOf(a.featuredTrack.year, eras);
      if (fe && !(a.eras as string[]).includes(fe.id)) {
        warn(`featuredTrack (${a.featuredTrack.year}) is from the ${fe.id}, which is not in eras`);
      }
      for (const era of a.eras ?? []) {
        const e = eraById.get(era);
        if (!e || a.eraTracks?.[era]) continue;
        if (a.featuredTrack.year < e.start || a.featuredTrack.year > e.end) {
          add('info', t, `${era} shows featuredTrack from ${a.featuredTrack.year} — add a verified eraTracks.${era} if one exists`, r);
        }
      }
    }
    if (startYear && a.eras?.length) {
      const first = eraById.get(a.eras[0]);
      if (first && first.end < startYear + (a.kind === 'person' ? 12 : 0)) {
        err(`era ${first.id} is before the artist could have been active (${a.kind === 'person' ? 'born' : 'formed'} ${startYear})`);
      }
    }

    // Links & images
    for (const [k, url] of Object.entries(a.links ?? {})) {
      if (!url) continue;
      try {
        const u = new URL(url);
        if (u.protocol !== 'https:' || !LINK_HOSTS.includes(u.hostname)) err(`links.${k} "${url}" is not a Spotify/YouTube https URL`);
      } catch {
        err(`links.${k} "${url}" is not a valid URL`);
      }
    }
    if (a.image) {
      if (!a.image.src?.trim()) err('image.src is empty');
      if (!a.image.credit?.trim() || !a.image.license?.trim()) err('image needs credit and license (guidelines §10)');
    }

    // Data Model 1.1 — optional facts, checked only when present (guidelines §13).
    const isYear = (v: unknown) => Number.isInteger(v) && (v as number) >= 1850 && (v as number) <= year;
    if (a.activeFrom !== undefined && !isYear(a.activeFrom)) err(`activeFrom must be a year 1850–${year} (got ${a.activeFrom})`);
    if (a.activeTo !== undefined && !isYear(a.activeTo)) err(`activeTo must be a year 1850–${year} (got ${a.activeTo})`);
    if (a.activeFrom !== undefined && a.activeTo !== undefined && a.activeFrom > a.activeTo) err(`activeFrom ${a.activeFrom} is after activeTo ${a.activeTo}`);
    if (birthYear && a.activeFrom !== undefined && a.activeFrom < birthYear + 10) warn(`activeFrom ${a.activeFrom} is before age 10 (born ${birthYear})`);
    if (a.kind === 'group' && a.formed && a.activeFrom !== undefined && a.activeFrom < a.formed) warn(`activeFrom ${a.activeFrom} is before the group formed (${a.formed})`);
    if (a.disbanded !== undefined) {
      if (a.kind !== 'group') err('only groups can have "disbanded"');
      else if (!isYear(a.disbanded)) err(`disbanded must be a year 1850–${year} (got ${a.disbanded})`);
      else if (a.formed && a.disbanded < a.formed) err(`disbanded ${a.disbanded} is before formed ${a.formed}`);
    }
    // Navigation eras should overlap the real active span, when that span is known.
    if (a.activeFrom !== undefined) {
      const spanEnd = a.activeTo ?? year;
      for (const era of a.eras ?? []) {
        const e = eraById.get(era);
        if (e && (e.end < a.activeFrom || e.start > spanEnd)) warn(`era ${era} lies outside the active span ${a.activeFrom}–${a.activeTo ?? 'now'}`);
      }
    }

    const checkSources = (label: string, sources: Source[] | undefined) =>
      sourceProblems(label, sources, FACT_FIELDS).forEach(err);
    checkSources('sources', a.sources);

    const seenPlace = new Set<string>();
    for (const [i, p] of (a.places ?? []).entries()) {
      const pl = `places[${i}]`;
      if (!(PLACE_RELATIONS as readonly string[]).includes(p.kind)) err(`${pl}.kind "${p.kind}" is unknown`);
      if (!p.cityId && !p.place?.trim()) err(`${pl} needs a cityId or a place`);
      if (p.cityId && p.place) err(`${pl} has both cityId and place — use one`);
      if (p.cityId && !cityById.has(p.cityId)) err(`${pl}: unknown cityId "${p.cityId}"`);
      if (p.kind === 'bornIn' && a.kind === 'group') err(`${pl}: groups are not born — use formedIn`);
      if (p.kind === 'formedIn' && a.kind === 'person') err(`${pl}: persons are not formed — use bornIn`);
      if (p.from !== undefined && !isYear(p.from)) err(`${pl}.from must be a year 1850–${year}`);
      if (p.to !== undefined && !isYear(p.to)) err(`${pl}.to must be a year 1850–${year}`);
      if (p.from !== undefined && p.to !== undefined && p.from > p.to) err(`${pl}: from ${p.from} is after to ${p.to}`);
      const key = `${p.kind}|${p.cityId ?? p.place}`;
      if (seenPlace.has(key)) warn(`${pl} repeats an earlier ${p.kind} relation`);
      seenPlace.add(key);
      checkSources(`${pl}.sources`, p.sources);
    }
    if ((a.places ?? []).filter((p) => p.kind === 'bornIn').length > 1) err('more than one bornIn relation');
  }

  // ── Scenes (guidelines §14) ───────────────────────────────────────────────
  const scenes = country.content.scenes ?? [];
  const sceneIds = new Set<string>();
  const artistById = new Map(country.content.artists.map((a) => [a.id, a]));
  for (const s of scenes) {
    const t = `scene ${s.id}`;
    const err = (m: string) => add('error', t, m);
    const warn = (m: string) => add('warning', t, m);

    if (!s.id || !ID_RE.test(s.id)) err(`id "${s.id}" must be kebab-case (a-z, 0-9, -)`);
    if (sceneIds.has(s.id)) err('duplicate scene id');
    sceneIds.add(s.id);

    for (const [field, text, differentPl] of [['name', s.name, false], ['description', s.description, true]] as const) {
      const miss = missingLocales(text);
      if (miss.length) err(`${field} missing locales: ${miss.join(', ')}`);
      for (const m of translationProblems(text, differentPl)) warn(`${field}: ${m}`);
    }
    for (const l of LOCALES) {
      const len = s.description?.[l]?.length ?? 0;
      if (len > DESCRIPTION_MAX) warn(`description.${l} is ${len} chars (max ${DESCRIPTION_MAX})`);
    }

    if (!s.cityIds?.length) err('scene has no cities');
    for (const id of s.cityIds ?? []) if (!cityById.has(id)) err(`unknown cityId "${id}"`);
    if (new Set(s.cityIds).size !== s.cityIds?.length) err('duplicate city in cityIds');

    if (!s.eras?.length) err('no eras');
    for (const e of s.eras ?? []) if (!eraById.has(e)) err(`unknown era "${e}"`);
    for (const g of s.genres ?? []) if (!genreIds.has(g)) err(`unknown genre "${g}"`);
    if (!s.genres?.length) err('no genres');

    const inRange = (v: unknown) => Number.isInteger(v) && (v as number) >= 1850 && (v as number) <= year;
    if (s.from !== undefined && !inRange(s.from)) err(`from must be a year 1850–${year} (got ${s.from})`);
    if (s.to !== undefined && !inRange(s.to)) err(`to must be a year 1850–${year} (got ${s.to})`);
    if (s.from !== undefined && s.to !== undefined && s.from > s.to) err(`from ${s.from} is after to ${s.to}`);
    sourceProblems('sources', s.sources, SCENE_FACT_FIELDS).forEach(err);

    if (!s.artistIds?.length) err('scene has no artists');
    else if (s.artistIds.length < 2) warn(`only ${s.artistIds.length} artist — a scene needs at least 2`);
    if (new Set(s.artistIds).size !== s.artistIds?.length) err('duplicate artist in artistIds');
    for (const id of s.artistIds ?? []) {
      const a = artistById.get(id);
      if (!a) {
        err(`unknown artistId "${id}"`);
        continue;
      }
      if (!a.eras.some((e) => s.eras.includes(e))) warn(`${id} shares no era with the scene`);
      if (!s.cityIds.includes(a.cityId)) warn(`${id} is based in ${a.cityId}, which is not one of the scene's cities`);
      if (!a.genres.some((g) => s.genres.includes(g))) warn(`${id} has none of the scene's genres`);
    }
  }
  // Links are checked once every scene id is known. A link is read from both
  // ends, so the same pair must be stored only once (in either direction).
  const linkedPairs = new Set<string>();
  for (const s of scenes) {
    for (const [i, link] of (s.related ?? []).entries()) {
      const t = `scene ${s.id}`;
      if (!(SCENE_LINKS as readonly string[]).includes(link.kind)) add('error', t, `related[${i}].kind "${link.kind}" is unknown`);
      if (link.sceneId === s.id) add('error', t, `related[${i}] points to the scene itself`);
      else if (!sceneIds.has(link.sceneId)) add('error', t, `related[${i}]: unknown scene "${link.sceneId}"`);
      const pair = [s.id, link.sceneId].sort().join('|');
      if (linkedPairs.has(pair)) add('warning', t, `related[${i}]: ${link.sceneId} is already linked with this scene`);
      linkedPairs.add(pair);
    }
  }

  // ── Cross-checks & per-state report ───────────────────────────────────────
  const byRegion = new Map<string, Artist[]>();
  for (const a of country.content.artists) {
    const list = byRegion.get(a.regionId) ?? [];
    list.push(a);
    byRegion.set(a.regionId, list);
  }
  for (const [regionId] of byRegion) {
    if (!contentFor.has(regionId)) add('error', `region ${regionId}`, 'has artists but no region content (tagline/summary)', regionId);
  }
  for (const c of country.cities) {
    if (!country.content.artists.some((a) => a.cityId === c.id)) add('warning', `city ${c.id}`, 'no artists reference this city', c.regionId);
  }

  const states: StateReport[] = country.regions.map((region) => {
    const list = byRegion.get(region.id) ?? [];
    const cities = country.cities.filter((c) => c.regionId === region.id);
    const erasCovered = eras.filter((e) => list.some((a) => (a.eras as string[]).includes(e.id))).map((e) => e.id as string);
    const genresCovered = genres.filter((g) => list.some((a) => a.genres.includes(g.id))).map((g) => g.id);
    const sig = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 } as StateReport['significance'];
    for (const a of list) if (a.significance >= 1 && a.significance <= 5) sig[a.significance as 1]++;
    const hasContent = contentFor.has(region.id);

    if (list.length >= 5 && sig[5] / list.length > 0.45) {
      add('warning', `region ${region.id}`, `${sig[5]} of ${list.length} artists are significance 5 — reserve 5 for canonical figures`, region.id);
    }
    if (hasContent && list.length > 0 && list.length < 3) {
      add('warning', `region ${region.id}`, `only ${list.length} artists — hover previews will look thin`, region.id);
    }

    const status: StateReport['status'] =
      !hasContent && list.length === 0
        ? 'empty'
        : list.length < 3
          ? 'started'
          : list.length < COMPLETENESS.thinArtists || erasCovered.length < COMPLETENESS.thinEras
            ? 'thin'
            : 'good';

    const regionIssues = issues.filter((i) => i.regionId === region.id);
    return {
      regionId: region.id,
      code: region.code,
      name: typeof region.name === 'string' ? region.name : region.name.en,
      hasContent,
      artists: list.length,
      citiesTotal: cities.length,
      citiesWithArtists: cities.filter((c) => list.some((a) => a.cityId === c.id)).length,
      erasCovered,
      erasMissing: eras.map((e) => e.id as string).filter((e) => !erasCovered.includes(e)),
      genresCovered,
      genresMissing: genres.map((g) => g.id).filter((g) => !genresCovered.includes(g)),
      significance: sig,
      status,
      errors: regionIssues.filter((i) => i.level === 'error').length,
      warnings: regionIssues.filter((i) => i.level === 'warning').length,
    };
  });

  return {
    issues,
    states,
    totals: {
      artists: country.content.artists.length,
      cities: country.cities.length,
      statesWithContent: contentFor.size,
    },
  };
}
