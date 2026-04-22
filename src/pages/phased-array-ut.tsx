import ContactDetails from "@/components/ContactDetails";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { CheckCircle, Layers, Shield, Target, Gauge, Clock, ChevronDown, ChevronUp, Zap } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "What is phased array ultrasonic testing (PAUT)?",
    a: "Phased array ultrasonic testing (PAUT) is an advanced UT technique that uses a multi-element transducer array — typically 16 to 128 individual piezoelectric elements — to electronically steer, focus, and sweep an ultrasonic beam through a component. By introducing precise time delays (focal laws) between element firings, the beam can be steered through a range of angles simultaneously, producing cross-sectional imaging (S-scan, B-scan, C-scan) in real time. PAUT replaces the need for multiple manual probe positions and delivers superior defect characterization and permanent digital records compared to conventional single-element UT.",
  },
  {
    q: "How does PAUT differ from conventional UT?",
    a: "Conventional UT uses a single piezoelectric element that transmits at a fixed angle and frequency. To inspect a weld fully, the technician must manually reposition the probe multiple times using different angle-beam probes (typically 45°, 60°, 70°). Each position produces a one-dimensional A-scan. Phased Array UT eliminates this by electronically sweeping through all required angles in a single probe position — producing a fan-shaped S-scan image that shows the full weld cross-section simultaneously. PAUT is faster, provides better defect detection probability, generates permanent imaging records, and enables superior sizing of planar defects. The trade-off is higher equipment cost and the need for additional training and procedure qualification.",
  },
  {
    q: "What is an S-scan in PAUT?",
    a: "An S-scan (sectorial scan) is the most commonly used PAUT display for weld inspection. It shows the results of a beam electronically swept through a range of angles — typically 40° to 70° — all from a single probe position. The result is a fan-shaped cross-sectional image of the weld, with each 'slice' representing the response at a specific beam angle. Defects appear as bright reflectors within the fan image, and their position within the scan directly corresponds to their depth and lateral location in the weld. S-scans allow weld inspection that previously required multiple manual probe placements to be completed in a single pass, dramatically increasing speed and consistency.",
  },
  {
    q: "What ASME code covers phased array UT?",
    a: "Phased array ultrasonic testing is governed by ASME Section V, Article 4, Mandatory Appendix IV for pressure vessels and pressure piping construction inspection. Appendix IV specifies requirements for PAUT procedure qualification including demonstration blocks, focal law validation, and scanning requirements. ASME Section VIII, Division 1 governs acceptance criteria for pressure vessel weld examination. AWS D1.1 Annex K covers PAUT of structural steel welds. API 1104 Appendix A covers PAUT and AUT for pipeline girth welds. Additionally, ASME Code Case 2235 allows PAUT to be used as an alternative to radiographic testing (RT) for pressure vessel weld examination.",
  },
  {
    q: "Can PAUT replace radiographic testing (RT)?",
    a: "Yes — in many applications. ASME Code Case 2235 specifically permits phased array UT (and TOFD) to replace RT for pressure vessel weld inspection where RT would normally be required by ASME Section VIII Division 1. PAUT offers several advantages over RT: no radiation hazard (no exclusion zones, no radiation permits required), immediate on-site results rather than film processing, superior detection of planar defects (cracks, lack of fusion) which RT often misses, accurate depth sizing rather than a 2D shadow image, and permanent digital data records. The limitation is that PAUT requires a qualified written procedure and may have challenges with certain defect orientations. Most refineries and power plants are actively transitioning weld inspection programs from RT to PAUT+TOFD.",
  },
  {
    q: "What is TFM (Total Focusing Method)?",
    a: "Total Focusing Method (TFM) is an advanced PAUT technique that uses full matrix capture (FMC) data — recording signals from every transmit/receive element combination — and then applies a reconstruction algorithm to focus the image at every point in the region of interest simultaneously. Unlike conventional PAUT which focuses only at pre-defined depths using focal laws, TFM achieves maximum possible spatial resolution throughout the entire image. TFM is particularly valuable for inspecting complex geometries (nozzle welds, dissimilar metal welds), characterizing closely spaced defects, and imaging in attenuating materials like austenitic stainless steel. TFM is an emerging technique that is being incorporated into ASME and AWS codes as equipment capabilities improve.",
  },
  {
    q: "What certification do I need for PAUT?",
    a: "PAUT certification requirements vary by certification scheme and application. Under ASNT SNT-TC-1A, PAUT is typically performed by UT Level II technicians with demonstrated PAUT competency (some employers require a specific PAUT endorsement). ASNT Level III UT with PAUT technique is required for procedure approval and personnel certification. Under ISO 9712, UT Level 2 with PAUT technique endorsement is the standard working level. PCN UT Level 2 with PAUT technique is required in the UK and offshore sectors. Critically, ASME Section V Article 4 Mandatory Appendix IV requires that PAUT inspections be performed to a qualified written procedure — meaning procedure qualification (demonstration of detection on mock-up blocks) is required in addition to personnel certification.",
  },
  {
    q: "What industries use PAUT inspection?",
    a: "PAUT is used across virtually all heavy industries: Oil & gas — pressure vessel and piping weld inspection replacing RT, storage tank shell welds, nozzle and fitting welds, pipeline girth weld inspection per API 1104. Power generation — boiler circumferential welds per ASME Section I, turbine rotor bore inspection, HRSG header welds, steam piping. Pipeline — girth weld AUT lines during construction, ERW seam weld inspection. Aerospace — composite layer inspection, bonded structure assessment, titanium airframe weld inspection. Manufacturing — forging inspection, austenitic stainless steel weld inspection, heavy fabrication QC. Offshore — structural weld inspection, subsea pipeline inspection, riser assessment.",
  },
];

const pautTechniques = [
  {
    name: "Linear Scan (E-scan)",
    description: "Electronic scan using a fixed beam angle but activating different groups of elements sequentially along the array length. Produces a B-scan (cross-section) image showing the full component width in one pass.",
    applications: "Flat plate inspection, corrosion mapping, lamination detection, large area coverage",
    advantage: "Very high speed — covers the full aperture of the array in a single electronic sweep without moving the probe",
  },
  {
    name: "Sectorial Scan (S-scan)",
    description: "The primary PAUT technique for weld inspection. The beam is electronically swept through a range of angles (typically 40°–70°) producing a fan-shaped cross-sectional image of the weld in real time.",
    applications: "Weld inspection per ASME V App IV and AWS D1.1 Annex K, nozzle and fitting welds, complex geometry inspection",
    advantage: "Single probe position replaces multiple angle-beam setups; superior defect characterization and imaging",
  },
  {
    name: "Total Focusing Method (TFM)",
    description: "Post-processing reconstruction technique using full matrix capture (FMC) data. Every element transmits and every element receives, with software focusing the image at every point simultaneously for maximum resolution.",
    applications: "Complex geometry, dissimilar metal welds, austenitic stainless, high-resolution defect characterization",
    advantage: "Highest possible spatial resolution across the entire image — emerging as the next generation standard technique",
  },
  {
    name: "Adaptive Scanning",
    description: "Specialized scanning mode that adjusts focal laws in real time based on component geometry — curved surfaces, nozzle profiles, and varying thickness sections — maintaining beam focus throughout the scan.",
    applications: "Nozzle welds, pipe-to-fitting connections, complex profiles, curved base materials",
    advantage: "Maintains inspection sensitivity and resolution on components where fixed focal laws would be sub-optimal",
  },
];

const pautVsConventional = [
  { attribute: "Setup Time", paut: "One setup — all angles in single position", conventional: "Multiple setups — 45°, 60°, 70° probes repositioned manually" },
  { attribute: "Data Recording", paut: "Full digital imaging record (S-scan, B-scan) per ASME App IV", conventional: "A-scan display only; manual sketching of defect positions" },
  { attribute: "Complex Geometries", paut: "Electronic beam steering adapts to curves, nozzles, variable thickness", conventional: "Difficult — requires custom probe fabrication or acceptance of coverage gaps" },
  { attribute: "Defect Sizing", paut: "Accurate depth sizing from S-scan image; TOFD combined for tip diffraction", conventional: "Manual amplitude drop methods (6dB, 20dB); less accurate for planar defects" },
  { attribute: "Inspection Speed", paut: "3–5× faster than conventional for equivalent weld coverage", conventional: "Slower — each manual probe position is a separate scan pass" },
  { attribute: "Equipment Cost", paut: "Higher capital cost — PAUT instruments $15,000–$50,000+", conventional: "Lower — portable flaw detectors from $5,000–$15,000" },
  { attribute: "Standards", paut: "ASME V Art 4 App IV, AWS D1.1 Annex K, API 1104 App A", conventional: "ASME V Art 4, ASTM E164, ASTM E2700, AWS D1.1 Table 6.7" },
  { attribute: "Certification", paut: "UT Level II with PAUT endorsement + procedure qualification required", conventional: "UT Level II certification; faster to achieve initial working competency" },
];

const governingCodes = [
  { code: "ASME Section V, Article 4, Mandatory Appendix IV", scope: "PAUT procedure qualification for pressure vessel and piping weld examination — defines demonstration block requirements, focal law validation, and scanning protocols" },
  { code: "ASME Section VIII, Division 1", scope: "Pressure vessel weld examination acceptance criteria; PAUT is accepted as the examination method when procedure qualified per Appendix IV" },
  { code: "AWS D1.1 Annex K", scope: "PAUT of structural steel welds — defines qualification requirements, procedure essentials, and acceptance criteria for structural applications" },
  { code: "API 1104 Appendix A", scope: "PAUT and AUT of pipeline girth welds as an alternative acceptance standard — defines zonal discrimination and defect acceptance criteria for pipeline construction" },
  { code: "ASME Code Case 2235", scope: "Permits PAUT (and TOFD) as a full substitute for radiographic testing (RT) of pressure vessel welds — eliminates radiation hazard, produces superior defect characterization" },
  { code: "DNV-RP-C210", scope: "Offshore structural PAUT requirements — governs inspection of offshore structures, risers, and subsea pipeline welds in the North Sea and globally" },
  { code: "EN ISO 13588", scope: "PAUT of welds — European standard covering procedure qualification, equipment requirements, and interpretation for weld inspection using PAUT" },
];

const industryApplications = [
  {
    title: "Oil & Gas",
    detail: "Pressure vessel nozzle weld inspection replacing RT per ASME Code Case 2235. Process piping weld examination per API 570. Storage tank shell course and annular ring weld inspection. Pipeline girth weld AUT per API 1104 Appendix A. Fitness-for-service flaw sizing per API 579. PAUT eliminates radiation permits, exclusion zones, and film processing while providing superior defect characterization.",
    link: "/ndt-for-oil-gas",
  },
  {
    title: "Power Generation",
    detail: "Boiler circumferential seam weld inspection per ASME Section I. Turbine rotor bore examination using specialized curved array probes. Heat exchanger tubesheet weld inspection. HRSG header stub-to-header welds. Main steam and hot reheat piping PAUT surveys. PAUT combined with TOFD is now standard for critical weld inspection during planned outages.",
    link: "/ndt-for-power-generation",
  },
  {
    title: "Pipeline",
    detail: "Girth weld inspection during pipeline construction using AUT systems per API 1104 Appendix A and DNV-OS-F101. ERW longitudinal seam weld inspection in pipe mills. In-service pipeline integrity assessment. Corrosion mapping for wall thickness surveys. Pipeline PAUT AUT systems achieve inspection rates of 60–120 joints per day — far exceeding conventional UT or RT.",
    link: "/ndt-for-oil-gas",
  },
  {
    title: "Aerospace",
    detail: "Composite layer inspection for delaminations, disbonds, and voids in carbon fibre structures. Bonded structure assessment per AMS 2630. Titanium airframe weld inspection. Engine component bore inspection using encoded PAUT systems. PAUT of aerospace components requires NADCAP-approved procedures and NAS-410 certified technicians.",
    link: "/ndt-for-aerospace",
  },
  {
    title: "Manufacturing",
    detail: "Forging inspection for internal bursts and segregation using immersion PAUT. Austenitic stainless steel weld inspection — PAUT at lower frequencies overcomes the attenuation and grain noise that defeats conventional UT. Heavy fabrication weld QC for pressure equipment before hydrotest. Corrosion mapping of large plate sections using encoded linear array scanning.",
    link: "/consulting",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-800 bg-white hover:bg-slate-50 transition"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{q}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-[#004aad] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#004aad] flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-5 text-slate-600 leading-relaxed bg-white border-t border-slate-100">
          {a}
        </div>
      )}
    </div>
  );
}

export default function PhasedArrayUT() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://atlantisndt.com/phased-array-ut",
        "headline": "Phased Array Ultrasonic Testing (PAUT): Complete Guide 2026 — S-scan, TFM, ASME V Appendix IV & Certification",
        "description": "Comprehensive guide to phased array ultrasonic testing (PAUT): how it works, S-scan vs B-scan vs C-scan, TFM, ASME V Appendix IV, AWS D1.1 Annex K, PAUT vs conventional UT, Level II PAUT training.",
        "datePublished": "2025-11-01",
        "dateModified": "2026-02-25",
        "author": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
        "publisher": {
          "@type": "Organization",
          "name": "Atlantis NDT",
          "logo": { "@type": "ImageObject", "url": "https://atlantisndt.com/favicon-96x96.jpg" },
        },
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/phased-array-ut" },
        "keywords": "phased array ultrasonic testing, PAUT, phased array UT, PAUT weld inspection, S-scan PAUT, TFM total focusing method, ASME V Article 4 Appendix IV, AWS D1.1 Annex K, PAUT certification, phased array NDT, PAUT vs conventional UT, PAUT training, phased array inspection",
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map((f) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      <SEOHead
        title="Phased Array UT (PAUT) | S-Scan Weld Inspection | ASME V App IV | Atlantis NDT"
        description="Complete guide to phased array ultrasonic testing (PAUT): S-scan, TFM, ASME V Appendix IV, AWS D1.1 Annex K. PAUT vs conventional UT. Level II PAUT training."
        keywords="phased array ultrasonic testing, PAUT, phased array UT, PAUT weld inspection, S-scan PAUT, sectorial scan, total focusing method TFM, ASME V Article 4 Mandatory Appendix IV, AWS D1.1 Annex K, API 1104 Appendix A, PAUT certification, phased array NDT, PAUT vs conventional UT, PAUT training, phased array inspection, PAUT Level II, ASNT PAUT, ISO 9712 PAUT, phased array weld inspection, PAUT B-scan, PAUT C-scan"
        structuredData={structuredData}
        canonical="https://atlantisndt.com/phased-array-ut"
      />
      <Breadcrumbs />

      {/* Hero */}
      <section className="bg-[#004aad] text-white py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-blue-200 text-sm font-medium mb-3 uppercase tracking-wider">
              Advanced UT Method Guide · Updated February 2026
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Phased Array Ultrasonic Testing (PAUT) | Advanced Weld &amp; Component Inspection
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Everything you need to know about PAUT — S-scan beam steering, multi-angle weld inspection, TFM, ASME V Appendix IV compliance, PAUT vs conventional UT, and Level I–III PAUT training from Atlantis NDT.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-white text-[#004aad] font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                Get PAUT Consulting
              </Link>
              <Link
                to="/training"
                className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                PAUT Training &amp; Certification
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto max-w-6xl px-6 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: "Multi-Angle Beam Steering", label: "Electronic sweep 40°–70° per ASME App IV" },
              { stat: "ASME V App IV Compliant", label: "Procedure qualification & documentation" },
              { stat: "Replaces Multiple UT Setups", label: "Single probe position for full weld volume" },
              { stat: "Level I–III PAUT Training", label: "ASNT & ISO 9712 PAUT certification" },
            ].map((item, i) => (
              <div key={i} className="border-r border-slate-100 last:border-r-0 px-4">
                <div className="text-lg font-bold text-[#004aad] mb-1 leading-tight">{item.stat}</div>
                <div className="text-xs text-slate-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Nav */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto max-w-6xl px-6 overflow-x-auto">
          <nav className="flex gap-6 text-sm font-medium text-slate-600 py-3 whitespace-nowrap">
            {[
              "Introduction",
              "How PAUT Works",
              "PAUT Techniques",
              "PAUT vs Conventional UT",
              "Governing Codes",
              "Applications",
              "Training",
              "FAQ",
            ].map((s) => (
              <a
                key={s}
                href={`#${s.toLowerCase().replace(/ /g, "-")}`}
                className="hover:text-[#004aad] transition py-1"
              >
                {s}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-6 py-12 grid md:grid-cols-3 gap-12">
        {/* Main Content */}
        <article className="md:col-span-2 space-y-14">

          {/* Introduction */}
          <section>
            <h2
              id="introduction"
              className="text-3xl font-bold mb-5"
              style={{ color: "#004aad" }}
            >
              What Is Phased Array Ultrasonic Testing (PAUT)?
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              <strong>Phased Array Ultrasonic Testing (PAUT)</strong> is an advanced non-destructive testing method that uses electronically controlled multi-element array transducers to steer, focus, and sweep ultrasonic beams through a component — producing real-time cross-sectional imaging without the need to mechanically reposition the probe. PAUT has become the dominant technique for industrial weld inspection, replacing conventional angle-beam UT in the majority of pressure vessel, pipeline, and structural applications where code-required volumetric examination is needed.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              The fundamental innovation of PAUT is electronic beam control. Where conventional UT uses a single fixed-angle transducer that must be physically moved to different positions to inspect different zones of a weld, a PAUT probe contains an array of 16 to 128 individual piezoelectric elements. By applying precisely calculated time delays — called focal laws — between the firing of each element, the combined wavefront from the array can be steered to any angle within a defined range, focused at any depth, and swept electronically in milliseconds. This transforms what was a slow, manual multi-pass process into a rapid, automated, and comprehensively documented inspection.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              The most widely used PAUT display for weld inspection is the S-scan (sectorial scan) — a fan-shaped cross-sectional image showing the weld in profile, with each angular slice representing the reflected signal at one beam angle. An experienced PAUT technician reading an S-scan can immediately see the full weld cross-section, identify reflectors by their position and character, and measure defect depth and height directly from the image. This contrasts sharply with conventional UT, where the technician interprets a series of one-dimensional A-scan traces and must mentally reconstruct the weld geometry.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              PAUT's key advantage for industrial inspection programs is the permanent digital record it produces. Every S-scan, B-scan, and C-scan image is stored electronically with full position encoding, enabling post-inspection review, regulatory reporting, and future comparison with re-inspection data. Under ASME Section V Article 4 Mandatory Appendix IV, PAUT inspections on pressure equipment must follow a qualified written procedure with demonstrated performance on representative mock-up blocks — making the process fully auditable and defensible for asset integrity programs.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              ASME Code Case 2235 has accelerated the industry's transition from radiographic testing (RT) to PAUT by formally permitting phased array UT as an alternative to film radiography for pressure vessel weld inspection. The business case is compelling: PAUT eliminates radiation hazards (no exclusion zones, no radiation safety permits, no source transport logistics), delivers results immediately on-site rather than after film processing, and provides superior sensitivity to the critical planar defects — cracks and lack of fusion — that RT tends to miss.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#004aad] rounded-r-xl p-6 mt-6">
              <h3 className="font-bold text-[#004aad] mb-3">Key PAUT Advantages Over Conventional UT</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Single-setup full coverage:</strong> One probe position replaces 3–5 separate angle-beam setups, dramatically reducing inspection time and improving consistency.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Real-time imaging:</strong> S-scan provides a live cross-sectional image of the weld — not a one-dimensional A-scan that requires mental reconstruction.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Permanent digital record:</strong> Full encoded scan data stored for post-inspection review, regulatory reporting, and future comparison.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>No radiation hazard:</strong> Eliminates the exclusion zones, permits, and logistics required for RT — enabling inspection in occupied facilities and confined spaces.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Superior planar defect detection:</strong> Simultaneous multi-angle beam coverage achieves higher probability of detection for cracks and lack of fusion than single-angle conventional UT or RT.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* How PAUT Works */}
          <section>
            <h2
              id="how-paut-works"
              className="text-3xl font-bold mb-5"
              style={{ color: "#004aad" }}
            >
              How Phased Array Ultrasonic Testing Works
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              Understanding PAUT requires grasping two core concepts: the phased array transducer itself, and the focal law calculations that control beam behavior.
            </p>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow border border-slate-100">
                <h3 className="text-xl font-bold mb-3" style={{ color: "#004aad" }}>Array Transducer Construction (8–128 Elements)</h3>
                <p className="text-slate-700 leading-relaxed">
                  A PAUT transducer consists of a linear array of individual piezoelectric elements, each approximately 0.5–1.5mm wide, bonded side-by-side in a single housing. Each element is individually connected to its own channel in the PAUT instrument's pulser/receiver system. The total aperture of the array — the combined width of all active elements — determines the near-field depth and the beam's focusing capability. Common configurations are 16, 32, 64, or 128 elements. For weld inspection, a sub-aperture of 8–16 elements is typically active simultaneously, with the instrument electronically stepping the active group along the array to form linear scan images, or firing the full aperture at controlled time delays for angular steering.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow border border-slate-100">
                <h3 className="text-xl font-bold mb-3" style={{ color: "#004aad" }}>Electronic Beam Steering vs Mechanical Indexing</h3>
                <p className="text-slate-700 leading-relaxed">
                  In conventional UT, changing the beam angle requires physically swapping the probe (e.g., changing from a 45° to a 60° angle-beam shoe). In PAUT, beam steering is achieved electronically in microseconds — no physical probe movement is required. The PAUT instrument applies a programmed sequence of time delays to each element's firing pulse. When element 1 fires first, element 2 slightly later, element 3 slightly later still (and so on across the array), the combined wavefront is steered at an angle toward the side that fired last. Reversing the delay sequence steers the beam in the opposite direction. The angle of steering is controlled precisely by the magnitude of the delays between elements — a larger delay step produces a steeper steering angle.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow border border-slate-100">
                <h3 className="text-xl font-bold mb-3" style={{ color: "#004aad" }}>S-scan, B-scan, and C-scan Displays</h3>
                <p className="text-slate-700 leading-relaxed mb-3">
                  PAUT instruments produce three fundamental display formats, each providing a different view of the inspected volume:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex gap-2">
                    <span className="w-6 h-6 bg-[#004aad] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">S</span>
                    <span><strong>S-scan (Sectorial Scan):</strong> Fan-shaped cross-sectional image showing all beam angles simultaneously. The most important display for weld inspection — shows the full weld cross-section in profile with defects visible as bright reflectors at their actual depth and position.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="w-6 h-6 bg-[#004aad] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">B</span>
                    <span><strong>B-scan (Cross-Section):</strong> Side-view image generated as the probe moves along the weld. Shows defect depth and length (in the scanning direction). Produced by stacking A-scans side-by-side as the probe moves, creating a slice through the component from top to bottom.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="w-6 h-6 bg-[#004aad] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">C</span>
                    <span><strong>C-scan (Top View / Plan View):</strong> Plan-view image looking down into the component. Shows the lateral extent and position of reflectors across the scanned area. Used for corrosion mapping and coverage verification.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow border border-slate-100">
                <h3 className="text-xl font-bold mb-3" style={{ color: "#004aad" }}>Focal Law Calculations and Aperture</h3>
                <p className="text-slate-700 leading-relaxed">
                  Focal laws are the pre-calculated time-delay sequences applied to each element to achieve a desired beam angle and focus depth. Before any PAUT inspection, the operator uses focal law calculator software to input the transducer parameters (frequency, pitch, number of elements), wedge geometry, material sound velocity, and desired angular range and focus depth. The software calculates the precise time delays for each element at each angle. These focal laws are uploaded to the instrument and validated against the calibration reference standard. ASME Section V Article 4 Mandatory Appendix IV requires that focal laws be qualified by demonstrating detection of all required reference reflectors (typically side-drilled holes at quarter, half, and three-quarter depth) at the sensitivity levels specified in the procedure.
                </p>
              </div>
            </div>
          </section>

          {/* PAUT Techniques */}
          <section>
            <h2
              id="paut-techniques"
              className="text-3xl font-bold mb-6"
              style={{ color: "#004aad" }}
            >
              PAUT Techniques: From E-scan to TFM
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Phased array systems support several distinct scanning modes, each suited to specific inspection objectives and component geometries. Selecting the correct technique — often a combination of two or more — is critical to achieving code-required coverage and sensitivity.
            </p>
            <div className="space-y-6">
              {pautTechniques.map((technique, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow border border-slate-100">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#004aad] text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2" style={{ color: "#004aad" }}>
                        {technique.name}
                      </h3>
                      <p className="text-slate-700 leading-relaxed mb-3">{technique.description}</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="bg-blue-50 rounded-lg p-3">
                          <p className="text-xs font-semibold text-[#004aad] mb-1">Applications</p>
                          <p className="text-xs text-slate-700">{technique.applications}</p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-3">
                          <p className="text-xs font-semibold text-green-700 mb-1">Key Advantage</p>
                          <p className="text-xs text-slate-700">{technique.advantage}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* PAUT vs Conventional UT */}
          <section>
            <h2
              id="paut-vs-conventional-ut"
              className="text-3xl font-bold mb-5"
              style={{ color: "#004aad" }}
            >
              PAUT vs Conventional UT: Comparison
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Choosing between phased array UT and conventional angle-beam UT depends on inspection volume, code requirements, component complexity, and budget. The table below summarizes the key differences across the factors that matter most in industrial inspection programs.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow mb-6">
              <table className="w-full text-sm">
                <thead className="bg-[#004aad] text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold">Attribute</th>
                    <th className="text-left p-4 font-semibold">Phased Array UT (PAUT)</th>
                    <th className="text-left p-4 font-semibold">Conventional UT</th>
                  </tr>
                </thead>
                <tbody>
                  {pautVsConventional.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-semibold text-[#004aad]">{row.attribute}</td>
                      <td className="p-4 text-slate-700">{row.paut}</td>
                      <td className="p-4 text-slate-600">{row.conventional}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <h3 className="font-bold text-amber-800 mb-2">When to Choose Conventional UT</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Conventional UT remains appropriate for simple thickness gauging (wall loss measurement, corrosion monitoring), small-scope spot inspections where full imaging is not required by code, and cases where the inspector has a high degree of prior knowledge about defect type and location. For high-volume weld inspection, complex geometries, or any inspection requiring a permanent digital record, PAUT is the preferred choice.
              </p>
            </div>
          </section>

          {/* Governing Codes */}
          <section>
            <h2
              id="governing-codes"
              className="text-3xl font-bold mb-5"
              style={{ color: "#004aad" }}
            >
              Governing Codes &amp; Standards for PAUT
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              PAUT inspections must be performed to a qualified written procedure referencing an applicable code. The procedure must be approved by an ASNT Level III (or equivalent) and — for ASME applications — demonstrated on a mock-up block representative of the production weld geometry before use on production components.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {governingCodes.map((s, i) => (
                <div key={i} className="flex gap-3 bg-white rounded-xl p-5 shadow border border-slate-100">
                  <div className="w-1.5 bg-[#004aad] rounded-full flex-shrink-0 min-h-[40px]" />
                  <div>
                    <p className="font-bold text-[#004aad] mb-1 text-sm">{s.code}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{s.scope}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="font-bold text-[#004aad] mb-2">ASME Appendix IV Procedure Qualification — Key Requirements</h3>
              <p className="text-slate-700 text-sm leading-relaxed mb-3">
                Unlike conventional UT which can be qualified primarily through personnel certification, ASME V Appendix IV PAUT requires a separate procedure qualification that is specific to the weld geometry and procedure variables. Key requirements include:
              </p>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /><span>Demonstration block representative of production weld geometry (same material, thickness, joint configuration)</span></li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /><span>Detection of all required reference reflectors (SDHs at 1/4, 1/2, 3/4 depth) at specified sensitivity</span></li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /><span>Focal law validation confirming beam angle and focus depth meet procedure requirements</span></li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /><span>Written procedure specifying all essential variables — if any essential variable changes, re-qualification is required</span></li>
              </ul>
            </div>
          </section>

          {/* Industry Applications */}
          <section>
            <h2
              id="applications"
              className="text-3xl font-bold mb-6"
              style={{ color: "#004aad" }}
            >
              PAUT Applications by Industry
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {industryApplications.map((app, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow border border-slate-100 hover:border-[#004aad] transition">
                  <h3 className="text-lg font-bold mb-2" style={{ color: "#004aad" }}>
                    {app.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">{app.detail}</p>
                  <Link to={app.link} className="text-[#004aad] text-sm font-medium hover:underline">
                    Learn more →
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Training & Certification */}
          <section className="bg-white rounded-2xl p-8 shadow border border-slate-100">
            <h2
              id="training"
              className="text-3xl font-bold mb-5"
              style={{ color: "#004aad" }}
            >
              PAUT Training &amp; Certification
            </h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              Phased array UT certification builds on a foundation of conventional UT certification. The specific requirements vary by certification scheme, but all require demonstrated understanding of PAUT-specific theory (focal laws, array physics, image interpretation) in addition to conventional UT knowledge.
            </p>
            <div className="grid md:grid-cols-2 gap-5 mb-6">
              {[
                { scheme: "ASNT UT Level II + PAUT Endorsement", desc: "Under ASNT SNT-TC-1A, PAUT is typically performed at the UT Level II level with a PAUT-specific technique endorsement. The employer's written practice must specify PAUT training and experience requirements. ASNT Level III UT must approve procedures and certify personnel." },
                { scheme: "ISO 9712 UT Level 2 + PAUT Technique", desc: "ISO 9712 provides UT Level 1, 2, and 3 certifications with technique-specific endorsements. PAUT (phased array) is a recognized technique within the UT method. Widely required for international projects and offshore inspection." },
                { scheme: "PCN UT Level 2 + PAUT", desc: "The UK Personnel Certification in NDT (PCN) scheme administered by BINDT includes PAUT technique qualification at UT Level 2 and Level 3. Required for North Sea offshore projects and accepted by major EPC contractors and operators globally." },
                { scheme: "ASME Appendix IV Written Procedure", desc: "Critically, ASME V Appendix IV requires a qualified written procedure in addition to personnel certification. The procedure is specific to the weld joint and must be demonstrated on a mock-up block before use on production welds. Atlantis NDT develops and qualifies ASME Appendix IV procedures." },
              ].map((s, i) => (
                <div key={i} className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                  <h3 className="font-bold text-[#004aad] mb-2 text-sm">{s.scheme}</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-700 mb-5">
              Atlantis NDT delivers PAUT training at Level I, II, and III across the USA, Middle East, India, Asia-Pacific, and Europe. Our PAUT courses cover array physics, focal law calculation, S-scan interpretation, procedure development per ASME Appendix IV, and hands-on practice with Olympus OmniScan and Eddyfi Mantis PAUT systems. Contact us for upcoming PAUT course schedules.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/training" className="bg-[#004aad] text-white px-5 py-3 rounded-lg font-semibold hover:bg-[#003580] transition">
                View PAUT Training Courses
              </Link>
              <Link to="/asnt-certification" className="border border-[#004aad] text-[#004aad] px-5 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                ASNT Certification Guide
              </Link>
              <Link to="/consulting" className="border border-slate-300 text-slate-700 px-5 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">
                Level III PAUT Consulting
              </Link>
            </div>
          </section>

          {/* Related Topics */}
          <section className="bg-slate-100 rounded-2xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold mb-5" style={{ color: "#004aad" }}>
              Related NDT Methods &amp; Topics
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { href: "/ultrasonic-testing", label: "Ultrasonic Testing (UT)", desc: "Complete guide to all UT techniques — conventional, PAUT, TOFD, AUT, guided wave" },
                { href: "/tofd-testing", label: "TOFD Testing", desc: "Time of flight diffraction — the ideal complement to PAUT for full weld coverage" },
                { href: "/radiographic-testing", label: "Radiographic Testing (RT)", desc: "RT vs PAUT comparison — when to use each method and ASME Code Case 2235" },
                { href: "/ndt-for-oil-gas", label: "NDT for Oil & Gas", desc: "API 510, API 570, pipeline AUT, pressure vessel inspection programs" },
                { href: "/ndt-for-power-generation", label: "NDT for Power Generation", desc: "ASME XI, boiler inspection, turbine and HRSG weld examination" },
                { href: "/asnt-certification", label: "ASNT Certification Guide", desc: "UT Level I, II, III requirements, PAUT endorsement, SNT-TC-1A" },
              ].map((link, i) => (
                <Link
                  key={i}
                  to={link.href}
                  className="bg-white rounded-xl p-4 shadow border border-slate-100 hover:border-[#004aad] transition block"
                >
                  <p className="font-semibold text-[#004aad] mb-1">{link.label}</p>
                  <p className="text-slate-500 text-sm">{link.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2
              id="faq"
              className="text-3xl font-bold mb-6"
              style={{ color: "#004aad" }}
            >
              PAUT — Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <FAQItem key={i} q={f.q} a={f.a} />
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-[#004aad] rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-3">
              Ready for PAUT Inspection or Training?
            </h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Atlantis NDT provides ASME Appendix IV procedure development, Level II PAUT training, and ASNT Level III UT consulting for phased array inspection programs across the USA, Middle East, India, Asia-Pacific, and Europe. Contact our team to discuss your PAUT requirements.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-white text-[#004aad] font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition">
                Get a PAUT Quote
              </Link>
              <Link to="/training" className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition">
                PAUT Training — Enrol Now
              </Link>
              <Link to="/consulting" className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition">
                Level III PAUT Consulting
              </Link>
            </div>
          </section>

        </article>

        {/* Sidebar */}
        <aside className="hidden md:block md:col-span-1 space-y-6 mt-2">
          <div className="bg-white p-6 rounded-xl shadow border border-slate-100 sticky top-16">
            <h3 className="text-lg font-bold mb-4" style={{ color: "#004aad" }}>On This Page</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {[
                ["#introduction", "What Is PAUT?"],
                ["#how-paut-works", "How PAUT Works"],
                ["#paut-techniques", "PAUT Techniques"],
                ["#paut-vs-conventional-ut", "PAUT vs Conventional UT"],
                ["#governing-codes", "Codes & Standards"],
                ["#applications", "Applications by Industry"],
                ["#training", "Training & Certification"],
                ["#faq", "FAQ (8 questions)"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="hover:text-[#004aad] transition flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#004aad] rounded-full flex-shrink-0" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border border-slate-100">
            <h3 className="text-lg font-bold mb-3" style={{ color: "#004aad" }}>PAUT Key Advantages</h3>
            <ul className="space-y-3 text-sm text-slate-700">
              {[
                { icon: Layers, text: "Electronic beam steering — no manual probe repositioning for different angles" },
                { icon: Shield, text: "No radiation — PAUT replaces RT with no exclusion zones or radiation permits" },
                { icon: Gauge, text: "Full weld volume in one pass — S-scan covers all required angles simultaneously" },
                { icon: Target, text: "Permanent digital records — ASME Appendix IV compliant imaging data" },
                { icon: Clock, text: "3–5x faster than conventional UT for equivalent code-required weld coverage" },
                { icon: Zap, text: "Superior sizing — depth and height measured directly from S-scan image" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <li key={i} className="flex gap-2">
                    <Icon className="w-4 h-4 text-[#004aad] flex-shrink-0 mt-0.5" />
                    <span className="text-xs leading-relaxed">{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="bg-amber-50 p-6 rounded-xl shadow border border-amber-200">
            <h3 className="text-lg font-bold mb-3 text-amber-800">Related NDT Methods</h3>
            <ul className="space-y-2 text-sm">
              {[
                ["/ultrasonic-testing", "Ultrasonic Testing (UT)"],
                ["/tofd-testing", "TOFD Testing"],
                ["/eddy-current-testing", "Eddy Current Testing (ECT)"],
                ["/radiographic-testing", "Radiographic Testing (RT)"],
                ["/ndt-methods", "All NDT Methods"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link to={href} className="text-amber-800 hover:underline font-medium">
                    → {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#004aad] p-6 rounded-xl shadow text-white">
            <h3 className="text-lg font-bold mb-3">Need PAUT Consultation?</h3>
            <p className="text-blue-100 text-sm mb-4">
              Our ASNT Level III engineers develop ASME Appendix IV PAUT procedures, qualify techniques on representative mock-ups, and manage weld inspection programs.
            </p>
            <Link
              to="/contact"
              className="block bg-white text-[#004aad] text-center font-bold px-4 py-3 rounded-lg hover:bg-blue-50 transition text-sm"
            >
              Contact Our PAUT Experts
            </Link>
          </div>
        </aside>
      </div>

      <ContactDetails />
    </div>
  );
}
