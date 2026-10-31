export type PrivacyBlock =
  | { p: string }
  | { h3: string }
  | { ul: string[] }
  | { table: { head: string[]; rows: string[][] } };
export type PrivacyPolicy = {
  path: string; title: string; description: string; h1: string;
  effectiveDate: string; effectiveLabel: string; updatedLabel: string;
  intro: string[]; summaryHeading: string; summary: string[];
  sections: { id: string; heading: string; blocks: PrivacyBlock[] }[];
};
export const PRIVACY_PATH: string;
export const PP_CLASS: Record<string, string>;
export function inlineHtml(text: string): string;
export function privacyArticleHtml(d: PrivacyPolicy): string;
export function privacyPageSchema(d: PrivacyPolicy): Record<string, unknown>;
export function assertPrivacyPolicyClean(d: PrivacyPolicy, html: string): void;
