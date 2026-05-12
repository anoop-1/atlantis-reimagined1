import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Printer, FileText, Download, CheckCircle } from "lucide-react";

export default function API570PipingInspectionRecord() {
  useEffect(() => {
    const style = document.createElement('style');
    style.setAttribute('data-print', 'true');
    style.textContent = `
      @media print {
        nav, footer, .no-print, .breadcrumbs { display: none !important; }
        body { font-size: 11pt; line-height: 1.4; color: #000; }
        h1 { font-size: 18pt; } h2 { font-size: 14pt; page-break-after: avoid; }
        table { font-size: 9pt; page-break-inside: avoid; }
      }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "API 570 Piping Inspection Record Template",
    "description": "Free API 570 piping circuit inspection record with CML readings, corrosion rates, remaining life, RBI scoring, and recommendations.",
    "author": { "@type": "Organization", "name": "Atlantis NDT" },
    "publisher": { "@type": "Organization", "name": "Atlantis NDT", "logo": { "@type": "ImageObject", "url": "https://atlantisndt.com/og-image.jpg" } },
    "datePublished": "2026-05-01",
    "dateModified": "2026-05-12"
  };

  const sections = [
    "Cover sheet — circuit ID, P&ID reference, design / operating data, materials, RBI interval",
    "CML readings — 30 condition-monitoring locations with previous vs current thickness, short / long-term corrosion rate, remaining life",
    "Corrosion-rate & remaining-life summary — by section and component (elbows, tees, dead legs, valves)",
    "RBI score — damage mechanism, POF, COF (safety / environmental / financial), risk cell",
    "Recommendations / repairs / re-inspection — tied to API 570 clause references",
    "Sign-off — API 570 Inspector, piping engineer, RBI specialist, Owner/User",
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="API 570 Piping Inspection Record Template | Free XLSX Download"
        description="Free API 570 piping circuit inspection record template with CML readings, corrosion rate, remaining life calculations, RBI risk scoring, and sign-off."
        keywords="API 570 inspection record, piping inspection template, CML thickness, corrosion rate calculator, remaining life, piping circuit, API 581 RBI"
        canonical="https://atlantisndt.com/resources/api-570-piping-inspection-record"
        structuredData={structuredData}
      />
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "API 570 Piping Inspection Record" }
      ]} />

      <section className="bg-[#004aad] text-white py-16 pt-8 no-print">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-2 text-blue-200 mb-4">
              <FileText className="w-5 h-5" />
              <span>Free Resource — Piping Inspection Record</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">API 570 Piping Inspection Record</h1>
            <p className="text-xl text-blue-100 max-w-3xl mb-8">
              An editable Excel template for documenting an API 570 in-service piping circuit inspection. Captures CML thickness readings, short and long-term corrosion rates, remaining life, RBI risk scoring, and prioritized recommendations.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/templates/api-570-piping-inspection-record.xlsx" download className="inline-flex items-center gap-2 bg-white text-[#004aad] px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                <Download className="w-5 h-5" /> Download Editable XLSX
              </a>
              <button onClick={() => window.print()} className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                <Printer className="w-5 h-5" /> Print / Save as PDF
              </button>
              <a href="mailto:info@atlantisndt.com?subject=API 570 Piping Inspection Record — Custom Build Request" className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
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
              API 570 — Piping Inspection Code governs the in-service inspection, repair, alteration, and rerating of metallic piping systems. The template provides a structured record covering each CML in the circuit, calculated corrosion rates, remaining life and next inspection date, plus a simplified RBI worksheet for risk-based interval setting.
            </p>
            <p className="text-slate-700 mb-3">
              Use the workbook to plan a thickness survey, capture field measurements, and document the engineering analysis required for an API 570 inspection report. Inspectors can extend the CML range, add additional damage mechanisms, or tie the RBI cell back to the company risk matrix.
            </p>
            <p className="text-slate-700">
              Atlantis NDT can deliver a fully integrated version connected to your CMMS / RBI database with automated remaining-life and risk-cell updates.
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
              <li><Link to="/resources/api-510-inspection-report" className="text-[#004aad] hover:underline">API 510 Pressure Vessel Inspection Report</Link></li>
              <li><Link to="/resources/api-653-inspection-template" className="text-[#004aad] hover:underline">API 653 Tank Inspection Template</Link></li>
              <li><Link to="/resources/rbi-worksheet" className="text-[#004aad] hover:underline">RBI Worksheet (API 581)</Link></li>
              <li><Link to="/resources/ndt-procedure-template" className="text-[#004aad] hover:underline">NDT Procedure Template</Link></li>
              <li><Link to="/resources/ndt-inspection-checklist" className="text-[#004aad] hover:underline">NDT Inspection Checklist</Link></li>
              <li><Link to="/resources" className="text-[#004aad] hover:underline">All Resources</Link></li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#004aad] text-white text-center no-print">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold mb-4">Need a customized version?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Atlantis NDT can deliver an API 570 record linked to your CMMS, with auto-updated risk cell and dossier handover.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:info@atlantisndt.com?subject=API 570 Piping Inspection Record — Custom Build Request" className="inline-flex items-center gap-2 bg-white text-[#004aad] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">Request Demo</a>
            <Link to="/contact" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">Contact Us</Link>
          </div>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
