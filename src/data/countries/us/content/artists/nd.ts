import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** North Dakota — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const ND_ARTISTS: Artist[] = [
  {
    id: 'peggy-lee', name: 'Peggy Lee', kind: 'person', born: '1920-05-26',
    birthplace: 'Jamestown, North Dakota', cityId: 'us-nd-fargo', regionId: 'us-nd',
    genres: ['jazz', 'pop'], eras: ['1940s', '1950s'], significance: 4,
    featuredTrack: tr('Fever', 1958),
    eraTracks: { '1940s': tr("Why Don't You Do Right?", 1942) },
    description: {
      en: 'Began singing on Fargo’s WDAY radio, then joined Benny Goodman and became a master of cool, understated jazz-pop.',
      pl: 'Zaczynała śpiewać w radiu WDAY w Fargo, potem dołączyła do Benny’ego Goodmana i stała się mistrzynią chłodnego, oszczędnego jazz-popu.',
      ru: 'Начинала петь на радио WDAY в Фарго, затем присоединилась к Бенни Гудмену и стала мастером прохладного, сдержанного джаз-попа.',
    },
  },
];
