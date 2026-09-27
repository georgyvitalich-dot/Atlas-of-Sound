import type { Artist, Track } from './types';

/**
 * Until we store verified Spotify/YouTube ids, links open a search for the
 * exact artist + track — never a guessed (and possibly wrong) id.
 */
export function spotifyUrl(artist: Artist, track: Track) {
  return (
    artist.links?.spotify ??
    `https://open.spotify.com/search/${encodeURIComponent(`${artist.name} ${track.title}`)}`
  );
}

export function youtubeUrl(artist: Artist, track: Track) {
  return (
    artist.links?.youtube ??
    `https://www.youtube.com/results?search_query=${encodeURIComponent(`${artist.name} ${track.title}`)}`
  );
}
