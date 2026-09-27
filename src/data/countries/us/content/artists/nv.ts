import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** Nevada — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const NV_ARTISTS: Artist[] = [
  {
    id: 'the-killers', name: 'The Killers', kind: 'group', formed: 2001,
    cityId: 'us-nv-las-vegas', regionId: 'us-nv',
    genres: ['rock'], eras: ['2000s'], significance: 4,
    featuredTrack: tr('Mr. Brightside', 2003),
    description: {
      en: 'Las Vegas new-wave revivalists whose “Mr. Brightside” became one of the most enduring rock singles of the century.',
      pl: 'Wskrzesiciele nowej fali z Las Vegas, których „Mr. Brightside” stało się jednym z najtrwalszych rockowych singli stulecia.',
      ru: 'Возродители нью-вейва из Лас-Вегаса, чья «Mr. Brightside» стала одним из самых долгоживущих рок-синглов века.',
    },
  },
  {
    id: 'panic-at-the-disco', name: 'Panic! at the Disco', kind: 'group', formed: 2004,
    cityId: 'us-nv-las-vegas', regionId: 'us-nv',
    genres: ['rock', 'pop'], eras: ['2000s'], significance: 3,
    featuredTrack: tr('I Write Sins Not Tragedies', 2005),
    description: {
      en: 'Formed by Las Vegas high-schoolers, they mixed emo, cabaret and pop into a theatrical 2000s hit sound.',
      pl: 'Założeni przez licealistów z Las Vegas, łączyli emo, kabaret i pop w teatralne brzmienie przebojów lat 2000.',
      ru: 'Созданные школьниками из Лас-Вегаса, они смешали эмо, кабаре и поп в театральное звучание хитов 2000-х.',
    },
  },
  {
    id: 'imagine-dragons', name: 'Imagine Dragons', kind: 'group', formed: 2008,
    cityId: 'us-nv-las-vegas', regionId: 'us-nv',
    genres: ['rock', 'pop'], eras: ['2010s'], significance: 3,
    featuredTrack: tr('Radioactive', 2012),
    description: {
      en: 'A Las Vegas band that honed its arena-sized pop-rock in casino lounges before “Radioactive” became a record-breaking hit.',
      pl: 'Zespół z Las Vegas, który szlifował stadionowy pop-rock w kasynowych barach, zanim „Radioactive” stało się rekordowym przebojem.',
      ru: 'Группа из Лас-Вегаса, оттачивавшая стадионный поп-рок в казино-лаунжах, прежде чем «Radioactive» стала рекордным хитом.',
    },
  },
];
