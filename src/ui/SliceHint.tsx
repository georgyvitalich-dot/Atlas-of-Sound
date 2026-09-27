import { AnimatePresence, motion } from 'motion/react';
import { useMemo } from 'react';
import { ERAS } from '../data/eras';
import { getCountry } from '../data/registry';
import { countryEraCoverage, regionPresence } from '../data/selectors';
import { useT } from '../i18n/useT';
import { useAtlas } from '../store/useAtlasStore';

/**
 * Globe level: when the chosen era + genres have no artists anywhere in the
 * country, say so and offer the decades that really do have them.
 */
export function SliceHint() {
  const { t, tx } = useT();
  const phase = useAtlas((s) => s.phase);
  const countryId = useAtlas((s) => s.countryId);
  const eraId = useAtlas((s) => s.eraId);
  const genres = useAtlas((s) => s.genres);
  const setEra = useAtlas((s) => s.setEra);
  const country = getCountry(countryId);

  const foundIn = useMemo(() => {
    if (genres.length === 0 || regionPresence(country, eraId, genres).size > 0) return null;
    const coverage = countryEraCoverage(country, genres);
    return ERAS.filter((e) => coverage.has(e.id));
  }, [country, eraId, genres]);

  const show = phase === 'globe' && foundIn !== null;
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key={`${eraId}|${genres.join(',')}`}
          className="slice-hint glass"
          role="status"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <span className="slice-hint__text">{t('noArtists')}</span>
          {foundIn!.length > 0 && (
            <span className="empty__eras">
              <span className="eyebrow">{t('foundIn')}</span>
              {foundIn!.map((e) => (
                <button key={e.id} className="pill" onClick={() => setEra(e.id)}>
                  {tx(e.label)}
                </button>
              ))}
            </span>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
