import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Printer, FileText, Download, CheckCircle } from "lucide-react";

export default function AuditFindingTracker() {
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
    "headline": "Audit Finding / NCR / CAPA Tracker",
    "description": "Free editable audit-finding tracker for ISO 9001 / 17025 / 45001 NCR & CAPA management. Severity, root cause, target date, effectiveness review, dashboard.",
    "author": { "@type": "Organization", "name": "Atlantis NDT" },
    "publisher": { "@type": "Organization", "name": "Atlantis NDT", "logo": { "@type": "ImageObject", "url": "https://atlantisndt.com/og-image.jpg" } },
    "datePublished": "2026-05-01",
    "dateModified": "2026-05-12"
  };

  const sections = [
    "Tracker header — organization, reporting period, standards covered (ISO 9001 / 17025 / 45001 / API Q1 / Q2)",
    "Severity legend — Critical / Major / Minor / Observation / Opportunity for Improvement",
    "Finding rows — finding number, date, source, category, description, root cause, corrective action, severity, owner, target date, status, effectiveness review",
    "12 pre-filled categories — NDT procedure, personnel cert, equipment calibration, reporting, customer complaint, safety, document control, training, supplier, internal audit, external audit, management review",
    "Status dashboard — counts by status, severity, category, and source for management review",
    "Sign-off — QA manager, top management representative, process owner, internal auditor",
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="Audit Finding / NCR / CAPA Tracker Template | Free XLSX Download"
        description="Free audit-finding / NCR / CAPA tracker for ISO 9001 / 17025 / 45001. Severity, root cause, corrective action, effectiveness review, status dashboard."
        keywords="NCR tracker template, CAPA tracker, audit finding tracker, ISO 9001 NCR, corrective action template, root cause analysis, audit follow up, NCR log"
        canonical="https://atlantisndt.com/resources/audit-finding-tracker"
        structuredData={structuredData}
      />
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "Audit Finding Tracker" }
      ]} />

      <section className="bg-[#004aad] text-white py-16 pt-8 no-print">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-2 text-blue-200 mb-4"><FileText className="w-5 h-5" /><span>Free Resource — QMS Tracker</span></div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Audit Finding / NCR / CAPA Tracker</h1>
            <p className="text-xl text-blue-100 max-w-3xl mb-8">
              A single-workbook tracker for non-conformances and corrective / preventive actions across ISO 9001, ISO/IEC 17025, ISO 45001, API Q1 / Q2. Captures finding, root cause, action, severity, target date, status, and effectiveness review — with a status dashboard for management review.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/templates/audit-finding-tracker.xlsx" download className="inline-flex items-center gap-2 bg-white text-[#004aad] px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"><Download className="w-5 h-5" /> Download Editable XLSX</a>
              <button onClick={() => window.print()} className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"><Printer className="w-5 h-5" /> Print / Save as PDF</button>
              <a href="mailto:info@atlantisndt.com?subject=Audit Tracker — Custom Build Request" className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"><FileText className="w-5 h-5" /> Request Custom Build</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-4xl px-6 space-y-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white rounded-xl shadow border border-slate-100 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Overview</h2>
            <p className="text-slate-700 mb-3">
              ISO 9001:2015 clause 10.2 (Nonconformity and Corrective Action), ISO/IEC 17025:2017 clause 8.7, and ISO 45001 clause 10.2 all require a documented method to log non-conformances, identify root cause, deploy corrective and preventive action, and review effectiveness. Many organizations bury this in a spreadsheet that drifts out of date — this template is designed to stay current.
            </p>
            <p className="text-slate-700 mb-3">
              Use this workbook as the single source of truth for audit findings across all your management systems. The dashboard at the bottom keeps a live count by status, severity, category, and source — useful evidence at the next management review or external audit.
            </p>
            <p className="text-slate-700">
              Atlantis NDT delivers fully digital QMS tools — workflow-driven NCR routing, automatic email reminders, and dashboards — through our Reporting Software platform.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white rounded-xl shadow border border-slate-100 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Sections Included</h2>
            <ul className="space-y-2">{sections.map((s, i) => <li key={i} className="flex items-start gap-3 text-slate-700"><CheckCircle className="w-5 h-5 text-[#004aad] flex-shrink-0 mt-0.5" />{s}</li>)}</ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white rounded-xl shadow border border-slate-100 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Related Free Templates</h2>
            <ul className="grid sm:grid-cols-2 gap-3 text-slate-700">
              <li><Link to="/resources/inspection-test-plan-itp" className="text-[#004aad] hover:underline">Inspection & Test Plan (ITP)</Link></li>
              <li><Link to="/resources/daily-progress-report-dpr" className="text-[#004aad] hover:underline">Daily Progress Report (DPR)</Link></li>
              <li><Link to="/resources/ndt-written-practice-template" className="text-[#004aad] hover:underline">NDT Written Practice</Link></li>
              <li><Link to="/resources/calibration-certificate-template" className="text-[#004aad] hover:underline">Calibration Certificate Template</Link></li>
              <li><Link to="/resources/ndt-safety-checklist" className="text-[#004aad] hover:underline">NDT Safety Checklist</Link></li>
              <li><Link to="/resources" className="text-[#004aad] hover:underline">All Resources</Link></li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#004aad] text-white text-center no-print">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold mb-4">Need a digital QMS tracker?</h2>
          <p className="text-blue-100 mb-8 text-lg">Workflow-driven NCR routing, email reminders, executive dashboards — built into our Reporting Software platform.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:info@atlantisndt.com?subject=Audit Tracker — Custom Build Request" className="inline-flex items-center gap-2 bg-white text-[#004aad] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">Request Demo</a>
            <Link to="/contact" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">Contact Us</Link>
          </div>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
