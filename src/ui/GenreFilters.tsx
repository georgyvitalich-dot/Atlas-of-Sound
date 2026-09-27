import { useMemo } from 'react';
import { GENRES } from '../data/genres';
import { getCountry } from '../data/registry';
import { countryGenres } from '../data/selectors';
import { useT } from '../i18n/useT';
import { useAtlas } from '../store/useAtlasStore';

/** Multi-select genre pills; nothing selected means "all genres". Only genres the active country has. */
export function GenreFilters() {
  const { t, tx } = useT();
  const selected = useAtlas((s) => s.genres);
  const toggle = useAtlas((s) => s.toggleGenre);
  const clear = useAtlas((s) => s.clearGenres);
  const country = getCountry(useAtlas((s) => s.countryId));
  const genres = useMemo(() => countryGenres(country, GENRES), [country]);
  const inScene = useAtlas((s) => s.phase === 'explore' && !!s.focusedSceneId);

  return (
    <div className={`genres${inScene ? ' is-dimmed' : ''}`} role="group" aria-label={t('genres')}>
      <button
        className={`pill${selected.length === 0 ? ' is-active' : ''}`}
        onClick={clear}
        aria-pressed={selected.length === 0}
      >
        {t('allGenres')}
      </button>
      {genres.map((g) => (
        <button
          key={g.id}
          className={`pill${selected.includes(g.id) ? ' is-active' : ''}`}
          style={{ '--tint': g.color } as React.CSSProperties}
          onClick={() => toggle(g.id)}
          aria-pressed={selected.includes(g.id)}
        >
          {tx(g.label)}
        </button>
      ))}
    </div>
  );
}
