import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** Kansas — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const KS_ARTISTS: Artist[] = [
  // Charlie Parker (born in Kansas City, KS) is listed in New York.
  {
    id: 'kansas', name: 'Kansas', kind: 'group', formed: 1973,
    cityId: 'us-ks-topeka', regionId: 'us-ks',
    genres: ['rock'], eras: ['1970s'], significance: 3,
    featuredTrack: tr('Carry On Wayward Son', 1976),
    description: {
      en: 'Topeka’s progressive rockers, who blended violin and heartland melody into “Carry On Wayward Son” and “Dust in the Wind”.',
      pl: 'Progresywni rockowcy z Topeki, którzy połączyli skrzypce i melodie z serca kraju w „Carry On Wayward Son” i „Dust in the Wind”.',
      ru: 'Прогрессив-рокеры из Топики, соединившие скрипку и мелодику американской глубинки в «Carry On Wayward Son» и «Dust in the Wind».',
    },
  },
];
