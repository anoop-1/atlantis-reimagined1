/**
 * ERP decision experience — 2026-09-30 (/erp rebuild, audit plan item 9).
 *
 * Every capability shown here comes from src/data/erp-decision.json, which is
 * written only from erp-apps-catalog.json + the FEATURE FACTS in
 * scripts/erp-apps-content-brief.md. No prices and no budget bands anywhere.
 * The crawler layer carries the same content as static HTML
 * (scripts/erp-rebuild-route.mjs); these components are the interactive version.
 */
import { useEffect, useMemo, useRef, useState } from "react";
import DemoRequestForm from "@/components/sprint/DemoRequestForm";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import decision from "@/data/erp-decision.json";
import catalog from "@/data/erp-apps-catalog.json";
import { trackEngagement } from "@/lib/enquiry-analytics";

type App = { slug: string; name: string; blurb: string };
const APPS: Record<string, App> = Object.fromEntries(
  (catalog.apps as App[]).map((a) => [a.slug, a]),
);
const appName = (slug: string) => APPS[slug]?.name ?? slug;
const appHref = (slug: string) => `/erp/apps/${slug}`;

export const WALKTHROUGH_HREF = decision.walkthroughHref;

function AppChips({ slugs }: { slugs: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {slugs.map((s) => (
        <li key={s}>
          <Link
            to={appHref(s)}
            className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-sm font-medium text-primary hover:bg-primary/10"
          >
            {appName(s)}
          </Link>
        </li>
      ))}
    </ul>
  );
}

/* ── b. "What are you trying to fix?" ──────────────────────────────────── */
export function ErpProblemSelector({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState(decision.problems[0].key);
  const p = decision.problems.find((x) => x.key === active) ?? decision.problems[0];
  const choose = (key: string) => {
    setActive(key);
    trackEngagement("erp_selector_choice", { choice: key, compact });
  };
  return (
    <section id={compact ? "erp-fix-compact" : "erp-fix"} className={compact ? "py-10" : "py-16 scroll-mt-24"}>
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className={compact ? "text-2xl font-bold mb-2" : "text-3xl md:text-4xl font-bold mb-3 text-center"}>
          What are you trying to fix?
        </h2>
        <p className={compact ? "text-muted-foreground mb-5" : "text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto"}>
          Pick the problem that costs you most. We show the apps that handle it and what changes.
        </p>
        <div role="tablist" aria-label="What are you trying to fix?" className="flex flex-wrap gap-2 mb-6 justify-center">
          {decision.problems.map((x) => (
            <button
              key={x.key}
              type="button"
              role="tab"
              aria-selected={x.key === active}
              onClick={() => choose(x.key)}
              className={`rounded-lg px-4 py-2 text-sm font-semibold border transition ${
                x.key === active ? "bg-primary text-primary-foreground border-primary" : "bg-card text-foreground border-border hover:border-primary"
              }`}
            >
              {x.label}
            </button>
          ))}
        </div>
        <div role="tabpanel" className="rounded-xl border bg-card p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-2">{p.label}</h3>
          <p className="text-muted-foreground mb-2"><strong className="text-foreground">The problem:</strong> {p.problem}</p>
          <p className="text-muted-foreground mb-4"><strong className="text-foreground">What changes:</strong> {p.solves}</p>
          <p className="text-sm font-semibold mb-2">Apps that handle it</p>
          <AppChips slugs={p.apps} />
          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <Link
              to={`${WALKTHROUGH_HREF}%20-%20${encodeURIComponent(p.label)}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground hover:opacity-90"
            >
              Book a guided walkthrough <ArrowRight className="w-4 h-4" />
            </Link>
            {compact ? (
              <Link to="/erp#erp-fix" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary px-5 py-3 font-semibold text-primary hover:bg-primary/10">
                See the full module guide
              </Link>
            ) : (
              <a href="#erp-configurator" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary px-5 py-3 font-semibold text-primary hover:bg-primary/10">
                Build my module plan
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── c. 5-question operations maturity assessment (ungated) ────────────── */
export function ErpMaturityAssessment() {
  const qs = decision.assessment.questions;
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const done = qs.every((q) => answers[q.key] !== undefined);
  const score = qs.reduce((n, q) => n + (answers[q.key] ?? 0), 0);
  const band = decision.assessment.bands.find((b) => score >= b.min && score <= b.max) ?? decision.assessment.bands[0];
  // Weakest areas first: answers scored 0, then 1.
  const start = qs
    .filter((q) => (answers[q.key] ?? 0) < 2)
    .sort((a, b) => (answers[a.key] ?? 0) - (answers[b.key] ?? 0))
    .map((q) => q.module);

  const pick = (key: string, value: number) => {
    const next = { ...answers, [key]: value };
    setAnswers(next);
    if (qs.every((q) => next[q.key] !== undefined)) {
      trackEngagement("erp_assessment_complete", { score: qs.reduce((n, q) => n + (next[q.key] ?? 0), 0) });
    }
  };

  return (
    <section id="erp-assessment" className="py-16 bg-secondary/30 scroll-mt-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">Operations maturity assessment</h2>
        <p className="text-lg text-muted-foreground mb-8 text-center">{decision.assessment.intro}</p>
        <ol className="space-y-5">
          {qs.map((q, qi) => (
            <li key={q.key} className="rounded-xl border bg-card p-5">
              <fieldset>
                <legend className="font-semibold mb-3">{qi + 1}. {q.q}</legend>
                <div className="grid gap-2">
                  {q.options.map((opt, oi) => (
                    <label key={oi} className={`flex items-start gap-3 rounded-lg border px-3 py-2 cursor-pointer ${answers[q.key] === oi ? "border-primary bg-primary/5" : "border-border"}`}>
                      <input
                        type="radio"
                        name={`erp-assess-${q.key}`}
                        value={oi}
                        checked={answers[q.key] === oi}
                        onChange={() => pick(q.key, oi)}
                        className="mt-1"
                      />
                      <span className="text-sm">{opt}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </li>
          ))}
        </ol>
        <div role="status" aria-live="polite" className="mt-8">
          {done ? (
            <div className="rounded-xl border-2 border-primary bg-card p-6">
              <p className="text-sm font-semibold text-primary mb-1">Your result: {score} out of 10</p>
              <h3 className="text-2xl font-bold mb-2">{band.label}</h3>
              <p className="text-muted-foreground mb-4">{band.text}</p>
              {start.length > 0 ? (
                <>
                  <p className="text-sm font-semibold mb-2">Recommended starting modules</p>
                  <AppChips slugs={Array.from(new Set(start))} />
                </>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Your records are in good shape. Look at connecting field reports to <Link className="text-primary underline" to={appHref("invoicing")}>Invoicing</Link> and <Link className="text-primary underline" to={appHref("dashboards")}>Dashboards</Link>.
                </p>
              )}
            </div>
          ) : (
            <p className="text-center text-sm text-muted-foreground">Answer all five questions to see your result.</p>
          )}
        </div>
      </div>
    </section>
  );
}

/* ── d. ERP workflow configurator (no prices, timeline as a range) ───────
 * 2026-10-09 sprint (Day 4): four inputs the plan asked for — current workflow,
 * modules, company size, main challenge — plus the methods already here. The
 * plan appears only once workflow + challenge are chosen (that is the
 * erp_configurator_complete moment); erp_configurator_start fires on the first
 * answer. Useful output comes BEFORE any contact request: start-here modules,
 * rollout phases, migration notes and what to prepare. The visitor can copy or
 * download the summary, or send it with a demo request (erp_demo_request fires
 * on accepted delivery, centrally). No numerals in any new ERP copy. */
type Workflow = { key: string; label: string; note: string; prepare: string[] };

export function ErpModuleConfigurator() {
  const cfg = decision.configurator as typeof decision.configurator & { workflows: Workflow[] };
  const [workflow, setWorkflow] = useState("");
  const [challenge, setChallenge] = useState("");
  const [crew, setCrew] = useState(cfg.crewBands[0].key);
  const [methods, setMethods] = useState<string[]>(["UT"]);
  const [needs, setNeeds] = useState<string[]>(["certification"]);
  const [showForm, setShowForm] = useState(false);
  const [copied, setCopied] = useState(false);
  const started = useRef(false);
  const completed = useRef(false);
  const toggle = (list: string[], v: string) => (list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);

  const touch = (field: string) => {
    if (started.current) return;
    started.current = true;
    trackEngagement("erp_configurator_start", { first_field: field });
  };

  const plan = useMemo(() => {
    const wanted = new Set<string>(["employees"]);
    const challengeApps = decision.problems.find((p) => p.key === challenge)?.apps ?? [];
    challengeApps.forEach((a) => wanted.add(a));
    for (const n of needs) decision.problems.find((p) => p.key === n)?.apps.forEach((a) => wanted.add(a));
    // Several methods means several procedures and report types to control.
    if (methods.length >= 3) wanted.add("procedures");
    if (methods.length) wanted.add("ndt-reports");
    // Fleet records whether a vehicle can carry radioactive sources.
    if (methods.includes("RT")) wanted.add("fleet");
    const phases = cfg.phases
      .map((ph) => ({ ...ph, picked: ph.apps.filter((a) => wanted.has(a)) }))
      .filter((ph) => ph.picked.length > 0);
    // Owner (2026-10-01): typical total implementation is 2 to 4 weeks.
    const [lo, hi] = cfg.totalWeeks;
    const startHere = challengeApps.filter((a) => a !== "dashboards").slice(0, 3);
    return { phases, lo, hi, startHere };
  }, [crew, methods, needs, challenge, cfg]);

  const wf = cfg.workflows.find((w) => w.key === workflow);
  const ch = decision.problems.find((p) => p.key === challenge);
  const crewLabel = cfg.crewBands.find((b) => b.key === crew)?.label ?? crew;
  const ready = Boolean(wf && ch);

  useEffect(() => {
    if (ready && !completed.current) {
      completed.current = true;
      trackEngagement("erp_configurator_complete", { workflow, challenge, crew, needs: needs.join(","), methods: methods.join(",") });
    }
  }, [ready, workflow, challenge, crew, needs, methods]);

  const summary = useMemo(() => {
    if (!wf || !ch) return "";
    const lines = [
      "Atlantis ERP — your rollout plan (from atlantisndt.com/erp)",
      "",
      `Today: ${wf.label}`,
      `Biggest challenge: ${ch.label}`,
      `Crew size: ${crewLabel}`,
      `Methods: ${methods.join(", ") || "not stated"}`,
      `Areas wanted: ${needs.map((n) => decision.problems.find((p) => p.key === n)?.label ?? n).join(", ") || "not stated"}`,
      "",
      `Start here: ${plan.startHere.map(appName).join(", ")}`,
      ...plan.phases.map((ph) => `${ph.label}: ${ph.picked.map(appName).join(", ")}`),
      "",
      `Moving from ${wf.label.toLowerCase()}: ${wf.note}`,
      `Have ready for kickoff: ${wf.prepare.join("; ")}`,
      `Typical implementation: ${plan.lo} to ${plan.hi} weeks. ${cfg.timelineNote}`,
    ];
    return lines.join("\n");
  }, [wf, ch, crewLabel, methods, needs, plan, cfg.timelineNote]);

  const copySummary = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch { /* clipboard blocked: the download button still works */ }
    trackEngagement("erp_configurator_summary", { action: "copy" });
  };
  const downloadSummary = () => {
    const blob = new Blob([summary], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "atlantis-erp-rollout-plan.txt";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    trackEngagement("erp_configurator_summary", { action: "download" });
  };

  const pill = (on: boolean) => `rounded-lg border px-3 py-2 text-sm cursor-pointer ${on ? "border-primary bg-primary/5" : "border-border"}`;

  return (
    <section id="erp-configurator" className="py-16 scroll-mt-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">ERP workflow configurator</h2>
        <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">{cfg.intro}</p>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <fieldset>
              <legend className="font-semibold mb-2">How do you run it today?</legend>
              <div className="grid sm:grid-cols-2 gap-2">
                {cfg.workflows.map((w) => (
                  <label key={w.key} className={pill(workflow === w.key)}>
                    <input type="radio" name="erp-cfg-workflow" value={w.key} checked={workflow === w.key} onChange={() => { touch("workflow"); setWorkflow(w.key); }} className="mr-2" />
                    {w.label}
                  </label>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className="font-semibold mb-2">Your biggest challenge right now</legend>
              <div className="grid sm:grid-cols-2 gap-2">
                {decision.problems.map((p) => (
                  <label key={p.key} className={pill(challenge === p.key)}>
                    <input type="radio" name="erp-cfg-challenge" value={p.key} checked={challenge === p.key} onChange={() => { touch("challenge"); setChallenge(p.key); }} className="mr-2" />
                    {p.label}
                  </label>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className="font-semibold mb-2">Crew size</legend>
              <div className="grid grid-cols-2 gap-2">
                {cfg.crewBands.map((b) => (
                  <label key={b.key} className={pill(crew === b.key)}>
                    <input type="radio" name="erp-cfg-crew" value={b.key} checked={crew === b.key} onChange={() => { touch("crew"); setCrew(b.key); }} className="mr-2" />
                    {b.label}
                  </label>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className="font-semibold mb-2">Methods you run</legend>
              <div className="flex flex-wrap gap-2">
                {cfg.methods.map((m) => (
                  <label key={m} className={`rounded-lg border px-3 py-1.5 text-sm cursor-pointer ${methods.includes(m) ? "border-primary bg-primary/5" : "border-border"}`}>
                    <input type="checkbox" name="erp-cfg-methods" value={m} checked={methods.includes(m)} onChange={() => { touch("methods"); setMethods(toggle(methods, m)); }} className="mr-1.5" />
                    {m}
                  </label>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className="font-semibold mb-2">Modules you want covered</legend>
              <div className="grid sm:grid-cols-2 gap-2">
                {decision.problems.map((p) => (
                  <label key={p.key} className={pill(needs.includes(p.key))}>
                    <input type="checkbox" name="erp-cfg-needs" value={p.key} checked={needs.includes(p.key)} onChange={() => { touch("modules"); setNeeds(toggle(needs, p.key)); }} className="mr-2" />
                    {p.label}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
          <div role="status" aria-live="polite" className="rounded-xl border-2 border-primary/40 bg-card p-6">
            {!ready ? (
              <div className="text-center py-10">
                <h3 className="text-xl font-bold mb-2">Your rollout plan</h3>
                <p className="text-muted-foreground">Choose how you work today and your biggest challenge to see where to start, the rollout order and what to prepare.</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold mb-4">Your rollout plan</h3>
                <p className="text-sm font-semibold text-primary mb-2">Start here — fixes {ch!.label.toLowerCase()} first</p>
                <AppChips slugs={plan.startHere} />
                <ol className="space-y-4 mt-5">
                  {plan.phases.map((ph) => (
                    <li key={ph.key}>
                      <p className="font-semibold">{ph.label}</p>
                      <AppChips slugs={ph.picked} />
                    </li>
                  ))}
                </ol>
                <div className="mt-5 rounded-lg bg-secondary/40 p-4">
                  <p className="font-semibold mb-1">Moving from {wf!.label.toLowerCase()}</p>
                  <p className="text-sm text-muted-foreground mb-2">{wf!.note}</p>
                  <p className="text-sm font-semibold">Have ready for kickoff</p>
                  <ul className="text-sm text-muted-foreground list-disc pl-5">
                    {wf!.prepare.map((x) => <li key={x}>{x}</li>)}
                  </ul>
                </div>
                <p className="mt-5 font-semibold">Typical implementation: {plan.lo} to {plan.hi} weeks</p>
                <p className="text-sm text-muted-foreground">{cfg.timelineNote}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <button type="button" onClick={() => { setShowForm(true); trackEngagement("erp_configurator_demo_open", { workflow, challenge }); }} className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground hover:opacity-90">
                    Request a demo of this plan <ArrowRight className="w-4 h-4" />
                  </button>
                  <button type="button" onClick={copySummary} className="rounded-lg border-2 border-primary px-4 py-3 font-semibold text-primary hover:bg-primary/10">
                    {copied ? "Copied" : "Copy summary"}
                  </button>
                  <button type="button" onClick={downloadSummary} className="rounded-lg border-2 border-primary px-4 py-3 font-semibold text-primary hover:bg-primary/10">
                    Download summary
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
        {ready && showForm && (
          <div className="mt-8 max-w-2xl mx-auto">
            <DemoRequestForm
              formId="erp-configurator"
              service="erp"
              businessLine="erp"
              leadType="erp_demo_request"
              subject="ERP demo request (configurator plan)"
              heading="Request a demo of this plan"
              intro="We will show these modules running on an NDT workflow like yours. Your plan is sent with the request."
              submitLabel="Send my demo request"
              context={{ "Configurator plan": summary }}
            />
          </div>
        )}
      </div>
    </section>
  );
}

/* ── e. Guided sample workflow (step diagram, no fake UI) ─────────────── */
export function ErpSampleWorkflow() {
  return (
    <section id="erp-workflow" className="py-16 bg-secondary/30 scroll-mt-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">One job, start to finish</h2>
        <p className="text-lg text-muted-foreground mb-10 text-center max-w-3xl mx-auto">
          A sample inspection job as it moves through the ERP, from the request to the invoice.
        </p>
        <ol className="grid md:grid-cols-5 gap-4">
          {decision.workflow.map((w, i) => (
            <li key={w.step} className="relative rounded-xl border bg-card p-5">
              <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">{i + 1}</span>
              <h3 className="font-bold mb-2">{w.step}</h3>
              <p className="text-sm text-muted-foreground mb-3">{w.text}</p>
              <Link to={appHref(w.app)} className="text-sm font-semibold text-primary hover:underline">{appName(w.app)} app</Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ── h. Standalone products that are also ERP modules ──────────────────── */
export function ErpProductsAsModules() {
  return (
    <section id="erp-products" className="py-16">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Two products that also run inside the ERP</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {decision.products.map((p) => (
            <div key={p.name} className="rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3">{p.name}</h3>
              <p className="text-muted-foreground mb-2"><strong className="text-foreground">On its own:</strong> {p.standalone}</p>
              <p className="text-muted-foreground mb-4"><strong className="text-foreground">As an ERP module:</strong> {p.asModule}</p>
              <div className="flex flex-wrap gap-4 text-sm font-semibold">
                <Link to={p.path} className="text-primary hover:underline">Explore {p.name}</Link>
                <Link to={appHref(p.app)} className="text-primary hover:underline">{appName(p.app)} app</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── f. Security & data hosting (verifiable, generic where unverified) ── */
export function ErpSecurity() {
  return (
    <section id="erp-security" className="py-16 bg-secondary/30 scroll-mt-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Security and data hosting</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {decision.security.map((s) => (
            <div key={s.h} className="flex gap-3 rounded-xl border bg-card p-5">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">{s.h}</h3>
                <p className="text-sm text-muted-foreground">{s.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
