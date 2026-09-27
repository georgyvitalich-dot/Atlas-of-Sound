import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** Delaware — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const DE_ARTISTS: Artist[] = [
  {
    id: 'george-thorogood-and-the-destroyers', name: 'George Thorogood & the Destroyers', kind: 'group', formed: 1973,
    cityId: 'us-de-wilmington', regionId: 'us-de',
    genres: ['rock', 'blues'], eras: ['1970s', '1980s'], significance: 3,
    featuredTrack: tr('Bad to the Bone', 1982),
    eraTracks: { '1970s': tr('Move It on Over', 1978) },
    description: {
      en: 'Formed in Wilmington as the Delaware Destroyers, they played slide-guitar boogie with bar-band swagger.',
      pl: 'Założeni w Wilmington jako Delaware Destroyers, grali boogie na gitarze slide z barową zadziornością.',
      ru: 'Основанные в Уилмингтоне как Delaware Destroyers, они играли слайд-буги с кабацким куражом.',
    },
  },
];
