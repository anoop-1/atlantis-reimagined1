import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import ContactDetails from "@/components/ContactDetails";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, DollarSign, Clock, ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQS = [
  {
    question: "How does Oracle NetSuite OneWorld compare on cost to Atlantis NDT ERP for an inspection company?",
    answer: "NetSuite OneWorld plus the SuiteSuccess Professional Services edition is per-user enterprise pricing — for a 50-user inspection firm, the combination of license, tier-1 partner implementation (Oracle's own NetSuite Services, Big Bang ERP, RSM, Eide Bailly), customization, integration and support translates into a multi-million-dollar five-year total cost of ownership. Atlantis NDT ERP (Odoo 18 base with NDT-industry overlay) is affordable, accessible, fully customizable SaaS covering the same mid-market scope. Pricing varies by region and team size — request a tailored quote at info@atlantisndt.com.",
  },
  {
    question: "Is NetSuite OpenAir / SuiteProjects really better for services firms than Odoo?",
    answer: "Honest answer: NetSuite OpenAir and SuiteProjects are mature project-services accounting platforms with deep revenue-recognition rules, time-and-expense workflows and resource-utilization analytics that Odoo Project + Timesheets does not match feature-for-feature at the edge cases. However, for the actual workflow of an NDT inspection contractor — project setup, technician assignment, daily timesheet capture, equipment dispatch, deliverable tracking, multi-currency invoicing, project profitability reporting — Atlantis NDT ERP delivers the same business outcomes. NetSuite OpenAir genuinely wins for: (1) complex multi-stream revenue recognition under ASC 606; (2) percent-of-completion accounting on large multi-year EPC contracts; (3) resource forecasting with availability heat maps across 200+ consultants. For 95% of NDT contractors below 200 technicians, Atlantis NDT ERP is fully sufficient.",
  },
  {
    question: "How long does NetSuite implementation take vs Atlantis NDT ERP?",
    answer: "NetSuite OneWorld with OpenAir for a 50-user services firm: 4-9 months from contract to go-live via SuiteSuccess methodology, with another 3-6 months of post-go-live optimization. The SuiteSuccess methodology (Bootstrap, Design, Configure, Refine, Go-Live, Hyper-care) is faster than SAP Activate but slower than Atlantis. Atlantis NDT ERP implementation: 4-10 weeks. The speed advantage matters operationally — a 50-user inspection contractor gets 6-8 months of additional operational benefit from Atlantis NDT ERP compared to a NetSuite path.",
  },
  {
    question: "Can NetSuite track ASNT / ISO 9712 / PCN certifications out of the box?",
    answer: "No. NetSuite OneWorld is a horizontal services ERP — it covers accounting, CRM, project management, inventory, procurement and HR very well but ships zero NDT-industry pre-configuration. Implementing ASNT SNT-TC-1A written-practice tracking, ISO 9712 NDT method libraries, PCN/CSWIP certification schemes, API 510/570/653 inspection-interval scheduling, NACE MR0175 corrosion trending or Aramco SAEP-1112 qualification mapping in NetSuite is custom SuiteScript / SuiteApp development — typically a scoped, quoted figure per overlay area, plus ongoing maintenance. Atlantis NDT ERP ships every one of these out-of-the-box. The NDT-industry overlay is the core reason Atlantis NDT ERP exists.",
  },
  {
    question: "Why would an NDT contractor still pick NetSuite over Atlantis NDT ERP?",
    answer: "Three legitimate reasons. (1) Multi-country OneWorld: if the contractor operates 20+ legal entities across multiple regions and needs Oracle's mature OneWorld consolidation infrastructure, NetSuite genuinely beats Odoo on consolidation depth. (2) Tight Salesforce + Oracle ecosystem integration: if the customer's parent corporate group runs on Oracle (Oracle Cloud HCM, Oracle CX, Oracle E-Business Suite), staying inside the Oracle ecosystem reduces integration cost. (3) Mature partner ecosystem: NetSuite has a large partner network with deep services-firm-specific implementation experience — useful if you want a partner-led implementation rather than a vendor-led one. Outside those three scenarios, Atlantis NDT ERP delivers the same outcome at 1-2% of the cost.",
  },
  {
    question: "Can I migrate from NetSuite to Atlantis NDT ERP safely?",
    answer: "Yes. NetSuite-to-Odoo migration is conceptually simpler than SAP-to-Odoo because NetSuite's data model is more REST-friendly. Standard methodology: (1) Extract via NetSuite SuiteTalk REST API or SuiteAnalytics ODBC connector — vendor master, customer master, GL, AR/AP open items, fixed assets, project WBS, time records; (2) Map to Atlantis NDT ERP data model with NDT-overlay transformations; (3) Load with batch validation; (4) Run NetSuite and Atlantis in parallel for 1-2 monthly close cycles; (5) Cutover. Typical timeline: 8-16 weeks for a 25-100 user mid-market NDT contractor. The Atlantis NDT migration team has run multiple NetSuite-to-Odoo projects.",
  },
  {
    question: "Is Atlantis NDT ERP secure enough to handle the same data NetSuite handles?",
    answer: "Yes. Atlantis NDT ERP runs on ISO 27001-certified infrastructure with AES-256 at-rest encryption, TLS 1.3 in transit, role-based access control, audit logging of every record change, and multi-region disaster recovery with hourly database backups. GDPR, CCPA, PDPL (Saudi/UAE/Bahrain), DPDP Act 2023 (India) and PIPEDA (Canada) compliant. Data residency options for USA, EU, UAE, Saudi (in-Kingdom), India and Singapore — the same residency set NetSuite offers. The security and compliance bar is equivalent for an NDT inspection contractor; cost is not.",
  },
  {
    question: "Does Atlantis NDT ERP handle multi-currency / multi-entity at NetSuite's level?",
    answer: "For up to ~15 legal entities with multi-currency, intercompany invoicing, FX revaluation, transfer-price tracking and consolidated reporting, Atlantis NDT ERP is fully sufficient. Native support for 160+ currencies, IFRS / US GAAP / local GAAP per entity, automated intercompany eliminations, multi-book accounting for tax vs management reporting, parallel chart of accounts where regional regulators require it (India IndAS, Brazil CPCs, Saudi ZATCA), and configurable approval matrices per entity. Where NetSuite OneWorld genuinely pulls ahead: 50+ entity consolidation, deep transfer-pricing analytics, integrated global tax engine for 100+ countries. Few NDT inspection contractors operate at that scale.",
  },
];

const comparisonRows = [
  { capability: "Annual license cost (50 users)", atlantis: "affordable, accessible,", netsuite: "a scoped, quoted figure", winner: "atlantis" },
  { capability: "5-year total cost of ownership", atlantis: "a scoped, quoted figure", netsuite: "a scoped, quoted figure", winner: "atlantis" },
  { capability: "Implementation timeline", atlantis: "4–10 weeks", netsuite: "4–9 months", winner: "atlantis" },
  { capability: "ASNT SNT-TC-1A certification tracking", atlantis: "Pre-configured", netsuite: "Custom SuiteScript build", winner: "atlantis" },
  { capability: "ISO 9712 / PCN / CSWIP record library", atlantis: "Pre-loaded", netsuite: "Custom build required", winner: "atlantis" },
  { capability: "API 510 / 570 / 653 inspection scheduling", atlantis: "Pre-configured intervals", netsuite: "Custom build required", winner: "atlantis" },
  { capability: "NACE MR0175 corrosion trending", atlantis: "Pre-built damage models", netsuite: "Not native", winner: "atlantis" },
  { capability: "OSHA PSM 29 CFR 1910.119 evidence pack", atlantis: "Single-click ZIP export", netsuite: "Custom SuiteAnalytics report", winner: "atlantis" },
  { capability: "Aramco SAEP-1112 / APQS portal integration", atlantis: "Native connector", netsuite: "Custom integration", winner: "atlantis" },
  { capability: "ADNOC Tejari vendor portal integration", atlantis: "Native connector", netsuite: "Custom integration", winner: "atlantis" },
  { capability: "Multi-country consolidation (≤15 entities)", atlantis: "Strong", netsuite: "Best (OneWorld)", winner: "netsuite" },
  { capability: "Multi-country consolidation (50+ entities)", atlantis: "Limited", netsuite: "Best (OneWorld)", winner: "netsuite" },
  { capability: "Project services accounting (ASC 606)", atlantis: "Strong", netsuite: "Best (OpenAir / SuiteProjects)", winner: "netsuite" },
  { capability: "Multi-currency (160+ currencies)", atlantis: "Native", netsuite: "Native", winner: "parity" },
  { capability: "Cloud + on-premise deployment options", atlantis: "Cloud (multi-region) + private", netsuite: "Cloud only (single vendor cloud)", winner: "atlantis" },
  { capability: "Customization speed", atlantis: "Python (open, fast)", netsuite: "SuiteScript (moderate)", winner: "atlantis" },
  { capability: "Mobile field-data capture (offline)", atlantis: "iOS + Android, offline-capable", netsuite: "SuiteMobile (limited offline)", winner: "atlantis" },
  { capability: "Languages bundled", atlantis: "60+", netsuite: "27", winner: "atlantis" },
  { capability: "Data residency (Saudi in-Kingdom)", atlantis: "Available", netsuite: "Not available (Oracle Cloud regions)", winner: "atlantis" },
  { capability: "Single-vendor accountability", atlantis: "1 vendor (Atlantis)", netsuite: "Oracle + implementation partner + AMS", winner: "atlantis" },
];

const caseStudies = [
  {
    title: "Mid-size pipeline integrity contractor (Houston + Tulsa, 42 technicians)",
    body: "Evaluated NetSuite OneWorld via a tier-1 services-firm partner — quote implementation plus subscription separately for OneWorld + OpenAir + SuiteCommerce Advanced. Chose Atlantis NDT ERP at affordable, accessible flat. API 1160 pipeline integrity management documentation, PHMSA HCA evidence packs and Cushing tank-farm API 653 scheduling all pre-built. Saved approximately a scoped, quoted figure over 5 years; cleared next PHMSA audit with zero major findings.",
  },
  {
    title: "Calibration laboratory group (multi-site India, 28 technicians)",
    body: "NABL ISO 17025 calibration laboratory operating across Mumbai, Bangalore and Hyderabad. NetSuite OneWorld quote: INR 4.8 crore over 5 years for multi-entity consolidation. Atlantis NDT ERP on affordable flat regional pricing. ISO 17025 calibration record tracking, uncertainty budget calculations, NABL CIPM-aligned audit trails and PESO Form XVI/XIV statutory submissions all pre-built. Saved approximately INR 4.05 crore over 5 years.",
  },
  {
    title: "Aerospace quality-control inspection firm (Bangalore + Toulouse, 36 technicians)",
    body: "Serving GE Aviation, Pratt & Whitney, Safran, Honeywell Aerospace and Boeing supplier-base work, the contractor needed NAS 410 Rev 5 currency tracking, NADCAP MAUP audit-pack export, DGCA Form CA-39 and EASA Part-145 documentation across two legal entities. NetSuite quote: a scoped, quoted figure over 5 years. Atlantis NDT ERP a scoped, quoted figure over 5 years (multi-entity premium). Cleared next NADCAP MAUP audit with zero findings.",
  },
  {
    title: "Marine survey company (Singapore + Dubai, 22 technicians)",
    body: "ABS / Lloyd's Register / DNV / IRClass classification-society inspection work across Singapore Jurong Island, Sembcorp Marine and Dubai Drydocks World. NetSuite OneWorld quote: a scoped, quoted figure over 5 years for two-entity OneWorld setup. Atlantis NDT ERP a scoped, quoted figure over 5 years. IACS classification-society survey-pack export, MPA / DM marine-jetty inspection scheduling and bilingual English/Arabic / English/Bahasa reporting all pre-built.",
  },
  {
    title: "Welding fabrication shop with QA/QC arm (Vadodara, 25 technicians + 80 welders)",
    body: "L&T Heavy Engineering and Reliance Hazira supplier work — AWS D1.1 welder qualification tracking, ASME Section IX PQR/WPS management, IS 2825 pressure-vessel code conformity. NetSuite Manufacturing OneWorld quote: INR 3.2 crore over 5 years. Atlantis NDT ERP on affordable flat regional pricing. Welder qualification database, NDE traveler integration with L&T Heavy Engineering portal and bilingual English/Gujarati documentation all delivered in 7 weeks.",
  },
  {
    title: "Field-service NDT contractor (Edmonton, 31 technicians)",
    body: "Alberta oil-sands FIFO operations to Fort McMurray, Kearl, Horizon and Cold Lake. NetSuite OneWorld + Field Service Management quote: CAD 980K over 5 years. Atlantis NDT ERP on affordable flat regional pricing. ABSA CRN tracking, CGSB 48.9712 currency monitoring, FIFO roster automation and cold-weather mobilization packs all delivered in 8 weeks. Saved approximately CAD 855K over 5 years; eliminated days of pre-deployment paperwork on oil-sands turnaround projects.",
  },
  {
    title: "Construction quality assurance firm (Dubai + Abu Dhabi, 40 technicians)",
    body: "Serving ADNOC Ruwais expansion, Etihad Rail, Masdar City and Dubai South Aviation City construction QA — concrete cylinder testing, soil testing, structural welding inspection, MEP commissioning. NetSuite OneWorld quote: AED 2.3M over 5 years. Atlantis NDT ERP on affordable flat regional pricing. Construction-specific work-order management, FANR radiography licensing tracking, EIAC ISO 17020 audit-trail compliance and Tejari evidence-pack export all pre-built. Saved approximately AED 1.97M over 5 years.",
  },
];

export default function OdooVsNetSuiteNdtCompanies() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <SEOHead
        title="Atlantis NDT (Odoo) vs Oracle NetSuite for NDT Companies — affordable, accessible vs a scoped, quoted figure | Atlantis NDT"
        description="Honest 2026 comparison: Atlantis NDT ERP (Odoo 18, affordable, accessible) vs enterprise-tier Oracle NetSuite OneWorld. 20-row capability matrix, 5-year TCO, 7 NDT case studies, when NetSuite genuinely wins."
        canonical="/erp/odoo-vs-netsuite-ndt-companies"
        faq={FAQS}
        article={{
          headline: "Atlantis NDT ERP (Odoo) vs Oracle NetSuite — Honest 2026 Comparison for NDT Inspection Companies",
          datePublished: "2026-05-23",
          author: "Atlantis NDT Editorial Team",
          section: "ERP Comparison",
        }}
      />
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "ERP", href: "/erp" }, { label: "Atlantis NDT vs NetSuite" }]} />

        {/* HERO */}
        <section className="mt-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Atlantis NDT (Odoo) vs Oracle NetSuite for NDT Inspection Companies — affordable, accessible vs a scoped, quoted figure+
          </h1>
          <p className="text-xl text-slate-300 mb-6 max-w-3xl leading-relaxed">
            Honest, vendor-neutral 2026 comparison of <span className="text-emerald-400 font-semibold">Atlantis NDT ERP</span> (Odoo 18 base with NDT-industry overlay, flat regional pricing) against <span className="text-orange-400 font-semibold">Oracle NetSuite OneWorld</span> — the mid-market services ERP gold standard. 20-row capability matrix, full 5-year total cost of ownership, 7 real NDT case studies and honest commentary on where NetSuite genuinely wins.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-4 py-2 text-emerald-300">
              <DollarSign className="w-4 h-4" />
              <span className="font-semibold">regional pricing</span>
              <span className="text-emerald-200/70 text-sm">Atlantis NDT ERP</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-lg px-4 py-2 text-orange-300">
              <DollarSign className="w-4 h-4" />
              <span className="font-semibold">a scoped, quoted figure</span>
              <span className="text-orange-200/70 text-sm">NetSuite OneWorld (50 users)</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-lg px-4 py-2 text-purple-300">
              <Clock className="w-4 h-4" />
              <span className="font-semibold">4–10 weeks vs 4–9 months</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:info@atlantisndt.com?subject=Demo%20request%3A%20Odoo%20vs%20NetSuite%20for%20NDT"
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
              Oracle NetSuite is the default mid-market cloud ERP. NetSuite OneWorld + OpenAir is the standard recommendation that every services-firm management consultant and most CFO advisory groups will put on the shortlist when an NDT inspection contractor asks "what ERP should we use?". It is a genuinely strong platform — but its cost basis (typically a scoped, quoted figure 7M over five years for a 50-user mid-market firm) reflects Oracle's enterprise pricing strategy, not the functional gap between NetSuite and Atlantis NDT ERP.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              For an NDT inspection contractor between 5 and 500 technicians, Atlantis NDT ERP (Odoo 18 base with deep NDT-industry overlay covering ASNT, ISO 9712, PCN, CSWIP, API codes, NACE MR0175, OSHA PSM, OISD-141, Aramco SAEP-1112 and ADNOC AIM) delivers equivalent operating capability at a scoped, quoted figure over the same 5 years. NetSuite genuinely wins when the contractor operates 20+ legal entities globally with deep parallel-GAAP requirements, or when the parent corporate group already runs on the Oracle Cloud ecosystem. Outside those scenarios, the cost premium is hard to justify.
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
                  <th className="px-4 py-3 text-left text-orange-300 font-semibold">Oracle NetSuite OneWorld</th>
                  <th className="px-4 py-3 text-left text-slate-200 font-semibold">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-slate-900/30" : "bg-slate-900/10"}>
                    <td className="px-4 py-3 text-slate-200">{row.capability}</td>
                    <td className="px-4 py-3 text-slate-300">{row.atlantis}</td>
                    <td className="px-4 py-3 text-slate-300">{row.netsuite}</td>
                    <td className="px-4 py-3">
                      {row.winner === "atlantis" && <span className="text-emerald-400 font-semibold">Atlantis</span>}
                      {row.winner === "netsuite" && <span className="text-orange-400 font-semibold">NetSuite</span>}
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
              <p className="text-4xl font-bold text-white mb-4">a scoped, quoted figure</p>
              <p className="text-sm text-emerald-200 mb-4">over 5 years, flat</p>
              <ul className="space-y-2 text-slate-200 text-sm">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />License: regional pricing — contact us — all apps included</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />Implementation: a scoped, quoted figure one-off</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />Customization: a scoped, quoted figure (NDT overlay pre-built)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />Support + upgrades: included</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />Mobile, training, hosting: included</li>
              </ul>
            </div>
            <div className="bg-orange-900/30 border border-orange-500/30 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-orange-300 mb-3">NetSuite OneWorld + OpenAir</h3>
              <p className="text-4xl font-bold text-white mb-4">a scoped, quoted figure</p>
              <p className="text-sm text-orange-200 mb-4">over 5 years, fully loaded</p>
              <ul className="space-y-2 text-slate-200 text-sm">
                <li className="flex items-start gap-2"><DollarSign className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />License: a scoped, quoted figure (50 users)</li>
                <li className="flex items-start gap-2"><DollarSign className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />Implementation (tier-1 partner): a scoped, quoted figure</li>
                <li className="flex items-start gap-2"><DollarSign className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />NDT-industry customization: a scoped, quoted figure</li>
                <li className="flex items-start gap-2"><DollarSign className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />Support + SuiteSupport: included in subscription</li>
                <li className="flex items-start gap-2"><DollarSign className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />SuiteApps + integrations: a scoped, quoted figure</li>
              </ul>
            </div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-slate-200 mb-3">Cost differential</h3>
              <p className="text-4xl font-bold text-emerald-400 mb-4">~45-80×</p>
              <p className="text-sm text-slate-300 mb-4">Atlantis is 45-80 times cheaper</p>
              <p className="text-slate-300 text-sm leading-relaxed">For an NDT inspection contractor in the a scoped, quoted figure revenue band, the a scoped, quoted figure 7M five-year savings from choosing Atlantis NDT ERP funds roughly: 10-18 additional certified technicians, a multi-region office expansion, or 18-24 months of CAPEX-grade phased-array UT equipment investment. NetSuite is the standard mid-market recommendation — Atlantis NDT ERP is the NDT-industry-specific recommendation.</p>
            </div>
          </div>
        </section>

        {/* WHY ODOO FOR NDT */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Why an NDT inspection company should pick Atlantis NDT ERP over NetSuite</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <h3 className="font-semibold text-emerald-300 mb-2">1. NDT-industry pre-configuration</h3>
              <p className="text-slate-300 text-sm leading-relaxed">NetSuite ships a horizontal services ERP. Atlantis NDT ERP ships NDT-specific configuration: ASNT SNT-TC-1A written-practice library, ISO 9712 / PCN / CSWIP certification schemes, API 510/570/653 inspection-interval scheduling, NACE MR0175 sour-service damage models, OSHA PSM evidence-pack templates, Aramco SAEP-1112 qualification mapping, ADNOC AIM Standard reporting formats. Day-one productive vs months of SuiteScript customization.</p>
            </div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <h3 className="font-semibold text-emerald-300 mb-2">2. Flat-fee vs per-user pricing</h3>
              <p className="text-slate-300 text-sm leading-relaxed">NetSuite charges per named user, so doubling headcount roughly doubles the licence cost. Atlantis NDT ERP uses a flat regional band that covers a core team, with additional users added incrementally rather than at full per-seat rate — so scaling a crew does not scale the licence proportionally. Inspection contractors with seasonal swings (turnaround crews, FIFO rotations, project-based hiring) benefit most from that shape. Pricing varies by region and team size — request a tailored quote.</p>
            </div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <h3 className="font-semibold text-emerald-300 mb-2">3. Open-source flexibility</h3>
              <p className="text-slate-300 text-sm leading-relaxed">Odoo's open-source Python codebase means you (or any qualified Odoo partner) can read every line of code, audit every workflow, modify any module and own your data without vendor lock-in. NetSuite is a closed SaaS — your customizations live in SuiteScript on Oracle's platform, and your data is hostage to your subscription. If you ever leave NetSuite, getting your data out cleanly takes weeks. With Atlantis NDT ERP you can take a full Odoo backup any day.</p>
            </div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <h3 className="font-semibold text-emerald-300 mb-2">4. Faster implementation</h3>
              <p className="text-slate-300 text-sm leading-relaxed">Atlantis NDT ERP goes live in 4-10 weeks. NetSuite SuiteSuccess takes 4-9 months. Every month is a month you cannot quote, dispatch and invoice from a single system of record. The 4-6 month gap matters operationally.</p>
            </div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <h3 className="font-semibold text-emerald-300 mb-2">5. Data residency for Middle East / India</h3>
              <p className="text-slate-300 text-sm leading-relaxed">Atlantis NDT ERP offers in-Kingdom Saudi Arabia, in-UAE, in-India, in-EU and Singapore data residency — meeting Saudi PDPL, UAE PDPL, India DPDP Act 2023 and EU GDPR requirements without subprocessor complications. NetSuite runs from Oracle Cloud regions that do not include in-Kingdom Saudi data residency as of 2026, which is a regulatory blocker for NDT contractors holding Saudi Aramco SAEP-1112 and SACS-002 cybersecurity-compliance requirements.</p>
            </div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <h3 className="font-semibold text-emerald-300 mb-2">6. Single-vendor accountability</h3>
              <p className="text-slate-300 text-sm leading-relaxed">NetSuite deployments typically involve Oracle (license), an implementation partner (configuration), an integration partner (third-party app connectors) and sometimes a separate optimization partner — four vendors managing one ERP. Atlantis NDT ERP is one vendor: license, implementation, support, integration, training and customization all from the Atlantis NDT team in Hyderabad and Houston.</p>
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Anonymized case studies — NDT contractors who chose Atlantis NDT ERP over NetSuite</h2>
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

        {/* WHERE NETSUITE WINS */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">When Oracle NetSuite is genuinely the right choice</h2>
          <div className="bg-orange-900/20 border border-orange-500/30 rounded-2xl p-6">
            <p className="text-slate-200 leading-relaxed mb-4">NetSuite genuinely wins for NDT inspection contractors when:</p>
            <ul className="space-y-2 text-slate-200">
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />You operate 20+ legal entities across multiple regions with deep OneWorld consolidation requirements</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />You require ASC 606 / IFRS 15 percent-of-completion revenue recognition on multi-year EPC contracts above a scoped, quoted figure each</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />Your parent corporate group already runs on Oracle Cloud HCM, Oracle CX or Oracle E-Business Suite</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />You need OpenAir's mature resource-utilization analytics across 200+ billable consultants</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />Your CFO has prior NetSuite experience and prefers the platform on familiarity grounds</li>
            </ul>
            <p className="text-slate-300 leading-relaxed mt-4 text-sm">If those statements fit your business, NetSuite is a legitimate choice. If they don't — and they don't fit the vast majority of NDT inspection contractors below 200 technicians — Atlantis NDT ERP delivers the same operating capability at 1-2% of the cost.</p>
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
          <div className="bg-gradient-to-br from-emerald-900/40 to-orange-900/40 border border-emerald-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-3">Request a side-by-side Atlantis NDT ERP vs NetSuite demo</h2>
            <p className="text-slate-200 mb-6 max-w-2xl mx-auto">Book a 30-minute demo with the Atlantis NDT team. We will run your actual NDT inspection workflow through Atlantis NDT ERP and walk through how NetSuite OneWorld would handle the same scope — honest assessment, no marketing fluff.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="mailto:info@atlantisndt.com?subject=Demo%20request%3A%20Atlantis%20vs%20NetSuite"
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
