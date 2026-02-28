import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Printer, FileText, Download, CheckCircle } from "lucide-react";

export default function NDTProcedureTemplate() {
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
    "headline": "NDT Procedure Template | SNT-TC-1A & ISO 9712 Compliant",
    "description": "Free NDT written procedure template with all 13 required sections per ASME Section V. Covers scope, personnel, equipment, calibration, technique, evaluation, and reporting.",
    "author": { "@type": "Organization", "name": "Atlantis NDT" },
    "publisher": { "@type": "Organization", "name": "Atlantis NDT", "logo": { "@type": "ImageObject", "url": "https://atlantisndt.com/og-image.jpg" } },
    "datePublished": "2026-02-01",
    "dateModified": "2026-02-28"
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="NDT Procedure Template | SNT-TC-1A & ISO 9712 Compliant | Free Download"
        description="Free NDT written procedure template aligned with ASME Section V, SNT-TC-1A, and ISO 9712. Complete 13-section template covering scope, personnel, equipment, calibration, technique, evaluation, reporting, and records."
        keywords="NDT procedure template, NDT written procedure, ASME Section V procedure, NDT procedure writing, NDE procedure template, UT procedure template, RT procedure template, inspection procedure"
        canonical="https://atlantisndt.com/resources/ndt-procedure-template"
        structuredData={structuredData}
      />
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "NDT Procedure Template" }
      ]} />

      {/* Print Header */}
      <div className="print-header hidden">
        <h1 style={{ textAlign: 'center', borderBottom: '2px solid #004aad', paddingBottom: '8px' }}>
          NDT Procedure Template - Atlantis NDT
        </h1>
      </div>

      {/* Hero */}
      <section className="bg-[#004aad] text-white py-16 pt-8 no-print">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-2 text-blue-200 mb-4">
              <FileText className="w-5 h-5" />
              <span>Free Resource - Procedure Template</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">NDT Procedure Template</h1>
            <p className="text-xl text-blue-100 max-w-3xl mb-8">
              A complete, code-compliant NDT written procedure template with all required sections per ASME Section V. Designed for Level III professionals to customize for their specific method, application, and governing codes. Compatible with SNT-TC-1A and ISO 9712 certification schemes.
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
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-10">

              {/* Header Block */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow border border-slate-100 p-8"
              >
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Section 1: Procedure Header Block</h2>
                <p className="text-slate-600 mb-4">Every written procedure must include a header block identifying the procedure and its authorization. This section appears on the first page.</p>
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
                  <table className="w-full text-sm">
                    <tbody>
                      {[
                        ["Company Name", ""],
                        ["Procedure Number", "e.g., NDE-UT-001"],
                        ["Revision Number", "Rev. ___"],
                        ["Revision Date", ""],
                        ["Procedure Title", "e.g., Ultrasonic Examination of Carbon Steel Welds"],
                        ["Applicable NDE Method", "UT / RT / MT / PT / ET / VT"],
                        ["Governing Code(s)", "e.g., ASME Section V, Article 4; ASME Section VIII, Div 1"],
                        ["Scope Summary", "Brief description of what this procedure covers"],
                        ["Prepared By (Level III)", "Name, Signature, Date"],
                        ["Reviewed By", "Name, Signature, Date"],
                        ["Approved By", "Name, Title, Signature, Date"],
                        ["Effective Date", ""],
                        ["Distribution", "Controlled / Uncontrolled"],
                      ].map(([label, value], idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                          <td className="px-4 py-3 font-semibold text-slate-700 border-b border-slate-200 w-2/5">{label}</td>
                          <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value || <span className="text-slate-300">___________________________</span>}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* Section 2: Scope */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow border border-slate-100 p-8"
              >
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Section 2: Scope</h2>
                <p className="text-slate-700 leading-relaxed mb-4">Define the boundaries of this procedure. Clearly state what it covers and what it does not cover.</p>
                <div className="space-y-4">
                  {[
                    { field: "Materials Covered", guidance: "List specific material types (e.g., carbon steel, low-alloy steel, stainless steel, aluminum). Reference material specifications (SA-516, SA-106, etc.)." },
                    { field: "Product Forms", guidance: "Plate, pipe, castings, forgings, welds (butt, fillet, socket), base metal, clad materials." },
                    { field: "Thickness Range", guidance: "Minimum and maximum thickness this procedure has been qualified for (e.g., 6mm to 50mm)." },
                    { field: "Temperature Range", guidance: "Surface temperature range the procedure is valid for (e.g., 0 to 50 degrees C). If outside ASME default range, procedure re-qualification may be needed." },
                    { field: "Defect Types to be Detected", guidance: "Cracks, lack of fusion, incomplete penetration, porosity, slag inclusions, laminations, corrosion, erosion." },
                    { field: "Weld Joint Configurations", guidance: "Butt welds (full penetration), fillet welds, T-joints, corner joints, nozzle welds. Include joint geometry limitations." },
                    { field: "Limitations / Exclusions", guidance: "State what this procedure does NOT cover (e.g., austenitic welds, dissimilar metal welds, HDPE pipe)." },
                  ].map((entry, idx) => (
                    <div key={idx} className="border-l-4 border-[#004aad] pl-4">
                      <p className="font-semibold text-slate-800">{entry.field}</p>
                      <p className="text-sm text-slate-600 mt-1">{entry.guidance}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Section 3: Reference Documents */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow border border-slate-100 p-8"
              >
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Section 3: Reference Documents</h2>
                <p className="text-slate-700 leading-relaxed mb-4">List all codes, standards, and specifications referenced by this procedure. Include edition/year.</p>
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#004aad] text-white">
                        <th className="px-4 py-3 text-left font-semibold">Document</th>
                        <th className="px-4 py-3 text-left font-semibold">Title</th>
                        <th className="px-4 py-3 text-center font-semibold">Edition/Year</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["ASME BPVC Section V", "Nondestructive Examination", "____"],
                        ["ASME BPVC Section VIII, Div 1", "Pressure Vessels (acceptance criteria)", "____"],
                        ["ASNT SNT-TC-1A", "Personnel Qualification & Certification", "____"],
                        ["ASTM E___", "Standard Practice for [Method]", "____"],
                        ["Client Specification", "_______________", "____"],
                        ["Company Written Practice", "NDE Personnel Certification Program", "____"],
                        ["Quality Manual", "Company QA/QC Program", "____"],
                      ].map(([doc, title, edition], idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                          <td className="px-4 py-2 border-b border-slate-200 text-slate-800 font-medium">{doc}</td>
                          <td className="px-4 py-2 border-b border-slate-200 text-slate-700">{title}</td>
                          <td className="px-4 py-2 border-b border-slate-200 text-center text-slate-400">{edition}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* Section 4: Personnel Requirements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow border border-slate-100 p-8"
              >
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Section 4: Personnel Requirements</h2>
                <div className="space-y-4">
                  {[
                    { field: "Certification Level Required", guidance: "State the minimum certification level (e.g., Level II minimum for performing examinations and interpreting results; Level III for procedure approval and training)." },
                    { field: "Certification Scheme", guidance: "ASNT SNT-TC-1A (employer-based), ASNT Central Certification (ACCP), ISO 9712, PCN, or other. Reference the company Written Practice." },
                    { field: "Vision Requirements", guidance: "Near vision acuity: Jaeger J1 or equivalent at 12 inches minimum, annually. Color perception test (where applicable) for distinguishing contrasts. Natural or corrected vision." },
                    { field: "Training Requirements", guidance: "Minimum training hours per SNT-TC-1A recommended practice or applicable scheme. Method-specific and technique-specific training." },
                    { field: "Experience Requirements", guidance: "OJT hours required per certification level and method per SNT-TC-1A or applicable scheme." },
                  ].map((entry, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition">
                      <CheckCircle className="w-6 h-6 text-[#004aad] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-800">{entry.field}</p>
                        <p className="text-sm text-slate-600 mt-1">{entry.guidance}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Section 5: Equipment */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow border border-slate-100 p-8"
              >
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Section 5: Equipment</h2>
                <p className="text-slate-700 leading-relaxed mb-4">List all equipment used in the examination. For each item, specify acceptable makes/models and calibration requirements.</p>
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#004aad] text-white">
                        <th className="px-4 py-3 text-left font-semibold">Equipment Item</th>
                        <th className="px-4 py-3 text-left font-semibold">Make / Model</th>
                        <th className="px-4 py-3 text-center font-semibold">Serial #</th>
                        <th className="px-4 py-3 text-center font-semibold">Cal. Due</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        "Primary Instrument (flaw detector / UT unit / source)",
                        "Probe / Transducer (type, frequency, size, angle)",
                        "Cable(s) (type, length)",
                        "Calibration Block(s) (IIW, V1, V2, DSC, step wedge)",
                        "Reference Standard(s) (material, reflectors)",
                        "Couplant / Consumables",
                        "Auxiliary Equipment (scanner, encoder, lighting)",
                        "Measuring Tools (ruler, calipers, weld gauges)",
                      ].map((item, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                          <td className="px-4 py-2 border-b border-slate-200 text-slate-700">{item}</td>
                          <td className="px-4 py-2 border-b border-slate-200 text-slate-400">___________</td>
                          <td className="px-4 py-2 border-b border-slate-200 text-center text-slate-400">________</td>
                          <td className="px-4 py-2 border-b border-slate-200 text-center text-slate-400">________</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* Sections 6-9: Surface Prep, Technique, Calibration, Examination */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow border border-slate-100 p-8"
              >
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Sections 6-9: Technical Details</h2>

                {/* Surface Preparation */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#004aad] mb-3">Section 6: Surface Preparation</h3>
                  <ul className="space-y-2">
                    {[
                      "Required surface condition (e.g., weld cap ground flush, minimum surface finish, paint removal width)",
                      "Cleaning methods (wire brush, grinding, solvent cleaning, chemical cleaning)",
                      "Maximum allowable surface roughness (if specified by code)",
                      "Surface temperature verification method and acceptable range",
                      "Condition of adjacent base metal (cleaning width each side of weld)",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-700">
                        <CheckCircle className="w-5 h-5 text-[#004aad] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technique */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#004aad] mb-3">Section 7: Technique</h3>
                  <p className="text-slate-700 leading-relaxed mb-3">Describe the specific technique parameters. This section must address all mandatory variables listed in the applicable ASME Section V table (e.g., Table T-421 for UT).</p>
                  <ul className="space-y-2">
                    {[
                      "Scan pattern: raster, zigzag, or encoded; overlap percentage; scan index (increment)",
                      "Beam angles and directions (for angled techniques, list all angles to be used)",
                      "Coverage requirements: 100% volumetric, specific zones, or sampling plan",
                      "Instrument settings: gain, range, velocity, reject/suppress level, gate positions",
                      "Transfer correction method (if applicable -- e.g., UT coupling differences)",
                      "Scanning speed limitations (if applicable)",
                      "Multi-technique requirements (e.g., 0-degree + angle beam for complete coverage)",
                      "Special technique considerations (TOFD, phased array, encoded scanning)",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-700">
                        <CheckCircle className="w-5 h-5 text-[#004aad] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Calibration */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#004aad] mb-3">Section 8: Calibration</h3>
                  <ul className="space-y-2">
                    {[
                      "Reference standard description: material, dimensions, reflector type/size",
                      "Calibration procedure: step-by-step instructions for instrument setup",
                      "Sensitivity settings: DAC, TCG, or reference level specification",
                      "Scanning sensitivity: how much above reference level (e.g., 6 dB above DAC)",
                      "Evaluation level: at what signal amplitude indications require characterization",
                      "Calibration verification frequency: at start, every 2 hours or less, end of shift, after equipment change",
                      "Calibration invalidation criteria: what constitutes loss of calibration",
                      "Action when calibration is lost: re-examine all work since last valid calibration check",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-700">
                        <CheckCircle className="w-5 h-5 text-[#004aad] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Examination */}
                <div>
                  <h3 className="text-xl font-bold text-[#004aad] mb-3">Section 9: Examination Procedure</h3>
                  <p className="text-slate-700 leading-relaxed mb-3">Provide step-by-step instructions that a qualified technician can follow to perform the examination.</p>
                  <ol className="space-y-3 list-decimal list-inside text-slate-700">
                    <li>Verify surface preparation meets requirements (Section 6)</li>
                    <li>Set up equipment and verify functionality</li>
                    <li>Perform calibration per Section 8</li>
                    <li>Apply couplant (for UT) or consumables (for PT/MT)</li>
                    <li>Perform scanning per technique requirements (Section 7)</li>
                    <li>Record all indications exceeding the recording level</li>
                    <li>Characterize and size all recordable indications</li>
                    <li>Perform calibration verification at required intervals</li>
                    <li>Evaluate indications per acceptance criteria (Section 10)</li>
                    <li>Mark accepted and rejected areas on the component</li>
                    <li>Complete final calibration verification</li>
                    <li>Clean component surface (remove couplant, consumables, markings as appropriate)</li>
                    <li>Complete examination report (Section 11)</li>
                  </ol>
                </div>
              </motion.div>

              {/* Section 10: Evaluation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow border border-slate-100 p-8"
              >
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Section 10: Acceptance Criteria</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Reference the specific acceptance criteria from the governing code. <strong>Do not reproduce copyrighted code text</strong> -- reference by section/paragraph/table number.
                </p>
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#004aad] text-white">
                        <th className="px-4 py-3 text-left font-semibold">Indication Type</th>
                        <th className="px-4 py-3 text-left font-semibold">Acceptance Criteria Reference</th>
                        <th className="px-4 py-3 text-left font-semibold">Acceptance Limit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Crack-like (linear)", "Code Section/Paragraph ____", ""],
                        ["Rounded (volumetric)", "Code Section/Paragraph ____", ""],
                        ["Cluster indications", "Code Section/Paragraph ____", ""],
                        ["Root indications", "Code Section/Paragraph ____", ""],
                        ["Accumulated length", "Code Section/Paragraph ____", ""],
                      ].map(([type, ref, limit], idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                          <td className="px-4 py-2 border-b border-slate-200 text-slate-700">{type}</td>
                          <td className="px-4 py-2 border-b border-slate-200 text-slate-600">{ref}</td>
                          <td className="px-4 py-2 border-b border-slate-200 text-slate-400">{limit || "___________"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* Section 11: Reporting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow border border-slate-100 p-8"
              >
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Section 11: Reporting</h2>
                <p className="text-slate-700 leading-relaxed mb-4">The examination report shall include, as a minimum, the following information:</p>
                <div className="grid md:grid-cols-2 gap-2">
                  {[
                    "Company name and procedure number/revision",
                    "Date of examination",
                    "Component identification (equipment number, weld joint number, drawing reference)",
                    "Material type and specification",
                    "Thickness and geometry",
                    "Surface condition prior to examination",
                    "Examination method and technique",
                    "Equipment identification (model, serial number)",
                    "Probe/transducer details (type, frequency, size, angle)",
                    "Calibration block identification",
                    "Reference sensitivity and scanning sensitivity",
                    "Couplant type",
                    "Surface and ambient temperature",
                    "Indication table: location, type, dimensions, evaluation, disposition",
                    "Sketch or map showing indication locations",
                    "Acceptance criteria used (code reference)",
                    "Overall results: Accept / Reject",
                    "Examiner name, certification level, signature",
                    "Level III reviewer name, certification, signature (where required)",
                    "Report distribution list",
                  ].map((field, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-[#004aad] flex-shrink-0 mt-0.5" />
                      <span>{field}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Section 12: Records */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow border border-slate-100 p-8"
              >
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Section 12: Records</h2>
                <p className="text-slate-700 leading-relaxed mb-4">Specify the records to be maintained and their retention requirements.</p>
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#004aad] text-white">
                        <th className="px-4 py-3 text-left font-semibold">Record Type</th>
                        <th className="px-4 py-3 text-center font-semibold">Retention Period</th>
                        <th className="px-4 py-3 text-left font-semibold">Storage Location</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Examination reports", "Per code: min 5 years", ""],
                        ["Calibration certificates", "Equipment life + 1 year", ""],
                        ["Calibration verification records", "Same as exam reports", ""],
                        ["Technique sheets / data sheets", "Same as exam reports", ""],
                        ["Digital data files (UT, PAUT, TOFD)", "Same as exam reports", ""],
                        ["Radiographic images (film, CR, DR)", "Per code: min 5 years", ""],
                        ["Personnel certification records", "Per Written Practice", ""],
                        ["Procedure qualification records", "Procedure life + 1 year", ""],
                      ].map(([record, retention, location], idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                          <td className="px-4 py-2 border-b border-slate-200 text-slate-700">{record}</td>
                          <td className="px-4 py-2 border-b border-slate-200 text-center text-slate-700">{retention}</td>
                          <td className="px-4 py-2 border-b border-slate-200 text-slate-400">{location || "___________"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* Section 13: Revision History */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow border border-slate-100 p-8"
              >
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Section 13: Revision History</h2>
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#004aad] text-white">
                        <th className="px-4 py-3 text-center font-semibold">Rev.</th>
                        <th className="px-4 py-3 text-center font-semibold">Date</th>
                        <th className="px-4 py-3 text-left font-semibold">Description of Change</th>
                        <th className="px-4 py-3 text-center font-semibold">Prepared By</th>
                        <th className="px-4 py-3 text-center font-semibold">Approved By</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[0, 1, 2, 3, 4].map((rev, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                          <td className="px-4 py-3 border-b border-slate-200 text-center text-slate-700 font-medium">{rev}</td>
                          <td className="px-4 py-3 border-b border-slate-200 text-center text-slate-400">___________</td>
                          <td className="px-4 py-3 border-b border-slate-200 text-slate-400">{rev === 0 ? "Initial issue" : "___________________________"}</td>
                          <td className="px-4 py-3 border-b border-slate-200 text-center text-slate-400">___________</td>
                          <td className="px-4 py-3 border-b border-slate-200 text-center text-slate-400">___________</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1 space-y-6 no-print">
              <div className="bg-white rounded-xl shadow border border-slate-100 p-6 sticky top-24">
                <h3 className="font-bold text-lg text-slate-800 mb-4">Template Sections</h3>
                <ol className="space-y-2 text-sm list-decimal list-inside">
                  <li className="text-[#004aad]">Header Block</li>
                  <li className="text-[#004aad]">Scope</li>
                  <li className="text-[#004aad]">Reference Documents</li>
                  <li className="text-[#004aad]">Personnel Requirements</li>
                  <li className="text-[#004aad]">Equipment</li>
                  <li className="text-[#004aad]">Surface Preparation</li>
                  <li className="text-[#004aad]">Technique</li>
                  <li className="text-[#004aad]">Calibration</li>
                  <li className="text-[#004aad]">Examination Procedure</li>
                  <li className="text-[#004aad]">Acceptance Criteria</li>
                  <li className="text-[#004aad]">Reporting</li>
                  <li className="text-[#004aad]">Records</li>
                  <li className="text-[#004aad]">Revision History</li>
                </ol>

                <hr className="my-6 border-slate-200" />

                <h3 className="font-bold text-lg text-slate-800 mb-4">Related Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/resources/ndt-inspection-checklist" className="text-[#004aad] hover:underline">NDT Inspection Checklist</Link></li>
                  <li><Link to="/resources/ndt-safety-checklist" className="text-[#004aad] hover:underline">NDT Safety Checklist</Link></li>
                  <li><Link to="/resources/training-requirements-matrix" className="text-[#004aad] hover:underline">Training Requirements Matrix</Link></li>
                  <li><Link to="/consulting/ndt-consulting-level-iii" className="text-[#004aad] hover:underline">Level III Consulting Services</Link></li>
                </ul>

                <hr className="my-6 border-slate-200" />

                <div className="bg-[#004aad] text-white rounded-lg p-5">
                  <h3 className="font-bold mb-2">Need Custom Procedures?</h3>
                  <p className="text-sm text-blue-100 mb-4">Our Level III professionals develop and qualify custom NDT procedures for your specific applications, codes, and equipment.</p>
                  <Link to="/contact" className="inline-block bg-white text-[#004aad] px-4 py-2 rounded font-semibold text-sm hover:bg-blue-50 transition">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#004aad] text-white text-center no-print">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold mb-4">Get the Editable Version</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Need this procedure template in an editable Word format? Contact us for a fully customizable version pre-filled for your specific NDT method.
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
