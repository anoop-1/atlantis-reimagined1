import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Activity,
  Zap,
  Target,
  Shield,
  Eye,
  Radio,
  DollarSign,
  Clock,
  BookOpen,
  AlertTriangle,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const comparisonTable = [
  { factor: "Detection Type", ut: "Volumetric (internal)", rt: "Volumetric (internal)", mt: "Surface / near-surface", pt: "Surface only", et: "Surface / near-surface", vt: "Surface only" },
  { factor: "Material Requirement", ut: "Most metals & composites", rt: "Most materials", mt: "Ferromagnetic only", pt: "All non-porous materials", et: "Conductive materials", vt: "Any material" },
  { factor: "Typical Cost per Test", ut: "$150 - $500", rt: "$300 - $800", mt: "$80 - $250", pt: "$60 - $200", et: "$200 - $600", vt: "$50 - $150" },
  { factor: "Inspection Speed", ut: "Fast (real-time)", rt: "Slow (exposure + processing)", mt: "Fast", pt: "Moderate (dwell time)", et: "Very fast (automated)", vt: "Very fast" },
  { factor: "Accuracy / Sensitivity", ut: "High (sub-mm sizing)", rt: "Moderate to High", mt: "High for surface cracks", pt: "Moderate", et: "Very High", vt: "Low to Moderate" },
  { factor: "Safety Concerns", ut: "None", rt: "Radiation hazard", mt: "Electrical / magnetic", pt: "Chemical handling", et: "None", vt: "None" },
  { factor: "Portability", ut: "Portable", rt: "Bulky (source + shielding)", mt: "Portable", pt: "Highly portable", et: "Portable", vt: "Highly portable" },
  { factor: "Permanent Record", ut: "Digital (PAUT/TOFD)", rt: "Film or digital image", mt: "Photos (limited)", pt: "Photos (limited)", et: "Digital strip charts", vt: "Photos / reports" },
  { factor: "Operator Skill Required", ut: "High", rt: "Moderate to High", mt: "Moderate", pt: "Low to Moderate", et: "High", vt: "Low to Moderate" },
  { factor: "Primary Codes", ut: "ASME V Art 4, AWS D1.1", rt: "ASME V Art 2, API 1104", mt: "ASME V Art 7, ASTM E709", pt: "ASME V Art 6, ASTM E1417", et: "ASME V Art 8, ASTM E376", vt: "ASME V Art 9, AWS D1.1" },
];

const defectMatrix = [
  { defect: "Internal Volumetric (porosity, inclusions)", best: "RT", good: "UT", limited: "—", note: "RT excels at rounded volumetric defects; UT/PAUT increasingly capable" },
  { defect: "Surface Cracks", best: "MT (ferro) / PT (non-ferro)", good: "ET, VT", limited: "UT, RT", note: "MT most sensitive for ferromagnetic; PT for all materials; ET for automated scanning" },
  { defect: "Subsurface Defects (near-surface)", best: "UT", good: "MT, ET", limited: "RT, PT", note: "UT detects defects just below surface; MT detects to ~3mm depth; ET to ~5mm" },
  { defect: "Corrosion / Wall Thinning", best: "UT", good: "RT (profile), VT", limited: "MT, PT", note: "UT thickness gauging is the standard method; RT shows profile radiography" },
  { defect: "Lack of Fusion (planar)", best: "UT / PAUT", good: "TOFD", limited: "RT", note: "Planar defects parallel to RT beam are often missed; UT beam steering detects reliably" },
  { defect: "Porosity", best: "RT", good: "UT (clusters)", limited: "PT (surface pores)", note: "RT produces clear density contrast on film/digital; UT less sensitive to small isolated pores" },
  { defect: "Fatigue Cracks", best: "ET, MT", good: "UT, PT", limited: "RT", note: "ET is preferred for in-service fatigue crack detection in aerospace; MT for structural steel" },
  { defect: "Laminations", best: "UT", good: "—", limited: "RT, MT, PT, ET", note: "Only UT reliably detects laminations — RT beam parallel to defect; surface methods cannot reach" },
];

const methodCards = [
  {
    name: "Ultrasonic Testing (UT)",
    abbr: "UT",
    icon: Activity,
    color: "border-t-blue-600",
    desc: "High-frequency sound waves (0.5-25 MHz) propagate through material and reflect from interfaces and defects. Measures thickness, detects and sizes internal flaws. PAUT and TOFD are advanced UT techniques.",
    strengths: ["Precise thickness measurement", "Excellent defect sizing", "No radiation hazard", "Portable field equipment", "Real-time results"],
    limitations: ["Requires couplant", "Operator-dependent", "Difficult on rough surfaces", "Limited on thin materials (<3mm)"],
    certHours: "40 hrs (Level I) / 80 hrs (Level II)",
    avgCost: "$150 - $500 per inspection",
  },
  {
    name: "Radiographic Testing (RT)",
    abbr: "RT",
    icon: Zap,
    color: "border-t-purple-600",
    desc: "X-rays or gamma rays pass through material and expose film or a digital detector. Density differences from defects appear as contrast variations on the radiograph. Provides permanent image record.",
    strengths: ["Permanent film/digital record", "Good for complex geometries", "Less operator-dependent", "Detects porosity well", "Wide code acceptance"],
    limitations: ["Radiation safety required", "Area evacuation needed", "Slow (exposure + processing)", "Cannot size depth accurately", "Environmental concerns (film)"],
    certHours: "40 hrs (Level I) / 80 hrs (Level II)",
    avgCost: "$300 - $800 per exposure",
  },
  {
    name: "Magnetic Particle Testing (MT)",
    abbr: "MT",
    icon: Target,
    color: "border-t-amber-600",
    desc: "Magnetic flux is induced in ferromagnetic material. Surface or near-surface discontinuities create flux leakage that attracts magnetic particles, forming visible indications. Wet fluorescent MT (WFMT) is extremely sensitive.",
    strengths: ["Very sensitive to surface cracks", "Detects near-surface defects (~3mm)", "Fast application", "Low cost", "Immediate results"],
    limitations: ["Ferromagnetic materials only", "Requires magnetization", "Surface preparation needed", "Demagnetization may be required", "Cannot detect deep internal defects"],
    certHours: "16 hrs (Level I) / 40 hrs (Level II)",
    avgCost: "$80 - $250 per inspection",
  },
  {
    name: "Liquid Penetrant Testing (PT)",
    abbr: "PT",
    icon: Shield,
    color: "border-t-green-600",
    desc: "Low-viscosity penetrant is applied to the surface, drawn into surface-breaking defects by capillary action, then a developer draws the penetrant back out to form visible indications. Works on any non-porous material.",
    strengths: ["Works on any non-porous material", "Simple process", "Low equipment cost", "Good for complex shapes", "Detects very fine surface cracks"],
    limitations: ["Surface-breaking defects only", "Surface must be clean and dry", "Dwell time required (10-30 min)", "Chemical handling required", "Temperature sensitive"],
    certHours: "16 hrs (Level I) / 24 hrs (Level II)",
    avgCost: "$60 - $200 per inspection",
  },
  {
    name: "Eddy Current Testing (ET)",
    abbr: "ET",
    icon: Radio,
    color: "border-t-teal-600",
    desc: "An alternating current coil induces eddy currents in conductive material. Defects, conductivity changes, and dimensional variations alter the eddy current flow, which is detected as impedance changes in the coil.",
    strengths: ["Very fast (automated)", "No couplant needed", "Detects surface and near-surface", "Excellent for tube inspection", "Sensitive to small cracks"],
    limitations: ["Conductive materials only", "Limited penetration depth", "Sensitive to lift-off", "Complex signal interpretation", "Reference standards needed"],
    certHours: "40 hrs (Level I) / 80 hrs (Level II)",
    avgCost: "$200 - $600 per inspection",
  },
  {
    name: "Visual Testing (VT)",
    abbr: "VT",
    icon: Eye,
    color: "border-t-slate-600",
    desc: "Direct or remote visual examination of surfaces for discontinuities, dimensional compliance, and condition assessment. The most basic and most widely used NDT method. All other NDT begins with VT.",
    strengths: ["Simplest method", "Lowest cost", "No special equipment required", "Real-time assessment", "Mandatory first step per all codes"],
    limitations: ["Surface defects only", "Subjective interpretation", "Requires adequate lighting", "Cannot detect internal defects", "Limited sensitivity"],
    certHours: "16 hrs (Level I) / 24 hrs (Level II)",
    avgCost: "$50 - $150 per inspection",
  },
];

const decisionFlowSteps = [
  { step: 1, question: "What type of defect are you looking for?", options: ["Internal/volumetric defects → Go to Step 2", "Surface cracks → Go to Step 3", "Wall thickness / corrosion → UT is the standard method", "General condition assessment → Start with VT"] },
  { step: 2, question: "Internal defect detection — do you need to avoid radiation?", options: ["Yes, no radiation → UT / PAUT (preferred for most applications)", "Radiation acceptable → RT (excellent for porosity, inclusions)", "Need both detection and sizing → PAUT + TOFD combination"] },
  { step: 3, question: "What material is being inspected?", options: ["Ferromagnetic steel → MT (most sensitive for surface/near-surface cracks)", "Non-ferromagnetic (stainless, aluminum, titanium) → PT or ET", "Need automated high-speed scanning → ET (eddy current)"] },
  { step: 4, question: "What are your code requirements?", options: ["ASME Section VIII / B31.3 → RT or UT per ASME V; PAUT accepted per Appendix IV", "AWS D1.1 structural → RT standard; UT per Annex K; MT/PT for surface", "API 1104 pipeline → RT or UT; PAUT accepted with qualified procedure", "Aerospace (NAS-410) → ET, UT, PT primary methods"] },
];

const industryMatrix = [
  { industry: "Oil & Gas (Upstream)", ut: true, rt: true, mt: true, pt: true, et: true, vt: true, primary: "UT, RT, MT", note: "100% volumetric on pressure-retaining welds; UT thickness for corrosion monitoring; MT for surface crack detection on vessels and piping" },
  { industry: "Oil & Gas (Pipeline)", ut: true, rt: true, mt: true, pt: false, et: false, vt: true, primary: "UT, RT", note: "API 1104 governs girth weld inspection; PAUT increasingly replacing RT; intelligent pigging uses UT and MFL" },
  { industry: "Aerospace", ut: true, rt: true, mt: false, pt: true, et: true, vt: true, primary: "ET, UT, PT", note: "ET for fatigue crack detection; UT for composite bond inspection; fluorescent PT for engine components; NAS-410 certification" },
  { industry: "Power Generation", ut: true, rt: true, mt: true, pt: true, et: true, vt: true, primary: "UT, MT, ET", note: "Boiler tube inspection (ET); turbine blade inspection (PT, MT); weld inspection per ASME Section I; in-service inspection during outages" },
  { industry: "Construction / Structural", ut: true, rt: true, mt: true, pt: true, et: false, vt: true, primary: "UT, MT, VT", note: "AWS D1.1 governs structural steel welds; CWI performs VT; UT/RT for complete joint penetration welds; MT for surface inspection" },
  { industry: "Manufacturing", ut: true, rt: true, mt: true, pt: true, et: true, vt: true, primary: "All methods", note: "Casting inspection (RT, UT); forging inspection (UT, MT); machined part inspection (PT, ET); quality control at production" },
];

const costComparison = [
  { method: "Visual Testing (VT)", equipCost: "$500 - $5,000", perTest: "$50 - $150", annual: "$10,000 - $30,000", training: "$500 - $1,500" },
  { method: "Liquid Penetrant (PT)", equipCost: "$200 - $3,000", perTest: "$60 - $200", annual: "$15,000 - $40,000", training: "$800 - $2,000" },
  { method: "Magnetic Particle (MT)", equipCost: "$2,000 - $15,000", perTest: "$80 - $250", annual: "$20,000 - $50,000", training: "$1,000 - $2,500" },
  { method: "Ultrasonic Testing (UT)", equipCost: "$5,000 - $80,000", perTest: "$150 - $500", annual: "$40,000 - $100,000", training: "$2,000 - $5,000" },
  { method: "Eddy Current (ET)", equipCost: "$8,000 - $60,000", perTest: "$200 - $600", annual: "$50,000 - $120,000", training: "$2,500 - $5,000" },
  { method: "Radiographic Testing (RT)", equipCost: "$15,000 - $200,000", perTest: "$300 - $800", annual: "$60,000 - $150,000", training: "$3,000 - $6,000" },
];

const faqs = [
  {
    q: "Which NDT method is most accurate?",
    a: "Accuracy depends on the defect type and application. For internal defect sizing, Phased Array UT (PAUT) is the most accurate method — capable of measuring defect through-wall height to within 1mm. For surface crack detection sensitivity, wet fluorescent Magnetic Particle Testing (WFMT) and Eddy Current Testing (ET) offer the highest sensitivity, detecting cracks as small as 0.5mm in length. Radiographic Testing (RT) provides good spatial resolution for volumetric defects but cannot accurately measure defect depth. No single method is universally 'most accurate' — accuracy is always relative to the defect type being sought.",
  },
  {
    q: "Can one NDT method replace all others?",
    a: "No. Each NDT method is sensitive to different defect types, orientations, and locations. UT detects internal defects but struggles with surface-breaking cracks in some configurations. MT and PT detect surface defects but cannot reach internal flaws. RT produces images of volumetric defects but misses planar defects parallel to the beam. Most codes and standards require a combination of methods — for example, ASME Section VIII requires VT on all welds, volumetric examination (RT or UT) on pressure-retaining welds, and surface examination (MT or PT) as supplementary.",
  },
  {
    q: "What is the cheapest NDT method?",
    a: "Visual Testing (VT) is the lowest-cost method, requiring minimal equipment — adequate lighting, magnification, and measurement tools. Liquid Penetrant Testing (PT) is the next most affordable surface method, with consumable costs typically under $50 per test. However, selecting an NDT method based solely on cost is inappropriate — the method must be capable of detecting the defects of concern. A cheap method that misses critical defects provides zero value. Method selection should be driven by the governing code, defect type, and technical capability.",
  },
  {
    q: "Which NDT method is best for weld inspection?",
    a: "Weld inspection typically requires multiple methods. Visual Testing (VT) is mandatory as the first step for all welds. For volumetric (internal) weld examination, Phased Array UT (PAUT) is increasingly preferred over RT because it offers better sensitivity to planar defects (cracks, lack of fusion), provides immediate digital results, and requires no radiation safety controls. RT remains excellent for detecting porosity and inclusions. For surface examination, MT is used on ferromagnetic welds and PT on non-ferromagnetic (stainless steel, aluminum) welds. The governing code (AWS D1.1, ASME V, API 1104) specifies the required examination methods.",
  },
  {
    q: "Is PAUT replacing RT for NDT inspections?",
    a: "Yes, in many applications. PAUT has replaced film RT for most onshore weld inspections in oil & gas, power generation, and structural steel. The drivers are: no radiation hazard (no exclusion zones, no delays), better sensitivity to planar defects (cracks and lack of fusion), faster inspection with immediate digital results, and reduced lifecycle costs (no film, chemicals, or processing). PAUT is accepted by ASME V Appendix IV, AWS D1.1 Annex K, and API 1104. However, RT remains preferred for certain applications — casting inspection, complex geometries where UT access is limited, and jurisdictions or codes that specifically mandate RT.",
  },
  {
    q: "How do I choose between MT and PT for surface inspection?",
    a: "The choice depends primarily on material type. Magnetic Particle Testing (MT) works only on ferromagnetic materials (carbon steel, low-alloy steel) but is significantly more sensitive than PT — wet fluorescent MT can detect cracks as small as 0.25mm. Liquid Penetrant Testing (PT) works on any non-porous material, making it essential for austenitic stainless steel, aluminum, titanium, and nickel alloys where MT is not applicable. If the material is ferromagnetic and the governing code permits either method, MT is almost always preferred due to superior sensitivity and faster application (no dwell time required).",
  },
  {
    q: "What NDT methods are used in aerospace?",
    a: "Aerospace NDT relies heavily on Eddy Current Testing (ET), Ultrasonic Testing (UT), and fluorescent Liquid Penetrant Testing (FPI). ET is the primary method for detecting fatigue cracks in airframe structures, engine discs, and landing gear — it provides rapid, automated inspection without surface contact. UT (including PAUT) is used for composite bond line inspection, forging inspection, and thickness measurement. FPI (fluorescent PT) is used for surface crack detection on engine components and critical structural parts. Aerospace NDT follows NAS-410 (Nadcap) certification requirements rather than ASNT SNT-TC-1A. Radiographic Testing is used for casting inspection and some weld applications.",
  },
  {
    q: "What certifications do NDT technicians need?",
    a: "NDT technician certification follows one of two main schemes. In North America, ASNT SNT-TC-1A is the employer-based certification program — the employer's written practice defines training, experience, and examination requirements for Level I, II, and III in each method. ASNT also offers central certification (ACCP) which is portable between employers. Internationally, ISO 9712 (and its regional equivalents: EN ISO 9712 in Europe, PCN in the UK) is the standard certification scheme — it is third-party administered and portable. For specific industries, additional qualifications may be required: API 510/570/653 for in-service inspection, AWS CWI for welding inspection, NAS-410 for aerospace.",
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

export default function NDTMethodsComparison() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "NDT Methods Comparison Guide 2026 | UT vs RT vs MT vs PT vs ET vs VT",
        description:
          "Complete NDT methods comparison: side-by-side table of UT, RT, MT, PT, ET, VT by cost, speed, accuracy, and application. Includes decision flowchart and industry selection matrix.",
        author: { "@type": "Organization", name: "Atlantis NDT", url: "https://atlantisndt.com" },
        publisher: {
          "@type": "Organization",
          name: "Atlantis NDT",
          logo: { "@type": "ImageObject", url: "https://atlantisndt.com/favicon-96x96.jpg" },
        },
        datePublished: "2026-02-28",
        dateModified: "2026-02-28",
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://atlantisndt.com/ndt-methods-comparison" },
        keywords:
          "NDT methods comparison, UT vs RT vs MT, which NDT method to use, ndt method selection, ultrasonic testing, radiographic testing, magnetic particle testing, penetrant testing, eddy current testing, visual testing",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="NDT Methods Comparison 2026 | UT vs RT vs MT vs PT vs ET vs VT [Guide]"
        description="Complete NDT methods comparison: side-by-side table of UT, RT, MT, PT, ET, VT by cost, speed, accuracy, and application. Includes decision flowchart and industry selection matrix."
        keywords="NDT methods comparison, UT vs RT vs MT, which NDT method to use, ndt method selection, ultrasonic testing vs radiographic testing, MT vs PT, eddy current vs magnetic particle, NDT selection guide, NDT cost comparison"
        structuredData={structuredData}
        canonical="https://atlantisndt.com/ndt-methods-comparison"
      />
      <Breadcrumbs />

      {/* Hero */}
      <section className="bg-[#004aad] text-white py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-blue-200 text-sm font-medium mb-3 uppercase tracking-wider">
              NDT Selection Guide · Updated February 2026
            </p>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
                NDT Methods Comparison Guide [2026]
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Six primary NDT methods — UT, RT, MT, PT, ET, and VT — each detect different defect types with different capabilities, costs, and limitations. Selecting the wrong method wastes budget and misses critical defects. This guide provides side-by-side comparison data to help you choose the right NDT method for every application.
              </p>
            </motion.div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-white text-[#004aad] font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                Get Expert Method Selection Help
              </Link>
              <a
                href="#comparison-table"
                className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                Jump to Comparison Table
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-white border-b border-slate-200 py-6">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "Primary NDT Methods", value: "6" },
              { label: "Global NDT Market (2026)", value: "$18.2B" },
              { label: "Avg. Cost Difference", value: "5-10x" },
              { label: "Factors Compared", value: "10+" },
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
            {["Comparison Table", "Defect Matrix", "Method Cards", "Decision Flowchart", "Industry Matrix", "Cost Comparison", "FAQ"].map(
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

          {/* Side-by-Side Comparison Table */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 id="comparison-table" className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              Side-by-Side NDT Methods Comparison Table
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              The table below compares all six primary NDT methods across ten critical factors. Use this as a quick-reference guide when selecting the appropriate inspection technique for your application. Each method has distinct advantages — no single method covers all requirements.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
              <table className="w-full text-xs">
                <thead className="bg-[#004aad] text-white">
                  <tr>
                    <th className="text-left p-3 font-semibold min-w-[120px]">Factor</th>
                    <th className="text-left p-3 font-semibold min-w-[100px]">UT</th>
                    <th className="text-left p-3 font-semibold min-w-[100px]">RT</th>
                    <th className="text-left p-3 font-semibold min-w-[100px]">MT</th>
                    <th className="text-left p-3 font-semibold min-w-[100px]">PT</th>
                    <th className="text-left p-3 font-semibold min-w-[100px]">ET</th>
                    <th className="text-left p-3 font-semibold min-w-[100px]">VT</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((row, i) => (
                    <tr key={row.factor} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-slate-800">{row.factor}</td>
                      <td className="p-3 text-slate-600">{row.ut}</td>
                      <td className="p-3 text-slate-600">{row.rt}</td>
                      <td className="p-3 text-slate-600">{row.mt}</td>
                      <td className="p-3 text-slate-600">{row.pt}</td>
                      <td className="p-3 text-slate-600">{row.et}</td>
                      <td className="p-3 text-slate-600">{row.vt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-500 text-xs mt-3">
              Costs are approximate U.S. market rates for 2026. Actual costs vary by location, complexity, access, and volume.
            </p>
          </motion.section>

          {/* Defect Detection Matrix */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 id="defect-matrix" className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              Which NDT Method for Which Defect?
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Defect type is the single most important factor in NDT method selection. Volumetric defects (porosity, inclusions) require volumetric methods (RT, UT). Planar defects (cracks, lack of fusion) are best detected by UT. Surface defects require surface methods (MT, PT, ET, VT). The matrix below maps each common defect type to the best, good, and limited methods.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
              <table className="w-full text-sm">
                <thead className="bg-[#004aad] text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold">Defect Type</th>
                    <th className="text-left p-4 font-semibold text-green-200">Best Method</th>
                    <th className="text-left p-4 font-semibold text-blue-200">Good Alternative</th>
                    <th className="text-left p-4 font-semibold text-amber-200">Limited Use</th>
                  </tr>
                </thead>
                <tbody>
                  {defectMatrix.map((row, i) => (
                    <tr key={row.defect} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-semibold text-slate-800 text-xs">{row.defect}</td>
                      <td className="p-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">{row.best}</span></td>
                      <td className="p-4"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">{row.good}</span></td>
                      <td className="p-4"><span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-medium">{row.limited}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-blue-50 border-l-4 border-[#004aad] rounded-r-xl p-5">
              <h3 className="font-bold text-[#004aad] mb-2">Key Principle: Method Complementarity</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                No single NDT method detects all defect types. Codes require multiple methods precisely because each has blind spots. UT excels at planar defects but may miss small porosity. RT excels at volumetric defects but misses planar cracks. MT detects surface cracks with extreme sensitivity but only on ferromagnetic materials. A well-designed inspection plan uses complementary methods to cover all credible damage mechanisms.
              </p>
            </div>
          </motion.section>

          {/* Method-by-Method Cards */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h2 id="method-cards" className="text-3xl font-bold mb-6" style={{ color: "#004aad" }}>
              NDT Method Profiles
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Each method below includes a technical summary, key strengths and limitations, certification training hours per ASNT SNT-TC-1A, and typical per-inspection cost ranges.
            </p>
            <div className="space-y-6">
              {methodCards.map((m) => (
                <Card key={m.abbr} className={`border-t-4 ${m.color}`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <m.icon className="w-6 h-6 text-[#004aad]" />
                      <CardTitle className="text-xl">{m.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">{m.desc}</p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="font-semibold text-green-700 text-sm mb-2">Strengths</h4>
                        <ul className="space-y-1">
                          {m.strengths.map((s) => (
                            <li key={s} className="flex items-start gap-2 text-xs text-slate-600">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700 text-sm mb-2">Limitations</h4>
                        <ul className="space-y-1">
                          {m.limitations.map((l) => (
                            <li key={l} className="flex items-start gap-2 text-xs text-slate-600">
                              <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                              <span>{l}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 text-xs">
                      <span className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full font-medium">Training: {m.certHours}</span>
                      <span className="bg-green-50 text-green-800 px-3 py-1 rounded-full font-medium">Cost: {m.avgCost}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* Decision Flowchart */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 id="decision-flowchart" className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              How to Choose the Right NDT Method
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Follow this decision flowchart to narrow down the best NDT method for your specific application. Start with Step 1 and follow the path that matches your inspection requirements.
            </p>
            <div className="space-y-6">
              {decisionFlowSteps.map((step, index) => (
                <div key={step.step} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="bg-[#004aad] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {step.step}
                    </div>
                    {index < decisionFlowSteps.length - 1 && (
                      <div className="w-0.5 h-full bg-blue-200 my-2" />
                    )}
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow border border-slate-100 flex-1">
                    <h3 className="font-bold text-[#004aad] mb-3">{step.question}</h3>
                    <ul className="space-y-2">
                      {step.options.map((opt) => (
                        <li key={opt} className="flex items-start gap-2 text-sm text-slate-600">
                          <ArrowRight className="w-4 h-4 text-[#004aad] flex-shrink-0 mt-0.5" />
                          <span>{opt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-amber-800 text-sm font-semibold mb-1">Important: Code Requirements Override Preferences</p>
                  <p className="text-amber-800 text-sm">
                    The governing code always takes precedence over cost or convenience preferences. If your code specifies RT, you must perform RT regardless of whether UT might be technically equivalent. Always verify code requirements with a qualified Level III before finalizing method selection.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Industry Application Matrix */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <h2 id="industry-matrix" className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              NDT Methods by Industry
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Different industries rely on different combinations of NDT methods based on their typical materials, defect types, and governing codes. The matrix below shows which methods are commonly used in each major industry sector.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
              <table className="w-full text-xs">
                <thead className="bg-[#004aad] text-white">
                  <tr>
                    <th className="text-left p-3 font-semibold min-w-[130px]">Industry</th>
                    <th className="text-center p-3 font-semibold">UT</th>
                    <th className="text-center p-3 font-semibold">RT</th>
                    <th className="text-center p-3 font-semibold">MT</th>
                    <th className="text-center p-3 font-semibold">PT</th>
                    <th className="text-center p-3 font-semibold">ET</th>
                    <th className="text-center p-3 font-semibold">VT</th>
                    <th className="text-left p-3 font-semibold min-w-[100px]">Primary</th>
                  </tr>
                </thead>
                <tbody>
                  {industryMatrix.map((row, i) => (
                    <tr key={row.industry} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-slate-800">{row.industry}</td>
                      {[row.ut, row.rt, row.mt, row.pt, row.et, row.vt].map((used, j) => (
                        <td key={j} className="p-3 text-center">
                          {used ? (
                            <CheckCircle className="w-4 h-4 text-green-500 mx-auto" />
                          ) : (
                            <span className="text-slate-300">—</span>
                          )}
                        </td>
                      ))}
                      <td className="p-3 text-slate-700 font-medium">{row.primary}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 space-y-3">
              {industryMatrix.map((row) => (
                <div key={row.industry} className="bg-white rounded-lg p-4 shadow-sm border border-slate-100">
                  <h4 className="font-semibold text-sm text-[#004aad] mb-1">{row.industry}</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">{row.note}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Cost Comparison */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 id="cost-comparison" className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              NDT Cost Comparison
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              NDT costs vary significantly by method due to differences in equipment complexity, safety requirements, consumables, and operator skill level. The table below provides typical U.S. market cost ranges for 2026. Equipment costs are one-time capital expenditure; per-test costs are variable costs per inspection event; annual program costs assume a moderate inspection volume.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
              <table className="w-full text-sm">
                <thead className="bg-[#004aad] text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold">Method</th>
                    <th className="text-left p-4 font-semibold">Equipment Cost</th>
                    <th className="text-left p-4 font-semibold">Per Test</th>
                    <th className="text-left p-4 font-semibold">Annual Program</th>
                    <th className="text-left p-4 font-semibold">Training Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {costComparison.map((row, i) => (
                    <tr key={row.method} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-semibold text-slate-800 text-xs">{row.method}</td>
                      <td className="p-4 text-slate-600 text-xs">{row.equipCost}</td>
                      <td className="p-4 text-slate-600 text-xs">{row.perTest}</td>
                      <td className="p-4 text-slate-600 text-xs">{row.annual}</td>
                      <td className="p-4 text-slate-600 text-xs">{row.training}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="font-bold text-sm">Lowest Cost</div>
                <div className="text-xs text-slate-600">VT and PT — minimal equipment, low training cost</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="font-bold text-sm">Best Value</div>
                <div className="text-xs text-slate-600">UT — moderate cost with highest detection capability</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <Shield className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="font-bold text-sm">Highest Cost</div>
                <div className="text-xs text-slate-600">RT — radiation safety, licensing, and film add significant cost</div>
              </div>
            </div>
          </motion.section>

          {/* Related Services */}
          <section>
            <h2 className="text-2xl font-bold mb-5" style={{ color: "#004aad" }}>
              Related NDT Method Guides
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { href: "/ultrasonic-testing", label: "Ultrasonic Testing (UT) — Complete Guide" },
                { href: "/radiographic-testing", label: "Radiographic Testing (RT) — Complete Guide" },
                { href: "/magnetic-particle-testing", label: "Magnetic Particle Testing (MT) Guide" },
                { href: "/penetrant-testing", label: "Liquid Penetrant Testing (PT) Guide" },
                { href: "/eddy-current-testing", label: "Eddy Current Testing (ET) Guide" },
                { href: "/visual-testing", label: "Visual Testing (VT) Guide" },
                { href: "/phased-array-ut", label: "Phased Array UT (PAUT) — Advanced UT" },
                { href: "/tofd-testing", label: "TOFD Testing — Time of Flight Diffraction" },
                { href: "/blog/ut-vs-rt-comparison", label: "UT vs RT — Detailed Comparison" },
                { href: "/weld-inspection", label: "Weld Inspection — NDT for Welds" },
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
              NDT Method Selection — Frequently Asked Questions
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
              Need Help Selecting the Right NDT Method?
            </h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Atlantis NDT provides ASNT Level III consulting for NDT method selection, procedure development, and technique optimization. Our Level III engineers help you match the right inspection method to your specific defect types, materials, codes, and budget — ensuring reliable detection without unnecessary cost.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-white text-[#004aad] font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                Contact Our NDT Experts
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
                ["#comparison-table", "Side-by-Side Comparison Table"],
                ["#defect-matrix", "Defect Detection Matrix"],
                ["#method-cards", "Method Profiles (6 methods)"],
                ["#decision-flowchart", "Decision Flowchart"],
                ["#industry-matrix", "Industry Application Matrix"],
                ["#cost-comparison", "Cost Comparison"],
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
              Quick Method Summary
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { abbr: "UT", name: "Ultrasonic", best: "Internal defects, thickness" },
                { abbr: "RT", name: "Radiographic", best: "Porosity, inclusions" },
                { abbr: "MT", name: "Magnetic Particle", best: "Surface cracks (ferro)" },
                { abbr: "PT", name: "Penetrant", best: "Surface cracks (all)" },
                { abbr: "ET", name: "Eddy Current", best: "Fatigue cracks, tubes" },
                { abbr: "VT", name: "Visual", best: "General condition" },
              ].map((m) => (
                <li key={m.abbr} className="flex items-start gap-2">
                  <span className="bg-[#004aad] text-white text-xs font-bold px-2 py-0.5 rounded flex-shrink-0">{m.abbr}</span>
                  <div>
                    <div className="font-medium text-slate-800">{m.name}</div>
                    <div className="text-xs text-slate-500">{m.best}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border border-slate-100">
            <h3 className="text-lg font-bold mb-3" style={{ color: "#004aad" }}>
              NDT Method Guides
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                ["/ultrasonic-testing", "Ultrasonic Testing (UT)"],
                ["/radiographic-testing", "Radiographic Testing (RT)"],
                ["/magnetic-particle-testing", "Magnetic Particle (MT)"],
                ["/penetrant-testing", "Penetrant Testing (PT)"],
                ["/eddy-current-testing", "Eddy Current (ET)"],
                ["/visual-testing", "Visual Testing (VT)"],
                ["/phased-array-ut", "Phased Array UT (PAUT)"],
                ["/tofd-testing", "TOFD Testing"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link to={href} className="text-[#004aad] hover:underline flex items-center gap-1">
                    <ArrowRight className="w-3 h-3" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#004aad] p-6 rounded-xl shadow text-white">
            <h3 className="text-lg font-bold mb-3">Need Method Selection Help?</h3>
            <p className="text-blue-100 text-sm mb-4">
              Our ASNT Level III engineers help you select the right NDT method for your application — matching defect types, materials, codes, and budget to the optimal inspection strategy.
            </p>
            <Link
              to="/contact"
              className="block bg-white text-[#004aad] text-center font-bold px-4 py-3 rounded-lg hover:bg-blue-50 transition text-sm"
            >
              Contact Our Experts
            </Link>
          </div>

          <div className="bg-amber-50 p-6 rounded-xl shadow border border-amber-200">
            <h3 className="text-lg font-bold mb-3 text-amber-800">
              <BookOpen className="w-4 h-4 inline mr-1" />
              Key Resources
            </h3>
            <ul className="space-y-2 text-sm text-amber-900">
              {[
                "ASME Section V — NDE Methods",
                "ASNT SNT-TC-1A — Personnel Qualification",
                "ISO 9712 — NDT Certification",
                "AWS D1.1 — Structural Welding Code",
                "API 1104 — Pipeline Welding",
              ].map((r) => (
                <li key={r} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-600 rounded-full flex-shrink-0" />
                  {r}
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
