import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** Illinois — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const IL_ARTISTS: Artist[] = [
  {
    id: 'muddy-waters', name: 'Muddy Waters', kind: 'person', born: '1913-04-04',
    birthplace: 'Issaquena County, Mississippi', cityId: 'us-il-chicago', regionId: 'us-il',
    genres: ['blues'], eras: ['1940s', '1950s'], significance: 5,
    featuredTrack: tr('Hoochie Coochie Man', 1954),
    eraTracks: { '1940s': tr("I Can't Be Satisfied", 1948) },
    description: {
      en: 'Brought the Delta blues north and plugged it in — his Chess recordings made Chicago the capital of electric blues.',
      pl: 'Przywiózł blues delty na północ i podłączył go do prądu — jego nagrania dla Chess uczyniły Chicago stolicą elektrycznego bluesa.',
      ru: 'Привёз блюз Дельты на север и подключил его к усилителю: записи для Chess сделали Чикаго столицей электрического блюза.',
    },
  },
  {
    id: 'mahalia-jackson', name: 'Mahalia Jackson', kind: 'person', born: '1911-10-26',
    birthplace: 'New Orleans, Louisiana', cityId: 'us-il-chicago', regionId: 'us-il',
    genres: ['gospel'], eras: ['1940s', '1950s'], significance: 5,
    featuredTrack: tr('Move On Up a Little Higher', 1947),
    eraTracks: { '1950s': tr('In the Upper Room', 1952) },
    description: {
      en: 'Born in New Orleans, she moved to Chicago as a teenager and became the Queen of Gospel, carrying church music into the mainstream.',
      pl: 'Urodzona w Nowym Orleanie, jako nastolatka przeniosła się do Chicago i została Królową Gospel, wprowadzając muzykę kościelną do mainstreamu.',
      ru: 'Уроженка Нового Орлеана, подростком переехавшая в Чикаго, стала королевой госпела и вывела церковную музыку в мейнстрим.',
    },
  },
  {
    id: 'howlin-wolf', name: "Howlin' Wolf", kind: 'person', born: '1910-06-10',
    birthplace: 'White Station, Mississippi', cityId: 'us-il-chicago', regionId: 'us-il',
    genres: ['blues'], eras: ['1950s', '1960s'], significance: 4,
    featuredTrack: tr("Smokestack Lightnin'", 1956),
    eraTracks: { '1960s': tr('Spoonful', 1960) },
    description: {
      en: 'A towering, rasping voice that moved from Memphis to Chicago and shaped generations of rock guitarists.',
      pl: 'Potężny, chropawy głos, który przeniósł się z Memphis do Chicago i ukształtował pokolenia rockowych gitarzystów.',
      ru: 'Громовой хриплый голос, перебравшийся из Мемфиса в Чикаго и повлиявший на поколения рок-гитаристов.',
    },
  },
  {
    id: 'bo-diddley', name: 'Bo Diddley', kind: 'person', born: '1928-12-30',
    birthplace: 'McComb, Mississippi', cityId: 'us-il-chicago', regionId: 'us-il',
    genres: ['rock', 'rnb'], eras: ['1950s'], significance: 4,
    featuredTrack: tr('Bo Diddley', 1955),
    description: {
      en: 'His shuffling “Bo Diddley beat”, recorded for Chess in Chicago, became one of rock ’n’ roll’s basic rhythms.',
      pl: 'Jego charakterystyczny rytm „Bo Diddley beat”, nagrany dla Chess w Chicago, stał się jednym z podstawowych rytmów rock and rolla.',
      ru: 'Его фирменный «бит Бо Диддли», записанный для Chess в Чикаго, стал одним из базовых ритмов рок-н-ролла.',
    },
  },
  {
    id: 'sam-cooke', name: 'Sam Cooke', kind: 'person', born: '1931-01-22',
    birthplace: 'Clarksdale, Mississippi', cityId: 'us-il-chicago', regionId: 'us-il',
    genres: ['soul', 'gospel', 'rnb'], eras: ['1950s', '1960s'], significance: 5,
    featuredTrack: tr('A Change Is Gonna Come', 1964),
    eraTracks: { '1950s': tr('You Send Me', 1957) },
    description: {
      en: 'Raised in Chicago’s gospel scene, he carried church singing into pop and helped invent soul music.',
      pl: 'Wychowany na chicagowskiej scenie gospel, przeniósł kościelny śpiew do popu i współtworzył soul.',
      ru: 'Вырос на чикагской госпел-сцене, перенёс церковное пение в поп и стал одним из создателей соула.',
    },
  },
  {
    id: 'the-staple-singers', name: 'The Staple Singers', kind: 'group', formed: 1948,
    cityId: 'us-il-chicago', regionId: 'us-il',
    genres: ['gospel', 'soul'], eras: ['1960s', '1970s'], significance: 4,
    featuredTrack: tr("I'll Take You There", 1972),
    eraTracks: { '1960s': tr('Freedom Highway', 1965) },
    description: {
      en: 'Pops Staples and his children took gospel from Chicago churches to the civil rights movement and the top of the charts.',
      pl: 'Pops Staples i jego dzieci zanieśli gospel z chicagowskich kościołów do ruchu praw obywatelskich i na szczyty list przebojów.',
      ru: 'Попс Стэплз и его дети пронесли госпел из чикагских церквей в движение за гражданские права и на вершины чартов.',
    },
  },
  {
    id: 'curtis-mayfield', name: 'Curtis Mayfield', kind: 'person', born: '1942-06-03',
    birthplace: 'Chicago, Illinois', cityId: 'us-il-chicago', regionId: 'us-il',
    genres: ['soul', 'rnb'], eras: ['1960s', '1970s'], significance: 5,
    featuredTrack: tr('Move On Up', 1970),
    eraTracks: { '1960s': tr('People Get Ready', 1965) },
    description: {
      en: 'With The Impressions and then solo, he wrote soul music of quiet dignity and social conscience.',
      pl: 'Z The Impressions, a potem solo, pisał soul pełen godności i społecznej wrażliwości.',
      ru: 'Сначала с The Impressions, затем сольно он писал соул, полный достоинства и социальной совести.',
    },
  },
  {
    id: 'chicago', name: 'Chicago', kind: 'group', formed: 1967,
    cityId: 'us-il-chicago', regionId: 'us-il',
    genres: ['rock'], eras: ['1970s'], significance: 3,
    featuredTrack: tr('25 or 6 to 4', 1970),
    description: {
      en: 'A rock band with a horn section, named after its hometown — one of the best-selling American groups of the 1970s.',
      pl: 'Zespół rockowy z sekcją dętą, nazwany od rodzinnego miasta — jedna z najlepiej sprzedających się amerykańskich grup lat 70.',
      ru: 'Рок-группа с духовой секцией, названная в честь родного города, — одна из самых продаваемых американских групп 1970-х.',
    },
  },
  {
    id: 'earth-wind-and-fire', name: 'Earth, Wind & Fire', kind: 'group', formed: 1969,
    cityId: 'us-il-chicago', regionId: 'us-il',
    genres: ['soul', 'rnb', 'pop'], eras: ['1970s'], significance: 4,
    featuredTrack: tr('September', 1978),
    description: {
      en: 'Maurice White’s Chicago-born band fused soul, funk, jazz and spectacle into joyous, horn-driven anthems.',
      pl: 'Założony w Chicago zespół Maurice’a White’a połączył soul, funk, jazz i widowisko w radosne hymny z sekcją dętą.',
      ru: 'Основанная в Чикаго группа Мориса Уайта сплавила соул, фанк, джаз и шоу в радостные гимны с духовой секцией.',
    },
  },
  {
    id: 'frankie-knuckles', name: 'Frankie Knuckles', kind: 'person', born: '1955-01-18',
    birthplace: 'The Bronx, New York', cityId: 'us-il-chicago', regionId: 'us-il',
    genres: ['electronic'], eras: ['1980s', '1990s'], significance: 5,
    featuredTrack: tr('Your Love', 1987),
    eraTracks: { '1990s': tr('The Whistle Song', 1991) },
    description: {
      en: 'The DJ whose sets at Chicago’s Warehouse club gave house music its name — the “Godfather of House”.',
      pl: 'DJ, którego sety w chicagowskim klubie Warehouse dały nazwę muzyce house — „ojciec chrzestny house’u”.',
      ru: 'Диджей, чьи сеты в чикагском клубе Warehouse дали имя хаус-музыке, — «крёстный отец хауса».',
    },
  },
  {
    id: 'common', name: 'Common', kind: 'person', born: '1972-03-13',
    birthplace: 'Chicago, Illinois', cityId: 'us-il-chicago', district: 'South Side',
    regionId: 'us-il', genres: ['hiphop'], eras: ['1990s', '2000s'], significance: 3,
    featuredTrack: tr('I Used to Love H.E.R.', 1994),
    eraTracks: { '2000s': tr('The Light', 2000) },
    description: {
      en: 'A thoughtful South Side lyricist whose “I Used to Love H.E.R.” told the story of hip-hop as a love story.',
      pl: 'Refleksyjny tekściarz z South Side, którego „I Used to Love H.E.R.” opowiedział historię hip-hopu jak historię miłosną.',
      ru: 'Вдумчивый лирик из Саут-Сайда: его «I Used to Love H.E.R.» рассказала историю хип-хопа как историю любви.',
    },
  },
  {
    id: 'the-smashing-pumpkins', name: 'The Smashing Pumpkins', kind: 'group', formed: 1988,
    cityId: 'us-il-chicago', regionId: 'us-il',
    genres: ['rock'], eras: ['1990s'], significance: 4,
    featuredTrack: tr('1979', 1996),
    description: {
      en: 'Billy Corgan’s band layered heavy guitars and dreamy melancholy into some of the defining alternative rock of the 1990s.',
      pl: 'Zespół Billy’ego Corgana łączył ciężkie gitary z marzycielską melancholią — to jeden z symboli alternatywnego rocka lat 90.',
      ru: 'Группа Билли Коргана сочетала тяжёлые гитары и мечтательную меланхолию — один из символов альтернативного рока 1990-х.',
    },
  },
  {
    id: 'kanye-west', name: 'Kanye West', kind: 'person', born: '1977-06-08',
    birthplace: 'Atlanta, Georgia', cityId: 'us-il-chicago', regionId: 'us-il',
    genres: ['hiphop'], eras: ['2000s', '2010s'], significance: 5,
    featuredTrack: tr('Stronger', 2007),
    eraTracks: { '2010s': tr('Power', 2010) },
    description: {
      en: 'A Chicago producer who sped up soul samples, then rapped over them — and reshaped mainstream hip-hop in the 2000s.',
      pl: 'Producent z Chicago, który przyspieszał soulowe sample, a potem zaczął na nich rapować — i przebudował mainstreamowy hip-hop lat 2000.',
      ru: 'Чикагский продюсер, ускорявший соул-сэмплы, а затем начавший читать на них, — перекроил мейнстрим-хип-хоп 2000-х.',
    },
  },
  {
    id: 'chief-keef', name: 'Chief Keef', kind: 'person', born: '1995-08-15',
    birthplace: 'Chicago, Illinois', cityId: 'us-il-chicago', district: 'South Side',
    regionId: 'us-il', genres: ['hiphop'], eras: ['2010s'], significance: 3,
    featuredTrack: tr('Love Sosa', 2012),
    description: {
      en: 'A South Side teenager whose raw, hypnotic tracks took Chicago drill worldwide.',
      pl: 'Nastolatek z South Side, którego surowe, hipnotyczne numery rozniosły chicagowski drill po świecie.',
      ru: 'Подросток из Саут-Сайда, чьи сырые гипнотические треки разнесли чикагский дрилл по всему миру.',
    },
  },
  {
    id: 'chance-the-rapper', name: 'Chance the Rapper', kind: 'person', born: '1993-04-16',
    birthplace: 'Chicago, Illinois', cityId: 'us-il-chicago', regionId: 'us-il',
    genres: ['hiphop', 'gospel'], eras: ['2010s'], significance: 3,
    featuredTrack: tr('No Problem', 2016),
    description: {
      en: 'An independent artist whose joyful, gospel-tinged mixtapes won Grammys without a record label.',
      pl: 'Niezależny artysta, którego radosne, gospelowe mixtape’y zdobyły Grammy bez wytwórni.',
      ru: 'Независимый артист, чьи радостные микстейпы с госпел-оттенком получили «Грэмми» без поддержки лейбла.',
    },
  },
  {
    id: 'juice-wrld', name: 'Juice WRLD', kind: 'person', born: '1998-12-02',
    birthplace: 'Chicago, Illinois', cityId: 'us-il-chicago', regionId: 'us-il',
    genres: ['hiphop'], eras: ['2010s'], significance: 3,
    featuredTrack: tr('Lucid Dreams', 2018),
    description: {
      en: 'A melodic, emo-influenced rapper from Chicago’s suburbs whose confessional songs defined late-2010s streaming.',
      pl: 'Melodyjny raper z przedmieść Chicago, inspirowany emo, którego zwierzenia zdefiniowały streaming końca lat 2010.',
      ru: 'Мелодичный рэпер из пригородов Чикаго с эмо-влиянием, чьи исповедальные песни определили стриминг конца 2010-х.',
    },
  },
  {
    id: 'polo-g', name: 'Polo G', kind: 'person', born: '1999-01-06',
    birthplace: 'Chicago, Illinois', cityId: 'us-il-chicago', district: 'North Side',
    regionId: 'us-il', genres: ['hiphop'], eras: ['2020s'], significance: 3,
    featuredTrack: tr('Rapstar', 2021),
    description: {
      en: 'A North Side storyteller whose melodic drill reached No. 1 on the Hot 100.',
      pl: 'Opowiadacz z North Side, którego melodyjny drill dotarł na 1. miejsce Hot 100.',
      ru: 'Рассказчик из Норт-Сайда, чей мелодичный дрилл поднялся на 1-е место Hot 100.',
    },
  },
];
