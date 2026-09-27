import { AnimatePresence, motion } from 'motion/react';
import { useRef } from 'react';
import { MathUtils } from 'three';
import { ERAS, getEra } from '../data/eras';
import { getCountry } from '../data/registry';
import { getRegion, getRegionContent, regionEraCoverage, scenesForRegion, topArtists } from '../data/selectors';
import { useT } from '../i18n/useT';
import { type ScreenPoint, useSceneFrame } from '../scene/frameBus';
import { useShapes } from '../scene/regions/regionShapes';
import { useAtlas } from '../store/useAtlasStore';
import { ArtistRow } from './ArtistCard';

const GAP = 90;       // horizontal distance between anchor and card
const MARGIN = 16;    // min distance from viewport edges
const TOP_SAFE = 84;  // top bar
const BOTTOM_SAFE = 150; // timeline + genre filters
const FADE_S = 0.4;      // a bit longer than the CSS fade-out

/**
 * Floating preview tied to the hovered region by a thin glowing line.
 * Positioned every frame from the scene projector (no React re-render).
 */
export function HoverCard() {
  const hovered = useAtlas((s) => s.hoveredRegionId);
  const phase = useAtlas((s) => s.phase);
  const visible = !!hovered && phase === 'globe';

  // The last hovered region stays rendered while the card fades out.
  // Derived during render (not in an effect) so a new hover never shows
  // the previous region's content or position for a frame.
  const lastHovered = useRef<string | null>(null);
  if (hovered) lastHovered.current = hovered;
  const shown = hovered ?? lastHovered.current;

  const cardRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGGElement>(null);
  const pos = useRef({ x: 0, y: 0, placed: false });
  const wasVisible = useRef(false);
  const hiddenFor = useRef(0);
  const anchor = useRef<ScreenPoint>({ x: 0, y: 0, visible: false });

  useSceneFrame((p, dt) => {
    const card = cardRef.current;
    const shapes = useShapes.getState().shapes;
    if (!card || !shown || !shapes) return;
    const shape = shapes.byId.get(shown);
    if (!shape) return;

    // Keep following the anchor during the fade-out, then stop doing layout work.
    hiddenFor.current = visible ? 0 : hiddenFor.current + dt;
    if (hiddenFor.current > FADE_S) {
      wasVisible.current = false;
      return;
    }

    // Fresh appearance: jump into place instead of gliding from the last spot.
    if (visible && !wasVisible.current) pos.current.placed = false;
    wasVisible.current = visible;

    const a = p.project(shape.anchorVec, anchor.current);
    const W = card.offsetWidth;
    const H = card.offsetHeight;
    const vw = p.width;
    const vh = p.height;

    // Prefer the right side; flip left when there's no room.
    const right = a.x + GAP + W + MARGIN <= vw || a.x < vw / 2;
    let tx = right ? a.x + GAP : a.x - GAP - W;
    let ty = a.y - H * 0.62;
    tx = MathUtils.clamp(tx, MARGIN, vw - W - MARGIN);
    ty = MathUtils.clamp(ty, TOP_SAFE, Math.max(TOP_SAFE, vh - BOTTOM_SAFE - H));

    const s = pos.current;
    if (!s.placed) {
      s.x = tx;
      s.y = ty;
      s.placed = true;
    } else {
      s.x = MathUtils.damp(s.x, tx, 14, dt);
      s.y = MathUtils.damp(s.y, ty, 14, dt);
    }
    card.style.transform = `translate3d(${s.x.toFixed(1)}px, ${s.y.toFixed(1)}px, 0)`;

    // Connector: from the state anchor to the nearest card edge.
    // Attach near the title so the thread rises diagonally into the card.
    const ex = right ? s.x : s.x + W;
    const ey = MathUtils.clamp(a.y - 40, s.y + 36, s.y + H - 36);
    const mx = a.x + (ex - a.x) * 0.5;
    lineRef.current?.setAttribute('d', `M ${a.x} ${a.y} C ${mx} ${a.y}, ${mx} ${ey}, ${ex} ${ey}`);
    dotRef.current?.setAttribute('transform', `translate(${a.x} ${a.y})`);
    const layer = card.parentElement!;
    const anchorVisible = a.visible ? '1' : '0';
    if (layer.dataset.anchorVisible !== anchorVisible) layer.dataset.anchorVisible = anchorVisible;
  });

  return (
    <div
      className={`hover-layer${visible ? ' is-visible' : ''}`}
      aria-live="polite"
      aria-hidden={!visible}
    >
      <svg className="connector" width="100%" height="100%" aria-hidden="true">
        <path ref={lineRef} className="connector__line" />
        <g ref={dotRef}>
          <circle r="9" className="connector__halo" />
          <circle r="2.6" className="connector__dot" />
        </g>
      </svg>
      {/* Touch: the preview itself opens the state (it is click-through for the mouse, see CSS). */}
      <div
        ref={cardRef}
        className="hover-card"
        onClick={() => {
          const st = useAtlas.getState();
          if (visible && shown && getRegionContent(getCountry(st.countryId), shown)) st.select(shown);
        }}
      >
        <div className="hover-card__inner glass">
          {/* Keyed by region: a new state swaps header and artists together;
              the crossfade inside is reserved for era/genre changes. */}
          {shown && <RegionPreview key={shown} regionId={shown} />}
        </div>
      </div>
    </div>
  );
}

function RegionPreview({ regionId }: { regionId: string }) {
  const { t, tx } = useT();
  const countryId = useAtlas((s) => s.countryId);
  const eraId = useAtlas((s) => s.eraId);
  const genres = useAtlas((s) => s.genres);
  const touch = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;
  const country = getCountry(countryId);
  const region = getRegion(country, regionId)!;
  const content = getRegionContent(country, regionId);
  const artists = content ? topArtists(country, { regionId, eraId, genres }, 3) : [];
  const scenes = scenesForRegion(country, regionId);
  // Nothing in this slice? Name the decades where this state does have it.
  const foundIn =
    content && artists.length === 0
      ? ERAS.filter((e) => regionEraCoverage(country, regionId, { genres }).has(e.id))
      : [];

  return (
    <>
      <div className="eyebrow">
        {tx(country.name)} · {tx(getEra(eraId).label)}
      </div>
      <h2 className="region-title">{tx(region.name)}</h2>
      {content ? (
        <>
          <p className="region-tagline">{tx(content.tagline)}</p>
          {scenes.length > 0 && (
            <p className="region-scenes">
              <span className="scene-row__mark" aria-hidden="true" />
              {scenes.map((s) => tx(s.name)).join(' · ')}
            </p>
          )}
        </>
      ) : (
        <p className="region-tagline region-tagline--muted">{t('archiveSoon')}</p>
      )}

      {content && (
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`${regionId}|${eraId}|${genres.join(',')}`}
            className="hover-card__artists"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            {artists.length ? (
              artists.map((a, i) => <ArtistRow key={a.id} artist={a} eraId={eraId} featured={i === 0} />)
            ) : (
              <>
                <p className="empty">{t('noArtists')}</p>
                {foundIn.length > 0 && (
                  <p className="found-in">
                    <span className="eyebrow">{t('foundIn')}</span>
                    {foundIn.map((e) => tx(e.label)).join(' · ')}
                  </p>
                )}
              </>
            )}
          </motion.div>
        </AnimatePresence>
      )}

      {/* An empty archive has nothing to open — no call to action. */}
      {content && <div className="hover-card__cta">{touch ? t('tapToExplore') : t('clickToExplore')} →</div>}
    </>
  );
}
