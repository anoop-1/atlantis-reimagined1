import { Navigation } from "@/components/Navigation";
import CompetitorDeepDive from "@/components/CompetitorDeepDive";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import TableOfContents from "@/components/TableOfContents";
import RelatedGuidesBlock from "@/components/RelatedGuidesBlock";
const compareRows = [
    { factor: "Pricing model", atlantis: "Affordable SaaS — quote on request, fully customizable", competitor: "Pay-as-you-go Azure consumption — $0.001 per API call + storage + Functions + IoT Hub; typically $80K–$600K/yr Azure spend + custom-app dev cost" },
    { factor: "Deployment options", atlantis: "Cloud, on-prem, hybrid, air-gapped", competitor: "Azure cloud only; sovereign cloud regions available" },
    { factor: "Core data model", atlantis: "Inspection-native — CMLs, weld maps, defect maps, FFS results, RBI scores", competitor: "DTDL (Digital Twins Definition Language) ontology + graph runtime — bring-your-own data model" },
    { factor: "NDT data depth", atlantis: "PAUT B/C/S-scan native, RT image archive, MT/PT indications, UT thickness grids", competitor: "Blob storage + custom DTDL — NDT workflow is custom-build" },
    { factor: "API 579 / API 581 support", atlantis: "Built-in FFS calculator + RBI engine certified to API 581", competitor: "No native FFS or RBI — implemented as custom Azure Function + custom UI" },
    { factor: "3D visualization", atlantis: "Native WebGL 3D twin in browser, inspection-coloured overlays", competitor: "Azure Digital Twins 3D Scenes Studio (preview/GA) — basic 3D viewer; production 3D requires Unity / Babylon.js custom dev" },
    { factor: "Implementation time", atlantis: "8–14 weeks first asset live", competitor: "20–40 weeks for the DTDL ontology + Azure Functions + custom UI + inspection workflow build" },
    { factor: "Inspection workflow", atlantis: "Mobile data capture, offline-capable, ASNT report templates included", competitor: "No native inspection workflow — custom Power Apps / Blazor / React build on top" },
    { factor: "Connectors and SDK", atlantis: "OPC-UA, MQTT, Modbus, REST, SAP PM, Maximo, Meridium, Aspen Mtell, GE APM", competitor: "Azure IoT Hub, IoT Edge, Event Grid, Logic Apps, Azure Data Factory — extensive Azure ecosystem, generic for inspection" },
    { factor: "AI/ML tooling", atlantis: "Built-in damage-mechanism ML, corrosion-rate prediction, anomaly detection", competitor: "Azure ML / Azure OpenAI / Cognitive Services — strong general AI, bring-your-own inspection models" },
    { factor: "Support model", atlantis: "Named ASNT Level III consultant + 24/7 portal", competitor: "Azure Support tier (Developer/Standard/Professional Direct/Premier); inspection domain via Microsoft partner network" },
    { factor: "Best fit", atlantis: "Inspection-led integrity programs ready to buy a turnkey platform", competitor: "Enterprise IT teams committed to Azure with in-house developer capacity to build custom digital twin apps" },
];

const faqs = [
    { question: "Is Atlantis Digital Twin a direct replacement for Microsoft Azure Digital Twins?", answer: "No — they sit at very different layers. Azure Digital Twins (ADT) is a PaaS service: it provides a DTDL-based ontology language, a graph runtime, REST APIs, and event routing — the building blocks for an enterprise to model its physical world in Azure. ADT itself doesn&rsquo;t come with any inspection workflow, FFS calculator, RBI engine, 3D twin UI, or mobile capture app — those are all custom-build using Azure Functions, Logic Apps, Power Apps, Blazor, React, Unity, or Babylon.js layered on top. Atlantis Digital Twin is the application layer: out of the box you get the inspection app, the FFS engine, the RBI engine, the mobile capture workflow, and ASNT-compliant reporting without writing any code. The two coexist comfortably — many Azure-committed enterprises run Atlantis as the inspection-data-native application while keeping ADT as the broader enterprise digital twin graph." },
    { question: "Can I integrate Atlantis with my existing Azure footprint?", answer: "Yes — this is increasingly common. Atlantis pulls telemetry from Azure IoT Hub via Event Grid subscription or directly via REST, ingests Azure Digital Twins graph state via the DTDL API, and pushes inspection events back to ADT as DTDL-modelled events that downstream Azure consumers (Power BI dashboards, Azure ML pipelines, Logic Apps workflows) can react to. We typically map 50–200 corrosion-relevant tags per asset from your Azure IoT footprint into the Atlantis asset record so RBI scoring and CML thickness predictions stay in sync. No Azure-side configuration changes are required beyond a service-principal credential with read access to your ADT instance and IoT Hub." },
    { question: "Which is better for FFS (API 579) and RBI (API 581) calculations?", answer: "Atlantis ships with a native API 579-1/ASME FFS-1 Level 1, 2, and 3 calculator and a native API 581 RBI engine, both certified to the latest editions. Azure Digital Twins has no native FFS or RBI engine — implementations are custom Azure Functions or Azure ML pipelines, which works for L1 FFS but becomes a substantial software-engineering project for L2/L3 thermal-mechanical stress analysis and the deeper API 581 damage-mechanism logic. If FFS and RBI are core to your integrity workflow, Atlantis removes the need to build and maintain this in custom Azure code." },
    { question: "When does the Azure Digital Twins + custom-build approach make sense?", answer: "ADT + custom-build is the right approach when (a) you&rsquo;re an enterprise heavily committed to Azure with an in-house Azure developer team, (b) the digital twin use case spans far beyond inspection integrity — e.g. smart buildings, smart cities, manufacturing process integration, supply chain modelling, fleet management — and you want a single graph runtime across all use cases, (c) you have a Microsoft Enterprise Agreement that already covers Azure consumption, or (d) regulatory / data-residency requirements mandate Azure Sovereign Cloud (Azure US Government, Azure China 21Vianet, Azure Germany). Customers like Bentley iTwin (ADT-integrated), the City of Madrid Smart City twin, and certain large utilities have found ADT + custom build to be the right pattern. For inspection-led integrity, it&rsquo;s overkill." },
];

export default function AtlantisDtVsMicrosoftAzureDigitalTwins() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "Atlantis Digital Twin vs Microsoft Azure Digital Twins: Application vs PaaS Building Blocks [2026]",
                "datePublished": "2026-05-24",
                "dateModified": "2026-05-24",
                "author": { "@type": "Person", "name": "Anoop Rayavarapu", "jobTitle": "ASNT Level III, Founder Atlantis NDT" },
                "publisher": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/compare/atlantis-dt-vs-microsoft-azure-digital-twins" }
            },
            {
                "@type": "ItemList",
                "name": "Atlantis Digital Twin vs Microsoft Azure Digital Twins Comparison",
                "itemListElement": compareRows.map((r, i) => ({ "@type": "ListItem", "position": i + 1, "name": r.factor, "description": `Atlantis: ${r.atlantis}. Azure DT: ${r.competitor}` }))
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
                title="Atlantis Digital Twin vs Microsoft Azure Digital Twins: Application vs PaaS [2026]"
                description="Atlantis Digital Twin vs Microsoft Azure Digital Twins: accessible turnkey app vs $80K-$600K Azure PaaS + $800K-$2.5M custom dev. Native API 579/581 vs DTDL + Azure Functions. 2026 buyer guide."
                canonical="https://atlantisndt.com/compare/atlantis-dt-vs-microsoft-azure-digital-twins"
                structuredData={structuredData}
                faq={faqs}
            />
                    <TableOfContents items={[{ id: "overview", label: "Comparison Overview" }, { id: "matrix", label: "Feature Matrix" }, { id: "verdict", label: "When Each Wins" }, { id: "faq", label: "FAQ" }]} />
        <Breadcrumbs />

            <section className="bg-gradient-to-br from-blue-700 to-indigo-800 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="flex items-center gap-2 text-blue-200 mb-4"><BarChart3 className="w-5 h-5" /><span>Digital Twin Platform Comparison</span></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Atlantis Digital Twin vs Microsoft Azure Digital Twins: Application vs PaaS Building Blocks [2026]</h1>
                    <p className="text-xl text-blue-100 max-w-3xl mb-8">Turnkey inspection application or DTDL ontology + custom build? A side-by-side comparison from a 25-year ASNT Level III — pricing, NDT data depth, FFS/RBI workflow, deployment time.</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/contact" className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Book a Demo</Link>
                        <Link to="/digital-twins" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">Atlantis DT Overview</Link>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-5xl px-6 prose prose-slate max-w-none">
                    <h2>Why this comparison matters</h2>
                    <p>Microsoft Azure Digital Twins (ADT) is a powerful PaaS service: it provides DTDL (Digital Twins Definition Language) as an ontology language, a graph runtime that holds the modelled state of a physical world, REST APIs for query and update, and event-routing through Event Grid for downstream Azure consumers. Marquee customers include Brookfield Properties (smart real estate), the City of Madrid (smart city), Bentley Systems (iTwin platform integration), Honeywell Forge, Johnson Controls OpenBlue, and Bosch Connected Industry. ADT shines when an enterprise wants to model its entire physical world — buildings, factories, vehicles, infrastructure — in a unified graph that any Azure-resident application can query.</p>
                    <p>Atlantis Digital Twin is a different category. It&rsquo;s a turnkey application optimised for one job: inspection integrity. The data model assumes CMLs, weld maps, defect maps, FFS calculations, RBI scoring, and the 3D twin as the visualisation layer. Out of the box you get the inspection app, the FFS engine, the RBI engine, the mobile capture workflow, and ASNT-compliant reporting — without writing any DTDL, building any Azure Functions, or hiring a 4-person developer team.</p>

                    <h2>The honest summary up front</h2>
                    <ul>
                        <li><strong>Pick Microsoft Azure Digital Twins</strong> if you&rsquo;re an enterprise heavily committed to Azure with in-house developer capacity, your digital twin use case spans well beyond inspection (smart buildings + fleets + factories + supply chain), you want a single DTDL ontology across all those domains, or regulatory / data-residency requirements mandate Azure Sovereign Cloud.</li>
                        <li><strong>Pick Atlantis Digital Twin</strong> if your primary need is a turnkey inspection-integrity platform — CML capture, weld maps, FFS, RBI, 3D twin, mobile workflow, reporting — without committing to custom Azure development. Affordable, accessible, fully customizable SaaS, ASNT Level III consultant included, 8–14 weeks to first-asset-live. Cloud, on-prem, or air-gapped deployment.</li>
                        <li><strong>Run both</strong> if you have an Azure-committed enterprise IT strategy and want Atlantis as the inspection-application layer pulling telemetry from your Azure IoT Hub footprint and pushing inspection events back to ADT for the broader enterprise graph. This is the most common pattern for tier-1 industrial operators with Microsoft EAs.</li>
                    </ul>

                    <h2>Pricing model — the practical difference</h2>
                    <p>Azure Digital Twins itself is inexpensive at the platform level — consumption-priced at roughly $0.001 per API operation + storage + Functions execution. A typical mid-sized industrial deployment lands at $80K–$600K/year Azure consumption across ADT + IoT Hub + IoT Edge + Azure Functions + Blob storage + Azure ML for the building blocks. The real cost is the custom-app development effort to turn those building blocks into a working inspection application. A typical Microsoft partner engagement (Accenture, Deloitte, EY, Capgemini, Avanade, ZS Associates) to build the DTDL ontology, the inspection workflow, the 3D viewer, the FFS calculator, the RBI engine, the mobile capture app, and the reporting layer runs $800K–$2.5M one-time, with ongoing maintenance at $150K–$400K/year. First-year total: $1M–$3.5M before the inspection workflow is producing business value.</p>
                    <p>Atlantis Digital Twin is positioned as affordable, accessible, and fully customizable SaaS — region-specific pricing scaled to scope. A starter tier covers one complex asset with up to 25 named users and unlimited inspection records. The enterprise tier covers unlimited assets, unlimited users, and the full FFS/RBI engine. Implementation is 8–14 weeks. Contact us for a tailored quote for the inspection-led customer.</p>

                    <h2>Data depth — where the platforms diverge</h2>
                    <p>This is where the gap is largest. Azure Digital Twins is a graph runtime with DTDL ontology — a generic and powerful primitive, but it doesn&rsquo;t come with any inspection-specific model. To use ADT for inspection, an engineering team has to: (1) author the DTDL ontology for inspection (CML, weld, defect, FFS result, RBI score, damage mechanism, inspection event, NDT method, inspector certification, etc. — typically 80–150 DTDL interfaces); (2) build Azure Functions to compute FFS and RBI; (3) build a 3D viewer using Babylon.js, Unity, or 3D Scenes Studio; (4) build a Power Apps / Blazor / React mobile capture app; (5) build report templates in Power BI or custom React; (6) build the ASNT certification tracking. This is the kind of project that ends up costing $1.5M–$3M and taking 9–18 months.</p>
                    <p>Atlantis stores all of this natively. The asset record is a graph: equipment → CML → reading history → trend → predicted next inspection date. The same record holds the API 579 FFS calculation result, the API 581 RBI risk score, and the linked inspection report PDF. Weld maps, defect maps, PAUT B/C/S-scan images, and RT shot logs are all first-class objects. No custom build required.</p>

                    <h2>3D visualization</h2>
                    <p>Azure Digital Twins 3D Scenes Studio delivers a basic 3D viewer suitable for proof-of-concept and limited-scope deployments. For production 3D — with hundreds of millions of polygons, real-time inspection-overlay colouring, click-through to CML history, and field-grade tablet performance — most enterprises build custom Unity or Babylon.js viewers, which is its own engineering project (a substantial enterprise engagement typical).</p>
                    <p>Atlantis renders the asset as an interactive 3D twin in the browser — no client install, WebGL on any modern device including iPad in the field. CMLs, defects, FFS hot spots, and RBI risk are colour-coded directly on the geometry. Inspectors click a CML to see thickness history; engineers click a flaw to open the FFS calculation.</p>

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
                                    <th className="px-4 py-3 text-left text-amber-200">Azure Digital Twins</th>
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
                    <p>An Atlantis Digital Twin first-asset-live engagement runs 8–14 weeks. By week 14, you have a working 3D twin with live RBI scoring on at least one asset.</p>
                    <p>An Azure Digital Twins inspection workflow from scratch is heavier: 4–6 weeks of DTDL ontology authoring (inspection-domain modelling), 8–12 weeks of Azure Functions / Logic Apps / Power Apps build-out, 8–16 weeks of custom 3D viewer development (Unity or Babylon.js), 4–6 weeks of mobile capture app dev (Power Apps or React Native), 4–6 weeks of report-template build in Power BI. 28–46 weeks to inspection-workflow-live is normal. If you already have ADT live for other use cases (smart buildings, fleet management), layering Atlantis on top is dramatically faster than the reverse — typically 8–10 weeks.</p>

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
                        <li><strong>Atlantis enterprise tier</strong>: affordable, accessible, fully customizable SaaS — region-specific quote on request</li>
                        <li><strong>Azure Digital Twins + IoT Hub + custom inspection app</strong>: $300K/yr × 5 = $1.5M, plus $1.5M implementation + ongoing custom-app maintenance ($250K/yr) = <strong>~$4.25M</strong></li>
                    </ul>
                    <p>The gap shrinks if your enterprise IT strategy is &ldquo;everything must be Azure-resident&rdquo; and you&rsquo;re willing to absorb the custom-build cost as a long-term enterprise architecture investment. For pure inspection-led integrity, the cost story is firmly in Atlantis&rsquo;s favor.</p>

                    <h2>When Azure Digital Twins is the better choice</h2>
                    <p>ADT + custom-build is the right answer when (a) you&rsquo;re an enterprise IT shop heavily committed to Azure with an established developer capacity, (b) the digital twin use case spans far beyond inspection (smart buildings + factories + supply chain + fleet), and you want a single DTDL ontology across all of it, (c) you&rsquo;re already running heavy Azure consumption and want to add inspection inside that footprint rather than buying a third-party SaaS, or (d) data-residency or sovereign-cloud requirements drive everything onto Azure US Government / Azure China 21Vianet / Azure Germany. Bentley iTwin&rsquo;s ADT integration, Brookfield&rsquo;s smart-real-estate twin, the City of Madrid smart city twin, and certain large utilities have all found ADT + custom-build to be the right pattern.</p>

                    <h2>Where Atlantis wins decisively</h2>
                    <ul>
                        <li>Inspection-led organisations (oil &amp; gas inspection departments, fixed-equipment integrity teams, FPSO classification societies) where the daily user is an inspector or integrity engineer, not an Azure developer.</li>
                        <li>Operators who want a turnkey solution from inspection capture → 3D visualization → FFS/RBI → reporting, instead of a $1.5M–$3M custom Azure build project.</li>
                        <li>Smaller and mid-sized operators without an in-house Azure developer team.</li>
                        <li>Teams that need on-prem or air-gapped deployment for security-sensitive sites where Azure cloud is not an option.</li>
                    </ul>

                    <h2>Next steps</h2>
                    <p>If you&rsquo;d like to see the comparison applied to your asset list, we run a free 60-minute scoping call. Bring your Azure footprint summary (or whatever you&rsquo;re running), an asset register, and one CML report. We&rsquo;ll show you the exact same data running in Atlantis Digital Twin in 30 minutes.</p>
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
                                    <p className="text-sm text-slate-600">Industrial data fabric — contextualisation done; inspection workflow custom-build.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/compare/atlantis-dt-vs-ptc-thingworx" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-blue-700">vs PTC ThingWorx</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Discrete-manufacturing IIoT — when ThingWorx is right, when Atlantis is right.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/compare/atlantis-dt-vs-siemens-mindsphere" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-blue-700">vs Siemens MindSphere</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Industrial IoT cloud — Siemens-stack strength, inspection-app weakness.</p>
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
                                    <p className="text-sm text-slate-600">Full product page with features and case studies.</p>
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
                                    <p className="text-sm text-slate-600">60-minute scoping call — bring your Azure footprint, leave with a TCO model.</p>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-blue-700 to-indigo-800 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">See It Side-by-Side With Your Own Data</h2>
                    <p className="text-blue-100 mb-8 text-lg">Bring an Azure subscription summary, an asset register, and one CML report. We&rsquo;ll show you the exact same data running in Atlantis Digital Twin in 30 minutes.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/contact" className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Book Demo</Link>
                        <Link to="/digital-twins" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">Product Page</Link>
                    </div>
                </div>
            </section>
        <CompetitorDeepDive slug="microsoft-azure-digital-twins" />
            <RelatedGuidesBlock links={[
  {
    "title": "Atlantis Digital Twin Platform",
    "href": "/digital-twins",
    "description": "Atlantis DT platform hub",
    "icon": "dt"
  },
  {
    "title": "Digital Twin ROI Calculator",
    "href": "/digital-twin-roi-calculator",
    "description": "Worked examples",
    "icon": "dt"
  },
  {
    "title": "Digital Twin Readiness Quiz",
    "href": "/digital-twin-readiness-quiz",
    "description": "Maturity assessment",
    "icon": "dt"
  },
  {
    "title": "ASNT Level III Consulting",
    "href": "/consulting/asnt-level-iii-consulting-services",
    "description": "Outsourced Level III of record",
    "icon": "consulting"
  },
  {
    "title": "Atlantis NDT ERP Hub",
    "href": "/erp",
    "description": "Affordable Odoo-based ERP",
    "icon": "erp"
  },
  {
    "title": "ASNT Certification Path",
    "href": "/asnt-certification",
    "description": "Level I/II/III prep",
    "icon": "cert"
  }
]} />

        <ContactDetails />
        </div>
    );
}
