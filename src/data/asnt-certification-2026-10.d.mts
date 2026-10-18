// Types for asnt-certification-2026-10.mjs (shared by React src/pages/asnt-certification.tsx and the crawler page).
export type Link = [string, string];
export type AsntFeeTable = { caption: string; url: string; urlLabel: string; rows: [string, string, string][] };
export type AsntCertificationModel = {
  path: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  cta: Link[];
  stats: [string, string][];
  answer: { q: string; a: string; bullets: string[] };
  schemes: { h2: string; intro: string; caption: string; head: string[]; rows: string[][]; notes: string[] };
  levels: { h2: string; intro: string; caption: string; head: string[]; items: [string, string, string][] };
  hours: { h2: string; intro: string; caption: string; head: string[]; methods: Link[]; after: string; link: Link };
  level2: { h2: string; p: string; link: Link };
  level3: {
    h2: string; intro: string; reqH2?: string; req?: string;
    eligibilityCaption: string; eligibilityHead: string[];
    examsCaption: string; examsHead: string[];
    renewal: string; links: Link[];
  };
  cost?: { h2: string; paras: string[]; link: Link };
  fees: { h2: string; intro: string; head: string[]; tables: AsntFeeTable[]; renewalNote: string; renewalLink: Link };
  training: { h2: string; paras: string[]; links: Link[] };
  faqs: { q: string; a: string }[];
  related: Link[];
  sources: Link[];
  sourcesNote: string;
  hoursRows: { key: string; name: string; href: string; classroom: string; experience: string }[];
  eligibilityRows: [string, string][];
  examRows: [string, string, string][];
};
export const ASNT_CERT_PATH: string;
export const TRAINING_FEES_SLOT: string;
export function resolveAsntCertification(data: unknown, hours: unknown): AsntCertificationModel;
export function asntCertificationHtml(model: AsntCertificationModel): string;
export function asntCertificationUpgrade(data: unknown, hours: unknown): Record<string, { title: string; description: string; h1: string; replace: boolean; faqSchema: boolean; html: string }>;
