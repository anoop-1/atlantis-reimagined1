import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import ContactDetails from "@/components/ContactDetails";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { CheckCircle, Zap, ArrowRight, Factory, Globe, Shield, ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQS: { question: string; answer: string }[] = [
  {
    "question": "Is Atlantis Oil & Gas ERP aligned with PETRONAS Technical Standards (PTS)?",
    "answer": "Yes. Atlantis Oil & Gas ERP is pre-configured to maintain evidence packs aligned with PETRONAS Technical Standards (PTS) — covering materials specifications, inspection and test plans (ITP), welding procedures, NDT method qualifications, equipment-criticality registers and document-control numbering. PETRONAS Licensing & Registration (SWEC and other categories) renewal evidence is structured: financial track record, technical capability statements, HSSE performance and audit history live as structured records, not scattered files. The system is affordable, accessible and fully customizable — when PETRONAS updates a PTS revision, your administrators adjust workflows without external developers."
  },
  {
    "question": "Does the ERP track DOSH PMA (Person Authorized to Examine) certification for pressure equipment?",
    "answer": "Yes. The Department of Occupational Safety and Health (DOSH) Person Authorized to Examine (PMA) certification is tracked as a structured personnel record. PMA scope (steam boilers, unfired pressure vessels, etc.), validity dates, OSHA-aligned competency evidence and re-examination schedules generate alerts at 90, 60 and 30 days before expiry. Equipment-side PMA examination history — last hydrotest, last ultrasonic thickness survey, next due date — is captured against each asset in the same database. Factories and Machinery Act 1967 (FMA) and Occupational Safety and Health Act 1994 (OSHA) compliance evidence packs assemble on demand."
  },
  {
    "question": "How does MyInvois e-invoicing work in Atlantis for Malaysian oil & gas firms?",
    "answer": "Atlantis connects directly to the LHDN MyInvois system. Every B2B and B2G invoice is generated, validated and submitted to MyInvois in real time, with the LHDN-issued Unique Identifier Number (UIN) returned to the ERP and stored against the source invoice. Consolidated e-invoices for cash sales, self-billed e-invoices for sub-contractor payments, and credit/debit notes are all supported. SST (Sales & Service Tax) at the relevant rate is calculated and reported. Cross-border invoicing for PETRONAS Carigali Vietnam/Iraq scopes or KOC supplier-portal scopes is also handled in the same tenant."
  },
  {
    "question": "What KOC, ADNOC and Saudi Aramco supplier portals does the ERP integrate with?",
    "answer": "For Malaysian oil & gas service companies operating beyond PETRONAS, Atlantis supports integration with the Kuwait Oil Company (KOC) supplier portal, Saudi Aramco APQS (Approved Petroleum Quality Standards) qualification tracking, ADNOC Tejari procurement portal and PETRONAS SUS (Supplier Universal Source) registration evidence. Bid packages, technical compliance matrices and HSSE documentation are assembled from structured ERP records, not hand-built per RFQ. Bidirectional integration uses public APIs where available and structured flat-file (CSV/XML/JSON) sync where APIs are not."
  },
  {
    "question": "How does Atlantis compare to SAP S/4HANA and Oracle EBS for Malaysian oil & gas firms?",
    "answer": "SAP S/4HANA and Oracle EBS are enterprise-tier products built for the largest oil majors. They demand enterprise-tier implementation teams, multi-year programmes and enterprise-tier total cost of ownership. Atlantis Oil & Gas ERP delivers the project, asset, inspection, document control, procurement, HSSE and finance capabilities that small-to-mid Malaysian operators and service providers actually need — pre-configured for PETRONAS PTS, DOSH and MyInvois — without per-module licence stacking or two-year deployment programmes. Affordable, accessible and fully customizable. Demo on request for a quote tailored to your operation."
  },
  {
    "question": "Does the ERP handle field-service mobilisation for Sarawak and Sabah offshore campaigns?",
    "answer": "Yes. The Field Service module handles crew mobilisation, vessel charter, equipment dispatch and personnel-on-board (POB) tracking for offshore campaigns out of Bintulu, Miri, Kerteh and Labuan. Per-diem calculation, offshore allowance, BOSIET / HUET certification expiry, OPITO-aligned competency tracking and rotational rosters are configured against Malaysian offshore practice. Daily reports, NPT logs, downtime classification and lessons-learned capture feed the project P&L in real time."
  },
  {
    "question": "What does implementation look like for a Malaysian O&G service provider?",
    "answer": "Standard implementation runs 6 to 10 weeks for a typical mid-size Malaysian oil & gas service provider. Week 1 covers discovery — current PETRONAS Licensing scope, DOSH PMA holdings, MyInvois readiness assessment. Weeks 2 and 3 handle data migration from existing systems (Sage, MYOB, hand-rolled SQL apps, SharePoint document libraries). Week 4 handles MyInvois connection and bank-file setup for Maybank, CIMB, RHB, Public Bank. Weeks 5 and 6 are user training in Bahasa Malaysia and English. Weeks 7 to 10 are parallel-run, cutover and hyper-care, including BOSIET-aware mobile training for offshore crews."
  },
  {
    "question": "Is the system hosted in Malaysia for PDPA data-residency?",
    "answer": "Yes. Atlantis offers Malaysia data residency on ISO 27001-certified infrastructure, with cross-region replication options for Singapore and Indonesia subsidiaries. The system complies with the Malaysian Personal Data Protection Act 2010 (PDPA) — consent management, data-subject access requests and breach-notification workflows are built in. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). Customer data is never used for AI training or shared with third parties."
  }
];

export default function OilGasErpMalaysia() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <SEOHead
        title="Oil & Gas ERP Malaysia — PETRONAS PTS & DOSH Ready | Atlantis"
        description="Affordable Oil & Gas ERP for Malaysia — PETRONAS PTS aligned, DOSH PMA tracking, MyInvois e-invoicing, KOC supplier-portal integration. Demo today."
        canonical="/erp/oil-gas-erp-malaysia"
        faq={FAQS}
      />
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "ERP", href: "/erp" }, { label: "Oil & Gas ERP Malaysia" }]} />

        {/* HERO */}
        <section className="mt-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Oil &amp; Gas ERP Malaysia
          </h1>
          <p className="text-xl text-slate-300 mb-6 max-w-3xl leading-relaxed">
            Atlantis Oil &amp; Gas ERP for Malaysian operators and service providers — <span className="text-emerald-400 font-semibold">affordable, accessible and fully customizable</span>. Pre-configured for PETRONAS Technical Standards (PTS), DOSH PMA pressure-equipment compliance, LHDN MyInvois e-invoicing, BOSIET-aware offshore crew mobilisation, and Kuwait Oil Company (KOC), Saudi Aramco APQS and ADNOC Tejari supplier-portal integration for Malaysian firms competing across the region. Built for Kerteh, Bintulu, Labuan, Miri, Kemaman, Pengerang and the wider Malaysian upstream, midstream and downstream value chain.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-4 py-2 text-emerald-300">
              <Factory className="w-4 h-4" />
              <span className="font-semibold">PETRONAS PTS aligned</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-lg px-4 py-2 text-blue-300">
              <Shield className="w-4 h-4" />
              <span className="font-semibold">DOSH PMA tracking</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-lg px-4 py-2 text-purple-300">
              <Globe className="w-4 h-4" />
              <span className="font-semibold">MyInvois + cross-border SUS / KOC / APQS</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:info@atlantisndt.com?subject=Demo%20request%3A%20Oil%20%26%20Gas%20ERP%20Malaysia"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Demo on request <ArrowRight className="w-4 h-4" />
            </a>
            <Link to="/erp" className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Start a free trial
            </Link>
          </div>
        </section>

        {/* PETRONAS PTS CONTEXT */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">PETRONAS PTS, DOSH and MyInvois — the Malaysian operating reality</h2>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-slate-300 leading-relaxed">
              Malaysian oil &amp; gas firms operate inside one of the most rigorously codified frameworks anywhere. PETRONAS Technical Standards (PTS) prescribe materials, design, construction, inspection, welding, NDT, instrumentation, safety and operations — and the entire PTS body is updated continuously. PETRONAS Licensing &amp; Registration (PLR) categories — SWEC for engineering, SUS Supplier Universal Source for goods and services, OPS for operations — determine which contracts you can even bid for. The Department of Occupational Safety and Health (DOSH) regulates pressure equipment under the Factories and Machinery Act 1967 (FMA) and OSHA 1994, with the Person Authorized to Examine (PMA) scheme governing every fired and unfired pressure vessel. The Inland Revenue Board (LHDN) now requires MyInvois e-invoicing for all B2B, B2G and B2C transactions in a phased rollout. Sales &amp; Service Tax (SST) demands accurate categorisation. Cabotage rules, Customs preferential treatment under FTAs and Bumiputera supplier programmes all add to the compliance load.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              Atlantis Oil &amp; Gas ERP is configured for exactly this regulatory texture. PTS-aligned ITPs, NDT method libraries and welding-procedure registers are templated. DOSH PMA certifications — personnel-side and equipment-side — live as structured records with alert cycles. MyInvois is native, real-time, with LHDN UIN capture against every invoice. SST categorisation is built into the chart of accounts. Cross-border scopes for Malaysian firms working PETRONAS Carigali Vietnam, Iraq fields, KOC supplier portal, Saudi Aramco APQS qualification and ADNOC Tejari are handled in the same tenant. The system is <strong>affordable, accessible and fully customizable</strong> — a small Kerteh-based maintenance contractor can run the same ERP that a Tier-1 Pengerang fabrication yard uses, just scaled to its size.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              Hosted as multi-tenant SaaS with optional Malaysia data residency. ISO 27001 infrastructure. PDPA 2010 compliant. Quarterly upgrades on a controlled schedule. New users added the same day a new project mobilises. When a PETRONAS auditor or DOSH inspector asks for evidence, the data is one click away.
            </p>
          </div>
        </section>

        {/* MODULES */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Atlantis modules for oil &amp; gas Malaysia</h2>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-slate-200">
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>Asset Management / EAM</strong> — pressure vessel, heat exchanger, rotating equipment, piping circuit, instrument loop, DOSH PMA evidence by tag</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>CMMS</strong> — preventive maintenance, condition-based maintenance, turnaround planning, RBI-driven inspection scheduling per PTS</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>Project Management</strong> — EPC scope, milestone billing, retention, sub-contractor performance, daily progress reports for offshore campaigns</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>Quality Management</strong> — ITPs aligned with PTS, hold-point releases, NCRs, MOC (management of change), audit findings</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>Document Control</strong> — drawing register, revision control, MTR/heat-traceability, welding-procedure register, NDT report archive</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>Field Service</strong> — crew mobilisation, BOSIET/HUET tracking, POB management, vessel charter, offshore allowance calculation</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>HSSE</strong> — incident reporting, lost-time injury tracking, JSA library, permit-to-work, lessons-learned capture</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>Accounting</strong> — MYR base, SST handling, multi-currency for cross-border scopes (USD, KWD, SAR, AED, IDR, SGD)</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>e-Invoicing</strong> — LHDN MyInvois native real-time submission, UIN capture, consolidated and self-billed e-invoices</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>Procurement</strong> — RFQ, PO, three-way match, Bumiputera vendor classification, PETRONAS SUS vendor evaluation</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>HR / Manpower</strong> — payroll with EPF, SOCSO, EIS, PCB, expat tracking, certification expiry (NDT Level II/III, ASNT, OPITO)</span></li>
          </ul>
        </section>

        {/* CASE STUDIES */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Malaysian oil &amp; gas case studies (anonymised)</h2>
          <div className="grid md:grid-cols-1 gap-4">
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <p className="text-sm uppercase tracking-wider text-emerald-400 mb-2">Case 1 — Kerteh-based maintenance and turnaround contractor</p>
              <p className="text-slate-200 leading-relaxed">A maintenance contractor running shutdown campaigns for PETRONAS Penapisan Terengganu and downstream operators consolidated three legacy systems and a SharePoint dump into Atlantis. PETRONAS SUS audit preparation time dropped from 9 staff-days to under 1. DOSH PMA expiry tracking eliminated 6 instances of expired-certification stop-work in the prior 12 months. MyInvois went live in 6 weeks with 100% B2B coverage. Turnaround daily progress reports now publish to the operator portal automatically by 06:00 the next morning.</p>
            </div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <p className="text-sm uppercase tracking-wider text-emerald-400 mb-2">Case 2 — Pengerang fabrication yard, structural &amp; piping</p>
              <p className="text-slate-200 leading-relaxed">A mid-tier fabrication yard supplying RAPID and Pengerang Integrated Complex projects replaced a mix of MYOB, Excel and a hand-rolled production tracker with Atlantis. Welding-procedure register and welder-qualification (WPQR/WPS) records moved to structured tracking. PTS-aligned ITP execution evidence dropped weld-rejection rates by 18% in 9 months. MyInvois implementation across 340 active vendors completed in under 12 weeks. Month-end close dropped from 11 working days to 5.</p>
            </div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <p className="text-sm uppercase tracking-wider text-emerald-400 mb-2">Case 3 — Miri-based offshore services group, cross-border</p>
              <p className="text-slate-200 leading-relaxed">An offshore services group operating in Sarawak, Kuwait (KOC) and Iraq consolidated three country-specific systems into one Atlantis tenant. BOSIET/HUET expiry tracking eliminated 4 mobilisation delays per quarter. KOC supplier-portal bid responses moved from 3-day assembly to under 4 hours. Cross-border consolidated reporting and inter-company billing now produce audit-ready packs in a single cycle. Crew-rotation accuracy and offshore-allowance payroll accuracy both improved to 99.4%.</p>
            </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Atlantis vs SAP S/4HANA vs Oracle EBS (oil &amp; gas Malaysia)</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-800/60 border border-slate-700">
                  <th className="text-left p-3 border border-slate-700">Capability</th>
                  <th className="text-left p-3 border border-slate-700">Atlantis Oil &amp; Gas ERP</th>
                  <th className="text-left p-3 border border-slate-700">SAP S/4HANA</th>
                  <th className="text-left p-3 border border-slate-700">Oracle EBS</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr><td className="p-3 border border-slate-700">Licensing model</td><td className="p-3 border border-slate-700">Affordable, accessible — all modules included</td><td className="p-3 border border-slate-700">Enterprise-tier, multi-module licence stack</td><td className="p-3 border border-slate-700">Enterprise-tier, per-module + per-user</td></tr>
                <tr><td className="p-3 border border-slate-700">PETRONAS PTS templates</td><td className="p-3 border border-slate-700">Pre-configured</td><td className="p-3 border border-slate-700">Custom build</td><td className="p-3 border border-slate-700">Custom build</td></tr>
                <tr><td className="p-3 border border-slate-700">DOSH PMA tracking</td><td className="p-3 border border-slate-700">Native</td><td className="p-3 border border-slate-700">Custom / partner add-on</td><td className="p-3 border border-slate-700">Custom / partner add-on</td></tr>
                <tr><td className="p-3 border border-slate-700">MyInvois (LHDN)</td><td className="p-3 border border-slate-700">Native real-time</td><td className="p-3 border border-slate-700">Partner localisation</td><td className="p-3 border border-slate-700">Partner localisation</td></tr>
                <tr><td className="p-3 border border-slate-700">KOC supplier portal</td><td className="p-3 border border-slate-700">Templated</td><td className="p-3 border border-slate-700">Custom</td><td className="p-3 border border-slate-700">Custom</td></tr>
                <tr><td className="p-3 border border-slate-700">BOSIET/HUET tracking</td><td className="p-3 border border-slate-700">Native HR</td><td className="p-3 border border-slate-700">Custom HR add-on</td><td className="p-3 border border-slate-700">Custom HR add-on</td></tr>
                <tr><td className="p-3 border border-slate-700">Implementation time</td><td className="p-3 border border-slate-700">6 to 10 weeks</td><td className="p-3 border border-slate-700">9 to 18 months</td><td className="p-3 border border-slate-700">9 to 24 months</td></tr>
                <tr><td className="p-3 border border-slate-700">Customizability without code</td><td className="p-3 border border-slate-700">High</td><td className="p-3 border border-slate-700">Medium</td><td className="p-3 border border-slate-700">Low to medium</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-400 text-sm mt-3">Pricing varies by region, user count and modules. Demo on request for an Atlantis quote tailored to your Malaysian operation.</p>
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
          <h2 className="text-3xl font-bold mb-5">Integrations Malaysian oil &amp; gas firms ask for</h2>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-slate-200">
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>LHDN MyInvois real-time e-invoicing</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>PETRONAS SUS (Supplier Universal Source) registration evidence sync</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>Kuwait Oil Company (KOC) supplier portal</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>Saudi Aramco APQS qualification tracking</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>ADNOC Tejari procurement portal</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>Maybank, CIMB, RHB, Public Bank corporate banking files</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>OPITO certification registry for offshore competency</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>Microsoft Teams, Outlook 365, SharePoint document libraries</span></li>
          </ul>
        </section>

        {/* CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-3">See Atlantis Oil &amp; Gas ERP configured for Malaysia</h2>
            <p className="text-slate-200 mb-6 max-w-2xl mx-auto">Book a 30-minute demo with our Malaysia team. We will walk through PETRONAS PTS templates, DOSH PMA tracking, MyInvois real-time submission and the KOC/APQS cross-border workflow. Demo on request — free trial available.</p>
            <a href="mailto:info@atlantisndt.com?subject=Demo%20request%3A%20Oil%20%26%20Gas%20ERP%20Malaysia"
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
