import { AnimatePresence, motion } from 'motion/react';
import { ERAS } from '../data/eras';
import { getCountry } from '../data/registry';
import { useT } from '../i18n/useT';
import { useAtlas } from '../store/useAtlasStore';

/** Cinematic location reveal: "UNITED STATES". */
export function IntroTitle() {
  const { tx } = useT();
  const visible = useAtlas((s) => s.titleVisible);
  const country = getCountry(useAtlas((s) => s.countryId));
  const span = `${ERAS[0].start} — ${ERAS[ERAS.length - 1].start}`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="intro-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.1 } }}
          transition={{ duration: 0.9 }}
        >
          <motion.div
            className="intro-title__rule"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: [0.2, 0.7, 0.2, 1] }}
          />
          <motion.h1
            className="intro-title__name"
            initial={{ letterSpacing: '0.62em', opacity: 0, filter: 'blur(10px)' }}
            animate={{ letterSpacing: '0.34em', opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.8, ease: [0.2, 0.7, 0.2, 1] }}
          >
            {tx(country.name)}
          </motion.h1>
          <motion.div
            className="intro-title__sub"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {span}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
