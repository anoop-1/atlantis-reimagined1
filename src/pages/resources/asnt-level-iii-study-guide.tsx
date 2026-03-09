import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Printer, FileText, Download, CheckCircle } from "lucide-react";

export default function ASNTLevelIIIStudyGuide() {
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
    "headline": "ASNT Level III Study Guide | Exam Prep Overview",
    "description": "Comprehensive ASNT Level III exam preparation guide covering Basic and Specific exam topics, study strategies, key standards, common failure areas, and exam-day tips.",
    "author": { "@type": "Organization", "name": "Atlantis NDT" },
    "publisher": { "@type": "Organization", "name": "Atlantis NDT", "logo": { "@type": "ImageObject", "url": "https://atlantisndt.com/og-image.jpg" } },
    "datePublished": "2026-02-01",
    "dateModified": "2026-02-28"
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="ASNT Level III Study Guide | Exam Prep Overview | Free Download"
        description="Free ASNT Level III exam study guide. Covers Basic and Specific exam formats, topic areas by method (UT, RT, MT, PT, VT, ET), key standards, study strategies, common failure areas, and exam-day tips."
        keywords="ASNT Level III study guide, ASNT Level 3 exam prep, ASNT Level III topics, NDT Level III certification, ASNT Basic exam, ASNT Specific exam, SNT-TC-1A Level III"
        canonical="https://atlantisndt.com/resources/asnt-level-iii-study-guide"
        structuredData={structuredData}
      />
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "ASNT Level III Study Guide" }
      ]} />

      {/* Print Header */}
      <div className="print-header hidden">
        <h1 style={{ textAlign: 'center', borderBottom: '2px solid #004aad', paddingBottom: '8px' }}>
          ASNT Level III Study Guide - Atlantis NDT
        </h1>
      </div>

      {/* Hero */}
      <section className="bg-[#004aad] text-white py-16 pt-8 no-print">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-2 text-blue-200 mb-4">
              <FileText className="w-5 h-5" />
              <span>Free Resource - Study Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">ASNT Level III Study Guide</h1>
            <p className="text-xl text-blue-100 max-w-3xl mb-8">
              A comprehensive exam preparation overview for the ASNT Level III certification. Covers exam format, topic areas for all six major NDT methods, key standards to study, preparation strategies, common failure areas, and exam-day tips.
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

              {/* Section 1: Exam Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow border border-slate-100 p-8"
              >
                <h2 className="text-2xl font-bold text-slate-800 mb-6">1. Exam Overview</h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  The ASNT Level III certification requires passing two examinations: the <strong>Basic exam</strong> and the <strong>Method exam</strong> (also called the Specific exam). Both must be passed to earn the Level III certificate in a given method.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#004aad] text-white">
                        <th className="px-4 py-3 text-left font-semibold">Component</th>
                        <th className="px-4 py-3 text-left font-semibold">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Basic Exam", "135 multiple-choice questions covering materials science, NDE processes, quality/certification standards"],
                        ["Method (Specific) Exam", "Multiple-choice questions specific to the chosen NDT method -- typically 60-80 questions"],
                        ["Format", "Computer-based testing (CBT) at Prometric or Pearson VUE centers"],
                        ["Passing Score -- Basic", "70% overall (no minimum per section)"],
                        ["Passing Score -- Method", "80% overall"],
                        ["Time Limit -- Basic", "4 hours"],
                        ["Time Limit -- Method", "2-3 hours (varies by method)"],
                        ["Cost", "$510 per exam (Basic or Method) as of 2026"],
                        ["Retake Policy", "Must wait 30 days before retaking; 3 attempts per 12-month period"],
                        ["Validity", "5-year certification cycle with renewal requirements"],
                      ].map(([param, value], idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                          <td className="px-4 py-3 border-b border-slate-200 text-slate-800 font-semibold">{param}</td>
                          <td className="px-4 py-3 border-b border-slate-200 text-slate-700">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-blue-50 border-l-4 border-[#004aad] p-4 rounded">
                  <p className="text-slate-700 text-sm"><strong>Important:</strong> The Basic exam only needs to be passed once. After that, you can add additional methods by passing only the Method exam for each new method.</p>
                </div>
              </motion.div>

              {/* Section 2: Basic Exam Topics by Method */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow border border-slate-100 p-8"
              >
                <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Method Exam Topic Areas</h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  The Method exam tests deep knowledge of the specific NDT method. Below are the key topic areas from SNT-TC-1A and ASNT study materials for each method.
                </p>

                {/* UT Topics */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#004aad] mb-3">Ultrasonic Testing (UT)</h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    {[
                      "Wave propagation and modes (longitudinal, shear, surface, plate)",
                      "Acoustic impedance and reflection/transmission coefficients",
                      "Snell's law and mode conversion",
                      "Near field and far field calculations",
                      "Beam spread and divergence",
                      "Attenuation mechanisms (absorption, scattering)",
                      "Transducer construction and types (contact, immersion, phased array)",
                      "Straight beam techniques and applications",
                      "Angle beam techniques -- shear wave inspection",
                      "DAC curves and TCG construction",
                      "DGS/AVG method",
                      "TOFD principles and interpretation",
                      "Phased array principles and focal laws",
                      "Thickness measurement techniques and error sources",
                      "Calibration blocks (IIW, DSC, V1, V2, step wedge)",
                      "Weld inspection scanning patterns",
                      "Casting inspection considerations",
                      "Bond testing and composite inspection",
                      "ASME Section V Article 4 requirements",
                      "AWS D1.1 UT acceptance criteria",
                    ].map((topic, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-[#004aad] flex-shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RT Topics */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#004aad] mb-3">Radiographic Testing (RT)</h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    {[
                      "X-ray generation -- tube construction, spectra, filtration",
                      "Gamma ray sources -- Ir-192, Co-60, Se-75 characteristics",
                      "Radiation physics -- photoelectric, Compton, pair production",
                      "Inverse square law and exposure calculations",
                      "Half-value layer calculations",
                      "Film characteristics -- speed, contrast, latitude, graininess",
                      "Film processing -- developing, fixing, washing, drying",
                      "Computed radiography (CR) and digital radiography (DR)",
                      "Image quality indicators (IQI/penetrameters) -- hole type and wire type",
                      "Geometric unsharpness calculations (Ug = Fd/D)",
                      "Single-wall/single-image and double-wall techniques",
                      "Panoramic and elliptical exposure techniques",
                      "Exposure charts and technique development",
                      "Film density requirements per ASME and AWS",
                      "Darkroom practices and artifacts",
                      "Radiographic interpretation -- weld discontinuity identification",
                      "Radiation safety -- ALARA, time/distance/shielding",
                      "Regulatory requirements (NRC, state agreements)",
                      "ASME Section V Article 2 requirements",
                      "Source handling and emergency procedures",
                    ].map((topic, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-[#004aad] flex-shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* MT Topics */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#004aad] mb-3">Magnetic Particle Testing (MT)</h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    {[
                      "Magnetic field theory -- flux density, permeability, retentivity",
                      "Hysteresis loop and B-H curves",
                      "Magnetization methods -- yoke, prods, coil, central conductor, head shot",
                      "Longitudinal vs. circular magnetization",
                      "Ampere-turn calculations and field adequacy rules",
                      "Prod spacing and amperage requirements",
                      "Particle types -- dry powder, wet fluorescent, wet visible",
                      "Continuous vs. residual method",
                      "Demagnetization techniques and verification",
                      "Surface preparation requirements",
                      "UV-A light requirements and verification",
                      "System performance verification (Ketos ring, QQI, pie gauge)",
                      "Indication interpretation -- relevant, non-relevant, false",
                      "ASME Section V Article 7 requirements",
                      "Magnetic particle concentration and contamination checks",
                    ].map((topic, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-[#004aad] flex-shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* PT Topics */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#004aad] mb-3">Liquid Penetrant Testing (PT)</h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    {[
                      "Penetrant types -- Type I (fluorescent) and Type II (visible)",
                      "Removal methods -- Method A (water washable), B (post-emulsifiable lipophilic), C (solvent removable), D (post-emulsifiable hydrophilic)",
                      "Sensitivity levels (Level 1/2 through Level 4)",
                      "Surface tension, capillary action, and wetting",
                      "Surface preparation and cleaning requirements",
                      "Penetrant application and dwell time requirements",
                      "Excess penetrant removal techniques",
                      "Developer types (dry, non-aqueous wet, aqueous wet, aqueous suspended)",
                      "Developer application and development time",
                      "UV-A light requirements for fluorescent inspection",
                      "White light requirements for visible inspection",
                      "System performance checks (TAM panel, PSM-5, Type 1 comparators)",
                      "Temperature limitations and special techniques for high/low temp",
                      "Indication interpretation and evaluation",
                      "ASME Section V Article 6 requirements",
                    ].map((topic, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-[#004aad] flex-shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* VT Topics */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#004aad] mb-3">Visual Testing (VT)</h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    {[
                      "Human vision -- acuity, adaptation, color perception",
                      "Light measurement -- foot-candles, lux, luminance",
                      "Direct visual examination requirements and limitations",
                      "Remote visual examination (RVT) -- borescopes, videoscopes",
                      "Optical aids -- mirrors, magnifiers, measuring tools",
                      "Weld profile inspection and workmanship criteria",
                      "Weld discontinuity identification (undercut, overlap, porosity, cracks)",
                      "Weld gauges -- fillet, hi-lo, Cambridge, bridge cam",
                      "Surface condition assessment",
                      "Dimensional verification",
                      "Light source requirements (minimum 50 fc / 500 lux)",
                      "Eye examination requirements (Jaeger J1 or equivalent near vision)",
                      "Documentation and photography requirements",
                      "AWS D1.1 visual inspection acceptance criteria",
                      "ASME Section V Article 9 requirements",
                    ].map((topic, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-[#004aad] flex-shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ET Topics */}
                <div>
                  <h3 className="text-xl font-bold text-[#004aad] mb-3">Eddy Current Testing (ET)</h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    {[
                      "Electromagnetic induction principles",
                      "Eddy current generation and skin depth",
                      "Impedance plane analysis",
                      "Frequency selection and optimization",
                      "Conductivity and permeability effects",
                      "Lift-off and fill factor",
                      "Probe types -- surface (absolute, differential), bobbin, rotating",
                      "Multi-frequency and multi-channel techniques",
                      "Eddy current array (ECA) technology",
                      "Heat exchanger tube inspection applications",
                      "Surface crack detection applications",
                      "Conductivity measurement and sorting",
                      "Coating thickness measurement",
                      "Calibration standards and reference standards",
                      "ASME Section V Article 8 requirements",
                    ].map((topic, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-[#004aad] flex-shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Section 3: Key Standards to Study */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow border border-slate-100 p-8"
              >
                <h2 className="text-2xl font-bold text-slate-800 mb-6">3. Key Standards to Study</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-[#004aad] mb-3">ASME Boiler & Pressure Vessel Code</h3>
                    <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-[#004aad] text-white">
                            <th className="px-4 py-3 text-left font-semibold">Section / Article</th>
                            <th className="px-4 py-3 text-left font-semibold">Covers</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ["Section V, Article 1", "General requirements for all NDE methods"],
                            ["Section V, Article 2", "Radiographic examination"],
                            ["Section V, Article 4", "Ultrasonic examination of welds"],
                            ["Section V, Article 5", "Ultrasonic examination of materials"],
                            ["Section V, Article 6", "Liquid penetrant examination"],
                            ["Section V, Article 7", "Magnetic particle examination"],
                            ["Section V, Article 8", "Eddy current examination"],
                            ["Section V, Article 9", "Visual examination"],
                            ["Section V, Article 23", "Ultrasonic standards (SE-797, SE-2375, etc.)"],
                            ["Section VIII, Div 1, UW-51/52", "Radiography acceptance criteria for welds"],
                            ["Section VIII, Div 1, Appendix 8", "UT examination methods for welds"],
                          ].map(([article, covers], idx) => (
                            <tr key={idx} className={idx % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                              <td className="px-4 py-2 border-b border-slate-200 text-slate-800 font-medium">{article}</td>
                              <td className="px-4 py-2 border-b border-slate-200 text-slate-700">{covers}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#004aad] mb-3">ASTM Standards (Referenced in ASME Section V)</h3>
                    <div className="grid md:grid-cols-2 gap-2">
                      {[
                        "ASTM E94 - Radiographic examination guide",
                        "ASTM E164 - UT contact examination of weldments",
                        "ASTM E165 - Liquid penetrant examination standard practice",
                        "ASTM E709 - Magnetic particle examination guide",
                        "ASTM E1444 - Magnetic particle testing standard practice",
                        "ASTM E2375 - UT examination of austenitic welds",
                        "ASTM E2700 - Contact UT examination of welds using PAUT",
                        "ASTM E1816 - UT TOFD technique",
                        "ASTM E2698 - Radiographic examination using CR/DR",
                      ].map((std, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle className="w-4 h-4 text-[#004aad] flex-shrink-0 mt-0.5" />
                          <span>{std}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#004aad] mb-3">AWS Standards</h3>
                    <div className="grid md:grid-cols-2 gap-2">
                      {[
                        "AWS D1.1 - Structural Welding Code -- Steel (Clause 6: Inspection)",
                        "AWS D1.1 - Table 6.1 UT acceptance criteria",
                        "AWS B1.10 - Guide for NDE of welds",
                        "AWS QC1 - Standard for AWS Certification of Welding Inspectors",
                      ].map((std, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle className="w-4 h-4 text-[#004aad] flex-shrink-0 mt-0.5" />
                          <span>{std}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Section 4: Study Strategy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow border border-slate-100 p-8"
              >
                <h2 className="text-2xl font-bold text-slate-800 mb-6">4. Study Strategy</h2>

                <div className="space-y-6">
                  <div className="bg-slate-50 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-[#004aad] mb-3">Recommended Timeline: 3-6 Months</h3>
                    <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-[#004aad] text-white">
                            <th className="px-4 py-3 text-left font-semibold">Phase</th>
                            <th className="px-4 py-3 text-center font-semibold">Duration</th>
                            <th className="px-4 py-3 text-left font-semibold">Focus</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            ["Phase 1: Foundation", "Weeks 1-4", "Materials science, metallurgy, NDE process overview. Read ASNT Level III Study Guide: Basic."],
                            ["Phase 2: Standards Deep Dive", "Weeks 5-10", "Read applicable code sections cover-to-cover. Create summary notes for each Article."],
                            ["Phase 3: Method Mastery", "Weeks 11-16", "Method-specific study. Work through every topic area. Focus on calculations."],
                            ["Phase 4: Practice Exams", "Weeks 17-20", "Take practice exams. Identify weak areas. Re-study those sections."],
                            ["Phase 5: Final Review", "Weeks 21-24", "Review notes, retake practice exams, focus on formulas and code paragraphs."],
                          ].map(([phase, duration, focus], idx) => (
                            <tr key={idx} className={idx % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                              <td className="px-4 py-3 border-b border-slate-200 text-slate-800 font-semibold">{phase}</td>
                              <td className="px-4 py-3 border-b border-slate-200 text-center text-slate-700">{duration}</td>
                              <td className="px-4 py-3 border-b border-slate-200 text-slate-700">{focus}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#004aad] mb-3">Recommended Study Resources</h3>
                    <ul className="space-y-2">
                      {[
                        "ASNT Level III Study Guide: Basic -- official ASNT publication covering all Basic exam topics",
                        "ASNT Level III Study Guide: [Your Method] -- method-specific ASNT study guide",
                        "ASNT NDT Handbook Volume for your method -- comprehensive reference",
                        "ASME BPVC Section V (current edition) -- the primary code reference",
                        "ASNT Questions & Answers book (if available for your method)",
                        "Classroom or online Level III prep courses -- structured curriculum with instructor guidance",
                        "Study groups -- find peers preparing for the same exam to quiz each other",
                      ].map((resource, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-700">
                          <CheckCircle className="w-5 h-5 text-[#004aad] flex-shrink-0 mt-0.5" />
                          <span>{resource}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Section 5: Common Failure Areas */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow border border-slate-100 p-8"
              >
                <h2 className="text-2xl font-bold text-slate-800 mb-6">5. Common Failure Areas</h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Based on feedback from candidates and instructors, these are the areas where most people lose points. Spend extra time studying these topics.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { area: "Calculations", details: ["Near-field distance (N = D^2f/4v)", "Beam spread angles", "Geometric unsharpness (Ug)", "Half-value layer", "Exposure calculations", "Snell's law refraction angles"] },
                    { area: "Code Interpretation", details: ["Reading and applying acceptance criteria tables", "Understanding mandatory vs. non-mandatory appendices", "Distinguishing between shall, should, and may", "Knowing which code section contains what information", "Understanding examination vs. inspection roles"] },
                    { area: "Materials Science", details: ["Phase diagrams (Fe-C diagram)", "Heat treatment effects on microstructure", "Hydrogen-induced cracking mechanisms", "Stress corrosion cracking", "Fatigue crack propagation", "Discontinuity formation during welding"] },
                    { area: "Procedure & Certification", details: ["SNT-TC-1A vs. CP-189 vs. ISO 9712 differences", "Written practice requirements", "Procedure qualification requirements", "Personnel qualification vs. certification", "Employer-based vs. central certification"] },
                  ].map((section, idx) => (
                    <div key={idx} className="bg-red-50 border border-red-100 rounded-lg p-5">
                      <h3 className="font-bold text-red-800 mb-3">{section.area}</h3>
                      <ul className="space-y-1">
                        {section.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                            <span className="text-red-400 mt-1">--</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Section 6: Exam Day Tips */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow border border-slate-100 p-8"
              >
                <h2 className="text-2xl font-bold text-slate-800 mb-6">6. Exam Day Tips</h2>

                <div className="space-y-4">
                  {[
                    { tip: "What to Bring", detail: "Government-issued photo ID, confirmation email/number, calculator (non-programmable, no phone), pencils. No open-book references -- the exam is closed-book." },
                    { tip: "Arrive Early", detail: "Plan to arrive 30 minutes before your scheduled time. Late arrivals may be turned away and forfeit the exam fee." },
                    { tip: "Time Management", detail: "Basic exam: ~1.8 minutes per question. Method exam: ~2 minutes per question. Do not spend more than 3 minutes on any single question -- flag it and return later." },
                    { tip: "Answer Every Question", detail: "There is no penalty for guessing. Never leave a question blank. Eliminate obviously wrong answers first, then make your best guess." },
                    { tip: "Read Carefully", detail: "Watch for double negatives, \"EXCEPT\" questions, and \"all of the following EXCEPT\" formats. Read all four answer choices before selecting." },
                    { tip: "Calculation Strategy", detail: "For calculation questions, estimate the answer first. If your calculated answer is not among the choices, re-check your formula and units. Common traps include metric/imperial unit mix-ups." },
                    { tip: "Manage Stress", detail: "If you hit a difficult section, keep moving. Confidence often builds as you progress. Mark uncertain answers and revisit them with fresh eyes during review." },
                    { tip: "Review Period", detail: "Use any remaining time to review flagged questions. Check that you answered every question. Do not change answers unless you are certain -- your first instinct is usually correct." },
                  ].map((entry, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition">
                      <CheckCircle className="w-6 h-6 text-[#004aad] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-800">{entry.tip}</p>
                        <p className="text-sm text-slate-600 mt-1">{entry.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1 space-y-6 no-print">
              <div className="bg-white rounded-xl shadow border border-slate-100 p-6 sticky top-24">
                <h3 className="font-bold text-lg text-slate-800 mb-4">Quick Navigation</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-[#004aad] hover:underline">1. Exam Overview</a></li>
                  <li><a href="#" className="text-[#004aad] hover:underline">2. Method Exam Topics</a></li>
                  <li><a href="#" className="text-[#004aad] hover:underline">3. Key Standards</a></li>
                  <li><a href="#" className="text-[#004aad] hover:underline">4. Study Strategy</a></li>
                  <li><a href="#" className="text-[#004aad] hover:underline">5. Common Failure Areas</a></li>
                  <li><a href="#" className="text-[#004aad] hover:underline">6. Exam Day Tips</a></li>
                </ul>

                <hr className="my-6 border-slate-200" />

                <h3 className="font-bold text-lg text-slate-800 mb-4">Related Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/resources/training-requirements-matrix" className="text-[#004aad] hover:underline">Training Requirements Matrix</Link></li>
                  <li><Link to="/resources/ndt-procedure-template" className="text-[#004aad] hover:underline">NDT Procedure Template</Link></li>
                  <li><Link to="/asnt-certification" className="text-[#004aad] hover:underline">ASNT Certification Overview</Link></li>
                  <li><Link to="/ndt-career-guide" className="text-[#004aad] hover:underline">NDT Career Guide</Link></li>
                </ul>

                <hr className="my-6 border-slate-200" />

                <div className="bg-[#004aad] text-white rounded-lg p-5">
                  <h3 className="font-bold mb-2">Level III Prep Courses</h3>
                  <p className="text-sm text-blue-100 mb-4">Atlantis NDT offers instructor-led Level III preparation courses with practice exams and one-on-one mentoring from certified Level III professionals.</p>
                  <Link to="/contact" className="inline-block bg-white text-[#004aad] px-4 py-2 rounded font-semibold text-sm hover:bg-blue-50 transition">
                    Inquire About Training
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
            Need this study guide in an editable format? Contact us for a customizable version with additional practice questions and calculation worksheets.
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
