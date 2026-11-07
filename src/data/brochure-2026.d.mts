// Types for src/data/brochure-2026.mjs
export type Brochure = {
  path: string; title: string; description: string; h1: string; eyebrow: string; intro: string;
  pdf: string; pdfName: string; pdfBytes: number; pages: number; previewDir: string;
  contents: { pages: string; h: string; p: string }[];
  links: [string, string][];
};
export const BR: Record<string, string>;
export function brochureHtml(d: Brochure): string;
export function brochureSchema(d: Brochure): Record<string, unknown>[];
export function assertBrochureClean(d: Brochure, exists?: (publicPath: string) => boolean): void;
