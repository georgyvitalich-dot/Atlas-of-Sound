import { useCallback } from 'react';
import type { Locale, MaybeLocalized } from '../data/types';
import { useAtlas } from '../store/useAtlasStore';
import { UI, type UIKey } from './ui';

export const localize = (text: MaybeLocalized, locale: Locale) =>
  typeof text === 'string' ? text : (text[locale] ?? text.en);

/**
 * `t('back')` for interface strings, `tx(region.name)` for localized data.
 */
export function useT() {
  const locale = useAtlas((s) => s.locale);
  const t = useCallback((key: UIKey) => UI[key][locale], [locale]);
  const tx = useCallback((text: MaybeLocalized) => localize(text, locale), [locale]);
  return { t, tx, locale };
}
