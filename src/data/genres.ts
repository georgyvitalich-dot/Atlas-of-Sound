import type { Genre, GenreId } from './types';

/** Shared genre dictionary; filters show a genre once the active country has artists in it. */
export const GENRES: Genre[] = [
  { id: 'rock', label: { en: 'Rock', pl: 'Rock', ru: 'Рок' }, color: '#d9784a' },
  { id: 'hiphop', label: { en: 'Hip-Hop', pl: 'Hip-hop', ru: 'Хип-хоп' }, color: '#c9a24a' },
  { id: 'jazz', label: { en: 'Jazz', pl: 'Jazz', ru: 'Джаз' }, color: '#6f9bd1' },
  { id: 'blues', label: { en: 'Blues', pl: 'Blues', ru: 'Блюз' }, color: '#4f7cc4' },
  { id: 'pop', label: { en: 'Pop', pl: 'Pop', ru: 'Поп' }, color: '#d27aa0' },
  { id: 'country', label: { en: 'Country', pl: 'Country', ru: 'Кантри' }, color: '#c8955a' },
  { id: 'rnb', label: { en: 'R&B', pl: 'R&B', ru: 'R&B' }, color: '#a57ad1' },
  { id: 'soul', label: { en: 'Soul', pl: 'Soul', ru: 'Соул' }, color: '#e0a458' },
  { id: 'folk', label: { en: 'Folk', pl: 'Folk', ru: 'Фолк' }, color: '#8fb07a' },
  { id: 'bluegrass', label: { en: 'Bluegrass', pl: 'Bluegrass', ru: 'Блюграсс' }, color: '#a8b85c' },
  { id: 'latin', label: { en: 'Latin', pl: 'Latin', ru: 'Латино' }, color: '#e06a5a' },
  { id: 'gospel', label: { en: 'Gospel', pl: 'Gospel', ru: 'Госпел' }, color: '#e8c97a' },
  { id: 'electronic', label: { en: 'Electronic', pl: 'Elektronika', ru: 'Электроника' }, color: '#6fc3c9' },
];

const byId = new Map(GENRES.map((g) => [g.id, g]));
export const getGenre = (id: GenreId) => byId.get(id);
