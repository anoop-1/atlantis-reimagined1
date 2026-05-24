import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const compareRows = [
    { factor: "Primary purpose", atlantis: "Asset-integrity operational platform: track inspections, predict damage, drive maintenance decisions across the asset lifecycle (typically 20&ndash;60 years)", competitor: "Construction-phase coordination platform: design intent, clash detection, quantity take-off, construction sequencing, handover (typically 1&ndash;5 year project cycle)" },
    { factor: "Time horizon", atlantis: "Continuous &mdash; the twin evolves as the asset degrades over decades of operation", competitor: "Predominantly project-phase &mdash; BIM model peaks in fidelity at handover, then often static or under-utilised in operations" },
    { factor: "Data sources", atlantis: "Inspection records (UT, PAUT, RT, MT/PT), CML thickness measurements, FFS calculations, RBI scores, DCS/historian process data, work orders, anomaly events", competitor: "CAD geometry, material specifications, schedule (4D), cost (5D), design coordination data, construction documentation" },
    { factor: "Geometry fidelity", atlantis: "Plant-scale 3D geometry with inspection overlays (CMLs, defects, FFS hot spots) &mdash; resolution sufficient to identify specific weld locations and CML points", competitor: "High-fidelity construction-coordination geometry including penetrations, hangers, supports, MEP routing, structural connections &mdash; designed to detect millimetre-level clashes" },
    { factor: "Code references", atlantis: "API 510/570/579/581/653, ASME Section VIII Div 1/2, ASME B31.3, EN 13445/13480, NORSOK, CSA Z662, country-specific in-service inspection codes", competitor: "ISO 19650 (BIM standard), construction codes (Eurocodes, IBC, NBC), procurement and contract documentation standards" },
    { factor: "Primary users", atlantis: "Integrity engineers, inspection planners, reliability teams, FFS specialists, RBI analysts, plant managers, regulatory compliance teams", competitor: "Architects, structural engineers, MEP engineers, construction managers, EPC contractors, owner&rsquo;s project teams during the construction phase" },
    { factor: "Asset class fit", atlantis: "Continuous-process industrial assets &mdash; refineries, petrochemical plants, FPSOs, LNG terminals, pipelines, ammonia plants, where operational inspection is the dominant lifecycle workload", competitor: "Discrete construction projects &mdash; office buildings, hospitals, infrastructure projects, residential, transit; also industrial buildings during construction phase" },
    { factor: "Lifecycle phase emphasis", atlantis: "Operations + maintenance + late-life decommissioning", competitor: "Design + construction + handover + (increasingly) FM (Facilities Management) lifecycle" },
    { factor: "Update cadence", atlantis: "Continuous &mdash; every inspection event, every CML reading, every FFS update commits to the asset record", competitor: "Discrete &mdash; major updates at design milestones, construction issue cycles, and handover; usually static or minimally updated post-handover" },
    { factor: "Standards landscape", atlantis: "Industry-specific codes (oil & gas, petrochemical, LNG, nuclear, power) with damage-mechanism templates per API 571 / NACE", competitor: "ISO 19650, COBie data exchange, IFC (Industry Foundation Classes), Uniclass / OmniClass classification" },
    { factor: "Typical platform examples", atlantis: "Atlantis Digital Twin, AVEVA AssetWise, Bentley OpenPlant Asset Performance, Hexagon EAM, GE Vernova APM, IBM Maximo (integrated with inspection workflow)", competitor: "Autodesk Revit + Construction Cloud, Bentley OpenBuildings + iTwin, Graphisoft Archicad, Vectorworks, Tekla Structures, Trimble Connect" },
    { factor: "Coexistence pattern", atlantis: "BIM model imports as the geometry foundation for the digital twin during handover; the twin then accumulates inspection and operational data on top", competitor: "Provides the as-built geometry that the digital twin builds on; in some industries the BIM-to-digital-twin handover is now a formal owner requirement" },
];

const faqs = [
    { question: "Is BIM a digital twin?", answer: "No, but they&rsquo;re increasingly connected. BIM (Building Information Modelling) is a construction-phase coordination methodology that produces a coordinated 3D model of a building or facility, with embedded design intent, material specifications, schedule data (4D), and cost data (5D). It excels at clash detection during design, quantity take-off, construction sequencing, and handover documentation. A digital twin, in the industrial asset-integrity sense, is an operational platform that runs across the asset&rsquo;s 20&ndash;60 year operating life: it tracks every inspection event, every CML thickness reading, every FFS calculation, every RBI score, every work order, and surfaces decisions for maintenance, inspection, and turnaround planning. The geometry is similar (or even identical, when a BIM model handed over from construction becomes the geometry foundation for the operational twin); but the workflow, data flow, and primary user base are entirely different. BIM peaks in fidelity at handover; the digital twin starts gaining value at handover and accumulates it for decades thereafter." },
    { question: "Can I just use my BIM model as a digital twin?", answer: "Only for a narrow slice of the workflow. A BIM model gives you geometry and design intent &mdash; useful as the geometry foundation for the digital twin. But BIM tools (Autodesk Revit, Bentley OpenBuildings, Graphisoft Archicad, Tekla Structures, Vectorworks) don&rsquo;t natively handle CML thickness tracking, API 579 FFS calculations, API 581 RBI scoring, inspection workflow capture, weld map management, or the time-series data ingestion from DCS / historian. You can extend BIM with custom development to handle some of this, but the operational asset-integrity workflow is fundamentally different from the construction-coordination workflow that BIM was designed for. The pragmatic pattern in industrial industries is: use BIM during construction, hand over the BIM model as the geometry foundation for the digital twin, then run the operational lifecycle on a purpose-built asset-integrity platform like Atlantis Digital Twin." },
    { question: "When should I use BIM vs digital twin?", answer: "Use BIM for: design coordination, clash detection, quantity take-off, construction sequencing, handover documentation, contractor coordination during the project phase. Use digital twin for: operational inspection data capture, CML thickness tracking, weld map management, API 579 fitness-for-service calculations, API 581 risk-based inspection scoring, integration with DCS / historian / SAP PM, regulatory audit-pack generation, turnaround scope optimisation, asset life extension evidence. The two are complementary &mdash; not competitive &mdash; tools. In a mature asset lifecycle, BIM dominates design and construction, the digital twin dominates operations and maintenance, and the BIM-to-digital-twin handover is a formal owner requirement that increasingly defines greenfield project success." },
    { question: "What about COBie and IFC handover data exchange?", answer: "COBie (Construction Operations Building information exchange) and IFC (Industry Foundation Classes) are open data exchange standards for transferring information from BIM to facilities management / operations systems. COBie focuses on the asset register, maintenance information, and warranty data that the FM team needs at handover. IFC is the underlying open BIM data schema. Atlantis Digital Twin imports COBie spreadsheets and IFC models natively as part of the greenfield commissioning workflow; the geometry, asset register, and as-built specification flow from the BIM environment into the operational twin without re-keying. For industrial assets, the analogous handover standards include CFIHOS (Capital Facilities Information Handover Specification) and ISO 15926 (oil & gas data integration), which Atlantis also supports natively." },
    { question: "What about the NDT-specific gap that BIM can&rsquo;t fill?", answer: "The single largest gap between BIM and a true digital twin for industrial assets is inspection data depth. BIM was designed by and for the architecture / engineering / construction (AEC) community; it has no native concept of a CML (Condition Monitoring Location) or a weld map registry with NDE history. BIM has no native FFS calculation engine, no RBI scoring, no damage-mechanism template per API 571, no integration with the historian feeding operational severity tags into corrosion-rate predictions. These are core to asset-integrity workflows and core to Atlantis Digital Twin&rsquo;s data model. The operational twin is built around inspection-data-native objects &mdash; CMLs, welds, defects, FFS results, RBI scores &mdash; whereas BIM is built around design-coordination-native objects (model elements, families, parameters, types). The data model difference is fundamental, not cosmetic." },
];

export default function DigitalTwinVsBim() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "Digital Twin vs BIM (Building Information Modelling): What&rsquo;s the Real Difference? [2026]",
                "datePublished": "2026-05-25",
                "dateModified": "2026-05-25",
                "author": { "@type": "Person", "name": "Anoop Rayavarapu", "jobTitle": "ASNT Level III, Founder Atlantis NDT" },
                "publisher": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/compare/digital-twin-vs-bim" }
            },
            {
                "@type": "ItemList",
                "name": "Digital Twin vs BIM Comparison",
                "itemListElement": compareRows.map((r, i) => ({ "@type": "ListItem", "position": i + 1, "name": r.factor, "description": `Digital Twin: ${r.atlantis}. BIM: ${r.competitor}` }))
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
                title="Digital Twin vs BIM: Asset Integrity Operations vs Construction Coordination [2026]"
                description="Digital Twin vs BIM compared: BIM is construction-phase coordination, digital twin is operational asset integrity. Side-by-side on geometry, data model, FFS/RBI workflow, COBie/IFC handover."
                canonical="https://atlantisndt.com/compare/digital-twin-vs-bim"
                structuredData={structuredData}
                faq={faqs}
            />
            <Breadcrumbs />

            <section className="bg-gradient-to-br from-indigo-700 to-blue-900 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="flex items-center gap-2 text-blue-200 mb-4"><BarChart3 className="w-5 h-5" /><span>Technology Comparison</span></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Twin vs BIM: Operations vs Construction</h1>
                    <p className="text-xl text-blue-100 max-w-3xl mb-8">BIM coordinates construction. A digital twin runs the asset for 20&ndash;60 years after construction. Both are 3D, both have value, neither replaces the other. Here&rsquo;s the practical difference for industrial asset owners.</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/contact" className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Book a Demo</Link>
                        <Link to="/digital-twins" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">Atlantis DT Overview</Link>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-5xl px-6 prose prose-slate max-w-none">
                    <h2>The honest short answer</h2>
                    <p>BIM and digital twin are not the same thing, and conflating them is the most expensive mistake in industrial asset digitalisation. BIM (Building Information Modelling) is a construction-phase coordination methodology &mdash; it peaks in fidelity at construction handover, produces a coordinated 3D model with embedded design intent, material specifications, schedule (4D), and cost (5D) data, and answers the question &ldquo;what should this asset look like and how will it be built?&rdquo;. A digital twin, in the industrial asset-integrity sense, is an operational platform &mdash; it accumulates inspection data, work-order history, FFS calculations, RBI scores, and decision-support analytics over the asset&rsquo;s 20&ndash;60 year operating life, and answers the question &ldquo;what is this asset actually doing right now, and what should we do about it?&rdquo;.</p>
                    <p>The geometry overlaps. Some platforms (Bentley iTwin, AVEVA AssetWise) attempt to bridge both phases. But the data model, the primary user base, the workflow, and the time horizon differ fundamentally. The pragmatic pattern: use BIM during design and construction, hand over the BIM model as the geometry foundation for the digital twin at commissioning, and run the operational lifecycle on a purpose-built asset-integrity platform.</p>

                    <h2>Where BIM excels (and where digital twin shouldn&rsquo;t compete)</h2>
                    <p>BIM is unmatched at construction-phase coordination. Clash detection between mechanical, electrical, plumbing, structural, and architectural disciplines &mdash; finding the literal physical intersections of a duct with a steel beam before construction crews discover them in the field &mdash; is what BIM was designed for. Construction sequencing (4D), cost-loaded scheduling (5D), quantity take-off for procurement, contractor coordination during the construction phase, and handover documentation are all BIM strengths. The major platforms (Autodesk Revit + Autodesk Construction Cloud, Bentley OpenBuildings + iTwin, Graphisoft Archicad, Trimble Connect, Tekla Structures, Vectorworks) compete on these workflows. ISO 19650 sets the BIM information management standard internationally; in the UK, BIM Level 2 was mandated for centrally-procured public projects from 2016, with BIM Level 3 (digital-twin-equivalent operational integration) the long-term ambition.</p>

                    <h2>Where digital twin excels (and where BIM shouldn&rsquo;t compete)</h2>
                    <p>A purpose-built asset-integrity digital twin like Atlantis is built around inspection-data-native objects &mdash; CMLs (Condition Monitoring Locations), welds with full NDE history, defects with FFS calculations, RBI risk scores, work orders with materials and labour, anomaly events with root-cause analysis. It runs API 579 fitness-for-service Level 1, 2, and 3 calculations natively. It runs API 581 risk-based inspection scoring with damage-mechanism templates per API 571. It pulls operational severity tags from the DCS / historian (AVEVA PI, Honeywell PHD, Yokogawa Exaquantum, OSIsoft PI) and uses them as inputs to corrosion-rate predictions. It generates regulatory audit packs (API 510/570/653 in the US; PED + EN 13445/13480 in Europe; NORSOK in Norway; CSA Z662 in Canada; SAES in Saudi Arabia) directly from the data repository. None of this is in scope for a BIM tool, and trying to build it on top of a BIM tool is the long way around.</p>

                    <h2>The handover &mdash; where BIM and digital twin meet</h2>
                    <p>The most important interface between BIM and digital twin is the construction-to-operations handover. A well-executed handover transfers the BIM geometry, the COBie (Construction Operations Building information exchange) asset register, the IFC (Industry Foundation Classes) data model, and the original design documentation into the operational digital twin. Atlantis Digital Twin imports COBie spreadsheets and IFC models natively. For industrial assets specifically, the analogous handover standards include CFIHOS (Capital Facilities Information Handover Specification, developed by the IOGP and increasingly required by major oil & gas owners including Shell, ExxonMobil, BP, Equinor) and ISO 15926 (oil & gas data integration). Atlantis supports both natively. The handover quality determines the operational twin&rsquo;s long-term value: every piece of geometry, every weld registry, every CML location captured during construction saves months of post-startup data backfill effort.</p>

                    <h2>Side-by-side comparison</h2>
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
                                    <th className="px-4 py-3 text-left text-amber-200">BIM</th>
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
                    <h2>Why this matters for industrial asset owners</h2>
                    <p>The mistake we see most often in industrial asset digitalisation programmes is owners treating BIM as &ldquo;the digital twin&rdquo; because the construction-phase BIM model was delivered with rich geometry and the team is reluctant to deploy a second tool. The result is predictable: the BIM model becomes a static reference artefact, inspection data accumulates in disconnected spreadsheets, the FFS calculations sit in Excel workbooks, the RBI scoring lives in a separate IDMS (Antea, Meridium, GE APM, Bentley AssetWise APM), and the integrity team operates without a unifying platform. Three to five years post-handover, the BIM model is increasingly out-of-date because nobody updates it, and the operational team has built a parallel data infrastructure that the BIM tool can&rsquo;t see.</p>
                    <p>The right pattern: treat the BIM model as the as-built geometry foundation for the operational digital twin. Hand it over at commissioning. Run the operational lifecycle on the asset-integrity platform. Keep the BIM tool available for major capex modifications and brownfield retrofits, where coordination-phase tooling is exactly the right fit again.</p>

                    <h2>The pragmatic owner&rsquo;s guide</h2>
                    <ul>
                        <li><strong>Greenfield project, design and construction phase:</strong> BIM is mandatory in most jurisdictions for large projects and is the right tool. Specify ISO 19650 compliance, COBie or CFIHOS handover, and digital-twin-ready geometry.</li>
                        <li><strong>Greenfield project, commissioning and handover:</strong> The handover phase is where the operational digital twin gets its starting fidelity. Insist on COBie / IFC / CFIHOS deliverables of sufficient quality to populate the operational twin without re-keying.</li>
                        <li><strong>Operations and maintenance phase (years 1&ndash;60 of asset life):</strong> Asset-integrity digital twin platform. The BIM model is a static reference; the operational twin is the daily workflow.</li>
                        <li><strong>Major capex modification, brownfield retrofit:</strong> Re-engage BIM for the modification project; hand the updated as-built back to the operational twin at modification commissioning.</li>
                        <li><strong>Late-life and decommissioning:</strong> The operational twin holds the inspection record that supports asset life extension FFS, decommissioning safety case, or repurposing for CCS / hydrogen / other transitions.</li>
                    </ul>

                    <h2>Atlantis Digital Twin &mdash; the operational layer</h2>
                    <p>Atlantis Digital Twin is purpose-built for the operations and maintenance phase. It imports BIM geometry, COBie asset registers, IFC models, and CFIHOS handover packages natively. It runs API 579 FFS, API 581 RBI, damage-mechanism templates per API 571, and inspection workflow capture on mobile devices. It generates regulatory audit packs in &lt;30 seconds. It integrates with the operator&rsquo;s SAP PM, Maximo, AVEVA PI, Honeywell PHD, and the existing IDMS stack via REST and standard connectors. Pricing is tiered SaaS: $50K/yr starter (one complex asset), $200K/yr enterprise (unlimited assets). The implementation cadence is 8&ndash;14 weeks to first-asset-live, with subsequent assets in 4&ndash;6 weeks.</p>

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
                        <Link to="/compare/digital-twin-vs-3d-cad" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-blue-700">vs Static 3D CAD</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">CAD is geometry; a digital twin is geometry plus live operational data.</p>
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
                                    <p className="text-sm text-slate-600">A dashboard shows numbers; a digital twin runs an asset-integrity workflow.</p>
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
                        <Link to="/digital-twins" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-blue-700">Atlantis Digital Twin</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Product page with features, pricing tiers, and case studies.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/digital-twins-ndt-guide" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-blue-700">Digital Twins NDT Guide</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Deep guide to digital twins for asset integrity.</p>
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
                                    <p className="text-sm text-slate-600">60-minute scoping call. Bring your BIM handover deliverables.</p>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-indigo-700 to-blue-900 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Run BIM and Digital Twin in Their Right Lanes</h2>
                    <p className="text-blue-100 mb-8 text-lg">Bring your BIM model and your inspection programme. We&rsquo;ll show how Atlantis Digital Twin starts where BIM ends.</p>
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
