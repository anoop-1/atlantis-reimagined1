// Types for depth-faq-2026-10-18.mjs (React DepthPage.tsx and scripts/depth-faq-2026-10-18.mjs).
export type DepthFaqItem = { q: string; a: string };
export const DEPTH_FAQ_MARKER: string;
export const DEPTH_FAQ_HEADING: string;
export const DEPTH_FAQ_HOLD: [string, RegExp][];
export function depthFaqEnabled(path: string): boolean;
export function depthFaqFor(page: { slug: string; faq?: DepthFaqItem[]; facets?: DepthFaqItem[] } | null | undefined): {
  items: DepthFaqItem[];
  held: { q: string; reason: string }[];
  facetRepeats: number;
  reason: string | null;
};
export function faqPlain(s: string): string;
export function depthFaqSchema(items: DepthFaqItem[]): Record<string, unknown>;
