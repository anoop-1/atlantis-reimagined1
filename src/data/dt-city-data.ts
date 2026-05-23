/**
 * Typed re-export shim over dt-city-data.mjs.
 *
 * The actual data lives in `dt-city-data.mjs` (plain ES module, no
 * JSX, no TS-only syntax) so that BOTH the React app (via Vite/SWC)
 * AND the build-time prerender script (via raw Node ESM in
 * scripts/prerender.mjs) can import the same source of truth.
 *
 * This .ts shim adds proper types for the React side. The data shape
 * MUST stay in sync with the .mjs — when you add a city, add it to the
 * .mjs and the types here will resolve correctly through `as` casts.
 */

import * as data from './dt-city-data.mjs';

// ─── Shared types ────────────────────────────────────────────────────────────

export interface DigitalTwinFaqItem {
  /** Question — keep ≤ 110 chars for SERP-snippet readability */
  q: string;
  /** Answer — typically 60-120 words for FAQ rich-result eligibility */
  a: string;
}

// ─── Typed re-exports ────────────────────────────────────────────────────────

export const digitalTwinLocationContext =
  (data as { digitalTwinLocationContext: Record<string, string> }).digitalTwinLocationContext;

export const digitalTwinAssets =
  (data as { digitalTwinAssets: Record<string, string[]> }).digitalTwinAssets;

export const digitalTwinIndustries =
  (data as { digitalTwinIndustries: Record<string, string[]> }).digitalTwinIndustries;

export const digitalTwinFaqsByCity =
  (data as { digitalTwinFaqsByCity: Record<string, DigitalTwinFaqItem[]> }).digitalTwinFaqsByCity;

export const makeGenericFaqs =
  (data as { makeGenericFaqs: (cityName: string) => DigitalTwinFaqItem[] }).makeGenericFaqs;

export const getFaqsForCity =
  (data as { getFaqsForCity: (slug: string, cityName?: string) => DigitalTwinFaqItem[] }).getFaqsForCity;
