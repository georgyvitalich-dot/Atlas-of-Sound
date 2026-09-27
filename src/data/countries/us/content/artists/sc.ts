import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** South Carolina — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const SC_ARTISTS: Artist[] = [
  // South Carolina-born artists placed where their defining work was made:
  // James Brown (GA), Chubby Checker (PA), Dizzy Gillespie.
  {
    id: 'the-marshall-tucker-band', name: 'The Marshall Tucker Band', kind: 'group', formed: 1972,
    cityId: 'us-sc-spartanburg', regionId: 'us-sc',
    genres: ['rock', 'country'], eras: ['1970s'], significance: 3,
    featuredTrack: tr("Can't You See", 1973),
    description: {
      en: 'Spartanburg’s Southern rockers mixed country, blues and jazz flute into their signature song “Can’t You See”.',
      pl: 'Southern rockowcy ze Spartanburga, którzy w swoim sztandarowym „Can’t You See” łączyli country, blues i jazzowy flet.',
      ru: 'Южные рокеры из Спартанберга, смешавшие в своей визитной «Can’t You See» кантри, блюз и джазовую флейту.',
    },
  },
  {
    id: 'hootie-and-the-blowfish', name: 'Hootie & the Blowfish', kind: 'group', formed: 1986,
    cityId: 'us-sc-columbia', regionId: 'us-sc',
    genres: ['rock'], eras: ['1990s'], significance: 3,
    featuredTrack: tr('Hold My Hand', 1994),
    description: {
      en: 'Formed at the University of South Carolina, their debut “Cracked Rear View” became one of the best-selling albums of the 1990s.',
      pl: 'Zespół założony na Uniwersytecie Karoliny Południowej, którego debiut „Cracked Rear View” stał się jednym z najlepiej sprzedających się albumów lat 90.',
      ru: 'Группа, основанная в Университете Южной Каролины; её дебют «Cracked Rear View» стал одним из самых продаваемых альбомов 1990-х.',
    },
  },
];
