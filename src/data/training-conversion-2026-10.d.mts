export type BarButton = { variant: string; label: string; href: string };
export type TrainingConversion = {
  buyNow: { href: string; label: string; note: string };
  bar: { lead: string; buttons: BarButton[]; note: string };
  includes: { h2: string; intro: string; items: string[] };
  faq: {
    path: string; title: string; description: string; h1: string; answer: string;
    sections: { id: string; h2: string; items: [string, string][] }[];
    callHref: string; callLabel: string;
  };
  eligibility: {
    path: string; title: string; description: string; h1: string; answer: string;
    checker: { h2: string; intro: string; crawlerNote: string; screening: string };
    hoursH2: string; hoursIntro: string;
    sections: { h2: string; paragraphs?: string[]; list?: string[] }[];
    asntLevel3Href: string; contactHref: string; contactLabel: string;
  };
};
export type Hours = { methodNames: Record<string, string>; classroom: Record<string, string[]>; ojt: Record<string, string[]> };
export type HoursRow = { method: string; name: string; t1: number; t2: number; e1: number; e2: number; tTotal: number; eTotal: number };
export type EligibilityResult = { method: string; level: string; needT: number; needE: number; missing: string[]; ready: boolean };

export const TRAINING_FAQ_PATH: string;
export const ELIGIBILITY_PATH: string;
export const PORTAL: string;
export const CTA_BAR_MARKER: string;
export const BAR_CLASS: Record<"wrap" | "box" | "lead" | "row" | "primary" | "secondary" | "note", string>;
export const LEVELS: { key: string; label: string }[];
export function showsTrainingCtaBar(path: string): boolean;
export function isExternal(href: string): boolean;
export function ctaBarButtons(data: TrainingConversion, path: string): BarButton[];
export function ctaBarHtml(data: TrainingConversion, path: string): string;
export function faqItems(data: TrainingConversion): [string, string][];
export function includesHtml(data: TrainingConversion): string;
export function faqPageHtml(data: TrainingConversion): string;
export function faqPageSchema(data: TrainingConversion): Record<string, unknown>;
export function methodCodes(hours: Hours): string[];
export function hoursRows(hours: Hours): HoursRow[];
export function eligibilityCheck(hours: Hours, input: { method: string; level: string; training: number | string; experience: number | string; vision: boolean }): EligibilityResult | null;
export function hoursTableHtml(hours: Hours): string;
export function eligibilitySectionsHtml(data: TrainingConversion): string;
export function eligibilityPageHtml(data: TrainingConversion, hours: Hours): string;
export function eligibilitySchema(data: TrainingConversion): Record<string, unknown>;
