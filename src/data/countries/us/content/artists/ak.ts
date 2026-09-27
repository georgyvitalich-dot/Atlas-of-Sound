import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** Alaska — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const AK_ARTISTS: Artist[] = [
  // Portugal. The Man formed in Wasilla but made their work in Portland (OR).
  {
    id: 'jewel', name: 'Jewel', kind: 'person', born: '1974-05-23',
    birthplace: 'Payson, Utah', cityId: 'us-ak-homer', regionId: 'us-ak',
    genres: ['folk', 'pop'], eras: ['1990s'], significance: 3,
    featuredTrack: tr('Who Will Save Your Soul', 1995),
    description: {
      en: 'Raised on a homestead near Homer, she sang and yodeled with her father in Alaska bars before her coffeehouse folk made her a 1990s star.',
      pl: 'Wychowana na farmie pod Homer, śpiewała i jodłowała z ojcem w alaskańskich barach, zanim kawiarniany folk uczynił ją gwiazdą lat 90.',
      ru: 'Выросшая на ранчо под Хомером, она пела и йодлировала с отцом в барах Аляски, прежде чем кофейный фолк сделал её звездой 1990-х.',
    },
  },
];
