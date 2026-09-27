import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** New York — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const NY_ARTISTS: Artist[] = [
  {
    id: 'charlie-parker', name: 'Charlie Parker', kind: 'person', born: '1920-08-29',
    birthplace: 'Kansas City, Kansas', cityId: 'us-ny-nyc', district: 'Harlem',
    regionId: 'us-ny', genres: ['jazz'], eras: ['1940s'], significance: 5,
    featuredTrack: tr('Ko-Ko', 1945),
    description: {
      en: 'Bird — the saxophonist who, in the clubs of New York, rewrote jazz as bebop.',
      pl: 'Bird — saksofonista, który w nowojorskich klubach przepisał jazz na nowo jako bebop.',
      ru: 'Бёрд — саксофонист, который в клубах Нью-Йорка переписал джаз языком бибопа.',
    },
  },
  {
    id: 'billie-holiday', name: 'Billie Holiday', kind: 'person', born: '1915-04-07',
    birthplace: 'Philadelphia, Pennsylvania', cityId: 'us-ny-nyc', district: 'Harlem',
    regionId: 'us-ny', genres: ['jazz'], eras: ['1940s', '1950s'], significance: 5,
    featuredTrack: tr('God Bless the Child', 1941),
    eraTracks: { '1950s': tr('Lady Sings the Blues', 1956) },
    description: {
      en: 'Lady Day phrased like a horn player, turning every lyric into something intimate and devastating.',
      pl: 'Lady Day frazowała jak instrumentalistka, zamieniając każdy tekst w coś intymnego i przejmującego.',
      ru: 'Леди Дэй фразировала, как духовик, превращая каждую строчку в нечто интимное и пронзительное.',
    },
  },
  {
    id: 'miles-davis', name: 'Miles Davis', kind: 'person', born: '1926-05-26',
    birthplace: 'Alton, Illinois', cityId: 'us-ny-nyc', regionId: 'us-ny',
    genres: ['jazz'], eras: ['1950s', '1960s'], significance: 5,
    featuredTrack: tr('So What', 1959),
    eraTracks: { '1960s': tr('E.S.P.', 1965) },
    description: {
      en: 'Reinvented jazz again and again; Kind of Blue remains the best-selling jazz album ever.',
      pl: 'Wymyślał jazz na nowo raz po raz; Kind of Blue to wciąż najlepiej sprzedający się album jazzowy.',
      ru: 'Раз за разом изобретал джаз заново; Kind of Blue до сих пор самый продаваемый джазовый альбом.',
    },
  },
  {
    id: 'bob-dylan', name: 'Bob Dylan', kind: 'person', born: '1941-05-24',
    birthplace: 'Duluth, Minnesota', cityId: 'us-ny-nyc', district: 'Greenwich Village',
    regionId: 'us-ny', genres: ['folk', 'rock'], eras: ['1960s'], significance: 5,
    featuredTrack: tr('Like a Rolling Stone', 1965),
    description: {
      en: 'Arrived in Greenwich Village as a folk singer and electrified rock with poetry — later a Nobel laureate.',
      pl: 'Przyjechał do Greenwich Village jako pieśniarz folkowy i zelektryfikował rock poezją — później laureat Nobla.',
      ru: 'Приехал в Гринвич-Виллидж фолк-певцом и наэлектризовал рок поэзией; позднее — нобелевский лауреат.',
    },
  },
  {
    id: 'the-velvet-underground', name: 'The Velvet Underground', kind: 'group', formed: 1964,
    cityId: 'us-ny-nyc', regionId: 'us-ny',
    genres: ['rock'], eras: ['1960s'], significance: 3,
    featuredTrack: tr('Sunday Morning', 1966),
    description: {
      en: "Lou Reed's band, backed by Andy Warhol — few bought the records, but many who did started bands.",
      pl: 'Zespół Lou Reeda pod skrzydłami Andy’ego Warhola — mało kto kupił ich płyty, ale wielu z tych, którzy kupili, założyło zespoły.',
      ru: 'Группа Лу Рида под крылом Энди Уорхола: их пластинки купили немногие, но многие из них собрали свои группы.',
    },
  },
  {
    id: 'ramones', name: 'Ramones', kind: 'group', formed: 1974,
    cityId: 'us-ny-nyc', district: 'Queens', regionId: 'us-ny',
    genres: ['rock'], eras: ['1970s'], significance: 4,
    featuredTrack: tr('Blitzkrieg Bop', 1976),
    description: {
      en: 'Four leather-jacketed kids from Queens who stripped rock to two minutes and drew punk’s blueprint.',
      pl: 'Czterech chłopaków w skórzanych kurtkach z Queens, którzy skrócili rock do dwóch minut i stworzyli wzorzec punka.',
      ru: 'Четверо парней в кожанках из Куинса, сжавшие рок до двух минут и создавшие шаблон панка.',
    },
  },
  {
    id: 'madonna', name: 'Madonna', kind: 'person', born: '1958-08-16',
    birthplace: 'Bay City, Michigan', cityId: 'us-ny-nyc', district: 'East Village',
    regionId: 'us-ny', genres: ['pop'], eras: ['1980s', '1990s'], significance: 5,
    featuredTrack: tr('Like a Prayer', 1989),
    eraTracks: { '1990s': tr('Vogue', 1990) },
    description: {
      en: 'Arrived in the East Village from suburban Detroit in 1978, broke through in the downtown clubs and became the defining pop icon of the 1980s.',
      pl: 'Przyjechała do East Village z przedmieść Detroit w 1978 roku, przebiła się w klubach Downtown i stała się ikoną popu lat 80.',
      ru: 'Приехала в Ист-Виллидж из пригорода Детройта в 1978 году, пробилась в клубах даунтауна и стала главной поп-иконой 1980-х.',
    },
  },
  {
    id: 'talking-heads', name: 'Talking Heads', kind: 'group', formed: 1975,
    cityId: 'us-ny-nyc', regionId: 'us-ny',
    genres: ['rock'], eras: ['1970s', '1980s'], significance: 3,
    featuredTrack: tr('Psycho Killer', 1977),
    eraTracks: { '1980s': tr('Once in a Lifetime', 1980) },
    description: {
      en: 'Art-school minimalism from the CBGB scene that grew into global polyrhythmic funk.',
      pl: 'Artystyczny minimalizm ze sceny CBGB, który przerodził się w globalny, polirytmiczny funk.',
      ru: 'Арт-минимализм со сцены CBGB, выросший в глобальный полиритмичный фанк.',
    },
  },
  {
    id: 'grandmaster-flash', name: 'Grandmaster Flash and the Furious Five', kind: 'group', formed: 1978,
    cityId: 'us-ny-nyc', district: 'The Bronx', regionId: 'us-ny',
    genres: ['hiphop'], eras: ['1980s'], significance: 5,
    featuredTrack: tr('The Message', 1982),
    description: {
      en: "Bronx DJ pioneers whose 'The Message' proved hip-hop could be social commentary.",
      pl: 'Pionierzy didżejingu z Bronksu, których „The Message” udowodnił, że hip-hop może być komentarzem społecznym.',
      ru: 'Пионеры диджеинга из Бронкса: их «The Message» доказал, что хип-хоп может быть социальным высказыванием.',
    },
  },
  {
    id: 'run-dmc', name: 'Run-DMC', kind: 'group', formed: 1983,
    cityId: 'us-ny-nyc', district: 'Hollis, Queens', regionId: 'us-ny',
    genres: ['hiphop'], eras: ['1980s'], significance: 4,
    featuredTrack: tr('Walk This Way', 1986),
    description: {
      en: 'A trio from Hollis, Queens who brought hip-hop to MTV and fused it with rock.',
      pl: 'Trio z Hollis w Queens, które wprowadziło hip-hop do MTV i połączyło go z rockiem.',
      ru: 'Трио из Холлиса (Куинс), приведшее хип-хоп на MTV и скрестившее его с роком.',
    },
  },
  {
    id: 'the-notorious-big', name: 'The Notorious B.I.G.', kind: 'person', born: '1972-05-21',
    birthplace: 'Brooklyn, New York', cityId: 'us-ny-nyc', district: 'Brooklyn',
    regionId: 'us-ny', genres: ['hiphop'], eras: ['1990s'], significance: 5,
    featuredTrack: tr('Juicy', 1994),
    description: {
      en: "Brooklyn's storyteller-in-chief, whose effortless flow restored New York's hip-hop crown.",
      pl: 'Naczelny opowiadacz Brooklynu, którego swobodny flow przywrócił Nowemu Jorkowi hiphopową koronę.',
      ru: 'Главный рассказчик Бруклина: его лёгкий флоу вернул Нью-Йорку хип-хоп-корону.',
    },
  },
  {
    id: 'nas', name: 'Nas', kind: 'person', born: '1973-09-14',
    birthplace: 'Brooklyn, New York', cityId: 'us-ny-nyc', district: 'Queensbridge',
    regionId: 'us-ny', genres: ['hiphop'], eras: ['1990s'], significance: 4,
    featuredTrack: tr('N.Y. State of Mind', 1994),
    description: {
      en: 'His debut Illmatic, written as a teenager in Queensbridge, is often called hip-hop’s perfect album.',
      pl: 'Jego debiut Illmatic, pisany jako nastolatek w Queensbridge, bywa nazywany idealnym albumem hip-hopu.',
      ru: 'Его дебют Illmatic, написанный подростком в Куинсбридже, часто называют идеальным хип-хоп-альбомом.',
    },
  },
  {
    id: 'jay-z', name: 'Jay-Z', kind: 'person', born: '1969-12-04',
    birthplace: 'Brooklyn, New York', cityId: 'us-ny-nyc', district: 'Brooklyn',
    regionId: 'us-ny', genres: ['hiphop'], eras: ['1990s', '2000s'], significance: 5,
    featuredTrack: tr('Empire State of Mind', 2009),
    eraTracks: { '1990s': tr('Hard Knock Life (Ghetto Anthem)', 1998) },
    description: {
      en: "From Brooklyn's Marcy Houses to hip-hop's first billionaire — and New York's modern anthem.",
      pl: 'Od brooklińskiego osiedla Marcy do pierwszego miliardera hip-hopu — i współczesnego hymnu Nowego Jorku.',
      ru: 'От бруклинских кварталов Марси до первого миллиардера в хип-хопе — и современного гимна Нью-Йорка.',
    },
  },
  {
    id: 'the-strokes', name: 'The Strokes', kind: 'group', formed: 1998,
    cityId: 'us-ny-nyc', district: 'Manhattan', regionId: 'us-ny',
    genres: ['rock'], eras: ['2000s'], significance: 3,
    featuredTrack: tr('Last Nite', 2001),
    description: {
      en: 'Downtown cool and wiry guitars that kicked off the 2000s garage-rock revival.',
      pl: 'Luz Downtown i nerwowe gitary, które zapoczątkowały garażowe odrodzenie lat 2000.',
      ru: 'Даунтаунская небрежность и нервные гитары, запустившие гаражное возрождение 2000-х.',
    },
  },
  {
    id: 'alicia-keys', name: 'Alicia Keys', kind: 'person', born: '1981-01-25',
    birthplace: 'New York City', cityId: 'us-ny-nyc', district: "Hell's Kitchen",
    regionId: 'us-ny', genres: ['rnb', 'soul'], eras: ['2000s'], significance: 4,
    featuredTrack: tr("Fallin'", 2001),
    description: {
      en: "A classically trained pianist from Hell's Kitchen who fused soul, hip-hop and ballads.",
      pl: "Klasycznie wykształcona pianistka z Hell's Kitchen, łącząca soul, hip-hop i ballady.",
      ru: 'Пианистка с классическим образованием из Адской кухни, соединившая соул, хип-хоп и баллады.',
    },
  },
  {
    id: 'lady-gaga', name: 'Lady Gaga', kind: 'person', born: '1986-03-28',
    birthplace: 'New York City', cityId: 'us-ny-nyc', district: 'Lower East Side',
    regionId: 'us-ny', genres: ['pop'], eras: ['2000s', '2010s'], significance: 4,
    featuredTrack: tr('Bad Romance', 2009),
    eraTracks: { '2010s': tr('Shallow', 2018) },
    description: {
      en: 'Lower East Side performance art turned global pop spectacle.',
      pl: 'Performans z Lower East Side przemieniony w globalny popowy spektakl.',
      ru: 'Перформанс Нижнего Ист-Сайда, превратившийся в глобальное поп-шоу.',
    },
  },
  {
    id: 'cardi-b', name: 'Cardi B', kind: 'person', born: '1992-10-11',
    birthplace: 'New York City', cityId: 'us-ny-nyc', district: 'The Bronx',
    regionId: 'us-ny', genres: ['hiphop'], eras: ['2010s'], significance: 4,
    featuredTrack: tr('Bodak Yellow', 2017),
    description: {
      en: 'From the Bronx to No. 1 — the first solo female rapper to top the Hot 100 since 1998.',
      pl: 'Z Bronksu na szczyt — pierwsza solowa raperka na 1. miejscu Hot 100 od 1998 roku.',
      ru: 'Из Бронкса — на вершину: первая сольная рэперша на 1-м месте Hot 100 с 1998 года.',
    },
  },
  {
    id: 'ice-spice', name: 'Ice Spice', kind: 'person', born: '2000-01-01',
    birthplace: 'The Bronx, New York', cityId: 'us-ny-nyc', district: 'The Bronx',
    regionId: 'us-ny', genres: ['hiphop'], eras: ['2020s'], significance: 3,
    featuredTrack: tr("Munch (Feelin' U)", 2022),
    description: {
      en: 'Bronx drill with a playful, deadpan delivery that became a 2020s phenomenon.',
      pl: 'Bronksowy drill z zabawną, beznamiętną nawijką, który stał się fenomenem lat 2020.',
      ru: 'Бронксовый дрилл с игривой невозмутимой подачей, ставший феноменом 2020-х.',
    },
  },
  {
    id: 'tito-puente', name: 'Tito Puente', kind: 'person', born: '1923-04-20',
    birthplace: 'New York City', cityId: 'us-ny-nyc', district: 'Spanish Harlem',
    regionId: 'us-ny', genres: ['latin', 'jazz'], eras: ['1950s', '1960s'], significance: 4,
    featuredTrack: tr('Oye Como Va', 1963),
    eraTracks: { '1950s': tr('El Cayuco', 1958) },
    description: {
      en: 'The King of Latin Music — a Harlem-born timbalero who led the mambo craze at the Palladium Ballroom.',
      pl: 'Król Muzyki Latynoskiej — urodzony w Harlemie timbalero, który przewodził szaleństwu mambo w Palladium Ballroom.',
      ru: 'Король латинской музыки — уроженец Гарлема, тимбалеро, возглавивший мамбо-лихорадку в Palladium Ballroom.',
    },
  },
];
