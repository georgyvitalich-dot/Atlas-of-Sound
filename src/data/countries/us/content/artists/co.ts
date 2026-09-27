import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** Colorado — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const CO_ARTISTS: Artist[] = [
  {
    id: 'john-denver', name: 'John Denver', kind: 'person', born: '1943-12-31',
    birthplace: 'Roswell, New Mexico', cityId: 'us-co-aspen', regionId: 'us-co',
    genres: ['folk', 'country'], eras: ['1970s'], significance: 4,
    featuredTrack: tr('Rocky Mountain High', 1972),
    description: {
      en: 'Made Aspen his home and named himself after Colorado’s capital; his “Rocky Mountain High” became one of the state’s official songs.',
      pl: 'Uczynił Aspen swoim domem, a pseudonim wziął od stolicy Kolorado; jego „Rocky Mountain High” stało się jedną z oficjalnych pieśni stanu.',
      ru: 'Сделал Аспен своим домом, а псевдоним взял в честь столицы Колорадо; его «Rocky Mountain High» стала одной из официальных песен штата.',
    },
  },
  {
    id: 'the-fray', name: 'The Fray', kind: 'group', formed: 2002,
    cityId: 'us-co-denver', regionId: 'us-co',
    genres: ['rock', 'pop'], eras: ['2000s'], significance: 3,
    featuredTrack: tr('How to Save a Life', 2005),
    description: {
      en: 'A Denver piano-rock band whose “How to Save a Life” became one of the most-played songs of the mid-2000s.',
      pl: 'Pianorockowy zespół z Denver, którego „How to Save a Life” był jednym z najczęściej granych utworów połowy lat 2000.',
      ru: 'Пиано-рок-группа из Денвера, чья «How to Save a Life» стала одной из самых часто звучавших песен середины 2000-х.',
    },
  },
  {
    id: 'nathaniel-rateliff-and-the-night-sweats', name: 'Nathaniel Rateliff & the Night Sweats', kind: 'group', formed: 2013,
    cityId: 'us-co-denver', regionId: 'us-co',
    genres: ['soul', 'rock'], eras: ['2010s'], significance: 3,
    featuredTrack: tr('S.O.B.', 2015),
    description: {
      en: 'Denver folk singer Nathaniel Rateliff reinvented himself with a vintage soul revue, breaking through with the stomping “S.O.B.”.',
      pl: 'Folkowy wokalista z Denver Nathaniel Rateliff odmienił się z rewią w stylu dawnego soulu, przebijając się tupiącym „S.O.B.”.',
      ru: 'Денверский фолк-певец Натаниэль Рателифф переродился во главе винтажного соул-ревю и прорвался с топающей «S.O.B.».',
    },
  },
];
