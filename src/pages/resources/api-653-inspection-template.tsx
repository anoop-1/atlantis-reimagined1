import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Printer, FileText, Download, CheckCircle } from "lucide-react";

export default function API653InspectionTemplate() {
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
    "headline": "API 653 Tank Inspection Template | AST Inspection Forms",
    "description": "Free API 653 above-ground storage tank inspection template with sections for tank identification, external and internal inspection, thickness readings, calculations, and recommendations.",
    "author": { "@type": "Organization", "name": "Atlantis NDT" },
    "publisher": { "@type": "Organization", "name": "Atlantis NDT", "logo": { "@type": "ImageObject", "url": "https://atlantisndt.com/og-image.jpg" } },
    "datePublished": "2026-02-01",
    "dateModified": "2026-02-28"
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="API 653 Tank Inspection Template | AST Inspection Forms | Free Download"
        description="Free API 653 above-ground storage tank inspection template. Includes tank identification, external/internal inspection forms, shell thickness data sheets, corrosion rate calculations, and re-inspection interval determination."
        keywords="API 653 inspection template, tank inspection form, AST inspection checklist, API 653 shell thickness, tank corrosion rate, API 653 remaining life, storage tank inspection form"
        canonical="https://atlantisndt.com/resources/api-653-inspection-template"
        structuredData={structuredData}
      />
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "API 653 Inspection Template" }
      ]} />

      {/* Print Header */}
      <div className="print-header hidden">
        <h1 style={{ textAlign: 'center', borderBottom: '2px solid #004aad', paddingBottom: '8px' }}>
          API 653 Tank Inspection Template - Atlantis NDT
        </h1>
      </div>

      {/* Hero */}
      <section className="bg-[#004aad] text-white py-16 pt-8 no-print">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-2 text-blue-200 mb-4">
              <FileText className="w-5 h-5" />
              <span>Free Resource - Inspection Template</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">API 653 Tank Inspection Template</h1>
            <p className="text-xl text-blue-100 max-w-3xl mb-8">
              A structured inspection form template for above-ground storage tank (AST) inspections per API 653. Covers tank identification, external visual inspection, internal inspection with thickness readings, fitness-for-service calculations, and recommendations.
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

          {/* Section 1: Tank Identification */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow border border-slate-100 p-8"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-6">1. Tank Identification</h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ["Tank ID / Number", ""],
                    ["Tank Location / Area", ""],
                    ["Owner / Operator", ""],
                    ["Product / Service", ""],
                    ["Design Code", "API 650 / Other: ___________"],
                    ["Nominal Capacity (bbls / gallons)", ""],
                    ["Diameter (ft) x Height (ft)", ""],
                    ["Year of Construction", ""],
                    ["Year Placed in Service", ""],
                    ["Shell Material Specification", ""],
                    ["Number of Shell Courses", ""],
                    ["Roof Type", "Cone / Dome / Floating (IFR/EFR) / Open Top"],
                    ["Floor Type", "Cone-Up / Cone-Down / Flat"],
                    ["Bottom Plate Material", ""],
                    ["Annular Plate Material & Thickness", ""],
                    ["Cathodic Protection", "Yes / No -- Type: ___________"],
                    ["Insulated", "Yes / No -- Type: ___________"],
                    ["Last External Inspection Date", ""],
                    ["Last Internal Inspection Date", ""],
                    ["Date of This Inspection", ""],
                    ["Inspector Name & Certification", ""],
                    ["API 653 Authorized Inspector", "Yes / No -- Cert #: ___________"],
                  ].map(([label, value], idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                      <td className="px-4 py-3 font-semibold text-slate-700 border-b border-slate-200 w-1/2">{label}</td>
                      <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value || <span className="text-slate-300">___________________________</span>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Section 2: External Visual Inspection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow border border-slate-100 p-8"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-6">2. External Visual Inspection</h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#004aad] text-white">
                    <th className="px-4 py-3 text-left font-semibold">Inspection Item</th>
                    <th className="px-4 py-3 text-center font-semibold w-24">Sat.</th>
                    <th className="px-4 py-3 text-center font-semibold w-24">Unsat.</th>
                    <th className="px-4 py-3 text-center font-semibold w-24">N/A</th>
                    <th className="px-4 py-3 text-left font-semibold">Comments / Observations</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "Foundation condition - cracks, erosion, vegetation",
                    "Foundation settlement - differential (measured at 8+ points)",
                    "Foundation settlement - planar tilt",
                    "Shell plate condition - corrosion, pitting, bulging",
                    "Shell-to-bottom weld visible condition",
                    "Shell vertical weld seams condition",
                    "Shell horizontal weld seams condition",
                    "Roof condition - corrosion, sagging, holes",
                    "Roof-to-shell junction / wind girder",
                    "Floating roof seal condition (if applicable)",
                    "Floating roof drain condition (if applicable)",
                    "Nozzle and manway condition",
                    "Nozzle reinforcement pads (tell-tale holes open)",
                    "Stairway / spiral staircase condition",
                    "Platform and handrail condition",
                    "Gauging / sampling equipment",
                    "Vents and pressure/vacuum relief devices",
                    "Cathodic protection system - anodes, connections",
                    "Insulation condition - damage, gaps, jacketing",
                    "Painting / coating condition",
                    "Grounding connections",
                    "Tank identification / signage",
                    "Fire protection equipment",
                    "Dike / containment area condition",
                  ].map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                      <td className="px-4 py-2 border-b border-slate-200 text-slate-700">{item}</td>
                      <td className="px-4 py-2 border-b border-slate-200 text-center text-slate-400">[ ]</td>
                      <td className="px-4 py-2 border-b border-slate-200 text-center text-slate-400">[ ]</td>
                      <td className="px-4 py-2 border-b border-slate-200 text-center text-slate-400">[ ]</td>
                      <td className="px-4 py-2 border-b border-slate-200 text-slate-400">_______________</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Section 3: Internal Inspection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow border border-slate-100 p-8"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-6">3. Internal Inspection</h2>

            {/* 3a: Floor Condition */}
            <h3 className="text-xl font-bold text-[#004aad] mb-4">3a. Floor Plate Condition</h3>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#004aad] text-white">
                    <th className="px-4 py-3 text-left font-semibold">Inspection Item</th>
                    <th className="px-4 py-3 text-center font-semibold w-24">Sat.</th>
                    <th className="px-4 py-3 text-center font-semibold w-24">Unsat.</th>
                    <th className="px-4 py-3 text-left font-semibold">Comments</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "General floor corrosion (topside)",
                    "General floor corrosion (underside -- if accessible)",
                    "Floor pitting -- isolated",
                    "Floor pitting -- widespread clusters",
                    "Floor plate weld condition",
                    "Floor plate buckling or distortion",
                    "Sump / drain condition",
                    "Internal coating / lining condition",
                  ].map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                      <td className="px-4 py-2 border-b border-slate-200 text-slate-700">{item}</td>
                      <td className="px-4 py-2 border-b border-slate-200 text-center text-slate-400">[ ]</td>
                      <td className="px-4 py-2 border-b border-slate-200 text-center text-slate-400">[ ]</td>
                      <td className="px-4 py-2 border-b border-slate-200 text-slate-400">_______________</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 3b: Critical Zone Readings */}
            <h3 className="text-xl font-bold text-[#004aad] mb-4">3b. Critical Zone Thickness Readings (within 3" of shell)</h3>
            <p className="text-slate-600 mb-4">Record UT thickness readings at each clock position around the tank perimeter, within the critical zone (3 inches from the shell-to-bottom weld).</p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#004aad] text-white">
                    <th className="px-4 py-3 text-left font-semibold">Position</th>
                    <th className="px-4 py-3 text-center font-semibold">Reading 1</th>
                    <th className="px-4 py-3 text-center font-semibold">Reading 2</th>
                    <th className="px-4 py-3 text-center font-semibold">Minimum</th>
                    <th className="px-4 py-3 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {["12 o'clock (North)", "1:30", "3 o'clock (East)", "4:30", "6 o'clock (South)", "7:30", "9 o'clock (West)", "10:30"].map((pos, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                      <td className="px-4 py-2 border-b border-slate-200 text-slate-700 font-medium">{pos}</td>
                      <td className="px-4 py-2 border-b border-slate-200 text-center text-slate-400">_______</td>
                      <td className="px-4 py-2 border-b border-slate-200 text-center text-slate-400">_______</td>
                      <td className="px-4 py-2 border-b border-slate-200 text-center text-slate-400">_______</td>
                      <td className="px-4 py-2 border-b border-slate-200 text-slate-400">___________</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 3c: Annular Plate Readings */}
            <h3 className="text-xl font-bold text-[#004aad] mb-4">3c. Annular Plate Thickness Readings</h3>
            <p className="text-slate-600 mb-4">Record annular plate thickness at the same clock positions. Minimum thickness requirements per API 653 Table 4.4.</p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#004aad] text-white">
                    <th className="px-4 py-3 text-left font-semibold">Position</th>
                    <th className="px-4 py-3 text-center font-semibold">Thickness (in.)</th>
                    <th className="px-4 py-3 text-center font-semibold">Min Required (in.)</th>
                    <th className="px-4 py-3 text-center font-semibold">Accept / Reject</th>
                  </tr>
                </thead>
                <tbody>
                  {["12 o'clock", "3 o'clock", "6 o'clock", "9 o'clock"].map((pos, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                      <td className="px-4 py-2 border-b border-slate-200 text-slate-700 font-medium">{pos}</td>
                      <td className="px-4 py-2 border-b border-slate-200 text-center text-slate-400">_______</td>
                      <td className="px-4 py-2 border-b border-slate-200 text-center text-slate-400">_______</td>
                      <td className="px-4 py-2 border-b border-slate-200 text-center text-slate-400">_______</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 3d: Shell Course UT Thickness */}
            <h3 className="text-xl font-bold text-[#004aad] mb-4">3d. Shell Course UT Thickness Readings</h3>
            <p className="text-slate-600 mb-4">Record thickness readings for each shell course. Minimum number of readings per course depends on tank diameter and course height per API 653.</p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#004aad] text-white">
                    <th className="px-4 py-3 text-left font-semibold">Course #</th>
                    <th className="px-4 py-3 text-center font-semibold">Nominal (in.)</th>
                    <th className="px-4 py-3 text-center font-semibold">Min Reading (in.)</th>
                    <th className="px-4 py-3 text-center font-semibold">Max Reading (in.)</th>
                    <th className="px-4 py-3 text-center font-semibold">Avg Reading (in.)</th>
                    <th className="px-4 py-3 text-center font-semibold">t_min Required (in.)</th>
                    <th className="px-4 py-3 text-center font-semibold">Accept / Reject</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((course, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                      <td className="px-4 py-2 border-b border-slate-200 text-slate-700 font-medium">{course}</td>
                      <td className="px-4 py-2 border-b border-slate-200 text-center text-slate-400">_______</td>
                      <td className="px-4 py-2 border-b border-slate-200 text-center text-slate-400">_______</td>
                      <td className="px-4 py-2 border-b border-slate-200 text-center text-slate-400">_______</td>
                      <td className="px-4 py-2 border-b border-slate-200 text-center text-slate-400">_______</td>
                      <td className="px-4 py-2 border-b border-slate-200 text-center text-slate-400">_______</td>
                      <td className="px-4 py-2 border-b border-slate-200 text-center text-slate-400">_______</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Section 4: Calculations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow border border-slate-100 p-8"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-6">4. Fitness-for-Service Calculations</h2>

            <div className="space-y-6">
              {/* Minimum Required Thickness */}
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-[#004aad] mb-3">4a. Minimum Required Shell Thickness (API 653, Section 4)</h3>
                <p className="text-slate-700 leading-relaxed mb-3">For each shell course, calculate t_min using the one-foot method or variable-design-point method:</p>
                <div className="bg-white rounded-lg p-4 border border-slate-200 font-mono text-sm text-slate-800 mb-3">
                  <p><strong>One-Foot Method (API 650 / 653):</strong></p>
                  <p className="mt-1">t_d = 2.6 x (H - 1) x D x G / (S_d x E)</p>
                  <p className="mt-1">t_t = 2.6 x (H - 1) x D x G / (S_t x E)</p>
                  <p className="mt-3 text-slate-600">Where: H = design liquid level (ft), D = tank diameter (ft), G = specific gravity, S = allowable stress (psi), E = joint efficiency</p>
                </div>
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#004aad] text-white">
                        <th className="px-4 py-3 text-left font-semibold">Parameter</th>
                        <th className="px-4 py-3 text-center font-semibold">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        "Tank Diameter (D), ft",
                        "Design Liquid Level (H), ft",
                        "Specific Gravity (G)",
                        "Allowable Stress - Design (S_d), psi",
                        "Allowable Stress - Hydro (S_t), psi",
                        "Joint Efficiency (E)",
                        "Corrosion Allowance (CA), in.",
                        "t_min (most restrictive course), in.",
                      ].map((param, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                          <td className="px-4 py-2 border-b border-slate-200 text-slate-700">{param}</td>
                          <td className="px-4 py-2 border-b border-slate-200 text-center text-slate-400">___________</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Corrosion Rates */}
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-[#004aad] mb-3">4b. Corrosion Rate Calculations</h3>
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#004aad] text-white">
                        <th className="px-4 py-3 text-left font-semibold">Parameter</th>
                        <th className="px-4 py-3 text-center font-semibold">Shell</th>
                        <th className="px-4 py-3 text-center font-semibold">Floor</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        "Original / Nominal Thickness (in.)",
                        "Previous Measured Thickness (in.)",
                        "Previous Inspection Date",
                        "Current Measured Thickness (in.)",
                        "Current Inspection Date",
                        "Long-Term Corrosion Rate (mpy)",
                        "Short-Term Corrosion Rate (mpy)",
                        "Design Corrosion Rate Used (mpy)",
                      ].map((param, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                          <td className="px-4 py-2 border-b border-slate-200 text-slate-700">{param}</td>
                          <td className="px-4 py-2 border-b border-slate-200 text-center text-slate-400">________</td>
                          <td className="px-4 py-2 border-b border-slate-200 text-center text-slate-400">________</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="bg-white rounded-lg p-4 border border-slate-200 font-mono text-sm text-slate-800 mt-4">
                  <p><strong>Corrosion Rate Formula:</strong></p>
                  <p className="mt-1">Short-Term Rate = (t_previous - t_current) / (years between inspections)</p>
                  <p className="mt-1">Long-Term Rate = (t_original - t_current) / (total years in service)</p>
                </div>
              </div>

              {/* Remaining Life & Next Inspection */}
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-[#004aad] mb-3">4c. Remaining Life & Next Inspection Date</h3>
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#004aad] text-white">
                        <th className="px-4 py-3 text-left font-semibold">Parameter</th>
                        <th className="px-4 py-3 text-center font-semibold">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        "Remaining Life (years) = (t_actual - t_min) / corrosion rate",
                        "Maximum Inspection Interval (API 653: 20 yrs external, 10 yrs internal, or RBI)",
                        "Calculated Next External Inspection Date",
                        "Calculated Next Internal Inspection Date",
                        "Recommended Next Inspection Date (use most conservative)",
                      ].map((param, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                          <td className="px-4 py-2 border-b border-slate-200 text-slate-700">{param}</td>
                          <td className="px-4 py-2 border-b border-slate-200 text-center text-slate-400">___________</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 5: Recommendations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow border border-slate-100 p-8"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-6">5. Recommendations & Action Items</h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#004aad] text-white">
                    <th className="px-4 py-3 text-center font-semibold w-12">#</th>
                    <th className="px-4 py-3 text-left font-semibold">Recommendation</th>
                    <th className="px-4 py-3 text-center font-semibold w-28">Priority</th>
                    <th className="px-4 py-3 text-center font-semibold w-32">Target Date</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5, 6].map((num, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                      <td className="px-4 py-3 border-b border-slate-200 text-center text-slate-700 font-medium">{num}</td>
                      <td className="px-4 py-3 border-b border-slate-200 text-slate-400">_____________________________________________</td>
                      <td className="px-4 py-3 border-b border-slate-200 text-center text-slate-400">H / M / L</td>
                      <td className="px-4 py-3 border-b border-slate-200 text-center text-slate-400">___________</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-bold text-[#004aad] mb-3">Common Recommendation Categories</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { category: "Repair / Replacement", items: ["Shell plate replacement", "Floor plate replacement", "Annular plate replacement", "Nozzle repair/replacement", "Weld repair (shell, floor, roof)"] },
                { category: "Monitoring & Re-inspection", items: ["Increase UT monitoring frequency", "Install corrosion coupons", "Add CML locations", "Reduce inspection interval", "Conduct RBI assessment"] },
                { category: "Maintenance", items: ["Recoat / repaint exterior", "Repair insulation / jacketing", "Repair cathodic protection system", "Foundation repair", "Seal/gasket replacement"] },
                { category: "Engineering Assessment", items: ["FFS assessment for pitting", "FFS assessment for settlement", "Structural analysis (roof/wind girder)", "Material verification (PMI)", "Alteration design review"] },
              ].map((cat, idx) => (
                <div key={idx} className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-bold text-slate-800 mb-2">{cat.category}</h4>
                  <ul className="space-y-1">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-[#004aad] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Sign-off */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <h3 className="text-lg font-bold text-[#004aad] mb-4">Inspection Sign-Off</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <p className="text-slate-700"><strong>Inspector Name:</strong> ______________________________</p>
                  <p className="text-slate-700"><strong>Certification #:</strong> ______________________________</p>
                  <p className="text-slate-700"><strong>Signature:</strong> ______________________________</p>
                  <p className="text-slate-700"><strong>Date:</strong> ______________________________</p>
                </div>
                <div className="space-y-3">
                  <p className="text-slate-700"><strong>Reviewed By (Level III):</strong> ______________________________</p>
                  <p className="text-slate-700"><strong>Certification #:</strong> ______________________________</p>
                  <p className="text-slate-700"><strong>Signature:</strong> ______________________________</p>
                  <p className="text-slate-700"><strong>Date:</strong> ______________________________</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#004aad] text-white text-center no-print">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold mb-4">Get the Editable Version</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Need this template in an editable Excel or Word format? Contact us for a fully customizable version with automated corrosion rate calculations and built-in formulas.
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
