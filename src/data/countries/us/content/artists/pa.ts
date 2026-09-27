import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** Pennsylvania — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const PA_ARTISTS: Artist[] = [
  {
    id: 'bill-haley', name: 'Bill Haley', kind: 'person', born: '1925-07-06',
    birthplace: 'Highland Park, Michigan', cityId: 'us-pa-philadelphia', regionId: 'us-pa',
    genres: ['rock'], eras: ['1950s'], significance: 4,
    featuredTrack: tr('Rock Around the Clock', 1954),
    description: {
      en: 'Based in Chester, near Philadelphia, his “Rock Around the Clock” became the first rock ’n’ roll record to top the US pop chart.',
      pl: 'Muzyk z Chester pod Filadelfią, którego „Rock Around the Clock” jako pierwsze nagranie rock and rollowe trafiło na szczyt amerykańskiej listy pop.',
      ru: 'Музыкант из Честера под Филадельфией: его «Rock Around the Clock» первой из рок-н-ролльных записей возглавила американский поп-чарт.',
    },
  },
  {
    id: 'erroll-garner', name: 'Erroll Garner', kind: 'person', born: '1921-06-15',
    birthplace: 'Pittsburgh, Pennsylvania', cityId: 'us-pa-pittsburgh', regionId: 'us-pa',
    genres: ['jazz'], eras: ['1950s'], significance: 3,
    featuredTrack: tr('Misty', 1954),
    description: {
      en: 'A self-taught Pittsburgh pianist who never learned to read music — and wrote the jazz standard “Misty”.',
      pl: 'Samouk z Pittsburgha, który nigdy nie nauczył się czytać nut — i napisał jazzowy standard „Misty”.',
      ru: 'Пианист-самоучка из Питтсбурга, так и не научившийся читать ноты, — автор джазового стандарта «Misty».',
    },
  },
  {
    id: 'john-coltrane', name: 'John Coltrane', kind: 'person', born: '1926-09-23',
    birthplace: 'Hamlet, North Carolina', cityId: 'us-pa-philadelphia', regionId: 'us-pa',
    genres: ['jazz'], eras: ['1950s', '1960s'], significance: 5,
    featuredTrack: tr('My Favorite Things', 1961),
    eraTracks: { '1950s': tr('Blue Train', 1957) },
    description: {
      en: 'Came of age in Philadelphia’s jazz scene and pushed the saxophone toward spiritual, searching new forms.',
      pl: 'Dojrzewał na filadelfijskiej scenie jazzowej i poprowadził saksofon ku duchowym, poszukującym formom.',
      ru: 'Сформировался на джазовой сцене Филадельфии и увёл саксофон к духовным, ищущим новым формам.',
    },
  },
  {
    id: 'chubby-checker', name: 'Chubby Checker', kind: 'person', born: '1941-10-03',
    birthplace: 'Spring Gully, South Carolina', cityId: 'us-pa-philadelphia', regionId: 'us-pa',
    genres: ['rock', 'pop'], eras: ['1960s'], significance: 4,
    featuredTrack: tr('The Twist', 1960),
    description: {
      en: 'A Philadelphia teenager whose “The Twist”, boosted by American Bandstand, set off a worldwide dance craze.',
      pl: 'Nastolatek z Filadelfii, którego „The Twist” dzięki American Bandstand wywołał światowe szaleństwo tańca.',
      ru: 'Подросток из Филадельфии, чей «The Twist» благодаря American Bandstand запустил мировое танцевальное безумие.',
    },
  },
  {
    id: 'harold-melvin-and-the-blue-notes', name: 'Harold Melvin & the Blue Notes', kind: 'group', formed: 1954,
    cityId: 'us-pa-philadelphia', regionId: 'us-pa',
    genres: ['soul', 'rnb'], eras: ['1970s'], significance: 4,
    featuredTrack: tr("If You Don't Know Me by Now", 1972),
    description: {
      en: 'With Teddy Pendergrass on lead vocals, they became a flagship of Gamble and Huff’s lush Philly soul.',
      pl: 'Z Teddym Pendergrassem jako głównym wokalistą stali się okrętem flagowym bujnego philly soulu Gamble’a i Huffa.',
      ru: 'С Тедди Пендерграссом на ведущем вокале они стали флагманом пышного филли-соула Гэмбла и Хаффа.',
    },
  },
  {
    id: 'patti-labelle', name: 'Patti LaBelle', kind: 'person', born: '1944-05-24',
    birthplace: 'Philadelphia, Pennsylvania', cityId: 'us-pa-philadelphia', regionId: 'us-pa',
    genres: ['soul', 'rnb'], eras: ['1970s', '1980s'], significance: 4,
    featuredTrack: tr('Lady Marmalade', 1974),
    eraTracks: { '1980s': tr('New Attitude', 1984) },
    description: {
      en: 'A Philadelphia powerhouse vocalist — first with the trio Labelle, then as a solo soul star.',
      pl: 'Wokalistka o potężnym głosie z Filadelfii — najpierw w trio Labelle, potem jako solowa gwiazda soulu.',
      ru: 'Мощная вокалистка из Филадельфии — сначала в трио Labelle, затем сольная звезда соула.',
    },
  },
  {
    id: 'hall-and-oates', name: 'Hall & Oates', kind: 'group', formed: 1970,
    cityId: 'us-pa-philadelphia', regionId: 'us-pa',
    genres: ['pop', 'rock', 'soul'], eras: ['1970s', '1980s'], significance: 4,
    featuredTrack: tr("I Can't Go for That (No Can Do)", 1981),
    eraTracks: { '1970s': tr("She's Gone", 1973) },
    description: {
      en: 'Two Temple University students who blended Philly soul with pop-rock — the best-selling duo in music history.',
      pl: 'Dwóch studentów Temple University, którzy połączyli philly soul z pop-rockiem — najlepiej sprzedający się duet w historii muzyki.',
      ru: 'Двое студентов Темпльского университета, соединившие филли-соул с поп-роком, — самый продаваемый дуэт в истории музыки.',
    },
  },
  {
    id: 'dj-jazzy-jeff-and-the-fresh-prince', name: 'DJ Jazzy Jeff & The Fresh Prince', kind: 'group', formed: 1985,
    cityId: 'us-pa-philadelphia', district: 'West Philadelphia', regionId: 'us-pa',
    genres: ['hiphop'], eras: ['1980s'], significance: 3,
    featuredTrack: tr("Parents Just Don't Understand", 1988),
    description: {
      en: 'A playful duo that won the first-ever rap Grammy — the Fresh Prince later became actor Will Smith.',
      pl: 'Zabawny duet, który zdobył pierwszą w historii rapową nagrodę Grammy; Fresh Prince to późniejszy aktor Will Smith.',
      ru: 'Весёлый дуэт, получивший первую в истории рэп-«Грэмми»; Fresh Prince — будущий актёр Уилл Смит.',
    },
  },
  {
    id: 'boyz-ii-men', name: 'Boyz II Men', kind: 'group', formed: 1988,
    cityId: 'us-pa-philadelphia', regionId: 'us-pa',
    genres: ['rnb'], eras: ['1990s'], significance: 4,
    featuredTrack: tr('End of the Road', 1992),
    description: {
      en: 'Four Philadelphia high-school friends whose harmonies set records for weeks at No. 1.',
      pl: 'Czterech kolegów ze szkoły średniej w Filadelfii, których harmonie biły rekordy tygodni na 1. miejscu.',
      ru: 'Четверо школьных друзей из Филадельфии, чьи гармонии побили рекорды по числу недель на 1-м месте.',
    },
  },
  {
    id: 'the-roots', name: 'The Roots', kind: 'group', formed: 1987,
    cityId: 'us-pa-philadelphia', regionId: 'us-pa',
    genres: ['hiphop'], eras: ['1990s', '2000s'], significance: 4,
    featuredTrack: tr('You Got Me', 1999),
    eraTracks: { '2000s': tr('The Seed (2.0)', 2002) },
    description: {
      en: 'A live-band hip-hop crew from Philadelphia, fronted by Black Thought with Questlove on drums.',
      pl: 'Hiphopowa grupa z Filadelfii grająca na żywych instrumentach, z Black Thoughtem na wokalu i Questlove’em na perkusji.',
      ru: 'Хип-хоп-коллектив из Филадельфии с живыми инструментами: Black Thought у микрофона, Questlove за барабанами.',
    },
  },
  {
    id: 'jill-scott', name: 'Jill Scott', kind: 'person', born: '1972-04-04',
    birthplace: 'Philadelphia, Pennsylvania', cityId: 'us-pa-philadelphia', district: 'North Philadelphia',
    regionId: 'us-pa', genres: ['rnb', 'soul'], eras: ['2000s'], significance: 3,
    featuredTrack: tr("Gettin' in the Way", 2000),
    description: {
      en: 'A poet whose spoken-word roots shaped the neo-soul of the 2000s.',
      pl: 'Poetka, której korzenie w spoken word ukształtowały neo-soul lat 2000.',
      ru: 'Поэтесса, чьи корни в спокен-ворде сформировали неосоул 2000-х.',
    },
  },
  {
    id: 'pink', name: 'Pink', kind: 'person', born: '1979-09-08',
    birthplace: 'Doylestown, Pennsylvania', cityId: 'us-pa-philadelphia', regionId: 'us-pa',
    genres: ['pop', 'rock'], eras: ['2000s', '2010s'], significance: 4,
    featuredTrack: tr('Get the Party Started', 2001),
    eraTracks: { '2010s': tr('Raise Your Glass', 2010) },
    description: {
      en: 'Grew up outside Philadelphia and turned a rebellious streak into a long run of pop-rock hits.',
      pl: 'Dorastała pod Filadelfią i zamieniła buntowniczy charakter w długą serię pop-rockowych przebojów.',
      ru: 'Выросла под Филадельфией и превратила бунтарский характер в долгую череду поп-рок-хитов.',
    },
  },
  {
    id: 'meek-mill', name: 'Meek Mill', kind: 'person', born: '1987-05-06',
    birthplace: 'Philadelphia, Pennsylvania', cityId: 'us-pa-philadelphia', regionId: 'us-pa',
    genres: ['hiphop'], eras: ['2010s'], significance: 3,
    featuredTrack: tr('Dreams and Nightmares', 2012),
    description: {
      en: 'A Philadelphia battle rapper whose long fight with the justice system made him a voice for reform.',
      pl: 'Raper z Filadelfii wywodzący się z bitew freestyle’owych; jego długa batalia z wymiarem sprawiedliwości uczyniła go głosem reformy.',
      ru: 'Рэпер из Филадельфии, выросший на баттлах; долгая борьба с системой правосудия сделала его голосом реформы.',
    },
  },
  {
    id: 'wiz-khalifa', name: 'Wiz Khalifa', kind: 'person', born: '1987-09-08',
    birthplace: 'Minot, North Dakota', cityId: 'us-pa-pittsburgh', regionId: 'us-pa',
    genres: ['hiphop'], eras: ['2010s'], significance: 3,
    featuredTrack: tr('Black and Yellow', 2010),
    description: {
      en: 'Raised in Pittsburgh, he turned the colors of his city’s sports teams into a No. 1 hit.',
      pl: 'Wychowany w Pittsburghu, zamienił barwy miejskich drużyn sportowych w przebój numer jeden.',
      ru: 'Выросший в Питтсбурге, он превратил цвета городских спортивных команд в хит номер один.',
    },
  },
  {
    id: 'mac-miller', name: 'Mac Miller', kind: 'person', born: '1992-01-19',
    birthplace: 'Pittsburgh, Pennsylvania', cityId: 'us-pa-pittsburgh', regionId: 'us-pa',
    genres: ['hiphop'], eras: ['2010s'], significance: 3,
    featuredTrack: tr('Self Care', 2018),
    description: {
      en: 'A Pittsburgh prodigy who grew from party rap into introspective, jazz-tinged albums.',
      pl: 'Cudowne dziecko z Pittsburgha, które przeszło od imprezowego rapu do introspektywnych, jazzujących albumów.',
      ru: 'Вундеркинд из Питтсбурга, прошедший путь от тусовочного рэпа к интроспективным, джазовым альбомам.',
    },
  },
  {
    id: 'lil-uzi-vert', name: 'Lil Uzi Vert', kind: 'person', born: '1995-07-31',
    birthplace: 'Philadelphia, Pennsylvania', cityId: 'us-pa-philadelphia', district: 'North Philadelphia',
    regionId: 'us-pa', genres: ['hiphop'], eras: ['2010s', '2020s'], significance: 3,
    featuredTrack: tr('XO Tour Llif3', 2017),
    eraTracks: { '2020s': tr('Just Wanna Rock', 2022) },
    description: {
      en: 'A genre-blurring rapper with rock-star energy — one of the most influential voices of the streaming era.',
      pl: 'Raper o rockowej energii, zacierający granice gatunków — jeden z najbardziej wpływowych głosów ery streamingu.',
      ru: 'Рэпер с энергией рок-звезды, размывающий границы жанров, — один из самых влиятельных голосов эпохи стриминга.',
    },
  },
];
