import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const compareRows = [
    { factor: "Primary purpose", atlantis: "Operational asset-integrity platform with continuous inspection-data accumulation, FFS / RBI analytics, and a decision-support workflow across the asset lifecycle", competitor: "Real-time telemetry visualisation: pulls sensor data from PLCs / DCS / historian into a dashboard view for monitoring trends, thresholds, and alarms" },
    { factor: "Data depth", atlantis: "CMLs, weld maps, defect records, FFS calculations, RBI scores, work orders, inspection events, plus operational telemetry as inputs to analytics", competitor: "Time-series sensor data &mdash; pressures, temperatures, flows, levels, vibration. Limited or no inspection-data integration." },
    { factor: "Geometry", atlantis: "3D plant model with inspection overlays (colour-coded CML thickness, defect locations, FFS hot spots, RBI risk bands)", competitor: "2D charts and gauge widgets; some dashboards add 3D &lsquo;factory view&rsquo; visualisation but not inspection-coloured" },
    { factor: "Inspection workflow", atlantis: "Mobile capture (iPad + rugged Android), offline-capable, with ASNT-compliant report templates and bidirectional sync", competitor: "None &mdash; inspection workflow lives in a separate IDMS or spreadsheet workflow" },
    { factor: "Analytics depth", atlantis: "API 579 FFS Level 1/2/3, API 581 RBI engine, damage-mechanism analytics per API 571, corrosion-rate forecasting, probability of failure", competitor: "Statistical anomaly detection, threshold alarming, ML predictive maintenance on time-series features. No native FFS / RBI." },
    { factor: "Code references", atlantis: "API 510/570/579/581/653, ASME Section VIII Div 1/2, EN 13445/13480, NORSOK, CSA Z662, country-specific in-service inspection codes", competitor: "OPC-UA / OPC-DA / Modbus / MQTT data exchange standards; ISA-95 enterprise integration model" },
    { factor: "Typical platform examples", atlantis: "Atlantis Digital Twin, AVEVA AssetWise, Bentley OpenPlant Asset Performance, Hexagon EAM (full inspection integration)", competitor: "AVEVA PI System (PI Vision), GE Vernova Proficy iFIX, Wonderware (now AVEVA) System Platform, Honeywell Experion HMI, Yokogawa Exaquantum, Siemens WinCC, Grafana, ThingsBoard, Splunk Industrial Asset Intelligence" },
    { factor: "Primary users", atlantis: "Integrity engineers, inspection planners, FFS specialists, RBI analysts, plant managers, regulatory compliance teams", competitor: "Process operators, plant managers, maintenance technicians, control engineers, plant historian admins" },
    { factor: "Output", atlantis: "Recommended next inspection date, ranked turnaround scope, FFS evidence for life extension, regulatory audit pack, work-order recommendations", competitor: "Visual situational awareness, threshold alarm escalation, KPI tracking, trend analysis, historian queries" },
    { factor: "Update cadence", atlantis: "Seconds to weeks depending on the data layer (telemetry seconds, work orders hours, inspections weeks, FFS months)", competitor: "Seconds to minutes &mdash; near-real-time visualisation is the primary value proposition" },
    { factor: "Coexistence pattern", atlantis: "Pulls operational severity tags from the IoT dashboard&rsquo;s underlying historian as inputs to corrosion-rate predictions and RBI scoring; doesn&rsquo;t replace the operations-side dashboard", competitor: "Provides the real-time operational view that the digital twin uses as an input. The two run in parallel for different audiences." },
    { factor: "Implementation time", atlantis: "8&ndash;14 weeks to first asset live for the operational digital twin", competitor: "Days to weeks to stand up a useful dashboard view; months for an enterprise-scale historian + visualisation rollout" },
];

const faqs = [
    { question: "Is an IoT dashboard a digital twin?", answer: "No. An IoT dashboard (also called a SCADA HMI, a historian visualisation, or an operations dashboard) is a real-time telemetry visualisation tool. It pulls sensor data from PLCs, DCS, or a historian (AVEVA PI, Honeywell PHD, OSIsoft PI, Yokogawa Exaquantum, GE Historian) into a dashboard view for monitoring trends, threshold alarms, and KPI tracking. Tools in this category include AVEVA PI Vision, GE Vernova Proficy iFIX, Wonderware (now AVEVA) System Platform, Honeywell Experion HMI, Siemens WinCC, plus open-source / cross-industry tools like Grafana, ThingsBoard, and Splunk Industrial Asset Intelligence. These are essential for plant operations but they&rsquo;re not digital twins in the asset-integrity sense. They show you what&rsquo;s happening right now; they don&rsquo;t track inspection records, run FFS calculations, score RBI risk, or generate regulatory audit packs." },
    { question: "What&rsquo;s the difference between an IoT dashboard and a true asset-integrity digital twin?", answer: "Three core differences. First, data depth: IoT dashboards handle time-series sensor data (pressures, temperatures, flows, vibration) brilliantly but have no native concept of a CML thickness record, a weld map with NDE history, a defect with an FFS calculation, or an RBI risk score. A digital twin&rsquo;s data model is built around exactly these inspection-data-native objects. Second, analytics depth: IoT dashboards do statistical anomaly detection and threshold alarming well; some add ML predictive maintenance on time-series features. A digital twin runs API 579 fitness-for-service Level 1/2/3 calculations, API 581 risk-based inspection scoring, and damage-mechanism templates per API 571 &mdash; calculations and analytics that operate on the inspection-data layer, not the telemetry layer. Third, workflow: IoT dashboards present information for human consumption; a digital twin drives a workflow (capture this inspection, prioritise this CML, run this FFS, generate this audit pack)." },
    { question: "Do I need both an IoT dashboard and a digital twin?", answer: "For most industrial operators with mature integrity programmes, yes &mdash; they serve different audiences and different workflows. The IoT dashboard / historian visualisation stays as the operations-side situational-awareness tool: operators, control engineers, and plant managers monitoring real-time process performance. The digital twin handles the integrity-side workflow: inspection capture, CML tracking, weld maps, FFS, RBI, regulatory audit packs. The two systems are integrated &mdash; the digital twin pulls operational severity tags from the historian as inputs to corrosion-rate predictions and RBI scoring &mdash; but they&rsquo;re not competing tools. Atlantis Digital Twin integrates with AVEVA PI, OSIsoft PI, Honeywell PHD, Yokogawa Exaquantum, GE Historian, and the operator-side dashboards (PI Vision, WinCC, iFIX, Experion HMI) via OPC-UA or REST." },
    { question: "What about ML-based predictive maintenance dashboards &mdash; aren&rsquo;t those digital twins?", answer: "ML predictive maintenance platforms (Uptake, C3 AI, SparkCognition, Bently Nevada System 1, Augury, Aspen Mtell, IBM Maximo Predict, GE Vernova SmartSignal) sit between an IoT dashboard and a true asset-integrity digital twin. They go beyond pure visualisation by adding statistical anomaly detection and time-series ML models that flag emerging machinery faults from vibration signatures, current-signature analysis, or thermal trending. For rotating machinery (compressors, pumps, motors, turbines) they&rsquo;re valuable. For fixed equipment integrity (pressure vessels, piping, storage tanks, heat exchangers) they&rsquo;re typically thin: damage mechanisms are inspection-driven (CML thickness measurements, PAUT scans, MFL surveys) rather than vibration-driven, and the analytics needed are FFS calculations and RBI scoring, not time-series anomaly detection. Atlantis Digital Twin handles the inspection-driven fixed-equipment integrity layer; the ML predictive maintenance platforms handle the rotating-machinery condition monitoring layer; both can coexist." },
    { question: "How does Atlantis integrate with my existing AVEVA PI System / OSIsoft PI deployment?", answer: "AVEVA PI System (which absorbed OSIsoft in 2021) is the world&rsquo;s most widely deployed industrial historian. Atlantis Digital Twin pulls process severity tags from PI via the PI Web API (REST), OPC-UA, or the PI AF (Asset Framework) hierarchy. Typical mapping is 50&ndash;200 corrosion-relevant tags per asset (skin temperatures, fluid composition, operating pressure, dew point, sulfur content) brought into the asset record so RBI scoring and corrosion-rate predictions stay in sync with operating severity. No PI-side changes required beyond a service-account read-only credential. The integration goes both directions: anomaly events generated by Atlantis (e.g., a CML reading that exceeds the predicted corrosion rate) can flow back to PI as PI Notifications for operations visibility." },
];

export default function DigitalTwinVsIotDashboard() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "Digital Twin vs IoT Dashboard: Asset Integrity Platform vs Real-Time Visualisation [2026]",
                "datePublished": "2026-05-25",
                "dateModified": "2026-05-25",
                "author": { "@type": "Person", "name": "Anoop Rayavarapu", "jobTitle": "ASNT Level III, Founder Atlantis NDT" },
                "publisher": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/compare/digital-twin-vs-iot-dashboard" }
            },
            {
                "@type": "ItemList",
                "name": "Digital Twin vs IoT Dashboard Comparison",
                "itemListElement": compareRows.map((r, i) => ({ "@type": "ListItem", "position": i + 1, "name": r.factor, "description": `Digital Twin: ${r.atlantis}. IoT Dashboard: ${r.competitor}` }))
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
                title="Digital Twin vs IoT Dashboard: Asset Integrity vs Real-Time Visualisation [2026]"
                description="Digital Twin vs IoT dashboard: 12-factor comparison. PI Vision / Grafana / WinCC show real-time data; Atlantis runs the inspection workflow with FFS, RBI, regulatory audit packs."
                canonical="https://atlantisndt.com/compare/digital-twin-vs-iot-dashboard"
                structuredData={structuredData}
                faq={faqs}
            />
            <Breadcrumbs />

            <section className="bg-gradient-to-br from-teal-700 to-blue-900 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="flex items-center gap-2 text-teal-200 mb-4"><BarChart3 className="w-5 h-5" /><span>Technology Comparison</span></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Twin vs IoT Dashboard: Workflow vs Visualisation</h1>
                    <p className="text-xl text-teal-100 max-w-3xl mb-8">An IoT dashboard shows you numbers. A digital twin runs an asset-integrity workflow. The economics, the user base, and the data model are all fundamentally different.</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/contact" className="inline-block bg-white text-teal-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Book a Demo</Link>
                        <Link to="/digital-twins" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">Atlantis DT Overview</Link>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-5xl px-6 prose prose-slate max-w-none">
                    <h2>The honest short answer</h2>
                    <p>An IoT dashboard &mdash; whether it&rsquo;s AVEVA PI Vision, GE Vernova Proficy iFIX, Wonderware System Platform, Honeywell Experion HMI, Siemens WinCC, Yokogawa Exaquantum, Grafana, ThingsBoard, or Splunk Industrial Asset Intelligence &mdash; is a real-time telemetry visualisation tool. It pulls sensor data from PLCs, DCS, or a historian into a dashboard view for monitoring trends, threshold alarms, and KPI tracking. It&rsquo;s essential for plant operations but it&rsquo;s not a digital twin in the asset-integrity sense.</p>
                    <p>A digital twin is built around inspection-data-native objects: CMLs with thickness reading history, welds with NDE records, defects with FFS calculations, RBI scoring with damage-mechanism templates. It runs API 579 fitness-for-service Level 1/2/3 calculations, API 581 risk-based inspection scoring, and generates regulatory audit packs. The IoT dashboard and the digital twin are both valuable, but they serve different audiences, drive different workflows, and operate on different data layers.</p>

                    <h2>The user-base distinction</h2>
                    <p>The clearest way to see the difference is to look at who uses what. The IoT dashboard&rsquo;s primary users are process operators (the control-room people on shift), control engineers, plant managers, and maintenance technicians monitoring real-time process performance. They&rsquo;re looking for &ldquo;is anything wrong right now?&rdquo; awareness. The digital twin&rsquo;s primary users are integrity engineers, inspection planners, FFS specialists, RBI analysts, regulatory compliance staff, and plant managers when they&rsquo;re thinking about turnaround scope or asset life extension. They&rsquo;re looking for &ldquo;what should we inspect, when, and what does the data say about asset fitness?&rdquo; The two user bases have different daily workflows, different decision rhythms, and different platform needs.</p>

                    <h2>The data model distinction</h2>
                    <p>An IoT dashboard&rsquo;s underlying data model is time-series. A historian (AVEVA PI, Honeywell PHD, OSIsoft PI, Yokogawa Exaquantum) stores tags &mdash; named time-series of sensor values (pressures, temperatures, flows, levels, vibration) &mdash; with millisecond-to-second resolution and decades of retention. The dashboard layer queries the historian and renders charts, gauges, and trend visualisations. This is the right data model for operational situational awareness.</p>
                    <p>A digital twin&rsquo;s data model is built around inspection-data-native objects: a CML record (asset ID, location, baseline thickness, reading history, projected next-inspection date), a weld record (joint type, heat numbers, welder ID, WPS, NDE history, code acceptance), a defect record (location, size, type, FFS calculation result, fitness status), an RBI assessment (damage mechanisms, probability score, consequence score, risk ranking). The 3D plant geometry overlays inspection results visually. The historian&rsquo;s time-series data feeds into the corrosion-rate model and RBI scoring as one input among many. This is the right data model for asset-integrity workflow.</p>

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
                                    <th className="px-4 py-3 text-left text-amber-200">IoT Dashboard</th>
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
                    <h2>The IoT dashboard ecosystem &mdash; what it does brilliantly</h2>
                    <p>Let&rsquo;s give the IoT dashboard / industrial visualisation tools their proper credit. AVEVA PI System (which absorbed OSIsoft in 2021) is the world&rsquo;s most widely deployed industrial historian, with tens of thousands of installations across oil & gas, petrochemical, power, mining, and water utilities. PI Vision delivers fast, configurable real-time dashboards over the PI data store. Honeywell Experion HMI, Yokogawa Exaquantum, Emerson DeltaV Operate, ABB 800xA HMI, Siemens WinCC, GE Vernova Proficy iFIX, and Wonderware (now AVEVA) System Platform all deliver mature, control-room-grade operational visualisation. Open-source / cross-industry tools (Grafana, ThingsBoard, Telegraf, InfluxDB) have rapidly become enterprise-ready for industrial visualisation use cases. These are essential tools and the digital twin doesn&rsquo;t replace them.</p>

                    <h2>Where the IoT dashboard hits the wall &mdash; the inspection workflow</h2>
                    <p>The wall comes at the inspection workflow. None of the IoT dashboards have a native CML thickness record. None of them have a weld map registry with NDE history. None of them run API 579 fitness-for-service calculations. None of them score API 581 RBI. None of them generate regulatory audit packs for API 510/570/653 or PED + EN 13445/13480 or NORSOK or CSA Z662 or SAES. You can extend some of them with custom development (PI AF asset templates with custom calculation rules, WinCC scripts, ThingsBoard rule engines) but you&rsquo;ll be reinventing what a purpose-built asset-integrity digital twin gives you out of the box. The economics rarely justify the custom build.</p>

                    <h2>The coexistence pattern</h2>
                    <p>The pragmatic pattern for industrial operators: keep the IoT dashboard / historian visualisation as the operations-side situational-awareness tool, add the digital twin as the integrity-side workflow platform, and integrate them bidirectionally. Atlantis Digital Twin pulls process severity tags from AVEVA PI (via PI Web API or PI AF), Honeywell PHD (via REST), OSIsoft PI (via PI Web API), Yokogawa Exaquantum (via OPC-UA), GE Historian (via REST), and the major DCS HMIs (via OPC-UA). Inspection events generated by Atlantis (e.g., a CML reading that exceeds the predicted corrosion rate) flow back to the historian as PI Notifications, Experion alarms, or equivalent in other platforms. Operators see the inspection signal in their familiar dashboard; integrity engineers do the deep work in Atlantis.</p>

                    <h2>The ML predictive-maintenance grey zone</h2>
                    <p>Between the pure IoT dashboard and the true asset-integrity digital twin sits the ML predictive-maintenance category: Uptake, C3 AI, SparkCognition, Bently Nevada System 1, Augury, Aspen Mtell, IBM Maximo Predict, GE Vernova SmartSignal, Senseye, Petasense. These platforms go beyond visualisation by adding statistical anomaly detection and time-series ML models. For rotating machinery (compressors, pumps, motors, turbines) where damage mechanisms produce vibration / current / thermal signatures, they&rsquo;re valuable. For fixed equipment integrity (pressure vessels, piping, storage tanks, heat exchangers) they&rsquo;re typically thin because damage mechanisms are inspection-driven, not signature-driven, and the analytics needed are FFS calculations and RBI scoring. The two categories coexist comfortably: ML predictive maintenance for rotating equipment, Atlantis Digital Twin for fixed equipment integrity.</p>

                    <h2>ROI math &mdash; why the inspection-data layer matters</h2>
                    <p>A mature IoT dashboard / historian deployment costs $300K&ndash;$2M/yr in licensing and operations for a typical refinery or petrochemical site, with significant ongoing custom-development investment in PI AF templates, calculation rules, dashboard configurations. It delivers operational situational awareness that&rsquo;s essential but not directly tied to inspection-cost or asset-life-extension outcomes.</p>
                    <p>An Atlantis Digital Twin enterprise tier at $200K/yr typically delivers $2.5M&ndash;$10M/yr in measurable value for a single refinery: 15&ndash;25% reduction in turnaround inspection scope, $5&ndash;$15M unplanned shutdown avoided per major event, 10&ndash;20% reduction in routine inspection labour, 2&ndash;4 year inspection-interval extensions on tanks and vessels via defensible FFS evidence. The economics flip strongly in favour of the asset-integrity digital twin layer, even with the historian / IoT dashboard layer still in place &mdash; because they&rsquo;re solving different problems.</p>

                    <h2>Atlantis Digital Twin &mdash; integrated with whatever historian you run</h2>
                    <p>Atlantis integrates with AVEVA PI System (via PI Web API and PI AF), Honeywell PHD (via REST), OSIsoft PI (via PI Web API), Yokogawa Exaquantum (via OPC-UA), GE Historian / Proficy (via REST), Emerson DeltaV (via OPC-UA), ABB 800xA (via OPC-UA), Siemens PCS 7 / WinCC (via OPC-UA), plus open-source historians (InfluxDB, TimescaleDB) via REST. Implementation cadence is 8&ndash;14 weeks to first-asset-live, with subsequent assets in 4&ndash;6 weeks. Pricing is tiered SaaS: $50K/yr starter (one complex asset, up to 25 named users), $200K/yr enterprise (unlimited assets, unlimited users, full FFS/RBI engine).</p>

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
                                    <p className="text-sm text-slate-600">Construction coordination vs operational integrity.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/compare/digital-twin-vs-3d-cad" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-blue-700">vs 3D CAD</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Static geometry vs live integrity platform.</p>
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
                        <Link to="/compare/atlantis-dt-vs-aveva-pi-system" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-blue-700">vs AVEVA PI System</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">The specific PI System product comparison.</p>
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
                                    <p className="text-sm text-slate-600">Product page with features, pricing, case studies.</p>
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
                                    <p className="text-sm text-slate-600">60-minute scoping call. Bring your PI Vision export.</p>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-teal-700 to-blue-900 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Add the Asset-Integrity Layer Over Your Existing Dashboard</h2>
                    <p className="text-teal-100 mb-8 text-lg">Bring your PI / Honeywell / Yokogawa / Grafana setup and one process unit&rsquo;s inspection data. We&rsquo;ll show how Atlantis lights up the inspection workflow alongside your existing operations view.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/contact" className="inline-block bg-white text-teal-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Book Demo</Link>
                        <Link to="/digital-twins" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">Product Page</Link>
                    </div>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
