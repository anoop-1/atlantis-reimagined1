import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { CheckCircle, ChevronDown, ChevronUp, AlertTriangle, Radio, Zap, Shield, Target } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "What is guided wave testing (GWT)?",
    a: "Guided Wave Testing (GWT), also called Long-Range Ultrasonic Testing (LRUT), is a non-destructive testing method that propagates low-frequency ultrasonic waves along the length of a pipe or structure. Unlike conventional UT which tests one small spot at a time, GWT sends waves from a single test point that travel hundreds of metres in both directions, screening the entire pipe for areas of metal loss, corrosion, or cracking. It is primarily used as a screening tool to identify areas for further investigation with conventional UT.",
  },
  {
    q: "How far can guided waves travel in a pipe?",
    a: "In ideal conditions — clean, bare steel pipe — guided waves can travel 100 metres or more in each direction from the transducer collar. Practical inspection range is typically 20–50 metres each direction and depends heavily on pipe condition. Factors that reduce range include: heavy bitumen or viscoelastic coatings, liquid-filled pipes (especially viscous fluids), soil loading on buried pipe, corrosion severity, and pipe fittings like tees and reducers that reflect or scatter the wave. GWT reports specify the inspection range achieved based on signal attenuation measured during the test.",
  },
  {
    q: "What is the difference between GWT and conventional UT?",
    a: "Guided Wave Testing and conventional UT serve fundamentally different inspection purposes. GWT is a long-range screening method: from one test point, it scans the entire pipe length and identifies locations of potential defects (areas of cross-section change). It cannot accurately size defects or measure wall thickness precisely. Conventional UT is a point-by-point inspection method: it measures exact wall thickness at specific locations and can size defects accurately. The typical workflow is to use GWT to screen large lengths of pipe quickly, then return with conventional UT (or PAUT) to the specific areas GWT flagged for detailed characterisation.",
  },
  {
    q: "Can GWT detect corrosion under insulation (CUI)?",
    a: "Yes — detecting corrosion under insulation (CUI) is one of the primary applications of guided wave testing. A GWT collar is clamped around the pipe at a window cut in the insulation (typically 200–300mm wide). The guided waves then propagate through the insulated sections of pipe, reflecting from any corrosion or wall loss. This allows screening of insulated pipelines without removing all insulation — potentially saving 60–80% of the cost of a full strip-out survey. GWT identifies suspect areas; those areas are then insulation-stripped and inspected with conventional UT or PAUT for accurate sizing.",
  },
  {
    q: "What pipes can be inspected with guided wave testing?",
    a: "GWT is suitable for most metallic pipes: carbon steel, stainless steel, alloy steels, and duplex grades. Common applications include: process piping in refineries and chemical plants (especially insulated pipe), buried pipelines at road/rail crossings, rack piping in elevated pipe racks, offshore risers and subsea risers, water injection lines, gas distribution pipelines, and firewater mains. GWT is less effective on pipes with heavy viscoelastic coatings (internal or external), pipes with multiple elbows in close succession, and pipes smaller than approximately 2 inches nominal diameter.",
  },
  {
    q: "What ASTM standard covers guided wave testing?",
    a: "ASTM E2775 is the primary standard governing guided wave testing of piping systems. It is titled 'Standard Practice for Guided Wave Testing of Above Ground Piping' and covers equipment requirements, technique qualification, calibration, procedure requirements, data interpretation, and reporting. API 570 Appendix H provides additional guidance on GWT as part of piping inspection programs in the oil and gas industry. DNVGL-RP-0475 covers GWT for offshore applications. For procedure development, a written GWT procedure should reference the applicable standard and be approved by a qualified GWT Level II or III technician.",
  },
  {
    q: "Can GWT replace conventional UT for pipe inspection?",
    a: "No — GWT cannot replace conventional UT. GWT is a screening tool, not a sizing tool. It can identify the location of features (welds, corrosion patches, pitting areas) along a long pipe run, but it cannot measure wall thickness or size defects to the accuracy required for fitness-for-service assessments under API 579, API 510, or API 570. The industry-standard approach is a two-stage process: (1) GWT screening to identify suspect areas along the full pipe length; (2) Conventional UT or PAUT at the GWT-flagged locations for accurate wall thickness measurement and defect characterisation. Both methods complement each other and together provide a comprehensive, cost-effective pipe inspection program.",
  },
  {
    q: "What certification is needed for guided wave testing?",
    a: "GWT technicians are typically certified to one of the following schemes: ASNT SNT-TC-1A Level II in Ultrasonic Testing with a GWT/LRUT endorsement (USA); PCN Category LRUT (UK and internationally, via the British Institute of Non-Destructive Testing); CSWIP-LRUT (UK Welding Institute certification); or ISO 9712 UT Level II with GWT endorsement. Additionally, equipment vendors such as Guided Ultrasonics Ltd (Teletest) and Olympus offer equipment-specific training and authorisation programmes. Most operating company specifications require Level II certified GWT technicians working under the supervision of a Level III.",
  },
];

const applications = [
  {
    title: "CUI Screening",
    detail: "Detect corrosion under insulation without full strip-out. A small window cut in the insulation gives access for the collar. GWT screens the full insulated run and identifies suspect areas for targeted insulation removal and conventional UT sizing — reducing inspection cost by 60–80%.",
    icon: Shield,
  },
  {
    title: "Buried Pipeline Screening",
    detail: "Screen road crossings, river crossings, and buried pipeline sections without excavation. GWT accesses the pipe at an exposed section (valve box, above-grade riser) and propagates waves through the buried section — detecting corrosion or wall loss that would otherwise require costly dig-up.",
    icon: Target,
  },
  {
    title: "Rack Piping",
    detail: "Inspect elevated pipe racks from ground level without scaffolding. The collar is installed at an accessible location on the rack; guided waves screen the full rack run from a single position. Particularly useful for detecting rack-support interface corrosion where pipe contacts the rack structure.",
    icon: Zap,
  },
  {
    title: "Offshore Risers",
    detail: "Screen splash zone and submerged riser sections where direct access is costly. GWT from the accessible topside section propagates waves downward through the riser, detecting corrosion in the difficult-to-access splash zone and below waterline — reducing or eliminating costly diving or ROV inspections.",
    icon: Radio,
  },
  {
    title: "Storage Tank Annular Plates",
    detail: "Detect underside corrosion of tank annular plates from the tank rim without emptying the tank. GWT propagates along the annular plate, identifying areas of corrosion or pitting on the underside that would otherwise only be visible during a full tank entry inspection to API 653.",
    icon: CheckCircle,
  },
];

const standards = [
  {
    code: "ASTM E2775",
    scope: "Standard Practice for Guided Wave Testing of Above Ground Piping — primary GWT standard",
  },
  {
    code: "API 570 Appendix H",
    scope: "Guided wave testing of piping systems in oil & gas inspection programs",
  },
  {
    code: "DNVGL-RP-0475",
    scope: "Guided wave testing for offshore structures and risers",
  },
  {
    code: "ASME Section V Article 4",
    scope: "UT supplemental technique requirements applicable to GWT procedures",
  },
];

const limitations = [
  "Screening tool only — cannot accurately size defects or measure wall thickness precisely",
  "Cannot quantify corrosion depth without follow-up conventional UT or PAUT",
  "Signal attenuation reduced by heavy viscoelastic coatings (bitumen, rubber linings) — may limit range to 5–10m",
  "Liquid-filled pipe (especially viscous fluids) attenuates signal more than gas-filled pipe",
  "Dead zone at collar location — approximately 2–3 pipe diameters either side of collar cannot be inspected",
  "Cannot inspect through certain fittings: tees, reducers, and valves limit wave propagation and range",
  "Requires interpretation by qualified Level II/III technician — signal interpretation is more complex than conventional UT",
  "Not suitable for very small bore pipe (below ~2 inch NPS) or heavily corroded pipe where wall loss exceeds ~30%",
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

export default function GuidedWaveTesting() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Guided Wave Testing (GWT/LRUT): Complete Guide — Long-Range Pipe Screening, CUI Detection & Standards",
        "description": "Comprehensive guide to guided wave testing: how GWT/LRUT works, applications for CUI and buried pipe inspection, ASTM E2775 and API 570 standards, limitations, and certification requirements.",
        "author": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
        "publisher": {
          "@type": "Organization",
          "name": "Atlantis NDT",
          "logo": { "@type": "ImageObject", "url": "https://atlantisndt.com/favicon-96x96.jpg" },
        },
        "datePublished": "2026-02-25",
        "dateModified": "2026-02-25",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/guided-wave-testing" },
        "keywords": "guided wave testing, GWT NDT, long range ultrasonic testing, LRUT, guided wave pipe screening, CUI screening, corrosion under insulation, ASTM E2775, API 570 guided wave, long range UT pipe inspection",
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
        title="Guided Wave Testing (GWT/LRUT) | Long-Range Pipe Screening | CUI Detection | Atlantis NDT"
        description="Complete guide to guided wave testing: long-range ultrasonic pipe screening, CUI detection, buried pipe inspection. ASTM E2775, API 570. LRUT consulting from Atlantis NDT Level III experts."
        keywords="guided wave testing, GWT NDT, long range ultrasonic testing, LRUT, guided wave pipe screening, CUI screening, corrosion under insulation, ASTM E2775, API 570 guided wave, long range UT pipe inspection, guided wave NDT, LRUT pipe, GWT LRUT, guided wave testing pipe, long range ultrasonic, buried pipe inspection NDT, insulated pipe inspection"
        structuredData={structuredData}
        canonical="https://atlantisndt.com/guided-wave-testing"
      />
      <Breadcrumbs />

      {/* Hero */}
      <section className="bg-[#004aad] text-white py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-blue-200 text-sm font-medium mb-3 uppercase tracking-wider">
              NDT Method Guide · Updated February 2026
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Guided Wave Testing (GWT/LRUT) | Long-Range Pipe Screening | CUI Detection
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Screen hundreds of metres of pipe from a single test point. The primary NDT method for corrosion under insulation (CUI) screening, buried pipeline assessment, and rack piping — without full strip-out or excavation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-white text-[#004aad] font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                Get GWT Consulting
              </Link>
              <Link
                to="/ultrasonic-testing"
                className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                UT Technical Guide
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
              { label: "Inspection Range", value: "Up to 100m" },
              { label: "Access Points", value: "Single Test Point" },
              { label: "Primary Use", value: "CUI Screening" },
              { label: "Certification", value: "Level II–III LRUT" },
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
            {["How It Works", "Applications", "Standards", "Limitations", "GWT vs UT", "Certification", "FAQ"].map(
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

          {/* Introduction */}
          <section>
            <h2 id="how-it-works" className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              What Is Guided Wave Testing and How Does It Work?
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              <strong>Guided Wave Testing (GWT)</strong>, also known as <strong>Long-Range Ultrasonic Testing (LRUT)</strong>, is a non-destructive testing method that uses low-frequency ultrasonic waves propagating along the length of a pipe wall to screen for metal loss and structural anomalies over long distances — from a single access point. Unlike conventional ultrasonic testing, which examines one localised spot at a time, GWT can screen 20–100 metres of pipe in each direction from a single transducer collar position, making it one of the most cost-effective pipe screening tools available.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              The GWT system consists of a transducer ring — a collar of piezoelectric or magnetostrictive transducer elements clamped around the outside of the pipe. These elements generate torsional (T-mode) or longitudinal (L-mode) guided waves at frequencies typically between 10 and 100 kHz. The waves propagate bidirectionally along the pipe wall, reflecting from any feature that causes a change in the pipe's cross-sectional area — welds, flanges, corrosion patches, pitting, or cracks.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              Signal interpretation is fundamental to GWT. Symmetric reflections — typically from welds and flanges — appear as balanced signals. Asymmetric reflections — indicating localised metal loss such as corrosion or cracking — produce characteristic non-symmetric signal responses that allow a qualified technician to identify their location along the pipe. The data is displayed as an A-scan with a distance axis (similar to a radar trace), showing signal amplitude versus distance from the collar.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              Crucially, GWT is a <strong>screening tool, not a sizing tool</strong>. It identifies areas of the pipe that warrant further investigation — but cannot accurately quantify wall thickness loss or size defects. When GWT identifies a suspect area, conventional UT or PAUT is used at that specific location for accurate characterisation. This two-stage approach — GWT screen, then UT assess — is far more cost-effective than manually scanning the full pipe length with conventional UT, particularly for long insulated or buried pipelines where access is difficult.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#004aad] rounded-r-xl p-6">
              <h3 className="font-bold text-[#004aad] mb-3">Key GWT Physical Principles</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Wave propagation:</strong> Low-frequency guided waves travel along the pipe wall, not through the wall thickness. This enables long-range screening from a single test point.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Torsional vs longitudinal modes:</strong> Torsional T(0,1) mode is less sensitive to liquid loading and preferred for most pipe screening. Longitudinal L(0,2) mode is used in some specialist applications.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Symmetric vs asymmetric signals:</strong> Welds and flanges produce symmetric (balanced) reflections. Corrosion and defects produce asymmetric reflections — the key to defect identification.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Frequency selection:</strong> Lower frequency gives greater range but lower sensitivity to small defects. Higher frequency improves sensitivity but reduces range. Optimal frequency is selected based on pipe size and inspection objectives.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* How GWT Works — Step by Step */}
          <section>
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              GWT Inspection Process — Step by Step
            </h2>
            <div className="space-y-4">
              {[
                "Site preparation: identify collar location — ideally at an insulation window or accessible section. Mark test point. Clean pipe surface at collar location for good acoustic coupling.",
                "Collar installation: clamp transducer ring around pipe circumference. Ensure all elements are in uniform contact. Set transducer frequency appropriate for pipe diameter and expected range.",
                "System calibration: verify signal quality using known weld reflections. Establish noise floor and signal-to-noise ratio. Set alerting thresholds based on ASTM E2775 requirements.",
                "Data acquisition: transmit guided waves bidirectionally. Record full waveform response from collar to the limit of inspection range in each direction. Identify all reflectors (welds, supports, flanges).",
                "Signal interpretation: qualified Level II technician analyses A-scan trace. Classifies each reflector as symmetric (structural feature) or asymmetric (potential defect). Flags anomalous asymmetric reflections.",
                "Range assessment: record maximum inspection range achieved based on signal-to-noise at pipe ends or at known reflectors at maximum distance. Document any zones of reduced sensitivity.",
                "Follow-up recommendation: all flagged anomalies are assigned a priority for follow-up conventional UT inspection. Provide location (distance from collar ± direction) for each flag.",
                "Reporting: written report per ASTM E2775 / API 570 Appendix H — including collar location, inspection range, signal quality, all reflector classifications, and follow-up recommendations.",
              ].map((step, i) => (
                <div key={i} className="flex gap-4 bg-white rounded-xl p-5 shadow border border-slate-100">
                  <div className="w-8 h-8 bg-[#004aad] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-slate-700 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Applications */}
          <section>
            <h2 id="applications" className="text-3xl font-bold mb-6" style={{ color: "#004aad" }}>
              Guided Wave Testing Applications
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {applications.map((app, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 shadow border border-slate-100 hover:border-[#004aad] transition"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <app.icon className="w-6 h-6 text-[#004aad]" />
                    <h3 className="text-lg font-bold" style={{ color: "#004aad" }}>
                      {app.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{app.detail}</p>
                </div>
              ))}
            </div>

            {/* CUI Deep Dive */}
            <div className="mt-8 bg-slate-100 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#004aad" }}>
                Deep Dive: CUI Screening with Guided Wave Testing
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Corrosion under insulation (CUI) is one of the most costly and difficult-to-detect degradation mechanisms in oil and gas, petrochemical, and power generation facilities. Traditional CUI inspection requires removing insulation across the full length of suspect pipe runs — an enormously time-consuming and expensive process. Guided wave testing has transformed CUI inspection economics.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                With GWT, a single insulation window approximately 200–300mm wide is cut at the collar position. The guided waves then propagate through the intact insulation and the pipe wall, detecting any corrosion or wall loss along the insulated run. GWT identifies which sections of the insulated pipe have potential issues — allowing insulation removal to be targeted only at those specific areas for confirmation by conventional UT.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center justify-between gap-4 mt-4">
                <p className="text-blue-800 text-sm font-medium">
                  CUI detection also used in conjunction with Pulsed Eddy Current (PEC) — see our complete ECT guide for comparison.
                </p>
                <Link
                  to="/eddy-current-testing"
                  className="flex-shrink-0 bg-[#004aad] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
                >
                  ECT / PEC Guide →
                </Link>
              </div>
            </div>
          </section>

          {/* Governing Standards */}
          <section>
            <h2 id="standards" className="text-3xl font-bold mb-6" style={{ color: "#004aad" }}>
              Governing Standards for Guided Wave Testing
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              GWT procedures must reference applicable standards for equipment qualification, technique requirements, and reporting. The following standards govern guided wave testing in the oil & gas and industrial inspection sectors:
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {standards.map((s, i) => (
                <div key={i} className="flex gap-3 bg-white rounded-xl p-5 shadow border border-slate-100">
                  <div className="w-2 min-h-full bg-[#004aad] rounded-full flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#004aad] mb-1">{s.code}</p>
                    <p className="text-slate-600 text-sm">{s.scope}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-amber-800 text-sm">
                  <strong>Procedure requirement:</strong> All GWT inspections performed to API 570 or ASME requirements must be conducted per a written, Level III-approved procedure referencing the applicable standard. Procedure qualification should include documented sensitivity demonstrations on reference standards.
                </p>
              </div>
            </div>
          </section>

          {/* Limitations */}
          <section>
            <h2 id="limitations" className="text-3xl font-bold mb-6" style={{ color: "#004aad" }}>
              GWT Limitations — What Guided Wave Testing Cannot Do
            </h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              Understanding GWT limitations is critical for using it correctly within an inspection program. Misapplication of GWT — treating it as a sizing or confirmation tool — can lead to missed defects or incorrect fitness-for-service decisions.
            </p>
            <div className="space-y-3">
              {limitations.map((lim, i) => (
                <div key={i} className="flex gap-3 bg-white rounded-xl p-4 shadow border border-slate-100">
                  <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                    !
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed">{lim}</p>
                </div>
              ))}
            </div>
          </section>

          {/* GWT vs UT vs RT */}
          <section className="bg-white rounded-2xl p-8 shadow border border-slate-100">
            <h2 id="gwt-vs-ut" className="text-2xl font-bold mb-5" style={{ color: "#004aad" }}>
              GWT vs Conventional UT vs Radiographic Testing
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead className="bg-[#004aad] text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold">Characteristic</th>
                    <th className="text-left p-4 font-semibold">GWT / LRUT</th>
                    <th className="text-left p-4 font-semibold">Conventional UT</th>
                    <th className="text-left p-4 font-semibold">RT (X-Ray/Gamma)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      char: "Primary purpose",
                      gwt: "Long-range screening",
                      ut: "Accurate sizing & measurement",
                      rt: "Volumetric imaging at specific locations",
                    },
                    {
                      char: "Coverage per test point",
                      gwt: "20–100m each direction",
                      ut: "One spot at a time",
                      rt: "One exposure per location",
                    },
                    {
                      char: "Defect sizing accuracy",
                      gwt: "Poor (screening only)",
                      ut: "Excellent (0.1mm resolution)",
                      rt: "Good (volumetric)",
                    },
                    {
                      char: "Through insulation",
                      gwt: "Yes (pipe screened through insulation)",
                      ut: "No (insulation must be removed)",
                      rt: "Limited (removes insulation or uses gamma)",
                    },
                    {
                      char: "CUI screening",
                      gwt: "Primary tool",
                      ut: "Follow-up tool after GWT flag",
                      rt: "Rarely used for CUI",
                    },
                    {
                      char: "Radiation hazard",
                      gwt: "None",
                      ut: "None",
                      rt: "Yes — exclusion zone required",
                    },
                    {
                      char: "Typical application",
                      gwt: "Insulated/buried pipe screening",
                      ut: "Corrosion mapping, weld sizing",
                      rt: "Weld volumetric inspection",
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-semibold text-slate-700">{row.char}</td>
                      <td className="p-4 text-slate-700">{row.gwt}</td>
                      <td className="p-4 text-slate-700">{row.ut}</td>
                      <td className="p-4 text-slate-600">{row.rt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-5 flex flex-wrap gap-4">
              <Link
                to="/ultrasonic-testing"
                className="bg-[#004aad] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
              >
                Full UT Guide →
              </Link>
              <Link
                to="/corrosion-mapping"
                className="border border-[#004aad] text-[#004aad] px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-50 transition"
              >
                Corrosion Mapping Guide →
              </Link>
            </div>
          </section>

          {/* Certification */}
          <section className="bg-white rounded-2xl p-8 shadow border border-slate-100">
            <h2 id="certification" className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              GWT Certification & Qualification Requirements
            </h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              GWT is a specialised technique requiring dedicated training and qualification beyond general UT certification. The following certification schemes are recognised in the industry:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  scheme: "ASNT SNT-TC-1A",
                  detail:
                    "UT Level II with GWT/LRUT endorsement. USA-based qualification scheme. Written practice developed by employer must specify GWT as a sub-method with specific experience and training hours.",
                  region: "USA / Global",
                },
                {
                  scheme: "PCN Cat LRUT",
                  detail:
                    "PCN (Personnel Certification in Non-Destructive Testing) Long Range Ultrasonic Testing category. UK-based, internationally recognised. Level 1 and Level 2 qualification.",
                  region: "UK / International",
                },
                {
                  scheme: "CSWIP-LRUT",
                  detail:
                    "TWI Certification scheme for Long Range Ultrasonic Testing. Widely recognised in offshore and oil & gas sectors globally. Requires equipment-specific training from approved vendors.",
                  region: "UK / Offshore",
                },
                {
                  scheme: "ISO 9712 UT Level II (GWT endorsement)",
                  detail:
                    "International standard for NDT personnel qualification. GWT qualified under UT method with specific LRUT endorsement. Recognised globally including Europe, Middle East, Asia-Pacific.",
                  region: "International",
                },
              ].map((cert, i) => (
                <div key={i} className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                  <div className="text-[#004aad] font-bold mb-1">{cert.scheme}</div>
                  <div className="text-xs text-blue-600 mb-2">{cert.region}</div>
                  <p className="text-slate-700 text-sm">{cert.detail}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-700 mb-4">
              Atlantis NDT provides ASNT-aligned GWT/LRUT training and certification support globally — including Houston, Dubai, India, Singapore, and online formats. Our Level III UT experts develop GWT written practices and qualification procedures compliant with ASTM E2775 and API 570 Appendix H.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/asnt-certification"
                className="bg-[#004aad] text-white px-5 py-3 rounded-lg font-semibold hover:bg-[#003580] transition"
              >
                ASNT Certification Info
              </Link>
              <Link
                to="/consulting"
                className="border border-[#004aad] text-[#004aad] px-5 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                Level III GWT Consulting
              </Link>
            </div>
          </section>

          {/* Internal Links */}
          <section>
            <h2 className="text-2xl font-bold mb-5" style={{ color: "#004aad" }}>
              Related NDT Methods & Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { href: "/ultrasonic-testing", label: "Ultrasonic Testing (UT) — Complete Guide" },
                { href: "/corrosion-mapping", label: "Corrosion Mapping — UT Thickness Mapping & C-Scan" },
                { href: "/eddy-current-tube-inspection", label: "Eddy Current Tube Inspection (Heat Exchangers)" },
                { href: "/ndt-for-oil-gas", label: "NDT for Oil & Gas — Refinery & Pipeline Inspection" },
                { href: "/asnt-certification", label: "ASNT Certification — Level I, II, III" },
                { href: "/consulting/ndt-consulting-houston", label: "GWT Consulting — Houston" },
                { href: "/consulting/ndt-consulting-dubai", label: "GWT Consulting — Dubai" },
                { href: "/phased-array-ut", label: "Phased Array UT (PAUT) Guide" },
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
              Guided Wave Testing — Frequently Asked Questions
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
              Plan a GWT / LRUT Inspection Program?
            </h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Atlantis NDT provides ASNT Level III GWT consulting services globally — procedure development compliant with ASTM E2775 and API 570, personnel qualification review, and inspection program design for CUI screening, buried pipe, and offshore riser programs. Contact our team to discuss your specific application.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-white text-[#004aad] font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                Contact GWT Experts
              </Link>
              <Link
                to="/consulting/ndt-consulting-houston"
                className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                GWT Consulting — Houston
              </Link>
              <Link
                to="/consulting/ndt-consulting-dubai"
                className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                GWT Consulting — Dubai
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
                ["#how-it-works", "How GWT Works"],
                ["#applications", "Applications"],
                ["#standards", "Governing Standards"],
                ["#limitations", "GWT Limitations"],
                ["#gwt-vs-ut", "GWT vs UT vs RT"],
                ["#certification", "Certification"],
                ["#faq", "FAQ (8 questions)"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="hover:text-[#004aad] transition flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#004aad] rounded-full flex-shrink-0" />
                    {label}
                  </a>
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
                ["/ultrasonic-testing", "Ultrasonic Testing (UT)"],
                ["/corrosion-mapping", "Corrosion Mapping"],
                ["/eddy-current-tube-inspection", "ECT Tube Inspection"],
                ["/radiographic-testing", "Radiographic Testing (RT)"],
                ["/ndt-for-oil-gas", "NDT for Oil & Gas"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link to={href} className="text-[#004aad] hover:underline">
                    → {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-amber-50 p-6 rounded-xl shadow border border-amber-200">
            <h3 className="text-lg font-bold mb-3 text-amber-800">GWT Standards</h3>
            <ul className="space-y-2 text-sm text-amber-800">
              {[
                "ASTM E2775",
                "API 570 Appendix H",
                "DNVGL-RP-0475",
                "ASME Section V Art 4",
              ].map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-600 rounded-full flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#004aad] p-6 rounded-xl shadow text-white">
            <h3 className="text-lg font-bold mb-3">Need GWT Consulting?</h3>
            <p className="text-blue-100 text-sm mb-4">
              Our ASNT Level III engineers develop GWT procedures, qualify personnel, and design CUI screening programs for refineries, pipelines, and offshore assets.
            </p>
            <Link
              to="/contact"
              className="block bg-white text-[#004aad] text-center font-bold px-4 py-3 rounded-lg hover:bg-blue-50 transition text-sm"
            >
              Contact Our GWT Experts
            </Link>
          </div>
        </aside>
      </div>

      <ContactDetails />
    </div>
  );
}
