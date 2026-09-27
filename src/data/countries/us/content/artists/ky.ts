import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** Kentucky — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const KY_ARTISTS: Artist[] = [
  // Chris Stapleton (born in Lexington) is listed in Tennessee, where his career was made.
  {
    id: 'bill-monroe', name: 'Bill Monroe', kind: 'person', born: '1911-09-13',
    birthplace: 'Rosine, Kentucky', cityId: 'us-ky-rosine', regionId: 'us-ky',
    genres: ['bluegrass'], eras: ['1940s', '1950s'], significance: 5,
    featuredTrack: tr('Blue Moon of Kentucky', 1947),
    eraTracks: { '1950s': tr('Uncle Pen', 1950) },
    description: {
      en: 'The “Father of Bluegrass” named his Blue Grass Boys after Kentucky and forged a new genre on the Grand Ole Opry.',
      pl: '„Ojciec bluegrassu” nazwał swój zespół Blue Grass Boys na cześć Kentucky i wykuł nowy gatunek na scenie Grand Ole Opry.',
      ru: '«Отец блюграсса» назвал свою группу Blue Grass Boys в честь Кентукки и выковал новый жанр на сцене Grand Ole Opry.',
    },
  },
  {
    id: 'loretta-lynn', name: 'Loretta Lynn', kind: 'person', born: '1932-04-14',
    birthplace: 'Butcher Hollow, Kentucky', cityId: 'us-ky-van-lear', regionId: 'us-ky',
    genres: ['country'], eras: ['1960s', '1970s'], significance: 5,
    featuredTrack: tr("Coal Miner's Daughter", 1970),
    eraTracks: { '1960s': tr("You Ain't Woman Enough (To Take My Man)", 1966) },
    description: {
      en: 'A coal miner’s daughter from Butcher Hollow who wrote frank, funny songs about working-class women’s lives.',
      pl: 'Córka górnika z Butcher Hollow, która pisała szczere i zabawne piosenki o życiu kobiet z klasy robotniczej.',
      ru: 'Дочь шахтёра из Батчер-Холлоу, писавшая откровенные и остроумные песни о жизни женщин из рабочей среды.',
    },
  },
  {
    id: 'my-morning-jacket', name: 'My Morning Jacket', kind: 'group', formed: 1998,
    cityId: 'us-ky-louisville', regionId: 'us-ky',
    genres: ['rock'], eras: ['2000s'], significance: 3,
    featuredTrack: tr('One Big Holiday', 2003),
    description: {
      en: 'Jim James’s Louisville band, known for reverb-drenched Southern rock and marathon live shows.',
      pl: 'Zespół Jima Jamesa z Louisville, znany z southern rocka skąpanego w pogłosie i maratońskich koncertów.',
      ru: 'Группа Джима Джеймса из Луисвилла, известная утопающим в реверберации южным роком и марафонскими концертами.',
    },
  },
  {
    id: 'jack-harlow', name: 'Jack Harlow', kind: 'person', born: '1998-03-13',
    birthplace: 'Louisville, Kentucky', cityId: 'us-ky-louisville', regionId: 'us-ky',
    genres: ['hiphop'], eras: ['2020s'], significance: 3,
    featuredTrack: tr('First Class', 2022),
    description: {
      en: 'A Louisville rapper who stayed rooted in his hometown while scoring No. 1 hits with a smooth, conversational flow.',
      pl: 'Raper z Louisville, który pozostał związany z rodzinnym miastem, zdobywając numery jeden swobodnym, gawędziarskim flow.',
      ru: 'Рэпер из Луисвилла, оставшийся верным родному городу и взявший первые места чартов плавной разговорной подачей.',
    },
  },
];
