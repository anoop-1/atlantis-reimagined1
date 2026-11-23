// Types for src/data/rbi-section/model.mjs
import type { ServiceSectionModel } from '../service-section/core.mjs';
export type RbiRow = { slug: string; kind: 'topic' | 'country' | 'hub'; parent: string | null; navLabel: string; country?: string; place?: string };
export const ROOT: string;
export const RBI_FORM_ID: string;
export function pathFor(slug: string): string;
export function buildRbiSection(rows: RbiRow[], records?: Record<string, unknown>): ServiceSectionModel;
export function recordFor(pathname: string, rows: RbiRow[]): string | null;
