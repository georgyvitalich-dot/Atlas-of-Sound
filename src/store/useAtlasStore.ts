import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { DEFAULT_ERA, ERAS } from '../data/eras';
import { DEFAULT_COUNTRY } from '../data/registry';
import { type EraId, type GenreId, type Locale, LOCALES } from '../data/types';

export type Phase = 'intro' | 'globe' | 'explore';

interface AtlasState {
  locale: Locale;
  countryId: string;
  eraId: EraId;
  genres: GenreId[];
  phase: Phase;
  /** True once textures are loaded and the camera rig has mounted. */
  sceneReady: boolean;
  /** True while the cinematic "UNITED STATES" title is on screen. */
  titleVisible: boolean;
  hoveredRegionId: string | null;
  selectedRegionId: string | null;
  /** Scene explored inside the region (Country → Region → Scene → City). */
  focusedSceneId: string | null;
  /** City narrowed to inside the explored region or scene. */
  focusedCityId: string | null;

  setLocale: (l: Locale) => void;
  setEra: (e: EraId) => void;
  stepEra: (dir: 1 | -1) => void;
  toggleGenre: (g: GenreId) => void;
  clearGenres: () => void;
  setPhase: (p: Phase) => void;
  setTitleVisible: (v: boolean) => void;
  setHovered: (id: string | null) => void;
  select: (id: string | null) => void;
  focusCity: (id: string | null) => void;
  /** Enter or leave a scene; a new scene starts without a focused city. */
  focusScene: (id: string | null) => void;
  /** One level up: City → Scene → Region → Country. Era and genres are kept. */
  goBack: () => void;
}

function detectLocale(): Locale {
  const lang = typeof navigator !== 'undefined' ? navigator.language.slice(0, 2) : 'en';
  return lang === 'ru' || lang === 'pl' ? lang : 'en';
}

export const useAtlas = create<AtlasState>()(
  persist(
    (set, get) => ({
      locale: detectLocale(),
      countryId: DEFAULT_COUNTRY,
      eraId: DEFAULT_ERA,
      genres: [],
      phase: 'intro',
      sceneReady: false,
      titleVisible: false,
      hoveredRegionId: null,
      selectedRegionId: null,
      focusedSceneId: null,
      focusedCityId: null,

      setLocale: (locale) => set({ locale }),
      setEra: (eraId) => set({ eraId }),
      stepEra: (dir) => {
        const i = ERAS.findIndex((e) => e.id === get().eraId);
        const next = ERAS[Math.min(ERAS.length - 1, Math.max(0, i + dir))];
        set({ eraId: next.id });
      },
      // Genres don't filter inside a scene, so choosing one steps back out to the region.
      toggleGenre: (g) =>
        set((s) => ({
          genres: s.genres.includes(g) ? s.genres.filter((x) => x !== g) : [...s.genres, g],
          focusedSceneId: null,
        })),
      clearGenres: () => set({ genres: [], focusedSceneId: null }),
      setPhase: (phase) => set({ phase }),
      setTitleVisible: (titleVisible) => set({ titleVisible }),
      setHovered: (hoveredRegionId) => {
        if (get().hoveredRegionId !== hoveredRegionId) set({ hoveredRegionId });
      },
      select: (id) =>
        set({
          selectedRegionId: id,
          phase: id ? 'explore' : 'globe',
          hoveredRegionId: null,
          focusedSceneId: null,
          focusedCityId: null,
        }),
      focusCity: (focusedCityId) => set({ focusedCityId }),
      focusScene: (focusedSceneId) => set({ focusedSceneId, focusedCityId: null }),
      goBack: () => {
        const s = get();
        if (s.focusedCityId) set({ focusedCityId: null });
        else if (s.focusedSceneId) set({ focusedSceneId: null });
        else if (s.selectedRegionId) s.select(null);
      },
    }),
    {
      name: 'atlas-prefs',
      storage: createJSONStorage(() => localStorage),
      // Only the language is a user preference; everything else is session state.
      partialize: (s) => ({ locale: s.locale }),
      // Ignore a stored value that isn't a supported locale (edited/old storage).
      merge: (persisted, current) => {
        const locale = (persisted as { locale?: unknown } | undefined)?.locale;
        return LOCALES.includes(locale as Locale) ? { ...current, locale: locale as Locale } : current;
      },
    },
  ),
);
