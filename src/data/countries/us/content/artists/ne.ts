import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** Nebraska — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const NE_ARTISTS: Artist[] = [
  // Elliott Smith (born in Omaha) is listed in Oregon, where his work was made.
  {
    id: '311', name: '311', kind: 'group', formed: 1988,
    cityId: 'us-ne-omaha', regionId: 'us-ne',
    genres: ['rock', 'hiphop'], eras: ['1990s'], significance: 3,
    featuredTrack: tr('Down', 1995),
    description: {
      en: 'Omaha friends who mixed rap, reggae and funk-metal and carried the city’s sound to 1990s radio.',
      pl: 'Przyjaciele z Omahy, którzy łączyli rap, reggae i funk-metal i zanieśli brzmienie miasta do radia lat 90.',
      ru: 'Друзья из Омахи, смешавшие рэп, регги и фанк-метал и донёсшие звук города до радио 1990-х.',
    },
  },
  {
    id: 'bright-eyes', name: 'Bright Eyes', kind: 'group', formed: 1995,
    cityId: 'us-ne-omaha', regionId: 'us-ne',
    genres: ['folk', 'rock'], eras: ['2000s'], significance: 3,
    featuredTrack: tr('Lua', 2004),
    description: {
      en: 'Conor Oberst’s project at the heart of Omaha’s Saddle Creek label, known for raw, literate indie folk.',
      pl: 'Projekt Conora Obersta w sercu wytwórni Saddle Creek z Omahy, znany z surowego, literackiego indie folku.',
      ru: 'Проект Конора Оберста в сердце омахского лейбла Saddle Creek, известный сырым, литературным инди-фолком.',
    },
  },
];
