import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** Wisconsin — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const WI_ARTISTS: Artist[] = [
  // Les Paul (Waukesha) and Steve Miller (Milwaukee) made their defining work elsewhere.
  {
    id: 'violent-femmes', name: 'Violent Femmes', kind: 'group', formed: 1980,
    cityId: 'us-wi-milwaukee', regionId: 'us-wi',
    genres: ['rock', 'folk'], eras: ['1980s'], significance: 3,
    featuredTrack: tr('Blister in the Sun', 1983),
    description: {
      en: 'Milwaukee’s acoustic punks, discovered busking outside a Pretenders show, whose debut became a college-radio staple.',
      pl: 'Akustyczni punkowcy z Milwaukee, odkryci, gdy grali na ulicy przed koncertem The Pretenders; ich debiut stał się klasykiem radia uniwersyteckiego.',
      ru: 'Акустические панки из Милуоки, замеченные, когда играли на улице перед концертом The Pretenders; их дебют стал классикой студенческого радио.',
    },
  },
  {
    id: 'garbage', name: 'Garbage', kind: 'group', formed: 1993,
    cityId: 'us-wi-madison', regionId: 'us-wi',
    genres: ['rock', 'electronic'], eras: ['1990s'], significance: 3,
    featuredTrack: tr('Stupid Girl', 1995),
    description: {
      en: 'Formed at Madison’s Smart Studios by producer Butch Vig, they fused alternative rock with electronic textures behind Shirley Manson.',
      pl: 'Założony w Smart Studios w Madison przez producenta Butcha Viga zespół łączył rock alternatywny z elektroniką za głosem Shirley Manson.',
      ru: 'Созданная в студии Smart Studios в Мэдисоне продюсером Бутчем Вигом группа соединила альтернативный рок с электроникой вокруг голоса Ширли Мэнсон.',
    },
  },
  {
    id: 'bon-iver', name: 'Bon Iver', kind: 'group', formed: 2006,
    cityId: 'us-wi-eau-claire', regionId: 'us-wi',
    genres: ['folk', 'rock'], eras: ['2000s', '2010s'], significance: 4,
    featuredTrack: tr('Skinny Love', 2007),
    eraTracks: { '2010s': tr('Holocene', 2011) },
    description: {
      en: 'Justin Vernon recorded Bon Iver’s debut alone in a northern Wisconsin cabin, and his falsetto folk reshaped 2010s indie.',
      pl: 'Justin Vernon nagrał debiut Bon Iver samotnie w chacie w północnym Wisconsin, a jego falsetowy folk odmienił indie lat 2010.',
      ru: 'Джастин Вернон записал дебют Bon Iver в одиночестве в хижине на севере Висконсина, а его фальцетный фолк изменил инди 2010-х.',
    },
  },
];
