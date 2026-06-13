import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import ContactDetails from "@/components/ContactDetails";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { CheckCircle, Zap, ArrowRight, DollarSign, Globe, Shield, ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQS = [
  {
    question: "How does Atlantis NDT ERP CRM differ from generic CRM for pipeline integrity work?",
    answer: "Generic CRM tools (Salesforce, HubSpot, Pipedrive) treat every opportunity identically. Atlantis NDT ERP CRM for pipeline integrity is pre-configured with the actual deal stages of the integrity-services sale: 1) Operator integrity-management plan review, 2) HCA (High Consequence Area) segment scoping, 3) ILI / dig program quote, 4) PHMSA / CER / ADIPEC notification packs, 5) Award, 6) Mobilization, 7) Inspection execution, 8) Anomaly assessment + Engineering Critical Assessment (ECA), 9) Final inspection report, 10) Re-inspection-interval recommendation. CRM workflow, opportunity scoring, document templates and SLA timers are all calibrated to integrity-services cycle times, not generic SaaS sales cycles."
  },
  {
    question: "Which pipeline operators and EPCs are pre-integrated?",
    answer: "Atlantis NDT ERP ships out-of-the-box CRM connectors and vendor-portal integration for: Enbridge (PHMSA and CER), TC Energy / TransCanada, Kinder Morgan, Pembina, Inter Pipeline, Plains All American, Energy Transfer, ONEOK, Williams Companies, Magellan, Phillips 66 Pipeline, Marathon Petroleum Pipeline, Buckeye Partners, Sunoco Logistics, Saudi Aramco pipeline networks (East-West Petroline, Master Gas System), ADNOC Onshore pipeline operations, PETRONAS Pipeline, PDO Oman, Pertamina Pipeline Indonesia, IOCL pipeline network and GAIL India. Vendor-portal integration covers Achilles, Avetta, ISNetworld and Veriforce — the four dominant pipeline-operator pre-qualification platforms in North America."
  },
  {
    question: "How does the CRM track HCA and Class Location segment opportunities?",
    answer: "Every CRM opportunity in Atlantis NDT ERP for pipeline integrity carries structured custom fields for: PHMSA HCA segment ID, Class Location designation (1-4), Maximum Allowable Operating Pressure (MAOP), pipeline diameter and length, fluid commodity (sweet crude, sour crude, refined products, NGL, natural gas, hydrogen), API 5L grade (B, X42, X52, X60, X65, X70, X80), age of pipeline, prior ILI inspection date, prior in-the-ditch verification dig records, integrity-management plan revision, prior IMP audit findings. This structured data makes pipeline-integrity sales pipeline reporting genuinely useful — you can answer 'what is our pipeline opportunity by API grade?' or 'which operators have HCA segments due for re-inspection in the next 12 months?' in two clicks."
  },
  {
    question: "What about regulatory deadline tracking — re-inspection intervals?",
    answer: "Atlantis NDT ERP CRM integrates with the Equipment Master and Inspection Scheduling modules to track every regulatory re-inspection deadline. PHMSA 49 CFR 195.452 requires Continual Assessment on HCA segments at intervals not exceeding 5 calendar years (or shorter based on risk). API 1163 ILI conformity, API 1160 Integrity Management, API 1173 Pipeline SMS — every applicable interval is loaded into the system, opportunities auto-create 18-24 months ahead of the next required assessment, and your business development team gets a pipeline of recurring revenue forecast with regulatory precision. Same for CER OPR Section 39 (Canada) and similar provisions in other jurisdictions."
  },
  {
    question: "How does pipeline integrity certification tracking work in the CRM context?",
    answer: "Atlantis NDT ERP ties opportunity records to technician certifications. When you quote an ILI verification dig, the system checks: ASNT Level II / Level III in UT, MT, PT for in-the-ditch NDT; NACE CIP Level 2 or NACE CP-3 for coating-and-corrosion assessment; API 1169 Pipeline Construction Inspector certification; CSWIP 3.1 / 3.2 for welder qualification verification; ECDA / ICDA / SCCDA for direct-assessment programs. The CRM warns if you do not have currently-qualified staff for a quoted scope — preventing the embarrassing situation of winning a tender then realising your team isn't qualified to execute."
  },
  {
    question: "Is the platform suitable for offshore pipeline integrity work?",
    answer: "Yes. Atlantis NDT ERP supports offshore-pipeline integrity workflows including: Subsea pipeline ECA (Engineering Critical Assessment) per BS 7910 / API 579-1 / ASME FFS-1; OOS (Out-Of-Straightness) and free-span assessment; CP (Cathodic Protection) survey data integration; ROV inspection report templates; AUV pipeline survey data import; risers and flexible-pipe inspection. Offshore-specific operator integration: BP North Sea, Equinor Norwegian Continental Shelf, TotalEnergies offshore, Shell offshore worldwide, Petrobras pre-salt, ADNOC Offshore. PSA Norway, HSE UK, NOPSEMA Australia and BSEE US offshore regulatory tracking is built into the integrity dashboard."
  },
  {
    question: "What is the implementation timeline for a pipeline integrity services firm?",
    answer: "Standard implementation runs 6-10 weeks for a typical pipeline integrity contractor (20-100 technicians, 5-15 operator accounts). Week 1: discovery and configuration scoping including HCA segment data import. Weeks 2-3: data migration from existing systems (typically Excel pipeline registers, SharePoint document repositories, sometimes Maximo or SAP PM exports). Week 4: vendor-portal integration setup (Achilles, ISNetworld, Avetta, Veriforce). Weeks 5-6: user training including BD team CRM, operations team scheduling, technicians mobile app. Weeks 7-8: parallel-run with old system, cutover, hyper-care. Weeks 9-10: post-go-live optimization and additional report-format design as needed."
  },
  {
    question: "Can the CRM track ILI vendor partnerships and subcontractor management?",
    answer: "Yes. Many pipeline integrity service providers prime ILI tool runs and subcontract specialized work (UT MFL, EMAT, deformation, geometry, IMU) to ILI vendors including Baker Hughes Pipeline Inspection (formerly GE PII), ROSEN Group, NDT Global, T.D. Williamson, Quest Integrity, Onstream Pipeline Inspection, BJ Services, Penspen, Subsea 7 IRM, and Aker Solutions IRM. Atlantis NDT ERP CRM supports subcontractor relationship management — track multiple vendors per HCA segment, automated comparison quotes, vendor performance scoring (on-time delivery, anomaly call quality, false-positive rate), and PHMSA-compliant traceability from your prime contract to vendor sub-contract chains."
  },
];

export default function CrmForPipelineIntegrityServices() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <SEOHead
        title="CRM for Pipeline Integrity Services Companies — Fully Customizable, All 30+ Odoo Apps Included | Atlantis NDT"
        description="Atlantis NDT ERP CRM for pipeline integrity services. HCA segment tracking, ILI vendor management, API 1160/1163/1173 compliance, PHMSA-aligned opportunity pipeline. Fully Customizable."
        canonical="/erp/crm-for-pipeline-integrity-services"
        faq={FAQS}
      />
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "ERP", href: "/erp" }, { label: "CRM for Pipeline Integrity" }]} />

        <section className="mt-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            CRM for Pipeline Integrity Services Companies
          </h1>
          <p className="text-xl text-slate-300 mb-6 max-w-3xl leading-relaxed">
            Atlantis NDT ERP CRM <span className="text-emerald-400 font-semibold">pre-configured for pipeline integrity services</span> — HCA segment opportunity tracking, PHMSA 49 CFR 195 / 192 deadline forecasting, ILI vendor partnership management, API 1160 / 1163 / 1173 compliance evidence, and operator-portal integration with Enbridge, TC Energy, Pembina, Kinder Morgan, Saudi Aramco, ADNOC, PDO, PETRONAS and Pertamina pipeline networks. Part of the all-apps-included subscription.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-4 py-2 text-emerald-300">
              <DollarSign className="w-4 h-4" />
              <span className="font-semibold">Fully Customizable</span>
              <span className="text-emerald-200/70 text-sm">— all 35+ Odoo apps included</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-lg px-4 py-2 text-blue-300">
              <Shield className="w-4 h-4" />
              <span className="font-semibold">PHMSA / CER / NOPSEMA aligned</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-lg px-4 py-2 text-purple-300">
              <Globe className="w-4 h-4" />
              <span className="font-semibold">Multi-region data residency</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:info@atlantisndt.com?subject=Demo%3A%20CRM%20for%20Pipeline%20Integrity"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Request a demo <ArrowRight className="w-4 h-4" />
            </a>
            <Link to="/erp" className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              See the full ERP suite
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">What is CRM for pipeline integrity inside Atlantis NDT ERP?</h2>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-slate-300 leading-relaxed">
              CRM for Pipeline Integrity Services inside Atlantis NDT ERP is the Odoo 18 CRM platform pre-configured for the specific operating reality of pipeline integrity contractors — the firms running ILI verification digs, ECDA / ICDA / SCCDA direct-assessment programs, in-line-inspection vendor partnerships, anomaly assessment, fitness-for-service evaluations and PHMSA-compliant integrity-management documentation for pipeline operators worldwide. The CRM understands that an opportunity is not just a deal — it is an HCA segment, with a Class Location, a regulatory re-inspection clock, a fluid-commodity-driven damage-mechanism profile, and a procurement portal where every prequalification document needs to be current.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              The platform tracks the full pipeline integrity sales cycle from integrity-management plan review through award, mobilization, execution and re-inspection forecasting. Every opportunity is linked to the equipment master (HCA segments, Class Location, MAOP, API 5L grade, age, prior ILI), the personnel qualification database (ASNT, NACE CIP, API 1169, CSWIP), the document control library (operator IMPs, audit reports, regulatory submissions) and the financial ledger (multi-currency invoicing, milestone billing, retention management) — all inside one Odoo 18 database.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">How pipeline integrity contractors use this CRM</h2>
          <div className="grid md:grid-cols-1 gap-4">
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5"><p className="text-sm uppercase tracking-wider text-blue-400 mb-2">Use Case 1</p><p className="text-slate-200 leading-relaxed">A Calgary-based integrity contractor (28 technicians) tracks every Enbridge HCA segment with re-inspection due dates rolled forward 18 months ahead — converts to recurring CER OPR-aligned revenue forecast with 87% accuracy quarter-on-quarter.</p></div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5"><p className="text-sm uppercase tracking-wider text-blue-400 mb-2">Use Case 2</p><p className="text-slate-200 leading-relaxed">A Houston pipeline-integrity services firm (45 technicians) consolidates 9 ILI-vendor partnerships (ROSEN, NDT Global, Baker Hughes, T.D. Williamson, Quest Integrity, Onstream, Penspen, Subsea 7 IRM, Aker Solutions IRM) into one subcontractor performance scorecard — wins 22% more prime contracts in 12 months.</p></div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5"><p className="text-sm uppercase tracking-wider text-blue-400 mb-2">Use Case 3</p><p className="text-slate-200 leading-relaxed">A Saudi Aramco-approved integrity contractor (60 technicians) maps every East-West Petroline segment to SAEP-1112 qualified personnel — eliminates 4 mobilization-abort incidents per quarter and recovers approximately SAR 1.4M/year in reclaimed billable time.</p></div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5"><p className="text-sm uppercase tracking-wider text-blue-400 mb-2">Use Case 4</p><p className="text-slate-200 leading-relaxed">An Indian midstream-pipeline contractor (35 technicians) serving GAIL and Indian Oil pipeline operations uses the bilingual English/Hindi CRM workflow and PESO Form XVI submission templates to clear three consecutive PNGRB audits with zero findings.</p></div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Key features for pipeline integrity business development and operations leads</h2>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-slate-200">
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>HCA segment opportunity tracking with PHMSA 49 CFR 195 / 192 re-inspection clocks</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>API 1160 Integrity Management evidence-pack generation</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>API 1163 ILI Conformity verification documentation</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>API 1173 Pipeline Safety Management System compliance dashboard</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>ECDA / ICDA / SCCDA direct-assessment program management</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>ILI vendor subcontractor performance scorecards</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Fitness-for-service (API 579-1 / ASME FFS-1, BS 7910) assessment workflow</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>NACE CIP, NACE CP-3, API 1169, CSWIP currency tracking per opportunity</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Achilles, ISNetworld, Avetta, Veriforce qualification portal sync</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Offshore CP survey, ROV inspection, AUV pipeline survey integration</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Mobile field app for in-the-ditch UT thickness capture (offline)</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Multi-currency milestone billing (USD, CAD, AED, SAR, INR, GBP, EUR)</span></li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Operator and regulator integrations</h2>
          <p className="text-slate-300 mb-4 max-w-3xl">Pipeline integrity contractors need bidirectional data flow with operator IMP systems and regulator portals. Atlantis NDT ERP ships with:</p>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-slate-200">
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>PHMSA Pipeline Inspection Management System (PIMS) submission templates</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>CER OPR Section 39 reporting (Canada)</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>Enbridge IMP — IMP-aligned anomaly assessment exports</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>TC Energy Asset Performance Management (APM)</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>Pembina, Kinder Morgan, Plains All American operator portals</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>Saudi Aramco APQS / VQIP pipeline contractor portal</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>ADNOC Onshore pipeline contractor portal (Tejari)</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>PETRONAS PCSB and PDO Oman pipeline operations</span></li>
          </ul>
        </section>

        <section className="mb-16">
          <div className="bg-gradient-to-br from-emerald-900/40 to-emerald-800/20 border border-emerald-500/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-3">Pricing — contact us for a regional quote</h2>
            <p className="text-slate-200 leading-relaxed mb-4 max-w-3xl">
              CRM for Pipeline Integrity Services is included in the standard Atlantis NDT ERP annual subscription. There is no per-module licence fee, no per-user fee for the first 25 users, and no hidden integration surcharges. The subscription fee covers cloud hosting, quarterly upgrades, all 35+ pre-configured Odoo 18 modules, integration with all major pipeline operator portals, mobile apps for iOS and Android, training videos, knowledge base, and email / SMS support.
            </p>
            <p className="text-slate-200 leading-relaxed max-w-3xl">
              For pipeline integrity contractors with more than 25 named users, additional users are billed at $50 / user / month. Pay in USD, CAD, AED, SAR, INR, GBP, EUR or AUD.
            </p>
          </div>
        </section>

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

        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-3">Ready to see CRM for Pipeline Integrity in action?</h2>
            <p className="text-slate-200 mb-6 max-w-2xl mx-auto">Book a 30-minute demo with the Atlantis NDT team. We will walk you through the CRM configured for HCA segment tracking, ILI vendor management and PHMSA / CER / NOPSEMA compliance — and quote your implementation timeline.</p>
            <a href="mailto:info@atlantisndt.com?subject=Demo%3A%20CRM%20Pipeline%20Integrity"
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
