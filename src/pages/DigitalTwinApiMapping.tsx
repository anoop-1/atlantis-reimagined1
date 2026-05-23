import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Scale } from "lucide-react";

type Row = { clause: string; requirement: string; twinSatisfies: string };

const api510: Row[] = [
    { clause: "§5.5 Thickness-Measurement Locations (CMLs)", requirement: "Record thickness at designated CMLs with traceability to procedure and technician.", twinSatisfies: "CMLs pinned to 3D geometry; each reading carries personnel cert, procedure rev, and timestamp." },
    { clause: "§5.6 Corrosion Rate Determination", requirement: "Calculate short-term and long-term corrosion rates per CML.", twinSatisfies: "Time-series store computes both rates continuously; surfaces in twin per-CML chart." },
    { clause: "§6.3 Risk-Based Inspection (references API 580)", requirement: "Use RBI to establish inspection intervals.", twinSatisfies: "Predictive twin re-scores risk on every reading; drives next-inspection date." },
    { clause: "§7.2 On-Stream Inspection", requirement: "Permit on-stream monitoring in lieu of internal where appropriate.", twinSatisfies: "PMUT + AE telemetry provides the continuous evidence on-stream inspection requires." },
    { clause: "§8.1 Records Retention", requirement: "Maintain permanent records of thickness data, repairs, and alterations.", twinSatisfies: "Twin acts as the canonical record store with provenance and version history." }
];

const api570: Row[] = [
    { clause: "§6.3 Piping Circuits", requirement: "Group piping into circuits with uniform service and damage mechanism.", twinSatisfies: "Twin's asset hierarchy models unit → circuit → line → CML; drives RBI circuit-level analysis." },
    { clause: "§6.4 CML Selection", requirement: "Select CMLs based on damage mechanism and consequence.", twinSatisfies: "Twin exposes damage-mechanism heatmap; Level III tags CMLs against live risk ranking." },
    { clause: "§7.1.2 Thickness Monitoring", requirement: "Measure and record thickness at each CML per defined interval.", twinSatisfies: "PMUT sensors feed continuous thickness; manual campaigns reconciled to twin." },
    { clause: "§7.6 On-Stream Inspection", requirement: "Allow substitution of on-stream techniques where justified.", twinSatisfies: "Live telemetry provides continuous justification evidence." },
    { clause: "§8 Inspection Intervals", requirement: "Set intervals per class and damage mechanism; extend via RBI.", twinSatisfies: "Predictive twin outputs the RBI-compliant interval with documented reasoning." }
];

const api580: Row[] = [
    { clause: "§4 Planning the RBI Assessment", requirement: "Define scope, data needs, team, and RBI drivers.", twinSatisfies: "Twin centralises data needs and becomes the RBI team's shared workspace." },
    { clause: "§7 Data & Information Collection", requirement: "Assemble design, process, inspection, and damage data.", twinSatisfies: "Twin is the canonical store for all four data classes with provenance." },
    { clause: "§9 Probability of Failure", requirement: "Estimate PoF from damage mechanisms and current condition.", twinSatisfies: "Live condition data feeds probabilistic models; twin outputs time-varying PoF." },
    { clause: "§11 Risk Management", requirement: "Use risk to prioritise inspection, maintenance, mitigation.", twinSatisfies: "Twin re-ranks asset risk whenever condition data changes; drives work-order creation." },
    { clause: "§14 Reassessment & Updating", requirement: "Update RBI on schedule or when significant change occurs.", twinSatisfies: "Twin continuously reassesses; formal re-assessment becomes record-keeping, not recomputation." }
];

const api581: Row[] = [
    { clause: "Part 2 §2 Probability of Failure Methodology", requirement: "Quantitative PoF per damage mechanism per component.", twinSatisfies: "Twin stores per-component susceptibility factors and drives the quantitative model." },
    { clause: "Part 2 §3 Consequence of Failure", requirement: "Quantitative CoF in financial and safety units.", twinSatisfies: "Twin links asset to process inventory, toxicity, and location data to compute CoF." },
    { clause: "Part 2 Annex 2.A Thinning", requirement: "Compute thinning damage factor from CML thickness data.", twinSatisfies: "Twin's time-series engine computes the damage factor on every new reading." },
    { clause: "Part 2 Annex 2.B Stress Corrosion Cracking", requirement: "Compute SCC damage factor from susceptibility and inspection effectiveness.", twinSatisfies: "Twin captures inspection coverage and effectiveness, feeding the SCC model directly." }
];

const api579: Row[] = [
    { clause: "Part 4 General Metal Loss", requirement: "Level 1/2/3 assessment for general wall loss.", twinSatisfies: "Twin supplies the thickness grid and statistical inputs Level 2/3 requires." },
    { clause: "Part 5 Local Metal Loss", requirement: "Level 1/2/3 assessment for local thinning.", twinSatisfies: "Twin's georeferenced CMLs and C-scan imports feed Level 2 critical-thickness profiles." },
    { clause: "Part 9 Crack-Like Flaws", requirement: "Failure Assessment Diagram (FAD) Level 2/3 assessment.", twinSatisfies: "Twin captures crack size from ECA/PAUT; couples to stress analysis for FAD inputs." },
    { clause: "Part 10 Component Operating in the Creep Range", requirement: "Remaining-life via creep-strain or stress-rupture methods.", twinSatisfies: "Twin's DCS history and strain-gauge telemetry provide the time-at-temperature and strain data creep assessment demands." }
];

const blocks = [
    { code: "API 510", title: "Pressure Vessel Inspection Code", rows: api510 },
    { code: "API 570", title: "Piping Inspection Code", rows: api570 },
    { code: "API 580", title: "Risk-Based Inspection (Recommended Practice)", rows: api580 },
    { code: "API 581", title: "Risk-Based Inspection Methodology (Quantitative)", rows: api581 },
    { code: "API 579-1 / ASME FFS-1", title: "Fitness-For-Service", rows: api579 }
];

export default function DigitalTwinApiMapping() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Digital Twin NDT: API 510/570/580/581/579 Clause Mapping 2026",
        "datePublished": "2026-04-22",
        "author": { "@type": "Organization", "name": "Atlantis NDT Editorial Team" },
        "publisher": { "@id": "https://atlantisndt.com/#organization" },
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/digital-twin-api-510-570-580-mapping" }
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="Digital Twin API 510/570/580/579 Mapping 2026 — 5 Codes"
                description="2026 clause-by-clause map: how a digital twin satisfies API 510, 570, 580, 581, 579-1 requirements. For integrity engineers and Level IIIs. Free PDF inside."
                canonical="https://atlantisndt.com/digital-twin-api-510-570-580-mapping"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            <section className="bg-gradient-to-br from-[#004aad] to-blue-800 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="flex items-center gap-2 text-blue-200 mb-4"><BookOpen className="w-5 h-5" /><span>Regulatory Mapping · 2026</span></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Twin: API 510 / 570 / 580 / 581 / 579 Mapping</h1>
                    <p className="text-xl text-blue-100 max-w-3xl">
                        Codes do not mandate digital twins — but nearly every clause on CMLs, on-stream monitoring, RBI, and
                        fitness-for-service is a clause a properly-built twin directly satisfies. Below: clause-by-clause,
                        five codes.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-4xl px-6 prose prose-slate prose-lg">
                    <h2 className="text-3xl font-bold mb-4">The credibility play</h2>
                    <p className="text-slate-700 mb-4">
                        Procurement teams and insurance underwriters increasingly ask "which code clauses does your digital
                        twin evidence?" The answer has historically been hand-wavey. This page is our attempt to make it
                        unambiguous for the five codes that matter most to pressure-equipment integrity: API 510 (vessels),
                        API 570 (piping), API 580 (qualitative RBI), API 581 (quantitative RBI), and API 579-1 / ASME
                        FFS-1 (fitness-for-service). Each table lists the clause, the requirement in plain language, and
                        exactly which twin capability satisfies it.
                    </p>
                    <p className="text-slate-700">
                        Nothing here replaces formal code adoption and auditor review. It does, however, give integrity
                        engineers a defensible crosswalk when building the business case, answering an auditor's "show me
                        the evidence" question, or when the insurance broker's loss-control engineer asks what the twin is
                        for. Treat this as a working map, not a certification.
                    </p>
                </div>
            </section>

            {blocks.map(b => (
                <section key={b.code} className="py-12 bg-slate-50 odd:bg-white">
                    <div className="container mx-auto max-w-6xl px-6">
                        <h2 className="text-2xl font-bold mb-2"><Scale className="inline w-6 h-6 mr-2 text-[#004aad]" />{b.code} — {b.title}</h2>
                        <div className="overflow-x-auto mt-4">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm border border-slate-200">
                                <thead>
                                    <tr className="bg-[#004aad] text-white">
                                        <th className="px-4 py-3 text-left font-semibold w-1/4">Clause</th>
                                        <th className="px-4 py-3 text-left font-semibold w-1/3">Requirement</th>
                                        <th className="px-4 py-3 text-left font-semibold">How a Digital Twin Satisfies It</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {b.rows.map((r, i) => (
                                        <tr key={r.clause} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                            <td className="px-4 py-3 font-medium text-slate-900">{r.clause}</td>
                                            <td className="px-4 py-3 text-slate-700">{r.requirement}</td>
                                            <td className="px-4 py-3 text-slate-700">{r.twinSatisfies}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            ))}

            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-4xl px-6 prose prose-slate prose-lg">
                    <h2 className="text-3xl font-bold mb-4">Cross-references that accelerate audits</h2>
                    <p className="text-slate-700 mb-4">
                        The codes reference one another more than casual readers notice. API 510 §6.3 defers to API 580 for
                        RBI methodology; API 580 defers to API 581 for quantitative implementation; API 581 in turn
                        consumes thickness and damage data that API 510 §5.5 mandates. The same crosswalk applies to piping
                        via API 570. When an auditor asks how your inspection interval of 10 years on a Class 1 vessel is
                        justified, the chain is: API 510 §6.3 → API 580 Part 11 → API 581 Part 2 §2 (thinning damage factor)
                        → twin's thickness history and statistical wall-loss model. A twin shortens that chain from days of
                        PDF-hunting to a single screen.
                    </p>
                    <p className="text-slate-700 mb-4">
                        For fitness-for-service, API 579-1 Level 2 assessments consume thickness-grid data that is tedious
                        to assemble manually from spreadsheets. A twin-sourced Level 2 assessment cuts preparation time 60-80%
                        and gives the assessor confidence in the data provenance — a non-trivial concern when the output
                        drives a run/repair/replace decision worth millions.
                    </p>
                    <p className="text-slate-700">
                        The regulatory and SEO play here are the same: a twin that maps cleanly to the codes becomes easier
                        to defend in audit, easier to sell internally, and easier to price against competitors whose
                        mapping is vague. If your prospective vendor cannot walk you through a table like these, they are
                        selling a 3D model. Compare the options on our <Link to="/digital-twin-vendor-comparison" className="text-[#004aad] font-semibold">vendor matrix</Link>.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-4xl px-6 text-center">
                    <div className="grid sm:grid-cols-3 gap-4">
                        <Link to="/digital-twins-ndt-guide-2026" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-[#004aad] transition">Pillar Guide</Link>
                        <Link to="/digital-twin-roi-calculator" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-[#004aad] transition">ROI Calculator</Link>
                        <Link to="/digital-twin-vendor-comparison" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-[#004aad] transition">Vendor Matrix</Link>
                    </div>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
