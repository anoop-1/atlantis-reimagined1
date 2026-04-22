import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Box, Workflow } from "lucide-react";

const comparison = [
    { dim: "Data Flow",           model: "None. Static mesh or CAD file exported once.", twin: "Bidirectional. Telemetry in, decisions out, written back as authoritative records." },
    { dim: "Time Dimension",      model: "A single frozen moment.",                       twin: "Continuous — the twin evolves as the asset degrades." },
    { dim: "Primary Use Case",    model: "Clash detection, onboarding, visualisation.",    twin: "Condition monitoring, predictive maintenance, FFS, RBI." },
    { dim: "Sensor Integration",  model: "None.",                                         twin: "PMUT, ECA, AE, strain gauges, DCS tags." },
    { dim: "Inspection Records",  model: "Not linked.",                                   twin: "Every reading pinned to geometry with provenance." },
    { dim: "Analytics",           model: "None.",                                         twin: "Damage-mechanism engines, wall-loss forecasting, probability of failure." },
    { dim: "Decision Support",    model: "Manual interpretation only.",                    twin: "Automated next-inspection dates, repair prioritisation, work-order triggers." },
    { dim: "Tech Stack",          model: "CAD (Revit, SolidWorks) or mesh (OBJ, FBX).",    twin: "3D engine + time-series DB + RDBMS + blob store + analytics + API layer." },
    { dim: "Refresh Cadence",     model: "Re-scan every turnaround (3-5 yr).",             twin: "Seconds to hours, depending on signal." },
    { dim: "Governance",          model: "File-versioning only.",                         twin: "Full provenance: who, when, which procedure, which code revision." },
    { dim: "ROI Profile",         model: "One-time: faster training and clash avoidance.", twin: "Recurring: downtime avoided, inspection hours saved, asset-life extended." },
    { dim: "Typical Cost",        model: "$5K-$50K per asset (scan + model).",             twin: "$50K-$500K per asset (scan + sensors + platform + analytics)." },
    { dim: "Who Owns It",         model: "Engineering or CAD team.",                       twin: "Integrity + Reliability, with IT/OT backbone." }
];

export default function DigitalTwinVs3dModel() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Digital Twin vs 3D Model in NDT: 13-Dimension Comparison (2026)",
        "description": "Side-by-side comparison of static 3D models and digital twins across 13 dimensions: data flow, analytics, ROI, tech stack.",
        "datePublished": "2026-04-22",
        "author": { "@type": "Organization", "name": "Atlantis NDT Editorial Team" },
        "publisher": { "@id": "https://atlantisndt.com/#organization" },
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/digital-twin-vs-3d-model-ndt" }
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="Digital Twin vs 3D Model in NDT: 13-Point 2026 Comparison"
                description="Digital twin vs 3D model in NDT, compared across 13 dimensions: data flow, tech stack, ROI, governance, cost. Which does your asset integrity program need?"
                canonical="https://atlantisndt.com/digital-twin-vs-3d-model-ndt"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            <section className="bg-gradient-to-br from-[#004aad] to-blue-800 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="flex items-center gap-2 text-blue-200 mb-4"><Box className="w-5 h-5" /><span>Comparison · 2026</span></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Twin vs 3D Model in NDT</h1>
                    <p className="text-xl text-blue-100 max-w-3xl">
                        The terms get used interchangeably in vendor marketing. They are not the same thing. This page is a
                        13-dimension, side-by-side comparison of static 3D models and true digital twins — and a straight
                        answer to which one your integrity program actually needs.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-4xl px-6 prose prose-slate prose-lg">
                    <h2 className="text-3xl font-bold mb-4">The Short Version</h2>
                    <p className="text-slate-700">
                        A 3D model is geometry. A digital twin is geometry <em>plus</em> a live data layer <em>plus</em>
                        analytics <em>plus</em> bidirectional coupling to the physical asset. You can deliver a 3D model in a
                        week; you cannot deliver a digital twin in less than a quarter. The cost ratio is roughly 10x. The
                        ROI profiles are not comparable because the outputs are not comparable: a 3D model makes humans
                        faster; a digital twin makes decisions on their behalf.
                    </p>
                    <p className="text-slate-700">
                        If someone is selling you a "digital twin" that is really just a rendered mesh with a sidebar of
                        PDFs, you have bought a 3D model with better branding. The table below is the test.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4"><Workflow className="inline w-7 h-7 mr-2 text-[#004aad]" />Side-by-Side: 13 Dimensions</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-lg shadow-sm text-sm border border-slate-200">
                            <thead>
                                <tr className="bg-[#004aad] text-white">
                                    <th className="px-4 py-3 text-left font-semibold">Dimension</th>
                                    <th className="px-4 py-3 text-left font-semibold">Static 3D Model</th>
                                    <th className="px-4 py-3 text-left font-semibold">Digital Twin</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparison.map((row, i) => (
                                    <tr key={row.dim} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                        <td className="px-4 py-3 font-medium text-slate-900">{row.dim}</td>
                                        <td className="px-4 py-3 text-slate-700">{row.model}</td>
                                        <td className="px-4 py-3 text-slate-700">{row.twin}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-4xl px-6 prose prose-slate prose-lg">
                    <h2 className="text-3xl font-bold mb-4">Which Do You Actually Need?</h2>
                    <p className="text-slate-700 mb-4">
                        For onboarding new hires, training, or clash detection on a brownfield tie-in project, a good 3D model
                        is sufficient. For owner-operators running API 510/570/580 programs across 50+ critical assets, a
                        digital twin is the answer — the RBI workflow demands the live data and provenance that a static
                        model cannot provide. The middle ground — a static twin (Stage 1 in the <Link to="/digital-twins-ndt-guide-2026" className="text-[#004aad] font-semibold">maturity model</Link>) — is where most programs should start: model the asset, pin the inspection history,
                        and add sensors as budget allows.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Related Resources</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <Link to="/digital-twins-ndt-guide-2026" className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition"><Card><CardHeader><CardTitle>2026 Digital Twins Pillar Guide</CardTitle></CardHeader><CardContent className="text-sm text-slate-600">Full 3,000-word deep dive on the 5-stage maturity model.</CardContent></Card></Link>
                        <Link to="/digital-twin-readiness-quiz" className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition"><Card><CardHeader><CardTitle>10-Question Readiness Quiz</CardTitle></CardHeader><CardContent className="text-sm text-slate-600">Where on the maturity curve is your program today?</CardContent></Card></Link>
                    </div>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
