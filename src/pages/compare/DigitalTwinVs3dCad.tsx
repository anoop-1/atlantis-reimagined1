import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const compareRows = [
    { factor: "Primary purpose", atlantis: "Operational asset-integrity platform: continuous data accumulation, inspection workflow, FFS / RBI calculations, decision support across the asset lifecycle", competitor: "Static geometric representation: as-built reference, design intent, clash detection, visualisation. Frozen at a point in time." },
    { factor: "Data flow", atlantis: "Bidirectional &mdash; inspection data and operational telemetry in, work-order recommendations and FFS decisions out", competitor: "One-way and discrete &mdash; the CAD model is exported, viewed, sometimes red-lined, but rarely written back to in a meaningful way" },
    { factor: "Time dimension", atlantis: "Continuous &mdash; the twin evolves as the asset degrades over 20&ndash;60 years", competitor: "A single frozen moment &mdash; usually the as-built state or a particular turnaround scan" },
    { factor: "Inspection records integration", atlantis: "Every UT thickness reading, every PAUT scan, every MT/PT indication geo-referenced and pinned to the asset geometry", competitor: "External &mdash; inspection records live in spreadsheets, IDMS systems, or scattered PDFs disconnected from the CAD model" },
    { factor: "Analytics", atlantis: "Damage-mechanism engines per API 571, wall-loss forecasting, probability of failure per API 581, fitness-for-service per API 579 Level 1/2/3", competitor: "None natively &mdash; CAD is geometry, not analytics" },
    { factor: "Operational telemetry", atlantis: "Pulls process severity tags from DCS / historian (AVEVA PI, Honeywell PHD, OSIsoft PI, Yokogawa Exaquantum) for corrosion-rate predictions and RBI scoring", competitor: "No native integration with operational systems" },
    { factor: "Geometry source", atlantis: "Imports CAD geometry as the foundation; SmartPlant 3D, AVEVA E3D, Bentley OpenPlant, AutoCAD Plant 3D, Solid Edge, Inventor, SolidWorks, NX, CATIA all supported", competitor: "Native geometry creation &mdash; this is the CAD tool&rsquo;s primary job" },
    { factor: "Update cadence", atlantis: "Seconds (telemetry) to hours (work orders) to weeks (inspection events) to months (FFS calculations)", competitor: "Major updates at design milestones, turnaround scans, or major modifications. Often years between meaningful updates." },
    { factor: "Decision support", atlantis: "Automated next-inspection dates, repair prioritisation, work-order triggers, turnaround scope optimisation, FFS-backed life extension evidence", competitor: "Manual interpretation only &mdash; the engineer must derive decisions from the static geometry" },
    { factor: "Typical platform examples", atlantis: "Atlantis Digital Twin, AVEVA AssetWise, Bentley OpenPlant Asset Performance, Hexagon EAM, GE Vernova APM, IBM Maximo (with integrated inspection)", competitor: "Hexagon SmartPlant 3D, AVEVA E3D Design, Bentley OpenPlant Modeller, Autodesk Plant 3D, Siemens Solid Edge / NX, Dassault CATIA / SolidWorks, PTC Creo" },
    { factor: "Lifecycle phase fit", atlantis: "Operations + maintenance + late-life decommissioning (the long part &mdash; 20&ndash;60 years)", competitor: "Design + engineering + procurement + (construction reference) &mdash; primarily the project phase, plus brownfield modification projects" },
    { factor: "ROI profile", atlantis: "Recurring &mdash; downtime avoided, inspection labour saved, asset-life extended, turnaround scope optimised. Pays for itself many times over the asset life.", competitor: "One-time &mdash; faster engineering, fewer clashes, better as-built handover. Project-phase value primarily." },
];

const faqs = [
    { question: "Is a 3D CAD model a digital twin?", answer: "No. A 3D CAD model is geometry &mdash; an accurate three-dimensional representation of an asset frozen at a moment in time, typically the as-built state. A digital twin is geometry plus a live data layer (inspection records, operational telemetry, work orders) plus analytics (FFS calculations, RBI scoring, corrosion-rate predictions) plus bidirectional coupling to the physical asset (the twin learns from operations and feeds decisions back). You can deliver a CAD model in a few weeks; you can&rsquo;t deliver a digital twin in less than a quarter, often longer. The cost ratio is roughly 10:1 (CAD model is $5K&ndash;$50K per asset; digital twin is $50K&ndash;$500K per asset). The ROI profiles aren&rsquo;t comparable because the outputs aren&rsquo;t comparable: a CAD model makes humans faster at finding things; a digital twin makes decisions on humans&rsquo; behalf." },
    { question: "Can I use my SmartPlant 3D or AVEVA E3D model as a digital twin?", answer: "The geometry, yes &mdash; as the foundation. The model itself, no &mdash; CAD tools aren&rsquo;t designed for the operational asset-integrity workflow. SmartPlant 3D, AVEVA E3D Design, Bentley OpenPlant Modeller, Autodesk Plant 3D, Siemens NX, Dassault CATIA, SolidWorks, PTC Creo all excel at engineering design and as-built coordination. None of them natively handle CML thickness tracking, API 579 FFS calculations, API 581 RBI scoring, inspection workflow capture on mobile devices, integration with DCS / historian / SAP PM, or regulatory audit-pack generation. The pragmatic pattern is to import your CAD geometry as the foundation for the digital twin and run the operational lifecycle on a purpose-built asset-integrity platform like Atlantis Digital Twin." },
    { question: "What about so-called &lsquo;visualisation digital twins&rsquo; that are basically CAD models with a sidebar of PDFs?", answer: "That&rsquo;s a 3D model with better branding. The test is bidirectionality and the data model. If the platform doesn&rsquo;t natively store inspection records as first-class objects (CMLs with reading history, welds with NDE history, defects with FFS calculations), if it doesn&rsquo;t run API 579 / API 581 calculations natively, if it doesn&rsquo;t pull operational telemetry from the historian and feed corrosion-rate predictions, if it doesn&rsquo;t support mobile inspection capture with offline sync, then it&rsquo;s a CAD viewer with a fancy UI. A true asset-integrity digital twin runs the workflow; a visualisation tool just shows you the geometry. Both can be valuable but they&rsquo;re solving different problems." },
    { question: "Should I scan my existing asset to create a CAD model first, then layer a digital twin on top?", answer: "If you don&rsquo;t have an existing as-built CAD model, then yes &mdash; laser scanning (terrestrial LiDAR, SLAM, drone photogrammetry) to create a point cloud and then a CAD reconstruction is the right starting point. Major scan-to-BIM service providers (Hexagon Leica, Faro, Trimble, NavVis, Matterport, ClearEdge3D, Pointfuse) deliver clean CAD geometry from a scan in 4&ndash;8 weeks per asset depending on complexity. Atlantis Digital Twin imports the resulting CAD or scan-derived geometry as the foundation for the operational twin. The next step is layering on the inspection data, the operational telemetry integration, and the FFS / RBI engines &mdash; that&rsquo;s the digital twin part, which takes 8&ndash;14 weeks per asset." },
    { question: "What about parametric CAD vs BIM-style intelligent geometry?", answer: "Parametric CAD (Solid Edge, NX, CATIA, SolidWorks, Creo) and intelligent-plant CAD (SmartPlant 3D, AVEVA E3D, Bentley OpenPlant, AutoCAD Plant 3D) both produce geometry with embedded metadata (tag numbers, material specifications, design conditions). That metadata is useful as the foundation for the operational digital twin &mdash; the asset register, the equipment catalogue, the line list, the piping isometric register all import cleanly. But the operational workflow &mdash; capturing the next UT thickness reading, running the next FFS calculation, scoring the next RBI assessment, generating the next regulatory audit pack &mdash; lives in a different system. The CAD platform did its job during engineering; the operational digital twin takes over for the long tail." },
];

export default function DigitalTwinVs3dCad() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "Digital Twin vs 3D CAD: Static Geometry vs Live Asset-Integrity Platform [2026]",
                "datePublished": "2026-05-25",
                "dateModified": "2026-05-25",
                "author": { "@type": "Person", "name": "Anoop Rayavarapu", "jobTitle": "ASNT Level III, Founder Atlantis NDT" },
                "publisher": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/compare/digital-twin-vs-3d-cad" }
            },
            {
                "@type": "ItemList",
                "name": "Digital Twin vs 3D CAD Comparison",
                "itemListElement": compareRows.map((r, i) => ({ "@type": "ListItem", "position": i + 1, "name": r.factor, "description": `Digital Twin: ${r.atlantis}. 3D CAD: ${r.competitor}` }))
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
                title="Digital Twin vs 3D CAD: Geometry vs Live Asset Integrity Platform [2026]"
                description="Digital Twin vs static 3D CAD: 12-factor comparison. SmartPlant 3D / AVEVA E3D / OpenPlant deliver geometry. Atlantis delivers FFS, RBI, inspection workflow, regulatory audit packs."
                canonical="https://atlantisndt.com/compare/digital-twin-vs-3d-cad"
                structuredData={structuredData}
                faq={faqs}
            />
            <Breadcrumbs />

            <section className="bg-gradient-to-br from-purple-700 to-indigo-900 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="flex items-center gap-2 text-purple-200 mb-4"><BarChart3 className="w-5 h-5" /><span>Technology Comparison</span></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Twin vs 3D CAD: Geometry vs Living Platform</h1>
                    <p className="text-xl text-purple-100 max-w-3xl mb-8">A 3D CAD model is a frozen snapshot. A digital twin is a continuously-updated operational platform. Both useful; not the same thing. Here&rsquo;s the practical difference for asset owners.</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/contact" className="inline-block bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Book a Demo</Link>
                        <Link to="/digital-twins" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">Atlantis DT Overview</Link>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-5xl px-6 prose prose-slate max-w-none">
                    <h2>The honest short answer</h2>
                    <p>A 3D CAD model is geometry &mdash; an accurate three-dimensional representation of an asset frozen at a moment in time, typically the as-built state. It&rsquo;s the output of an engineering design process and the input to construction. A digital twin, in the industrial asset-integrity sense, is geometry <em>plus</em> a live data layer (inspection records, operational telemetry, work orders) <em>plus</em> analytics (FFS calculations, RBI scoring, corrosion-rate predictions) <em>plus</em> bidirectional coupling to the physical asset. You can deliver a CAD model in a few weeks; you can&rsquo;t deliver a digital twin in less than a quarter. The cost ratio is roughly 10:1. The ROI profiles aren&rsquo;t comparable because the outputs aren&rsquo;t comparable.</p>
                    <p>If someone is selling you a &ldquo;digital twin&rdquo; that is really just a rendered mesh with a sidebar of PDFs, you have bought a 3D CAD viewer with better branding. The table below is the test.</p>

                    <h2>Why CAD models stop being useful 30 days after handover</h2>
                    <p>This is the most common pattern we see in industrial asset operations: a major project hands over a beautiful, detailed CAD model (SmartPlant 3D, AVEVA E3D, Bentley OpenPlant, AutoCAD Plant 3D, Solid Edge, NX, CATIA) at commissioning. Within 30 days of startup, the inspection data is in spreadsheets, the work orders are in SAP PM or Maximo, the FFS calculations are in Excel workbooks, the RBI assessment lives in Antea or Meridium, the historian data is in PI, and the CAD model is sitting on a network share that nobody has updated since handover. The CAD model is a static reference, not an operational tool. The integrity team is operating in spreadsheet land while the beautiful 3D model gathers dust. This is the failure mode that a true operational digital twin solves.</p>

                    <h2>The 12-factor side-by-side</h2>
                </div>
            </section>

            <section className="py-8 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl shadow-sm">
                            <thead className="bg-slate-800 text-white">
                                <tr>
                                    <th className="px-4 py-3 text-left">Factor</th>
                                    <th className="px-4 py-3 text-left text-blue-200">Digital Twin (Atlantis)</th>
                                    <th className="px-4 py-3 text-left text-amber-200">Static 3D CAD</th>
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
                    <h2>The pragmatic owner&rsquo;s pattern: CAD as foundation, digital twin on top</h2>
                    <p>The right pattern for industrial asset owners is to treat CAD geometry as the foundation for the operational digital twin. CAD tools do their job exceptionally well during engineering design and construction; we don&rsquo;t advocate replacing them. We advocate not stopping there. The digital twin imports the CAD geometry (Atlantis supports SmartPlant 3D / SP3D, AVEVA E3D Design, Bentley OpenPlant Modeller, Autodesk Plant 3D, Solid Edge, Inventor, SolidWorks, NX, CATIA, plus scan-derived geometry from Hexagon Leica / Faro / Trimble / NavVis / Matterport / ClearEdge3D / Pointfuse), captures the asset register and equipment catalogue, then layers the operational workflow on top: inspection capture, CML tracking, weld map management, FFS calculations, RBI scoring, regulatory audit-pack generation.</p>

                    <h2>The brownfield retrofit case &mdash; where you don&rsquo;t have a clean CAD model</h2>
                    <p>For brownfield retrofit (operating an asset that was built before BIM/CAD became standard, or one where the CAD model has gone stale), the workflow starts with a scan-to-CAD step: terrestrial LiDAR, SLAM (Simultaneous Localisation And Mapping), drone photogrammetry, or a combination produce a point cloud; CAD reconstruction services (Hexagon, Faro, Trimble, NavVis, ClearEdge3D, Pointfuse, plus the major engineering service firms) deliver clean CAD geometry from the scan in 4&ndash;8 weeks per asset. Atlantis Digital Twin imports the result and layers the operational workflow. Total time from initial scan to first-asset-live digital twin is typically 12&ndash;22 weeks for a brownfield retrofit.</p>

                    <h2>What a digital twin does that a CAD model never will</h2>
                    <ul>
                        <li><strong>Continuous data accumulation.</strong> Every inspection event, every CML reading, every operational telemetry tag from PI commits to the asset record automatically. The twin gets more valuable over time. CAD models get stale over time.</li>
                        <li><strong>Damage-mechanism analytics.</strong> API 571 templates pre-loaded for sour service, HTHA, CUI, naphthenic acid, sulfidation, brittle fracture at cryogenic temperature, SCC, MIC, fatigue, creep, and dozens more. CAD has no concept of damage mechanisms.</li>
                        <li><strong>Fitness-for-service calculations.</strong> API 579-1/ASME FFS-1 Level 1, 2, and 3 native calculator. CAD doesn&rsquo;t calculate.</li>
                        <li><strong>Risk-based inspection scoring.</strong> API 581 RBI engine with damage-mechanism-aware probability and consequence scoring. CAD doesn&rsquo;t score.</li>
                        <li><strong>Operational integration.</strong> Process severity tags from DCS / historian flow into the corrosion-rate model. CAD doesn&rsquo;t talk to the historian.</li>
                        <li><strong>Mobile inspection workflow.</strong> Offline-capable iPad and rugged Android tablet capture with photo, GPS, and barcode integration. CAD doesn&rsquo;t collect inspection data.</li>
                        <li><strong>Regulatory audit pack generation.</strong> API 510/570/579/581/653 audit packs in &lt;30 seconds; PED + EN 13445/13480 / NORSOK / CSA Z662 / SAES / OISD-129/130 audit packs from the same data. CAD doesn&rsquo;t generate audit packs.</li>
                        <li><strong>Turnaround scope optimisation.</strong> Pulls every overdue CML, every elevated RBI risk component, every FFS &ldquo;requires further evaluation,&rdquo; every weld pending re-inspection into a ranked turnaround scope list. CAD shows the geometry but doesn&rsquo;t prioritise the scope.</li>
                    </ul>

                    <h2>The cost reality check</h2>
                    <p>A high-quality CAD model of a process unit (existing brownfield, no prior model) typically costs $5K&ndash;$50K depending on complexity, asset size, and scan vs hand-built approach. The CAD tool licence is $5K&ndash;$25K/yr per engineer seat. Atlantis Digital Twin is positioned as affordable, accessible, fully customizable SaaS — region-specific quote on request. The relative value ratio is dramatic: a CAD model saves engineering hours during a turnaround scope review; a digital twin avoids unplanned shutdowns, optimises turnaround scope by 15&ndash;25%, defers tank out-of-service inspections by 2&ndash;4 years, and protects asset life extension cases. The CAD model pays back during construction. The digital twin pays back every year for 20&ndash;60 years.</p>

                    <h2>Atlantis Digital Twin &mdash; built on whatever CAD foundation you have</h2>
                    <p>Atlantis imports SmartPlant 3D / SP3D, AVEVA E3D Design, Bentley OpenPlant Modeller, Autodesk Plant 3D, Siemens Solid Edge / NX, Dassault CATIA / SolidWorks, PTC Creo, plus scan-derived geometry from Hexagon Leica / Faro / Trimble / NavVis. We don&rsquo;t replace your CAD investment; we build on it. The implementation cadence is 8&ndash;14 weeks to first-asset-live, with subsequent assets in 4&ndash;6 weeks. Atlantis is positioned as affordable, accessible, fully customizable SaaS — a starter tier (one complex asset) and an enterprise tier (unlimited assets, full FFS/RBI engine). Pricing varies by region and scope — contact us for a tailored quote. The integration footprint covers SAP PM, IBM Maximo, AVEVA PI, Honeywell PHD, OSIsoft PI, Yokogawa Exaquantum, and the major IDMS / APM systems (Meridium, Antea, GE Vernova APM, Bentley AssetWise, Hexagon EAM).</p>

                    <h2>Compare more technology pairings</h2>
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
                    <h2 className="text-3xl font-bold text-center mb-10">Other Technology Comparisons</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Link to="/compare/digital-twin-vs-bim" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-blue-700">vs BIM</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Construction coordination vs operational asset integrity.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/compare/digital-twin-vs-iot-dashboard" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-blue-700">vs IoT Dashboard</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">A dashboard shows numbers; a digital twin runs a workflow.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/compare/digital-twin-vs-cmms" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-blue-700">vs Traditional CMMS</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">CMMS schedules work; a digital twin tells you what work to schedule.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/digital-twin-vs-3d-model-ndt" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-blue-700">vs Static 3D Model (NDT)</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">The original 13-dimension NDT comparison.</p>
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
                                    <p className="text-sm text-slate-600">Product page with features, pricing, and case studies.</p>
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
                                    <p className="text-sm text-slate-600">60-minute scoping call. Bring your CAD model.</p>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-purple-700 to-indigo-900 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Build the Digital Twin on Your Existing CAD Foundation</h2>
                    <p className="text-purple-100 mb-8 text-lg">Bring your CAD model and one process unit&rsquo;s inspection records. We&rsquo;ll show your asset as a live integrity twin in a 30-minute demo.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/contact" className="inline-block bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Book Demo</Link>
                        <Link to="/digital-twins" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">Product Page</Link>
                    </div>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
