// Intent-matched lead magnet cards (2026-09-29). Mounted via LeadMagnetSlot.
//
//   mock_exam  name, email, method, level, employer -> reveals the full existing
//              question bank (with answer explanations) as a timed mock exam.
//   gap_check  company, name, email, technicians, methods -> free written-practice
//              gap check by an ASNT Level III (Anoop Rayavarapu).
//   career     no form: Level II -> Level III path, links to /asnt-level-iii-training
//              and a pre-filled /contact.
//
// Delivery: EmailJS to info@atlantisndt.com, the same path as EnquiryCaptureForm
// and Contact (CLAUDE.md §45.1). Every field is also written into `message`
// because that is the one variable the EmailJS template is known to render.
// Measurement: generate_lead with lead_magnet on accepted submit;
// contact_cta_click with cta_variant on CTA clicks.
//
// Honesty rules held: no question counts are promised before the bank is shown
// (the runner displays the real count of the bank it loaded), no pass rates, no
// prices. Where no longer bank exists for a method (VT, ET), the card promises
// only what the owner can fulfil: an ASNT Level III follows up with study guidance.
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import rules from "@/data/lead-magnets.json";
import { enquiryContext, leadMetaLines, newEnquiryId, trackAcceptedEnquiry, trackEngagement } from "@/lib/enquiry-analytics";
import {
  GAP_CHECK_SUBJECT, LEAD_MODULES, LeadMagnetKind, LeadMagnetMatch, METHOD_OPTIONS,
  contactLink, mockExamSubject, rememberLeadMagnet,
} from "@/lib/lead-magnets";

const BANK_FOR = rules.banks as Record<string, string>;
const RELATED = rules.relatedSets as Record<string, string[]>;

const TITLE_FOR_PATH: Record<string, string> = {
  "/asnt-level-iii-training": "ASNT Level III training",
};
function relatedLabel(path: string): string {
  if (TITLE_FOR_PATH[path]) return TITLE_FOR_PATH[path];
  const slug = path.split("/").pop() || path;
  return slug
    .replace(/-2026-free-mock-exam$/, " — mock exam format guide")
    .replace(/-/g, " ")
    .replace(/\b(ut|rt|mt|pt|vt|et|paut|tofd|asnt)\b/gi, (m) => m.toUpperCase())
    .replace(/^./, (c) => c.toUpperCase());
}

interface Bank { source: string; questions: Array<{ q: string; options: Array<{ key: string; text: string }>; answer: string; explanation: string }> }

async function sendLead(kind: LeadMagnetKind, subject: string, service: string, fields: Array<[string, string]>, replyTo: string, name: string) {
  const enquiryId = newEnquiryId();
  const context = enquiryContext(service);
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;
  const body = fields.map(([k, v]) => `${k}: ${v || "(not provided)"}`).join("\n");
  if (!serviceId || !templateId || !publicKey) {
    window.location.href = `mailto:info@atlantisndt.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    trackEngagement("email_contact_click", { form_id: `lead-magnet-${kind}`, method: "mailto_fallback", lead_magnet: kind });
    return false;
  }
  const details =
    `Enquiry ID: ${enquiryId}\nLead magnet: ${kind}\nService: ${context.service}\nRegion: ${context.target_region}\n` +
    `Page: ${context.page_path}\nForm: lead-magnet-${kind}\n` + leadMetaLines(service, `lead-magnet-${kind}`) + `\n${body}`;
  const company = fields.find(([k]) => k === "Company" || k === "Employer")?.[1] || "";
  await emailjs.send(
    serviceId,
    templateId,
    {
      enquiry_id: enquiryId,
      ...context,
      name, from_name: name, user_name: name,
      email: replyTo, from_email: replyTo, user_email: replyTo, reply_to: replyTo,
      company: company || "(not provided)",
      usecase: subject,
      subject,
      message: details,
      to_email: "info@atlantisndt.com",
    },
    { publicKey },
  );
  trackAcceptedEnquiry(enquiryId, `lead-magnet-${kind}`, service, "emailjs", { lead_magnet: kind });
  return true;
}

const input = "w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20";
const label = "mb-1 block text-sm font-semibold text-slate-800";
const btn = "inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 font-semibold text-primary-foreground transition-colors hover:bg-primary-dark disabled:opacity-60";

function Shell({ kind, eyebrow, title, sub, children }: { kind: LeadMagnetKind; eyebrow: string; title: string; sub: string; children: React.ReactNode }) {
  return (
    <section id="lead-magnet" data-lead-magnet-card={kind} aria-label={title}
      className="my-12 scroll-mt-24 rounded-2xl border border-primary/25 bg-gradient-to-b from-blue-50 to-white p-6 text-left shadow-sm md:p-8">
      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">{eyebrow}</p>
      <h2 className="mb-2 text-2xl font-bold text-slate-900 md:text-3xl">{title}</h2>
      <p className="mb-6 max-w-3xl text-slate-700">{sub}</p>
      {children}
    </section>
  );
}

function ErrorNote() {
  return (
    <p className="text-sm text-red-600">
      Something went wrong sending that. Email us at{" "}
      <a href="mailto:info@atlantisndt.com" className="underline">info@atlantisndt.com</a> and we will pick it up.
    </p>
  );
}

// ─── mock_exam ──────────────────────────────────────────────────────────────
function MockExamRunner({ bank }: { bank: Bank }) {
  const total = bank.questions.length;
  const seconds = total * 90; // 90 s per question — the pacing the UT prep material recommends
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [started, setStarted] = useState(false);
  const [left, setLeft] = useState(seconds);
  const [checked, setChecked] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (!started || checked) return;
    timer.current = window.setInterval(() => setLeft((s) => (s <= 1 ? 0 : s - 1)), 1000);
    return () => { if (timer.current) window.clearInterval(timer.current); };
  }, [started, checked]);
  useEffect(() => { if (started && left === 0 && !checked) setChecked(true); }, [left, started, checked]);

  const score = useMemo(() => bank.questions.reduce((n, q, i) => n + (answers[i] === q.answer ? 1 : 0), 0), [answers, bank]);
  const mm = String(Math.floor(left / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");

  return (
    <div className="mt-6">
      <div className="sticky top-16 z-10 mb-4 flex flex-wrap items-center gap-3 rounded-lg border border-slate-200 bg-white/95 px-4 py-3 backdrop-blur">
        <span className="font-semibold text-slate-900">{total} questions</span>
        <span className="text-slate-600">Timed at 90 s per question</span>
        <span className={`ml-auto font-mono text-lg ${left < 300 && started && !checked ? "text-red-600" : "text-slate-900"}`} aria-live="polite">{mm}:{ss}</span>
        {!started && <button type="button" className={btn} onClick={() => setStarted(true)}>Start timed attempt</button>}
        {started && !checked && <button type="button" className={btn} onClick={() => setChecked(true)}>Finish &amp; check answers</button>}
        {checked && (
          <span className="font-semibold text-slate-900">
            Score: {score} / {total}
          </span>
        )}
      </div>
      <ol className="space-y-5">
        {bank.questions.map((q, i) => {
          const chosen = answers[i];
          return (
            <li key={i} className="rounded-lg border border-slate-200 bg-white p-4">
              <p className="mb-3 font-semibold text-slate-900">{i + 1}. {q.q}</p>
              <div className="space-y-1.5">
                {q.options.map((o) => {
                  const right = checked && o.key === q.answer;
                  const wrong = checked && chosen === o.key && o.key !== q.answer;
                  return (
                    <label key={o.key} className={`flex cursor-pointer items-start gap-2 rounded px-2 py-1 ${right ? "bg-green-50 text-green-900" : wrong ? "bg-red-50 text-red-900" : ""}`}>
                      <input type="radio" name={`q${i}`} value={o.key} disabled={checked} checked={chosen === o.key}
                        onChange={() => { setAnswers((a) => ({ ...a, [i]: o.key })); if (!started) setStarted(true); }} className="mt-1" />
                      <span><strong>{o.key}.</strong> {o.text}</span>
                    </label>
                  );
                })}
              </div>
              {checked && (
                <p className="mt-3 text-sm text-slate-700">
                  <strong>Answer: {q.answer}.</strong> {q.explanation}
                </p>
              )}
            </li>
          );
        })}
      </ol>
      <p className="mt-4 text-xs text-slate-500">
        Practice questions support study; they are not official ASNT examination questions.
      </p>
    </div>
  );
}

function MockExamCard({ match }: { match: LeadMagnetMatch }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [method, setMethod] = useState(match.method || "ut");
  const [level, setLevel] = useState(match.level || "2");
  const [employer, setEmployer] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [bank, setBank] = useState<Bank | null>(null);
  const busy = useRef(false);

  const bankKey = method === "l3" || level === "3" ? BANK_FOR.l3 : BANK_FOR[method];
  const hasBank = Boolean(match.bank);
  const methodName = METHOD_OPTIONS.find((m) => m.code === method)?.name || (method === "l3" ? "ASNT Level III Basic" : method.toUpperCase());

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (busy.current) return;
    busy.current = true;
    setStatus("sending");
    try {
      const ok = await sendLead("mock_exam", mockExamSubject(method, level), "training", [
        ["Name", name], ["Email", email], ["Method", methodName], ["Level", `Level ${level}`], ["Employer", employer],
      ], email, name);
      if (!ok) { setStatus("error"); return; }
      setStatus("sent");
      if (bankKey) {
        const banks = (await import("@/data/lead-magnet-banks.json")).default as Record<string, Bank>;
        setBank(banks[bankKey] || null);
      }
    } catch (err) {
      console.error("Lead magnet send failed", err);
      setStatus("error");
    } finally {
      busy.current = false;
    }
  }

  const related = (RELATED[method] || match.related || []).filter((p) => p !== (typeof window !== "undefined" ? window.location.pathname : ""));

  return (
    <Shell
      kind="mock_exam"
      eyebrow="Free — for Level II candidates"
      title={hasBank ? "Get the full timed mock exam + answer explanations" : `Get ${match.methodName || "Level II"} study guidance from an ASNT Level III`}
      sub={hasBank
        ? "Tell us your method and level. The full question set opens right here as a timed attempt with every answer explained, and an ASNT Level III will follow up with study guidance for your exam."
        : "Tell us your method and level and an ASNT Level III will follow up with study guidance for your exam. The related question sets below open straight away."}
    >
      {status === "sent" ? (
        <div>
          <p className="rounded-lg bg-green-50 px-4 py-3 text-green-900">
            Thanks{name ? `, ${name.split(" ")[0]}` : ""} — it's on its way to our team. An ASNT Level III will follow up by email with study guidance for {methodName} Level {level}.
          </p>
          {bank && <MockExamRunner bank={bank} />}
          {!bank && bankKey && <p className="mt-4 text-slate-600">Loading the question set…</p>}
          {related.length > 0 && (
            <div className="mt-6">
              <h3 className="mb-2 font-semibold text-slate-900">More {method === "l3" ? "Level III" : method.toUpperCase()} question sets on this site</h3>
              <ul className="list-disc space-y-1 pl-5">
                {related.map((p) => <li key={p}><Link to={p} className="text-primary underline">{relatedLabel(p)}</Link></li>)}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <form onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2">
          <div><label className={label} htmlFor="lm-name">Your name *</label><input id="lm-name" required className={input} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" /></div>
          <div><label className={label} htmlFor="lm-email">Email *</label><input id="lm-email" required type="email" className={input} value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" /></div>
          <div>
            <label className={label} htmlFor="lm-method">Method *</label>
            <select id="lm-method" className={input} value={method} onChange={(e) => setMethod(e.target.value)}>
              {METHOD_OPTIONS.map((m) => <option key={m.code} value={m.code}>{m.name}</option>)}
              <option value="l3">ASNT Level III Basic</option>
            </select>
          </div>
          <div>
            <label className={label} htmlFor="lm-level">Level *</label>
            <select id="lm-level" className={input} value={level} onChange={(e) => setLevel(e.target.value)}>
              <option value="1">Level I</option><option value="2">Level II</option><option value="3">Level III</option>
            </select>
          </div>
          <div className="md:col-span-2"><label className={label} htmlFor="lm-employer">Employer (optional)</label><input id="lm-employer" className={input} value={employer} onChange={(e) => setEmployer(e.target.value)} autoComplete="organization" /></div>
          <div className="flex flex-wrap items-center gap-4 md:col-span-2">
            <button type="submit" className={btn} disabled={status === "sending"}>{status === "sending" ? "Sending…" : bankKey ? "Open the full mock exam" : "Request study guidance"}</button>
            <span className="text-xs text-slate-500">We use your email only to follow up on this request.</span>
          </div>
          {status === "error" && <div className="md:col-span-2"><ErrorNote /></div>}
        </form>
      )}
    </Shell>
  );
}

// ─── gap_check ──────────────────────────────────────────────────────────────
const GAP_METHODS = ["UT", "RT", "MT", "PT", "VT", "ET", "PAUT", "TOFD", "Other"];

function GapCheckCard() {
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [techs, setTechs] = useState("");
  const [methods, setMethods] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const busy = useRef(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (busy.current) return;
    busy.current = true;
    setStatus("sending");
    try {
      const ok = await sendLead("gap_check", GAP_CHECK_SUBJECT, "consulting", [
        ["Company", company], ["Name", name], ["Email", email], ["Technicians", techs], ["Methods", methods.join(", ")],
      ], email, name);
      setStatus(ok ? "sent" : "error");
    } catch (err) {
      console.error("Lead magnet send failed", err);
      setStatus("error");
    } finally {
      busy.current = false;
    }
  }

  return (
    <Shell
      kind="gap_check"
      eyebrow="Free — for employers certifying under SNT-TC-1A"
      title="Free written-practice gap check by an ASNT Level III"
      sub="Send us the basics and Anoop Rayavarapu, ASNT NDT Level III, will check your written practice against SNT-TC-1A — training and experience hours, exam composition, vision exams, recertification and Level III responsibilities — and tell you where the gaps are."
    >
      {status === "sent" ? (
        <div className="space-y-3">
          <p className="rounded-lg bg-green-50 px-4 py-3 text-green-900">
            Thanks — request received. We will reply by email to arrange the review; have your current written practice (PDF or Word) to hand.
          </p>
          <p className="text-slate-700">
            Useful meanwhile: the <Link to="/resources/training-requirements-matrix" className="text-primary underline">training requirements matrix</Link> and
            the <Link to="/resources/ndt-written-practice-template" className="text-primary underline">written practice template</Link>.
          </p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2">
          <div><label className={label} htmlFor="gc-company">Company *</label><input id="gc-company" required className={input} value={company} onChange={(e) => setCompany(e.target.value)} autoComplete="organization" /></div>
          <div><label className={label} htmlFor="gc-name">Your name *</label><input id="gc-name" required className={input} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" /></div>
          <div><label className={label} htmlFor="gc-email">Work email *</label><input id="gc-email" required type="email" className={input} value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" /></div>
          <div>
            <label className={label} htmlFor="gc-techs">Number of technicians *</label>
            <select id="gc-techs" required className={input} value={techs} onChange={(e) => setTechs(e.target.value)}>
              <option value="">Select</option><option>1–5</option><option>6–20</option><option>21–50</option><option>51–200</option><option>200+</option>
            </select>
          </div>
          <fieldset className="md:col-span-2">
            <legend className={label}>Methods covered</legend>
            <div className="flex flex-wrap gap-2">
              {GAP_METHODS.map((m) => {
                const on = methods.includes(m);
                return (
                  <label key={m} className={`cursor-pointer rounded-full border px-3 py-1 text-sm ${on ? "border-primary bg-primary text-primary-foreground" : "border-slate-300 bg-white text-slate-700"}`}>
                    <input type="checkbox" className="sr-only" checked={on} onChange={() => setMethods((ms) => on ? ms.filter((x) => x !== m) : [...ms, m])} />
                    {m}
                  </label>
                );
              })}
            </div>
          </fieldset>
          <div className="flex flex-wrap items-center gap-4 md:col-span-2">
            <button type="submit" className={btn} disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Request my gap check"}</button>
            <Link to={contactLink("consulting", GAP_CHECK_SUBJECT)} data-cta-variant="gap_check_contact" data-lead-magnet="gap_check" className="text-sm text-primary underline">Prefer to talk first?</Link>
          </div>
          {status === "error" && <div className="md:col-span-2"><ErrorNote /></div>}
        </form>
      )}
    </Shell>
  );
}

// ─── career ─────────────────────────────────────────────────────────────────
// Link-only commercial modules (career, inspection_consult, method_training). Copy and
// links live in src/data/lead-magnets.json so the static prerender block is identical.
// /contact links are tracked by GA4EventTracker (contact_cta_click + cta_variant); other
// links fire contact_cta_click here with their own cta_variant.
const SECONDARY = "inline-flex items-center justify-center rounded-lg border border-primary px-5 py-2.5 font-semibold text-primary transition-colors hover:bg-primary/5";
function ModuleCard({ kind }: { kind: LeadMagnetKind }) {
  const mod = LEAD_MODULES[kind];
  if (!mod) return null;
  return (
    <Shell kind={kind} eyebrow={mod.eyebrow} title={mod.title} sub={mod.sub}>
      <div className="flex flex-wrap gap-3">
        {mod.links.map((l) => {
          const isContact = l.href.startsWith("/contact");
          return (
            <Link
              key={l.href}
              to={l.href}
              data-cta-variant={l.variant}
              data-lead-magnet={kind}
              className={l.primary ? btn : SECONDARY}
              onClick={isContact ? undefined : () => {
                rememberLeadMagnet(kind);
                trackEngagement("contact_cta_click", { service: kind === "inspection_consult" ? "inspection" : "training", cta_variant: l.variant, lead_magnet: kind, destination_path: l.href });
              }}
            >
              {l.label}
            </Link>
          );
        })}
      </div>
    </Shell>
  );
}

export default function LeadMagnet({ match, placement }: { match: LeadMagnetMatch; placement: "inline" | "footer" }) {
  const body = match.kind === "mock_exam" ? <MockExamCard match={match} /> : match.kind === "gap_check" ? <GapCheckCard /> : <ModuleCard kind={match.kind} />;
  // The footer slot sits outside any page container, so give it one.
  return placement === "footer" ? <div className="container mx-auto max-w-5xl px-6">{body}</div> : body;
}
