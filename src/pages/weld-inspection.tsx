import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  Wrench,
  Shield,
  Zap,
  Target,
  Activity,
  BookOpen,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "What NDT methods are used for weld inspection?",
    a: "Weld inspection uses six primary NDT methods, each suited to different defect types and weld configurations. Radiographic Testing (RT) provides a film or digital image showing volumetric defects such as porosity, inclusions, and lack of fusion — it is the traditional volumetric method. Ultrasonic Testing (UT) and Phased Array UT (PAUT) detect and size internal defects with high sensitivity — PAUT is increasingly preferred over RT for most weld inspection applications. Magnetic Particle Testing (MT) detects surface and near-surface cracks in ferromagnetic welds. Liquid Penetrant Testing (PT) detects surface-breaking defects in any material including austenitic stainless steel. Visual Testing (VT) is the foundation — all welds must pass VT before other methods are applied. The method selection depends on the governing code, weld geometry, material, and the defect types of concern.",
  },
  {
    q: "What is the difference between AWS D1.1 and ASME Section IX for weld inspection?",
    a: "AWS D1.1 is a structural welding code for carbon and low-alloy steel, primarily governing weld inspection in structural steel construction — buildings, bridges, structural frames. ASME Section IX is the ASME Boiler and Pressure Vessel Code section covering welding and brazing qualifications — it governs the qualification of welding procedures (WPS) and welders (WPQ) for pressure vessels, piping, and boilers built to other ASME codes (Section I, Section VIII, B31.1, B31.3). ASME Section IX does not itself contain inspection acceptance criteria — those are found in the applicable construction code (e.g., ASME Section VIII, B31.3). API 1104 governs pipeline girth weld inspection in the oil & gas industry. The key difference is scope: AWS D1.1 applies to structural steel; ASME Section IX governs pressure-retaining weld qualifications; API 1104 governs pipeline welds.",
  },
  {
    q: "What is a Welding Procedure Specification (WPS) and why is it important for NDT?",
    a: "A Welding Procedure Specification (WPS) is a written document that specifies the welding variables (base metal, filler metal, preheat, heat input, post-weld heat treatment, etc.) for producing a weld that meets code requirements. The WPS must be qualified by a Procedure Qualification Record (PQR), which documents the actual welding parameters used for a test weld and the NDT and mechanical test results. For NDT, the WPS is critical because: it specifies the weld joint configuration which determines the NDT technique; acceptance criteria for NDT (RT, UT, MT, PT) are linked to the construction code under which the WPS is qualified; and any deviation from the WPS (essential variable changes) requires re-qualification with fresh NDT on the new test welds. NDT technicians reviewing weld inspection records should always confirm the applicable WPS and governing code before interpreting results.",
  },
  {
    q: "Why is Phased Array UT (PAUT) replacing radiographic testing for weld inspection?",
    a: "Phased Array UT (PAUT) is replacing film RT and increasingly competing with digital radiography for weld inspection for several practical and technical reasons. First, PAUT requires no radiation — no exclusion zone, no radiation licensing, no dose monitoring, and no restrictions in occupied areas. Second, PAUT provides better defect characterisation — it can size planar defects (cracks, lack of fusion) more accurately than RT which is less sensitive to planar defects parallel to the beam. Third, PAUT offers faster inspection — a single pass with an appropriate probe assembly covers the full weld volume. Fourth, PAUT results are immediately available as digital files — no film processing or darkroom. Fifth, PAUT is accepted by the major codes: ASME V Appendix IV, AWS D1.1 Annex K (UT alternative), API 1104 for pipeline welds. Limitations of PAUT include: it requires a qualified Level II PAUT technician; surface condition must be suitable; it is less effective than RT for detecting laminar inclusions and certain volumetric defects.",
  },
  {
    q: "What weld defects can RT detect that UT cannot?",
    a: "Radiographic Testing (RT) is generally more sensitive to certain volumetric defects — particularly rounded porosity (gas pores), cluster porosity, slag inclusions, and elongated slag lines. These defects scatter X-rays and produce clear density changes on film or a digital detector panel. Conventional UT (single-element pulse-echo) can struggle to reliably detect very small spherical porosity, especially in fine-grained materials, because the small defect area reflects very little of the ultrasonic beam. That said, PAUT with appropriate beam angles and focusing can detect porosity more reliably than conventional UT. Conversely, UT (and especially PAUT) outperforms RT in detecting planar defects — cracks, lack of fusion, lack of penetration — because these oriented planar defects are often nearly parallel to the RT beam and show minimal density contrast on film. In practice, TOFD combined with PAUT provides detection capability that meets or exceeds RT for most weld defect types while being faster and radiation-free.",
  },
  {
    q: "What is the minimum weld inspection requirement under API 1104?",
    a: "API 1104 (Welding of Pipelines and Related Facilities) requires 100% visual inspection (VT) of all production welds as the baseline. For radiographic testing, the standard requires periodic RT of a representative percentage of production welds — the exact percentage depends on the pipeline operator's quality program but a minimum of 10% of butt welds is typical for onshore pipelines, with 100% RT required for offshore pipelines per many operator specifications. API 1104 also permits UT (including PAUT) as an alternative to RT for production weld inspection when a written procedure and demonstration of capability have been established. Acceptance criteria under API 1104 cover defect types including cracks, lack of fusion, lack of penetration, porosity, and inclusions, with specific limits on size, location, and extent. All repaired welds must be re-inspected per the same requirements as original welds.",
  },
  {
    q: "How often should welds be inspected after fabrication?",
    a: "Post-fabrication weld inspection frequency depends on the service environment, governing code, and risk-based inspection findings. For pressure equipment in oil & gas service, API 510 (pressure vessels) and API 570 (piping) govern inspection intervals — typically 5–10 years for external inspection and 10 years for internal/weld inspection, adjusted based on corrosion rates and damage mechanisms. For structures governed by AWS D1.1, periodic weld inspection is governed by the structure's maintenance program and applicable building codes rather than a prescriptive interval. API RP 580/581 Risk-Based Inspection methodology allows operators to extend or reduce inspection intervals based on calculated risk. Post-repair weld inspection is always required immediately after any weld repair. For high-consequence applications (nuclear, offshore platforms), more frequent weld inspection may be required by specific codes or regulatory bodies.",
  },
  {
    q: "What qualifications does a weld inspection technician need?",
    a: "Weld inspection qualification requirements depend on the method and governing code. For visual weld inspection: AWS CWI (Certified Welding Inspector) is the most widely recognised qualification for structural welds per AWS D1.1; CSWIP 3.1 (UK/international) is another respected welding inspection credential. For UT weld inspection: ASNT SNT-TC-1A or ISO 9712 Level II UT is required as a minimum; for PAUT weld inspection, specific PAUT qualification or endorsement is required. For RT weld inspection: ASNT Level II RT is required; radiation workers require additional radiation safety training and dose monitoring. For MT/PT: ASNT Level II MT and PT respectively. For pressure vessel and piping weld inspection, API Authorized Inspector (AI) status and API 510/570 certification are additional qualifications for the Authorized Inspector (AI) role. Most operating companies require Level II ASNT or equivalent certification under a documented employer written practice per SNT-TC-1A.",
  },
  {
    q: "What does ASME Section V cover for weld inspection?",
    a: "ASME Section V (Nondestructive Examination) is the primary ASME code governing NDT methods used for weld inspection in ASME-coded equipment. Key articles relevant to weld inspection include: Article 1 (General Requirements), Article 2 (Radiographic Examination — RT), Article 4 (Ultrasonic Examination — UT, with Appendix III for TOFD and Appendix IV for PAUT), Article 6 (Liquid Penetrant Examination — PT), Article 7 (Magnetic Particle Examination — MT), and Article 9 (Visual Examination — VT). ASME Section V specifies equipment requirements, technique requirements, calibration, and procedure content requirements. Importantly, ASME Section V is a reference code — acceptance criteria for weld inspection are found in the applicable construction or inspection code (ASME Section I, III, VIII, B31.1, B31.3, etc.), not in Section V itself. Written NDT procedures used for ASME weld inspection must reference Section V and be qualified per the applicable code requirements.",
  },
];

const weldMethods = [
  {
    method: "Phased Array UT (PAUT)",
    icon: Activity,
    role: "Primary volumetric inspection method for most weld types. S-scan beam steering provides full weld volume coverage in a single pass. Replaces RT in most onshore applications. Excellent sensitivity to planar defects (cracks, lack of fusion). ASME V App IV, AWS D1.1 Annex K.",
    badge: "Preferred Method",
    badgeColor: "bg-blue-100 text-blue-800",
  },
  {
    method: "Radiographic Testing (RT)",
    icon: Zap,
    role: "Traditional volumetric weld inspection. Film RT and digital radiography (CR/DR). Excellent for rounded volumetric defects (porosity, inclusions). Produces permanent film record. ASME V Art 2, API 1104, AWS D1.1. Radiation hazard requires exclusion zone.",
    badge: "Volumetric",
    badgeColor: "bg-purple-100 text-purple-800",
  },
  {
    method: "Magnetic Particle (MT)",
    icon: Target,
    role: "Surface and near-surface crack detection in ferromagnetic weld metal and HAZ. Wet fluorescent MT (WFMT) is highly sensitive. Used for root pass inspection, finished weld surfaces, and repair welds. ASME V Art 7, EN ISO 17638.",
    badge: "Surface/Sub-surface",
    badgeColor: "bg-amber-100 text-amber-800",
  },
  {
    method: "Liquid Penetrant (PT)",
    icon: Shield,
    role: "Surface-breaking defect detection. Applicable to austenitic stainless steel, aluminium, titanium welds where MT is not usable. Used for root face and cap visual confirmation, repair welds. ASME V Art 6, ASTM E1417.",
    badge: "Surface",
    badgeColor: "bg-green-100 text-green-800",
  },
  {
    method: "Visual Testing (VT)",
    icon: CheckCircle,
    role: "Mandatory first-stage inspection for all welds. Checks profile, surface condition, undercut, overlap, cracks, crater defects, and weld geometry. Must be completed before any other NDT. AWS D1.1 Table 9.1 dimensional acceptance criteria.",
    badge: "Mandatory First Step",
    badgeColor: "bg-red-100 text-red-800",
  },
  {
    method: "TOFD Testing",
    icon: Wrench,
    role: "Time of Flight Diffraction — paired with PAUT for thick-section weld inspection. Superior defect sizing accuracy for through-wall height measurement. ASME V Appendix III, EN ISO 10863. Used for fitness-for-service assessments.",
    badge: "Sizing Tool",
    badgeColor: "bg-indigo-100 text-indigo-800",
  },
];

const defectTable = [
  {
    defect: "Porosity",
    cause: "Gas entrapment during solidification; moisture in electrode coating, base metal, or shielding gas",
    method: "RT (excellent), PAUT (good for larger clusters), PT (surface pores only)",
  },
  {
    defect: "Undercut",
    cause: "Excessive arc energy melting groove along weld toe; incorrect torch angle or travel speed",
    method: "VT (primary detection), MT/PT for crack initiation at undercut",
  },
  {
    defect: "Lack of Fusion",
    cause: "Insufficient heat input; incorrect welding parameters; contaminated joint surfaces",
    method: "PAUT (best — planar defect), TOFD (sizing), RT (less sensitive to planar LOF parallel to beam)",
  },
  {
    defect: "Cracks",
    cause: "Hydrogen-induced cracking (HAC/HICC), solidification cracking, stress corrosion, fatigue",
    method: "PAUT/UT (excellent), MT — surface/near-surface, PT — surface only, TOFD — through-wall sizing",
  },
  {
    defect: "Slag Inclusions",
    cause: "Incomplete inter-pass cleaning; irregular bead profile trapping slag",
    method: "RT (excellent for elongated slag lines), PAUT (good), UT conventional (moderate)",
  },
  {
    defect: "Overlap",
    cause: "Weld metal flowing over base metal without fusion; low current, incorrect torch angle",
    method: "VT (primary), MT/PT for associated crack-like defects at overlap toe",
  },
];

const standards = [
  {
    code: "AWS D1.1",
    scope: "Structural Welding Code — Steel. Governs weld inspection for structural steel in buildings, bridges, and structures. RT, UT (Annex K for PAUT), MT, PT acceptance criteria.",
  },
  {
    code: "ASME Section IX",
    scope: "Welding, Brazing, and Fusing Qualifications. Governs WPS/PQR qualification for pressure-retaining welds (vessels, boilers, piping). Used with Section VIII, B31.1, B31.3.",
  },
  {
    code: "API 1104",
    scope: "Welding of Pipelines and Related Facilities. Governs girth weld and fillet weld inspection in oil & gas pipelines. RT, UT, MT, PT procedures and acceptance criteria.",
  },
  {
    code: "EN ISO 17638",
    scope: "Magnetic particle testing of welds — European/international standard for MT of weld joints. Specifies technique, equipment, and acceptance levels.",
  },
  {
    code: "EN ISO 17636",
    scope: "Non-destructive testing of welds — Radiographic testing (Part 1: X-rays; Part 2: digital detectors). Governs RT of welds in Europe and international projects.",
  },
  {
    code: "ASME Section V",
    scope: "Nondestructive Examination. Reference code for all NDT methods (RT Art 2, UT Art 4, PT Art 6, MT Art 7, VT Art 9). Specifies technique and procedure requirements.",
  },
];

const industries = [
  {
    name: "Oil & Gas",
    detail: "Pressure vessel welds (API 510/ASME VIII), piping welds (API 570/B31.3), pipeline girth welds (API 1104), storage tank welds (API 653/650). High-consequence service requires 100% volumetric inspection on critical welds.",
  },
  {
    name: "Power Generation",
    detail: "Boiler tube and drum welds (ASME Section I), turbine component welds, HRSG welds (B31.1). PWHT (post-weld heat treatment) requirements and periodic weld inspection during outages.",
  },
  {
    name: "Aerospace",
    detail: "Structural airframe welds, engine component welds. NAS-410 certification requirements, AMS specifications. Fluorescent PT and UT critical for aerospace weld acceptance.",
  },
  {
    name: "Shipbuilding",
    detail: "Hull structural welds, pressure vessel welds, piping welds. Lloyd's Register, Bureau Veritas, DNV GL classification society requirements. RT common for hull welds.",
  },
  {
    name: "Construction",
    detail: "Structural steel welds per AWS D1.1. High-rise, bridge, and infrastructure welds. CWI (Certified Welding Inspector) required on most projects. UT and MT primary methods.",
  },
];

const cityLinks = [
  { city: "Houston", href: "/weld-inspection-houston" },
  { city: "Dubai", href: "/weld-inspection-dubai" },
  { city: "Calgary", href: "/weld-inspection-calgary" },
  { city: "Singapore", href: "/weld-inspection-singapore" },
  { city: "Mumbai", href: "/weld-inspection-mumbai" },
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

export default function WeldInspection() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Weld Inspection Services | NDT Methods for Weld Quality Control",
        "description": "Complete guide to weld inspection: NDT methods (RT, UT, PAUT, MT, PT, VT), weld defect types, governing codes AWS D1.1, ASME Section IX, API 1104. ASNT Level III consulting.",
        "author": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
        "publisher": {
          "@type": "Organization",
          "name": "Atlantis NDT",
          "logo": { "@type": "ImageObject", "url": "https://atlantisndt.com/favicon-96x96.jpg" },
        },
        "datePublished": "2026-02-25",
        "dateModified": "2026-02-25",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/weld-inspection" },
        "keywords": "weld inspection, weld NDT, weld testing, RT weld inspection, UT weld inspection, PAUT weld inspection, AWS D1.1, ASME Section IX, API 1104, weld defects, weld quality control, weld examination",
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
        title="Weld Inspection Services | AWS D1.1, ASME IX, API 1104 | Atlantis NDT"
        description="Expert weld inspection guide: NDT methods for weld quality control, defect types, governing codes (AWS D1.1, ASME Section IX, API 1104, EN ISO 17638). PAUT replacing RT for most weld applications. ASNT Level III consulting."
        keywords="weld inspection, weld NDT, AWS D1.1 weld inspection, ASME Section IX weld testing, API 1104 pipeline weld inspection, PAUT weld inspection, RT weld inspection, UT weld inspection, MT weld inspection, weld defects NDT, weld quality control, phased array weld inspection, weld examination services"
        structuredData={structuredData}
        canonical="https://atlantisndt.com/weld-inspection"
      />
      <Breadcrumbs />

      {/* Hero */}
      <section className="bg-[#004aad] text-white py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-blue-200 text-sm font-medium mb-3 uppercase tracking-wider">
              NDT Hub Guide · Updated February 2026
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Weld Inspection Services | NDT Methods for Weld Quality Control
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Weld inspection is the single largest application of NDT — accounting for approximately 15% of all industrial NDT volume globally. From AWS D1.1 structural steel to ASME Section IX pressure equipment and API 1104 pipeline welds, the right inspection method is critical to weld quality and fitness for service.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-white text-[#004aad] font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                Get Weld Inspection Consulting
              </Link>
              <Link
                to="/phased-array-ut"
                className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                PAUT Technical Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-white border-b border-slate-200 py-6">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "Share of All NDT", value: "~15%" },
              { label: "Primary Codes", value: "AWS, ASME, API" },
              { label: "Key Technique", value: "PAUT / RT / MT" },
              { label: "Defect Types", value: "6 Major Categories" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-[#004aad]">{s.value}</div>
                <div className="text-sm text-slate-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Nav */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto max-w-6xl px-6 overflow-x-auto">
          <nav className="flex gap-6 text-sm font-medium text-slate-600 py-3 whitespace-nowrap">
            {["NDT Methods", "Defect Types", "Codes", "PAUT vs RT", "Inspection Procedure", "Industries", "FAQ"].map(
              (s) => (
                <a
                  key={s}
                  href={`#${s.toLowerCase().replace(/ /g, "-")}`}
                  className="hover:text-[#004aad] transition py-1"
                >
                  {s}
                </a>
              )
            )}
          </nav>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-6 py-12 grid md:grid-cols-3 gap-12">
        {/* Main Content */}
        <article className="md:col-span-2 space-y-14">

          {/* What is Weld Inspection */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              What Is Weld Inspection?
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              <strong>Weld inspection</strong> is the process of examining welds for discontinuities, dimensional compliance, and fitness for service using non-destructive testing (NDT) methods. Weld inspection is mandatory under virtually all pressure equipment, pipeline, and structural codes because welds are the most likely location for defects that compromise the mechanical integrity of fabricated structures.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              The weld inspection requirement is driven by three factors: the inherent variability of the welding process (which can produce defects even with qualified welders and qualified procedures); the service conditions (pressure, temperature, cyclic loading, corrosive environment); and the consequence of failure (safety, environmental, commercial). Weld inspection verifies that the manufactured product meets the acceptance criteria of the governing code — AWS D1.1, ASME Section VIII/B31.3, API 1104, or another applicable standard.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              Weld inspection encompasses three phases. <strong>Pre-weld inspection</strong> verifies fit-up, joint preparation, base metal condition, and welder/procedure qualifications. <strong>In-process inspection</strong> monitors root pass, inter-pass temperature, and cleaning. <strong>Post-weld inspection</strong> is the NDT phase — visual examination followed by volumetric (RT or UT/PAUT) and/or surface (MT/PT) NDT as required by the applicable code.
            </p>
            <div className="bg-blue-50 border-l-4 border-[#004aad] rounded-r-xl p-6">
              <h3 className="font-bold text-[#004aad] mb-3">Key Fact: Weld Inspection Scope</h3>
              <ul className="space-y-2 text-slate-700">
                {[
                  "Weld inspection is the largest single application of NDT — approximately 15% of all industrial NDT by volume",
                  "All major construction codes require a minimum of visual testing (VT) for 100% of welds",
                  "Volumetric NDT (RT or UT) is required for all pressure-retaining welds in oil & gas and power generation",
                  "PAUT is now accepted by AWS D1.1, ASME V, and API 1104 as an alternative to conventional RT",
                  "Weld acceptance criteria — not the NDT method itself — determine whether a defect is rejectable",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* NDT Methods */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 id="ndt-methods" className="text-3xl font-bold mb-6" style={{ color: "#004aad" }}>
              NDT Methods for Weld Inspection
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Each NDT method is sensitive to different defect types and configurations. The governing code specifies which methods are required — but understanding the capability of each method is essential to selecting the right inspection strategy.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {weldMethods.map((m, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 shadow border border-slate-100 hover:border-[#004aad] transition"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <m.icon className="w-6 h-6 text-[#004aad]" />
                    <h3 className="text-lg font-bold" style={{ color: "#004aad" }}>
                      {m.method}
                    </h3>
                  </div>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${m.badgeColor} mb-3 inline-block`}>
                    {m.badge}
                  </span>
                  <p className="text-slate-600 text-sm leading-relaxed mt-2">{m.role}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Defect Types Table */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h2 id="defect-types" className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              Weld Defect Types and Best NDT Method
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Understanding the cause and morphology of each weld defect type is essential to selecting the appropriate NDT method. Planar defects (cracks, lack of fusion) are best detected by UT/PAUT; volumetric defects (porosity, inclusions) are best detected by RT; surface defects by MT/PT.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
              <table className="w-full text-sm">
                <thead className="bg-[#004aad] text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold">Defect</th>
                    <th className="text-left p-4 font-semibold">Primary Cause</th>
                    <th className="text-left p-4 font-semibold">Best NDT Method</th>
                  </tr>
                </thead>
                <tbody>
                  {defectTable.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-semibold text-slate-800">{row.defect}</td>
                      <td className="p-4 text-slate-600 text-xs leading-relaxed">{row.cause}</td>
                      <td className="p-4 text-slate-700 text-xs leading-relaxed">{row.method}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-500 text-xs mt-3">
              Note: Best NDT method depends on defect orientation, weld geometry, and governing code requirements. Multiple methods may be specified.
            </p>
          </motion.section>

          {/* Governing Codes */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 id="codes" className="text-3xl font-bold mb-6" style={{ color: "#004aad" }}>
              Governing Codes for Weld Inspection
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              The governing code for a weld inspection is determined by the type of equipment, material, and jurisdiction. Each code specifies the required NDT methods, technique requirements, acceptance criteria, and documentation requirements. Using the wrong code — or applying acceptance criteria from one code to welds qualified under another — is a common and potentially dangerous error.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {standards.map((s, i) => (
                <div key={i} className="flex gap-3 bg-white rounded-xl p-5 shadow border border-slate-100">
                  <div className="w-2 min-h-full bg-[#004aad] rounded-full flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#004aad] mb-1">{s.code}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{s.scope}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-amber-800 text-sm font-semibold mb-1">Code Application — Common Pitfall</p>
                  <p className="text-amber-800 text-sm">
                    ASME Section IX governs <em>welder and procedure qualification</em>, not weld inspection acceptance criteria. Acceptance criteria are found in the applicable construction code (ASME VIII Div 1, B31.3, etc.). Always confirm which construction or inspection code specifies the acceptance criteria before performing or evaluating weld NDT.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* PAUT vs RT */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <h2 id="paut-vs-rt" className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              PAUT for Weld Inspection — Why Phased Array Is Replacing RT
            </h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              Phased Array Ultrasonic Testing (PAUT) has become the dominant volumetric weld inspection technique in the oil & gas, construction, and pressure equipment sectors. This is driven by technical advantages, safety benefits, and economics:
            </p>
            <div className="space-y-3 mb-6">
              {[
                { title: "No radiation hazard", detail: "PAUT requires no exclusion zone, no radiation licensing, no dose monitoring badges, no NORM compliance. Inspection can proceed in occupied areas, saving significant schedule time — particularly during plant turnarounds where ALARA requirements for RT can halt production." },
                { title: "Better sensitivity to planar defects", detail: "Lack of fusion and cracking — the most critical weld defects from a structural integrity perspective — are planar defects. PAUT beam steering at multiple angles across the weld volume provides significantly better detection of these planar defects compared to RT, which is insensitive to defects parallel to the X-ray beam." },
                { title: "Real-time digital results", detail: "PAUT produces immediate digital data files (S-scans, B-scans, C-scans) that can be reviewed on-site, transmitted electronically, and archived digitally. No film processing, no darkroom, no chemical disposal." },
                { title: "Faster inspection", detail: "A single PAUT pass with an appropriate probe assembly provides full weld volume coverage including the heat affected zone. Combined with encoded mechanical scanning, PAUT typically achieves 2–5 times the linear coverage rate of conventional UT and eliminates RT setup and shot-per-shot workflow." },
                { title: "Code acceptance", detail: "PAUT is accepted by ASME V Appendix IV (pressure equipment), AWS D1.1 Annex K (structural welds), API 1104 (pipeline welds), and most major operating company specifications. Written procedure qualification and technique file are required." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 bg-white rounded-xl p-5 shadow border border-slate-100">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-800 mb-1">{item.title}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
              <table className="w-full text-sm">
                <thead className="bg-[#004aad] text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold">Characteristic</th>
                    <th className="text-left p-4 font-semibold">PAUT</th>
                    <th className="text-left p-4 font-semibold">Film RT</th>
                    <th className="text-left p-4 font-semibold">Digital RT (DR/CR)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { char: "Radiation hazard", paut: "None", rt: "Yes — exclusion zone", dr: "Yes — exclusion zone" },
                    { char: "Planar defect sensitivity", paut: "Excellent", rt: "Poor (orientation-dependent)", dr: "Poor (orientation-dependent)" },
                    { char: "Volumetric (porosity, inclusions)", paut: "Good", rt: "Excellent", dr: "Excellent" },
                    { char: "Defect sizing accuracy", paut: "Excellent (with TOFD)", rt: "Moderate", dr: "Moderate" },
                    { char: "Through-wall height measurement", paut: "Yes (TOFD/PAUT)", rt: "No (image only)", dr: "No (image only)" },
                    { char: "Results availability", paut: "Immediate", rt: "After film processing", dr: "Near-immediate" },
                    { char: "Code acceptance", paut: "ASME V App IV, AWS D1.1 Annex K, API 1104", rt: "All codes", dr: "Most codes (ASME V Art 2)" },
                    { char: "Typical cost (relative)", paut: "Medium", rt: "Medium (film) + disposal", dr: "High (equipment)" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-semibold text-slate-700">{row.char}</td>
                      <td className="p-4 text-slate-700">{row.paut}</td>
                      <td className="p-4 text-slate-600">{row.rt}</td>
                      <td className="p-4 text-slate-600">{row.dr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-5 flex flex-wrap gap-4">
              <Link
                to="/phased-array-ut"
                className="bg-[#004aad] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
              >
                Full PAUT Guide →
              </Link>
              <Link
                to="/tofd-testing"
                className="border border-[#004aad] text-[#004aad] px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-50 transition"
              >
                TOFD Testing Guide →
              </Link>
            </div>
          </motion.section>

          {/* Inspection Procedure Section */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 id="inspection-procedure" className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              Weld Inspection Procedure — WPS, WQR, and Technique Qualification
            </h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              A compliant weld inspection program requires three interrelated documents: the Welding Procedure Specification (WPS), the Procedure Qualification Record (PQR/WQR), and the NDT procedure. Together these govern how the weld is made and how it is inspected.
            </p>
            <div className="space-y-4 mb-6">
              {[
                {
                  step: 1,
                  title: "Welding Procedure Specification (WPS)",
                  detail: "The WPS specifies all essential and supplementary essential variables for producing the weld: base material, filler metal, preheat/interpass temperature, heat input, PWHT, and weld geometry. The WPS must be qualified by a PQR demonstrating that welds made to the WPS meet the mechanical and NDT requirements of the applicable code (ASME IX, AWS D1.1, API 1104).",
                },
                {
                  step: 2,
                  title: "NDT Procedure Development",
                  detail: "A written NDT procedure must be developed for each NDT method (RT, PAUT, MT, PT) covering: applicable standard reference, equipment requirements, technique parameters, calibration, area of coverage, scanning plan, data interpretation, accept/reject criteria, and reporting requirements. For PAUT, a technique file (beam simulation, probe and scanner details) is typically required.",
                },
                {
                  step: 3,
                  title: "Technique Qualification / Demonstration",
                  detail: "For UT and PAUT, ASME Code Cases and many operating company specifications require a Technique Qualification (TQ) — a documented demonstration that the procedure can detect the specified defects on representative mockups. AWS D1.1 Annex K requires an Equipment Verification Test for UT. PAUT procedures for ASME work must be qualified per ASME V Appendix IV.",
                },
                {
                  step: 4,
                  title: "Accept / Reject Criteria Application",
                  detail: "Accept/reject criteria are defined by the governing code, not the NDT method standard. ASME VIII Div 1 (UW-51/UW-52), AWS D1.1 Table 9.1 (VT) / Clause 9 (RT, UT), API 1104 Section 9 (RT), and B31.3 (Para 341) each specify specific defect size limits. The NDT technician reports all indications; the Authorized Inspector (AI) or CWI applies the code acceptance criteria to determine disposition.",
                },
                {
                  step: 5,
                  title: "Reporting and Documentation",
                  detail: "All weld inspection results must be documented in written reports: RT radiograph and film/digital image review, UT/PAUT data file and scan records, MT/PT examination report, and VT inspection sheet. Reports must identify the weld, technique, technician certification, calibration records, and all rejectable indications with disposition. Documentation is typically retained for the life of the equipment.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 bg-white rounded-xl p-5 shadow border border-slate-100">
                  <div className="w-8 h-8 bg-[#004aad] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 mb-1">{item.title}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Industries */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#004aad" }}>
              Industries Served
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {industries.map((ind, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow border border-slate-100">
                  <h3 className="text-lg font-bold text-[#004aad] mb-2">{ind.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{ind.detail}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* City Links */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.38 }}
          >
            <h2 className="text-2xl font-bold mb-5" style={{ color: "#004aad" }}>
              Weld Inspection Consulting by Location
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {cityLinks.map(({ city, href }) => (
                <Link
                  key={city}
                  to={href}
                  className="flex items-center gap-2 bg-white rounded-lg p-4 shadow border border-slate-100 hover:border-[#004aad] text-[#004aad] text-sm font-medium transition"
                >
                  <span className="w-1.5 h-1.5 bg-[#004aad] rounded-full flex-shrink-0" />
                  Weld Inspection — {city}
                </Link>
              ))}
            </div>
          </motion.section>

          {/* Related Methods */}
          <section>
            <h2 className="text-2xl font-bold mb-5" style={{ color: "#004aad" }}>
              Related NDT Methods & Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { href: "/phased-array-ut", label: "Phased Array UT (PAUT) — Complete Guide" },
                { href: "/tofd-testing", label: "TOFD Testing — Time of Flight Diffraction" },
                { href: "/radiographic-testing", label: "Radiographic Testing (RT) — X-Ray & Gamma" },
                { href: "/magnetic-particle-testing", label: "Magnetic Particle Testing (MT/MPI)" },
                { href: "/ultrasonic-testing", label: "Ultrasonic Testing (UT) — Complete Guide" },
                { href: "/ndt-for-oil-gas", label: "NDT for Oil & Gas — Pipeline & Pressure Equipment" },
                { href: "/asnt-certification", label: "ASNT Certification — Level I, II, III" },
                { href: "/consulting/ndt-consulting-houston", label: "Weld Inspection Consulting — Houston" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  to={href}
                  className="flex items-center gap-2 bg-white rounded-lg p-4 shadow border border-slate-100 hover:border-[#004aad] text-[#004aad] text-sm font-medium transition"
                >
                  <span className="w-1.5 h-1.5 bg-[#004aad] rounded-full flex-shrink-0" />
                  {label}
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 id="faq" className="text-3xl font-bold mb-6" style={{ color: "#004aad" }}>
              Weld Inspection — Frequently Asked Questions
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
              Weld Inspection Consulting & Training
            </h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Atlantis NDT provides ASNT Level III weld inspection consulting — procedure development per AWS D1.1, ASME V, and API 1104; PAUT technique file development; personnel qualification review; and Level III review and signature services. Contact our team for weld inspection training (RT, PAUT, MT, PT Level II) or procedure development support.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-white text-[#004aad] font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                Contact Weld Inspection Experts
              </Link>
              <Link
                to="/training"
                className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                NDT Training Courses
              </Link>
              <Link
                to="/consulting"
                className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                Level III Consulting
              </Link>
            </div>
          </section>

        </article>

        {/* Sidebar */}
        <aside className="hidden md:block md:col-span-1 space-y-6 mt-2">
          <div className="bg-white p-6 rounded-xl shadow border border-slate-100 sticky top-16">
            <h3 className="text-lg font-bold mb-4" style={{ color: "#004aad" }}>
              On This Page
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {[
                ["#ndt-methods", "NDT Methods for Welds"],
                ["#defect-types", "Weld Defect Types Table"],
                ["#codes", "Governing Codes"],
                ["#paut-vs-rt", "PAUT vs RT"],
                ["#inspection-procedure", "Inspection Procedure"],
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
            <h3 className="text-lg font-bold mb-3" style={{ color: "#004aad" }}>
              Weld Inspection Codes
            </h3>
            <ul className="space-y-2 text-sm">
              {["AWS D1.1", "ASME Section IX", "ASME Section V", "API 1104", "EN ISO 17638", "EN ISO 17636"].map((s) => (
                <li key={s} className="flex items-center gap-2 text-slate-700">
                  <span className="w-1.5 h-1.5 bg-[#004aad] rounded-full flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border border-slate-100">
            <h3 className="text-lg font-bold mb-3" style={{ color: "#004aad" }}>
              Related NDT Methods
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                ["/phased-array-ut", "Phased Array UT (PAUT)"],
                ["/tofd-testing", "TOFD Testing"],
                ["/radiographic-testing", "Radiographic Testing (RT)"],
                ["/magnetic-particle-testing", "Magnetic Particle (MT)"],
                ["/ultrasonic-testing", "Ultrasonic Testing (UT)"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link to={href} className="text-[#004aad] hover:underline">
                    → {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#004aad] p-6 rounded-xl shadow text-white">
            <h3 className="text-lg font-bold mb-3">Need Weld Inspection Support?</h3>
            <p className="text-blue-100 text-sm mb-4">
              Our ASNT Level III engineers develop AWS D1.1, ASME V, and API 1104 weld inspection procedures, qualify PAUT techniques, and provide Level III review services globally.
            </p>
            <Link
              to="/contact"
              className="block bg-white text-[#004aad] text-center font-bold px-4 py-3 rounded-lg hover:bg-blue-50 transition text-sm"
            >
              Contact Our Weld Experts
            </Link>
          </div>

          <div className="bg-amber-50 p-6 rounded-xl shadow border border-amber-200">
            <h3 className="text-lg font-bold mb-3 text-amber-800">
              <BookOpen className="w-4 h-4 inline mr-1" />
              Key Resources
            </h3>
            <ul className="space-y-2 text-sm text-amber-800">
              {[
                ["/asnt-certification", "ASNT Level II Certification"],
                ["/ndt-for-oil-gas", "Oil & Gas NDT Guide"],
                ["/blog/api-653-tank-inspection-guide", "API 653 Tank Inspection Guide"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link to={href} className="hover:underline">→ {label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <ContactDetails />
    </div>
  );
}
