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
  variant: "erp" | "dt";
}

const COPY = {
  erp: {
    badge: "NDT Inspection Company — Free ERP Consultation",
    title: "Get a Free 30-Min ERP Consultation for Your Inspection Company",
    sub: "Affordable. Accessible. Fully Customizable. 30+ Odoo apps included. ASNT Level III led. Free consultation + tailored quote on request.",
    subject: "ERP Enquiry — Atlantis NDT (from /erp)",
    usecasePlaceholder: "Cert tracking, work orders, calibration, IACS Marine reports, mobile field app, RBI / FFS, migration from Excel / Tally / SAP / Maximo / NetSuite…",
    submitLabel: "Get My Free ERP Consultation",
    trustSignals: [
      "Affordable, accessible, fully customizable",
      "30+ Odoo apps included out of the box",
      "ASNT NDT Level III led implementation",
      "IACS Marine + API 510/570/653 templates ready",
      "Free consultation + tailored quote on request",
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
            <h3 className="text-xl font-bold mb-4">Why operators pick Atlantis NDT</h3>
            <ul className="space-y-3">
              {c.trustSignals.map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className={`flex-shrink-0 w-6 h-6 rounded-full bg-${color}-500 text-white flex items-center justify-center font-bold text-xs`}>✓</span>
                  <span className="text-foreground/80">{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              <strong>Led by Anoop Rayavarapu</strong> — ASNT NDT Level III, API 653 Authorized Inspector, ISO 9001 Lead Auditor. 30+ live deployments worldwide.
            </p>
          </div>

          {status === "sent" ? (
            <div className={`p-6 rounded-xl border-2 border-${color}-300 bg-white`}>
              <h3 className="text-2xl font-bold mb-3 text-green-700">Got it — we&apos;ll be in touch within 24 hours</h3>
              <p className="text-muted-foreground">
                Thanks for the enquiry. Your dedicated consultant will reach out within 1 business day with a tailored quote + a calendar link for your free 30-min consultation.
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
                <input required value={email} onChange={e => setEmail(e.target.value)} type="email" className={`w-full px-3 py-2 rounded-md border border-${color}-200 focus:border-${color}-500 outline-none`} placeholder="you@inspectionco.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Company *</label>
                <input required value={company} onChange={e => setCompany(e.target.value)} type="text" className={`w-full px-3 py-2 rounded-md border border-${color}-200 focus:border-${color}-500 outline-none`} placeholder="Your inspection company / EPC / operator" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Use case</label>
                <input value={usecase} onChange={e => setUsecase(e.target.value)} type="text" className={`w-full px-3 py-2 rounded-md border border-${color}-200 focus:border-${color}-500 outline-none`} placeholder={c.usecasePlaceholder} />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Anything else?</label>
                <textarea value={message} onChange={e => setMessage(e.target.value)} rows={3} className={`w-full px-3 py-2 rounded-md border border-${color}-200 focus:border-${color}-500 outline-none`} placeholder="Region, team size, current stack, target timeline…" />
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
                Free consultation + tailored quote. Pricing varies by region and scope.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
