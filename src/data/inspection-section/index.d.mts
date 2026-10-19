// Types for src/data/inspection-section/index.mjs
export type InspSection = { id: string; h: string; p?: string | string[]; list?: string[]; table?: { head: string[]; rows: string[][] } };
export type InspListItem = { label: string; href: string; text: string; codes: string };
export type InspPage = {
  path: string; kind: 'landing' | 'hub' | 'list' | 'service' | 'method'; group?: 'advanced' | 'conventional';
  parent: string | null; navLabel: string; title: string; description: string; h1: string; eyebrow?: string; intro: string;
  highlights?: { h: string; p: string }[]; cards?: { href: string; label: string; text: string }[];
  sections?: InspSection[]; codes?: string[]; deliverables?: string[]; industries?: string[];
  faqs?: { q: string; a: string }[]; related?: [string, string][];
};
export type InspNavItem = { name: string; path: string; blurb?: string; children?: InspNavItem[] };
export const SITE: string;
export const ENQUIRY: string;
export const ADVANCED_LIST: InspListItem[];
export const CONVENTIONAL_LIST: InspListItem[];
export const INSPECTION_PAGES: InspPage[];
export const INSPECTION_PATHS: string[];
export const INSPECTION_NAV: InspNavItem;
export function inspectionPage(path: string): InspPage | null;
export function inspectionBreadcrumbs(page: InspPage): { path: string; label: string }[];
export function listFor(page: InspPage): InspListItem[] | null;
export function inspectionHtml(page: InspPage, opts?: { icon?: (name: string, className: string) => string; rfqHtml?: string }): string;
export function inspectionSchema(page: InspPage): Record<string, unknown>;
export function inspectionWords(page: InspPage): number;
// 2026-10-19: shared look + regional pages
export const UI: Record<string, string>;
export const ICON_FOR: Record<string, string>;
export const HIGHLIGHT_ICONS: string[];
export const GRID_COLS: Record<number, string>;
export const QUOTE_ANCHOR: string;
export const TALK: string;
export type InspRegionalLinks = { intro: string; links: [string, string][] };
export const INSPECTION_REGIONS: { h2: string; intro: string; groups: { name: string; links: [string, string][] }[]; footnote: [string, string][] };
export function inspectionRegionalLinksFor(path: string): InspRegionalLinks | null;
export const INSPECTION_REGIONAL_MARKER: string;
export function childPages(page: InspPage): InspPage[];
export function inspectionRegionalHtml(b: InspRegionalLinks | null): string;
