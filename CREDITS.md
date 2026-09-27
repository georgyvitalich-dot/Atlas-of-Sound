# Credits & sources

## Earth imagery — NASA (public domain)

NASA imagery is not copyrighted (U.S. Government work). NASA asks for credit:
"NASA Visible Earth" / "NASA Earth Observatory".

| File | Source | Original | Notes |
|---|---|---|---|
| `public/textures/earth_day.jpg` | NASA Visible Earth — Blue Marble Next Generation w/ Topography and Bathymetry (July 2004), Reto Stöckli, NASA Earth Observatory | https://eoimages.gsfc.nasa.gov/images/imagerecords/73000/73751/world.topo.bathy.200407.3x5400x2700.jpg | Downscaled 5400×2700 → 4096×2048 |
| `public/textures/earth_night.jpg` | NASA Earth Observatory — Black Marble 2016 (Earth at Night), NASA Earth Observatory / Joshua Stevens, Suomi NPP VIIRS data | https://eoimages.gsfc.nasa.gov/images/imagerecords/144000/144898/BlackMarble_2016_01deg.jpg | Downscaled 3600×1800 → 2048×1024 |
| `public/textures/clouds.jpg` | NASA Visible Earth — Blue Marble clouds | https://eoimages.gsfc.nasa.gov/images/imagerecords/57000/57747/cloud_combined_2048.jpg | Unmodified |
| `public/textures/earth_day_8k.jpg` | NASA Visible Earth — Blue Marble Next Generation w/ Topography and Bathymetry (July 2004), Reto Stöckli | https://eoimages.gsfc.nasa.gov/images/imagerecords/73000/73751/world.topo.bathy.200407.3x21600x10800.jpg | Downscaled 21600×10800 → 8192×4096; loaded after the 4K map on desktop-class devices |
| `public/textures/earth_terrain_4k.jpg` | NASA Visible Earth — Blue Marble topography (GEBCO_08 elevation) + bathymetry (GEBCO_08) | https://eoimages.gsfc.nasa.gov/images/imagerecords/73000/73934/gebco_08_rev_elev_21600x10800.png, https://eoimages.gsfc.nasa.gov/images/imagerecords/73000/73963/gebco_08_rev_bath_21600x10800.png | Derived: relief normals (R,G) from elevation, ocean mask (B) from bathymetry |
| `public/textures/detail/*-day.jpg` | NASA Visible Earth — Blue Marble NG (July 2004), 21600×21600 tiles A1 and B1 (~460 m/px) | https://eoimages.gsfc.nasa.gov/images/imagerecords/73000/73751/world.topo.bathy.200407.3x21600x21600.A1.jpg (and .B1.jpg) | Cropped to each state's bounds, ≤ 4096 px |
| `public/textures/detail/*-terrain.jpg` | Same GEBCO_08 elevation + bathymetry as above | (see earth_terrain_4k) | Cropped per state, smoothed, relief normals + water mask |

`public/og.jpg` (link preview) is a darkened crop of `earth_day_8k.jpg` with the project title.

The GEBCO_08 grid is © GEBCO, distributed by NASA Visible Earth; used here with attribution.
All surface textures are rebuilt reproducibly with `npm run build:textures`
(`scripts/build-textures.mjs`; sources are cached in `assets-src/`, which is not deployed).

## Boundaries

- US state shapes: [`us-atlas`](https://github.com/topojson/us-atlas) (ISC license),
  derived from U.S. Census Bureau cartographic boundary files (public domain).

## Fonts

- Cormorant Garamond, Manrope — Google Fonts, SIL Open Font License 1.1.

## Artist images

None yet. The UI renders typographic monograms. When photos are added, each
`Artist.image` must carry `credit` and `license` (e.g. Wikimedia Commons, CC BY-SA).

## Music links

Spotify / YouTube links are search URLs generated from artist + track name;
no audio is hosted by this project.
