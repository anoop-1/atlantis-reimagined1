import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { SocialShare } from "@/components/SocialShare";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const faqs = [
  { question: "How is AI predictive maintenance used with digital twins in aviation NDT?", answer: "AI predictive maintenance with digital twins in aviation NDT combines four data streams onto a single aircraft / engine / landing-gear / structure twin: (1) historical NDT inspection findings — eddy current array (ECA), phased-array ultrasonics (PAUT), Total Focusing Method (TFM), thermography for composite, radiography per NAS 410; (2) flight-cycle and flight-hour data from the aircraft maintenance system (AMOS, TRAX, Ramco, Trax) including landing-gear cycles, gust loads, pressurization cycles; (3) sensor data from on-board health monitoring (engine vibration, oil debris, structural strain gauges, fuel-burn anomalies); (4) operating environment data (salt-air corrosion exposure, runway condition, climate). The AI layer — typically a combination of survival analysis, recurrent neural networks for sensor time-series, and Bayesian networks for damage-mechanism inference — predicts remaining useful life per component and triggers NDT inspection at the optimal point in the maintenance window. Boeing, Airbus, GE Aviation, Rolls-Royce, and Pratt &amp; Whitney all deploy variants of this architecture; airlines including Delta TechOps, Lufthansa Technik, KLM E&amp;M, and ST Engineering operate similar implementations on their fleets." },
  { question: "What NDT methods feed into aviation digital twins?", answer: "The dominant methods in 2026 aviation NDT digital twin deployments: (1) Eddy Current Array (ECA) — primary for skin / lap-joint inspection, fastener-hole inspection on aluminium aircraft (Boeing 737, 757, 767, Airbus A320 family); (2) Phased Array UT (PAUT) with TFM — primary for landing-gear pin / bushing, engine compressor blade, and major structural attachments; (3) Composite NDT — phased-array UT and thermography per NAS 410 / EN 4179 for CFRP-heavy aircraft (Boeing 787, 777X, Airbus A350, A220); (4) Radiography — digital RT per ASTM E2339 DICONDE for engine components, fan-disc, low-pressure turbine; (5) Magnetic Particle Inspection (MPI) — landing-gear steel components, engine turbine-disc featuring centrifugal stress concentration; (6) Visual + Borescope — engine internal inspection, structural cavity inspection; (7) Acoustic Emission — fatigue-crack monitoring on critical structural members. The twin ingests findings from each method as structured data (location, defect type, size, growth rate, remaining-life calculation) so cross-method correlation is queryable." },
  { question: "How does aviation digital twin support NAS 410 / EN 4179 NDT compliance?", answer: "NAS 410 (USA AIA spec) and EN 4179 (European equivalent) govern aerospace NDT personnel qualification and certification. The aviation digital twin tracks NDT operator credentials at the inspection-record level: every recorded indication carries the operator's NAS 410 / EN 4179 certification level, method, sector classification, and re-qualification due date. Inspections logged by an operator whose certification has expired trigger automatic review flags and may be rejected by the QA workflow. The twin also tracks NDT procedure-qualification per ASTM E1417 / E1444 / E1316, equipment-calibration records traceable to NIST (USA) or NPL / PTB (EU), and reference-standard usage. For sites pursuing AS9100 / EN 9100 aerospace quality-system certification or producing parts under Boeing D6-1276 / Airbus 1000.2 specifications, the twin's documentation depth supports audit readiness without separate parallel quality records." },
  { question: "What is the ROI of aviation predictive maintenance digital twins?", answer: "Commercial-aviation predictive maintenance digital twin deployments typically deliver 8-15× 5-year ROI through three primary mechanisms. (1) Avoided AOG (Aircraft on Ground) events — a single AOG event costs $50K-$200K in lost revenue plus $30K-$100K in expedited parts and labor; predictive maintenance typically reduces AOG frequency by 25-40% in years 2-5 of deployment. (2) Extended component life — by identifying components in good condition that current schedule-based maintenance would replace, the operator defers replacement capex with proper engineering authorization; typical 5-8% MRO-cost reduction across the fleet. (3) Maintenance check optimization — A-check, B-check, C-check, D-check intervals can be extended for individual aircraft showing strong health-monitoring data, subject to FAA / EASA / CAA approval under MSG-3 or equivalent reliability-based maintenance program. A 50-aircraft narrowbody fleet typically generates $4-12M annual value from these three drivers against a $400-900K/year platform cost." },
  { question: "Does the digital twin handle landing-gear life management?", answer: "Yes — landing-gear life management is one of the highest-value aviation digital twin use cases. Landing-gear components (axles, struts, trunnions, pins, bushings) are life-limited parts subject to mandatory replacement at defined flight-cycle limits per the manufacturer's Component Maintenance Manual (CMM). The digital twin tracks each component's cumulative flight cycles, landing loads (from the aircraft load monitoring system), inspection findings, and remaining-life calculations. For high-cycle aircraft approaching CMM limits, the twin runs damage-tolerance analysis per the original certification basis (FAR Part 25.571 for transport-category, EASA CS-25.571 for European aircraft) and can support life-extension requests submitted to the regulator with engineering substantiation. This avoids premature replacement of major-cost components ($150K-$600K per landing-gear assembly depending on aircraft type) when condition data supports continued safe operation." },
  { question: "How is AI used for composite damage assessment in aviation twins?", answer: "Composite damage assessment combines NDT inspection data (PAUT, infrared thermography, X-ray CT for small samples) with AI-driven damage classification. The 2026 standard architecture: PAUT scans are uploaded to the twin as 3D volumetric data per joint; a convolutional neural network (CNN) trained on tens of thousands of labeled composite-damage examples classifies indications by damage type (delamination, fiber breakage, matrix cracking, impact damage, water ingress, lightning-strike damage). Each classified indication carries a confidence score, recommended action (monitor, repair, replace per Boeing 787 SRM or Airbus A350 SRM), and predicted growth rate. Human NDT Level III review is required for safety-critical findings, but the AI pre-classification reduces analyst time per inspection by 40-60% and improves consistency across geographically distributed MRO sites. The systems are typically trained against OEM-validated damage libraries and re-validated quarterly against new field data." },
  { question: "Which airlines and MROs use AI predictive maintenance digital twins in 2026?", answer: "Major deployments in 2026: Delta TechOps (Boeing 717, 737, 757, 767, A220, A320, A330 fleet); Lufthansa Technik (737, 747, 777, A320, A330, A340, A350 fleet plus third-party MRO); KLM Engineering &amp; Maintenance (737, 777, 787, A330 fleet plus third-party MRO); Air France Industries; ST Engineering Aerospace; AAR Corp; HAECO (777, A320, A330, A350 plus Boeing 737 line maintenance); Emirates Engineering (A380, 777 fleet plus 777X transition); Singapore Airlines Engineering Company. Engine OEMs operate their own platforms: GE Aviation OnPoint, Rolls-Royce TotalCare, Pratt &amp; Whitney EngineWise, CFM SmartFleet. The deployments share the same data architecture: aircraft health monitoring (AHM) sensor data + NDT inspection findings + flight-cycle data → aircraft / engine digital twin → AI predictive maintenance recommendation engine." },
  { question: "Does Atlantis NDT digital twin support aerospace deployments?", answer: "Yes, with the caveat that the dominant aerospace twin deployments today are OEM- or large-MRO-operated platforms (GE OnPoint, Rolls-Royce TotalCare, Lufthansa Technik proprietary, Delta TechOps proprietary). Atlantis NDT digital twin is deployed in 2026 primarily at second-tier MROs and corporate aviation fleets where the OEM platforms are not commercially available or are prohibitively expensive — corporate aviation operators of 5-30 aircraft, regional carriers, military and government aviation operators, and aerospace component manufacturers. For these operators the Atlantis NDT platform delivers the same predictive-maintenance digital-twin capability at an accessible price point ($150K-400K/year depending on fleet size). Integration with AMOS, TRAX, Trax, and Ramco maintenance systems is supported. NAS 410 / EN 4179 compliance documentation is built-in." }
];

const ndtMethods = [
  { method: "Eddy Current Array (ECA)", application: "Skin / lap-joint inspection, fastener-hole inspection on aluminium aircraft", typicalAircraft: "737, 757, 767, A320 family" },
  { method: "Phased Array UT + TFM", application: "Landing-gear pin / bushing, engine compressor blade, structural attachments", typicalAircraft: "All aircraft types" },
  { method: "Composite NDT (PAUT + thermography)", application: "CFRP skin, spar, stringer inspection per NAS 410 / EN 4179", typicalAircraft: "787, 777X, A350, A220" },
  { method: "Digital Radiography (DICONDE)", application: "Engine components, fan disc, low-pressure turbine", typicalAircraft: "All engine types" },
  { method: "Magnetic Particle (MPI)", application: "Landing-gear steel components, engine turbine disc", typicalAircraft: "All aircraft types" },
  { method: "Visual + Borescope", application: "Engine internal inspection, structural cavity, fuel tank", typicalAircraft: "All aircraft types" },
  { method: "Acoustic Emission", application: "Fatigue-crack monitoring on critical structural members", typicalAircraft: "High-cycle narrowbody fleets" },
];

const valueDrivers = [
  { driver: "Avoided AOG events", typicalValue: "$80K-$300K per avoided event", deployment: "Years 1-5 progressive improvement" },
  { driver: "Extended component life", typicalValue: "5-8% MRO cost reduction", deployment: "Realized in years 2-5" },
  { driver: "Maintenance check interval extension", typicalValue: "10-25% C-check / D-check labor cost reduction", deployment: "Years 2-3 after FAA / EASA approval" },
  { driver: "Composite repair cost reduction", typicalValue: "20-35% per repair via earlier detection", deployment: "Years 1-5 progressive" },
  { driver: "Insurance premium reduction", typicalValue: "1-3% on fleet hull / liability premium", deployment: "Years 2-5 after track record" },
];

export default function AIPredictiveMaintenanceDigitalTwinsAviationNDT() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="AI Predictive Maintenance Digital Twins for Aviation NDT (2026 Guide)"
        description="AI predictive maintenance digital twins for aviation NDT. NAS 410 / EN 4179, ECA, PAUT, composite, landing-gear life mgmt. Boeing, Airbus, Delta, Lufthansa, ST Engineering deployments."
        keywords="ai predictive maintenance digital twins aviation ndt, aviation digital twin, aircraft predictive maintenance, aerospace ndt digital twin, nas 410 digital twin, composite ndt digital twin, landing gear digital twin, airline mro digital twin"
        canonical="https://atlantisndt.com/blog/ai-predictive-maintenance-digital-twins-aviation-ndt"
        article={{
          headline: "AI Predictive Maintenance Digital Twins for Aviation NDT — 2026 Reference",
          datePublished: "2026-05-23",
          author: "Atlantis NDT Editorial Team",
          section: "Digital Twins"
        }}
        faq={faqs}
      />
      <Breadcrumbs />

      <section className="bg-gradient-to-br from-sky-700 to-blue-900 text-white pt-24 pb-16">
        <div className="container mx-auto max-w-4xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="text-sky-200 mb-4">Aviation Digital Twins • May 2026 • 13 min read</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Predictive Maintenance Digital Twins for Aviation NDT</h1>
            <p className="text-xl text-sky-100 mb-8">The 2026 reference for AI-powered predictive maintenance digital twins in commercial and corporate aviation. NAS 410 / EN 4179 compliance, composite NDT, landing-gear life management, engine health, and AMOS / TRAX / Ramco maintenance-system integration.</p>
          </motion.div>
        </div>
      </section>

      <div className="py-6 bg-white border-b">
        <div className="container mx-auto max-w-4xl px-6">
          <SocialShare title="AI Predictive Maintenance Digital Twins for Aviation NDT" description="Aerospace digital twin reference covering NAS 410, composite NDT, landing-gear, engine health, and MRO integration." />
        </div>
      </div>

      <article className="py-16">
        <div className="container mx-auto max-w-4xl px-6">

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Why AI Predictive Maintenance Digital Twins Have Become the Aviation Industry Default</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Commercial aviation has been the lead industry for predictive maintenance digital twins since GE Aviation's OnPoint launched in 2007 and Rolls-Royce TotalCare scaled to dominant engine-leasing market share through the 2010s. By 2026 the technology is industry default: every Tier-1 airline runs some flavour of aircraft / engine / structure digital twin, either OEM-provided or in-house. The economic case is compelling — for a 50-aircraft narrowbody fleet, typical 5-year value of $4-12M against a $400-900K/year platform cost, primarily through avoided AOG (Aircraft on Ground) events, extended component life via condition-based replacement, and C-check / D-check interval extension under reliability-based maintenance programs.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              For NDT specifically, aviation digital twins represent the most advanced cross-method data integration in any industry. A single aircraft twin typically ingests data from eddy current array, phased-array UT with TFM, composite ultrasonics, infrared thermography, digital radiography per DICONDE, magnetic-particle inspection, borescope visual, and acoustic emission. All findings are tied to physical location on the aircraft 3D model, indexed against the operator's NAS 410 / EN 4179 credentials, and correlated with flight-cycle and flight-hour data from the maintenance management system.
            </p>
            <div className="bg-sky-50 border-l-4 border-sky-500 p-6">
              <p className="text-sky-900 font-semibold mb-2">Aviation digital twin 2026 facts:</p>
              <ul className="text-sky-900 space-y-1 list-disc list-inside">
                <li>Boeing 787 and Airbus A350 are 50%+ CFRP composite by mass — driving composite NDT digital-twin demand</li>
                <li>NAS 410 / EN 4179 govern aerospace NDT personnel qualification</li>
                <li>AS9100 / EN 9100 aerospace QMS audits routinely require digital traceability</li>
                <li>FAA / EASA reliability-based maintenance programs allow check interval extension under MSG-3</li>
                <li>OEM platforms: GE OnPoint, Rolls-Royce TotalCare, P&amp;W EngineWise, CFM SmartFleet</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">NDT Methods Feeding the Aviation Digital Twin</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                <thead className="bg-sky-100">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold">Method</th>
                    <th className="px-3 py-2 text-left font-semibold">Primary Application</th>
                    <th className="px-3 py-2 text-left font-semibold">Typical Aircraft</th>
                  </tr>
                </thead>
                <tbody>
                  {ndtMethods.map((r, i) => (
                    <tr key={i} className="border-t">
                      <td className="px-3 py-2 font-semibold">{r.method}</td>
                      <td className="px-3 py-2">{r.application}</td>
                      <td className="px-3 py-2 text-sky-700">{r.typicalAircraft}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">NAS 410 / EN 4179 Compliance in the Aviation Twin</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              NAS 410 (USA AIA specification, current revision 410-5) and EN 4179 (European aerospace equivalent, current revision 2017) govern aerospace NDT personnel qualification and certification. Unlike SNT-TC-1A which is a recommended practice for general industry, NAS 410 and EN 4179 are mandatory for any work performed under FAA Part 145 (USA), EASA Part 145 (Europe), or aerospace OEM contracts (Boeing D6-1276 / Airbus 1000.2 / Lockheed Martin / Northrop / Spirit AeroSystems specifications).
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              The aviation digital twin tracks NDT operator credentials at the inspection-record level: every recorded indication carries the operator's NAS 410 / EN 4179 certification level (Level 1 / 2 / 3), method (PT / MT / UT / RT / ET / TT / VT), sector classification, and re-qualification due date. Inspections logged by an operator whose certification has expired trigger automatic review flags. The twin also tracks NDT procedure qualifications per ASTM E1417 (penetrant), E1444 (magnetic-particle), ASNT or Boeing process specifications for ultrasonic, equipment-calibration records traceable to NIST or NPL, and reference-standard usage. For AS9100 / EN 9100 audits this documentation depth removes the need for separate manual quality records.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Landing-Gear Life Management — The Highest-Value Use Case</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Landing-gear components — axles, struts, trunnions, side stays, pins, bushings, brake assemblies — are life-limited parts subject to mandatory replacement at defined flight-cycle limits per the manufacturer's Component Maintenance Manual. For a Boeing 737NG / MAX, a major landing-gear overhaul runs every 8-12 years or 24,000-36,000 flight cycles depending on usage. A complete main-gear assembly costs $300K-$600K, nose-gear $150K-$300K.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              The aviation digital twin tracks each component's cumulative flight cycles, landing loads from the aircraft load monitoring system (LMS / SLMS), inspection findings (MPI, FPI, ECA, PAUT on critical bushings and pins), and remaining-life calculations. For high-cycle aircraft approaching CMM limits, the twin runs damage-tolerance analysis per the original certification basis (FAR Part 25.571 / CS-25.571) and supports life-extension requests submitted to the regulator with engineering substantiation. This avoids premature replacement of major-cost components when condition data supports continued safe operation. A typical 50-aircraft fleet can avoid $1.5-4M annual premature-replacement cost via twin-managed landing-gear life extension.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Composite NDT and AI Damage Classification</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              The shift to high-composite-content aircraft (Boeing 787 ~50% CFRP, Airbus A350 ~53% CFRP, Boeing 777X composite wing) has reshaped NDT priorities. Composite damage mechanisms — delamination, fiber breakage, matrix cracking, water ingress, lightning-strike damage, low-velocity impact damage — are inherently 3D and require volumetric inspection, primarily by phased-array ultrasonics combined with infrared thermography.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              The 2026 standard architecture for composite damage assessment: PAUT scans are uploaded to the twin as 3D volumetric data per joint; a convolutional neural network trained on tens of thousands of labeled composite-damage examples classifies indications by damage type, with each indication carrying a confidence score, recommended action per the Boeing 787 SRM or Airbus A350 SRM, and predicted growth rate. Human NDT Level III review is required for safety-critical findings, but the AI pre-classification reduces analyst time per inspection by 40-60% and improves consistency across geographically distributed MRO sites.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Aviation Digital Twin Value Drivers</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                <thead className="bg-sky-100">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold">Driver</th>
                    <th className="px-3 py-2 text-left font-semibold">Typical Value</th>
                    <th className="px-3 py-2 text-left font-semibold">Deployment Realization</th>
                  </tr>
                </thead>
                <tbody>
                  {valueDrivers.map((r, i) => (
                    <tr key={i} className="border-t">
                      <td className="px-3 py-2 font-semibold">{r.driver}</td>
                      <td className="px-3 py-2 text-sky-700">{r.typicalValue}</td>
                      <td className="px-3 py-2 text-sm">{r.deployment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Integration with AMOS, TRAX, Trax, Ramco Maintenance Systems</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Aviation digital twins must integrate with the operator's maintenance management system to be operationally useful. The dominant systems globally: AMOS (Swiss AviationSoftware, used by 50+ airlines including Delta, Lufthansa Group); TRAX (used by ~80 airlines including United Airlines, Southwest); Trax MRO (different vendor from TRAX); Ramco Aviation (used by 75+ operators including Etihad, COPA, Qantas, Air India MRO); IFS Aerospace &amp; Defense (used by major OEMs and military operators).
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Atlantis NDT digital twin integrates with all five major MRO systems via REST API for newer deployments and via SOAP / EDI for legacy installations. Bi-directional sync covers: aircraft and engine master data (twin ingests asset hierarchy from MRO); flight-cycle and flight-hour updates (twin ingests live operating hours); maintenance task cards and work orders (twin reads scheduled tasks, posts new tasks based on AI predictions); inspection-finding capture (twin records, MRO closes); fleet-level reliability reporting (twin computes, MRO consumes for MSG-3 program updates).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/digital-twins" className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-sky-500 hover:shadow-md transition"><h4 className="font-bold text-sky-900">Digital Twins Platform</h4><p className="text-slate-600 text-sm">Capability + pricing.</p></Link>
              <Link to="/blog/asset-integrity-digital-twin-guide-2026" className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-sky-500 hover:shadow-md transition"><h4 className="font-bold text-sky-900">Asset Integrity Digital Twin Guide</h4><p className="text-slate-600 text-sm">API 580 RBI + API 579 FFS reference.</p></Link>
              <Link to="/blog/digital-twin-platform-roi-calculator-examples-2026" className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-sky-500 hover:shadow-md transition"><h4 className="font-bold text-sky-900">ROI Calculator with Worked Examples</h4><p className="text-slate-600 text-sm">Refinery, FPSO, pipeline, power.</p></Link>
              <Link to="/contact" className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-sky-500 hover:shadow-md transition"><h4 className="font-bold text-sky-900">Book an Aerospace Workshop</h4><p className="text-slate-600 text-sm">NAS 410 + composite NDT + AMOS integration scenarios.</p></Link>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <details key={i} className="bg-white p-5 rounded-lg shadow-sm">
                  <summary className="font-bold text-lg cursor-pointer text-sky-900">{f.question}</summary>
                  <p className="text-slate-700 mt-3 leading-relaxed">{f.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-br from-sky-700 to-blue-900 text-white p-10 rounded-2xl mb-12">
            <h2 className="text-3xl font-bold mb-4">Atlantis NDT Digital Twin for Aviation</h2>
            <p className="text-sky-100 text-lg mb-6">$150K-400K/year depending on fleet size. NAS 410 / EN 4179 compliant, composite NDT-ready, AMOS / TRAX / Ramco integration. Ideal for corporate aviation, regional carriers, second-tier MROs.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/digital-twins" className="bg-white text-sky-900 px-6 py-3 rounded-lg font-semibold hover:bg-sky-50 flex items-center gap-2">See Platform Pricing <ArrowRight className="w-4 h-4" /></Link>
              <Link to="/contact" className="bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-500 flex items-center gap-2">Book a Demo <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </section>

          <ContactDetails />
        </div>
      </article>
    </div>
  );
}
