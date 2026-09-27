# Atlas of Sound

Interactive music atlas: explore the musical history of a country on a cinematic 3D globe.
First country: the United States.

**Status: 1.0 final (2026-09-27)** — live at https://atlas-of-sound.vercel.app.
Project paused; a snapshot of this version is in `releases/`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173.

- `npm run build` — typecheck + content validation + production build into `dist/`
- `npm run preview` — serve the production build
- `npm run deploy` — build and deploy to https://atlas-of-sound.vercel.app
- `npm run build:textures` — rebuild the Earth textures from NASA sources (downloads ~180 MB into `assets-src/`, not deployed)

## Content workflow

Rules for every artist, city and state: **[CONTENT_GUIDELINES.md](CONTENT_GUIDELINES.md)** (Artist Data Standard).

- `npm run validate:data` — integrity check (errors fail with exit code 1; add `-- --info` to see notes)
- `npm run content:report` — completeness table for all states + `reports/content-status-us.md`
- `npm run validate:selftest` — checks that the validator itself catches broken data
- `npm run dev` re-validates in the terminal whenever `src/data` changes; `npm run build` refuses invalid data

## Controls

- Drag — rotate · Wheel / pinch — zoom
- Hover a state — preview · Click — explore (touch: tap = preview, tap again = explore)
- Inside a state: pick a city or a musical scene; a scene lists its connected scenes
- ← / → — switch era · Esc — one level back (City → Scene → State → map)

## Structure

```
src/
  data/                 data layer (no React, no Three.js)
    types.ts            domain model: Country, Region, City, Artist, Era, Genre
    eras.ts genres.ts   global registries
    registry.ts         list of countries
    selectors.ts        queries: queryArtists, topArtists, cityProfile, …
    validation.ts       content rules + per-state completeness report
    countries/us/
      geo/              geography: 50 states (FIPS), cities, geometry loader
      content/          music: regions.ts (taglines, summaries), artists/<state>.ts, scenes.ts
  i18n/                 UI strings (en/pl/ru) + useT()
  store/                zustand store: locale, era, genres, hover/selection, phase
  scene/                React Three Fiber scene
    Earth Clouds Atmosphere Stars CameraRig
    regions/            merged state mesh, borders, outlines, picking
    frameBus.ts         per-frame 3D → screen projection for HTML overlays
  ui/                   HTML overlay: TopBar, HoverCard, ExploreLayer, EraTimeline, GenreFilters
```

### Adding a country

1. Create `src/data/countries/<id>/` with `geo/` (regions, cities, `loadGeometry`) and `content/`.
2. Export a `Country` object and register it in `src/data/registry.ts`.

### Adding artists or a new state

Follow the checklist at the end of CONTENT_GUIDELINES.md: cities in `geo/cities.ts`,
tagline/summary in `content/regions.ts`, artists in `content/artists/<code>.ts`
(registered in `content/artists/index.ts`), then `npm run content:report`.

See `CREDITS.md` for asset sources.
