import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** Hawaii — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const HI_ARTISTS: Artist[] = [
  // Bruno Mars (born in Honolulu) made his defining work in Los Angeles.
  {
    id: 'gabby-pahinui', name: 'Gabby Pahinui', kind: 'person', born: '1921-04-22',
    birthplace: 'Lahaina, Maui', cityId: 'us-hi-honolulu', district: 'Kakaʻako',
    regionId: 'us-hi', genres: ['folk'], eras: ['1940s', '1970s'], significance: 4,
    featuredTrack: tr("Hi'ilawe", 1946),
    description: {
      en: 'A slack-key master raised in Honolulu’s Kakaʻako, whose 1946 “Hi‘ilawe” was the first slack-key record and who led the 1970s Hawaiian Renaissance.',
      pl: 'Mistrz slack key wychowany w Kakaʻako w Honolulu; jego „Hi‘ilawe” z 1946 roku było pierwszym nagraniem slack key, a on sam poprowadził hawajski renesans lat 70.',
      ru: 'Мастер слэк-ки, выросший в гонолульском Какаако; его «Hi‘ilawe» 1946 года стала первой записью слэк-ки, а сам он возглавил гавайский ренессанс 1970-х.',
    },
  },
  {
    id: 'don-ho', name: 'Don Ho', kind: 'person', born: '1930-08-13',
    birthplace: 'Honolulu, Hawaii', cityId: 'us-hi-honolulu', district: 'Waikiki',
    regionId: 'us-hi', genres: ['pop'], eras: ['1960s'], significance: 3,
    featuredTrack: tr('Tiny Bubbles', 1966),
    description: {
      en: 'Waikiki’s signature entertainer, whose easygoing “Tiny Bubbles” became the sound of 1960s Hawaii tourism.',
      pl: 'Sztandarowy artysta Waikiki, którego swobodne „Tiny Bubbles” stało się brzmieniem turystycznych Hawajów lat 60.',
      ru: 'Главный эстрадный артист Вайкики, чья беззаботная «Tiny Bubbles» стала звуком туристических Гавайев 1960-х.',
    },
  },
  {
    id: 'israel-kamakawiwoole', name: 'Israel Kamakawiwoʻole', kind: 'person', born: '1959-05-20',
    birthplace: 'Honolulu, Hawaii', cityId: 'us-hi-honolulu', regionId: 'us-hi',
    genres: ['folk', 'pop'], eras: ['1990s'], significance: 4,
    featuredTrack: tr('Somewhere Over the Rainbow/What a Wonderful World', 1993),
    description: {
      en: '“IZ” sang for Hawaiian culture and sovereignty; his ukulele medley of “Over the Rainbow” became a worldwide favorite.',
      pl: '„IZ” śpiewał o hawajskiej kulturze i suwerenności; jego ukulelowy medley „Over the Rainbow” pokochał cały świat.',
      ru: '«IZ» пел о гавайской культуре и суверенитете; его попурри «Over the Rainbow» под укулеле полюбил весь мир.',
    },
  },
  {
    id: 'jack-johnson', name: 'Jack Johnson', kind: 'person', born: '1975-05-18',
    birthplace: 'North Shore, Oahu, Hawaii', cityId: 'us-hi-haleiwa', regionId: 'us-hi',
    genres: ['folk', 'rock'], eras: ['2000s'], significance: 3,
    featuredTrack: tr('Better Together', 2005),
    description: {
      en: 'A former pro surfer from Oahu’s North Shore whose mellow acoustic songs defined 2000s beach-folk.',
      pl: 'Były zawodowy surfer z North Shore na Oahu, którego łagodne akustyczne piosenki zdefiniowały plażowy folk lat 2000.',
      ru: 'Бывший профессиональный сёрфер с Норт-Шора Оаху, чьи мягкие акустические песни определили пляжный фолк 2000-х.',
    },
  },
];
