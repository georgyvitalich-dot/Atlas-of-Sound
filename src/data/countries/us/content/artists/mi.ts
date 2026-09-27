import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** Michigan — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const MI_ARTISTS: Artist[] = [
  {
    // Birth year disputed (1912 vs 1917) — `born` omitted per guidelines §4.
    id: 'john-lee-hooker', name: 'John Lee Hooker', kind: 'person',
    birthplace: 'Tallahatchie County, Mississippi', cityId: 'us-mi-detroit', regionId: 'us-mi',
    genres: ['blues'], eras: ['1940s', '1950s'], significance: 5,
    featuredTrack: tr("Boogie Chillen'", 1948),
    eraTracks: { '1950s': tr('Dimples', 1956) },
    description: {
      en: "Moved north to Detroit's factories and turned a hypnotic one-chord boogie into a national hit.",
      pl: 'Przeniósł się do fabrycznego Detroit i zamienił hipnotyczny, jednoakordowy boogie w krajowy przebój.',
      ru: 'Переехал в заводской Детройт и превратил гипнотический буги на одном аккорде в общенациональный хит.',
    },
  },
  {
    id: 'smokey-robinson', name: 'Smokey Robinson', kind: 'person', born: '1940-02-19',
    birthplace: 'Detroit, Michigan', cityId: 'us-mi-detroit', regionId: 'us-mi',
    genres: ['soul', 'rnb'], eras: ['1960s'], significance: 4,
    featuredTrack: tr('The Tracks of My Tears', 1965),
    description: {
      en: "Motown's poet-in-residence — wrote and sang some of the most elegant love songs of the decade.",
      pl: 'Nadworny poeta Motown — pisał i śpiewał jedne z najbardziej eleganckich piosenek o miłości tej dekady.',
      ru: 'Придворный поэт Motown: писал и пел одни из самых изящных песен о любви того десятилетия.',
    },
  },
  {
    id: 'the-supremes', name: 'The Supremes', kind: 'group', formed: 1959,
    cityId: 'us-mi-detroit', regionId: 'us-mi',
    genres: ['pop', 'soul'], eras: ['1960s'], significance: 5,
    featuredTrack: tr('Where Did Our Love Go', 1964),
    description: {
      en: "Three friends from Detroit's Brewster projects who became Motown's most successful act of the 1960s.",
      pl: 'Trzy przyjaciółki z osiedla Brewster w Detroit, które stały się największą gwiazdą Motown lat 60.',
      ru: 'Три подруги из детройтского района Брюстер, ставшие самым успешным коллективом Motown 1960-х.',
    },
  },
  {
    id: 'aretha-franklin', name: 'Aretha Franklin', kind: 'person', born: '1942-03-25',
    birthplace: 'Memphis, Tennessee', cityId: 'us-mi-detroit', regionId: 'us-mi',
    genres: ['soul', 'gospel'], eras: ['1960s', '1970s'], significance: 5,
    featuredTrack: tr('Respect', 1967),
    eraTracks: { '1970s': tr('Rock Steady', 1971) },
    description: {
      en: "Raised in her father's Detroit church, she became the Queen of Soul with a voice that turned songs into anthems.",
      pl: 'Wychowana w kościele ojca w Detroit, została Królową Soulu — jej głos zamieniał piosenki w hymny.',
      ru: 'Выросла в детройтской церкви отца и стала Королевой соула: её голос превращал песни в гимны.',
    },
  },
  {
    id: 'stevie-wonder', name: 'Stevie Wonder', kind: 'person', born: '1950-05-13',
    birthplace: 'Saginaw, Michigan', cityId: 'us-mi-detroit', regionId: 'us-mi',
    genres: ['soul', 'rnb', 'pop'], eras: ['1960s', '1970s', '1980s'], significance: 5,
    featuredTrack: tr('Superstition', 1972),
    eraTracks: {
      '1960s': tr('Fingertips', 1963),
      '1980s': tr('I Just Called to Say I Love You', 1984),
    },
    description: {
      en: 'Signed to Motown at eleven, he grew into a studio visionary who redefined soul in the 1970s.',
      pl: 'Podpisał kontrakt z Motown w wieku jedenastu lat i wyrósł na studyjnego wizjonera, który na nowo zdefiniował soul lat 70.',
      ru: 'Подписал контракт с Motown в одиннадцать лет и вырос в студийного визионера, переосмыслившего соул 1970-х.',
    },
  },
  {
    id: 'marvin-gaye', name: 'Marvin Gaye', kind: 'person', born: '1939-04-02',
    birthplace: 'Washington, D.C.', cityId: 'us-mi-detroit', regionId: 'us-mi',
    genres: ['soul', 'rnb'], eras: ['1960s', '1970s'], significance: 4,
    featuredTrack: tr("What's Going On", 1971),
    eraTracks: { '1960s': tr('I Heard It Through the Grapevine', 1968) },
    description: {
      en: "Turned Motown polish into protest and introspection with the landmark album What's Going On.",
      pl: "Zamienił szlif Motown w protest i introspekcję na przełomowym albumie What's Going On.",
      ru: "Превратил лоск Motown в протест и самоанализ на знаковом альбоме What's Going On.",
    },
  },
  {
    id: 'bob-seger', name: 'Bob Seger', kind: 'person', born: '1945-05-06',
    birthplace: 'Detroit, Michigan', cityId: 'us-mi-detroit', regionId: 'us-mi',
    genres: ['rock'], eras: ['1970s', '1980s'], significance: 3,
    featuredTrack: tr('Night Moves', 1976),
    eraTracks: { '1980s': tr('Against the Wind', 1980) },
    description: {
      en: "Detroit's working-class rock voice, singing about youth, cars and the passing of time.",
      pl: 'Rockowy głos robotniczego Detroit, śpiewający o młodości, samochodach i przemijaniu.',
      ru: 'Рок-голос рабочего Детройта — песни о юности, машинах и уходящем времени.',
    },
  },
  {
    id: 'j-dilla', name: 'J Dilla', kind: 'person', born: '1974-02-07',
    birthplace: 'Detroit, Michigan', cityId: 'us-mi-detroit', regionId: 'us-mi',
    genres: ['hiphop'], eras: ['1990s', '2000s'], significance: 3,
    featuredTrack: tr('Workinonit', 2006),
    description: {
      en: "A producer's producer whose off-kilter, human-feeling beats reshaped hip-hop and neo-soul.",
      pl: 'Producent producentów, którego rozchwiane, „ludzkie” bity zmieniły hip-hop i neo-soul.',
      ru: 'Продюсер для продюсеров: его «живые», слегка раскачанные биты изменили хип-хоп и неосоул.',
    },
  },
  {
    id: 'eminem', name: 'Eminem', kind: 'person', born: '1972-10-17',
    birthplace: 'St. Joseph, Missouri', cityId: 'us-mi-detroit', regionId: 'us-mi',
    genres: ['hiphop'], eras: ['2000s', '2010s'], significance: 5,
    featuredTrack: tr('Lose Yourself', 2002),
    eraTracks: { '2010s': tr('Love the Way You Lie', 2010) },
    description: {
      en: "Came up through Detroit's battle-rap scene and became one of the best-selling artists of the 2000s.",
      pl: 'Wyrósł na bitwach freestyle’owych w Detroit i został jednym z najlepiej sprzedających się artystów lat 2000.',
      ru: 'Вырос на рэп-баттлах Детройта и стал одним из самых продаваемых артистов 2000-х.',
    },
  },
  {
    id: 'the-white-stripes', name: 'The White Stripes', kind: 'group', formed: 1997,
    cityId: 'us-mi-detroit', regionId: 'us-mi',
    genres: ['rock'], eras: ['2000s'], significance: 4,
    featuredTrack: tr('Seven Nation Army', 2003),
    description: {
      en: 'A two-piece garage-rock band whose stripped-down riffs brought Detroit rock back to the world stage.',
      pl: 'Dwuosobowy zespół garażowy, którego surowe riffy przywróciły rock z Detroit na światową scenę.',
      ru: 'Гаражный дуэт, чьи аскетичные риффы вернули детройтский рок на мировую сцену.',
    },
  },
  {
    id: 'big-sean', name: 'Big Sean', kind: 'person', born: '1988-03-25',
    birthplace: 'Santa Monica, California', cityId: 'us-mi-detroit', regionId: 'us-mi',
    genres: ['hiphop'], eras: ['2010s'], significance: 3,
    featuredTrack: tr('Bounce Back', 2016),
    description: {
      en: 'Raised in Detroit and discovered by Kanye West, he carried the city’s flag into 2010s rap.',
      pl: 'Wychowany w Detroit i odkryty przez Kanye Westa, niósł sztandar miasta w rapie lat 2010.',
      ru: 'Вырос в Детройте, был открыт Канье Уэстом и представлял город в рэпе 2010-х.',
    },
  },
  {
    id: 'jackie-wilson', name: 'Jackie Wilson', kind: 'person', born: '1934-06-09',
    birthplace: 'Detroit, Michigan', cityId: 'us-mi-detroit', regionId: 'us-mi',
    genres: ['rnb', 'soul'], eras: ['1950s', '1960s'], significance: 4,
    featuredTrack: tr('Lonely Teardrops', 1958),
    eraTracks: { '1960s': tr('(Your Love Keeps Lifting Me) Higher and Higher', 1967) },
    description: {
      en: '“Mr. Excitement” — a Detroit showman whose early hits were co-written by Berry Gordy just before Motown began.',
      pl: '„Mr. Excitement” — showman z Detroit, którego pierwsze przeboje współtworzył Berry Gordy tuż przed założeniem Motown.',
      ru: '«Мистер Восторг» — шоумен из Детройта, чьи первые хиты написал в соавторстве Берри Горди незадолго до основания Motown.',
    },
  },
  {
    id: 'the-stooges', name: 'The Stooges', kind: 'group', formed: 1967,
    cityId: 'us-mi-ann-arbor', regionId: 'us-mi',
    genres: ['rock'], eras: ['1960s', '1970s'], significance: 3,
    featuredTrack: tr('I Wanna Be Your Dog', 1969),
    eraTracks: { '1970s': tr('Search and Destroy', 1973) },
    description: {
      en: 'Iggy Pop’s band from Ann Arbor — raw, loud and a direct ancestor of punk.',
      pl: 'Zespół Iggy’ego Popa z Ann Arbor — surowy, głośny i bezpośredni przodek punka.',
      ru: 'Группа Игги Попа из Анн-Арбора — сырая, громкая, прямой предок панка.',
    },
  },
  {
    id: 'juan-atkins', name: 'Juan Atkins', kind: 'person', born: '1962-09-12',
    birthplace: 'Detroit, Michigan', cityId: 'us-mi-detroit', regionId: 'us-mi',
    genres: ['electronic'], eras: ['1980s'], significance: 4,
    featuredTrack: tr("No UFO's", 1985),
    description: {
      en: 'One of the “Belleville Three” who invented Detroit techno; as Model 500 he fused Kraftwerk-style electronics with funk.',
      pl: 'Jeden z „Belleville Three”, twórców detroit techno; jako Model 500 połączył elektronikę w duchu Kraftwerk z funkiem.',
      ru: 'Один из «Бельвильской тройки», изобретшей детройтское техно; как Model 500 соединил электронику в духе Kraftwerk с фанком.',
    },
  },
];
