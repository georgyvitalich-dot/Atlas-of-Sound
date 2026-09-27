import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** Utah — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const UT_ARTISTS: Artist[] = [
  {
    id: 'the-osmonds', name: 'The Osmonds', kind: 'group', formed: 1959,
    cityId: 'us-ut-ogden', regionId: 'us-ut',
    genres: ['pop', 'rock'], eras: ['1970s'], significance: 3,
    featuredTrack: tr('One Bad Apple', 1970),
    description: {
      en: 'Ogden brothers who started as a barbershop quartet and became 1970s teen idols, from bubblegum pop to the hard-rocking “Crazy Horses”.',
      pl: 'Bracia z Ogden, którzy zaczynali jako kwartet barbershopowy i stali się idolami nastolatków lat 70. — od gumowego popu po ostre „Crazy Horses”.',
      ru: 'Братья из Огдена, начинавшие как барбершоп-квартет и ставшие кумирами подростков 1970-х — от баблгам-попа до жёсткой «Crazy Horses».',
    },
  },
  {
    id: 'the-used', name: 'The Used', kind: 'group', formed: 2001,
    cityId: 'us-ut-orem', regionId: 'us-ut',
    genres: ['rock'], eras: ['2000s'], significance: 2,
    featuredTrack: tr('The Taste of Ink', 2002),
    description: {
      en: 'An Orem band whose raw, screaming emo made it one of Utah’s biggest rock exports of the 2000s.',
      pl: 'Zespół z Orem, którego surowe, krzykliwe emo uczyniło go jednym z największych rockowych towarów eksportowych Utah lat 2000.',
      ru: 'Группа из Орема, чьё сырое, кричащее эмо сделало её одним из главных рок-экспортов Юты в 2000-х.',
    },
  },
];
