/**
 * API 510 / 570 / 653 inspection interval calculator — 2026-10-10 cycle (CLAUDE.md §48).
 * Long- and short-term corrosion rates, remaining life on the governing rate, and the
 * prescriptive maximum interval each code sets for that remaining life. Screening only:
 * the Authorized Inspector sets the real interval. Text shared with the crawler HTML via
 * src/data/integrity-tools-2026-10.json. Nothing leaves the browser.
 */
import { useMemo, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import ToolArticle from "@/components/sprint/ToolArticle";
import tools from "@/data/integrity-tools-2026-10.json";
import { trackEngagement } from "@/lib/enquiry-analytics";

const t = tools.interval;
const IN = 25.4;
type Code = "510" | "570" | "653-shell" | "653-floor";
const CLASS_MAX: Record<string, { thk: number | null; ext: number | null }> = {
  "1": { thk: 5, ext: 5 },
  "2": { thk: 10, ext: 5 },
  "3": { thk: 10, ext: 10 },
  "4": { thk: null, ext: null },
};

export interface IntervalResult {
  lt: number | null;
  st: number | null;
  rate: number;
  rl: number;
  lines: { label: string; years: number | null; why: string }[];
}

/** Pure arithmetic, exported for tests. Thicknesses in any one unit; years as calendar years. */
export function intervals(o: {
  code: Code; t0: number; y0: number; t1: number | null; y1: number | null; t2: number; y2: number;
  treq: number; pipeClass: string; rateKnown: boolean;
}): IntervalResult | null {
  const { code, t0, y0, t1, y1, t2, y2, treq } = o;
  if (!(t2 > 0) || !(treq >= 0) || !(y2 > y0)) return null;
  const lt = (t0 - t2) / (y2 - y0);
  const st = t1 !== null && y1 !== null && y2 > y1 ? (t1 - t2) / (y2 - y1) : null;
  const rate = Math.max(lt, st ?? -Infinity, 0);
  const rl = rate > 0 ? (t2 - treq) / rate : Infinity;
  const half = rl / 2;
  const short = rl < 4 ? Math.min(rl, 2) : null; // API 510/570: RL under 4 years
  const lines: IntervalResult["lines"] = [];
  const cap = (v: number) => Math.max(0, v);
  if (code === "510") {
    const internal = short !== null ? Math.max(cap(short), Math.min(half, 10)) : Math.min(half, 10);
    lines.push({ label: "Internal or on-stream inspection", years: cap(internal), why: short !== null ? "remaining life under 4 years: up to the remaining life, no more than 2 years" : "lesser of half the remaining life and 10 years" });
    lines.push({ label: "External visual inspection", years: cap(Math.min(5, internal)), why: "lesser of 5 years and the internal interval" });
  } else if (code === "570") {
    const m = CLASS_MAX[o.pipeClass];
    if (m.thk === null) {
      lines.push({ label: "Thickness measurement", years: null, why: "Class 4: interval set by the owner-user" });
    } else {
      const thk = short !== null ? Math.max(cap(short), Math.min(half, m.thk)) : Math.min(half, m.thk);
      lines.push({ label: "Thickness measurement", years: cap(thk), why: short !== null ? "remaining life under 4 years: up to the remaining life, no more than 2 years" : `lesser of half the remaining life and the Class ${o.pipeClass} maximum of ${m.thk} years` });
    }
    lines.push({ label: "External visual inspection", years: m.ext, why: m.ext === null ? "Class 4: set by the owner-user" : `Class ${o.pipeClass} maximum` });
  } else if (code === "653-shell") {
    lines.push({ label: "Shell ultrasonic thickness", years: o.rateKnown ? cap(Math.min(half, 15)) : 5, why: o.rateKnown ? "lesser of RCA ÷ 2N and 15 years" : "corrosion rate not known: 5 years" });
    lines.push({ label: "External inspection (Authorized Inspector)", years: cap(Math.min(5, rl / 4)), why: "lesser of 5 years and RCA ÷ 4N" });
    lines.push({ label: "Routine in-service check (owner personnel)", years: 1 / 12, why: "at least monthly" });
  } else {
    lines.push({ label: "Internal (floor) inspection", years: o.rateKnown ? cap(Math.min(half, 20)) : 10, why: o.rateKnown ? "lesser of floor remaining life ÷ 2 and 20 years (RBI may change this)" : "bottom corrosion rate not known: 10 years" });
  }
  return { lt, st, rate, rl, lines };
}

export default function InspectionIntervalCalculator() {
  const [code, setCode] = useState<Code>("510");
  const [unit, setUnit] = useState<"mm" | "in">("mm");
  const [t0, setT0] = useState(12.7);
  const [y0, setY0] = useState(2010);
  const [t1, setT1] = useState<number | "">(11.9);
  const [y1, setY1] = useState<number | "">(2020);
  const [t2, setT2] = useState(11.4);
  const [y2, setY2] = useState(2025);
  const [treq, setTreq] = useState(9.0);
  const [pipeClass, setPipeClass] = useState("2");
  const [rateKnown, setRateKnown] = useState(true);
  const [used, setUsed] = useState(false);
  const touch = () => { if (!used) { setUsed(true); trackEngagement("tool_use", { tool: "api-inspection-interval-calculator" }); } };

  const r = useMemo(() => intervals({
    code, t0, y0, t1: t1 === "" ? null : t1, y1: y1 === "" ? null : y1, t2, y2, treq, pipeClass, rateKnown,
  }), [code, t0, y0, t1, y1, t2, y2, treq, pipeClass, rateKnown]);

  const fmtRate = (v: number | null) => (v === null ? "—" : `${v.toFixed(unit === "mm" ? 3 : 4)} ${unit}/yr`);
  const fmtYears = (v: number | null) => (v === null ? "set by owner-user" : v < 0.2 ? "monthly" : v === Infinity ? "no measured loss" : `${v.toFixed(1)} years`);
  const input = "w-full rounded-md border border-border bg-background px-3 py-2";
  const treqLabel = code === "653-floor" ? "Minimum remaining thickness (MRT)" : code === "653-shell" ? "Minimum thickness t-min" : "Required thickness t-required";

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebApplication", name: "API 510, 570 and 653 Inspection Interval Calculator", url: `https://atlantisndt.com${t.path}`, applicationCategory: "UtilitiesApplication", operatingSystem: "Web", isAccessibleForFree: true, publisher: { "@type": "Organization", name: "Atlantis NDT", url: "https://atlantisndt.com" } },
      { "@type": "FAQPage", mainEntity: t.faq.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })) },
    ],
  };

  const num = (setter: (n: number) => void) => (e: React.ChangeEvent<HTMLInputElement>) => { setter(+e.target.value); touch(); };
  const opt = (setter: (n: number | "") => void) => (e: React.ChangeEvent<HTMLInputElement>) => { setter(e.target.value === "" ? "" : +e.target.value); touch(); };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <Navigation />
      <SEOHead title={t.title} description={t.description} canonical={`https://atlantisndt.com${t.path}`} structuredData={schema} />
      <main className="container mx-auto px-6 py-10 max-w-5xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Tools", href: "/tools" }, { label: "API inspection interval calculator", href: t.path }]} />
        <h1 className="text-3xl md:text-5xl font-bold mt-6 mb-4">{t.h1}</h1>
        <p className="text-lg text-muted-foreground mb-8">{t.intro}</p>

        <section className="rounded-xl border-2 border-primary/30 bg-card p-6 mb-10" aria-label="Interval calculator">
          <div className="flex flex-wrap gap-2 mb-4" role="group" aria-label="Code">
            {([["510", "API 510 vessel"], ["570", "API 570 piping"], ["653-shell", "API 653 tank shell"], ["653-floor", "API 653 tank floor"]] as [Code, string][]).map(([c, l]) => (
              <button key={c} type="button" onClick={() => { setCode(c); touch(); }} className={`px-4 py-1.5 rounded-lg border-2 text-sm font-semibold ${code === c ? "border-primary bg-primary text-primary-foreground" : "border-primary/40 text-primary"}`}>{l}</button>
            ))}
            <span className="mx-2" />
            {(["mm", "in"] as const).map((u) => (
              <button key={u} type="button" onClick={() => { if (u !== unit) { const k = u === "in" ? 1 / IN : IN; const c = (v: number) => +(v * k).toFixed(u === "in" ? 3 : 2); setT0(c(t0)); setT2(c(t2)); setTreq(c(treq)); if (t1 !== "") setT1(c(t1)); setUnit(u); } }} className={`px-3 py-1.5 rounded-lg border text-sm ${unit === u ? "border-primary bg-primary/10 font-semibold" : "border-border"}`}>{u}</button>
            ))}
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            <label className="text-sm font-semibold">First reading t ({unit})<input type="number" step="any" value={t0} onChange={num(setT0)} className={input} /></label>
            <label className="text-sm font-semibold">Year<input type="number" value={y0} onChange={num(setY0)} className={input} /></label>
            <label className="text-sm font-semibold">Previous reading ({unit}, optional)<input type="number" step="any" value={t1} onChange={opt(setT1)} className={input} /></label>
            <label className="text-sm font-semibold">Year<input type="number" value={y1} onChange={opt(setY1)} className={input} /></label>
            <label className="text-sm font-semibold">Latest reading t-actual ({unit})<input type="number" step="any" value={t2} onChange={num(setT2)} className={input} /></label>
            <label className="text-sm font-semibold">Year<input type="number" value={y2} onChange={num(setY2)} className={input} /></label>
            <label className="text-sm font-semibold">{treqLabel} ({unit})<input type="number" step="any" value={treq} onChange={num(setTreq)} className={input} /></label>
            {code === "570" && (
              <label className="text-sm font-semibold">Piping class
                <select value={pipeClass} onChange={(e) => { setPipeClass(e.target.value); touch(); }} className={input}>
                  {["1", "2", "3", "4"].map((c) => <option key={c} value={c}>Class {c}</option>)}
                </select>
              </label>
            )}
            {(code === "653-shell" || code === "653-floor") && (
              <label className="text-sm font-semibold flex items-center gap-2 mt-6">
                <input type="checkbox" checked={rateKnown} onChange={(e) => { setRateKnown(e.target.checked); touch(); }} /> Corrosion rate is known
              </label>
            )}
          </div>
          {r ? (
            <div className="mt-6" role="status" aria-live="polite">
              <dl className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div><dt className="text-muted-foreground">Long-term rate</dt><dd className="font-bold">{fmtRate(r.lt)}</dd></div>
                <div><dt className="text-muted-foreground">Short-term rate</dt><dd className="font-bold">{fmtRate(r.st)}</dd></div>
                <div><dt className="text-muted-foreground">Governing rate</dt><dd className="font-bold">{fmtRate(r.rate)}</dd></div>
                <div><dt className="text-muted-foreground">Remaining life</dt><dd className="font-bold">{r.rl === Infinity ? "no measured loss" : r.rl <= 0 ? "at or below minimum: assess now" : `${r.rl.toFixed(1)} years`}</dd></div>
              </dl>
              <table className="mt-4 w-full text-sm">
                <thead><tr className="text-left border-b"><th className="py-2">Inspection</th><th>Maximum interval</th><th>Rule applied</th></tr></thead>
                <tbody>
                  {r.lines.map((l) => (
                    <tr key={l.label} className="border-b"><td className="py-2 font-semibold">{l.label}</td><td>{r.rl <= 0 && l.years !== null && l.years > 0.2 ? "now" : fmtYears(l.years)}</td><td className="text-muted-foreground">{l.why}</td></tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-muted-foreground mt-3">Screening arithmetic only. The Authorized Inspector sets the interval under the code edition in force; RBI to API RP 580/581 can change it.</p>
            </div>
          ) : (
            <p className="mt-4 text-sm text-red-600">Enter a latest reading above zero, a required thickness, and a latest year after the first reading.</p>
          )}
        </section>

        <ToolArticle t={t} />
      </main>
      <ContactDetails />
    </div>
  );
}
