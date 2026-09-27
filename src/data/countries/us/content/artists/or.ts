import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** Oregon — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const OR_ARTISTS: Artist[] = [
  {
    id: 'the-kingsmen', name: 'The Kingsmen', kind: 'group', formed: 1959,
    cityId: 'us-or-portland', regionId: 'us-or',
    genres: ['rock'], eras: ['1960s'], significance: 4,
    featuredTrack: tr('Louie Louie', 1963),
    description: {
      en: 'A Portland garage band whose slurred, rough-and-ready “Louie Louie” became a rock standard — and the subject of an FBI investigation.',
      pl: 'Garażowy zespół z Portland, którego niewyraźne, surowe „Louie Louie” stało się standardem rocka — i przedmiotem śledztwa FBI.',
      ru: 'Гаражная группа из Портленда, чья невнятная и грубоватая «Louie Louie» стала рок-стандартом — и поводом для расследования ФБР.',
    },
  },
  {
    id: 'elliott-smith', name: 'Elliott Smith', kind: 'person', born: '1969-08-06',
    birthplace: 'Omaha, Nebraska', cityId: 'us-or-portland', regionId: 'us-or',
    genres: ['folk', 'rock'], eras: ['1990s'], significance: 4,
    featuredTrack: tr('Between the Bars', 1997),
    description: {
      en: 'A Portland singer-songwriter whose whispered, intricate songs made him one of the most beloved cult figures of 1990s indie.',
      pl: 'Songwriter z Portland, którego szeptane, misterne piosenki uczyniły go jedną z najbardziej kochanych postaci kultowych indie lat 90.',
      ru: 'Автор-исполнитель из Портленда, чьи шёпотом спетые, изощрённые песни сделали его одной из самых любимых культовых фигур инди 1990-х.',
    },
  },
  {
    id: 'the-decemberists', name: 'The Decemberists', kind: 'group', formed: 2000,
    cityId: 'us-or-portland', regionId: 'us-or',
    genres: ['folk', 'rock'], eras: ['2000s'], significance: 3,
    featuredTrack: tr('O Valencia!', 2006),
    description: {
      en: 'Colin Meloy’s Portland band told literate, historical story-songs with folk and prog-rock flourishes.',
      pl: 'Zespół Colina Meloya z Portland opowiadał literackie, historyczne pieśni z folkowymi i progrockowymi ozdobnikami.',
      ru: 'Портлендская группа Колина Мелоя рассказывала литературные исторические песни-истории с фолк- и прог-роковыми украшениями.',
    },
  },
  {
    id: 'portugal-the-man', name: 'Portugal. The Man', kind: 'group', formed: 2004,
    cityId: 'us-or-portland', regionId: 'us-or',
    genres: ['rock', 'pop'], eras: ['2010s'], significance: 3,
    featuredTrack: tr('Feel It Still', 2017),
    description: {
      en: 'Formed in Wasilla, Alaska, and based in Portland, the band spent a decade on the indie circuit before “Feel It Still” won a Grammy.',
      pl: 'Założony w Wasilli na Alasce i osiadły w Portland zespół spędził dekadę w obiegu indie, zanim „Feel It Still” zdobyło Grammy.',
      ru: 'Основанная в Уасилле (Аляска) и обосновавшаяся в Портленде группа десять лет провела на инди-сцене, прежде чем «Feel It Still» принесла «Грэмми».',
    },
  },
];
