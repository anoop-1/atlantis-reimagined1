import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
    Box,
    Layers,
    Database,
    Upload,
    Eye,
    Download,
    ChevronDown,
    ChevronUp,
    CheckCircle,
    AlertTriangle,
    Zap,
    Shield,
    TrendingUp,
    BarChart3,
    FileText,
    Globe,
    Clock,
    ArrowRight,
    Play,
    PenTool,
    Cpu,
    Target
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const assetTypes = [
    {
        name: "Pressure Vessels",
        slug: "vessel",
        description: "Cylindrical and spherical pressure vessels. Input shell diameter, wall thickness, nozzle locations, and head geometry. Map UT thickness, RT weld indications, and PAUT C-scan data.",
        codes: ["ASME VIII Div 1", "API 510", "API 579"],
        ndtTypes: ["UT Thickness Grid", "PAUT Shell Scan", "RT Nozzle Welds", "MT/PT Surface"],
        color: "blue"
    },
    {
        name: "Piping Systems",
        slug: "piping",
        description: "Straight pipe, bends, elbows, and tees. Define pipe schedule, isometric routing, and injection points. Overlay UT thickness surveys, GWT screening results, and CUI risk maps.",
        codes: ["ASME B31.3", "API 570", "API 574"],
        ndtTypes: ["UT Thickness", "Guided Wave", "PAUT Weld", "CUI Risk Map"],
        color: "amber"
    },
    {
        name: "Storage Tanks",
        slug: "tank",
        description: "Above-ground storage tanks to API 650/653. Input tank diameter, shell course heights, and roof type. Visualize MFL floor scan data, shell UT corrosion maps, and annular plate readings.",
        codes: ["API 653", "API 650", "API 579"],
        ndtTypes: ["MFL Floor Scan", "UT Shell Courses", "PAUT Nozzles", "Soil-Side Corrosion"],
        color: "emerald"
    },
    {
        name: "Pipelines",
        slug: "pipeline",
        description: "Onshore and offshore transmission pipelines. Define centerline route, girth weld locations, and feature logs. Integrate ILI (intelligent pigging) data, AUT weld records, and GWT anomalies.",
        codes: ["API 1104", "ASME B31.4/B31.8", "DNV-ST-F101"],
        ndtTypes: ["ILI / Inline Inspection", "AUT Girth Welds", "DCVG Coating", "GWT Screening"],
        color: "orange"
    },
    {
        name: "Heat Exchangers",
        slug: "exchanger",
        description: "Shell-and-tube and plate heat exchangers. Define tubesheet layout, tube count, and bundle geometry. Visualize ECT tube inspection results with color-coded tube condition maps.",
        codes: ["ASME Section I", "API 510", "TEMA"],
        ndtTypes: ["ECT / IRIS Tubes", "UT Tubesheet", "RFEC Ferrous Tubes", "MFL Tube Scan"],
        color: "purple"
    },
    {
        name: "Structural Members",
        slug: "structural",
        description: "Beams, columns, welds, and connections. Define member geometry and weld joint locations. Map UT shear wave results, MT crack indications, and corrosion loss across structural members.",
        codes: ["AWS D1.1", "AISC 360", "API RP 2A"],
        ndtTypes: ["UT Shear Wave", "PAUT Weld", "MT Surface Cracks", "VT Corrosion Survey"],
        color: "slate"
    }
];

const howItWorks = [
    {
        step: "01",
        icon: PenTool,
        title: "Define Your Asset",
        description: "Select asset type (vessel, pipe, tank, pipeline, exchanger) and enter dimensional data — diameter, wall thickness, length, nozzle positions, weld joint map. The 3D model generates automatically.",
        detail: "Supports parametric entry for standard geometries. Import from CAD/DXF for complex shapes."
    },
    {
        step: "02",
        icon: Upload,
        title: "Add NDT Data",
        description: "Input inspection readings at specific coordinates. Upload UT thickness grids, PAUT C-scan images, ECT tube maps, or manual point readings. Each data point is tagged with method, date, and technician.",
        detail: "Accepts CSV, Excel, and direct instrument output formats. Auto-generates grid from scan parameters."
    },
    {
        step: "03",
        icon: Eye,
        title: "Visualize & Analyze",
        description: "The 3D model renders with color-coded condition mapping — green (acceptable), amber (monitor), red (at or near retirement). Click any point to see full reading history, ASME/API retirement criteria, and remaining life.",
        detail: "Corrosion rate trending, remaining life projection, next inspection date per API 510/570/653."
    },
    {
        step: "04",
        icon: Download,
        title: "Save, Share & Report",
        description: "Save the model with all inspection data for future reference. Generate code-compliant reports (ASME Section V, API 510/570/653 format), share with stakeholders, or compare with previous inspection campaigns.",
        detail: "PDF report generation, client portal access, revision tracking, and audit trail."
    }
];

const features = [
    {
        icon: Box,
        title: "3D Color-Coded Model",
        description: "Real-time 3D rendering with color mapping based on ASME/API retirement criteria. Green = acceptable, amber = enhanced monitoring required, red = retirement thickness reached or predicted within next interval.",
        highlight: "Industry-first"
    },
    {
        icon: Database,
        title: "Full Inspection History",
        description: "Every reading tagged with date, inspector, method, equipment serial, and calibration record. Multiple inspection campaigns overlaid on the same geometry for trend analysis.",
        highlight: "Full traceability"
    },
    {
        icon: TrendingUp,
        title: "Corrosion Rate & Remaining Life",
        description: "Automatic corrosion rate calculation where two or more inspections exist. Remaining life projection and next inspection date calculated per API 510, 570, or 653 as applicable.",
        highlight: "API compliant"
    },
    {
        icon: Shield,
        title: "Fitness for Service (FFS)",
        description: "Level 1 API 579 fitness for service assessment integrated directly into the 3D model. Flag areas for Level 2/3 engineering assessment and document assessment basis.",
        highlight: "API 579 ready"
    },
    {
        icon: FileText,
        title: "Code-Compliant Reports",
        description: "Export inspection reports pre-formatted for ASME Section V, API 510/570/653, and client specifications. Include 3D model screenshots, tabular data, and signatory fields.",
        highlight: "Audit-ready"
    },
    {
        icon: Globe,
        title: "Multi-Site Portfolio",
        description: "Manage inspection data across multiple assets, facilities, and geographies in one platform. Portfolio-level dashboard shows overall asset health and upcoming inspection due dates.",
        highlight: "Enterprise scale"
    },
    {
        icon: BarChart3,
        title: "Predictive Analytics",
        description: "Machine learning models trained on your inspection history predict areas of future concern. Risk-ranked inspection prioritization reduces cost while maintaining safety margins.",
        highlight: "AI-powered"
    },
    {
        icon: Cpu,
        title: "Equipment & Method Integration",
        description: "Direct import from major NDT instruments: Olympus OmniScan (PAUT), GE Mentor (VT), Zetec MIZ (ECT), Cygnus UT gauges, and more. Eliminate manual transcription errors.",
        highlight: "Direct import"
    }
];

const colorThresholds = [
    { color: "bg-green-500", label: "Acceptable", description: "Measured wall ≥ minimum required thickness. No action required until next scheduled inspection." },
    { color: "bg-yellow-400", label: "Enhanced Monitoring", description: "Wall thickness approaching minimum but remaining life > next inspection interval. Monitor at increased frequency." },
    { color: "bg-orange-500", label: "Action Required", description: "Predicted to reach retirement thickness within the current inspection interval. Plan repair or fitness for service assessment." },
    { color: "bg-red-600", label: "At Retirement", description: "Measured wall ≤ retirement thickness per API 510/570/653. Immediate action required — repair, replace, or FFS assessment." }
];

const comparisonRows = [
    { traditional: "2D PDF with measurement tables", digital: "Interactive 3D model with color-coded condition" },
    { traditional: "Manual thickness table cross-reference", digital: "Click-to-inspect with full reading history" },
    { traditional: "Separate documents per inspection campaign", digital: "All campaigns on single asset model — trend instantly visible" },
    { traditional: "Corrosion rate calculated in spreadsheet", digital: "Auto-calculated with remaining life projection" },
    { traditional: "No retirement criteria checking", digital: "ASME/API retirement criteria checked automatically" },
    { traditional: "Email-distributed, version confusion", digital: "Secure portal, single source of truth, version controlled" },
    { traditional: "Generic report templates", digital: "Code-specific ASME / API formatted output" },
    { traditional: "Report created after site visit", digital: "Model updates in real time as readings are entered" }
];

const useCases = [
    {
        title: "Refinery Turnaround Inspection",
        description: "Map UT thickness survey of 200+ pressure vessels and heat exchangers during a planned shutdown. Engineering team reviews 3D models remotely during the turnaround — eliminates delays waiting for paper reports. Fitness for service decisions made in hours, not days.",
        roi: "30% reduction in turnaround decision time"
    },
    {
        title: "Pipeline Integrity Management",
        description: "Integrate ILI (intelligent pig) data, manual UT digs, and DCVG coating surveys on a single pipeline centerline model. Color coding immediately highlights anomaly clusters. Next-run date and inspection intervals auto-calculated per ASME B31.8S.",
        roi: "Replaces 3 separate software tools"
    },
    {
        title: "Storage Tank API 653 Inspection",
        description: "MFL floor scan data overlaid on tank floor plan. Shell course UT mapped to tank elevation diagram. Annular plate readings entered by zone. Final API 653 inspection report generated in the tool with all tabular data and 3D screenshots.",
        roi: "API 653 report generated 60% faster"
    },
    {
        title: "Heat Exchanger ECT Programme",
        description: "Tubesheet layout loaded from standard specification. ECT tube inspection results (bobbin probe, MRPC) color-coded by defect severity. Tubes flagged for plugging identified instantly. Remaining tube life projected from degradation rate.",
        roi: "Zero missed critical tubes"
    }
];

const faqs = [
    {
        question: "Do I need 3D CAD files to use this tool?",
        answer: "No. For standard asset types (pipes, cylinders, flat plates, storage tanks), you simply enter the dimensions — diameter, wall thickness, length, nozzle schedule — and the 3D model generates automatically. CAD file import (DXF, STEP) is available for complex geometries as an optional upgrade."
    },
    {
        question: "What NDT data formats does it accept?",
        answer: "The platform accepts manual data entry (readings with coordinates), CSV/Excel uploads, and direct instrument imports from major NDT equipment brands including Olympus (PAUT), GE Mentor (VT), Zetec (ECT), Cygnus UT gauges, and most ILI data exporters. Custom integrations available via REST API."
    },
    {
        question: "Which industry codes and standards are built in?",
        answer: "Currently built in: API 510 (pressure vessel), API 570 (piping), API 653 (storage tank), ASME B31.3, ASME B31.4, ASME B31.8, ASME Section VIII Div 1, and API 579 Level 1 FFS. Additional codes (ASME B31.8S, DNV, NORSOK) available on request."
    },
    {
        question: "Can multiple inspectors contribute data to the same asset model?",
        answer: "Yes. The platform supports concurrent access with role-based permissions. Field inspectors add readings in the mobile app or web browser. Inspection engineers review, validate, and approve data before it affects the model color coding. Full audit trail maintained for every data point."
    },
    {
        question: "How is historical inspection data migrated?",
        answer: "We migrate your existing inspection history from PDF reports, spreadsheets, or legacy software. Historical readings are time-stamped to their original inspection date, enabling corrosion rate calculation from day one. Data migration is included in the implementation package."
    },
    {
        question: "Is this cloud-based or can we run it on-premise?",
        answer: "Both deployment options are available. Cloud (AWS) is standard for most clients — SOC 2 Type II compliant, data encrypted at rest and in transit. On-premise deployment available for clients in regulated industries or with data sovereignty requirements (common in Middle East and India operations)."
    },
    {
        question: "What is the difference between this and your Intelligent Reporting Software?",
        answer: "The Intelligent Reporting Software is a full NDT management platform covering personnel certifications, equipment calibration, job management, and reporting workflows. The Digital Twin Reporting Tool is specifically focused on the 3D asset visualization layer — mapping spatial inspection data to asset geometry. Both products integrate with each other and can be licensed separately or together."
    },
    {
        question: "Is training required to use the 3D reporting tool?",
        answer: "The tool is designed for NDT inspectors and integrity engineers — not software specialists. Standard users are operational within 2-4 hours of onboarding. We provide video training library, live onboarding sessions, and ongoing support. Most clients are creating their first 3D asset model within the first day."
    }
];

function FAQItem({ faq }: { faq: { question: string; answer: string } }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border border-slate-200 rounded-lg overflow-hidden">
            <button
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-slate-50 transition"
                onClick={() => setOpen(!open)}
            >
                <span className="font-semibold text-slate-800 pr-4">{faq.question}</span>
                {open ? <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />}
            </button>
            {open && (
                <div className="px-5 pb-5 bg-white border-t border-slate-100">
                    <p className="text-slate-600 leading-relaxed pt-4">{faq.answer}</p>
                </div>
            )}
        </div>
    );
}

export default function DigitalTwinReporting() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "Digital Twin NDT Reporting Software",
                "applicationCategory": "BusinessApplication",
                "description": "3D asset visualization software for NDT inspection data. Input asset dimensions, add inspection readings, view color-coded 3D model showing asset condition. API 510/570/653 corrosion rate and remaining life calculations built in.",
                "operatingSystem": "Web-based (Cloud or On-Premise)",
                "provider": {
                    "@type": "Organization",
                    "name": "Atlantis NDT",
                    "url": "https://atlantisndt.com"
                },
                "featureList": [
                    "3D color-coded NDT data visualization",
                    "Parametric asset model generation",
                    "UT / PAUT / ECT / MFL data import",
                    "API 510/570/653 retirement criteria checking",
                    "Corrosion rate and remaining life calculation",
                    "API 579 Level 1 FFS assessment",
                    "Code-compliant report generation",
                    "Multi-site portfolio management"
                ],
                "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "USD" }
                }
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
                title="Digital Twin NDT Reporting 2026 — UT/PAUT in 3D, API 510/570/653"
                description="Input asset dimensions + NDT data, get a 3D color-coded model in seconds. UT thickness, PAUT C-scan, ECT tube maps, API 510/570/653 retirement criteria built in. Demo free."
                keywords="digital twin NDT reporting, 3D NDT visualization, UT thickness map, PAUT C-scan viewer, API 510 inspection software, corrosion mapping software, NDT digital twin software, asset integrity visualization"
                canonical="https://atlantisndt.com/digital-twin-reporting"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* Hero */}
            <section className="bg-gradient-to-br from-[#0a1628] to-[#1a3a6e] text-white pt-28 pb-20">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                            <div className="flex items-center gap-2 text-blue-300 mb-4 text-sm font-semibold uppercase tracking-wide">
                                <Box className="w-4 h-4" />
                                <span>Digital Twin Technology</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                3D NDT Inspection<br />
                                <span className="text-blue-400">Reporting Software</span>
                            </h1>
                            <p className="text-xl text-white/85 mb-4 leading-relaxed">
                                Enter your asset dimensions and NDT data. A 3D color-coded model appears instantly — showing exactly where your asset is thin, corroded, or approaching retirement.
                            </p>
                            <p className="text-lg text-white/65 mb-8">
                                Corrosion rates, remaining life, and API 510/570/653 retirement criteria calculated automatically. Save, share, and analyze across inspection campaigns.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="https://dt.atlantisndt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-lg font-semibold transition shadow-lg">
                                    <Zap className="w-5 h-5" />
                                    Try Now
                                </a>
                                <Link to="/contact" className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg font-semibold transition shadow-lg">
                                    <Play className="w-5 h-5" />
                                    Request Live Demo
                                </Link>
                                <Link to="/contact" className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition justify-center">
                                    <FileText className="w-5 h-5" />
                                    Download Brochure
                                </Link>
                            </div>
                        </motion.div>

                        {/* Visual mockup of the 3D tool */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="bg-slate-800/80 rounded-2xl border border-slate-600 overflow-hidden shadow-2xl">
                                {/* Mockup toolbar */}
                                <div className="bg-slate-900 px-4 py-3 flex items-center gap-3 border-b border-slate-700">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                    </div>
                                    <span className="text-slate-400 text-xs font-mono">atlantisndt.com/app — Vessel V-101 · UT Survey Feb 2026</span>
                                </div>
                                {/* Mockup content */}
                                <div className="p-5">
                                    <div className="grid grid-cols-3 gap-3 mb-4">
                                        <div className="col-span-2 bg-slate-700/50 rounded-xl p-3 aspect-video flex items-center justify-center relative overflow-hidden">
                                            {/* Simple cylindrical vessel mockup */}
                                            <div className="relative w-full h-full flex items-center justify-center">
                                                <div className="relative">
                                                    {/* Vessel body */}
                                                    <div className="w-32 h-20 rounded-lg border-2 border-slate-400 relative overflow-hidden">
                                                        <div className="absolute inset-0 grid grid-cols-6 grid-rows-4">
                                                            <div className="bg-green-500/70 border border-slate-600/30" />
                                                            <div className="bg-green-500/70 border border-slate-600/30" />
                                                            <div className="bg-yellow-400/70 border border-slate-600/30" />
                                                            <div className="bg-green-500/70 border border-slate-600/30" />
                                                            <div className="bg-green-500/70 border border-slate-600/30" />
                                                            <div className="bg-green-500/70 border border-slate-600/30" />
                                                            <div className="bg-green-500/70 border border-slate-600/30" />
                                                            <div className="bg-orange-500/70 border border-slate-600/30" />
                                                            <div className="bg-red-600/70 border border-slate-600/30" />
                                                            <div className="bg-orange-500/70 border border-slate-600/30" />
                                                            <div className="bg-yellow-400/70 border border-slate-600/30" />
                                                            <div className="bg-green-500/70 border border-slate-600/30" />
                                                            <div className="bg-green-500/70 border border-slate-600/30" />
                                                            <div className="bg-yellow-400/70 border border-slate-600/30" />
                                                            <div className="bg-orange-500/70 border border-slate-600/30" />
                                                            <div className="bg-red-600/70 border border-slate-600/30" />
                                                            <div className="bg-orange-500/70 border border-slate-600/30" />
                                                            <div className="bg-green-500/70 border border-slate-600/30" />
                                                            <div className="bg-green-500/70 border border-slate-600/30" />
                                                            <div className="bg-green-500/70 border border-slate-600/30" />
                                                            <div className="bg-yellow-400/70 border border-slate-600/30" />
                                                            <div className="bg-green-500/70 border border-slate-600/30" />
                                                            <div className="bg-green-500/70 border border-slate-600/30" />
                                                            <div className="bg-green-500/70 border border-slate-600/30" />
                                                        </div>
                                                    </div>
                                                    {/* End caps */}
                                                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-4 h-16 bg-slate-500 rounded-l-full border border-slate-400" />
                                                    <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-16 bg-slate-500 rounded-r-full border border-slate-400" />
                                                </div>
                                                <div className="absolute bottom-2 left-2 text-xs text-slate-300 font-mono">V-101 Shell · 12 grid points</div>
                                                {/* Tooltip */}
                                                <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-lg shadow">
                                                    <div className="font-bold">t = 5.2mm</div>
                                                    <div className="text-red-200">Min: 6.1mm ⚠</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="bg-slate-700/50 rounded-lg p-2">
                                                <div className="text-slate-400 text-xs mb-1">Asset</div>
                                                <div className="text-white text-sm font-semibold">Vessel V-101</div>
                                                <div className="text-slate-400 text-xs">ASME VIII / API 510</div>
                                            </div>
                                            <div className="bg-slate-700/50 rounded-lg p-2">
                                                <div className="text-slate-400 text-xs mb-1">Min Wall</div>
                                                <div className="text-white text-sm font-semibold">6.1 mm</div>
                                                <div className="text-slate-400 text-xs">API 510 calc</div>
                                            </div>
                                            <div className="bg-red-900/40 rounded-lg p-2 border border-red-500/30">
                                                <div className="text-red-300 text-xs mb-1">⚠ Alert</div>
                                                <div className="text-red-200 text-xs font-semibold">2 readings below tmin</div>
                                                <div className="text-red-300 text-xs">Action required</div>
                                            </div>
                                            <div className="bg-slate-700/50 rounded-lg p-2">
                                                <div className="text-slate-400 text-xs mb-1">Remaining Life</div>
                                                <div className="text-yellow-300 text-sm font-semibold">4.2 years</div>
                                                <div className="text-slate-400 text-xs">0.18 mm/yr rate</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Color legend */}
                                    <div className="flex items-center gap-3 text-xs">
                                        <div className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-green-500" /><span className="text-slate-300">OK</span></div>
                                        <div className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-yellow-400" /><span className="text-slate-300">Monitor</span></div>
                                        <div className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-orange-500" /><span className="text-slate-300">Action</span></div>
                                        <div className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-red-600" /><span className="text-slate-300">Retirement</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-3 -right-3 bg-blue-500 text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-lg">
                                Live Demo Available
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-10 bg-white border-b">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-3xl font-bold text-blue-600 mb-1">6</div><div className="text-slate-600 text-sm">Asset Types Supported</div></div>
                        <div><div className="text-3xl font-bold text-blue-600 mb-1">8+</div><div className="text-slate-600 text-sm">NDT Data Formats</div></div>
                        <div><div className="text-3xl font-bold text-blue-600 mb-1">API 510/570/653</div><div className="text-slate-600 text-sm">Retirement Criteria Built In</div></div>
                        <div><div className="text-3xl font-bold text-blue-600 mb-1">Real-Time</div><div className="text-slate-600 text-sm">3D Color-Coded Visualization</div></div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="py-20 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            From asset dimensions to colour-coded 3D inspection model in four steps. No CAD expertise required.
                        </p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {howItWorks.map((step, i) => (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative"
                            >
                                <Card className="h-full border-t-4 border-blue-500 hover:shadow-lg transition">
                                    <CardHeader className="pb-3">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-4xl font-black text-blue-100">{step.step}</span>
                                            <step.icon className="w-7 h-7 text-blue-600" />
                                        </div>
                                        <CardTitle className="text-lg">{step.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                        <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                                        <p className="text-xs text-blue-600 italic border-t border-blue-100 pt-2">{step.detail}</p>
                                    </CardContent>
                                </Card>
                                {i < 3 && (
                                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                                        <ArrowRight className="w-6 h-6 text-blue-300" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Color Threshold Legend */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-5xl px-6">
                    <motion.div className="text-center mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="text-3xl font-bold mb-3">What the Colours Mean</h2>
                        <p className="text-slate-600">Colour thresholds are set against ASME/API retirement criteria for your specific asset and operating conditions.</p>
                    </motion.div>
                    <div className="grid md:grid-cols-4 gap-4">
                        {colorThresholds.map((t, i) => (
                            <motion.div
                                key={t.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-slate-50 rounded-xl overflow-hidden border"
                            >
                                <div className={`${t.color} h-3`} />
                                <div className="p-5">
                                    <div className="font-bold text-slate-800 mb-2">{t.label}</div>
                                    <p className="text-sm text-slate-600 leading-relaxed">{t.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Supported Asset Types */}
            <section id="assets" className="py-20 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Supported Asset Types</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">Six standard asset types with parametric model generation. Each type pre-loaded with relevant inspection codes and retirement criteria.</p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {assetTypes.map((asset, i) => (
                            <motion.div
                                key={asset.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                            >
                                <Card className="h-full hover:shadow-lg transition">
                                    <CardHeader className="pb-3">
                                        <CardTitle className="text-lg flex items-center gap-2">
                                            <Box className="w-5 h-5 text-blue-600" />
                                            {asset.name}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <p className="text-slate-600 text-sm leading-relaxed">{asset.description}</p>
                                        <div>
                                            <div className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Applicable Codes</div>
                                            <div className="flex flex-wrap gap-1">
                                                {asset.codes.map(c => (
                                                    <span key={c} className="bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded font-medium">{c}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">NDT Data Types</div>
                                            <div className="flex flex-wrap gap-1">
                                                {asset.ndtTypes.map(n => (
                                                    <span key={n} className="bg-slate-100 text-slate-600 text-xs px-2 py-0.5 rounded">{n}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section id="features" className="py-20 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Features</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">Built specifically for NDT inspectors and integrity engineers — not generic data visualisation tools adapted for inspection.</p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((f, i) => (
                            <motion.div
                                key={f.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06 }}
                            >
                                <Card className="h-full hover:shadow-lg transition group">
                                    <CardHeader className="pb-2">
                                        <div className="flex items-start justify-between mb-2">
                                            <f.icon className="w-8 h-8 text-blue-600 group-hover:scale-110 transition" />
                                            <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-medium">{f.highlight}</span>
                                        </div>
                                        <CardTitle className="text-base">{f.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-slate-600 text-sm leading-relaxed">{f.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container mx-auto max-w-4xl px-6">
                    <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="text-3xl font-bold mb-4">Traditional Reporting vs Digital Twin Reporting</h2>
                        <p className="text-slate-300">Why inspection teams that switch never go back to PDF tables.</p>
                    </motion.div>
                    <div className="rounded-xl overflow-hidden border border-slate-700">
                        <div className="grid grid-cols-2 bg-slate-800">
                            <div className="px-6 py-3 font-semibold text-slate-400 text-sm border-r border-slate-700">Traditional PDFs & Spreadsheets</div>
                            <div className="px-6 py-3 font-semibold text-blue-400 text-sm">Digital Twin Reporting</div>
                        </div>
                        {comparisonRows.map((row, i) => (
                            <div key={i} className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-slate-800/50' : 'bg-slate-800/30'}`}>
                                <div className="px-6 py-4 text-slate-400 text-sm border-r border-slate-700 flex items-center gap-2">
                                    <span className="text-red-400">✗</span> {row.traditional}
                                </div>
                                <div className="px-6 py-4 text-slate-200 text-sm flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" /> {row.digital}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="py-20 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Real-World Use Cases</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">How inspection teams use Digital Twin Reporting across oil & gas, petrochemical, and power generation.</p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {useCases.map((uc, i) => (
                            <motion.div
                                key={uc.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-slate-50 rounded-xl p-8 border"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <Target className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                    <h3 className="font-bold text-xl">{uc.title}</h3>
                                </div>
                                <p className="text-slate-600 leading-relaxed mb-4">{uc.description}</p>
                                <div className="bg-blue-50 rounded-lg px-4 py-3 border-l-4 border-blue-500">
                                    <span className="text-blue-700 font-semibold text-sm">ROI: {uc.roi}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integration with existing products */}
            <section className="py-16 bg-blue-50">
                <div className="container mx-auto max-w-5xl px-6">
                    <motion.div className="text-center mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="text-2xl font-bold mb-3">Part of the Atlantis NDT Platform</h2>
                        <p className="text-slate-600 max-w-xl mx-auto">Digital Twin Reporting integrates with all other Atlantis NDT products for a complete inspection management ecosystem.</p>
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Link to="/intelligent-reporting-software">
                            <Card className="h-full hover:shadow-lg transition group border-blue-200">
                                <CardHeader>
                                    <Database className="w-8 h-8 text-blue-600 mb-2 group-hover:scale-110 transition" />
                                    <CardTitle className="text-base">Intelligent Reporting Software</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-600 text-sm">Enterprise NDT data management, certification tracking, and audit-ready reporting workflows.</p>
                                    <div className="text-blue-600 text-sm mt-3 font-medium flex items-center gap-1">Learn more <ArrowRight className="w-4 h-4" /></div>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/ndt-connect-platform">
                            <Card className="h-full hover:shadow-lg transition group border-blue-200">
                                <CardHeader>
                                    <Globe className="w-8 h-8 text-blue-600 mb-2 group-hover:scale-110 transition" />
                                    <CardTitle className="text-base">NDT Connect Platform</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-600 text-sm">Cloud-based inspection management and reporting platform for NDT companies and freelance inspectors.</p>
                                    <div className="text-blue-600 text-sm mt-3 font-medium flex items-center gap-1">Learn more <ArrowRight className="w-4 h-4" /></div>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/consulting">
                            <Card className="h-full hover:shadow-lg transition group border-blue-200">
                                <CardHeader>
                                    <Shield className="w-8 h-8 text-blue-600 mb-2 group-hover:scale-110 transition" />
                                    <CardTitle className="text-base">Level III Consulting</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-600 text-sm">Our ASNT Level III consultants can configure the tool for your specific assets, codes, and reporting requirements.</p>
                                    <div className="text-blue-600 text-sm mt-3 font-medium flex items-center gap-1">Learn more <ArrowRight className="w-4 h-4" /></div>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="py-20 bg-white">
                <div className="container mx-auto max-w-3xl px-6">
                    <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-slate-600">Common questions about the Digital Twin NDT Reporting platform.</p>
                    </motion.div>
                    <div className="space-y-3">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.04 }}
                            >
                                <FAQItem faq={faq} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-[#0a1628] to-[#1a3a6e] text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <Zap className="w-12 h-12 text-blue-400 mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">See Your Asset in 3D — Live Demo</h2>
                        <p className="text-white/75 mb-8 text-lg max-w-2xl mx-auto">
                            Bring your asset type, dimensions, and a sample inspection dataset. Our team will build a live 3D model during the demo so you can see exactly how the tool works for your specific application.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="https://dt.atlantisndt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-10 py-4 rounded-lg font-semibold transition shadow-lg">
                                <Zap className="w-5 h-5" />
                                Try Now
                            </a>
                            <Link to="/contact" className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-10 py-4 rounded-lg font-semibold transition shadow-lg">
                                <Play className="w-5 h-5" />
                                Request Live Demo
                            </Link>
                            <Link to="/intelligent-reporting-software" className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white px-10 py-4 rounded-lg font-semibold hover:bg-white/10 transition">
                                <FileText className="w-5 h-5" />
                                Full Platform Overview
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
