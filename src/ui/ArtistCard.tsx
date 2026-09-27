import { getGenre } from '../data/genres';
import { spotifyUrl, youtubeUrl } from '../data/links';
import { getCountry } from '../data/registry';
import { artistYear, getCity, trackForEra } from '../data/selectors';
import type { Artist, EraId } from '../data/types';
import { useT } from '../i18n/useT';
import { useAtlas } from '../store/useAtlasStore';

function initials(name: string) {
  const words = name.replace(/^The\s+/i, '').split(/[\s-]+/).filter(Boolean);
  return (words[0]?.[0] ?? '') + (words[1]?.[0] ?? '');
}

/** Placeholder portrait: typographic monogram tinted by the main genre. */
export function Monogram({ artist, size }: { artist: Artist; size: number }) {
  const color = getGenre(artist.genres[0])?.color ?? '#e0a458';
  if (artist.image) {
    return (
      <img className="monogram" src={artist.image.src} alt={artist.name} width={size} height={size}
        title={`${artist.image.credit} · ${artist.image.license}`} />
    );
  }
  return (
    <div className="monogram" style={{ width: size, height: size, '--tint': color } as React.CSSProperties}
      aria-hidden="true">
      <span style={{ fontSize: size * 0.42 }}>{initials(artist.name)}</span>
    </div>
  );
}

function useArtistMeta(artist: Artist, withDistrict = false) {
  const { t } = useT();
  const country = getCountry(useAtlas((s) => s.countryId));
  const city = getCity(country, artist.cityId);
  const year = artistYear(artist);
  const yearLabel = year ? `${artist.kind === 'group' ? t('formed') : t('born')} ${year}` : null;
  const place = [withDistrict ? artist.district : null, city?.name].filter(Boolean).join(', ');
  return { yearLabel, place };
}

function GenreChips({ artist }: { artist: Artist }) {
  const { tx } = useT();
  return (
    <div className="chips">
      {artist.genres.map((g) => {
        const genre = getGenre(g);
        return genre ? (
          <span key={g} className="chip" style={{ '--tint': genre.color } as React.CSSProperties}>
            {tx(genre.label)}
          </span>
        ) : null;
      })}
    </div>
  );
}

function TrackLine({ artist, eraId }: { artist: Artist; eraId: EraId }) {
  const track = trackForEra(artist, eraId);
  return (
    <div className="track">
      <span className="track__icon" aria-hidden="true">♪</span>
      <span className="track__title">{track.title}</span>
      <span className="track__year">{track.year}</span>
    </div>
  );
}

/** Compact row used inside the hover preview. */
export function ArtistRow({ artist, eraId, featured }: { artist: Artist; eraId: EraId; featured?: boolean }) {
  const { tx } = useT();
  const { yearLabel, place } = useArtistMeta(artist);
  return (
    <div className={`artist-row${featured ? ' artist-row--featured' : ''}`}>
      <Monogram artist={artist} size={featured ? 54 : 38} />
      <div className="artist-row__body">
        <div className="artist-row__name">{artist.name}</div>
        <div className="meta">{[yearLabel, place].filter(Boolean).join(' · ')}</div>
        {featured && (
          <>
            <GenreChips artist={artist} />
            <p className="artist-row__desc">{tx(artist.description)}</p>
          </>
        )}
        <TrackLine artist={artist} eraId={eraId} />
      </div>
    </div>
  );
}

/** Full card shown while exploring a region. `onCity` makes the city a link to its scene. */
export function ArtistCard({
  artist,
  eraId,
  onCity,
}: {
  artist: Artist;
  eraId: EraId;
  onCity?: (cityId: string) => void;
}) {
  const { t, tx } = useT();
  const { yearLabel, place } = useArtistMeta(artist, true);
  const track = trackForEra(artist, eraId);
  return (
    <article className="artist-card glass">
      <header className="artist-card__head">
        <Monogram artist={artist} size={60} />
        <div>
          <h3 className="artist-card__name">{artist.name}</h3>
          <div className="meta">{yearLabel}</div>
          {onCity ? (
            <button className="meta meta--place meta--link" onClick={() => onCity(artist.cityId)}>
              {place}
            </button>
          ) : (
            <div className="meta meta--place">{place}</div>
          )}
        </div>
      </header>
      <GenreChips artist={artist} />
      <p className="artist-card__desc">{tx(artist.description)}</p>
      <div className="artist-card__foot">
        <div>
          <div className="eyebrow">{t('featuredTrack')}</div>
          <TrackLine artist={artist} eraId={eraId} />
        </div>
        <div className="links">
          <a href={spotifyUrl(artist, track)} target="_blank" rel="noopener noreferrer" className="link-btn">
            Spotify
          </a>
          <a href={youtubeUrl(artist, track)} target="_blank" rel="noopener noreferrer" className="link-btn">
            YouTube
          </a>
        </div>
      </div>
    </article>
  );
}
