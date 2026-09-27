import { useEffect } from 'react';
import { useT } from './i18n/useT';
import { Scene } from './scene/Scene';
import { useAtlas } from './store/useAtlasStore';
import { EraTimeline } from './ui/EraTimeline';
import { ExploreLayer } from './ui/ExploreLayer';
import { GenreFilters } from './ui/GenreFilters';
import { HoverCard } from './ui/HoverCard';
import { IntroTitle } from './ui/IntroTitle';
import { SliceHint } from './ui/SliceHint';
import { TopBar } from './ui/TopBar';

export default function App() {
  const { t, locale } = useT();
  const phase = useAtlas((s) => s.phase);
  const ready = useAtlas((s) => s.sceneReady);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  // Keyboard: ← → switch eras, Esc steps back one level (City → Region → Country).
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const st = useAtlas.getState();
      if (st.phase === 'intro') return;
      if (e.key === 'ArrowLeft') st.stepEra(-1);
      if (e.key === 'ArrowRight') st.stepEra(1);
      if (e.key === 'Escape') st.goBack();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className={`app phase-${phase}`}>
      <Scene />
      <div className="vignette" aria-hidden="true" />

      <div className="ui">
        <TopBar />
        <HoverCard />
        <ExploreLayer />
        <div className="bottom">
          <SliceHint />
          <GenreFilters />
          <EraTimeline />
        </div>
        <div className="hint">{t('hint')}</div>
        <div className="credits">Imagery: NASA Visible Earth · Boundaries: U.S. Census Bureau</div>
      </div>

      <IntroTitle />
      <div className={`loader${ready ? ' is-done' : ''}`} aria-hidden={ready}>
        <span>Atlas of Sound</span>
      </div>
      {phase === 'intro' && ready && (
        <div className="skip">{t(window.matchMedia('(pointer: coarse)').matches ? 'tapToSkip' : 'skipIntro')}</div>
      )}
    </div>
  );
}
