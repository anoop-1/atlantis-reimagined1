// Types for src/data/consulting-section/index.mjs
import type { ServiceSectionModel, SvcPage } from "../service-section/core.mjs";
export type NavNode = { name: string; path: string; children?: NavNode[] };
export const CONSULTING_ENQUIRY: string;
export const CONSULTING_TOPIC_PATHS: Record<string, string>;
export const CONSULTING_ICONS: Record<string, string>;
export const CONSULTING_SECTION: ServiceSectionModel;
export const CONSULTING_PAGES: SvcPage[];
export const CONSULTING_PATHS: string[];
export const CONSULTING_SERVICES_BLOCK: { h2: string; intro: string; cards: { href: string; label: string; text: string }[] };
export const CONSULTING_BLOCK_PATHS: Set<string>;
export const CONSULTING_BLOCK_MARKER: string;
export const CONSULTING_NAV: { menuTitle: string; allLabel: string; talk: [string, string]; children: NavNode[] };
export function consultingTopicLinksFor(path: string): { intro: string; links: [string, string][] } | null;
export const CONSULTING_TOPIC_MARKER: string;
export function consultingTopicHtml(b: { intro: string; links: [string, string][] } | null): string;
