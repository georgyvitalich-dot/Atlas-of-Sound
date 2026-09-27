import type { LocalizedText } from '../data/types';

/** All interface strings. Components never hardcode visible text. */
export const UI = {
  tagline: {
    en: 'A musical atlas of the world',
    pl: 'Muzyczny atlas świata',
    ru: 'Музыкальный атлас мира',
  },
  era: { en: 'Era', pl: 'Epoka', ru: 'Эпоха' },
  genres: { en: 'Genres', pl: 'Gatunki', ru: 'Жанры' },
  allGenres: { en: 'All', pl: 'Wszystkie', ru: 'Все' },
  born: { en: 'b.', pl: 'ur.', ru: 'род.' },
  formed: { en: 'formed', pl: 'zał.', ru: 'осн.' },
  featuredTrack: { en: 'Featured track', pl: 'Polecany utwór', ru: 'Главный трек' },
  clickToExplore: {
    en: 'Click to explore',
    pl: 'Kliknij, aby odkryć',
    ru: 'Нажмите, чтобы исследовать',
  },
  tapToExplore: {
    en: 'Tap again to explore',
    pl: 'Dotknij ponownie, aby odkryć',
    ru: 'Коснитесь ещё раз, чтобы исследовать',
  },
  noArtists: {
    en: 'No artists for this era and genre yet',
    pl: 'Brak artystów dla tej epoki i gatunku',
    ru: 'Для этой эпохи и жанра пока нет артистов',
  },
  archiveSoon: {
    en: 'Archive in progress',
    pl: 'Archiwum w przygotowaniu',
    ru: 'Архив в работе',
  },
  back: { en: 'Back to map', pl: 'Wróć do mapy', ru: 'Назад к карте' },
  cities: { en: 'Cities', pl: 'Miasta', ru: 'Города' },
  soundOfEra: { en: 'Sound of the era', pl: 'Brzmienie epoki', ru: 'Звук эпохи' },
  exploring: { en: 'Exploring', pl: 'Odkrywasz', ru: 'Вы исследуете' },
  hint: {
    en: 'Drag to rotate · Scroll to zoom · Click a glowing state',
    pl: 'Przeciągnij, aby obrócić · Przewiń, aby przybliżyć · Kliknij podświetlony stan',
    ru: 'Тяните, чтобы вращать · Колесо — масштаб · Нажмите на подсвеченный штат',
  },
  skipIntro: { en: 'Click to skip', pl: 'Kliknij, aby pominąć', ru: 'Нажмите, чтобы пропустить' },
  tapToSkip: { en: 'Tap to skip', pl: 'Dotknij, aby pominąć', ru: 'Нажмите, чтобы пропустить' },
  language: { en: 'Language', pl: 'Język', ru: 'Язык' },
  erasOfState: { en: 'Through the decades', pl: 'Przez dekady', ru: 'Сквозь десятилетия' },
  allCities: { en: 'All cities', pl: 'Wszystkie miasta', ru: 'Все города' },
  citiesScenes: { en: 'Cities & scenes', pl: 'Miasta i sceny', ru: 'Города и сцены' },
  foundIn: { en: 'Found in', pl: 'Znajdziesz w', ru: 'Есть в' },
  scenes: { en: 'Scenes', pl: 'Sceny', ru: 'Сцены' },
  scene: { en: 'Scene', pl: 'Scena', ru: 'Сцена' },
  leaveScene: { en: 'Leave scene', pl: 'Opuść scenę', ru: 'Выйти из сцены' },
  connectedScenes: { en: 'Connected scenes', pl: 'Powiązane sceny', ru: 'Связанные сцены' },
  // Scene names differ in grammatical gender, so these labels avoid gendered verbs.
  linkGrewOutOf: { en: 'Grew out of', pl: 'Korzenie', ru: 'Корни' },
  linkInfluencedBy: { en: 'Shaped by', pl: 'Pod wpływem', ru: 'Под влиянием' },
  linkEvolvedInto: { en: 'Grew into', pl: 'Dalej', ru: 'Продолжение' },
  linkInfluenced: { en: 'Influenced', pl: 'Wpływ na', ru: 'Влияние на' },
  linkContemporaryOf: { en: 'Meanwhile', pl: 'W tym samym czasie', ru: 'В то же время' },
  noArtistsScene: {
    en: 'No artists of this scene in this era',
    pl: 'Brak artystów tej sceny w tej epoce',
    ru: 'В этой эпохе у сцены нет артистов',
  },
  of: { en: 'of', pl: 'z', ru: 'из' },
  showAll: { en: 'Show all', pl: 'Pokaż wszystkich', ru: 'Показать всех' },
  showLess: { en: 'Show less', pl: 'Zwiń', ru: 'Свернуть' },
  noArtistsCity: {
    en: 'No artists from this city for this era and genre',
    pl: 'Brak artystów z tego miasta dla tej epoki i gatunku',
    ru: 'Из этого города нет артистов для этой эпохи и жанра',
  },
  filterByGenre: { en: 'Filter by genre', pl: 'Filtruj według gatunku', ru: 'Фильтр по жанру' },
  prevEra: { en: 'Previous era', pl: 'Poprzednia epoka', ru: 'Предыдущая эпоха' },
  nextEra: { en: 'Next era', pl: 'Następna epoka', ru: 'Следующая эпоха' },
} satisfies Record<string, LocalizedText>;

export type UIKey = keyof typeof UI;
