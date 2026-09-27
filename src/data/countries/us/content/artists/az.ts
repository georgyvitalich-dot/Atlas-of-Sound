import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** Arizona — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const AZ_ARTISTS: Artist[] = [
  {
    id: 'marty-robbins', name: 'Marty Robbins', kind: 'person', born: '1925-09-26',
    birthplace: 'Glendale, Arizona', cityId: 'us-az-phoenix', regionId: 'us-az',
    genres: ['country'], eras: ['1950s', '1960s'], significance: 4,
    featuredTrack: tr('El Paso', 1959),
    eraTracks: { '1960s': tr("Don't Worry", 1961) },
    description: {
      en: 'Started out on Phoenix radio and TV before Western ballads such as “El Paso” turned the Southwest desert into country music legend.',
      pl: 'Zaczynał w radiu i telewizji w Phoenix, zanim westernowe ballady, jak „El Paso”, uczyniły z pustyni Południowego Zachodu legendę country.',
      ru: 'Начинал на радио и телевидении Финикса, прежде чем вестерн-баллады вроде «El Paso» превратили пустыню Юго-Запада в легенду кантри.',
    },
  },
  {
    id: 'duane-eddy', name: 'Duane Eddy', kind: 'person', born: '1938-04-26',
    birthplace: 'Corning, New York', cityId: 'us-az-phoenix', regionId: 'us-az',
    genres: ['rock'], eras: ['1950s'], significance: 4,
    featuredTrack: tr("Rebel-'Rouser", 1958),
    description: {
      en: 'Recording in Phoenix with producer Lee Hazlewood, his deep, twangy guitar instrumentals made him one of rock ’n’ roll’s first guitar heroes.',
      pl: 'Nagrywając w Phoenix z producentem Lee Hazlewoodem, dzięki głębokim, brzęczącym instrumentalom stał się jednym z pierwszych gitarowych bohaterów rock and rolla.',
      ru: 'Записываясь в Финиксе с продюсером Ли Хэзлвудом, он благодаря низким звенящим инструменталам стал одним из первых гитарных героев рок-н-ролла.',
    },
  },
  {
    id: 'linda-ronstadt', name: 'Linda Ronstadt', kind: 'person', born: '1946-07-15',
    birthplace: 'Tucson, Arizona', cityId: 'us-az-tucson', regionId: 'us-az',
    genres: ['rock', 'country', 'latin'], eras: ['1970s', '1980s'], significance: 4,
    featuredTrack: tr('Blue Bayou', 1977),
    eraTracks: { '1980s': tr("Don't Know Much", 1989) },
    description: {
      en: 'A Tucson native, one of the defining rock voices of the 1970s, who honored her Mexican heritage with “Canciones de mi Padre” (1987).',
      pl: 'Pochodząca z Tucson wokalistka, jeden z najważniejszych głosów rocka lat 70., która oddała hołd meksykańskim korzeniom albumem „Canciones de mi Padre” (1987).',
      ru: 'Уроженка Тусона, один из главных голосов рока 1970-х, отдавшая дань мексиканским корням альбомом «Canciones de mi Padre» (1987).',
    },
  },
  {
    id: 'meat-puppets', name: 'Meat Puppets', kind: 'group', formed: 1980,
    cityId: 'us-az-phoenix', regionId: 'us-az',
    genres: ['rock'], eras: ['1980s'], significance: 3,
    featuredTrack: tr('Plateau', 1984),
    description: {
      en: 'Phoenix punks who mixed hardcore with desert psychedelia and country; Nirvana played three of their songs on MTV Unplugged.',
      pl: 'Punkowcy z Phoenix, którzy łączyli hardcore z pustynną psychodelią i country; Nirvana zagrała trzy ich utwory na MTV Unplugged.',
      ru: 'Панки из Финикса, смешавшие хардкор с пустынной психоделией и кантри; Nirvana исполнила три их песни на MTV Unplugged.',
    },
  },
  {
    id: 'gin-blossoms', name: 'Gin Blossoms', kind: 'group', formed: 1987,
    cityId: 'us-az-tempe', regionId: 'us-az',
    genres: ['rock'], eras: ['1990s'], significance: 3,
    featuredTrack: tr('Hey Jealousy', 1992),
    description: {
      en: 'A Tempe band whose jangling guitar pop filled 1990s alternative radio.',
      pl: 'Zespół z Tempe, którego dźwięczny gitarowy pop wypełniał alternatywne radio lat 90.',
      ru: 'Группа из Темпи, чей звенящий гитарный поп заполнял альтернативное радио 1990-х.',
    },
  },
  {
    id: 'jimmy-eat-world', name: 'Jimmy Eat World', kind: 'group', formed: 1993,
    cityId: 'us-az-mesa', regionId: 'us-az',
    genres: ['rock'], eras: ['2000s'], significance: 3,
    featuredTrack: tr('The Middle', 2001),
    description: {
      en: 'A Mesa band that kept faith with its local punk roots and carried emo into the mainstream with “The Middle”.',
      pl: 'Zespół z Mesy, wierny lokalnym punkowym korzeniom, który wprowadził emo do mainstreamu utworem „The Middle”.',
      ru: 'Группа из Месы, верная местным панк-корням, которая вывела эмо в мейнстрим песней «The Middle».',
    },
  },
];
