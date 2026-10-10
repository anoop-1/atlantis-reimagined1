/**
 * SNT-TC-1A hours planner — 2026-10-10 cycle (CLAUDE.md §48).
 * Remaining classroom + OJT hours for a method and target level, from the same
 * recommended-minimum figures the training matrix shows (src/data/snt-tc-1a-hours.json).
 * Text shared with the crawler HTML via src/data/integrity-tools-2026-10.json.
 * No data collection; nothing leaves the browser.
 */
import { useMemo, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import ToolArticle from "@/components/sprint/ToolArticle";
import tools from "@/data/integrity-tools-2026-10.json";
import hours from "@/data/snt-tc-1a-hours.json";
import { trackEngagement } from "@/lib/enquiry-analytics";

const t = tools.hours;
type Method = keyof typeof hours.classroom;
const METHODS = Object.keys(hours.classroom) as Method[];
const num = (s: string) => Number(String(s).replace(/,/g, "")) || 0;

/** Required hours for a target level. Level II direct entry adds Level I; Level III figures are
 * the matrix's hours beyond Level II (Level III eligibility also depends on education and years). */
export function requiredHours(m: Method, level: 1 | 2 | 3, holdsPrevious: boolean) {
  const c = hours.classroom[m].map(num);
  const o = hours.ojt[m].map(num);
  const i = level - 1;
  if (holdsPrevious || level !== 2) return { classroom: c[i], ojt: o[i] };
  // Not holding the level below: add every level up to the target.
  return { classroom: c.slice(0, level).reduce((a, b) => a + b, 0), ojt: o.slice(0, level).reduce((a, b) => a + b, 0) };
}

export default function SntHoursPlanner() {
  const [method, setMethod] = useState<Method>("UT");
  const [level, setLevel] = useState<1 | 2 | 3>(2);
  const [holds, setHolds] = useState(false);
  const [cls, setCls] = useState(40);
  const [ojt, setOjt] = useState(300);
  const [used, setUsed] = useState(false);
  const touch = () => { if (!used) { setUsed(true); trackEngagement("tool_use", { tool: "snt-tc-1a-hours-planner" }); } };

  const r = useMemo(() => {
    const req = requiredHours(method, level, holds);
    const leftC = Math.max(0, req.classroom - (cls || 0));
    const leftO = Math.max(0, req.ojt - (ojt || 0));
    const pc = req.classroom ? Math.min(100, ((cls || 0) / req.classroom) * 100) : 100;
    const po = req.ojt ? Math.min(100, ((ojt || 0) / req.ojt) * 100) : 100;
    return { req, leftC, leftO, pc, po };
  }, [method, level, holds, cls, ojt]);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebApplication", name: "SNT-TC-1A Hours Planner", url: `https://atlantisndt.com${t.path}`, applicationCategory: "UtilitiesApplication", operatingSystem: "Web", isAccessibleForFree: true, publisher: { "@type": "Organization", name: "Atlantis NDT", url: "https://atlantisndt.com" } },
      { "@type": "FAQPage", mainEntity: t.faq.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })) },
    ],
  };
  const input = "w-full rounded-md border border-border bg-background px-3 py-2";
  const bar = (p: number) => (
    <div className="h-2 w-full rounded bg-muted" aria-hidden="true"><div className="h-2 rounded bg-primary" style={{ width: `${p}%` }} /></div>
  );
  const levelName = (l: number) => (l === 1 ? "Level I" : l === 2 ? "Level II" : "Level III");

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <Navigation />
      <SEOHead title={t.title} description={t.description} canonical={`https://atlantisndt.com${t.path}`} structuredData={schema} />
      <main className="container mx-auto px-6 py-10 max-w-5xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Tools", href: "/tools" }, { label: "SNT-TC-1A hours planner", href: t.path }]} />
        <h1 className="text-3xl md:text-5xl font-bold mt-6 mb-4">{t.h1}</h1>
        <p className="text-lg text-muted-foreground mb-8">{t.intro}</p>

        <section className="rounded-xl border-2 border-primary/30 bg-card p-6 mb-10" aria-label="Hours planner">
          <div className="grid md:grid-cols-3 gap-4">
            <label className="text-sm font-semibold">Method
              <select value={method} onChange={(e) => { setMethod(e.target.value as Method); touch(); }} className={input}>
                {METHODS.map((m) => <option key={m} value={m}>{hours.methodNames[m]}</option>)}
              </select>
            </label>
            <label className="text-sm font-semibold">Target level
              <select value={level} onChange={(e) => { setLevel(Number(e.target.value) as 1 | 2 | 3); touch(); }} className={input}>
                <option value={1}>Level I</option>
                <option value={2}>Level II</option>
                <option value={3}>Level III (hours beyond Level II)</option>
              </select>
            </label>
            {level === 2 && (
              <label className="text-sm font-semibold flex items-center gap-2 mt-6">
                <input type="checkbox" checked={holds} onChange={(e) => { setHolds(e.target.checked); touch(); }} />
                I already hold {levelName(level - 1)} in this method
              </label>
            )}
            <label className="text-sm font-semibold">Classroom hours logged
              <input type="number" min={0} value={cls} onChange={(e) => { setCls(Math.max(0, +e.target.value)); touch(); }} className={input} />
            </label>
            <label className="text-sm font-semibold">On-the-job hours logged
              <input type="number" min={0} value={ojt} onChange={(e) => { setOjt(Math.max(0, +e.target.value)); touch(); }} className={input} />
            </label>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-6" role="status" aria-live="polite">
            <div>
              <p className="text-sm text-muted-foreground">Classroom training: {r.req.classroom.toLocaleString()} hours recommended</p>
              <p className="text-2xl font-bold">{r.leftC.toLocaleString()} hours left</p>
              {bar(r.pc)}
              <p className="text-xs text-muted-foreground mt-1">{Math.round(r.pc)}% done</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">On-the-job experience: {r.req.ojt.toLocaleString()} hours recommended</p>
              <p className="text-2xl font-bold">{r.leftO.toLocaleString()} hours left</p>
              {bar(r.po)}
              <p className="text-xs text-muted-foreground mt-1">{Math.round(r.po)}% done</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            {level === 2 && !holds ? `Direct entry: ${levelName(level)} figures include every level below it. ` : ""}
            Recommended minimums as shown in the training requirements matrix. Your employer's written practice sets the binding hours.
          </p>
        </section>

        <ToolArticle t={t} />
      </main>
      <ContactDetails />
    </div>
  );
}
