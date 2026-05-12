import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Printer, FileText, Download, CheckCircle } from "lucide-react";

export default function CalibrationCertificateTemplate() {
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
    "headline": "Calibration Certificate Template — ISO/IEC 17025",
    "description": "Free editable calibration certificate template per ISO/IEC 17025 §7.8 with as-found / as-left results, measurement uncertainty, decision rule, and traceability.",
    "author": { "@type": "Organization", "name": "Atlantis NDT" },
    "publisher": { "@type": "Organization", "name": "Atlantis NDT", "logo": { "@type": "ImageObject", "url": "https://atlantisndt.com/og-image.jpg" } },
    "datePublished": "2026-05-01",
    "dateModified": "2026-05-12"
  };

  const sections = [
    "Certificate identification — number, issue date, lab name + accreditation (A2LA / UKAS / NABL)",
    "Customer information — name, address, PO, received / calibrated / returned dates",
    "Instrument under test (IUT) — description, manufacturer, model, serial, ID tag, range, resolution",
    "Environmental conditions — temperature, humidity, atmospheric pressure",
    "Reference standards used — traceability to NIST / NPL / PTB",
    "As-found results table — measured values, errors, expanded uncertainty (k=2)",
    "As-left results table — post-adjustment values",
    "Measurement uncertainty — GUM-aligned uncertainty statement",
    "Decision rule — simple acceptance / guard-band per ISO/IEC 17025 §7.8.6",
    "Statement of traceability — SI through unbroken chain",
    "Authorization — calibrated by + technical signatory",
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="Calibration Certificate Template (ISO/IEC 17025) | Free DOCX Download"
        description="Free calibration certificate template per ISO/IEC 17025 §7.8. Includes as-found / as-left results, measurement uncertainty, decision rule, traceability."
        keywords="calibration certificate template, ISO 17025 calibration, calibration certificate format, measurement uncertainty, decision rule, NIST traceability, calibration lab"
        canonical="https://atlantisndt.com/resources/calibration-certificate-template"
        structuredData={structuredData}
      />
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "Calibration Certificate Template" }
      ]} />

      <section className="bg-[#004aad] text-white py-16 pt-8 no-print">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-2 text-blue-200 mb-4"><FileText className="w-5 h-5" /><span>Free Resource — Calibration Lab Template</span></div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Calibration Certificate Template (ISO/IEC 17025)</h1>
            <p className="text-xl text-blue-100 max-w-3xl mb-8">
              An ISO/IEC 17025 §7.8 compliant Word template for issuing calibration certificates. Covers lab and customer identification, instrument under test, environmental conditions, reference standards, as-found / as-left results, uncertainty, decision rule, and authorization.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/templates/calibration-certificate-template.docx" download className="inline-flex items-center gap-2 bg-white text-[#004aad] px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"><Download className="w-5 h-5" /> Download Editable DOCX</a>
              <button onClick={() => window.print()} className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"><Printer className="w-5 h-5" /> Print / Save as PDF</button>
              <a href="mailto:info@atlantisndt.com?subject=Calibration Certificate Template — Custom Build Request" className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"><FileText className="w-5 h-5" /> Request Custom Build</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-4xl px-6 space-y-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white rounded-xl shadow border border-slate-100 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Overview</h2>
            <p className="text-slate-700 mb-3">
              ISO/IEC 17025:2017 §7.8 defines the mandatory elements of a calibration certificate that an accredited or accreditation-seeking lab must issue. Most calibration labs adapt this skeleton into customer-facing reports for thickness gauges, UT flaw detectors, pressure gauges, micrometers, and dimensional standards.
            </p>
            <p className="text-slate-700 mb-3">
              Use this template as a starting point for in-house calibration certificates or to standardize the certificates you accept from suppliers. The as-found / as-left tables, GUM-compliant uncertainty statement, and ISO/IEC 17025 §7.8.6 decision-rule clause are all pre-built.
            </p>
            <p className="text-slate-700">
              Atlantis NDT can deliver this template branded for your lab with auto-numbered certificates, an uncertainty budget calculator, and QR-code traceability.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white rounded-xl shadow border border-slate-100 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Sections Included</h2>
            <ul className="space-y-2">{sections.map((s, i) => <li key={i} className="flex items-start gap-3 text-slate-700"><CheckCircle className="w-5 h-5 text-[#004aad] flex-shrink-0 mt-0.5" />{s}</li>)}</ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white rounded-xl shadow border border-slate-100 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Related Free Templates</h2>
            <ul className="grid sm:grid-cols-2 gap-3 text-slate-700">
              <li><Link to="/resources/ndt-procedure-template" className="text-[#004aad] hover:underline">NDT Procedure Template</Link></li>
              <li><Link to="/resources/ndt-written-practice-template" className="text-[#004aad] hover:underline">NDT Written Practice (SNT-TC-1A)</Link></li>
              <li><Link to="/resources/audit-finding-tracker" className="text-[#004aad] hover:underline">Audit / NCR / CAPA Tracker</Link></li>
              <li><Link to="/resources/training-requirements-matrix" className="text-[#004aad] hover:underline">Training Requirements Matrix</Link></li>
              <li><Link to="/resources" className="text-[#004aad] hover:underline">All Resources</Link></li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#004aad] text-white text-center no-print">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold mb-4">Need a branded version for your lab?</h2>
          <p className="text-blue-100 mb-8 text-lg">Auto-numbered certificates, integrated uncertainty budgets, QR-code traceability — ready to demo.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:info@atlantisndt.com?subject=Calibration Certificate Template — Custom Build Request" className="inline-flex items-center gap-2 bg-white text-[#004aad] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">Request Demo</a>
            <Link to="/contact" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">Contact Us</Link>
          </div>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
