import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** Wyoming — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const WY_ARTISTS: Artist[] = [
  {
    id: 'chris-ledoux', name: 'Chris LeDoux', kind: 'person', born: '1948-10-02',
    birthplace: 'Biloxi, Mississippi', cityId: 'us-wy-kaycee', regionId: 'us-wy',
    genres: ['country'], eras: ['1990s'], significance: 2,
    featuredTrack: tr('Whatcha Gonna Do with a Cowboy', 1992),
    description: {
      en: 'A world champion bareback rider from Kaycee who sang about rodeo life and sold his tapes from his pickup truck before country radio caught on.',
      pl: 'Mistrz świata w jeździe na oklep z Kaycee, który śpiewał o życiu rodeo i sprzedawał kasety z pikapa, zanim zauważyło go radio country.',
      ru: 'Чемпион мира по родео без седла из Кейси, который пел о жизни родео и продавал кассеты из своего пикапа, пока его не заметило кантри-радио.',
    },
  },
];
