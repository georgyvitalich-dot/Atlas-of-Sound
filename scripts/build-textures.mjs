// Builds the Earth surface textures from NASA public-domain sources.
//   node --max-old-space-size=6144 scripts/build-textures.mjs
// Sources are cached in assets-src/ (not deployed); outputs go to public/textures/.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { geoBounds } from 'd3-geo';
import sharp from 'sharp';
import { feature } from 'topojson-client';

sharp.cache(false);
const SRC = 'assets-src';
const OUT = 'public/textures';
const NASA = 'https://eoimages.gsfc.nasa.gov/images/imagerecords/73000';
const SOURCES = {
  day: [`${NASA}/73751/world.topo.bathy.200407.3x21600x10800.jpg`, 'day21600.jpg'],
  elev: [`${NASA}/73934/gebco_08_rev_elev_21600x10800.png`, 'elev21600.png'],
  bath: [`${NASA}/73963/gebco_08_rev_bath_21600x10800.png`, 'bath21600.png'],
  // 21600×21600 tiles, 90°×90° each (~460 m/px): A1 = 180–90°W, B1 = 90–0°W, both 0–90°N.
  tileA1: [`${NASA}/73751/world.topo.bathy.200407.3x21600x21600.A1.jpg`, 'dayA1.jpg'],
  tileB1: [`${NASA}/73751/world.topo.bathy.200407.3x21600x21600.B1.jpg`, 'dayB1.jpg'],
};

/** States with a close-up detail patch (FIPS codes from us-atlas). */
const PATCHES = { 'us-ca': '06', 'us-wa': '53', 'us-co': '08', 'us-tx': '48', 'us-tn': '47', 'us-mi': '26', 'us-il': '17', 'us-ny': '36' };

const ELEV_M_PER_LEVEL = 8848 / 255; // GEBCO grayscale: 0 = sea level, 255 = Everest
const R_EARTH = 6371000;
/** Relief exaggeration: global map (~10 km/px) needs more than close-up patches (~1.9 km/px). */
const K_GLOBAL = 12;
const K_PATCH = 4;

const src = (k) => `${SRC}/${SOURCES[k][1]}`;
const open = (k) => sharp(src(k), { limitInputPixels: false });

async function download() {
  mkdirSync(SRC, { recursive: true });
  for (const [url, file] of Object.values(SOURCES)) {
    if (existsSync(`${SRC}/${file}`)) continue;
    console.log('downloading', url);
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${res.status} ${url}`);
    writeFileSync(`${SRC}/${file}`, Buffer.from(await res.arrayBuffer()));
  }
}

async function gray(k) {
  const { data, info } = await open(k).extractChannel(0).raw().toBuffer({ resolveWithObject: true });
  return { data, w: info.width, h: info.height };
}

/** Box-filter a crop [x0,y0,x0+cw,y0+ch) of a 1-channel image to dw×dh floats. */
function boxDown(img, x0, y0, cw, ch, dw, dh, map = (v) => v) {
  const out = new Float32Array(dw * dh);
  for (let y = 0; y < dh; y++) {
    const sy0 = y0 + Math.floor((y * ch) / dh);
    const sy1 = Math.max(sy0 + 1, y0 + Math.floor(((y + 1) * ch) / dh));
    for (let x = 0; x < dw; x++) {
      const sx0 = x0 + Math.floor((x * cw) / dw);
      const sx1 = Math.max(sx0 + 1, x0 + Math.floor(((x + 1) * cw) / dw));
      let s = 0;
      for (let yy = sy0; yy < sy1; yy++) {
        const row = yy * img.w;
        for (let xx = sx0; xx < sx1; xx++) s += map(img.data[row + ((xx % img.w) + img.w) % img.w]);
      }
      out[y * dw + x] = s / ((sy1 - sy0) * (sx1 - sx0));
    }
  }
  return out;
}

function blur(a, w, h, passes, wrapX) {
  let src = a;
  for (let p = 0; p < passes; p++) {
    const tmp = new Float32Array(w * h);
    for (let y = 0; y < h; y++)
      for (let x = 0; x < w; x++) {
        const xl = wrapX ? (x - 1 + w) % w : Math.max(0, x - 1);
        const xr = wrapX ? (x + 1) % w : Math.min(w - 1, x + 1);
        tmp[y * w + x] = (src[y * w + xl] + 2 * src[y * w + x] + src[y * w + xr]) / 4;
      }
    const out = new Float32Array(w * h);
    for (let y = 0; y < h; y++)
      for (let x = 0; x < w; x++) {
        const yu = Math.max(0, y - 1), yd = Math.min(h - 1, y + 1);
        out[y * w + x] = (tmp[yu * w + x] + 2 * tmp[y * w + x] + tmp[yd * w + x]) / 4;
      }
    src = out;
  }
  return src;
}

/**
 * Terrain texture: R,G = east/north components of the surface normal
 * (z is rebuilt in the shader), B = water mask. Heights are in meters.
 */
function terrainRGB(height, water, w, h, lat0, lat1, lonSpan, k, wrapX) {
  const out = Buffer.alloc(w * h * 3);
  const dy = ((lat1 - lat0) / h) * (Math.PI / 180) * R_EARTH;
  for (let y = 0; y < h; y++) {
    const lat = lat1 - ((y + 0.5) / h) * (lat1 - lat0);
    const dx = Math.max(1000, (lonSpan / w) * (Math.PI / 180) * R_EARTH * Math.cos((lat * Math.PI) / 180));
    const yu = Math.max(0, y - 1), yd = Math.min(h - 1, y + 1);
    for (let x = 0; x < w; x++) {
      const xl = wrapX ? (x - 1 + w) % w : Math.max(0, x - 1);
      const xr = wrapX ? (x + 1) % w : Math.min(w - 1, x + 1);
      const gx = (height[y * w + xr] - height[y * w + xl]) / (2 * dx);
      const gy = (height[yu * w + x] - height[yd * w + x]) / ((yd - yu) * dy); // north is up (row decreases)
      let nx = -k * gx, ny = -k * gy;
      const len = Math.hypot(nx, ny, 1);
      nx /= len; ny /= len;
      const i = (y * w + x) * 3;
      out[i] = Math.round((nx * 0.5 + 0.5) * 255);
      out[i + 1] = Math.round((ny * 0.5 + 0.5) * 255);
      out[i + 2] = Math.round(Math.min(1, Math.max(0, water[y * w + x])) * 255);
    }
  }
  return out;
}

const writeJpg = (buf, w, h, file, quality, chroma = '4:4:4') =>
  sharp(buf, { raw: { width: w, height: h, channels: 3 } }).jpeg({ quality, mozjpeg: true, chromaSubsampling: chroma }).toFile(file);

async function main() {
  await download();
  mkdirSync(`${OUT}/detail`, { recursive: true });

  // 1. Global day map 8K (same July 2004 Blue Marble as before, from the 21600 px original).
  console.log('day 8k…');
  await open('day').resize(8192, 4096, { kernel: 'lanczos3' }).jpeg({ quality: 86, mozjpeg: true }).toFile(`${OUT}/earth_day_8k.jpg`);

  // 2. Global terrain 4K: relief normals + ocean mask.
  console.log('terrain 4k…');
  const elev = await gray('elev');
  const bath = await gray('bath');
  const GW = 4096, GH = 2048;
  const hG = blur(boxDown(elev, 0, 0, elev.w, elev.h, GW, GH, (v) => v * ELEV_M_PER_LEVEL), GW, GH, 1, true);
  const wG = boxDown(bath, 0, 0, bath.w, bath.h, GW, GH, (v) => (v < 255 ? 1 : 0));
  await writeJpg(terrainRGB(hG, wG, GW, GH, -90, 90, 360, K_GLOBAL, true), GW, GH, `${OUT}/earth_terrain_4k.jpg`, 92);

  // 3. State close-up patches.
  const topo = JSON.parse(readFileSync('node_modules/us-atlas/states-10m.json', 'utf8'));
  const states = feature(topo, topo.objects.states).features;
  const manifest = {};
  for (const [regionId, fips] of Object.entries(PATCHES)) {
    const f = states.find((s) => String(s.id) === fips);
    const [[w0, s0], [e0, n0]] = geoBounds(f);
    const m = Math.max(0.6, 0.08 * Math.max(e0 - w0, n0 - s0));
    const b = { west: +(w0 - m).toFixed(3), south: +(s0 - m).toFixed(3), east: +(e0 + m).toFixed(3), north: +(n0 + m).toFixed(3) };
    console.log(regionId, b);

    // Day patch from the 240 px/° tiles (A1 + B1 mosaic, 43200×21600 over 180°W–0°, 0–90°N).
    const PPD = 240;
    const px0 = Math.floor((b.west + 180) * PPD), px1 = Math.ceil((b.east + 180) * PPD);
    const py0 = Math.floor((90 - b.north) * PPD), py1 = Math.ceil((90 - b.south) * PPD);
    const cw = px1 - px0, ch = py1 - py0;
    const parts = [];
    for (const [tile, tx] of [['tileA1', 0], ['tileB1', 21600]]) {
      const l = Math.max(px0, tx), r = Math.min(px1, tx + 21600);
      if (r <= l) continue;
      const input = await open(tile).extract({ left: l - tx, top: py0, width: r - l, height: ch }).toBuffer();
      parts.push({ input, left: l - px0, top: 0 });
    }
    const scale = Math.min(1, 4096 / Math.max(cw, ch));
    const dw = Math.round(cw * scale), dh = Math.round(ch * scale);
    const mosaic = await sharp({ create: { width: cw, height: ch, channels: 3, background: '#000' } }).composite(parts).png().toBuffer();
    await sharp(mosaic).resize(dw, dh, { kernel: 'lanczos3' }).jpeg({ quality: 86, mozjpeg: true }).toFile(`${OUT}/detail/${regionId}-day.jpg`);

    // Terrain patch at the elevation source's own resolution (60 px/°), smoothed against 8-bit steps.
    const EPD = elev.w / 360;
    const ex0 = Math.floor((b.west + 180) * EPD), ex1 = Math.ceil((b.east + 180) * EPD);
    const ey0 = Math.floor((90 - b.north) * EPD), ey1 = Math.ceil((90 - b.south) * EPD);
    const tw = (ex1 - ex0) * 2, th = (ey1 - ey0) * 2; // 2× so bilinear magnification of normals stays smooth
    const hP = blur(boxDown(elev, ex0, ey0, ex1 - ex0, ey1 - ey0, tw, th, (v) => v * ELEV_M_PER_LEVEL), tw, th, 3, false);
    const wP = blur(boxDown(bath, ex0, ey0, ex1 - ex0, ey1 - ey0, tw, th, (v) => (v < 255 ? 1 : 0)), tw, th, 1, false);
    // Real bounds of the cropped pixels (the crop snaps to whole source pixels).
    const tb = { west: ex0 / EPD - 180, east: ex1 / EPD - 180, north: 90 - ey0 / EPD, south: 90 - ey1 / EPD };
    await writeJpg(terrainRGB(hP, wP, tw, th, tb.south, tb.north, tb.east - tb.west, K_PATCH, false), tw, th, `${OUT}/detail/${regionId}-terrain.jpg`, 92);

    manifest[regionId] = {
      day: { url: `/textures/detail/${regionId}-day.jpg`, west: px0 / PPD - 180, east: px1 / PPD - 180, north: 90 - py0 / PPD, south: 90 - py1 / PPD, width: dw, height: dh },
      terrain: { url: `/textures/detail/${regionId}-terrain.jpg`, ...tb, width: tw, height: th },
    };
  }
  writeFileSync('src/data/countries/us/geo/detailPatches.json', JSON.stringify(manifest, null, 2) + '\n');
  console.log('done');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
