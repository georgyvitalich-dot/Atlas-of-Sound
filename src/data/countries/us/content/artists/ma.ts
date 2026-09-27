import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** Massachusetts — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const MA_ARTISTS: Artist[] = [
  // Donna Summer (born in Boston) made her defining work in Munich.
  {
    id: 'joan-baez', name: 'Joan Baez', kind: 'person', born: '1941-01-09',
    birthplace: 'Staten Island, New York', cityId: 'us-ma-cambridge', district: 'Harvard Square',
    regionId: 'us-ma', genres: ['folk'], eras: ['1960s', '1970s'], significance: 4,
    featuredTrack: tr('Diamonds & Rust', 1975),
    eraTracks: { '1960s': tr('House of the Rising Sun', 1960) },
    description: {
      en: 'Discovered at Cambridge’s Club 47, her crystalline voice became the sound of the folk revival and the civil rights movement.',
      pl: 'Odkryta w Club 47 w Cambridge, jej krystaliczny głos stał się brzmieniem odrodzenia folku i ruchu praw obywatelskich.',
      ru: 'Открытая в кембриджском Club 47, она своим кристальным голосом озвучила фолк-возрождение и движение за гражданские права.',
    },
  },
  {
    id: 'aerosmith', name: 'Aerosmith', kind: 'group', formed: 1970,
    cityId: 'us-ma-boston', regionId: 'us-ma',
    genres: ['rock'], eras: ['1970s', '1980s', '1990s'], significance: 4,
    featuredTrack: tr('Dream On', 1973),
    eraTracks: { '1980s': tr('Love in an Elevator', 1989), '1990s': tr('Crazy', 1994) },
    description: {
      en: 'Boston’s hard rock institution, which rose in the 1970s, fell apart and staged one of rock’s great comebacks.',
      pl: 'Bostońska instytucja hard rocka, która wzniosła się w latach 70., rozpadła się i dokonała jednego z wielkich powrotów w historii rocka.',
      ru: 'Бостонский оплот хард-рока, взлетевший в 1970-х, распавшийся и совершивший один из величайших камбэков в роке.',
    },
  },
  {
    id: 'boston', name: 'Boston', kind: 'group', formed: 1976,
    cityId: 'us-ma-boston', regionId: 'us-ma',
    genres: ['rock'], eras: ['1970s'], significance: 3,
    featuredTrack: tr('More Than a Feeling', 1976),
    description: {
      en: 'Engineer Tom Scholz’s home-studio project, whose debut became one of the best-selling first albums in US history.',
      pl: 'Domowy projekt studyjny inżyniera Toma Scholza, którego debiut stał się jednym z najlepiej sprzedających się debiutów w historii USA.',
      ru: 'Домашний студийный проект инженера Тома Шольца, чей дебют стал одним из самых продаваемых первых альбомов в истории США.',
    },
  },
  {
    id: 'the-cars', name: 'The Cars', kind: 'group', formed: 1976,
    cityId: 'us-ma-boston', regionId: 'us-ma',
    genres: ['rock', 'pop'], eras: ['1970s', '1980s'], significance: 4,
    featuredTrack: tr('Just What I Needed', 1978),
    eraTracks: { '1980s': tr('Drive', 1984) },
    description: {
      en: 'Ric Ocasek’s Boston band fused new wave synths with tight guitar pop.',
      pl: 'Bostoński zespół Rica Ocaska połączył syntezatory nowej fali ze zwartym gitarowym popem.',
      ru: 'Бостонская группа Рика Окасека соединила синтезаторы нью-вейва с плотным гитарным попом.',
    },
  },
  {
    id: 'new-edition', name: 'New Edition', kind: 'group', formed: 1978,
    cityId: 'us-ma-boston', district: 'Roxbury', regionId: 'us-ma',
    genres: ['rnb', 'pop'], eras: ['1980s'], significance: 4,
    featuredTrack: tr('Candy Girl', 1983),
    description: {
      en: 'Teenagers from Roxbury who set the template for the modern boy band and launched Bobby Brown and Bell Biv DeVoe.',
      pl: 'Nastolatkowie z Roxbury, którzy wyznaczyli wzorzec współczesnego boysbandu i wypromowali Bobby’ego Browna oraz Bell Biv DeVoe.',
      ru: 'Подростки из Роксбери, задавшие шаблон современного бой-бэнда и давшие старт Бобби Брауну и Bell Biv DeVoe.',
    },
  },
  {
    id: 'pixies', name: 'Pixies', kind: 'group', formed: 1986,
    cityId: 'us-ma-boston', regionId: 'us-ma',
    genres: ['rock'], eras: ['1980s'], significance: 4,
    featuredTrack: tr('Where Is My Mind?', 1988),
    description: {
      en: 'Boston’s loud-quiet-loud alternative rockers, a formative influence on Nirvana and 1990s rock.',
      pl: 'Bostońscy rockowcy alternatywni ze schematem „głośno-cicho-głośno”, kluczowa inspiracja dla Nirvany i rocka lat 90.',
      ru: 'Бостонские альтернативщики с формулой «громко-тихо-громко», повлиявшие на Nirvana и рок 1990-х.',
    },
  },
  {
    id: 'new-kids-on-the-block', name: 'New Kids on the Block', kind: 'group', formed: 1984,
    cityId: 'us-ma-boston', regionId: 'us-ma',
    genres: ['pop'], eras: ['1980s'], significance: 3,
    featuredTrack: tr("Hangin' Tough", 1988),
    description: {
      en: 'Assembled in Boston by producer Maurice Starr, they became the biggest teen-pop act of the late 1980s.',
      pl: 'Zebrani w Bostonie przez producenta Maurice’a Starra, stali się największą gwiazdą nastoletniego popu końca lat 80.',
      ru: 'Собранные в Бостоне продюсером Морисом Старром, они стали главной тин-поп-сенсацией конца 1980-х.',
    },
  },
  {
    id: 'dropkick-murphys', name: 'Dropkick Murphys', kind: 'group', formed: 1996,
    cityId: 'us-ma-boston', regionId: 'us-ma',
    genres: ['rock', 'folk'], eras: ['2000s'], significance: 3,
    featuredTrack: tr("I'm Shipping Up to Boston", 2005),
    description: {
      en: 'Celtic punks from suburban Quincy whose “I’m Shipping Up to Boston” became the city’s unofficial sports anthem.',
      pl: 'Celtyccy punkowcy z podmiejskiego Quincy, których „I’m Shipping Up to Boston” stało się nieoficjalnym sportowym hymnem miasta.',
      ru: 'Кельтские панки из пригородного Куинси, чья «I’m Shipping Up to Boston» стала неофициальным спортивным гимном города.',
    },
  },
];
