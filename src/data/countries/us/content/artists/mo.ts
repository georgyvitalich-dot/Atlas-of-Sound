import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** Missouri — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const MO_ARTISTS: Artist[] = [
  // Charlie Parker grew up in Kansas City, MO but is listed in New York (bebop);
  // Sheryl Crow and Josephine Baker made their defining work elsewhere.
  {
    id: 'jay-mcshann', name: 'Jay McShann', kind: 'person', born: '1916-01-12',
    birthplace: 'Muskogee, Oklahoma', cityId: 'us-mo-kansas-city', regionId: 'us-mo',
    genres: ['jazz', 'blues'], eras: ['1940s'], significance: 3,
    featuredTrack: tr("Confessin' the Blues", 1941),
    description: {
      en: 'A Kansas City bandleader whose blues-soaked orchestra gave a young Charlie Parker his first major showcase.',
      pl: 'Lider orkiestry z Kansas City, której przesiąknięte bluesem brzmienie dało młodemu Charliemu Parkerowi pierwszą dużą scenę.',
      ru: 'Бэнд-лидер из Канзас-Сити, в чьём пропитанном блюзом оркестре молодой Чарли Паркер впервые получил большую сцену.',
    },
  },
  {
    id: 'big-joe-turner', name: 'Big Joe Turner', kind: 'person', born: '1911-05-18',
    birthplace: 'Kansas City, Missouri', cityId: 'us-mo-kansas-city', district: '18th and Vine',
    regionId: 'us-mo', genres: ['rnb', 'blues'], eras: ['1950s'], significance: 4,
    featuredTrack: tr('Shake, Rattle and Roll', 1954),
    description: {
      en: 'A Kansas City “blues shouter” from the clubs of 18th and Vine whose R&B hits bridged swing and rock ’n’ roll.',
      pl: '„Blues shouter” z klubów przy 18th and Vine w Kansas City, którego przeboje R&B połączyły swing z rock and rollem.',
      ru: 'Блюз-шаутер из клубов района 18th and Vine в Канзас-Сити, чьи R&B-хиты перекинули мост от свинга к рок-н-роллу.',
    },
  },
  {
    id: 'chuck-berry', name: 'Chuck Berry', kind: 'person', born: '1926-10-18',
    birthplace: 'St. Louis, Missouri', cityId: 'us-mo-st-louis', regionId: 'us-mo',
    genres: ['rock'], eras: ['1950s'], significance: 5,
    featuredTrack: tr('Johnny B. Goode', 1958),
    description: {
      en: 'A St. Louis guitarist and storyteller who wrote the rules of rock ’n’ roll with riffs and lyrics about teenage life.',
      pl: 'Gitarzysta i opowiadacz z St. Louis, który riffami i tekstami o życiu nastolatków spisał zasady rock and rolla.',
      ru: 'Гитарист и рассказчик из Сент-Луиса, написавший правила рок-н-ролла риффами и текстами о жизни подростков.',
    },
  },
  {
    id: 'nelly', name: 'Nelly', kind: 'person', born: '1974-11-02',
    birthplace: 'Austin, Texas', cityId: 'us-mo-st-louis', regionId: 'us-mo',
    genres: ['hiphop'], eras: ['2000s'], significance: 4,
    featuredTrack: tr('Hot in Herre', 2002),
    description: {
      en: 'Put St. Louis on the hip-hop map with a sing-song Midwestern flow and some of the biggest hits of the 2000s.',
      pl: 'Umieścił St. Louis na hiphopowej mapie melodyjnym flow ze Środkowego Zachodu i jednymi z największych przebojów lat 2000.',
      ru: 'Нанёс Сент-Луис на хип-хоп-карту певучим среднезападным флоу и одними из главных хитов 2000-х.',
    },
  },
  {
    id: 'tech-n9ne', name: 'Tech N9ne', kind: 'person', born: '1971-11-08',
    birthplace: 'Kansas City, Missouri', cityId: 'us-mo-kansas-city', regionId: 'us-mo',
    genres: ['hiphop'], eras: ['2000s'], significance: 3,
    featuredTrack: tr('Caribou Lou', 2006),
    description: {
      en: 'A Kansas City rapper who built Strange Music into one of hip-hop’s most successful independent labels.',
      pl: 'Raper z Kansas City, który zbudował Strange Music, jedną z najbardziej udanych niezależnych wytwórni hip-hopu.',
      ru: 'Рэпер из Канзас-Сити, превративший Strange Music в один из самых успешных независимых хип-хоп-лейблов.',
    },
  },
];
