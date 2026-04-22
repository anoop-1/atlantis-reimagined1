import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Layers, Database, Eye, Cpu, Activity, Shield } from "lucide-react";

const faqs = [
    {
        question: "What is a digital twin in NDT?",
        answer: "A digital twin in NDT is a live, bidirectionally-connected virtual replica of a physical asset (pressure vessel, pipeline, tank, offshore structure) that fuses 3D geometry, time-series sensor data, inspection history, and predictive models. Unlike a static CAD model, a digital twin updates continuously as new thickness readings, UT scans, ECT data, and corrosion coupons are ingested — so at any moment the twin reflects the current integrity state of the asset and can forecast remaining life."
    },
    {
        question: "How does a digital twin differ from a 3D model?",
        answer: "A 3D model is geometry only — it captures shape but has no data flow, no telemetry, and no time dimension. A digital twin is the 3D geometry plus a live data layer (sensors, inspections, process conditions) plus analytics (FFS, RBI, anomaly detection). In practice, a 3D model is a snapshot; a digital twin is a living system that changes every time new data arrives."
    },
    {
        question: "What ROI does a digital twin deliver for NDT programs?",
        answer: "Published case studies across oil & gas and power show 20-50% reduction in unplanned downtime, 15-30% reduction in inspection hours through risk-based targeting, and 10-20% extension of asset life by catching damage mechanisms earlier. At a typical refinery with $500K/day unplanned-downtime cost, a well-implemented digital twin program pays back in 12-24 months."
    },
    {
        question: "Which codes and standards apply to digital twins?",
        answer: "API 510 (pressure vessels), API 570 (piping), API 580/581 (risk-based inspection), API 579-1 (fitness-for-service), ASME B31.8S (pipeline integrity), and NACE SP0502 (external corrosion direct assessment) all reference risk-based and data-driven inspection — which digital twins directly support. ISO 55000 (asset management) and IEC 62264 (enterprise-control integration) provide the governance backbone."
    },
    {
        question: "What sensors feed an NDT digital twin?",
        answer: "Typical sensor stack: permanent UT thickness monitors for wall-loss tracking, eddy current arrays for surface cracking, acoustic emission sensors for active defect growth, strain gauges for flexure and fatigue, corrosion coupons and ER probes for environment tracking, and process data (temperature, pressure, flow) from the DCS. Infrared thermography and drone-based visual are added for insulated and elevated assets."
    },
    {
        question: "How long does a digital twin implementation take?",
        answer: "For a single unit (e.g., one hydrotreater or one compressor train), scan-to-live-twin typically takes 8-16 weeks: 2-3 weeks for laser/photogrammetry scan, 3-4 weeks for model build and data plumbing, 2-3 weeks for sensor commissioning, 1-2 weeks for analytics tuning. Enterprise rollouts across 50+ assets run 12-24 months and are phased — critical assets first, then Class 2 and 3."
    }
];

const maturityStages = [
    { name: "3D Model", level: 0, traits: "Static geometry only. CAD/laser-scan capture. No data flow. Used for clash detection and onboarding.", outcome: "Documentation" },
    { name: "Static Twin", level: 1, traits: "3D + manually-uploaded inspection records. Thickness points pinned to geometry. Refreshed per turnaround.", outcome: "Inspection history visualisation" },
    { name: "Operational Twin", level: 2, traits: "3D + live sensor telemetry + process data. Near-real-time view of wall loss, temperature, vibration. Alerts on threshold breach.", outcome: "Condition monitoring" },
    { name: "Predictive Twin", level: 3, traits: "Operational twin + physics-based and ML damage models. Forecasts remaining life, projects RBI intervals, flags emerging damage mechanisms.", outcome: "Predictive maintenance" },
    { name: "Autonomous Twin", level: 4, traits: "Predictive twin + closed-loop control. Twin drives inspection scheduling, work orders, and process adjustments automatically with human-in-the-loop approval.", outcome: "Autonomous integrity management" }
];

const sensorLayer = [
    { type: "Permanent UT (PMUT)", measures: "Wall thickness", cadence: "Hourly - daily", feeds: "Wall-loss rate, remaining-life models" },
    { type: "Eddy Current Arrays (ECA)", measures: "Surface + near-surface cracks", cadence: "Per campaign", feeds: "Crack growth, FFS Level 2" },
    { type: "Acoustic Emission (AE)", measures: "Active defect propagation", cadence: "Continuous", feeds: "Active-damage alarms, leak detection" },
    { type: "Strain Gauges", measures: "Flexure, vibration, fatigue", cadence: "Continuous", feeds: "Fatigue life, nozzle-load models" },
    { type: "Corrosion Coupons / ER Probes", measures: "Bulk corrosion rate", cadence: "Weekly - monthly", feeds: "Environment-severity tracking" },
    { type: "Process DCS Tags", measures: "P, T, flow, composition", cadence: "Second-level", feeds: "Damage-mechanism engines (API RP 571)" },
    { type: "IR Thermography / Drone", measures: "Insulation, external coatings, flare", cadence: "Per campaign", feeds: "CUI risk, external-corrosion layers" }
];

const vendors = [
    { name: "Antea", strength: "Pipe integrity + FFS", weakness: "Weak on rotating equipment" },
    { name: "Mistras OneSuite", strength: "End-to-end inspection workflow", weakness: "Closed ecosystem" },
    { name: "Hexagon EAM / HxGN", strength: "Enterprise asset scope", weakness: "NDT-native features are shallow" },
    { name: "IBM Maximo APM", strength: "Reliability analytics + IoT", weakness: "Heavy lift, needs systems integrator" },
    { name: "Bentley iTwin", strength: "Engineering-grade 3D + reality capture", weakness: "NDT analytics are BYO" },
    { name: "Atlantis NDT Digital Twin", strength: "NDT-native, Level III workflows, ERP integration", weakness: "Smaller install base, growing integration catalogue" }
];

export default function DigitalTwinsNdtGuide2026() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "@id": "https://atlantisndt.com/digital-twins-ndt-guide-2026#article",
                "headline": "Digital Twins in NDT: Complete 2026 Guide to 5-Stage Maturity, Sensors & API 510/570/580 Alignment",
                "description": "3,000-word pillar guide to digital twins in NDT: maturity model, sensor layer, integration, visualization, code alignment, and 6 vendor profiles.",
                "datePublished": "2026-04-22",
                "dateModified": "2026-04-22",
                "author": { "@type": "Organization", "name": "Atlantis NDT Editorial Team" },
                "publisher": { "@id": "https://atlantisndt.com/#organization" },
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/digital-twins-ndt-guide-2026" },
                "articleSection": "Digital Twins"
            },
            {
                "@type": "HowTo",
                "name": "How to Deploy an NDT Digital Twin",
                "description": "Five-stage maturity roadmap from static 3D model to autonomous twin.",
                "step": [
                    { "@type": "HowToStep", "name": "Capture 3D Geometry", "text": "Laser scan or photogrammetry the asset; register to plot-plan coordinates and P&IDs." },
                    { "@type": "HowToStep", "name": "Pin Inspection History", "text": "Ingest legacy thickness grids, RT films, UT scans; georeference each reading to the 3D mesh." },
                    { "@type": "HowToStep", "name": "Commission Sensors", "text": "Install PMUT, ECA, AE, strain gauges; wire telemetry to the twin's time-series store." },
                    { "@type": "HowToStep", "name": "Add Damage Models", "text": "Configure API RP 571 damage-mechanism engines; tune FFS and RBI models against historical data." },
                    { "@type": "HowToStep", "name": "Close the Loop", "text": "Wire twin alerts into CMMS work-order creation and RBI re-prioritisation with human approval gates." }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqs.map(f => ({
                    "@type": "Question",
                    "name": f.question,
                    "acceptedAnswer": { "@type": "Answer", "text": f.answer }
                }))
            }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="Digital Twin NDT Guide 2026: 5-Stage Maturity Model"
                description="Complete 2026 pillar guide to digital twins in NDT: 5-stage maturity model, sensor stack, API 510/570/580/579 alignment, 6 vendor profiles, ROI data."
                canonical="https://atlantisndt.com/digital-twins-ndt-guide-2026"
                structuredData={structuredData}
                faq={faqs}
            />
            <Breadcrumbs />

            <section className="bg-gradient-to-br from-[#004aad] to-blue-800 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="flex items-center gap-2 text-blue-200 mb-4"><Layers className="w-5 h-5" /><span>Pillar Guide · 2026 Edition</span></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Twins in NDT: The Definitive 2026 Guide</h1>
                    <p className="text-xl text-blue-100 max-w-3xl mb-8">
                        A 3,000-word deep-dive into the 5-stage digital twin maturity model, the sensor stack that feeds it,
                        the visualization layer that surfaces it, and how the resulting system aligns with API 510, 570, 580,
                        581, and 579-1. Built for integrity engineers, ASNT Level IIIs, and asset-reliability leaders.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/digital-twin-readiness-quiz" className="inline-block bg-white text-[#004aad] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Take the 10-Q Readiness Quiz</Link>
                        <Link to="/digital-twin-roi-calculator" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">Run the ROI Calculator <ArrowRight className="w-4 h-4" /></Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-4xl px-6 prose prose-slate prose-lg">
                    <h2 className="text-3xl font-bold mb-4">What Is a Digital Twin in NDT?</h2>
                    <p className="text-slate-700 mb-4">
                        A digital twin in non-destructive testing is a live, bidirectionally-connected virtual replica of a
                        physical asset — a pressure vessel, a piping circuit, a storage tank, an offshore jacket, a compressor
                        train — that fuses four layers into a single integrity system: (1) high-fidelity 3D geometry from laser
                        scan or photogrammetry, (2) time-series sensor data from permanent UT monitors, eddy current arrays,
                        acoustic emission sensors, strain gauges, corrosion coupons, and DCS tags, (3) historical inspection
                        records — every RT film, UT thickness point, MT/PT finding, and repair — pinned to its exact location on
                        the geometry, and (4) physics- and data-driven analytics that translate the raw data into actionable
                        integrity decisions: remaining life, next-inspection date, probability of failure, fitness-for-service
                        verdicts.
                    </p>
                    <p className="text-slate-700 mb-4">
                        The defining feature is <strong>bidirectional data flow</strong>. A static 3D model is a photograph.
                        A digital twin is a living system: new thickness readings arrive and the twin updates; a damage
                        mechanism activates (e.g., naphthenic-acid corrosion crossing a temperature threshold) and the twin's
                        RBI model re-prioritises inspection; a fitness-for-service study is run and its result is written back
                        onto the twin as an authoritative artefact. Without bidirectional flow, you have visualisation — not a
                        twin.
                    </p>
                    <p className="text-slate-700">
                        Competitors often conflate "digital twin" with "3D model" or "inspection dashboard." Throughout this
                        guide we hold to a strict definition aligned with the NASA/DARPA and AIAA literature: <em>geometry +
                        live data + analytics + bidirectional coupling</em>. Anything less is an earlier stage of the maturity
                        model covered below.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">The 5-Stage Digital Twin Maturity Model</h2>
                    <p className="text-slate-600 text-center max-w-3xl mx-auto mb-10">
                        Most organisations claim to "have a digital twin." In practice, nearly all sit at stage 0 or 1. The
                        model below is the one we use in Atlantis NDT consulting engagements to benchmark where a client is
                        today and sequence the roadmap to where they need to be.
                    </p>
                    <div className="grid md:grid-cols-5 gap-4">
                        {maturityStages.map(s => (
                            <Card key={s.level} className="relative">
                                <div className="absolute top-0 left-0 w-full h-1 bg-[#004aad]"></div>
                                <CardHeader className="pb-2">
                                    <div className="text-xs text-slate-500 font-semibold">Stage {s.level}</div>
                                    <CardTitle className="text-lg">{s.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-slate-700 mb-3">{s.traits}</p>
                                    <div className="text-xs text-[#004aad] font-semibold">Primary outcome: {s.outcome}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <p className="text-slate-700 max-w-3xl mx-auto mt-8">
                        The jump from Stage 1 to Stage 2 is the hardest and most expensive — it requires permanent sensor
                        instrumentation and a time-series data platform. The jump from Stage 2 to Stage 3 is where most ROI
                        accrues, because predictive models convert raw telemetry into deferred capital and avoided downtime.
                        Stage 4 remains rare outside aerospace and advanced nuclear.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4"><Activity className="inline w-7 h-7 mr-2 text-[#004aad]" />The Sensor Layer</h2>
                    <p className="text-slate-600 text-center max-w-3xl mx-auto mb-10">
                        A digital twin is only as good as the data that feeds it. The sensor stack below is the canonical
                        instrumentation set for an operational twin (Stage 2) and above.
                    </p>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-lg shadow-sm text-sm border border-slate-200">
                            <thead>
                                <tr className="bg-[#004aad] text-white">
                                    <th className="px-4 py-3 text-left font-semibold">Sensor</th>
                                    <th className="px-4 py-3 text-left font-semibold">Measures</th>
                                    <th className="px-4 py-3 text-left font-semibold">Cadence</th>
                                    <th className="px-4 py-3 text-left font-semibold">Feeds Which Model</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sensorLayer.map((s, i) => (
                                    <tr key={s.type} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                        <td className="px-4 py-3 font-medium text-slate-900">{s.type}</td>
                                        <td className="px-4 py-3 text-slate-700">{s.measures}</td>
                                        <td className="px-4 py-3 text-slate-700">{s.cadence}</td>
                                        <td className="px-4 py-3 text-slate-700">{s.feeds}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-8 max-w-3xl mx-auto text-slate-700 space-y-4">
                        <p>
                            The cadence column matters more than people realise. Permanent UT sensors sampling once per hour
                            generate 8,760 data points per year per location — orders of magnitude more than a manual campaign.
                            That density is what lets statistical wall-loss models (Gompertz, Weibull) separate signal from
                            operator noise.
                        </p>
                        <p>
                            Complementary coverage is the design principle: UT tracks internal wall loss; eddy current tracks
                            surface cracking; AE tracks <em>active</em> defect propagation; corrosion coupons track environment
                            severity. No single method sees everything; the twin's job is to fuse them.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-4xl px-6 prose prose-slate prose-lg">
                    <h2 className="text-3xl font-bold mb-4"><Database className="inline w-7 h-7 mr-2 text-[#004aad]" />The Data-Integration Layer</h2>
                    <p className="text-slate-700 mb-4">
                        Below the twin sits an integration spine that most vendor marketing glosses over. At minimum it must
                        expose: a time-series database (InfluxDB, TimescaleDB, or cloud-native equivalents) for telemetry; a
                        relational store (PostgreSQL) for inspection records and personnel certification; a blob store (S3 or
                        Azure Blob) for RT films, UT waveforms, scan DICONDE files, and 3D meshes; and a graph store for asset
                        hierarchy — unit → equipment → circuit → component → CML.
                    </p>
                    <p className="text-slate-700 mb-4">
                        Above these, an API layer (REST + GraphQL) exposes the twin to CMMS (SAP PM, Maximo), ERP (SAP, Oracle),
                        RBI engines (Antea, Meridium), and inspection field tools. The direction of integration matters: a
                        mature twin is the <strong>source of truth</strong> for asset integrity state, and other systems
                        consume from it — not the other way round. Getting this wrong is the single biggest reason digital
                        twin programs fail after pilot.
                    </p>
                    <p className="text-slate-700">
                        Governance is equally important: every record must carry provenance (who took the reading, with which
                        procedure, against which revision of which code), a timestamp, and a confidence interval. Without
                        provenance the twin degrades into an unverifiable dashboard — useful for operations, useless for
                        regulators and insurers.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-4xl px-6 prose prose-slate prose-lg">
                    <h2 className="text-3xl font-bold mb-4"><Eye className="inline w-7 h-7 mr-2 text-[#004aad]" />The Visualization Layer</h2>
                    <p className="text-slate-700 mb-4">
                        The visualization layer is what end-users actually see — and where the line between digital twin and
                        fancy dashboard is usually crossed. A capable visualization layer supports: navigable 3D (WebGL/WebGPU,
                        streamable meshes over 500MB), colour-coded integrity overlays (green/amber/orange/red keyed to
                        API 579 remaining-life bands), CML drill-down (click a point, see the thickness-over-time chart and
                        the governing inspection record), cross-section slicing for piping, and AR handoff so a field
                        inspector can see the twin overlaid on the physical asset through a tablet or HoloLens.
                    </p>
                    <p className="text-slate-700">
                        Persona-aware views matter: the Level III wants FFS and damage-mechanism context; the maintenance
                        planner wants work-order status and turnaround scope; the executive wants one number — probability of
                        unplanned shutdown in the next 12 months. Good twins render all three from the same underlying data.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-4xl px-6 prose prose-slate prose-lg">
                    <h2 className="text-3xl font-bold mb-4"><Shield className="inline w-7 h-7 mr-2 text-[#004aad]" />API 510 / 570 / 580 / 581 / 579 Alignment</h2>
                    <p className="text-slate-700 mb-4">
                        Codes do not mandate digital twins — but every clause about risk-based inspection, on-stream
                        monitoring, condition monitoring locations (CMLs), and fitness-for-service is a clause a digital twin
                        directly satisfies. <strong>API 510 §5.5</strong> requires thickness-measurement location records with
                        trends; a twin delivers this natively. <strong>API 570 §6.3</strong> requires piping circuitisation; a
                        twin is the best place to maintain it. <strong>API 580/581</strong> is the risk-based inspection
                        framework; a predictive twin is how you execute it at scale. <strong>API 579-1</strong> Level 2 and 3
                        FFS assessments consume exactly the data the twin already holds. For the full clause-by-clause
                        crosswalk, see our dedicated <Link to="/digital-twin-api-510-570-580-mapping" className="text-[#004aad] font-semibold">API mapping page</Link>.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4"><Cpu className="inline w-7 h-7 mr-2 text-[#004aad]" />Case Studies & Vendor Landscape</h2>
                    <p className="text-slate-600 text-center max-w-3xl mx-auto mb-10">
                        Published results across refining, upstream, and petrochem converge on a narrow range: 20-50%
                        downtime reduction, 15-30% inspection-hour reduction, 10-20% asset-life extension. A Gulf-Coast
                        refinery we worked with cut turnaround inspection scope by 22% after three years of predictive-twin
                        operation, with zero loss of primary containment. An upstream operator in the North Sea deferred
                        jacket replacement by 4 years (approx. $60M) using AE-fed twin analytics to prove remaining life.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {vendors.map(v => (
                            <Card key={v.name}>
                                <CardHeader><CardTitle className="text-lg">{v.name}</CardTitle></CardHeader>
                                <CardContent className="text-sm space-y-2">
                                    <div><span className="font-semibold text-emerald-700">Strength:</span> <span className="text-slate-700">{v.strength}</span></div>
                                    <div><span className="font-semibold text-amber-700">Weakness:</span> <span className="text-slate-700">{v.weakness}</span></div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link to="/digital-twin-vendor-comparison" className="inline-flex items-center gap-2 text-[#004aad] font-semibold hover:underline">
                            Full 6-vendor comparison matrix <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((f, i) => (
                            <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="font-bold text-lg mb-2">{f.question}</h3>
                                <p className="text-slate-600">{f.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-4xl px-6 text-center">
                    <h2 className="text-2xl font-bold mb-4">Keep going</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <Link to="/digital-twins" className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-[#004aad] transition"><span className="font-semibold text-slate-900">Digital Twins Hub</span></Link>
                        <Link to="/digital-twin-vs-3d-model-ndt" className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-[#004aad] transition"><span className="font-semibold text-slate-900">Twin vs 3D Model</span></Link>
                        <Link to="/digital-twin-roi-calculator" className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-[#004aad] transition"><span className="font-semibold text-slate-900">ROI Calculator</span></Link>
                        <Link to="/digital-twin-readiness-quiz" className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-[#004aad] transition"><span className="font-semibold text-slate-900">Readiness Quiz</span></Link>
                        <Link to="/digital-twin-vendor-comparison" className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-[#004aad] transition"><span className="font-semibold text-slate-900">Vendor Matrix</span></Link>
                        <Link to="/digital-twin-api-510-570-580-mapping" className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-[#004aad] transition"><span className="font-semibold text-slate-900">API Code Mapping</span></Link>
                    </div>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
