import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const compareRows = [
    { factor: "Pricing model", atlantis: "Tiered SaaS — $50K starter, $200K enterprise/yr", competitor: "Subscription per server + connected device + named developer — typically $250K–$1.2M/yr enterprise" },
    { factor: "Deployment options", atlantis: "Cloud, on-prem, hybrid, air-gapped", competitor: "On-prem ThingWorx Platform; ThingWorx Cloud (managed); Foundation as-a-service" },
    { factor: "Industry fit", atlantis: "Continuous-process integrity (refining, petrochem, FPSO, LNG, NH3, pipelines)", competitor: "Discrete manufacturing (factories, machine builders, automotive, aerospace MRO, medical devices)" },
    { factor: "Core data model", atlantis: "Inspection-native — CMLs, weld maps, defect maps, FFS results, RBI scores", competitor: "Thing-property-event model with low-code Mashup UI builder" },
    { factor: "NDT data depth", atlantis: "PAUT B/C/S-scan native, RT image archive, MT/PT indications, UT thickness grids", competitor: "Generic file storage; NDT workflow built as a custom Mashup or PTC partner solution" },
    { factor: "API 579 / API 581 support", atlantis: "Built-in FFS calculator + RBI engine certified to API 581", competitor: "No native FFS or RBI — implemented via custom Mashup + ThingWorx Analytics Server" },
    { factor: "3D visualization", atlantis: "Native WebGL 3D twin in browser, inspection-coloured overlays", competitor: "Vuforia Studio (PTC&rsquo;s AR-first 3D tool) — strong for AR-assisted maintenance, weaker for integrity 3D" },
    { factor: "Implementation time", atlantis: "8–14 weeks first asset live", competitor: "16–28 weeks for the platform + custom Mashup + Vuforia AR app" },
    { factor: "Inspection workflow", atlantis: "Mobile data capture, offline-capable, ASNT report templates included", competitor: "No native inspection workflow — built in ThingWorx Mashup or via PTC partner solution" },
    { factor: "Strength", atlantis: "Continuous-process API 510/570/653 integrity, RBI, FFS, 3D twin", competitor: "Discrete machine connectivity, AR-assisted procedures, ThingWorx Kepware OPC connectivity" },
    { factor: "Support model", atlantis: "Named ASNT Level III consultant + 24/7 portal", competitor: "PTC University training + Customer Support; manufacturing-domain expertise via PTC partner network" },
    { factor: "Best fit", atlantis: "Oil &amp; gas, petrochemical, LNG, NH3, pipelines, refining integrity", competitor: "Discrete manufacturing, machine OEMs, factory IIoT, aerospace MRO" },
];

const faqs = [
    { question: "Is Atlantis Digital Twin a direct replacement for PTC ThingWorx?", answer: "No — they serve fundamentally different industries. PTC ThingWorx is the leading IIoT platform for discrete manufacturing — machine builders (Rockwell, Fanuc, Siemens factory automation), automotive plants (Volkswagen, BMW, Ford), aerospace MRO (Boeing, Pratt &amp; Whitney, MTU), and medical-device manufacturers. It&rsquo;s strong at connecting individual machines, building low-code Mashup dashboards, and delivering AR-assisted maintenance procedures through Vuforia Studio. Atlantis Digital Twin is built for continuous-process integrity — refineries, petrochemical plants, FPSOs, LNG terminals, ammonia plants, pipelines. The damage mechanisms, the inspection codes (API 510/570/653/579/581), and the workflow are entirely different. The platforms rarely compete head-to-head except in aerospace MRO where ThingWorx for machine connectivity meets Atlantis for fixed-equipment integrity." },
    { question: "What does Atlantis Digital Twin cost vs PTC ThingWorx?", answer: "Atlantis pricing is tiered SaaS: $50,000/year starter (one complex asset, up to 25 named users) and $200,000/year enterprise (unlimited assets, unlimited users, full FFS/RBI engine). PTC ThingWorx pricing is per-server + per-connected-device + per-named-developer, typically landing at $250K–$1.2M/year for a mid-sized industrial deployment. Add Vuforia Studio for AR ($60K–$200K/yr), Kepware OPC connectivity ($30K–$80K/yr), and ThingWorx Analytics Server for predictive maintenance ($80K–$200K/yr), and total ThingWorx Foundation + Vuforia + Kepware spend typically reaches $500K–$1.7M/yr before any custom Mashup build. For continuous-process integrity, the economics flip strongly in Atlantis&rsquo;s favor." },
    { question: "Can I integrate Atlantis with my existing ThingWorx deployment?", answer: "Yes — and this is the right approach when you have ThingWorx running for discrete-manufacturing connectivity and want Atlantis for fixed-equipment integrity. Atlantis pulls process severity tags and machine-level events from ThingWorx via the ThingWorx REST API or via Kepware OPC-UA. We typically map 50–200 corrosion-relevant tags per asset (skin temperatures, fluid composition, operating pressure, dew point) from ThingWorx into the Atlantis asset record so RBI scoring and CML thickness predictions stay in sync. Inspection findings flow back to ThingWorx as Thing-property-event records for the broader IIoT context. No ThingWorx-side configuration changes are required beyond a service-account REST credential." },
    { question: "Which is better for FFS (API 579) and RBI (API 581) calculations?", answer: "Atlantis ships with a native API 579-1/ASME FFS-1 Level 1, 2, and 3 calculator and a native API 581 RBI engine, both certified to the latest editions. ThingWorx has no native FFS or RBI engine — implementations are typically custom Mashup applications using ThingWorx Analytics Server for the calculation, which works for L1 FFS but becomes brittle for L2/L3 thermal-mechanical stress analysis and the deeper API 581 damage-mechanism logic. If FFS and RBI are core to your integrity workflow, Atlantis removes the need to build and maintain this in ThingWorx Mashup." },
    { question: "Where does ThingWorx win clearly over Atlantis?", answer: "ThingWorx is the better platform when your primary use case is discrete-machine connectivity (CNC tools, PLCs, robots, factory automation), AR-assisted maintenance procedures (Vuforia Studio is best-in-class for this), or you&rsquo;re a machine builder or OEM embedding IIoT into your product. The classic ThingWorx success stories — Hirotec automotive die-and-mold, ANCA CNC tools, ServiceMax field service integration, PTC&rsquo;s own MES + ALM connectivity — are all discrete manufacturing where Atlantis would be the wrong fit. We don&rsquo;t try to win discrete manufacturing accounts; PTC doesn&rsquo;t try to win continuous-process integrity accounts. The platforms coexist cleanly." },
];

export default function AtlantisDtVsPtcThingworx() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "Atlantis Digital Twin vs PTC ThingWorx: Continuous-Process Integrity vs Discrete IIoT [2026]",
                "datePublished": "2026-05-24",
                "dateModified": "2026-05-24",
                "author": { "@type": "Person", "name": "Anoop Rayavarapu", "jobTitle": "ASNT Level III, Founder Atlantis NDT" },
                "publisher": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/compare/atlantis-dt-vs-ptc-thingworx" }
            },
            {
                "@type": "ItemList",
                "name": "Atlantis Digital Twin vs PTC ThingWorx Comparison",
                "itemListElement": compareRows.map((r, i) => ({ "@type": "ListItem", "position": i + 1, "name": r.factor, "description": `Atlantis: ${r.atlantis}. ThingWorx: ${r.competitor}` }))
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } }))
            }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="Atlantis Digital Twin vs PTC ThingWorx: Continuous-Process Integrity vs Discrete IIoT [2026]"
                description="Atlantis Digital Twin vs PTC ThingWorx: $50K-$200K SaaS continuous-process integrity vs $250K-$1.2M IIoT for discrete manufacturing. Native API 579/581 vs custom Mashup. 2026 buyer guide."
                canonical="https://atlantisndt.com/compare/atlantis-dt-vs-ptc-thingworx"
                structuredData={structuredData}
                faq={faqs}
            />
            <Breadcrumbs />

            <section className="bg-gradient-to-br from-blue-700 to-indigo-800 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="flex items-center gap-2 text-blue-200 mb-4"><BarChart3 className="w-5 h-5" /><span>Digital Twin Platform Comparison</span></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Atlantis Digital Twin vs PTC ThingWorx: Continuous-Process Integrity vs Discrete-Manufacturing IIoT [2026]</h1>
                    <p className="text-xl text-blue-100 max-w-3xl mb-8">When to pick continuous-process integrity vs discrete IIoT — a side-by-side comparison from a 25-year ASNT Level III who has implemented both. Pricing, NDT data depth, FFS/RBI workflow, deployment time.</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/contact" className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Book a Demo</Link>
                        <Link to="/digital-twins" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">Atlantis DT Overview</Link>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-5xl px-6 prose prose-slate max-w-none">
                    <h2>Why this comparison matters</h2>
                    <p>PTC ThingWorx is the de-facto leading IIoT platform for discrete manufacturing — used by Volkswagen, BMW, Ford, Boeing, Pratt &amp; Whitney, Rockwell Automation, Siemens factory automation, Hirotec, ANCA, ServiceMax, and dozens of machine-builder OEMs to connect machines, build low-code Mashup dashboards, and deliver AR-assisted maintenance procedures through Vuforia Studio. ThingWorx&rsquo;s strength is connecting individual production machines and discrete factory equipment to a centralised IIoT backbone, then layering low-code apps on top.</p>
                    <p>Atlantis Digital Twin lives in a different industrial world — continuous process. Refineries with 5,000–25,000 CMLs per process unit, FPSO hulls with 30,000+ weld maps, LNG terminals with cryogenic 9% Ni piping, ammonia plants with 120–400 primary reformer tubes operating at 950°C. The damage mechanisms (HTHA, sour service, CUI, ammonia SCC, brittle fracture at cryogenic temperature), the codes (API 510/570/653/579/581), and the regulatory framework (OSHA PSM, EPA RMP, PHMSA Part 192/195, NORSOK, PSA Norway) are all different from discrete manufacturing.</p>
                    <p>The two platforms rarely compete head-to-head. When they do, it&rsquo;s typically in aerospace MRO (where ThingWorx covers the shop floor and Atlantis covers the airframe NDT records) or in mixed-industry conglomerates (where the IT team is looking for a single platform across a continuous-process and discrete-manufacturing portfolio).</p>

                    <h2>The honest summary up front</h2>
                    <ul>
                        <li><strong>Pick PTC ThingWorx</strong> if your primary use case is connecting discrete machines (CNC tools, PLCs, robots, factory automation), delivering AR-assisted maintenance via Vuforia Studio, or you&rsquo;re a machine builder embedding IIoT into your product. ThingWorx + Vuforia + Kepware is the strongest stack on the market for these use cases.</li>
                        <li><strong>Pick Atlantis Digital Twin</strong> if your primary need is continuous-process integrity — refining, petrochem, LNG, NH3, pipelines, FPSOs — with native API 510/570/653/579/581 workflow and a 3D twin built for inspection overlay. SaaS pricing, ASNT Level III consultant included, 8–14 weeks to first-asset-live.</li>
                        <li><strong>Run both</strong> if you have a mixed portfolio. ThingWorx for the discrete factory equipment, Atlantis for the fixed continuous-process integrity. The platforms integrate cleanly via REST API.</li>
                    </ul>

                    <h2>Pricing model — the practical difference</h2>
                    <p>PTC ThingWorx pricing is per-server + per-connected-device + per-named-developer + per-AR-licence. A typical mid-sized ThingWorx Foundation deployment lands at $250K–$1.2M/year for the platform itself, with Vuforia Studio for AR adding $60K–$200K/yr, Kepware OPC connectivity adding $30K–$80K/yr, and ThingWorx Analytics Server (for predictive maintenance use cases) adding $80K–$200K/yr. Total stack spend commonly reaches $500K–$1.7M/year for an enterprise deployment, and that&rsquo;s before the custom Mashup engineering effort to build the inspection workflow on top.</p>
                    <p>Atlantis Digital Twin is tiered SaaS. The $50K/year starter covers one complex asset with up to 25 named users and unlimited inspection records. The $200K/year enterprise tier covers unlimited assets, unlimited users, and the full FFS/RBI engine. Implementation is 8–14 weeks at typically $40K–$120K one-time. First-year total: $90K–$320K for the inspection-led customer.</p>

                    <h2>NDT data depth — where the gap is widest</h2>
                    <p>This is where the platforms diverge most. ThingWorx&rsquo;s native data type is a Thing with Properties and Events — designed for the kind of data that comes off a CNC machine (spindle speed, vibration, tool wear, part counter). Inspection data does not fit that mould:</p>
                    <ul>
                        <li>A UT thickness CML grid is 100–500 thickness readings captured at one moment, tied to a coordinate map on the equipment. Not a stream of Thing Properties over time.</li>
                        <li>An RT shot is a digital radiograph with defect annotations, an interpretation, and a code acceptance. Not a numeric Property.</li>
                        <li>A PAUT scan produces B-scan, C-scan, and S-scan images that need to be archived, viewed, and re-interpreted years later. ThingWorx is not an image archive.</li>
                        <li>A weld map is a structured object: weld number, joint type, heat number, welder ID, NDT method, acceptance status. Relational data, not Thing Property timestreams.</li>
                    </ul>
                    <p>Atlantis stores all of this natively. The asset record is a graph: equipment → CML → reading history → trend → predicted next inspection date. The same record holds the API 579 FFS calculation result, the API 581 RBI risk score, and the linked inspection report PDF. ThingWorx customers who try to build this in Mashup typically end up with a brittle custom application that doesn&rsquo;t match the depth of a purpose-built tool.</p>

                    <h2>3D visualization — Vuforia vs WebGL</h2>
                    <p>PTC Vuforia Studio is best-in-class for AR-assisted maintenance procedures — overlaying digital instructions on a physical asset through a tablet or AR headset. It&rsquo;s the right tool when a field technician needs step-by-step visual guidance over their physical equipment (a turbine MRO procedure, a CNC tool change, a robotic line setup). Vuforia is weaker for integrity 3D overlay — showing CMLs, weld maps, FFS hot spots, and RBI risk colour-coded on the asset geometry.</p>
                    <p>Atlantis renders the asset as an interactive 3D twin in the browser — no client install, WebGL on any modern device including iPad in the field. CMLs, defects, FFS hot spots, and RBI risk are colour-coded directly on the geometry. Inspectors click a CML to see thickness history; engineers click a flaw to open the FFS calculation. Vuforia and Atlantis are complementary tools for different jobs.</p>

                    <h2>Side-by-side comparison table</h2>
                </div>
            </section>

            <section className="py-8 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl shadow-sm">
                            <thead className="bg-slate-800 text-white">
                                <tr>
                                    <th className="px-4 py-3 text-left">Factor</th>
                                    <th className="px-4 py-3 text-left text-blue-200">Atlantis Digital Twin</th>
                                    <th className="px-4 py-3 text-left text-amber-200">PTC ThingWorx</th>
                                </tr>
                            </thead>
                            <tbody>
                                {compareRows.map((row, i) => (
                                    <tr key={row.factor} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                        <td className="px-4 py-3 font-medium text-sm align-top">{row.factor}</td>
                                        <td className="px-4 py-3 text-slate-700 text-sm align-top">{row.atlantis}</td>
                                        <td className="px-4 py-3 text-slate-700 text-sm align-top">{row.competitor}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-5xl px-6 prose prose-slate max-w-none">
                    <h2>Implementation timeline — what to expect</h2>
                    <p>An Atlantis Digital Twin first-asset-live engagement runs 8–14 weeks: 2 weeks of asset model import, 4 weeks of integration build-out (PI / SAP PM / Maximo / OPC-UA tags), 4 weeks of inspection data backfill and FFS/RBI tuning, 2 weeks of inspector and engineer training. By week 14, you have a working 3D twin with live RBI scoring on at least one asset.</p>
                    <p>A PTC ThingWorx rollout from scratch is heavier: 4–6 weeks of platform provisioning, 6–8 weeks of Thing model and Mashup build-out, 4–8 weeks of Vuforia AR procedure authoring (if AR is in scope), plus 8–12 weeks of custom Mashup engineering to build the inspection workflow. 22–34 weeks to inspection-app-live is normal when starting from a blank ThingWorx instance.</p>

                    <h2>NDT-specific differentiators</h2>
                    <ul>
                        <li><strong>UT/PAUT/TOFD/MFL data ingestion in native instrument formats.</strong> Olympus OmniScan files, Eddyfi M2M files, Sonatest Veo+ files, GE Mentor files import directly without custom build.</li>
                        <li><strong>API 579 FFS Level 1/2/3 calculator.</strong> Built in, certified to the latest API 579-1/ASME FFS-1 edition.</li>
                        <li><strong>API 581 RBI engine.</strong> Built in, certified to the latest API 581 edition, with damage-mechanism templates per API 571.</li>
                        <li><strong>Audit packs for API 510/570/653/580/581.</strong> Generated automatically from the digital twin data repository for regulatory submission.</li>
                        <li><strong>ASNT Level III consultant on every enterprise engagement.</strong> The same person reviews your inspection data quality, sanity-checks FFS results, and is on the line during turnarounds.</li>
                    </ul>

                    <h2>Total cost of ownership over 5 years</h2>
                    <p>For a single-site refinery integrity program — one process unit, 200 CMLs, 50 weld maps, RBI on 800 components — a 5-year TCO comparison:</p>
                    <ul>
                        <li><strong>Atlantis enterprise tier</strong>: $200K/yr × 5 = $1.0M, plus $80K one-time implementation = <strong>$1.08M</strong></li>
                        <li><strong>PTC ThingWorx Foundation + Vuforia + Kepware + custom inspection Mashup</strong>: $700K/yr × 5 = $3.5M, plus $600K implementation + ongoing custom Mashup maintenance ($120K/yr) = <strong>~$4.7M</strong></li>
                    </ul>
                    <p>For continuous-process integrity, the cost story is firmly in Atlantis&rsquo;s favor. The platforms are not direct substitutes — but for the inspection-led integrity use case, Atlantis is the right purchase.</p>

                    <h2>When PTC ThingWorx is the better choice</h2>
                    <p>ThingWorx is the right answer when discrete-machine connectivity, AR-assisted maintenance via Vuforia, or machine-OEM IIoT embedding is your primary use case. Volkswagen, BMW, Boeing aerospace MRO, Pratt &amp; Whitney engine line, Rockwell&rsquo;s own factory automation, and the legion of machine-builder OEMs (Mazak, Okuma, Haas, ANCA, Fanuc, KUKA, ABB Robotics) all use ThingWorx + Vuforia + Kepware as a coherent stack for very good reasons. There&rsquo;s no contest in discrete manufacturing.</p>

                    <h2>Where Atlantis wins decisively</h2>
                    <ul>
                        <li>Oil &amp; gas (upstream, midstream, downstream) where API 510/570/653/579/581 govern the integrity workflow.</li>
                        <li>Petrochemical, ammonia, urea, methanol, GTL plants where API 571 damage-mechanism management is core.</li>
                        <li>LNG, FPSO, offshore platform classification (DNV, ABS, Lloyd&rsquo;s, BV, RINA) integrity.</li>
                        <li>Pipelines (oil, gas, NH3, H2, CO2) under PHMSA, NORSOK, EnTSO-E, or equivalent regulatory regimes.</li>
                    </ul>

                    <h2>Next steps</h2>
                    <p>If you&rsquo;d like to see the comparison applied to your asset list, we run a free 60-minute scoping call. Bring your existing ThingWorx Thing model export (if you have one), an asset register, and one CML report. We&rsquo;ll show you the exact same data running in Atlantis Digital Twin in 30 minutes.</p>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-8 text-center text-slate-800">Frequently Asked Questions</h2>
                    <div className="space-y-3">
                        {faqs.map((faq, i) => (
                            <details key={i} className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                                <summary className="p-5 font-semibold text-slate-800 cursor-pointer hover:bg-slate-50 list-none flex items-center justify-between">
                                    {faq.question}
                                    <span className="text-blue-700 text-xl ml-4 flex-shrink-0">+</span>
                                </summary>
                                <div className="px-5 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">{faq.answer}</div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-10">Compare More Platforms</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Link to="/compare/atlantis-dt-vs-cognite-data-fusion" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-blue-700">vs Cognite Data Fusion</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Industrial data fabric — strong on contextualisation, weaker on turnkey inspection workflow.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/compare/atlantis-dt-vs-microsoft-azure-digital-twins" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-blue-700">vs Azure Digital Twins</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">DTDL modelling and graph runtime on Azure — bring-your-own inspection app.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/compare/atlantis-dt-vs-bentley-itwin" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-blue-700">vs Bentley iTwin</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">CAD/BIM-rooted twin vs inspection-rooted twin.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/digital-twins" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-blue-700">Atlantis Digital Twin</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Full product page with features, pricing tiers, and case studies.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/erp" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-blue-700">Atlantis NDT ERP</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">The ERP that pairs with the digital twin — jobs, certs, equipment, invoicing.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/contact" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-blue-700">Book a Demo</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">60-minute scoping call — bring your inspection scope, leave with a TCO model.</p>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-blue-700 to-indigo-800 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">See It Side-by-Side With Your Own Data</h2>
                    <p className="text-blue-100 mb-8 text-lg">Bring an asset register and one CML report. We&rsquo;ll show you the exact same data running in Atlantis Digital Twin in 30 minutes.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/contact" className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Book Demo</Link>
                        <Link to="/digital-twins" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">Product Page</Link>
                    </div>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
