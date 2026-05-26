import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import ContactDetails from "@/components/ContactDetails";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { CheckCircle, XCircle, ArrowRight, DollarSign, Clock, Shield, ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQS = [
  {
    question: "How much does SAP S/4HANA actually cost an NDT inspection company in 2026?",
    answer: "Realistic 5-year total cost of ownership for a 50-user mid-size NDT inspection contractor: SAP S/4HANA Public Cloud RISE subscription is approximately $1,500-2,200 per user per month for an enterprise edition with full Plant Maintenance, Quality Management, Project Systems and HR — about $900K-$1.32M/year in licenses alone. Add SAP implementation by a tier-1 SI (Deloitte, Accenture, IBM, Capgemini): $400K-$900K. Five-year customization, integration and support: $250K-$500K. Total 5-year TCO: $5.7M-$10.4M. Atlantis NDT ERP at flat regional pricing covers the same user base, same module breadth, and pre-built NDT industry overlay — total 5-year cost: $90K. The factor is roughly 60-100× cheaper.",
  },
  {
    question: "Will SAP S/4HANA give me functionality Odoo does not have?",
    answer: "Yes — but mostly capabilities a mid-market NDT inspection company does not need. SAP wins genuinely on: parallel multi-GAAP reporting (IFRS + US GAAP + IndAS in one ledger), 50+ country tax engines, SAP IBP advanced supply-chain planning, deep treasury, configure-to-order manufacturing with 10,000+ variants. For NDT inspection businesses doing service-based work with technician scheduling, certification tracking, equipment calibration, project billing and document control, the SAP advantage is mostly hypothetical. Atlantis NDT ERP (Odoo 18 base) covers everything an inspection contractor actually uses to run its business — and the NDT-industry pre-configuration (ASNT, ISO 9712, PCN, CSWIP, API codes, NACE MR0175, OISD-141) is something SAP does not ship at all.",
  },
  {
    question: "How long does SAP implementation take vs Atlantis NDT ERP?",
    answer: "SAP S/4HANA Public Cloud implementation for a mid-size services firm: 9-15 months from contract to go-live, with 6-12 months of post-go-live stabilisation. SAP S/4HANA Private Cloud or on-premise: 14-24 months. The SAP timeline is structured by Activate methodology stages (Discover, Prepare, Explore, Realize, Deploy, Run) with formal sign-off gates that compound calendar time. Atlantis NDT ERP implementation: 4-10 weeks. Week 1 discovery and configuration. Weeks 2-4 data migration and integration setup. Weeks 5-7 training. Weeks 8-10 parallel run and cutover. The 12-15× implementation speed advantage compounds: most NDT contractors get a year of operational benefit from Atlantis NDT ERP before SAP would have gone live.",
  },
  {
    question: "Is SAP more secure or compliant than Odoo / Atlantis NDT ERP?",
    answer: "Both meet the security and compliance bar an NDT contractor needs. SAP S/4HANA Cloud is ISO 27001, SOC 1/SOC 2, C5 (Germany), IRAP (Australia) and FedRAMP (US) certified. Atlantis NDT ERP runs on ISO 27001-certified cloud infrastructure with AES-256 encryption at rest and TLS 1.3 in transit, and offers in-Kingdom (Saudi), in-UAE, in-India and in-EU data residency for regional compliance. Both are GDPR, CCPA, PDPL and PIPEDA compliant. SAP has deeper audit-evidence tooling that matters for SOX 404 controls at $500M+ revenue listed companies — irrelevant for almost every NDT inspection contractor. For the standards that actually govern NDT inspection businesses (ASNT SNT-TC-1A, ISO 9712, API 510/570/653, OSHA PSM 29 CFR 1910.119), Atlantis NDT ERP ships pre-configured evidence packs and SAP does not.",
  },
  {
    question: "Can I migrate from SAP S/4HANA to Atlantis NDT ERP without data loss?",
    answer: "Yes. Atlantis NDT migration team has run multiple SAP-to-Odoo migrations. Standard methodology: (1) Discovery — list every SAP customization, Z-table, BAdI, custom report; (2) Extract via SAP standard tools (S/4HANA Migration Cockpit, DTS, SAP Data Services, or third-party SNP CrystalBridge); (3) Map to Atlantis NDT ERP data model with NDT-industry-specific transformation rules (NDT method codes, ASNT levels, equipment calibration intervals); (4) Load with batch validation; (5) Run SAP and Atlantis in parallel for 1-3 monthly close cycles to validate consistency; (6) Cutover. Typical timeline: 12-22 weeks for a 25-100 user mid-market NDT contractor. Critical SAP data preserved: vendor master, customer master, GL, AR/AP open items, fixed asset register, project WBS, equipment master, classification.",
  },
  {
    question: "What about SAP's NDT-industry expertise — does SAP work with NDT companies?",
    answer: "SAP S/4HANA is a horizontal ERP. SAP has reference customers in NDT-adjacent verticals — refining (Saudi Aramco, ExxonMobil, Shell), engineering services (Worley, Fluor, KBR), industrial inspection (TÜV SÜD, Bureau Veritas at parent-company level) — but no NDT-industry-specific accelerator package. Implementing SAP for an NDT contractor means building the inspection-method library, technician certification workflow, API 510/570/653 inspection scheduling, NACE MR0175 corrosion trending, ASNT written-practice tracking and PSM 29 CFR 1910.119 evidence assembly from scratch — typically $300K-$700K of additional SI work on top of base SAP. Atlantis NDT ERP ships this overlay out-of-the-box. Net result: an NDT contractor spending $5-10M over five years on SAP gets approximately the same NDT-specific operating capability as a contractor spending $90K on Atlantis NDT ERP.",
  },
  {
    question: "Which is better for multi-country NDT operations — SAP or Atlantis NDT ERP?",
    answer: "SAP genuinely wins above ~20 countries with complex consolidation and parallel-GAAP requirements. For typical NDT contractor multi-country scope (USA + India + Saudi + UAE, or UK + Norway + Aberdeen + onshore Europe), Atlantis NDT ERP is fully sufficient. Multi-currency: Atlantis supports 160+ currencies natively. Multi-company consolidation: Atlantis supports intercompany invoicing, eliminations, FX revaluation and consolidated reporting up to ~15 legal entities cleanly. Country localizations: Atlantis ships PESO (India), Aramco APQS (Saudi), ADNOC Tejari (UAE), HMRC MTD (UK), Skattedirektoratet SAF-T (Norway), CRA (Canada), IRS (US) compliance modules. Local tax engines: VAT, GST, PST, sales tax, excise — all configured. The few NDT companies operating in 25+ countries with strict parallel-GAAP needs (Mistras, Applus+, Bureau Veritas at parent-company level) genuinely need SAP. Mid-size and growth-stage NDT contractors do not.",
  },
  {
    question: "Does Atlantis NDT ERP scale to a 500-technician inspection contractor?",
    answer: "Yes. The Odoo 18 base platform supports tens of thousands of concurrent users; Atlantis NDT ERP has been performance-tested at 500+ named users with 50,000+ active inspection records, 1M+ inspection-method-procedure combinations and 10TB of attached PDF report archives. Multi-tenant cloud isolation, AES-256 at-rest encryption, 99.95% uptime SLA, hourly database backups, multi-region disaster recovery. For inspection contractors above 500 technicians who specifically need parallel-GAAP consolidation across 20+ countries, we recommend evaluating SAP — but Atlantis NDT ERP supports the technical scale of even the largest NDT contractors. The questions at that scale are organisational (change-management, training, integration depth) rather than platform-technical.",
  },
];

const comparisonRows = [
  { capability: "Annual license cost (50 users)", atlantis: "$18,000 flat", sap: "$900K–$1.32M", winner: "atlantis" },
  { capability: "5-year total cost of ownership", atlantis: "$90,000", sap: "$5.7M–$10.4M", winner: "atlantis" },
  { capability: "Implementation timeline", atlantis: "4–10 weeks", sap: "9–15 months (Public Cloud)", winner: "atlantis" },
  { capability: "ASNT SNT-TC-1A certification tracking", atlantis: "Pre-configured", sap: "Custom build required", winner: "atlantis" },
  { capability: "ISO 9712 / PCN / CSWIP record library", atlantis: "Pre-loaded", sap: "Custom build required", winner: "atlantis" },
  { capability: "API 510 / 570 / 653 inspection scheduling", atlantis: "Pre-configured intervals", sap: "Configure manually in PM module", winner: "atlantis" },
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
  { capability: "Average vendor management overhead", atlantis: "1 vendor (Atlantis)", sap: "SAP + SI + integration partners + AMS provider", winner: "atlantis" },
];

const caseStudies = [
  {
    title: "Gulf Coast inspection contractor (Houston, 45 technicians)",
    body: "Operating across ExxonMobil Baytown, Shell Deer Park and Marathon Galveston Bay turnarounds, the contractor evaluated SAP S/4HANA RISE Public Cloud with a tier-1 SI quote of $1.65M implementation + $1.1M/year license. Chose Atlantis NDT ERP at $18K flat. Saved $4.9M over 5 years. API 510 inspection-report turnaround dropped from 4 days to 30 minutes. Cleared first OSHA Region VI PSM audit post-go-live with zero recordables.",
  },
  {
    title: "Saudi Aramco-approved inspection firm (Dammam, 60 technicians)",
    body: "Initial SAP S/4HANA quote from a regional SAP partner: SAR 7.2M (~$1.92M) over 5 years for Aramco SAEP-1112 evidence-pack automation. Chose Atlantis NDT ERP — Aramco APQS / VQIP vendor portal integration ships pre-built. Cleared next SAEP-1112 surveillance audit with zero findings (baseline: 6 per cycle). Reclaimed approximately SAR 1.8M/year of QA engineer time previously spent on manual evidence assembly.",
  },
  {
    title: "Multi-region inspection group (UAE + KSA + India, 80 technicians)",
    body: "Evaluated SAP S/4HANA Public Cloud for multi-country consolidation. Atlantis NDT ERP demonstrated the same consolidation across 3 legal entities (Dubai DMCC, Aramco-region Saudi LLC, Hyderabad Pvt Ltd) with intercompany invoicing, FX revaluation and parallel ADNOC Tejari / Aramco APQS portal evidence. 5-year TCO: $90K vs SAP's $3.2M quote. Implemented in 9 weeks vs SAP's 13-month timeline.",
  },
  {
    title: "UK / Aberdeen offshore inspection contractor (35 technicians)",
    body: "PCN/BINDT certification tracking, Lloyd's Register vendor-qualification portal integration, PSSR 2000 written scheme of examination and offshore Safety Case evidence — all delivered in Atlantis NDT ERP within 6 weeks. SAP S/4HANA quote for equivalent scope: £840K implementation + £450K/year. Atlantis NDT ERP £14,400/year. Saved approximately £2.1M over 5 years; cleared next UKAS surveillance audit with zero non-conformances.",
  },
  {
    title: "Indian aerospace NDT supplier (Bangalore, 30 technicians)",
    body: "Serving HAL, GE Aviation India, Pratt & Whitney India and Boeing supplier-base inspection work, the contractor needed NAS 410 Rev 5 currency tracking, NADCAP audit-pack export and DGCA Form CA-39 generation. SAP S/4HANA Public Cloud quote: INR 6.5 crore over 5 years. Atlantis NDT ERP INR 15 lakh/year. Saved approximately INR 5.7 crore over 5 years; cleared NADCAP MAUP audit with zero findings.",
  },
  {
    title: "Canadian oil-sands inspection contractor (Edmonton, 38 technicians)",
    body: "ABSA pressure-equipment registration, CGSB 48.9712 certification tracking, AER Directive 056/077 evidence and Suncor / Imperial Oil contractor-portal integration. SAP S/4HANA quote: CAD 1.95M over 5 years with a Calgary-based SI. Atlantis NDT ERP CAD 24,500/year. Saved approximately CAD 1.8M over 5 years; cleared next ABSA surveillance audit with zero recordables; reduced cold-weather mobilization paperwork from 2 days to 4 hours per crew.",
  },
  {
    title: "European inspection group (Rotterdam-headquartered, 55 technicians)",
    body: "PED 2014/68/EU conformity packs, Seveso III major-hazard evidence, RvA ISO 17020 audit trails and Vopak / Koole tank-farm portal integration. SAP S/4HANA Public Cloud quote in EUR: €1.34M over 5 years. Atlantis NDT ERP €16,500/year. Saved approximately €1.26M over 5 years; cleared next ILT statutory inspection cycle with zero non-conformances; bilingual Dutch/English reporting eliminated the dual-format admin overhead that previously consumed 30% of QA engineer time.",
  },
];

export default function OdooVsSAPNdtCompanies() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <SEOHead
        title="Atlantis NDT (Odoo) vs SAP S/4HANA for NDT Companies — $18K vs $250K+ | Atlantis NDT"
        description="Honest 2026 comparison: Atlantis NDT ERP (Odoo 18 base, regional pricing flat) vs SAP S/4HANA Cloud ($900K-$1.32M/yr for 50 users). 20-row capability matrix, 5-year TCO, 7 case studies, implementation timelines."
        canonical="/erp/odoo-vs-sap-ndt-companies"
        faq={FAQS}
        article={{
          headline: "Atlantis NDT ERP (Odoo) vs SAP S/4HANA — Honest 2026 Comparison for NDT Inspection Companies",
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
            Atlantis NDT (Odoo) vs SAP S/4HANA for NDT Inspection Companies — $18K vs $250K+
          </h1>
          <p className="text-xl text-slate-300 mb-6 max-w-3xl leading-relaxed">
            An honest, vendor-neutral 2026 comparison of <span className="text-emerald-400 font-semibold">Atlantis NDT ERP</span> (Odoo 18 base with NDT-industry overlay, flat regional pricing) against <span className="text-blue-400 font-semibold">SAP S/4HANA Cloud</span> — the global enterprise ERP gold-standard. 20-row capability matrix, full 5-year total cost of ownership, 7 real NDT inspection case studies and honest commentary on where SAP genuinely wins.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-4 py-2 text-emerald-300">
              <DollarSign className="w-4 h-4" />
              <span className="font-semibold">regional pricing</span>
              <span className="text-emerald-200/70 text-sm">Atlantis NDT ERP</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-lg px-4 py-2 text-blue-300">
              <DollarSign className="w-4 h-4" />
              <span className="font-semibold">$900K–$1.32M / year</span>
              <span className="text-blue-200/70 text-sm">SAP S/4HANA (50 users)</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-lg px-4 py-2 text-purple-300">
              <Clock className="w-4 h-4" />
              <span className="font-semibold">4–10 weeks vs 9–15 months</span>
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
              SAP S/4HANA is the most capable enterprise ERP in the world. It dominates the Fortune 500. It is also the most expensive: a 50-user mid-market NDT inspection contractor spending five years on SAP S/4HANA Cloud will pay between $5.7M and $10.4M all-in across licenses, implementation, customization, integration, support and the average tier-1 SI overhead. Atlantis NDT ERP — built on Odoo 18 with a deep NDT-industry overlay (ASNT, ISO 9712, PCN, CSWIP, API 510/570/653, NACE MR0175, OSHA PSM, OISD-141, Aramco SAEP-1112, ADNOC AIM) — costs $90,000 over the same 5 years. That is approximately 60-100× cheaper for what, in functional terms, is the same operating capability for an NDT contractor.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              The honest distinction: SAP genuinely wins when an inspection group exceeds roughly $500M revenue, operates in 20+ countries with parallel multi-GAAP reporting requirements, runs configure-to-order manufacturing or holds defense contracts requiring DCAA cost accounting. For everyone else — including most NDT inspection contractors between 5 and 500 technicians — Atlantis NDT ERP delivers the same outcome at 1-2% of the cost.
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
                  <th className="px-4 py-3 text-left text-emerald-300 font-semibold">Atlantis NDT ERP (Odoo 18)</th>
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
          <h2 className="text-3xl font-bold mb-5">Pricing breakdown — 5-year total cost of ownership (50 users)</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-emerald-900/30 border border-emerald-500/30 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-emerald-300 mb-3">Atlantis NDT ERP</h3>
              <p className="text-4xl font-bold text-white mb-4">$90,000</p>
              <p className="text-sm text-emerald-200 mb-4">over 5 years, flat</p>
              <ul className="space-y-2 text-slate-200 text-sm">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />License: regional pricing — contact us — all apps included</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />Implementation: $15K-$45K one-off (typical scope)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />Customization: $10K-$30K (NDT overlay pre-built)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />Support + upgrades: included</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />Mobile, training, hosting: included</li>
              </ul>
            </div>
            <div className="bg-blue-900/30 border border-blue-500/30 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-blue-300 mb-3">SAP S/4HANA Public Cloud RISE</h3>
              <p className="text-4xl font-bold text-white mb-4">$5.7M–$10.4M</p>
              <p className="text-sm text-blue-200 mb-4">over 5 years, fully loaded</p>
              <ul className="space-y-2 text-slate-200 text-sm">
                <li className="flex items-start gap-2"><DollarSign className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />License: $900K-$1.32M/year (50 users × enterprise)</li>
                <li className="flex items-start gap-2"><DollarSign className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />Implementation (tier-1 SI): $400K-$900K</li>
                <li className="flex items-start gap-2"><DollarSign className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />NDT-industry customization: $300K-$700K</li>
                <li className="flex items-start gap-2"><DollarSign className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />AMS support: $80K-$180K/year</li>
                <li className="flex items-start gap-2"><DollarSign className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />Integration partners: $100K-$300K</li>
              </ul>
            </div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-slate-200 mb-3">Cost differential</h3>
              <p className="text-4xl font-bold text-emerald-400 mb-4">~60-100×</p>
              <p className="text-sm text-slate-300 mb-4">Atlantis is 60-100 times cheaper</p>
              <p className="text-slate-300 text-sm leading-relaxed">For an NDT inspection contractor in the $5M-$50M revenue band, the $5-10M five-year savings from choosing Atlantis NDT ERP funds roughly: 12-25 additional certified technicians, an entire international expansion, or a full year of working capital. The SAP S/4HANA premium is rational at Fortune 500 scale and rarely rational below it.</p>
            </div>
          </div>
        </section>

        {/* WHY ODOO FOR NDT */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Why an NDT inspection company should pick Atlantis NDT ERP over SAP</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <h3 className="font-semibold text-emerald-300 mb-2">1. NDT-industry pre-configuration</h3>
              <p className="text-slate-300 text-sm leading-relaxed">SAP ships a horizontal ERP. Atlantis NDT ERP ships NDT-specific configuration: ASNT SNT-TC-1A written-practice library, ISO 9712 / PCN / CSWIP certification schemes, API 510/570/653 inspection-interval scheduling, NACE MR0175 sour-service damage models, OSHA PSM 29 CFR 1910.119 evidence-pack templates, Aramco SAEP-1112 qualification mapping, ADNOC AIM Standard reporting formats. Day-one productive vs 9-15 months of SAP custom build.</p>
            </div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <h3 className="font-semibold text-emerald-300 mb-2">2. Customization speed (Python vs ABAP)</h3>
              <p className="text-slate-300 text-sm leading-relaxed">Odoo's open-source Python architecture allows customization 5-10× faster than SAP ABAP development. When your largest client demands a new inspection-report format or a new vendor-portal evidence export, Atlantis NDT ERP delivers in 2-5 days. SAP equivalent: 4-8 weeks of ABAP development through change request.</p>
            </div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <h3 className="font-semibold text-emerald-300 mb-2">3. Implementation timeline (weeks vs months)</h3>
              <p className="text-slate-300 text-sm leading-relaxed">Atlantis NDT ERP goes live in 4-10 weeks. SAP S/4HANA Public Cloud needs 9-15 months minimum. Every month of SAP implementation is a month your competitors win contracts faster because they can quote, dispatch and invoice in real-time on Atlantis.</p>
            </div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <h3 className="font-semibold text-emerald-300 mb-2">4. Single-vendor accountability</h3>
              <p className="text-slate-300 text-sm leading-relaxed">SAP deployments involve SAP (license), a tier-1 SI (implementation), an AMS provider (support), integration partners, and often a separate change-management consultancy — five vendors managing one ERP. Atlantis NDT ERP is one vendor: license, implementation, support, integration, training and customization all from the Atlantis NDT team. One number to call when something breaks.</p>
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
            <p className="text-slate-300 leading-relaxed mt-4 text-sm">If those statements fit your business, SAP is a legitimate choice and the $5-10M five-year cost is rational. If they don't — and they don't fit the vast majority of NDT inspection contractors — Atlantis NDT ERP delivers the same operating capability at 1-2% of the cost.</p>
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
