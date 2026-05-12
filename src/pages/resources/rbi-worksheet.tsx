import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Printer, FileText, Download, CheckCircle } from "lucide-react";

export default function RBIWorksheet() {
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
    "headline": "Risk-Based Inspection (RBI) Worksheet — API 581",
    "description": "Free editable RBI worksheet per API 581 with asset register, damage mechanisms, POF/COF scoring, 5x5 risk matrix, and inspection plan.",
    "author": { "@type": "Organization", "name": "Atlantis NDT" },
    "publisher": { "@type": "Organization", "name": "Atlantis NDT", "logo": { "@type": "ImageObject", "url": "https://atlantisndt.com/og-image.jpg" } },
    "datePublished": "2026-05-01",
    "dateModified": "2026-05-12"
  };

  const sections = [
    "Asset register — 15 assets with tag, description, equipment type, design code, last / next inspection",
    "Damage mechanisms — 20 mechanisms (general / localized / pitting / SCC / HIC / CUI / creep / fatigue) per asset",
    "POF / COF / Risk — generic failure frequency, damage factor, POF cat 1-5, COF safety / environmental / financial, composite COF",
    "Risk matrix — full 5x5 matrix (Low / Medium / High / Very High) per API 581",
    "Inspection plan — recommended NDT, target effectiveness, coverage %, due date",
    "Sign-off — RBI facilitator, inspection engineer, process / corrosion engineer, operations, asset owner",
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="RBI Worksheet (API 581) | Risk-Based Inspection Template | Free XLSX"
        description="Free Risk-Based Inspection (RBI) worksheet per API 581. Asset register, damage mechanism scoring, POF / COF, 5x5 risk matrix, inspection plan, sign-off."
        keywords="RBI worksheet, API 581, risk-based inspection, damage mechanism, POF COF, risk matrix, inspection planning, corrosion engineer, integrity management"
        canonical="https://atlantisndt.com/resources/rbi-worksheet"
        structuredData={structuredData}
      />
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "RBI Worksheet" }
      ]} />

      <section className="bg-[#004aad] text-white py-16 pt-8 no-print">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-2 text-blue-200 mb-4"><FileText className="w-5 h-5" /><span>Free Resource — RBI Worksheet</span></div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">RBI Worksheet — API 581</h1>
            <p className="text-xl text-blue-100 max-w-3xl mb-8">
              A simplified Risk-Based Inspection workbook aligned with API 580 / 581. Capture asset register, damage mechanism scoring, POF and COF, the 5x5 risk matrix, and the inspection mitigation plan.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/templates/rbi-worksheet.xlsx" download className="inline-flex items-center gap-2 bg-white text-[#004aad] px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"><Download className="w-5 h-5" /> Download Editable XLSX</a>
              <button onClick={() => window.print()} className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"><Printer className="w-5 h-5" /> Print / Save as PDF</button>
              <a href="mailto:info@atlantisndt.com?subject=RBI Worksheet — Custom Build Request" className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"><FileText className="w-5 h-5" /> Request Custom Build</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-4xl px-6 space-y-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white rounded-xl shadow border border-slate-100 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Overview</h2>
            <p className="text-slate-700 mb-3">
              Risk-Based Inspection (RBI) is the methodology defined in API 580 (concepts) and API 581 (quantitative) for prioritizing inspection effort by the risk that asset failure would expose to safety, environment, and finance. RBI is now the default in-service inspection model for refineries, petrochemical plants, and offshore facilities.
            </p>
            <p className="text-slate-700 mb-3">
              Use this worksheet to capture the inputs and outputs of a qualitative or semi-quantitative RBI study. Populate the Asset Register, score each applicable damage mechanism, derive POF and COF, place each asset on the 5x5 matrix, and generate the inspection plan. The template is intentionally lean — extend with the full API 581 Part 2 calculation if quantitative results are needed.
            </p>
            <p className="text-slate-700">
              Atlantis NDT can build a full quantitative RBI study and integrate the results into a live integrity-management dashboard.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white rounded-xl shadow border border-slate-100 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Sheets Included</h2>
            <ul className="space-y-2">{sections.map((s, i) => <li key={i} className="flex items-start gap-3 text-slate-700"><CheckCircle className="w-5 h-5 text-[#004aad] flex-shrink-0 mt-0.5" />{s}</li>)}</ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white rounded-xl shadow border border-slate-100 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Related Free Templates</h2>
            <ul className="grid sm:grid-cols-2 gap-3 text-slate-700">
              <li><Link to="/resources/api-510-inspection-report" className="text-[#004aad] hover:underline">API 510 Inspection Report</Link></li>
              <li><Link to="/resources/api-570-piping-inspection-record" className="text-[#004aad] hover:underline">API 570 Piping Inspection Record</Link></li>
              <li><Link to="/resources/api-653-inspection-template" className="text-[#004aad] hover:underline">API 653 Tank Inspection Template</Link></li>
              <li><Link to="/resources/ndt-procedure-template" className="text-[#004aad] hover:underline">NDT Procedure Template</Link></li>
              <li><Link to="/resources" className="text-[#004aad] hover:underline">All Resources</Link></li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#004aad] text-white text-center no-print">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold mb-4">Need a full quantitative RBI?</h2>
          <p className="text-blue-100 mb-8 text-lg">Atlantis NDT runs API 581 quantitative studies and integrates the results into integrity-management dashboards.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:info@atlantisndt.com?subject=RBI Worksheet — Custom Build Request" className="inline-flex items-center gap-2 bg-white text-[#004aad] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">Request Demo</a>
            <Link to="/contact" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">Contact Us</Link>
          </div>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
