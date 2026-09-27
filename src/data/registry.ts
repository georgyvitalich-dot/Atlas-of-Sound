import type { Country } from './types';
import { unitedStates } from './countries/us';

/** Register new countries here (Poland, Japan, …). */
export const COUNTRIES: Record<string, Country> = {
  us: unitedStates,
};

export const DEFAULT_COUNTRY = 'us';

export const getCountry = (id: string) => COUNTRIES[id];
