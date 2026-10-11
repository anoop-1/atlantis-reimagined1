// Types for owner-links-2026-10.mjs (shared by React and scripts/owner-links-2026-10.mjs; 2026-10-12 owner-links release).
export type OwnerEntry = { source: 'blog' | 'depth' | 'tsx'; title?: string; h1?: string; description?: string; p: string; family?: string };
export const OWNER_LINK_MARKER: string;
export const OWNERS: Record<string, string>;
export const REPOINT: Record<string, string>;
export const OWNER_PAGES: Record<string, OwnerEntry>;
export function dtCityMeta(city: string): { title: string; h1: string; p: string };
export function renderOwnerInline(s: string): string;
export function ownerLinksIn(text: string): [string, string][];
export function ownerEntryFor(path: string): OwnerEntry | null;
export function ownerParagraphHtml(text: string): string;
export function insertAfterFirstParagraph(html: string, block: string, from?: number): string | null;
export function repointOwnerLinks(html: string): string;
export function withOwnerLink(path: string, html: string): string;
