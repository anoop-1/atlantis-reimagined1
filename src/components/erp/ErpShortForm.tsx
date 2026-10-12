/**
 * The ONE inline enquiry form on /erp — 2026-09-30.
 *
 * Five named fields (name, company, email, need, crew_size). Delivery goes
 * through submitLead (EmailJS, then the VPS /api/contact relay); generate_lead
 * fires only after a provider accepted it, with business_line='erp',
 * landing_page and lead_type. Without JavaScript the form POSTs to a mailto:
 * action (enctype text/plain), so a hydration failure still delivers.
 * The success step offers "book a guided walkthrough" via /contact.
 */
import { FormEvent, useId, useRef, useState } from "react";
import { Link } from "react-router-dom";
import decision from "@/data/erp-decision.json";
import { trackAcceptedEnquiry, trackEngagement } from "@/lib/enquiry-analytics";
import { submitLead, mailtoAction } from "@/lib/lead-submit";

const SUBJECT = "ERP enquiry (from /erp)";

export default function ErpShortForm({ id = "erp-enquiry", trial = false }: { id?: string; trial?: boolean }) {
  const formId = trial ? "erp-trial" : "erp-short";
  const subject = trial ? "14-day ERP trial request" : SUBJECT;
  const uid = "erpf" + useId().replace(/:/g, "");
  const submitting = useRef(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting.current) return;
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    if (get("website")) { setStatus("sent"); return; } // honeypot: send nothing
    submitting.current = true;
    setStatus("sending");
    const needKey = get("need");
    const need = decision.problems.find((p) => p.key === needKey)?.label || needKey;
    try {
      const result = await submitLead({
        name: get("name"),
        email: get("email"),
        company: get("company"),
        subject,
        formId,
        service: "erp",
        businessLine: "erp",
        leadType: trial ? "erp_trial_request" : "erp_walkthrough_request",
        fields: { "Wants to fix": need, "Crew size": get("crew_size") },
      });
      trackAcceptedEnquiry(result.id, formId, "erp", result.method, { ...result.analytics, need: needKey });
      setStatus("sent");
    } catch (err) {
      console.error("ERP enquiry delivery failed", err);
      trackEngagement("enquiry_delivery_failed", { form_id: formId });
      setStatus("error");
    } finally {
      submitting.current = false;
    }
  }

  const input = "w-full rounded-md border border-border bg-background px-3 py-2 outline-none focus:border-primary";

  return (
    <section id={id} className="py-16 scroll-mt-24">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-3xl font-bold mb-2 text-center">{trial ? "Request your 14-day ERP trial" : decision.form.heading}</h2>
        <p className="text-muted-foreground mb-6 text-center">{trial ? "Tell us your priority workflow. We will confirm trial access and setup details before you begin." : decision.form.sub}</p>
        {status === "sent" ? (
          <div role="status" aria-live="polite" className="rounded-xl border-2 border-green-600 bg-card p-6 text-center">
            <h3 className="text-2xl font-bold text-green-700 mb-2">Thanks, we have your enquiry</h3>
            <p className="text-muted-foreground mb-5">
              {trial ? "Your trial request has been received. We will contact you to confirm the scope, access and start date." : "We reply within one business day. You can also request a guided walkthrough of the apps you picked on an NDT workflow."}
            </p>
            <Link
              to={decision.walkthroughHref}
              onClick={() => trackEngagement("erp_walkthrough_after_submit")}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90"
            >
              Book a guided walkthrough
            </Link>
          </div>
        ) : (
          <form
            name={formId}
            method="post"
            action={mailtoAction(subject)}
            encType="text/plain"
            onSubmit={onSubmit}
            className="space-y-4 rounded-xl border-2 border-primary/30 bg-card p-6"
          >
            <input type="hidden" name="form_id" value={formId} />
            <input type="hidden" name="business_line" value="erp" />
            <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
              <label htmlFor={`${uid}-website`}>Website</label>
              <input id={`${uid}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor={`${uid}-name`} className="block text-sm font-semibold mb-1">Name *</label>
                <input id={`${uid}-name`} name="name" type="text" required autoComplete="name" className={input} />
              </div>
              <div>
                <label htmlFor={`${uid}-company`} className="block text-sm font-semibold mb-1">Company *</label>
                <input id={`${uid}-company`} name="company" type="text" required autoComplete="organization" className={input} />
              </div>
            </div>
            <div>
              <label htmlFor={`${uid}-email`} className="block text-sm font-semibold mb-1">Work email *</label>
              <input id={`${uid}-email`} name="email" type="email" required autoComplete="email" className={input} />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor={`${uid}-need`} className="block text-sm font-semibold mb-1">What do you want to fix? *</label>
                <select id={`${uid}-need`} name="need" required defaultValue="" className={input}>
                  <option value="" disabled>Choose one</option>
                  {decision.problems.map((p) => (
                    <option key={p.key} value={p.key}>{p.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor={`${uid}-crew`} className="block text-sm font-semibold mb-1">Crew size *</label>
                <select id={`${uid}-crew`} name="crew_size" required defaultValue="" className={input}>
                  <option value="" disabled>Choose one</option>
                  {decision.form.crewOptions.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90 disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : trial ? "Request my 14-day trial" : "Send my enquiry"}
            </button>
            {status === "error" && (
              <p role="alert" className="text-sm text-red-600">
                That did not go through. Email us at{" "}
                <a href="mailto:info@atlantisndt.com" className="underline">info@atlantisndt.com</a> or use the{" "}
                <Link to={decision.walkthroughHref} className="underline">contact page</Link>.
              </p>
            )}
            <p className="text-xs text-muted-foreground text-center">No obligation. Quote on request, shaped to your scope.</p>
          </form>
        )}
      </div>
    </section>
  );
}
