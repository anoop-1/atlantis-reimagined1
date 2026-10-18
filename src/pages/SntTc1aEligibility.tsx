/**
 * /snt-tc-1a-eligibility — SNT-TC-1A Level I/II eligibility criteria and checker (owner, 2026-10-18).
 * Copy: src/data/training-conversion-2026-10.json. Hours: src/data/snt-tc-1a-hours.json (same
 * source as the hours planner). Checker logic: eligibilityCheck() in
 * src/data/training-conversion-2026-10.mjs; the crawler renders the same page with the tables
 * (eligibilityPageHtml). Screening only: the written practice decides.
 */
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { TrainingCtaBarView } from "@/components/TrainingCtaBar";
import { trackEngagement } from "@/lib/enquiry-analytics";
import data from "@/data/training-conversion-2026-10.json";
import hoursData from "@/data/snt-tc-1a-hours.json";
import {
  LEVELS,
  TRAINING_FAQ_PATH,
  eligibilityCheck,
  eligibilitySchema,
  hoursRows,
  type Hours,
  type TrainingConversion,
} from "@/data/training-conversion-2026-10.mjs";

const DATA = data as unknown as TrainingConversion;
const HOURS = hoursData as unknown as Hours;
const G = DATA.eligibility;
const SCHEMA = eligibilitySchema(DATA);
const ROWS = hoursRows(HOURS);
const LINK = "text-primary underline underline-offset-2 hover:no-underline";
const FIELD = "w-full rounded-lg border border-border bg-background px-3 py-2";

export default function SntTc1aEligibility() {
  const [method, setMethod] = useState(ROWS[0].method);
  const [level, setLevel] = useState("I");
  const [training, setTraining] = useState("");
  const [experience, setExperience] = useState("");
  const [vision, setVision] = useState(false);
  const [checked, setChecked] = useState(false);
  const result = useMemo(
    () => eligibilityCheck(HOURS, { method, level, training, experience, vision }),
    [method, level, training, experience, vision],
  );

  const onCheck = () => {
    setChecked(true);
    if (result) trackEngagement("tool_use", { tool: "snt-tc-1a-eligibility", method, level, ready: result.ready });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SEOHead title={G.title} description={G.description} canonical={`https://atlantisndt.com${G.path}`} structuredData={SCHEMA} />
      <main className="container mx-auto max-w-4xl px-6 pt-24 pb-16">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">{G.h1}</h1>
        <p data-snt-eligibility="2026-10" className="text-lg text-muted-foreground mb-8 leading-relaxed">{G.answer}</p>

        <section id="checker" aria-label={G.checker.h2} className="mb-12 rounded-xl border border-primary/30 bg-card p-6">
          <h2 className="text-2xl font-bold mb-2">{G.checker.h2}</h2>
          <p className="text-muted-foreground mb-5">{G.checker.intro}</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block text-sm font-medium">
              Method
              <select className={`${FIELD} mt-1`} value={method} onChange={(e) => { setMethod(e.target.value); setChecked(false); }}>
                {ROWS.map((r) => <option key={r.method} value={r.method}>{r.name}</option>)}
              </select>
            </label>
            <label className="block text-sm font-medium">
              Level you are aiming for
              <select className={`${FIELD} mt-1`} value={level} onChange={(e) => { setLevel(e.target.value); setChecked(false); }}>
                {LEVELS.map((l) => <option key={l.key} value={l.key}>{l.label}</option>)}
              </select>
            </label>
            <label className="block text-sm font-medium">
              Classroom training hours completed in this method
              <input type="number" min={0} inputMode="numeric" className={`${FIELD} mt-1`} value={training} onChange={(e) => { setTraining(e.target.value); setChecked(false); }} />
            </label>
            <label className="block text-sm font-medium">
              Documented experience hours in this method
              <input type="number" min={0} inputMode="numeric" className={`${FIELD} mt-1`} value={experience} onChange={(e) => { setExperience(e.target.value); setChecked(false); }} />
            </label>
          </div>
          <label className="mt-4 flex items-center gap-2 text-sm">
            <input type="checkbox" checked={vision} onChange={(e) => { setVision(e.target.checked); setChecked(false); }} />
            I have a vision examination from the last 12 months
          </label>
          <button type="button" onClick={onCheck} className="mt-5 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90">
            Check my eligibility
          </button>

          {checked && result && (
            <div role="status" className={`mt-6 rounded-lg border p-4 ${result.ready ? "border-green-600/40 bg-green-50 dark:bg-green-950/30" : "border-amber-500/40 bg-amber-50 dark:bg-amber-950/30"}`}>
              {result.ready ? (
                <p className="font-semibold">
                  You meet the SNT-TC-1A recommended minimums for {result.method} {result.level === "II" ? "Level II" : "Level I"}. The next step is the General, Specific and Practical examinations.
                </p>
              ) : (
                <>
                  <p className="font-semibold mb-2">For {result.method} {result.level === "II" ? "Level II" : "Level I"} you still need:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    {result.missing.map((m) => <li key={m}>{m}</li>)}
                  </ul>
                </>
              )}
              <p className="text-sm text-muted-foreground mt-3">{G.checker.screening}</p>
              <p className="mt-3">
                <Link to={G.contactHref} className={`font-semibold ${LINK}`}>{G.contactLabel}</Link>
              </p>
            </div>
          )}
        </section>

        <section id="hours" aria-label={G.hoursH2} className="mb-10">
          <h2 className="text-2xl font-bold mb-2">{G.hoursH2}</h2>
          <p className="text-muted-foreground mb-4">{G.hoursIntro}</p>
          <div className="overflow-x-auto rounded-xl border bg-card">
            <table className="w-full text-sm">
              <caption className="text-left font-semibold p-3">SNT-TC-1A recommended minimum hours (training / experience)</caption>
              <thead className="bg-muted/50">
                <tr>
                  {["Method", "Level I training", "Level I experience", "Level II training (additional)", "Level II experience (additional)", "Direct to Level II (training / experience)"].map((h) => (
                    <th key={h} scope="col" className="text-left p-3 border-t">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.method} className="border-t">
                    <th scope="row" className="text-left p-3 font-medium">{r.name}</th>
                    <td className="p-3">{r.t1}</td>
                    <td className="p-3">{r.e1}</td>
                    <td className="p-3">{r.t2}</td>
                    <td className="p-3">{r.e2}</td>
                    <td className="p-3">{r.tTotal} / {r.eTotal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {G.sections.map((s) => (
          <section key={s.h2} aria-label={s.h2} className="mb-10">
            <h2 className="text-2xl font-bold mb-3">{s.h2}</h2>
            {(s.paragraphs || []).map((p) => <p key={p} className="mb-3 leading-relaxed">{p}</p>)}
            {s.list && (
              <ul className="list-disc pl-6 space-y-2">
                {s.list.map((x) => <li key={x} className="leading-relaxed">{x}</li>)}
              </ul>
            )}
          </section>
        ))}

        <p className="mb-6 leading-relaxed">
          <a href={G.asntLevel3Href} className={LINK} rel="noopener" target="_blank">ASNT NDT Level III eligibility requirements</a> ·{" "}
          <Link to="/tools/snt-tc-1a-hours-planner" className={LINK}>SNT-TC-1A hours planner</Link> ·{" "}
          <Link to={TRAINING_FAQ_PATH} className={LINK}>Training FAQs</Link> ·{" "}
          <Link to={G.contactHref} className={LINK}>{G.contactLabel}</Link>
        </p>
        <TrainingCtaBarView path={G.path} />
      </main>
    </div>
  );
}
