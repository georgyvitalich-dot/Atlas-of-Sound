import { AnimatePresence, motion } from 'motion/react';
import { getCountry } from '../data/registry';
import { getCity, getRegion, getScene } from '../data/selectors';
import { LOCALES, type Locale } from '../data/types';
import { useT } from '../i18n/useT';
import { useAtlas } from '../store/useAtlasStore';

const LOCALE_LABEL: Record<Locale, string> = { en: 'EN', pl: 'PL', ru: 'RU' };

export function TopBar() {
  const { t, tx } = useT();
  const countryId = useAtlas((s) => s.countryId);
  const selected = useAtlas((s) => s.selectedRegionId);
  const cityId = useAtlas((s) => s.focusedCityId);
  const select = useAtlas((s) => s.select);
  const sceneId = useAtlas((s) => s.focusedSceneId);
  const focusCity = useAtlas((s) => s.focusCity);
  const focusScene = useAtlas((s) => s.focusScene);
  const country = getCountry(countryId);
  const region = selected ? getRegion(country, selected) : null;
  const scene = region && sceneId ? getScene(country, sceneId) : undefined;
  const city = region && cityId ? getCity(country, cityId) : undefined;

  // Region › Scene › City — every level but the last opens that level again.
  const levels: { key: string; label: string; open: () => void }[] = [];
  if (region) levels.push({ key: `r-${region.id}`, label: tx(region.name), open: () => focusScene(null) });
  if (scene) levels.push({ key: `s-${scene.id}`, label: tx(scene.name), open: () => focusCity(null) });
  if (city) levels.push({ key: `c-${city.id}`, label: city.name, open: () => {} });

  return (
    <header className="topbar">
      <div className="brand">
        <svg className="brand__mark" viewBox="0 0 32 32" aria-hidden="true">
          <circle cx="16" cy="16" r="7" />
          <ellipse cx="16" cy="16" rx="14" ry="5" transform="rotate(-24 16 16)" />
        </svg>
        <div>
          <div className="brand__name">Atlas of Sound</div>
          <div className="brand__sub">{t('tagline')}</div>
        </div>
      </div>

      <nav className="crumbs" aria-label="breadcrumb">
        <button className="crumbs__item" onClick={() => select(null)} disabled={!region}>
          {tx(country.name)}
        </button>
        <AnimatePresence>
          {levels.map((level, i) => (
            <motion.span
              key={level.key}
              className="crumbs__item crumbs__item--current"
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
            >
              <span className="crumbs__sep">/</span>
              {i < levels.length - 1 ? (
                <button className="crumbs__item" onClick={level.open}>
                  {level.label}
                </button>
              ) : (
                level.label
              )}
            </motion.span>
          ))}
        </AnimatePresence>
      </nav>

      <LanguageSwitcher />
    </header>
  );
}

function LanguageSwitcher() {
  const { t, locale } = useT();
  const setLocale = useAtlas((s) => s.setLocale);
  return (
    <div className="lang" role="group" aria-label={t('language')}>
      {LOCALES.map((l) => (
        <button
          key={l}
          className={`lang__btn${l === locale ? ' is-active' : ''}`}
          onClick={() => setLocale(l)}
          aria-pressed={l === locale}
        >
          {LOCALE_LABEL[l]}
        </button>
      ))}
    </div>
  );
}
