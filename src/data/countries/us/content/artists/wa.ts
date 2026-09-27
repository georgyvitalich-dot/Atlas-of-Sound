import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** Washington — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const WA_ARTISTS: Artist[] = [
  // Ray Charles and Quincy Jones started out in Seattle but made their defining work elsewhere.
  {
    id: 'jimi-hendrix', name: 'Jimi Hendrix', kind: 'person', born: '1942-11-27',
    birthplace: 'Seattle, Washington', cityId: 'us-wa-seattle', district: 'Central District',
    regionId: 'us-wa', genres: ['rock', 'blues'], eras: ['1960s'], significance: 5,
    featuredTrack: tr('Purple Haze', 1967),
    description: {
      en: 'Learned guitar in Seattle’s Central District, then left for London and reinvented what the electric guitar could do.',
      pl: 'Nauczył się grać na gitarze w dzielnicy Central District w Seattle, potem wyjechał do Londynu i na nowo zdefiniował możliwości gitary elektrycznej.',
      ru: 'Учился играть на гитаре в сиэтлском Сентрал-Дистрикте, затем уехал в Лондон и заново изобрёл возможности электрогитары.',
    },
  },
  {
    id: 'the-sonics', name: 'The Sonics', kind: 'group', formed: 1960,
    cityId: 'us-wa-tacoma', regionId: 'us-wa',
    genres: ['rock'], eras: ['1960s'], significance: 3,
    featuredTrack: tr('The Witch', 1964),
    description: {
      en: 'Tacoma’s raw, screaming garage rockers, whose “The Witch” became the Northwest’s best-selling local single — proto-punk before punk.',
      pl: 'Surowi, krzykliwi garażowi rockowcy z Tacomy, których „The Witch” stało się najlepiej sprzedającym się lokalnym singlem Północnego Zachodu — protopunk przed punkiem.',
      ru: 'Сырые, орущие гаражные рокеры из Такомы; их «The Witch» стала самым продаваемым местным синглом Северо-Запада — прото-панк до панка.',
    },
  },
  {
    id: 'nirvana', name: 'Nirvana', kind: 'group', formed: 1987,
    cityId: 'us-wa-aberdeen', regionId: 'us-wa',
    genres: ['rock'], eras: ['1990s'], significance: 5,
    featuredTrack: tr('Smells Like Teen Spirit', 1991),
    description: {
      en: 'Kurt Cobain’s band from Aberdeen, whose “Nevermind” took Seattle’s grunge scene to the top of the charts and changed 1990s rock.',
      pl: 'Zespół Kurta Cobaina z Aberdeen, którego „Nevermind” wyniosło scenę grunge z Seattle na szczyty list i odmieniło rock lat 90.',
      ru: 'Группа Курта Кобейна из Абердина, чей «Nevermind» вывел сиэтлскую гранж-сцену на вершину чартов и изменил рок 1990-х.',
    },
  },
  {
    id: 'soundgarden', name: 'Soundgarden', kind: 'group', formed: 1984,
    cityId: 'us-wa-seattle', regionId: 'us-wa',
    genres: ['rock'], eras: ['1980s', '1990s'], significance: 4,
    featuredTrack: tr('Black Hole Sun', 1994),
    eraTracks: { '1980s': tr('Loud Love', 1989) },
    description: {
      en: 'Chris Cornell’s Seattle band, the first grunge group to sign with a major label, known for heavy riffs and a soaring voice.',
      pl: 'Zespół Chrisa Cornella z Seattle, pierwsza grunge’owa grupa z kontraktem w dużej wytwórni, znana z ciężkich riffów i szybującego głosu.',
      ru: 'Сиэтлская группа Криса Корнелла — первая гранж-группа с контрактом на мейджор-лейбле, известная тяжёлыми риффами и парящим вокалом.',
    },
  },
  {
    id: 'pearl-jam', name: 'Pearl Jam', kind: 'group', formed: 1990,
    cityId: 'us-wa-seattle', regionId: 'us-wa',
    genres: ['rock'], eras: ['1990s'], significance: 4,
    featuredTrack: tr('Alive', 1991),
    description: {
      en: 'Seattle’s most enduring grunge band, whose debut “Ten” and battles with the music industry defined 1990s rock’s conscience.',
      pl: 'Najtrwalszy zespół grunge’owy z Seattle, którego debiut „Ten” i spory z przemysłem muzycznym zdefiniowały rockowe sumienie lat 90.',
      ru: 'Самая долгоживущая гранж-группа Сиэтла, чей дебют «Ten» и борьба с музыкальной индустрией определили совесть рока 1990-х.',
    },
  },
  {
    id: 'alice-in-chains', name: 'Alice in Chains', kind: 'group', formed: 1987,
    cityId: 'us-wa-seattle', regionId: 'us-wa',
    genres: ['rock'], eras: ['1990s'], significance: 3,
    featuredTrack: tr('Man in the Box', 1990),
    description: {
      en: 'A Seattle grunge band whose dark, harmonized vocals over metal-weight riffs set it apart from its peers.',
      pl: 'Grunge’owy zespół z Seattle, którego mroczne, zharmonizowane wokale nad metalowymi riffami wyróżniały go na tle innych.',
      ru: 'Сиэтлская гранж-группа, чьи мрачные гармонизированные вокалы поверх металлических риффов выделяли её среди современников.',
    },
  },
  {
    id: 'bikini-kill', name: 'Bikini Kill', kind: 'group', formed: 1990,
    cityId: 'us-wa-olympia', regionId: 'us-wa',
    genres: ['rock'], eras: ['1990s'], significance: 3,
    featuredTrack: tr('Rebel Girl', 1993),
    description: {
      en: 'Kathleen Hanna’s Olympia punk band helped launch the riot grrrl movement.',
      pl: 'Punkowy zespół Kathleen Hanny z Olympii pomógł zapoczątkować ruch riot grrrl.',
      ru: 'Панк-группа Кэтлин Ханны из Олимпии помогла запустить движение riot grrrl.',
    },
  },
  {
    id: 'sleater-kinney', name: 'Sleater-Kinney', kind: 'group', formed: 1994,
    cityId: 'us-wa-olympia', regionId: 'us-wa',
    genres: ['rock'], eras: ['1990s', '2000s'], significance: 3,
    featuredTrack: tr('Dig Me Out', 1997),
    eraTracks: { '2000s': tr('Entertain', 2005) },
    description: {
      en: 'An Olympia trio born from riot grrrl that became one of the most acclaimed rock bands of its generation.',
      pl: 'Trio z Olympii, wyrosłe z riot grrrl, które stało się jednym z najbardziej cenionych zespołów rockowych swojego pokolenia.',
      ru: 'Трио из Олимпии, выросшее из riot grrrl и ставшее одной из самых признанных рок-групп своего поколения.',
    },
  },
  {
    id: 'death-cab-for-cutie', name: 'Death Cab for Cutie', kind: 'group', formed: 1997,
    cityId: 'us-wa-bellingham', regionId: 'us-wa',
    genres: ['rock'], eras: ['2000s'], significance: 3,
    featuredTrack: tr('I Will Follow You into the Dark', 2005),
    description: {
      en: 'Ben Gibbard’s Bellingham band, whose tender indie rock crossed over to the mainstream in the mid-2000s.',
      pl: 'Zespół Bena Gibbarda z Bellingham, którego czuły indie rock przebił się do mainstreamu w połowie lat 2000.',
      ru: 'Группа Бена Гиббарда из Беллингхема, чей нежный инди-рок прорвался в мейнстрим в середине 2000-х.',
    },
  },
  {
    id: 'macklemore', name: 'Macklemore', kind: 'person', born: '1983-06-19',
    birthplace: 'Seattle, Washington', cityId: 'us-wa-seattle', regionId: 'us-wa',
    genres: ['hiphop'], eras: ['2010s'], significance: 3,
    featuredTrack: tr('Thrift Shop', 2012),
    description: {
      en: 'With producer Ryan Lewis, the Seattle rapper took independently released songs like “Thrift Shop” to No. 1.',
      pl: 'Wspólnie z producentem Ryanem Lewisem raper z Seattle wyniósł niezależnie wydane utwory, jak „Thrift Shop”, na 1. miejsce.',
      ru: 'Вместе с продюсером Райаном Льюисом сиэтлский рэпер вывел независимо изданные песни вроде «Thrift Shop» на 1-е место.',
    },
  },
  {
    id: 'brandi-carlile', name: 'Brandi Carlile', kind: 'person', born: '1981-06-01',
    birthplace: 'Ravensdale, Washington', cityId: 'us-wa-seattle', regionId: 'us-wa',
    genres: ['folk', 'country'], eras: ['2010s'], significance: 3,
    featuredTrack: tr('The Joke', 2017),
    description: {
      en: 'A singer-songwriter from rural King County who built her career in Seattle clubs and became a leading voice of Americana.',
      pl: 'Songwriterka z wiejskiego hrabstwa King, która zbudowała karierę w klubach Seattle i stała się czołowym głosem americany.',
      ru: 'Автор-исполнительница из сельского округа Кинг, построившая карьеру в клубах Сиэтла и ставшая ведущим голосом американы.',
    },
  },
];
