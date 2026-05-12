import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Printer, FileText, Download, CheckCircle } from "lucide-react";

export default function NDTWrittenPracticeTemplate() {
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
    "headline": "NDT Written Practice Template — ASNT SNT-TC-1A",
    "description": "Free editable NDT Written Practice template compliant with ASNT SNT-TC-1A. Covers scope, methods, levels, training, examinations, vision, certification, audits.",
    "author": { "@type": "Organization", "name": "Atlantis NDT" },
    "publisher": { "@type": "Organization", "name": "Atlantis NDT", "logo": { "@type": "ImageObject", "url": "https://atlantisndt.com/og-image.jpg" } },
    "datePublished": "2026-05-01",
    "dateModified": "2026-05-12"
  };

  const sections = [
    "Introduction & scope — employer-specific provisions, governing codes",
    "NDT methods covered — UT, RT, MT, PT, ET, VT, PAUT, TOFD, optional LT / AE / NR",
    "Levels of qualification — Level I trainee, Level II, Level III roles and responsibilities",
    "Education, training, and experience requirements — table of method / level minima",
    "Examinations — general, specific, practical with pass marks",
    "Vision requirements — Jaeger J2, color, annual frequency, record retention",
    "Certification — period, scope, records required, certifier authority",
    "Recertification — three SNT-TC-1A options (performance / re-exam / training)",
    "Suspension / revocation — triggers and reinstatement",
    "Records & retention — controlled storage per ISO 9001 §7.5",
    "Audit & review — annual Level III review",
    "Annexes — method hour summary, examination bank reference, revision history",
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="NDT Written Practice Template (SNT-TC-1A) | Free DOCX Download"
        description="Free NDT Written Practice template compliant with ASNT SNT-TC-1A. Employer-specific scope, methods, levels, training, examinations, certification, audit."
        keywords="NDT written practice, SNT-TC-1A template, written practice template, ASNT written practice, NDT personnel qualification, NDT certification program"
        canonical="https://atlantisndt.com/resources/ndt-written-practice-template"
        structuredData={structuredData}
      />
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "NDT Written Practice" }
      ]} />

      <section className="bg-[#004aad] text-white py-16 pt-8 no-print">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-2 text-blue-200 mb-4"><FileText className="w-5 h-5" /><span>Free Resource — Written Practice Program</span></div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">NDT Written Practice — ASNT SNT-TC-1A Template</h1>
            <p className="text-xl text-blue-100 max-w-3xl mb-8">
              A complete editable Written Practice for an employer's NDT certification program, compliant with ASNT SNT-TC-1A. Customize the scope, methods, levels, training, examinations, certification, recertification, and audit clauses for your organization.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/templates/ndt-written-practice-template.docx" download className="inline-flex items-center gap-2 bg-white text-[#004aad] px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"><Download className="w-5 h-5" /> Download Editable DOCX</a>
              <button onClick={() => window.print()} className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"><Printer className="w-5 h-5" /> Print / Save as PDF</button>
              <a href="mailto:info@atlantisndt.com?subject=NDT Written Practice — Custom Build Request" className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"><FileText className="w-5 h-5" /> Request Custom Build</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-4xl px-6 space-y-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white rounded-xl shadow border border-slate-100 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Overview</h2>
            <p className="text-slate-700 mb-3">
              ASNT Recommended Practice SNT-TC-1A is the most widely used framework for employer-based qualification and certification of NDT personnel in North America. The Recommended Practice requires every employer who certifies NDT personnel to maintain a Written Practice document that translates the SNT-TC-1A guidelines into specific employer policy.
            </p>
            <p className="text-slate-700 mb-3">
              Use this template to set up a new Written Practice or to update an existing one to the 2024 edition of SNT-TC-1A. It is structured to satisfy customer audit checks (ASME, API, AWS, NAVSEA) and to provide clear, auditable evidence to a Level III examiner.
            </p>
            <p className="text-slate-700">
              Atlantis NDT can develop a fully customized Written Practice tailored to your industry, customer base, and Level III preferences — and supply the supporting forms, training records, and examination banks.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white rounded-xl shadow border border-slate-100 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Sections Included</h2>
            <ul className="space-y-2">{sections.map((s, i) => <li key={i} className="flex items-start gap-3 text-slate-700"><CheckCircle className="w-5 h-5 text-[#004aad] flex-shrink-0 mt-0.5" />{s}</li>)}</ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white rounded-xl shadow border border-slate-100 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Related Free Templates</h2>
            <ul className="grid sm:grid-cols-2 gap-3 text-slate-700">
              <li><Link to="/resources/training-requirements-matrix" className="text-[#004aad] hover:underline">Training Requirements Matrix</Link></li>
              <li><Link to="/resources/asnt-level-iii-study-guide" className="text-[#004aad] hover:underline">ASNT Level III Study Guide</Link></li>
              <li><Link to="/resources/ndt-procedure-template" className="text-[#004aad] hover:underline">NDT Procedure Template</Link></li>
              <li><Link to="/resources/calibration-certificate-template" className="text-[#004aad] hover:underline">Calibration Certificate Template</Link></li>
              <li><Link to="/resources" className="text-[#004aad] hover:underline">All Resources</Link></li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#004aad] text-white text-center no-print">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold mb-4">Need a fully tailored Written Practice?</h2>
          <p className="text-blue-100 mb-8 text-lg">Atlantis NDT Level III consultants build, audit, and maintain Written Practice programs for inspection companies, manufacturers, and EPCs.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:info@atlantisndt.com?subject=NDT Written Practice — Custom Build Request" className="inline-flex items-center gap-2 bg-white text-[#004aad] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">Request Demo</a>
            <Link to="/contact" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">Contact Us</Link>
          </div>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
