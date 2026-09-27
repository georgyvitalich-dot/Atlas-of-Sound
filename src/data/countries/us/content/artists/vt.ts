import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** Vermont — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const VT_ARTISTS: Artist[] = [
  {
    id: 'phish', name: 'Phish', kind: 'group', formed: 1983,
    cityId: 'us-vt-burlington', regionId: 'us-vt',
    genres: ['rock'], eras: ['1990s'], significance: 3,
    featuredTrack: tr('Down with Disease', 1994),
    description: {
      en: 'Formed at the University of Vermont, they built a devoted touring following with improvised, genre-hopping jams.',
      pl: 'Założeni na Uniwersytecie Vermontu, zbudowali oddaną publiczność koncertową dzięki improwizowanym jamom przeskakującym między gatunkami.',
      ru: 'Созданные в Университете Вермонта, они собрали преданную аудиторию благодаря импровизационным джемам, скачущим по жанрам.',
    },
  },
];
