import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Printer, FileText, Download, CheckCircle } from "lucide-react";

export default function DailyProgressReportDPR() {
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
    "headline": "NDT Daily Progress Report (DPR) Template",
    "description": "Free editable daily progress report template for NDT inspection projects. Tracks manpower, inspection counts by method, holds, HSE incidents, and look-ahead.",
    "author": { "@type": "Organization", "name": "Atlantis NDT" },
    "publisher": { "@type": "Organization", "name": "Atlantis NDT", "logo": { "@type": "ImageObject", "url": "https://atlantisndt.com/og-image.jpg" } },
    "datePublished": "2026-05-01",
    "dateModified": "2026-05-12"
  };

  const sections = [
    "Project / shift header — crew lead, weather, ambient temperature, DPR number",
    "Manpower deployed — planned vs actual hours by role (Level III, Level II UT / RT / MT / PAUT, QC, Safety)",
    "Inspections completed today — by method (UT, PAUT, TOFD, RT gamma / X-ray / DR, MT, PT, VT, ET, PMI, hardness)",
    "Holds, rejects, and blockers — defect type, action required, owner, ETA",
    "HSE summary — LTI / MTC / FAC / NM incidents, investigation status, CAPA",
    "Look-ahead 24h — planned activities, resources required, hold points",
    "Sign-off — crew lead, project engineer, client representative, HSE officer",
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="NDT Daily Progress Report (DPR) Template | Free XLSX Download"
        description="Free editable NDT daily progress report (DPR) template. Track manpower, inspections by method, holds, HSE incidents, look-ahead, and sign-off."
        keywords="NDT DPR template, daily progress report, NDT manpower tracker, NDT project report, inspection daily report, NDT field log, daily inspection log"
        canonical="https://atlantisndt.com/resources/daily-progress-report-dpr"
        structuredData={structuredData}
      />
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "Daily Progress Report (DPR)" }
      ]} />

      <section className="bg-[#004aad] text-white py-16 pt-8 no-print">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-2 text-blue-200 mb-4">
              <FileText className="w-5 h-5" />
              <span>Free Resource — Project Reporting Template</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Daily Progress Report (DPR) — NDT Inspection</h1>
            <p className="text-xl text-blue-100 max-w-3xl mb-8">
              Capture each day of an NDT inspection campaign on a single editable Excel sheet — crew, inspection counts by method, holds, HSE incidents, look-ahead, and sign-off.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/templates/daily-progress-report-dpr.xlsx" download className="inline-flex items-center gap-2 bg-white text-[#004aad] px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                <Download className="w-5 h-5" /> Download Editable XLSX
              </a>
              <button onClick={() => window.print()} className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                <Printer className="w-5 h-5" /> Print / Save as PDF
              </button>
              <a href="mailto:info@atlantisndt.com?subject=NDT DPR Template — Custom Build Request" className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                <FileText className="w-5 h-5" /> Request Custom Build
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-4xl px-6 space-y-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white rounded-xl shadow border border-slate-100 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Overview</h2>
            <p className="text-slate-700 mb-3">
              A Daily Progress Report (DPR) is the contractual record of what an inspection crew accomplished on a given shift. For NDT campaigns at refineries, offshore platforms, or fabrication yards, the DPR is the single most important document a Project Manager produces — it drives invoicing, schedule recovery, hold-point clearance, and client trust.
            </p>
            <p className="text-slate-700 mb-3">
              Use this template every shift. It collapses manpower, deliverables per method, holds, safety, and the next-day plan into one Excel page that clients accept. Replace the sample roles, methods, and severity codes with whatever your contract specifies.
            </p>
            <p className="text-slate-700">
              Atlantis NDT can integrate this template into our cloud reporting platform so DPRs auto-populate from technician timesheets and the inspection report database.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white rounded-xl shadow border border-slate-100 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Sections Included</h2>
            <ul className="space-y-2">
              {sections.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700"><CheckCircle className="w-5 h-5 text-[#004aad] flex-shrink-0 mt-0.5" />{s}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white rounded-xl shadow border border-slate-100 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Related Free Templates</h2>
            <ul className="grid sm:grid-cols-2 gap-3 text-slate-700">
              <li><Link to="/resources/inspection-test-plan-itp" className="text-[#004aad] hover:underline">Inspection & Test Plan (ITP)</Link></li>
              <li><Link to="/resources/ndt-safety-checklist" className="text-[#004aad] hover:underline">NDT Safety Checklist</Link></li>
              <li><Link to="/resources/ndt-inspection-checklist" className="text-[#004aad] hover:underline">NDT Inspection Checklist</Link></li>
              <li><Link to="/resources/audit-finding-tracker" className="text-[#004aad] hover:underline">Audit Finding / NCR Tracker</Link></li>
              <li><Link to="/resources" className="text-[#004aad] hover:underline">All Resources</Link></li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#004aad] text-white text-center no-print">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold mb-4">Need a custom DPR system?</h2>
          <p className="text-blue-100 mb-8 text-lg">Auto-populated DPRs from technician timesheets, instant client delivery, and dashboards — ask for a demo.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:info@atlantisndt.com?subject=NDT DPR Template — Custom Build Request" className="inline-flex items-center gap-2 bg-white text-[#004aad] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">Request Demo</a>
            <Link to="/contact" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">Contact Us</Link>
          </div>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
