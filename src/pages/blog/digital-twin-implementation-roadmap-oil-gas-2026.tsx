import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { SocialShare } from "@/components/SocialShare";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const faqs = [
  { question: "What does a 12-month digital twin implementation roadmap for oil and gas look like?", answer: "A realistic 12-month implementation roadmap for an oil and gas operator deploying a corporate-wide digital twin program has four phases: Phase 1 (Months 1-3) — Discovery, asset prioritization, vendor selection, governance setup, baseline data audit; Phase 2 (Months 4-6) — Pilot deployment on a single high-value asset (typically a refinery process unit, FPSO, or critical pipeline segment), engineering 3D model import, historian integration, inspection-data backfill; Phase 3 (Months 7-9) — Pilot validation, RBI overlay activation, FFS engine integration, value-realization measurement, governance refinement; Phase 4 (Months 10-12) — Scale to additional assets in parallel, integration with EAM (Maximo / SAP PM), training rollout, ongoing operational support model. By month 12 a typical mid-tier operator has 3-6 assets live on the digital twin with measured ROI of 4-12× cost, governance fully in place, and a 24-36 month scale-up plan for the remaining asset base." },
  { question: "Which asset should be the digital twin pilot in oil and gas?", answer: "The right pilot asset has three properties: (1) high enough business value to justify deep engineering investment and prove ROI quickly — a refinery FCC unit, a critical heat-exchanger train, or an FPSO production module typically qualify; (2) data-rich enough to drive the twin without requiring 18 months of historical backfill — an asset with 3-5 years of structured inspection records, a process historian (OSIsoft PI ideally), and accessible engineering 3D model is much faster to deploy than an asset with paper records and missing drawings; (3) sponsoring leader with budget authority and willingness to be the early-adopter case study — without this, the pilot stalls regardless of technical execution. Typical pilot choices that work: refinery hydrotreater or FCC complex, FPSO production module with subsea umbilical, critical 50+ mile pipeline segment with recent ILI data, combined-cycle power plant HRSG. Pilots that often struggle: very old assets with poor documentation, multi-operator joint-venture facilities with split decision authority, or experimental assets where business value is speculative." },
  { question: "What governance structure does the oil and gas digital twin program need?", answer: "Three governance bodies typically work: (1) Executive Steering Committee — meets quarterly, members include COO, CIO, VP Operations, VP Maintenance &amp; Reliability, VP HSE; reviews progress against business-value targets, resolves cross-functional issues, approves scale-up budget; (2) Technical Program Office — meets weekly, includes Digital Twin Program Manager, Asset Integrity Lead, IT Architecture Lead, Operations Reliability Lead, Inspection Engineering Lead; owns technical execution, vendor management, data quality; (3) Asset-Level Digital Twin Champions — one per deployed asset, typically a Senior Reliability or Asset Integrity Engineer; owns day-to-day twin operation, drives change management with operations and maintenance teams, captures and reports value-realization data. The most common failure mode is launching without the Asset-Level Champion role staffed — without local ownership the twin becomes a corporate-IT project that operations teams ignore." },
  { question: "How long does pilot deployment actually take in oil and gas?", answer: "Realistic pilot deployment timelines, from contract signature to first business-value realization: Refinery process unit (single FCC or hydrotreater): 8-14 weeks if engineering 3D model exists and PI historian is in place; 16-24 weeks if engineering model must be reality-captured via laser scan or PI must be deployed. FPSO production module: 12-18 weeks; offshore deployment slows the calendar due to vessel-access constraints. Pipeline segment (50-200 miles): 10-16 weeks; depends on ILI data availability and CP-monitoring infrastructure maturity. Combined-cycle power plant: 10-16 weeks. The accelerators: pre-existing engineering 3D model, mature historian (OSIsoft PI), structured inspection data history, executive sponsorship with budget authority. The decelerators: paper-based inspection records, missing or outdated drawings, multi-vendor IT stack with poor API access, distributed decision authority." },
  { question: "What is the budget for a year-1 oil and gas digital twin deployment?", answer: "Realistic year-1 budget for a typical mid-tier oil and gas operator (3-6 pilot assets on the twin by year end): Platform license (Atlantis NDT Digital Twins, 3 refinery process units + 1 FPSO + 1 pipeline segment): $1.4M ($200K × 5 refinery-equivalent licenses plus $400K FPSO). Implementation services (per-asset onboarding, integration build, training): $400-800K total across 5 assets. Internal labor (Asset Integrity Engineer time, IT architecture, operations training, change management): $600-1,200K equivalent FTE cost. Engineering 3D model creation or update (where required): $50-300K per asset, frequently funded from separate engineering capex budget. Total year-1 cost: $2.4-4.7M for a 5-asset pilot. Expected year-1 value: $4-15M from avoided downtime, turnaround compression, and deferred capex on the pilot assets. Year-2 cost drops dramatically as scale-up does not require repeating discovery and governance setup." },
  { question: "How is digital twin value tracked in oil and gas?", answer: "Five primary metrics tracked monthly per asset: (1) Avoided unplanned downtime hours/year, monetized at the asset's actual downtime cost per hour; (2) Turnaround / planned-outage compression in days, with cost-per-day reduction quantified; (3) Maintenance cost reduction via condition-based vs schedule-based work order conversion; (4) Deferred capex via API 579 FFS assessments that extended remaining life on critical equipment; (5) Inspection cost reduction via twin-guided targeted inspection vs blanket campaign coverage. Each metric is captured per asset and reported up through the Executive Steering Committee quarterly. The most credible tracking practice: the asset-level Reliability Engineer captures actual events (e.g., 'fixed UT thickness probe detected accelerated corrosion in P-101A inlet 60 days before next scheduled inspection; planned shutdown prevented $1.2M unplanned downtime'), the program office aggregates these to portfolio-level value, and Finance validates the value claims for inclusion in the next budget cycle." },
  { question: "What change-management challenges does the oil and gas digital twin deployment face?", answer: "Three recurring challenges. First, Operations team trust — inspection engineers and reliability engineers have built workflows around spreadsheets, AutoCAD weld maps, and SAP PM work-order screens for decades; transitioning to a unified twin interface requires sustained training and visible early wins. Second, IT-OT boundary friction — digital twins inherently bridge IT (corporate data center, cloud, cybersecurity governance) and OT (process control networks, PI historian, IIoT sensors); without explicit governance covering data flow, authentication, and security review, the twin deployment stalls in IT-OT boundary disputes. Third, vendor lock-in concerns — the lifetime value of a digital twin platform compounds over 10+ year asset life cycles, so operators reasonably worry about future vendor pricing power and migration cost. The mitigations: structured change-management program with executive backing, formal IT-OT charter document approved by both CIOs and Operations, vendor selection emphasizing open API and ISO 15926 data portability, contractual exit-protection clauses." },
  { question: "When does the oil and gas digital twin reach full enterprise scale?", answer: "Most oil and gas operators reach 80-90% asset coverage within 36-48 months of program launch, with the steepest deployment curve in months 12-30 once governance and integration patterns are proven. Realistic enterprise-scale timeline: Months 0-12: Pilot phase, 3-6 assets live, ROI proven; Months 12-24: Rapid scale-up, 25-40 assets live, integration patterns templated; Months 24-36: Continued scale-up, 60-80% asset coverage, optimization focus; Months 36-48: Long-tail completion, edge cases addressed (older assets, joint ventures, geographically remote assets), continuous-improvement phase. Beyond month 48 the digital twin program is operational rather than implementation: ongoing data quality improvement, AI/ML model refinement, integration with new sensor technology, support for asset retirements and new-build commissioning. Saudi Aramco, Shell, BP, TotalEnergies, ExxonMobil, and Equinor are all in the post-month-48 operational phase of their corporate digital twin programs as of 2026." }
];

const phasesData = [
  { months: "Months 1-3", phase: "Discovery & Setup", activities: "Asset prioritization workshop, vendor evaluation, contract negotiation, governance setup, baseline data audit, executive sponsor alignment, change-management plan, training plan, success-metric definition", outputs: "Asset roadmap, signed contract, governance charter, KPI framework, executive comms plan" },
  { months: "Months 4-6", phase: "Pilot Deployment", activities: "Engineering 3D model import or reality capture, OSIsoft PI / AVEVA / Maximo / SAP PM integration, inspection-data backfill, twin configuration, security review, integration testing, user training", outputs: "First asset live on twin, integration validated, security signed off, user community trained" },
  { months: "Months 7-9", phase: "Pilot Validation", activities: "API 580 RBI overlay activation, API 579 FFS engine integration, value-realization measurement begins, governance refinement, scale-up planning, second pilot asset commenced", outputs: "Documented business value from pilot, scale-up plan approved, second asset onboarded" },
  { months: "Months 10-12", phase: "Scale-Up Begins", activities: "Parallel onboarding of 3-5 additional assets, integration patterns templated, training rollout to wider user base, operational-support model deployed", outputs: "3-6 assets live, 4-12× ROI on pilot, scale-up cadence established, 24-month roadmap" },
];

const roadmapKPIs = [
  { kpi: "Asset coverage", month3: "0", month6: "1 pilot", month12: "3-6 assets", month24: "25-40 assets", month48: "Enterprise (80-90%)" },
  { kpi: "User adoption", month3: "Core team", month6: "Asset team", month12: "Multi-asset users", month24: "Corp-wide reliability", month48: "Operations-wide" },
  { kpi: "Business value realized", month3: "$0", month6: "Early signals", month12: "$4-15M annual", month24: "$25-60M annual", month48: "$100M+ annual" },
  { kpi: "RBI cadence", month3: "Annual", month6: "Annual", month12: "Quarterly", month24: "Monthly", month48: "Continuous" },
  { kpi: "FFS cycle time", month3: "2-6 weeks", month6: "2-6 weeks", month12: "1-2 weeks", month24: "2-5 days", month48: "Same shift" },
];

export default function DigitalTwinImplementationRoadmapOilGas2026() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="Digital Twin Implementation Roadmap for Oil & Gas 2026 (12-Month Plan)"
        description="Implementation roadmap for digital twins in oil and gas. 12-month phased plan: discovery → pilot → validation → scale-up. Budget, KPIs, governance, integration. Refinery, FPSO, pipeline."
        keywords="implementation roadmap for digital twins in oil and gas, digital twin implementation oil and gas, oil and gas digital twin roadmap, digital twin pilot oil gas, refinery digital twin deployment, fpso digital twin implementation"
        canonical="https://atlantisndt.com/blog/digital-twin-implementation-roadmap-oil-gas-2026"
        article={{
          headline: "Implementation Roadmap for Digital Twins in Oil and Gas — 12-Month Phased Plan (2026)",
          datePublished: "2026-05-23",
          author: "Atlantis NDT Editorial Team",
          section: "Digital Twins"
        }}
        faq={faqs}
      />
      <Breadcrumbs />

      <section className="bg-gradient-to-br from-violet-700 to-indigo-900 text-white pt-24 pb-16">
        <div className="container mx-auto max-w-4xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="text-violet-200 mb-4">Implementation Roadmap • May 2026 • 14 min read</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Implementation Roadmap for Digital Twins in Oil &amp; Gas</h1>
            <p className="text-xl text-violet-100 mb-8">A realistic 12-month phased implementation plan for digital twins in oil &amp; gas operators — discovery, pilot, validation, scale-up. With budget, governance, KPIs, and the integration patterns that actually work. Refinery, FPSO, pipeline, and combined-cycle power-plant deployments.</p>
          </motion.div>
        </div>
      </section>

      <div className="py-6 bg-white border-b">
        <div className="container mx-auto max-w-4xl px-6">
          <SocialShare title="Implementation Roadmap for Digital Twins in Oil and Gas" description="12-month phased plan with budget, governance, KPIs, and integration patterns. Refinery, FPSO, pipeline." />
        </div>
      </div>

      <article className="py-16">
        <div className="container mx-auto max-w-4xl px-6">

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Why a Structured 12-Month Roadmap Matters</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Most oil and gas digital twin deployments that fail do so for non-technical reasons. The technology — 3D model rendering, historian integration, RBI overlay, FFS engine — is mature and well-understood. What fails is the sequencing: operators try to deploy on too many assets at once, skip pilot validation, underinvest in governance, or fail to staff the Asset-Level Champion role. Outcome: technically working twins that nobody uses to make decisions, sunk capex, organizational fatigue, and a 5-year delay before the operator tries again.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              A structured 12-month implementation roadmap with explicit phase gates avoids this failure mode. The four phases — Discovery (months 1-3), Pilot (months 4-6), Validation (months 7-9), Scale-Up (months 10-12) — each have defined inputs, activities, outputs, and gate criteria for proceeding. By month 12 a typical mid-tier operator has 3-6 assets live on the digital twin with measured ROI of 4-12× cost, governance fully in place, and a 24-36 month scale-up plan for the remaining asset base.
            </p>
            <div className="bg-violet-50 border-l-4 border-violet-500 p-6">
              <p className="text-violet-900 font-semibold mb-2">Roadmap success factors:</p>
              <ul className="text-violet-900 space-y-1 list-disc list-inside">
                <li>Single high-value pilot asset rather than enterprise-wide rollout</li>
                <li>Executive Steering Committee with COO, CIO, VP Ops, VP HSE</li>
                <li>Asset-Level Champion staffed per deployed asset</li>
                <li>Formal IT-OT charter approved by both CIOs and Operations</li>
                <li>Value-realization tracking from month 6 onward</li>
                <li>Open API + ISO 15926 data portability in vendor contract</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">12-Month Roadmap — Four Phases</h2>
            <div className="space-y-4 mb-6">
              {phasesData.map((p, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-violet-500">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-xl text-violet-900">{p.phase}</h4>
                    <span className="text-violet-700 font-semibold text-sm">{p.months}</span>
                  </div>
                  <p className="text-slate-700 text-sm mb-2"><strong>Activities:</strong> {p.activities}</p>
                  <p className="text-slate-700 text-sm"><strong>Outputs:</strong> {p.outputs}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Phase 1 (Months 1-3) — Discovery and Setup</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              The Discovery phase is mostly people work, not technology work. Activities: asset prioritization workshop with COO, VP Operations, VP Maintenance &amp; Reliability identifying the top 3-5 candidate pilot assets; vendor evaluation across the realistic shortlist (AVEVA, Hexagon, Bentley, IBM Maximo, Atlantis NDT) with capability scoring, reference checks, and pricing negotiation; governance setup including Executive Steering Committee, Technical Program Office, Asset-Level Champion roles; baseline data audit confirming engineering 3D model availability, historian deployment status, inspection-data quality; executive sponsor alignment confirming budget authority and program prioritization.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Critical phase-gate criteria before proceeding to Pilot: signed vendor contract; named Asset-Level Champion for the pilot asset; documented governance charter; confirmed pilot asset choice with sponsoring VP-level approval; baseline business-value targets agreed (e.g., &quot;reduce unplanned downtime by 2 days/year on pilot asset within 12 months&quot;).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Phase 2 (Months 4-6) — Pilot Deployment</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Pilot deployment is concentrated technical execution. Activities: engineering 3D model import from AVEVA E3D / Bentley OpenPlant / Hexagon SmartPlant 3D, or reality capture via Faro / Leica / Trimble laser scan if no engineering model exists; OSIsoft PI / AVEVA PI System historian integration via PI Web API and PI AF SDK; IBM Maximo or SAP PM integration for asset master and work-order bi-directional sync; inspection-data backfill ingesting historical UT thickness, PAUT, RT, internal visual reports; twin configuration including asset hierarchy, attribute schema, RBI parameter setup; security review covering authentication, authorization, data classification, network segmentation; integration testing against acceptance criteria; user training for the Asset-Level Champion plus 3-8 power users.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Phase-gate criteria before Validation: first asset live on twin with all integrations functioning; security review signed off by CISO or equivalent; user community trained; baseline metric values captured (current unplanned downtime, current RBI cycle time, current FFS cycle time).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Phase 3 (Months 7-9) — Validation and Value Realization</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Validation phase activates the analytical layers and starts measuring business value. Activities: API 580 / API 581 RBI overlay activation, with damage-mechanism library applied per asset class; API 579 / ASME FFS-1 fitness-for-service engine integration, with Level 1 / Level 2 calculations enabled for the relevant damage parts (typically Parts 4, 5, 6, 7, 9 for refinery); value-realization measurement begins, with the Asset-Level Champion capturing actual events ('fixed UT probe detected accelerated corrosion 60 days before next scheduled inspection') and the Program Office aggregating these monthly; governance refinement based on lessons learned; scale-up planning for the next 2-4 assets to onboard in Phase 4.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Phase-gate criteria before Scale-Up: documented business value from pilot (typically $1.5-4M annualized at this point); validated value-tracking methodology accepted by Finance; scale-up plan approved by Executive Steering Committee with budget allocation for next 5-8 assets.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Phase 4 (Months 10-12) — Scale-Up Begins</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Scale-Up phase moves from one-asset focus to parallel onboarding. Activities: parallel onboarding of 3-5 additional assets, using templated integration patterns from Phase 2; training rollout to a wider user base including operations engineers, maintenance planners, and inspection coordinators; operational-support model deployed (24/7 platform support, named Atlantis NDT account team, escalation paths defined); 24-month roadmap finalized for the remaining asset base.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              By month 12: 3-6 assets live on the twin, $4-15M annualized business value documented, scale-up cadence established at typically 6-10 assets onboarded per quarter, integration patterns templated for repeatable deployment, and corporate digital twin program shifted from project mode to operational mode.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">KPI Tracking Across the 4-Year Horizon</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                <thead className="bg-violet-100">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold">KPI</th>
                    <th className="px-3 py-2 text-left font-semibold">Month 3</th>
                    <th className="px-3 py-2 text-left font-semibold">Month 6</th>
                    <th className="px-3 py-2 text-left font-semibold">Month 12</th>
                    <th className="px-3 py-2 text-left font-semibold">Month 24</th>
                    <th className="px-3 py-2 text-left font-semibold">Month 48</th>
                  </tr>
                </thead>
                <tbody>
                  {roadmapKPIs.map((r, i) => (
                    <tr key={i} className="border-t">
                      <td className="px-3 py-2 font-semibold">{r.kpi}</td>
                      <td className="px-3 py-2">{r.month3}</td>
                      <td className="px-3 py-2">{r.month6}</td>
                      <td className="px-3 py-2 text-violet-700">{r.month12}</td>
                      <td className="px-3 py-2 text-violet-700">{r.month24}</td>
                      <td className="px-3 py-2 text-violet-700 font-semibold">{r.month48}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Budget Breakdown for Year-1 Mid-Tier Operator</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Realistic year-1 budget for a mid-tier oil and gas operator deploying 5 pilot assets (3 refinery process units, 1 FPSO production module, 1 critical pipeline segment):
            </p>
            <ul className="space-y-2 text-slate-700 text-lg mb-6 list-disc list-inside">
              <li><strong>Platform license:</strong> $1.4M (Atlantis NDT pricing — $200K × 4 refinery-equivalents + $600K FPSO + pipeline allocation)</li>
              <li><strong>Implementation services:</strong> $400-800K total across 5 assets, depending on integration complexity</li>
              <li><strong>Internal labor:</strong> $600-1,200K equivalent FTE cost for Asset Integrity Engineer time, IT architecture, operations training, change management</li>
              <li><strong>Engineering 3D model creation or update:</strong> $50-300K per asset where required, frequently funded from separate engineering capex budget</li>
              <li><strong>Total year-1 cost:</strong> $2.4-4.7M</li>
              <li><strong>Expected year-1 value:</strong> $4-15M from avoided downtime, turnaround compression, deferred capex on the pilot assets</li>
              <li><strong>Year-2 cost:</strong> drops dramatically as scale-up does not repeat discovery and governance setup</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Common Failure Modes to Avoid</h2>
            <ul className="space-y-3 text-slate-700 text-lg">
              <li><strong>Enterprise rollout from day one</strong> — almost always fails; resources spread too thin, value-realization invisible.</li>
              <li><strong>Skipping pilot validation</strong> — moves to scale-up without proving the business case; investor / board confidence collapses on first slip.</li>
              <li><strong>Underinvesting in change management</strong> — Operations team treats twin as IT project, ignores recommendations.</li>
              <li><strong>Missing Asset-Level Champion</strong> — corporate IT project with no local ownership; usage drops within 6 months.</li>
              <li><strong>IT-OT boundary disputes</strong> — without formal charter, security and network teams stall integration indefinitely.</li>
              <li><strong>Vendor lock-in without exit protection</strong> — vendor's downstream pricing power forces future migrations at painful cost.</li>
              <li><strong>Inadequate baseline data audit</strong> — discovery of missing drawings or paper-only records mid-pilot blows the timeline.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/digital-twins" className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-violet-500 hover:shadow-md transition"><h4 className="font-bold text-violet-900">Digital Twins Platform</h4><p className="text-slate-600 text-sm">Capability + pricing.</p></Link>
              <Link to="/blog/digital-twin-platform-roi-calculator-examples-2026" className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-violet-500 hover:shadow-md transition"><h4 className="font-bold text-violet-900">ROI Calculator with Examples</h4><p className="text-slate-600 text-sm">Refinery, FPSO, pipeline, power.</p></Link>
              <Link to="/blog/asset-integrity-digital-twin-guide-2026" className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-violet-500 hover:shadow-md transition"><h4 className="font-bold text-violet-900">Asset Integrity Guide</h4><p className="text-slate-600 text-sm">API 580 RBI + API 579 FFS reference.</p></Link>
              <Link to="/contact" className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-violet-500 hover:shadow-md transition"><h4 className="font-bold text-violet-900">Book a Strategy Session</h4><p className="text-slate-600 text-sm">Custom roadmap for your operation.</p></Link>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <details key={i} className="bg-white p-5 rounded-lg shadow-sm">
                  <summary className="font-bold text-lg cursor-pointer text-violet-900">{f.question}</summary>
                  <p className="text-slate-700 mt-3 leading-relaxed">{f.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-br from-violet-700 to-indigo-900 text-white p-10 rounded-2xl mb-12">
            <h2 className="text-3xl font-bold mb-4">Plan Your 12-Month Digital Twin Roadmap</h2>
            <p className="text-violet-100 text-lg mb-6">Atlantis NDT — $200K/year platform with implementation services, governance support, and Asset-Level Champion training included. Phased oil &amp; gas deployment in 12 months.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/digital-twins" className="bg-white text-violet-900 px-6 py-3 rounded-lg font-semibold hover:bg-violet-50 flex items-center gap-2">See Platform Pricing <ArrowRight className="w-4 h-4" /></Link>
              <Link to="/contact" className="bg-violet-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-violet-500 flex items-center gap-2">Book a Demo <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </section>

          <ContactDetails />
        </div>
      </article>
    </div>
  );
}
