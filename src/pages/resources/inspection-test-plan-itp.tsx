import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Printer, FileText, Download, CheckCircle } from "lucide-react";

export default function InspectionTestPlanITP() {
  useEffect(() => {
    const style = document.createElement('style');
    style.setAttribute('data-print', 'true');
    style.textContent = `@media print { nav, footer, .no-print, .breadcrumbs { display: none !important; } body { font-size: 11pt; color: #000; } h1 { font-size: 18pt; } h2 { font-size: 14pt; page-break-after: avoid; } table { font-size: 9pt; page-break-inside: avoid; } }`;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Inspection & Test Plan (ITP) Template — Construction QA/QC",
    "description": "Free editable Inspection & Test Plan (ITP) template for construction QA/QC. Activity list, method, acceptance criteria, H/W/R responsibility matrix.",
    "author": { "@type": "Organization", "name": "Atlantis NDT" },
    "publisher": { "@type": "Organization", "name": "Atlantis NDT", "logo": { "@type": "ImageObject", "url": "https://atlantisndt.com/og-image.jpg" } },
    "datePublished": "2026-05-01",
    "dateModified": "2026-05-12"
  };

  const sections = [
    "Project / discipline header — ITP number, revision, reference specifications and codes",
    "H / W / R / M / S / I legend — Hold, Witness, Review, Monitor, Surveillance, Information",
    "17 standard inspection activities — material receiving, WPS / welder verification, fit-up, pre-heat, VT, MT, PT, UT, RT, PWHT, hardness, PMI, dimensional, pressure test, coating, final dossier",
    "Acceptance criteria per row — tied to ASME / API / SSPC / NACE clauses",
    "Responsibility matrix — contractor / sub-contractor / client+TPI columns",
    "Records column — what document closes the activity",
    "Approval signatures — contractor QC, welding engineer, sub-contractor, client PM, TPI",
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="Inspection & Test Plan (ITP) Template | Construction QA/QC | Free XLSX"
        description="Free Inspection & Test Plan (ITP) template for construction QA/QC. 17 activities, H/W/R codes, acceptance criteria, responsibility matrix, sign-off."
        keywords="ITP template, inspection test plan, construction QA QC, hold witness review, responsibility matrix, ASME inspection plan, welding inspection plan"
        canonical="https://atlantisndt.com/resources/inspection-test-plan-itp"
        structuredData={structuredData}
      />
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "Inspection & Test Plan (ITP)" }
      ]} />

      <section className="bg-[#004aad] text-white py-16 pt-8 no-print">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-2 text-blue-200 mb-4"><FileText className="w-5 h-5" /><span>Free Resource — QA/QC Planning</span></div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Inspection & Test Plan (ITP) Template</h1>
            <p className="text-xl text-blue-100 max-w-3xl mb-8">
              A construction QA/QC Inspection & Test Plan capturing 17 standard activities — from material receiving and welder qualification to PWHT, NDT, pressure test, and final dossier — with H / W / R codes and acceptance criteria.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/templates/inspection-test-plan-itp.xlsx" download className="inline-flex items-center gap-2 bg-white text-[#004aad] px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"><Download className="w-5 h-5" /> Download Editable XLSX</a>
              <button onClick={() => window.print()} className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"><Printer className="w-5 h-5" /> Print / Save as PDF</button>
              <a href="mailto:info@atlantisndt.com?subject=ITP Template — Custom Build Request" className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"><FileText className="w-5 h-5" /> Request Custom Build</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-4xl px-6 space-y-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white rounded-xl shadow border border-slate-100 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Overview</h2>
            <p className="text-slate-700 mb-3">
              An Inspection & Test Plan (ITP) is the project-specific document that defines what gets inspected, how, when, against what acceptance criteria, and by whom. ITPs are mandatory deliverables on every EPC, fabrication, and major maintenance project — they are the bridge between the contract specifications and the construction crew on the shop floor.
            </p>
            <p className="text-slate-700 mb-3">
              Use this template at the start of any project to define the QA / QC plan. The 17 pre-filled rows cover the most common ASME-driven construction activities. Add discipline-specific rows (coatings, insulation, electrical) as needed. The H / W / R columns make it explicit who attends each activity — critical for client and TPI scheduling.
            </p>
            <p className="text-slate-700">
              Atlantis NDT can develop a discipline-specific ITP suite for your fabrication shop or EPC project, complete with the supporting forms and inspection reports referenced in the Records column.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white rounded-xl shadow border border-slate-100 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Sections Included</h2>
            <ul className="space-y-2">{sections.map((s, i) => <li key={i} className="flex items-start gap-3 text-slate-700"><CheckCircle className="w-5 h-5 text-[#004aad] flex-shrink-0 mt-0.5" />{s}</li>)}</ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white rounded-xl shadow border border-slate-100 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Related Free Templates</h2>
            <ul className="grid sm:grid-cols-2 gap-3 text-slate-700">
              <li><Link to="/resources/welder-qualification-test-wpqr" className="text-[#004aad] hover:underline">Welder Qualification (WPQR)</Link></li>
              <li><Link to="/resources/pwht-record" className="text-[#004aad] hover:underline">PWHT Record</Link></li>
              <li><Link to="/resources/daily-progress-report-dpr" className="text-[#004aad] hover:underline">Daily Progress Report (DPR)</Link></li>
              <li><Link to="/resources/audit-finding-tracker" className="text-[#004aad] hover:underline">Audit Finding / NCR Tracker</Link></li>
              <li><Link to="/resources/ndt-procedure-template" className="text-[#004aad] hover:underline">NDT Procedure Template</Link></li>
              <li><Link to="/resources" className="text-[#004aad] hover:underline">All Resources</Link></li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#004aad] text-white text-center no-print">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold mb-4">Need a discipline-specific ITP suite?</h2>
          <p className="text-blue-100 mb-8 text-lg">Atlantis NDT delivers full ITP packs for piping, pressure vessels, structural steel, storage tanks, and offshore modules.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:info@atlantisndt.com?subject=ITP Template — Custom Build Request" className="inline-flex items-center gap-2 bg-white text-[#004aad] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">Request Demo</a>
            <Link to="/contact" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">Contact Us</Link>
          </div>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
