import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** Texas — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const TX_ARTISTS: Artist[] = [
  {
    id: 'lightnin-hopkins', name: "Lightnin' Hopkins", kind: 'person', born: '1912-03-15',
    birthplace: 'Centerville, Texas', cityId: 'us-tx-houston', district: 'Third Ward',
    // 1950s omitted: his popularity waned until the 1959 folk-revival rediscovery.
    regionId: 'us-tx', genres: ['blues'], eras: ['1940s', '1960s'], significance: 4,
    featuredTrack: tr('Katie May', 1946),
    eraTracks: { '1960s': tr('Mojo Hand', 1961) },
    description: {
      en: "Houston's country-blues poet, improvising verses about life in the Third Ward.",
      pl: 'Poeta wiejskiego bluesa z Houston, improwizujący zwrotki o życiu w dzielnicy Third Ward.',
      ru: 'Поэт кантри-блюза из Хьюстона, импровизировавший куплеты о жизни района Third Ward.',
    },
  },
  {
    id: 'buddy-holly', name: 'Buddy Holly', kind: 'person', born: '1936-09-07',
    birthplace: 'Lubbock, Texas', cityId: 'us-tx-lubbock', regionId: 'us-tx',
    genres: ['rock'], eras: ['1950s'], significance: 5,
    featuredTrack: tr("That'll Be the Day", 1957),
    description: {
      en: 'Horn-rimmed glasses, two guitars, bass and drums: the rock band blueprint came from Lubbock.',
      pl: 'Okulary w rogowej oprawie, dwie gitary, bas i perkusja — wzorzec zespołu rockowego przyszedł z Lubbock.',
      ru: 'Роговые очки, две гитары, бас и барабаны — шаблон рок-группы пришёл из Лаббока.',
    },
  },
  {
    id: 'willie-nelson', name: 'Willie Nelson', kind: 'person', born: '1933-04-29',
    birthplace: 'Abbott, Texas', cityId: 'us-tx-austin', regionId: 'us-tx',
    genres: ['country'], eras: ['1970s', '1980s'], significance: 5,
    featuredTrack: tr('Blue Eyes Crying in the Rain', 1975),
    eraTracks: { '1980s': tr('On the Road Again', 1980) },
    description: {
      en: 'The outlaw who left Nashville for Austin and made it one of the capitals of country music.',
      pl: 'Buntownik, który zamienił Nashville na Austin i uczynił z niego jedną ze stolic country.',
      ru: 'Бунтарь, сменивший Нэшвилл на Остин и сделавший его одной из столиц кантри.',
    },
  },
  {
    id: 'zz-top', name: 'ZZ Top', kind: 'group', formed: 1969,
    cityId: 'us-tx-houston', regionId: 'us-tx',
    genres: ['rock', 'blues'], eras: ['1970s', '1980s'], significance: 4,
    featuredTrack: tr('La Grange', 1973),
    eraTracks: { '1980s': tr('Sharp Dressed Man', 1983) },
    description: {
      en: 'That little ol’ band from Texas — boogie-blues riffs, long beards and hot-rod cool.',
      pl: 'Ten mały zespół z Teksasu — boogie-bluesowe riffy, długie brody i styl hot-rodów.',
      ru: '«Та маленькая группа из Техаса»: буги-блюзовые риффы, длинные бороды и хот-роды.',
    },
  },
  {
    id: 'stevie-ray-vaughan', name: 'Stevie Ray Vaughan', kind: 'person', born: '1954-10-03',
    birthplace: 'Dallas, Texas', cityId: 'us-tx-austin', regionId: 'us-tx',
    genres: ['blues', 'rock'], eras: ['1980s'], significance: 4,
    featuredTrack: tr('Pride and Joy', 1983),
    description: {
      en: 'The Austin guitarist who revived the blues for the MTV generation.',
      pl: 'Gitarzysta z Austin, który ożywił bluesa dla pokolenia MTV.',
      ru: 'Гитарист из Остина, вернувший блюз поколению MTV.',
    },
  },
  {
    id: 'selena', name: 'Selena', kind: 'person', born: '1971-04-16',
    birthplace: 'Lake Jackson, Texas', cityId: 'us-tx-corpus-christi', regionId: 'us-tx',
    genres: ['latin', 'pop'], eras: ['1990s'], significance: 5,
    featuredTrack: tr('Como la Flor', 1992),
    description: {
      en: 'The Queen of Tejano music, who carried the Tex-Mex sound from Corpus Christi to the world.',
      pl: 'Królowa muzyki tejano, która poniosła teksańsko-meksykańskie brzmienie z Corpus Christi w świat.',
      ru: 'Королева техано, пронёсшая техасско-мексиканский звук из Корпус-Кристи на весь мир.',
    },
  },
  {
    id: 'ugk', name: 'UGK', kind: 'group', formed: 1987,
    cityId: 'us-tx-port-arthur', regionId: 'us-tx',
    genres: ['hiphop'], eras: ['1990s', '2000s'], significance: 3,
    featuredTrack: tr("Int'l Players Anthem (I Choose You)", 2007),
    eraTracks: { '1990s': tr('Pocket Full of Stones', 1992) },
    description: {
      en: 'Bun B and Pimp C built the slow, soulful foundation of Southern rap.',
      pl: 'Bun B i Pimp C położyli wolny, soulowy fundament pod rap Południa.',
      ru: 'Bun B и Pimp C заложили медленный, соул-фундамент южного рэпа.',
    },
  },
  {
    id: 'beyonce', name: 'Beyoncé', kind: 'person', born: '1981-09-04',
    birthplace: 'Houston, Texas', cityId: 'us-tx-houston', regionId: 'us-tx',
    genres: ['rnb', 'pop'], eras: ['2000s', '2010s', '2020s'], significance: 5,
    featuredTrack: tr('Crazy in Love', 2003),
    eraTracks: { '2010s': tr('Formation', 2016), '2020s': tr("Texas Hold 'Em", 2024) },
    description: {
      en: "From Destiny's Child in Houston to the most awarded artist in Grammy history.",
      pl: "Od Destiny's Child w Houston do najczęściej nagradzanej artystki w historii Grammy.",
      ru: 'От Destiny’s Child в Хьюстоне — к самой титулованной артистке в истории «Грэмми».',
    },
  },
  {
    id: 'travis-scott', name: 'Travis Scott', kind: 'person', born: '1991-04-30',
    birthplace: 'Houston, Texas', cityId: 'us-tx-houston', regionId: 'us-tx',
    genres: ['hiphop'], eras: ['2010s', '2020s'], significance: 4,
    featuredTrack: tr('Sicko Mode', 2018),
    eraTracks: { '2020s': tr('FE!N', 2023) },
    description: {
      en: 'Psychedelic, cavernous trap from Houston, staged like a theme-park ride.',
      pl: 'Psychodeliczny, przepastny trap z Houston, inscenizowany jak przejażdżka w parku rozrywki.',
      ru: 'Психоделичный, гулкий трэп из Хьюстона, поставленный как аттракцион.',
    },
  },
  {
    id: 'megan-thee-stallion', name: 'Megan Thee Stallion', kind: 'person', born: '1995-02-15',
    birthplace: 'San Antonio, Texas', cityId: 'us-tx-houston', regionId: 'us-tx',
    genres: ['hiphop'], eras: ['2020s'], significance: 4,
    featuredTrack: tr('Savage', 2020),
    description: {
      en: 'A Houston “Hot Girl” with a razor-sharp flow and an unapologetic voice.',
      pl: '„Hot Girl” z Houston o ostrym jak brzytwa flow i bezkompromisowym głosie.',
      ru: '«Горячая девчонка» из Хьюстона с острым флоу и бескомпромиссным голосом.',
    },
  },
];
