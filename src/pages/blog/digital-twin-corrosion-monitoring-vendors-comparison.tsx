import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { SocialShare } from "@/components/SocialShare";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const faqs = [
  { question: "Who offers digital twins for corrosion monitoring in 2026?", answer: "Seven vendor groups offer digital twin platforms with corrosion monitoring capability in 2026, sorted by deployment depth and market position: (1) AVEVA (AVEVA Process Twin + AVEVA Asset Performance Management) — strong in refining and petrochemical, integrated with AVEVA PI System historian, deep installed base; (2) Hexagon (HxGN SDx + Smart Digital Reality) — strong in EPC engineering integration with SmartPlant 3D and SmartPlant Foundation; (3) Bentley Systems (iTwin + PlantSight + AssetWise) — strong in pipeline and bridges, integrated with OpenPlant and OpenBridge engineering 3D; (4) Siemens (MindSphere + COMOS) — historian integration, strong in chemical and power generation; (5) GE Vernova (Asset Performance Management for industrial) — power generation focus; (6) IBM Maximo Application Suite with Digital Twin — strong if customer already runs Maximo EAM; (7) Atlantis NDT Digital Twins — focused on asset-integrity-driven deployments with NDT-native data model, RBI overlay per API 580/581, FFS engine per API 579, and accessible enterprise tier/year price point. Each has different strengths: AVEVA wins on PI integration, Hexagon on engineering EPC, Bentley on pipeline / bridge, IBM on Maximo-stack, Atlantis NDT on NDT-integrated asset integrity at lower price points." },
  { question: "How does Atlantis NDT compare with AVEVA, Hexagon, and Bentley for corrosion monitoring?", answer: "Four-way comparison on corrosion monitoring specifically: (1) AVEVA: deep PI integration is the differentiator; corrosion-rate calculation handled in AVEVA APM; pricing typically $400K-1.2M/year for refinery-class deployments; best fit if customer is heavily PI-standardized. (2) Hexagon HxGN SDx: strong engineering 3D integration; corrosion monitoring via HxGN APM and SDx asset model; pricing $350K-900K/year; best fit if customer is on SmartPlant for engineering. (3) Bentley AssetWise / PlantSight: strong on pipeline and linear-asset corrosion (CP integration, ILI data fusion); pricing $300K-800K/year; best fit for transmission pipeline operators. (4) Atlantis NDT Digital Twins: NDT-native data model with all corrosion-related inspection methods (UT thickness, PAUT corrosion mapping, GWUT, fixed UT thickness probes, CP voltage, ER/LPR probes, corrosion coupons) as first-class entities; API 580 RBI + API 579 FFS engines built-in; pricing enterprise tier/year flat for refinery-class. The functional gap to the bigger vendors is narrow on corrosion-specific workflow; the platform-breadth gap is wider — AVEVA, Hexagon, Bentley offer process simulation, engineering design, and operational digital twins that Atlantis NDT does not. For asset integrity / corrosion monitoring use cases, Atlantis NDT is competitive on capability and substantially better on price-to-value ratio." },
  { question: "What corrosion-monitoring data does a digital twin ingest?", answer: "All standard corrosion-related data streams: (1) UT thickness surveys — manual, automated, and corrosion mapping with grid-point thickness data per ASTM E797 / API RP 510 inspection programs; (2) Phased-array UT corrosion mapping (PAUT C-scan) for high-resolution surface thickness profiling; (3) Guided-wave UT (GWUT) for long-range pipeline and pipe-rack inspection per ISO 18211; (4) Fixed UT thickness probes (Cosasco, Permasense, Sensor Networks, Emerson Rosemount) with continuous monitoring; (5) Corrosion coupons (weight-loss method per ASTM G1, G4, NACE TM-0169); (6) Electrical Resistance (ER) and Linear Polarization Resistance (LPR) probes for in-line process-side corrosion rate; (7) Cathodic Protection (CP) survey data (close-interval, IR-drop-free, attenuation surveys); (8) Process-condition data from historian — temperature, pressure, fluid composition for damage-mechanism inference; (9) ILI (Inline Inspection) data for pipelines — MFL, ultrasonic, crack-detection runs; (10) Visual inspection findings with photo evidence." },
  { question: "Which damage mechanisms can a corrosion-monitoring digital twin track?", answer: "Per API 571 (Damage Mechanisms Affecting Fixed Equipment in the Refining Industry), the standard damage mechanisms tracked: General Corrosion / Wall Loss; Localized Corrosion / Pitting; Galvanic Corrosion; Atmospheric / CUI (Corrosion Under Insulation); Microbial Influenced Corrosion (MIC); Hydrogen Damage (HIC, SOHIC, HSC); Sulfidation per API RP 939-C; Naphthenic Acid Corrosion in crude units; Polythionic Acid Stress-Corrosion Cracking; Chloride Stress-Corrosion Cracking; Caustic SCC; Amine SCC; Sour-Water Corrosion; CO2 Corrosion in upstream gas systems; Erosion / Erosion-Corrosion; Cavitation; Mechanical Fatigue / Vibration-Induced Fatigue; Thermal Fatigue; Creep / Creep-Fatigue at high-temperature service; Embrittlement (graphitization, 885°F embrittlement, sigma phase, hydrogen embrittlement, temper embrittlement); High-Temperature Hydrogen Attack (HTHA) per API RP 941. Each mechanism has its own corrosion-rate model and damage-tolerance criteria built into the twin." },
  { question: "Can a digital twin replace fixed corrosion-monitoring probes?", answer: "No — and this is a frequent misunderstanding. A digital twin is a software platform that aggregates and reasons over inspection and sensor data; it does not generate the data itself. Fixed corrosion-monitoring probes (Cosasco UT thickness, Permasense WirelessHART thickness, ER and LPR probes, ultrasonic corrosion monitoring transducers) are the physical sensors that produce the data the twin uses. The right architecture pairs both: deploy fixed corrosion-monitoring probes at high-priority locations (typically 50-200 per refinery process unit, prioritized by API 580 RBI analysis), then use the digital twin to ingest the probe data, run statistical anomaly detection, forecast corrosion rate trends, and integrate with periodic NDT campaign data. The twin's value is in cross-data-source reasoning and decision support; the probes' value is in providing high-frequency primary measurement data." },
  { question: "How does the digital twin handle Corrosion Under Insulation (CUI)?", answer: "Corrosion Under Insulation (CUI) is one of the most expensive and difficult-to-detect damage mechanisms in refining and petrochemical industry. API 581 estimates CUI accounts for 40-60% of pipe-replacement costs in temperature ranges 150-350°F (65-175°C) where the insulation traps moisture against carbon-steel substrate. Digital twins track CUI through: (1) Operating-temperature exposure tracking per circuit — historian time-series shows total exposure hours in CUI-susceptible temperature ranges; (2) Insulation-condition inspection records from visual surveys per API 583; (3) Targeted PAUT or GWUT inspection findings at CUI-susceptible locations; (4) Pulsed Eddy Current (PEC) screening data for inspection-through-insulation; (5) Infrared thermography for moisture detection without insulation removal. The twin produces CUI-priority maps overlaid on the asset geometry, focusing inspection effort where temperature exposure and historical findings indicate highest risk. Operators following this approach typically reduce CUI-driven replacement cost by 25-40% over 5-year windows." },
  { question: "Do major vendors integrate with each other or are they walled gardens?", answer: "Mixed. AVEVA, Hexagon, Bentley, and Siemens all expose REST APIs and support standard data exchange via ISO 15926, but practical integration depth varies. AVEVA Process Twin integrates tightly with AVEVA PI System and Aveva E3D (same vendor stack) but integration with Bentley or Hexagon engineering 3D requires custom mapping. Hexagon HxGN SDx integrates tightly with SmartPlant 3D and SmartPlant Foundation (same stack) but partner integration to OSIsoft PI requires custom development. Bentley iTwin integrates with OpenPlant, OpenBridge, and AssetWise (same stack) and exposes good REST APIs for partner integration. Atlantis NDT Digital Twins is built API-first with native integration to OSIsoft PI / AVEVA PI, AVEVA Historian, IBM Maximo, SAP PM, Hexagon EAM, Bentley AssetWise, AVEVA E3D, Bentley OpenPlant, and Hexagon SmartPlant — useful for operators running heterogeneous infrastructure where no single vendor stack dominates." }
];

const vendorMatrix = [
  { vendor: "Atlantis NDT Digital Twins", focus: "Asset integrity, NDT-integrated", refinery: "enterprise tier, accessible", pipeline: "$300K/yr", strengths: "RBI + FFS native, NDT data model, unlimited users", weaknesses: "Smaller installed base, focused scope" },
  { vendor: "AVEVA Process Twin + APM", focus: "Process + asset integrity", refinery: "$400K-1.2M/yr", pipeline: "$500K-1.5M/yr", strengths: "PI integration depth, refining maturity", weaknesses: "Higher cost, per-user licensing complexity" },
  { vendor: "Hexagon HxGN SDx", focus: "Engineering + asset performance", refinery: "$350K-900K/yr", pipeline: "$400K-1M/yr", strengths: "SmartPlant integration, EPC maturity", weaknesses: "Steeper learning curve, complex licensing" },
  { vendor: "Bentley iTwin + PlantSight + AssetWise", focus: "Infrastructure + linear assets", refinery: "$300K-800K/yr", pipeline: "$250K-700K/yr", strengths: "Pipeline, bridge, rail expertise", weaknesses: "Refinery use cases less mature" },
  { vendor: "Siemens MindSphere + COMOS", focus: "Operations + engineering", refinery: "$400K-1M/yr", pipeline: "$450K-1.2M/yr", strengths: "Strong in chemical and power", weaknesses: "MindSphere strategy in flux" },
  { vendor: "GE Vernova APM", focus: "Power generation focus", refinery: "$350K-900K/yr", pipeline: "N/A", strengths: "Power-plant maturity, HRSG specific", weaknesses: "Weaker in oil & gas" },
  { vendor: "IBM Maximo APM + Twin", focus: "EAM-integrated", refinery: "$300K-700K/yr", pipeline: "$350K-800K/yr", strengths: "Native if Maximo already in use", weaknesses: "Requires Maximo as primary EAM" },
];

export default function DigitalTwinCorrosionMonitoringVendorsComparison() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="Digital Twin Vendors for Corrosion Monitoring: 2026 Comparison"
        description="Who offers digital twins for corrosion monitoring? AVEVA vs Hexagon vs Bentley vs Atlantis NDT compared. Price, capability, API 581 RBI, ER/LPR probe support, CP integration."
        keywords="who offers digital twins for corrosion monitoring, digital twin corrosion monitoring, corrosion digital twin vendor comparison, aveva vs hexagon vs bentley digital twin, atlantis ndt digital twin, corrosion monitoring software"
        canonical="https://atlantisndt.com/blog/digital-twin-corrosion-monitoring-vendors-comparison"
        article={{
          headline: "Digital Twin Vendors for Corrosion Monitoring — 2026 Comparison",
          datePublished: "2026-05-23",
          author: "Atlantis NDT Editorial Team",
          section: "Digital Twins"
        }}
        faq={faqs}
      />
      <Breadcrumbs />

      <section className="bg-gradient-to-br from-amber-700 to-orange-900 text-white pt-24 pb-16">
        <div className="container mx-auto max-w-4xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="text-amber-200 mb-4">Vendor Comparison • May 2026 • 13 min read</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Who Offers Digital Twins for Corrosion Monitoring? — 2026 Comparison</h1>
            <p className="text-xl text-amber-100 mb-8">Seven vendor groups offer digital twin platforms with corrosion monitoring capability in 2026. AVEVA, Hexagon, Bentley, Siemens, GE Vernova, IBM Maximo, and Atlantis NDT compared by price, capability, NDT data model depth, API 581 RBI integration, and damage-mechanism coverage.</p>
          </motion.div>
        </div>
      </section>

      <div className="py-6 bg-white border-b">
        <div className="container mx-auto max-w-4xl px-6">
          <SocialShare title="Digital Twin Vendors for Corrosion Monitoring — 2026 Comparison" description="AVEVA vs Hexagon vs Bentley vs IBM vs Atlantis NDT — price, capability, NDT data depth." />
        </div>
      </div>

      <article className="py-16">
        <div className="container mx-auto max-w-4xl px-6">

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">The 2026 Digital Twin Vendor Landscape for Corrosion Monitoring</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Seven vendor groups offer credible digital twin platforms with corrosion monitoring capability in 2026, each with distinct strengths shaped by their broader software portfolios and historical industry focus. AVEVA dominates refining and petrochemical because of the AVEVA PI System (formerly OSIsoft PI) historian installed base. Hexagon's HxGN SDx leads on engineering 3D integration because of SmartPlant 3D, SmartPlant Foundation, and the legacy Intergraph dominance in EPC. Bentley iTwin and AssetWise lead on pipeline, bridge, and rail because of the OpenPlant and OpenBridge engineering 3D installed base. Siemens MindSphere and COMOS are strong in chemical and power generation. GE Vernova APM dominates the power-generation niche. IBM Maximo Application Suite with Digital Twin is the natural choice wherever Maximo already runs as the primary EAM. Atlantis NDT Digital Twins focuses on NDT-integrated asset integrity at accessible enterprise tier/year price points.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              For corrosion monitoring specifically, the differentiator across vendors is the depth of the NDT-and-sensor data model. AVEVA, Hexagon, Bentley, and Siemens treat corrosion monitoring as a module within broader platforms; their corrosion data models are competent but not the platform's primary focus. IBM Maximo APM extends Maximo's asset model with predictive analytics. Atlantis NDT was built specifically for NDT-integrated asset integrity, so the data model goes deeper on UT thickness grid-point data, PAUT corrosion mapping, GWUT screening, CP survey integration, ER/LPR probe data, and corrosion-coupon weight-loss records.
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
              <p className="text-amber-900 font-semibold mb-2">Vendor selection drivers ranked:</p>
              <ul className="text-amber-900 space-y-1 list-disc list-inside">
                <li>Existing vendor stack (PI → AVEVA; SmartPlant → Hexagon; OpenPlant → Bentley; Maximo → IBM)</li>
                <li>Industry vertical (refining vs pipeline vs power vs general)</li>
                <li>Budget (enterprise tier to $1.5M+ per refinery deployment)</li>
                <li>NDT data model depth (Atlantis NDT leads here)</li>
                <li>API 580 RBI + API 579 FFS integration depth</li>
                <li>Implementation timeline (3-6 months vs 12-18 months)</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Vendor Comparison Matrix</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                <thead className="bg-amber-100">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold">Vendor</th>
                    <th className="px-3 py-2 text-left font-semibold">Focus</th>
                    <th className="px-3 py-2 text-left font-semibold">Refinery</th>
                    <th className="px-3 py-2 text-left font-semibold">Pipeline</th>
                    <th className="px-3 py-2 text-left font-semibold">Strengths</th>
                  </tr>
                </thead>
                <tbody>
                  {vendorMatrix.map((r, i) => (
                    <tr key={i} className="border-t">
                      <td className="px-3 py-2 font-semibold">{r.vendor}</td>
                      <td className="px-3 py-2">{r.focus}</td>
                      <td className="px-3 py-2 text-amber-700">{r.refinery}</td>
                      <td className="px-3 py-2 text-amber-700">{r.pipeline}</td>
                      <td className="px-3 py-2 text-xs">{r.strengths}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">AVEVA Process Twin + APM</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              AVEVA leads the refining and petrochemical market because of the AVEVA PI System installed base — over 19,000 industrial sites globally, including most major operators. AVEVA's strategy is to extend the historian-anchored platform into a comprehensive Industrial Intelligence stack: Process Twin for process operations, Asset Performance Management (APM) for asset integrity, Predictive Analytics for ML-driven anomaly detection, and Operations Control for run-time supervision. For corrosion monitoring specifically, APM's data model covers UT thickness, PAUT, corrosion coupons, and CP, with native PI tag integration for historian-fed conditions.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Pricing reflects the platform breadth: $400K-$1.2M/year for refinery deployments, with significant variance based on user count, module mix (just APM vs APM + Predictive Analytics + Operations Control), and integration scope. AVEVA wins when the customer is heavily PI-standardized and values the deep historian + APM integration; loses on price for budget-constrained deployments.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Hexagon HxGN SDx + APM</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Hexagon's strength is engineering-design integration via SmartPlant 3D, SmartPlant Foundation, and the broader Intergraph EPC stack. HxGN SDx (Smart Digital Reality) wraps the engineering 3D model with the digital-twin operational layer; HxGN APM provides the asset-performance-management capability. For corrosion monitoring, the data model is competent but treats the workflow as one of multiple asset-performance use cases rather than the platform's primary focus.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Pricing: $350K-$900K/year refinery; $400K-$1M/year pipeline. Hexagon wins on engineering-integration depth for customers running SmartPlant-stack engineering tools; weaker on PI historian integration than AVEVA, weaker on pipeline-specific tooling than Bentley.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Bentley iTwin + PlantSight + AssetWise</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Bentley dominates pipeline, bridge, and rail digital twins because of the OpenPlant, OpenBridge, and OpenRail engineering 3D installed base. iTwin is Bentley's platform infrastructure for digital twins; PlantSight is the operational-twin overlay for plants; AssetWise is the EAM-style asset and work-order management layer. For corrosion monitoring on transmission pipelines, Bentley's tooling is mature: ILI data fusion (combining MFL, ultrasonic, and crack-detection runs), CP-integration via Bentley CathFLOW, and class-location reassessment per ASME B31.8 are well-developed.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Pricing: $300K-$800K/year refinery; $250K-$700K/year pipeline (Bentley is often most competitive for pipeline operators). Wins on pipeline; weaker on refinery use cases than AVEVA.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Atlantis NDT Digital Twins — The NDT-Native Alternative</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Atlantis NDT Digital Twins was built specifically for NDT-integrated asset integrity. The data model treats every NDT method as a first-class entity: UT thickness with grid-point data per ASTM E797 / API RP 510; PAUT and TOFD scan files (Olympus, M2M Gekko, Eddyfi); GWUT for long-range screening per ISO 18211; fixed UT thickness probes (Cosasco, Permasense, Sensor Networks); corrosion coupons per ASTM G1 / NACE TM-0169; ER and LPR probes; CP surveys (close-interval, IR-drop-free, attenuation); ILI for pipelines (MFL, ultrasonic, crack-detection).
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              The API 580 / API 581 RBI engine and the API 579 / ASME FFS-1 fitness-for-service engine are built-in rather than partner-integrated, so the corrosion-monitoring workflow flows directly through to inspection planning and engineering assessment without third-party tooling. Pricing is the structural differentiator: enterprise tier/year flat for refinery-class deployments, $300K/year for pipeline, including hosting, support, upgrades, and unlimited users.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Where Atlantis NDT wins: NDT-heavy asset-integrity-focused deployments; operators with constrained budgets; heterogeneous infrastructure where no single major vendor stack dominates; second-tier operators and Tier-2/Tier-3 service vendors building asset-integrity capability for the first time. Where the bigger vendors win: deep PI-standardized refineries (AVEVA); SmartPlant EPC stacks (Hexagon); pipeline operators with deep Bentley OpenPlant integration; operators with Maximo as their primary EAM and complex existing workflows there.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Decision Framework — Which Vendor for Your Asset</h2>
            <ul className="space-y-3 text-slate-700 text-lg">
              <li><strong>Refinery, PI-standardized, $1M+ budget</strong> — AVEVA Process Twin + APM</li>
              <li><strong>Refinery, SmartPlant engineering, $500K+ budget</strong> — Hexagon HxGN SDx</li>
              <li><strong>Pipeline, OpenPlant engineering, $400K+ budget</strong> — Bentley iTwin + AssetWise</li>
              <li><strong>Power plant, GE OEM, $400K+ budget</strong> — GE Vernova APM</li>
              <li><strong>Any asset, Maximo-standardized EAM, $400K+ budget</strong> — IBM Maximo APM + Digital Twin</li>
              <li><strong>NDT-heavy asset integrity, accessible budget, heterogeneous infrastructure</strong> — Atlantis NDT Digital Twins</li>
              <li><strong>Chemical, COMOS engineering, $500K+ budget</strong> — Siemens MindSphere + COMOS</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/digital-twins" className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-amber-500 hover:shadow-md transition"><h4 className="font-bold text-amber-900">Atlantis NDT Digital Twins</h4><p className="text-slate-600 text-sm">Capability + pricing.</p></Link>
              <Link to="/blog/asset-integrity-digital-twin-guide-2026" className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-amber-500 hover:shadow-md transition"><h4 className="font-bold text-amber-900">Asset Integrity Digital Twin Guide</h4><p className="text-slate-600 text-sm">API 580 RBI + API 579 FFS.</p></Link>
              <Link to="/blog/digital-twin-platform-api-access-integration-guide" className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-amber-500 hover:shadow-md transition"><h4 className="font-bold text-amber-900">API + Integration Guide</h4><p className="text-slate-600 text-sm">PI, AVEVA, Maximo, SAP PM.</p></Link>
              <Link to="/contact" className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-amber-500 hover:shadow-md transition"><h4 className="font-bold text-amber-900">Book a Vendor Comparison Workshop</h4><p className="text-slate-600 text-sm">Decision framework for your asset.</p></Link>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <details key={i} className="bg-white p-5 rounded-lg shadow-sm">
                  <summary className="font-bold text-lg cursor-pointer text-amber-900">{f.question}</summary>
                  <p className="text-slate-700 mt-3 leading-relaxed">{f.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-br from-amber-700 to-orange-900 text-white p-10 rounded-2xl mb-12">
            <h2 className="text-3xl font-bold mb-4">enterprise tier/year for Refinery-Class Corrosion Monitoring</h2>
            <p className="text-amber-100 text-lg mb-6">Atlantis NDT Digital Twins — NDT-native data model, API 580 RBI + API 579 FFS engines built-in, OSIsoft PI / Maximo / SAP PM integration. Unlimited users.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/digital-twins" className="bg-white text-amber-900 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 flex items-center gap-2">See Platform Pricing <ArrowRight className="w-4 h-4" /></Link>
              <Link to="/contact" className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-500 flex items-center gap-2">Book a Demo <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </section>

          <ContactDetails />
        </div>
              <p className="mt-8 pt-4 border-t border-slate-200 text-sm italic text-slate-500" data-atlantis-pricing-disclaimer="1">Disclaimer: Any salary, cost, or pricing figures in this article are general industry estimates for informational purposes only and do not represent Atlantis NDT pricing.</p>
      </article>
    </div>
  );
}
