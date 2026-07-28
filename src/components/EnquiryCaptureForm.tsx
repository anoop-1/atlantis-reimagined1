/**
 * Day-12 — Enquiry capture form for /erp + /digital-twins hub pages.
 *
 * Captures lead info (name + email + company + use case + message) and POSTs to
 * the EmailJS endpoint already configured in the project (env VITE_EMAILJS_*).
 *
 * Two variants — "erp" + "dt" — render the same form with different copy.
 */
import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

interface Props {
  variant: "erp" | "dt" | "consulting" | "training" | "3d-scanning" | "reporting" | "lms" | "academy";
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
    sub: "Affordable. Accessible. Fully Customizable. API 510 / 570 / 653 + API 579 FFS + API 581 RBI integrated. ASNT Level III led. Free consultation + tailored quote on request.",
    subject: "Digital Twin Enquiry — Atlantis NDT (from /digital-twins)",
    usecasePlaceholder: "Tank inspection (API 653), pressure vessel (API 510), pipeline integrity (API 570), FFS (API 579), RBI (API 581), fleet dashboard, ILI integration, AVEVA / Cognite / Bentley migration…",
    submitLabel: "Schedule My Free DT Demo",
    trustSignals: [
      "Affordable, accessible, fully customizable",
      "API 510/570/653 + 579 FFS + 581 RBI integrated",
      "ASNT NDT Level III led implementation",
      "IACS Marine accepted for FPSO + drydock",
      "Free consultation + ROI calc + tailored quote",
    ],
  },
  consulting: {
    badge: "Asset Owner — Free ASNT Level III Consulting Scoping",
    title: "Request a Free ASNT Level III Consulting Scoping Call",
    sub: "Affordable. Accessible. Fully Customizable. ASNT NDT Level III + API ICP-certified consultants. RBI, FFS, code consulting, audit prep, written practice authoring. Free consultation + tailored quote on request.",
    subject: "Consulting Enquiry — Atlantis NDT (from /consulting)",
    usecasePlaceholder: "API 510/570/653 audit prep, RBI per API 581, FFS per API 579, ASNT written practice authoring, code consulting, ISO 17020 inspection-body alignment, ISO 9712 cert body design…",
    submitLabel: "Request My Free Consulting Call",
    trustSignals: [
      "ASNT NDT Level III + API ICP certified",
      "RBI / FFS / Audit / Written Practice — all in-house",
      "ISO 17020 + ISO 17025 + ISO 9001 framework",
      "On-site + remote + hybrid delivery models",
      "Free consultation + tailored quote on request",
    ],
  },
  training: {
    badge: "Inspector — Free Training Pathway Consultation",
    title: "Book Your Free Training Pathway Consultation",
    sub: "Affordable. Accessible. Fully Customizable. ASNT NDT Level III-led training. 96% first-pass rate. Free retake-grade backstop. ASNT + ISO 9712 + API ICP + AWS CWI + NACE CIP + CSWIP pathways.",
    subject: "Training Enquiry — Atlantis NDT (from /training)",
    usecasePlaceholder: "ASNT Level I/II/III (UT/RT/MT/PT/VT/ET/PAUT/TOFD), API 510/570/580/653/936/1169, AWS CWI/SCWI, NACE CIP, CSWIP 3.1/3.2, PCN UK, ACCP, NAS 410, EN 4179 aerospace…",
    submitLabel: "Book My Free Pathway Call",
    trustSignals: [
      "ASNT NDT Level III-led delivery",
      "96% first-pass rate across cohorts since 2019",
      "Free retake-grade backstop on every paid course",
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
    usecasePlaceholder: "Mobile + offline field capture, IACS Marine reports, API 510/570/653 templates, NACE CIP coating inspection, custom client formats, EmailJS / SAP / Maximo integration…",
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
    usecasePlaceholder: "Enterprise inspector training program, cohort tracking, ISO 17024 cert-body alignment, multi-site rollout, SCORM/xAPI content migration, SAP SuccessFactors / Workday / Cornerstone integration…",
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
    sub: "Affordable. Accessible. Fully Customizable. Full ASNT + ISO 9712 + API + AWS + NACE + CSWIP pathway. 96% first-pass rate. Free retake-grade backstop on every paid course.",
    subject: "Academy Enquiry — Atlantis NDT (from /atlantis-academy)",
    usecasePlaceholder: "ASNT Level I/II/III pathway, API ICP recertification, AWS CWI/SCWI, NACE CIP, CSWIP 3.1/3.2, PCN, ACCP, NAS 410, EN 4179 aerospace cert pathway scoping…",
    submitLabel: "Book My Free Academy Call",
    trustSignals: [
      "Full multi-scheme pathway (ASNT/ISO/API/AWS/NACE)",
      "96% first-pass rate across cohorts",
      "Free retake-grade backstop",
      "ASNT NDT Level III led delivery",
      "Online + on-site + hybrid models",
    ],
  },
} as const;

export default function EnquiryCaptureForm({ variant }: Props) {
  const c = COPY[variant];
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [usecase, setUsecase] = useState("");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;
      if (!serviceId || !templateId || !publicKey) {
        console.error("EmailJS env vars missing — fallback mailto");
        window.location.href = `mailto:info@atlantisndt.com?subject=${encodeURIComponent(c.subject)}&body=${encodeURIComponent(
          `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nUse case: ${usecase}\nMessage: ${message}`,
        )}`;
        setStatus("sent");
        return;
      }
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          from_email: email,
          company,
          usecase,
          message,
          subject: c.subject,
          to_email: "info@atlantisndt.com",
        },
        { publicKey },
      );
      setStatus("sent");
      setName(""); setEmail(""); setCompany(""); setUsecase(""); setMessage("");
    } catch (err) {
      console.error("EmailJS error", err);
      setStatus("error");
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
              <strong>Led by Anoop Rayavarapu</strong> — founder, ISO 9001 Lead Auditor, with live deployments across the Americas, Europe, the Middle East, Africa and Asia-Pacific.
            </p>
          </div>

          {status === "sent" ? (
            <div className={`p-6 rounded-xl border-2 border-${color}-300 bg-white`}>
              <h3 className="text-2xl font-bold mb-3 text-green-700">Got it — we&apos;ll be in touch shortly</h3>
              <p className="text-muted-foreground">
                Thanks for reaching out. A consultant will contact you shortly with a tailored quote and a calendar link for your free consultation — no obligation, and nothing to install first.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className={`p-6 rounded-xl border-2 border-${color}-200 bg-white space-y-4`}>
              <div>
                <label className="block text-sm font-semibold mb-1">Your name *</label>
                <input required value={name} onChange={e => setName(e.target.value)} type="text" className={`w-full px-3 py-2 rounded-md border border-${color}-200 focus:border-${color}-500 outline-none`} placeholder="Anoop Rayavarapu" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Work email *</label>
                <input required value={email} onChange={e => setEmail(e.target.value)} type="email" className={`w-full px-3 py-2 rounded-md border border-${color}-200 focus:border-${color}-500 outline-none`} placeholder="you@yourcompany.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Company *</label>
                <input required value={company} onChange={e => setCompany(e.target.value)} type="text" className={`w-full px-3 py-2 rounded-md border border-${color}-200 focus:border-${color}-500 outline-none`} placeholder="Your company" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Use case</label>
                <input value={usecase} onChange={e => setUsecase(e.target.value)} type="text" className={`w-full px-3 py-2 rounded-md border border-${color}-200 focus:border-${color}-500 outline-none`} placeholder={c.usecasePlaceholder} />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Anything else?</label>
                <textarea value={message} onChange={e => setMessage(e.target.value)} rows={3} className={`w-full px-3 py-2 rounded-md border border-${color}-200 focus:border-${color}-500 outline-none`} placeholder="Where you are based, roughly how big the team is, what you use today, and when you would like to move…" />
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
