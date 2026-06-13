import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import ContactDetails from "@/components/ContactDetails";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { CheckCircle, Zap, ArrowRight, Award, Globe, Shield, ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQS: { question: string; answer: string }[] = [
  {
    question: "What is included with NDT Certificates inside Atlantis NDT ERP?",
    answer: "Certificates is the customer-facing inspection-certificate issuance engine. Bundled, not a separate licence. Every certificate is QR-coded, e-signed (TSA timestamped), audit-trail logged, and can be auto-distributed to client portals (Aramco APQS, ADNOC Tejari, Achilles UK) or sent directly via email. Templates ship for the common inspection-certificate types: weld inspection, equipment in-service, pressure-vessel internal/external, storage tank API 653, pipeline integrity, lifting equipment, calibration, and customer-asset certificates."
  },
  {
    question: "How is Certificates configured for NDT inspection companies specifically?",
    answer: "We pre-load templates for code-aligned certificate types — API 510 internal/external inspection certificate, API 570 piping inspection certificate, API 653 storage-tank certificate, ASME PCC-2 repair certificate, LOLER lifting-equipment certificate (UK / GCC), PED material certificate. Each ships with the layout expected by Aramco SAEP, ADNOC AIM, QatarEnergy NFPS, Reliance MOC, Sasol QAP and BP CASHES standards — so you do not re-design the cover page per customer."
  },
  {
    question: "Can Certificates integrate with our existing systems and customer portals?",
    answer: "Yes. Auto-distribute to Aramco APQS, ADNOC Tejari, Achilles UK, Avetta, ISNetworld. Equipment-tag sync with SAP S/4HANA, IBM Maximo, Oracle EBS. Customer-portal sync with corporate SharePoint / Teams / OneDrive endpoints. QR-codes resolve to a tamper-evident verification page (the customer can scan and instantly confirm the certificate is real and current)."
  },
  {
    question: "What does implementation look like for Certificates?",
    answer: "Standard rollout 3–5 weeks. Week 1: identify certificate types in scope (typically 4–8). Week 2: configure templates per customer format. Week 3: set up QR-code verification portal and e-signature workflow. Week 4: train issuance staff (QA Manager / Level III). Week 5: pilot 25 certificates end-to-end then scale. Customer Success Manager owns first 12 months."
  },
  {
    question: "Is the data secure and the QR-code tamper-evident?",
    answer: "Yes. ISO 27001-certified hosting. AES-256 / TLS 1.3. Multi-region data residency (US, EU, UAE, KSA, India, Singapore). Every certificate carries a cryptographic hash; the QR-code resolves to a public verification page where the hash is compared in real time — any alteration breaks the chain and the verification page shows INVALID. Full revision history per ISO 17020 / ISO/IEC 17025. GDPR / PDPL / DPDP / CCPA / PIPEDA compliant. Customer data is NEVER used for AI training."
  }
];

export default function NdtCertificatesManagementSoftware() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <SEOHead
        title="NDT Certificates Management — Customer-Facing Cert Issuance | Atlantis NDT"
        description="Issue customer-facing inspection certificates in seconds. QR-coded, e-signed, audit-trail logged. Automatic distribution to client portals (Aramco APQS, ADNOC Tejari, Achilles UK). Affordable, accessible, fully customizable."
        canonical="/erp/ndt-certificates-management-software"
        faq={FAQS}
      />
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "ERP", href: "/erp" }, { label: "NDT Certificates Management" }]} />

        {/* ─── HERO ─────────────────────────────────────────── */}
        <section className="mt-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            NDT Certificates Management
          </h1>
          <p className="text-xl text-slate-300 mb-6 max-w-3xl leading-relaxed">
            Issue customer-facing inspection certificates in seconds. <span className="text-emerald-400 font-semibold">QR-coded, e-signed, audit-trail logged.</span> Automatic distribution to client portals — Aramco APQS, ADNOC Tejari, Achilles UK, Avetta, ISNetworld. <span className="text-emerald-400 font-semibold">Affordable. Accessible. Fully Customizable.</span>
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-4 py-2 text-emerald-300">
              <Award className="w-4 h-4" />
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
            <a href="mailto:info@atlantisndt.com?subject=Demo%20request%3A%20Certificates%20Management"
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
          <h2 className="text-3xl font-bold mb-5">What is Certificates inside Atlantis NDT ERP?</h2>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-slate-300 leading-relaxed">
              Certificates is the customer-facing certificate issuance engine inside Atlantis NDT ERP. After a UT, PAUT, RT or visual inspection job closes in the Inspection Jobs module, a certificate can be issued in seconds — QR-coded for tamper-evident verification, e-signed by a designated Level III with TSA-compliant timestamping, and immutably logged for ISO 17020 / ISO/IEC 17025 audits. Pre-built templates cover the common certificate types: API 510 pressure-vessel certificate, API 570 piping certificate, API 653 storage-tank certificate, ASME PCC-2 repair certificate, LOLER lifting-equipment certificate, and material certificates per EN 10204 type 3.1 / 3.2.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              Because Certificates lives inside the same Odoo 18 database as your CRM, Inspection Jobs, Procedures, and Reports, the certificate is auto-populated from the job — equipment tag, last inspection date, next-due date, technician credentials and code-clause references all flow from existing data. The QR-code on the certificate resolves to a public verification page hosted on your domain; the customer scans, and they instantly see a fresh hash-match confirmation. No more emailed PDFs of dubious provenance.
            </p>
          </div>
        </section>

        {/* ─── KEY FEATURES ─────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Key features for QA Managers and Level III certificate issuers</h2>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-slate-200">
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>One-click certificate issuance from a closed inspection job</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>QR-code tamper-evident verification (cryptographic hash check)</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>E-signature with TSA-compliant timestamping</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Pre-built certificate types: API 510, 570, 653, ASME PCC-2, LOLER, EN 10204 type 3.1 / 3.2</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Customer-format presets: Aramco SAEP, ADNOC AIM, Reliance, Sasol, BP CASHES, QatarEnergy NFPS</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Auto-distribution to Aramco APQS, ADNOC Tejari, Achilles UK, Avetta, ISNetworld</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Next-due-date tracker with auto-renewal reminders 60 / 30 / 7 days out</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Bulk re-issuance for fleet-wide updates (e.g. revised acceptance criteria)</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Full revision history for ISO 17020 / ISO/IEC 17025 audits</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Public verification portal hosted under your own domain</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Bilingual issuance (English + Arabic for GCC, English + Hindi for India)</span></li>
          </ul>
        </section>

        {/* ─── INTEGRATIONS ─────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Integrations</h2>
          <p className="text-slate-300 mb-4 max-w-3xl">Atlantis NDT Certificates connects to:</p>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-slate-200">
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>SAP S/4HANA (equipment-tag sync &amp; certificate write-back)</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>IBM Maximo (asset register sync)</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>Oracle EBS</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>Aramco APQS, ADNOC Tejari (auto-delivery)</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>Achilles UK, Avetta, ISNetworld</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>DocuSign &amp; Adobe Sign (federated e-signature)</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>SharePoint &amp; OneDrive (customer-side document archive)</span></li>
          </ul>
        </section>

        {/* ─── QUOTE & ONBOARDING ───────────────────────────── */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-emerald-900/40 to-emerald-800/20 border border-emerald-500/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-3">Quote &amp; Onboarding</h2>
            <p className="text-slate-200 leading-relaxed mb-4 max-w-3xl">
              Certificates is included in the standard Atlantis NDT ERP — alongside Reports, Procedures, Inspection Jobs, Certification Tracking and CRM. <span className="text-emerald-400 font-semibold">Affordable, accessible, fully customizable.</span> Pricing tiers calibrated regionally for inspection contractors worldwide.
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
            <h2 className="text-3xl font-bold mb-3">See QR-coded certificate issuance live</h2>
            <p className="text-slate-200 mb-6 max-w-2xl mx-auto">Book a 30-minute demo. We will issue a sample API 510 certificate, scan its QR-code on your phone, and walk you through Aramco APQS / ADNOC Tejari auto-distribution.</p>
            <a href="mailto:info@atlantisndt.com?subject=Demo%20request%3A%20Certificates%20Management"
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
