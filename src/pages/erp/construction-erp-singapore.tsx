import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import ContactDetails from "@/components/ContactDetails";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { CheckCircle, Zap, ArrowRight, Building2, Globe, Shield, ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQS: { question: string; answer: string }[] = [
  {
    "question": "Is Atlantis Construction ERP aligned with Singapore BCA grading requirements?",
    "answer": "Yes. Atlantis Construction ERP is configured to capture the project history, project-value records, key personnel data, financial track-record evidence and ISO certifications that the Building and Construction Authority (BCA) Contractors Registration System (CRS) and Public Sector Standard Conditions of Contract (PSSCOC) audits ask for. Project profiles, certificate-of-completion records, defect-liability tracking and BCA grading tier (B1, B2, A1, A2 etc.) renewal evidence are all maintained inside the same database — no more chasing spreadsheets at renewal time. The system is fully customizable, so when BCA updates a grading scheme, your administrators can adjust workflows without engaging external developers."
  },
  {
    "question": "Does the ERP support IRAS GST and InvoiceNow PEPPOL e-invoicing?",
    "answer": "Yes. Atlantis Construction ERP includes Singapore GST-aware accounting — 9% standard-rated, zero-rated, exempt and out-of-scope supplies are mapped to the correct GST F5 boxes. The InvoiceNow PEPPOL BIS Billing 3.0 network connection lets you send and receive structured e-invoices to and from main contractors, sub-contractors and government buyers (GeBIZ / Vendors@Gov). IRAS submission files, input-tax claim evidence and reverse-charge import records are exported in IRAS-accepted formats. Affordable, accessible, fully customizable — no add-on tax module fee."
  },
  {
    "question": "How does the ERP handle MyInvois readiness for Singapore companies with Malaysian operations?",
    "answer": "Many Singapore construction groups operate in Johor, Iskandar and the wider Malaysian market. Atlantis ERP supports Malaysia's LHDN MyInvois e-invoicing alongside Singapore's InvoiceNow. The same chart of accounts and tax engine handles SST in Malaysia and GST in Singapore for the same legal-entity group, with consolidated reporting for the holding company. Cross-border project transfers, inter-company billing and consolidated VAT/GST reporting are all in scope."
  },
  {
    "question": "Can the ERP track MOM Work Permit, S-Pass and CERT-aligned manpower compliance?",
    "answer": "Yes. The HR module tracks Ministry of Manpower (MOM) Work Permit numbers, S-Pass and Employment Pass expiry, CERT-aligned trade certifications for construction supervisors and workers, Construction Workers Registration System (CoreTrade and Multi-Skilling Scheme) status, and FW levy obligations. Renewal alerts fire 90, 60 and 30 days before expiry. Audit reports for MOM workplace inspections can be generated on demand. Configuration includes Workplace Safety and Health (WSH) Act incident logging and SCDF fire safety certificate tracking for project sites."
  },
  {
    "question": "How does Atlantis compare to SAP Business One and Microsoft Dynamics 365 for Singapore construction firms?",
    "answer": "SAP Business One and Microsoft Dynamics 365 are enterprise-tier products with enterprise-tier licensing complexity and long implementation cycles. Atlantis Construction ERP delivers the same core project, accounting, procurement, inventory, quality and HR capabilities — pre-configured for Singapore construction — without per-module licence stacking. We are affordable, accessible and fully customizable, with a 4 to 8 week deployment window for typical small-to-mid Singapore contractors. For grading and pricing, demo on request — pricing varies by region and scope."
  },
  {
    "question": "Does the ERP integrate with CORENET, BCA submission systems and GeBIZ?",
    "answer": "Atlantis Construction ERP supports document control workflows aligned with CORENET (Construction and Real Estate Network) submission practices — drawing register, RFI, submittal log and as-built handover packs are structured for BCA digital submission. GeBIZ tender response packages can be assembled directly from project records, ISO certificates, financial statements and key-personnel CVs. Integration to BCA Construction Project Information Exchange (CPIE) workflows is available through structured export."
  },
  {
    "question": "What does implementation look like for a Singapore construction firm?",
    "answer": "Standard implementation runs 4 to 8 weeks. Week 1 covers discovery — current project mix, BCA grading goals, IRAS GST setup, MOM workforce inventory. Weeks 2 and 3 handle data migration from your current systems — typically spreadsheets, QuickBooks, Xero or legacy on-premise systems. Week 4 handles InvoiceNow PEPPOL connection setup and integration with your bank, Singpass-enabled portals and CORENET. Weeks 5 and 6 are user training in English and the language preferences of your site supervisors. Weeks 7 and 8 are parallel-run and cutover with hyper-care."
  },
  {
    "question": "Is the system hosted in Singapore for PDPA data-residency compliance?",
    "answer": "Yes. Atlantis Construction ERP offers Singapore data residency on ISO 27001-certified infrastructure. We comply with the Singapore Personal Data Protection Act (PDPA), including consent management, data-breach notification workflows and data-protection officer (DPO) reporting. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). Multi-region options also exist for groups operating across SG, MY, ID, TH, VN and the wider ASEAN region."
  }
];

export default function ConstructionErpSingapore() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <SEOHead
        title="Construction ERP Singapore — BCA, IRAS & MyInvois Ready | Atlantis"
        description="Affordable, accessible construction ERP for Singapore — BCA grading aligned, IRAS GST-ready, MyInvois e-invoicing, MOM CERT compliant. Demo on request."
        canonical="/erp/construction-erp-singapore"
        faq={FAQS}
      />
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "ERP", href: "/erp" }, { label: "Construction ERP Singapore" }]} />

        {/* HERO */}
        <section className="mt-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Construction ERP Singapore
          </h1>
          <p className="text-xl text-slate-300 mb-6 max-w-3xl leading-relaxed">
            Atlantis Construction ERP for Singapore contractors — <span className="text-emerald-400 font-semibold">affordable, accessible and fully customizable</span>. Pre-configured for BCA grading, IRAS GST and InvoiceNow PEPPOL e-invoicing, MyInvois cross-border readiness for Malaysian operations, MOM Work Permit and CERT compliance, and SCDF fire-safety document control. One integrated database for project, procurement, accounting, HR, quality and document control — built for Singapore main contractors, sub-contractors, M&E specialists, civil works firms and facility-management operators.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-4 py-2 text-emerald-300">
              <Building2 className="w-4 h-4" />
              <span className="font-semibold">BCA grading aligned</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-lg px-4 py-2 text-blue-300">
              <Shield className="w-4 h-4" />
              <span className="font-semibold">IRAS GST + InvoiceNow PEPPOL</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-lg px-4 py-2 text-purple-300">
              <Globe className="w-4 h-4" />
              <span className="font-semibold">Singapore data residency (PDPA)</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:info@atlantisndt.com?subject=Demo%20request%3A%20Construction%20ERP%20Singapore"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Demo on request <ArrowRight className="w-4 h-4" />
            </a>
            <Link to="/erp" className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Start a free trial
            </Link>
          </div>
        </section>

        {/* WHY ATLANTIS FITS SINGAPORE CONSTRUCTION */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Why Atlantis fits the Singapore construction industry</h2>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-slate-300 leading-relaxed">
              Singapore construction is unlike construction anywhere else. A small main contractor in Tuas might be running a six-figure HDB renovation, a private condo M&E fit-out in District 10, a Jurong Island industrial mechanical scope and a Johor Bahru cross-border project — all simultaneously, all under different regulatory umbrellas. The Building and Construction Authority (BCA) grades you on financial track record, project history, ISO certifications and key personnel. The Inland Revenue Authority of Singapore (IRAS) audits your 9% GST returns. The Ministry of Manpower (MOM) inspects your Work Permit, S-Pass and CoreTrade records on a moment's notice. The Singapore Civil Defence Force (SCDF) wants fire-safety certificates kept current for every active project site. Your sub-contractors expect InvoiceNow PEPPOL invoices delivered in BIS Billing 3.0 format. Your overseas project in JB expects MyInvois-compliant e-invoices. Generic global ERP systems handle none of this out-of-the-box.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              Atlantis Construction ERP is configured for exactly this operating environment. BCA grading data lives in structured records, not random Excel files on a project director's laptop. IRAS GST F5 box mapping is built in. MyInvois and InvoiceNow live side-by-side in the e-invoicing engine. MOM Work Permit expiries trigger 90/60/30-day alerts. SCDF fire-safety certificates are tracked against each project site. CORENET drawing-register and submittal-log workflows are templated. Project costing reports show retention, performance-bond exposure and main-con back-charges in real time, in SGD with multi-currency support for MYR, USD and IDR scopes. The system is <strong>affordable, accessible and fully customizable</strong> — so a small Tuas contractor can run the same ERP that a Tier-1 A1-grade civil works firm uses, just configured to match its scale.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              Because Atlantis is delivered as multi-tenant SaaS on infrastructure with optional Singapore data residency, there is no on-premise server, no patching, no IT department required. Quarterly upgrades are tested and rolled out on a controlled schedule. New users can be added the same day a new project starts. When a BCA grading auditor or IRAS officer requests evidence, the data is one click away.
            </p>
          </div>
        </section>

        {/* SINGAPORE REGULATORS + OPERATORS */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Singapore regulators, frameworks and operators in scope</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <p className="text-sm uppercase tracking-wider text-blue-400 mb-2">BCA — Building and Construction Authority</p>
              <p className="text-slate-200 leading-relaxed">Contractors Registration System (CRS) grading B1, B2, A1, A2 and head-contractor categories CW01, CW02 and ME01 through ME15. Project value history, financial statements, key-personnel CVs and ISO certifications captured against the renewal cycle.</p>
            </div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <p className="text-sm uppercase tracking-wider text-blue-400 mb-2">IRAS — Inland Revenue Authority of Singapore</p>
              <p className="text-slate-200 leading-relaxed">9% GST F5 returns, input-tax claims, reverse-charge for imported services, InvoiceNow PEPPOL BIS Billing 3.0 e-invoicing for B2B and Vendors@Gov, withholding-tax records.</p>
            </div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <p className="text-sm uppercase tracking-wider text-blue-400 mb-2">MOM — Ministry of Manpower</p>
              <p className="text-slate-200 leading-relaxed">Work Permit, S-Pass, Employment Pass expiry tracking. CoreTrade and Multi-Skilling Scheme registration for construction trades. Foreign Worker levy. Workplace Safety and Health (WSH) Act incident logging.</p>
            </div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <p className="text-sm uppercase tracking-wider text-blue-400 mb-2">SCDF — Singapore Civil Defence Force</p>
              <p className="text-slate-200 leading-relaxed">Fire safety certificate (FSC) tracking, fire-safety manager (FSM) appointments, hot-work permits, temporary-fire-permit cycles for active project sites.</p>
            </div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <p className="text-sm uppercase tracking-wider text-blue-400 mb-2">PUB, NEA, LTA</p>
              <p className="text-slate-200 leading-relaxed">PUB sewerage interfaces, NEA environmental monitoring submissions, LTA infrastructure-project compliance evidence — all tracked as structured project deliverables.</p>
            </div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <p className="text-sm uppercase tracking-wider text-blue-400 mb-2">GeBIZ / Vendors@Gov</p>
              <p className="text-slate-200 leading-relaxed">Government tender response packs assembled from structured project records, ISO 9001/14001/45001 certificates, financial statements and key-personnel evidence. PEPPOL e-invoicing to government buyers.</p>
            </div>
          </div>
        </section>

        {/* ATLANTIS MODULES */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Atlantis modules relevant for Singapore construction</h2>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-slate-200">
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>Project Management</strong> — WBS, Gantt, milestones, retention, variation orders (VOs), back-charges, sub-contractor budgets</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>Quality Management</strong> — ITPs, inspection requests (IR), non-conformance reports (NCRs), hold-point releases aligned with BCA quality marks</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>Document Control</strong> — drawing register, RFI log, submittal log, transmittals, CORENET-aligned numbering and revision control</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>Accounting</strong> — IRAS GST-aware multi-currency ledger, retention accounts, performance-bond tracking, SGD as base with MYR/USD/IDR sub-ledgers</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>Procurement</strong> — RFQ to sub-contractor, purchase order, goods receipt, three-way match, vendor evaluation aligned with BCA approved-vendor list</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>HR &amp; Manpower</strong> — MOM Work Permit, S-Pass, EP expiry, CoreTrade, Multi-Skilling Scheme, FW levy, payroll with CPF and SDL</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>Inventory &amp; Plant</strong> — material yard, scaffold register, lifting-equipment LE/LM register, plant servicing schedule</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>Field Service / Mobile</strong> — site supervisor app, daily-progress reports, toolbox-talk attendance, photo-log evidence</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>e-Invoicing</strong> — InvoiceNow PEPPOL BIS Billing 3.0 outbound &amp; inbound, MyInvois LHDN for Malaysia scopes, GeBIZ Vendors@Gov</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>Reporting &amp; Dashboards</strong> — project P&amp;L, cash-flow forecast, retention-by-project, BCA grading-renewal evidence pack</span></li>
          </ul>
        </section>

        {/* CASE STUDIES */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Singapore construction case studies (anonymised)</h2>
          <div className="grid md:grid-cols-1 gap-4">
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <p className="text-sm uppercase tracking-wider text-emerald-400 mb-2">Case 1 — A1-grade civil works firm, head-contractor</p>
              <p className="text-slate-200 leading-relaxed">A Tuas-based civil contractor running concurrent LTA infrastructure scopes and a Jurong Island industrial scope consolidated 11 disconnected spreadsheets, two legacy accounting systems and three SharePoint document libraries into Atlantis. BCA CRS renewal evidence assembly time dropped from 14 staff-days to 1 staff-day. IRAS GST F5 preparation dropped from 5 days to under 4 hours. InvoiceNow PEPPOL outbound went live in 6 weeks; 78% of sub-contractor invoices now flow in/out as structured e-invoices.</p>
            </div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <p className="text-sm uppercase tracking-wider text-emerald-400 mb-2">Case 2 — M&E specialist sub-contractor, head office in Toa Payoh</p>
              <p className="text-slate-200 leading-relaxed">An M&E sub-contractor delivering electrical, ACMV and fire-protection scopes for private condo and HDB projects replaced QuickBooks and a hand-rolled SharePoint workflow with Atlantis. MOM Work Permit expiry-related stop-work incidents dropped to zero in the 9 months following go-live (previously 3 incidents in a single year). Variation orders moved from a 4-week average closure to under 9 days. Defect-liability evidence packs for handover now generate in under 2 hours per project.</p>
            </div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <p className="text-sm uppercase tracking-wider text-emerald-400 mb-2">Case 3 — Mid-tier cross-border SG/MY group</p>
              <p className="text-slate-200 leading-relaxed">A construction group with a Singapore head office and Johor operating company consolidated InvoiceNow (SG) and MyInvois (MY) e-invoicing onto Atlantis. Cross-border project transfers, inter-company billing and consolidated GST/SST reporting reduced month-end close from 12 working days to 4. Group financial reporting now produces audit-ready packs for the SG main board and MY subsidiary board in the same cycle.</p>
            </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Atlantis vs SAP Business One vs Microsoft Dynamics 365 (Singapore construction)</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-800/60 border border-slate-700">
                  <th className="text-left p-3 border border-slate-700">Capability</th>
                  <th className="text-left p-3 border border-slate-700">Atlantis Construction ERP</th>
                  <th className="text-left p-3 border border-slate-700">SAP Business One</th>
                  <th className="text-left p-3 border border-slate-700">MS Dynamics 365 Business Central</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr><td className="p-3 border border-slate-700">Licensing model</td><td className="p-3 border border-slate-700">Affordable, accessible — all modules included</td><td className="p-3 border border-slate-700">Enterprise-tier, per-module</td><td className="p-3 border border-slate-700">Enterprise-tier, per-user + per-module</td></tr>
                <tr><td className="p-3 border border-slate-700">BCA grading evidence pack</td><td className="p-3 border border-slate-700">Pre-configured</td><td className="p-3 border border-slate-700">Custom build required</td><td className="p-3 border border-slate-700">Custom build required</td></tr>
                <tr><td className="p-3 border border-slate-700">IRAS GST + InvoiceNow PEPPOL</td><td className="p-3 border border-slate-700">Native</td><td className="p-3 border border-slate-700">Local-partner add-on</td><td className="p-3 border border-slate-700">Local-partner add-on</td></tr>
                <tr><td className="p-3 border border-slate-700">MyInvois (Malaysia)</td><td className="p-3 border border-slate-700">Native in same tenant</td><td className="p-3 border border-slate-700">Separate localization</td><td className="p-3 border border-slate-700">Separate localization</td></tr>
                <tr><td className="p-3 border border-slate-700">MOM Work Permit + CoreTrade</td><td className="p-3 border border-slate-700">Native</td><td className="p-3 border border-slate-700">Add-on / custom</td><td className="p-3 border border-slate-700">Add-on / custom</td></tr>
                <tr><td className="p-3 border border-slate-700">CORENET document workflow</td><td className="p-3 border border-slate-700">Templated</td><td className="p-3 border border-slate-700">Custom</td><td className="p-3 border border-slate-700">Custom</td></tr>
                <tr><td className="p-3 border border-slate-700">Implementation time</td><td className="p-3 border border-slate-700">4 to 8 weeks</td><td className="p-3 border border-slate-700">4 to 9 months</td><td className="p-3 border border-slate-700">5 to 12 months</td></tr>
                <tr><td className="p-3 border border-slate-700">Customizability without code</td><td className="p-3 border border-slate-700">High</td><td className="p-3 border border-slate-700">Medium</td><td className="p-3 border border-slate-700">Medium</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-400 text-sm mt-3">Pricing for all three vendors depends on user count, modules and region. Demo on request for an Atlantis quote tailored to your Singapore operations.</p>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Frequently asked questions</h2>
          <div className="space-y-3">
            {FAQS.map((f, idx) => (
              <div key={idx} className="bg-slate-800/40 border border-slate-700 rounded-lg overflow-hidden">
                <button onClick={() => setOpenIdx(openIdx === idx ? null : idx)} className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-slate-700/30 transition-colors">
                  <span className="font-semibold text-white">{f.question}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${openIdx === idx ? "rotate-180" : ""}`} />
                </button>
                {openIdx === idx && (<div className="px-6 pb-4 text-slate-300 leading-relaxed">{f.answer}</div>)}
              </div>
            ))}
          </div>
        </section>

        {/* INTEGRATIONS */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Integrations Singapore construction firms ask for</h2>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-slate-200">
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>InvoiceNow PEPPOL Access Points (Vertexsoft, Storecove, Pagero)</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>MyInvois (LHDN Malaysia) e-invoicing</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>Singpass / Corppass for staff authentication</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>DBS, UOB, OCBC corporate banking files (DDA, IBG, FAST)</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>Autodesk BIM 360 / Construction Cloud for drawings</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>Microsoft Teams, Outlook 365, SharePoint</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>WhatsApp Business API for site-supervisor notifications</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>GeBIZ / Vendors@Gov tender response packaging</span></li>
          </ul>
        </section>

        {/* CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-3">See Atlantis Construction ERP configured for Singapore</h2>
            <p className="text-slate-200 mb-6 max-w-2xl mx-auto">Book a 30-minute demo with our Singapore team. We will walk through BCA grading evidence, IRAS GST setup, InvoiceNow PEPPOL connection, MOM compliance tracking and the cross-border MyInvois workflow if you operate in Malaysia. Demo on request — free trial available.</p>
            <a href="mailto:info@atlantisndt.com?subject=Demo%20request%3A%20Construction%20ERP%20Singapore"
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
