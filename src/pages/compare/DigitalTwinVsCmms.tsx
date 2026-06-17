import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import TableOfContents from "@/components/TableOfContents";
import RelatedGuidesBlock from "@/components/RelatedGuidesBlock";
const compareRows = [
    { factor: "Primary purpose", atlantis: "Predictive: tells you what to inspect, when, and why, based on inspection-data accumulation, FFS / RBI analytics, and damage-mechanism templates", competitor: "Reactive / preventive: schedules and tracks work orders (PMs, corrective maintenance, calibrations) against a defined maintenance plan; manages spare parts inventory and craft labour" },
    { factor: "Data model centre of gravity", atlantis: "Inspection-data-native: CMLs, weld maps, defect records, FFS calculations, RBI scoring, damage-mechanism templates as first-class objects", competitor: "Work-order-native: work orders, asset hierarchy, BOM (Bill of Materials), spare parts inventory, labour planning, KPI tracking as first-class objects" },
    { factor: "3D visualisation", atlantis: "Native 3D plant model with inspection overlays (CML thickness, defect locations, FFS hot spots, RBI risk bands)", competitor: "Limited or none natively &mdash; most CMMS tools are list-based and form-based, with some adding 3D plant visualisation via add-ons" },
    { factor: "Inspection workflow", atlantis: "Mobile capture (iPad + rugged Android), offline-capable, ASNT-compliant report templates, bidirectional sync with the asset record", competitor: "Inspection work-order management &mdash; tracks that an inspection was performed but doesn&rsquo;t natively store the CML thickness reading data, the weld NDE result, or the FFS calculation" },
    { factor: "Analytics depth", atlantis: "API 579 FFS Level 1/2/3 native, API 581 RBI engine native, damage-mechanism analytics per API 571, corrosion-rate forecasting, probability of failure", competitor: "Reliability analytics (MTBF, MTTR, OEE, availability), spare parts demand forecasting, work-order cycle time analysis, planned vs corrective maintenance ratio" },
    { factor: "Code references", atlantis: "API 510/570/579/581/653, ASME Section VIII, EN 13445/13480, NORSOK, CSA Z662, country-specific in-service inspection codes", competitor: "ISO 55000-series asset management, ISO 14224 reliability data, RCM (Reliability-Centred Maintenance) per SAE JA1011/1012" },
    { factor: "Primary users", atlantis: "Integrity engineers, inspection planners, FFS specialists, RBI analysts, regulatory compliance teams", competitor: "Maintenance planners, maintenance technicians and craft labour, reliability engineers, plant managers, materials managers, work-order schedulers" },
    { factor: "Typical platform examples", atlantis: "Atlantis Digital Twin, AVEVA AssetWise APM, Bentley OpenPlant Asset Performance, Hexagon EAM (with full inspection integration)", competitor: "IBM Maximo, SAP PM (Plant Maintenance) / SAP S/4HANA EAM, Oracle eAM, Infor EAM, Fiix (now Rockwell), Limble CMMS, UpKeep, Asset Essentials (Brightly / Siemens), eMaint (Fluke Reliability), MEX, MaintainX" },
    { factor: "Update cadence", atlantis: "Continuous &mdash; every inspection event, every CML reading, every FFS update commits to the asset record automatically", competitor: "Work-order-driven &mdash; updates happen as work orders are created, scheduled, executed, and closed out" },
    { factor: "Decision support", atlantis: "Automated next-inspection dates, repair prioritisation, work-order triggers, turnaround scope optimisation, FFS-backed life extension evidence, regulatory audit pack", competitor: "Work-order scheduling, preventive-maintenance template execution, RCM-driven maintenance strategy, spare parts re-order point, labour productivity tracking" },
    { factor: "Strength", atlantis: "Predicts what needs inspection / maintenance, generates regulatory audit packs, supports asset life extension cases", competitor: "Executes the work-order lifecycle reliably and at scale, manages spare parts and labour, integrates with ERP for financial controls" },
    { factor: "Coexistence pattern", atlantis: "The digital twin tells the CMMS what work orders to create (inspections, repairs, replacements); the CMMS executes the work-order lifecycle. They run in parallel and integrate bidirectionally.", competitor: "Receives inspection / repair work-order requests from the digital twin, schedules and executes the work, sends completion status back to the digital twin for inspection-record commit." },
];

const faqs = [
    { question: "Is a CMMS a digital twin?", answer: "No, and the two complement each other rather than competing. A CMMS (Computerised Maintenance Management System) is a work-order management platform &mdash; tools like IBM Maximo, SAP PM, Oracle eAM, Infor EAM, Fiix, Limble, UpKeep, and eMaint excel at scheduling preventive maintenance, tracking corrective maintenance work orders, managing spare parts inventory, and planning craft labour. Their data model is work-order-native: work order, asset hierarchy, BOM, spare parts, labour. A CMMS executes the maintenance workflow reliably and at scale. A digital twin, in the asset-integrity sense, is a predictive platform that tells the CMMS what work to create based on inspection-data accumulation, FFS calculations, and RBI scoring. Its data model is inspection-data-native: CMLs, weld maps, defects, FFS results, RBI scores. The two systems integrate bidirectionally: the digital twin generates inspection / repair work-order requests; the CMMS schedules and executes the work; the work-order completion data feeds back into the digital twin." },
    { question: "If I have IBM Maximo or SAP PM, do I also need a digital twin?", answer: "Yes, for the inspection-data layer. IBM Maximo and SAP PM (and Oracle eAM, Infor EAM, etc.) excel at the maintenance work-order workflow but they&rsquo;re thin on the inspection-data layer. Maximo&rsquo;s asset hierarchy doesn&rsquo;t natively store a CML thickness reading history; Maximo doesn&rsquo;t natively run API 579 fitness-for-service calculations; Maximo doesn&rsquo;t natively score API 581 risk-based inspection. You can extend Maximo with custom add-ons (IBM Maximo APM, Maximo Health, plus third-party tools like Antea, Meridium, GE Vernova APM, Bentley AssetWise APM) to get inspection-data depth, but you&rsquo;re effectively building a thin operational digital twin on top of the work-order platform. Atlantis Digital Twin is built from the ground up around the inspection-data layer; it integrates with Maximo / SAP PM via REST and standard connectors so the work-order workflow stays in the CMMS where it belongs." },
    { question: "What&rsquo;s the difference between a digital twin and a CMMS-plus-APM stack?", answer: "An APM (Asset Performance Management) tool sits on top of a CMMS to add reliability analytics, condition monitoring, and limited integrity workflow. Tools in the APM category include IBM Maximo APM Health, GE Vernova APM (formerly Predix Asset Performance Management), Meridium (now part of GE), Bentley AssetWise APM, AVEVA AssetWise, Hexagon EAM with HxGN APM. APM tools partially overlap with what an integrity-focused digital twin does, particularly the RBI and FFS workflow. The distinction is depth in the inspection workflow itself: APM tools typically rely on integration with a separate IDMS (Antea, Meridium-as-IDMS, GE APM) for the inspection data layer, where Atlantis Digital Twin is the IDMS. The full stack often looks like: CMMS (Maximo / SAP PM) + APM (GE Vernova APM / Meridium / Bentley AssetWise APM) + digital twin (Atlantis) + historian (AVEVA PI) + DCS / control system. Each layer does its job; integration via REST and standard connectors keeps the stack coherent." },
    { question: "Will the digital twin replace my CMMS?", answer: "Not in any pragmatic deployment we&rsquo;ve seen. The CMMS handles work-order scheduling, spare parts inventory, labour planning, and ERP integration for financial controls &mdash; mature workflows that the maintenance, planning, and finance teams rely on daily. The digital twin tells the CMMS what work-order requests to generate (this CML is due for re-inspection, this defect needs FFS Level 2 evaluation, this weld is overdue, this tank needs an MFL bottom scan) and consumes the work-order completion data back into the asset record. The CMMS and the digital twin run in parallel, each excelling at what it&rsquo;s built for. Atlantis Digital Twin integrates with IBM Maximo, SAP PM, SAP S/4HANA EAM, Oracle eAM, Infor EAM, Fiix, eMaint, and the smaller cloud-native CMMS tools (Limble, UpKeep, MaintainX, Asset Essentials) via REST or standard work-order BAPI / API." },
    { question: "What about reliability-centred maintenance (RCM) and the ISO 55000 / ISO 14224 frameworks?", answer: "RCM (Reliability-Centred Maintenance, per SAE JA1011/1012), the ISO 55000-series asset management standard, and ISO 14224 reliability data standard are the canonical frameworks the CMMS world works within. They&rsquo;re excellent for maintenance strategy &mdash; deciding which assets need PMs, what failure modes to mitigate, what spare parts to stock, what reliability KPIs to track. They&rsquo;re thin on the integrity workflow specifically: API 510/570/653 in-service inspection plans, API 579 fitness-for-service evaluation, API 581 risk-based inspection. Atlantis Digital Twin handles the integrity workflow with full code compliance; the CMMS-plus-RCM-plus-ISO 55000 stack handles the broader maintenance management. The two paradigms complement each other; integrity and maintenance are not the same discipline but they share data and decision points." },
];

export default function DigitalTwinVsCmms() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "Digital Twin vs CMMS (Maximo / SAP PM): Predictive Integrity vs Work-Order Execution [2026]",
                "datePublished": "2026-05-25",
                "dateModified": "2026-05-25",
                "author": { "@type": "Person", "name": "Anoop Rayavarapu", "jobTitle": "ASNT Level III, Founder Atlantis NDT" },
                "publisher": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/compare/digital-twin-vs-cmms" }
            },
            {
                "@type": "ItemList",
                "name": "Digital Twin vs CMMS Comparison",
                "itemListElement": compareRows.map((r, i) => ({ "@type": "ListItem", "position": i + 1, "name": r.factor, "description": `Digital Twin: ${r.atlantis}. CMMS: ${r.competitor}` }))
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
                title="Digital Twin vs CMMS: Predictive Integrity vs Work-Order Execution [2026]"
                description="Digital Twin vs CMMS (Maximo, SAP PM, Oracle eAM): 12-factor comparison. CMMS schedules work; the digital twin tells you what work to schedule. Built for coexistence, not replacement."
                canonical="https://atlantisndt.com/compare/digital-twin-vs-cmms"
                structuredData={structuredData}
                faq={faqs}
            />
                    <TableOfContents items={[{ id: "overview", label: "Comparison Overview" }, { id: "matrix", label: "Feature Matrix" }, { id: "verdict", label: "When Each Wins" }, { id: "faq", label: "FAQ" }]} />
        <Breadcrumbs />

            <section className="bg-gradient-to-br from-amber-700 to-red-900 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="flex items-center gap-2 text-amber-200 mb-4"><BarChart3 className="w-5 h-5" /><span>Technology Comparison</span></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Twin vs CMMS: Predictive vs Reactive</h1>
                    <p className="text-xl text-amber-100 max-w-3xl mb-8">CMMS schedules and executes work orders. A digital twin tells you what work orders to schedule. The two integrate; they don&rsquo;t compete. Here&rsquo;s the practical division of labour.</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/contact" className="inline-block bg-white text-amber-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Book a Demo</Link>
                        <Link to="/digital-twins" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">Atlantis DT Overview</Link>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-5xl px-6 prose prose-slate max-w-none">
                    <h2>The honest short answer</h2>
                    <p>A CMMS (Computerised Maintenance Management System) is a work-order management platform. Tools like IBM Maximo, SAP PM (Plant Maintenance) / SAP S/4HANA EAM, Oracle eAM, Infor EAM, Fiix (now Rockwell), Limble CMMS, UpKeep, eMaint (Fluke Reliability), Asset Essentials (Brightly / Siemens), and MaintainX excel at scheduling preventive maintenance, tracking corrective maintenance work orders, managing spare parts inventory, and planning craft labour. Their data model is work-order-native: work order, asset hierarchy, BOM (Bill of Materials), spare parts inventory, labour planning, KPI tracking.</p>
                    <p>A digital twin, in the asset-integrity sense, is a predictive platform built around inspection-data-native objects: CMLs (Condition Monitoring Locations) with thickness reading history, welds with NDE records, defects with FFS calculations, RBI risk scores with damage-mechanism templates. It tells the CMMS what work-order requests to generate based on inspection-data analytics. The two systems integrate bidirectionally: digital twin to CMMS for work-order requests; CMMS to digital twin for work-order completion data.</p>

                    <h2>Why the predictive vs reactive distinction matters</h2>
                    <p>A traditional CMMS-only workflow is reactive (corrective maintenance after failure) or time-based-preventive (PMs at fixed intervals regardless of asset condition). Both have value, but neither is optimised for fixed-equipment integrity programmes where damage mechanisms (sour service corrosion, CUI, HTHA, SCC, fatigue) drive inspection-data-based decisions rather than calendar-based maintenance. An API 510 pressure vessel inspection plan isn&rsquo;t scheduled on a fixed time interval &mdash; it&rsquo;s scheduled based on the corrosion-rate trend from CML thickness measurements, the damage-mechanism risk score per API 581 RBI, and the fitness-for-service evidence per API 579. None of that lives in the CMMS data model natively; all of it lives in the digital twin.</p>

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
                                    <th className="px-4 py-3 text-left text-amber-200">Traditional CMMS</th>
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
                    <h2>The CMMS landscape &mdash; what each tool does best</h2>
                    <p>Let&rsquo;s catalogue the CMMS ecosystem briefly. IBM Maximo is the heavyweight enterprise CMMS, dominant in oil & gas, utilities, transportation, and large manufacturing &mdash; with an extensive ecosystem of Maximo Anywhere mobile, Maximo APM Health, Maximo Predict, plus deep IBM AI integration. SAP PM (Plant Maintenance) ships as part of SAP ECC / S/4HANA, deeply integrated with the financial and supply-chain backbone, dominant in mid-to-large industrial operators running SAP enterprise-wide. Oracle eAM (Enterprise Asset Management) is the Oracle equivalent, common in Oracle ERP customers. Infor EAM is the Infor-suite EAM, common in mid-market. Fiix (acquired by Rockwell in 2020), Limble CMMS, UpKeep, MaintainX, and eMaint occupy the cloud-native modern-UX CMMS space, often replacing or supplementing legacy CMMS in mid-market operations. Asset Essentials (Brightly Software, acquired by Siemens in 2022) is strong in facilities and education. MEX is a long-standing Australian-headquartered CMMS popular in mining and resources.</p>
                    <p>Each excels at the work-order lifecycle: creation, planning, scheduling, dispatch, execution, completion, close-out, and the reporting and KPI tracking layer on top. Spare parts inventory, labour planning, craft scheduling, work-order cost capture, and ERP integration for financial controls are all mature CMMS strengths.</p>

                    <h2>Where the CMMS hits the wall &mdash; the inspection-data layer</h2>
                    <p>The wall comes at the inspection-data layer. None of the major CMMS tools natively store a CML thickness reading history with corrosion-rate analytics. None of them natively maintain a weld map with full NDE history per joint. None of them natively run API 579 fitness-for-service Level 1/2/3 calculations. None of them natively score API 581 risk-based inspection with API 571 damage-mechanism templates. None of them natively generate API 510/570/653 / PED + EN 13445/13480 / NORSOK / CSA Z662 / SAES audit packs.</p>
                    <p>You can extend the CMMS with bolt-on tools: IBM Maximo APM Health, Maximo Predict, plus third-party IDMS tools (Antea, Meridium, GE Vernova APM, Bentley AssetWise APM, Hexagon HxGN APM). These bolt-ons partially fill the gap, but they typically integrate via the CMMS work-order interface and don&rsquo;t deliver the full inspection-data-native experience. The pragmatic alternative: keep the CMMS for what it does well, add Atlantis Digital Twin as the inspection-data-native platform, integrate the two via REST.</p>

                    <h2>The Atlantis ↔ CMMS integration pattern</h2>
                    <p>Atlantis Digital Twin integrates with the major CMMS platforms in both directions. Outbound from Atlantis to CMMS: when the digital twin determines that a CML is due for re-inspection, that a defect needs FFS Level 2 evaluation, that a weld is overdue, or that a tank needs an MFL bottom scan, it generates a work-order request in the CMMS via the platform&rsquo;s standard work-order API. The work-order shows up in the maintenance planner&rsquo;s queue alongside calendar-based PMs and corrective work; the planner schedules and dispatches it normally. Inbound from CMMS to Atlantis: when the work order is completed, the inspection-data payload (CML reading, PAUT scan file, weld inspection result) flows back into Atlantis and commits to the asset record. The 3D twin updates, the corrosion-rate model refreshes, the RBI score recalculates, and the next-inspection-date projection updates.</p>
                    <p>Integration is via REST in both directions for modern CMMS (Fiix, Limble, UpKeep, MaintainX, eMaint, Maximo MAS / Cloud). For SAP PM / S/4HANA, integration is via standard work-order BAPIs. For IBM Maximo (on-prem), via the Maximo REST API or MAS REST API. For Oracle eAM and Infor EAM, via REST.</p>

                    <h2>Where the digital twin makes the CMMS more valuable</h2>
                    <p>The integration unlocks several CMMS workflows that are otherwise hard. First, condition-based maintenance triggers: instead of fixed-interval PMs, the CMMS receives a continuous flow of condition-driven work-order requests, reducing both over-maintenance (PMs that aren&rsquo;t needed) and under-maintenance (failures that weren&rsquo;t flagged). Second, turnaround scope optimisation: the digital twin&rsquo;s ranked turnaround scope list feeds directly into the CMMS work-order planning queue, with proper material reservations, labour estimates, and craft scheduling. Third, FFS-backed life extension evidence: the FFS audit pack generated by the digital twin supports inspection-interval extension decisions which feed back into reduced PM frequencies in the CMMS. Fourth, defensible regulator inspection records: when an OSHA, EPA, PHMSA, OPRED, HSE, PSA, AER, or other regulator inspector arrives, the CMMS work-order history plus the digital twin&rsquo;s inspection-data record together form the defensible evidence pack.</p>

                    <h2>ROI math &mdash; the integrated stack value</h2>
                    <p>For a refinery operator running IBM Maximo + Atlantis Digital Twin together, the value vs Maximo-alone typically lands in this range: 15&ndash;25% reduction in turnaround inspection scope ($6M&ndash;$30M every 4&ndash;5 years), one or more avoided unplanned shutdowns ($5M&ndash;$15M each), 10&ndash;20% reduction in routine inspection labour ($400K&ndash;$1.5M/yr), and 2&ndash;4 year inspection-interval extensions on tanks and vessels via defensible FFS evidence ($500K&ndash;$3M/yr). Atlantis pays back many times over relative to its affordable, accessible, fully customizable SaaS positioning. The integration also unlocks measurable Maximo-side improvements: 5&ndash;10% reduction in unnecessary PMs, 10&ndash;15% reduction in work-order cycle time as inspection data flows back faster, improved compliance evidence quality.</p>

                    <h2>Atlantis Digital Twin &mdash; built to complement your CMMS</h2>
                    <p>Atlantis integrates with IBM Maximo (Maximo APM, Maximo MAS, Maximo Cloud) via the standard Maximo REST API. SAP PM / SAP S/4HANA EAM via standard work-order BAPIs and OData. Oracle eAM via REST. Infor EAM via REST. Modern cloud CMMS (Fiix, Limble, UpKeep, MaintainX, eMaint, Asset Essentials) via REST. Implementation cadence is 8&ndash;14 weeks to first-asset-live, with subsequent assets in 4&ndash;6 weeks. Atlantis is positioned as affordable, accessible, fully customizable SaaS — a starter tier (one complex asset, up to 25 named users) and an enterprise tier (unlimited assets, unlimited users, full FFS/RBI engine). Pricing varies by region and scope — contact us for a tailored quote.</p>

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
                        <Link to="/compare/digital-twin-vs-iot-dashboard" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-blue-700">vs IoT Dashboard</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Real-time visualisation vs integrity workflow.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/compare/atlantis-dt-vs-ibm-maximo" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-blue-700">vs IBM Maximo (Product)</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">The specific IBM Maximo product comparison.</p>
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
                                    <p className="text-sm text-slate-600">60-minute scoping call. Bring your Maximo / SAP PM extract.</p>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-amber-700 to-red-900 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Make Your CMMS Predictive, Not Just Reactive</h2>
                    <p className="text-amber-100 mb-8 text-lg">Bring your Maximo / SAP PM / Oracle eAM work-order extract and one process unit&rsquo;s inspection data. We&rsquo;ll show how Atlantis Digital Twin makes your CMMS measurably smarter.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/contact" className="inline-block bg-white text-amber-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Book Demo</Link>
                        <Link to="/digital-twins" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">Product Page</Link>
                    </div>
                </div>
            </section>
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
