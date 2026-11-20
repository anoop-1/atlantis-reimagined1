// Types for src/data/cwi-us-block-2026-11.mjs
export type CwiBlock = { kind: 'city' | 'hub'; h: string; p: string; links: [string, string][] };
export const CWI_NATIONAL: string;
export const CWI_CITIES: Record<string, [string, string]>;
export const CWI_BLOCK_CLASS: Record<string, string>;
export function CWI_PAGE(slug: string): string;
export function nearestCwi(path: string): string | null;
export function cwiBlockFor(path: string): CwiBlock | null;
export function cwiBlockHtml(b: CwiBlock): string;
