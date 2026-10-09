/**
 * Short demo / enquiry form shared by the 2026-10-09 sprint tools
 * (ERP configurator, Digital Twin sample report, UT A-scan demo, Level III paths,
 * training pathway).
 *
 * Delivery goes through submitLead (EmailJS -> info@atlantisndt.com, then the VPS
 * /api/contact relay). The business GA4 event (erp_demo_request,
 * digital_twin_demo_request, ndt_simulation_demo_request, training_enquiry,
 * training_enrolment, level3_consulting_enquiry) and qualified_lead fire inside
 * trackAcceptedEnquiry, i.e. only after a provider has accepted the enquiry.
 * Without JavaScript the form posts to a mailto: action, like every other lead form.
 */
import { FormEvent, useId, useRef, useState } from "react";
import { trackAcceptedEnquiry, trackEngagement } from "@/lib/enquiry-analytics";
import { submitLead, mailtoAction } from "@/lib/lead-submit";

export interface DemoChoice {
  name: string;
  label: string;
  choices: string[];
}

interface Props {
  formId: string;
  service: string;
  businessLine: string;
  leadType: string;
  subject: string;
  heading: string;
  intro?: string;
  submitLabel: string;
  /** Extra labelled lines written into the email (e.g. the configurator plan). */
  context?: Record<string, string>;
  /** One optional single-choice question (e.g. standalone vs inside the ERP). */
  choice?: DemoChoice;
  defaultChoice?: string;
  /** Lead type to use when the visitor picks this stage (e.g. training enrolment). */
  stageLeadType?: { match: RegExp; leadType: string };
  stages?: string[];
  successText?: string;
  successLink?: { href: string; label: string; external?: boolean };
  /** Optional extra single-choice questions rendered as selects. */
  selects?: DemoChoice[];
  stageLabel?: string;
}

const DEFAULT_STAGES = ["Ready to start, within this quarter", "Comparing options", "Just researching"];

export default function DemoRequestForm(p: Props) {
  const uid = "drf" + useId().replace(/:/g, "");
  const submitting = useRef(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [choice, setChoice] = useState(p.defaultChoice || "");
  const stages = p.stages || DEFAULT_STAGES;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting.current) return;
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    if (get("website")) { setStatus("sent"); return; } // honeypot
    submitting.current = true;
    setStatus("sending");
    const stage = get("stage");
    const leadType = p.stageLeadType && p.stageLeadType.match.test(stage) ? p.stageLeadType.leadType : p.leadType;
    try {
      const result = await submitLead({
        name: get("name"),
        email: get("email"),
        company: get("company"),
        subject: p.subject,
        formId: p.formId,
        service: p.service,
        businessLine: p.businessLine,
        leadType,
        stage,
        fields: {
          ...(p.choice ? { [p.choice.label]: choice } : {}),
          ...Object.fromEntries((p.selects || []).map((sel) => [sel.label, get(sel.name)])),
          Stage: stage,
          ...(p.context || {}),
          Message: get("message"),
        },
      });
      trackAcceptedEnquiry(result.id, p.formId, p.service, result.method, {
        ...result.analytics,
        ...(p.choice && choice ? { [p.choice.name]: choice } : {}),
      });
      setStatus("sent");
    } catch (err) {
      console.error("Demo request delivery failed", err);
      trackEngagement("enquiry_delivery_failed", { form_id: p.formId });
      setStatus("error");
    } finally {
      submitting.current = false;
    }
  }

  const input = "w-full rounded-md border border-border bg-background px-3 py-2 outline-none focus:border-primary";

  if (status === "sent") {
    return (
      <div role="status" aria-live="polite" className="rounded-xl border-2 border-green-600 bg-card p-6">
        <h3 className="text-xl font-bold text-green-700 mb-2">Thanks, we have your request</h3>
        <p className="text-muted-foreground">
          {p.successText || "We reply within one business day from info@atlantisndt.com to agree a time. Reply to that email with anything you want us to look at first."}
        </p>
        {p.successLink && (
          <a
            href={p.successLink.href}
            {...(p.successLink.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="mt-4 inline-block rounded-lg bg-green-700 px-5 py-3 font-semibold text-white hover:bg-green-800"
          >
            {p.successLink.label} →
          </a>
        )}
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      method="post"
      action={mailtoAction(p.subject)}
      encType="text/plain"
      name={p.formId}
      className="rounded-xl border-2 border-primary/30 bg-card p-6 space-y-4"
    >
      <div>
        <h3 className="text-xl font-bold">{p.heading}</h3>
        {p.intro && <p className="text-sm text-muted-foreground mt-1">{p.intro}</p>}
      </div>
      <input type="hidden" name="form_id" value={p.formId} />
      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
        <label htmlFor={`${uid}-website`}>Website</label>
        <input id={`${uid}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>
      {p.choice && (
        <fieldset>
          <legend className="text-sm font-semibold mb-2">{p.choice.label}</legend>
          <div className="grid sm:grid-cols-2 gap-2">
            {p.choice.choices.map((c) => (
              <label key={c} className={`rounded-lg border px-3 py-2 text-sm cursor-pointer ${choice === c ? "border-primary bg-primary/5" : "border-border"}`}>
                <input type="radio" name={p.choice!.name} value={c} checked={choice === c} onChange={() => setChoice(c)} className="mr-2" />
                {c}
              </label>
            ))}
          </div>
        </fieldset>
      )}
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label htmlFor={`${uid}-name`} className="block text-sm font-semibold mb-1">Your name *</label>
          <input id={`${uid}-name`} name="name" required autoComplete="name" className={input} />
        </div>
        <div>
          <label htmlFor={`${uid}-email`} className="block text-sm font-semibold mb-1">Work email *</label>
          <input id={`${uid}-email`} name="email" type="email" required autoComplete="email" className={input} />
        </div>
        <div>
          <label htmlFor={`${uid}-company`} className="block text-sm font-semibold mb-1">Company</label>
          <input id={`${uid}-company`} name="company" autoComplete="organization" className={input} />
        </div>
        <div>
          <label htmlFor={`${uid}-stage`} className="block text-sm font-semibold mb-1">{p.stageLabel || "Timeline"}</label>
          <select id={`${uid}-stage`} name="stage" className={input} defaultValue="">
            <option value="">Choose (optional)</option>
            {stages.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>
      {(p.selects || []).map((sel) => (
        <div key={sel.name}>
          <label htmlFor={`${uid}-${sel.name}`} className="block text-sm font-semibold mb-1">{sel.label}</label>
          <select id={`${uid}-${sel.name}`} name={sel.name} className={input} defaultValue="">
            <option value="">Choose (optional)</option>
            {sel.choices.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      ))}
      <div>
        <label htmlFor={`${uid}-message`} className="block text-sm font-semibold mb-1">Anything we should know? (optional)</label>
        <textarea id={`${uid}-message`} name="message" rows={2} className={input} />
      </div>
      {p.context && Object.entries(p.context).map(([k, v]) => (
        <input key={k} type="hidden" name={k} value={v} />
      ))}
      <button type="submit" disabled={status === "sending"} className="w-full rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground hover:opacity-90 disabled:opacity-60">
        {status === "sending" ? "Sending…" : p.submitLabel}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Email us directly: <a className="underline" href="mailto:info@atlantisndt.com">info@atlantisndt.com</a>
        </p>
      )}
      <p className="text-xs text-muted-foreground">No obligation. We use your details only to reply to this request.</p>
    </form>
  );
}
