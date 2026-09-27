import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** West Virginia — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const WV_ARTISTS: Artist[] = [
  {
    id: 'bill-withers', name: 'Bill Withers', kind: 'person', born: '1938-07-04',
    birthplace: 'Slab Fork, West Virginia', cityId: 'us-wv-beckley', regionId: 'us-wv',
    genres: ['soul'], eras: ['1970s'], significance: 4,
    featuredTrack: tr("Ain't No Sunshine", 1971),
    description: {
      en: 'Raised in the coal town of Beckley, he began recording in his thirties and wrote soul songs of disarming plainness, like “Grandma’s Hands”.',
      pl: 'Wychowany w górniczym Beckley, zaczął nagrywać po trzydziestce i pisał soulowe piosenki o rozbrajającej prostocie, jak „Grandma’s Hands”.',
      ru: 'Выросший в шахтёрском Бекли, он начал записываться после тридцати и писал соул-песни обезоруживающей простоты вроде «Grandma’s Hands».',
    },
  },
  {
    id: 'brad-paisley', name: 'Brad Paisley', kind: 'person', born: '1972-10-28',
    birthplace: 'Glen Dale, West Virginia', cityId: 'us-wv-wheeling', regionId: 'us-wv',
    genres: ['country'], eras: ['2000s'], significance: 3,
    featuredTrack: tr('Whiskey Lullaby', 2004),
    description: {
      en: 'Spent eight years as a teenage regular on Wheeling’s Jamboree USA before becoming a guitar-slinging country star.',
      pl: 'Jako nastolatek przez osiem lat regularnie występował w Jamboree USA w Wheeling, zanim stał się gwiazdą country z gitarą w ręku.',
      ru: 'Подростком восемь лет выступал в Jamboree USA в Уилинге, прежде чем стать гитарной звездой кантри.',
    },
  },
];
