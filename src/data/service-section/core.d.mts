// Types for src/data/service-section/core.mjs
export type SvcSection = { id: string; h: string; p?: string | string[]; list?: string[]; links?: [string, string][]; table?: { head: string[]; rows: string[][] } };
export type SvcListItem = { label: string; href: string; text: string; codes: string };
export type SvcPage = {
  path: string; kind: string; group?: string; parent: string | null; navLabel: string; title: string; description: string;
  h1: string; eyebrow?: string; intro: string; highlights?: { h: string; p: string }[];
  cards?: { href: string; label: string; text: string }[]; cardsTitle?: string; cardsSub?: string; listTitle?: string;
  sections?: SvcSection[]; codes?: string[]; deliverables?: string[]; industries?: string[];
  faqs?: { q: string; a: string }[]; related?: [string, string][];
};
export type SvcCta = { primaryHref: string; primaryLabel: string; secondaryHref: string; secondaryLabel: string; bandTitle: string; bandText: string; formId: string };
export type SvcRegions = { h2: string; intro: string; groups: { name: string; links: [string, string][] }[]; footnote: [string, string][] };
export type SvcConfig = {
  pages: SvcPage[]; rootPath: string; ancestors?: { path: string; label: string }[]; lists?: Record<string, SvcListItem[]>;
  iconFor?: Record<string, string>; highlightIcons?: string[]; defaultEyebrow?: string; regions?: SvcRegions; cta: SvcCta; areaServed?: string[];
};
export type ServiceSectionModel = {
  cfg: SvcConfig; PAGES: SvcPage[]; PATHS: string[];
  page(path: string): SvcPage | null;
  breadcrumbs(page: SvcPage): { path: string; label: string }[];
  listFor(page: SvcPage): SvcListItem[] | null;
  childPages(page: SvcPage): SvcPage[];
  cardsTitle(page: SvcPage): string;
  cardsSub(page: SvcPage): string;
  html(page: SvcPage, opts?: { icon?: (name: string, className: string) => string; formHtml?: string }): string;
  schema(page: SvcPage): Record<string, unknown>;
  words(page: SvcPage): number;
};
export const SITE: string;
export const UI: Record<string, string>;
export const GRID_COLS: Record<number, string>;
export function esc(s: string): string;
export function createServiceSection(cfg: SvcConfig): ServiceSectionModel;
export function upLinkHtml(b: { intro: string; links: [string, string][] } | null, marker: string, label: string): string;
