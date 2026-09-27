import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** Oklahoma — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const OK_ARTISTS: Artist[] = [
  // Chet Baker (CA), Jay McShann (MO) and Garth Brooks made their defining work elsewhere.
  {
    id: 'bob-wills', name: 'Bob Wills', kind: 'person', born: '1905-03-06',
    birthplace: 'Kosse, Texas', cityId: 'us-ok-tulsa', regionId: 'us-ok',
    genres: ['country'], eras: ['1940s'], significance: 5,
    featuredTrack: tr('New San Antonio Rose', 1940),
    description: {
      en: 'From Tulsa’s KVOO radio and Cain’s Ballroom, his Texas Playboys fused fiddle music, jazz and blues into Western swing.',
      pl: 'Z radia KVOO i sali Cain’s Ballroom w Tulsie jego Texas Playboys połączyli muzykę skrzypcową, jazz i blues w western swing.',
      ru: 'С радио KVOO и из Cain’s Ballroom в Талсе его Texas Playboys сплавили скрипичную музыку, джаз и блюз в вестерн-свинг.',
    },
  },
  {
    id: 'woody-guthrie', name: 'Woody Guthrie', kind: 'person', born: '1912-07-14',
    birthplace: 'Okemah, Oklahoma', cityId: 'us-ok-okemah', regionId: 'us-ok',
    genres: ['folk'], eras: ['1940s'], significance: 5,
    featuredTrack: tr('Talking Dust Bowl Blues', 1940),
    description: {
      en: 'An Okemah native whose Dust Bowl Ballads gave a voice to displaced Okies and set the course of American protest folk.',
      pl: 'Pochodzący z Okemah twórca, którego „Dust Bowl Ballads” dały głos wysiedlonym mieszkańcom Oklahomy i wyznaczyły kurs amerykańskiego folku protestu.',
      ru: 'Уроженец Окими, чьи «Dust Bowl Ballads» дали голос согнанным с земли оклахомцам и задали курс американскому протестному фолку.',
    },
  },
  {
    id: 'charlie-christian', name: 'Charlie Christian', kind: 'person', born: '1916-07-29',
    birthplace: 'Bonham, Texas', cityId: 'us-ok-oklahoma-city', district: 'Deep Deuce',
    regionId: 'us-ok', genres: ['jazz'], eras: ['1940s'], significance: 4,
    featuredTrack: tr('Solo Flight', 1941),
    description: {
      en: 'Raised in Oklahoma City’s Deep Deuce, he made the electric guitar a jazz solo instrument in Benny Goodman’s band.',
      pl: 'Wychowany w dzielnicy Deep Deuce w Oklahoma City, uczynił z gitary elektrycznej jazzowy instrument solowy w zespole Benny’ego Goodmana.',
      ru: 'Выросший в районе Дип-Дьюс в Оклахома-Сити, он сделал электрогитару сольным джазовым инструментом в оркестре Бенни Гудмена.',
    },
  },
  {
    id: 'jj-cale', name: 'J.J. Cale', kind: 'person', born: '1938-12-05',
    birthplace: 'Oklahoma City, Oklahoma', cityId: 'us-ok-tulsa', regionId: 'us-ok',
    genres: ['rock', 'blues'], eras: ['1970s'], significance: 3,
    featuredTrack: tr('Cocaine', 1976),
    description: {
      en: 'The architect of the laid-back “Tulsa Sound”, whose understated songs became hits for Eric Clapton and others.',
      pl: 'Architekt wyluzowanego „Tulsa Sound”, którego stonowane piosenki stały się przebojami Erica Claptona i innych.',
      ru: 'Архитектор расслабленного «Tulsa Sound», чьи сдержанные песни стали хитами Эрика Клэптона и других.',
    },
  },
  {
    id: 'reba-mcentire', name: 'Reba McEntire', kind: 'person', born: '1955-03-28',
    birthplace: 'McAlester, Oklahoma', cityId: 'us-ok-mcalester', regionId: 'us-ok',
    genres: ['country'], eras: ['1980s', '1990s'], significance: 4,
    featuredTrack: tr('Fancy', 1990),
    eraTracks: { '1980s': tr("Whoever's in New England", 1986) },
    description: {
      en: 'A rodeo family’s daughter, discovered singing the anthem at Oklahoma City’s National Finals Rodeo, who became one of country’s biggest stars.',
      pl: 'Córka rodziny rodeo, odkryta, gdy śpiewała hymn podczas National Finals Rodeo w Oklahoma City, a potem jedna z największych gwiazd country.',
      ru: 'Дочь семьи родео-наездников, замеченная, когда пела гимн на National Finals Rodeo в Оклахома-Сити, а затем одна из главных звёзд кантри.',
    },
  },
  {
    id: 'the-flaming-lips', name: 'The Flaming Lips', kind: 'group', formed: 1983,
    cityId: 'us-ok-oklahoma-city', regionId: 'us-ok',
    genres: ['rock'], eras: ['1990s', '2000s'], significance: 3,
    featuredTrack: tr('Do You Realize??', 2002),
    eraTracks: { '1990s': tr("She Don't Use Jelly", 1993) },
    description: {
      en: 'Wayne Coyne’s Oklahoma City band went from noisy psychedelia to “Do You Realize??”, the state’s official rock song.',
      pl: 'Zespół Wayne’a Coyne’a z Oklahoma City przeszedł od hałaśliwej psychodelii do „Do You Realize??”, oficjalnej rockowej pieśni stanu.',
      ru: 'Группа Уэйна Койна из Оклахома-Сити прошла путь от шумной психоделии до «Do You Realize??» — официальной рок-песни штата.',
    },
  },
  {
    id: 'hanson', name: 'Hanson', kind: 'group', formed: 1992,
    cityId: 'us-ok-tulsa', regionId: 'us-ok',
    genres: ['pop'], eras: ['1990s'], significance: 3,
    featuredTrack: tr('MMMBop', 1997),
    description: {
      en: 'Three Tulsa brothers who were still teenagers when “MMMBop” topped charts around the world.',
      pl: 'Trzej bracia z Tulsy, którzy byli jeszcze nastolatkami, gdy „MMMBop” podbiło listy na całym świecie.',
      ru: 'Трое братьев из Талсы, ещё подростками покорившие мировые чарты песней «MMMBop».',
    },
  },
];
