import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** Louisiana — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const LA_ARTISTS: Artist[] = [
  {
    id: 'louis-armstrong', name: 'Louis Armstrong', kind: 'person', born: '1901-08-04',
    birthplace: 'New Orleans, Louisiana', cityId: 'us-la-new-orleans', regionId: 'us-la',
    genres: ['jazz'], eras: ['1940s', '1950s', '1960s'], significance: 5,
    featuredTrack: tr('What a Wonderful World', 1967),
    eraTracks: {
      '1940s': tr('Do You Know What It Means to Miss New Orleans', 1947),
      '1950s': tr('Mack the Knife', 1955),
    },
    description: {
      en: "Satchmo — the New Orleans trumpeter whose sound and smile became jazz's global language.",
      pl: 'Satchmo — trębacz z Nowego Orleanu, którego brzmienie i uśmiech stały się globalnym językiem jazzu.',
      ru: 'Сачмо — трубач из Нового Орлеана, чей звук и улыбка стали мировым языком джаза.',
    },
  },
  {
    id: 'fats-domino', name: 'Fats Domino', kind: 'person', born: '1928-02-26',
    birthplace: 'New Orleans, Louisiana', cityId: 'us-la-new-orleans', regionId: 'us-la',
    genres: ['rnb', 'rock'], eras: ['1950s'], significance: 5,
    featuredTrack: tr('Blueberry Hill', 1956),
    description: {
      en: 'His rolling New Orleans piano and easy voice helped lay the foundations of rock ’n’ roll.',
      pl: 'Jego toczący się nowoorleański fortepian i swobodny głos położyły fundamenty pod rock and rolla.',
      ru: 'Его катящееся новоорлеанское фортепиано и мягкий голос заложили основы рок-н-ролла.',
    },
  },
  {
    id: 'lil-wayne', name: 'Lil Wayne', kind: 'person', born: '1982-09-27',
    birthplace: 'New Orleans, Louisiana', cityId: 'us-la-new-orleans', regionId: 'us-la',
    genres: ['hiphop'], eras: ['2000s'], significance: 4,
    featuredTrack: tr('A Milli', 2008),
    description: {
      en: 'A Cash Money prodigy whose late-2000s mixtape run redefined what a rapper could be.',
      pl: 'Cudowne dziecko Cash Money, którego seria mixtape’ów z końca lat 2000 przedefiniowała rap.',
      ru: 'Вундеркинд лейбла Cash Money, чья серия микстейпов конца 2000-х переопределила рэп.',
    },
  },
  {
    id: 'professor-longhair', name: 'Professor Longhair', kind: 'person', born: '1918-12-19',
    birthplace: 'Bogalusa, Louisiana', cityId: 'us-la-new-orleans', regionId: 'us-la',
    genres: ['rnb', 'blues'], eras: ['1940s', '1950s'], significance: 4,
    featuredTrack: tr('Tipitina', 1953),
    eraTracks: { '1940s': tr('Mardi Gras in New Orleans', 1949) },
    description: {
      en: 'His rumba-flavored rolling piano became the rhythmic DNA of New Orleans R&B and Mardi Gras music.',
      pl: 'Jego toczący się fortepian o posmaku rumby stał się rytmicznym DNA nowoorleańskiego R&B i muzyki Mardi Gras.',
      ru: 'Его «катящееся» фортепиано с оттенком румбы стало ритмической ДНК новоорлеанского R&B и музыки Марди Гра.',
    },
  },
  {
    id: 'the-meters', name: 'The Meters', kind: 'group', formed: 1965,
    cityId: 'us-la-new-orleans', regionId: 'us-la',
    genres: ['rnb', 'soul'], eras: ['1960s', '1970s'], significance: 3,
    featuredTrack: tr('Cissy Strut', 1969),
    eraTracks: { '1970s': tr('Hey Pocky A-Way', 1974) },
    description: {
      en: 'New Orleans’ house band: their sparse, syncopated grooves became a cornerstone of funk and a favorite of hip-hop samplers.',
      pl: 'Zespół-instytucja Nowego Orleanu: ich oszczędne, synkopowane groove’y stały się fundamentem funku i ulubionym źródłem sampli hip-hopu.',
      ru: '«Домашняя группа» Нового Орлеана: их скупые синкопированные грувы стали фундаментом фанка и любимым источником сэмплов в хип-хопе.',
    },
  },
  {
    id: 'allen-toussaint', name: 'Allen Toussaint', kind: 'person', born: '1938-01-14',
    birthplace: 'New Orleans, Louisiana', cityId: 'us-la-new-orleans', regionId: 'us-la',
    genres: ['rnb', 'soul'], eras: ['1970s'], significance: 3,
    featuredTrack: tr('Southern Nights', 1975),
    description: {
      en: 'The quiet architect of New Orleans R&B — a songwriter, producer and pianist behind dozens of other artists’ hits.',
      pl: 'Cichy architekt nowoorleańskiego R&B — autor, producent i pianista stojący za przebojami dziesiątek artystów.',
      ru: 'Тихий архитектор новоорлеанского R&B — автор песен, продюсер и пианист, стоявший за хитами десятков артистов.',
    },
  },
  {
    id: 'dr-john', name: 'Dr. John', kind: 'person', born: '1941-11-20',
    birthplace: 'New Orleans, Louisiana', cityId: 'us-la-new-orleans', regionId: 'us-la',
    genres: ['rnb', 'rock', 'blues'], eras: ['1970s'], significance: 3,
    featuredTrack: tr('Right Place, Wrong Time', 1973),
    description: {
      en: 'Mac Rebennack’s voodoo-tinged “Night Tripper” persona brought New Orleans piano and swamp mysticism to rock audiences.',
      pl: 'Wcielenie „Night Tripper” Maca Rebennacka, z nutą voodoo, przyniosło rockowej publiczności nowoorleański fortepian i bagienny mistycyzm.',
      ru: 'Образ «Night Tripper» с налётом вуду, созданный Маком Ребеннаком, принёс рок-публике новоорлеанское фортепиано и болотный мистицизм.',
    },
  },
  {
    id: 'juvenile', name: 'Juvenile', kind: 'person', born: '1975-03-26',
    birthplace: 'New Orleans, Louisiana', cityId: 'us-la-new-orleans', regionId: 'us-la',
    genres: ['hiphop'], eras: ['1990s'], significance: 3,
    featuredTrack: tr('Back That Azz Up', 1999),
    description: {
      en: 'A Cash Money star whose bounce-driven anthems brought New Orleans rap to the national charts.',
      pl: 'Gwiazda Cash Money, której hymny oparte na bounce wprowadziły rap z Nowego Orleanu na krajowe listy.',
      ru: 'Звезда Cash Money, чьи гимны на основе баунса вывели новоорлеанский рэп в национальные чарты.',
    },
  },
  {
    id: 'jon-batiste', name: 'Jon Batiste', kind: 'person', born: '1986-11-11',
    birthplace: 'Metairie, Louisiana', cityId: 'us-la-new-orleans', regionId: 'us-la',
    genres: ['jazz', 'rnb', 'pop'], eras: ['2020s'], significance: 4,
    featuredTrack: tr('Freedom', 2021),
    description: {
      en: 'From a New Orleans–area musical family, he won Album of the Year at the 2022 Grammys with “We Are”.',
      pl: 'Pochodzący z muzycznej rodziny spod Nowego Orleanu, zdobył Grammy 2022 za album roku z płytą „We Are”.',
      ru: 'Выходец из музыкальной семьи из-под Нового Орлеана, получил «Грэмми» 2022 года за альбом года с пластинкой «We Are».',
    },
  },
];
