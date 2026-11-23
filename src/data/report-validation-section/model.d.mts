// Types for src/data/report-validation-section/model.mjs
import type { ServiceSectionModel } from '../service-section/core.mjs';
export type RvRow = { slug: string; kind: 'industry' | 'topic' | 'method' | 'city'; navLabel: string; key?: string; place?: string; region?: string; country?: string; label?: string; industries?: string[] };
export const ROOT: string;
export const RV_FORM_ID: string;
export const GUIDES: [string, string][];
export const METHOD_GUIDES: [string, string][];
export function pathFor(slug: string): string;
export function buildRvSection(rows: RvRow[], records?: Record<string, unknown>, root?: unknown): ServiceSectionModel;
export function recordFor(pathname: string, rows: RvRow[]): string | null | undefined;
