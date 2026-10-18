// Types for salary-sources-2026-10.mjs (shared by React and the crawler scripts).
export const SALARY_SOURCES_MARKER: string;
export function sourceTableHtml(data: unknown, ids: string[], heading?: string): string;
export function whyHtml(data: unknown, withNoLevel?: boolean): string;
export function planHtml(data: unknown): string;
export function sourcedFigures(data: unknown): Set<string>;
export function inlineLinks(s: string): string;
