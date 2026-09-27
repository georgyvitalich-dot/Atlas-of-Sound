// Self-test for src/data/validation.ts: feeds deliberately broken data and
// checks that each problem is reported. Run: npm run validate:selftest
import { ERAS } from '../src/data/eras';
import { GENRES } from '../src/data/genres';
import type { Artist, Country, Scene } from '../src/data/types';
import { validateCountry } from '../src/data/validation';

const base: Artist = {
  id: 'ok-artist', name: 'OK Artist', kind: 'person', born: '1950-01-01', birthplace: 'X',
  cityId: 'xx-a-city', regionId: 'xx-a', genres: ['soul'], eras: ['1970s'], significance: 3,
  featuredTrack: { title: 'Song', year: 1972 },
  description: { en: 'Fine.', pl: 'Dobrze.', ru: 'Хорошо.' },
};
const bad = (patch: Partial<Artist>, id: string): Artist => ({ ...base, ...patch, id, name: id });

// Data Model 1.1: a record using every optional fact must pass cleanly.
const full: Artist = {
  ...base, id: 'full-group', name: 'Full Group', kind: 'group', born: undefined, birthplace: undefined,
  formed: 1968, disbanded: 1980, activeFrom: 1968, activeTo: 1980,
  places: [
    { kind: 'formedIn', cityId: 'xx-a-city', from: 1968 },
    { kind: 'activeIn', place: 'Elsewhere, Abroad', from: 1972, to: 1974, sources: [{ title: 'A book', type: 'book' }] },
  ],
  sources: [{ url: 'https://example.org/full-group', type: 'encyclopedia', supports: ['formed', 'disbanded', 'places'] }],
};

// Scenes (§14): one clean scene plus one broken scene per rule.
const text = { en: 'A scene.', pl: 'Scena.', ru: 'Сцена.' };
const goodScene: Scene = {
  id: 'xx-good-scene', name: { en: 'Good', pl: 'Dobra', ru: 'Хорошая' }, cityIds: ['xx-a-city'],
  eras: ['1970s'], from: 1968, to: 1979, genres: ['soul'], artistIds: ['ok-artist', 'full-group'],
  description: text, related: [{ sceneId: 'xx-thin-scene', kind: 'influenced' }],
  sources: [{ title: 'A book', supports: ['from', 'artistIds'] }],
};
const scene = (patch: Partial<Scene>, id: string): Scene => ({ ...goodScene, related: undefined, ...patch, id });

const country = {
  id: 'xx',
  name: { en: 'Test', pl: 'Test', ru: 'Тест' },
  camera: { center: [0, 0], distance: 3, bounds: { west: 1, east: 1, north: 1, south: 1 } },
  regions: [
    { id: 'xx-a', countryId: 'xx', geoKey: '1', code: 'A', name: { en: 'A', pl: 'A', ru: 'А' } },
    { id: 'xx-b', countryId: 'xx', geoKey: '2', code: 'B', name: { en: 'B', pl: '', ru: 'Б' } },
  ],
  cities: [
    { id: 'xx-a-city', regionId: 'xx-a', name: 'City', coords: [10, 10] },
    { id: 'xx-b-city', regionId: 'xx-b', name: 'Other', coords: [95, 10] },
  ],
  loadGeometry: async () => ({ regions: [], borders: { type: 'MultiLineString', coordinates: [] } }),
  content: {
    regions: [{ regionId: 'xx-a', tagline: { en: 'T', pl: 'T', ru: '' }, summary: { en: 'S', pl: 'S', ru: 'S' } }],
    artists: [
      base,
      bad({ regionId: 'xx-zz' }, 'bad-region'),
      bad({ cityId: 'nope' }, 'bad-city'),
      bad({ cityId: 'xx-b-city' }, 'city-in-other-state'),
      bad({ genres: ['polka'] }, 'bad-genre'),
      bad({ eras: ['1930s' as never] }, 'bad-era'),
      bad({ description: { en: 'x', pl: '', ru: 'x' } }, 'missing-locale'),
      bad({ born: '1950-02-30' }, 'bad-date'),
      bad({ featuredTrack: { title: '', year: 1972 } }, 'empty-track'),
      bad({ featuredTrack: { title: 'Early', year: 1955 } }, 'track-before-teens'),
      bad({ eraTracks: { '1980s': { title: 'Wrong era', year: 1985 } } }, 'eratrack-not-in-eras'),
      bad({ eras: ['1970s', '1980s'], eraTracks: { '1980s': { title: 'Off', year: 1979 } } }, 'eratrack-outside-era'),
      bad({ significance: 7 }, 'bad-significance'),
      bad({ links: { spotify: 'http://example.com/x' } }, 'bad-link'),
      bad({ kind: 'group', born: undefined }, 'group-without-formed'),
      { ...base, name: 'The OK Artist', id: 'dup-name' },
      { ...base },
      full,
      bad({ activeFrom: 1980, activeTo: 1975 }, 'active-reversed'),
      bad({ disbanded: 1990 }, 'person-disbanded'),
      bad({ places: [{ kind: 'basedIn', cityId: 'nowhere' }] }, 'place-bad-city'),
      bad({ places: [{ kind: 'basedIn' }] }, 'place-empty'),
      bad({ places: [{ kind: 'formedIn', cityId: 'xx-a-city' }] }, 'person-formed-in'),
      bad({ places: [{ kind: 'movedTo' as never, place: 'X' }] }, 'place-bad-kind'),
      bad({ sources: [{ type: 'press' }] }, 'source-empty'),
      bad({ sources: [{ url: 'http://example.org' }] }, 'source-http'),
      bad({ sources: [{ title: 'T', supports: ['description'] }] }, 'source-editorial-field'),
    ],
    scenes: [
      goodScene,
      scene({}, 'xx-dup-scene'),
      scene({}, 'xx-dup-scene'),
      scene({ cityIds: ['nowhere-city'] }, 'xx-scene-bad-city'),
      scene({ artistIds: ['ok-artist', 'ghost'] }, 'xx-scene-bad-artist'),
      scene({ genres: ['polka'] }, 'xx-scene-bad-genre'),
      scene({ eras: ['1930s' as never] }, 'xx-scene-bad-era'),
      scene({ related: [{ sceneId: 'nowhere', kind: 'influenced' }] }, 'xx-scene-broken-link'),
      scene({ related: [{ sceneId: 'xx-scene-self', kind: 'evolvedInto' }] }, 'xx-scene-self'),
      scene({ description: { en: 'x', pl: '', ru: 'х' } }, 'xx-scene-missing-locale'),
      scene({ cityIds: [] }, 'xx-scene-no-city'),
      scene({ artistIds: [] }, 'xx-scene-no-artists'),
      scene({ artistIds: ['ok-artist'] }, 'xx-thin-scene'),
      scene({ eras: ['1990s'] }, 'xx-scene-no-common-era'),
      scene({ cityIds: ['xx-b-city'] }, 'xx-scene-other-city'),
      scene({ genres: ['rock'] }, 'xx-scene-no-common-genre'),
      scene(
        {
          related: [
            { sceneId: 'xx-scene-no-city', kind: 'influenced' },
            { sceneId: 'xx-scene-no-city', kind: 'contemporaryOf' },
          ],
        },
        'xx-scene-double-link',
      ),
    ],
  },
} as unknown as Country;

const expected: [string, RegExp][] = [
  ['bad-region', /unknown regionId/],
  ['bad-city', /unknown cityId/],
  ['city-in-other-state', /belongs to xx-b/],
  ['bad-genre', /unknown genre/],
  ['bad-era', /unknown era/],
  ['missing-locale', /description missing locales: pl/],
  ['bad-date', /real YYYY-MM-DD/],
  ['empty-track', /missing title/],
  ['track-before-teens', /predates/],
  ['eratrack-not-in-eras', /not in eras/],
  ['eratrack-outside-era', /outside the 1980s/],
  ['bad-significance', /significance/],
  ['bad-link', /not a Spotify\/YouTube/],
  ['group-without-formed', /formed/],
  ['dup-name', /duplicate artist/],
  ['ok-artist', /duplicate artist id/],
  ['region xx-b', /name missing locales: pl/],
  ['region content xx-a', /tagline missing locales: ru/],
  ['city xx-b-city', /fall outside/],
  ['active-reversed', /is after activeTo/],
  ['person-disbanded', /only groups/],
  ['place-bad-city', /unknown cityId "nowhere"/],
  ['place-empty', /needs a cityId or a place/],
  ['person-formed-in', /persons are not formed/],
  ['place-bad-kind', /kind "movedTo" is unknown/],
  ['source-empty', /needs a url or a title/],
  ['source-http', /must be https/],
  ['source-editorial-field', /not a fact field/],
  ['scene xx-dup-scene', /duplicate scene id/],
  ['scene xx-scene-bad-city', /unknown cityId "nowhere-city"/],
  ['scene xx-scene-bad-artist', /unknown artistId "ghost"/],
  ['scene xx-scene-bad-genre', /unknown genre "polka"/],
  ['scene xx-scene-bad-era', /unknown era "1930s"/],
  ['scene xx-scene-broken-link', /unknown scene "nowhere"/],
  ['scene xx-scene-self', /points to the scene itself/],
  ['scene xx-scene-missing-locale', /description missing locales: pl/],
  ['scene xx-scene-no-city', /no cities/],
  ['scene xx-scene-no-artists', /no artists/],
];

const expectedWarnings: [string, RegExp][] = [
  ['scene xx-thin-scene', /at least 2/],
  ['scene xx-scene-no-common-era', /shares no era/],
  ['scene xx-scene-other-city', /not one of the scene's cities/],
  ['scene xx-scene-no-common-genre', /none of the scene's genres/],
  ['scene xx-scene-double-link', /already linked/],
];

export async function main() {
  const { issues } = validateCountry(country, {
    genres: GENRES,
    eras: ERAS,
    regionContains: (regionId, [lon]) => (regionId === 'xx-b' ? lon < 90 : true),
  });
  let failed = 0;
  for (const [target, re] of expected) {
    const hit = issues.some((i) => i.level === 'error' && i.target.endsWith(target) && re.test(i.message));
    if (!hit) {
      failed++;
      console.log(`✗ expected error for ${target} matching ${re}`);
    }
  }
  const okArtistProblems = issues.filter((i) => i.target === 'artist xx-a/ok-artist' && !/duplicate/.test(i.message));
  if (okArtistProblems.length) {
    failed++;
    console.log('✗ valid artist reported:', okArtistProblems);
  }
  const fullProblems = issues.filter((i) => i.target === 'artist xx-a/full-group' && i.level !== 'info');
  if (fullProblems.length) {
    failed++;
    console.log('✗ valid Data Model 1.1 record reported:', fullProblems);
  }
  for (const [target, re] of expectedWarnings) {
    if (!issues.some((i) => i.level === 'warning' && i.target === target && re.test(i.message))) {
      failed++;
      console.log(`✗ expected warning for ${target} matching ${re}`);
    }
  }
  const goodSceneProblems = issues.filter((i) => i.target === 'scene xx-good-scene');
  if (goodSceneProblems.length) {
    failed++;
    console.log('✗ valid scene reported:', goodSceneProblems);
  }
  const total = expected.length + expectedWarnings.length;
  console.log(failed ? `${failed} self-test checks failed` : `✓ validator self-test: all ${total} checks passed`);
  return failed;
}
