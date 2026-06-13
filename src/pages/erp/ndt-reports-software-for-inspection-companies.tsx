import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import ContactDetails from "@/components/ContactDetails";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { CheckCircle, Zap, ArrowRight, FileText, Globe, Shield, ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQS: { question: string; answer: string }[] = [
  {
    question: "What is included with NDT Reports inside Atlantis NDT ERP?",
    answer: "NDT Reports is the domain-specific inspection-report generator inside the Atlantis NDT ERP — bundled, not a separate licence. You get pre-built PDF templates for UT, RT, MT, PT, VT, ET, PAUT and TOFD methods, code-specific layouts for API 510 (pressure vessels), API 570 (piping), API 653 (storage tanks), API 1163 (pipelines), ASME Section V and EN ISO 17636. Reports auto-populate from your Inspection Jobs module — technician, certification expiry, equipment serial, calibration block reference, weld map, indication log, accept/reject per code — and produce a customer-format-compliant PDF in one click."
  },
  {
    question: "How is NDT Reports configured for inspection companies specifically?",
    answer: "Generic ERPs ship a generic report-writer; Atlantis ships pre-loaded NDT-method templates that meet the format requirements of major operators out of the box — Aramco SAEP, ADNOC AIM, QatarEnergy NFPS, Equinor Norsok, ABSA Alberta, OSHA PSM, HSE PSSR (UK), PESO IBR (India). Customer-format support means when Aramco asks for a specific block-letter cover page and SAP equipment-tag field, you do not re-engineer the report — you tick a checkbox at job-creation."
  },
  {
    question: "Can NDT Reports integrate with our existing systems?",
    answer: "Yes. Bidirectional integration with SAP S/4HANA, IBM Maximo, Oracle EBS for equipment-tag sync and inspection-result write-back. Reports can be auto-delivered to client portals (Aramco APQS, ADNOC Tejari, Achilles UK, Avetta, ISNetworld) or via SFTP / email. Raw data files from common equipment — Olympus EPOCH 650 / OmniScan X3, GE USM, Sonatest VEO+, Eddyfi MANTIS, Vidisco / GE DR systems — can be attached and referenced as evidence in the PDF."
  },
  {
    question: "What does implementation look like for NDT Reports?",
    answer: "Standard rollout 4–6 weeks. Week 1: identify customer-format requirements (Aramco / ADNOC / Reliance / Saudi Aramco / Sasol / Petronas etc.). Week 2: configure templates per method and per major customer. Week 3: technician training (mobile + offline capture). Week 4: pilot 20 inspection jobs end-to-end. Weeks 5–6: scale to full crew. Dedicated Customer Success Manager owns the first 12 months."
  },
  {
    question: "Is the data secure and audit-ready?",
    answer: "Yes. ISO 27001-certified hosting with US, EU, UAE, Saudi (in-Kingdom), India, Singapore data residency. AES-256 at rest, TLS 1.3 in transit. Every report is digitally signed with a tamper-evident hash and stored with full revision history — critical for ASNT, ISO 17020 and accreditation audits. GDPR / PDPL / DPDP / CCPA / PIPEDA compliant. Customer-data is never used for AI training."
  }
];

export default function NdtReportsSoftwareForInspectionCompanies() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <SEOHead
        title="NDT Reports Software — Generate Inspection Reports in 1 Click | Atlantis NDT"
        description="Generate ASNT/API compliant inspection reports in 1 click. UT, RT, MT, PT, VT, ET, PAUT, TOFD method-specific templates. Customer-format support (Aramco, ADNOC, Reliance). Affordable, accessible, fully customizable. Demo on request."
        canonical="/erp/ndt-reports-software-for-inspection-companies"
        faq={FAQS}
      />
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "ERP", href: "/erp" }, { label: "NDT Reports Software" }]} />

        {/* ─── HERO ─────────────────────────────────────────── */}
        <section className="mt-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            NDT Reports Software for Inspection Companies
          </h1>
          <p className="text-xl text-slate-300 mb-6 max-w-3xl leading-relaxed">
            Generate <span className="text-emerald-400 font-semibold">ASNT / API compliant inspection reports in 1 click</span>. UT, RT, MT, PT, VT, ET, PAUT, TOFD method-specific templates. Customer-format support for Aramco, ADNOC, Reliance, Sasol, Petronas, BP and Shell. <span className="text-emerald-400 font-semibold">Affordable. Accessible. Fully Customizable.</span>
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-4 py-2 text-emerald-300">
              <FileText className="w-4 h-4" />
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
            <a href="mailto:info@atlantisndt.com?subject=Demo%20request%3A%20NDT%20Reports%20Software"
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
          <h2 className="text-3xl font-bold mb-5">What is NDT Reports inside Atlantis NDT ERP?</h2>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-slate-300 leading-relaxed">
              NDT Reports is the domain-specific inspection-report engine inside Atlantis NDT ERP. Every common method — UT (Ultrasonic), RT (Radiographic), MT (Magnetic Particle), PT (Liquid Penetrant), VT (Visual), ET (Eddy Current), PAUT (Phased Array UT), TOFD (Time-of-Flight Diffraction) — ships with code-aligned templates calibrated to API 510 / 570 / 653 / 1163 and ASME Section V. The report writer pulls live from your Inspection Jobs, Technician Certification, and Equipment Calibration modules so the heat-number, technician ASNT level, last-cal date, and customer PO are auto-filled — your tech never re-types a serial number.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              Where Atlantis NDT Reports stands apart from generic report writers (or worse, Word-doc templates) is customer-format support. The big operators each demand a specific PDF format. Aramco wants block-letter cover pages and SAP-aligned equipment tags. ADNOC AIM wants the indication log on page 2 with a specific colour code. Reliance wants a tabular weld map. We have those formats pre-built — switch them by customer at job-creation, no IT ticket required.
            </p>
          </div>
        </section>

        {/* ─── KEY FEATURES ─────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Key features for NDT inspection teams</h2>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-slate-200">
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>1-click PDF generation from inspection-job data</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Method-specific templates: UT, RT, MT, PT, VT, ET, PAUT, TOFD</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Code-aligned formats: API 510 / 570 / 653 / 1163, ASME Sec V, EN ISO 17636</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Customer-format presets for Aramco, ADNOC, Reliance, Sasol, Petronas, Equinor</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Auto-population from Technician Certification (current ASNT level, expiry, written-practice)</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Auto-population from Equipment Calibration (last cal-date, cal-block reference)</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Indication log with accept/reject per code clause</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Weld-map and component-diagram annotation</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Mobile + offline capture (technicians can work in a radiography vault, refinery confined space, or offshore)</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Digital signature with tamper-evident hash</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Full revision history for ISO 17020 / accreditation audits</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Auto-distribute to client portals (Aramco APQS, ADNOC Tejari, Achilles, Avetta)</span></li>
          </ul>
        </section>

        {/* ─── INTEGRATIONS ─────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Integrations</h2>
          <p className="text-slate-300 mb-4 max-w-3xl">Atlantis NDT Reports connects to:</p>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-slate-200">
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>SAP S/4HANA (equipment-tag &amp; inspection-result sync)</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>IBM Maximo (asset / work-order sync)</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>Oracle EBS (cost &amp; project sync)</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>Aramco APQS, ADNOC Tejari (direct report delivery)</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>Achilles UK, Avetta, ISNetworld (qualification / submission)</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>Olympus EPOCH / OmniScan, GE USM, Sonatest VEO+, Eddyfi MANTIS (raw-data attach)</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>SharePoint &amp; OneDrive for document archive</span></li>
          </ul>
        </section>

        {/* ─── QUOTE & ONBOARDING ───────────────────────────── */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-emerald-900/40 to-emerald-800/20 border border-emerald-500/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-3">Quote &amp; Onboarding</h2>
            <p className="text-slate-200 leading-relaxed mb-4 max-w-3xl">
              NDT Reports is included in the standard Atlantis NDT ERP subscription — alongside CRM, Sales, Inventory, Certification Tracking, Calibration Management and Procedures. <span className="text-emerald-400 font-semibold">Affordable, accessible, fully customizable.</span> Pricing tiers are calibrated regionally so inspection contractors in the GCC, India, South-East Asia, Europe, North America and Australia get a fair, contextual rate.
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
            <h2 className="text-3xl font-bold mb-3">See NDT Reports in 1 click</h2>
            <p className="text-slate-200 mb-6 max-w-2xl mx-auto">Book a 30-minute demo. We will show a UT, PAUT and API 653 tank report generated live from a sample inspection job — including a customer-format switch from Aramco to ADNOC.</p>
            <a href="mailto:info@atlantisndt.com?subject=Demo%20request%3A%20NDT%20Reports%20Software"
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
