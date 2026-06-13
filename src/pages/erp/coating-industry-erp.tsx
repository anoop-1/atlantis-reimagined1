import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import ContactDetails from "@/components/ContactDetails";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { CheckCircle, Zap, ArrowRight, PaintBucket, Globe, Shield, ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQS: { question: string; answer: string }[] = [
  {
    "question": "Is Atlantis Coating Industry ERP aligned with NACE and SSPC standards?",
    "answer": "Yes. Atlantis Coating Industry ERP is configured around the NACE (now AMPP — Association for Materials Protection and Performance) and SSPC standards that govern industrial coating work — surface-preparation grades (SSPC-SP 1 through SP 11), coating-application specifications (SSPC-PA 1, PA 2), NACE coating inspector levels (CIP Level 1, 2, 3), and dry-film-thickness (DFT) measurement per SSPC-PA 2. Coating inspection report templates, hold points and inspection-test plans (ITPs) are pre-built. The system is affordable, accessible and fully customizable — when SSPC or AMPP updates a standard, your administrators adjust workflows without external developers."
  },
  {
    "question": "Does the ERP handle DFT tracking, holiday detection and coating-system specifications?",
    "answer": "Yes. Every coating job tracks the specified coating system (primer, intermediate, topcoat), the manufacturer's product data sheet (PDS), wet-film and dry-film thickness (WFT/DFT) readings against the SSPC-PA 2 80/20/20 rule, holiday-detection test results (low-voltage wet-sponge per ASTM D5162 or high-voltage spark per NACE SP0188), adhesion-test results (ASTM D4541 pull-off, ASTM D3359 cross-hatch), ambient-condition logs (substrate temperature, dew-point margin, relative humidity per SSPC-PA 1), and cure-time documentation. All of this lives in the same database as your project P&L."
  },
  {
    "question": "How does field-service dispatch work for coating crews and inspectors?",
    "answer": "The Field Service module dispatches surface-prep crews, coating-application crews and NACE-certified coating inspectors to job sites — refineries, fabrication yards, pipeline ROWs, offshore platforms, tank farms, bridges. Each crew member has their certifications tracked (NACE CIP Level 1/2/3, SSPC C3/C5/C7/C12, BGAS-CSWIP, FROSIO). Daily progress reports capture square-metre coverage, products used, ambient conditions and inspection findings. The mobile app works offline for remote sites and syncs when connectivity returns."
  },
  {
    "question": "Can the ERP track coating-material inventory by batch, lot and shelf life?",
    "answer": "Yes. Coating materials are tracked by batch number, manufacturer lot, can-by-can if needed, with shelf-life alerts. FIFO consumption is enforced at job-site issue. Manufacturer material safety data sheets (MSDS / SDS) are attached to each material record. Catalyst-to-base mixing ratios and induction times for two-component systems are recorded against each mixing event. Disposal records for empty containers and waste coatings feed the HSSE module."
  },
  {
    "question": "How does Atlantis compare to a generic ERP for coating contractors?",
    "answer": "Generic ERPs treat a coating job as a generic project. Atlantis Coating Industry ERP knows that a coating job has surface-prep hold points, ambient-condition windows, DFT spec ranges, holiday-detection results, and adhesion-test acceptance — and that NACE/SSPC documentation is a regulatory deliverable, not optional paperwork. We have spent years configuring the document control, inspection workflow and field-service modules for exactly this. Affordable, accessible, fully customizable. Demo on request."
  },
  {
    "question": "What does implementation look like for a coating contractor?",
    "answer": "Standard implementation runs 4 to 8 weeks. Week 1 covers discovery — current job mix (new construction, maintenance, pipeline, offshore, infrastructure), client base, certification holdings. Weeks 2 and 3 handle data migration from your current system (typically Excel, QuickBooks or a hand-rolled access database). Week 4 handles mobile-app rollout for crews and inspectors. Weeks 5 and 6 cover user training including NACE coating inspector workflow and SSPC-PA 2 DFT logging. Weeks 7 and 8 are parallel-run, cutover and hyper-care."
  },
  {
    "question": "Does the ERP support hot-work permits, confined-space entry and SCDF/PSSR-equivalent permits?",
    "answer": "Yes. The HSSE module includes structured permits-to-work — hot work, confined-space entry, working-at-height, electrical isolation, line-break — with risk-assessment, JSA library, isolation evidence and signature workflow. Coating-application activities frequently trigger fire-watch and atmospheric-monitoring requirements, all of which are captured as structured records that can be exported for client and regulator audits."
  },
  {
    "question": "Is the data secure and exportable for client audits?",
    "answer": "Yes. All coating inspection records — surface-prep grade photos, DFT readings, holiday-detection logs, adhesion-test certificates, ambient-condition logs — export as structured PDF inspection packs with embedded reading data. Client portals can access read-only views. Data is encrypted at rest (AES-256) and in transit (TLS 1.3). Multi-region data residency available. The system is ISO 27001 hosted."
  }
];

export default function CoatingIndustryErp() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <SEOHead
        title="Coating Industry ERP — NACE/SSPC, DFT Tracking, Field Reports"
        description="Affordable coating industry ERP — NACE/SSPC inspection workflow, DFT tracking, holiday detection logs, field service dispatch. Demo on request."
        canonical="/erp/coating-industry-erp"
        faq={FAQS}
      />
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "ERP", href: "/erp" }, { label: "Coating Industry ERP" }]} />

        {/* HERO */}
        <section className="mt-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Coating Industry ERP
          </h1>
          <p className="text-xl text-slate-300 mb-6 max-w-3xl leading-relaxed">
            Atlantis Coating Industry ERP for industrial coating contractors, applicators, NACE/AMPP and SSPC-aligned inspectors, fireproofing specialists, pipeline coating crews and offshore maintenance teams — <span className="text-emerald-400 font-semibold">affordable, accessible and fully customizable</span>. Pre-configured for the coating-industry workflow that generic ERPs ignore: surface preparation, coating application, holiday detection, dry-film-thickness (DFT) tracking, NACE coating-inspector documentation, and crew dispatch to refineries, fabrication yards, pipeline ROWs and offshore platforms.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-4 py-2 text-emerald-300">
              <PaintBucket className="w-4 h-4" />
              <span className="font-semibold">NACE/SSPC workflow native</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-lg px-4 py-2 text-blue-300">
              <Shield className="w-4 h-4" />
              <span className="font-semibold">DFT + holiday-detection logs</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-lg px-4 py-2 text-purple-300">
              <Globe className="w-4 h-4" />
              <span className="font-semibold">Field-service mobile, offline-capable</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:info@atlantisndt.com?subject=Demo%20request%3A%20Coating%20Industry%20ERP"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Demo on request <ArrowRight className="w-4 h-4" />
            </a>
            <Link to="/erp" className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Start a free trial
            </Link>
          </div>
        </section>

        {/* COATING WORKFLOW */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">The coating industry workflow Atlantis is built around</h2>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-slate-300 leading-relaxed">
              A coating job is not a generic project. It runs through a strict sequence of inspection-gated stages — and a single missed hold point can trigger a full rework. Atlantis Coating Industry ERP is built around the actual workflow: pre-job document review (coating-system spec, manufacturer PDS, client coating procedure), site mobilisation with crew certifications verified, ambient-condition logging at start-of-shift (substrate temperature, dew-point margin per SSPC-PA 1), surface preparation to the specified SSPC-SP grade (SP 1 solvent cleaning, SP 2 hand-tool, SP 3 power-tool, SP 5 white metal blast, SP 6 commercial blast, SP 10 near-white blast, SP 11 power-tool to bare metal), surface-cleanliness verification (visual, ISO 8501-1 photographic standards, salt-contamination test per SSPC Guide 15 or ISO 8502-9, surface-profile measurement per ASTM D4417), coating application to specified WFT, DFT measurement per SSPC-PA 2 80/20/20 rule, holiday detection (low-voltage wet-sponge or high-voltage spark), adhesion verification (cross-hatch ASTM D3359 or pull-off ASTM D4541), client final-inspection sign-off and document handover.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              Each of these stages is a structured workflow in Atlantis — not free-text notes in a generic project module. Hold points, witness points and information points are templated. NACE CIP Level 1/2/3 inspector sign-offs are captured electronically. Photos taken by the mobile app at each hold point attach to the inspection record automatically. DFT readings flow into a statistical analysis that flags out-of-spec areas before they become rework. Holiday-detection logs export as the structured PDF clients and operators require. All of this lives in the same database as your project P&L, crew payroll, inventory consumption and accounting.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              Because Atlantis is delivered as multi-tenant SaaS, there is no on-premise server, no IT department required. The mobile app works offline for remote sites — pipeline ROWs, offshore platforms, tank farms in the middle of nowhere — and syncs back when the crew has connectivity. The system is <strong>affordable, accessible and fully customizable</strong> — a two-crew Houston coating outfit runs the same ERP as a 200-person Middle East maintenance contractor.
            </p>
          </div>
        </section>

        {/* MODULES */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Atlantis modules relevant to coating industry firms</h2>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-slate-200">
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>Field Service</strong> — crew dispatch, NACE/SSPC certification verification, mobile inspection app, offline capable</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>Project Management</strong> — coating scope, square-metre coverage tracking, milestone billing, retention, back-charges</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>Quality Management</strong> — ITPs templated for SSPC-PA 1, hold/witness points, NCRs, DFT statistical analysis</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>Document Control</strong> — coating procedure register, PDS attachment, MTR/batch traceability, inspection report archive</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>Inventory</strong> — coating materials by batch/lot, FIFO consumption, shelf-life alerts, mixing-ratio tracking</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>HSSE</strong> — hot-work permits, confined-space entry, atmospheric monitoring, JSA library, incident logging</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>HR</strong> — NACE CIP, SSPC C3/C5/C7/C12, BGAS-CSWIP, FROSIO certification expiry tracking</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>Accounting</strong> — multi-currency, retention, milestone billing, sub-contractor settlement</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>Reporting</strong> — project P&amp;L, coverage productivity (m² per shift), DFT acceptance rate, rework log</span></li>
          </ul>
        </section>

        {/* CASE STUDIES */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Coating industry case studies (anonymised)</h2>
          <div className="grid md:grid-cols-1 gap-4">
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <p className="text-sm uppercase tracking-wider text-emerald-400 mb-2">Case 1 — Houston-area refinery turnaround coating contractor</p>
              <p className="text-slate-200 leading-relaxed">A coating contractor running turnarounds at Gulf Coast refineries replaced Excel-based DFT logs and a paper holiday-detection workflow with Atlantis. NACE CIP Level 2 inspector sign-off cycle dropped from average 36 hours to under 6 hours per scope. DFT acceptance rate rose from 81% to 94% because real-time statistical analysis flagged out-of-spec areas before crew demobilisation. Turnaround rework cost dropped by 22% in the first 12 months.</p>
            </div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <p className="text-sm uppercase tracking-wider text-emerald-400 mb-2">Case 2 — Mid-East offshore maintenance group, FPSO scope</p>
              <p className="text-slate-200 leading-relaxed">An offshore maintenance group running coating campaigns on FPSO topsides and splash-zone repairs consolidated three legacy systems into Atlantis. Crew certification expiry alerts eliminated 5 mobilisation delays per quarter. Operator-portal document handover now publishes within 24 hours of job completion — previously a 7-to-10-day cycle. Client-side coating-defect call-back rate dropped to under 1%.</p>
            </div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <p className="text-sm uppercase tracking-wider text-emerald-400 mb-2">Case 3 — Pipeline external coating contractor, North America</p>
              <p className="text-slate-200 leading-relaxed">A pipeline external-coating contractor working FBE, three-layer polyethylene and field-joint coating moved from a paper coating-log and Access database to Atlantis. NACE SP0185 and SP0274 specification compliance evidence packs assemble automatically per pipeline segment. Holiday-detection logs synchronise with the cathodic-protection survey data. Client audits that previously took 5 staff-days to prepare now generate in 2 hours.</p>
            </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Atlantis vs generic ERP for coating contractors</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-800/60 border border-slate-700">
                  <th className="text-left p-3 border border-slate-700">Capability</th>
                  <th className="text-left p-3 border border-slate-700">Atlantis Coating Industry ERP</th>
                  <th className="text-left p-3 border border-slate-700">Generic ERP (SAP B1, NetSuite, MS Dynamics)</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr><td className="p-3 border border-slate-700">Licensing model</td><td className="p-3 border border-slate-700">Affordable, accessible — all modules included</td><td className="p-3 border border-slate-700">Enterprise-tier, per-module licensing</td></tr>
                <tr><td className="p-3 border border-slate-700">NACE/SSPC workflow templates</td><td className="p-3 border border-slate-700">Pre-configured</td><td className="p-3 border border-slate-700">Custom build required</td></tr>
                <tr><td className="p-3 border border-slate-700">DFT statistical analysis (SSPC-PA 2)</td><td className="p-3 border border-slate-700">Native</td><td className="p-3 border border-slate-700">Custom or third-party tool</td></tr>
                <tr><td className="p-3 border border-slate-700">Holiday-detection logs</td><td className="p-3 border border-slate-700">Templated</td><td className="p-3 border border-slate-700">Free-text / custom</td></tr>
                <tr><td className="p-3 border border-slate-700">Coating-material batch/lot tracking</td><td className="p-3 border border-slate-700">Native with shelf life</td><td className="p-3 border border-slate-700">Generic inventory only</td></tr>
                <tr><td className="p-3 border border-slate-700">NACE CIP / FROSIO certification tracking</td><td className="p-3 border border-slate-700">Native HR</td><td className="p-3 border border-slate-700">Custom HR field</td></tr>
                <tr><td className="p-3 border border-slate-700">Offline mobile for remote sites</td><td className="p-3 border border-slate-700">Native</td><td className="p-3 border border-slate-700">Limited or paid add-on</td></tr>
                <tr><td className="p-3 border border-slate-700">Implementation time</td><td className="p-3 border border-slate-700">4 to 8 weeks</td><td className="p-3 border border-slate-700">4 to 12 months</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-400 text-sm mt-3">Pricing varies by region. Demo on request for an Atlantis quote tailored to your coating operation.</p>
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
          <h2 className="text-3xl font-bold mb-5">Integrations coating contractors ask for</h2>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-slate-200">
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>Elcometer, DeFelsko PosiTector, Defelsko DPM gauge data exports</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>NACE/AMPP certification registry verification</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>SSPC certification verification</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>Microsoft Teams, Outlook 365, SharePoint</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>WhatsApp Business API for crew dispatch</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>Sherwin-Williams, Jotun, AkzoNobel, PPG, Hempel manufacturer PDS libraries</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>Client operator portals (Aramco APQS, ADNOC Tejari, ISNetworld, Avetta)</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>QuickBooks / Xero / Sage migration imports</span></li>
          </ul>
        </section>

        {/* CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-3">See Atlantis Coating Industry ERP in action</h2>
            <p className="text-slate-200 mb-6 max-w-2xl mx-auto">Book a 30-minute demo. We will walk through NACE/SSPC inspection workflow, DFT statistical analysis, holiday-detection logging and field-service mobile app for remote-site coating crews. Demo on request — free trial available.</p>
            <a href="mailto:info@atlantisndt.com?subject=Demo%20request%3A%20Coating%20Industry%20ERP"
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
