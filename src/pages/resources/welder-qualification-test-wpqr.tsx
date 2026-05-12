import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Printer, FileText, Download, CheckCircle } from "lucide-react";

export default function WelderQualificationTestWPQR() {
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
    "headline": "Welder Performance Qualification Record (WPQR) — ASME Section IX",
    "description": "Free editable Welder Performance Qualification Record (WPQR) template per ASME Section IX. WPS reference, essential variables, test results, range qualified.",
    "author": { "@type": "Organization", "name": "Atlantis NDT" },
    "publisher": { "@type": "Organization", "name": "Atlantis NDT", "logo": { "@type": "ImageObject", "url": "https://atlantisndt.com/og-image.jpg" } },
    "datePublished": "2026-05-01",
    "dateModified": "2026-05-12"
  };

  const sections = [
    "Welder identification — name, ID/stamp, employer, date of birth, photo reference",
    "WPS used for the test — WPS ref, supporting PQR, welding process, transfer mode, power source",
    "Essential variables tested — QW-350 variables, actual values, ranges qualified",
    "Test coupon — base metal spec, thickness, diameter (if pipe), joint configuration, bevel angle",
    "Filler metal & welding parameters — pass-by-pass record (root / hot pass / fill / cap)",
    "Test results — visual examination (QW-302.4), bend test results (QW-462), RT / UT acceptance",
    "Range qualified — processes, P-No., F-No., position, diameter / thickness ranges, backing",
    "Continuity / renewal log — process used every 6 months per QW-322",
    "Certification statement and signatures — welder, welding engineer, AI / TPI",
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="Welder Performance Qualification Record (WPQR) Template | ASME IX | Free DOCX"
        description="Free Welder Performance Qualification Record (WPQR) template per ASME Section IX. Covers WPS reference, essential variables, bend tests, RT/UT, range qualified."
        keywords="WPQR template, welder qualification record, ASME Section IX, welder performance qualification, QW-300, essential variables, bend test, welding test"
        canonical="https://atlantisndt.com/resources/welder-qualification-test-wpqr"
        structuredData={structuredData}
      />
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "Welder Qualification Test (WPQR)" }
      ]} />

      <section className="bg-[#004aad] text-white py-16 pt-8 no-print">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-2 text-blue-200 mb-4"><FileText className="w-5 h-5" /><span>Free Resource — Welder Qualification</span></div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Welder Performance Qualification Record (WPQR)</h1>
            <p className="text-xl text-blue-100 max-w-3xl mb-8">
              An ASME Section IX aligned Word template for capturing a welder's performance qualification test. Covers identification, WPS reference, essential variables, coupon, parameters, test results (visual / bend / RT-UT), and range qualified.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/templates/welder-qualification-test-wpqr.docx" download className="inline-flex items-center gap-2 bg-white text-[#004aad] px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"><Download className="w-5 h-5" /> Download Editable DOCX</a>
              <button onClick={() => window.print()} className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"><Printer className="w-5 h-5" /> Print / Save as PDF</button>
              <a href="mailto:info@atlantisndt.com?subject=WPQR Template — Custom Build Request" className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"><FileText className="w-5 h-5" /> Request Custom Build</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-4xl px-6 space-y-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white rounded-xl shadow border border-slate-100 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Overview</h2>
            <p className="text-slate-700 mb-3">
              ASME Section IX (QW-300 series) governs the performance qualification of welders. Every welder who produces production welds under ASME Section VIII, ASME B31.3, ASME B31.1, or AWS D1.1 (when ASME IX is invoked) must hold a current WPQR that demonstrates their ability to deposit sound weld metal in the variables they will see on production.
            </p>
            <p className="text-slate-700 mb-3">
              Use this template at the welder qualification booth. Record the actual values used during the test, the visual and mechanical bend test results, the range qualified, and the continuity log. The structure follows ASME IX QW-484A / QW-484B and is acceptable to most Authorized Inspectors and TPIs.
            </p>
            <p className="text-slate-700">
              Atlantis NDT can deliver a fully digital WPQR workflow with photo capture, automatic range qualification per QW-452, and integration to the welder continuity register.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white rounded-xl shadow border border-slate-100 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Sections Included</h2>
            <ul className="space-y-2">{sections.map((s, i) => <li key={i} className="flex items-start gap-3 text-slate-700"><CheckCircle className="w-5 h-5 text-[#004aad] flex-shrink-0 mt-0.5" />{s}</li>)}</ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white rounded-xl shadow border border-slate-100 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Related Free Templates</h2>
            <ul className="grid sm:grid-cols-2 gap-3 text-slate-700">
              <li><Link to="/resources/pwht-record" className="text-[#004aad] hover:underline">PWHT Record</Link></li>
              <li><Link to="/resources/inspection-test-plan-itp" className="text-[#004aad] hover:underline">Inspection & Test Plan (ITP)</Link></li>
              <li><Link to="/resources/ndt-written-practice-template" className="text-[#004aad] hover:underline">NDT Written Practice (SNT-TC-1A)</Link></li>
              <li><Link to="/resources/ndt-procedure-template" className="text-[#004aad] hover:underline">NDT Procedure Template</Link></li>
              <li><Link to="/resources" className="text-[#004aad] hover:underline">All Resources</Link></li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#004aad] text-white text-center no-print">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold mb-4">Need a digital WPQR workflow?</h2>
          <p className="text-blue-100 mb-8 text-lg">Photo capture, automatic range qualification, welder continuity register — ask for a demo.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:info@atlantisndt.com?subject=WPQR Template — Custom Build Request" className="inline-flex items-center gap-2 bg-white text-[#004aad] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">Request Demo</a>
            <Link to="/contact" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">Contact Us</Link>
          </div>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
