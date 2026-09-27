import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** New Mexico — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const NM_ARTISTS: Artist[] = [
  // John Denver (born in Roswell) is listed in Colorado; Buddy Holly's Clovis sessions in Texas.
  {
    id: 'the-shins', name: 'The Shins', kind: 'group', formed: 1996,
    cityId: 'us-nm-albuquerque', regionId: 'us-nm',
    genres: ['rock', 'pop'], eras: ['2000s'], significance: 3,
    featuredTrack: tr('New Slang', 2001),
    description: {
      en: 'James Mercer’s Albuquerque band made gentle, melodic indie pop that became a touchstone of the early 2000s.',
      pl: 'Zespół Jamesa Mercera z Albuquerque tworzył łagodny, melodyjny indie pop, który stał się punktem odniesienia początku lat 2000.',
      ru: 'Группа Джеймса Мерсера из Альбукерке играла мягкий мелодичный инди-поп, ставший ориентиром начала 2000-х.',
    },
  },
];
