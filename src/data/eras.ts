import type { Era, EraId } from './types';

const decade = (start: number, pl: string): Era => ({
  id: `${start}s` as EraId,
  start,
  end: start + 9,
  label: { en: `${start}s`, pl, ru: `${start}-е` },
});

export const ERAS: Era[] = [
  decade(1940, 'lata 40.'),
  decade(1950, 'lata 50.'),
  decade(1960, 'lata 60.'),
  decade(1970, 'lata 70.'),
  decade(1980, 'lata 80.'),
  decade(1990, 'lata 90.'),
  decade(2000, 'lata 2000'),
  decade(2010, 'lata 2010'),
  decade(2020, 'lata 2020'),
];

export const DEFAULT_ERA: EraId = '1960s';

export const getEra = (id: EraId) => ERAS.find((e) => e.id === id)!;
