import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** Minnesota — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const MN_ARTISTS: Artist[] = [
  // Bob Dylan (born in Duluth) is listed in New York, where his work was made.
  {
    id: 'the-andrews-sisters', name: 'The Andrews Sisters', kind: 'group', formed: 1925,
    cityId: 'us-mn-minneapolis', regionId: 'us-mn',
    genres: ['pop', 'jazz'], eras: ['1940s'], significance: 4,
    featuredTrack: tr('Boogie Woogie Bugle Boy', 1941),
    description: {
      en: 'Three sisters from Minneapolis whose tight close harmonies became the sound of World War II America.',
      pl: 'Trzy siostry z Minneapolis, których zwarte harmonie stały się brzmieniem Ameryki czasów II wojny światowej.',
      ru: 'Три сестры из Миннеаполиса, чьи плотные гармонии стали звуком Америки времён Второй мировой.',
    },
  },
  {
    id: 'prince', name: 'Prince', kind: 'person', born: '1958-06-07',
    birthplace: 'Minneapolis, Minnesota', cityId: 'us-mn-minneapolis', regionId: 'us-mn',
    genres: ['pop', 'rnb', 'rock'], eras: ['1980s', '1990s'], significance: 5,
    featuredTrack: tr('Purple Rain', 1984),
    eraTracks: { '1990s': tr('Diamonds and Pearls', 1991) },
    description: {
      en: 'A Minneapolis multi-instrumentalist whose synth-funk defined the “Minneapolis sound” and who stayed loyal to his city at Paisley Park.',
      pl: 'Multiinstrumentalista z Minneapolis, którego synth-funk zdefiniował „brzmienie Minneapolis” i który pozostał wierny miastu w Paisley Park.',
      ru: 'Мультиинструменталист из Миннеаполиса, чей синт-фанк определил «звук Миннеаполиса» и который остался верен городу в Paisley Park.',
    },
  },
  {
    id: 'husker-du', name: 'Hüsker Dü', kind: 'group', formed: 1979,
    cityId: 'us-mn-saint-paul', regionId: 'us-mn',
    genres: ['rock'], eras: ['1980s'], significance: 3,
    featuredTrack: tr('Makes No Sense at All', 1985),
    description: {
      en: 'A Saint Paul hardcore trio that added melody to punk and paved the way for alternative rock.',
      pl: 'Hardcore’owe trio z Saint Paul, które dodało punkowi melodii i utorowało drogę rockowi alternatywnemu.',
      ru: 'Хардкор-трио из Сент-Пола, добавившее панку мелодичности и проложившее путь альтернативному року.',
    },
  },
  {
    id: 'the-replacements', name: 'The Replacements', kind: 'group', formed: 1979,
    cityId: 'us-mn-minneapolis', regionId: 'us-mn',
    genres: ['rock'], eras: ['1980s'], significance: 3,
    featuredTrack: tr('Alex Chilton', 1987),
    description: {
      en: 'Paul Westerberg’s shambolic, big-hearted Minneapolis band, heroes of 1980s college rock.',
      pl: 'Chaotyczny zespół Paula Westerberga z Minneapolis o wielkim sercu, bohaterowie college rocka lat 80.',
      ru: 'Разболтанная, но душевная миннеаполисская группа Пола Вестерберга — герои колледж-рока 1980-х.',
    },
  },
  {
    id: 'lizzo', name: 'Lizzo', kind: 'person', born: '1988-04-27',
    birthplace: 'Detroit, Michigan', cityId: 'us-mn-minneapolis', regionId: 'us-mn',
    genres: ['pop', 'rnb', 'hiphop'], eras: ['2010s', '2020s'], significance: 4,
    featuredTrack: tr('Truth Hurts', 2017),
    eraTracks: { '2020s': tr('About Damn Time', 2022) },
    description: {
      en: 'Moved to Minneapolis in 2011 and grew in its indie hip-hop scene before her body-positive pop anthems went global.',
      pl: 'Przeprowadziła się do Minneapolis w 2011 roku i dojrzewała na tamtejszej scenie indie hip-hopu, zanim jej ciałopozytywne popowe hymny podbiły świat.',
      ru: 'Переехала в Миннеаполис в 2011 году и росла на местной инди-хип-хоп-сцене, прежде чем её бодипозитивные поп-гимны покорили мир.',
    },
  },
];
