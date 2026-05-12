import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Printer, FileText, Download, CheckCircle } from "lucide-react";

export default function API510InspectionReport() {
  useEffect(() => {
    const style = document.createElement('style');
    style.setAttribute('data-print', 'true');
    style.textContent = `
      @media print {
        nav, footer, .no-print, .breadcrumbs { display: none !important; }
        body { font-size: 11pt; line-height: 1.4; color: #000; }
        h1 { font-size: 18pt; }
        h2 { font-size: 14pt; page-break-after: avoid; }
        table { font-size: 9pt; page-break-inside: avoid; }
      }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "API 510 Pressure Vessel Inspection Report Template",
    "description": "Free editable API 510 pressure vessel inspection report. Multi-sheet XLSX covering shell UT, nozzle inspection, weld inspection, FFS screening, and sign-off.",
    "author": { "@type": "Organization", "name": "Atlantis NDT" },
    "publisher": { "@type": "Organization", "name": "Atlantis NDT", "logo": { "@type": "ImageObject", "url": "https://atlantisndt.com/og-image.jpg" } },
    "datePublished": "2026-05-01",
    "dateModified": "2026-05-12"
  };

  const sections = [
    "Cover sheet — vessel ID, design data, MAWP / MDMT, materials, inspection dates",
    "Shell / head UT thickness — 20 CML readings with corrosion-rate calculation",
    "Nozzle / manway inspection — 10 nozzles + manway entries with reinforcing pad checks",
    "Weld inspection — longitudinal and circumferential seams with method, coverage, and acceptance",
    "FFS screening — 12 damage mechanisms with Level 1 / Level 2 trigger logic per API 579",
    "Recommendations — prioritized follow-up actions tied to API 510 clauses",
    "Sign-off — API 510 Inspector, Owner/User engineer, independent reviewer, jurisdiction",
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="API 510 Pressure Vessel Inspection Report Template | Free XLSX Download"
        description="Free API 510 pressure vessel inspection report template. Multi-sheet editable Excel with shell UT CMLs, nozzle inspection, weld inspection, FFS screening, sign-off."
        keywords="API 510 inspection report, pressure vessel inspection template, API 510 report template, CML thickness, FFS screening, API 579, pressure vessel inspector"
        canonical="https://atlantisndt.com/resources/api-510-inspection-report"
        structuredData={structuredData}
      />
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "API 510 Inspection Report" }
      ]} />

      <section className="bg-[#004aad] text-white py-16 pt-8 no-print">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-2 text-blue-200 mb-4">
              <FileText className="w-5 h-5" />
              <span>Free Resource — Inspection Report Template</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">API 510 Pressure Vessel Inspection Report</h1>
            <p className="text-xl text-blue-100 max-w-3xl mb-8">
              A code-aligned, multi-sheet Excel template to record an API 510 pressure-vessel internal / external inspection. Includes shell UT thickness CMLs, nozzle inspection, weld inspection, FFS screening (API 579), and prioritized recommendations with sign-off.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/templates/api-510-inspection-report.xlsx" download className="inline-flex items-center gap-2 bg-white text-[#004aad] px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                <Download className="w-5 h-5" /> Download Editable XLSX
              </a>
              <button onClick={() => window.print()} className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                <Printer className="w-5 h-5" /> Print / Save as PDF
              </button>
              <a href="mailto:info@atlantisndt.com?subject=API 510 Inspection Report — Custom Build Request" className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
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
              API 510 — Pressure Vessel Inspection Code defines the requirements for in-service inspection, repair, alteration, and rerating of pressure vessels and pressure-relieving devices. This template captures the data, calculations, and decisions an authorized API 510 inspector needs to record per an inspection cycle: from cover-page asset identification through CML thickness readings to recommendations and sign-off.
            </p>
            <p className="text-slate-700 mb-3">
              Use this template at the start of every internal or external API 510 inspection campaign. Fill the Cover sheet during pre-mobilization planning, the CML and nozzle sheets during field work, the Weld and FFS sheets back in the office during evaluation, and close out with Recommendations and Sign-off before issue.
            </p>
            <p className="text-slate-700">
              The XLSX is fully editable — change column headers, add CML rows, or insert custom corrosion-rate formulas. Atlantis NDT can deliver a tailored version with your customer's report numbering, auto-calculated corrosion rate, embedded P&ID hyperlinks, and digital signature support.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white rounded-xl shadow border border-slate-100 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Sheets Included</h2>
            <ul className="space-y-2">
              {sections.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700"><CheckCircle className="w-5 h-5 text-[#004aad] flex-shrink-0 mt-0.5" />{s}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white rounded-xl shadow border border-slate-100 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Related Free Templates</h2>
            <ul className="grid sm:grid-cols-2 gap-3 text-slate-700">
              <li><Link to="/resources/api-570-piping-inspection-record" className="text-[#004aad] hover:underline">API 570 Piping Inspection Record</Link></li>
              <li><Link to="/resources/api-653-inspection-template" className="text-[#004aad] hover:underline">API 653 Tank Inspection Template</Link></li>
              <li><Link to="/resources/rbi-worksheet" className="text-[#004aad] hover:underline">RBI Worksheet (API 581)</Link></li>
              <li><Link to="/resources/pwht-record" className="text-[#004aad] hover:underline">PWHT Record</Link></li>
              <li><Link to="/resources/ndt-procedure-template" className="text-[#004aad] hover:underline">NDT Procedure Template</Link></li>
              <li><Link to="/resources" className="text-[#004aad] hover:underline">All Resources</Link></li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#004aad] text-white text-center no-print">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold mb-4">Need a customized version?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Atlantis NDT can deliver an API 510 report template branded for your QA system with auto-calculated corrosion rate, RBI linkage, and dossier handover.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:info@atlantisndt.com?subject=API 510 Inspection Report — Custom Build Request" className="inline-flex items-center gap-2 bg-white text-[#004aad] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">Request Demo</a>
            <Link to="/contact" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">Contact Us</Link>
          </div>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
