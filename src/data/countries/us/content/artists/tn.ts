import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** Tennessee — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const TN_ARTISTS: Artist[] = [
  {
    id: 'hank-williams', name: 'Hank Williams', kind: 'person', born: '1923-09-17',
    birthplace: 'Mount Olive, Alabama', cityId: 'us-tn-nashville', regionId: 'us-tn',
    genres: ['country'], eras: ['1940s', '1950s'], significance: 5,
    featuredTrack: tr('Lovesick Blues', 1949),
    eraTracks: { '1950s': tr("Your Cheatin' Heart", 1953) },
    description: {
      en: 'A Grand Ole Opry star whose raw, heartbroken songs became the blueprint for country music.',
      pl: 'Gwiazda Grand Ole Opry, której surowe, pełne złamanego serca piosenki stały się wzorcem muzyki country.',
      ru: 'Звезда Grand Ole Opry: его пронзительные песни о разбитом сердце стали образцом для кантри.',
    },
  },
  {
    id: 'bb-king', name: 'B.B. King', kind: 'person', born: '1925-09-16',
    birthplace: 'Itta Bena, Mississippi', cityId: 'us-tn-memphis', district: 'Beale Street',
    regionId: 'us-tn', genres: ['blues'], eras: ['1950s', '1960s'], significance: 5,
    featuredTrack: tr('3 O’Clock Blues', 1951),
    eraTracks: { '1960s': tr('The Thrill Is Gone', 1969) },
    description: {
      en: 'A Beale Street DJ turned King of the Blues, famous for making his guitar Lucille sing.',
      pl: 'Didżej z Beale Street, który został Królem Bluesa — słynął z tego, że jego gitara Lucille śpiewała.',
      ru: 'Диджей с Бил-стрит, ставший Королём блюза: его гитара Люсиль буквально пела.',
    },
  },
  {
    id: 'elvis-presley', name: 'Elvis Presley', kind: 'person', born: '1935-01-08',
    birthplace: 'Tupelo, Mississippi', cityId: 'us-tn-memphis', regionId: 'us-tn',
    genres: ['rock', 'pop'], eras: ['1950s', '1960s', '1970s'], significance: 5,
    featuredTrack: tr('Heartbreak Hotel', 1956),
    eraTracks: { '1960s': tr('Suspicious Minds', 1969), '1970s': tr('Burning Love', 1972) },
    description: {
      en: 'Fused country and rhythm & blues at Sun Studio in Memphis and became the face of rock ’n’ roll.',
      pl: 'Połączył country i rhythm and blues w memfijskim Sun Studio i stał się twarzą rock and rolla.',
      ru: 'Соединил кантри и ритм-н-блюз в студии Sun в Мемфисе и стал лицом рок-н-ролла.',
    },
  },
  {
    id: 'johnny-cash', name: 'Johnny Cash', kind: 'person', born: '1932-02-26',
    birthplace: 'Kingsland, Arkansas', cityId: 'us-tn-memphis', regionId: 'us-tn',
    genres: ['country', 'rock'], eras: ['1950s', '1960s'], significance: 4,
    featuredTrack: tr('I Walk the Line', 1956),
    eraTracks: { '1960s': tr('Ring of Fire', 1963) },
    description: {
      en: 'The Man in Black started at Sun Records with a boom-chicka-boom rhythm and a voice like a verdict.',
      pl: 'Człowiek w Czerni zaczynał w Sun Records z charakterystycznym rytmem i głosem jak wyrok.',
      ru: 'Человек в чёрном начинал на Sun Records с узнаваемым ритмом и голосом, звучащим как приговор.',
    },
  },
  {
    id: 'isaac-hayes', name: 'Isaac Hayes', kind: 'person', born: '1942-08-20',
    birthplace: 'Covington, Tennessee', cityId: 'us-tn-memphis', regionId: 'us-tn',
    genres: ['soul', 'rnb'], eras: ['1960s', '1970s'], significance: 4,
    featuredTrack: tr('Theme from Shaft', 1971),
    eraTracks: { '1960s': tr('Walk On By', 1969) },
    description: {
      en: 'A Stax songwriter who became a symphonic soul pioneer and won an Oscar for Shaft.',
      pl: 'Autor piosenek ze Stax, który stał się pionierem symfonicznego soulu i zdobył Oscara za Shafta.',
      ru: 'Автор песен лейбла Stax, ставший пионером симфонического соула и получивший «Оскар» за «Шафта».',
    },
  },
  {
    id: 'al-green', name: 'Al Green', kind: 'person', born: '1946-04-13',
    birthplace: 'Forrest City, Arkansas', cityId: 'us-tn-memphis', regionId: 'us-tn',
    genres: ['soul'], eras: ['1970s'], significance: 4,
    featuredTrack: tr("Let's Stay Together", 1971),
    description: {
      en: 'His silky falsetto and Hi Records grooves made Memphis the capital of 1970s romantic soul.',
      pl: 'Jego jedwabisty falset i groove wytwórni Hi uczyniły Memphis stolicą romantycznego soulu lat 70.',
      ru: 'Его шелковистый фальцет и грувы лейбла Hi сделали Мемфис столицей романтического соула 1970-х.',
    },
  },
  {
    id: 'dolly-parton', name: 'Dolly Parton', kind: 'person', born: '1946-01-19',
    birthplace: 'Pittman Center, Tennessee', cityId: 'us-tn-nashville', regionId: 'us-tn',
    genres: ['country'], eras: ['1970s', '1980s'], significance: 5,
    featuredTrack: tr('Jolene', 1973),
    eraTracks: { '1980s': tr('9 to 5', 1980) },
    description: {
      en: "A Smoky Mountains storyteller who became one of country music's greatest songwriters.",
      pl: 'Gawędziarka z Gór Great Smoky, która stała się jedną z największych autorek piosenek country.',
      ru: 'Рассказчица из Великих Дымчатых гор, ставшая одним из величайших авторов песен в кантри.',
    },
  },
  {
    id: 'three-6-mafia', name: 'Three 6 Mafia', kind: 'group', formed: 1991,
    cityId: 'us-tn-memphis', regionId: 'us-tn',
    genres: ['hiphop'], eras: ['1990s', '2000s'], significance: 4,
    featuredTrack: tr('Stay Fly', 2005),
    eraTracks: { '1990s': tr("Tear da Club Up '97", 1997) },
    description: {
      en: 'Dark, lo-fi Memphis rap pioneers whose sound echoes through modern trap — and later Oscar winners.',
      pl: 'Pionierzy mrocznego, lo-fi rapu z Memphis, których brzmienie słychać w dzisiejszym trapie; później zdobywcy Oscara.',
      ru: 'Пионеры мрачного лоу-фай рэпа из Мемфиса, чьё звучание слышно в современном трэпе; позже — обладатели «Оскара».',
    },
  },
  {
    id: 'justin-timberlake', name: 'Justin Timberlake', kind: 'person', born: '1981-01-31',
    birthplace: 'Memphis, Tennessee', cityId: 'us-tn-memphis', regionId: 'us-tn',
    genres: ['pop', 'rnb'], eras: ['2000s'], significance: 3,
    featuredTrack: tr('Cry Me a River', 2002),
    description: {
      en: 'A Memphis kid from the Mickey Mouse Club who became a leading male pop star of the 2000s.',
      pl: 'Chłopak z Memphis z Klubu Myszki Miki, który stał się czołową męską gwiazdą popu lat 2000.',
      ru: 'Парень из Мемфиса, начинавший в «Клубе Микки Мауса», стал ведущей мужской поп-звездой 2000-х.',
    },
  },
  {
    id: 'kings-of-leon', name: 'Kings of Leon', kind: 'group', formed: 1999,
    cityId: 'us-tn-nashville', regionId: 'us-tn',
    genres: ['rock'], eras: ['2000s', '2010s'], significance: 3,
    featuredTrack: tr('Sex on Fire', 2008),
    eraTracks: { '2010s': tr('Radioactive', 2010) },
    description: {
      en: 'Three brothers and a cousin who brought Southern grit to arena rock from Nashville.',
      pl: 'Trzej bracia i kuzyn, którzy wnieśli południową szorstkość do stadionowego rocka z Nashville.',
      ru: 'Трое братьев и кузен, привнёсшие южную шероховатость в стадионный рок из Нэшвилла.',
    },
  },
  {
    id: 'faith-hill', name: 'Faith Hill', kind: 'person', born: '1967-09-21',
    birthplace: 'Ridgeland, Mississippi', cityId: 'us-tn-nashville', regionId: 'us-tn',
    genres: ['country', 'pop'], eras: ['1990s', '2000s'], significance: 3,
    featuredTrack: tr('This Kiss', 1998),
    eraTracks: { '2000s': tr('The Way You Love Me', 2000) },
    description: {
      en: 'Raised in small-town Star, Mississippi, she moved to Nashville and became one of the biggest country-pop crossover stars.',
      pl: 'Wychowana w małym Star w Missisipi, przeniosła się do Nashville i stała się jedną z największych gwiazd country-popu.',
      ru: 'Выросшая в городке Стар (Миссисипи), она переехала в Нэшвилл и стала одной из главных звёзд кантри-попа.',
    },
  },
  {
    id: 'chris-stapleton', name: 'Chris Stapleton', kind: 'person', born: '1978-04-15',
    birthplace: 'Lexington, Kentucky', cityId: 'us-tn-nashville', regionId: 'us-tn',
    genres: ['country'], eras: ['2010s'], significance: 3,
    featuredTrack: tr('Tennessee Whiskey', 2015),
    description: {
      en: 'A Nashville songwriter-for-hire whose soulful solo debut pulled country back toward its roots.',
      pl: 'Wynajmowany autor piosenek z Nashville, którego soulowy debiut przywrócił country do korzeni.',
      ru: 'Наёмный автор песен из Нэшвилла, чей соул-дебют вернул кантри к корням.',
    },
  },
  {
    id: 'glorilla', name: 'GloRilla', kind: 'person', born: '1999-07-28',
    birthplace: 'Memphis, Tennessee', cityId: 'us-tn-memphis', regionId: 'us-tn',
    genres: ['hiphop'], eras: ['2020s'], significance: 3,
    featuredTrack: tr("F.N.F. (Let's Go)", 2022),
    description: {
      en: "A Memphis rapper whose viral anthem carried the city's raw hip-hop tradition into the 2020s.",
      pl: 'Raperka z Memphis, której wiralowy hymn przeniósł surową tradycję miasta w lata 2020.',
      ru: 'Рэперша из Мемфиса, чей вирусный гимн перенёс грубую хип-хоп-традицию города в 2020-е.',
    },
  },
  {
    id: 'morgan-wallen', name: 'Morgan Wallen', kind: 'person', born: '1993-05-13',
    birthplace: 'Sneedville, Tennessee', cityId: 'us-tn-nashville', regionId: 'us-tn',
    genres: ['country'], eras: ['2020s'], significance: 4,
    featuredTrack: tr('Last Night', 2023),
    description: {
      en: "An East Tennessee singer who became country's biggest commercial force of the 2020s.",
      pl: 'Wokalista ze wschodniego Tennessee, który stał się największą komercyjną siłą country lat 2020.',
      ru: 'Певец из Восточного Теннесси, ставший главной коммерческой силой кантри 2020-х.',
    },
  },
  {
    id: 'tina-turner', name: 'Tina Turner', kind: 'person', born: '1939-11-26',
    birthplace: 'Brownsville, Tennessee', cityId: 'us-tn-brownsville', regionId: 'us-tn',
    genres: ['rock', 'rnb', 'soul'], eras: ['1960s', '1970s', '1980s'], significance: 5,
    featuredTrack: tr("What's Love Got to Do with It", 1984),
    eraTracks: {
      '1960s': tr('River Deep – Mountain High', 1966),
      '1970s': tr('Nutbush City Limits', 1973),
    },
    description: {
      en: 'Raised in Nutbush, Tennessee, she went from the Ike & Tina revue to one of the greatest comebacks in pop history.',
      pl: 'Wychowana w Nutbush w Tennessee, przeszła drogę od rewii Ike & Tina do jednego z największych powrotów w historii popu.',
      ru: 'Выросшая в Натбуше (Теннесси), она прошла путь от шоу Ike & Tina до одного из величайших камбэков в истории поп-музыки.',
    },
  },
  {
    id: 'taylor-swift', name: 'Taylor Swift', kind: 'person', born: '1989-12-13',
    birthplace: 'West Reading, Pennsylvania', cityId: 'us-tn-nashville', regionId: 'us-tn',
    genres: ['country', 'pop'], eras: ['2000s', '2010s', '2020s'], significance: 5,
    featuredTrack: tr('Shake It Off', 2014),
    eraTracks: { '2000s': tr('Love Story', 2008), '2020s': tr('Anti-Hero', 2022) },
    description: {
      en: 'Moved to Nashville as a teenager to write country songs, then became the defining pop songwriter of her generation.',
      pl: 'Jako nastolatka przeprowadziła się do Nashville, by pisać piosenki country, a potem stała się najważniejszą autorką popu swojego pokolenia.',
      ru: 'Подростком переехала в Нэшвилл писать кантри, а затем стала главным поп-автором своего поколения.',
    },
  },
];
