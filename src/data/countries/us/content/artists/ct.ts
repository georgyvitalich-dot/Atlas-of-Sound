import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** Connecticut — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const CT_ARTISTS: Artist[] = [
  {
    id: 'hatebreed', name: 'Hatebreed', kind: 'group', formed: 1994,
    cityId: 'us-ct-bridgeport', regionId: 'us-ct',
    genres: ['rock'], eras: ['2000s'], significance: 2,
    featuredTrack: tr('I Will Be Heard', 2002),
    description: {
      en: 'A Bridgeport hardcore band whose metallic, motivational anthems made it a leader of 2000s metalcore.',
      pl: 'Hardcore’owy zespół z Bridgeport, którego metalowe, motywujące hymny uczyniły go liderem metalcore’u lat 2000.',
      ru: 'Хардкор-группа из Бриджпорта, чьи металлические мотивирующие гимны сделали её лидером металкора 2000-х.',
    },
  },
];
