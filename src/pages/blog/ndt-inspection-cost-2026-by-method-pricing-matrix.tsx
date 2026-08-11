import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { SocialShare } from "@/components/SocialShare";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, AlertTriangle, TrendingUp, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import QuickAnswerBox from "@/components/QuickAnswerBox";

const faqs = [
    { question: "How are NDT day rates structured for field crews?", answer: "Field NDT crews bill under three models. Day rate: a crew (technician, helper, truck, equipment package) is priced per day, with the rate rising with certification level and equipment carried — a PAUT specialist crew costs materially more per day than a conventional UT crew. Piece rate: charged per inspection unit (per film, per joint, per square metre) — better for predictable scopes. Unit rate: a hybrid with a minimum day charge plus per-unit billing once a threshold is hit. The premiums are where budgets slip: overtime typically bills around 1.5x for extended hours and 2x beyond that and at weekends, holidays higher still; night shift, hot-work and confined-space each add their own percentage; offshore day rates commonly carry a large uplift over onshore; and refinery turnarounds with strict gate procedures bake unbillable badge-cycle time into elevated rates. Ask any bidder to state their premium structure in writing — that, more than the headline day rate, decides what you actually pay." },
    { question: "How should I structure an RFP for NDT inspection services?", answer: "A well-structured NDT RFP reduces quoted prices by 15-30% by eliminating contractor risk premiums. Required elements: (1) Asset scope — exact equipment list with dimensions, materials, design pressure/temperature, photos. (2) Inspection scope — methods required by specification (UT, PAUT, MT, PT, RT), applicable code (ASME V, API 510, EN 17640), acceptance criteria. (3) Volume estimate — number of welds, square meters of vessel surface, number of components, with tolerance band. (4) Schedule — start date, daily window, total duration, weekend/night work flag. (5) Site conditions — access (scaffolded? rope? insulated?), hot work permits, confined-space, radiation considerations, security clearance time. (6) Deliverables — report format (client template? PDF? digital data export?), turnaround time, retention. (7) Certifications required — ASNT Level II/III with specific method, PCN, EN ISO 9712, client-specific qualification. (8) Pricing model — day rate vs piece-rate vs lump sum with line items. (9) Mobilization and demob — separately quoted. (10) Insurance, safety stats (TRIR, EMR), references. Vague RFPs invite contingency loading; specific RFPs invite competitive pricing." },
    { question: "What cheap NDT pitfalls should buyers avoid?", answer: "Low-bid NDT pitfalls that destroy total cost of ownership: (1) Uncalibrated or expired equipment — calibration certificates must be within 12 months for UT/PAUT instruments and within validity for reference blocks. Demand certificates with each crew. (2) Expired radiographic film — film loses sensitivity past expiration, producing under-density images that hide defects. Verify film batch numbers and expiry. (3) Couplant contamination — recycled or contaminated couplant alters UT amplitude readings; ensure fresh sealed containers. (4) Unverified technician certifications — request copy of ASNT/PCN/EN certificates, verify on issuing body's database. (5) No second-party review — single-technician interpretation has reported error rates of 8-22%; require independent Level III sign-off on interpretation. (6) Missing procedure qualification — written procedure must be reviewed and approved by client Level III or AI before fieldwork; absent procedures mean re-shoots later. (7) Bottom-of-market bidder with no QA program — fewer than 1 in 10 cheapest bidders maintain documented procedures, calibration records, and personnel qualification logs. (8) No POD (Probability of Detection) data for PAUT — vendors who can't show validation studies for their PAUT setup are guessing. True cost of cheap NDT is re-inspection, missed defects causing failures, and warranty repair work — typically 3-8x the original inspection saving." }
];

const methodPricingMatrix = [
    { method: "Ultrasonic Thickness (UT)", unit: "per m² of grid", low: "Grid density", high: "Access + surface prep", notes: "Standard 100x100mm grid; dense grids multiply effort 1.5-2x" },
    { method: "Phased Array (PAUT)", unit: "per crew-hour", low: "Setup + scan plan", high: "Encoder + data review", notes: "Manual encoded scan; automated (AUT) sits higher" },
    { method: "PAUT per Weld", unit: "per joint", low: "Pipe diameter", high: "Bevel geometry", notes: "Effort scales roughly 1.6x at 12 inch, 2.4x at 24 inch vs 6 inch" },
    { method: "RT-Film Conventional", unit: "per film", low: "Source + chemistry", high: "Exclusion-zone control", notes: "Includes source handling, development, interpretation" },
    { method: "RT-Digital (DR)", unit: "per exposure", low: "Detector time", high: "Panel capital recovery", notes: "Faster; zero chemistry waste" },
    { method: "RT-Computed (CR)", unit: "per exposure", low: "Plate handling", high: "Scanner throughput", notes: "Imaging plates, no wet processing" },
    { method: "Magnetic Particle (MT)", unit: "per crew-hour", low: "Surface prep", high: "Two-direction coverage", notes: "Wet fluorescent adds a modest premium" },
    { method: "Liquid Penetrant (PT)", unit: "per crew-hour", low: "Dwell discipline", high: "Consumables", notes: "Consumable kits are a real per-job line" },
    { method: "Visual Testing (VT)", unit: "per inspector-hour", low: "Access", high: "Documentation depth", notes: "ASNT VT Level II; CWI carries a premium" },
    { method: "TOFD", unit: "per joint", low: "Setup", high: "Analysis time", notes: "Often paired with PAUT" },
    { method: "PAUT + TOFD Hybrid", unit: "per joint", low: "Dual setup", high: "Combined analysis", notes: "Standard for high-pressure pipe" },
    { method: "Eddy Current (ET)", unit: "per crew-hour", low: "Probe + reference std", high: "Tube count", notes: "Heat-exchanger tube campaigns priced by bundle" },
    { method: "MFL (Magnetic Flux Leakage)", unit: "per metre / per m²", low: "Tool mobilisation", high: "UT verification digs", notes: "Screening rate is low; verification is where budget goes" },
    { method: "Acoustic Emission (AE)", unit: "per vessel-day", low: "Sensor array size", high: "Analyst interpretation", notes: "Specialist analyst drives the rate" },
    { method: "Guided Wave UT (LRUT)", unit: "per test location", low: "Ring set-up", high: "Coverage per location", notes: "Tens of metres of screening range per location" }
];

const geographyModifiers = [
    { region: "USA", baseline: "1.00x", labor: "Reference market", market: "Mature ASNT market, oil & gas concentrated Gulf Coast" },
    { region: "Canada", baseline: "0.95-1.10x", labor: "Comparable to USA", market: "CGSB or ASNT; oil sands premium ~1.15x" },
    { region: "UK / North Sea", baseline: "1.10-1.30x", labor: "Above USA", market: "PCN/CSWIP; offshore certification stack" },
    { region: "Middle East (GCC)", baseline: "0.75-0.95x", labor: "Below USA", market: "Aramco/ADNOC approval gates; mobilisation dominates" },
    { region: "India", baseline: "0.30-0.50x", labor: "Well below USA", market: "Deep ASNT/ISNT talent pool; export fabrication hub" },
    { region: "Southeast Asia", baseline: "0.40-0.65x", labor: "Well below USA", market: "Singapore premium over the region" },
    { region: "Australia", baseline: "1.15-1.35x", labor: "Above USA", market: "AINDT certification; mining and offshore" },
    { region: "Europe (EU)", baseline: "1.05-1.25x", labor: "Above USA", market: "EN/ISO 9712; notified-body involvement" }
];

const pricingModels = [
    { model: "Day Rate", whenUsed: "Unknown scope, exploratory work, site walkdowns, complex troubleshooting, fitness-for-service evaluations", proCon: "Pro: simple billing, flexibility. Con: contractor has no incentive to be efficient; client carries volume risk" },
    { model: "Piece Rate (per unit)", whenUsed: "Defined scope: per joint, per film, per square meter. Best for repetitive new-construction welding or shutdown maintenance", proCon: "Pro: predictable budget, contractor incentivized for speed. Con: quality risk if rates too aggressive" },
    { model: "Unit Rate with Minimum", whenUsed: "Hybrid: daily minimum guarantee + per-unit rate above threshold. Common in turnarounds where volume is variable", proCon: "Pro: balances both parties. Con: complex contract administration" },
    { model: "Lump Sum (Fixed Price)", whenUsed: "Fully defined scope, completed engineering, low variability work. Common in pipeline construction NDT subcontracts", proCon: "Pro: total cost certainty. Con: contractor adds risk premium (typically 10-20% over piece-rate equivalent)" },
    { model: "Cost-Plus / Reimbursable", whenUsed: "Emergency response, unknown scope, RBI consulting, expert witness work", proCon: "Pro: no risk premium. Con: minimal cost discipline; client must audit timesheets" }
];

const crewCompositions = [
    { crew: "1 Level II + Truck + Standard Kit", dayCost: "Baseline field crew", scope: "Conventional UT thickness, MT, PT, VT — single inspector tasks" },
    { crew: "1 Level II + 1 Helper + Truck + Kit", dayCost: "Baseline + helper premium", scope: "Most field NDT work; helper assists with prep, cleanup, safety watch" },
    { crew: "1 PAUT L2 + 1 Helper + PAUT Equipment", dayCost: "Specialist-equipment tier", scope: "Phased array UT inspection of welds, vessels, tank floors" },
    { crew: "RT Crew: 1 Radiographer + 1 Asst + Source", dayCost: "Source-handling tier", scope: "Gamma radiography with Ir-192 or Se-75; barricading takes time" },
    { crew: "AUT Pipeline Crew (2 techs + tractor)", dayCost: "Highest equipment tier", scope: "Automated PAUT pipeline crawler; 40-80 welds/day throughput" },
    { crew: "Level III Consultant Only (no equipment)", dayCost: "Priced per engagement — quote on request", scope: "Procedure qualification, interpretation oversight, audit, expert witness" },
    { crew: "Rope Access NDT (IRATA L2 + IRATA L3)", dayCost: "Access-certification premium", scope: "Wind turbine, flare stack, offshore structure inspection" }
];

const hiddenCosts = [
    { category: "Report Fees", cost: "Per report; rush turnaround carries a premium", note: "Client-format reports require additional admin time; ask up front" },
    { category: "Calibration Block Use", cost: "Daily rental; custom blocks are a real capital item", note: "Asset-specific reference blocks may need fabrication lead time" },
    { category: "Consumables — Couplant", cost: "Per gallon, several per job", note: "High-temp couplant costs a multiple of standard" },
    { category: "Consumables — Penetrant Kit", cost: "Per kit", note: "Type I fluorescent costs more than Type II visible-dye" },
    { category: "Consumables — RT Film", cost: "Per sheet plus chemistry", note: "Silver-bearing fixer is regulated waste" },
    { category: "Hazardous Waste Disposal", cost: "Per drum of film + chemistry", note: "EU and Canada stricter than US in practice" },
    { category: "Source Magazine & Transport", cost: "Setup plus daily monitoring", note: "Bonded storage required for Ir-192/Co-60" },
    { category: "Safety Standby", cost: "Per day of fire/hole/bottle watch", note: "Confined-space and hot-work jobs always carry it" },
    { category: "Per-diem & Lodging", cost: "Per technician per day away", note: "Offshore rates higher" },
    { category: "Mobilization", cost: "Regional vs remote/offshore differ by an order of magnitude", note: "Charged both ways" },
    { category: "Equipment Standby", cost: "Charged when site delays idle the crew", note: "Turnaround slippage lands here" },
    { category: "Procedure Development", cost: "Per written procedure — one-time", note: "Job-specific procedures approved before fieldwork" }
];

const rfpChecklist = [
    { item: "Asset scope sheet", description: "Equipment list with dimensions, material, design conditions, photos, GA drawings" },
    { item: "Method and code", description: "Specific NDT method required per spec; applicable code (ASME V, API 510/570/653, EN 17640, ISO 17640)" },
    { item: "Volume estimate with tolerance", description: "Number of welds ±10%, m² of surface ±15%, number of components — uncertainty costs money" },
    { item: "Schedule and shift pattern", description: "Start/end dates, daily window, weekends, nights, holidays explicitly flagged" },
    { item: "Site access conditions", description: "Scaffolded? Rope access? Insulated (CUI removal scope)? Confined space? Hot work permits?" },
    { item: "Deliverable format", description: "Report template, digital data export, retention period, language requirement" },
    { item: "Certification requirements", description: "ASNT Level II/III with specific method, PCN, EN ISO 9712, client-specific Aramco/SABIC/ADNOC qualification" },
    { item: "Pricing model preference", description: "Day rate, piece rate, unit rate, lump sum — invite all and compare normalized" },
    { item: "Mob/demob separate line", description: "Always demand separate mob/demob pricing — bundled mob hides 10-20% margin" },
    { item: "Insurance and safety metrics", description: "Public/employer liability minimum limits, TRIR, EMR, recent incidents" }
];

const cheapPitfalls = [
    { pitfall: "Uncalibrated or out-of-cert equipment", consequence: "Invalid measurements; entire scope may require re-inspection. Demand calibration certificates within 12 months for instruments, valid period for reference blocks" },
    { pitfall: "Expired radiographic film", consequence: "Low density images miss subsurface defects; defects pass to service and fail. Verify film batch and expiry on every job" },
    { pitfall: "Contaminated or recycled couplant", consequence: "Altered UT amplitude readings; thickness measurements off by 5-15%. Demand fresh sealed couplant" },
    { pitfall: "Unverified technician certifications", consequence: "Inspector lacks training/POD; misses defects. Always request and verify certificate copies on issuing body database" },
    { pitfall: "No second-party (Level III) interpretation review", consequence: "Single-tech error rates 8-22% on complex interpretation. Mandate independent Level III sign-off" },
    { pitfall: "Missing written procedure approval", consequence: "Work performed off-procedure may need full re-inspection; insurance gaps for failures. Require client Level III/AI approval before mob" },
    { pitfall: "Bottom-of-market bidder with no QA program", consequence: "Fewer than 1 in 10 cheapest vendors maintain proper QA records. Audit procedures, cal logs, personnel files before award" },
    { pitfall: "No PAUT POD validation data", consequence: "PAUT setup not validated for defect type/size; missed defects. Require demonstration on representative reference block" }
];

export default function NDTInspectionCost2026() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "NDT Inspection Cost 2026: Method × Region Pricing Matrix (UT, RT, PAUT, MT, PT)",
                "description": "How NDT inspection is actually priced: what each method is billed by, what drives the rate up, regional multipliers, crew compositions, the hidden lines that surprise buyers, and how to write an RFP that gets comparable bids. Updated 2026.",
                "author": { "@type": "Organization", "name": "Atlantis NDT" },
                "publisher": { "@type": "Organization", "name": "Atlantis NDT" },
                "datePublished": "2026-05-17",
                "dateModified": "2026-05-17"
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
                }))
            }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="NDT Inspection Cost 2026: Method × Region Pricing Matrix (UT, RT, PAUT, MT, PT)"
                description="What NDT inspection really costs — and why: billing units by method, regional multipliers, crew compositions, mobilization and the hidden lines that move a quote. Free RFP checklist, and a tailored figure on request."
                keywords="ndt inspection cost, ndt testing cost, ultrasonic testing cost, radiographic testing cost, PAUT cost, MT cost, PT cost, NDT day rate, NDT per joint, NDT pricing 2026"
                canonical="https://atlantisndt.com/blog/ndt-inspection-cost-2026-by-method-pricing-matrix"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* Hero */}
            <section className="bg-gradient-to-br from-slate-800 to-blue-900 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-4xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="text-blue-200 mb-4">Pricing Guide • Last updated May 2026 • 16 min read</div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">NDT Inspection Cost 2026: Method × Region Pricing Matrix</h1>
                        <p className="text-xl text-blue-100 mb-8">The complete 2026 reference for NDT inspection cost. Method-by-method pricing (UT, RT, PAUT, MT, PT, TOFD, MFL, ET) cross-referenced with regional cost modifiers for USA, Canada, UK, EU, Saudi Arabia, UAE, India, and SE Asia. Day rates, per-joint pricing, hidden costs, RFP guidance.</p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto max-w-4xl px-6">
                <QuickAnswerBox question="How much does NDT inspection cost?" answer="NDT inspection cost depends on method (day-rate, per-joint, or per-metre billing), region, crew composition, and site access — not a single number. UT, MT, and PT typically price lower than PAUT, RT, or automated crawler work; offshore and turnaround premiums add further. Request a scoped quote against your asset list and code requirements." />
            </div>

            {/* Social Share */}
            <div className="py-6 bg-white border-b">
                <div className="container mx-auto max-w-4xl px-6">
                    <SocialShare title="NDT Inspection Cost 2026: Method × Region Pricing Matrix" description="2026 NDT pricing by method and region — UT, RT, PAUT, MT, PT day rates and per-joint costs." />
                </div>
            </div>

            {/* Article */}
            <article className="py-16">
                <div className="container mx-auto max-w-4xl px-6">
                    {/* Opening Matrix */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">2026 NDT Method Pricing Matrix (USA Baseline)</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            This is the single table most NDT buyers want and most vendors will not publish. The figures below reflect 2026 USA market rates compiled from competitive bids across the Gulf Coast refining belt, mid-continent pipeline construction, and northeast offshore wind installation work. Rates are all-inclusive of standard labor, equipment, basic consumables, and interpretation — but exclude mobilization, per-diem, scaffolding access, and rush-report surcharges (covered in later sections).
                        </p>

                        <div className="overflow-x-auto mb-8">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-blue-100">
                                    <tr>
                                        <th className="px-3 py-2 text-left font-semibold">Method</th>
                                        <th className="px-3 py-2 text-left font-semibold">Unit</th>
                                        <th className="px-3 py-2 text-left font-semibold">Low</th>
                                        <th className="px-3 py-2 text-left font-semibold">High</th>
                                        <th className="px-3 py-2 text-left font-semibold">Notes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {methodPricingMatrix.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-3 py-2 font-medium">{item.method}</td>
                                            <td className="px-3 py-2 text-xs">{item.unit}</td>
                                            <td className="px-3 py-2 font-semibold text-blue-700">{item.low}</td>
                                            <td className="px-3 py-2 font-semibold text-blue-700">{item.high}</td>
                                            <td className="px-3 py-2 text-xs text-slate-600">{item.notes}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                            <p className="text-blue-900">
                                <strong>How to use this table:</strong> the unit each method is billed by, and the two factors that most move its rate. Multiply by your regional modifier (next section), add mobilization, then the premiums for shift pattern and access. For a figure on your actual scope, send the scope sheet through the contact page and we will price it properly.</p>
                        </div>
                    </section>

                    {/* Geography Modifiers */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Regional Cost Modifiers: How NDT Pricing Changes by Geography</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            NDT pricing varies dramatically by region based on labor market, certification regime, equipment availability, and currency. The multipliers below are applied to the USA baseline matrix. Note that the spread narrows substantially for PAUT, AUT, and TOFD work because equipment cost (USD-denominated) dominates total cost.
                        </p>

                        <div className="overflow-x-auto mb-8">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-blue-100">
                                    <tr>
                                        <th className="px-3 py-2 text-left font-semibold">Region</th>
                                        <th className="px-3 py-2 text-left font-semibold">vs USA Baseline</th>
                                        <th className="px-3 py-2 text-left font-semibold">Typical L2 Labor</th>
                                        <th className="px-3 py-2 text-left font-semibold">Market Notes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {geographyModifiers.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-3 py-2 font-semibold">{item.region}</td>
                                            <td className="px-3 py-2 font-semibold text-blue-700">{item.baseline}</td>
                                            <td className="px-3 py-2 text-xs">{item.labor}</td>
                                            <td className="px-3 py-2 text-xs text-slate-600">{item.market}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                            <p className="text-amber-900">
                                <strong>Cross-border NDT economics:</strong> India and Vietnam have become major outsourcing hubs for ASME Code stamped pressure-vessel fabrication NDT, where film and procedure development can be shipped offshore. However, in-service field NDT cannot be offshored — the technician must be onsite. For owner-operators, this means turnaround and inspection budgets remain regional, while fabrication-shop NDT is increasingly globalized.
                            </p>
                        </div>
                    </section>

                    {/* Day Rate vs Piece Rate */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Day Rate vs Piece Rate vs Unit Rate: Which to Use</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            NDT contractors quote on three primary pricing models, and choosing the right one for your scope can change total cost by 20-40%. The wrong model transfers risk to whichever party is least equipped to manage it.
                        </p>

                        <div className="space-y-4 mb-8">
                            {pricingModels.map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                                    <h4 className="font-bold text-lg mb-2 text-blue-900">{item.model}</h4>
                                    <p className="text-slate-700 mb-2"><strong>When to use:</strong> {item.whenUsed}</p>
                                    <p className="text-slate-600 text-sm">{item.proCon}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Premiums */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Mobilization, Callout, and Premium Charges</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Beyond the base rate, every NDT job carries a stack of conditional charges. These are the line items where margins live — and where careful buyers can negotiate substantial savings.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                                <h4 className="font-bold mb-2">Mobilization Fees</h4>
                                <ul className="text-slate-600 text-sm space-y-1">
                                    <li>Regional (under 100 miles): the smallest line on the quote</li>
                                    <li>Long-haul (100-500 miles): roughly double regional</li>
                                    <li>Remote site / offshore helicopter: an order of magnitude above regional</li>
                                    <li>International with visas and permits: the largest and least compressible line</li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                                <h4 className="font-bold mb-2">Callout Fees (Emergency)</h4>
                                <ul className="text-slate-600 text-sm space-y-1">
                                    <li>4-hour minimum bill at 1.5x day rate</li>
                                    <li>After-hours callout: a fixed premium on top of the rate</li>
                                    <li>Holiday callout: 2.0-3.0x day rate, 4hr min</li>
                                    <li>Same-day mobilization: carries its own premium</li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                                <h4 className="font-bold mb-2">Overtime & Shift Premiums</h4>
                                <ul className="text-slate-600 text-sm space-y-1">
                                    <li>Hours 9-12: 1.5x base</li>
                                    <li>Hours 13+: 2.0x base</li>
                                    <li>Weekends: 2.0x base</li>
                                    <li>Holidays: 2.5-3.0x base</li>
                                    <li>Night shift: +20-35%</li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                                <h4 className="font-bold mb-2">Environmental Premiums</h4>
                                <ul className="text-slate-600 text-sm space-y-1">
                                    <li>Hot work/confined space: +15-25%</li>
                                    <li>Offshore uplift: +60-110%</li>
                                    <li>Sour service (H2S): +15-25%</li>
                                    <li>Cold weather (sub -10C): +10-20%</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Per-Joint Pipeline */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Per-Joint Pipeline Weld Inspection Pricing</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Pipeline projects are priced per joint, and the choice between RT-film, RT-digital, PAUT, TOFD, and hybrid PAUT+TOFD affects both unit cost and total schedule. Below is the 2026 USA market for 6-inch carbon steel weld inspection, all-inclusive.
                        </p>

                        <div className="overflow-x-auto mb-8">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-blue-100">
                                    <tr>
                                        <th className="px-3 py-2 text-left font-semibold">Method</th>
                                        <th className="px-3 py-2 text-left font-semibold">Relative Cost per Weld</th>
                                        <th className="px-3 py-2 text-left font-semibold">Throughput</th>
                                        <th className="px-3 py-2 text-left font-semibold">Best For</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t"><td className="px-3 py-2 font-medium">RT-Film (Ir-192)</td><td className="px-3 py-2 font-semibold text-blue-700">Mid — chemistry + exclusion zone</td><td className="px-3 py-2 text-xs">15-25 welds/day</td><td className="px-3 py-2 text-xs">Small jobs under 100 welds; remote sites</td></tr>
                                    <tr className="border-t"><td className="px-3 py-2 font-medium">RT-Digital (DR)</td><td className="px-3 py-2 font-semibold text-blue-700">Mid-high — detector premium</td><td className="px-3 py-2 text-xs">25-40 welds/day</td><td className="px-3 py-2 text-xs">Where instant review beats film cost</td></tr>
                                    <tr className="border-t"><td className="px-3 py-2 font-medium">PAUT (manual encoder)</td><td className="px-3 py-2 font-semibold text-blue-700">High — encoded data + analysis</td><td className="px-3 py-2 text-xs">12-20 welds/day</td><td className="px-3 py-2 text-xs">100-500 weld scope; radiation-restricted sites</td></tr>
                                    <tr className="border-t"><td className="px-3 py-2 font-medium">TOFD only</td><td className="px-3 py-2 font-semibold text-blue-700">Mid — pairs with PAUT</td><td className="px-3 py-2 text-xs">15-25 welds/day</td><td className="px-3 py-2 text-xs">Through-wall sizing; often paired</td></tr>
                                    <tr className="border-t"><td className="px-3 py-2 font-medium">PAUT + TOFD Hybrid</td><td className="px-3 py-2 font-semibold text-blue-700">Highest per weld — dual technique</td><td className="px-3 py-2 text-xs">10-18 welds/day</td><td className="px-3 py-2 text-xs">High-pressure pipelines; default in EU</td></tr>
                                    <tr className="border-t"><td className="px-3 py-2 font-medium">Automated AUT (crawler)</td><td className="px-3 py-2 font-semibold text-blue-700">Lowest per weld at volume</td><td className="px-3 py-2 text-xs">40-80 welds/day</td><td className="px-3 py-2 text-xs">Mainline new construction, 500+ welds</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
                            <p className="text-blue-900 mb-2">
                                <strong>Diameter scaling:</strong> Multiply 6" base price by approximately 1.6x for 12", 2.4x for 24", 3.1x for 36", and 3.8x for 48" pipeline welds. Above 48" diameter, custom quotes apply.
                            </p>
                            <p className="text-blue-900">
                                <strong>Decision rule:</strong> Under 100 welds total, RT-film is cheapest. 100-500 welds, PAUT manual wins on schedule and avoids radiation safety overhead. Over 500 welds on a mainline pipeline, automated AUT cuts per-joint cost in half and finishes weeks earlier.
                            </p>
                        </div>
                    </section>

                    {/* Crew Composition */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Field NDT Crew Composition and Daily Cost</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Understanding crew composition helps you sanity-check vendor quotes. A single technician day rate is rarely competitive once you factor that most jobs legally require a helper for safety standby, equipment setup, and radiation barricading.
                        </p>

                        <div className="overflow-x-auto mb-8">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-blue-100">
                                    <tr>
                                        <th className="px-3 py-2 text-left font-semibold">Crew Configuration</th>
                                        <th className="px-3 py-2 text-left font-semibold">Day Cost (USA)</th>
                                        <th className="px-3 py-2 text-left font-semibold">Scope</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {crewCompositions.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-3 py-2 font-medium text-sm">{item.crew}</td>
                                            <td className="px-3 py-2 font-semibold text-blue-700">{item.dayCost}</td>
                                            <td className="px-3 py-2 text-xs text-slate-600">{item.scope}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                            <p className="text-blue-900">
                                <strong>The standard equation:</strong> one Level II technician plus a helper, truck and standard equipment package is the baseline field crew everything else is priced relative to. Add mobilization on day one, per-diem if out-of-town, and any premium for shift pattern or access — those modifiers, not the base crew, are what separate two quotes for the same scope.</p>
                        </div>
                    </section>

                    {/* Hidden Costs */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Hidden NDT Costs Buyers Always Miss</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            These cost categories are technically legitimate but routinely omitted from initial quotes, surfacing as change orders or invoicing surprises. Bake them into your budget upfront.
                        </p>

                        <div className="overflow-x-auto mb-8">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-blue-100">
                                    <tr>
                                        <th className="px-3 py-2 text-left font-semibold">Category</th>
                                        <th className="px-3 py-2 text-left font-semibold">Typical Cost</th>
                                        <th className="px-3 py-2 text-left font-semibold">Note</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {hiddenCosts.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-3 py-2 font-semibold text-sm">{item.category}</td>
                                            <td className="px-3 py-2 text-xs text-blue-700 font-semibold">{item.cost}</td>
                                            <td className="px-3 py-2 text-xs text-slate-600">{item.note}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* RT Consumables Banned */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">RT Consumables Restrictions and Digital Alternatives</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Several jurisdictions have heavily restricted silver-bearing radiographic film and associated wet chemistry. If your operation spans multiple regions, the cost of the same RT scope can vary by 40-60% based on consumables availability alone.
                        </p>

                        <div className="space-y-4 mb-6">
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                                <h4 className="font-bold text-lg mb-2 text-amber-900">EU REACH and Wet Chemistry Restrictions</h4>
                                <p className="text-slate-700">EU REACH regulations restrict certain processing chemistry components. Netherlands and Germany require specialized hazardous-waste handling that effectively triples film lab disposal cost. This pushes EU RT-film pricing 25-35% above USA equivalent.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                                <h4 className="font-bold text-lg mb-2 text-amber-900">Singapore, Hong Kong, Australia</h4>
                                <p className="text-slate-700">Closed-loop chemistry recycling mandatory. Field labs are rare; most operators ship film overseas for processing or pivot to CR/DR. Effective per-shot cost premium is 20-40% over baseline.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                                <h4 className="font-bold text-lg mb-2 text-amber-900">California (CARB) and Several US States</h4>
                                <p className="text-slate-700">Restrict open-tray developing. Modern field RT in California is largely CR or DR. Conventional film still permitted but processing infrastructure is shrinking.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                                <h4 className="font-bold text-lg mb-2 text-amber-900">Saudi Arabia and UAE</h4>
                                <p className="text-slate-700">Source-import restrictions and security clearances for Ir-192/Co-60 transport make field radiography 25-40% more expensive than USA. Many operators use PAUT as primary method with RT as backup.</p>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                            <p className="text-blue-900">
                                <strong>The digital transition economics:</strong> CR sits below DR on per-exposure cost, and both eliminate film stock, developer and fixer chemistry, and hazardous-waste disposal — lines that quietly accumulate on film jobs. On throughput alone, digital usually wins the campaign-level comparison even where the per-exposure figure looks higher.</p>
                        </div>
                    </section>

                    {/* RFP Structure */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">How to RFP NDT Services for Best Pricing</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            A well-structured RFP reduces quoted prices by 15-30% by eliminating contractor risk premiums. Vague specs invite contingency loading; precise specs invite competitive pricing. Include the following in every NDT RFP.
                        </p>

                        <div className="space-y-3 mb-6">
                            {rfpChecklist.map((item, idx) => (
                                <div key={idx} className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-blue-500">
                                    <h4 className="font-bold mb-1 text-blue-900">{idx + 1}. {item.item}</h4>
                                    <p className="text-slate-600 text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                            <p className="text-blue-900">
                                <strong>RFP normalization tip:</strong> Always invite all three pricing models (day rate, piece rate, lump sum) and compare normalized. Vendors who can quote all three credibly are usually larger, better-managed, and more competitive. Vendors who refuse anything but day rate are usually carrying volume risk you can take instead.
                            </p>
                        </div>
                    </section>

                    {/* Cheap Pitfalls */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Cheap NDT Pitfalls: Cost vs Quality</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            The lowest bidder is rarely the cheapest outcome. Re-inspection, missed defects causing in-service failures, and warranty repair work typically costs 3-8x the original inspection saving. These are the eight quality risks that destroy NDT total cost of ownership.
                        </p>

                        <div className="space-y-4">
                            {cheapPitfalls.map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-500">
                                    <h4 className="font-bold text-lg mb-2 text-red-900">{idx + 1}. {item.pitfall}</h4>
                                    <p className="text-slate-600 text-sm">{item.consequence}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                                    <h3 className="font-bold text-lg mb-3 text-slate-800">{faq.question}</h3>
                                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="bg-gradient-to-r from-blue-700 to-slate-800 text-white p-8 rounded-xl text-center">
                        <h2 className="text-2xl font-bold mb-4">Need NDT Inspection Quotes You Can Compare?</h2>
                        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Post your NDT scope on NDT Connect and receive normalized quotes from vetted service providers within hours. Compare by method, region, certification, and pricing model — all on a single dashboard. Free for buyers.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/ndt-connect" className="inline-block px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition">Get NDT Quotes (Free)</Link>
                            <Link to="/consulting" className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition">Inspection Consulting</Link>
                        </div>
                    </section>

                    {/* Related Articles */}
                    <section className="mt-12">
                        <h2 className="text-2xl font-bold mb-6">Related Guides</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link to="/blog/mfl-pipeline-inspection-cost-vendors-when-to-use-vs-ut" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-blue-600 transition">MFL Pipeline Inspection Cost</h3>
                                <p className="text-slate-600 text-sm mt-2">Vendors, pricing, and when to use MFL vs UT</p>
                            </Link>
                            <Link to="/blog/rt-vs-ut-complete-comparison" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-blue-600 transition">RT vs UT Complete Comparison</h3>
                                <p className="text-slate-600 text-sm mt-2">Radiographic vs ultrasonic — full method comparison</p>
                            </Link>
                            <Link to="/blog/phased-array-ultrasonic-testing-paut-guide" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-blue-600 transition">PAUT Complete Guide</h3>
                                <p className="text-slate-600 text-sm mt-2">Phased Array UT — equipment, procedure, applications</p>
                            </Link>
                        </div>
                    </section>
                </div>
                    <p className="mt-8 pt-4 border-t border-slate-200 text-sm italic text-slate-500" data-atlantis-pricing-disclaimer="1">Disclaimer: Any salary, cost, or pricing figures in this article are general industry estimates for informational purposes only and do not represent Atlantis NDT pricing.</p>
      </article>

            <ContactDetails />
        </div>
    );
}
