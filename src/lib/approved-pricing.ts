// Approved Atlantis pricing — React-side helpers (CLAUDE.md §18, revised 2026-10-07).
// Mirrors scripts/approved-pricing.mjs (crawler layer). Amounts live ONLY in the
// two data files; never type an approved amount anywhere else — the pricing gate
// (scripts/assert-no-atlantis-pricing.mjs) fails on stray literals.
import trainingFees from "@/data/approved-training-fees.json";
import erpPricing from "@/data/approved-erp-pricing.json";

export type Money = { usd: number; aed?: number };
export type FeeCell = string | Money;
export type FeeTable = { caption: string; columns: string[]; rows: FeeCell[][] };
export type FeeRegion = {
  label: string;
  heading: string;
  intro: string;
  source: string;
  tables: FeeTable[];
  notes: string[];
  pages: string[];
};

export const TRAINING_FEES = trainingFees as unknown as {
  contactHref: string;
  contactText: string;
  regions: Record<string, FeeRegion>;
  otherRegionLinks: Record<string, string>;
};
export const ERP_PRICING = erpPricing;
export type ErpPlan = (typeof erpPricing.plans)[number];

// India is never priced, even if a path is misconfigured in the data file.
const INDIA_PATH = /india|hyderabad|bangalore|bengaluru|chennai|mumbai|delhi|pune|kolkata|ahmedabad|kochi|cochin|vizag|visakhapatnam|vadodara|jamnagar|surat|noida|gurgaon|gurugram|coimbatore|bhubaneswar|mangalore|nagpur|lucknow|indore|haldia|paradip|\/(hi|in)\//i;

export const fmtUsd = (n: number) => "$" + n.toLocaleString("en-US", { maximumFractionDigits: 0 });
export const fmtAed = (n: number) =>
  "AED " + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
export const fmtMoney = (m: Money) => (m.aed != null ? `${fmtUsd(m.usd)} (${fmtAed(m.aed)})` : fmtUsd(m.usd));

export function trainingRegionForPath(path: string): string | null {
  const p = path.replace(/\/$/, "") || "/";
  if (INDIA_PATH.test(p)) return null;
  for (const [key, r] of Object.entries(TRAINING_FEES.regions)) if (r.pages.includes(p)) return key;
  return null;
}

/** {{plan.field}} → formatted value. Same rules as erpTokens() in scripts/approved-pricing.mjs. */
export function erpTokens(text: string): string {
  return text.replace(/\{\{(\w+)\.(\w+)\}\}/g, (all, key: string, field: string) => {
    const plan = erpPricing.plans.find((p) => p.key === key) as Record<string, unknown> | undefined;
    const v = plan?.[field];
    if (typeof v !== "number") return all;
    return field === "users" ? String(v) : fmtUsd(v);
  });
}
