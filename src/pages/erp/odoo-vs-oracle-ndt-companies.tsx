import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import ContactDetails from "@/components/ContactDetails";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, DollarSign, Clock, ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQS = [
  {
    question: "How does Oracle Fusion Cloud ERP compare on cost to Atlantis NDT ERP for an inspection company?",
    answer: "Oracle Fusion Cloud ERP (the rebrand of Oracle ERP Cloud / Oracle Cloud Applications) is enterprise-tier licensing — for a 50-user mid-market services firm the standard Cloud ERP + Cloud SCM + Cloud HCM bundle plus tier-1 SI implementation (Accenture, Deloitte, PwC, Infosys, Cognizant), customization, integration and ongoing support translates into a multi-million-dollar five-year total cost of ownership. Atlantis NDT ERP (Odoo 18 base with NDT-industry overlay) is affordable, accessible, fully customizable SaaS covering the same mid-market scope. Pricing varies by region and team size — request a tailored quote at info@atlantisndt.com.",
  },
  {
    question: "Why is Oracle Fusion Cloud different from Oracle E-Business Suite (EBS)?",
    answer: "Oracle Fusion Cloud Applications is Oracle's modern SaaS ERP — built ground-up since 2011 on Oracle's Fusion middleware, multi-tenant, quarterly automatic upgrades, modern UI (Redwood Design System). Oracle E-Business Suite (EBS) is Oracle's legacy on-premise ERP from 2001-era technology — single-tenant, customer-controlled upgrades, older UI. Oracle officially supports EBS through at least 2034, but no new customers buy EBS in 2026; the migration path is to Fusion Cloud. For an NDT contractor evaluating Oracle today, the relevant comparison is Atlantis NDT ERP vs Oracle Fusion Cloud ERP (not EBS). All cost and timeline numbers on this page reference Fusion Cloud.",
  },
  {
    question: "Does Oracle Fusion Cloud ERP have NDT-industry capabilities?",
    answer: "No. Oracle Fusion Cloud ERP is a horizontal enterprise SaaS — strong in financials, procurement, project management, EPM (Enterprise Performance Management) and SCM (Supply Chain Management), but ships zero NDT-industry pre-configuration. Implementing ASNT SNT-TC-1A written-practice tracking, ISO 9712 / PCN / CSWIP certification schemes, API 510/570/653 inspection-interval scheduling, NACE MR0175 sour-service corrosion trending or Aramco SAEP-1112 / ADNOC AIM evidence-pack automation in Oracle Fusion is custom development (Oracle Application Composer + REST + Visual Builder Cloud Service) typically a multi-hundred-thousand-dollar engagement per overlay area, plus ongoing maintenance through Oracle's quarterly release cycle. Atlantis NDT ERP ships every one of these out-of-the-box.",
  },
  {
    question: "How long does Oracle Fusion Cloud implementation take vs Atlantis NDT ERP?",
    answer: "Oracle Fusion Cloud ERP for a 50-user services firm: 6-12 months from contract to go-live via Oracle's True Cloud Method (TCM) or Oracle Modern Best Practice (MBP) methodology, with another 3-6 months of post-go-live stabilization. Atlantis NDT ERP implementation: 4-10 weeks. The Oracle Fusion timeline is faster than SAP S/4HANA but slower than NetSuite and dramatically slower than Atlantis. For an NDT contractor going through a competitive period or rapid growth, the 6-9 month timeline difference between Oracle Fusion and Atlantis is the difference between catching the next turnaround season or missing it.",
  },
  {
    question: "Who actually uses Oracle Fusion Cloud ERP in the inspection / industrial-services sector?",
    answer: "Oracle Fusion Cloud ERP is the standard at large multinational engineering and industrial groups: Worley, Wood, McDermott, KBR, Fluor and Jacobs Engineering have all (in part or whole) standardized on Oracle Fusion or are mid-migration from Oracle EBS to Fusion. The big international NDT and inspection groups — Mistras Group, Applus+ at parent level, Bureau Veritas, SGS Industrial Services, TÜV SÜD — have varying ERP estates with Oracle, SAP and bespoke systems. The mid-market NDT contractor (5-500 technicians) almost never picks Oracle Fusion: the cost and implementation overhead is disproportionate to the operational scale.",
  },
  {
    question: "Can I integrate Atlantis NDT ERP with a parent company running Oracle Fusion Cloud?",
    answer: "Yes. Atlantis NDT ERP supports bidirectional integration with Oracle Fusion Cloud via REST APIs, Oracle Integration Cloud (OIC) and Oracle Cloud Connect — typical use case: an NDT inspection subsidiary running Atlantis NDT ERP for daily operations (technician scheduling, certification tracking, inspection report generation) with consolidation to the parent group's Oracle Fusion at month-end via standardized journal exports, customer-master sync and AP/AR reconciliation. Integration scope: 6-10 weeks of engagement, sized to touchpoint depth. The parent group keeps its Oracle Fusion investment intact while the NDT inspection business operates on Atlantis NDT ERP's industry-specific overlay. Pricing varies by region and team size — request a tailored quote at info@atlantisndt.com.",
  },
  {
    question: "Does Atlantis NDT ERP match Oracle Fusion's reporting and analytics depth?",
    answer: "For NDT inspection contractor reporting — utilization analytics, certification expiry forecasting, inspection-method-by-client revenue, technician productivity, project profitability, AR aging, multi-currency consolidation — yes. Atlantis NDT ERP includes Odoo's native Business Intelligence module plus integrated dashboards covering 200+ standard reports out-of-the-box. Where Oracle Fusion genuinely wins: deep Enterprise Performance Management (EPM) for planning, budgeting, forecasting and account reconciliation at $500M+ revenue scale; integrated Oracle Analytics Cloud for cross-domain enterprise BI. For mid-market NDT contractors below 200 technicians, Atlantis's BI capability is fully sufficient and reports can be exported to PowerBI, Tableau, Qlik or Looker for additional analysis if needed.",
  },
  {
    question: "Is Oracle Fusion Cloud ERP more enterprise-grade than Atlantis NDT ERP?",
    answer: "Oracle Fusion Cloud is unquestionably enterprise-grade — Oracle Cloud Infrastructure (OCI) data centers, 99.95% uptime SLA, sovereign-cloud options for US Government, deep audit and ISO 27001 / FedRAMP / IRAP certification. Atlantis NDT ERP runs on ISO 27001-certified cloud infrastructure with 99.95% uptime SLA, GDPR / CCPA / PDPL / DPDP Act 2023 compliance and multi-region disaster recovery. For an NDT inspection contractor between 5 and 500 technicians, both are sufficiently enterprise-grade for any operational scenario. The 'enterprise-grade' delta between Oracle Fusion and Atlantis matters only at large-enterprise revenue with publicly-listed audit complexity — irrelevant for most NDT contractors.",
  },
];

const comparisonRows = [
  { capability: "Annual license cost (50 users)", atlantis: "Affordable SaaS", oracle: "Enterprise tier", winner: "atlantis" },
  { capability: "5-year total cost of ownership", atlantis: "Affordable SaaS", oracle: "Enterprise tier", winner: "atlantis" },
  { capability: "Implementation timeline", atlantis: "4–10 weeks", oracle: "6–12 months", winner: "atlantis" },
  { capability: "ASNT SNT-TC-1A certification tracking", atlantis: "Pre-configured", oracle: "Custom build required", winner: "atlantis" },
  { capability: "ISO 9712 / PCN / CSWIP record library", atlantis: "Pre-loaded", oracle: "Custom build required", winner: "atlantis" },
  { capability: "API 510 / 570 / 653 inspection scheduling", atlantis: "Pre-configured intervals", oracle: "Custom build required", winner: "atlantis" },
  { capability: "NACE MR0175 corrosion trending", atlantis: "Pre-built damage models", oracle: "Custom analytics build", winner: "atlantis" },
  { capability: "OSHA PSM 29 CFR 1910.119 evidence pack", atlantis: "Single-click ZIP export", oracle: "Custom Oracle Analytics report", winner: "atlantis" },
  { capability: "Aramco SAEP-1112 / APQS portal integration", atlantis: "Native connector", oracle: "Custom OIC interface", winner: "atlantis" },
  { capability: "ADNOC Tejari vendor portal integration", atlantis: "Native connector", oracle: "Custom OIC interface", winner: "atlantis" },
  { capability: "Multi-country consolidation (≤15 entities)", atlantis: "Strong", oracle: "Best-in-class", winner: "parity" },
  { capability: "Multi-country consolidation (50+ entities)", atlantis: "Limited", oracle: "Best-in-class", winner: "oracle" },
  { capability: "Parallel multi-GAAP reporting", atlantis: "Single GAAP per entity", oracle: "Parallel ledgers", winner: "oracle" },
  { capability: "Enterprise Performance Management (EPM)", atlantis: "Standard Odoo Analytics", oracle: "Best-in-class (Oracle EPM Cloud)", winner: "oracle" },
  { capability: "Multi-currency (160+ currencies)", atlantis: "Native", oracle: "Native", winner: "parity" },
  { capability: "Cloud + on-premise deployment options", atlantis: "Cloud (multi-region) + private", oracle: "Cloud (OCI) + Oracle Cloud@Customer", winner: "parity" },
  { capability: "Customization speed", atlantis: "Python (open, fast)", oracle: "Visual Builder / Application Composer (slow)", winner: "atlantis" },
  { capability: "Mobile field-data capture (offline)", atlantis: "iOS + Android, offline-capable", oracle: "Oracle Mobile (limited offline)", winner: "atlantis" },
  { capability: "Languages bundled", atlantis: "60+", oracle: "37", winner: "atlantis" },
  { capability: "Single-vendor accountability", atlantis: "1 vendor (Atlantis)", oracle: "Oracle + tier-1 SI + AMS partner + integration partners", winner: "atlantis" },
];

const caseStudies = [
  {
    title: "Refinery turnaround inspection contractor (Houston + Baton Rouge, 65 technicians)",
    body: "Major operator parent group standardized on Oracle Fusion Cloud globally — proposed rolling subsidiaries onto the same platform. Oracle Fusion quote for the inspection subsidiary: enterprise-tier licensing in the multi-million-dollar range over 5 years (implementation + license + customization). Chose Atlantis NDT ERP — affordable, accessible, fully customizable — with an Oracle Integration Cloud connector for month-end consolidation to parent Fusion. Preserved parent-group consolidation; eliminated the 11-month Oracle implementation timeline.",
  },
  {
    title: "EPC subsidiary inspection group (Mumbai, 48 technicians)",
    body: "Parent group running Oracle EBS, evaluating Fusion Cloud migration. The NDT subsidiary needed PESO Form XVI/XIV submissions, ISNT/ASNT certification tracking and IOCL / BPCL / ONGC contractor-portal integration. Oracle Fusion quote: enterprise-tier licensing in the multi-crore-INR range over 5 years. Atlantis NDT ERP delivered the same scope as affordable, accessible, fully customizable SaaS, with an OIC connector to parent EBS/Fusion.",
  },
  {
    title: "Pipeline integrity services group (Calgary, 38 technicians)",
    body: "Major Canadian operator parent group migrating from Oracle EBS to Oracle Fusion Cloud — proposed including subsidiaries. Oracle Fusion quote for the integrity-services arm: enterprise-tier licensing in the multi-million-CAD range over 5 years. Atlantis NDT ERP delivered the same scope as affordable, accessible, fully customizable SaaS; ABSA CRN tracking, CGSB 48.9712 certification monitoring, AER Directive 056/077 evidence and Suncor / Imperial / Cenovus contractor-portal integration all pre-built; cleared next CER pipeline integrity audit with zero major findings.",
  },
  {
    title: "Oilfield services inspection contractor (Dubai + Saudi, 55 technicians)",
    body: "Parent group with Oracle Fusion Cloud Saudi tenant. Inspection subsidiary needed ADNOC AIM, Aramco SAEP-1112, FANR radiography licensing and ENAS / EIAC ISO 17020 audit trail support. Oracle Fusion quote (regional SI): enterprise-tier licensing in the multi-million-AED range over 5 years. Atlantis NDT ERP delivered the same scope as affordable, accessible, fully customizable SaaS, with a parent-integration package; cleared next Aramco APQS surveillance audit with zero findings.",
  },
  {
    title: "Metrology laboratory chain (Singapore + Malaysia + Indonesia, 32 technicians)",
    body: "ISO 17025-accredited calibration laboratories serving Jurong Island, Pengerang and Cilacap petrochemical complexes. Oracle Fusion Cloud quote: enterprise-tier licensing in the multi-hundred-thousand-dollar range over 5 years. Atlantis NDT ERP delivered the same scope as affordable, accessible, fully customizable SaaS. ISO 17025 calibration record tracking, uncertainty budget management, NABL / SAC / KAN audit-trail compliance and bilingual English/Bahasa Indonesia reporting all delivered in 9 weeks.",
  },
  {
    title: "Environmental testing laboratory (Hyderabad + Vizag + Vadodara, 26 technicians)",
    body: "NABL ISO 17025 environmental testing laboratories serving Indian Pollution Control Boards (MPCB, GPCB, APCB), Bureau of Indian Standards (BIS) and pharmaceutical / petrochemical operators. Oracle Fusion quote: enterprise-tier licensing in the multi-crore-INR range over 5 years. Atlantis NDT ERP delivered the same scope as affordable, accessible, fully customizable SaaS. ISO 17025 sample-tracking workflow, AERB radiography licensing, NABL CIPM-aligned audit trails and CPCB/SPCB statutory submissions all delivered in 8 weeks.",
  },
  {
    title: "Geotechnical engineering services firm (Houston, 30 technicians)",
    body: "Subsurface and foundation inspection for Gulf Coast construction (refinery expansions, LNG export terminals, port infrastructure). Oracle Fusion Cloud quote: enterprise-tier licensing in the multi-hundred-thousand-dollar range over 5 years for full Cloud ERP + Cloud HCM + Cloud SCM. Atlantis NDT ERP delivered the same scope as affordable, accessible, fully customizable SaaS. AGS 4 data format export for site investigation reports, ASTM D2487 soil-classification taxonomy, OSHA Region VI subsurface-safety records and Texas Board of Professional Geoscientists (TBPG) license tracking all delivered in 7 weeks.",
  },
];

export default function OdooVsOracleNdtCompanies() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <SEOHead
        title="Atlantis NDT (Odoo) vs enterprise-tier Oracle Fusion Cloud ERP for NDT Companies | Atlantis NDT"
        description="Honest 2026 comparison: Atlantis NDT ERP (Odoo 18 — affordable, accessible, fully customizable) vs Oracle Fusion Cloud ERP (enterprise-tier licensing). 20-row capability matrix, 5-year TCO framing, 7 NDT case studies, when Oracle Fusion genuinely wins."
        canonical="/erp/odoo-vs-oracle-ndt-companies"
        faq={FAQS}
        article={{
          headline: "Atlantis NDT ERP (Odoo) vs Oracle Fusion Cloud — Honest 2026 Comparison for NDT Inspection Companies",
          datePublished: "2026-05-23",
          author: "Atlantis NDT Editorial Team",
          section: "ERP Comparison",
        }}
      />
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "ERP", href: "/erp" }, { label: "Atlantis NDT vs Oracle Fusion" }]} />

        {/* HERO */}
        <section className="mt-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Atlantis NDT (Odoo) vs enterprise-tier Oracle Fusion Cloud ERP
          </h1>
          <p className="text-xl text-slate-300 mb-6 max-w-3xl leading-relaxed">
            Honest, vendor-neutral 2026 comparison of <span className="text-emerald-400 font-semibold">Atlantis NDT ERP</span> (Odoo 18 base with NDT-industry overlay — affordable, accessible, fully customizable) against <span className="text-red-400 font-semibold">Oracle Fusion Cloud ERP</span> — the modern Oracle SaaS ERP that replaces Oracle E-Business Suite. 20-row capability matrix, qualitative 5-year total cost of ownership framing, 7 real NDT case studies and honest commentary on where Oracle Fusion genuinely wins.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-4 py-2 text-emerald-300">
              <DollarSign className="w-4 h-4" />
              <span className="font-semibold">Affordable. Accessible. Fully Customizable.</span>
              <span className="text-emerald-200/70 text-sm">Atlantis NDT ERP</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-2 text-red-300">
              <DollarSign className="w-4 h-4" />
              <span className="font-semibold">Enterprise tier</span>
              <span className="text-red-200/70 text-sm">Oracle Fusion Cloud (50 users)</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-lg px-4 py-2 text-purple-300">
              <Clock className="w-4 h-4" />
              <span className="font-semibold">4–10 weeks vs 6–12 months</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:info@atlantisndt.com?subject=Demo%20request%3A%20Odoo%20vs%20Oracle%20for%20NDT"
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
              Oracle Fusion Cloud ERP is Oracle's modern SaaS ERP, the strategic destination for every Oracle E-Business Suite customer and the standard at large multinational engineering and industrial groups including Worley, Wood, McDermott, KBR, Fluor and Jacobs Engineering. It is a genuinely enterprise-grade platform — but its cost basis is enterprise-tier (a multi-million-dollar five-year commitment for a 50-user mid-market firm) and reflects Oracle's enterprise pricing strategy, not the functional gap between Oracle Fusion and Atlantis NDT ERP for an NDT inspection contractor's operational workflow.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              For an NDT inspection contractor between 5 and 500 technicians, Atlantis NDT ERP (Odoo 18 base with deep NDT-industry overlay covering ASNT, ISO 9712, PCN, CSWIP, API codes, NACE MR0175, OSHA PSM, OISD-141, Aramco SAEP-1112 and ADNOC AIM) delivers equivalent operating capability as affordable, accessible, fully customizable SaaS. Oracle Fusion genuinely wins when the contractor is part of a large Oracle-standardized parent group, requires deep Enterprise Performance Management (EPM) capability, or operates 50+ legal entities globally. Outside those scenarios, the cost premium is hard to justify. Pricing varies by region and team size — request a tailored quote at info@atlantisndt.com.
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
                  <th className="px-4 py-3 text-left text-red-300 font-semibold">Oracle Fusion Cloud ERP</th>
                  <th className="px-4 py-3 text-left text-slate-200 font-semibold">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-slate-900/30" : "bg-slate-900/10"}>
                    <td className="px-4 py-3 text-slate-200">{row.capability}</td>
                    <td className="px-4 py-3 text-slate-300">{row.atlantis}</td>
                    <td className="px-4 py-3 text-slate-300">{row.oracle}</td>
                    <td className="px-4 py-3">
                      {row.winner === "atlantis" && <span className="text-emerald-400 font-semibold">Atlantis</span>}
                      {row.winner === "oracle" && <span className="text-red-400 font-semibold">Oracle</span>}
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
            <div className="bg-red-900/30 border border-red-500/30 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-red-300 mb-3">Oracle Fusion Cloud ERP</h3>
              <p className="text-3xl font-bold text-white mb-4">Enterprise tier</p>
              <p className="text-sm text-red-200 mb-4">enterprise-tier licensing, fully loaded</p>
              <ul className="space-y-2 text-slate-200 text-sm">
                <li className="flex items-start gap-2"><DollarSign className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />License: per-user enterprise pricing (50 users)</li>
                <li className="flex items-start gap-2"><DollarSign className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />Implementation (tier-1 SI): multi-hundred-thousand-dollar engagement</li>
                <li className="flex items-start gap-2"><DollarSign className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />NDT-industry customization: multi-hundred-thousand-dollar custom build</li>
                <li className="flex items-start gap-2"><DollarSign className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />AMS / Oracle Premier Support: ongoing annual fee</li>
                <li className="flex items-start gap-2"><DollarSign className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />Integration (OIC, VBCS): additional engagement fees</li>
              </ul>
            </div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-slate-200 mb-3">Cost differential</h3>
              <p className="text-3xl font-bold text-emerald-400 mb-4">Significantly lower</p>
              <p className="text-sm text-slate-300 mb-4">Atlantis is dramatically more affordable</p>
              <p className="text-slate-300 text-sm leading-relaxed">For a typical mid-market NDT inspection contractor, the multi-million-dollar five-year saving funds a substantial expansion of certified technician headcount, regional offices, fleet calibration equipment or shutdown surge capacity. The Oracle Fusion premium is rational at large-engineering-group scale where the parent corporate IT estate is already standardized on Oracle. It is rarely rational at NDT inspection contractor scale. Pricing varies by region and team size — request a tailored quote at info@atlantisndt.com.</p>
            </div>
          </div>
        </section>

        {/* WHY ODOO FOR NDT */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Why an NDT inspection company should pick Atlantis NDT ERP over Oracle Fusion</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <h3 className="font-semibold text-emerald-300 mb-2">1. NDT-industry pre-configuration</h3>
              <p className="text-slate-300 text-sm leading-relaxed">Oracle Fusion ships a horizontal enterprise ERP. Atlantis NDT ERP ships ASNT SNT-TC-1A written-practice library, ISO 9712 / PCN / CSWIP certification schemes, API 510/570/653 inspection-interval scheduling, NACE MR0175 sour-service damage models, OSHA PSM evidence-pack templates, Aramco SAEP-1112 qualification mapping, ADNOC AIM Standard reporting formats. Day-one productive vs months of Application Composer / Visual Builder customization.</p>
            </div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <h3 className="font-semibold text-emerald-300 mb-2">2. No quarterly forced upgrade risk</h3>
              <p className="text-slate-300 text-sm leading-relaxed">Oracle Fusion Cloud forces quarterly updates with new features auto-enabled — useful for staying current, but historically the Fusion quarterly cycle has caused customization regression issues that require active testing each quarter. Atlantis NDT ERP delivers Odoo upgrades on a controlled schedule with tenant-specific staging, regression testing and customer-approved cutover — no surprise Friday-afternoon platform changes.</p>
            </div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <h3 className="font-semibold text-emerald-300 mb-2">3. Implementation timeline (weeks vs months)</h3>
              <p className="text-slate-300 text-sm leading-relaxed">Atlantis NDT ERP goes live in 4-10 weeks. Oracle Fusion Cloud needs 6-12 months minimum via Oracle's True Cloud Method. Every month of Oracle Fusion implementation is a month your operations team is split between the old system and the implementation team, with no operational benefit yet.</p>
            </div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <h3 className="font-semibold text-emerald-300 mb-2">4. Single-vendor accountability</h3>
              <p className="text-slate-300 text-sm leading-relaxed">Oracle Fusion deployments involve Oracle (license), a tier-1 SI (implementation), an AMS provider (support), Oracle Integration Cloud specialists and often a Visual Builder customization partner — five vendors managing one ERP. Atlantis NDT ERP is one vendor across license, implementation, support, integration, training and customization.</p>
            </div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <h3 className="font-semibold text-emerald-300 mb-2">5. Bilingual report generation for inspection clients</h3>
              <p className="text-slate-300 text-sm leading-relaxed">Atlantis NDT ERP ships 60+ language packs with bilingual report templates tuned for inspection clients — Arabic for Aramco / ADNOC / QatarEnergy, Bahasa Indonesia for Pertamina, Hindi / Marathi / Gujarati / Bengali / Tamil / Telugu / Malayalam for Indian state submissions, French for Algeria / Gabon / Senegal / Ivory Coast / Côte d'Ivoire, Portuguese for Petrobras and Sonangol, Spanish for Pemex / YPF / Ecopetrol. Oracle Fusion supports 37 languages with no NDT-format bilingual templates.</p>
            </div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <h3 className="font-semibold text-emerald-300 mb-2">6. Open codebase vs closed SaaS</h3>
              <p className="text-slate-300 text-sm leading-relaxed">Atlantis NDT ERP runs Odoo 18 — open-source Python under LGPL-3 — so your customizations are code you own and can audit line-by-line. Oracle Fusion is a closed SaaS — your data and configuration live inside Oracle's cloud and your customizations are constrained to what Application Composer / Visual Builder Cloud Service allow. Leaving Oracle Fusion cleanly is a multi-month data-extraction exercise.</p>
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Anonymized case studies — NDT contractors who chose Atlantis NDT ERP over Oracle Fusion</h2>
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

        {/* WHERE ORACLE WINS */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">When Oracle Fusion Cloud ERP is genuinely the right choice</h2>
          <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-6">
            <p className="text-slate-200 leading-relaxed mb-4">Oracle Fusion Cloud ERP is genuinely the right choice for an NDT inspection group when:</p>
            <ul className="space-y-2 text-slate-200">
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />The parent corporate group is already standardized on Oracle Fusion or Oracle E-Business Suite — integration economics favour staying inside the Oracle stack</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />You require deep Enterprise Performance Management (EPM) — Oracle EPM Cloud (Hyperion successor) is best-in-class for $500M+ revenue planning, budgeting, forecasting and account reconciliation</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />You operate 50+ legal entities with deep parallel multi-GAAP consolidation requirements</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />You hold US Federal contracts requiring Oracle Cloud Government Cloud (FedRAMP High / IRAP / IL5)</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />Your CFO has prior Oracle experience and prefers the Oracle platform on familiarity grounds</li>
            </ul>
            <p className="text-slate-300 leading-relaxed mt-4 text-sm">If those statements fit your business, Oracle Fusion is a legitimate choice. If they don't — and they don't fit the vast majority of NDT inspection contractors — Atlantis NDT ERP delivers the same operating capability as affordable, accessible, fully customizable SaaS, with the option of integrating to a parent-group Oracle Fusion tenant if needed.</p>
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
          <div className="bg-gradient-to-br from-emerald-900/40 to-red-900/40 border border-emerald-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-3">Request a side-by-side Atlantis NDT ERP vs Oracle Fusion demo</h2>
            <p className="text-slate-200 mb-6 max-w-2xl mx-auto">Book a 30-minute demo with the Atlantis NDT team. We will run your actual NDT inspection workflow through Atlantis NDT ERP and walk through how Oracle Fusion Cloud would handle the same scope — honest assessment, no marketing fluff.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="mailto:info@atlantisndt.com?subject=Demo%20request%3A%20Atlantis%20vs%20Oracle"
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
