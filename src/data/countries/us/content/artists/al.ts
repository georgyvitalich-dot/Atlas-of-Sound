import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** Alabama — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const AL_ARTISTS: Artist[] = [
  // Alabama-born artists placed where their defining work was made:
  // Hank Williams (TN), Nat King Cole, Wilson Pickett, Lionel Richie's solo career.
  {
    id: 'percy-sledge', name: 'Percy Sledge', kind: 'person', born: '1940-11-25',
    birthplace: 'Leighton, Alabama', cityId: 'us-al-muscle-shoals', regionId: 'us-al',
    genres: ['soul'], eras: ['1960s'], significance: 4,
    featuredTrack: tr('When a Man Loves a Woman', 1966),
    description: {
      en: 'A hospital orderly from the Shoals whose aching debut, “When a Man Loves a Woman”, became a No. 1 hit and a soul standard.',
      pl: 'Sanitariusz z okolic Muscle Shoals, którego przejmujący debiut „When a Man Loves a Woman” trafił na 1. miejsce i stał się standardem soulu.',
      ru: 'Санитар из района Масл-Шолс, чей пронзительный дебют «When a Man Loves a Woman» возглавил чарт и стал соул-стандартом.',
    },
  },
  {
    id: 'clarence-carter', name: 'Clarence Carter', kind: 'person', born: '1936-01-14',
    birthplace: 'Montgomery, Alabama', cityId: 'us-al-muscle-shoals', regionId: 'us-al',
    genres: ['soul'], eras: ['1960s', '1970s'], significance: 3,
    featuredTrack: tr('Patches', 1970),
    eraTracks: { '1960s': tr('Slip Away', 1968) },
    description: {
      en: 'A blind singer-guitarist whose FAME Studios recordings in Muscle Shoals mixed deep soul with wry storytelling.',
      pl: 'Niewidomy wokalista i gitarzysta, którego nagrania w studiu FAME w Muscle Shoals łączyły głęboki soul z żartobliwym opowiadaniem historii.',
      ru: 'Незрячий певец и гитарист, чьи записи на студии FAME в Масл-Шолсе соединяли глубокий соул с ироничными историями.',
    },
  },
  {
    id: 'commodores', name: 'Commodores', kind: 'group', formed: 1968,
    cityId: 'us-al-tuskegee', regionId: 'us-al',
    genres: ['soul', 'rnb', 'pop'], eras: ['1970s', '1980s'], significance: 4,
    featuredTrack: tr('Easy', 1977),
    eraTracks: { '1980s': tr('Nightshift', 1985) },
    description: {
      en: 'Formed by students at Tuskegee Institute, they moved from hard funk to Lionel Richie’s ballads and became one of Motown’s biggest groups.',
      pl: 'Założony przez studentów Tuskegee Institute zespół przeszedł od twardego funku do ballad Lionela Richiego i stał się jedną z największych grup Motown.',
      ru: 'Основанная студентами Института Таскиги группа прошла путь от жёсткого фанка до баллад Лайонела Ричи и стала одной из главных групп Motown.',
    },
  },
  {
    id: 'alabama', name: 'Alabama', kind: 'group', formed: 1969,
    cityId: 'us-al-fort-payne', regionId: 'us-al',
    genres: ['country'], eras: ['1980s'], significance: 4,
    featuredTrack: tr('Mountain Music', 1982),
    description: {
      en: 'Cousins from Fort Payne who brought a rock band’s energy to country music and became one of its best-selling groups of the 1980s.',
      pl: 'Kuzyni z Fort Payne, którzy wnieśli do country energię zespołu rockowego i stali się jedną z najlepiej sprzedających się grup lat 80.',
      ru: 'Кузены из Форт-Пейна, привнёсшие в кантри энергию рок-группы и ставшие одной из самых продаваемых групп 1980-х.',
    },
  },
  {
    id: 'alabama-shakes', name: 'Alabama Shakes', kind: 'group', formed: 2009,
    cityId: 'us-al-athens', regionId: 'us-al',
    genres: ['rock', 'soul'], eras: ['2010s'], significance: 3,
    featuredTrack: tr('Hold On', 2012),
    description: {
      en: 'A band from Athens, Alabama, whose raw, gospel-charged soul-rock, led by Brittany Howard, won Grammys in the 2010s.',
      pl: 'Zespół z Athens w Alabamie, którego surowy, gospelowy soul-rock z Brittany Howard na czele przyniósł nagrody Grammy w latach 2010.',
      ru: 'Группа из Атенса (Алабама), чей сырой соул-рок с госпел-зарядом во главе с Бриттани Ховард принёс «Грэмми» в 2010-х.',
    },
  },
];
