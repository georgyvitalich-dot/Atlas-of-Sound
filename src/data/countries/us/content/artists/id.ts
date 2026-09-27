import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** Idaho — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const ID_ARTISTS: Artist[] = [
  // Paul Revere & the Raiders formed in Boise but made their records in Portland and Los Angeles.
  {
    id: 'built-to-spill', name: 'Built to Spill', kind: 'group', formed: 1992,
    cityId: 'us-id-boise', regionId: 'us-id',
    genres: ['rock'], eras: ['1990s'], significance: 3,
    featuredTrack: tr('Carry the Zero', 1999),
    description: {
      en: 'Doug Martsch’s Boise band, whose sprawling guitar epics made it one of the defining indie rock groups of the 1990s.',
      pl: 'Zespół Douga Martscha z Boise, którego rozbudowane gitarowe epopeje uczyniły go jedną z kluczowych grup indie rocka lat 90.',
      ru: 'Группа Дага Марча из Бойсе, чьи развёрнутые гитарные эпосы сделали её одной из ключевых инди-рок-групп 1990-х.',
    },
  },
];
