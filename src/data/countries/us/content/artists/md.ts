import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** Maryland — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const MD_ARTISTS: Artist[] = [
  // Billie Holiday and Cab Calloway grew up in Baltimore but made their work in New York.
  {
    id: 'the-orioles', name: 'The Orioles', kind: 'group', formed: 1947,
    cityId: 'us-md-baltimore', regionId: 'us-md',
    genres: ['rnb'], eras: ['1940s', '1950s'], significance: 3,
    featuredTrack: tr('Crying in the Chapel', 1953),
    eraTracks: { '1940s': tr("It's Too Soon to Know", 1948) },
    description: {
      en: 'Baltimore’s pioneering vocal group, whose tender harmonies helped create doo-wop and early R&B.',
      pl: 'Pionierska grupa wokalna z Baltimore, której czułe harmonie współtworzyły doo-wop i wczesne R&B.',
      ru: 'Первопроходческая вокальная группа из Балтимора, чьи нежные гармонии помогли создать ду-воп и ранний R&B.',
    },
  },
  {
    id: 'dru-hill', name: 'Dru Hill', kind: 'group', formed: 1992,
    cityId: 'us-md-baltimore', regionId: 'us-md',
    genres: ['rnb'], eras: ['1990s'], significance: 3,
    featuredTrack: tr('In My Bed', 1996),
    description: {
      en: 'A Baltimore R&B quartet named after the city’s Druid Hill Park, whose harmonies launched Sisqó.',
      pl: 'Kwartet R&B z Baltimore nazwany od miejskiego parku Druid Hill, którego harmonie wypromowały Sisqó.',
      ru: 'R&B-квартет из Балтимора, названный в честь городского парка Друид-Хилл; его гармонии запустили карьеру Сиско.',
    },
  },
  {
    id: 'good-charlotte', name: 'Good Charlotte', kind: 'group', formed: 1996,
    cityId: 'us-md-waldorf', regionId: 'us-md',
    genres: ['rock'], eras: ['2000s'], significance: 3,
    featuredTrack: tr('Lifestyles of the Rich & Famous', 2002),
    description: {
      en: 'Twin brothers from Waldorf whose pop-punk mocked celebrity culture and filled early-2000s MTV.',
      pl: 'Bracia bliźniacy z Waldorf, których pop-punk kpił z kultu celebrytów i wypełniał MTV na początku lat 2000.',
      ru: 'Братья-близнецы из Уолдорфа, чей поп-панк высмеивал культ знаменитостей и заполнял MTV начала 2000-х.',
    },
  },
  {
    id: 'beach-house', name: 'Beach House', kind: 'group', formed: 2004,
    cityId: 'us-md-baltimore', regionId: 'us-md',
    genres: ['rock', 'pop'], eras: ['2010s'], significance: 3,
    featuredTrack: tr('Myth', 2012),
    description: {
      en: 'Baltimore’s dream-pop duo, whose hazy organs and slow-burning melodies became an indie touchstone.',
      pl: 'Duet dream-popowy z Baltimore, którego zamglone organy i powoli rozwijające się melodie stały się punktem odniesienia dla indie.',
      ru: 'Балтиморский дрим-поп-дуэт, чьи туманные органы и неторопливые мелодии стали ориентиром для инди.',
    },
  },
];
