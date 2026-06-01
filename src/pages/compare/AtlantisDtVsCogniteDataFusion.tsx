import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const compareRows = [
    { factor: "Pricing model", atlantis: "Tiered SaaS — $50K starter, $200K enterprise/yr", competitor: "Subscription per workspace + data-volume + named users — typically $300K–$1.8M/yr enterprise" },
    { factor: "Deployment options", atlantis: "Cloud, on-prem, hybrid, air-gapped", competitor: "Cloud-first (Azure/AWS/GCP); on-prem is custom engagement" },
    { factor: "Core data model", atlantis: "Inspection-native — CMLs, weld maps, defect maps, FFS results, RBI scores", competitor: "Industrial data fabric — contextualises time-series + 3D + documents + simulation + ML" },
    { factor: "NDT data depth", atlantis: "PAUT B/C/S-scan native, RT image archive, MT/PT indications, UT thickness grids", competitor: "Generic file storage; NDT inspection workflow requires custom solution build" },
    { factor: "API 579 / API 581 support", atlantis: "Built-in FFS calculator + RBI engine certified to API 581", competitor: "No native FFS or RBI — implemented as customer-built data product on top of CDF" },
    { factor: "3D visualization", atlantis: "Native WebGL 3D twin in browser, inspection-coloured overlays", competitor: "Cognite InField + Cognite Functions deliver 3D — strong CAD support, weaker on inspection overlays" },
    { factor: "Implementation time", atlantis: "8–14 weeks first asset live", competitor: "16–36 weeks typical for the data-fabric build + custom inspection app on top" },
    { factor: "Inspection workflow", atlantis: "Mobile data capture, offline-capable, ASNT report templates included", competitor: "No native inspection workflow — Cognite is a platform; the inspection app is a custom build or partner solution" },
    { factor: "Connectors and SDK", atlantis: "OPC-UA, MQTT, Modbus, REST, SAP PM, Maximo, Meridium, Aspen Mtell, GE APM", competitor: "Extensive Python SDK + REST API; data extractors for SAP, Maximo, PI, OPC-UA, document systems" },
    { factor: "ML / data science tooling", atlantis: "Built-in damage-mechanism ML, corrosion-rate prediction, anomaly detection", competitor: "Strong Jupyter/notebook tooling for data scientists; ML is bring-your-own-models" },
    { factor: "Support model", atlantis: "Named ASNT Level III consultant + 24/7 portal", competitor: "Customer Success Manager + technical account team; inspection domain via partner network" },
    { factor: "Best fit", atlantis: "Inspection-led integrity programs, RBI/FFS-driven assets, operators wanting a turnkey inspection platform", competitor: "Data-platform-led organisations with in-house data science teams building custom industrial data products" },
];

const faqs = [
    { question: "Is Atlantis Digital Twin a direct replacement for Cognite Data Fusion?", answer: "No — they sit at different layers of the stack. Cognite Data Fusion (CDF) is an industrial data fabric: it contextualises time-series, 3D models, documents, simulation outputs, and ML models into a coherent graph that data scientists and engineers query through a Python SDK. CDF is brilliant if you have a data science team building custom industrial data products. Atlantis Digital Twin is a turnkey inspection-integrity application: out of the box you get CML thickness tracking, weld maps, API 579 FFS, API 581 RBI, the 3D twin, mobile inspection capture, and ASNT-compliant report templates without writing any code. The two coexist comfortably — many Cognite customers run Atlantis as the inspection-data-native layer with CDF as the broader industrial data fabric. Where they overlap, the question is whether you want to build vs buy the inspection workflow." },
    { question: "Can I integrate Atlantis with my existing Cognite Data Fusion deployment?", answer: "Yes — this is one of our most common deployments at Cognite customers. Atlantis pulls contextualised data from CDF via the Cognite Python SDK or REST API. We typically map 50–200 corrosion-relevant tags per asset (skin temperatures, fluid composition, operating pressure, dew point, sulfur content) from CDF into the Atlantis asset record so RBI scoring and CML thickness predictions stay in sync with operating severity. No CDF-side configuration changes are required beyond a service account with read access. Inspection findings flow back to CDF as contextualised events so the data scientists working in Cognite can incorporate inspection signal into their broader ML models." },
    { question: "Which is better for FFS (API 579) and RBI (API 581) calculations?", answer: "Atlantis ships with a native API 579-1/ASME FFS-1 Level 1, 2, and 3 calculator and a native API 581 RBI engine, both certified to the latest editions. Cognite Data Fusion has no native FFS or RBI engine — customers typically build the calculation either in custom Python (which works for L1 but is painful for L2/L3 thermal-mechanical stress analysis) or integrate a separate tool (Becht FFS, E2G PlantStream, DNV Sesam Wind, Wood Inteq). If FFS and RBI are core to your integrity workflow, Atlantis removes 1–2 tools from the stack and saves a Python-engineering effort." },
    { question: "What is the migration path if we already have Cognite Asset Hierarchy and 3D models?", answer: "We import your Cognite Asset Hierarchy and 3D model references via the Cognite Python SDK in a one-time mapping step (1–2 weeks). Equipment IDs, parent-child relationships, P&amp;ID document links, and 3D model bindings transfer automatically. CML locations from your existing IDMS (Meridium, Antea, GE APM) layer on top via a separate import. Most customers are running Atlantis side-by-side with CDF within 30 days, with full integrity workflow live by week 12. CDF continues to serve as the broader data fabric for non-inspection use cases (production allocation, real-time process optimisation, robotics)." },
];

export default function AtlantisDtVsCogniteDataFusion() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "Atlantis Digital Twin vs Cognite Data Fusion: Inspection App vs Data Fabric [2026]",
                "datePublished": "2026-05-24",
                "dateModified": "2026-05-24",
                "author": { "@type": "Person", "name": "Anoop Rayavarapu", "jobTitle": "ASNT Level III, Founder Atlantis NDT" },
                "publisher": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/compare/atlantis-dt-vs-cognite-data-fusion" }
            },
            {
                "@type": "ItemList",
                "name": "Atlantis Digital Twin vs Cognite Data Fusion Comparison",
                "itemListElement": compareRows.map((r, i) => ({ "@type": "ListItem", "position": i + 1, "name": r.factor, "description": `Atlantis: ${r.atlantis}. Cognite: ${r.competitor}` }))
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
                title="Atlantis Digital Twin vs Cognite Data Fusion: Inspection App vs Data Fabric [2026]"
                description="Atlantis Digital Twin vs Cognite Data Fusion: $50K-$200K turnkey inspection vs $300K-$1.8M industrial data fabric. Native API 579/581 vs build-it-yourself ML. 2026 buyer guide."
                canonical="https://atlantisndt.com/compare/atlantis-dt-vs-cognite-data-fusion"
                structuredData={structuredData}
                faq={faqs}
            />
            <Breadcrumbs />

            <section className="bg-gradient-to-br from-blue-700 to-indigo-800 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="flex items-center gap-2 text-blue-200 mb-4"><BarChart3 className="w-5 h-5" /><span>Digital Twin Platform Comparison</span></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Atlantis Digital Twin vs Cognite Data Fusion: Inspection App vs Industrial Data Fabric [2026]</h1>
                    <p className="text-xl text-blue-100 max-w-3xl mb-8">Turnkey inspection platform or build-your-own data fabric? A side-by-side comparison from a 25-year ASNT Level III who has implemented both — pricing, NDT data depth, FFS/RBI workflow, deployment time.</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/contact" className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Book a Demo</Link>
                        <Link to="/digital-twins" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">Atlantis DT Overview</Link>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-5xl px-6 prose prose-slate max-w-none">
                    <h2>Why this comparison matters</h2>
                    <p>Cognite Data Fusion (CDF) is the leading industrial data fabric, with marquee deployments at Aker BP, Equinor, AkzoNobel, Saudi Aramco, ADNOC, Petronas, OMV, Salt Lake Potash, and BP. CDF excels at contextualising the broad span of industrial data — time-series from PI / OSIsoft, 3D models from AVEVA E3D / Bentley OpenPlant / Hexagon Smart 3D, P&amp;ID documents from Adobe / SmartPlant / AutoCAD, simulation outputs from OLGA / HYSYS / Aspen Plus, and the operational data store — into a queryable graph that data scientists and engineers explore through a Python SDK. For organisations with a 6+ person data science team building custom industrial data products, CDF is a powerful foundation.</p>
                    <p>Atlantis Digital Twin sits at a different layer. It&rsquo;s a turnkey application optimised for one job: inspection integrity. The data model assumes CMLs, weld maps, defect maps, FFS calculations, RBI scoring, and the 3D twin as the visualisation layer. Out of the box you get the inspection app, the FFS engine, the RBI engine, the mobile capture workflow, and ASNT-compliant reporting without writing any code.</p>

                    <h2>The honest summary up front</h2>
                    <ul>
                        <li><strong>Pick Cognite Data Fusion</strong> if you have an in-house data science team, the primary use case is custom industrial data products across many domains (production allocation, robotics, predictive maintenance, real-time process optimisation), and you&rsquo;re happy to build the inspection app as a custom data product on top of CDF.</li>
                        <li><strong>Pick Atlantis Digital Twin</strong> if your primary need is a turnkey inspection-integrity platform — CML capture, weld maps, FFS, RBI, 3D twin, mobile workflow, reporting — without writing Python or hiring data scientists. SaaS pricing, ASNT Level III consultant included, 8–14 weeks to first-asset-live.</li>
                        <li><strong>Run both</strong> if you have a CDF deployment for the broader industrial data fabric and want Atlantis to be your inspection integrity layer, pulling contextualised severity tags from CDF and pushing inspection events back. This is the most common configuration at Cognite&rsquo;s tier-1 oil &amp; gas customers.</li>
                    </ul>

                    <h2>Pricing model — the practical difference</h2>
                    <p>Cognite Data Fusion is priced on a per-workspace + data-volume + named-user subscription model. A typical tier-1 industrial customer (e.g. Aker BP, Equinor, Saudi Aramco, ADNOC) lands in the $300K–$1.8M/year range depending on workspace count, data volume ingested per month, and named-user count. Add the custom-built inspection app effort — typically a 4–6 month engagement with a Cognite partner (Cognite Consulting Services, Accenture, Deloitte, Wood, Worley) at $500K–$1.5M one-time implementation — and the first-year total is $800K–$3.3M before the inspection workflow is even live.</p>
                    <p>Atlantis Digital Twin is tiered SaaS based on asset complexity and user count. The $50K/year starter covers one complex asset with up to 25 named users and unlimited inspection records. The $200K/year enterprise tier covers unlimited assets, unlimited users, and the full FFS/RBI engine. Implementation is 8–14 weeks at typically $40K–$120K one-time. First-year total: $90K–$320K for the inspection-led customer who doesn&rsquo;t need the broader data fabric.</p>

                    <h2>Data depth — where the platforms diverge</h2>
                    <p>This is where the platforms are most different. Cognite Data Fusion is a fabric: it stores everything (time-series, 3D models, documents, simulation outputs) and lets you query across it. The depth in any one domain depends entirely on what you build on top. For inspection specifically, CDF gives you the building blocks — but you still need to define the inspection data model, build the FFS calculation, build the RBI engine, build the mobile capture app, and build the report templates. Most CDF customers either skip the inspection workflow entirely (using a separate IDMS) or build a minimal version that doesn&rsquo;t match the depth of a purpose-built tool.</p>
                    <p>Atlantis stores inspection data natively. The asset record is a graph: equipment → CML → reading history → trend → predicted next inspection date. The same record holds the API 579 FFS calculation result, the API 581 RBI risk score, and the linked inspection report PDF. Weld maps, defect maps, PAUT B/C/S-scan images, and RT shot logs are all first-class objects. No custom build required.</p>

                    <h2>3D visualization</h2>
                    <p>Cognite InField + Cognite Functions deliver strong 3D model visualisation with excellent CAD support — they can render hundreds of millions of polygons in the browser, and they&rsquo;ve done some of the best work in the industry on 3D model performance optimisation for large industrial assets. Where they&rsquo;re weaker is the inspection-overlay layer: showing CML thickness, defect locations, FFS hot spots, and RBI risk on top of the 3D geometry. CDF customers typically end up building custom dashboards in Cognite InField + Cognite Functions to deliver this view, which works but adds engineering time.</p>
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
                                    <th className="px-4 py-3 text-left text-amber-200">Cognite Data Fusion</th>
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
                    <p>An Atlantis Digital Twin first-asset-live engagement typically runs 8–14 weeks: 2 weeks of asset model import (P&amp;ID, equipment list, existing IDMS data), 4 weeks of integration build-out (PI / SAP PM / Maximo / OPC-UA tags, including CDF if you have it), 4 weeks of inspection data backfill and FFS/RBI tuning, 2 weeks of inspector and engineer training. By week 14, you have a working 3D twin with live RBI scoring on at least one asset.</p>
                    <p>A Cognite Data Fusion rollout from scratch is heavier: 6–10 weeks of CDF workspace provisioning and data extractor configuration, 8–12 weeks of contextualisation and asset hierarchy build-out, 8–16 weeks of custom inspection app build by a partner (Cognite Consulting, Accenture, Deloitte, Wood). 22–38 weeks to inspection-app-live is normal. If you already have CDF live, layering Atlantis on top is dramatically faster than the reverse — typically 8–10 weeks because the data extractors and asset hierarchy are already in place.</p>

                    <h2>NDT-specific differentiators</h2>
                    <p>Atlantis is built by ASNT Level III practitioners for inspection teams, and the platform reflects that. The differentiators that matter most:</p>
                    <ul>
                        <li><strong>UT/PAUT/TOFD/MFL data ingestion in native instrument formats.</strong> Olympus OmniScan files, Eddyfi M2M files, Sonatest Veo+ files, GE Mentor files import directly without custom build.</li>
                        <li><strong>API 579 FFS Level 1/2/3 calculator.</strong> Built in, certified to the latest API 579-1/ASME FFS-1 edition.</li>
                        <li><strong>API 581 RBI engine.</strong> Built in, certified to the latest API 581 edition, with damage-mechanism templates per API 571.</li>
                        <li><strong>Audit packs for API 510/570/653/580/581.</strong> Generated automatically from the digital twin data repository for regulatory submission.</li>
                        <li><strong>ASNT Level III consultant on every enterprise engagement.</strong> The same person reviews your inspection data quality, sanity-checks FFS results, and is on the line during turnarounds.</li>
                    </ul>

                    <h2>Total cost of ownership over 5 years</h2>
                    <p>For a single-site refinery integrity program — one process unit, 200 CMLs, 50 weld maps, RBI on 800 components — a 5-year TCO comparison looks roughly like this:</p>
                    <ul>
                        <li><strong>Atlantis enterprise tier</strong>: $200K/yr × 5 = $1.0M, plus $80K one-time implementation = <strong>$1.08M</strong></li>
                        <li><strong>Cognite Data Fusion + custom inspection app</strong>: $500K/yr × 5 = $2.5M, plus $800K implementation + ongoing partner enhancements ($150K/yr) = <strong>~$4.05M</strong></li>
                    </ul>
                    <p>The gap shrinks at very large scale (CDF&rsquo;s data fabric earns its keep when you&rsquo;re running 5+ use cases including robotics, production allocation, and process optimisation in parallel). For inspection-led organisations the cost story is firmly in Atlantis&rsquo;s favor.</p>

                    <h2>When Cognite Data Fusion is the better choice</h2>
                    <p>We&rsquo;ll be the first to say it: CDF is the right answer when you have a data science team, your primary need is a broad industrial data fabric supporting multiple use cases, you want Python SDK and notebook-based exploration as your primary interface, and you&rsquo;re happy to build (or have a partner build) the inspection app as a custom data product. Aker BP&rsquo;s digitalisation journey, Equinor&rsquo;s LeadOps initiative, and AkzoNobel&rsquo;s Manufacturing Productivity programme are showcase examples of CDF done right. There&rsquo;s no shame in keeping CDF for the broader data fabric and adding Atlantis as the inspection layer.</p>

                    <h2>Where Atlantis wins decisively</h2>
                    <ul>
                        <li>Inspection-led organisations (oil &amp; gas inspection departments, fixed-equipment integrity teams, FPSO classification societies) where the daily user is an inspector or integrity engineer, not a data scientist.</li>
                        <li>Operators who want a turnkey solution from inspection capture → 3D visualization → FFS/RBI → reporting, instead of building it on top of a fabric.</li>
                        <li>Smaller and mid-sized operators without a 6+ person data science team to feed a data fabric.</li>
                        <li>Teams that want a domain-expert ASNT Level III on the engagement rather than a data engineering team.</li>
                    </ul>

                    <h2>Next steps</h2>
                    <p>If you&rsquo;d like to see the comparison applied to your asset list, we run a free 60-minute scoping call where we map your current CDF footprint (or whatever you&rsquo;re running), look at your inspection data sources, and build a side-by-side TCO model with real numbers. Book a slot via the contact page or compare alternative platforms below.</p>
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
                        <Link to="/compare/atlantis-dt-vs-ptc-thingworx" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-blue-700">vs PTC ThingWorx</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">IIoT platform with low-code app builder — discrete manufacturing strength, weaker on continuous-process integrity.</p>
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
                        <Link to="/compare/atlantis-dt-vs-aveva-pi-system" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-blue-700">vs AVEVA PI System</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Process historian — when to keep PI and add Atlantis on top.</p>
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
                                    <p className="text-sm text-slate-600">60-minute scoping call — bring your CDF asset hierarchy, leave with a TCO model.</p>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-blue-700 to-indigo-800 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">See It Side-by-Side With Your Own Data</h2>
                    <p className="text-blue-100 mb-8 text-lg">Bring a CDF asset hierarchy export, an asset register, and one CML report. We&rsquo;ll show you the exact same data running in Atlantis Digital Twin in 30 minutes.</p>
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
