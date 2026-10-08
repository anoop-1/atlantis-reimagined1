/**
 * Day-12 — Enquiry capture form for /erp + /digital-twins hub pages.
 *
 * Captures lead info (name + email + company + use case + message) and POSTs to
 * the EmailJS endpoint already configured in the project (env VITE_EMAILJS_*).
 *
 * Two variants — "erp" + "dt" — render the same form with different copy.
 */
import { useState, useRef, useId, FormEvent } from "react";
import { trackAcceptedEnquiry, trackEngagement } from "@/lib/enquiry-analytics";
import { submitLead, mailtoAction } from "@/lib/lead-submit";
import { MS_FORM_URL } from "@/lib/enquiry-endpoint";

interface Props {
  variant: "erp" | "dt" | "consulting" | "training" | "3d-scanning" | "reporting" | "lms" | "academy" | "practical-ndt";
}

const COPY = {
  // 2026-07-29 rewrite. Previously this copy spoke only to NDT inspection
  // companies and led with product internals and figures. The ERP is a general
  // business management platform — inspection is one of the industries it
  // serves, not its ceiling — and per owner direction the copy carries no
  // numbers of any kind. Positioning: affordable, accessible, fully
  // customizable; call to action is always a conversation, never a price.
  erp: {
    badge: "Free consultation — no obligation",
    title: "Run Your Whole Business on One Affordable, Fully Customizable Platform",
    sub: "Sales, projects, people, stock, field teams, quality and accounts — joined up, and shaped around the way you already work. Affordable. Accessible. Fully customizable. Book a free consultation and we will show you it running on your own workflow.",
    subject: "ERP Enquiry — Atlantis (from /erp)",
    usecasePlaceholder: "What are you trying to fix? Quoting and sales, projects and job costing, field teams, stock, compliance records, or moving off spreadsheets…",
    submitLabel: "Book My Free Consultation",
    trustSignals: [
      "Affordable, accessible and fully customizable — built around your process, not the other way round",
      "One joined-up platform instead of disconnected tools that never agree with each other",
      "Every business app you need included — sales, CRM, projects, inventory, HR, accounts, field service and more",
      "Configured for your industry before you ever log in, then tailored further as you grow",
      "Your data stays yours: open export, documented structure, no lock-in",
      "Free consultation and a quote tailored to your region, team size and scope",
    ],
  },
  dt: {
    badge: "Asset Owner — Free Digital Twin Demo",
    title: "Schedule a Free 30-Min Digital Twin Demo for Your Asset",
    sub: "Affordable. Accessible. Fully Customizable. 3D visualisation of API 510 / 570 / 653 inspection data, thickness trends and damage mapping. ASNT Level III led. Free consultation + tailored quote on request.",
    subject: "Digital Twin Enquiry — Atlantis NDT (from /digital-twins)",
    usecasePlaceholder: "Atlantis ERP has an open REST API, so it connects to SAP, Maximo, NetSuite or any other system that accepts API connections; each integration is scoped with you during implementation.",
    submitLabel: "Schedule My Free DT Demo",
    trustSignals: [
      "Affordable, accessible, fully customizable",
      "API 510/570/653 inspection data + thickness trending",
      "ASNT NDT Level III led implementation",
      "IACS Marine accepted for FPSO + drydock",
      "Free consultation + ROI calc + tailored quote",
    ],
  },
  consulting: {
    badge: "Asset Owner — Free ASNT Level III Consulting Scoping",
    title: "Request a Free ASNT Level III Consulting Scoping Call",
    sub: "Affordable. Accessible. Fully Customizable. ASNT NDT Level III consulting: procedures, written practices, technique sheets, audits and report review, plus business consulting. Free consultation + tailored quote on request.",
    subject: "Consulting Enquiry — Atlantis NDT (from /consulting)",
    usecasePlaceholder: "API 510/570/653 audit prep, NDT procedure and technique sheet development, ASNT written practice authoring, code consulting, ISO 17020 inspection-body alignment, ISO 9712 cert body design…",
    submitLabel: "Request My Free Consulting Call",
    trustSignals: [
      "ASNT NDT Level III lead consultant",
      "Procedures / Audits / Written Practice — all in-house",
      "ISO 17020 + ISO 17025 + ISO 9001 framework",
      "On-site + remote + hybrid delivery models",
      "Free consultation + tailored quote on request",
    ],
  },
  training: {
    badge: "Inspector — Free Training Pathway Consultation",
    title: "Book Your Free Training Pathway Consultation",
    sub: "Affordable. Accessible. Fully Customizable. ASNT NDT Level III-led training under your SNT-TC-1A or CP-189 written practice, with ISO 9712 and NAS 410 pathways.",
    subject: "Training Enquiry — Atlantis NDT (from /training)",
    usecasePlaceholder: "ASNT Level I/II/III (UT/RT/MT/PT/VT/ET/PAUT/TOFD), written practice development, ISO 9712, NAS 410 / EN 4179 aerospace…",
    submitLabel: "Book My Free Pathway Call",
    trustSignals: [
      "ASNT NDT Level III-led delivery",
      "Employer-based certification under SNT-TC-1A / CP-189",
      "On-site cohorts mobilised from Houston or Hyderabad",
      "Online + on-site + hybrid models supported",
      "Free consultation + tailored cert roadmap",
    ],
  },
  "3d-scanning": {
    badge: "Asset Owner — Free 3D Scanning Project Scoping",
    title: "Request a Free 3D Scanning Project Scoping Call",
    sub: "Affordable. Accessible. Fully Customizable. Survey-grade LiDAR + photogrammetry + drone capture. ASNT NDT Level III led. API 653 + 510 + ASME V code-aligned. Free consultation + tailored quote on request.",
    subject: "3D Scanning Enquiry — Atlantis NDT (from /3d-scanning-services)",
    usecasePlaceholder: "Tank settlement (API 653), pressure-vessel deformation (API 510), as-built BIM (IFC + Revit + AutoCAD), FPSO drydock + classification, refinery turnaround pre-scoping, heritage scan…",
    submitLabel: "Request My Free 3D Scan Quote",
    trustSignals: [
      "Survey-grade LiDAR + photogrammetry + drone",
      "ASNT NDT Level III led every delivery",
      "Output: LAS, E57, RCP, RCS, Revit, IFC, AutoCAD",
      "Same-day quote (within 24 hours)",
      "IACS marine + API code-aligned",
    ],
  },
  reporting: {
    badge: "Inspection Lead — Free Reporting Software Demo",
    title: "Get a Free 30-Min Reporting Software Demo",
    sub: "Affordable. Accessible. Fully Customizable. Mobile + offline capture. IACS Marine + API 510/570/653 templates. ASNT NDT Level III led. Free consultation + tailored quote on request.",
    subject: "Reporting Software Enquiry — Atlantis NDT (from /best-ndt-reporting-software-2026)",
    usecasePlaceholder: "Atlantis ERP has an open REST API, so it connects to SAP, Maximo, NetSuite or any other system that accepts API connections; each integration is scoped with you during implementation.",
    submitLabel: "Get My Free Reporting Demo",
    trustSignals: [
      "Mobile + offline-first field capture",
      "IACS Marine + API + ASME V templates",
      "ASNT NDT Level III led implementation",
      "Custom format + multi-language support",
      "Free consultation + tailored quote",
    ],
  },
  lms: {
    badge: "Training Lead — Free Atlantis NDT LMS Demo",
    title: "Schedule a Free Atlantis NDT LMS Demo",
    sub: "Affordable. Accessible. Fully Customizable. ISO 17024 aligned. SCORM + xAPI + Cmi5 content authoring. Multi-site + multi-language rollout. Free consultation + tailored quote on request.",
    subject: "LMS Enquiry — Atlantis NDT (from /lms)",
    usecasePlaceholder: "Atlantis ERP has an open REST API, so it connects to SAP, Maximo, NetSuite or any other system that accepts API connections; each integration is scoped with you during implementation.",
    submitLabel: "Schedule My Free LMS Demo",
    trustSignals: [
      "ISO 17024 personnel cert body aligned",
      "SCORM + xAPI + Cmi5 content authoring",
      "Multi-site + multi-tenant + on-prem options",
      "Native ATS / ERP / HRIS integration",
      "Free consultation + tailored quote",
    ],
  },
  academy: {
    badge: "Inspector — Free Atlantis NDT Academy Consultation",
    title: "Book Your Free Atlantis NDT Academy Consultation",
    sub: "Affordable. Accessible. Fully Customizable. ASNT, ISO 9712 and NAS 410 pathway curation, ASNT NDT Level III-led.",
    subject: "Academy Enquiry — Atlantis NDT (from /atlantis-academy)",
    usecasePlaceholder: "ASNT Level I/II/III pathway, recertification tracking, ISO 9712, NAS 410 / EN 4179 aerospace cert pathway scoping…",
    submitLabel: "Book My Free Academy Call",
    trustSignals: [
      "Multi-scheme pathway curation (ASNT / ISO 9712 / NAS 410)",
      "Recertification calendar tracked per technician",
      "Written practice and records audit-ready",
      "ASNT NDT Level III led delivery",
      "Online + on-site + hybrid models",
    ],
  },
  "practical-ndt": {
    badge: "Trainee or Working Tech — Free Practical NDT Demo",
    title: "Book a Free Practical NDT Simulator Demo",
    sub: "Affordable. Accessible. Fully Customizable. Immersive 3D skills practice for UT, PAUT, RT, MT, PT, VT, ET and TOFD — any skill level. Complements formal ASNT training; does not replace the certifying practical exam. Free consultation + tailored quote on request.",
    subject: "Practical NDT Enquiry — Atlantis NDT (from /practical-ndt)",
    usecasePlaceholder: "New trainee skill-building, refresher practice between assignments, Level III scenario library for a team, supplementing an existing training program…",
    submitLabel: "Book My Free Simulator Demo",
    trustSignals: [
      "Immersive 3D, game-like practice environment",
      "UT, PAUT, RT, MT, PT, VT, ET, TOFD scenarios",
      "Adaptive to any skill level, trainee through Level III",
      "Complements ASNT SNT-TC-1A training — not a certification substitute",
      "Free consultation + tailored quote on request",
    ],
  },
} as const;

const BUSINESS_LINE: Record<Props["variant"], string> = {
  erp: "erp",
  dt: "digital-twins",
  consulting: "consulting",
  training: "training",
  "3d-scanning": "3d-scanning",
  reporting: "reporting",
  lms: "training",
  academy: "training",
  "practical-ndt": "practical-ndt",
};

export default function EnquiryCaptureForm({ variant }: Props) {
  const c = COPY[variant];
  const submitting = useRef(false);
  const uid = "ecf" + useId().replace(/:/g, "");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [usecase, setUsecase] = useState("");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting.current) return;
    // Honeypot: bots fill the hidden "website" field. Pretend success, send nothing.
    const hp = (e.currentTarget.elements.namedItem("website") as HTMLInputElement | null)?.value;
    if (hp) { setStatus("sent"); return; }
    submitting.current = true;
    setStatus("sending");
    try {
      // 2026-09-30: delivery moved to the shared submitLead helper (EmailJS, then
      // the VPS /api/contact relay). generate_lead fires only after a provider
      // accepted the enquiry, with business_line / landing_page / lead_type.
      const result = await submitLead({
        name,
        email,
        company,
        subject: c.subject,
        formId: `enquiry-${variant}`,
        service: variant,
        businessLine: BUSINESS_LINE[variant],
        leadType: variant === "erp" ? "erp_consultation" : "consultation",
        fields: {
          "Use case": usecase,
          Message: message,
          Source: typeof window !== "undefined" ? window.location.pathname : "(unknown page)",
        },
      });
      trackAcceptedEnquiry(result.id, `enquiry-${variant}`, variant, result.method, result.analytics);
      setStatus("sent");
      setName(""); setEmail(""); setCompany(""); setUsecase(""); setMessage("");
    } catch (err) {
      console.error("Enquiry delivery failed", err);
      trackEngagement("enquiry_delivery_failed", { form_id: `enquiry-${variant}` });
      setStatus("error");
    } finally {
      submitting.current = false;
    }
  }

  const color = variant === "erp" ? "amber" : "blue";

  return (
    <section className={`py-20 bg-gradient-to-b from-${color}-50 to-white`}>
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-10">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-${color}-100 text-${color}-900 text-sm font-semibold mb-4`}>
            {c.badge}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{c.title}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{c.sub}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Why businesses choose Atlantis</h3>
            <ul className="space-y-3">
              {c.trustSignals.map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className={`flex-shrink-0 w-6 h-6 rounded-full bg-${color}-500 text-white flex items-center justify-center font-bold text-xs`}>✓</span>
                  <span className="text-foreground/80">{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              <strong>Led by Anoop Rayavarapu</strong> — founder, ASNT NDT Level III, with live deployments across the Americas, Europe, the Middle East, Africa and Asia-Pacific.
            </p>
          </div>

          {status === "sent" ? (
            <div role="status" aria-live="polite" className={`p-6 rounded-xl border-2 border-${color}-300 bg-white`}>
              <h3 className="text-2xl font-bold mb-3 text-green-700">Got it — one more step</h3>
              <p className="text-muted-foreground mb-4">
                Thanks for reaching out. So we can quote accurately and call you prepared, please complete the short enrolment and requirements form — it takes a couple of minutes and tells us methods, levels, headcount and timing.
              </p>
              <a
                href={MS_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-3 rounded-lg bg-green-700 text-white font-semibold hover:bg-green-800 transition-colors"
              >
                Complete your enquiry form →
              </a>
              {variant === "erp" && (
                <p className="mt-4">
                  <a href="/contact?service=erp&subject=Guided%20ERP%20walkthrough" className="font-semibold text-primary underline">
                    Or book a guided ERP walkthrough →
                  </a>
                </p>
              )}
              <p className="text-sm text-muted-foreground mt-4">
                Prefer to talk first? A consultant will call you either way — the form simply means the first call is a useful one.
              </p>
            </div>
          ) : (
            // 2026-09-30: every field is named and the form POSTs to a mailto: action,
            // so a hydration failure still delivers instead of a silent GET to this page.
            <form
              onSubmit={onSubmit}
              method="post"
              action={mailtoAction(c.subject)}
              encType="text/plain"
              name={`enquiry-${variant}`}
              className={`p-6 rounded-xl border-2 border-${color}-200 bg-white space-y-4`}
            >
              <input type="hidden" name="form_id" value={`enquiry-${variant}`} />
              <input type="hidden" name="business_line" value={BUSINESS_LINE[variant]} />
              <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
                <label htmlFor={`${uid}-website`}>Website</label>
                <input id={`${uid}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
              </div>
              <div>
                <label htmlFor={`${uid}-name`} className="block text-sm font-semibold mb-1">Your name *</label>
                <input id={`${uid}-name`} name="name" autoComplete="name" required value={name} onChange={e => setName(e.target.value)} type="text" className={`w-full px-3 py-2 rounded-md border border-${color}-200 focus:border-${color}-500 outline-none`} placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor={`${uid}-email`} className="block text-sm font-semibold mb-1">Work email *</label>
                <input id={`${uid}-email`} name="email" autoComplete="email" required value={email} onChange={e => setEmail(e.target.value)} type="email" className={`w-full px-3 py-2 rounded-md border border-${color}-200 focus:border-${color}-500 outline-none`} placeholder="you@yourcompany.com" />
              </div>
              <div>
                <label htmlFor={`${uid}-company`} className="block text-sm font-semibold mb-1">Company *</label>
                <input id={`${uid}-company`} name="company" autoComplete="organization" required value={company} onChange={e => setCompany(e.target.value)} type="text" className={`w-full px-3 py-2 rounded-md border border-${color}-200 focus:border-${color}-500 outline-none`} placeholder="Your company" />
              </div>
              <div>
                <label htmlFor={`${uid}-usecase`} className="block text-sm font-semibold mb-1">Use case</label>
                <input id={`${uid}-usecase`} name="usecase" value={usecase} onChange={e => setUsecase(e.target.value)} type="text" className={`w-full px-3 py-2 rounded-md border border-${color}-200 focus:border-${color}-500 outline-none`} placeholder={c.usecasePlaceholder} />
              </div>
              <div>
                <label htmlFor={`${uid}-message`} className="block text-sm font-semibold mb-1">Anything else?</label>
                <textarea id={`${uid}-message`} name="message" value={message} onChange={e => setMessage(e.target.value)} rows={3} className={`w-full px-3 py-2 rounded-md border border-${color}-200 focus:border-${color}-500 outline-none`} placeholder="Where you are based, roughly how big the team is, what you use today, and when you would like to move…" />
              </div>
              <button type="submit" disabled={status === "sending"} className={`w-full px-6 py-3 rounded-lg bg-${color}-600 text-white font-semibold hover:bg-${color}-500 transition disabled:opacity-60`}>
                {status === "sending" ? "Sending…" : c.submitLabel}
              </button>
              {status === "error" && (
                <p className="text-sm text-red-600">
                  Something went wrong. Email us directly:{" "}
                  <a href="mailto:info@atlantisndt.com" className={`underline text-${color}-700`}>info@atlantisndt.com</a>
                </p>
              )}
              <p className="text-xs text-muted-foreground text-center">
                Free consultation and a tailored quote. Pricing depends on your region, team size and scope — tell us the shape of it and we will come back with a figure that fits.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
