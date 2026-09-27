import type { Artist } from '../../../../types';
import { tr } from '../helpers';

/** Arkansas — follow CONTENT_GUIDELINES.md (Artist Data Standard). */
export const AR_ARTISTS: Artist[] = [
  // Arkansas-born artists placed where their defining work was made:
  // Johnny Cash and Al Green (TN), Louis Jordan, Glen Campbell, Sister Rosetta Tharpe.
  {
    // Birth year disputed (1897–1912 in different sources) — `born` omitted (§4).
    id: 'sonny-boy-williamson-ii', name: 'Sonny Boy Williamson II', kind: 'person',
    birthplace: 'Money, Mississippi (disputed)', cityId: 'us-ar-helena', regionId: 'us-ar',
    genres: ['blues'], eras: ['1940s', '1950s'], significance: 4,
    featuredTrack: tr("Don't Start Me Talkin'", 1955),
    description: {
      en: 'His live harmonica on KFFA’s King Biscuit Time, broadcast from Helena from 1941, carried Delta blues across the South.',
      pl: 'Jego harmonijka na żywo w programie King Biscuit Time radia KFFA, nadawanym z Heleny od 1941 roku, niosła blues delty po całym Południu.',
      ru: 'Его живая губная гармошка в передаче King Biscuit Time радио KFFA, звучавшей из Хелены с 1941 года, разносила блюз Дельты по всему Югу.',
    },
  },
  {
    id: 'jimmy-driftwood', name: 'Jimmy Driftwood', kind: 'person', born: '1907-06-20',
    birthplace: 'Timbo, Arkansas', cityId: 'us-ar-mountain-view', regionId: 'us-ar',
    genres: ['folk'], eras: ['1950s'], significance: 3,
    featuredTrack: tr('The Battle of New Orleans', 1958),
    description: {
      en: 'An Ozark schoolteacher who wrote “The Battle of New Orleans” to teach history and later championed Arkansas folk music in Mountain View.',
      pl: 'Nauczyciel z gór Ozark, który napisał „The Battle of New Orleans”, by uczyć historii, a potem promował folk Arkansas w Mountain View.',
      ru: 'Школьный учитель из Озарка, написавший «The Battle of New Orleans» для уроков истории, а позже продвигавший фолк Арканзаса в Маунтин-Вью.',
    },
  },
  {
    id: 'evanescence', name: 'Evanescence', kind: 'group', formed: 1995,
    cityId: 'us-ar-little-rock', regionId: 'us-ar',
    genres: ['rock'], eras: ['2000s'], significance: 3,
    featuredTrack: tr('Bring Me to Life', 2003),
    description: {
      en: 'Amy Lee’s Little Rock band fused gothic metal with piano balladry and sold millions with its debut “Fallen”.',
      pl: 'Zespół Amy Lee z Little Rock połączył gotycki metal z fortepianowymi balladami i sprzedał miliony egzemplarzy debiutu „Fallen”.',
      ru: 'Группа Эми Ли из Литл-Рока соединила готик-метал с фортепианными балладами и продала миллионы копий дебюта «Fallen».',
    },
  },
];
