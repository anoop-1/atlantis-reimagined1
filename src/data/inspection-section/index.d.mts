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
export function inspectionHtml(page: InspPage): string;
export function inspectionSchema(page: InspPage): Record<string, unknown>;
export function inspectionWords(page: InspPage): number;
