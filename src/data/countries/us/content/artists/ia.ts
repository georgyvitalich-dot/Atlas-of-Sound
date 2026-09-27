import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** Iowa — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const IA_ARTISTS: Artist[] = [
  // Bix Beiderbecke (Davenport) peaked in the 1920s, before the atlas's eras;
  // Glenn Miller and Andy Williams made their defining work elsewhere.
  {
    id: 'slipknot', name: 'Slipknot', kind: 'group', formed: 1995,
    cityId: 'us-ia-des-moines', regionId: 'us-ia',
    genres: ['rock'], eras: ['1990s', '2000s'], significance: 4,
    featuredTrack: tr('Duality', 2004),
    eraTracks: { '1990s': tr('Wait and Bleed', 1999) },
    description: {
      en: 'Nine masked musicians from Des Moines whose chaotic, percussion-heavy metal built a worldwide following.',
      pl: 'Dziewięciu zamaskowanych muzyków z Des Moines, których chaotyczny, pełen perkusji metal zdobył fanów na całym świecie.',
      ru: 'Девять музыкантов в масках из Де-Мойна, чей хаотичный метал с обилием перкуссии собрал поклонников по всему миру.',
    },
  },
];
