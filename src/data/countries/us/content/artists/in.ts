import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** Indiana — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const IN_ARTISTS: Artist[] = [
  {
    id: 'the-jackson-5', name: 'The Jackson 5', kind: 'group', formed: 1964,
    cityId: 'us-in-gary', regionId: 'us-in',
    genres: ['pop', 'soul'], eras: ['1960s', '1970s'], significance: 5,
    featuredTrack: tr('ABC', 1970),
    eraTracks: { '1960s': tr('I Want You Back', 1969) },
    description: {
      en: 'Five brothers from Gary who won local talent shows and cut their first record there before becoming Motown’s biggest act.',
      pl: 'Pięciu braci z Gary, którzy wygrywali lokalne konkursy talentów i nagrali tam pierwszą płytę, zanim stali się największą gwiazdą Motown.',
      ru: 'Пятеро братьев из Гэри, выигрывавшие местные конкурсы талантов и записавшие там первую пластинку, прежде чем стать главными звёздами Motown.',
    },
  },
  {
    id: 'michael-jackson', name: 'Michael Jackson', kind: 'person', born: '1958-08-29',
    birthplace: 'Gary, Indiana', cityId: 'us-in-gary', regionId: 'us-in',
    genres: ['pop', 'rnb'], eras: ['1970s', '1980s', '1990s'], significance: 5,
    featuredTrack: tr('Billie Jean', 1982),
    eraTracks: {
      '1970s': tr("Don't Stop 'Til You Get Enough", 1979),
      '1990s': tr('Black or White', 1991),
    },
    description: {
      en: 'The Jackson 5’s youngest star from Gary grew into the “King of Pop”; his “Thriller” is the best-selling album of all time.',
      pl: 'Najmłodsza gwiazda The Jackson 5 z Gary wyrosła na „Króla Popu”; jego „Thriller” to najlepiej sprzedający się album wszech czasów.',
      ru: 'Младшая звезда The Jackson 5 из Гэри выросла в «короля поп-музыки»; его «Thriller» — самый продаваемый альбом в истории.',
    },
  },
  {
    id: 'wes-montgomery', name: 'Wes Montgomery', kind: 'person', born: '1923-03-06',
    birthplace: 'Indianapolis, Indiana', cityId: 'us-in-indianapolis', district: 'Indiana Avenue',
    regionId: 'us-in', genres: ['jazz'], eras: ['1960s'], significance: 4,
    featuredTrack: tr('Four on Six', 1960),
    description: {
      en: 'A self-taught guitarist who played thumb-picked octaves in Indiana Avenue clubs before becoming the most influential jazz guitarist of the 1960s.',
      pl: 'Samouk, który grał kciukiem oktawy w klubach Indiana Avenue, zanim stał się najbardziej wpływowym gitarzystą jazzowym lat 60.',
      ru: 'Гитарист-самоучка, игравший большим пальцем октавы в клубах Индиана-авеню, прежде чем стать самым влиятельным джазовым гитаристом 1960-х.',
    },
  },
  {
    id: 'john-mellencamp', name: 'John Mellencamp', kind: 'person', born: '1951-10-07',
    birthplace: 'Seymour, Indiana', cityId: 'us-in-seymour', regionId: 'us-in',
    genres: ['rock'], eras: ['1980s'], significance: 4,
    featuredTrack: tr('Jack & Diane', 1982),
    description: {
      en: 'A Seymour native whose heartland rock, from “Small Town” to “Pink Houses”, chronicled rural Indiana life.',
      pl: 'Pochodzący z Seymour twórca, którego heartland rock — od „Small Town” po „Pink Houses” — opisywał życie prowincjonalnej Indiany.',
      ru: 'Уроженец Сеймура, чей хартленд-рок — от «Small Town» до «Pink Houses» — описывал жизнь сельской Индианы.',
    },
  },
];
