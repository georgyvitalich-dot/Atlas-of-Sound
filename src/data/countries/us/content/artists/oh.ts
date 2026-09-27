import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** Ohio — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const OH_ARTISTS: Artist[] = [
  {
    id: 'the-isley-brothers', name: 'The Isley Brothers', kind: 'group', formed: 1954,
    cityId: 'us-oh-cincinnati', regionId: 'us-oh',
    genres: ['rnb', 'soul', 'rock'], eras: ['1950s', '1960s', '1970s'], significance: 4,
    featuredTrack: tr('Shout', 1959),
    eraTracks: { '1960s': tr('Twist and Shout', 1962), '1970s': tr('That Lady', 1973) },
    description: {
      en: 'Brothers from Cincinnati’s gospel scene whose career stretched from “Shout” to psychedelic funk-rock.',
      pl: 'Bracia z gospelowej sceny Cincinnati, których kariera rozciągnęła się od „Shout” po psychodeliczny funk-rock.',
      ru: 'Братья с госпел-сцены Цинциннати, чья карьера простиралась от «Shout» до психоделического фанк-рока.',
    },
  },
  {
    id: 'the-ojays', name: "The O'Jays", kind: 'group', formed: 1958,
    cityId: 'us-oh-canton', regionId: 'us-oh',
    genres: ['soul'], eras: ['1970s'], significance: 4,
    featuredTrack: tr('Love Train', 1972),
    description: {
      en: 'Formed at a Canton high school, they became the voice of Philadelphia International’s socially conscious Philly soul.',
      pl: 'Założeni w liceum w Canton, stali się głosem społecznie zaangażowanego philly soulu wytwórni Philadelphia International.',
      ru: 'Созданные в школе Кантона, они стали голосом социально острого филли-соула лейбла Philadelphia International.',
    },
  },
  {
    id: 'ohio-players', name: 'Ohio Players', kind: 'group', formed: 1959,
    cityId: 'us-oh-dayton', regionId: 'us-oh',
    genres: ['soul', 'rnb'], eras: ['1970s'], significance: 4,
    featuredTrack: tr('Love Rollercoaster', 1975),
    description: {
      en: 'Dayton’s funk pioneers, famous for horn-driven grooves like “Fire” and provocative album covers.',
      pl: 'Pionierzy funku z Dayton, słynący z groove’ów z sekcją dętą jak „Fire” i prowokacyjnych okładek płyt.',
      ru: 'Пионеры фанка из Дейтона, известные грувами с духовыми вроде «Fire» и провокационными обложками.',
    },
  },
  {
    id: 'bootsy-collins', name: 'Bootsy Collins', kind: 'person', born: '1951-10-26',
    birthplace: 'Cincinnati, Ohio', cityId: 'us-oh-cincinnati', regionId: 'us-oh',
    genres: ['soul', 'rnb'], eras: ['1970s'], significance: 3,
    featuredTrack: tr("I'd Rather Be with You", 1976),
    description: {
      en: 'A Cincinnati bassist who played with James Brown before his star-shaped glasses and space bass led Parliament-Funkadelic’s wildest spin-off.',
      pl: 'Basista z Cincinnati, który grał z Jamesem Brownem, zanim w gwiaździstych okularach i z kosmicznym basem poprowadził najdzikszy odprysk Parliament-Funkadelic.',
      ru: 'Басист из Цинциннати, игравший с Джеймсом Брауном, прежде чем в очках-звёздах и с «космическим» басом возглавить самое безумное ответвление Parliament-Funkadelic.',
    },
  },
  {
    id: 'devo', name: 'Devo', kind: 'group', formed: 1973,
    cityId: 'us-oh-akron', regionId: 'us-oh',
    genres: ['rock', 'electronic'], eras: ['1980s'], significance: 4,
    featuredTrack: tr('Whip It', 1980),
    description: {
      en: 'Akron art students whose robotic new wave and theory of “de-evolution” gave MTV “Whip It”.',
      pl: 'Studenci sztuki z Akron, których robotyczna nowa fala i teoria „dewolucji” dały MTV „Whip It”.',
      ru: 'Студенты-художники из Акрона, чей роботизированный нью-вейв и теория «деволюции» подарили MTV «Whip It».',
    },
  },
  {
    id: 'zapp', name: 'Zapp', kind: 'group', formed: 1977,
    cityId: 'us-oh-dayton', regionId: 'us-oh',
    genres: ['soul', 'rnb'], eras: ['1980s'], significance: 3,
    featuredTrack: tr('More Bounce to the Ounce', 1980),
    description: {
      en: 'Roger Troutman’s Dayton band, whose talk-box funk was later sampled throughout West Coast hip-hop.',
      pl: 'Zespół Rogera Troutmana z Dayton, którego funk z talk boxem był potem samplowany w całym hip-hopie Zachodniego Wybrzeża.',
      ru: 'Группа Роджера Траутмана из Дейтона, чей фанк с ток-боксом позже сэмплировал весь хип-хоп Западного побережья.',
    },
  },
  {
    id: 'nine-inch-nails', name: 'Nine Inch Nails', kind: 'group', formed: 1988,
    cityId: 'us-oh-cleveland', regionId: 'us-oh',
    genres: ['rock', 'electronic'], eras: ['1990s'], significance: 4,
    featuredTrack: tr('Closer', 1994),
    description: {
      en: 'Trent Reznor’s Cleveland project brought industrial music’s machine noise to platinum-selling rock.',
      pl: 'Projekt Trenta Reznora z Cleveland wprowadził maszynowy hałas muzyki industrialnej do platynowego rocka.',
      ru: 'Кливлендский проект Трента Резнора принёс машинный шум индастриала в платиновый рок.',
    },
  },
  {
    id: 'bone-thugs-n-harmony', name: 'Bone Thugs-n-Harmony', kind: 'group', formed: 1991,
    cityId: 'us-oh-cleveland', regionId: 'us-oh',
    genres: ['hiphop'], eras: ['1990s'], significance: 4,
    featuredTrack: tr('Tha Crossroads', 1996),
    description: {
      en: 'Cleveland rappers whose rapid-fire, harmonized flow was unlike anything else in 1990s hip-hop.',
      pl: 'Raperzy z Cleveland, których błyskawiczny, harmonizowany flow nie przypominał niczego innego w hip-hopie lat 90.',
      ru: 'Кливлендские рэперы, чей скорострельный гармонизированный флоу не походил ни на что в хип-хопе 1990-х.',
    },
  },
  {
    id: 'the-black-keys', name: 'The Black Keys', kind: 'group', formed: 2001,
    cityId: 'us-oh-akron', regionId: 'us-oh',
    genres: ['rock', 'blues'], eras: ['2000s', '2010s'], significance: 3,
    featuredTrack: tr('Lonely Boy', 2011),
    eraTracks: { '2000s': tr('Your Touch', 2006) },
    description: {
      en: 'An Akron duo that recorded raw garage blues in a basement before breaking through to arenas.',
      pl: 'Duet z Akron, który nagrywał surowy garażowy blues w piwnicy, zanim przebił się na areny.',
      ru: 'Дуэт из Акрона, записывавший сырой гаражный блюз в подвале, прежде чем пробиться на арены.',
    },
  },
  {
    id: 'twenty-one-pilots', name: 'Twenty One Pilots', kind: 'group', formed: 2009,
    cityId: 'us-oh-columbus', regionId: 'us-oh',
    genres: ['pop', 'rock', 'hiphop'], eras: ['2010s'], significance: 3,
    featuredTrack: tr('Stressed Out', 2015),
    description: {
      en: 'A Columbus duo that blended rap, pop and rock, building a huge fan base from local shows before “Stressed Out”.',
      pl: 'Duet z Columbus łączący rap, pop i rock, który zbudował ogromną publiczność na lokalnych koncertach przed „Stressed Out”.',
      ru: 'Дуэт из Колумбуса, смешавший рэп, поп и рок и собравший огромную аудиторию на местных концертах ещё до «Stressed Out».',
    },
  },
];
