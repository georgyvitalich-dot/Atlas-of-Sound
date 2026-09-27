import type { Scene } from '../../../types';

/**
 * US musical scenes (CONTENT_GUIDELINES §14). Membership is editorial and uses
 * only artists already in this dataset; the description may mention others.
 */
export const US_SCENES: Scene[] = [
  {
    id: 'us-delta-blues',
    name: { en: 'Delta blues', pl: 'Blues Delty', ru: 'Дельта-блюз' },
    cityIds: ['us-ms-clarksdale', 'us-ar-helena'],
    eras: ['1940s'],
    genres: ['blues'],
    artistIds: ['son-house', 'sonny-boy-williamson-ii'],
    description: {
      en: 'Voice, slide guitar and harmonica from the cotton country along the Mississippi: Son House around Clarksdale, Sonny Boy Williamson II on King Biscuit Time radio in Helena.',
      pl: 'Głos, gitara slide i harmonijka z bawełnianych ziem nad Missisipi: Son House w okolicach Clarksdale, Sonny Boy Williamson II w radiu King Biscuit Time w Helenie.',
      ru: 'Голос, слайд-гитара и губная гармошка хлопковых земель вдоль Миссисипи: Сан Хаус под Кларксдейлом, Сонни Бой Уильямсон II в радиопередаче King Biscuit Time в Хелене.',
    },
    // Delta migrants electrified this sound in Chicago; Sam Phillips first recorded Delta bluesmen in Memphis.
    related: [
      { sceneId: 'us-chicago-blues', kind: 'evolvedInto' },
      { sceneId: 'us-sun-records', kind: 'influenced' },
    ],
  },
  {
    id: 'us-sun-records',
    name: { en: 'Sun Records', pl: 'Sun Records', ru: 'Студия Sun' },
    cityIds: ['us-tn-memphis'],
    eras: ['1950s'],
    // Sam Phillips founded the Sun label in 1952.
    from: 1952,
    genres: ['rock', 'country'],
    artistIds: ['elvis-presley', 'johnny-cash'],
    description: {
      en: 'Sam Phillips’s small Memphis studio recorded blues players first, then young singers who mixed blues with country: Elvis Presley in 1954, Johnny Cash in 1955.',
      pl: 'Małe memfijskie studio Sama Phillipsa nagrywało najpierw bluesmanów, potem młodych wokalistów mieszających blues z country: Elvisa Presleya w 1954, Johnny’ego Casha w 1955.',
      ru: 'Маленькая мемфисская студия Сэма Филлипса сначала записывала блюзменов, потом молодых певцов, смешавших блюз с кантри: Элвиса Пресли в 1954-м, Джонни Кэша в 1955-м.',
    },
  },
  {
    id: 'us-chicago-gospel',
    name: { en: 'Chicago gospel', pl: 'Gospel z Chicago', ru: 'Чикагский госпел' },
    cityIds: ['us-il-chicago'],
    eras: ['1940s', '1950s', '1960s'],
    genres: ['gospel'],
    artistIds: ['mahalia-jackson', 'sam-cooke', 'the-staple-singers'],
    description: {
      en: 'South Side churches made Chicago the capital of gospel: Mahalia Jackson’s voice, Sam Cooke’s years with the Soul Stirrers and the Staple Singers’ family harmonies.',
      pl: 'Kościoły South Side uczyniły Chicago stolicą gospel: głos Mahalii Jackson, lata Sama Cooke’a w Soul Stirrers i rodzinne harmonie Staple Singers.',
      ru: 'Церкви южного Чикаго сделали город столицей госпела: голос Махалии Джексон, годы Сэма Кука в Soul Stirrers и семейные гармонии Staple Singers.',
    },
    // Otis Redding modelled himself on Sam Cooke; the Staple Singers moved to Stax in 1968.
    related: [{ sceneId: 'us-southern-soul', kind: 'influenced' }],
  },
  {
    id: 'us-southern-soul',
    name: { en: 'Southern soul', pl: 'Southern soul', ru: 'Южный соул' },
    cityIds: ['us-tn-memphis', 'us-al-muscle-shoals', 'us-ga-macon'],
    eras: ['1960s', '1970s'],
    genres: ['soul'],
    artistIds: ['otis-redding', 'isaac-hayes', 'percy-sledge', 'clarence-carter', 'al-green'],
    description: {
      en: 'Rawer than Motown: church voices, horns and studio house bands in Memphis and Muscle Shoals, with Otis Redding driving up from Macon to record at Stax.',
      pl: 'Surowszy niż Motown: kościelne głosy, dęciaki i studyjne zespoły w Memphis i Muscle Shoals, a Otis Redding przyjeżdżał z Macon nagrywać w Stax.',
      ru: 'Грубее Мотауна: церковные голоса, духовые и студийные бэнды Мемфиса и Маскл-Шоалс, а Отис Реддинг приезжал записываться на Stax из Мейкона.',
    },
    // The two great soul sounds of the 1960s, heard side by side.
    related: [{ sceneId: 'us-motown', kind: 'contemporaryOf' }],
  },
  {
    id: 'us-motown',
    name: { en: 'Motown', pl: 'Motown', ru: 'Мотаун' },
    cityIds: ['us-mi-detroit'],
    eras: ['1960s', '1970s'],
    // Hitsville U.S.A. opened in 1959; the label moved to Los Angeles in 1972.
    from: 1959,
    to: 1972,
    genres: ['soul', 'pop', 'rnb'],
    artistIds: ['the-supremes', 'smokey-robinson', 'marvin-gaye', 'stevie-wonder'],
    description: {
      en: 'Berry Gordy’s Hitsville U.S.A. turned Detroit into a hit factory: a house band, in-house writers and polished stars who carried soul into pop.',
      pl: 'Hitsville U.S.A. Berry’ego Gordy’ego zamieniło Detroit w fabrykę przebojów: własny zespół, własni autorzy i wypolerowane gwiazdy, które wniosły soul do popu.',
      ru: 'Hitsville U.S.A. Берри Горди превратила Детройт в фабрику хитов: свой оркестр, свои авторы и отшлифованные звёзды, которые вывели соул в поп.',
    },
  },
  {
    id: 'us-chicago-blues',
    name: { en: 'Chicago blues', pl: 'Blues chicagowski', ru: 'Чикагский блюз' },
    cityIds: ['us-il-chicago'],
    eras: ['1940s', '1950s', '1960s'],
    genres: ['blues'],
    artistIds: ['muddy-waters', 'howlin-wolf'],
    description: {
      en: 'Delta migrants plugged in on Chicago’s South Side: amplified guitar, harmonica and a hard-driving band sound, cut largely for Chess Records.',
      pl: 'Migranci z Delty podłączyli się do wzmacniaczy na South Side w Chicago: elektryczna gitara, harmonijka i mocne brzmienie zespołu, nagrywane głównie dla Chess Records.',
      ru: 'Переселенцы из Дельты подключились к усилителям в южном Чикаго: электрогитара, губная гармошка и напористый звук бэнда, записанный в основном для Chess Records.',
    },
  },
  {
    id: 'us-seattle-grunge',
    name: { en: 'Seattle grunge', pl: 'Grunge z Seattle', ru: 'Сиэтлский гранж' },
    cityIds: ['us-wa-seattle', 'us-wa-aberdeen'],
    eras: ['1980s', '1990s'],
    genres: ['rock'],
    artistIds: ['nirvana', 'soundgarden', 'pearl-jam', 'alice-in-chains'],
    description: {
      en: 'A heavy, sludgy mix of punk and metal grew around Seattle’s Sub Pop label and small-town Washington, then went worldwide with “Nevermind” in 1991.',
      pl: 'Ciężka, brudna mieszanka punka i metalu wyrosła wokół wytwórni Sub Pop z Seattle i małych miast stanu Waszyngton, a w 1991 roku „Nevermind” poniosło ją w świat.',
      ru: 'Тяжёлая, вязкая смесь панка и метала выросла вокруг сиэтлского лейбла Sub Pop и маленьких городков штата Вашингтон, а в 1991-м «Nevermind» вынес её на весь мир.',
    },
  },
  {
    id: 'us-riot-grrrl',
    name: { en: 'Riot grrrl', pl: 'Riot grrrl', ru: 'Движение riot grrrl' },
    cityIds: ['us-wa-olympia'],
    eras: ['1990s'],
    genres: ['rock'],
    artistIds: ['bikini-kill', 'sleater-kinney'],
    description: {
      en: 'Olympia’s do-it-yourself punk network of zines, small labels and all-ages shows gave rise to riot grrrl: loud, feminist punk led by Bikini Kill.',
      pl: 'Olimpijska sieć punka „zrób to sam” — ziny, małe wytwórnie, koncerty bez limitu wieku — zrodziła riot grrrl: głośny, feministyczny punk z Bikini Kill na czele.',
      ru: 'Олимпийская сеть панка «сделай сам» — зины, маленькие лейблы, концерты для всех возрастов — породила riot grrrl: громкий феминистский панк во главе с Bikini Kill.',
    },
    // Same small-town Washington circle: Kurt Cobain lived in Olympia; “Smells Like Teen Spirit” took its title from a Kathleen Hanna graffito.
    related: [{ sceneId: 'us-seattle-grunge', kind: 'contemporaryOf' }],
  },
  {
    id: 'us-ohio-funk',
    name: { en: 'Ohio funk', pl: 'Funk z Ohio', ru: 'Фанк Огайо' },
    cityIds: ['us-oh-dayton', 'us-oh-cincinnati'],
    eras: ['1970s', '1980s'],
    genres: ['soul', 'rnb'],
    artistIds: ['ohio-players', 'zapp', 'bootsy-collins'],
    description: {
      en: 'Dayton became a funk capital with the Ohio Players and Zapp’s talk-box grooves; down the road in Cincinnati, Bootsy Collins went from James Brown’s band to Parliament-Funkadelic.',
      pl: 'Dayton stało się stolicą funku dzięki Ohio Players i talk-boksowym groove’om Zapp; niedaleko, w Cincinnati, Bootsy Collins przeszedł z zespołu Jamesa Browna do Parliament-Funkadelic.',
      ru: 'Дейтон стал столицей фанка благодаря Ohio Players и ток-боксу Zapp; по соседству, в Цинциннати, Бутси Коллинз прошёл путь от бэнда Джеймса Брауна до Parliament-Funkadelic.',
    },
    // G-funk producers sampled these grooves; Zapp’s Roger Troutman sang the talk-box hook of “California Love”.
    related: [{ sceneId: 'us-west-coast-g-funk', kind: 'influenced' }],
  },
  {
    id: 'us-west-coast-g-funk',
    name: { en: 'West Coast G-funk', pl: 'G-funk z Zachodniego Wybrzeża', ru: 'G-фанк Западного побережья' },
    cityIds: ['us-ca-compton', 'us-ca-long-beach'],
    eras: ['1990s'],
    genres: ['hiphop'],
    artistIds: ['dr-dre', 'snoop-dogg'],
    description: {
      en: 'Dr. Dre’s slow, synth-laced Southern California sound built on P-Funk grooves, launched with “The Chronic” and carried by Snoop Dogg.',
      pl: 'Powolne, syntezatorowe brzmienie południowej Kalifornii Dr. Dre, oparte na groove’ach P-Funku, zapoczątkowane przez „The Chronic” i niesione przez Snoop Dogga.',
      ru: 'Неспешный синтезаторный звук Южной Калифорнии от Dr. Dre на грувах P-Funk, начатый альбомом «The Chronic» и подхваченный Snoop Dogg.',
    },
  },
];
