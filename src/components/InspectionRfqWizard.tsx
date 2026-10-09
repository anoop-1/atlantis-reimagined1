/**
 * Inspection RFQ wizard (INSPECTION-L3, 2026-09-30).
 * Steps: asset type -> method(s) -> location -> applicable code -> target dates
 * -> size/quantity -> deliverable -> contact. Sends a structured lead through
 * the same path as EnquiryCaptureForm (EmailJS -> info@atlantisndt.com), with
 * /api/contact as backup and mailto as last resort. generate_lead fires only on
 * accepted delivery, with business_line='inspection' and lead_type='rfq'.
 * The prerendered HTML carries a static no-JS fallback form with the same field
 * names (scripts/inspection-l3.mjs rfqFallbackForm).
 */
import { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { newEnquiryId, enquiryContext, trackAcceptedEnquiry, trackEngagement, isQualifiedLead } from "@/lib/enquiry-analytics";

// 2026-10-09 sprint (Day 5): a timeline pick (drives routing priority and the
// form-qualified flag) alongside the free-text dates, and a plain statement that
// files are not uploaded here — there is no secure upload store on the site.
const TIMELINES = ["Within 2 weeks", "Within 1-3 months", "Planned turnaround or outage", "Budgeting only"];

const ASSETS = ["Welds (vessel, piping, pipeline or structural)", "Vessel, piping or tank wall", "Aboveground storage tank", "Pressure vessel, process piping or pipeline", "Procedure or technique to be qualified", "Other"];
const METHODS = ["PAUT / TOFD", "Corrosion mapping (AUT / PAUT C-scan)", "API 653 tank NDE (MFL / UT / settlement)", "UT thickness / PAUT / MT / PT / VT", "Procedure qualification / demonstration", "Not sure yet"];

type Fields = {
  asset_type: string; methods: string[]; location: string; applicable_code: string; target_dates: string;
  size_quantity: string; deliverable: string; name: string; email: string; company: string; phone: string; timeline: string;
};
const STEPS = ["Asset", "Method", "Location", "Code", "Dates", "Size", "Deliverable", "Contact"] as const;

export default function InspectionRfqWizard({ defaultMethod = "", defaultAsset = "" }: { defaultMethod?: string; defaultAsset?: string }) {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const submitting = useRef(false);
  const [f, setF] = useState<Fields>({
    asset_type: defaultAsset, methods: defaultMethod ? [defaultMethod] : [], location: "", applicable_code: "", target_dates: "",
    size_quantity: "", deliverable: "", name: "", email: "", company: "", phone: "", timeline: "",
  });
  const set = (k: keyof Fields, v: any) => setF((p) => ({ ...p, [k]: v }));
  const toggleMethod = (m: string) => set("methods", f.methods.includes(m) ? f.methods.filter((x) => x !== m) : [...f.methods, m]);

  const canNext =
    (step === 0 && !!f.asset_type) || (step === 1 && f.methods.length > 0) || (step === 2 && f.location.trim().length > 1) || (step >= 3 && step < 7);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (submitting.current || !f.name.trim() || !f.email.trim()) return;
    submitting.current = true;
    setStatus("sending");
    const enquiryId = newEnquiryId();
    const context = enquiryContext("inspection");
    const method = f.methods.join(", ") || "method not stated";
    const qualified = isQualifiedLead({ email: f.email, company: f.company, stage: f.timeline });
    const subject = `[INSPECTION-RFQ] Inspection RFQ — ${method} — ${f.location || "location not stated"}`;
    const details =
      `Enquiry ID: ${enquiryId}\nPipeline: INSPECTION-RFQ${qualified ? " (form-qualified)" : ""}\nBusiness line: inspection\nLead type: rfq\nLanding page: ${context.landing_path}\nPage: ${context.page_path}\nForm: inspection-rfq\n\n` +
      `Asset type:      ${f.asset_type}\nMethod(s):       ${method}\nLocation:        ${f.location}\nApplicable code: ${f.applicable_code || "(not provided)"}\n` +
      `Timeline:        ${f.timeline || "(not provided)"}\nTarget dates:    ${f.target_dates || "(not provided)"}\nSize/quantity:   ${f.size_quantity || "(not provided)"}\nDeliverable:     ${f.deliverable || "(not provided)"}\n\n` +
      `Name:    ${f.name}\nEmail:   ${f.email}\nCompany: ${f.company || "(not provided)"}\nPhone:   ${f.phone || "(not provided)"}`;
    const extra = { business_line: "inspection", lead_type: "rfq", landing_page: context.landing_path, timeline: f.timeline || "(not stated)" };
    try {
      let delivered = false;
      let via = "emailjs";
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;
      if (serviceId && templateId && publicKey) {
        try {
          await emailjs.send(serviceId, templateId, {
            enquiry_id: enquiryId, ...context, ...extra,
            name: f.name, from_name: f.name, user_name: f.name,
            email: f.email, from_email: f.email, user_email: f.email, reply_to: f.email,
            company: f.company, usecase: `${f.asset_type} / ${method}`,
            subject, message: details, to_email: "info@atlantisndt.com",
          }, { publicKey });
          delivered = true;
        } catch (err) { console.warn("EmailJS failed, trying /api/contact", err); }
      }
      if (!delivered) {
        const [firstName, ...rest] = f.name.trim().split(/\s+/);
        const res = await fetch("/api/contact", {
          method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ firstName, lastName: rest.join(" ") || "-", email: f.email, phone: f.phone, company: f.company, service: "inspection", message: `${subject}\n\n${details}`, enquiryId, target_region: context.target_region, landing_path: context.landing_path, page_path: context.page_path, form_id: "inspection-rfq" }),
        }).catch(() => null);
        const result = res ? await res.json().catch(() => ({} as any)) : {};
        if (res && res.ok && result?.ok) { delivered = true; via = result.fallback || "smtp"; }
      }
      if (!delivered) {
        trackEngagement("email_contact_click", { form_id: "inspection-rfq", method: "mailto_fallback", ...extra });
        window.location.href = `mailto:info@atlantisndt.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(details)}`;
        setStatus("error");
        return;
      }
      trackAcceptedEnquiry(enquiryId, "inspection-rfq", "inspection", via, { ...extra, qualified });
      setStatus("sent");
    } catch (err) {
      console.error("RFQ error", err);
      setStatus("error");
    } finally {
      submitting.current = false;
    }
  }

  const input = "w-full px-3 py-2 rounded-md border border-slate-300 focus:border-blue-600 outline-none";
  if (status === "sent") {
    return (
      <div className="p-6 rounded-xl border-2 border-green-300 bg-white">
        <h3 className="text-2xl font-bold mb-2 text-green-700">RFQ received</h3>
        <p className="text-slate-600">Thanks. We will review the scope and reply by email with questions or a quote. If anything changes, reply to that email or write to info@atlantisndt.com.</p>
      </div>
    );
  }
  return (
    <form id="rfq" onSubmit={onSubmit} name="inspection-rfq" className="scroll-mt-28 p-6 rounded-xl border-2 border-blue-200 bg-white space-y-4" aria-label="Inspection RFQ">
      <h2 className="text-2xl font-bold">Request an inspection quote (RFQ)</h2>
      <p className="text-sm text-slate-500">Step {step + 1} of {STEPS.length}: {STEPS[step]}</p>
      {step === 0 && (
        <fieldset><legend className="font-semibold mb-2">What needs inspecting?</legend>
          {ASSETS.map((a) => (
            <label key={a} className="flex items-center gap-2 py-1"><input type="radio" name="asset_type" value={a} checked={f.asset_type === a} onChange={() => set("asset_type", a)} />{a}</label>
          ))}
        </fieldset>
      )}
      {step === 1 && (
        <fieldset><legend className="font-semibold mb-2">Method(s) — choose any</legend>
          {METHODS.map((m) => (
            <label key={m} className="flex items-center gap-2 py-1"><input type="checkbox" name="methods" value={m} checked={f.methods.includes(m)} onChange={() => toggleMethod(m)} />{m}</label>
          ))}
        </fieldset>
      )}
      {step === 2 && (<label className="block"><span className="font-semibold">Location (site, city, state or province) *</span><input name="location" className={input} value={f.location} onChange={(e) => set("location", e.target.value)} placeholder="Mobilisation: North America" /></label>)}
      {step === 3 && (<label className="block"><span className="font-semibold">Applicable code or specification</span><input name="applicable_code" className={input} value={f.applicable_code} onChange={(e) => set("applicable_code", e.target.value)} placeholder="e.g. ASME VIII, B31.3, AWS D1.1, API 1104, API 510/570/653" /></label>)}
      {step === 4 && (
        <div className="space-y-3">
          <fieldset><legend className="font-semibold mb-2">Timeline</legend>
            {TIMELINES.map((t) => (
              <label key={t} className="flex items-center gap-2 py-1"><input type="radio" name="timeline" value={t} checked={f.timeline === t} onChange={() => set("timeline", t)} />{t}</label>
            ))}
          </fieldset>
          <label className="block"><span className="font-semibold">Target dates</span><input name="target_dates" className={input} value={f.target_dates} onChange={(e) => set("target_dates", e.target.value)} placeholder="Outage window or required-by date" /></label>
        </div>
      )}
      {step === 5 && (<label className="block"><span className="font-semibold">Size / quantity</span><input name="size_quantity" className={input} value={f.size_quantity} onChange={(e) => set("size_quantity", e.target.value)} placeholder="e.g. 40 welds, 3 tanks, 120 CMLs" /></label>)}
      {step === 6 && (<label className="block"><span className="font-semibold">Deliverable needed</span><input name="deliverable" className={input} value={f.deliverable} onChange={(e) => set("deliverable", e.target.value)} placeholder="e.g. report per weld, C-scan + thickness grid, tank floor map" /></label>)}
      {step === 7 && (
        <div className="space-y-3">
          <label className="block"><span className="font-semibold">Your name *</span><input name="name" required className={input} value={f.name} onChange={(e) => set("name", e.target.value)} /></label>
          <label className="block"><span className="font-semibold">Work email *</span><input name="email" type="email" required className={input} value={f.email} onChange={(e) => set("email", e.target.value)} /></label>
          <label className="block"><span className="font-semibold">Company</span><input name="company" className={input} value={f.company} onChange={(e) => set("company", e.target.value)} /></label>
          <label className="block"><span className="font-semibold">Phone (optional)</span><input name="phone" type="tel" className={input} value={f.phone} onChange={(e) => set("phone", e.target.value)} /></label>
        </div>
      )}
      <div className="flex gap-3">
        {step > 0 && <button type="button" onClick={() => setStep(step - 1)} className="px-5 py-2 rounded-lg border border-slate-300">Back</button>}
        {step < 7 ? (
          <button type="button" disabled={!canNext} onClick={() => setStep(step + 1)} className="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold disabled:opacity-50">Next</button>
        ) : (
          <button type="submit" disabled={status === "sending"} className="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold disabled:opacity-60">{status === "sending" ? "Sending…" : "Send RFQ"}</button>
        )}
      </div>
      {status === "error" && <p className="text-sm text-red-600">Could not send automatically. Email the details to <a className="underline" href="mailto:info@atlantisndt.com">info@atlantisndt.com</a>.</p>}
      <p className="text-xs text-slate-500">Drawings, ITPs or previous reports: please don't paste confidential data here. We reply by email, and you can send files in reply so they go straight to our team. No published pricing — quote on request.</p>
    </form>
  );
}
