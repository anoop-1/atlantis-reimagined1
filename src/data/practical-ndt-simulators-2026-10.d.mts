// Types for practical-ndt-simulators-2026-10.mjs (shared by React and scripts/practical-ndt-simulators-2026-10.mjs).
export type SimBlock = { p?: string; ul?: string[]; ol?: string[]; hours?: string };
export type SimSection = { id: string; h2: string; body: SimBlock[] };
export type SimFaq = { q: string; a: string };
export type SimLink = [string, string, string?];
export type SimPage = {
  slug: string;
  kind: 'method' | 'workplace';
  code?: string;
  hoursCode?: string | null;
  crumb: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: SimSection[];
  faq: SimFaq[];
  next: SimLink[];
  demoSubject: string;
  demoLabel: string;
  teaches: string[];
};
export type SimModel = SimPage & {
  path: string;
  canonical: string;
  demo: [string, string];
  practise: [string, string] | null;
  links: SimLink[];
  linksHeading: string;
  breadcrumbs: [string, string][];
  closer: string;
};
export type SimToken = { t: 'text'; v: string } | { t: 'link'; href: string; label: string };
export type SntHours = { classroom: Record<string, string[]>; ojt: Record<string, string[]> };

export const SITE: string;
export const SIM_MARKER: string;
export const HUB_PATH: string;
export const ASCAN_PATH: string;
export const PRACTICE_HUB_PATH: string;
export const SIM_BASE: string;
export const CATALOGUE: {
  methodFamilies: number; workplaces: number; sharedWorkplaces: number; dedicatedWorkplaces: number;
  lessons: number; jobs: number; utSpecimenDatasets: number; equipmentItems: number; equipmentDocumented: number;
  heatExchangerTubes: string;
};
export const METHOD_FAMILIES: { code: string; name: string; note: string; jobs: number; href: string }[];
export const WORKPLACES: { name: string; slug: string | null; note?: string }[];
export const SHARED_CLOSER: string;
export function demoHref(subject: string): string;
export const PAGES: SimPage[];
export const METHOD_PAGES: SimPage[];
export const WORKPLACE_PAGES: SimPage[];
export function pagePath(p: SimPage): string;
export const PAGE_BY_SLUG: Record<string, SimPage>;
export const SIM_PATHS: string[];
export const HUB: {
  practiseNow: { lead: string; href: string; label: string; tail: string };
  statsSentence: string;
  methodGrid: { h2: string; intro: string };
  workplaceGrid: { h2: string; intro: string; others: string };
  canCannot: { h2: string; intro: string; canHeading: string; can: string[]; cannotHeading: string; cannot: string[] };
};
export const CITY_BLOCK: { h2: string; p: string; methods: [string, string][]; workplaces: [string, string][]; practiseNow: [string, string] };
export function tokens(s: string): SimToken[];
export function plain(s: string): string;
export function resolveBlock(block: SimBlock, page: SimPage, hours: SntHours): SimBlock;
export function pageModel(page: SimPage, hours: SntHours): SimModel;
export function pageSchema(model: SimModel): Record<string, unknown>;
