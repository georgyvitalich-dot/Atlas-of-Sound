import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ERAS, getEra } from '../data/eras';
import { getGenre } from '../data/genres';
import { getCountry } from '../data/registry';
import {
  cityProfile,
  genresOf,
  getCity,
  getRegion,
  getRegionContent,
  getScene,
  queryArtists,
  regionEraCoverage,
  type SceneConnectionKind,
  sceneArtists,
  sceneConnections,
  sceneHomeRegion,
  scenesForRegion,
} from '../data/selectors';
import type { Artist, City, EraId, GenreId, Scene } from '../data/types';
import { useT } from '../i18n/useT';
import { type ScreenPoint, useSceneFrame } from '../scene/frameBus';
import { REGION_RADIUS } from '../scene/regions/regionShapes';
import { lonLatToVec3 } from '../scene/utils/geo';
import { useAtlas } from '../store/useAtlasStore';
import { ArtistCard, ArtistRow } from './ArtistCard';

/** Entry cards appear while the camera is still settling over the region. */
const ENTRY_DELAY_S = 0.5;
const ERA_IDS = ERAS.map((e) => e.id);
/** Max artist "stars" drawn around a city marker. */
const MAX_STARS = 6;
/** Full artist cards shown before the "N more" list. */
const CARD_LIMIT = 3;
/** Markers closer than this (px) share one label. */
const CROWD_PX = 28;
const FALLBACK_TINT = '#e0a458';
/** How a connected scene is introduced, from the explored scene's point of view. */
const CONNECTION_LABEL = {
  grewOutOf: 'linkGrewOutOf',
  influencedBy: 'linkInfluencedBy',
  evolvedInto: 'linkEvolvedInto',
  influenced: 'linkInfluenced',
  contemporaryOf: 'linkContemporaryOf',
} as const satisfies Record<SceneConnectionKind, string>;

/**
 * "Standing above the state": the title and artists float over the scene,
 * artists are tied by light threads to their cities on the globe.
 * The path State → City → Era → Genre → Artist is explorable from here,
 * and every link shown is derived from the data (nothing is invented).
 */
export function ExploreLayer() {
  const selected = useAtlas((s) => s.selectedRegionId);
  const phase = useAtlas((s) => s.phase);
  return (
    <AnimatePresence>
      {phase === 'explore' && selected && <RegionExplore key={selected} regionId={selected} />}
    </AnimatePresence>
  );
}

const tintOf = (g: GenreId | undefined) => (g && getGenre(g)?.color) || FALLBACK_TINT;

/** Positions of the artist stars around a city marker (an arc above it). */
function starLayout(n: number, radius: number) {
  return Array.from({ length: n }, (_, i) => {
    const deg = n === 1 ? -90 : -150 + (120 * i) / (n - 1);
    const rad = (deg * Math.PI) / 180;
    return { deg, x: Math.cos(rad) * radius, y: Math.sin(rad) * radius };
  });
}

function RegionExplore({ regionId }: { regionId: string }) {
  const { t, tx } = useT();
  const countryId = useAtlas((s) => s.countryId);
  const eraId = useAtlas((s) => s.eraId);
  const genres = useAtlas((s) => s.genres);
  const goBack = useAtlas((s) => s.goBack);
  const setEra = useAtlas((s) => s.setEra);
  const toggleGenre = useAtlas((s) => s.toggleGenre);
  const country = getCountry(countryId);
  const region = getRegion(country, regionId)!;
  const content = getRegionContent(country, regionId);

  // A focused city (kept in the store so Esc and the breadcrumb know about it)
  // narrows everything to that city; "hot" items are only highlighted while hovered.
  const cityFocus = useAtlas((s) => s.focusedCityId);
  const setCityFocus = useAtlas((s) => s.focusCity);
  const sceneFocus = useAtlas((s) => s.focusedSceneId);
  const focusScene = useAtlas((s) => s.focusScene);
  const select = useAtlas((s) => s.select);
  const [hotArtist, setHotArtist] = useState<string | null>(null);
  const [hotCity, setHotCity] = useState<string | null>(null);
  const [hotScene, setHotScene] = useState<string | null>(null);

  // Scenes that touch this region; one of them may be the lens we explore through.
  const scenes = useMemo(() => scenesForRegion(country, regionId), [country, regionId]);
  // Only a scene that belongs to this region can be the lens here.
  const scene = sceneFocus ? scenes.find((s) => s.id === sceneFocus) : undefined;
  const sceneCityIds = useMemo(() => new Set(scene?.cityIds ?? []), [scene]);
  const connections = useMemo(() => (scene ? sceneConnections(country, scene) : []), [country, scene]);

  // A layer that is fading out (another region was just picked) must not act.
  const isCurrent = () => useAtlas.getState().selectedRegionId === regionId;
  const toggleCity = (id: string) => {
    if (!isCurrent()) return;
    // A city outside the scene leaves the scene for the regular state view.
    if (scene && !sceneCityIds.has(id)) {
      focusScene(null);
      setCityFocus(id);
      return;
    }
    setCityFocus(cityFocus === id ? null : id);
  };
  // A scene is a period too: step into its nearest decade if we're outside it.
  const enterSceneEra = (s: Scene) => {
    if (s.eras.includes(eraId)) return;
    const at = ERA_IDS.indexOf(eraId);
    const nearest = [...s.eras].sort(
      (a, b) => Math.abs(ERA_IDS.indexOf(a) - at) - Math.abs(ERA_IDS.indexOf(b) - at),
    )[0];
    setEra(nearest);
  };
  const toggleScene = (s: Scene) => {
    if (!isCurrent()) return;
    if (s.id === sceneFocus) return focusScene(null);
    focusScene(s.id);
    enterSceneEra(s);
  };
  // Scene → Scene: a connected scene opens where it lives. Across a border the
  // camera flies to its state (a new region selection) and lands inside the scene.
  const openConnected = (s: Scene) => {
    if (!isCurrent()) return;
    const touchesHere = s.cityIds.some((id) => getCity(country, id)?.regionId === regionId);
    const home = touchesHere ? regionId : sceneHomeRegion(country, s);
    if (!home) return;
    if (home !== regionId) select(home);
    focusScene(s.id);
    enterSceneEra(s);
  };

  const inCity = (a: Artist) => !cityFocus || a.cityId === cityFocus;
  // Inside a scene its editorial membership replaces the era + genre query
  // (the scene already defines the sound, so genre filters don't apply).
  const eraArtists = scene
    ? sceneArtists(country, scene, eraId)
    : content ? queryArtists(country, { regionId, eraId, genres: [] }) : [];
  const selection = scene
    ? eraArtists
    : content ? queryArtists(country, { regionId, eraId, genres }) : [];
  // The top 3 get full cards (and threads); the rest stay one click away.
  const inScope = selection.filter(inCity);
  const artists = inScope.slice(0, CARD_LIMIT);
  const moreArtists = inScope.slice(CARD_LIMIT);

  // Genres heard in this era (in the focused city, if any), with counts.
  const eraScope = eraArtists.filter(inCity);
  const eraGenres = genresOf(eraScope);
  const genreCount = (g: GenreId) => eraScope.filter((a) => a.genres.includes(g)).length;

  // Decades in which this state — or this city / these genres / this scene — has history.
  const eraCoverage = useMemo(() => {
    if (!scene) return regionEraCoverage(country, regionId, { genres, cityId: cityFocus });
    const members = sceneArtists(country, scene).filter((a) => !cityFocus || a.cityId === cityFocus);
    return new Set(scene.eras.filter((e) => members.some((a) => a.eras.includes(e))));
  }, [country, regionId, genres, cityFocus, scene]);

  const regionCities = useMemo(() => country.cities.filter((c) => c.regionId === regionId), [country, regionId]);
  // Map markers: the region's cities plus any scene city across the border.
  const cities = useMemo(() => {
    const extra = [...sceneCityIds].filter((id) => !regionCities.some((c) => c.id === id));
    return [...regionCities, ...extra.map((id) => getCity(country, id)!).filter(Boolean)];
  }, [country, regionCities, sceneCityIds]);
  const profiles = useMemo(
    () => new Map(cities.map((c) => [c.id, cityProfile(country, c.id, ERA_IDS)])),
    [cities, country],
  );
  // The current era + genre picture, city by city: its artists and genres.
  const byCity = new Map<string, Artist[]>();
  for (const a of selection) {
    const list = byCity.get(a.cityId) ?? [];
    list.push(a);
    byCity.set(a.cityId, list);
  }
  const countOf = (id: string) => byCity.get(id)?.length ?? 0;
  // Busiest cities first; for ties, the city with the longer history.
  const cityRows = [...regionCities].sort(
    (a, b) =>
      countOf(b.id) - countOf(a.id) ||
      (profiles.get(b.id)?.artists ?? 0) - (profiles.get(a.id)?.artists ?? 0) ||
      a.name.localeCompare(b.name),
  );
  const activeCities = new Set(artists.map((a) => a.cityId));
  const focused = cityFocus ? cities.find((c) => c.id === cityFocus) : undefined;
  const focusedProfile = cityFocus ? profiles.get(cityFocus) : undefined;
  const listKey = `${sceneFocus ?? ''}|${eraId}|${scene ? '' : genres.join(',')}|${cityFocus ?? ''}`;

  // "N more" is opened for one slice only: a new era/genre/city starts collapsed.
  const [expandedKey, setExpandedKey] = useState<string | null>(null);
  const expanded = expandedKey === listKey && moreArtists.length > 0;
  const moreRef = useRef<HTMLDivElement>(null);
  const columnRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (expanded) moreRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [expanded]);
  // A new slice starts at the top of the column, where "N of M" lives.
  useEffect(() => {
    columnRef.current?.scrollTo({ top: 0 });
  }, [listKey]);

  // Nothing here for this slice? Point to decades where it does exist.
  const otherEras = artists.length === 0 ? ERAS.filter((e) => e.id !== eraId && eraCoverage.has(e.id)) : [];

  // Cards opened together with the region wait for the camera flight;
  // any later era/genre/city change swaps them immediately. Tied to the
  // selection event (this component is keyed by region), not to wall-clock time.
  const [entryListKey] = useState(listKey);
  const listChanged = useRef(false);
  if (listKey !== entryListKey) listChanged.current = true;
  const baseDelay = listChanged.current ? 0 : ENTRY_DELAY_S;

  // Keyboard and screen-reader users land on the region they opened.
  const backRef = useRef<HTMLButtonElement>(null);
  useEffect(() => backRef.current?.focus({ preventScroll: true }), []);

  // DOM refs for per-frame positioning of markers and threads.
  const cardEls = useRef(new Map<string, HTMLElement>());
  const markerEls = useRef(new Map<string, HTMLElement>());
  const threadEls = useRef(new Map<string, SVGPathElement>());
  const sceneLinkRef = useRef<SVGPathElement>(null);
  // One reusable screen point per city — nothing is allocated per frame.
  const cityPoints = useMemo(
    () =>
      new Map(
        cities.map((c) => [
          c.id,
          {
            vec: lonLatToVec3(c.coords[0], c.coords[1], REGION_RADIUS),
            screen: { x: 0, y: 0, visible: false } as ScreenPoint,
          },
        ]),
      ),
    [cities],
  );

  // Who keeps the label when two city markers overlap on screen.
  const labelRank = (id: string) =>
    (id === cityFocus ? 1000 : 0) + (sceneCityIds.has(id) ? 100 : 0) + (byCity.get(id)?.length ?? 0);

  useSceneFrame((p) => {
    for (const c of cityPoints.values()) p.project(c.vec, c.screen);

    // Read all layout first, then write — interleaving would force a reflow per card.
    const stacked = window.innerWidth <= 820;
    const threads = artists.map((a) => {
      const card = cardEls.current.get(a.id);
      const city = cityPoints.get(a.cityId)?.screen;
      if (!card || !city || !city.visible) return '';
      const r = card.getBoundingClientRect();
      const ex = stacked ? r.left + r.width / 2 : r.left;
      const ey = stacked ? r.top : r.top + 42;
      const mx = (ex + city.x) / 2;
      return stacked
        ? `M ${city.x} ${city.y} C ${city.x} ${(city.y + ey) / 2}, ${ex} ${(city.y + ey) / 2}, ${ex} ${ey}`
        : `M ${city.x} ${city.y} C ${mx} ${city.y}, ${mx} ${ey}, ${ex} ${ey}`;
    });
    artists.forEach((a, i) => threadEls.current.get(a.id)?.setAttribute('d', threads[i]));

    // A scene spread over several cities is drawn as one soft arc through them.
    const link = sceneLinkRef.current;
    if (link) {
      let d = '';
      const ids = scene?.cityIds ?? [];
      for (let i = 1; i < ids.length; i++) {
        const a = cityPoints.get(ids[i - 1])?.screen;
        const b = cityPoints.get(ids[i])?.screen;
        if (!a?.visible || !b?.visible) continue;
        const bow = Math.hypot(b.x - a.x, b.y - a.y) * 0.28;
        const cx = (a.x + b.x) / 2;
        const cy = (a.y + b.y) / 2 - bow;
        d += `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y} `;
      }
      link.setAttribute('d', d);
    }

    // The artist stars live inside each marker, so they follow it for free.
    for (const [id, { screen: s }] of cityPoints) {
      const el = markerEls.current.get(id);
      if (!el) continue;
      el.style.transform = `translate3d(${s.x.toFixed(1)}px, ${s.y.toFixed(1)}px, 0)`;
      el.style.opacity = s.visible ? '' : '0';
      // Neighbouring cities (Compton / Long Beach) would print labels on top of
      // each other: only the most relevant one keeps its label.
      let crowded = false;
      if (s.visible) {
        const mine = labelRank(id);
        for (const [other, { screen: o }] of cityPoints) {
          if (other === id || !o.visible || Math.abs(o.x - s.x) > CROWD_PX || Math.abs(o.y - s.y) > CROWD_PX) continue;
          const theirs = labelRank(other);
          if (theirs > mine || (theirs === mine && other < id)) {
            crowded = true;
            break;
          }
        }
      }
      const flag = crowded ? '1' : '';
      if ((el.dataset.crowded ?? '') !== flag) el.dataset.crowded = flag;
    }
  });

  const eraSpan = (p?: { firstEra?: EraId; lastEra?: EraId }) =>
    p?.firstEra
      ? p.firstEra === p.lastEra
        ? tx(getEra(p.firstEra).label)
        : `${tx(getEra(p.firstEra).label)} — ${tx(getEra(p.lastEra!).label)}`
      : '';

  // Where the visitor is: Scene › City › Era › Genres (genres don't apply inside a scene).
  const path = [
    scene && tx(scene.name),
    focused?.name,
    tx(getEra(eraId).label),
    ...(scene ? [] : genres.map((g) => (getGenre(g) ? tx(getGenre(g)!.label) : g))),
  ].filter(Boolean) as string[];
  // The back button names the level Esc returns to.
  const backLabel = focused ? (scene ? tx(scene.name) : tx(region.name)) : scene ? tx(region.name) : t('back');
  const sceneSpan = (s: Scene) => {
    const sorted = [...s.eras].sort((a, b) => ERA_IDS.indexOf(a) - ERA_IDS.indexOf(b));
    return eraSpan({ firstEra: sorted[0], lastEra: sorted[sorted.length - 1] });
  };
  const cityNamesOf = (s: Scene) =>
    s.cityIds.map((id) => getCity(country, id)?.name).filter(Boolean).join(' · ');
  // Where a connected scene lives: its cities here, its states elsewhere.
  const placeOf = (s: Scene) => {
    if (s.cityIds.some((id) => getCity(country, id)?.regionId === regionId)) return cityNamesOf(s);
    const regionIds = [...new Set(s.cityIds.map((id) => getCity(country, id)?.regionId))];
    return regionIds
      .map((id) => (id ? getRegion(country, id) : undefined))
      .filter(Boolean)
      .map((r) => tx(r!.name))
      .join(' · ');
  };

  return (
    <motion.div
      className="explore"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.35 } }}
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
    >
      <svg className="threads" width="100%" height="100%" aria-hidden="true">
        {scene && scene.cityIds.length > 1 && <path key={scene.id} ref={sceneLinkRef} className="scene-link" />}
        {artists.map((a) => (
          <path
            key={`${listKey}-${a.id}`}
            ref={(el) => void (el ? threadEls.current.set(a.id, el) : threadEls.current.delete(a.id))}
            className={`thread${hotArtist === a.id ? ' is-hot' : ''}`}
            style={{ '--tint': tintOf(a.genres[0]) } as React.CSSProperties}
          />
        ))}
      </svg>

      {cities.map((c: City) => {
        const list = byCity.get(c.id) ?? [];
        const isFocused = c.id === cityFocus;
        const inScene = sceneCityIds.has(c.id);
        const hotSceneCity = !!hotScene && !!getScene(country, hotScene)?.cityIds.includes(c.id);
        const stars = list.slice(0, MAX_STARS);
        const layout = starLayout(stars.length, isFocused ? 34 : 22);
        return (
          <button
            key={c.id}
            ref={(el) => void (el ? markerEls.current.set(c.id, el) : markerEls.current.delete(c.id))}
            className={
              'city-marker' +
              (activeCities.has(c.id) || isFocused ? ' is-active' : '') +
              (list.length ? ' has-scene' : '') +
              (isFocused ? ' is-focused' : '') +
              (hotCity === c.id || hotSceneCity ? ' is-hot' : '') +
              (inScene ? ' in-scene' : '') +
              ((cityFocus && !isFocused) || (scene && !inScene) ? ' is-muted' : '')
            }
            onClick={() => toggleCity(c.id)}
            onMouseEnter={() => setHotCity(c.id)}
            onMouseLeave={() => setHotCity((h) => (h === c.id ? null : h))}
            aria-pressed={isFocused}
            aria-label={`${c.name} (${list.length})`}
            tabIndex={-1}
          >
            {/* City → artist constellation, coloured by each artist's main genre. */}
            <span className="constellation" aria-hidden="true">
              {stars.map((a, i) => {
                const pos = layout[i];
                const style = {
                  '--tint': tintOf(a.genres[0]),
                  '--a': `${pos.deg}deg`,
                  '--r': `${isFocused ? 34 : 22}px`,
                  '--i': i,
                } as React.CSSProperties;
                return (
                  <span key={a.id} className={`star${hotArtist === a.id ? ' is-hot' : ''}`} style={style}>
                    <span className="star__ray" />
                    <span className="star__dot" style={{ left: pos.x, top: pos.y }} />
                    {hotArtist === a.id && (
                      <span className="star__name" style={{ left: pos.x, top: pos.y }}>
                        {a.name}
                      </span>
                    )}
                  </span>
                );
              })}
            </span>
            <span className="city-marker__dot" />
            <span className="city-marker__label">
              {c.name}
              {list.length > 0 && <span className="city-marker__count">{list.length}</span>}
            </span>
          </button>
        );
      })}

      <motion.header
        className="explore-title"
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.45, ease: 'easeOut' } }}
      >
        <button ref={backRef} className="back-btn" onClick={goBack}>
          ← {backLabel} <kbd>Esc</kbd>
        </button>
        <div className="eyebrow explore-path" aria-live="polite">
          <span>{t('exploring')}</span>
          {path.map((step, i) => (
            <span key={`${i}-${step}`} className="explore-path__step">
              {step}
            </span>
          ))}
        </div>
        <h1 className="explore-title__name">{tx(region.name)}</h1>
        {content ? (
          <>
            <p className="region-tagline region-tagline--lg">{tx(content.tagline)}</p>
            <p className="explore-title__summary">{tx(content.summary)}</p>
          </>
        ) : (
          <p className="region-tagline region-tagline--muted">{t('archiveSoon')}</p>
        )}

        {content && (
          <div className="explore-facts">
            <div className="eyebrow">{t('erasOfState')}</div>
            <div className="era-strip" role="group" aria-label={t('erasOfState')}>
              {ERAS.map((e) => {
                const has = eraCoverage.has(e.id);
                return (
                  <button
                    key={e.id}
                    className={
                      'era-strip__era' + (has ? ' has-content' : '') + (e.id === eraId ? ' is-current' : '')
                    }
                    onClick={() => setEra(e.id)}
                    aria-pressed={e.id === eraId}
                    aria-label={tx(e.label)}
                  >
                    ’{String(e.start).slice(2)}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {!scene && eraGenres.length > 0 && (
          <div className="explore-facts">
            <div className="eyebrow">{t('soundOfEra')}</div>
            <div className="chips" role="group" aria-label={t('filterByGenre')}>
              {eraGenres.map((g) => {
                const genre = getGenre(g);
                const on = genres.includes(g);
                return genre ? (
                  <button
                    key={g}
                    className={`chip chip--button${on ? ' is-selected' : ''}`}
                    style={{ '--tint': genre.color } as React.CSSProperties}
                    onClick={() => toggleGenre(g)}
                    aria-pressed={on}
                  >
                    {tx(genre.label)}
                    <span className="chip__count">{genreCount(g)}</span>
                  </button>
                ) : null;
              })}
            </div>
          </div>
        )}

        {content && (regionCities.length > 0 || scenes.length > 0) && (
          <div className="explore-facts">
            <div className="eyebrow">{t('citiesScenes')}</div>
            {scenes.length > 0 && (
              <div className="scene-rows" role="group" aria-label={t('scenes')}>
                {scenes.map((s) => {
                  const active = s.id === sceneFocus;
                  return (
                    <button
                      key={s.id}
                      className={
                        'scene-row' +
                        (active ? ' is-active' : '') +
                        (!active && !s.eras.includes(eraId) ? ' is-off-era' : '') +
                        (scene && !active ? ' is-muted' : '')
                      }
                      onClick={() => toggleScene(s)}
                      onMouseEnter={() => setHotScene(s.id)}
                      onMouseLeave={() => setHotScene((h) => (h === s.id ? null : h))}
                      aria-pressed={active}
                    >
                      <span className="scene-row__head">
                        <span className="scene-row__mark" aria-hidden="true" />
                        <span className="scene-row__name">{tx(s.name)}</span>
                        <span className="scene-row__count" aria-label={`${s.artistIds.length}`}>
                          {s.artistIds.length}
                        </span>
                      </span>
                      <span className="scene-row__meta">
                        {cityNamesOf(s)} · {sceneSpan(s)}
                      </span>
                      <span className="scene-row__desc">{tx(s.description)}</span>
                      {active && (
                        <span className="chips">
                          {s.genres.map((g) => {
                            const genre = getGenre(g);
                            return genre ? (
                              <span key={g} className="chip" style={{ '--tint': genre.color } as React.CSSProperties}>
                                {tx(genre.label)}
                              </span>
                            ) : null;
                          })}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
            {/* Scene → Scene: a few editorial links, quieter than the scene itself. */}
            {scene && connections.length > 0 && (
              <div className="scene-links" role="group" aria-label={t('connectedScenes')}>
                <div className="eyebrow scene-links__title">{t('connectedScenes')}</div>
                {connections.map(({ scene: s, kind }) => (
                  <button
                    key={s.id}
                    className="scene-link-row"
                    onClick={() => openConnected(s)}
                    onMouseEnter={() => setHotScene(s.id)}
                    onMouseLeave={() => setHotScene((h) => (h === s.id ? null : h))}
                  >
                    <span className="scene-link-row__kind">{t(CONNECTION_LABEL[kind])}</span>
                    <span className="scene-link-row__name">
                      {tx(s.name)} <span aria-hidden="true">→</span>
                    </span>
                    <span className="scene-link-row__meta">
                      {placeOf(s)} · {sceneSpan(s)}
                    </span>
                  </button>
                ))}
              </div>
            )}
            <div className="city-rows" role="group" aria-label={t('citiesScenes')}>
              {cityRows.map((c) => {
                const list = byCity.get(c.id) ?? [];
                // The city's sound right now: genres of its artists in this slice.
                const sound = genresOf(list).slice(0, 3);
                return (
                  <button
                    key={c.id}
                    className={
                      'city-row' +
                      (list.length === 0 ? ' is-empty' : '') +
                      (c.id === cityFocus ? ' is-focused' : '') +
                      (scene && !sceneCityIds.has(c.id) ? ' is-off-scene' : '')
                    }
                    onClick={() => toggleCity(c.id)}
                    onMouseEnter={() => setHotCity(c.id)}
                    onMouseLeave={() => setHotCity((h) => (h === c.id ? null : h))}
                    aria-pressed={c.id === cityFocus}
                  >
                    <span className="city-row__name">{c.name}</span>
                    <span className="city-row__sound" aria-hidden="true">
                      {sound.map((g) => (
                        <span key={g} className="city-row__genre" style={{ background: tintOf(g) }} />
                      ))}
                    </span>
                    <span className="city-row__count">{list.length || '·'}</span>
                  </button>
                );
              })}
            </div>
            <AnimatePresence mode="wait">
              {focused && focusedProfile && (
                <motion.div
                  key={focused.id}
                  className="city-profile"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="meta">
                    {focused.name} · {eraSpan(focusedProfile)}
                  </span>
                  <div className="chips">
                    {focusedProfile.genres.map((g) => {
                      const genre = getGenre(g);
                      return genre ? (
                        <span key={g} className="chip" style={{ '--tint': genre.color } as React.CSSProperties}>
                          {tx(genre.label)}
                        </span>
                      ) : null;
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </motion.header>

      <div ref={columnRef} className="explore-cards">
        <AnimatePresence>
          {scene && (
            <motion.button
              key={`scene-${scene.id}`}
              className="city-focus-pill scene-pill"
              onClick={() => focusScene(null)}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              aria-label={`${t('leaveScene')}: ${tx(scene.name)}`}
            >
              <span className="scene-row__mark" aria-hidden="true" />
              {tx(scene.name)} <span aria-hidden="true">×</span>
            </motion.button>
          )}
          {focused && (
            <motion.button
              className="city-focus-pill"
              onClick={() => setCityFocus(null)}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              aria-label={t('allCities')}
            >
              {focused.name} <span aria-hidden="true">×</span>
            </motion.button>
          )}
        </AnimatePresence>
        {moreArtists.length > 0 && (
          <button
            className="more-toggle"
            onClick={() => setExpandedKey(expanded ? null : listKey)}
            aria-expanded={expanded}
          >
            <span className="more-toggle__count">
              {expanded ? inScope.length : artists.length} {t('of')} {inScope.length}
            </span>
            {expanded ? t('showLess') : `${t('showAll')} ↓`}
          </button>
        )}
        <AnimatePresence mode="wait">
          <motion.div key={listKey} className="explore-cards__list">
            {content && artists.length === 0 && (
              <motion.div
                className="empty glass"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p>{scene ? t('noArtistsScene') : cityFocus ? t('noArtistsCity') : t('noArtists')}</p>
                {otherEras.length > 0 && (
                  <div className="empty__eras">
                    <span className="eyebrow">{t('foundIn')}</span>
                    {otherEras.map((e) => (
                      <button key={e.id} className="pill" onClick={() => setEra(e.id)}>
                        {tx(e.label)}
                      </button>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
            {artists.map((a, i) => (
              <motion.div
                key={a.id}
                ref={(el: HTMLDivElement | null) =>
                  void (el ? cardEls.current.set(a.id, el) : cardEls.current.delete(a.id))
                }
                onMouseEnter={() => setHotArtist(a.id)}
                onMouseLeave={() => setHotArtist((h) => (h === a.id ? null : h))}
                initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
                animate={{
                  opacity: 1, y: 0, filter: 'blur(0px)',
                  transition: { duration: 0.35, delay: baseDelay + i * 0.07, ease: 'easeOut' },
                }}
                exit={{ opacity: 0, y: -8, filter: 'blur(4px)', transition: { duration: 0.18 } }}
              >
                <ArtistCard artist={a} eraId={eraId} onCity={(id) => setCityFocus(id)} />
              </motion.div>
            ))}
            {expanded && (
              <motion.div
                ref={moreRef}
                className="more-list glass"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                {moreArtists.map((a) => (
                  <div
                    key={a.id}
                    onMouseEnter={() => setHotArtist(a.id)}
                    onMouseLeave={() => setHotArtist((h) => (h === a.id ? null : h))}
                  >
                    <ArtistRow artist={a} eraId={eraId} />
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
