import ContactDetails from "@/components/ContactDetails";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  Eye,
  Camera,
  Shield,
  Clock,
  Target,
  ChevronDown,
  ChevronUp,
  Zap,
  Layers,
} from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "What is visual testing in NDT?",
    a: "Visual Testing (VT) is the most fundamental non-destructive testing method — it involves examining the surface of a material, weld, or component using the unaided eye or optical aids to detect surface discontinuities, dimensional irregularities, corrosion, and workmanship defects. VT is typically required before any other NDT method is applied. It is governed by ASME Section V Article 9 for pressure-containing components and by AWS D1.1 for structural welds. Despite being the simplest NDT method, VT requires trained and certified inspectors to be effective and code-compliant.",
  },
  {
    q: "What does ASME Section V Article 9 require for VT?",
    a: "ASME Section V Article 9 governs visual examination for pressure vessels, piping, and boilers. Key requirements include: minimum illuminance of 50 foot-candles (538 lux) for direct visual examination; inspector's eye within 24 inches of the surface being examined and at an angle no less than 30 degrees to the surface; surface condition must be suitable for examination (free of contaminants that could mask indications); written examination procedure required; personnel must be qualified per the referencing code. Remote visual examination is permitted when direct access is not available, provided that at minimum the remote system can resolve a 1/16-inch (1.6mm) character on a Jaeger 1 chart at the inspection distance.",
  },
  {
    q: "What is remote visual inspection (RVI)?",
    a: "Remote Visual Inspection (RVI) uses optical instruments — rigid borescopes, flexible videoscopes, fiberscopes, cameras on extension poles, ROV-mounted cameras, or drone-mounted systems — to inspect areas that are inaccessible to direct visual examination. RVI allows inspectors to examine vessel internals, pipe interiors, turbine blade passages, heat exchanger tube surfaces, confined spaces, elevated structures, and underwater components without requiring physical entry or proximity. ASME Section V Article 9 permits RVI provided the resolution and field of view requirements are met and the remote system is demonstrated to be capable of detecting the required minimum indication size.",
  },
  {
    q: "What is the minimum illuminance for visual testing per ASME?",
    a: "ASME Section V Article 9 requires a minimum illuminance of 50 foot-candles (approximately 538 lux) on the surface being examined for direct visual testing. Many clients and specifications require higher illuminance — 100 foot-candles or more — for critical weld examination. Illuminance is measured at the surface being examined using a calibrated light meter. For remote visual examination, the equivalent requirement is that the system must resolve a 1/16-inch Jaeger 1 letter at the examination distance, verifying adequate image resolution rather than specifying a lux value.",
  },
  {
    q: "What defects can visual testing detect?",
    a: "VT can detect any defect that is visible at the surface. Common detectable conditions include: weld surface defects (undercut, overlap, crater cracks, surface porosity, spatter, incomplete fill), corrosion and pitting, mechanical damage (dents, gouges, deformation), coating degradation, dimensional non-conformance (weld reinforcement, leg size, gap), misalignment, surface contamination, and heat damage or discoloration. VT cannot detect subsurface or internal defects — for those, volumetric methods such as Ultrasonic Testing (UT) or Radiographic Testing (RT) are required. However, VT is the first screening step that determines whether a component is ready for more advanced inspection.",
  },
  {
    q: "What is the difference between VT and other NDT methods?",
    a: "VT is limited to surface conditions visible to the eye or optical instruments — it cannot detect subsurface or internal defects without cutting. Other NDT methods extend inspection capability: MT (magnetic particle) detects surface and near-surface cracks in ferromagnetic materials using magnetic fields; PT (penetrant) detects surface-breaking defects in any material using capillary action; UT (ultrasonic) detects internal and volumetric defects using sound waves; RT (radiographic) images internal defects using radiation; ECT (eddy current) detects surface and near-surface defects in conductive materials electromagnetically. VT is the prerequisite to all of these — code requirements typically mandate VT acceptance before any other method is applied.",
  },
  {
    q: "How long does VT Level II certification take?",
    a: "VT has the lowest training hour requirement of all NDT methods under ASNT SNT-TC-1A. Typical requirements: Level I requires 16 hours of training and 70 hours of work experience; Level II requires an additional 16 hours of training and 130 hours of experience (for a total of 200 hours). This is significantly less than methods like RT or UT, which require 1,600+ hours of experience for Level II. Despite the lower hour requirement, VT Level II certifiers must demonstrate the ability to identify and evaluate all relevant surface conditions, apply acceptance criteria from applicable codes (ASME, AWS), and write examination reports. Atlantis NDT offers VT Level I and II courses that can be completed in as little as 3–5 days.",
  },
  {
    q: "What is drone NDT inspection?",
    a: "Drone NDT inspection uses unmanned aerial vehicles (UAVs) equipped with high-resolution cameras, thermal imaging sensors, or other payloads to perform visual inspection of elevated, offshore, or otherwise difficult-to-access structures. Common drone VT applications include: chimney and flare stack inspection (eliminating scaffold or rope access), offshore platform and jacket inspection, bridge and viaduct surveys, tank external roof inspection, power line and pylon inspection, and building facade surveys. Drone inspection dramatically reduces cost and time compared to scaffold or rope access — a chimney that takes 5 days to scaffold can be inspected by drone in 2–4 hours. Drones operate under FAA Part 107 regulations in the USA and equivalent national aviation authority rules elsewhere. Data is typically collected as 4K video and still images, reviewed by certified VT inspectors.",
  },
];

const vtMethods = [
  {
    name: "Direct Visual Testing",
    description:
      "The fundamental VT method: examination using the unaided eye or magnification not exceeding 6x. ASME Section V Article 9 requires minimum 50 foot-candles (538 lux) illuminance on the examination surface, inspector's eye within 24 inches, and viewing angle no less than 30 degrees. Used for weld surface acceptance per AWS D1.1, pre- and post-hydrotest visual, and in-process fabrication inspection.",
    icon: Eye,
  },
  {
    name: "Remote Visual Inspection (RVI)",
    description:
      "Uses optical instruments — rigid borescopes, flexible videoscopes, cameras on poles, or system-mounted cameras — to inspect areas inaccessible to the naked eye. ASME Section V Article 9 permits RVI provided the system resolution meets the 1/16-inch Jaeger 1 character requirement. Essential for vessel internals, pipeline interiors with crawler systems, heat exchanger channel inspection, and confined space assessment.",
    icon: Camera,
  },
  {
    name: "Rigid Borescope",
    description:
      "A straight or angled optical tube with fiber optic or LED illumination, used to inspect small-diameter bores and passages inaccessible to the eye. Rigid borescopes provide excellent image clarity and are standard in turbine blade cooling hole inspection, engine cylinder bores, gun barrel inspection, and precision machined component verification. Available in diameters from 1.5mm to 25mm with various field-of-view options.",
    icon: Target,
  },
  {
    name: "Flexible Videoscope",
    description:
      "An articulating, camera-tipped insertion tube that steers in four directions, navigating bends and turns inside pipes, vessels, and engine interiors. Modern videoscopes record HD video and still images, integrate measurement tools for defect sizing, and can transmit live feed to remote reviewers. Widely used for pressure vessel internal inspection, steam turbine disc spaces, heat exchanger tube sheet inspection, and aircraft engine borescope inspection per FAA AC 43.13.",
    icon: Zap,
  },
  {
    name: "Drone / UAV Visual Inspection",
    description:
      "Unmanned aerial vehicles equipped with stabilized 4K cameras, zoom lenses, or thermal imagers perform external inspection of elevated structures — chimneys, cooling towers, flare stacks, offshore platforms, bridges, transmission towers, and wind turbines. FAA Part 107 certified drone pilots operate in coordination with certified VT inspectors who review the imagery. Drone inspection typically reduces access cost by 80% compared to scaffold for tall structures.",
    icon: Layers,
  },
];

const equipmentItems = [
  {
    title: "Rigid Borescopes",
    detail:
      "Straight and angled rigid borescopes in diameters from 1.5–25mm. Side-viewing (90°/120°) and forward-viewing types. Fiber optic illumination. Working lengths from 100mm to 1,000mm. Used for turbine blades, valve internals, and precision machined bores.",
  },
  {
    title: "Flexible Videoscopes",
    detail:
      "4-way articulating tip (up/down/left/right), insertion tube diameter 3.9–8mm, lengths from 1.5–10m. Built-in HD camera, LED illumination, digital image/video storage. Measurement function for defect sizing. Leading systems: Olympus IPLEX, GE Everest VideoProbe, Evident.",
  },
  {
    title: "Remote Crawler Systems",
    detail:
      "Motorized camera crawler vehicles for pipeline internal inspection, vessel floor survey, and confined space entry. Carry pan-tilt-zoom cameras and sometimes UT thickness probes. Used for API 650 tank floor inspection and pipeline internal corrosion surveys.",
  },
  {
    title: "Drone / UAV Systems",
    detail:
      "Industrial inspection drones (DJI Enterprise Zenmuse, Flyability Elios for confined spaces) with 4K stabilized cameras, optical zoom, thermal imaging, and sub-centimeter positioning accuracy. FAA Part 107 operations. Data processed using photogrammetry and AI defect flagging software.",
  },
  {
    title: "Lighting Systems",
    detail:
      "Portable LED work lights (1,000–10,000 lumen), UV/black light lamps (for combined PT/MT/VT inspection), pen lights, and intrinsically safe lighting for hazardous areas. Light meters (luxmeters) calibrated to verify compliance with the 50 fc ASME Section V minimum requirement.",
  },
  {
    title: "Magnification &amp; Measurement Tools",
    detail:
      "Weld gauges (bridge cam, fillet weld gauges), magnifiers (2x–10x), dental mirrors on extension arms, calipers, and digital profile gauges. ASME Section V limits direct VT magnification to 6x maximum. Weld gauges verify reinforcement height, undercut depth, fillet leg size, and throat dimension.",
  },
];

const asmeArt9Requirements = [
  {
    req: "Illuminance (direct VT)",
    detail: "Minimum 50 foot-candles (538 lux) measured at the examination surface with a calibrated light meter",
  },
  {
    req: "Viewing distance",
    detail: "Inspector's eye within 24 inches (610mm) of the examination surface",
  },
  {
    req: "Viewing angle",
    detail: "Viewing angle no less than 30 degrees to the surface being examined",
  },
  {
    req: "Surface condition",
    detail: "Surface must be free of coatings, scale, or contaminants that could mask relevant indications",
  },
  {
    req: "Remote VT resolution",
    detail: "Remote system must resolve a 1/16-inch character on a Jaeger 1 chart at the examination distance",
  },
  {
    req: "Personnel qualification",
    detail: "VT personnel must be qualified and certified per the referencing code's personnel qualification requirements (e.g., ASME Section IX, SNT-TC-1A, or ISO 9712)",
  },
  {
    req: "Written procedure",
    detail: "A documented VT examination procedure is required, specifying all technique variables: equipment, illuminance verification, distance, angle, and acceptance criteria",
  },
];

const awsD11Requirements = [
  {
    stage: "Pre-weld Visual Inspection",
    criteria:
      "Joint configuration and fit-up: root opening, groove angle, bevel preparation, and backing bar condition verified before welding begins. Base material condition and cleanliness checked.",
  },
  {
    stage: "In-Process Visual Inspection",
    criteria:
      "Inter-pass cleaning, removal of slag and spatter, weld layer profiles, crater filling at terminations, and correct preheat/interpass temperature maintenance. Defects found in-process are repaired before the next pass.",
  },
  {
    stage: "Post-Weld Visual Acceptance",
    criteria:
      "Weld reinforcement (max 1/8\" for static loads, 3/32\" for cyclic loads), undercut (max 1/32\" for statically loaded, 1/64\" for cyclically loaded), no cracks, no crater cracks, no overlap, no porosity visible at surface exceeding AWS D1.1 Table 6.1 limits.",
  },
  {
    stage: "Weld Profile Requirements",
    criteria:
      "Fillet welds must not be concave (unless specified). Groove welds must completely fill the joint. Weld toes must blend smoothly into base metal without sharp angles. Reinforcement must not exceed specified limits.",
  },
];

const industryApplications = [
  {
    title: "Oil & Gas",
    detail:
      "API 653 tank internal and external visual inspection, vessel entry inspection per API 510, pipeline internal survey using camera crawlers, topside corrosion survey on offshore platforms using drone VT, and insulation condition assessment. VT is the first line of inspection in every API integrity program.",
    link: "/ndt-for-oil-gas",
  },
  {
    title: "Power Generation",
    detail:
      "Gas turbine blade inspection using rigid borescopes during online or borescope port access (no disassembly required), boiler tube fireside deposit and erosion survey, steam turbine disc space videoscope inspection, generator air gap survey, and condenser tube sheet visual inspection.",
    link: "/ndt-for-power-generation",
  },
  {
    title: "Aerospace",
    detail:
      "Aircraft engine borescope inspection per FAA AC 43.13 and OEM maintenance manuals — compressor and turbine stage inspection without removal. Airframe structural inspection using digital cameras and mirrors. Landing gear bay and control surface visual checks per scheduled maintenance intervals. Paint and coating condition surveys.",
    link: "/ndt-for-aerospace",
  },
  {
    title: "Infrastructure",
    detail:
      "Bridge inspection using drone VT and underwater ROV cameras for submerged members. Chimney and cooling tower inspection by drone — replacing weeks of scaffold with hours of flight. Transmission tower and wind turbine tower survey. Railway tunnel and culvert inspection using camera crawlers. Building facade condition assessment.",
    link: "/ndt-methods",
  },
];

const certificationLevels = [
  {
    level: "Level I",
    desc: "Performs VT under supervision. Conducts examination per written procedure, records findings. Cannot independently interpret results or apply acceptance criteria.",
    hours: "16 training hours; 70 field hours (SNT-TC-1A) — VT has the lowest hour requirement of any NDT method",
  },
  {
    level: "Level II",
    desc: "Independently performs VT, interprets results, applies acceptance criteria from applicable codes (ASME, AWS D1.1), writes reports. Trains and supervises Level I personnel.",
    hours: "16 additional training hours; 130+ field hours (total 200 hours) (SNT-TC-1A)",
  },
  {
    level: "Level III",
    desc: "Highest certification level. Certifies VT personnel, approves procedures, responsible employer authority for VT program. AWS CWI (Certified Welding Inspector) is also a widely recognized credential for weld visual inspection.",
    hours: "Engineering background or experience equivalency + written ASNT exams",
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

export default function VisualTesting() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://atlantisndt.com/visual-testing",
        "headline":
          "Visual Testing (VT): Complete Guide 2026 — Direct VT, Remote Visual Inspection, Borescope & Drone NDT",
        "description":
          "Comprehensive guide to visual testing: direct VT, remote visual inspection (RVI), borescope inspection, drone NDT, ASME Section V Article 9, AWS D1.1, and ASNT Level I–III VT certification.",
        "datePublished": "2025-10-05",
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
          "@id": "https://atlantisndt.com/visual-testing",
        },
        "keywords":
          "visual testing NDT, VT inspection, remote visual inspection, borescope inspection, drone NDT inspection, ASME Section V Article 9, weld visual inspection, AWS D1.1 visual, visual testing certification",
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
        title="Visual Testing (VT) | Direct & Remote Visual Inspection | ASME V Art 9 | Atlantis NDT"
        description="Complete guide to visual testing: direct VT, borescope, remote visual (RVI), drone NDT. ASME V Article 9, AWS D1.1. Level I-III VT training + consulting."
        keywords="visual testing NDT, VT inspection, remote visual inspection RVI, borescope inspection, drone NDT inspection, ASME Section V Article 9, weld visual inspection, AWS D1.1 visual, visual testing certification, ASNT VT Level II, flexible videoscope inspection, UAV inspection, drone VT, AWS CWI visual weld inspector"
        structuredData={structuredData}
        canonical="https://atlantisndt.com/visual-testing"
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
              Visual Testing (VT) | Direct &amp; Remote Visual Inspection |
              ASME V Art 9 | Atlantis NDT
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              The complete guide to VT — from direct unaided-eye examination and
              ASME Section V Article 9 requirements to borescope inspection,
              flexible videoscopes, drone NDT, and ASNT Level I–III VT
              certification.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-white text-[#004aad] font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                Get VT Consulting
              </Link>
              <Link
                to="/training"
                className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                VT Training &amp; Certification
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
              { label: "First Line of Inspection", value: "Always Required" },
              { label: "ASME V Art 9 Compliant", value: "Codes" },
              { label: "Direct &amp; Remote Methods", value: "VT / RVI" },
              { label: "Certification Levels", value: "I – III" },
            ].map((s, i) => (
              <div key={i}>
                <div
                  className="text-2xl font-bold text-[#004aad]"
                  dangerouslySetInnerHTML={{ __html: s.value }}
                />
                <div
                  className="text-sm text-slate-500 mt-1"
                  dangerouslySetInnerHTML={{ __html: s.label }}
                />
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
              "How VT Works",
              "VT Methods",
              "Equipment",
              "ASME Article 9",
              "AWS D1.1",
              "Applications",
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
              id="how-vt-works"
              className="text-3xl font-bold mb-5"
              style={{ color: "#004aad" }}
            >
              What Is Visual Testing and Why Is It the Foundation of NDT?
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              <strong>Visual Testing (VT)</strong> is the most fundamental
              non-destructive testing method and, in almost every industry code
              and specification, it is required before any other NDT method can
              be applied. The logic is simple: if a component has unacceptable
              surface conditions — weld spatter, undercut, surface cracks,
              dimensional non-conformance — these must be identified and
              corrected before time and cost are invested in volumetric
              inspection methods like Ultrasonic Testing or Radiographic
              Testing.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              ASME Section V Article 9 is the primary governing document for
              visual examination of pressure vessels, boilers, and pressure
              piping. It defines direct VT (unaided eye or magnification up to
              6x), remote VT using optical aids, and the minimum illuminance,
              distance, and angle requirements that must be met for examination
              results to be valid and code-compliant. AWS D1.1 for structural
              welding adds pre-weld, in-process, and post-weld visual acceptance
              criteria that welding inspectors — including AWS Certified Welding
              Inspectors (CWIs) — must verify at every stage of fabrication.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              What VT can detect covers all surface-observable conditions:
              surface cracks, weld undercut and overlap, corrosion and pitting,
              dimensional deviations (reinforcement height, fillet leg size,
              weld profile), mechanical damage, coating degradation, and general
              workmanship quality. VT cannot detect subsurface or internal
              defects — for those, UT, RT, or ECT are required. However, many
              critical integrity failures begin as surface conditions that a
              trained eye can catch before they propagate into structural
              threats.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              Modern VT has expanded far beyond the inspector's eye. Remote
              Visual Inspection (RVI) using borescopes and flexible videoscopes
              allows access to turbine blade passages, vessel interiors, and
              pipeline bores that would otherwise require costly disassembly or
              confined space entry. Drone-based VT has transformed the
              inspection of elevated structures — chimneys, cooling towers,
              offshore platforms, and bridges — reducing access costs by 70–90%
              compared to scaffold. Robotic crawler systems with cameras inspect
              pipeline interiors, tank floors, and condenser channels
              autonomously, transmitting live video for remote assessment.
            </p>
            <div className="bg-blue-50 border-l-4 border-[#004aad] rounded-r-xl p-6">
              <h3 className="font-bold text-[#004aad] mb-2">
                Key VT Facts (ASME Section V Article 9)
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Illuminance minimum:</strong> 50 foot-candles (538
                    lux) for direct visual — verified with a calibrated light
                    meter before examination begins.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct VT limits:</strong> Inspector's eye within
                    24 inches of surface; viewing angle ≥ 30 degrees. No
                    magnification greater than 6x for code-compliant direct VT.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Remote VT resolution:</strong> Remote systems must
                    demonstrate ability to resolve a 1/16-inch (1.6mm) Jaeger 1
                    character at the working distance.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Surface preparation:</strong> Surface must be clean
                    and free of coatings, scale, or debris that could mask
                    indications before examination commences.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* VT Methods */}
          <section>
            <h2
              id="vt-methods"
              className="text-3xl font-bold mb-6"
              style={{ color: "#004aad" }}
            >
              VT Methods: Direct, Borescope, Videoscope &amp; Drone
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Visual testing encompasses a spectrum of techniques from the
              unaided eye to sophisticated robotic systems. The appropriate
              method depends on accessibility, required resolution, recording
              requirements, and code compliance needs.
            </p>
            <div className="space-y-5">
              {vtMethods.map((method, i) => {
                const Icon = method.icon;
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
                          {method.name}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Equipment */}
          <section>
            <h2
              id="equipment"
              className="text-3xl font-bold mb-6"
              style={{ color: "#004aad" }}
            >
              VT Equipment: Borescopes, Videoscopes, Drones &amp; Lighting
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {equipmentItems.map((eq, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 shadow border border-slate-100"
                >
                  <h3
                    className="font-bold mb-2"
                    style={{ color: "#004aad" }}
                    dangerouslySetInnerHTML={{ __html: eq.title }}
                  />
                  <p
                    className="text-slate-600 text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: eq.detail }}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* ASME Article 9 */}
          <section>
            <h2
              id="asme-article-9"
              className="text-3xl font-bold mb-5"
              style={{ color: "#004aad" }}
            >
              ASME Section V Article 9: Visual Examination Requirements
            </h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              ASME Section V Article 9 is referenced by ASME Section VIII
              (pressure vessels), ASME B31.3 (process piping), ASME B31.1
              (power piping), and ASME Section I (power boilers) for all visual
              examination requirements. Compliance with Article 9 is mandatory
              for code-stamped fabrication. The key requirements are:
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow mb-6">
              <table className="w-full text-sm">
                <thead className="bg-[#004aad] text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold">
                      Requirement
                    </th>
                    <th className="text-left p-4 font-semibold">
                      Article 9 Specification
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {asmeArt9Requirements.map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className="p-4 font-semibold text-[#004aad]">
                        {row.req}
                      </td>
                      <td className="p-4 text-slate-700">{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <p className="text-blue-800 text-sm leading-relaxed">
                <strong>Important:</strong> The referencing code section (e.g.,
                ASME Section VIII Division 1, UW-52 for weld examination)
                specifies which welds require VT, the acceptance criteria
                applicable, and the stage at which VT must be performed. Article
                9 provides the technique requirements, but the referencing code
                provides the inspection scope and acceptance criteria.
              </p>
            </div>
          </section>

          {/* AWS D1.1 */}
          <section>
            <h2
              id="aws-d1.1"
              className="text-3xl font-bold mb-5"
              style={{ color: "#004aad" }}
            >
              AWS D1.1 Visual Weld Inspection Requirements
            </h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              AWS D1.1 Structural Welding Code — Steel specifies visual
              inspection requirements at three stages of fabrication: pre-weld,
              in-process, and post-weld. AWS Certified Welding Inspectors (CWIs)
              perform these examinations on structural steel projects. The code
              defines specific acceptance criteria for each weld condition.
            </p>
            <div className="space-y-4">
              {awsD11Requirements.map((req, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-5 shadow border border-slate-100"
                >
                  <h3
                    className="font-bold mb-2"
                    style={{ color: "#004aad" }}
                  >
                    {req.stage}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {req.criteria}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-5 bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-amber-800 text-sm leading-relaxed">
                <strong>AWS CWI Credential:</strong> The AWS Certified Welding
                Inspector (CWI) credential is the leading qualification for
                weld visual inspection in the structural and manufacturing
                sectors. CWI holders demonstrate proficiency in weld quality,
                code interpretation, and visual acceptance criteria — making
                it a strong complement to ASNT VT Level II certification for
                those working on structural steel, shipbuilding, and
                construction projects. Atlantis NDT offers CWI exam preparation
                courses.
              </p>
            </div>
          </section>

          {/* Applications */}
          <section>
            <h2
              id="applications"
              className="text-3xl font-bold mb-6"
              style={{ color: "#004aad" }}
            >
              VT Applications by Industry
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

          {/* Certification */}
          <section className="bg-white rounded-2xl p-8 shadow border border-slate-100">
            <h2
              id="certification"
              className="text-3xl font-bold mb-5"
              style={{ color: "#004aad" }}
            >
              VT Certification: ASNT SNT-TC-1A, ISO 9712 &amp; AWS CWI
            </h2>
            <p className="text-slate-700 leading-relaxed mb-5">
              Visual Testing has the lowest training hour requirements of any
              ASNT NDT method — reflecting its direct, accessible nature.
              However, effective VT requires a thorough understanding of
              applicable codes, defect morphology, and reporting requirements
              that only comes from structured training and field experience.
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
                VT Certification Options
              </h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>ASNT SNT-TC-1A:</strong> The primary US standard.
                    Employer-based certification with the lowest minimum hour
                    requirements of any ASNT method. Level I: 16 hours / 70
                    experience hours. Level II: additional 16 hours / 130 hours
                    experience.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>ISO 9712 VT:</strong> International third-party VT
                    certification recognized across Europe, the Middle East,
                    and Asia-Pacific. Required by many international operators
                    and EPC contractors.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>AWS CWI (Certified Welding Inspector):</strong> The
                    most recognized credential for weld visual inspection in
                    structural and manufacturing industries. Demonstrates
                    competency in welding codes, quality, and VT acceptance
                    criteria. A strong credential for inspectors combining VT
                    with welding quality oversight.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>PCN VT:</strong> UK/Europe certification via BINDT.
                    Required for North Sea and European energy sector VT work.
                    Written and practical examinations administered by approved
                    certification bodies.
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/training"
                className="bg-[#004aad] text-white px-5 py-3 rounded-lg font-semibold hover:bg-[#003580] transition"
              >
                View VT Training Courses
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
                Level III VT Consulting
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
              Visual Testing — Frequently Asked Questions
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
              Ready to Start VT Inspection, Training, or Consulting?
            </h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Atlantis NDT provides ASNT-certified Visual Testing consulting,
              Level I–III VT training, AWS CWI exam preparation, and drone VT
              program development across the USA, Middle East, India, and
              Asia-Pacific. Contact our team for a scope of work and quote.
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
                VT Training Courses
              </Link>
              <Link
                to="/consulting"
                className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                Level III VT Consulting
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
                ["#how-vt-works", "How VT Works"],
                ["#vt-methods", "VT Methods"],
                ["#equipment", "Equipment"],
                ["#asme-article-9", "ASME Section V Art 9"],
                ["#aws-d1.1", "AWS D1.1 Visual Inspection"],
                ["#applications", "Applications by Industry"],
                ["#certification", "ASNT / ISO 9712 / CWI Cert"],
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
                ["/magnetic-particle-testing", "Magnetic Particle (MT)"],
                ["/penetrant-testing", "Penetrant Testing (PT)"],
                ["/eddy-current-testing", "Eddy Current Testing (ECT)"],
                ["/radiographic-testing", "Radiographic Testing (RT)"],
                ["/ndt-methods", "All NDT Methods"],
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

          <div className="bg-teal-50 p-6 rounded-xl shadow border border-teal-200">
            <h3 className="text-lg font-bold mb-3 text-teal-800">
              Industry Applications
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                ["/ndt-for-oil-gas", "VT for Oil & Gas"],
                ["/ndt-for-power-generation", "VT for Power Generation"],
                ["/ndt-for-aerospace", "VT for Aerospace"],
                ["/asnt-certification", "ASNT Certification Guide"],
                ["/consulting", "Level III VT Consulting"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="text-teal-800 hover:underline font-medium"
                  >
                    → {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#004aad] p-6 rounded-xl shadow text-white">
            <h3 className="text-lg font-bold mb-3">Need VT Consultation?</h3>
            <p className="text-blue-100 text-sm mb-4">
              Our ASNT Level III engineers provide VT procedure development,
              ASME Article 9 compliance review, drone VT program setup, and
              AWS CWI exam preparation.
            </p>
            <Link
              to="/contact"
              className="block bg-white text-[#004aad] text-center font-bold px-4 py-3 rounded-lg hover:bg-blue-50 transition text-sm"
            >
              Contact Our VT Experts
            </Link>
          </div>
        </aside>
      </div>

      <ContactDetails />
    </div>
  );
}
