// Types for keyword-links-2026-10.mjs (shared by React and scripts/prerender.mjs; CLAUDE.md §50).
export type KeywordLinks = { family: string; intro: string; links: [string, string][] };
export function familyFor(path: string): string | null;
export function keywordLinksFor(path: string): KeywordLinks | null;
export const KEYWORD_LINK_TARGETS: Record<string, { href: string; anchors: string[] }>;
