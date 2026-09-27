import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** North Carolina — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const NC_ARTISTS: Artist[] = [
  // North Carolina-born artists placed where their defining work was made:
  // John Coltrane (PA), Thelonious Monk, Nina Simone, Roberta Flack, Ben E. King.
  {
    // Birth date debated in the sources — `born` omitted (guidelines §4).
    id: 'elizabeth-cotten', name: 'Elizabeth Cotten', kind: 'person',
    birthplace: 'Carrboro, North Carolina', cityId: 'us-nc-carrboro', regionId: 'us-nc',
    genres: ['folk', 'blues'], eras: ['1950s'], significance: 3,
    featuredTrack: tr('Freight Train', 1958),
    description: {
      en: 'A left-handed guitarist who wrote “Freight Train” as a girl in Carrboro; her distinctive picking was first recorded when she was in her sixties.',
      pl: 'Leworęczna gitarzystka, która jako dziewczynka w Carrboro napisała „Freight Train”; jej charakterystyczną grę nagrano dopiero, gdy miała ponad sześćdziesiąt lat.',
      ru: 'Гитаристка-левша, ещё девочкой в Карборо написавшая «Freight Train»; её самобытную манеру впервые записали, когда ей было за шестьдесят.',
    },
  },
  {
    id: 'doc-watson', name: 'Doc Watson', kind: 'person', born: '1923-03-03',
    birthplace: 'Deep Gap, North Carolina', cityId: 'us-nc-deep-gap', regionId: 'us-nc',
    genres: ['folk', 'bluegrass'], eras: ['1960s'], significance: 4,
    featuredTrack: tr('Deep River Blues', 1964),
    description: {
      en: 'A blind flatpicker from Deep Gap whose lightning-fast, precise guitar became a model for folk and bluegrass players.',
      pl: 'Niewidomy gitarzysta z Deep Gap, którego błyskawiczna, precyzyjna gra kostką stała się wzorem dla muzyków folku i bluegrassu.',
      ru: 'Незрячий гитарист из Дип-Гэпа, чья молниеносная и точная игра медиатором стала образцом для фолк- и блюграсс-музыкантов.',
    },
  },
  {
    id: 'james-taylor', name: 'James Taylor', kind: 'person', born: '1948-03-12',
    birthplace: 'Boston, Massachusetts', cityId: 'us-nc-chapel-hill', regionId: 'us-nc',
    genres: ['folk', 'rock'], eras: ['1960s', '1970s'], significance: 4,
    featuredTrack: tr('Fire and Rain', 1970),
    eraTracks: { '1960s': tr('Carolina in My Mind', 1968) },
    description: {
      en: 'Raised in Chapel Hill, he wrote “Carolina in My Mind” in London and became the gentle voice of the 1970s singer-songwriter era.',
      pl: 'Wychowany w Chapel Hill, napisał „Carolina in My Mind” w Londynie i stał się łagodnym głosem ery singer-songwriterów lat 70.',
      ru: 'Выросший в Чапел-Хилле, он написал «Carolina in My Mind» в Лондоне и стал мягким голосом эпохи сингер-сонграйтеров 1970-х.',
    },
  },
  {
    id: 'superchunk', name: 'Superchunk', kind: 'group', formed: 1989,
    cityId: 'us-nc-chapel-hill', regionId: 'us-nc',
    genres: ['rock'], eras: ['1990s'], significance: 3,
    featuredTrack: tr('Hyper Enough', 1995),
    description: {
      en: 'Chapel Hill indie rockers who founded Merge Records and helped make the town a 1990s alternative hub.',
      pl: 'Indierockowcy z Chapel Hill, którzy założyli wytwórnię Merge i pomogli uczynić miasto ośrodkiem alternatywy lat 90.',
      ru: 'Инди-рокеры из Чапел-Хилла, основавшие лейбл Merge и превратившие город в центр альтернативы 1990-х.',
    },
  },
  {
    id: 'the-avett-brothers', name: 'The Avett Brothers', kind: 'group', formed: 2000,
    cityId: 'us-nc-concord', regionId: 'us-nc',
    genres: ['folk', 'rock'], eras: ['2000s'], significance: 3,
    featuredTrack: tr('I and Love and You', 2009),
    description: {
      en: 'Brothers from Concord who blended bluegrass instruments, punk energy and pop melody into a new folk-rock.',
      pl: 'Bracia z Concord, którzy połączyli bluegrassowe instrumenty, punkową energię i popową melodię w nowy folk-rock.',
      ru: 'Братья из Конкорда, соединившие блюграсс-инструменты, панк-энергию и поп-мелодику в новый фолк-рок.',
    },
  },
  {
    id: 'carolina-chocolate-drops', name: 'Carolina Chocolate Drops', kind: 'group', formed: 2005,
    cityId: 'us-nc-durham', regionId: 'us-nc',
    genres: ['folk', 'bluegrass'], eras: ['2010s'], significance: 3,
    featuredTrack: tr("Hit 'Em Up Style", 2010),
    description: {
      en: 'A Durham string band that revived the African American roots of old-time fiddle and banjo music and won a Grammy in 2011.',
      pl: 'Zespół smyczkowy z Durham, który przywrócił afroamerykańskie korzenie dawnej muzyki na skrzypce i banjo i zdobył Grammy w 2011 roku.',
      ru: 'Стринг-бэнд из Дарема, возродивший афроамериканские корни старинной музыки скрипки и банджо и получивший «Грэмми» в 2011 году.',
    },
  },
  {
    id: 'j-cole', name: 'J. Cole', kind: 'person', born: '1985-01-28',
    birthplace: 'Frankfurt, Germany', cityId: 'us-nc-fayetteville', regionId: 'us-nc',
    genres: ['hiphop'], eras: ['2010s'], significance: 4,
    featuredTrack: tr('No Role Modelz', 2014),
    description: {
      en: 'Raised in Fayetteville, he named his landmark album after his childhood home on Forest Hills Drive and built the Dreamville label.',
      pl: 'Wychowany w Fayetteville, nazwał przełomowy album od domu z dzieciństwa przy Forest Hills Drive i zbudował wytwórnię Dreamville.',
      ru: 'Выросший в Фейетвилле, он назвал свой ключевой альбом в честь дома детства на Форест-Хиллс-драйв и создал лейбл Dreamville.',
    },
  },
];
