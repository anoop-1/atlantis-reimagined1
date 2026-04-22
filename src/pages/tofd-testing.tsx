import ContactDetails from "@/components/ContactDetails";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { CheckCircle, Waves, Shield, Target, Gauge, Clock, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "What is TOFD testing?",
    a: "Time of Flight Diffraction (TOFD) is an ultrasonic testing technique that uses two transducers — a transmitter and a receiver — positioned on either side of a weld or defect area. Unlike conventional pulse-echo UT which relies on reflected signals, TOFD detects the small diffracted signals generated at the tips of planar defects such as cracks, lack of fusion, and incomplete penetration. The time of flight of these diffracted tip signals is used to calculate the precise depth of the defect's upper and lower tips, enabling highly accurate flaw sizing. TOFD is recognized in ASME Section V Article 4 Mandatory Appendix III and BS EN ISO 10863 as a proven volumetric weld inspection technique.",
  },
  {
    q: "How does TOFD measure flaw size?",
    a: "TOFD measures flaw height (through-wall extent) by detecting the diffracted signals from the upper and lower tips of a planar defect and calculating the difference in their time of flight. The transmitter sends an ultrasonic pulse that travels through the material in all directions. When the wavefront encounters the tip of a crack or lack of fusion, it diffracts — generating a weak circular wave from that point. The receiver detects these diffracted waves. The time of arrival of the signal from the upper tip (closer to the surface) is earlier than that from the lower tip (deeper in the wall). The difference in arrival times — multiplied by the material sound velocity and divided by two — gives the vertical distance between the tips: the flaw height. This technique achieves sizing accuracy of ±0.5–1mm for internal flaws, independent of defect orientation.",
  },
  {
    q: "What is the dead zone in TOFD?",
    a: "The dead zone in TOFD refers to regions near the inspection surfaces where flaw detection is unreliable due to interference with the lateral wave (at the top surface) or the back wall reflection (at the bottom surface). The lateral wave is a surface-skimming wave that arrives at the receiver before any subsurface signals — defects in the top few millimetres of material may be masked by the tail of the lateral wave pulse. Similarly, defects very close to the back wall may be masked by the back wall reflection. The extent of the dead zone depends on the probe frequency, separation, and material thickness — typically 1–3mm near each surface for standard configurations. For this reason, TOFD is almost always combined with PAUT or conventional UT to provide complementary coverage of the near-surface and back-wall regions that TOFD cannot inspect reliably.",
  },
  {
    q: "What ASME code covers TOFD?",
    a: "TOFD is governed by ASME Section V, Article 4, Mandatory Appendix III for pressure vessel and pressure piping weld inspection. Appendix III specifies the equipment requirements (frequency, beam angle, probe separation), calibration procedure (lateral wave and back wall reference), scanning protocol, and data recording requirements for TOFD inspections. ASME Section VIII Division 1 and Division 2 reference Appendix III for volumetric weld examination. For in-service inspection of nuclear components, ASME Section XI references TOFD. ASME Code Case 2235 explicitly includes TOFD (alongside PAUT) as an acceptable alternative to radiographic testing for pressure vessel weld inspection. The European equivalent is BS EN ISO 10863, which covers TOFD of welds in the same applications.",
  },
  {
    q: "Can TOFD replace radiographic testing?",
    a: "Yes, in many applications. ASME Code Case 2235 formally permits TOFD (combined with PAUT) as an alternative to radiographic testing (RT) for pressure vessel weld examination under ASME Section VIII Division 1. TOFD and PAUT together provide equivalent or superior coverage to RT for detecting volumetric defects (porosity, inclusions) and offer significantly better sensitivity to planar defects (cracks, lack of fusion) which RT often misses due to orientation effects. The combined PAUT+TOFD system has replaced RT as the standard weld inspection method for pressure vessel fabrication in many refineries, LNG plants, and power generation facilities — eliminating radiation hazards, exclusion zones, radiation permits, and film processing while delivering superior defect characterization and permanent digital records.",
  },
  {
    q: "What is the difference between TOFD and PAUT?",
    a: "TOFD and PAUT are complementary ultrasonic techniques that are almost always used together for complete weld coverage. TOFD uses a pair of transducers (transmitter and receiver) that detect diffracted signals from defect tips — providing highly accurate flaw sizing (height measurement) and excellent probability of detection for planar vertical defects throughout the weld volume. Its limitation is the dead zone at near-surface and back-wall regions. PAUT uses a multi-element array that steers the beam through multiple angles, producing a cross-sectional S-scan image — excellent for detecting and characterizing defects at all depths including the near-surface and back-wall regions where TOFD has dead zones. Together, PAUT (with its wide angular coverage and near-surface sensitivity) and TOFD (with its accurate sizing and volumetric coverage) provide comprehensive weld inspection that exceeds the capability of either technique alone. Most ASME Appendix III+IV combined inspection programs run PAUT and TOFD simultaneously in a single encoded scan pass.",
  },
  {
    q: "What certification is needed for TOFD?",
    a: "TOFD is a specialist ultrasonic technique requiring both UT certification and technique-specific competency. Under ASNT SNT-TC-1A, TOFD operators must hold UT Level II certification with demonstrated TOFD technique competency as defined in the employer's written practice. Under ISO 9712, UT Level 2 with TOFD technique endorsement is required. In the UK, PCN UT Level 2 with TOFD technique qualification is accepted. As with PAUT, ASME Section V Appendix III requires a written procedure specifically qualified for the weld geometry — personnel certification alone is insufficient. The procedure must be demonstrated on a mock-up block with appropriate reference reflectors before use on production welds. Atlantis NDT provides TOFD technique training and ASME Appendix III procedure development.",
  },
  {
    q: "What is a D-scan in TOFD?",
    a: "A D-scan (depth-scan or TOFD scan) is the standard TOFD data display. It is a time-depth plot generated as the pair of TOFD probes moves along the weld — with distance along the scan on the horizontal axis and time (depth) on the vertical axis. The D-scan shows the lateral wave at the top (earliest arrival time), the back wall reflection at the bottom (latest arrival time), and any subsurface features (defects, geometry changes) as parabolic curves or horizontal lines in between. A planar defect appears as two curved reflections: one from the upper tip and one from the lower tip. The vertical separation between these two reflections corresponds directly to the defect height. Interpreting D-scans requires specific training because the image appearance depends heavily on defect geometry and orientation — concave-upward parabolas indicate upper tips (defect above the scan point) and convex-downward parabolas indicate lower tips.",
  },
];

const tofdVsComparison = [
  { attribute: "Primary Detection Principle", tofd: "Diffraction from defect tips", paut: "Reflection — beam steered to defect", rt: "X-ray or gamma attenuation through defect volume" },
  { attribute: "Flaw Sizing Accuracy", tofd: "±0.5–1mm (vertical height)", paut: "±1–2mm (from S-scan image)", rt: "Poor — 2D shadow only, no depth info" },
  { attribute: "Surface Sensitivity", tofd: "Poor — dead zone 1–3mm at each surface", paut: "Good — near-surface angles covered", rt: "Good for surface and subsurface" },
  { attribute: "Planar Defect Detection", tofd: "Excellent — orientation independent", paut: "Excellent — multi-angle coverage", rt: "Poor if defect parallel to X-ray beam" },
  { attribute: "Volumetric Defect Detection", tofd: "Good — porosity detected by scattering", paut: "Good — high amplitude reflection", rt: "Excellent — RT optimized for porosity/slag" },
  { attribute: "Permanent Record", tofd: "Digital D-scan — full encoded record", paut: "Digital S/B/C-scan — full encoded record", rt: "Film or digital radiograph" },
  { attribute: "Radiation Hazard", tofd: "None — sound waves only", paut: "None — sound waves only", rt: "Yes — ionizing radiation, exclusion zones required" },
  { attribute: "Applicable ASME Code", tofd: "ASME V Art 4 App III, CC 2235", paut: "ASME V Art 4 App IV, CC 2235", rt: "ASME V Art 2, ASME VIII" },
  { attribute: "Inspection Speed", tofd: "Very fast — single pass with encoder", paut: "Fast — single probe position covers full volume", rt: "Moderate — shot-by-shot, film processing time" },
];

const governingCodes = [
  { code: "ASME Section V, Article 4, Mandatory Appendix III", scope: "TOFD examination requirements for pressure vessel and piping welds — equipment, calibration, scanning, data recording, and interpretation requirements" },
  { code: "ASME Section VIII, Division 1 & Division 2", scope: "Pressure vessel weld examination — references Appendix III for TOFD as an accepted volumetric examination technique for fabrication inspection" },
  { code: "ASME Code Case 2235", scope: "Permits TOFD (combined with PAUT) as a full alternative to radiographic testing for pressure vessel weld inspection — eliminates radiation requirements" },
  { code: "EN ISO 10863", scope: "TOFD of welds — European standard covering probe configuration, calibration, data acquisition, interpretation, and reporting for TOFD weld inspection" },
  { code: "BS 7706", scope: "Guide to TOFD of metallic structures — UK standard providing detailed guidance on TOFD technique selection, equipment qualification, and defect interpretation" },
  { code: "API 1104 Appendix A", scope: "Pipeline girth weld inspection — includes TOFD as part of combined AUT/PAUT systems for pipeline construction weld examination per alternative acceptance criteria" },
];

const tofdApplications = [
  {
    title: "Pressure Vessel Seam Weld Inspection",
    detail: "TOFD combined with PAUT provides comprehensive volumetric inspection of pressure vessel circumferential and longitudinal seam welds as an alternative to RT under ASME Code Case 2235. The combination provides superior detection of planar defects (cracks, lack of fusion, incomplete penetration) and accurate height sizing for fitness-for-service assessment — critical for API 510 compliance programs.",
    link: "/ndt-for-oil-gas",
  },
  {
    title: "Pipeline Girth Welds",
    detail: "Pipeline AUT systems for girth weld inspection routinely combine TOFD and zonal PAUT channels. TOFD provides volumetric coverage and accurate height sizing of mid-wall defects, while PAUT channels address specific zones including the near-surface and back-wall regions. Combined PAUT+TOFD AUT inspection achieves 60–120 girth welds per day in pipeline construction — far exceeding RT throughput.",
    link: "/ndt-for-oil-gas",
  },
  {
    title: "In-Service Inspection and Fitness for Service",
    detail: "TOFD is particularly valuable for in-service inspection because its accurate flaw height sizing enables reliable fitness-for-service assessments per API 579/ASME FFS-1. Where a crack or lack of fusion is found during re-inspection, TOFD height measurement combined with a fracture mechanics assessment (FAD analysis) determines whether the flaw is acceptable for continued service or requires repair — avoiding unnecessary and costly weld repairs.",
    link: "/consulting",
  },
  {
    title: "Austenitic Stainless and Dissimilar Metal Welds",
    detail: "Austenitic stainless steel and dissimilar metal welds (e.g., stainless to carbon steel clad) are notoriously difficult to inspect by conventional UT due to high acoustic attenuation and grain noise. TOFD at lower frequencies (2–5 MHz) provides good volumetric coverage and accurate sizing in these materials — a critical capability for boiler header welds, nuclear primary circuit welds, and process vessel nozzle welds in chemical plants.",
    link: "/ndt-for-power-generation",
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

export default function TOFDTesting() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://atlantisndt.com/tofd-testing",
        "headline": "TOFD Testing (Time of Flight Diffraction): Complete Guide 2026 — Weld Inspection, ASME V Appendix III & Certification",
        "description": "Comprehensive guide to TOFD testing: how time of flight diffraction works, dead zone, D-scan, ASME V Appendix III, EN ISO 10863, TOFD vs PAUT vs RT. Specialist TOFD training available.",
        "datePublished": "2025-11-01",
        "dateModified": "2026-02-25",
        "author": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
        "publisher": {
          "@type": "Organization",
          "name": "Atlantis NDT",
          "logo": { "@type": "ImageObject", "url": "https://atlantisndt.com/favicon-96x96.jpg" },
        },
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/tofd-testing" },
        "keywords": "TOFD testing, time of flight diffraction, TOFD weld inspection, TOFD NDT, ASME V Article 4 Mandatory Appendix III, EN ISO 10863, TOFD vs PAUT, TOFD certification, D-scan TOFD, TOFD dead zone, TOFD lateral wave, weld volumetric inspection",
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
        title="TOFD Testing | Time of Flight Diffraction | ASME V App III | Weld Inspection | Atlantis NDT"
        description="Complete guide to TOFD testing: time of flight diffraction for weld volumetric inspection. ASME V Appendix III, EN ISO 10863. TOFD vs PAUT vs RT comparison."
        keywords="TOFD testing, time of flight diffraction, TOFD weld inspection, TOFD NDT, ASME V Article 4 Mandatory Appendix III, EN ISO 10863, BS 7706, TOFD vs PAUT, TOFD vs RT, TOFD certification, D-scan TOFD, TOFD dead zone, TOFD lateral wave, weld volumetric inspection, TOFD ultrasonic testing, TOFD technique, TOFD flaw sizing, TOFD training"
        structuredData={structuredData}
        canonical="https://atlantisndt.com/tofd-testing"
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
              TOFD Testing | Time of Flight Diffraction | Weld Volumetric Inspection
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Everything you need to know about TOFD — diffraction physics, D-scan interpretation, ASME V Appendix III, sizing accuracy, dead zones, TOFD vs PAUT vs RT, and specialist TOFD training from Atlantis NDT.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-white text-[#004aad] font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                Get TOFD Consulting
              </Link>
              <Link
                to="/training"
                className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                TOFD Training &amp; Certification
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
              { stat: "Volumetric Weld Coverage", label: "Full through-wall detection per ASME App III" },
              { stat: "ASME V App III", label: "Procedure qualification & documentation" },
              { stat: "Lateral Wave + Back Wall", label: "Three-signal D-scan interpretation" },
              { stat: "Level II–III Technique", label: "UT + TOFD endorsement required" },
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
              "How TOFD Works",
              "TOFD vs PAUT vs RT",
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
              What Is TOFD Testing (Time of Flight Diffraction)?
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              <strong>Time of Flight Diffraction (TOFD)</strong> is a specialized ultrasonic testing technique that uses the physics of diffraction — rather than reflection — to detect and precisely size defects in welds and other metallic components. Developed by Maurice Silk at the UK Atomic Energy Authority in the 1970s, TOFD has become a cornerstone of industrial weld inspection for pressure vessels, pipelines, and power generation equipment, and is recognized in ASME Section V Article 4 Mandatory Appendix III and BS EN ISO 10863.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              Where conventional pulse-echo UT detects defects by the amplitude of reflected signals, TOFD operates on a fundamentally different principle: it detects the tiny diffracted waves generated at the tips of planar defects. When an ultrasonic wavefront encounters the sharp tip of a crack, notch, or lack of fusion, it diffracts — generating a weak spherical wave that radiates outward from the tip in all directions. A receiver transducer positioned on the opposite side of the weld picks up these diffracted tip signals. The time it takes for each tip's diffracted signal to arrive at the receiver — the time of flight — is directly related to the depth of that tip in the material. The difference in time of flight between the upper tip signal and the lower tip signal gives the defect height with exceptional accuracy.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              The practical consequences of this physics are significant. TOFD is largely insensitive to defect orientation — a near-vertical crack, a tilted crack, and a horizontal lamination all generate diffracted tip signals that TOFD can detect and size. This contrasts with conventional pulse-echo UT, which is strongly affected by defect orientation (a crack that is not perpendicular to the beam may be missed entirely). TOFD is also capable of measuring defect height to an accuracy of ±0.5–1mm for internal flaws — far better than the amplitude-based sizing methods (6dB drop, 20dB drop) used in conventional UT, which are sensitive to reflectivity and beam characteristics.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              TOFD has one significant limitation that must be understood and managed: the dead zone. Because TOFD detects signals against a background of the lateral wave (which arrives first, skimming along the top surface) and the back wall reflection (which arrives last, reflecting from the bottom surface), defects very close to the top or bottom surface are masked by these reference signals. The dead zone typically extends 1–3mm from each surface, depending on probe frequency, separation, and material thickness. For this reason, TOFD is almost always used in combination with PAUT or conventional UT angle beams, which provide complementary coverage of the near-surface and back-wall regions that TOFD cannot inspect reliably.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#004aad] rounded-r-xl p-6 mt-6">
              <h3 className="font-bold text-[#004aad] mb-3">Key TOFD Characteristics</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Sizing accuracy:</strong> ±0.5–1mm for internal flaw height — independent of defect orientation or reflectivity.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Orientation independence:</strong> Detects cracks, lack of fusion, and incomplete penetration regardless of their angle to the beam — a major advantage over pulse-echo UT.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Volumetric coverage:</strong> A single TOFD scan covers the full wall thickness between the dead zones — all defects in the inspection volume are detected simultaneously.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Dead zone limitation:</strong> Near-surface (1–3mm) and back-wall (1–3mm) regions require supplementary inspection with PAUT or angle-beam UT to achieve complete coverage.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Permanent record:</strong> Encoded D-scan data stored digitally — enables post-inspection review and comparison with future re-inspection for fitness-for-service trending.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* How TOFD Works */}
          <section>
            <h2
              id="how-tofd-works"
              className="text-3xl font-bold mb-5"
              style={{ color: "#004aad" }}
            >
              How TOFD Works: Physics, Setup, and D-scan Interpretation
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              Understanding TOFD requires grasping the four signals that appear in every D-scan and what each one represents.
            </p>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow border border-slate-100">
                <h3 className="text-xl font-bold mb-3" style={{ color: "#004aad" }}>Transmitter-Receiver Pair Setup</h3>
                <p className="text-slate-700 leading-relaxed">
                  A TOFD inspection uses two transducers configured as a matched pair — a transmitter and a receiver — positioned symmetrically on either side of the weld centerline. Both transducers are oriented at the same refracted angle (typically 60°–70° longitudinal wave for weld inspection) so that their beam intersection zone covers the full weld cross-section. The distance between the transmitter and receiver — the probe center separation (PCS) — is calculated so that the mid-point of the beam intersection falls at approximately two-thirds of the wall thickness. An encoder records the position of the probe pair as it moves along the weld, enabling the D-scan to accurately map defect position along the weld length.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow border border-slate-100">
                <h3 className="text-xl font-bold mb-3" style={{ color: "#004aad" }}>The Four TOFD Signals</h3>
                <p className="text-slate-700 leading-relaxed mb-3">
                  Every TOFD A-scan (and therefore every column of the D-scan) contains up to four distinct signals:
                </p>
                <ol className="space-y-3 text-slate-700">
                  <li className="flex gap-3">
                    <span className="w-7 h-7 bg-[#004aad] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                    <span><strong>Lateral wave:</strong> A surface-skimming compressional wave that travels directly from transmitter to receiver along the top surface. It arrives first — defining the top of the D-scan image and providing a reference signal for depth calibration. Defects in the near-surface dead zone appear within or just below the lateral wave.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-7 h-7 bg-[#004aad] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                    <span><strong>Upper tip diffraction signal:</strong> When a planar defect is present, the upper tip generates a diffracted wave that arrives after the lateral wave. Its time of flight gives the depth of the upper tip (closest to the surface).</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-7 h-7 bg-[#004aad] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                    <span><strong>Lower tip diffraction signal:</strong> The lower tip of the defect generates a second diffracted wave, arriving later (deeper) than the upper tip signal. The time difference between signals 2 and 3 is converted to defect height using the sound velocity.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-7 h-7 bg-[#004aad] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                    <span><strong>Back wall reflection:</strong> The transmitted beam reflects from the back wall and arrives at the receiver last, defining the bottom of the D-scan image. Defects in the back-wall dead zone appear within or just above the back wall signal.</span>
                  </li>
                </ol>
              </div>

              <div className="bg-white rounded-xl p-6 shadow border border-slate-100">
                <h3 className="text-xl font-bold mb-3" style={{ color: "#004aad" }}>D-scan (Time-Depth Plot) Interpretation</h3>
                <p className="text-slate-700 leading-relaxed mb-3">
                  The D-scan is the primary TOFD data display — a grayscale or colour-coded image where horizontal position represents distance along the weld scan direction, and vertical position represents time (converted to depth using sound velocity). The lateral wave appears as a bright band at the top, the back wall reflection appears as a bright band at the bottom, and any defects appear as pairs of curved features between them.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  A planar defect that is smaller than the probe beam width appears as two back-to-back parabolic curves — one for the upper tip (concave upward) and one for the lower tip (convex downward). The vertical separation between the peaks of these two curves corresponds to the defect height. As the probe passes over the defect, the curves converge at the point directly above/below the defect, giving the defect's lateral position. TOFD D-scan analysis software applies sound velocity and geometry corrections to convert time measurements to depth measurements with ±0.5–1mm accuracy. Accurate interpretation requires specific training — the appearance of TOFD signals is fundamentally different from conventional UT A-scan or PAUT S-scan displays.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow border border-slate-100">
                <h3 className="text-xl font-bold mb-3" style={{ color: "#004aad" }}>Sizing Accuracy: ±0.5–1mm for Internal Flaws</h3>
                <p className="text-slate-700 leading-relaxed">
                  TOFD's primary advantage over all other conventional UT sizing methods is its accuracy. Conventional UT 6dB drop sizing is affected by beam divergence, defect reflectivity, and surface condition — giving sizing errors of ±2–5mm or more. TOFD time-of-flight sizing is a direct geometric measurement that is independent of these factors. Comparative studies have consistently shown TOFD achieves ±0.5–1mm accuracy for internal defect height sizing in carbon steel over a wide range of thicknesses (10–100mm). This accuracy is particularly important for fitness-for-service (FFS) assessments under API 579/ASME FFS-1, where defect height measurements directly affect remaining life calculations and safe operating envelopes.
                </p>
              </div>
            </div>
          </section>

          {/* TOFD vs PAUT vs RT */}
          <section>
            <h2
              id="tofd-vs-paut-vs-rt"
              className="text-3xl font-bold mb-5"
              style={{ color: "#004aad" }}
            >
              TOFD vs PAUT vs Radiography: Comparison
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              For weld volumetric inspection, the three main competing techniques are TOFD, PAUT, and radiographic testing (RT). In practice, TOFD and PAUT are almost always used together as a complementary pair — their limitations cancel each other out. The table below compares the three methods across the key attributes that matter for industrial inspection programs.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow mb-6">
              <table className="w-full text-sm">
                <thead className="bg-[#004aad] text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold">Attribute</th>
                    <th className="text-left p-4 font-semibold">TOFD</th>
                    <th className="text-left p-4 font-semibold">PAUT</th>
                    <th className="text-left p-4 font-semibold">Radiography (RT)</th>
                  </tr>
                </thead>
                <tbody>
                  {tofdVsComparison.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-4 font-semibold text-[#004aad]">{row.attribute}</td>
                      <td className="p-4 text-slate-700 text-sm">{row.tofd}</td>
                      <td className="p-4 text-slate-700 text-sm">{row.paut}</td>
                      <td className="p-4 text-slate-600 text-sm">{row.rt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <h3 className="font-bold text-green-800 mb-2">Best Practice: Combined PAUT + TOFD</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                The industry best practice for pressure vessel and pipeline weld inspection is to run PAUT and TOFD simultaneously in a single encoded scan pass. PAUT provides near-surface and back-wall coverage (addressing TOFD's dead zones), real-time imaging, and S-scan defect visualization. TOFD provides volumetric coverage throughout the wall, accurate height sizing, and orientation-independent detection. Together, the combined system achieves higher probability of detection and better defect characterization than either technique alone — and typically qualifies under ASME Code Case 2235 as a complete replacement for radiographic testing.
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
              Governing Codes &amp; Standards for TOFD
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              TOFD inspections must be performed to a written procedure qualified per the applicable code. In ASME applications, procedure qualification requires a demonstration block representative of the production weld geometry, with reference reflectors to verify detection sensitivity and sizing accuracy.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
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
          </section>

          {/* Applications */}
          <section>
            <h2
              id="applications"
              className="text-3xl font-bold mb-6"
              style={{ color: "#004aad" }}
            >
              TOFD Applications by Industry
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {tofdApplications.map((app, i) => (
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

          {/* TOFD Workflow Deep Dive */}
          <section className="bg-slate-100 rounded-2xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#004aad" }}>
              TOFD Inspection Workflow: From Setup to Report
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              A properly executed TOFD inspection follows a systematic workflow that ensures code compliance and data integrity. For ASME Appendix III inspections, every step must be documented in the written procedure and verified against the calibration record before production scanning begins.
            </p>
            <h3 className="font-bold text-[#004aad] mb-3">TOFD Inspection Workflow</h3>
            <ol className="space-y-3 text-slate-700">
              {[
                "Procedure review — confirm that the written TOFD procedure is qualified for the specific weld geometry (material, thickness, joint type). Essential variables include probe frequency, PCS, beam angle, and aperture.",
                "Equipment setup — configure TOFD instrument (typically Olympus OmniScan X3, Eddyfi Mantis, or Zetec TOPAZ) with TOFD channel parameters from the procedure. Attach encoder to the scanner.",
                "Calibration — scan the TOFD calibration block with reference reflectors. Verify lateral wave appearance, back wall reflection, and detection of reference notches at specified sensitivity. Record calibration data.",
                "Production scan — move the encoded TOFD probe pair along the weld at a controlled speed (typically 25–100mm/s), recording D-scan data continuously with encoder position.",
                "PAUT simultaneous scan — in combined PAUT+TOFD setups, run both acquisition channels simultaneously so one encoded scan pass acquires both datasets.",
                "Data review — qualified TOFD Level II technician reviews D-scans using analysis software (OmniPC, UltraVision). Identifies and characterizes all indications — distinguishing real defects from geometry signals, weld profile reflections, and noise.",
                "Flaw sizing — for detected defects, cursor-based time-of-flight measurement in the software gives upper tip depth, lower tip depth, and defect height (±0.5–1mm accuracy).",
                "Reporting — produce written inspection report per ASME requirements including: scan maps showing defect positions, D-scan images of all recorded indications, sizing table, and accept/reject determination per acceptance criteria.",
              ].map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="w-7 h-7 bg-[#004aad] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Training & Certification */}
          <section className="bg-white rounded-2xl p-8 shadow border border-slate-100">
            <h2
              id="training"
              className="text-3xl font-bold mb-5"
              style={{ color: "#004aad" }}
            >
              TOFD Training &amp; Certification
            </h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              TOFD is a specialist technique that requires both UT certification and dedicated TOFD-specific training. The signal interpretation challenges of TOFD (reading D-scans is fundamentally different from conventional A-scan or PAUT S-scan analysis) mean that technicians must receive specific training and demonstrate D-scan interpretation competency before performing production TOFD inspections.
            </p>
            <div className="grid md:grid-cols-2 gap-5 mb-6">
              {[
                { scheme: "ASNT UT Level II + TOFD Endorsement", desc: "TOFD is performed under the UT method at Level II, with TOFD technique training specified in the employer's written practice. The employer's Level III must define TOFD training hours and experience requirements and certify technicians accordingly. ASNT Level III UT approves TOFD procedures." },
                { scheme: "ISO 9712 UT Level 2 + TOFD Technique", desc: "ISO 9712 includes TOFD as a recognized technique within the UT method. UT Level 2 with TOFD technique endorsement is required for independent TOFD inspection. The technique endorsement covers TOFD theory, D-scan acquisition, and signal interpretation." },
                { scheme: "PCN UT Level 2 + TOFD (UK & International)", desc: "The PCN scheme (BINDT) includes TOFD as a specific technique qualification at UT Level 2 and Level 3. Widely required for North Sea offshore projects, nuclear inspection programs, and international EPC contract work in oil & gas and power generation." },
                { scheme: "ASME Appendix III Written Procedure", desc: "Personnel certification alone does not satisfy ASME requirements. The written TOFD procedure must be qualified on a representative demonstration block, with evidence that all reference reflectors are detected at the required sensitivity. Atlantis NDT develops and qualifies ASME Appendix III TOFD procedures." },
              ].map((s, i) => (
                <div key={i} className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                  <h3 className="font-bold text-[#004aad] mb-2 text-sm">{s.scheme}</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-700 mb-5">
              Atlantis NDT provides TOFD technique training covering diffraction physics, probe selection and PCS calculation, D-scan acquisition, signal interpretation, sizing methodology, and ASME Appendix III procedure requirements. Training is available in Houston, Dubai, Hyderabad, Singapore, and online. Contact us for upcoming TOFD course schedules and combined PAUT+TOFD training packages.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/training" className="bg-[#004aad] text-white px-5 py-3 rounded-lg font-semibold hover:bg-[#003580] transition">
                View TOFD Training Courses
              </Link>
              <Link to="/asnt-certification" className="border border-[#004aad] text-[#004aad] px-5 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                ASNT Certification Guide
              </Link>
              <Link to="/consulting" className="border border-slate-300 text-slate-700 px-5 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">
                Level III TOFD Consulting
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
                { href: "/phased-array-ut", label: "Phased Array UT (PAUT)", desc: "The complementary technique to TOFD — combined PAUT+TOFD for complete weld coverage" },
                { href: "/radiographic-testing", label: "Radiographic Testing (RT)", desc: "RT vs TOFD comparison — ASME Code Case 2235 and when TOFD replaces RT" },
                { href: "/ndt-for-oil-gas", label: "NDT for Oil & Gas", desc: "API 510, API 570, pressure vessel and pipeline TOFD inspection programs" },
                { href: "/ndt-for-power-generation", label: "NDT for Power Generation", desc: "Boiler weld TOFD, HRSG inspection, power plant outage TOFD programs" },
                { href: "/asnt-certification", label: "ASNT Certification Guide", desc: "UT Level I, II, III requirements and TOFD technique endorsement" },
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
              TOFD Testing — Frequently Asked Questions
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
              Ready for TOFD Inspection or Training?
            </h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Atlantis NDT provides ASME Appendix III TOFD procedure development, combined PAUT+TOFD inspection programs, Level II TOFD training, and ASNT Level III UT consulting across the USA, Middle East, India, Asia-Pacific, and Europe. Contact our team to discuss your TOFD inspection requirements.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-white text-[#004aad] font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition">
                Get a TOFD Quote
              </Link>
              <Link to="/training" className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition">
                TOFD Training — Enrol Now
              </Link>
              <Link to="/consulting" className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition">
                Level III TOFD Consulting
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
                ["#introduction", "What Is TOFD?"],
                ["#how-tofd-works", "How TOFD Works"],
                ["#tofd-vs-paut-vs-rt", "TOFD vs PAUT vs RT"],
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
            <h3 className="text-lg font-bold mb-3" style={{ color: "#004aad" }}>TOFD Key Advantages</h3>
            <ul className="space-y-3 text-sm text-slate-700">
              {[
                { icon: Waves, text: "±0.5–1mm sizing accuracy — most accurate ultrasonic flaw height measurement method" },
                { icon: Shield, text: "No radiation — TOFD replaces RT with no exclusion zones or permits" },
                { icon: Gauge, text: "Orientation independent — detects cracks at any angle in the wall" },
                { icon: Target, text: "Permanent D-scan record — ASME Appendix III compliant digital data" },
                { icon: Clock, text: "Fast — single encoded pass covers full weld cross-section" },
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
                ["/phased-array-ut", "Phased Array UT (PAUT)"],
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
            <h3 className="text-lg font-bold mb-3">Need TOFD Consultation?</h3>
            <p className="text-blue-100 text-sm mb-4">
              Our ASNT Level III engineers develop ASME Appendix III TOFD procedures, qualify combined PAUT+TOFD programs, and provide specialist TOFD training and consulting.
            </p>
            <Link
              to="/contact"
              className="block bg-white text-[#004aad] text-center font-bold px-4 py-3 rounded-lg hover:bg-blue-50 transition text-sm"
            >
              Contact Our TOFD Experts
            </Link>
          </div>
        </aside>
      </div>

      <ContactDetails />
    </div>
  );
}
