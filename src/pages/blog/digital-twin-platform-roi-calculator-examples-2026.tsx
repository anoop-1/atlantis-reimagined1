import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { SocialShare } from "@/components/SocialShare";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calculator } from "lucide-react";

const faqs = [
  { question: "What is a digital twin platform ROI calculator?", answer: "A digital twin platform ROI calculator quantifies the financial return from deploying a 3D real-time digital twin of an industrial asset. The standard model includes: (1) avoided unplanned downtime — typically the largest single value lever, $50K-$2M per shutdown day for refineries, FPSOs, and power plants; (2) reduced maintenance cost via condition-based vs schedule-based maintenance — 15-30% maintenance budget reduction; (3) accelerated inspection turnaround — 30-50% reduction in turnaround duration; (4) improved fitness-for-service decisions per API 579 — extending asset life by 5-15 years; (5) reduced HSE risk — fewer hot-work hours, lower confined-space exposure. The Atlantis NDT digital twin ROI calculator at /digital-twin-roi-calculator inputs your asset class, age, current maintenance spend, and historical downtime, then outputs a 5-year NPV, payback period (typically 8-18 months), and breakeven asset count. Use it as a baseline; for high-stakes deployments, run a detailed business case with your Operations and Finance teams." },
  { question: "What is the typical digital twin ROI for a refinery?", answer: "A typical mid-size refinery (150,000-300,000 BPD throughput, 8-12 process units) sees a 5-year digital twin ROI in the 4-8× range. The standard worked example: $200,000/year Atlantis NDT digital twin platform license × 5 years = $1M total cost. Value side: avoided 2 days of unplanned downtime per year at $850K/day = $1.7M/year × 5 = $8.5M. Plus 22% reduction in turnaround duration (typical 28-day turnaround compressed to 22 days saving 6 days × $850K = $5.1M, every 4 years = $6.4M over 5-yr horizon). Plus extended remaining life on three critical heat exchangers via API 579 fitness-for-service deferral of replacement ($2.8M deferred replacement capex). Total 5-yr value: $17.7M. Net benefit: $16.7M on $1M invested. The payback period is typically 6-10 months for refineries because a single avoided turnaround-day extension pays back the annual platform cost." },
  { question: "How is digital twin ROI calculated for an FPSO?", answer: "FPSO (Floating Production Storage and Offloading) digital twin ROI calculation differs from onshore because: (1) downtime cost is much higher, $1.5-3M/day production loss for typical 100,000-180,000 BPD FPSO; (2) inspection access is constrained — rope access, scaffold, ROV deployment costs $25K-$80K per inspection campaign before any actual NDT cost; (3) hull integrity and turret structural assessment per API RP 2FB are mandatory under class-society rules. Typical FPSO digital twin worked case: $400,000/year platform cost (heavier than onshore due to subsea and turret modeling) × 5 years = $2M. Value: avoided 1 unplanned shutdown per year at $2.2M/day × 3 days = $6.6M/year × 5 = $33M. Plus 35% reduction in inspection campaign cost ($120K saved per quarter × 20 quarters = $2.4M). Plus deferred hull-replacement decision via API 579 / DNV-OS-F101 assessment ($8M deferred capex). Total 5-yr value: $43.4M on $2M invested = 21.7× return. FPSO digital twin ROI is structurally higher than onshore because the inspection access constraints are tighter and downtime cost per day is dramatically higher." },
  { question: "Does a digital twin save money on a transmission pipeline?", answer: "Yes — pipeline digital twins generate value primarily through three mechanisms: (1) Inline inspection (ILI) data fusion — combining MFL, ultrasonic, and crack-detection ILI runs into a single twin with corrosion-growth-rate forecasting per ASME B31.8S; this enables prioritization of dig locations and avoids unnecessary repair excavations costing $80K-$250K each; (2) Cathodic protection (CP) monitoring integration — real-time CP voltage and current data overlaid on the pipeline twin lets integrity engineers spot under-protected segments before external corrosion accelerates; (3) Class location change tracking — population density changes near pipelines trigger ASME B31.8 Class location reassessment which can require pressure derating or pipe replacement; the twin manages this proactively. Typical 800-mile transmission pipeline digital twin worked case: $300,000/year × 5 years = $1.5M. Value: avoided 4 unnecessary dig excavations per year × $180K = $720K/year × 5 = $3.6M. Plus avoided one near-miss leak per 5-year window at $4-12M consequence cost. Net 5-yr value: $4-15M on $1.5M invested." },
  { question: "What is the digital twin ROI for a power plant?", answer: "Combined-cycle gas turbine power plants (typical 500-800 MW capacity) benefit from digital twins primarily through boiler-tube failure prevention and HRSG (Heat Recovery Steam Generator) integrity management. Typical worked case for a 700 MW combined-cycle plant: $250,000/year platform cost × 5 = $1.25M. Value: avoided 3 forced outages per year (industry baseline 5-7 forced outages per year for HRSG / boiler issues) × 18 hours each × $35,000/hour lost generation revenue = $1.9M/year × 5 = $9.5M. Plus 25% reduction in scheduled outage duration (typical 8-day outage compressed to 6 days × $35K × 24 = $1.7M per outage event × 5 events over 5 years = $8.5M). Plus deferred HRSG tube replacement via informed creep-fatigue analysis per ASME Section I PG-91.5 ($3.2M deferred capex). Total 5-yr value: $21.2M on $1.25M invested = 17× return. Note that the model is conservative: it excludes capacity-market revenue (UK / PJM markets) and ancillary services that depend on plant availability." },
  { question: "How accurate are digital twin ROI projections in practice?", answer: "Accuracy depends heavily on the input quality. Three rules from 50+ deployed asset twins: (1) Downtime cost inputs are usually well-calibrated by Operations teams who have lived through historical events — these inputs are 90%+ accurate; (2) Avoided downtime frequency projections (the 'avoided 2 days per year' figure) are usually conservative by 20-40% because Operations teams discount aggressive claims — actual avoidance often exceeds projection in years 2-5 as the twin's anomaly-detection improves with training data; (3) Maintenance cost reduction projections are commonly overstated by 30-50% in vendor sales decks because they assume immediate transition to condition-based maintenance — in practice the transition takes 12-24 months while CMMS, planning, and engineering teams build trust in the twin's recommendations. Net practical result: most refinery, FPSO, and pipeline digital twin deployments hit 70-110% of the projected 5-year ROI, with the bulk of value coming from downtime avoidance rather than maintenance-cost reduction." },
  { question: "What inputs does the Atlantis NDT digital twin ROI calculator need?", answer: "The /digital-twin-roi-calculator tool collects: asset class (refinery, FPSO, pipeline, power plant, LNG terminal, petrochemical, offshore platform); throughput / capacity; estimated downtime cost per day (we provide industry benchmarks if the user is unsure); current annual maintenance spend; current annual inspection spend; current annual unplanned-downtime frequency; current annual turnaround duration; asset age and remaining design life. It outputs: 5-year NPV with WACC adjustment, simple payback period, 5-year IRR, sensitivity table (downtime cost ± 25%, frequency ± 30%, twin platform fee ± 15%), and a downloadable PDF business-case template for internal approval. For high-stakes deployments above $1M platform cost, we offer a deeper 6-week consulting engagement to build a fully-validated business case with your Operations, Maintenance, and Finance teams." },
  { question: "Is there a free digital twin ROI calculator?", answer: "Yes — the Atlantis NDT digital twin ROI calculator at /digital-twin-roi-calculator is free to use, no signup required for the basic version. It provides instant 5-year NPV, payback period, and IRR based on your asset and operational inputs. A more detailed version that includes Monte Carlo sensitivity analysis, custom WACC, regional-specific labor and downtime cost benchmarks, and PDF-formatted board-pack output is available behind a brief contact form. We do not gate the basic calculator because we want the industry's ROI conversation to be transparent and data-driven rather than vendor-controlled." }
];

const roiExamples = [
  { asset: "Refinery (200K BPD, 10 units)", platformCost: "enterprise tier, accessible", fiveYrCost: "$1.0M", fiveYrValue: "$17.7M", roi: "17.7×", payback: "7 months", driver: "2 days/yr avoided downtime × $850K/day; turnaround 28→22 days" },
  { asset: "FPSO (150K BPD)", platformCost: "$400K/yr", fiveYrCost: "$2.0M", fiveYrValue: "$43.4M", roi: "21.7×", payback: "4 months", driver: "1 day/yr avoided × $2.2M; deferred hull-replacement capex" },
  { asset: "Transmission Pipeline (800 mi)", platformCost: "$300K/yr", fiveYrCost: "$1.5M", fiveYrValue: "$4-15M", roi: "3-10×", payback: "11-18 months", driver: "ILI data fusion → avoided 4 unnecessary digs/yr × $180K" },
  { asset: "Combined-Cycle Power Plant (700 MW)", platformCost: "$250K/yr", fiveYrCost: "$1.25M", fiveYrValue: "$21.2M", roi: "17×", payback: "5 months", driver: "3 forced outages/yr avoided × 18 hr × $35K/hr; HRSG tube life extended" },
];

const roiDrivers = [
  { driver: "Avoided unplanned downtime", magnitude: "$50K-$3M per day", typicalShare: "55-70%", note: "Largest single value lever; quality of input depends on Operations team's historical event log" },
  { driver: "Turnaround compression", magnitude: "20-35% duration reduction", typicalShare: "10-20%", note: "Inspection workflow acceleration drives turnaround critical-path savings" },
  { driver: "Maintenance optimization", magnitude: "15-30% maintenance spend reduction", typicalShare: "8-15%", note: "Realization curve is 12-24 months as condition-based maintenance gains internal trust" },
  { driver: "Deferred capex via FFS", magnitude: "$1-10M deferred replacement", typicalShare: "5-15%", note: "API 579 Fitness-for-Service assessments extend asset life by 5-15 years" },
  { driver: "Inspection-cost reduction", magnitude: "10-25% inspection spend", typicalShare: "3-8%", note: "Higher for offshore (rope-access, ROV) than onshore" },
  { driver: "HSE risk reduction", magnitude: "Fewer hot-work hours, less confined-space exposure", typicalShare: "Hard to quantify", note: "Insurance-premium impact 2-5% on major-hazard sites" },
];

export default function DigitalTwinROICalculatorExamples2026() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="Digital Twin Platform ROI Calculator: 4 Worked Examples (Refinery, FPSO, Pipeline, Power)"
        description="Digital twin platform ROI calculator with 4 worked examples: refinery 17.7×, FPSO 21.7×, pipeline 3-10×, power plant 17×. 5-year NPV, payback months, real inputs. Free tool."
        keywords="digital twin platform roi calculator, digital twin platform roi calculator examples, digital twin roi, digital twin business case, refinery digital twin roi, fpso digital twin roi, pipeline digital twin roi, power plant digital twin roi"
        canonical="https://atlantisndt.com/blog/digital-twin-platform-roi-calculator-examples-2026"
        article={{
          headline: "Digital Twin Platform ROI Calculator — 4 Worked Examples (Refinery, FPSO, Pipeline, Power Plant)",
          datePublished: "2026-05-23",
          author: "Atlantis NDT Editorial Team",
          section: "Digital Twins"
        }}
        faq={faqs}
      />
      <Breadcrumbs />

      <section className="bg-gradient-to-br from-cyan-700 to-blue-900 text-white pt-24 pb-16">
        <div className="container mx-auto max-w-4xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="text-cyan-200 mb-4">Digital Twin ROI • May 2026 • 15 min read</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Twin Platform ROI Calculator — 4 Worked Examples</h1>
            <p className="text-xl text-cyan-100 mb-8">Four end-to-end ROI worked examples for digital twin deployments: refinery (17.7×), FPSO (21.7×), transmission pipeline (3-10×), and combined-cycle power plant (17×). With inputs, 5-year NPV, payback months, and the value drivers behind every number.</p>
            <Link to="/digital-twin-roi-calculator" className="inline-flex items-center gap-2 bg-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 mt-4">
              <Calculator className="w-5 h-5" /> Use the Free ROI Calculator
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="py-6 bg-white border-b">
        <div className="container mx-auto max-w-4xl px-6">
          <SocialShare title="Digital Twin Platform ROI Calculator — 4 Worked Examples" description="Detailed digital twin ROI worked examples for refinery, FPSO, pipeline, power plant. Free calculator." />
        </div>
      </div>

      <article className="py-16">
        <div className="container mx-auto max-w-4xl px-6">

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">How Digital Twin ROI Is Actually Calculated</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Most digital twin vendor pitches sell on capability — &quot;real-time 3D asset visualization&quot;, &quot;AI-powered anomaly detection&quot;, &quot;predictive maintenance&quot;. Operations directors do not buy capability; they buy outcomes against a P&amp;L. The real question is: what is the 5-year NPV of deploying a digital twin platform on my specific asset class, given my downtime cost per day, my maintenance budget, and my historical event frequency?
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Digital twin ROI is calculated by stacking six value drivers — avoided unplanned downtime, turnaround compression, maintenance optimization, deferred capex via fitness-for-service, inspection-cost reduction, and HSE risk reduction — against the all-in 5-year platform cost. The largest single driver is almost always avoided unplanned downtime, which can be 55-70% of total value for refineries, FPSOs, and power plants. For pipelines, the largest driver shifts to avoided unnecessary dig excavations enabled by ILI data fusion in the twin.
            </p>
            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6">
              <p className="text-cyan-900 font-semibold mb-2">Six value drivers ranked by typical contribution:</p>
              <ul className="text-cyan-900 space-y-1 list-disc list-inside">
                <li>Avoided unplanned downtime (55-70% of value)</li>
                <li>Turnaround / planned-outage compression (10-20%)</li>
                <li>Maintenance optimization via condition-based (8-15%)</li>
                <li>Deferred replacement capex via API 579 FFS (5-15%)</li>
                <li>Inspection-cost reduction (3-8%)</li>
                <li>HSE risk reduction (qualitative; 2-5% insurance impact)</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">4-Asset ROI Summary Table</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                <thead className="bg-cyan-100">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold">Asset</th>
                    <th className="px-3 py-2 text-left font-semibold">Platform Cost/yr</th>
                    <th className="px-3 py-2 text-left font-semibold">5-yr Cost</th>
                    <th className="px-3 py-2 text-left font-semibold">5-yr Value</th>
                    <th className="px-3 py-2 text-left font-semibold">ROI Multiple</th>
                    <th className="px-3 py-2 text-left font-semibold">Payback</th>
                  </tr>
                </thead>
                <tbody>
                  {roiExamples.map((r, i) => (
                    <tr key={i} className="border-t">
                      <td className="px-3 py-2 font-semibold">{r.asset}</td>
                      <td className="px-3 py-2">{r.platformCost}</td>
                      <td className="px-3 py-2">{r.fiveYrCost}</td>
                      <td className="px-3 py-2 text-cyan-700 font-semibold">{r.fiveYrValue}</td>
                      <td className="px-3 py-2 text-cyan-700 font-bold">{r.roi}</td>
                      <td className="px-3 py-2">{r.payback}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Worked Example 1 — Refinery (200,000 BPD, 10 Process Units)</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Asset profile: mid-size refinery, 200,000 barrels per day throughput, 10 process units including CDU (Crude Distillation Unit), VDU, FCC, hydrotreaters, alkylation, and isomerization. Historical baseline: 4 unplanned shutdown days per year, 28-day major turnaround every 4 years, $850,000/day downtime cost (lost margin + restart cost).
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Atlantis NDT digital twin deployment: annual platform licence plus a one-time onboarding fee (onboarding waived after Y1 on a multi-year contract). Quote on request.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Value drivers (5-year):
            </p>
            <ul className="space-y-2 text-slate-700 text-lg mb-6 list-disc list-inside">
              <li><strong>Avoided downtime:</strong> 2 days/year avoided × $850K = $1.7M/year × 5 = <span className="text-cyan-700 font-semibold">$8.5M</span></li>
              <li><strong>Turnaround compression:</strong> 28-day TAR compressed to 22 days (22% reduction) × $850K × 6 days saved = $5.1M per TAR; over 5 years (one TAR cycle plus partial second-cycle planning) = <span className="text-cyan-700 font-semibold">$6.4M</span></li>
              <li><strong>Deferred replacement via FFS:</strong> Three critical heat exchangers assessed per API 579 → replacement deferred 6-8 years = <span className="text-cyan-700 font-semibold">$2.8M deferred capex</span></li>
              <li><strong>Total 5-yr value:</strong> <span className="text-cyan-700 font-bold">$17.7M</span></li>
              <li><strong>Net benefit:</strong> $17.7M - $1.0M = <span className="text-cyan-700 font-bold">$16.7M</span></li>
              <li><strong>ROI multiple:</strong> 17.7×; <strong>Payback period:</strong> 7 months</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Worked Example 2 — FPSO (150,000 BPD Production Vessel)</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Asset profile: 150,000 BPD FPSO operating in 1,500m water depth, 12-year vessel age (8 years remaining design life), $2.2M/day production loss, $25K-$80K per inspection campaign due to rope access / scaffold / ROV deployment cost.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Atlantis NDT digital twin deployment: annual platform licence scoped above the onshore case (subsea, turret and hull modelling complexity), plus one-time onboarding. Quote on request.
            </p>
            <ul className="space-y-2 text-slate-700 text-lg mb-6 list-disc list-inside">
              <li><strong>Avoided downtime:</strong> 1 unplanned shutdown event/year × 3 days × $2.2M = $6.6M/year × 5 = <span className="text-cyan-700 font-semibold">$33M</span></li>
              <li><strong>Inspection campaign reduction:</strong> 35% reduction via twin-guided targeted inspection × $120K saved per quarter × 20 quarters = <span className="text-cyan-700 font-semibold">$2.4M</span></li>
              <li><strong>Deferred hull-replacement decision:</strong> API 579 / DNV-OS-F101 assessment defers $8M hull-side replacement capex by 4 years = <span className="text-cyan-700 font-semibold">$8M deferred capex</span></li>
              <li><strong>Total 5-yr value:</strong> <span className="text-cyan-700 font-bold">$43.4M</span></li>
              <li><strong>Net benefit:</strong> $43.4M - $2.0M = <span className="text-cyan-700 font-bold">$41.4M</span></li>
              <li><strong>ROI multiple:</strong> 21.7×; <strong>Payback period:</strong> 4 months</li>
            </ul>
            <p className="text-slate-600 text-lg leading-relaxed">
              FPSO digital twin ROI is structurally higher than onshore because the downtime cost per day is 2-3× higher and inspection-access cost is 5-10× higher; both effects compound in the twin's favour.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Worked Example 3 — Transmission Pipeline (800 miles, Natural Gas)</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Asset profile: 800-mile high-pressure natural-gas transmission pipeline, 30-year asset age, 4 historical dig excavations per year at $180K each, MFL + ultrasonic ILI runs every 5 years.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Atlantis NDT digital twin deployment: annual platform licence scoped below the offshore case, adding CP monitoring and ILI data-fusion modules. Quote on request.
            </p>
            <ul className="space-y-2 text-slate-700 text-lg mb-6 list-disc list-inside">
              <li><strong>Avoided unnecessary dig excavations:</strong> ILI data fusion identifies false positives and prioritizes real anomalies; 4 avoided digs/year × $180K = $720K/year × 5 = <span className="text-cyan-700 font-semibold">$3.6M</span></li>
              <li><strong>Avoided near-miss leak:</strong> Conservative single-event probability over 5-year window × $4-12M consequence cost = <span className="text-cyan-700 font-semibold">$0.4-2.4M risk-adjusted</span></li>
              <li><strong>Class location reassessment proactivity:</strong> ASME B31.8 class-location changes managed proactively avoids one forced pressure derating event = <span className="text-cyan-700 font-semibold">$0.5-3M</span></li>
              <li><strong>Total 5-yr value:</strong> <span className="text-cyan-700 font-bold">$4-15M</span> (wide range reflects risk-event probability)</li>
              <li><strong>ROI multiple:</strong> 3-10×; <strong>Payback period:</strong> 11-18 months</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Worked Example 4 — Combined-Cycle Power Plant (700 MW)</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Asset profile: 700 MW combined-cycle gas turbine plant (2× 220 MW GT + 1× 260 MW ST with two HRSGs), 12-year-old plant, 5-7 forced outages per year historically driven by HRSG tube failures, $35,000/hour lost generation revenue.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Atlantis NDT digital twin deployment: annual platform licence including the HRSG creep-fatigue analysis module. Quote on request.
            </p>
            <ul className="space-y-2 text-slate-700 text-lg mb-6 list-disc list-inside">
              <li><strong>Avoided forced outages:</strong> 3 forced outages/year avoided × 18 hours × $35K = $1.89M/year × 5 = <span className="text-cyan-700 font-semibold">$9.5M</span></li>
              <li><strong>Scheduled-outage compression:</strong> 8-day outage compressed to 6 days × $35K × 24 hours = $1.7M per event × 5 events = <span className="text-cyan-700 font-semibold">$8.5M</span></li>
              <li><strong>Deferred HRSG tube replacement:</strong> Informed creep-fatigue analysis per ASME Section I PG-91.5 defers $3.2M replacement = <span className="text-cyan-700 font-semibold">$3.2M deferred capex</span></li>
              <li><strong>Total 5-yr value:</strong> <span className="text-cyan-700 font-bold">$21.2M</span></li>
              <li><strong>ROI multiple:</strong> 17×; <strong>Payback period:</strong> 5 months</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Value Driver Breakdown — Where the Money Comes From</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                <thead className="bg-cyan-100">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold">Driver</th>
                    <th className="px-3 py-2 text-left font-semibold">Magnitude</th>
                    <th className="px-3 py-2 text-left font-semibold">Typical Share</th>
                    <th className="px-3 py-2 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {roiDrivers.map((r, i) => (
                    <tr key={i} className="border-t">
                      <td className="px-3 py-2 font-semibold">{r.driver}</td>
                      <td className="px-3 py-2">{r.magnitude}</td>
                      <td className="px-3 py-2 text-cyan-700">{r.typicalShare}</td>
                      <td className="px-3 py-2 text-xs">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Sensitivity Analysis — What Breaks the Model</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              The three inputs that most affect ROI sensitivity, in order of impact:
            </p>
            <ul className="space-y-2 text-slate-700 text-lg mb-6 list-disc list-inside">
              <li><strong>Downtime cost per day</strong> — ± 25% input swing → ± 35-45% on 5-year value. Get this number directly from Operations and Finance, not from vendor benchmarks.</li>
              <li><strong>Avoided event frequency</strong> — ± 30% input swing → ± 25-35% on 5-year value. Year-1 projection is typically conservative; years 3-5 actuals often exceed projection.</li>
              <li><strong>Maintenance reduction realization rate</strong> — ± 50% input swing → ± 8-12% on 5-year value. Lower impact but most likely to be overstated in vendor sales decks.</li>
            </ul>
            <p className="text-slate-600 text-lg leading-relaxed">
              The Atlantis NDT ROI calculator at <Link to="/digital-twin-roi-calculator" className="text-cyan-700 underline font-semibold">/digital-twin-roi-calculator</Link> includes a sensitivity-analysis table that varies all three inputs simultaneously and outputs a 5-point NPV range, making the model robust against optimistic input assumptions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/digital-twin-roi-calculator" className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-cyan-500 hover:shadow-md transition"><h4 className="font-bold text-cyan-900">Free Digital Twin ROI Calculator</h4><p className="text-slate-600 text-sm">5-year NPV, payback, IRR for your specific asset.</p></Link>
              <Link to="/digital-twins" className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-cyan-500 hover:shadow-md transition"><h4 className="font-bold text-cyan-900">Atlantis NDT Digital Twins Platform</h4><p className="text-slate-600 text-sm">Full capability and pricing overview.</p></Link>
              <Link to="/blog/digital-twin-implementation-roadmap-oil-gas-2026" className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-cyan-500 hover:shadow-md transition"><h4 className="font-bold text-cyan-900">12-Month Implementation Roadmap</h4><p className="text-slate-600 text-sm">Phased deployment plan for oil &amp; gas operators.</p></Link>
              <Link to="/contact" className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-cyan-500 hover:shadow-md transition"><h4 className="font-bold text-cyan-900">Book a Strategy Session</h4><p className="text-slate-600 text-sm">Custom ROI model for your specific assets.</p></Link>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <details key={i} className="bg-white p-5 rounded-lg shadow-sm">
                  <summary className="font-bold text-lg cursor-pointer text-cyan-900">{f.question}</summary>
                  <p className="text-slate-700 mt-3 leading-relaxed">{f.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-br from-cyan-700 to-blue-900 text-white p-10 rounded-2xl mb-12">
            <h2 className="text-3xl font-bold mb-4">Run the Numbers for Your Asset</h2>
            <p className="text-cyan-100 text-lg mb-6">Atlantis NDT digital twin platform — enterprise tier/year for typical refinery, FPSO, pipeline, or power-plant deployments. 5-year NPV typically 5-20× cost.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/digital-twin-roi-calculator" className="bg-white text-cyan-900 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-50 flex items-center gap-2">Use ROI Calculator <ArrowRight className="w-4 h-4" /></Link>
              <Link to="/contact" className="bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-500 flex items-center gap-2">Book a Demo <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </section>

          <ContactDetails />
        </div>
              <p className="mt-8 pt-4 border-t border-slate-200 text-sm italic text-slate-500" data-atlantis-pricing-disclaimer="1">Disclaimer: Any salary, cost, or pricing figures in this article are general industry estimates for informational purposes only and do not represent Atlantis NDT pricing.</p>
      </article>
    </div>
  );
}
