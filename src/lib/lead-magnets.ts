// Intent-matched lead magnets for North American blog / resource / mock-exam
// traffic. 2026-09-29.
//
// WHY: 90 days of NA data (US + CA) — the high-engagement SNT-TC-1A, Level III,
// practice-question and salary pages drew hundreds of engaged sessions and
// produced zero leads. The only offer they saw was a generic "talk to us". Each
// cluster now gets the thing that reader actually came for:
//   mock_exam  practice-question / mock-exam pages  -> full question set + Level III study guidance
//   gap_check  SNT-TC-1A / written-practice content -> free written-practice gap check (employers)
//   career     salary / career pages                -> Level II -> Level III career path
//
// The rules live in src/data/lead-magnets.json so scripts/lead-magnets.mjs
// (prerender, crawler + no-JS layer) resolves exactly the same paths.
import rules from "@/data/lead-magnets.json";

export type LeadMagnetKind = "mock_exam" | "gap_check" | "career";

export interface LeadMagnetMatch {
  kind: LeadMagnetKind;
  /** Method code for mock_exam ("ut", "rt", ... or "l3"). */
  method?: string;
  methodName?: string;
  /** "1" | "2" | "3" for mock_exam. */
  level?: string;
  /** Key into lead-magnet-banks.json when a full bank with explanations exists. */
  bank?: string;
  related?: string[];
}

const COMPILED = rules.rules.map((r) => ({ kind: r.magnet as LeadMagnetKind, re: new RegExp(r.pattern) }));
const METHODS = rules.methods as Record<string, string>;
const BANKS = rules.banks as Record<string, string>;
const RELATED = rules.relatedSets as Record<string, string[]>;

export const METHOD_OPTIONS = Object.entries(METHODS).map(([code, name]) => ({ code, name }));

export function leadMagnetFor(pathname: string): LeadMagnetMatch | null {
  const p = (pathname || "").toLowerCase().replace(/\/+$/, "") || "/";
  const hit = COMPILED.find((r) => r.re.test(p));
  if (!hit) return null;
  if (hit.kind !== "mock_exam") return { kind: hit.kind };
  if (/asnt-level-3-basic-exam-prep/.test(p)) {
    return { kind: "mock_exam", method: "l3", methodName: "ASNT Level III Basic", level: "3", bank: BANKS.l3, related: RELATED.l3 };
  }
  const m = p.match(/^\/blog\/([a-z]+)-level-(1|2|ii)-/);
  const method = m?.[1] || "ut";
  const level = m?.[2] === "1" ? "1" : "2";
  return {
    kind: "mock_exam",
    method,
    methodName: METHODS[method] || method.toUpperCase(),
    level,
    bank: BANKS[method],
    related: RELATED[method] || [],
  };
}

export function mockExamSubject(methodCode: string, level: string): string {
  const short = methodCode === "l3" ? "Level III Basic" : methodCode.toUpperCase();
  return `Mock exam request — ${short} L${level}`;
}

export const GAP_CHECK_SUBJECT = "Written practice gap check";
export const CAREER_SUBJECT = "Career path advice";

/** Contact deep link — Contact.tsx pre-fills service + subject from these (see CLAUDE.md §45). */
export function contactLink(service: string, subject: string): string {
  return `/contact?service=${encodeURIComponent(service)}&subject=${encodeURIComponent(subject)}`;
}

/** Offer used by GlobalEnquireCTA when the path has a lead magnet. */
export function leadMagnetOffer(pathname: string) {
  const m = leadMagnetFor(pathname);
  if (!m) return null;
  if (m.kind === "mock_exam") {
    const subject = mockExamSubject(m.method || "ut", m.level || "2");
    return {
      variant: "mock_exam", service: "training", subject,
      title: m.bank ? "Want the full timed mock exam?" : "Want Level III study guidance?",
      sub: m.bank ? "Full question set with answer explanations — free." : "An ASNT Level III will follow up with study guidance.",
      button: m.bank ? "Get it free" : "Ask a Level III",
    };
  }
  if (m.kind === "gap_check") {
    return {
      variant: "gap_check", service: "consulting", subject: GAP_CHECK_SUBJECT,
      title: "Free written-practice gap check", sub: "By an ASNT Level III — for employers certifying under SNT-TC-1A.", button: "Request it",
    };
  }
  return {
    variant: "career", service: "training", subject: CAREER_SUBJECT,
    title: "Level II → Level III?", sub: "Plan your ASNT Level III career path with a Level III.", button: "Get advice",
  };
}

const MAGNET_KEY = "atlantis-lead-magnet";
/** Remember which magnet sent the visitor to /contact so that submit's generate_lead carries it. */
export function rememberLeadMagnet(kind: LeadMagnetKind) {
  try { sessionStorage.setItem(MAGNET_KEY, kind); } catch { /* storage may be disabled */ }
}
export function rememberedLeadMagnet(): string {
  try { return sessionStorage.getItem(MAGNET_KEY) || ""; } catch { return ""; }
}
