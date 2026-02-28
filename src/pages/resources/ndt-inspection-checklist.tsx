import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Printer, FileText, Download, CheckCircle } from "lucide-react";

export default function NDTInspectionChecklist() {
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
    "headline": "NDT Inspection Checklist | Pre-Inspection to Reporting",
    "description": "Comprehensive NDT inspection checklist covering pre-inspection planning, equipment calibration, during-inspection procedures, post-inspection reporting, and code-specific reminders.",
    "author": { "@type": "Organization", "name": "Atlantis NDT" },
    "publisher": { "@type": "Organization", "name": "Atlantis NDT", "logo": { "@type": "ImageObject", "url": "https://atlantisndt.com/og-image.jpg" } },
    "datePublished": "2026-02-01",
    "dateModified": "2026-02-28"
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="NDT Inspection Checklist | Pre-Inspection to Reporting | Free Download"
        description="Free NDT inspection checklist PDF covering pre-inspection planning, equipment calibration, during-inspection procedures, post-inspection reporting, and code-specific reminders for ASME, API 510/570/653."
        keywords="NDT inspection checklist, NDT checklist PDF, pre-inspection checklist, NDT reporting checklist, ASME Section V checklist, API inspection checklist, free NDT download"
        canonical="https://atlantisndt.com/resources/ndt-inspection-checklist"
        structuredData={structuredData}
      />
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "NDT Inspection Checklist" }
      ]} />

      {/* Print Header - hidden on screen */}
      <div className="print-header hidden">
        <h1 style={{ textAlign: 'center', borderBottom: '2px solid #004aad', paddingBottom: '8px' }}>
          NDT Inspection Checklist - Atlantis NDT
        </h1>
      </div>

      {/* Hero */}
      <section className="bg-[#004aad] text-white py-16 pt-8 no-print">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-2 text-blue-200 mb-4">
              <FileText className="w-5 h-5" />
              <span>Free Resource - Printable Checklist</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">NDT Inspection Checklist</h1>
            <p className="text-xl text-blue-100 max-w-3xl mb-8">
              A comprehensive, step-by-step checklist for planning, executing, and documenting NDT inspections. Covers all phases from pre-inspection to final reporting with code-specific reminders for ASME Section V, API 510, API 570, and API 653.
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
            {/* Main Content */}
            <div className="md:col-span-2 space-y-10">

              {/* Section 1: Pre-Inspection Planning */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow border border-slate-100 p-8"
              >
                <h2 className="text-2xl font-bold text-slate-800 mb-2">1. Pre-Inspection Planning</h2>
                <p className="text-slate-600 mb-6">Complete before mobilizing to the job site. Proper planning prevents costly re-work and missed defects.</p>
                <div className="space-y-4">
                  {[
                    { item: "Review work scope and inspection objectives", detail: "Confirm what components, areas, or welds require examination. Verify the client's scope of work document matches the purchase order." },
                    { item: "Identify governing code or standard", detail: "Determine whether ASME Section V, AWS D1.1, API 510/570/653, EN standards, or client-specific specifications apply. Obtain the correct edition." },
                    { item: "Verify equipment calibration status", detail: "Confirm all instruments have current calibration certificates. Check calibration due dates and ensure they will remain valid through the project duration." },
                    { item: "Check technician certifications", detail: "Verify personnel hold valid certifications for the required method and level. Confirm certifications are per the employer's written practice (SNT-TC-1A) or applicable scheme (ISO 9712, PCN, ACCP)." },
                    { item: "Review previous inspection reports", detail: "Obtain and review prior inspection records for the component. Identify previously reported indications, corrosion rates, and areas of concern." },
                    { item: "Identify access requirements", detail: "Determine if scaffolding, rope access, confined space entry, or elevated work platforms are needed. Coordinate with site operations for access scheduling." },
                    { item: "Prepare documentation and forms", detail: "Ensure blank report forms, data sheets, technique sheets, and procedure documents are available. Pre-fill known information (equipment ID, project number, etc.)." },
                    { item: "Verify safety permits and site requirements", detail: "Obtain required work permits (hot work, confined space, radiation, etc.). Complete site-specific safety orientation. Confirm PPE requirements." }
                  ].map((entry, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition">
                      <CheckCircle className="w-6 h-6 text-[#004aad] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-800">{entry.item}</p>
                        <p className="text-sm text-slate-600 mt-1">{entry.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Section 2: Equipment & Calibration */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow border border-slate-100 p-8"
              >
                <h2 className="text-2xl font-bold text-slate-800 mb-2">2. Equipment & Calibration</h2>
                <p className="text-slate-600 mb-6">Verify all equipment is functional and properly calibrated before beginning any examination.</p>
                <div className="space-y-4">
                  {[
                    { item: "Verify equipment is within calibration date", detail: "Check instrument calibration sticker or certificate. If calibration expires during the project, plan for re-calibration or replacement." },
                    { item: "Check reference standards and calibration blocks", detail: "Verify IIW/V1, V2, DSC, or applicable calibration blocks are available. Confirm block material matches component material where required." },
                    { item: "Verify couplant and consumables", detail: "Ensure adequate supply of couplant (UT), penetrant/developer (PT), magnetic particles (MT), or film/imaging plates (RT). Check expiration dates on consumables." },
                    { item: "Test equipment functionality", detail: "Power on instruments and perform basic function checks. Verify display, controls, probes/transducers, and cables are working correctly. Check battery levels." },
                    { item: "Document equipment serial numbers", detail: "Record serial numbers for all instruments, probes, and calibration blocks on the technique sheet and report forms." },
                    { item: "Verify ambient conditions meet requirements", detail: "Measure and record surface temperature, ambient temperature, and lighting levels. Confirm conditions meet procedure requirements (e.g., PT requires 40-125F surface temp)." }
                  ].map((entry, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition">
                      <CheckCircle className="w-6 h-6 text-[#004aad] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-800">{entry.item}</p>
                        <p className="text-sm text-slate-600 mt-1">{entry.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Section 3: During Inspection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow border border-slate-100 p-8"
              >
                <h2 className="text-2xl font-bold text-slate-800 mb-2">3. During Inspection</h2>
                <p className="text-slate-600 mb-6">Follow these steps throughout the examination to ensure complete, accurate, and defensible results.</p>
                <div className="space-y-4">
                  {[
                    { item: "Follow the approved written procedure", detail: "Perform the examination exactly as described in the approved procedure. Do not deviate without Level III authorization and documented justification." },
                    { item: "Maintain scan coverage records", detail: "Track scan coverage systematically. Use grid systems, color coding, or digital tracking to ensure 100% coverage. Mark scanned areas on the component or sketch." },
                    { item: "Document all indications found", detail: "Record location, size, orientation, and classification of every indication. Include dimensions (length, depth, height), distance from reference points, and weld joint number." },
                    { item: "Record environmental conditions at intervals", detail: "Log temperature, humidity, wind speed, and lighting conditions at the start of each shift and when conditions change significantly." },
                    { item: "Apply correct acceptance criteria", detail: "Evaluate each indication against the acceptance criteria specified in the governing code. Reference the specific code paragraph, table, or figure used for evaluation." },
                    { item: "Photograph relevant findings", detail: "Take photographs of reportable indications, unusual conditions, and access limitations. Include a scale reference (ruler) and identification marker in photos." },
                    { item: "Mark defect locations on the component", detail: "Clearly mark the location of rejectable indications on the component surface using approved markers. Include the indication number for cross-reference to the report." },
                    { item: "Verify reference standard checks at required intervals", detail: "Perform calibration verification at the required frequency (beginning, end, every 2 hours, or per procedure). If calibration is lost, re-examine all work since the last valid check." }
                  ].map((entry, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition">
                      <CheckCircle className="w-6 h-6 text-[#004aad] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-800">{entry.item}</p>
                        <p className="text-sm text-slate-600 mt-1">{entry.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Section 4: Post-Inspection & Reporting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow border border-slate-100 p-8"
              >
                <h2 className="text-2xl font-bold text-slate-800 mb-2">4. Post-Inspection & Reporting</h2>
                <p className="text-slate-600 mb-6">Complete all documentation accurately and thoroughly. The report is the permanent record of the examination.</p>
                <div className="space-y-4">
                  {[
                    { item: "Complete report per procedure requirements", detail: "Fill out all fields on the report form. Ensure the report includes: procedure number, technique used, equipment, personnel, results, and disposition (accept/reject)." },
                    { item: "Include all required data fields", detail: "Verify the report contains every mandatory element: date, component ID, material, thickness, weld joint numbers, indication details, sketches, acceptance criteria, and technician signature." },
                    { item: "Attach calibration records", detail: "Include copies of equipment calibration certificates, calibration verification records from the examination, and reference standard traceability documentation." },
                    { item: "Obtain Level III review and approval", detail: "Submit reports to Level III for technical review and approval. The Level III should verify procedure compliance, correct code interpretation, proper indication evaluation, and report completeness." },
                    { item: "Distribute reports to stakeholders", detail: "Distribute the final approved report to the client, project manager, quality department, and any other parties specified in the contract or project quality plan." },
                    { item: "Archive per retention requirements", detail: "Store original reports, data files, images, and calibration records per the code or contract retention requirements. Typical retention: minimum 5 years; nuclear and some pressure vessel codes require longer." }
                  ].map((entry, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition">
                      <CheckCircle className="w-6 h-6 text-[#004aad] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-800">{entry.item}</p>
                        <p className="text-sm text-slate-600 mt-1">{entry.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Section 5: Code-Specific Reminders */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow border border-slate-100 p-8"
              >
                <h2 className="text-2xl font-bold text-slate-800 mb-6">5. Code-Specific Reminders</h2>

                {/* ASME Section V */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#004aad] mb-3">ASME Section V - Nondestructive Examination</h3>
                  <ul className="space-y-2 text-slate-700 leading-relaxed">
                    <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Verify the applicable Article for your method (Art. 4 = UT, Art. 2 = RT, Art. 7 = MT, Art. 6 = PT, Art. 8 = ET, Art. 9 = VT)</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Confirm mandatory and non-mandatory appendices that apply to your technique</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Acceptance criteria are NOT in Section V -- they are in the referencing code section (e.g., Section VIII Div 1, UW-51/52)</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Written procedure must address all mandatory requirements listed in the applicable Article's table (e.g., Table T-421 for UT)</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Procedure demonstration (qualification) is required when specified by the referencing code</span></li>
                  </ul>
                </div>

                {/* API 510 */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#004aad] mb-3">API 510 - Pressure Vessel Inspection</h3>
                  <ul className="space-y-2 text-slate-700 leading-relaxed">
                    <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Verify minimum thickness calculations per API 510 Section 7 (t_min for internal pressure, external pressure)</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Calculate corrosion rates: short-term (last two inspections) and long-term (from original/first recorded thickness)</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Determine next inspection date using remaining life and inspection interval formulas</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Document CML (Condition Monitoring Location) readings and compare with historical data</span></li>
                  </ul>
                </div>

                {/* API 570 */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#004aad] mb-3">API 570 - Piping Inspection</h3>
                  <ul className="space-y-2 text-slate-700 leading-relaxed">
                    <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Classify piping circuits by service class (Class 1, 2, or 3) to determine inspection frequency</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Identify injection points, deadlegs, and CUI-susceptible areas for priority examination</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Verify small-bore piping and socket welds are included in the inspection scope</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Calculate MAWP (Maximum Allowable Working Pressure) at current measured thickness</span></li>
                  </ul>
                </div>

                {/* API 653 */}
                <div>
                  <h3 className="text-xl font-bold text-[#004aad] mb-3">API 653 - Tank Inspection</h3>
                  <ul className="space-y-2 text-slate-700 leading-relaxed">
                    <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Check foundation and settlement: measure differential settlement at a minimum of 8 points around the tank perimeter</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Measure shell plate thickness at each course -- minimum readings per API 653 Table 6.1</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Inspect the critical zone (floor area within 3 inches of the shell-to-bottom weld)</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Evaluate annular plate condition and minimum thickness per API 653 Table 4.4</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Assess roof plates, support structure, and floating roof seal condition</span></li>
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1 space-y-6 no-print">
              <div className="bg-white rounded-xl shadow border border-slate-100 p-6 sticky top-24">
                <h3 className="font-bold text-lg text-slate-800 mb-4">Quick Navigation</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-[#004aad] hover:underline">1. Pre-Inspection Planning</a></li>
                  <li><a href="#" className="text-[#004aad] hover:underline">2. Equipment & Calibration</a></li>
                  <li><a href="#" className="text-[#004aad] hover:underline">3. During Inspection</a></li>
                  <li><a href="#" className="text-[#004aad] hover:underline">4. Post-Inspection & Reporting</a></li>
                  <li><a href="#" className="text-[#004aad] hover:underline">5. Code-Specific Reminders</a></li>
                </ul>

                <hr className="my-6 border-slate-200" />

                <h3 className="font-bold text-lg text-slate-800 mb-4">Related Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/resources/api-653-inspection-template" className="text-[#004aad] hover:underline">API 653 Inspection Template</Link></li>
                  <li><Link to="/resources/ndt-procedure-template" className="text-[#004aad] hover:underline">NDT Procedure Template</Link></li>
                  <li><Link to="/resources/ndt-safety-checklist" className="text-[#004aad] hover:underline">NDT Safety Checklist</Link></li>
                  <li><Link to="/resources/training-requirements-matrix" className="text-[#004aad] hover:underline">Training Requirements Matrix</Link></li>
                </ul>

                <hr className="my-6 border-slate-200" />

                <div className="bg-[#004aad] text-white rounded-lg p-5">
                  <h3 className="font-bold mb-2">Need Custom Checklists?</h3>
                  <p className="text-sm text-blue-100 mb-4">Our Level III consultants develop project-specific inspection checklists tailored to your codes, equipment, and quality requirements.</p>
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
            Need this checklist in an editable Word or Excel format? Contact us and we will send you a fully customizable version you can brand and adapt for your projects.
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
