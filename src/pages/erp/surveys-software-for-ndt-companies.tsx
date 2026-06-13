import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import ContactDetails from "@/components/ContactDetails";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { CheckCircle, ClipboardCheck, ArrowRight, ShieldAlert, Globe, Shield, ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQS: { question: string; answer: string }[] = [
  {
    question: "What is included with Surveys inside Atlantis NDT ERP?",
    answer: "Surveys is bundled inside Atlantis NDT ERP — no per-module licence. Includes: customer satisfaction surveys, internal safety surveys (toolbox-talk attendance, near-miss capture, hazard observation), technician engagement / pulse surveys, and post-inspection feedback. Pre-built NDT-industry templates (HSE, technician engagement, customer NPS for inspection campaigns) ready to clone. Multi-channel delivery — email, SMS, WhatsApp Business API, QR code (toolbox), and embedded link inside customer-facing inspection reports."
  },
  {
    question: "How is Surveys configured for NDT inspection companies specifically?",
    answer: "Templates pre-loaded for inspection-industry use cases: post-shutdown customer NPS, technician HSE survey aligned to OSHA Process Safety Management, near-miss reporting per IADC IRP-7, toolbox-talk attendance with QR-code sign-in, RBI program effectiveness survey, ASNT examination feedback for in-house training. Survey responses route directly into your Helpdesk (for customer issues), CRM (lead intelligence) and HR / Employees (for HSE leading indicators)."
  },
  {
    question: "Can Surveys integrate with our existing systems?",
    answer: "Yes. Bidirectional sync with Microsoft 365, Google Workspace, Slack, Microsoft Teams, WhatsApp Business API. Native integration with the rest of Atlantis NDT ERP (CRM, Helpdesk, HR, Project, Field Service). Public-facing surveys embed on your atlantisndt.com site or customer portal. Open REST API for downstream BI (Power BI, Tableau, Metabase)."
  },
  {
    question: "What does implementation look like for Surveys?",
    answer: "Standard rollout 2–4 weeks. Week 1: identify priority surveys (customer NPS, HSE toolbox, technician pulse), clone from pre-built templates. Week 2: configure routing and escalation logic, set up Slack / WhatsApp delivery channels. Week 3: dry-run with internal cohort, calibrate routing. Week 4: launch with first external cohort, set up KPI dashboard. Customer Success Manager owns the first 12 months."
  },
  {
    question: "Is the data secure and compliant with regional data-protection laws?",
    answer: "Yes. ISO 27001-certified infrastructure with US, EU, UAE, Saudi (in-Kingdom), India and Singapore data residency. GDPR, PDPL, DPDP Act 2023, CCPA / CPRA, PIPEDA, Singapore PDPA compliant. AES-256 at rest, TLS 1.3 in transit. Respondent data never used for AI training, never sold. Anonymous surveys supported for psychological-safety-sensitive data (e.g. HSE near-miss capture)."
  }
];

export default function SurveysSoftwareForNdtCompanies() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <SEOHead
        title="Surveys Software for NDT Companies — Safety & Customer Feedback"
        description="Customer satisfaction, safety surveys, technician feedback in one platform. NDT inspection company-ready templates. ASNT-aligned. Affordable, accessible, fully customizable."
        canonical="/erp/surveys-software-for-ndt-companies"
        faq={FAQS}
      />
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "ERP", href: "/erp" }, { label: "Surveys for NDT Companies" }]} />

        <section className="mt-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Surveys Software for NDT Companies
          </h1>
          <p className="text-xl text-slate-300 mb-6 max-w-3xl leading-relaxed">
            <span className="text-emerald-400 font-semibold">Customer satisfaction, safety surveys, technician feedback</span> — in one platform. Pre-built NDT-industry templates: customer NPS for inspection campaigns, HSE toolbox-talk attendance, near-miss capture, technician engagement. <span className="text-emerald-400 font-semibold">Affordable. Accessible. Fully Customizable.</span>
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-4 py-2 text-emerald-300"><ClipboardCheck className="w-4 h-4" /><span className="font-semibold">Affordable</span></div>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-lg px-4 py-2 text-blue-300"><Shield className="w-4 h-4" /><span className="font-semibold">ASNT / ISO 9712 ready</span></div>
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-lg px-4 py-2 text-purple-300"><Globe className="w-4 h-4" /><span className="font-semibold">Multi-region data residency</span></div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:info@atlantisndt.com?subject=Demo%20request%3A%20Surveys" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">Request a demo <ArrowRight className="w-4 h-4" /></a>
            <Link to="/erp" className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">See the full ERP suite</Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Key features</h2>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-slate-200">
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Pre-built NDT-industry templates (NPS, HSE, technician pulse, RBI effectiveness)</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Multi-channel delivery (email, SMS, WhatsApp, QR code, embedded)</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Anonymous mode for HSE near-miss capture</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Auto-routing of negative NPS to Helpdesk</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>QR-code toolbox-talk attendance with geolocation</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Conditional logic + branching question paths</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Multi-language: EN, AR, FR, ES, HI, BS, ZH</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Real-time dashboards with NPS / eSat trending</span></li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Integrations</h2>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-slate-200">
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Microsoft 365, Google Workspace, Slack, Teams, WhatsApp Business API</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Atlantis CRM, Helpdesk, HR, Project, Field Service</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Power BI, Tableau, Metabase for downstream BI</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Open REST API for custom workflows</span></li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Quote &amp; Onboarding</h2>
          <p className="text-slate-300">Pricing accessible across regions. Quote on request. Demo on request — <a href="mailto:info@atlantisndt.com" className="text-emerald-400 hover:underline">info@atlantisndt.com</a></p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">FAQ</h2>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <button key={i} onClick={() => setOpenIdx(openIdx === i ? null : i)} className="w-full text-left bg-slate-800/50 hover:bg-slate-800 border border-slate-700 rounded-lg p-4 transition-colors">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-semibold text-white">{f.question}</span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform ${openIdx === i ? "rotate-180" : ""}`} />
                </div>
                {openIdx === i && <p className="mt-3 text-slate-300 leading-relaxed">{f.answer}</p>}
              </button>
            ))}
          </div>
        </section>

        <ContactDetails />
      </main>
    </div>
  );
}
