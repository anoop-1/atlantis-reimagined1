import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import ContactDetails from "@/components/ContactDetails";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { CheckCircle, XCircle, ArrowRight, DollarSign, Clock, Shield, ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQS = [
                {
    question: "Does Atlantis NDT ERP scale to a 500-technician inspection contractor?",
    answer: "Yes. The Atlantis ERP base platform supports tens of thousands of concurrent users; Atlantis NDT ERP has been performance-tested at 500+ named users with 50,000+ active inspection records, 1M+ inspection-method-procedure combinations and 10TB of attached PDF report archives. Multi-tenant cloud isolation, AES-256 at-rest encryption, 99.95% uptime SLA, hourly database backups, multi-region disaster recovery. For inspection contractors above 500 technicians who specifically need parallel-GAAP consolidation across 20+ countries, we recommend evaluating SAP — but Atlantis NDT ERP supports the technical scale of even the largest NDT contractors. The questions at that scale are organisational (change-management, training, integration depth) rather than platform-technical.",
  },
];

const comparisonRows = [
  { capability: "Annual license cost (50 users)", atlantis: "Affordable SaaS", sap: "Enterprise tier", winner: "atlantis" },
  { capability: "5-year total cost of ownership", atlantis: "Affordable SaaS", sap: "Enterprise tier", winner: "atlantis" },
  { capability: "Implementation timeline", atlantis: "2–4 weeks (typical)", sap: "9–15 months (Public Cloud)", winner: "atlantis" },
  { capability: "ASNT SNT-TC-1A certification tracking", atlantis: "Pre-configured", sap: "Custom build required", winner: "atlantis" },
  { capability: "ISO 9712 / PCN / CSWIP record library", atlantis: "Pre-loaded", sap: "Custom build required", winner: "atlantis" },
  { capability: "NACE MR0175 corrosion trending", atlantis: "Pre-built damage models", sap: "Build via MII or AspenTech", winner: "atlantis" },
  { capability: "OSHA PSM 29 CFR 1910.119 evidence pack", atlantis: "Single-click ZIP export", sap: "Custom report build", winner: "atlantis" },
  { capability: "Aramco SAEP-1112 / APQS portal integration", atlantis: "Native connector", sap: "Custom interface", winner: "atlantis" },
  { capability: "ADNOC Tejari vendor portal integration", atlantis: "Native connector", sap: "Custom interface", winner: "atlantis" },
  { capability: "Multi-country consolidation (≤15 entities)", atlantis: "Strong", sap: "Best-in-class", winner: "parity" },
  { capability: "Multi-country consolidation (50+ entities)", atlantis: "Limited", sap: "Best-in-class", winner: "sap" },
  { capability: "Parallel multi-GAAP (IFRS + US GAAP + IndAS)", atlantis: "Single GAAP per entity", sap: "Parallel ledgers", winner: "sap" },
  { capability: "Multi-currency (160+ currencies)", atlantis: "Native", sap: "Native", winner: "parity" },
  { capability: "Cloud + on-premise deployment options", atlantis: "Cloud (multi-region) + private", sap: "Public Cloud / Private Cloud / on-prem", winner: "parity" },
  { capability: "Customization speed", atlantis: "Python (fast, open)", sap: "ABAP (slow)", winner: "atlantis" },
  { capability: "Mobile field-data capture (offline)", atlantis: "iOS + Android, offline-capable", sap: "Requires SAP Asset Manager add-on", winner: "atlantis" },
  { capability: "Languages bundled", atlantis: "60+", sap: "40+", winner: "atlantis" },
  { capability: "Data residency (Saudi in-Kingdom)", atlantis: "Available", sap: "Available", winner: "parity" },
  { capability: "Average vendor management overhead", atlantis: "1 vendor (Atlantis)", sap: "Atlantis ERP has an open REST API, so it connects to SAP, Maximo, NetSuite or any other system that accepts API connections; each integration is scoped with you during implementation.", winner: "atlantis" },
];

const caseStudies = [
  {
    title: "Gulf Coast inspection contractor (Houston, 45 technicians)",
    body: "Operating across ExxonMobil Baytown, Shell Deer Park and Marathon Galveston Bay turnarounds, the contractor evaluated SAP S/4HANA RISE Public Cloud with a tier-1 SI quote in the multi-million-dollar range over the five-year horizon. Chose Atlantis NDT ERP — affordable, accessible, fully customizable. API 510 inspection-report turnaround dropped from 4 days to 30 minutes. Cleared first OSHA Region VI PSM audit post-go-live with zero recordables.",
  },
  {
    title: "Saudi Aramco-approved inspection firm (Dammam, 60 technicians)",
    body: "Initial SAP S/4HANA quote from a regional SAP partner: enterprise-tier licensing in the multi-million-SAR range over 5 years for Aramco SAEP-1112 evidence-pack automation. Chose Atlantis NDT ERP — Aramco APQS / VQIP vendor portal integration ships pre-built, affordable, accessible, fully customizable. Cleared next SAEP-1112 surveillance audit with zero findings (baseline: 6 per cycle). Reclaimed approximately SAR 1.8M/year of QA engineer time previously spent on manual evidence assembly.",
  },
  {
    title: "Multi-region inspection group (UAE + KSA + India, 80 technicians)",
    body: "Evaluated SAP S/4HANA Public Cloud for multi-country consolidation. Atlantis NDT ERP demonstrated the same consolidation across 3 legal entities (Dubai DMCC, Aramco-region Saudi LLC, Hyderabad Pvt Ltd) with intercompany invoicing, FX revaluation and parallel ADNOC Tejari / Aramco APQS portal evidence. Affordable, accessible, fully customizable — versus SAP's enterprise-tier multi-million-dollar quote. Implemented in 9 weeks vs SAP's 13-month timeline.",
  },
  {
    title: "UK / Aberdeen offshore inspection contractor (35 technicians)",
    body: "PCN/BINDT certification tracking, Lloyd's Register vendor-qualification portal integration, PSSR 2000 written scheme of examination and offshore Safety Case evidence — all delivered in Atlantis NDT ERP within 6 weeks. SAP S/4HANA quote for equivalent scope: enterprise-tier licensing in the multi-hundred-thousand-GBP-per-year range. Atlantis NDT ERP delivered the same scope as affordable, accessible, fully customizable SaaS; cleared next UKAS surveillance audit with zero non-conformances.",
  },
  {
    title: "Indian aerospace NDT supplier (Bangalore, 30 technicians)",
    body: "Serving HAL, GE Aviation India, Pratt & Whitney India and Boeing supplier-base inspection work, the contractor needed NAS 410 Rev 5 currency tracking, NADCAP audit-pack export and DGCA Form CA-39 generation. SAP S/4HANA Public Cloud quote: enterprise-tier licensing in the multi-crore-INR range over 5 years. Atlantis NDT ERP delivered the same scope as affordable, accessible, fully customizable SaaS; cleared NADCAP MAUP audit with zero findings.",
  },
  {
    title: "Canadian oil-sands inspection contractor (Edmonton, 38 technicians)",
    body: "ABSA pressure-equipment registration, CGSB 48.9712 certification tracking, AER Directive 056/077 evidence and Suncor / Imperial Oil contractor-portal integration. SAP S/4HANA quote: enterprise-tier licensing in the multi-million-CAD range over 5 years with a Calgary-based SI. Atlantis NDT ERP delivered the same scope as affordable, accessible, fully customizable SaaS; cleared next ABSA surveillance audit with zero recordables; reduced cold-weather mobilization paperwork from 2 days to 4 hours per crew.",
  },
  {
    title: "European inspection group (Rotterdam-headquartered, 55 technicians)",
    body: "PED 2014/68/EU conformity packs, Seveso III major-hazard evidence, RvA ISO 17020 audit trails and Vopak / Koole tank-farm portal integration. SAP S/4HANA Public Cloud quote in EUR: enterprise-tier licensing in the multi-hundred-thousand-euro-per-year range. Atlantis NDT ERP delivered the same scope as affordable, accessible, fully customizable SaaS; cleared next ILT statutory inspection cycle with zero non-conformances; bilingual Dutch/English reporting eliminated the dual-format admin overhead that previously consumed 30% of QA engineer time.",
  },
];

export default function OdooVsSAPNdtCompanies() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <SEOHead
        title="Atlantis NDT (Atlantis ERP) vs enterprise-tier SAP for NDT Companies | Atlantis NDT"
        description="Honest 2026 comparison: Atlantis NDT ERP (Atlantis ERP base — affordable, accessible, fully customizable) vs SAP S/4HANA Cloud (enterprise-tier licensing). 20-row capability matrix, 5-year TCO framing, 7 case studies, implementation timelines."
        canonical="/erp/atlantis-erp-vs-sap-ndt-companies"
        faq={FAQS}
        article={{
          headline: "Atlantis NDT ERP vs SAP S/4HANA — Honest 2026 Comparison for NDT Inspection Companies",
          datePublished: "2026-05-23",
          author: "Atlantis NDT Editorial Team",
          section: "ERP Comparison",
        }}
      />
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "ERP", href: "/erp" }, { label: "Atlantis NDT vs SAP" }]} />

        {/* HERO */}
        <section className="mt-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Atlantis NDT (Atlantis ERP) vs enterprise-tier SAP S/4HANA for NDT Inspection Companies
          </h1>
          <p className="text-xl text-slate-300 mb-6 max-w-3xl leading-relaxed">
            An honest, vendor-neutral 2026 comparison of <span className="text-emerald-400 font-semibold">Atlantis NDT ERP</span> (Atlantis ERP base with NDT-industry overlay — affordable, accessible, fully customizable) against <span className="text-blue-400 font-semibold">SAP S/4HANA Cloud</span> — the global enterprise ERP gold-standard. 20-row capability matrix, qualitative 5-year total cost of ownership framing, 7 real NDT inspection case studies and honest commentary on where SAP genuinely wins.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-4 py-2 text-emerald-300">
              <DollarSign className="w-4 h-4" />
              <span className="font-semibold">Affordable. Accessible. Fully Customizable.</span>
              <span className="text-emerald-200/70 text-sm">Atlantis NDT ERP</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-lg px-4 py-2 text-blue-300">
              <DollarSign className="w-4 h-4" />
              <span className="font-semibold">Enterprise tier</span>
              <span className="text-blue-200/70 text-sm">SAP S/4HANA (50 users)</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-lg px-4 py-2 text-purple-300">
              <Clock className="w-4 h-4" />
              <span className="font-semibold">2–4 weeks vs 9–15 months</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:info@atlantisndt.com?subject=Demo%20request%3A%20Odoo%20vs%20SAP%20for%20NDT"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Request a side-by-side demo <ArrowRight className="w-4 h-4" />
            </a>
            <Link to="/erp" className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              See the full Atlantis ERP suite
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Talk to the team
            </Link>
          </div>
        </section>

        {/* EXECUTIVE SUMMARY */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Executive summary</h2>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-slate-300 leading-relaxed">
              SAP S/4HANA is the most capable enterprise ERP in the world. It dominates the Fortune 500. It is also enterprise-tier in cost: a 50-user mid-market NDT inspection contractor spending five years on SAP S/4HANA Cloud will incur enterprise-tier licensing in the multi-million-dollar range across licenses, implementation, customization, integration, support and tier-1 SI overhead. Atlantis NDT ERP — with a deep NDT-industry overlay (ASNT, ISO 9712, PCN, CSWIP, API 510/570/653, NACE MR0175, OSHA PSM, OISD-141, Aramco SAEP-1112, ADNOC AIM) — is affordable, accessible, fully customizable SaaS over the same 5 years. The same operating capability for an NDT contractor at a fraction of the enterprise cost.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              The honest distinction: SAP genuinely wins when an inspection group is at large enterprise scale, operates in 20+ countries with parallel multi-GAAP reporting requirements, runs configure-to-order manufacturing or holds defense contracts requiring DCAA cost accounting. For everyone else — including most NDT inspection contractors between 5 and 500 technicians — Atlantis NDT ERP delivers the same outcome at a fraction of the enterprise spend. Pricing varies by region and team size — request a tailored quote at info@atlantisndt.com.
            </p>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Side-by-side capability matrix (20 rows)</h2>
          <div className="overflow-x-auto rounded-lg border border-slate-700">
            <table className="w-full text-sm">
              <thead className="bg-slate-800/80">
                <tr>
                  <th className="px-4 py-3 text-left text-slate-200 font-semibold">Capability</th>
                  <th className="px-4 py-3 text-left text-emerald-300 font-semibold">Atlantis NDT ERP</th>
                  <th className="px-4 py-3 text-left text-blue-300 font-semibold">SAP S/4HANA Cloud</th>
                  <th className="px-4 py-3 text-left text-slate-200 font-semibold">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-slate-900/30" : "bg-slate-900/10"}>
                    <td className="px-4 py-3 text-slate-200">{row.capability}</td>
                    <td className="px-4 py-3 text-slate-300">{row.atlantis}</td>
                    <td className="px-4 py-3 text-slate-300">{row.sap}</td>
                    <td className="px-4 py-3">
                      {row.winner === "atlantis" && <span className="text-emerald-400 font-semibold">Atlantis</span>}
                      {row.winner === "sap" && <span className="text-blue-400 font-semibold">SAP</span>}
                      {row.winner === "parity" && <span className="text-slate-400">Parity</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* PRICING BREAKDOWN */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Cost framing — 5-year total cost of ownership (50 users)</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-emerald-900/30 border border-emerald-500/30 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-emerald-300 mb-3">Atlantis NDT ERP</h3>
              <p className="text-3xl font-bold text-white mb-4">Affordable SaaS</p>
              <p className="text-sm text-emerald-200 mb-4">Affordable. Accessible. Fully Customizable.</p>
              <ul className="space-y-2 text-slate-200 text-sm">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />License: tailored to your region and team — all apps included</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />Implementation: scoped to your workflow</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />Customization: NDT overlay pre-built; further customization available</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />Support + upgrades: included</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />Mobile, training, hosting: included</li>
              </ul>
            </div>
            <div className="bg-blue-900/30 border border-blue-500/30 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-blue-300 mb-3">SAP S/4HANA Public Cloud RISE</h3>
              <p className="text-3xl font-bold text-white mb-4">Enterprise tier</p>
              <p className="text-sm text-blue-200 mb-4">enterprise-tier licensing, fully loaded</p>
              <ul className="space-y-2 text-slate-200 text-sm">
                <li className="flex items-start gap-2"><DollarSign className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />License: per-user enterprise pricing (50 users × enterprise edition)</li>
                <li className="flex items-start gap-2"><DollarSign className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />Implementation (tier-1 SI): multi-hundred-thousand-dollar engagement</li>
                <li className="flex items-start gap-2"><DollarSign className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />NDT-industry customization: multi-hundred-thousand-dollar custom build</li>
                <li className="flex items-start gap-2"><DollarSign className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />AMS support: ongoing annual fee</li>
                <li className="flex items-start gap-2"><DollarSign className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />Integration partners: additional engagement fees</li>
              </ul>
            </div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-slate-200 mb-3">Cost differential</h3>
              <p className="text-3xl font-bold text-emerald-400 mb-4">Significantly lower</p>
              <p className="text-sm text-slate-300 mb-4">Atlantis is dramatically more affordable</p>
              <p className="text-slate-300 text-sm leading-relaxed">For a mid-market NDT inspection contractor, the multi-million-dollar saving over five years from choosing Atlantis NDT ERP funds roughly: additional certified technicians, an international expansion, or a year of working capital. The SAP S/4HANA premium is rational at Fortune 500 scale and rarely rational below it. Pricing varies by region and team size — request a tailored quote at info@atlantisndt.com.</p>
            </div>
          </div>
        </section>

        {/* WHY ODOO FOR NDT */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Why an NDT inspection company should pick Atlantis NDT ERP over SAP</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <h3 className="font-semibold text-emerald-300 mb-2">1. NDT-industry pre-configuration</h3>
              <p className="text-slate-300 text-sm leading-relaxed">SAP ships a horizontal ERP. Day-one productive vs 9-15 months of SAP custom build.</p>
            </div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <h3 className="font-semibold text-emerald-300 mb-2">2. Customization speed (Python vs ABAP)</h3>
              <p className="text-slate-300 text-sm leading-relaxed">Atlantis ERP's open-source Python architecture allows customization 5-10× faster than SAP ABAP development. When your largest client demands a new inspection-report format or a new vendor-portal evidence export, Atlantis NDT ERP delivers in 2-5 days. SAP equivalent: 4-8 weeks of ABAP development through change request.</p>
            </div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <h3 className="font-semibold text-emerald-300 mb-2">3. Implementation timeline (weeks vs months)</h3>
              <p className="text-slate-300 text-sm leading-relaxed">Atlantis NDT ERP implementation typically takes 2 to 4 weeks from kickoff, depending on how clean your existing records are. SAP S/4HANA Public Cloud needs 9-15 months minimum. Every month of SAP implementation is a month your competitors win contracts faster because they can quote, dispatch and invoice in real-time on Atlantis.</p>
            </div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <h3 className="font-semibold text-emerald-300 mb-2">4. Single-vendor accountability</h3>
              <p className="text-slate-300 text-sm leading-relaxed">Atlantis ERP has an open REST API, so it connects to SAP, Maximo, NetSuite or any other system that accepts API connections; each integration is scoped with you during implementation. Atlantis NDT ERP is one vendor: license, implementation, support, integration, training and customization all from the Atlantis NDT team. One number to call when something breaks.</p>
            </div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <h3 className="font-semibold text-emerald-300 mb-2">5. Mobile-first field capture</h3>
              <p className="text-slate-300 text-sm leading-relaxed">Atlantis NDT ERP includes iOS + Android field apps with offline capture for technicians working refinery turnarounds, offshore platforms, FIFO sites and remote pipelines. UT thickness readings, MT/PT indications, visual inspection records and photo evidence sync back when connectivity returns. SAP requires the SAP Asset Manager add-on at additional cost and additional implementation complexity.</p>
            </div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <h3 className="font-semibold text-emerald-300 mb-2">6. Bilingual reporting (Arabic, Spanish, French, Hindi, Portuguese, Bahasa)</h3>
              <p className="text-slate-300 text-sm leading-relaxed">Atlantis NDT ERP ships 60+ language packs with bilingual report generation tuned for inspection clients — English/Arabic for Aramco and ADNOC, English/Spanish for Pemex and YPF, English/Portuguese for Petrobras, English/Hindi/Marathi/Gujarati/Bengali/Tamil/Telugu for Indian operators, English/French for North Africa, English/Bahasa for Pertamina. SAP supports 40+ languages but does not ship NDT-format bilingual report templates.</p>
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Anonymized case studies — NDT contractors who switched from SAP evaluations to Atlantis NDT ERP</h2>
          <div className="grid md:grid-cols-1 gap-4">
            {caseStudies.map((cs, idx) => (
              <div key={idx} className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
                <p className="text-sm uppercase tracking-wider text-emerald-400 mb-2">Case Study {idx + 1}</p>
                <h3 className="font-semibold text-white mb-2">{cs.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{cs.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHERE SAP WINS */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">When SAP S/4HANA is genuinely the right choice</h2>
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-2xl p-6">
            <p className="text-slate-200 leading-relaxed mb-4">We will not pretend SAP never wins. SAP S/4HANA is genuinely the right choice for an NDT inspection group when:</p>
            <ul className="space-y-2 text-slate-200">
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />Revenue exceeds approximately $500M and you operate in 20+ countries with complex consolidation needs</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />You require parallel IFRS + US GAAP + multiple local GAAP reporting in a single ledger</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />You are publicly listed above $1B revenue with strict SOX 404 / Audit Committee expectations</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />You hold US defense contracts requiring DCAA cost accounting standards compliance</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />You operate a manufacturing arm with 1,000+ engineer-to-order variant configurations</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />Your parent corporate group already mandates SAP across the global IT estate</li>
            </ul>
            <p className="text-slate-300 leading-relaxed mt-4 text-sm">If those statements fit your business, SAP is a legitimate choice and the enterprise-tier multi-year investment is rational. If they don't — and they don't fit the vast majority of NDT inspection contractors — Atlantis NDT ERP delivers the same operating capability as affordable, accessible, fully customizable SaaS.</p>
          </div>
        </section>

        {/* FAQ */}
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

        {/* CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-emerald-900/40 to-blue-900/40 border border-emerald-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-3">Request a side-by-side Atlantis NDT ERP vs SAP S/4HANA demo</h2>
            <p className="text-slate-200 mb-6 max-w-2xl mx-auto">Book a 30-minute demo with the Atlantis NDT team. We will run your actual inspection workflow through both Atlantis NDT ERP and walk through how SAP S/4HANA would handle the same scope — honest assessment, no marketing fluff.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="mailto:info@atlantisndt.com?subject=Demo%20request%3A%20Atlantis%20vs%20SAP"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Request the demo <ArrowRight className="w-5 h-5" />
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Talk to a consultant
              </Link>
              <Link to="/erp" className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                See the full ERP suite
              </Link>
            </div>
          </div>
        </section>

        <ContactDetails />
      </main>
    </div>
  );
}
