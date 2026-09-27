import type { Track } from '../../../types';

/** Shorthand for a track: tr('Respect', 1967). */
export const tr = (title: string, year: number): Track => ({ title, year });
