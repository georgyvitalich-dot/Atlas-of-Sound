import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';
import { ERAS, getEra } from '../data/eras';
import { useT } from '../i18n/useT';
import { useAtlas } from '../store/useAtlasStore';

/** Compact decade scrubber — a thin rail with a glowing marker. */
export function EraTimeline() {
  const { t, tx } = useT();
  const eraId = useAtlas((s) => s.eraId);
  const setEra = useAtlas((s) => s.setEra);
  const stepEra = useAtlas((s) => s.stepEra);
  const index = ERAS.findIndex((e) => e.id === eraId);

  // Narrow screens scroll the rail sideways: keep the current decade in view.
  const railRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const rail = railRef.current;
    const el = rail?.children[index] as HTMLElement | undefined;
    if (!rail || !el || rail.scrollWidth <= rail.clientWidth) return;
    rail.scrollTo({ left: el.offsetLeft - (rail.clientWidth - el.offsetWidth) / 2, behavior: 'smooth' });
  }, [index]);

  return (
    <nav className="timeline" aria-label={t('era')}>
      <div className="timeline__current">
        <motion.span key={eraId} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
          {tx(getEra(eraId).label)}
        </motion.span>
      </div>
      <div className="timeline__row">
        <button
          className="timeline__step"
          onClick={() => stepEra(-1)}
          disabled={index === 0}
          aria-label={t('prevEra')}
        >
          ‹
        </button>
        <div ref={railRef} className="timeline__rail">
          {ERAS.map((era) => {
            const active = era.id === eraId;
            return (
              <button
                key={era.id}
                className={`timeline__era${active ? ' is-active' : ''}`}
                onClick={() => setEra(era.id)}
                aria-pressed={active}
                aria-label={tx(era.label)}
              >
                <span className="timeline__tick">
                  {active && (
                    <motion.span
                      layoutId="era-marker"
                      className="timeline__marker"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    />
                  )}
                </span>
                <span className="timeline__label">{era.start}</span>
              </button>
            );
          })}
        </div>
        <button
          className="timeline__step"
          onClick={() => stepEra(1)}
          disabled={index === ERAS.length - 1}
          aria-label={t('nextEra')}
        >
          ›
        </button>
      </div>
    </nav>
  );
}
