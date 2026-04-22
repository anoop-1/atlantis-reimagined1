import ContactDetails from "@/components/ContactDetails";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { CheckCircle, Waves, Shield, Target, Gauge, Clock, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "What is ultrasonic testing used for?",
    a: "Ultrasonic Testing (UT) is used for weld inspection, thickness measurement, corrosion detection, flaw detection in castings and forgings, and composite material evaluation. It is one of the most versatile NDT methods, applied across oil & gas, power generation, aerospace, manufacturing, and infrastructure industries. UT can detect internal defects such as cracks, lack of fusion, porosity, inclusions, and laminations without damaging the component being tested.",
  },
  {
    q: "What is the difference between conventional UT and phased array UT?",
    a: "Conventional UT uses a single-element transducer that transmits at a fixed angle and frequency, producing a one-dimensional A-scan display. The inspector manually repositions the probe to scan different angles and locations. Phased Array UT (PAUT) uses a multi-element transducer (typically 16–128 elements) that electronically steers and focuses the beam — producing S-scans (sectorial), B-scans, and C-scans that provide cross-sectional images of the component in real time. PAUT offers faster coverage, better defect characterization, and permanent digital records. For complex weld geometries or code-required full-volume coverage, PAUT is now preferred over conventional UT in most industries.",
  },
  {
    q: "What is TOFD testing?",
    a: "Time of Flight Diffraction (TOFD) is a UT technique that uses two transducers — a transmitter and a receiver — positioned on either side of a weld. Unlike pulse-echo UT, TOFD detects the diffracted signals from defect tips rather than reflected signals. This makes it highly accurate for sizing planar defects (cracks, lack of fusion) by measuring the time of flight of diffracted waves from the defect's upper and lower tips. TOFD is widely used for weld volumetric inspection per ASME Section V Article 4 Mandatory Appendix III and provides excellent sensitivity to vertical planar defects that might be missed by conventional UT. It is commonly used in combination with PAUT to achieve full weld coverage.",
  },
  {
    q: "How thick can ultrasonic testing detect flaws?",
    a: "Ultrasonic testing can detect flaws in materials ranging from a few millimeters thick to over 1 meter (40 inches) in large steel forgings — no other common NDT method approaches this penetration depth. For practical weld inspection, UT is routinely used on materials from 6mm to 300mm thick. The effective range depends on material type, frequency, and attenuation. Lower frequencies (0.5–2 MHz) penetrate thick, coarse-grained materials such as austenitic stainless steel or cast iron. Higher frequencies (5–15 MHz) provide better resolution in fine-grained materials. Minimum detectable flaw size is typically 0.5–1mm in diameter for well-calibrated systems.",
  },
  {
    q: "What ASME code governs ultrasonic testing of welds?",
    a: "ASME Section V, Article 4 is the primary code governing ultrasonic examination of welds for ASME pressure vessel and piping construction. Article 4 covers general UT requirements including calibration, scanning patterns, and acceptance criteria. Mandatory Appendix III covers TOFD examination, and Mandatory Appendix IV covers Phased Array UT. For in-service inspection, ASME Section XI applies to nuclear components, while API 510 and API 570 govern pressure vessel and piping UT inspection in the refining and petrochemical industries. AWS D1.1 governs UT of structural steel welds.",
  },
  {
    q: "Can UT detect corrosion under insulation?",
    a: "Conventional contact UT requires insulation removal to access the pipe or vessel surface. However, Guided Wave Testing (GWT/LRUT) — a specialized UT technique — can screen insulated pipework for corrosion under insulation (CUI) over lengths of 50–100 metres from a single test point, without removing insulation. Where GWT identifies suspect areas, targeted insulation removal for conventional UT thickness measurement confirms the finding. Additionally, Pulsed Eddy Current (PEC) — a complementary electromagnetic method — can measure wall thickness through 100–200mm of insulation without any removal, making it the preferred CUI screening tool when access is limited.",
  },
  {
    q: "How long does ASNT Level II UT certification take?",
    a: "ASNT Level II UT certification requires a minimum of 40 hours of formal UT training at Level I and an additional 40 hours at Level II (total 80 hours), plus practical field experience. Per ASNT SNT-TC-1A, Level I requires 400 hours of field experience and Level II requires 1,200 additional hours (some employers specify 1,600 total hours). After training and experience, candidates sit a written Level II UT examination and a practical demonstration. With Atlantis NDT's intensive training format, Level I + II classroom training can be completed in 10 days. Most candidates achieve full Level II status within 6–18 months including the experience requirement.",
  },
  {
    q: "What is guided wave ultrasonic testing?",
    a: "Guided Wave Testing (GWT), also called Long Range Ultrasonic Testing (LRUT), uses low-frequency ultrasonic waves (typically 10–100 kHz) that propagate along the length of a pipe, guided by its walls. A ring of transducers is clamped around the pipe and the waves travel both forward and backward, reflecting from features such as corrosion, welds, and supports. GWT can inspect 50–100 metres of pipe from a single test point, making it highly efficient for screening buried, insulated, or otherwise inaccessible pipework. It is widely used for corrosion under insulation (CUI) screening, road crossing assessment, and offshore riser inspection per ASTM E2775.",
  },
  {
    q: "Is ultrasonic testing safe?",
    a: "Yes. Ultrasonic Testing is inherently safe for both operators and the public. UT uses high-frequency sound waves (mechanical energy) rather than ionizing radiation, so there is no radiation exposure risk, no need for radiation safety permits, no exclusion zones, and no regulatory licensing for radiological safety. This makes UT far simpler to deploy in confined spaces, occupied facilities, and around sensitive equipment compared to radiographic testing (RT). The sound energy used is far below levels that could cause any tissue damage. Gel-based couplants used to couple the transducer to the material are non-toxic and skin-safe.",
  },
  {
    q: "What is the difference between UT and RT for weld inspection?",
    a: "Ultrasonic Testing (UT) and Radiographic Testing (RT) are both volumetric weld inspection methods but work on completely different principles. RT uses X-rays or gamma rays to create a film or digital image of the weld — excellent at detecting porosity and slag inclusions, but less sensitive to tight planar defects (cracks, lack of fusion) oriented parallel to the beam. UT uses sound waves and excels at detecting planar defects, measuring depth, and characterizing defect orientation. UT has no radiation hazard, provides immediate results, and is more sensitive to critical cracking defects. RT provides a permanent film record that some codes require. Phased array UT is increasingly replacing RT in pipeline and pressure vessel weld inspection, particularly where ASME Code Case 2235 or API 1104 Appendix A are applied.",
  },
];

const utTechniques = [
  {
    name: "Conventional UT (Pulse-Echo)",
    use: "Single-element transducer, A-scan display, thickness gauging, flaw detection",
    thickness: "1mm to 1,000mm+",
    codes: "ASME Sec V Art 4, ASTM E164, ASTM E2700",
    industries: "All industries — universal baseline method",
    detail: "The foundational UT technique. A single piezoelectric element transmits a pulse of ultrasonic energy into the material and receives the reflected echo. The time delay between transmission and echo reception is converted to distance using the material's sound velocity, giving precise depth information. A-scan display shows amplitude vs. time. Used for thickness gauging (corrosion monitoring), flaw detection in welds and base material, and material characterization. Angle beam probes (45°, 60°, 70°) are used for weld inspection where the beam must travel at an angle to intersect vertical or angled defects.",
  },
  {
    name: "Phased Array UT (PAUT)",
    use: "Electronic beam steering, S-scan/B-scan, weld inspection, complex geometries",
    thickness: "6mm to 300mm+",
    codes: "ASME Sec V Art 4 App IV, ASME Sec VIII, AWS D1.1 Annex K",
    industries: "Oil & gas, power generation, aerospace, offshore",
    detail: "Phased Array UT uses a transducer array of 16–128 individual piezoelectric elements that can be electronically pulsed in controlled sequences. By introducing time delays between element firings, the beam can be steered through a range of angles (typically 40°–70°) and focused at multiple depths — all without moving the probe. This produces a sectorial (S-scan) display — a cross-sectional fan image of the weld — in real time. PAUT dramatically increases inspection speed, provides superior defect characterization, and produces permanent digital records fully compliant with ASME Section V Article 4 Mandatory Appendix IV and AWS D1.1 Annex K. It is now the preferred method for code-required weld inspection in oil & gas and power generation.",
  },
  {
    name: "Time of Flight Diffraction (TOFD)",
    use: "Two-transducer technique, defect tip diffraction, weld volumetric sizing",
    thickness: "6mm to 300mm",
    codes: "ASME Sec V Art 4 App III, BS EN ISO 10863",
    industries: "Pressure vessels, pipelines, power generation",
    detail: "TOFD places a transmitter and receiver on opposite sides of the weld. Rather than relying on reflected signals, TOFD detects the tiny diffracted signals from the tips of planar defects — cracks, lack of fusion, and incomplete penetration. Because defect height is measured from the time of flight of these diffracted tip signals, TOFD provides highly accurate flaw sizing regardless of orientation. TOFD produces a B-scan image (depth vs. position) showing the weld cross-section with all detected features. It has very high probability of detection for planar defects and is recognised in ASME Section V Article 4 Mandatory Appendix III and BS EN ISO 10863. TOFD is almost always combined with PAUT for complete weld coverage.",
  },
  {
    name: "Automated UT (AUT)",
    use: "Mechanised scanner, encoded position, pipeline girth welds, corrosion mapping",
    thickness: "6mm to 50mm (pipeline)",
    codes: "API 1104 Appendix A, DNV-OS-F101, ISO 13588",
    industries: "Pipeline construction, offshore, LNG, refineries",
    detail: "Automated UT integrates UT probes (PAUT or conventional) with a mechanised scanner system that records probe position throughout the scan. This encoded position data allows the UT data to be displayed as a C-scan map — a plan-view image of the inspected area — or B-scan cross sections at any location. AUT is the standard method for pipeline girth weld inspection during construction per API 1104 Appendix A and DNV-OS-F101. Zonal discrimination AUT divides the weld cross-section into zones, each covered by a dedicated channel, enabling very high sensitivity and reliable acceptance/rejection decisions. Corrosion mapping AUT uses raster scanning to produce wall thickness maps for pressure vessels and storage tanks.",
  },
  {
    name: "Guided Wave Testing (GWT / LRUT)",
    use: "Long-range pipe screening, CUI detection, inaccessible and buried pipework",
    thickness: "3mm to 30mm wall",
    codes: "ASTM E2775, ASTM E2929",
    industries: "Oil & gas pipelines, petrochemical, offshore risers",
    detail: "Guided Wave Testing uses a ring of transducers clamped around a pipe to generate low-frequency (10–100 kHz) guided waves that propagate along the pipe axis in both directions. These waves travel 50–100 metres from the test point, reflecting from any change in cross-sectional area — corrosion, welds, supports, or fittings. GWT is primarily a screening tool: it efficiently identifies areas of concern along long pipe runs without requiring insulation removal or excavation. Suspect locations identified by GWT are then subjected to conventional UT thickness measurement for confirmation and sizing. Particularly valuable for API 570 corrosion under insulation (CUI) programs, offshore risers, and road crossings per ASTM E2775.",
  },
  {
    name: "Immersion UT",
    use: "Water bath or water column coupling, aerospace composites, forgings, billets",
    thickness: "0.5mm to 200mm",
    codes: "ASTM E214, AMS 2630, ASTM E2375",
    industries: "Aerospace, defense, advanced manufacturing",
    detail: "Immersion UT suspends the part and transducer in a water tank (or uses a water column as a standoff) to eliminate couplant variability and enable very precise automated scanning. Because water provides consistent coupling across the entire scan area, immersion UT achieves high sensitivity and excellent spatial resolution — capable of detecting sub-millimetre defects. It is the preferred method for aerospace composite inspection (detecting delaminations, disbonds, and voids per AMS 2630), forging inspection (ASTM E2375), and billet/bar inspection. Automated immersion scanning systems with encoded positioning produce C-scan maps of the entire volume, required for NADCAP and AS9100 aerospace quality systems.",
  },
];

const codesAndStandards = [
  { std: "ASME Section V, Article 4", scope: "Ultrasonic examination of welds — the primary pressure vessel/piping UT code. Covers contact pulse-echo, TOFD (App III), and PAUT (App IV)" },
  { std: "ASME Section V, Article 23", scope: "UT calibration block specifications — ASME basic calibration block and supplementary blocks for angle beam calibration" },
  { std: "AWS D1.1", scope: "Structural welding code for steel — Annex K governs PAUT of structural welds; Table 6.7 gives conventional UT acceptance criteria" },
  { std: "API 5L", scope: "Specification for line pipe — covers UT of longitudinal and spiral seam welds in pipeline manufacturing" },
  { std: "API 1104", scope: "Welding of pipelines — Appendix A governs AUT and PAUT of pipeline girth welds as an alternative acceptance standard" },
  { std: "ASTM E164", scope: "Contact UT examination of weldments — practical guidance for conventional contact UT of weld joints" },
  { std: "ASTM E2700", scope: "Contact UT pulse-echo straight beam examination — straight beam thickness and flaw detection procedures" },
  { std: "DNV-OS-C101 / DNV-OS-F101", scope: "Offshore structural steel UT and pipeline UT requirements — governs AUT inspection of offshore pipeline girth welds" },
];

const industryApplications = [
  {
    title: "Oil & Gas",
    detail: "Pressure vessel UT inspection per API 510, piping inspection per API 570, storage tank floor scanning, pipeline girth weld AUT per API 1104, corrosion mapping on process vessels, and fitness-for-service flaw sizing per API 579. UT is the primary volumetric inspection tool in every refinery, petrochemical plant, and upstream facility. PAUT of pressure retaining welds is now standard at turnarounds, replacing RT in many applications to eliminate radiation hazard and reduce scaffold and exclusion zone costs.",
    link: "/ndt-for-oil-gas",
  },
  {
    title: "Power Generation",
    detail: "Boiler tube UT for wall thinning and hydrogen damage, turbine blade inspection for fatigue cracks and erosion, rotor bore examination using immersion or phased array UT, steam generator inspection in nuclear plants, HRSG header weld inspection, and main steam piping TOFD surveys. PAUT of critical welds is mandated by ASME Section I and XI in power generation. Atlantis NDT supports planned outages with specialist PAUT and TOFD teams.",
    link: "/ndt-for-power-generation",
  },
  {
    title: "Aerospace",
    detail: "Composite UT for delaminations, disbonds, and voids in carbon fibre and glass fibre structures per AMS 2630. Engine component inspection (discs, blades, casings) using immersion UT. Airframe structural inspection using portable PAUT. Forging inspection using immersion or contact UT per AMS 2154. Aerospace UT inspection must comply with NAS-410 or EN 4179 certification requirements, and inspection procedures must be qualified under NADCAP.",
    link: "/ndt-for-aerospace",
  },
  {
    title: "Manufacturing",
    detail: "Forging inspection for internal bursts, cracks, and segregation using immersion UT (ASTM E2375, ASTM A388). Weld QC on fabricated structural assemblies. Casting examination for shrinkage, porosity, and cold shuts. Bar, billet, and plate UT in steel mills for material acceptance. Pressure component fabrication inspection per ASME Section V before hydrotest.",
    link: "/consulting",
  },
  {
    title: "Infrastructure",
    detail: "Bridge weld UT per AWS D1.5 bridge welding code. Railway track inspection using automated TOFD and PAUT for internal rail defects (horizontal split heads, detail fractures, transverse cracks). Structural assessment of existing buildings and bridges. Pile integrity testing. Concrete embedded rebar location using shear wave UT.",
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

export default function UltrasonicTesting() {
  const faqSchemaData = [
    {
      "@type": "Question",
      "name": "What is the difference between UT and PAUT?",
      "acceptedAnswer": { "@type": "Answer", "text": "Conventional UT uses a single element transducer with fixed beam angle, while phased array UT (PAUT) uses multiple elements that can be electronically steered, focused, and scanned — providing faster inspection and better defect characterization." },
    },
    {
      "@type": "Question",
      "name": "What thickness can ultrasonic testing measure?",
      "acceptedAnswer": { "@type": "Answer", "text": "UT can measure thickness from 0.5mm to over 500mm depending on frequency and material. High-frequency probes (10-20MHz) measure thin materials; low-frequency (0.5-2MHz) penetrate thick sections." },
    },
    {
      "@type": "Question",
      "name": "Is ultrasonic testing safe?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, UT is completely safe — it uses sound waves, not radiation. Unlike radiographic testing, no evacuation zones or radiation safety protocols are needed." },
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://atlantisndt.com/ultrasonic-testing",
        "headline": "Ultrasonic Testing (UT): Complete Guide — PAUT, TOFD, AUT, Guided Wave & UT Certification 2026",
        "description": "Comprehensive guide to ultrasonic testing: conventional UT, phased array (PAUT), TOFD, AUT, guided wave testing. ASME V Article 4, API 5L, AWS D1.1. Level I–III UT training and Level III consulting from Atlantis NDT.",
        "datePublished": "2025-10-01",
        "dateModified": "2026-02-25",
        "author": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
        "publisher": {
          "@type": "Organization",
          "name": "Atlantis NDT",
          "logo": { "@type": "ImageObject", "url": "https://atlantisndt.com/favicon-96x96.jpg" },
        },
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/ultrasonic-testing" },
        "keywords": "ultrasonic testing, UT inspection, phased array ultrasonic testing, PAUT, TOFD, time of flight diffraction, automated ultrasonic testing, AUT, guided wave testing, GWT, UT thickness measurement, weld inspection ultrasonic testing, ASME Section V Article 4, API 5L pipeline inspection, corrosion mapping UT, ultrasonic testing certification, ASNT UT Level II, Level III UT",
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          ...faqSchemaData,
          ...faqs.map((f) => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a },
          })),
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      <SEOHead
        title="Ultrasonic Testing (UT): PAUT vs TOFD vs Conventional — Which Method Wins? [2026]"
        description="Compare ultrasonic testing methods head-to-head: conventional UT vs phased array (PAUT) vs TOFD vs automated UT. Thickness measurement, weld inspection."
        keywords="ultrasonic testing, UT inspection, phased array ultrasonic testing PAUT, TOFD, time of flight diffraction, automated ultrasonic testing AUT, guided wave testing GWT, UT thickness measurement, weld inspection ultrasonic testing, ASME Section V Article 4, API 5L pipeline inspection, corrosion mapping UT, ultrasonic testing certification, ASNT UT, NDT UT services, UT NDT method"
        structuredData={structuredData}
        canonical="https://atlantisndt.com/ultrasonic-testing"
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
              Ultrasonic Testing (UT) | Complete Guide to UT NDT Methods
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Everything you need to know about UT — from pulse-echo physics and phased array (PAUT) to TOFD, automated UT, guided wave testing, ASME Section V Article 4, and ASNT Level I–III certification.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-white text-[#004aad] font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                Get UT Consulting
              </Link>
              <Link
                to="/training"
                className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                UT Training & Certification
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
              { stat: "Proven Since 1940s", label: "Industry-standard NDT method" },
              { stat: "ASME V Art 4", label: "Compliant inspection procedures" },
              { stat: "6 UT Techniques", label: "Conventional to PAUT & TOFD" },
              { stat: "Level I–III", label: "UT training and certification" },
            ].map((item, i) => (
              <div key={i} className="border-r border-slate-100 last:border-r-0 px-4">
                <div className="text-xl font-bold text-[#004aad] mb-1">{item.stat}</div>
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
              "How UT Works",
              "UT Techniques",
              "Codes & Standards",
              "Applications",
              "Equipment",
              "Certification",
              "FAQ",
            ].map((s) => (
              <a
                key={s}
                href={`#${s.toLowerCase().replace(/ /g, "-").replace(/&/g, "")}`}
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
              id="how-ut-works"
              className="text-3xl font-bold mb-5"
              style={{ color: "#004aad" }}
            >
              What Is Ultrasonic Testing and How Does It Work?
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              <strong>Ultrasonic Testing (UT)</strong> is a non-destructive testing (NDT) method that uses high-frequency sound waves — typically in the range of 0.5 to 25 MHz — to detect internal flaws, measure material thickness, and evaluate material properties without causing any damage to the component under examination. UT is the most widely used volumetric NDT method globally, applied in virtually every industry that relies on the integrity of metal, composite, or ceramic components.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              The physics of UT is grounded in acoustic wave propagation. A piezoelectric transducer converts electrical energy into mechanical vibration, generating an ultrasonic pulse. This pulse travels through the material at a characteristic velocity determined by the material's elastic modulus and density — typically 5,920 m/s in longitudinal (compression) mode in steel. When the wave encounters a boundary — whether it is the back wall of the component, a flaw, or a change in material — it is reflected back toward the transducer. By measuring the time elapsed between the transmitted pulse and the received echo, and knowing the sound velocity, the instrument calculates the precise depth of the reflector. This is the pulse-echo principle, and it underpins conventional UT as well as advanced techniques like phased array and TOFD.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              Ultrasonic Testing offers decisive advantages over other NDT methods: it is the only method that provides both detection and accurate depth sizing of internal flaws without radiation, making it uniquely valuable for fitness-for-service assessments. Unlike radiographic testing (RT), which projects a two-dimensional shadow image, UT provides three-dimensional information — the flaw's depth, height, and through-wall extent can all be measured. Unlike eddy current testing, UT works on non-conductive materials and penetrates the full thickness of the component. Unlike magnetic particle or penetrant testing, UT reveals internal volumetric and planar defects, not just surface-breaking cracks.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              The oil & gas industry relies on UT for pressure vessel corrosion monitoring per API 510, piping inspection per API 570, storage tank floor assessment, and pipeline girth weld inspection per API 1104. Power generation uses UT for boiler tube thickness surveys, turbine rotor bore examination, and critical weld inspection per ASME Section XI. Aerospace employs immersion UT and phased array UT for composite delamination detection and engine component examination per NAS-410. Manufacturing uses UT for forging, casting, and weld quality control. Infrastructure inspection depends on UT for bridge weld assessment and structural integrity evaluation.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              Atlantis NDT provides expert UT services across all six major UT techniques — from conventional pulse-echo and corrosion mapping to phased array UT, TOFD, and guided wave testing. Our ASNT Level III UT engineers develop ASME-compliant procedures, qualify technique demonstrations, and deliver Level I, II, and III UT training programs. Whether you need a UT consulting partner for a complex inspection challenge or ASNT certification training for your inspectors, Atlantis NDT has the expertise and experience.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#004aad] rounded-r-xl p-6 mt-6">
              <h3 className="font-bold text-[#004aad] mb-3">Key UT Physical Principles</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Sound velocity:</strong> Longitudinal waves travel at ~5,920 m/s in steel, ~6,320 m/s in aluminium, ~2,730 m/s in austenitic stainless steel. Velocity is used to convert time-of-flight to depth measurements.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Wave modes:</strong> Longitudinal (compression) waves — primary for thickness and straight beam flaw detection. Shear (transverse) waves — used with angle beam probes for weld inspection. Rayleigh (surface) waves — for near-surface defects. Lamb/plate waves — guided wave testing.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Frequency selection:</strong> Higher frequency (5–15 MHz) gives better resolution but greater attenuation. Lower frequency (0.5–2 MHz) penetrates further in coarse-grained or attenuative materials. Frequency must be matched to the application.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Couplant:</strong> A thin layer of gel, oil, or water is applied between the transducer and the surface to eliminate the air gap that would otherwise reflect virtually all sound energy. Water is the couplant in immersion UT.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Near field and far field:</strong> The near field (Fresnel zone) immediately in front of the transducer has complex pressure distribution. Calibration ensures inspection is performed in the far field where the beam is more uniform and predictable.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* UT Techniques */}
          <section>
            <h2
              id="ut-techniques"
              className="text-3xl font-bold mb-6"
              style={{ color: "#004aad" }}
            >
              Six Core Ultrasonic Testing Techniques
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Ultrasonic testing encompasses a family of techniques, each suited to specific material types, component geometries, defect types, and code requirements. Selecting the correct UT technique — or combination of techniques — is critical to achieving reliable inspection results and code compliance.
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow mb-8">
              <table className="w-full text-sm">
                <thead className="bg-[#004aad] text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold">UT Technique</th>
                    <th className="text-left p-4 font-semibold">Primary Use</th>
                    <th className="text-left p-4 font-semibold">Range</th>
                    <th className="text-left p-4 font-semibold">Key Codes</th>
                  </tr>
                </thead>
                <tbody>
                  {utTechniques.map((t, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-semibold text-[#004aad]">{t.name}</td>
                      <td className="p-4 text-slate-700">{t.use}</td>
                      <td className="p-4 text-slate-700">{t.thickness}</td>
                      <td className="p-4 text-slate-600 text-xs">{t.codes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="space-y-6">
              {utTechniques.map((technique, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 shadow border border-slate-100"
                >
                  <h3
                    className="text-xl font-bold mb-1"
                    style={{ color: "#004aad" }}
                  >
                    {i + 1}. {technique.name}
                  </h3>
                  <div className="flex flex-wrap gap-3 mb-3">
                    <span className="bg-blue-50 text-[#004aad] text-xs font-medium px-3 py-1 rounded-full">
                      Range: {technique.thickness}
                    </span>
                    <span className="bg-slate-100 text-slate-600 text-xs font-medium px-3 py-1 rounded-full">
                      {technique.industries}
                    </span>
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-3">{technique.detail}</p>
                  <p className="text-xs text-slate-500">
                    <strong>Governing codes:</strong> {technique.codes}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Codes and Standards */}
          <section>
            <h2
              id="codes-standards"
              className="text-3xl font-bold mb-5"
              style={{ color: "#004aad" }}
            >
              Governing Codes &amp; Standards for Ultrasonic Testing
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              UT inspections must be performed to a written procedure that references an applicable code or standard. The procedure specifies equipment calibration, scanning requirements, acceptance criteria, and reporting format. It is written and approved by an ASNT Level III before use. Below are the primary codes governing UT in each sector.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {codesAndStandards.map((s, i) => (
                <div
                  key={i}
                  className="flex gap-3 bg-white rounded-xl p-5 shadow border border-slate-100"
                >
                  <div className="w-1.5 bg-[#004aad] rounded-full flex-shrink-0 min-h-[40px]" />
                  <div>
                    <p className="font-bold text-[#004aad] mb-1">{s.std}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{s.scope}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5">
              <h3 className="font-bold text-amber-800 mb-2">ASME Code Case 2235 — UT as Alternative to RT</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                ASME Code Case 2235 permits phased array UT or TOFD to be used as a full substitute for radiographic testing (RT) in pressure vessel weld inspection — where RT would normally be required by ASME Section VIII Division 1. This is now widely adopted across the industry to eliminate radiation hazards, reduce inspection time, and produce superior defect characterization data. Atlantis NDT's Level III consultants develop and qualify ASME CC 2235 procedures for clients transitioning from RT to PAUT/TOFD.
              </p>
            </div>
          </section>

          {/* Industry Applications */}
          <section>
            <h2
              id="applications"
              className="text-3xl font-bold mb-6"
              style={{ color: "#004aad" }}
            >
              Ultrasonic Testing Applications by Industry
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {industryApplications.map((app, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 shadow border border-slate-100 hover:border-[#004aad] transition"
                >
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: "#004aad" }}
                  >
                    {app.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">{app.detail}</p>
                  <Link
                    to={app.link}
                    className="text-[#004aad] text-sm font-medium hover:underline"
                  >
                    Learn more →
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Corrosion Mapping Deep Dive */}
          <section className="bg-slate-100 rounded-2xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#004aad" }}>
              Deep Dive: UT Corrosion Mapping for Pressure Equipment
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Corrosion mapping is one of the highest-value UT applications in oil & gas and power generation. Rather than taking isolated spot thickness readings, corrosion mapping uses automated or semi-automated scanning to produce a plan-view C-scan of wall thickness across an entire vessel, pipe spool, or tank floor — revealing corrosion patterns, thinning zones, and pitting clusters in detail that spot measurements cannot achieve.
            </p>
            <h3 className="font-bold text-[#004aad] mb-3">Corrosion Mapping Workflow</h3>
            <ol className="space-y-3 text-slate-700">
              {[
                "Surface preparation — clean and dry the inspection surface; remove loose scale, paint, or coating as required",
                "Grid or encoder setup — establish a coordinate reference grid on the component; attach an encoded scanner (manual or motorised)",
                "Calibration — set up the UT instrument with appropriate probe, frequency, and gate settings; calibrate to known step-wedge or calibration block",
                "Data acquisition — scan the surface in a raster pattern; encoder records position; UT records thickness at each data point (typically every 1–5mm)",
                "C-scan generation — software plots wall thickness as a colour-coded map; thinning areas immediately visible as distinct colour bands",
                "Analysis — minimum remaining wall, corrosion rate (if prior data exists), and remaining life calculated per API 510/570 or ASME fitness-for-service criteria",
                "Reporting — C-scan images and thickness data tables reported with inspection date, equipment ID, and recommendations for repair, monitoring, or replacement",
              ].map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="w-7 h-7 bg-[#004aad] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 text-sm font-medium">
                Atlantis NDT provides PAUT corrosion mapping services and procedure development for API 510/570 inspection programs. Contact our team to discuss your specific equipment and code requirements.
              </p>
            </div>
          </section>

          {/* Equipment */}
          <section>
            <h2
              id="equipment"
              className="text-3xl font-bold mb-5"
              style={{ color: "#004aad" }}
            >
              Ultrasonic Testing Equipment
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              UT equipment ranges from simple handheld thickness gauges to sophisticated multi-channel phased array systems with real-time C-scan imaging. Selecting the right equipment depends on the technique, material, required sensitivity, and data management needs. All equipment must be calibrated before use per the applicable procedure and code.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  title: "Flaw Detectors (Conventional UT)",
                  detail:
                    "Portable ultrasonic flaw detectors (e.g., Olympus Epoch 650, GE DM5E, Sonatest Sitescan) display A-scan waveforms in real time. They include adjustable gain, gate functions for amplitude and depth measurement, DAC/TVG curves for calibration, and data logging. Used for manual contact UT of welds and thickness gauging of corroded pipe and vessels.",
                },
                {
                  title: "Phased Array UT Instruments",
                  detail:
                    "Multi-channel PAUT instruments (e.g., Olympus OmniScan X3, Zetec Topaz, Eddyfi Mantis) drive 16–128 element arrays and produce real-time S-scan, B-scan, and C-scan displays. Focal law calculators optimize beam steering and focusing. Most modern PAUT instruments also support TOFD channel acquisition simultaneously, enabling combined PAUT+TOFD in a single pass.",
                },
                {
                  title: "Transducers and Probes",
                  detail:
                    "Contact probes: straight beam (0°) for thickness and straight reflectors; angle beam (45°, 60°, 70°) for weld inspection using shear waves. Immersion transducers: focused, planar, or annular designs for tank scanning. PAUT arrays: linear arrays, matrix arrays, and sectorial arrays in frequencies from 1–15 MHz. TOFD probes: matched transmitter/receiver pairs at specific angles per ASME appendix requirements.",
                },
                {
                  title: "Calibration Reference Blocks",
                  detail:
                    "ASME basic calibration block: side-drilled holes (SDH) at 1/4, 1/2, and 3/4 depth for angle beam DAC calibration. IIW block: international standard for angle beam calibration and probe angle verification. DIN blocks: European equivalent. Step wedges for thickness calibration. TOFD calibration blocks with notches and SDHs at specific depths per ASME Appendix III.",
                },
                {
                  title: "Automated Scanners",
                  detail:
                    "Motorised scanner systems (e.g., Silverwing Floormap, Olympus Glider) for corrosion mapping of vessel floors and pipe spools. Pipe crawlers and orbital scanners for girth weld AUT. TOFD encoder systems for position-tracked data acquisition on welds. Semi-automated systems with magnetic wheels for vertical or overhead scanning of tanks and vessels.",
                },
                {
                  title: "Analysis Software",
                  detail:
                    "Olympus TomoView and OmniPC for PAUT and TOFD data review and reporting. Eddyfi Capture for Mantis/Focus systems. UltraVision by ZETEC for multi-technique inspection data. Corrosion mapping software (e.g., Silverwing ViewScan) for C-scan colour mapping and minimum wall reporting. All software must produce reportable data formats acceptable to the applicable code.",
                },
              ].map((eq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow border border-slate-100">
                  <h3 className="font-bold text-[#004aad] mb-2">{eq.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{eq.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Training & Certification */}
          <section className="bg-white rounded-2xl p-8 shadow border border-slate-100">
            <h2
              id="certification"
              className="text-3xl font-bold mb-5"
              style={{ color: "#004aad" }}
            >
              Ultrasonic Testing Certification: ASNT, ISO 9712 &amp; PCN
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              UT certification confirms that a technician has the theoretical knowledge and practical competency to perform and interpret UT inspections correctly. Most industry codes — including ASME, API, and AWS — require that UT inspectors hold a current certification to a recognized scheme such as ASNT SNT-TC-1A, ASNT CP-189, ISO 9712, or PCN. Certification requirements vary by level and scheme.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                {
                  level: "ASNT Level I UT",
                  desc: "Performs UT under the supervision of a Level II or III. Sets up equipment per a written procedure. Records data and takes readings. Cannot independently accept or reject parts.",
                  hours: "40 training hours + 400 field experience hours",
                },
                {
                  level: "ASNT Level II UT",
                  desc: "Independently performs and interprets UT examinations. Calibrates equipment. Writes UT procedures. Trains Level I personnel. Signs and certifies UT inspection reports. The primary working-level certification for most code-required UT.",
                  hours: "80 total training hours + 1,600 field experience hours",
                },
                {
                  level: "ASNT Level III UT",
                  desc: "Highest level. Certifies Level I and II personnel. Designs UT programs and approves procedures. Interprets codes and standards. Provides technical authority for UT within the employer's program. Qualification via ASNT examination plus experience.",
                  hours: "Degree/experience requirements + ASNT written exams",
                },
              ].map((l, i) => (
                <div key={i} className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                  <div className="text-[#004aad] font-bold text-lg mb-2">{l.level}</div>
                  <p className="text-slate-700 text-sm mb-3 leading-relaxed">{l.desc}</p>
                  <p className="text-slate-500 text-xs">{l.hours}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  scheme: "ISO 9712 UT (Levels 1–3)",
                  detail: "International certification standard widely required outside the USA — particularly in Europe, the Middle East, Asia-Pacific, and offshore. Level 1, 2, and 3 examinations cover UT theory, code knowledge, and practical demonstrations. ISO 9712 UT Level 2 is equivalent to ASNT Level II in most acceptance criteria.",
                },
                {
                  scheme: "PCN / CSWIP UT (UK & International)",
                  detail: "Personnel Certification in NDT (PCN) is the UK standard administered by TWI/BINDT. Widely recognised in the offshore, oil & gas, and nuclear sectors globally. PCN UT Level 2 and Level 3 certifications are accepted on North Sea projects and by major EPC contractors. CSWIP is an equivalent scheme for welding inspectors combining visual and NDT.",
                },
              ].map((s, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-xl p-5">
                  <h3 className="font-semibold text-[#004aad] mb-2">{s.scheme}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{s.detail}</p>
                </div>
              ))}
            </div>

            <p className="text-slate-700 mb-5">
              Atlantis NDT delivers ASNT SNT-TC-1A and ISO 9712 UT training at Level I, II, and III globally — including Houston (USA), Dubai (UAE), Hyderabad (India), Singapore, and online instructor-led formats. Our intensive training combines comprehensive classroom instruction, hands-on practice with real UT equipment, and targeted exam preparation. Our 95% first-attempt exam pass rate reflects the quality of our instructors and materials.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/training"
                className="bg-[#004aad] text-white px-5 py-3 rounded-lg font-semibold hover:bg-[#003580] transition"
              >
                View UT Training Courses
              </Link>
              <Link
                to="/asnt-certification"
                className="border border-[#004aad] text-[#004aad] px-5 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                ASNT Certification Guide
              </Link>
              <Link
                to="/consulting"
                className="border border-slate-300 text-slate-700 px-5 py-3 rounded-lg font-semibold hover:bg-slate-100 transition"
              >
                Level III UT Consulting
              </Link>
            </div>
          </section>

          {/* Internal Links — Related Topics */}
          <section className="bg-slate-100 rounded-2xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold mb-5" style={{ color: "#004aad" }}>
              Related NDT Methods &amp; Topics
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { href: "/eddy-current-testing", label: "Eddy Current Testing (ECT)", desc: "Surface crack detection, heat exchanger tube inspection, CUI screening" },
                { href: "/radiographic-testing", label: "Radiographic Testing (RT)", desc: "Film RT and digital radiography for weld volumetric inspection" },
                { href: "/asnt-certification", label: "ASNT Certification Guide", desc: "SNT-TC-1A and CP-189 requirements for all NDT methods" },
                { href: "/ndt-for-oil-gas", label: "NDT for Oil & Gas", desc: "API 510, API 570, API 653 — inspection requirements for pressure equipment" },
                { href: "/ndt-for-power-generation", label: "NDT for Power Generation", desc: "ASME XI, turbine and boiler inspection requirements" },
                { href: "/consulting", label: "UT Procedure Development", desc: "Level III consulting for ASME-compliant UT procedure writing and qualification" },
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
              Ultrasonic Testing — Frequently Asked Questions
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
              Ready to Start UT Inspection or Training?
            </h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Atlantis NDT provides ASNT-certified Ultrasonic Testing consulting, PAUT and TOFD procedure development, corrosion mapping services, and Level I–III UT training across the USA, Middle East, India, Asia-Pacific, and Europe. Contact our team to discuss your scope and get a quote.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-white text-[#004aad] font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                Get a UT Quote
              </Link>
              <Link
                to="/training"
                className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                UT Training — Enrol Now
              </Link>
              <Link
                to="/consulting"
                className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                Level III UT Consulting
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
                ["#how-ut-works", "How UT Works"],
                ["#ut-techniques", "6 UT Techniques"],
                ["#codes-standards", "Codes & Standards"],
                ["#applications", "Applications by Industry"],
                ["#equipment", "UT Equipment"],
                ["#certification", "ASNT / ISO 9712 Certification"],
                ["#faq", "FAQ (10 questions)"],
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
              UT Key Advantages
            </h3>
            <ul className="space-y-3 text-sm text-slate-700">
              {[
                { icon: Waves, text: "Penetrates full material thickness — no other common NDT method matches UT's depth range" },
                { icon: Shield, text: "No ionizing radiation — safe in occupied facilities, confined spaces, no permits needed" },
                { icon: Gauge, text: "Accurate depth sizing — measures defect height and through-wall extent for fitness-for-service" },
                { icon: Target, text: "Real-time results — PAUT delivers immediate S-scan imaging at the weld face" },
                { icon: Clock, text: "Permanent digital records — PAUT and TOFD data archived for future comparison" },
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

          <div className="bg-white p-6 rounded-xl shadow border border-slate-100">
            <h3 className="text-lg font-bold mb-3" style={{ color: "#004aad" }}>
              UT Services By Location
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                ["/ultrasonic-testing-houston", "Houston, TX"],
                ["/ultrasonic-testing-dubai", "Dubai, UAE"],
                ["/ultrasonic-testing-saudi-arabia", "Saudi Arabia"],
                ["/ultrasonic-testing-singapore", "Singapore"],
                ["/ultrasonic-testing-mumbai", "Mumbai, India"],
                ["/ultrasonic-testing-uk", "United Kingdom"],
                ["/ultrasonic-testing-norway", "Norway"],
                ["/ultrasonic-testing-kuwait", "Kuwait"],
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
            <h3 className="text-lg font-bold mb-3 text-amber-800">Related NDT Methods</h3>
            <ul className="space-y-2 text-sm">
              {[
                ["/eddy-current-testing", "Eddy Current Testing (ECT)"],
                ["/radiographic-testing", "Radiographic Testing (RT)"],
                ["/magnetic-particle-testing", "Magnetic Particle Testing (MT)"],
                ["/penetrant-testing", "Liquid Penetrant Testing (PT)"],
                ["/ndt-methods", "All NDT Methods"],
                ["/ut-vs-rt-comparison", "UT vs RT Comparison"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="text-amber-800 hover:underline font-medium"
                  >
                    → {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#004aad] p-6 rounded-xl shadow text-white">
            <h3 className="text-lg font-bold mb-3">Need UT Consultation?</h3>
            <p className="text-blue-100 text-sm mb-4">
              Our ASNT Level III UT engineers develop PAUT and TOFD procedures, qualify techniques, and manage inspection programs to ASME, API, and AWS codes.
            </p>
            <Link
              to="/contact"
              className="block bg-white text-[#004aad] text-center font-bold px-4 py-3 rounded-lg hover:bg-blue-50 transition text-sm"
            >
              Contact Our UT Experts
            </Link>
          </div>
        </aside>
      </div>

      <ContactDetails />
    </div>
  );
}
