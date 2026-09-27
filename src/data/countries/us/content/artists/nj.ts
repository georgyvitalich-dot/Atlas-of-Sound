import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** New Jersey — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const NJ_ARTISTS: Artist[] = [
  {
    id: 'frank-sinatra', name: 'Frank Sinatra', kind: 'person', born: '1915-12-12',
    birthplace: 'Hoboken, New Jersey', cityId: 'us-nj-hoboken', regionId: 'us-nj',
    genres: ['pop', 'jazz'], eras: ['1940s', '1950s', '1960s'], significance: 5,
    featuredTrack: tr('Fly Me to the Moon', 1964),
    eraTracks: {
      '1940s': tr("I'll Never Smile Again", 1940),
      '1950s': tr('Come Fly with Me', 1958),
    },
    description: {
      en: 'Hoboken’s own, who started with the Hoboken Four and became the defining voice of American popular song.',
      pl: 'Chłopak z Hoboken, który zaczynał w Hoboken Four i stał się najważniejszym głosem amerykańskiej piosenki.',
      ru: 'Уроженец Хобокена, начинавший в Hoboken Four и ставший главным голосом американской песни.',
    },
  },
  {
    id: 'sarah-vaughan', name: 'Sarah Vaughan', kind: 'person', born: '1924-03-27',
    birthplace: 'Newark, New Jersey', cityId: 'us-nj-newark', regionId: 'us-nj',
    genres: ['jazz'], eras: ['1940s', '1950s'], significance: 5,
    featuredTrack: tr('Lullaby of Birdland', 1954),
    eraTracks: { '1940s': tr('Lover Man', 1945) },
    description: {
      en: '“The Divine One” from Newark, whose operatic range and bebop phrasing set a standard for jazz singers.',
      pl: '„Boska” z Newark, której operowa skala głosu i bebopowe frazowanie wyznaczyły standard dla wokalistów jazzowych.',
      ru: '«Божественная» из Ньюарка, чей оперный диапазон и бибоп-фразировка задали стандарт для джазовых вокалистов.',
    },
  },
  {
    id: 'the-four-seasons', name: 'The Four Seasons', kind: 'group', formed: 1960,
    cityId: 'us-nj-newark', regionId: 'us-nj',
    genres: ['pop', 'rock'], eras: ['1960s'], significance: 4,
    featuredTrack: tr('Sherry', 1962),
    description: {
      en: 'Frankie Valli’s falsetto led these Newark street-corner singers to a string of 1960s No. 1s.',
      pl: 'Falset Frankiego Valliego poprowadził tych śpiewaków z ulic Newark do serii numerów jeden w latach 60.',
      ru: 'Фальцет Фрэнки Валли привёл этих уличных певцов из Ньюарка к череде первых мест в 1960-х.',
    },
  },
  {
    id: 'kool-and-the-gang', name: 'Kool & the Gang', kind: 'group', formed: 1964,
    cityId: 'us-nj-jersey-city', regionId: 'us-nj',
    genres: ['soul', 'rnb'], eras: ['1970s', '1980s'], significance: 4,
    featuredTrack: tr('Jungle Boogie', 1973),
    eraTracks: { '1980s': tr('Celebration', 1980) },
    description: {
      en: 'Jersey City jazz-funk musicians who moved from gritty grooves like “Jungle Boogie” to the party anthem “Celebration”.',
      pl: 'Jazzowo-funkowi muzycy z Jersey City, którzy przeszli od surowych groove’ów jak „Jungle Boogie” do imprezowego hymnu „Celebration”.',
      ru: 'Джаз-фанковые музыканты из Джерси-Сити, прошедшие путь от шероховатых грувов вроде «Jungle Boogie» до праздничного гимна «Celebration».',
    },
  },
  {
    id: 'bruce-springsteen', name: 'Bruce Springsteen', kind: 'person', born: '1949-09-23',
    birthplace: 'Long Branch, New Jersey', cityId: 'us-nj-asbury-park', regionId: 'us-nj',
    genres: ['rock'], eras: ['1970s', '1980s'], significance: 5,
    featuredTrack: tr('Born to Run', 1975),
    eraTracks: { '1980s': tr('Born in the U.S.A.', 1984) },
    description: {
      en: 'Forged in the bars of Asbury Park, he turned New Jersey’s working-class towns into epic rock ’n’ roll.',
      pl: 'Ukształtowany w barach Asbury Park, zamienił robotnicze miasteczka New Jersey w epicki rock and roll.',
      ru: 'Закалённый в барах Эсбери-Парка, он превратил рабочие городки Нью-Джерси в эпический рок-н-ролл.',
    },
  },
  {
    id: 'the-sugarhill-gang', name: 'The Sugarhill Gang', kind: 'group', formed: 1979,
    cityId: 'us-nj-englewood', regionId: 'us-nj',
    genres: ['hiphop'], eras: ['1970s'], significance: 4,
    featuredTrack: tr("Rapper's Delight", 1979),
    description: {
      en: 'Assembled by Sylvia Robinson of Englewood’s Sugar Hill Records, their “Rapper’s Delight” was hip-hop’s first hit record.',
      pl: 'Zebrani przez Sylvię Robinson z wytwórni Sugar Hill w Englewood; ich „Rapper’s Delight” był pierwszym przebojem hip-hopu.',
      ru: 'Собранные Сильвией Робинсон с лейбла Sugar Hill из Энглвуда; их «Rapper’s Delight» стал первым хитом хип-хопа.',
    },
  },
  {
    id: 'bon-jovi', name: 'Bon Jovi', kind: 'group', formed: 1983,
    cityId: 'us-nj-sayreville', regionId: 'us-nj',
    genres: ['rock'], eras: ['1980s'], significance: 4,
    featuredTrack: tr("Livin' on a Prayer", 1986),
    description: {
      en: 'Jon Bon Jovi’s band from Sayreville turned working-class stories into 1980s stadium anthems.',
      pl: 'Zespół Jona Bon Joviego z Sayreville zamienił historie z klasy robotniczej w stadionowe hymny lat 80.',
      ru: 'Группа Джона Бон Джови из Сейрвилла превратила истории рабочих людей в стадионные гимны 1980-х.',
    },
  },
  {
    id: 'whitney-houston', name: 'Whitney Houston', kind: 'person', born: '1963-08-09',
    birthplace: 'Newark, New Jersey', cityId: 'us-nj-newark', regionId: 'us-nj',
    genres: ['pop', 'rnb', 'soul'], eras: ['1980s', '1990s'], significance: 5,
    featuredTrack: tr('I Will Always Love You', 1992),
    eraTracks: { '1980s': tr('I Wanna Dance with Somebody (Who Loves Me)', 1987) },
    description: {
      en: 'Raised singing gospel in a Newark church, she became one of the best-selling and most powerful voices in pop history.',
      pl: 'Wychowana na śpiewie gospel w kościele w Newark, stała się jednym z najlepiej sprzedających się i najpotężniejszych głosów w historii popu.',
      ru: 'Выросшая на госпеле в церкви Ньюарка, она стала одним из самых продаваемых и мощных голосов в истории поп-музыки.',
    },
  },
  {
    id: 'queen-latifah', name: 'Queen Latifah', kind: 'person', born: '1970-03-18',
    birthplace: 'Newark, New Jersey', cityId: 'us-nj-newark', regionId: 'us-nj',
    genres: ['hiphop'], eras: ['1990s'], significance: 3,
    featuredTrack: tr('U.N.I.T.Y.', 1993),
    description: {
      en: 'A Newark MC who brought a proudly feminist voice to hip-hop and won a Grammy for “U.N.I.T.Y.”.',
      pl: 'MC z Newark, która wniosła do hip-hopu dumnie feministyczny głos i zdobyła Grammy za „U.N.I.T.Y.”.',
      ru: 'Эмси из Ньюарка, принёсшая в хип-хоп гордый феминистский голос и получившая «Грэмми» за «U.N.I.T.Y.».',
    },
  },
  {
    id: 'fugees', name: 'Fugees', kind: 'group', formed: 1990,
    cityId: 'us-nj-newark', regionId: 'us-nj',
    genres: ['hiphop', 'rnb'], eras: ['1990s'], significance: 4,
    featuredTrack: tr('Killing Me Softly', 1996),
    description: {
      en: 'Formed in South Orange, just outside Newark, the trio of Lauryn Hill, Wyclef Jean and Pras made “The Score”, one of the best-selling hip-hop albums ever.',
      pl: 'Założone w South Orange pod Newarkiem trio Lauryn Hill, Wyclefa Jeana i Prasa nagrało „The Score”, jeden z najlepiej sprzedających się albumów hiphopowych.',
      ru: 'Созданное в Саут-Ориндже под Ньюарком трио Лорин Хилл, Уайклефа Жана и Праса записало «The Score» — один из самых продаваемых хип-хоп-альбомов.',
    },
  },
  {
    id: 'lauryn-hill', name: 'Lauryn Hill', kind: 'person', born: '1975-05-26',
    birthplace: 'East Orange, New Jersey', cityId: 'us-nj-newark', regionId: 'us-nj',
    genres: ['hiphop', 'rnb', 'soul'], eras: ['1990s'], significance: 4,
    featuredTrack: tr('Doo Wop (That Thing)', 1998),
    description: {
      en: 'After the Fugees, her solo debut “The Miseducation of Lauryn Hill” became the first hip-hop album to win the Grammy for Album of the Year.',
      pl: 'Po Fugees jej solowy debiut „The Miseducation of Lauryn Hill” jako pierwszy album hiphopowy zdobył Grammy za album roku.',
      ru: 'После Fugees её сольный дебют «The Miseducation of Lauryn Hill» стал первым хип-хоп-альбомом, получившим «Грэмми» за альбом года.',
    },
  },
];
