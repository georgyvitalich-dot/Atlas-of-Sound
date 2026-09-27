import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** Maine — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const ME_ARTISTS: Artist[] = [
  {
    id: 'dick-curless', name: 'Dick Curless', kind: 'person', born: '1932-03-17',
    birthplace: 'Fort Fairfield, Maine', cityId: 'us-me-fort-fairfield', regionId: 'us-me',
    genres: ['country'], eras: ['1960s'], significance: 2,
    featuredTrack: tr('A Tombstone Every Mile', 1965),
    description: {
      en: 'A deep-voiced singer from Aroostook County whose trucking song about a deadly stretch of Maine highway became a 1965 country hit.',
      pl: 'Wokalista o niskim głosie z hrabstwa Aroostook, którego piosenka o niebezpiecznym odcinku drogi w Maine stała się przebojem country w 1965 roku.',
      ru: 'Певец с низким голосом из округа Арустук, чья песня о смертельно опасном участке шоссе в Мэне стала кантри-хитом 1965 года.',
    },
  },
];
