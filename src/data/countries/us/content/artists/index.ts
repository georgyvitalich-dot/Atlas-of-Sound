import type { Artist } from '../../../../types';
import { AK_ARTISTS } from './ak';
import { AL_ARTISTS } from './al';
import { AR_ARTISTS } from './ar';
import { AZ_ARTISTS } from './az';
import { CA_ARTISTS } from './ca';
import { CO_ARTISTS } from './co';
import { CT_ARTISTS } from './ct';
import { DE_ARTISTS } from './de';
import { FL_ARTISTS } from './fl';
import { GA_ARTISTS } from './ga';
import { HI_ARTISTS } from './hi';
import { IA_ARTISTS } from './ia';
import { ID_ARTISTS } from './id';
import { IL_ARTISTS } from './il';
import { IN_ARTISTS } from './in';
import { KS_ARTISTS } from './ks';
import { KY_ARTISTS } from './ky';
import { LA_ARTISTS } from './la';
import { MA_ARTISTS } from './ma';
import { MD_ARTISTS } from './md';
import { ME_ARTISTS } from './me';
import { MI_ARTISTS } from './mi';
import { MN_ARTISTS } from './mn';
import { MO_ARTISTS } from './mo';
import { MS_ARTISTS } from './ms';
import { NC_ARTISTS } from './nc';
import { ND_ARTISTS } from './nd';
import { NE_ARTISTS } from './ne';
import { NJ_ARTISTS } from './nj';
import { NM_ARTISTS } from './nm';
import { NV_ARTISTS } from './nv';
import { NY_ARTISTS } from './ny';
import { OH_ARTISTS } from './oh';
import { OK_ARTISTS } from './ok';
import { OR_ARTISTS } from './or';
import { PA_ARTISTS } from './pa';
import { SC_ARTISTS } from './sc';
import { TN_ARTISTS } from './tn';
import { TX_ARTISTS } from './tx';
import { UT_ARTISTS } from './ut';
import { VA_ARTISTS } from './va';
import { VT_ARTISTS } from './vt';
import { WA_ARTISTS } from './wa';
import { WI_ARTISTS } from './wi';
import { WV_ARTISTS } from './wv';
import { WY_ARTISTS } from './wy';

/**
 * One file per state (`<state code>.ts`, e.g. `mt.ts` for Montana).
 * To add a state: create its file, then add it here — `npm run content:report`
 * shows what it still lacks. Rules: CONTENT_GUIDELINES.md.
 *
 * No entries yet (no artist meets the standard so far): MT, NH, RI, SD.
 */
export const US_ARTISTS: Artist[] = [
  ...AL_ARTISTS, ...AK_ARTISTS, ...AZ_ARTISTS, ...AR_ARTISTS, ...CA_ARTISTS,
  ...CO_ARTISTS, ...CT_ARTISTS, ...DE_ARTISTS, ...FL_ARTISTS, ...GA_ARTISTS,
  ...HI_ARTISTS, ...ID_ARTISTS, ...IL_ARTISTS, ...IN_ARTISTS, ...IA_ARTISTS,
  ...KS_ARTISTS, ...KY_ARTISTS, ...LA_ARTISTS, ...ME_ARTISTS, ...MD_ARTISTS,
  ...MA_ARTISTS, ...MI_ARTISTS, ...MN_ARTISTS, ...MS_ARTISTS, ...MO_ARTISTS,
  ...NE_ARTISTS, ...NV_ARTISTS, ...NJ_ARTISTS, ...NM_ARTISTS, ...NY_ARTISTS,
  ...NC_ARTISTS, ...ND_ARTISTS, ...OH_ARTISTS, ...OK_ARTISTS, ...OR_ARTISTS,
  ...PA_ARTISTS, ...SC_ARTISTS, ...TN_ARTISTS, ...TX_ARTISTS, ...UT_ARTISTS,
  ...VT_ARTISTS, ...VA_ARTISTS, ...WA_ARTISTS, ...WV_ARTISTS, ...WI_ARTISTS,
  ...WY_ARTISTS,
];
