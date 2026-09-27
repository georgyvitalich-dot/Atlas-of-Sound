import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** Mississippi — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const MS_ARTISTS: Artist[] = [
  // Many Mississippi-born greats (Muddy Waters, Howlin' Wolf, B.B. King, Elvis,
  // Sam Cooke, Faith Hill…) are listed where their defining work was made
  // (guidelines §2); their birthplace still points here.
  {
    id: 'son-house', name: 'Son House', kind: 'person', born: '1902-03-21',
    birthplace: 'Lyon, Mississippi', cityId: 'us-ms-clarksdale', regionId: 'us-ms',
    genres: ['blues'], eras: ['1940s', '1960s'], significance: 5,
    featuredTrack: tr('Death Letter', 1965),
    eraTracks: { '1940s': tr('Walking Blues', 1941) },
    description: {
      en: 'A preacher turned bluesman whose ferocious slide guitar inspired Robert Johnson and Muddy Waters; rediscovered in 1964.',
      pl: 'Kaznodzieja, który został bluesmanem — jego drapieżna gitara slide inspirowała Roberta Johnsona i Muddy’ego Watersa; odkryty na nowo w 1964 roku.',
      ru: 'Проповедник, ставший блюзменом: его яростная слайд-гитара вдохновила Роберта Джонсона и Мадди Уотерса; заново открыт в 1964 году.',
    },
  },
  {
    id: 'bobbie-gentry', name: 'Bobbie Gentry', kind: 'person', born: '1942-07-27',
    birthplace: 'Chickasaw County, Mississippi', cityId: 'us-ms-greenwood', regionId: 'us-ms',
    genres: ['country', 'pop', 'folk'], eras: ['1960s'], significance: 4,
    featuredTrack: tr('Ode to Billie Joe', 1967),
    description: {
      en: 'Raised in the Mississippi hill country and Greenwood, she wrote “Ode to Billie Joe” — Southern Gothic set on the Tallahatchie Bridge.',
      pl: 'Wychowana na wzgórzach Missisipi i w Greenwood, napisała „Ode to Billie Joe” — południowy gotyk rozgrywający się na moście Tallahatchie.',
      ru: 'Выросшая на холмах Миссисипи и в Гринвуде, она написала «Ode to Billie Joe» — южную готику о мосте через Таллахатчи.',
    },
  },
  {
    id: 'rl-burnside', name: 'R.L. Burnside', kind: 'person', born: '1926-11-23',
    birthplace: 'Harmontown, Mississippi', cityId: 'us-ms-holly-springs', regionId: 'us-ms',
    genres: ['blues'], eras: ['1990s'], significance: 3,
    featuredTrack: tr("Goin' Down South", 1994),
    description: {
      en: 'A North Mississippi hill-country bluesman whose hypnotic one-chord grooves found a new audience through Oxford’s Fat Possum label.',
      pl: 'Bluesman ze wzgórz północnego Missisipi, którego hipnotyczne, jednoakordowe groove’y zdobyły nową publiczność dzięki wytwórni Fat Possum z Oxfordu.',
      ru: 'Блюзмен с холмов Северного Миссисипи, чьи гипнотические грувы на одном аккорде нашли новую публику благодаря лейблу Fat Possum из Оксфорда.',
    },
  },
  {
    id: '3-doors-down', name: '3 Doors Down', kind: 'group', formed: 1996,
    cityId: 'us-ms-escatawpa', regionId: 'us-ms',
    genres: ['rock'], eras: ['2000s'], significance: 3,
    featuredTrack: tr('Kryptonite', 2000),
    description: {
      en: 'A post-grunge band from Mississippi’s Gulf Coast whose debut single became a rock-radio staple.',
      pl: 'Postgrunge’owy zespół z wybrzeża Zatoki Meksykańskiej w Missisipi, którego debiutancki singiel stał się klasykiem rockowego radia.',
      ru: 'Пост-гранж-группа с побережья Мексиканского залива в Миссисипи, чей дебютный сингл стал хитом рок-радио.',
    },
  },
  {
    id: 'big-krit', name: 'Big K.R.I.T.', kind: 'person', born: '1986-08-26',
    birthplace: 'Meridian, Mississippi', cityId: 'us-ms-meridian', regionId: 'us-ms',
    genres: ['hiphop'], eras: ['2010s'], significance: 3,
    featuredTrack: tr('Country Shit', 2010),
    description: {
      en: 'A Meridian rapper-producer who built soulful, proudly country Southern hip-hop from the ground up.',
      pl: 'Raper i producent z Meridian, który od zera zbudował soulowy, dumnie „wiejski” hip-hop Południa.',
      ru: 'Рэпер и продюсер из Меридиана, создавший с нуля душевный, гордо «деревенский» южный хип-хоп.',
    },
  },
];
