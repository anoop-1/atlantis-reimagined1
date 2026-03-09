import ContactDetails from "@/components/ContactDetails";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  Shield,
  Camera,
  AlertTriangle,
  Zap,
  Target,
  Clock,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Layers,
} from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "What is radiographic testing used for?",
    a: "Radiographic Testing (RT) is used to detect internal defects in welds, castings, forgings, and pressure-containing components without cutting or damaging them. Common defects detected include porosity, cracks, slag inclusions, incomplete fusion, lack of penetration, and voids. RT is mandatory for code-required weld inspection under ASME Section VIII, ASME B31.3, API 1104, AWS D1.1, and other major fabrication and construction codes.",
  },
  {
    q: "What is the difference between X-ray and gamma ray testing?",
    a: "X-rays are produced by electrical equipment (X-ray tubes) and require power to operate. Operators can turn the radiation on and off, control energy levels (kV), and fine-tune image quality. Gamma rays come from radioactive isotopes such as Iridium-192, Cobalt-60, or Selenium-75. Gamma sources are fully portable with no power requirements, making them ideal for field locations and remote pipeline girth welds. However, gamma rays cannot be turned off and require strict radiation safety protocols including exclusion zones and personal dosimetry. X-rays generally offer better image quality and contrast for thin sections; gamma sources are preferred for field and remote locations.",
  },
  {
    q: "What is digital radiography vs film radiography?",
    a: "Film radiography uses silver halide photographic film to record the radiation image. Film is the traditional method with an established archive record and is still required by some codes. Digital Radiography (DR) uses flat-panel detectors for real-time image capture with no film processing, faster turnaround, and immediate review on screen. Computed Radiography (CR) uses reusable phosphor imaging plates that are scanned after exposure — offering portability similar to film with digital advantages. DR and CR are increasingly accepted under ASME Section V Article 2 and provide improved post-processing, digital storage, and faster inspection rates.",
  },
  {
    q: "What ASME code covers RT of welds?",
    a: "ASME Section V, Article 2 is the primary governing code for radiographic examination of welds in ASME-code pressure vessels and piping. It specifies image quality indicators (IQIs/penetrameters), technique requirements, film and detector types, geometric requirements, and density acceptance ranges. ASME Section V Article 22 covers radiographic standards. For pipeline girth welds, API 1104 applies. Structural steel welds are governed by AWS D1.1. Each code references ASTM E94 for general RT guidance and ASTM E747 for IQI specifications.",
  },
  {
    q: "Is RT safe? What radiation protection is required?",
    a: "Industrial radiography involves ionizing radiation and requires rigorous safety controls. In the United States, the Nuclear Regulatory Commission (NRC) licenses industrial radiography operations, with many states operating as NRC Agreement States with their own equivalent programs. Requirements include: a licensed Radiation Safety Officer (RSO), annual radiation exposure limits for workers (50 mSv/year occupational dose), exclusion zones during exposure, radiation survey meters, personal dosimeters (TLDs or OSL badges), and emergency procedures. Gamma source users must hold specific isotope licenses. RT is safe when proper procedures are followed — it is the controls and training that make it so.",
  },
  {
    q: "Can RT detect surface defects?",
    a: "RT is primarily optimized for detecting volumetric internal defects — porosity, inclusions, voids, and similar three-dimensional flaws. It can detect surface cracks only if they have sufficient width and are oriented parallel (or nearly parallel) to the radiation beam. Tight planar defects such as cracks oriented perpendicular to the radiation beam may not be visible on the radiograph. For reliable surface and near-surface crack detection, Magnetic Particle Testing (MT) for ferromagnetic materials or Liquid Penetrant Testing (PT) for any material are the preferred methods. RT and UT are typically used together for complete weld examination.",
  },
  {
    q: "How does RT compare to UT for weld inspection?",
    a: "RT and UT complement each other and each has specific advantages. RT advantages: provides a permanent photographic record, excellent for volumetric defects (porosity, inclusions), relatively simple to interpret, widely accepted by codes for weld qualification. UT advantages: no radiation hazard, no exclusion zone required, can detect planar defects (cracks) oriented in any direction, gives depth sizing, faster for thick sections, and does not require access to both sides. RT requires access to both sides of the weld to place film or detector. In practice, many ASME and API codes allow either method or specify both for different weld configurations. See our /ut-vs-rt-comparison guide for a detailed analysis.",
  },
  {
    q: "What is an IQI (image quality indicator)?",
    a: "An Image Quality Indicator (IQI), also called a penetrameter, is a small reference device placed on the component being radiographed to verify that the radiograph has adequate sensitivity and quality. There are two main types: wire IQIs (ASTM E747) consisting of a set of wires of decreasing diameter, and hole IQIs (plaque type) with drilled holes. The required IQI sensitivity is specified by the applicable code — for example, ASME Section V Article 2 specifies 2% sensitivity, meaning a wire or hole representing 2% of the section thickness must be visible on the radiograph. IQIs are mandatory proof that the RT technique has achieved the minimum required image quality.",
  },
];

const rtTechniques = [
  {
    name: "Film Radiography (Conventional)",
    description:
      "Silver halide photographic film records the radiation image after chemical processing. Film RT is the gold standard for permanent archival records and is accepted by all major codes including ASME Section V Article 2. Film provides excellent contrast and resolution for thin to medium sections and remains widely used for ASME code weld qualification.",
    icon: Camera,
  },
  {
    name: "Digital Radiography (DR)",
    description:
      "Flat-panel amorphous silicon or CMOS detectors capture radiographic images in real time with no film processing required. DR provides immediate image review on screen, superior dynamic range versus film, digital storage, and dramatically faster throughput — up to 10x faster than film for production inspection. Increasingly accepted under ASME Section V and AWS D1.1.",
    icon: Zap,
  },
  {
    name: "Computed Radiography (CR)",
    description:
      "Reusable photostimulable phosphor (PSP) imaging plates replace film. After exposure, the plate is scanned in a CR reader to produce a digital image. CR offers portability comparable to film RT while delivering digital advantages — no darkroom, immediate review, digital storage, and reusable plates. Widely used for field pipeline and pressure vessel inspection.",
    icon: Layers,
  },
  {
    name: "Gamma Radiography",
    description:
      "Radioactive isotopes — primarily Iridium-192 (Ir-192), Cobalt-60 (Co-60), or Selenium-75 (Se-75) — provide a portable, self-contained radiation source requiring no electrical power. Ir-192 is the most common gamma source, ideal for 15–85mm steel sections and field pipeline girth welds per API 1104. Co-60 handles thick sections up to 200mm. Se-75 offers low energy for tight access pipe welds.",
    icon: Target,
  },
  {
    name: "Real-Time Radiography (RTR/Fluoroscopy)",
    description:
      "Real-Time Radiography uses fluorescent screens or digital flat panels to produce a continuous live image, allowing inspection of moving components and production-line objects. RTR is used for castings on a conveyor, inspection of moving assemblies, and scenarios where immediate pass/fail decisions are needed. Resolution is generally lower than film or static DR.",
    icon: Clock,
  },
];

const sourcesData = [
  {
    source: "X-ray Tube",
    energy: "50–450 kV",
    sectionRange: "Thin to medium (up to ~80mm steel at 450 kV)",
    environment: "Controlled (shop/lab, power required)",
    notes: "Best image quality, adjustable energy, no isotope license needed",
  },
  {
    source: "Iridium-192 (Ir-192)",
    energy: "0.31–0.60 MeV",
    sectionRange: "15–85mm steel",
    environment: "Field and remote locations",
    notes: "Most common gamma source; 73.8-day half-life; wide API 1104 use",
  },
  {
    source: "Cobalt-60 (Co-60)",
    energy: "1.17–1.33 MeV",
    sectionRange: "Up to 200mm steel",
    environment: "Heavy industrial / thick-section work",
    notes: "Very long half-life (5.27 yr); high penetrating power; strict shielding needed",
  },
  {
    source: "Selenium-75 (Se-75)",
    energy: "0.27–0.40 MeV",
    sectionRange: "10–40mm steel",
    environment: "Confined/tight access, pipe welds",
    notes: "Low energy — excellent for pipe welds in tight spaces; 119.8-day half-life",
  },
];

const governingCodes = [
  { std: "ASME Section V, Article 2", scope: "Radiographic examination of welds — technique, IQI, film/detector requirements" },
  { std: "ASME Section V, Article 22", scope: "Radiographic examination standards — acceptance criteria reference" },
  { std: "API 1104", scope: "Welding of pipelines and related facilities — pipeline girth weld RT" },
  { std: "AWS D1.1", scope: "Structural welding code — RT acceptance criteria for structural welds" },
  { std: "ASTM E94", scope: "Guide for Radiographic Examination — general RT guidance" },
  { std: "ASTM E747", scope: "Wire image quality indicators (IQIs) for radiography" },
  { std: "EN ISO 17636", scope: "European RT standard for metallic materials — Parts 1 (film) and 2 (digital)" },
  { std: "IAEA Safety Series No. GSR Part 3", scope: "International radiation protection — occupational and public dose limits" },
];

const industryApplications = [
  {
    title: "Oil & Gas",
    detail:
      "Pipeline girth weld inspection per API 1104 is the highest-volume RT application in the world. RT is also used for pressure vessel nozzle welds, flange attachment welds, subsea pipeline tie-in spools, and compressor station piping. Gamma radiography with Ir-192 dominates remote pipeline work due to portability and no-power requirement.",
    link: "/ndt-for-oil-gas",
  },
  {
    title: "Power Generation",
    detail:
      "Boiler drum and header weld inspection to ASME Section I, main steam and feedwater piping to ASME B31.1, pressure vessel examination per ASME Section VIII Division 1 and 2, and nuclear power plant component inspection under ASME Section III. RT is a key quality assurance tool during power plant construction and major overhauls.",
    link: "/ndt-for-power-generation",
  },
  {
    title: "Aerospace",
    detail:
      "Casting inspection for turbine blades and housings, brazed joint evaluation, bonded assembly inspection, and weld quality verification in airframes. Aerospace RT uses X-ray equipment with fine-focus tubes for high-resolution imaging of small castings. ASTM and NAS specifications govern aerospace RT procedures.",
    link: "/ndt-for-aerospace",
  },
  {
    title: "Manufacturing",
    detail:
      "Production-line casting inspection for porosity, shrinkage, and cold shuts. Weld quality control on pressure-containing components. Inspection of complex investment castings used in valves, pumps, and industrial machinery. RTR (real-time radiography) is used for high-throughput automated casting inspection on production lines.",
    link: "/ndt-methods",
  },
];

const certificationLevels = [
  {
    level: "Level I",
    desc: "Performs RT under supervision. Sets up equipment, places IQIs and film/detectors, makes exposures per written procedure. Cannot independently interpret radiographs.",
    hours: "40+ training hours; 400+ field hours (SNT-TC-1A)",
  },
  {
    level: "Level II",
    desc: "Independently performs and interprets RT. Identifies and evaluates indications, writes inspection reports, applies acceptance criteria. Trains Level I personnel.",
    hours: "80+ training hours; 1,600+ field hours (SNT-TC-1A)",
  },
  {
    level: "Level III",
    desc: "Highest level. Certifies personnel, develops and approves RT procedures, selects techniques, manages the RT program. Serves as employer's NDT authority for RT.",
    hours: "Engineering degree or experience equivalency + written exams",
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

export default function RadiographicTesting() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://atlantisndt.com/radiographic-testing",
        "headline":
          "Radiographic Testing (RT): Complete Guide 2026 — X-Ray, Gamma, Digital Radiography & ASME V Article 2",
        "description":
          "Comprehensive guide to radiographic testing: film RT, digital radiography (DR), computed radiography (CR), gamma radiography (Ir-192, Co-60, Se-75), ASME Section V Article 2, API 1104, and ASNT Level I–III certification.",
        "datePublished": "2025-10-07",
        "dateModified": "2026-02-25",
        "author": {
          "@type": "Organization",
          "name": "Atlantis NDT",
          "url": "https://atlantisndt.com",
        },
        "publisher": {
          "@type": "Organization",
          "name": "Atlantis NDT",
          "logo": {
            "@type": "ImageObject",
            "url": "https://atlantisndt.com/favicon-96x96.jpg",
          },
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://atlantisndt.com/radiographic-testing",
        },
        "keywords":
          "radiographic testing, RT NDT, X-ray weld inspection, gamma radiography, digital radiography DR, computed radiography CR, ASME Section V Article 2, API 1104 pipeline radiography, RT certification NDT",
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
        title="Radiographic Testing (RT) | X-Ray, Gamma & Digital Radiography | ASME V Art 2 | Atlantis NDT"
        description="Complete guide to radiographic testing: film RT, digital radiography, gamma (Ir-192, Co-60), computed radiography. ASME V Article 2, API 1104, AWS D1.1. Level I-III RT training and consulting."
        keywords="radiographic testing, RT NDT, X-ray weld inspection, gamma radiography, digital radiography DR, computed radiography CR, ASME Section V Article 2, API 1104 pipeline radiography, RT certification NDT, industrial radiography, film radiography, Iridium-192, Cobalt-60, Selenium-75, IQI penetrameter, ASNT RT Level II, Level III RT consulting"
        structuredData={structuredData}
        canonical="https://atlantisndt.com/radiographic-testing"
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
              Radiographic Testing (RT) | X-Ray &amp; Gamma Weld Inspection |
              ASME V Art 2 | Atlantis NDT
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Everything you need to know about RT — from ionizing radiation
              physics and film vs. digital methods to ASME Section V Article 2,
              API 1104 pipeline radiography, radiation safety, and ASNT Level
              I–III RT certification.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-white text-[#004aad] font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                Get RT Consulting
              </Link>
              <Link
                to="/training"
                className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                RT Training &amp; Certification
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto max-w-6xl px-6 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "X-Ray &amp; Gamma Sources", value: "4 Types" },
              { label: "ASME V Art 2 Compliant", value: "Codes" },
              { label: "Film &amp; Digital Methods", value: "DR / CR / Film" },
              { label: "Certification Levels", value: "I – III" },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-2xl font-bold text-[#004aad]" dangerouslySetInnerHTML={{ __html: s.value }} />
                <div className="text-sm text-slate-500 mt-1" dangerouslySetInnerHTML={{ __html: s.label }} />
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
              "How RT Works",
              "RT Techniques",
              "Radiation Sources",
              "Governing Codes",
              "Applications",
              "RT vs UT",
              "Radiation Safety",
              "Certification",
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
              id="how-rt-works"
              className="text-3xl font-bold mb-5"
              style={{ color: "#004aad" }}
            >
              What Is Radiographic Testing and How Does It Work?
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              <strong>Radiographic Testing (RT)</strong> is a non-destructive
              testing method that uses ionizing radiation — either X-rays or
              gamma rays — to produce an image of the internal structure of a
              component. Just as a medical X-ray reveals bones and tissues
              inside the human body, industrial radiography reveals internal
              flaws, voids, and density variations inside welds, castings, and
              pressure-containing components without cutting or damaging them.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              The physics are straightforward: radiation passes through the
              component and is absorbed at different rates depending on the
              material density encountered. A defect such as a void, porosity
              cluster, or slag inclusion has lower density than surrounding
              sound metal — so more radiation passes through the defect area.
              This differential absorption creates a darker image on the
              recording medium (film, imaging plate, or digital detector)
              directly beneath the defect. A trained radiographic interpreter
              reads this variation in density to identify, locate, and
              characterize the indication.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              Historically, silver halide photographic film was the only
              recording medium available, and film RT remains the most widely
              accepted method under ASME Section V Article 2 and API 1104.
              However, the industry is increasingly adopting Digital
              Radiography (DR) with flat-panel detectors and Computed
              Radiography (CR) with reusable imaging plates. Both digital
              methods eliminate darkroom processing, provide faster results,
              enable digital storage and transmission, and offer superior image
              processing capabilities. Code acceptance of DR and CR has expanded
              significantly since 2010, and ASME Section V Article 2 now
              includes provisions for digital methods when specific sensitivity
              and image quality requirements are met.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              Radiation safety is the most significant differentiator of RT from
              all other NDT methods. Industrial radiography involves ionizing
              radiation that poses biological hazards if workers or the public
              are not properly protected. In the United States, the Nuclear
              Regulatory Commission (NRC) and Agreement State regulators license
              industrial radiography operations. All RT activities must comply
              with 10 CFR Part 34 (NRC radiography regulations), maintain
              exclusion zones during exposure, and ensure that radiation workers
              wear personal dosimeters and are monitored under an approved
              radiation safety program. These requirements add cost and
              complexity to RT relative to other NDT methods — which is why
              Ultrasonic Testing (UT) is increasingly preferred for in-service
              inspection, while RT remains dominant for construction weld
              qualification where a permanent photographic record is required.
            </p>
            <div className="bg-blue-50 border-l-4 border-[#004aad] rounded-r-xl p-6">
              <h3 className="font-bold text-[#004aad] mb-2">
                Key RT Physical Parameters
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Radiation energy:</strong> Higher energy (kV or
                    MeV) penetrates thicker sections but reduces contrast.
                    Matching energy to section thickness is critical for image
                    quality.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Geometric unsharpness (Ug):</strong> The penumbra
                    effect from source size and geometry. ASME Section V limits
                    Ug based on section thickness to preserve sensitivity.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Film/detector density:</strong> ASME V Article 2
                    requires film optical density of 2.0–4.0 H&amp;D for
                    acceptable images. Digital methods use equivalent image
                    quality metrics.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>IQI sensitivity:</strong> Image quality indicators
                    (wire or plaque type) are placed on the source side of the
                    component and must be visible on the final image to confirm
                    technique adequacy. ASME typically requires 2% sensitivity.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* RT Techniques */}
          <section>
            <h2
              id="rt-techniques"
              className="text-3xl font-bold mb-6"
              style={{ color: "#004aad" }}
            >
              RT Techniques: Film, Digital, Gamma &amp; Real-Time
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Radiographic testing encompasses several distinct techniques. The
              appropriate method depends on section thickness, required
              sensitivity, field conditions, code requirements, and whether a
              permanent archival record is needed.
            </p>
            <div className="space-y-5">
              {rtTechniques.map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={i}
                    className="bg-white rounded-xl p-6 shadow border border-slate-100 hover:border-[#004aad] transition"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-[#004aad] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3
                          className="text-xl font-bold mb-2"
                          style={{ color: "#004aad" }}
                        >
                          {tech.name}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          {tech.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Radiation Sources Comparison */}
          <section>
            <h2
              id="radiation-sources"
              className="text-3xl font-bold mb-6"
              style={{ color: "#004aad" }}
            >
              Radiation Sources Comparison
            </h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              Selecting the correct radiation source is one of the most
              important decisions in RT. Source energy must match the material
              and section thickness to achieve adequate penetration while
              maintaining sufficient image contrast and sensitivity.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow mb-6">
              <table className="w-full text-sm">
                <thead className="bg-[#004aad] text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold">Source</th>
                    <th className="text-left p-4 font-semibold">Energy</th>
                    <th className="text-left p-4 font-semibold">
                      Section Range
                    </th>
                    <th className="text-left p-4 font-semibold">Environment</th>
                    <th className="text-left p-4 font-semibold">Key Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {sourcesData.map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className="p-4 font-semibold text-[#004aad]">
                        {row.source}
                      </td>
                      <td className="p-4 text-slate-700">{row.energy}</td>
                      <td className="p-4 text-slate-700">{row.sectionRange}</td>
                      <td className="p-4 text-slate-600">{row.environment}</td>
                      <td className="p-4 text-slate-600">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-amber-800 text-sm leading-relaxed">
                <strong>Note on Iridium-192:</strong> Ir-192 is the most
                commonly used gamma source in industrial radiography worldwide.
                Its half-life of 73.8 days means source activity — and therefore
                exposure time — changes continuously. Exposure calculations must
                be updated frequently, and sources must be periodically replaced.
                All Ir-192 operations require NRC or Agreement State licensing.
              </p>
            </div>
          </section>

          {/* Governing Codes */}
          <section>
            <h2
              id="governing-codes"
              className="text-3xl font-bold mb-6"
              style={{ color: "#004aad" }}
            >
              Governing Codes &amp; Standards for RT
            </h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              Radiographic Testing must be performed in accordance with
              applicable codes and standards. The governing code depends on the
              type of component, industry, and jurisdiction. RT procedures are
              prepared by a qualified Level III and approved by the authorized
              inspection agency or owner.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {governingCodes.map((code, i) => (
                <div
                  key={i}
                  className="flex gap-3 bg-white rounded-xl p-4 shadow border border-slate-100"
                >
                  <div className="w-2 bg-[#004aad] rounded-full flex-shrink-0 min-h-[40px]" />
                  <div>
                    <p className="font-semibold text-[#004aad]">{code.std}</p>
                    <p className="text-slate-600 text-sm">{code.scope}</p>
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
              RT Applications by Industry
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
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    {app.detail}
                  </p>
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

          {/* RT vs UT */}
          <section className="bg-slate-100 rounded-2xl p-8 border border-slate-200">
            <h2
              id="rt-vs-ut"
              className="text-2xl font-bold mb-5"
              style={{ color: "#004aad" }}
            >
              RT vs UT: When to Use Each Method
            </h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              Radiographic Testing and Ultrasonic Testing are the two primary
              volumetric NDT methods for weld inspection. Understanding when to
              use each is essential for code compliance, cost efficiency, and
              inspection effectiveness.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-5 border border-blue-200">
                <h3 className="font-bold text-[#004aad] mb-3">
                  Use RT When:
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm">
                  {[
                    "A permanent photographic record is required (code qualification, litigation evidence)",
                    "Detecting volumetric defects: porosity, inclusions, voids, blow holes",
                    "Inspecting pipe welds per API 1104 in the field (gamma RT)",
                    "Thin to medium section thickness where film density requirements are met",
                    "Code specifically mandates RT (some ASME Section VIII Div 1 joints)",
                    "Castings and complex geometries where UT probe placement is impractical",
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-5 border border-amber-200">
                <h3 className="font-bold text-amber-700 mb-3">
                  Use UT Instead When:
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm">
                  {[
                    "No radiation hazard / exclusion zone is acceptable (in-service plant inspection)",
                    "Detecting planar defects: cracks, lack of fusion (UT is more sensitive to orientation)",
                    "Accurate defect depth sizing is needed (RT cannot size depth)",
                    "One-sided access only — RT requires access to both sides for film/detector placement",
                    "Very thick sections where RT exposure times become impractical",
                    "Code allows UT as an alternative to RT with equivalent examination",
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-5 text-center">
              <Link
                to="/ut-vs-rt-comparison"
                className="inline-block bg-[#004aad] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Full UT vs RT Comparison Guide →
              </Link>
            </div>
          </section>

          {/* Radiation Safety */}
          <section>
            <h2
              id="radiation-safety"
              className="text-3xl font-bold mb-5"
              style={{ color: "#004aad" }}
            >
              Radiation Safety: NRC, Agreement States &amp; RSO Requirements
            </h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              Radiation safety is not optional in industrial radiography — it
              is a legal requirement enforced by federal and state regulatory
              agencies. Any company performing industrial radiography in the
              United States must hold an NRC license (or an equivalent Agreement
              State license) and maintain an approved radiation safety program.
              Failure to comply can result in license revocation, fines, and
              criminal liability.
            </p>
            <div className="grid md:grid-cols-2 gap-5 mb-6">
              {[
                {
                  icon: Shield,
                  title: "NRC Licensing (10 CFR Part 34)",
                  detail:
                    "Industrial radiographers using sealed radioactive sources must hold an NRC license or an Agreement State equivalent. 10 CFR Part 34 specifies equipment requirements, safety procedures, personnel training, and annual refresher requirements. Licensees must designate a Radiation Safety Officer (RSO).",
                },
                {
                  icon: Target,
                  title: "Agreement State Programs",
                  detail:
                    "37 US states are NRC Agreement States that regulate industrial radiography under their own radiation control programs (equivalent to NRC regulations). Radiography companies must hold the appropriate state license for each jurisdiction where they operate. Some states have reciprocity provisions for short-duration work.",
                },
                {
                  icon: BookOpen,
                  title: "Radiation Safety Officer (RSO)",
                  detail:
                    "Every licensed radiography operation must designate an RSO responsible for managing the radiation safety program, ensuring regulatory compliance, reviewing exposure records, investigating incidents, and maintaining emergency procedures. RSOs must complete NRC-accepted training (typically 40 hours) and demonstrate competency.",
                },
                {
                  icon: Clock,
                  title: "Personal Dosimetry",
                  detail:
                    "All industrial radiographers must wear personal dosimeters (thermoluminescent dosimeters / TLDs or optically stimulated luminescence / OSL badges) to measure occupational radiation dose. Records must be maintained for 3 years under NRC regs. Annual dose limit for radiation workers: 50 mSv (5 rem) effective dose equivalent.",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-white rounded-xl p-6 shadow border border-slate-100"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-red-600" />
                      </div>
                      <h3 className="font-bold text-slate-800 mt-1">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <p className="text-red-800 text-sm leading-relaxed">
                <strong>Consulting Note:</strong> Atlantis NDT provides
                consulting support for radiation safety program development,
                NRC/Agreement State license application assistance, RSO
                mentoring, and RT procedure development in accordance with
                applicable regulations. Contact us at{" "}
                <Link to="/consulting" className="underline font-medium">
                  /consulting
                </Link>{" "}
                for radiation safety compliance support.
              </p>
            </div>
          </section>

          {/* Certification */}
          <section className="bg-white rounded-2xl p-8 shadow border border-slate-100">
            <h2
              id="certification"
              className="text-3xl font-bold mb-5"
              style={{ color: "#004aad" }}
            >
              RT Certification: ASNT SNT-TC-1A, ISO 9712 &amp; PCN
            </h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              RT has some of the highest training hour requirements of any NDT
              method under ASNT SNT-TC-1A, reflecting the complexity of
              radiographic interpretation and the safety responsibilities
              involved. Certification is required by virtually all RT codes and
              industry specifications.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {certificationLevels.map((l, i) => (
                <div
                  key={i}
                  className="bg-blue-50 rounded-xl p-5 border border-blue-100"
                >
                  <div className="text-[#004aad] font-bold text-lg mb-2">
                    {l.level}
                  </div>
                  <p className="text-slate-700 text-sm mb-3">{l.desc}</p>
                  <p className="text-slate-500 text-xs">{l.hours}</p>
                </div>
              ))}
            </div>
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 mb-6">
              <h3 className="font-bold text-slate-800 mb-3">
                International Certification Options
              </h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>ASNT SNT-TC-1A:</strong> The primary US standard.
                    Employer-based certification — the employer defines
                    experience and training requirements within SNT-TC-1A
                    minimums.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>ASNT CP-189:</strong> A more prescriptive ASNT
                    standard with centralized examination requirements. Widely
                    specified for nuclear and defence contracts.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>ISO 9712:</strong> The international standard
                    (equivalent to EN ISO 9712 in Europe). Third-party
                    certification body administers exams. Required in Europe,
                    Middle East, and many Asia-Pacific markets.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>PCN (Personnel Certification in NDT):</strong> The
                    UK/Europe certification scheme administered by the British
                    Institute of Non-Destructive Testing (BINDT). Required by
                    many North Sea and European energy operators.
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/training"
                className="bg-[#004aad] text-white px-5 py-3 rounded-lg font-semibold hover:bg-[#003580] transition"
              >
                View RT Training Courses
              </Link>
              <Link
                to="/asnt-certification"
                className="border border-[#004aad] text-[#004aad] px-5 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                ASNT Certification Guide
              </Link>
              <Link
                to="/consulting"
                className="border border-slate-300 text-slate-700 px-5 py-3 rounded-lg font-semibold hover:bg-slate-50 transition"
              >
                Level III RT Consulting
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2
              id="faq"
              className="text-3xl font-bold mb-6"
              style={{ color: "#004aad" }}
            >
              Radiographic Testing — Frequently Asked Questions
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
              Ready to Start RT Inspection, Training, or Consulting?
            </h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Atlantis NDT provides ASNT-certified Radiographic Testing
              consulting, Level I–III RT training, and radiation safety program
              support across the USA, Middle East, India, and Asia-Pacific.
              Contact our team for a scope of work and quote.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-white text-[#004aad] font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                Get a Quote
              </Link>
              <Link
                to="/training"
                className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                RT Training Courses
              </Link>
              <Link
                to="/consulting"
                className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                RT &amp; Radiation Safety Consulting
              </Link>
            </div>
          </section>
        </article>

        {/* Sidebar */}
        <aside className="hidden md:block md:col-span-1 space-y-6 mt-2">
          <div className="bg-white p-6 rounded-xl shadow border border-slate-100 sticky top-16">
            <h3
              className="text-lg font-bold mb-4"
              style={{ color: "#004aad" }}
            >
              On This Page
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {[
                ["#how-rt-works", "How RT Works"],
                ["#rt-techniques", "RT Techniques"],
                ["#radiation-sources", "Radiation Sources"],
                ["#governing-codes", "Governing Codes"],
                ["#applications", "Applications by Industry"],
                ["#rt-vs-ut", "RT vs UT Comparison"],
                ["#radiation-safety", "Radiation Safety & NRC"],
                ["#certification", "ASNT / ISO 9712 Cert"],
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
            <h3
              className="text-lg font-bold mb-3"
              style={{ color: "#004aad" }}
            >
              Related NDT Methods
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                ["/ultrasonic-testing", "Ultrasonic Testing (UT)"],
                ["/magnetic-particle-testing", "Magnetic Particle Testing (MT)"],
                ["/eddy-current-testing", "Eddy Current Testing (ECT)"],
                ["/penetrant-testing", "Liquid Penetrant Testing (PT)"],
                ["/visual-testing", "Visual Testing (VT)"],
                ["/ut-vs-rt-comparison", "UT vs RT Comparison"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="text-[#004aad] hover:underline font-medium"
                  >
                    → {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-amber-50 p-6 rounded-xl shadow border border-amber-200">
            <h3 className="text-lg font-bold mb-3 text-amber-800">
              Industry Applications
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                ["/ndt-for-oil-gas", "RT for Oil & Gas"],
                ["/ndt-for-power-generation", "RT for Power Generation"],
                ["/ndt-for-aerospace", "RT for Aerospace"],
                ["/asnt-certification", "ASNT Certification Guide"],
                ["/consulting", "RT Level III Consulting"],
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
            <h3 className="text-lg font-bold mb-3">
              Need RT Consultation?
            </h3>
            <p className="text-blue-100 text-sm mb-4">
              Our ASNT Level III engineers provide RT procedure development,
              radiation safety program consulting, and personnel certification
              support.
            </p>
            <Link
              to="/contact"
              className="block bg-white text-[#004aad] text-center font-bold px-4 py-3 rounded-lg hover:bg-blue-50 transition text-sm"
            >
              Contact Our RT Experts
            </Link>
          </div>
        </aside>
      </div>

      <ContactDetails />
    </div>
  );
}
