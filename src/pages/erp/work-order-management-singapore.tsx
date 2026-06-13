import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import ContactDetails from "@/components/ContactDetails";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { CheckCircle, Zap, ArrowRight, ClipboardList, Globe, Shield, ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQS: { question: string; answer: string }[] = [
  {
    "question": "Is Atlantis Work Order Management aligned with Singapore MOM requirements?",
    "answer": "Yes. Atlantis Work Order Management is configured for Ministry of Manpower (MOM) compliance — Work Permit, S-Pass and Employment Pass holder eligibility is verified before a work order is dispatched, ensuring technicians only execute scopes they are legally cleared to perform. CoreTrade and Multi-Skilling Scheme registration is tracked per technician. Workplace Safety and Health (WSH) Act incident reporting is structured. CERT-aligned trade certifications and skills evaluation results are stored against personnel records with alert cycles at 90, 60 and 30 days before expiry."
  },
  {
    "question": "Does the system integrate with BCA work permits for project sites?",
    "answer": "Yes. BCA work-permit integration covers the project-site dimension — Building and Construction Authority registered project numbers, BCA-issued permit conditions and the site-specific Workplace Safety and Health Officer (WSHO) appointment all attach to work orders dispatched to that site. Hot-work permits, working-at-height permits, confined-space-entry permits and SCDF temporary-fire-permit cycles are tracked as structured records linked to each work order."
  },
  {
    "question": "How fast can a Singapore work order be dispatched from the system?",
    "answer": "Real-time. A work order can be created, eligibility-verified (technician certification, MOM permit status, BCA project clearance) and dispatched to a technician's mobile app within seconds. The technician receives a push notification with the scope, location, safety briefing requirement, expected duration and any attached documents (procedures, drawings, isolation evidence). The mobile app supports offline operation for sites with poor connectivity and syncs back when reconnected."
  },
  {
    "question": "Can the system handle multi-trade work orders — electrical, ACMV, fire protection, plumbing?",
    "answer": "Yes. Work orders can carry multi-trade scope with sub-tasks dispatched to trade-specific technicians. The system tracks BCA-licensed Electrical Worker (LEW) appointments for electrical scopes, refrigerant-handling certifications for ACMV scopes, SCDF fire-safety scopes, and PUB-licensed plumber assignments. Sub-task completion rolls up to the parent work order with full audit trail. Multi-trade dependencies and prerequisites are enforced — you cannot close an electrical sub-task before isolation evidence is captured."
  },
  {
    "question": "How does Atlantis compare to enterprise work-order systems for Singapore facility managers?",
    "answer": "Enterprise CMMS/EAM systems (IBM Maximo, SAP Plant Maintenance, AVEVA APM) are enterprise-tier products designed for the largest asset owners. They demand enterprise-tier implementation programmes and licensing complexity. Atlantis Work Order Management delivers the dispatch, mobile, MOM compliance, BCA permit integration and SCDF tracking that small-to-mid Singapore facility-management firms, M&E contractors and integrated facility-management (IFM) operators actually need — without the enterprise-tier baggage. Affordable, accessible, fully customizable. Demo on request."
  },
  {
    "question": "Does the system support work orders for HDB town councils and JTC industrial estates?",
    "answer": "Yes. The system handles the specific workflows of HDB town council facility maintenance (lift maintenance, common-property repairs, conservancy works) and JTC industrial estate maintenance (M&E systems, building services, security infrastructure). Town-council key performance indicators (KPIs) and JTC-specific service-level agreements (SLAs) are configured per contract. Response-time, completion-time and first-time-fix metrics report against the contractual SLA."
  },
  {
    "question": "What integrations does the system support?",
    "answer": "Out-of-the-box: Singpass/Corppass for staff authentication, MOM Work Permit verification, BCA CORENET for project records, SCDF fire-safety-certificate registry, Microsoft 365 (Outlook, Teams, SharePoint), WhatsApp Business API for technician dispatch and customer updates, InvoiceNow PEPPOL for outbound invoicing, DBS/UOB/OCBC corporate banking for payment files. Custom integrations via REST/JSON for client-specific portals and operator systems."
  },
  {
    "question": "Is the data hosted in Singapore for PDPA compliance?",
    "answer": "Yes. Atlantis offers Singapore data residency on ISO 27001-certified infrastructure. We comply with the Personal Data Protection Act (PDPA) — consent management, data-subject-access-request handling, breach notification workflow and Data Protection Officer (DPO) reporting are built in. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). Customer data is never used for AI training or shared with third parties."
  }
];

export default function WorkOrderManagementSingapore() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <SEOHead
        title="Work Order Management Singapore — MOM CERT & BCA Aligned"
        description="Affordable work order management for Singapore — MOM CERT tracking, BCA work permit integration, real-time technician dispatch. Demo on request."
        canonical="/erp/work-order-management-singapore"
        faq={FAQS}
      />
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "ERP", href: "/erp" }, { label: "Work Order Management Singapore" }]} />

        {/* HERO */}
        <section className="mt-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Work Order Management Singapore
          </h1>
          <p className="text-xl text-slate-300 mb-6 max-w-3xl leading-relaxed">
            Atlantis Work Order Management for Singapore facility-management firms, M&amp;E contractors, integrated facility-management (IFM) operators, building services maintenance contractors and HDB/JTC service providers — <span className="text-emerald-400 font-semibold">affordable, accessible and fully customizable</span>. Pre-configured for MOM Work Permit and CERT compliance, BCA project-site work-permit integration, SCDF fire-safety tracking, real-time technician dispatch via offline-capable mobile app, and InvoiceNow PEPPOL outbound billing. Built for the Singapore operating reality — from Tuas industrial estates to CBD office towers to HDB town councils.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-4 py-2 text-emerald-300">
              <ClipboardList className="w-4 h-4" />
              <span className="font-semibold">MOM CERT + Work Permit aligned</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-lg px-4 py-2 text-blue-300">
              <Shield className="w-4 h-4" />
              <span className="font-semibold">BCA work permit + SCDF integration</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-lg px-4 py-2 text-purple-300">
              <Globe className="w-4 h-4" />
              <span className="font-semibold">PDPA — Singapore data residency</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:info@atlantisndt.com?subject=Demo%20request%3A%20Work%20Order%20Management%20Singapore"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Demo on request <ArrowRight className="w-4 h-4" />
            </a>
            <Link to="/erp" className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Start a free trial
            </Link>
          </div>
        </section>

        {/* SINGAPORE WO CONTEXT */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Work order management — the Singapore operating reality</h2>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-slate-300 leading-relaxed">
              A work order in Singapore is not just a dispatch instruction. Before a technician sets foot on a site, several regulatory questions must be answered: does this technician hold a current MOM Work Permit, S-Pass or Employment Pass that authorises the trade in question? Are their CoreTrade or Multi-Skilling Scheme registrations current? For an electrical scope, is a Building and Construction Authority licensed Electrical Worker (LEW) appointed? For an ACMV scope, are refrigerant-handling certifications current? For a project site, what BCA work-permit conditions apply, and who is the appointed Workplace Safety and Health Officer? For any hot-work, working-at-height or confined-space-entry activity, what SCDF permit cycle and JSA library applies? Generic global work-order systems treat all of this as "free-text comment fields"; in Singapore, those comments are the difference between executing a job and being shut down by an MOM inspector.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              Atlantis Work Order Management is built for this reality. Eligibility checks fire automatically when a work order is created — if the assigned technician's Work Permit expires before the work-order due date, the system blocks dispatch. If the scope requires a CoreTrade-registered worker and the assignee is not registered, the system flags the gap. If the site sits inside a BCA project boundary, the work order inherits the project's BCA permit conditions and SCDF temporary-fire-permit obligations. Hot-work permits, working-at-height permits and confined-space-entry permits live as structured records linked to the work order. The technician's mobile app shows the active permit status before they can mark a sub-task complete.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              The system is <strong>affordable, accessible and fully customizable</strong> — a 12-technician HDB town-council contractor runs the same Atlantis work-order system that a 400-technician IFM operator uses, just scaled to its size. Multi-tenant SaaS on infrastructure with optional Singapore data residency. ISO 27001 hosted. PDPA compliant. Quarterly upgrades on a controlled schedule.
            </p>
          </div>
        </section>

        {/* ATLANTIS WO FEATURES */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Atlantis Work Order Management — features</h2>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-slate-200">
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>Real-time technician dispatch</strong> — drag-drop dispatch board, push-notification to mobile, GPS-aware routing</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>Eligibility verification</strong> — MOM Work Permit, S-Pass, EP, CoreTrade, LEW, refrigerant cert checked before dispatch</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>Offline-capable mobile</strong> — iOS and Android, signature workflow, photo evidence, syncs when reconnected</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>BCA project-site integration</strong> — permit conditions inherited, WSHO appointment tracked, SCDF cycles</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>Multi-trade work orders</strong> — electrical, ACMV, fire protection, plumbing sub-tasks with dependencies</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>SLA tracking</strong> — response time, completion time, first-time-fix rate per client contract</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>Permit-to-work module</strong> — hot work, height, confined space, electrical isolation, line break</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>Preventive maintenance scheduling</strong> — calendar-based, runtime-based, condition-based</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>Asset hierarchy</strong> — building, floor, room, equipment, sub-component drill-down</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>Parts &amp; inventory</strong> — store-level stock, FIFO, reorder triggers, vendor management</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>InvoiceNow PEPPOL outbound</strong> — work order to BIS Billing 3.0 invoice in one click</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>Customer portal</strong> — tenants/clients submit, track and approve work orders online</span></li>
          </ul>
        </section>

        {/* CASE STUDIES */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Singapore work-order case studies (anonymised)</h2>
          <div className="grid md:grid-cols-1 gap-4">
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <p className="text-sm uppercase tracking-wider text-emerald-400 mb-2">Case 1 — Mid-tier integrated facility-management (IFM) operator</p>
              <p className="text-slate-200 leading-relaxed">A Singapore IFM operator with 240 technicians serving CBD commercial towers and JTC industrial estates replaced a paper-and-WhatsApp dispatch workflow with Atlantis. First-time-fix rate improved from 71% to 88% in 9 months. SLA breach incidents dropped by 64%. MOM Work Permit expiry-related stop-work events eliminated entirely — previously averaged 4 per quarter. InvoiceNow PEPPOL outbound to 180+ corporate clients eliminated the monthly invoice-printing cycle.</p>
            </div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <p className="text-sm uppercase tracking-wider text-emerald-400 mb-2">Case 2 — HDB town council building-services contractor</p>
              <p className="text-slate-200 leading-relaxed">A contractor delivering common-property maintenance, lift servicing and conservancy works to two HDB town councils replaced spreadsheet-based work-order logs with Atlantis. Resident-facing complaint-to-resolution time dropped from average 4.6 days to under 1.8 days. Town council monthly KPI reporting now generates automatically. CoreTrade and BCA Skills Evaluation Test (SET) certification expiry tracking eliminated dispatch errors.</p>
            </div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <p className="text-sm uppercase tracking-wider text-emerald-400 mb-2">Case 3 — M&amp;E specialist serving private condo managing agents</p>
              <p className="text-slate-200 leading-relaxed">An M&amp;E specialist serving 30+ private condo managing agents (BCA Singapore) consolidated three legacy systems into Atlantis. Customer-portal work-order submission by condo councils eliminated phone-call backlog. Multi-trade dispatch with electrical isolation verification eliminated 100% of LEW-related compliance gaps. Quarterly preventive-maintenance schedules now generate work orders automatically with eligibility-verified technicians pre-assigned.</p>
            </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Atlantis vs enterprise CMMS for Singapore work order management</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-800/60 border border-slate-700">
                  <th className="text-left p-3 border border-slate-700">Capability</th>
                  <th className="text-left p-3 border border-slate-700">Atlantis Work Order Mgmt</th>
                  <th className="text-left p-3 border border-slate-700">IBM Maximo</th>
                  <th className="text-left p-3 border border-slate-700">SAP Plant Maintenance</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr><td className="p-3 border border-slate-700">Licensing model</td><td className="p-3 border border-slate-700">Affordable, accessible — all modules</td><td className="p-3 border border-slate-700">Enterprise-tier</td><td className="p-3 border border-slate-700">Enterprise-tier</td></tr>
                <tr><td className="p-3 border border-slate-700">MOM Work Permit verification</td><td className="p-3 border border-slate-700">Native</td><td className="p-3 border border-slate-700">Custom build</td><td className="p-3 border border-slate-700">Custom build</td></tr>
                <tr><td className="p-3 border border-slate-700">BCA work permit + SCDF</td><td className="p-3 border border-slate-700">Templated</td><td className="p-3 border border-slate-700">Custom</td><td className="p-3 border border-slate-700">Custom</td></tr>
                <tr><td className="p-3 border border-slate-700">CoreTrade / LEW tracking</td><td className="p-3 border border-slate-700">Native HR</td><td className="p-3 border border-slate-700">Custom field</td><td className="p-3 border border-slate-700">Custom field</td></tr>
                <tr><td className="p-3 border border-slate-700">Offline-capable mobile</td><td className="p-3 border border-slate-700">Native</td><td className="p-3 border border-slate-700">Paid add-on</td><td className="p-3 border border-slate-700">Paid add-on</td></tr>
                <tr><td className="p-3 border border-slate-700">InvoiceNow PEPPOL outbound</td><td className="p-3 border border-slate-700">Native</td><td className="p-3 border border-slate-700">Local-partner add-on</td><td className="p-3 border border-slate-700">Local-partner add-on</td></tr>
                <tr><td className="p-3 border border-slate-700">Implementation time</td><td className="p-3 border border-slate-700">4 to 8 weeks</td><td className="p-3 border border-slate-700">6 to 12 months</td><td className="p-3 border border-slate-700">9 to 18 months</td></tr>
                <tr><td className="p-3 border border-slate-700">Singapore data residency</td><td className="p-3 border border-slate-700">Available</td><td className="p-3 border border-slate-700">Available (enterprise)</td><td className="p-3 border border-slate-700">Available (enterprise)</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-400 text-sm mt-3">Pricing varies by region, user count and modules. Demo on request for an Atlantis quote tailored to your Singapore operation.</p>
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
          <h2 className="text-3xl font-bold mb-5">Integrations Singapore work-order operations ask for</h2>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-slate-200">
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>Singpass / Corppass staff authentication</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>MOM Work Permit verification</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>BCA CORENET project records</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>SCDF fire-safety-certificate registry</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>InvoiceNow PEPPOL Access Points</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>Microsoft 365 (Outlook, Teams, SharePoint)</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>WhatsApp Business API — technician dispatch + tenant updates</span></li>
            <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>DBS, UOB, OCBC corporate banking files (FAST, IBG)</span></li>
          </ul>
        </section>

        {/* CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-3">See Atlantis Work Order Management configured for Singapore</h2>
            <p className="text-slate-200 mb-6 max-w-2xl mx-auto">Book a 30-minute demo with our Singapore team. We will walk through MOM/CoreTrade eligibility checks, BCA permit integration, SCDF tracking, mobile dispatch and InvoiceNow outbound. Demo on request — free trial available.</p>
            <a href="mailto:info@atlantisndt.com?subject=Demo%20request%3A%20Work%20Order%20Management%20Singapore"
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
