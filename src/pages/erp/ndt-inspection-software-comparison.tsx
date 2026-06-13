import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import ContactDetails from "@/components/ContactDetails";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Search, Globe, Shield, ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQS: { question: string; answer: string }[] = [
  {
    "question": "What is NDT inspection software?",
    "answer": "NDT inspection software (also called NDT inspection management software) is the digital system NDT inspection companies, asset owners and certification labs use to plan inspections, capture field readings, generate compliant reports, track NDT method coverage, manage technician certifications, control inspection-procedure documents and surface inspection findings into asset-integrity decisions. It typically covers ultrasonic testing (UT), radiographic testing (RT), magnetic-particle testing (MT), liquid-penetrant testing (PT), visual testing (VT), eddy-current testing (ET), phased-array ultrasonic testing (PAUT), time-of-flight diffraction (TOFD), long-range ultrasonic testing (LRUT), internal rotary inspection system (IRIS), magnetic flux leakage (MFL) and emerging methods. Atlantis NDT ERP includes a fully integrated NDT inspection management module."
  },
  {
    "question": "What features does a complete NDT inspection management system need?",
    "answer": "At minimum: NDT method library (UT/RT/MT/PT/VT/ET/PAUT/TOFD/LRUT/IRIS/MFL), certification tracking (ASNT SNT-TC-1A, ASNT CP-189, ISO 9712, PCN, CSWIP, NACE/AMPP, AWS CWI, API 510/570/580/653), inspection-procedure document control, ITP authoring and execution, field data capture (mobile, offline-capable), AI-assisted report generation, equipment calibration tracking, hold-point/witness-point workflow, NCR and CAPA management, integration with operator portals (Aramco APQS, ADNOC Tejari, Achilles, Avetta, ISNetworld), client portal for read-only inspection-record access, and integration with the upstream ERP (project, accounting, HR)."
  },
  {
    "question": "Which NDT inspection software vendors are worth comparing?",
    "answer": "The market splits into NDT-native (Atlantis, IRIS NDT Management, NDT Manager, Pragma, Floodlight) and enterprise EAM/CMMS systems that also do inspection (IBM Maximo, SAP PM, AVEVA, Bentley AssetWise, ETQ Reliance, Cenosco IMS). Some construction/maintenance platforms (Procore, ProjectWise) have inspection adjacents. Choosing the right fit depends on whether your primary use case is NDT-service-delivery (Atlantis-style) or asset-owner integrity management (Maximo / AVEVA / Cenosco style). For most NDT inspection contractors, the NDT-native quadrant is the right place to evaluate."
  },
  {
    "question": "How is Atlantis NDT inspection software different from enterprise asset-management platforms like Maximo?",
    "answer": "IBM Maximo is an enterprise-tier EAM/CMMS designed for asset owners — refinery operators, utility companies, fleet owners. It excels at preventive-maintenance scheduling against asset hierarchies. Atlantis is built around NDT-service-delivery: technician dispatch, certification tracking, inspection-report generation per ASNT/ISO 9712, client portals, operator-portal integration, and the back-office (project, accounting, HR) that an NDT contractor needs. We have NDT-native templates that Maximo customers spend years building. We are affordable, accessible and fully customizable. Maximo is enterprise-tier."
  },
  {
    "question": "Does Atlantis NDT inspection software work for asset owners as well as service providers?",
    "answer": "Yes. While Atlantis is most commonly deployed by NDT inspection contractors and certification labs, asset-owner deployments are increasingly common — refinery integrity teams, pipeline operators, fabrication-yard quality groups and corrosion-engineering consultancies who want a single system covering RBI plan, inspection execution, report archive and corrective action. The same database supports owner-side and contractor-side workflows; permissions and views are configured per user."
  },
  {
    "question": "What does mobile data capture look like in Atlantis NDT inspection software?",
    "answer": "The Atlantis mobile app (iOS and Android) supports offline-capable field data capture for UT thickness surveys, MT/PT indication mapping, VT findings, PAUT and TOFD scan attachments, photo evidence, ambient-condition logs and signature workflow. Field data syncs to the central tenant when the technician returns to connectivity — common for offshore platforms, remote pipelines and shutdown environments. Equipment calibration certificates attach to each reading."
  },
  {
    "question": "What integrations does Atlantis NDT inspection software support?",
    "answer": "Out-of-the-box: SAP S/4HANA, IBM Maximo, Oracle EBS, Microsoft Dynamics 365 for upstream ERP. Aramco APQS, ADNOC Tejari, Achilles UK, Avetta, ISNetworld for operator-portal qualification. Microsoft 365 (Outlook, Teams, SharePoint), Google Workspace, WhatsApp Business, AutoCAD/Revit drawing libraries. Custom integrations to client-specific portals via REST/JSON or structured flat-file."
  },
  {
    "question": "How long does Atlantis NDT inspection software take to implement?",
    "answer": "Standard implementation runs 4 to 8 weeks for a typical NDT service provider. Week 1 covers discovery — current method mix, certification holdings, client base. Weeks 2 and 3 handle data migration from your current system. Week 4 handles integration setup. Weeks 5 and 6 cover user training. Weeks 7 and 8 are parallel-run and cutover with hyper-care. Affordable, accessible, fully customizable. Demo on request."
  }
];

type Vendor = {
  name: string;
  type: string;
  ndtNative: string;
  certTracking: string;
  mobileOffline: string;
  operatorPortals: string;
  aiReports: string;
  tier: string;
};

const VENDORS: Vendor[] = [
  { name: "Atlantis NDT", type: "NDT-native ERP + inspection", ndtNative: "Yes (UT/RT/MT/PT/VT/ET/PAUT/TOFD/LRUT/IRIS/MFL)", certTracking: "Native (ASNT/ISO 9712/PCN/CSWIP/NACE/CWI)", mobileOffline: "Yes", operatorPortals: "Aramco/ADNOC/Achilles/Avetta/ISN", aiReports: "Yes", tier: "Affordable, accessible, fully customizable" },
  { name: "IBM Maximo (with NDT add-on)", type: "Enterprise EAM/CMMS", ndtNative: "Add-on / partner build", certTracking: "Custom HR config", mobileOffline: "Yes (paid)", operatorPortals: "Custom", aiReports: "Limited", tier: "Enterprise-tier" },
  { name: "SAP Plant Maintenance (PM)", type: "Enterprise EAM module", ndtNative: "Custom build", certTracking: "Custom HR config", mobileOffline: "Yes (paid)", operatorPortals: "Custom", aiReports: "Limited", tier: "Enterprise-tier" },
  { name: "Bentley AssetWise", type: "Asset-owner integrity", ndtNative: "RBI focus, partial NDT", certTracking: "Custom", mobileOffline: "Yes", operatorPortals: "Custom", aiReports: "Limited", tier: "Enterprise-tier" },
  { name: "AVEVA Asset Performance Management", type: "Enterprise APM", ndtNative: "Partial via partners", certTracking: "Custom", mobileOffline: "Yes", operatorPortals: "Custom", aiReports: "Limited", tier: "Enterprise-tier" },
  { name: "Cenosco IMS Suite", type: "Asset-owner integrity (RBI/IOW/FFS)", ndtNative: "Inspection planning focus", certTracking: "Limited", mobileOffline: "Limited", operatorPortals: "Custom", aiReports: "Limited", tier: "Enterprise-tier" },
  { name: "Pragma On Key", type: "EAM/CMMS with inspection", ndtNative: "Generic inspection", certTracking: "Custom", mobileOffline: "Yes", operatorPortals: "Custom", aiReports: "No", tier: "Enterprise-tier" },
  { name: "IRIS NDT Manager", type: "NDT-native inspection", ndtNative: "Yes (limited methods)", certTracking: "Yes", mobileOffline: "Yes", operatorPortals: "Limited", aiReports: "Limited", tier: "Mid-tier" },
  { name: "Floodlight Software", type: "Inspection service provider ERP", ndtNative: "Inspection-focused", certTracking: "Yes", mobileOffline: "Yes", operatorPortals: "Limited", aiReports: "Limited", tier: "Mid-tier" },
  { name: "Procore (with inspection module)", type: "Construction PM with inspection adjacents", ndtNative: "Generic construction inspection", certTracking: "Limited", mobileOffline: "Yes", operatorPortals: "Limited", aiReports: "Limited", tier: "Mid-tier" },
];

export default function NdtInspectionSoftwareComparison() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <SEOHead
        title="NDT Inspection Software 2026 — Compare 10 Vendors Side by Side"
        description="NDT inspection management software compared 2026 — Atlantis vs Maximo, Procore, Pragma, IRIS, others. Features, integrations, mobile. Pick the right fit."
        canonical="/erp/ndt-inspection-software-comparison"
        faq={FAQS}
      />
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "ERP", href: "/erp" }, { label: "NDT Inspection Software Comparison" }]} />

        {/* HERO */}
        <section className="mt-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            NDT Inspection Software 2026 — Compare 10 Vendors Side by Side
          </h1>
          <p className="text-xl text-slate-300 mb-6 max-w-3xl leading-relaxed">
            Pick the right NDT inspection management software for your operation. We compare Atlantis NDT against IBM Maximo, SAP Plant Maintenance, Bentley AssetWise, AVEVA APM, Cenosco IMS, Pragma On Key, IRIS NDT Manager, Floodlight and Procore — on NDT-native depth, certification tracking, mobile/offline, operator-portal integration, AI-assisted reports and implementation reality. Atlantis is <span className="text-emerald-400 font-semibold">affordable, accessible and fully customizable</span> — designed specifically for NDT inspection companies and certification labs, with the operator-portal integrations and ASNT/ISO 9712 certification tracking that enterprise EAM platforms require custom builds for.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-4 py-2 text-emerald-300">
              <Search className="w-4 h-4" />
              <span className="font-semibold">10 vendors compared</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-lg px-4 py-2 text-blue-300">
              <Shield className="w-4 h-4" />
              <span className="font-semibold">ASNT / ISO 9712 / PCN / CSWIP ready</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-lg px-4 py-2 text-purple-300">
              <Globe className="w-4 h-4" />
              <span className="font-semibold">Operator-portal integrations native</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:info@atlantisndt.com?subject=Demo%20request%3A%20NDT%20inspection%20software"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Demo on request <ArrowRight className="w-4 h-4" />
            </a>
            <Link to="/erp" className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Start a free trial
            </Link>
          </div>
        </section>

        {/* WHAT NDT INSPECTION SOFTWARE IS */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">What is NDT inspection software (and what should it actually do)?</h2>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-slate-300 leading-relaxed">
              NDT inspection software is the operational backbone for non-destructive testing companies, asset-integrity engineering firms, certification labs and asset-owner integrity teams. It is the system that plans the inspection — which NDT method, against which asset, on which date, by which technician, under which client procedure — captures the field result, generates the compliant inspection report, and threads that report into the asset-integrity decision (fitness-for-service, remaining useful life, RBI re-interval, NCR closeout). It is the difference between an NDT contractor with one spreadsheet per project director and a contractor that can grow from 25 technicians to 250 without the back office collapsing.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              The market has split into two camps. <strong>NDT-native systems</strong> (Atlantis, IRIS NDT Manager, NDT Manager, Pragma, Floodlight) are designed for NDT service providers — technician dispatch, certification tracking, inspection-procedure document control, mobile field-capture, operator-portal integration, ASNT/ISO 9712 alignment. <strong>Enterprise EAM/CMMS</strong> (IBM Maximo, SAP PM, AVEVA APM, Bentley AssetWise, Cenosco IMS) are designed for asset owners — preventive-maintenance scheduling against asset hierarchies, RBI plan optimisation, integrity-operating-window monitoring. The two camps overlap in the inspection-record archive but diverge sharply everywhere else.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              If you are an NDT inspection contractor, a certification lab, or an asset-integrity consultancy whose deliverable is the inspection report itself, you want NDT-native. If you are a refinery operator whose deliverable is uptime against an RBI plan, you may want a hybrid — an asset-owner EAM with strong NDT-native integration. Atlantis NDT ERP serves both: NDT-native at its core, with bidirectional integration to SAP/Maximo/Oracle so refinery operator clients can pull inspection records into their own EAM without manual rekeying.
            </p>
          </div>
        </section>

        {/* KEY FEATURES */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Key features any NDT inspection management system needs</h2>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-slate-200">
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>NDT method library — UT, RT, MT, PT, VT, ET, PAUT, TOFD, LRUT, IRIS, MFL, ACFM, hardness</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Certification tracking — ASNT SNT-TC-1A, ASNT CP-189, ASNT ACCP, ISO 9712, PCN, CSWIP, NACE/AMPP, AWS CWI</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Code/standard tracking — API 510, 570, 580, 653, 1163, 579, ASME B31.3, ASME Sec V, ASME Sec VIII</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Inspection procedure document control — version control, audit trail, controlled-copy distribution</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>ITP authoring &amp; execution — hold-point, witness-point, information-point, electronic sign-off</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Mobile field-capture — offline-capable iOS/Android, photo evidence, signature workflow</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Equipment calibration tracking — gauge, probe, UT machine, RT source, magnetic yoke</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>AI-assisted report generation — narrative drafting, finding classification, code-clause auto-cite</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>NCR/CAPA workflow — root-cause analysis, corrective action, effectiveness verification</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Operator-portal integration — Aramco APQS, ADNOC Tejari, Achilles UK, Avetta, ISNetworld</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Upstream ERP integration — SAP S/4HANA, IBM Maximo, Oracle EBS, MS Dynamics 365</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>Client portal — read-only inspection-record access, electronic handover</span></li>
          </ul>
        </section>

        {/* COMPARISON TABLE */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">NDT inspection software vendors compared</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-800/60 border border-slate-700">
                  <th className="text-left p-3 border border-slate-700">Vendor</th>
                  <th className="text-left p-3 border border-slate-700">Type</th>
                  <th className="text-left p-3 border border-slate-700">NDT-native depth</th>
                  <th className="text-left p-3 border border-slate-700">Cert tracking</th>
                  <th className="text-left p-3 border border-slate-700">Mobile / offline</th>
                  <th className="text-left p-3 border border-slate-700">Operator portals</th>
                  <th className="text-left p-3 border border-slate-700">AI reports</th>
                  <th className="text-left p-3 border border-slate-700">Tier</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {VENDORS.map(v => (
                  <tr key={v.name}>
                    <td className="p-3 border border-slate-700 font-semibold text-white">{v.name}</td>
                    <td className="p-3 border border-slate-700">{v.type}</td>
                    <td className="p-3 border border-slate-700">{v.ndtNative}</td>
                    <td className="p-3 border border-slate-700">{v.certTracking}</td>
                    <td className="p-3 border border-slate-700">{v.mobileOffline}</td>
                    <td className="p-3 border border-slate-700">{v.operatorPortals}</td>
                    <td className="p-3 border border-slate-700">{v.aiReports}</td>
                    <td className="p-3 border border-slate-700">{v.tier}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-400 text-sm mt-3">Pricing for all vendors varies by user count, modules, region and contract terms. Demo on request for an Atlantis quote tailored to your operation.</p>
        </section>

        {/* ATLANTIS DEPTH */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Atlantis NDT inspection software — depth on the features that matter</h2>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-slate-300 leading-relaxed">
              Atlantis NDT ERP includes a fully integrated NDT inspection management module — not a third-party bolt-on. The same database holds your project, accounting, HR, certification tracking, equipment calibration, inspection-procedure document control, ITP execution, field-data capture and inspection-report archive. There is one source of truth for every contact, every project, every technician, every invoice and every inspection record. No more spreadsheet bridges between "the inspection tool" and "the accounting tool" and "the HR tool".
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              The NDT method library is genuinely deep: UT (straight-beam, angle-beam, AUT), RT (gamma, X-ray, computed radiography, digital radiography), MT (yoke, prods, fluorescent), PT (visible, fluorescent), VT (direct, remote, drone-assisted), ET (surface and tubing), PAUT, TOFD, LRUT, IRIS, MFL, ACFM, ultrasonic thickness mapping. Each method has its own templated report format, code-clause library, equipment-calibration requirement and certification-level minimum. Certifications track ASNT SNT-TC-1A and ASNT CP-189 written practices, ASNT ACCP, ISO 9712 (replacing the older EN 473), PCN, CSWIP, NACE/AMPP coating-inspector, AWS CWI, API 510, 570, 580, 653, 1163.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              Operator-portal integration is real, not a slideware promise: Aramco APQS qualification status, ADNOC Tejari vendor profile, Achilles UK supplier database, Avetta and ISNetworld HSSE qualification. Bid packages assemble from structured ERP records. Client-specific compliance templates (Aramco SAEP-1112, ADNOC AIM Standard, QatarEnergy NFPS, ABSA Alberta, OSHA PSM, HSE PSSR, PESO IBR, NORSOK) ship pre-configured.
            </p>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">NDT inspection software in production — anonymised case studies</h2>
          <div className="grid md:grid-cols-1 gap-4">
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <p className="text-sm uppercase tracking-wider text-emerald-400 mb-2">Case 1 — Gulf Coast multi-method NDT contractor</p>
              <p className="text-slate-200 leading-relaxed">A 120-technician Houston-area NDT contractor replaced three legacy systems (a homegrown access database, QuickBooks and a SharePoint inspection-report archive) with Atlantis. Inspection-report turnaround dropped from 5.2 days to 1.4 days. Certification expiry alerts eliminated 11 stop-work events per quarter. Operator-portal qualification status now lives one click away — bid response time dropped from 4 days to under 6 hours.</p>
            </div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <p className="text-sm uppercase tracking-wider text-emerald-400 mb-2">Case 2 — Middle East asset-integrity consultancy</p>
              <p className="text-slate-200 leading-relaxed">A Dubai-based asset-integrity consultancy delivering RBI/FFS and inspection scopes across ADNOC, ENOC and QatarEnergy operators consolidated three country-specific systems into a single Atlantis tenant. ADNOC AIM Standard compliance pack assembly dropped from 6 staff-days per scope to under 8 hours. PAUT and TOFD scan-data attachments now live in the same record as the inspection report. Client electronic handover happens within 24 hours of inspection completion.</p>
            </div>
            <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5">
              <p className="text-sm uppercase tracking-wider text-emerald-400 mb-2">Case 3 — Indian ISNT-accredited inspection lab</p>
              <p className="text-slate-200 leading-relaxed">A Hyderabad ISNT-accredited inspection lab serving fabrication yards and refineries replaced an Excel-based inspection-report workflow with Atlantis. ASNT SNT-TC-1A written-practice document control moved to structured version control. Calibration-traceability evidence per ISO 17025 generates automatically. The lab's NABL accreditation surveillance audit completed with zero findings — previously had 3 documentation findings per cycle.</p>
            </div>
          </div>
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

        {/* CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-3">See Atlantis NDT inspection software in action</h2>
            <p className="text-slate-200 mb-6 max-w-2xl mx-auto">Book a 30-minute demo. We will walk through NDT method libraries, certification tracking, mobile field-capture, operator-portal integration and AI-assisted report generation. Demo on request — free trial available.</p>
            <a href="mailto:info@atlantisndt.com?subject=Demo%20request%3A%20NDT%20inspection%20software"
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
