import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** California — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const CA_ARTISTS: Artist[] = [
  {
    id: 't-bone-walker', name: 'T-Bone Walker', kind: 'person', born: '1910-05-28',
    birthplace: 'Linden, Texas', cityId: 'us-ca-los-angeles', district: 'Central Avenue',
    regionId: 'us-ca', genres: ['blues'], eras: ['1940s'], significance: 4,
    featuredTrack: tr('Call It Stormy Monday', 1947),
    description: {
      en: 'Brought the electric guitar to the front of the blues from the clubs of Central Avenue in Los Angeles.',
      pl: 'Z klubów Central Avenue w Los Angeles wyprowadził gitarę elektryczną na pierwszy plan bluesa.',
      ru: 'Из клубов Сентрал-авеню в Лос-Анджелесе вывел электрогитару на первый план блюза.',
    },
  },
  {
    id: 'dave-brubeck', name: 'Dave Brubeck', kind: 'person', born: '1920-12-06',
    birthplace: 'Concord, California', cityId: 'us-ca-san-francisco', regionId: 'us-ca',
    genres: ['jazz'], eras: ['1950s'], significance: 4,
    featuredTrack: tr('Take Five', 1959),
    description: {
      en: 'A Bay Area pianist whose quartet turned odd time signatures into a million-selling sound.',
      pl: 'Pianista z Zatoki San Francisco, którego kwartet zamienił nietypowe metrum w brzmienie sprzedane w milionach.',
      ru: 'Пианист из района Залива: его квартет превратил необычные размеры в хит миллионными тиражами.',
    },
  },
  {
    id: 'chet-baker', name: 'Chet Baker', kind: 'person', born: '1929-12-23',
    birthplace: 'Yale, Oklahoma', cityId: 'us-ca-los-angeles', regionId: 'us-ca',
    genres: ['jazz'], eras: ['1950s'], significance: 3,
    featuredTrack: tr('My Funny Valentine', 1954),
    description: {
      en: 'The fragile, cool trumpet and voice at the heart of West Coast jazz.',
      pl: 'Delikatna, chłodna trąbka i głos w samym sercu jazzu Zachodniego Wybrzeża.',
      ru: 'Хрупкая, «прохладная» труба и голос в самом сердце джаза Западного побережья.',
    },
  },
  {
    id: 'the-beach-boys', name: 'The Beach Boys', kind: 'group', formed: 1961,
    cityId: 'us-ca-los-angeles', regionId: 'us-ca',
    genres: ['rock', 'pop'], eras: ['1960s'], significance: 5,
    featuredTrack: tr('Good Vibrations', 1966),
    description: {
      en: 'Brothers from Hawthorne who turned surf and harmonies into studio symphonies.',
      pl: 'Bracia z Hawthorne, którzy zamienili surf i harmonie wokalne w studyjne symfonie.',
      ru: 'Братья из Хоторна, превратившие сёрф и вокальные гармонии в студийные симфонии.',
    },
  },
  {
    id: 'the-doors', name: 'The Doors', kind: 'group', formed: 1965,
    cityId: 'us-ca-los-angeles', regionId: 'us-ca',
    genres: ['rock'], eras: ['1960s'], significance: 4,
    featuredTrack: tr('Light My Fire', 1967),
    description: {
      en: "Jim Morrison's poetry and Ray Manzarek's organ gave Los Angeles its darkest psychedelic sound.",
      pl: 'Poezja Jima Morrisona i organy Raya Manzarka dały Los Angeles jego najmroczniejsze psychodeliczne brzmienie.',
      ru: 'Поэзия Джима Моррисона и орган Рэя Манзарека дали Лос-Анджелесу самое мрачное психоделическое звучание.',
    },
  },
  {
    id: 'janis-joplin', name: 'Janis Joplin', kind: 'person', born: '1943-01-19',
    birthplace: 'Port Arthur, Texas', cityId: 'us-ca-san-francisco', regionId: 'us-ca',
    genres: ['rock', 'blues'], eras: ['1960s'], significance: 5,
    featuredTrack: tr('Piece of My Heart', 1968),
    description: {
      en: 'Left Port Arthur, Texas, for San Francisco and sang the blues with an intensity rock had never heard.',
      pl: 'Wyjechała z Port Arthur w Teksasie do San Francisco i śpiewała bluesa z intensywnością, jakiej rock jeszcze nie słyszał.',
      ru: 'Уехала из Порт-Артура (Техас) в Сан-Франциско и пела блюз с такой силой, какой рок ещё не слышал.',
    },
  },
  {
    id: 'eagles', name: 'Eagles', kind: 'group', formed: 1971,
    cityId: 'us-ca-los-angeles', regionId: 'us-ca',
    genres: ['rock', 'country'], eras: ['1970s'], significance: 4,
    featuredTrack: tr('Hotel California', 1976),
    description: {
      en: 'Defined the laid-back, harmony-rich California rock of the 1970s.',
      pl: 'Zdefiniowali wyluzowany, bogaty w harmonie kalifornijski rock lat 70.',
      ru: 'Определили расслабленный, богатый гармониями калифорнийский рок 1970-х.',
    },
  },
  {
    id: 'nwa', name: 'N.W.A', kind: 'group', formed: 1987,
    cityId: 'us-ca-compton', regionId: 'us-ca',
    genres: ['hiphop'], eras: ['1980s'], significance: 5,
    featuredTrack: tr('Straight Outta Compton', 1988),
    description: {
      en: 'Put Compton on the world map and launched West Coast gangsta rap.',
      pl: 'Umieścili Compton na mapie świata i zapoczątkowali gangsta rap Zachodniego Wybrzeża.',
      ru: 'Нанесли Комптон на карту мира и запустили гангста-рэп Западного побережья.',
    },
  },
  {
    id: 'guns-n-roses', name: "Guns N' Roses", kind: 'group', formed: 1985,
    cityId: 'us-ca-los-angeles', district: 'Sunset Strip', regionId: 'us-ca',
    genres: ['rock'], eras: ['1980s'], significance: 4,
    featuredTrack: tr("Sweet Child o' Mine", 1987),
    description: {
      en: 'Emerged from the Sunset Strip to become the most dangerous-sounding hard rock band of their era.',
      pl: 'Wyszli z Sunset Strip i stali się najgroźniej brzmiącym hardrockowym zespołem swojej epoki.',
      ru: 'Вышли с Сансет-Стрип и стали самой опасно звучащей хард-рок-группой своей эпохи.',
    },
  },
  {
    id: 'dr-dre', name: 'Dr. Dre', kind: 'person', born: '1965-02-18',
    birthplace: 'Compton, California', cityId: 'us-ca-compton', regionId: 'us-ca',
    genres: ['hiphop'], eras: ['1990s'], significance: 5,
    featuredTrack: tr("Nuthin' but a 'G' Thang", 1992),
    description: {
      en: 'N.W.A co-founder whose G-funk production defined the sound of 1990s West Coast rap.',
      pl: 'Współzałożyciel N.W.A, którego produkcje G-funk zdefiniowały brzmienie rapu Zachodniego Wybrzeża lat 90.',
      ru: 'Сооснователь N.W.A, чей джи-фанк определил звучание рэпа Западного побережья 1990-х.',
    },
  },
  {
    id: 'tupac-shakur', name: 'Tupac Shakur', kind: 'person', born: '1971-06-16',
    birthplace: 'New York City', cityId: 'us-ca-oakland', regionId: 'us-ca',
    genres: ['hiphop'], eras: ['1990s'], significance: 5,
    featuredTrack: tr('California Love', 1995),
    description: {
      en: 'Born in New York, forged in the Bay Area — a poet and provocateur who became hip-hop’s enduring icon.',
      pl: 'Urodzony w Nowym Jorku, ukształtowany w Zatoce San Francisco — poeta i prowokator, który stał się trwałą ikoną hip-hopu.',
      ru: 'Родился в Нью-Йорке, сформировался в районе Залива — поэт и провокатор, ставший вечной иконой хип-хопа.',
    },
  },
  {
    id: 'snoop-dogg', name: 'Snoop Dogg', kind: 'person', born: '1971-10-20',
    birthplace: 'Long Beach, California', cityId: 'us-ca-long-beach', regionId: 'us-ca',
    genres: ['hiphop'], eras: ['1990s', '2000s'], significance: 4,
    featuredTrack: tr('Gin and Juice', 1994),
    eraTracks: { '2000s': tr('Drop It Like It’s Hot', 2004) },
    description: {
      en: "Long Beach's laid-back drawl, introduced to the world on Dr. Dre's The Chronic.",
      pl: 'Leniwy, przeciągły flow z Long Beach, przedstawiony światu na The Chronic Dr. Dre.',
      ru: 'Ленивая, тягучая подача из Лонг-Бича, впервые прозвучавшая на The Chronic Доктора Дре.',
    },
  },
  {
    id: 'green-day', name: 'Green Day', kind: 'group', formed: 1987,
    cityId: 'us-ca-berkeley', regionId: 'us-ca',
    genres: ['rock'], eras: ['1990s', '2000s'], significance: 4,
    featuredTrack: tr('Basket Case', 1994),
    eraTracks: { '2000s': tr('American Idiot', 2004) },
    description: {
      en: 'East Bay punks who took the scene around Berkeley’s 924 Gilman Street club to the mainstream.',
      pl: 'Punkowcy z East Bay, którzy wynieśli scenę skupioną wokół klubu 924 Gilman Street w Berkeley do mainstreamu.',
      ru: 'Панки из Ист-Бэя, выведшие сцену берклийского клуба 924 Gilman Street в мейнстрим.',
    },
  },
  {
    id: 'red-hot-chili-peppers', name: 'Red Hot Chili Peppers', kind: 'group', formed: 1983,
    cityId: 'us-ca-los-angeles', regionId: 'us-ca',
    genres: ['rock'], eras: ['1980s', '1990s', '2000s'], significance: 3,
    featuredTrack: tr('Under the Bridge', 1991),
    eraTracks: { '1980s': tr('Higher Ground', 1989), '2000s': tr('By the Way', 2002) },
    description: {
      en: 'Hollywood funk-punk energy that grew into melancholic odes to Los Angeles.',
      pl: 'Funk-punkowa energia z Hollywood, która przerodziła się w melancholijne ody do Los Angeles.',
      ru: 'Фанк-панк-энергия из Голливуда, переросшая в меланхоличные оды Лос-Анджелесу.',
    },
  },
  {
    id: 'linkin-park', name: 'Linkin Park', kind: 'group', formed: 1996,
    cityId: 'us-ca-los-angeles', regionId: 'us-ca',
    genres: ['rock'], eras: ['2000s'], significance: 4,
    featuredTrack: tr('In the End', 2000),
    description: {
      en: 'A band from suburban Agoura Hills that fused rap, electronics and heavy guitars into a defining sound of the early 2000s.',
      pl: 'Zespół z podmiejskiego Agoura Hills, który połączył rap, elektronikę i ciężkie gitary w jedno z kluczowych brzmień początku lat 2000.',
      ru: 'Группа из пригородного Агура-Хиллз, сплавившая рэп, электронику и тяжёлые гитары в один из главных звуков начала 2000-х.',
    },
  },
  {
    id: 'kendrick-lamar', name: 'Kendrick Lamar', kind: 'person', born: '1987-06-17',
    birthplace: 'Compton, California', cityId: 'us-ca-compton', regionId: 'us-ca',
    genres: ['hiphop'], eras: ['2010s', '2020s'], significance: 5,
    featuredTrack: tr('Alright', 2015),
    eraTracks: { '2020s': tr('Not Like Us', 2024) },
    description: {
      en: 'A Compton storyteller whose albums read like novels — the first rapper awarded a Pulitzer Prize.',
      pl: 'Opowiadacz z Compton, którego albumy czyta się jak powieści — pierwszy raper nagrodzony Pulitzerem.',
      ru: 'Рассказчик из Комптона, чьи альбомы читаются как романы, — первый рэпер с Пулитцеровской премией.',
    },
  },
  {
    id: 'billie-eilish', name: 'Billie Eilish', kind: 'person', born: '2001-12-18',
    birthplace: 'Los Angeles, California', cityId: 'us-ca-los-angeles', regionId: 'us-ca',
    genres: ['pop'], eras: ['2010s', '2020s'], significance: 4,
    featuredTrack: tr('bad guy', 2019),
    eraTracks: { '2020s': tr('Birds of a Feather', 2024) },
    description: {
      en: 'Recorded whisper-quiet pop with her brother Finneas in a Los Angeles bedroom — and changed the genre.',
      pl: 'Nagrywała szeptany pop z bratem Finneasem w sypialni w Los Angeles — i odmieniła ten gatunek.',
      ru: 'Записывала шепчущий поп с братом Финнеасом в спальне в Лос-Анджелесе — и изменила жанр.',
    },
  },
  {
    id: 'creedence-clearwater-revival', name: 'Creedence Clearwater Revival', kind: 'group', formed: 1959,
    cityId: 'us-ca-el-cerrito', regionId: 'us-ca',
    genres: ['rock'], eras: ['1960s', '1970s'], significance: 4,
    featuredTrack: tr('Fortunate Son', 1969),
    eraTracks: { '1970s': tr("Lookin' Out My Back Door", 1970) },
    description: {
      en: 'A Bay Area band that sang swamp-rock visions of the American South — and “Fortunate Son”, an anti-war anthem.',
      pl: 'Zespół z Zatoki San Francisco, który śpiewał bagienne wizje amerykańskiego Południa — i antywojenny hymn „Fortunate Son”.',
      ru: 'Группа из района Залива, певшая «болотный рок» об американском Юге, — и антивоенный гимн «Fortunate Son».',
    },
  },
  {
    id: 'metallica', name: 'Metallica', kind: 'group', formed: 1981,
    cityId: 'us-ca-san-francisco', regionId: 'us-ca',
    genres: ['rock'], eras: ['1980s', '1990s'], significance: 4,
    featuredTrack: tr('Master of Puppets', 1986),
    eraTracks: { '1990s': tr('Enter Sandman', 1991) },
    description: {
      en: 'Formed in Los Angeles and forged in the Bay Area, they took thrash metal from clubs to stadiums.',
      pl: 'Założona w Los Angeles i ukształtowana w Zatoce San Francisco Metallica wyprowadziła thrash metal z klubów na stadiony.',
      ru: 'Основанная в Лос-Анджелесе и закалённая в районе Залива, Metallica вывела трэш-метал из клубов на стадионы.',
    },
  },
];
