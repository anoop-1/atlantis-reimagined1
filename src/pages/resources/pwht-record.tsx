import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Printer, FileText, Download, CheckCircle } from "lucide-react";

export default function PWHTRecord() {
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
    "headline": "Post-Weld Heat Treatment (PWHT) Record Template",
    "description": "Free editable PWHT record template per ASME B31.3 / Section VIII — soak temp, hold time, ramp rate, thermocouple layout, chart attachments, and sign-off.",
    "author": { "@type": "Organization", "name": "Atlantis NDT" },
    "publisher": { "@type": "Organization", "name": "Atlantis NDT", "logo": { "@type": "ImageObject", "url": "https://atlantisndt.com/og-image.jpg" } },
    "datePublished": "2026-05-01",
    "dateModified": "2026-05-12"
  };

  const sections = [
    "Heat-treatment identification — record number, project, component / weld ID, WPS / PQR reference",
    "Process parameters — soak temperature + tolerance, hold time, heating / cooling rate, loading temperature, soak band width",
    "Thermocouple layout — 10 TC positions, attachment method (capacitor discharge / strap), channels",
    "Cycle data — temperature at cold start, end of heat ramp, soak start / mid / end, end of cool ramp, below 600 deg F",
    "Acceptance check vs code — soak temperature, hold time, rates, max differential, chart continuity",
    "Attachments checklist — chart trace, calibration certificates, TC layout sketch, WPS / PQR, MTR",
    "Sign-off — PWHT operator, NDT Level II/III witness, QC inspector, Client / TPI",
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="Post-Weld Heat Treatment (PWHT) Record Template | Free XLSX Download"
        description="Free PWHT record template per ASME B31.3 / Section VIII. Captures soak temp, hold time, ramp rate, thermocouples, chart attachments, and sign-off."
        keywords="PWHT record template, post weld heat treatment, ASME B31.3 PWHT, soak temperature, thermocouple layout, heat treatment chart, PWHT report"
        canonical="https://atlantisndt.com/resources/pwht-record"
        structuredData={structuredData}
      />
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "PWHT Record" }
      ]} />

      <section className="bg-[#004aad] text-white py-16 pt-8 no-print">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-2 text-blue-200 mb-4"><FileText className="w-5 h-5" /><span>Free Resource — Heat-Treatment Record</span></div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Post-Weld Heat Treatment (PWHT) Record</h1>
            <p className="text-xl text-blue-100 max-w-3xl mb-8">
              An ASME-aligned record sheet capturing all data a Code inspector needs to accept a PWHT cycle — temperature parameters, TC layout, cycle data, acceptance vs Code requirement, and sign-off.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/templates/pwht-record.xlsx" download className="inline-flex items-center gap-2 bg-white text-[#004aad] px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"><Download className="w-5 h-5" /> Download Editable XLSX</a>
              <button onClick={() => window.print()} className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"><Printer className="w-5 h-5" /> Print / Save as PDF</button>
              <a href="mailto:info@atlantisndt.com?subject=PWHT Record — Custom Build Request" className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"><FileText className="w-5 h-5" /> Request Custom Build</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-4xl px-6 space-y-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white rounded-xl shadow border border-slate-100 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Overview</h2>
            <p className="text-slate-700 mb-3">
              Post-Weld Heat Treatment (PWHT) is required by ASME Section VIII Division 1 (UCS-56), ASME B31.3 (Table 331.1.3), and many customer specifications when material P-Number, thickness, or service condition demands stress-relief or hydrogen out-gassing. The PWHT record proves to an Authorized Inspector or TPI that the cycle met both the WPS and the Code.
            </p>
            <p className="text-slate-700 mb-3">
              Use this template at the start of every PWHT cycle. Capture process parameters before heating, log the cycle data points during the run, and complete the acceptance and attachments sections before submitting to QC. The TC layout and attachments table are designed to match what an Authorized Inspector reviews during dossier handover.
            </p>
            <p className="text-slate-700">
              Atlantis NDT delivers customized PWHT records integrated with chart-recorder data exports, automatic Code compliance checking, and digital signatures via our reporting platform.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white rounded-xl shadow border border-slate-100 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Sections Included</h2>
            <ul className="space-y-2">{sections.map((s, i) => <li key={i} className="flex items-start gap-3 text-slate-700"><CheckCircle className="w-5 h-5 text-[#004aad] flex-shrink-0 mt-0.5" />{s}</li>)}</ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white rounded-xl shadow border border-slate-100 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Related Free Templates</h2>
            <ul className="grid sm:grid-cols-2 gap-3 text-slate-700">
              <li><Link to="/resources/welder-qualification-test-wpqr" className="text-[#004aad] hover:underline">Welder Qualification Test (WPQR)</Link></li>
              <li><Link to="/resources/inspection-test-plan-itp" className="text-[#004aad] hover:underline">Inspection & Test Plan (ITP)</Link></li>
              <li><Link to="/resources/ndt-procedure-template" className="text-[#004aad] hover:underline">NDT Procedure Template</Link></li>
              <li><Link to="/resources/api-510-inspection-report" className="text-[#004aad] hover:underline">API 510 Inspection Report</Link></li>
              <li><Link to="/resources" className="text-[#004aad] hover:underline">All Resources</Link></li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#004aad] text-white text-center no-print">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold mb-4">Need digital PWHT records?</h2>
          <p className="text-blue-100 mb-8 text-lg">Auto-import chart-recorder data, run Code-compliance checks, and sign digitally.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:info@atlantisndt.com?subject=PWHT Record — Custom Build Request" className="inline-flex items-center gap-2 bg-white text-[#004aad] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">Request Demo</a>
            <Link to="/contact" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">Contact Us</Link>
          </div>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
