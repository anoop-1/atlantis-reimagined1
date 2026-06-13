import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import ContactDetails from "@/components/ContactDetails";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { CheckCircle, Zap, ArrowRight, ClipboardList, Globe, Shield, ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQS: { question: string; answer: string }[] = [
  {
    question: "What is included with Inspection Procedures inside Atlantis NDT ERP?",
    answer: "Procedures is the document-control engine for NDT-method procedures (UT-001-2026, RT-002, PAUT-001 style). Bundled, not a separate licence. You get a full write → review → approve → publish → revise workflow with traceable signatures, automated revision numbering, customer flow-down distribution, and code-clause cross-referencing to ASME Section V, API 510 / 570 / 653, AWS D1.1 / D1.5, ISO 9712, ISO 17636 and EN 13018. The library starts with code-aligned templates so day-one engineering does not start from a blank page."
  },
  {
    question: "How is Procedures configured for NDT inspection companies specifically?",
    answer: "We pre-load NDT-method procedure skeletons — UT-PA-001 (Phased Array), UT-001 (conventional), RT-001 (gamma), RT-002 (X-ray), MT-001 (yoke), MT-002 (prods), PT-001 (visible solvent removable), VT-001 (direct), ET-001 (surface), TOFD-001. Each skeleton is code-cited (ASME V Article 2 / 4 / 6 / 7 / 8 / 23, API 5L / 1104, AWS D1.1 Sec 6). The variables block (probe, frequency, couplant, calibration block, acceptance criteria) is pre-structured so Level III review focuses on substance, not formatting."
  },
  {
    question: "Can Procedures integrate with our existing customer flow-down systems?",
    answer: "Yes. Customer-procedure-flow-down support lets you map an internal procedure (UT-001-2026) to the customer-required document number (e.g. Aramco SAEP-1112-UT-A or ADNOC AIM-NDT-002). On approval, the procedure auto-routes to the right customer portal (Aramco APQS, ADNOC Tejari, Achilles, Avetta, ISNetworld) or to a customer SharePoint endpoint. SAP DMS, IBM Maximo Document Management and OpenText eDOCS sync also supported."
  },
  {
    question: "What does implementation look like for Procedures?",
    answer: "Typical onboarding 4–8 weeks depending on procedure-library size. Week 1: import existing procedures (Word, PDF, legacy QMS). Week 2: map to code clauses + customer flow-down identifiers. Week 3: configure review/approval workflow (typically Author → Level III review → QA Manager → CEO sign-off). Weeks 4–6: train authors, reviewers, signatories. Week 7–8: parallel-run with old QMS, then cutover. Customer Success Manager owns first 12 months."
  },
  {
    question: "Is the data secure and audit-ready for ISO 17020 / accreditation?",
    answer: "Yes. ISO 27001-certified hosting. Multi-region data residency (US, EU, UAE, KSA, India, Singapore). AES-256 / TLS 1.3. Full immutable revision history per ISO 9001:2015 / ISO 17020 / ISO/IEC 17025 audit requirements. Digital signatures with timestamping (TSA-compliant). GDPR, PDPL, DPDP, CCPA, PIPEDA, Singapore PDPA compliant. Procedures are NEVER used for AI training."
  }
];

export default function InspectionProceduresManagementSoftware() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <SEOHead
        title="Inspection Procedure Management Software — UT/RT/PT/MT/PAUT | Atlantis NDT"
        description="Write, review, approve, and version-control NDT procedures. UT/RT/MT/PT/VT/ET/PAUT/TOFD coverage. Code-aligned (ASME, API, AWS). Customer flow-down ready. Affordable, accessible, fully customizable. Demo on request."
        canonical="/erp/inspection-procedures-management-software"
        faq={FAQS}
      />
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "ERP", href: "/erp" }, { label: "Inspection Procedures" }]} />

        {/* ─── HERO ─────────────────────────────────────────── */}
        <section className="mt-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Inspection Procedure Management Software
          </h1>
          <p className="text-xl text-slate-300 mb-6 max-w-3xl leading-relaxed">
            Write, review, approve, and version-control NDT procedures. <span className="text-emerald-400 font-semibold">UT / RT / MT / PT / VT / ET / PAUT / TOFD</span> coverage. Code-aligned (ASME, API, AWS). Customer flow-down ready. <span className="text-emerald-400 font-semibold">Affordable. Accessible. Fully Customizable.</span>
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-4 py-2 text-emerald-300">
              <ClipboardList className="w-4 h-4" />
              <span className="font-semibold">Affordable</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-lg px-4 py-2 text-blue-300">
              <Shield className="w-4 h-4" />
              <span className="font-semibold">ASNT / ISO 9712 ready</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-lg px-4 py-2 text-purple-300">
              <Globe className="w-4 h-4" />
              <span className="font-semibold">Multi-region data residency</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:info@atlantisndt.com?subject=Demo%20request%3A%20Procedures%20Management"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Request a demo <ArrowRight className="w-4 h-4" />
            </a>
            <Link to="/erp" className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              See the full ERP suite
            </Link>
          </div>
        </section>

        {/* ─── WHAT IT IS ───────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">What is Procedures inside Atlantis NDT ERP?</h2>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-slate-300 leading-relaxed">
              Procedures is the controlled-document workflow for every NDT procedure (UT-001-2026, RT-002, PAUT-PA-001, TOFD-001, MT-001, PT-001 etc.) that your inspection company is required to have under ASNT SNT-TC-1A, ISO 9712, your customer flow-downs and your accreditation scope (ISO 17020 / ISO/IEC 17025 / PED / SANAS / DAC / ENAC / NABL). It lives inside the same Odoo 18 database as your Certification Tracking, Inspection Jobs, Reports, and Calibration Management — so a procedure that gets revised triggers a re-review of every Level II / Level III associated with that scope, and the next inspection job uses the new revision automatically.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              Where this stands apart from SharePoint-plus-Word document control: procedure variables (probe, frequency, calibration block, couplant, acceptance criteria) are structured fields, not free text. A change to "couplant = water with surfactant" cascades to every job spec using UT-001-Rev-04 — no copy-paste drift between procedures and job sheets.
            </p>
          </div>
        </section>

        {/* ─── KEY FEATURES ─────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Key features for NDT procedure authors and Level III reviewers</h2>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-slate-200">
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Pre-built NDT-method skeletons: UT, UT-PA, RT-X-ray, RT-gamma, MT-yoke, MT-prods, PT, VT, ET, TOFD</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Code-clause cross-reference: ASME V Articles 2/4/6/7/8/23, API 510/570/653/1104/5L, AWS D1.1/D1.5</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Structured variables block — probe, frequency, couplant, cal-block, acceptance criteria</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Author → Level III review → QA Manager → CEO approval workflow (configurable per procedure)</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Automatic revision numbering and immutable audit trail</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Customer flow-down mapping (internal UT-001-Rev-04 ↔ Aramco SAEP-1112-UT-A ↔ ADNOC AIM-NDT-002)</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Auto-distribution to customer portals (APQS, Tejari, Achilles, Avetta, ISNetworld)</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Digital signature with TSA-compliant timestamping</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Procedure-to-technician re-acknowledgement on revision (NCR-proof for ISO 17020 audits)</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Live link to Inspection Jobs — new jobs always use latest approved revision</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Written Practice generator (SNT-TC-1A / CP-189 aligned)</span></li>
          </ul>
        </section>

        {/* ─── INTEGRATIONS ─────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Integrations</h2>
          <p className="text-slate-300 mb-4 max-w-3xl">Atlantis NDT Procedures connects to:</p>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-slate-200">
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>SAP DMS (Document Management Service)</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>IBM Maximo Document Management</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>OpenText eDOCS &amp; OpenText Documentum</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>SharePoint &amp; OneDrive (read &amp; write)</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>Aramco APQS, ADNOC Tejari (flow-down distribution)</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>Achilles UK, Avetta, ISNetworld (qualification submissions)</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>DocuSign &amp; Adobe Sign (federated digital signature)</span></li>
          </ul>
        </section>

        {/* ─── QUOTE & ONBOARDING ───────────────────────────── */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-emerald-900/40 to-emerald-800/20 border border-emerald-500/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-3">Quote &amp; Onboarding</h2>
            <p className="text-slate-200 leading-relaxed mb-4 max-w-3xl">
              Procedures is included in the standard Atlantis NDT ERP — alongside Reports, Certificates, Calibration Management, Certification Tracking and CRM. <span className="text-emerald-400 font-semibold">Affordable, accessible, fully customizable.</span> Pricing tiers are calibrated regionally for inspection contractors worldwide.
            </p>
            <p className="text-slate-200 leading-relaxed max-w-3xl">
              Demo on request. Quote on request. Free trial: <Link to="/erp" className="text-emerald-400 underline">atlantisndt.com/erp</Link>.
            </p>
          </div>
        </section>

        {/* ─── FAQ ──────────────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Frequently asked questions</h2>
          <div className="space-y-3">
            {FAQS.map((f, idx) => (
              <div key={idx} className="bg-slate-800/40 border border-slate-700 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-slate-700/30 transition-colors"
                >
                  <span className="font-semibold text-white">{f.question}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${openIdx === idx ? "rotate-180" : ""}`} />
                </button>
                {openIdx === idx && (
                  <div className="px-6 pb-4 text-slate-300 leading-relaxed">{f.answer}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ─── CTA ──────────────────────────────────────────── */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-3">See Procedures in action</h2>
            <p className="text-slate-200 mb-6 max-w-2xl mx-auto">Book a 30-minute demo. We will walk you through a UT-PA-001 revision cycle, customer flow-down mapping to Aramco SAEP, and the audit-trail report ISO 17020 auditors actually ask for.</p>
            <a href="mailto:info@atlantisndt.com?subject=Demo%20request%3A%20Procedures%20Management"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              info@atlantisndt.com <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        <ContactDetails />
      </main>
    </div>
  );
}
