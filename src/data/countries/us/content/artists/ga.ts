import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** Georgia — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const GA_ARTISTS: Artist[] = [
  {
    id: 'ray-charles', name: 'Ray Charles', kind: 'person', born: '1930-09-23',
    birthplace: 'Albany, Georgia', cityId: 'us-ga-albany', regionId: 'us-ga',
    genres: ['soul', 'rnb'], eras: ['1950s', '1960s'], significance: 5,
    featuredTrack: tr('Georgia on My Mind', 1960),
    eraTracks: { '1950s': tr("What'd I Say", 1959) },
    description: {
      en: 'Born in Albany, he fused gospel and R&B into soul; his “Georgia on My Mind” became the state’s official song.',
      pl: 'Urodzony w Albany, połączył gospel i R&B w soul; jego „Georgia on My Mind” została oficjalną pieśnią stanu.',
      ru: 'Уроженец Олбани, соединивший госпел и R&B в соул; его «Georgia on My Mind» стала официальной песней штата.',
    },
  },
  {
    id: 'little-richard', name: 'Little Richard', kind: 'person', born: '1932-12-05',
    birthplace: 'Macon, Georgia', cityId: 'us-ga-macon', regionId: 'us-ga',
    genres: ['rock'], eras: ['1950s'], significance: 5,
    featuredTrack: tr('Tutti Frutti', 1955),
    description: {
      en: 'Macon’s wildest voice — his pounding piano and falsetto whoops helped invent rock ’n’ roll.',
      pl: 'Najdzikszy głos Macon — jego walące pianino i falsetowe okrzyki współtworzyły rock and rolla.',
      ru: 'Самый дикий голос Мейкона: его ударное фортепиано и фальцетные вскрики помогли изобрести рок-н-ролл.',
    },
  },
  {
    id: 'james-brown', name: 'James Brown', kind: 'person', born: '1933-05-03',
    birthplace: 'Barnwell, South Carolina', cityId: 'us-ga-augusta', regionId: 'us-ga',
    genres: ['soul', 'rnb'], eras: ['1950s', '1960s', '1970s'], significance: 5,
    featuredTrack: tr("Papa's Got a Brand New Bag", 1965),
    eraTracks: {
      '1950s': tr('Please, Please, Please', 1956),
      '1970s': tr('Get Up (I Feel Like Being a) Sex Machine', 1970),
    },
    description: {
      en: 'Raised in Augusta, the Godfather of Soul stripped music down to the groove and laid the foundation of funk.',
      pl: 'Wychowany w Auguście Ojciec Chrzestny Soulu sprowadził muzykę do samego groove’u i położył fundament pod funk.',
      ru: 'Выросший в Огасте «крёстный отец соула» свёл музыку к чистому груву и заложил основы фанка.',
    },
  },
  {
    id: 'otis-redding', name: 'Otis Redding', kind: 'person', born: '1941-09-09',
    birthplace: 'Dawson, Georgia', cityId: 'us-ga-macon', regionId: 'us-ga',
    genres: ['soul'], eras: ['1960s'], significance: 5,
    featuredTrack: tr("(Sittin' On) The Dock of the Bay", 1968),
    description: {
      en: 'A Macon singer whose raw, pleading voice defined Southern soul on the Stax label.',
      pl: 'Wokalista z Macon, którego surowy, błagalny głos zdefiniował soul Południa w wytwórni Stax.',
      ru: 'Певец из Мейкона, чей грубоватый, умоляющий голос определил южный соул на лейбле Stax.',
    },
  },
  {
    id: 'gladys-knight-and-the-pips', name: 'Gladys Knight & the Pips', kind: 'group', formed: 1952,
    cityId: 'us-ga-atlanta', regionId: 'us-ga',
    genres: ['soul', 'rnb'], eras: ['1960s', '1970s'], significance: 4,
    featuredTrack: tr('Midnight Train to Georgia', 1973),
    eraTracks: { '1960s': tr('I Heard It Through the Grapevine', 1967) },
    description: {
      en: 'A family group from Atlanta whose warm, gospel-rooted soul peaked with “Midnight Train to Georgia”.',
      pl: 'Rodzinny zespół z Atlanty, którego ciepły, zakorzeniony w gospel soul osiągnął szczyt w „Midnight Train to Georgia”.',
      ru: 'Семейная группа из Атланты, чей тёплый соул с госпел-корнями достиг вершины в «Midnight Train to Georgia».',
    },
  },
  {
    id: 'the-allman-brothers-band', name: 'The Allman Brothers Band', kind: 'group', formed: 1969,
    cityId: 'us-ga-macon', regionId: 'us-ga',
    genres: ['rock', 'blues'], eras: ['1970s'], significance: 4,
    featuredTrack: tr('Midnight Rider', 1970),
    description: {
      en: 'Formed in Jacksonville and based in Macon, they fused blues, jazz-like jams and twin lead guitars into Southern rock.',
      pl: 'Założeni w Jacksonville i osiadli w Macon, połączyli blues, jazzowe improwizacje i dwie gitary prowadzące w southern rock.',
      ru: 'Основанные в Джексонвилле и обосновавшиеся в Мейконе, они сплавили блюз, джазовые импровизации и две соло-гитары в южный рок.',
    },
  },
  {
    id: 'rem', name: 'R.E.M.', kind: 'group', formed: 1980,
    cityId: 'us-ga-athens', regionId: 'us-ga',
    genres: ['rock'], eras: ['1980s', '1990s'], significance: 5,
    featuredTrack: tr('Losing My Religion', 1991),
    eraTracks: { '1980s': tr('The One I Love', 1987) },
    description: {
      en: 'Four friends from Athens whose jangling guitars and cryptic lyrics built the college-rock scene and went global.',
      pl: 'Czterech przyjaciół z Athens, których dzwoniące gitary i zagadkowe teksty zbudowały scenę college rocka i podbiły świat.',
      ru: 'Четверо друзей из Атенса, чьи звенящие гитары и загадочные тексты создали сцену колледж-рока и покорили мир.',
    },
  },
  {
    id: 'the-b-52s', name: "The B-52's", kind: 'group', formed: 1976,
    cityId: 'us-ga-athens', regionId: 'us-ga',
    genres: ['rock', 'pop'], eras: ['1980s'], significance: 3,
    featuredTrack: tr('Love Shack', 1989),
    description: {
      en: 'Athens’ party band: beehive hairdos, surf guitar and new wave that never took itself too seriously.',
      pl: 'Imprezowy zespół z Athens: tapirowane fryzury, surfowa gitara i nowa fala z przymrużeniem oka.',
      ru: 'Главная вечеринка Атенса: причёски-«ульи», сёрф-гитара и нью-вейв с самоиронией.',
    },
  },
  {
    id: 'tlc', name: 'TLC', kind: 'group', formed: 1990,
    cityId: 'us-ga-atlanta', regionId: 'us-ga',
    genres: ['rnb', 'hiphop'], eras: ['1990s'], significance: 4,
    featuredTrack: tr('Waterfalls', 1995),
    description: {
      en: 'The Atlanta trio became one of the best-selling girl groups ever, mixing R&B, hip-hop and frank social messages.',
      pl: 'Trio z Atlanty stało się jednym z najlepiej sprzedających się żeńskich zespołów, łącząc R&B, hip-hop i szczere przesłania społeczne.',
      ru: 'Трио из Атланты стало одной из самых продаваемых женских групп, смешав R&B, хип-хоп и откровенные социальные темы.',
    },
  },
  {
    id: 'outkast', name: 'OutKast', kind: 'group', formed: 1992,
    cityId: 'us-ga-atlanta', regionId: 'us-ga',
    genres: ['hiphop'], eras: ['1990s', '2000s'], significance: 5,
    featuredTrack: tr('Hey Ya!', 2003),
    eraTracks: { '1990s': tr('Rosa Parks', 1998) },
    description: {
      en: 'André 3000 and Big Boi put Atlanta on the hip-hop map with inventive, funk-soaked Southern rap.',
      pl: 'André 3000 i Big Boi umieścili Atlantę na hiphopowej mapie pomysłowym, przesiąkniętym funkiem rapem z Południa.',
      ru: 'Андре 3000 и Биг Бой нанесли Атланту на хип-хоп-карту изобретательным, пропитанным фанком южным рэпом.',
    },
  },
  {
    id: 'usher', name: 'Usher', kind: 'person', born: '1978-10-14',
    birthplace: 'Dallas, Texas', cityId: 'us-ga-atlanta', regionId: 'us-ga',
    genres: ['rnb', 'pop'], eras: ['2000s'], significance: 4,
    featuredTrack: tr('Yeah!', 2004),
    description: {
      en: 'Raised in Chattanooga and Atlanta, he became the defining R&B star of the 2000s.',
      pl: 'Wychowany w Chattanoodze i Atlancie, stał się czołową gwiazdą R&B lat 2000.',
      ru: 'Выросший в Чаттануге и Атланте, он стал главной R&B-звездой 2000-х.',
    },
  },
  {
    id: 'ti', name: 'T.I.', kind: 'person', born: '1980-09-25',
    birthplace: 'Atlanta, Georgia', cityId: 'us-ga-atlanta', regionId: 'us-ga',
    genres: ['hiphop'], eras: ['2000s'], significance: 3,
    featuredTrack: tr('Whatever You Like', 2008),
    description: {
      en: 'One of the architects of trap — he helped popularize the term with his 2003 album “Trap Muzik”.',
      pl: 'Jeden z architektów trapu — spopularyzował ten termin albumem „Trap Muzik” z 2003 roku.',
      ru: 'Один из архитекторов трэпа: он популяризировал сам термин альбомом «Trap Muzik» 2003 года.',
    },
  },
  {
    id: 'future', name: 'Future', kind: 'person', born: '1983-11-20',
    birthplace: 'Atlanta, Georgia', cityId: 'us-ga-atlanta', regionId: 'us-ga',
    genres: ['hiphop'], eras: ['2010s'], significance: 4,
    featuredTrack: tr('Mask Off', 2017),
    description: {
      en: 'His Auto-Tuned, melancholic trap became a template for 2010s Atlanta rap.',
      pl: 'Jego melancholijny trap z Auto-Tune stał się wzorcem dla rapu z Atlanty lat 2010.',
      ru: 'Его меланхоличный трэп с автотюном стал шаблоном для рэпа Атланты 2010-х.',
    },
  },
  {
    id: 'migos', name: 'Migos', kind: 'group', formed: 2008,
    cityId: 'us-ga-atlanta', regionId: 'us-ga',
    genres: ['hiphop'], eras: ['2010s'], significance: 4,
    featuredTrack: tr('Bad and Boujee', 2016),
    description: {
      en: 'A trio from suburban Atlanta whose triplet flow spread across all of 2010s hip-hop.',
      pl: 'Trio z przedmieść Atlanty, którego triolowy flow rozlał się po całym hip-hopie lat 2010.',
      ru: 'Трио из пригородов Атланты, чей триольный флоу распространился по всему хип-хопу 2010-х.',
    },
  },
  {
    id: 'lil-baby', name: 'Lil Baby', kind: 'person', born: '1994-12-03',
    birthplace: 'Atlanta, Georgia', cityId: 'us-ga-atlanta', regionId: 'us-ga',
    genres: ['hiphop'], eras: ['2020s'], significance: 3,
    featuredTrack: tr('The Bigger Picture', 2020),
    description: {
      en: 'An Atlanta rapper whose 2020 protest song “The Bigger Picture” answered the killing of George Floyd.',
      pl: 'Raper z Atlanty, którego protest song z 2020 roku „The Bigger Picture” był odpowiedzią na zabójstwo George’a Floyda.',
      ru: 'Рэпер из Атланты: его протестная песня 2020 года «The Bigger Picture» стала ответом на убийство Джорджа Флойда.',
    },
  },
];
