import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** Florida — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const FL_ARTISTS: Artist[] = [
  // Ray Charles grew up in Greenville, FL but is listed in Georgia (guidelines §2 exception).
  {
    id: 'lynyrd-skynyrd', name: 'Lynyrd Skynyrd', kind: 'group', formed: 1964,
    cityId: 'us-fl-jacksonville', regionId: 'us-fl',
    genres: ['rock'], eras: ['1970s'], significance: 4,
    featuredTrack: tr('Sweet Home Alabama', 1974),
    description: {
      en: 'Jacksonville teenagers who became the defining Southern rock band, with triple guitars and songs like “Free Bird”.',
      pl: 'Nastolatkowie z Jacksonville, którzy stali się sztandarowym zespołem southern rocka — z trzema gitarami i utworami jak „Free Bird”.',
      ru: 'Подростки из Джексонвилла, ставшие главной группой южного рока — с тремя гитарами и песнями вроде «Free Bird».',
    },
  },
  {
    id: 'kc-and-the-sunshine-band', name: 'KC and the Sunshine Band', kind: 'group', formed: 1973,
    cityId: 'us-fl-miami', regionId: 'us-fl',
    genres: ['pop', 'rnb'], eras: ['1970s'], significance: 4,
    featuredTrack: tr('Get Down Tonight', 1975),
    description: {
      en: 'Formed around Miami’s TK Records, they fused Caribbean-flavored funk with disco and topped the charts repeatedly in the 1970s.',
      pl: 'Założony wokół wytwórni TK Records w Miami zespół połączył funk o karaibskim posmaku z disco i wielokrotnie trafiał na szczyty list w latach 70.',
      ru: 'Сложившаяся вокруг майамского лейбла TK Records группа соединила фанк с карибским оттенком и диско и не раз возглавляла чарты 1970-х.',
    },
  },
  {
    id: 'gloria-estefan', name: 'Gloria Estefan', kind: 'person', born: '1957-09-01',
    birthplace: 'Havana, Cuba', cityId: 'us-fl-miami', regionId: 'us-fl',
    genres: ['latin', 'pop'], eras: ['1980s', '1990s'], significance: 4,
    featuredTrack: tr('Conga', 1985),
    eraTracks: { '1990s': tr('Coming Out of the Dark', 1991) },
    description: {
      en: 'The voice of Miami Sound Machine, who brought Cuban-American rhythms into mainstream pop and became a symbol of Latin Miami.',
      pl: 'Głos Miami Sound Machine, który wprowadził kubańsko-amerykańskie rytmy do mainstreamowego popu i stał się symbolem latynoskiego Miami.',
      ru: 'Вокалистка Miami Sound Machine, принёсшая кубино-американские ритмы в мейнстрим-поп и ставшая символом латинского Майами.',
    },
  },
  {
    id: 'backstreet-boys', name: 'Backstreet Boys', kind: 'group', formed: 1993,
    cityId: 'us-fl-orlando', regionId: 'us-fl',
    genres: ['pop'], eras: ['1990s'], significance: 4,
    featuredTrack: tr('I Want It That Way', 1999),
    description: {
      en: 'Assembled in Orlando, they became the best-selling boy band in history and led the late-1990s teen-pop boom.',
      pl: 'Założeni w Orlando, stali się najlepiej sprzedającym się boysbandem w historii i przewodzili boomowi nastoletniego popu końca lat 90.',
      ru: 'Собранные в Орландо, они стали самым продаваемым бой-бэндом в истории и возглавили тин-поп-бум конца 1990-х.',
    },
  },
  {
    id: 'nsync', name: '*NSYNC', kind: 'group', formed: 1995,
    cityId: 'us-fl-orlando', regionId: 'us-fl',
    genres: ['pop'], eras: ['1990s', '2000s'], significance: 3,
    featuredTrack: tr('Bye Bye Bye', 2000),
    eraTracks: { '1990s': tr("Tearin' Up My Heart", 1997) },
    description: {
      en: 'Orlando’s other great boy band, whose 2000 album “No Strings Attached” set a first-week sales record.',
      pl: 'Drugi wielki boysband z Orlando, którego album „No Strings Attached” z 2000 roku ustanowił rekord sprzedaży w pierwszym tygodniu.',
      ru: 'Второй великий бой-бэнд Орландо, чей альбом 2000 года «No Strings Attached» установил рекорд продаж первой недели.',
    },
  },
  {
    id: 'limp-bizkit', name: 'Limp Bizkit', kind: 'group', formed: 1994,
    cityId: 'us-fl-jacksonville', regionId: 'us-fl',
    genres: ['rock', 'hiphop'], eras: ['1990s', '2000s'], significance: 3,
    featuredTrack: tr('Break Stuff', 1999),
    eraTracks: { '2000s': tr("Rollin' (Air Raid Vehicle)", 2000) },
    description: {
      en: 'Fred Durst’s Jacksonville band turned rap-metal into late-1990s arena rock.',
      pl: 'Zespół Freda Dursta z Jacksonville zamienił rap-metal w stadionowy rock końca lat 90.',
      ru: 'Группа Фреда Дёрста из Джексонвилла превратила рэп-метал в стадионный рок конца 1990-х.',
    },
  },
  {
    id: 'rick-ross', name: 'Rick Ross', kind: 'person', born: '1976-01-28',
    birthplace: 'Clarksdale, Mississippi', cityId: 'us-fl-miami', district: 'Carol City',
    regionId: 'us-fl', genres: ['hiphop'], eras: ['2000s', '2010s'], significance: 3,
    featuredTrack: tr('Hustlin\'', 2006),
    eraTracks: { '2010s': tr('Aston Martin Music', 2010) },
    description: {
      en: 'Raised in Miami’s Carol City, he built a larger-than-life persona and the Maybach Music label on booming, luxurious Southern rap.',
      pl: 'Wychowany w Carol City w Miami, zbudował potężny wizerunek i wytwórnię Maybach Music na dudniącym, luksusowym rapie Południa.',
      ru: 'Выросший в майамском Кэрол-Сити, он построил образ «босса» и лейбл Maybach Music на гулком, роскошном южном рэпе.',
    },
  },
  {
    id: 'pitbull', name: 'Pitbull', kind: 'person', born: '1981-01-15',
    birthplace: 'Miami, Florida', cityId: 'us-fl-miami', regionId: 'us-fl',
    genres: ['hiphop', 'latin', 'pop'], eras: ['2000s', '2010s'], significance: 3,
    featuredTrack: tr('Give Me Everything', 2011),
    eraTracks: { '2000s': tr('I Know You Want Me (Calle Ocho)', 2009) },
    description: {
      en: '“Mr. Worldwide” came up in Miami’s bass-heavy rap scene and became a bilingual party-pop hitmaker.',
      pl: '„Mr. Worldwide” wyrósł na scenie rapu z Miami z ciężkim basem i stał się dwujęzycznym twórcą imprezowych przebojów.',
      ru: '«Мистер Ворлдвайд» вырос на майамской рэп-сцене с тяжёлым басом и стал двуязычным создателем клубных хитов.',
    },
  },
];
