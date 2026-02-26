import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { CheckCircle, ChevronDown, ChevronUp, AlertTriangle, Layers, BarChart, Cpu, Activity } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "What is corrosion mapping in NDT?",
    a: "Corrosion mapping is a non-destructive testing technique that systematically measures wall thickness across an area of a component — such as a pressure vessel shell, piping section, or tank floor — to create a spatial map of metal loss. Rather than measuring thickness at a single point, corrosion mapping covers an entire surface area, identifying zones of general corrosion, pitting, and wall thinning. The output is a colour-coded C-scan (plan-view thickness map) showing where metal loss has occurred, its extent, and its severity. Corrosion mapping is used for fitness-for-service assessment, retirement life calculations, and inspection planning under API 510, API 570, and API 653.",
  },
  {
    q: "How is a C-scan corrosion map created?",
    a: "A C-scan corrosion map is created by recording ultrasonic thickness measurements at defined grid positions across the inspection area, with each measurement position encoded with its X-Y coordinate. The data is then processed by analysis software that assigns a colour to each thickness value — typically red or orange for minimum wall areas, green for nominal wall, and blue for thicker-than-nominal zones. The result is a plan-view colour map showing the spatial distribution of wall thickness across the entire inspected area. For automated scanning systems, measurements are recorded continuously as the scanner moves, producing a high-density C-scan with measurements every 1–5mm. For manual surveys, technicians record thickness at a defined grid spacing (typically 25mm or 50mm).",
  },
  {
    q: "What is the difference between manual UT and automated corrosion mapping?",
    a: "Manual UT corrosion mapping uses a handheld thickness gauge with a technician recording measurements at a predefined grid — typically 25–50mm spacing — across the inspection area. It is cost-effective for small areas and can access complex geometries, but is time-consuming for large areas and operator-dependent. Automated UT scanning uses a motorised scanner with an encoder that tracks position precisely. The scanner moves across the surface while a UT transducer records thousands of measurements per second, producing a high-resolution C-scan with 1–5mm grid spacing. Automated scanning is faster for large flat surfaces (tank shells, vessel heads) and provides more consistent data quality, but requires access for the scanner and is less flexible on complex shapes. PAUT corrosion mapping adds multiple simultaneous measurement channels for even higher speed coverage.",
  },
  {
    q: "How accurate is ultrasonic corrosion mapping?",
    a: "Ultrasonic corrosion mapping accuracy depends on the method used, surface condition, and material. For standard pulse-echo UT with a well-calibrated system and clean surface, thickness measurement accuracy is typically ±0.1–0.25mm for wall thicknesses up to 50mm. Automated scanners with encoded position achieve positional accuracy of ±0.5–1mm, ensuring the C-scan represents the true spatial distribution of wall loss. PAUT systems can achieve similar or better accuracy with the advantage of simultaneous multi-element coverage. Key factors affecting accuracy include: proper calibration on the same material grade and temperature, adequate coupling, surface cleanliness, and correct velocity calibration. Paint or epoxy coatings require either removal or use of dual-element (pitch-catch) transducers that can compensate for coating thickness.",
  },
  {
    q: "What API codes require corrosion mapping?",
    a: "Several API inspection codes reference corrosion mapping or systematic thickness surveys as a required or recommended practice: API 510 (Pressure Vessel Inspection Code) requires periodic thickness surveys of vessel shells and heads with records of minimum wall locations; API 570 (Piping Inspection Code) requires thickness measurements at CMLs (Condition Monitoring Locations) and grid surveys at injection points, deadlegs, and CUI-suspect areas; API 653 (Aboveground Storage Tanks) requires shell thickness surveys at each inspection interval and tank floor inspection using UT or MFL scanning; API 579 (Fitness for Service) requires thickness mapping data for metal loss assessments using Part 4 (General Metal Loss) or Part 5 (Local Metal Loss) procedures; API 574 recommends corrosion mapping practices for piping inspection programs.",
  },
  {
    q: "How is remaining life calculated from corrosion mapping data?",
    a: "Remaining life calculation from corrosion mapping follows the API 510/570/653 methodology: (1) determine current minimum measured wall thickness (t_measured); (2) compare to required minimum wall thickness (t_required) calculated from design pressure, material allowable stress, and ASME B31.3 or API 650/653 formulas; (3) calculate corrosion rate = (t_previous - t_current) / time between inspections; (4) calculate remaining life = (t_current - t_required) / corrosion rate; (5) set next inspection date at half the remaining life or the code-required maximum interval, whichever is shorter. For fitness-for-service under API 579, more sophisticated Part 4 and Part 5 metal loss assessments using thickness profile data allow justification of continued operation beyond simple retirement criteria.",
  },
  {
    q: "Can corrosion mapping detect pitting?",
    a: "Yes — corrosion mapping can detect pitting, but detection capability depends on pit size relative to the transducer beam diameter and scan resolution. Automated UT scanners with 5–10mm transducers and 1–5mm scan resolution can reliably detect pitting with lateral dimensions greater than approximately 5–10mm. Smaller pits (pinhole pitting) may be missed if the pit is smaller than the transducer beam width. PAUT corrosion mapping with tightly focused beams improves small-pit detection capability. For critical pitting assessment, Phased Array UT provides superior resolution versus single-element UT scanning. The C-scan output clearly distinguishes between general corrosion (broad areas of reduced thickness) and pitting (discrete, localised thickness minima in an otherwise nominal-wall background).",
  },
  {
    q: "What is the difference between corrosion mapping and MFL (magnetic flux leakage)?",
    a: "Corrosion mapping (UT-based) and Magnetic Flux Leakage (MFL) are both used for tank floor inspection, but operate on different physical principles and have different strengths. UT corrosion mapping uses ultrasound to directly measure wall thickness at each scan position — providing quantitative thickness data at every measurement point. MFL uses a strong magnetic field to magnetise the steel; areas of corrosion or wall loss cause flux leakage that is detected by Hall-effect sensors. MFL is faster for large floor areas and can detect both top-side and bottom-side pitting, but provides a qualitative indication of metal loss rather than a precise thickness measurement. API 653 recommends MFL for initial floor screening and UT for follow-up quantitative assessment of MFL-flagged areas. Most comprehensive tank floor programs use MFL for rapid coverage and UT corrosion mapping to quantify the areas of concern.",
  },
];

const methods = [
  {
    name: "Manual UT Grid Scanning",
    detail: "Point-by-point thickness gauging using a handheld UT gauge and contact transducer. Measurements recorded at defined grid positions (typically 25–50mm spacing). Cost-effective for small areas, complex geometries, and areas inaccessible to automated scanners. Results entered into software for C-scan generation.",
    icon: Activity,
    pros: "Flexible access, low equipment cost, suitable for complex geometries",
    cons: "Slow for large areas, operator-dependent, lower spatial resolution",
  },
  {
    name: "Automated UT Scanner (Crawler)",
    detail: "Motorised magnetic crawler or encoded scanning arm with UT transducer. Moves systematically across vessel shell, tank floor, or large pipe section. Records thousands of thickness measurements with precise positional encoding. Produces high-resolution C-scan output. Preferred for large flat areas requiring comprehensive coverage.",
    icon: Cpu,
    pros: "High speed for large areas, consistent quality, high-resolution C-scan",
    cons: "Requires relatively flat surface, setup time, limited complex geometry access",
  },
  {
    name: "PAUT Corrosion Mapping",
    detail: "Phased Array Ultrasonic Testing corrosion mapping uses a linear array transducer with multiple elements firing simultaneously, scanning a wider swath per pass. Encoded to track position. Produces high-density C-scan data. Significantly faster than single-element automated UT for equivalent resolution. Suitable for pressure vessel shells, piping, and structural members.",
    icon: Layers,
    pros: "Fastest high-resolution coverage, multi-element simultaneous, encoded C-scan",
    cons: "Higher equipment cost, more complex calibration, requires qualified PAUT technician",
  },
  {
    name: "Acoustic Pulse Reflectometry",
    detail: "Internal pipe inspection technique using acoustic pulses propagated along the inside of tubes or pipes. No contact with the pipe exterior needed. Detects internal diameter variations caused by corrosion or deposits. Used for small-bore piping, heat exchanger tubes, and pipes where external access is not possible.",
    icon: BarChart,
    pros: "No external access required, suitable for small bore, rapid screening",
    cons: "Qualitative rather than quantitative, sensitive to bends and fittings",
  },
];

const applications = [
  {
    title: "Pressure Vessels (API 510)",
    detail: "Shell and head corrosion surveys, nozzle area mapping, and support saddle inspection. Corrosion mapping provides minimum wall data for fitness-for-service assessment and retirement date calculation per API 510. Critical for vessels approaching retirement thickness or with history of corrosion.",
    link: "/api-510-certification",
  },
  {
    title: "Piping Systems (API 570)",
    detail: "CUI area mapping after insulation removal, injection point grid surveys, deadleg inspection, and buried/submerged piping assessment. API 570 requires systematic thickness surveys at CMLs with documented minimum wall records. Corrosion mapping at injection points is mandatory in most operating company inspection programs.",
    link: "/api-570-certification",
  },
  {
    title: "Storage Tanks (API 653)",
    detail: "Shell course corrosion mapping, tank floor UT scanning (in combination with MFL for initial screen), and annular plate inspection. API 653 specifies minimum shell thickness requirements (Table 4-1) and requires documented thickness survey records at each inspection interval.",
    link: "/api-653-tank-inspection-guide",
  },
  {
    title: "Pipelines",
    detail: "Girth weld HAZ corrosion mapping, external corrosion surveys at road crossings (after excavation), and inspection of pipeline sections after hydrostatic test failures. Provides wall thickness data for fitness-for-service assessment per API 579 and remaining life calculations per ASME B31G or modified B31G.",
    link: "/ndt-for-oil-gas",
  },
  {
    title: "Offshore Structures",
    detail: "Splash zone thickness mapping on platform legs and risers, structural member corrosion surveys, and hull thickness mapping. Offshore corrosion mapping programs typically follow DNV or API guidelines and provide data for structural integrity assessments under extreme loading conditions.",
    link: "/ndt-for-oil-gas",
  },
];

const codes = [
  { code: "API 510", scope: "Pressure vessel inspection — minimum thickness requirements and remaining life calculations for vessels" },
  { code: "API 570", scope: "Piping inspection — retirement thickness, CML requirements, injection point inspection grid surveys" },
  { code: "API 653", scope: "Aboveground storage tanks — shell minimum thickness per Table 4-1, floor scanning requirements" },
  { code: "API 579", scope: "Fitness for service — metal loss assessment using Part 4 (general) and Part 5 (local) procedures" },
  { code: "ASME Section V Article 4", scope: "UT thickness measurement technique requirements for code-compliant inspections" },
  { code: "API 574", scope: "Inspection practices for piping — recommended corrosion mapping methods and grid spacing guidance" },
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

export default function CorrosionMapping() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Corrosion Mapping | Ultrasonic Thickness Mapping & C-Scan Inspection | API 510/570/653",
        "description": "Comprehensive guide to corrosion mapping: PAUT C-scan, automated UT scanning, manual thickness surveys. API 510/570/653 reporting, fitness for service, remaining life calculations.",
        "author": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
        "publisher": {
          "@type": "Organization",
          "name": "Atlantis NDT",
          "logo": { "@type": "ImageObject", "url": "https://atlantisndt.com/favicon-96x96.jpg" },
        },
        "datePublished": "2026-02-25",
        "dateModified": "2026-02-25",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/corrosion-mapping" },
        "keywords": "corrosion mapping, UT corrosion mapping, ultrasonic thickness mapping, C-scan corrosion mapping, PAUT corrosion mapping, tank floor inspection, pipeline wall thickness mapping, API 510 corrosion, API 570 corrosion, API 653 thickness survey",
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
        title="Corrosion Mapping | UT Thickness Mapping & C-Scan | API 510/570/653 | Atlantis NDT"
        description="Expert corrosion mapping services: PAUT C-scan, automated UT scanning, manual thickness surveys. API 510/570/653 reporting, fitness for service assessment, remaining life calculations."
        keywords="corrosion mapping, UT corrosion mapping, ultrasonic thickness mapping, C-scan corrosion mapping, PAUT corrosion mapping, tank floor inspection corrosion, pipeline wall thickness mapping, API 510 corrosion mapping, API 570 thickness survey, API 653 tank inspection, fitness for service metal loss, remaining life calculation, corrosion mapping NDT, automated UT scanning, encoded UT scan"
        structuredData={structuredData}
        canonical="https://atlantisndt.com/corrosion-mapping"
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
              Corrosion Mapping | Ultrasonic Thickness Mapping & C-Scan Inspection
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Quantify metal loss across large areas with PAUT, manual UT, and automated scanner solutions. API 510/570/653 compliant reporting, fitness for service assessment, and remaining life calculations for pressure vessels, tanks, and pipelines.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-white text-[#004aad] font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                Get Corrosion Mapping Quote
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
              { label: "Coverage", value: "Full Area" },
              { label: "Resolution", value: "0.1mm Accuracy" },
              { label: "Methods", value: "PAUT & Manual UT" },
              { label: "Reporting", value: "API 510/570/653" },
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
            {["Methods", "What a Map Shows", "Applications", "Codes", "Remaining Life", "FAQ"].map((s) => (
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
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              What Is Corrosion Mapping?
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              <strong>Corrosion mapping</strong> is a systematic non-destructive testing methodology that measures wall thickness at a large number of closely spaced positions across a component's surface, creating a spatial representation — or "map" — of metal loss. Rather than spot-checking thickness at a few discrete points, corrosion mapping provides comprehensive coverage of an entire area, identifying zones of general corrosion, localised pitting, and wall thinning that might be missed by point-measurement surveys.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              The primary output of a corrosion mapping survey is a <strong>C-scan</strong> — a colour-coded plan-view image where each colour represents a thickness value. Red or orange zones indicate minimum wall areas; green zones show nominal or acceptable thickness; blue areas indicate thicker-than-nominal regions. This visual representation allows engineers and inspectors to immediately identify the extent and pattern of corrosion — whether it is general (broad, uniform), pitting (localised minima), or grooved (linear, often flow-induced).
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              Corrosion mapping data underpins critical integrity decisions under the API inspection codes. API 510 (pressure vessels), API 570 (piping), and API 653 (storage tanks) all require periodic thickness surveys with documented minimum wall records. The data feeds directly into fitness-for-service assessment per API 579 — allowing engineers to calculate corrosion rate, remaining life, and next inspection date based on actual measured metal loss rather than conservative assumptions.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              Methods range from manual point-by-point UT gauging — cost-effective for small areas — to automated motorised scanners producing high-resolution C-scans covering square metres per hour. Phased Array UT (PAUT) corrosion mapping represents the current state of the art, combining multiple simultaneous measurement channels with precise encoding for the fastest, highest-resolution coverage available. Atlantis NDT provides all corrosion mapping methods, matched to the specific asset type, area size, and code requirements of each inspection.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#004aad] rounded-r-xl p-6">
              <h3 className="font-bold text-[#004aad] mb-3">Why Corrosion Mapping Matters</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Fitness for service:</strong> API 579 metal loss assessments require actual thickness map data — not just a minimum point measurement — to accurately assess structural adequacy.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Remaining life calculation:</strong> Accurate corrosion rate requires two data sets at two inspection dates. Corrosion mapping provides the spatial records needed to calculate rate at the worst-case location.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Code compliance:</strong> API 510, 570, and 653 all specify minimum thickness requirements. Corrosion mapping demonstrates compliance and supports inspection interval decisions.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Corrosion pattern identification:</strong> C-scan imagery reveals whether corrosion is general (uniform), pitting, step-wise, or flow-accelerated — guiding the root cause investigation and mitigation strategy.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Methods */}
          <section>
            <h2 id="methods" className="text-3xl font-bold mb-6" style={{ color: "#004aad" }}>
              Corrosion Mapping Methods
            </h2>
            <div className="space-y-5">
              {methods.map((m, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow border border-slate-100">
                  <div className="flex items-center gap-3 mb-3">
                    <m.icon className="w-6 h-6 text-[#004aad]" />
                    <h3 className="text-xl font-bold" style={{ color: "#004aad" }}>
                      {m.name}
                    </h3>
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-4">{m.detail}</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-green-50 rounded-lg p-3 border border-green-100">
                      <p className="text-xs font-semibold text-green-700 mb-1">Advantages</p>
                      <p className="text-xs text-green-800">{m.pros}</p>
                    </div>
                    <div className="bg-red-50 rounded-lg p-3 border border-red-100">
                      <p className="text-xs font-semibold text-red-700 mb-1">Limitations</p>
                      <p className="text-xs text-red-800">{m.cons}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* What a Corrosion Map Shows */}
          <section className="bg-slate-100 rounded-2xl p-8 border border-slate-200">
            <h2 id="what-a-map-shows" className="text-2xl font-bold mb-4" style={{ color: "#004aad" }}>
              What a Corrosion Map Shows — Reading a C-Scan
            </h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              A corrosion map C-scan provides far more information than a simple minimum wall reading. Understanding what the map reveals allows engineers to assess the nature and severity of corrosion and make sound fitness-for-service decisions.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  title: "Colour-Coded Thickness Distribution",
                  detail: "Each pixel or data point is colour-coded to its measured thickness. The colour scale is set relative to the component's design wall thickness. Areas approaching or below minimum wall appear in red/orange; nominal wall areas appear in green.",
                },
                {
                  title: "Minimum Wall Identification",
                  detail: "The C-scan immediately reveals the location of the minimum wall — not just its value but its exact position on the component. This allows targeted conventional sizing and follow-up with other UT techniques for confirmation.",
                },
                {
                  title: "Corrosion Pattern Recognition",
                  detail: "General corrosion appears as broad areas of reduced thickness. Pitting appears as discrete localised minima. Flow-accelerated corrosion appears as grooves or channels. Step corrosion (grooving at liquid level) appears as a horizontal band. Pattern recognition guides root cause analysis.",
                },
                {
                  title: "Rate Calculation",
                  detail: "When two corrosion maps exist from different inspection dates, the software calculates the wall loss at each grid position between the two dates, producing a corrosion rate map (mm/year). This identifies accelerating corrosion hotspots requiring priority attention.",
                },
                {
                  title: "API 579 Fitness for Service Integration",
                  detail: "C-scan data provides the thickness profile required for Level 2 (engineering critical assessment) under API 579 Part 4 (general metal loss) or Part 5 (local metal loss). This can demonstrate fitness for service beyond simple retirement criteria — potentially extending equipment life.",
                },
                {
                  title: "Remaining Life Visualisation",
                  detail: "Using corrosion rate data, the C-scan can be projected forward to show predicted wall thickness at the next inspection date — identifying which areas will approach retirement thickness and require action.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200">
                  <h3 className="font-bold text-[#004aad] mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Applications */}
          <section>
            <h2 id="applications" className="text-3xl font-bold mb-6" style={{ color: "#004aad" }}>
              Corrosion Mapping Applications by Asset Type
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {applications.map((app, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 shadow border border-slate-100 hover:border-[#004aad] transition"
                >
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

          {/* Governing Codes */}
          <section>
            <h2 id="codes" className="text-3xl font-bold mb-6" style={{ color: "#004aad" }}>
              Governing Codes for Corrosion Mapping
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Corrosion mapping requirements are embedded in the major API inspection codes. Compliance with these codes requires documented thickness survey data with minimum wall records maintained in the equipment inspection files.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {codes.map((c, i) => (
                <div key={i} className="flex gap-3 bg-white rounded-xl p-5 shadow border border-slate-100">
                  <div className="w-2 min-h-full bg-[#004aad] rounded-full flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#004aad] mb-1">{c.code}</p>
                    <p className="text-slate-600 text-sm">{c.scope}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-amber-800 text-sm">
                  <strong>Inspection interval impact:</strong> API 510 and API 570 allow inspection interval extensions — up to the code maximum — when remaining life calculations based on actual corrosion mapping data demonstrate adequate life. Accurate corrosion mapping directly affects operational and commercial outcomes.
                </p>
              </div>
            </div>
          </section>

          {/* Corrosion Rate & Remaining Life */}
          <section className="bg-white rounded-2xl p-8 shadow border border-slate-100">
            <h2 id="remaining-life" className="text-3xl font-bold mb-5" style={{ color: "#004aad" }}>
              Corrosion Rate & Remaining Life Calculations
            </h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              Corrosion mapping data enables the critical remaining life calculations required by API 510, API 570, and API 653. The process follows a defined methodology:
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  step: "Step 1: Corrosion Rate Calculation",
                  formula: "Corrosion rate (mm/yr) = (t₁ − t₂) ÷ (date₂ − date₁)",
                  detail:
                    "Where t₁ is the earlier thickness measurement and t₂ is the more recent measurement at the same location. Requires at least two inspection data sets at known dates. Short-term rate (between last two inspections) and long-term rate (since original inspection or commissioning) are both calculated — the higher rate is typically used for conservatism.",
                },
                {
                  step: "Step 2: Required Minimum Wall Calculation",
                  formula: "t_required = (P × D) ÷ (2 × S × E + 2 × P × y) + CA  [ASME B31.3 / API 570]",
                  detail:
                    "The minimum required wall thickness is calculated from the design pressure, pipe or vessel diameter, material allowable stress (S), weld efficiency (E), and any applied corrosion allowance (CA). For storage tanks, API 653 Table 4-1 provides minimum shell thickness as a function of shell course height and specific gravity.",
                },
                {
                  step: "Step 3: Remaining Life Calculation",
                  formula: "Remaining life (years) = (t_actual − t_required) ÷ corrosion rate",
                  detail:
                    "The difference between the current measured minimum wall and the required minimum wall represents the available corrosion allowance. Dividing by the corrosion rate gives the remaining life in years. The next inspection interval is typically set at half the remaining life or the code maximum interval — whichever is shorter.",
                },
                {
                  step: "Step 4: Retirement Date Projection",
                  formula: "Retirement date = current date + remaining life (years)",
                  detail:
                    "Establishes when the component is expected to reach its required minimum wall at the current corrosion rate. Allows planning of repair, replacement, or treatment (inhibitor injection, coating) before retirement date.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="font-bold text-[#004aad] mb-2">{item.step}</h3>
                  <code className="block bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-800 text-sm font-mono mb-3">
                    {item.formula}
                  </code>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 flex items-center justify-between gap-4">
              <p className="text-blue-800 text-sm font-medium">
                Atlantis NDT provides complete API 510/570/653 fitness-for-service reports including corrosion mapping data interpretation, rate calculations, and remaining life documentation.
              </p>
              <Link
                to="/contact"
                className="flex-shrink-0 bg-[#004aad] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
              >
                Get a Quote →
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
                { href: "/ndt-for-oil-gas", label: "NDT for Oil & Gas — Pipeline & Refinery Inspection" },
                { href: "/ultrasonic-testing", label: "Ultrasonic Testing (UT) — Complete Guide" },
                { href: "/phased-array-ut", label: "Phased Array UT (PAUT) — PAUT Corrosion Mapping" },
                { href: "/guided-wave-testing", label: "Guided Wave Testing — Long Range Pipe Screening" },
                { href: "/api-510-certification", label: "API 510 Certification — Pressure Vessel Inspector" },
                { href: "/api-570-certification", label: "API 570 Certification — Piping Inspector" },
                { href: "/api-653-tank-inspection-guide", label: "API 653 Tank Inspection Guide" },
                { href: "/consulting", label: "NDT Consulting — Corrosion Mapping Programs" },
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
              Corrosion Mapping — Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <FAQItem key={i} q={f.q} a={f.a} />
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-[#004aad] rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-3">Plan a Corrosion Mapping Survey?</h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Atlantis NDT provides manual UT, automated scanner, and PAUT corrosion mapping services globally — with full API 510/570/653 compliant reporting, fitness-for-service assessment, and remaining life calculations. Serving refineries, petrochemical plants, tank farms, and offshore facilities. Contact our team for a scope of work and quote.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-white text-[#004aad] font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                Get a Corrosion Mapping Quote
              </Link>
              <Link
                to="/consulting/ndt-consulting-houston"
                className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                Houston Consulting
              </Link>
              <Link
                to="/consulting/ndt-consulting-dubai"
                className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                Dubai / Middle East
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
                ["#methods", "Corrosion Mapping Methods"],
                ["#what-a-map-shows", "What a C-Scan Shows"],
                ["#applications", "Applications by Asset"],
                ["#codes", "Governing Codes"],
                ["#remaining-life", "Remaining Life Calculations"],
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
              Corrosion Mapping Services
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              {[
                "Manual UT Grid Scanning",
                "Automated Scanner (Crawler) C-Scan",
                "PAUT Corrosion Mapping",
                "API 510/570/653 Reporting",
                "Fitness for Service (API 579)",
                "Remaining Life Calculations",
                "Corrosion Rate Analysis",
                "Worldwide Mobilisation",
              ].map((s, i) => (
                <li key={i} className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="block mt-5 bg-[#004aad] text-white text-center font-bold py-3 rounded-lg hover:bg-[#003580] transition text-sm"
            >
              Get a Quote
            </Link>
          </div>

          <div className="bg-amber-50 p-6 rounded-xl shadow border border-amber-200">
            <h3 className="text-lg font-bold mb-3 text-amber-800">API Codes Coverage</h3>
            <ul className="space-y-2 text-sm text-amber-800">
              {["API 510", "API 570", "API 653", "API 579", "ASME Section V", "API 574"].map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-600 rounded-full flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border border-slate-100">
            <h3 className="font-bold text-[#004aad] mb-3">Related NDT Resources</h3>
            <ul className="space-y-2 text-sm">
              {[
                ["/ultrasonic-testing", "Ultrasonic Testing (UT)"],
                ["/guided-wave-testing", "Guided Wave Testing"],
                ["/ndt-for-oil-gas", "NDT for Oil & Gas"],
                ["/api-653-tank-inspection-guide", "API 653 Tank Guide"],
                ["/api-510-certification", "API 510 Certification"],
                ["/api-570-certification", "API 570 Certification"],
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
            <h3 className="text-lg font-bold mb-3">Need Corrosion Mapping?</h3>
            <p className="text-blue-100 text-sm mb-4">
              Our ASNT Level III engineers design and execute corrosion mapping programs with full API 510/570/653 compliant reporting and fitness-for-service assessment.
            </p>
            <Link
              to="/contact"
              className="block bg-white text-[#004aad] text-center font-bold px-4 py-3 rounded-lg hover:bg-blue-50 transition text-sm"
            >
              Contact Our Experts
            </Link>
          </div>
        </aside>
      </div>

      <ContactDetails />
    </div>
  );
}
