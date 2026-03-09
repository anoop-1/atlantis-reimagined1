import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Printer, FileText, Download, CheckCircle } from "lucide-react";

export default function TrainingRequirementsMatrix() {
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
        .print-header { display: block !important; }
      }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "NDT Training Requirements Matrix | Hours by Method & Level",
    "description": "Complete NDT training requirements matrix showing minimum classroom and OJT hours by method and level for ASNT SNT-TC-1A, ISO 9712, and PCN certification schemes.",
    "author": { "@type": "Organization", "name": "Atlantis NDT" },
    "publisher": { "@type": "Organization", "name": "Atlantis NDT", "logo": { "@type": "ImageObject", "url": "https://atlantisndt.com/og-image.jpg" } },
    "datePublished": "2026-02-01",
    "dateModified": "2026-02-28"
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="NDT Training Requirements Matrix | Hours by Method & Level | Free Download"
        description="Free NDT training requirements matrix showing minimum classroom and OJT hours for ASNT SNT-TC-1A, ISO 9712, and PCN. Compare requirements across methods (UT, RT, MT, PT, VT, ET) and certification levels (I, II, III)."
        keywords="NDT training hours, ASNT training requirements, ISO 9712 training hours, PCN training requirements, NDT certification hours, UT training hours, RT training hours, NDT OJT requirements"
        canonical="https://atlantisndt.com/resources/training-requirements-matrix"
        structuredData={structuredData}
      />
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "Training Requirements Matrix" }
      ]} />

      {/* Print Header */}
      <div className="print-header hidden">
        <h1 style={{ textAlign: 'center', borderBottom: '2px solid #004aad', paddingBottom: '8px' }}>
          NDT Training Requirements Matrix - Atlantis NDT
        </h1>
      </div>

      {/* Hero */}
      <section className="bg-[#004aad] text-white py-16 pt-8 no-print">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-2 text-blue-200 mb-4">
              <FileText className="w-5 h-5" />
              <span>Free Resource - Reference Matrix</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">NDT Training Requirements Matrix</h1>
            <p className="text-xl text-blue-100 max-w-3xl mb-8">
              A complete reference showing minimum training hours (classroom and on-the-job) required for NDT certification across all major schemes: ASNT SNT-TC-1A, ISO 9712, and PCN. Organized by method and certification level with side-by-side comparisons.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 bg-white text-[#004aad] px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                <Printer className="w-5 h-5" />
                Download PDF
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
              >
                <Download className="w-5 h-5" />
                Get Editable Version
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto max-w-6xl px-6 space-y-10">

          {/* Section 1: ASNT SNT-TC-1A */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow border border-slate-100 p-8"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-2">1. ASNT SNT-TC-1A Recommended Training Hours</h2>
            <p className="text-slate-600 mb-6">
              ASNT SNT-TC-1A provides <strong>recommended minimum</strong> training and experience hours. These are guidelines -- the employer's written practice may specify higher requirements. SNT-TC-1A is an employer-based certification scheme used primarily in the United States.
            </p>

            <h3 className="text-lg font-bold text-[#004aad] mb-3">Classroom Training Hours (Minimum Recommended)</h3>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#004aad] text-white">
                    <th className="px-4 py-3 text-left font-semibold">Method</th>
                    <th className="px-4 py-3 text-center font-semibold">Level I (hrs)</th>
                    <th className="px-4 py-3 text-center font-semibold">Level II (hrs)</th>
                    <th className="px-4 py-3 text-center font-semibold">Level III (hrs)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Ultrasonic Testing (UT)", "40", "40", "40"],
                    ["Radiographic Testing (RT)", "40", "40", "40"],
                    ["Magnetic Particle Testing (MT)", "12", "8", "24"],
                    ["Liquid Penetrant Testing (PT)", "4", "8", "24"],
                    ["Visual Testing (VT)", "8", "16", "24"],
                    ["Eddy Current Testing (ET)", "40", "40", "40"],
                  ].map(([method, l1, l2, l3], idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                      <td className="px-4 py-3 border-b border-slate-200 text-slate-800 font-medium">{method}</td>
                      <td className="px-4 py-3 border-b border-slate-200 text-center text-slate-700">{l1}</td>
                      <td className="px-4 py-3 border-b border-slate-200 text-center text-slate-700">{l2}</td>
                      <td className="px-4 py-3 border-b border-slate-200 text-center text-slate-700">{l3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-bold text-[#004aad] mb-3">On-the-Job Training / Experience Hours (Minimum Recommended)</h3>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#004aad] text-white">
                    <th className="px-4 py-3 text-left font-semibold">Method</th>
                    <th className="px-4 py-3 text-center font-semibold">Level I (hrs)</th>
                    <th className="px-4 py-3 text-center font-semibold">Level II (hrs)</th>
                    <th className="px-4 py-3 text-center font-semibold">Level III (hrs)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Ultrasonic Testing (UT)", "210", "630", "1,260"],
                    ["Radiographic Testing (RT)", "210", "630", "1,260"],
                    ["Magnetic Particle Testing (MT)", "130", "400", "800"],
                    ["Liquid Penetrant Testing (PT)", "130", "400", "800"],
                    ["Visual Testing (VT)", "130", "400", "800"],
                    ["Eddy Current Testing (ET)", "210", "630", "1,260"],
                  ].map(([method, l1, l2, l3], idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                      <td className="px-4 py-3 border-b border-slate-200 text-slate-800 font-medium">{method}</td>
                      <td className="px-4 py-3 border-b border-slate-200 text-center text-slate-700">{l1}</td>
                      <td className="px-4 py-3 border-b border-slate-200 text-center text-slate-700">{l2}</td>
                      <td className="px-4 py-3 border-b border-slate-200 text-center text-slate-700">{l3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border-l-4 border-[#004aad] p-4 rounded mt-6">
              <p className="text-slate-700 text-sm"><strong>Note:</strong> Level II hours shown are <em>in addition to</em> Level I. Level III hours shown are <em>in addition to</em> Level II. Total hours for Level III = Level I + Level II + Level III.</p>
            </div>
          </motion.div>

          {/* Section 2: ISO 9712 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow border border-slate-100 p-8"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-2">2. ISO 9712 Required Training Hours</h2>
            <p className="text-slate-600 mb-6">
              ISO 9712 specifies <strong>mandatory minimum</strong> training hours (not recommendations). This is a central certification scheme used internationally. Training must be provided by an authorized training organization.
            </p>

            <h3 className="text-lg font-bold text-[#004aad] mb-3">Minimum Training Duration (Hours)</h3>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#004aad] text-white">
                    <th className="px-4 py-3 text-left font-semibold">Method</th>
                    <th className="px-4 py-3 text-center font-semibold">Level 1 (hrs)</th>
                    <th className="px-4 py-3 text-center font-semibold">Level 2 (hrs)</th>
                    <th className="px-4 py-3 text-center font-semibold">Level 3 (hrs)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Ultrasonic Testing (UT)", "40", "80", "40"],
                    ["Radiographic Testing (RT)", "40", "80", "40"],
                    ["Magnetic Particle Testing (MT)", "16", "24", "24"],
                    ["Liquid Penetrant Testing (PT)", "16", "24", "24"],
                    ["Visual Testing (VT)", "16", "24", "24"],
                    ["Eddy Current Testing (ET)", "40", "48", "48"],
                  ].map(([method, l1, l2, l3], idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                      <td className="px-4 py-3 border-b border-slate-200 text-slate-800 font-medium">{method}</td>
                      <td className="px-4 py-3 border-b border-slate-200 text-center text-slate-700">{l1}</td>
                      <td className="px-4 py-3 border-b border-slate-200 text-center text-slate-700">{l2}</td>
                      <td className="px-4 py-3 border-b border-slate-200 text-center text-slate-700">{l3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-bold text-[#004aad] mb-3">Minimum Industrial Experience (Months)</h3>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#004aad] text-white">
                    <th className="px-4 py-3 text-left font-semibold">Method</th>
                    <th className="px-4 py-3 text-center font-semibold">Level 1 (months)</th>
                    <th className="px-4 py-3 text-center font-semibold">Level 2 (months)</th>
                    <th className="px-4 py-3 text-center font-semibold">Level 3 (months)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Ultrasonic Testing (UT)", "3", "9", "18"],
                    ["Radiographic Testing (RT)", "3", "9", "18"],
                    ["Magnetic Particle Testing (MT)", "1", "3", "12"],
                    ["Liquid Penetrant Testing (PT)", "1", "3", "12"],
                    ["Visual Testing (VT)", "1", "3", "12"],
                    ["Eddy Current Testing (ET)", "3", "9", "18"],
                  ].map(([method, l1, l2, l3], idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                      <td className="px-4 py-3 border-b border-slate-200 text-slate-800 font-medium">{method}</td>
                      <td className="px-4 py-3 border-b border-slate-200 text-center text-slate-700">{l1}</td>
                      <td className="px-4 py-3 border-b border-slate-200 text-center text-slate-700">{l2}</td>
                      <td className="px-4 py-3 border-b border-slate-200 text-center text-slate-700">{l3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border-l-4 border-[#004aad] p-4 rounded mt-6">
              <p className="text-slate-700 text-sm"><strong>Note:</strong> ISO 9712 Level 2 hours shown are <em>in addition to</em> Level 1. A candidate applying directly for Level 2 must complete both Level 1 and Level 2 training. Experience months for Level 2 and 3 are cumulative including previous levels.</p>
            </div>
          </motion.div>

          {/* Section 3: PCN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow border border-slate-100 p-8"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-2">3. PCN Training Requirements</h2>
            <p className="text-slate-600 mb-6">
              The Personnel Certification in Non-Destructive Testing (PCN) scheme is operated by BINDT (British Institute of Non-Destructive Testing). Based on ISO 9712, PCN has additional requirements specific to the UK and international markets.
            </p>

            <h3 className="text-lg font-bold text-[#004aad] mb-3">PCN Training Duration (Hours) -- Minimum</h3>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#004aad] text-white">
                    <th className="px-4 py-3 text-left font-semibold">Method</th>
                    <th className="px-4 py-3 text-center font-semibold">Level 1 (hrs)</th>
                    <th className="px-4 py-3 text-center font-semibold">Level 2 (hrs)</th>
                    <th className="px-4 py-3 text-center font-semibold">Level 3 (hrs)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Ultrasonic Testing (UT)", "40", "80", "40"],
                    ["Radiographic Testing (RT/RI)", "40", "80", "40"],
                    ["Magnetic Particle Testing (MT)", "16", "24", "24"],
                    ["Liquid Penetrant Testing (PT)", "16", "24", "24"],
                    ["Visual Testing (VT)", "16", "24", "24"],
                    ["Eddy Current Testing (ET)", "40", "48", "48"],
                    ["TOFD", "40", "40", "--"],
                    ["Phased Array UT (PAUT)", "40", "40", "--"],
                  ].map(([method, l1, l2, l3], idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                      <td className="px-4 py-3 border-b border-slate-200 text-slate-800 font-medium">{method}</td>
                      <td className="px-4 py-3 border-b border-slate-200 text-center text-slate-700">{l1}</td>
                      <td className="px-4 py-3 border-b border-slate-200 text-center text-slate-700">{l2}</td>
                      <td className="px-4 py-3 border-b border-slate-200 text-center text-slate-700">{l3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border-l-4 border-[#004aad] p-4 rounded">
              <p className="text-slate-700 text-sm"><strong>PCN Exam Format:</strong> PCN exams include general theory, specific theory, and practical (hands-on) examinations. The practical exam is a distinguishing feature of PCN -- candidates must demonstrate competence on real or representative test specimens.</p>
            </div>
          </motion.div>

          {/* Section 4: Experience Requirements Detail */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow border border-slate-100 p-8"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-6">4. Experience Requirements Detail</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Experience (OJT) must be documented and verifiable. Under SNT-TC-1A, the employer determines what qualifies as acceptable experience. Under ISO 9712 and PCN, experience must be in the specific NDT method and product sector.
            </p>
            <div className="space-y-4">
              {[
                { scheme: "ASNT SNT-TC-1A", detail: "Experience hours are recommendations. The employer's Written Practice defines actual requirements. Experience must be under the supervision of a Level II or Level III. Documentation is employer-controlled." },
                { scheme: "ISO 9712", detail: "Experience must be gained under qualified supervision. At least 50% of experience must be in the product sector(s) for which certification is sought. Experience log must be verified by the employer and countersigned by a Level 3." },
                { scheme: "PCN", detail: "Experience must be gained performing NDT in the relevant method and sector. A minimum of 10% of total experience must be in the specific product sector applied for. Experience logs must be submitted to BINDT." },
              ].map((entry, idx) => (
                <div key={idx} className="bg-slate-50 rounded-lg p-5 border-l-4 border-[#004aad]">
                  <h3 className="font-bold text-slate-800 mb-2">{entry.scheme}</h3>
                  <p className="text-slate-700">{entry.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Section 5: Education Credits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow border border-slate-100 p-8"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-6">5. Education Credits</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Formal education in science, engineering, or technology can reduce the OJT/experience requirement under certain schemes.
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#004aad] text-white">
                    <th className="px-4 py-3 text-left font-semibold">Education Level</th>
                    <th className="px-4 py-3 text-center font-semibold">SNT-TC-1A Credit</th>
                    <th className="px-4 py-3 text-center font-semibold">ISO 9712 Credit</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["High school diploma", "No reduction", "No reduction"],
                    ["2-year technical degree / diploma", "50% reduction in OJT hours", "50% reduction in experience months"],
                    ["4-year engineering / science degree", "50% reduction in OJT hours", "67% reduction in experience months"],
                    ["Post-graduate degree (MS, PhD)", "50% reduction in OJT hours", "67% reduction in experience months"],
                    ["NDT-specific degree program", "Employer discretion", "Up to 67% reduction"],
                  ].map(([edu, snt, iso], idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                      <td className="px-4 py-3 border-b border-slate-200 text-slate-800 font-medium">{edu}</td>
                      <td className="px-4 py-3 border-b border-slate-200 text-center text-slate-700">{snt}</td>
                      <td className="px-4 py-3 border-b border-slate-200 text-center text-slate-700">{iso}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border-l-4 border-[#004aad] p-4 rounded mt-6">
              <p className="text-slate-700 text-sm"><strong>Important:</strong> Education credits reduce experience requirements only -- they do not reduce training (classroom) hour requirements. Even with a PhD, you still need the full training course hours.</p>
            </div>
          </motion.div>

          {/* Section 6: Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow border border-slate-100 p-8"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-6">6. Side-by-Side Comparison: ASNT vs ISO 9712 vs PCN</h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#004aad] text-white">
                    <th className="px-4 py-3 text-left font-semibold">Feature</th>
                    <th className="px-4 py-3 text-center font-semibold">ASNT SNT-TC-1A</th>
                    <th className="px-4 py-3 text-center font-semibold">ISO 9712</th>
                    <th className="px-4 py-3 text-center font-semibold">PCN (BINDT)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Type", "Recommended practice", "International standard", "Certification scheme (based on ISO 9712)"],
                    ["Certification Authority", "Employer", "Authorized qualification body", "BINDT"],
                    ["Training Hours", "Recommended minimums", "Mandatory minimums", "Mandatory minimums"],
                    ["Exam Administered By", "Employer (Level III)", "Authorized examination center", "BINDT examination center"],
                    ["Practical Exam", "Employer discretion", "Required", "Required (key differentiator)"],
                    ["Portability", "Employer-specific only", "Internationally recognized", "Internationally recognized"],
                    ["Certification Validity", "Per employer Written Practice", "5 years (10-year renewal)", "5 years (10-year renewal)"],
                    ["Recertification", "Per employer Written Practice", "Re-examination required at 10 years", "Re-examination required at 10 years"],
                    ["Product Sectors", "Not specified", "Required (welds, castings, tubes, etc.)", "Required (multiple sectors available)"],
                    ["Industry Sectors", "Not specified", "Pre-service, in-service, manufacturing", "Pre-service, in-service, manufacturing"],
                    ["Common Regions", "USA, Americas", "Europe, Middle East, Asia, Africa", "UK, Commonwealth, Global"],
                  ].map(([feature, snt, iso, pcn], idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                      <td className="px-4 py-3 border-b border-slate-200 text-slate-800 font-semibold">{feature}</td>
                      <td className="px-4 py-3 border-b border-slate-200 text-center text-slate-700 text-xs">{snt}</td>
                      <td className="px-4 py-3 border-b border-slate-200 text-center text-slate-700 text-xs">{iso}</td>
                      <td className="px-4 py-3 border-b border-slate-200 text-center text-slate-700 text-xs">{pcn}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Section 7: Notes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow border border-slate-100 p-8"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-6">7. Important Notes</h2>
            <div className="space-y-4">
              {[
                { note: "Minimum Hours Are Minimums", detail: "Employers, clients, and regulatory authorities may require more hours than the minimum specified by any scheme. Some industries (nuclear, aerospace) have significantly higher requirements." },
                { note: "Direct Level 2 Certification", detail: "Under both ISO 9712 and PCN, candidates may apply directly for Level 2 without first holding Level 1. However, they must complete BOTH Level 1 and Level 2 training hours and the combined experience requirement." },
                { note: "Level 3 Special Requirements", detail: "ASNT Level III requires passing the ASNT Level III Basic and Method exams (administered by ASNT nationally). ISO 9712 Level 3 requires an additional knowledge of materials science, manufacturing processes, and quality systems. PCN Level 3 includes a demanding practical and oral exam component." },
                { note: "Multi-Method Certification", detail: "Training hours for each method are independent. If certifying in UT and RT, you need the full hours for each method. However, some general/basic topics may overlap." },
                { note: "Continuing Education", detail: "Most schemes require evidence of continuing professional development for recertification. Keep records of training courses, conferences, seminars, and NDT-related professional activities." },
                { note: "Technique vs. Method", detail: "Advanced techniques (PAUT, TOFD, digital RT) may require additional training beyond the base method hours. Check your certification scheme for specific requirements." },
              ].map((entry, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition">
                  <CheckCircle className="w-6 h-6 text-[#004aad] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-800">{entry.note}</p>
                    <p className="text-sm text-slate-600 mt-1">{entry.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#004aad] text-white text-center no-print">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold mb-4">Get the Editable Version</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Need this training matrix in an editable Excel format? Contact us for a customizable version with additional schemes (NAVSEA, NAS 410, EN 4179) and calculation tools.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 bg-white text-[#004aad] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              <Printer className="w-5 h-5" />
              Print / Save as PDF
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Get Editable Version
            </Link>
          </div>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
