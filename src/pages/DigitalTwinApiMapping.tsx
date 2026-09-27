import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TableOfContents from "@/components/TableOfContents";
import RelatedGuidesBlock from "@/components/RelatedGuidesBlock";
import { BookOpen, Scale } from "lucide-react";

type Row = { clause: string; requirement: string; twinSatisfies: string };

const api510: Row[] = [
    { clause: "§5.5 Thickness-Measurement Locations (CMLs)", requirement: "Record thickness at designated CMLs with traceability to procedure and technician.", twinSatisfies: "CMLs pinned to 3D geometry; each reading carries personnel cert, procedure rev, and timestamp." },
    { clause: "§5.6 Corrosion Rate Determination", requirement: "Calculate short-term and long-term corrosion rates per CML.", twinSatisfies: "Time-series store computes both rates continuously; surfaces in twin per-CML chart." },
    { clause: "§6.3 Inspection Intervals (RBI option references API 580)", requirement: "Set inspection intervals by half remaining life or, where the owner has an RBI programme, by that assessment.", twinSatisfies: "Twin trends corrosion rate and remaining life per CML and flags locations approaching half-life; any RBI assessment itself is the owner's, performed outside the twin." },
    { clause: "§7.2 On-Stream Inspection", requirement: "Permit on-stream monitoring in lieu of internal where appropriate.", twinSatisfies: "PMUT + AE telemetry provides the continuous evidence on-stream inspection requires." },
    { clause: "§8.1 Records Retention", requirement: "Maintain permanent records of thickness data, repairs, and alterations.", twinSatisfies: "Twin acts as the canonical record store with provenance and version history." }
];

const api570: Row[] = [
    { clause: "§6.3 Piping Circuits", requirement: "Group piping into circuits with uniform service and damage mechanism.", twinSatisfies: "Twin's asset hierarchy models unit → circuit → line → CML; thickness and corrosion-rate trends roll up per circuit." },
    { clause: "§6.4 CML Selection", requirement: "Select CMLs based on damage mechanism and consequence.", twinSatisfies: "Twin exposes a damage and indication map on the 3D model; Level III tags CMLs against the observed damage history." },
    { clause: "§7.1.2 Thickness Monitoring", requirement: "Measure and record thickness at each CML per defined interval.", twinSatisfies: "PMUT sensors feed continuous thickness; manual campaigns reconciled to twin." },
    { clause: "§7.6 On-Stream Inspection", requirement: "Allow substitution of on-stream techniques where justified.", twinSatisfies: "Live telemetry provides continuous justification evidence." },
    { clause: "§8 Inspection Intervals", requirement: "Set intervals per piping class and remaining life.", twinSatisfies: "Twin projects remaining life from measured corrosion rates and shows the next-inspection due date on a colour-coded condition map." }
];

const api653: Row[] = [
    { clause: "§4.3 Tank Shell Evaluation", requirement: "Evaluate shell thickness against minimum acceptable thickness.", twinSatisfies: "Shell UT readings pinned to the 3D tank model; thickness against minimum shown as a colour-coded condition map." },
    { clause: "§4.4 Tank Bottom Evaluation", requirement: "Assess bottom-plate corrosion and projected remaining thickness.", twinSatisfies: "MFL floor-scan and UT prove-up data mapped plate-by-plate; corrosion-rate and remaining-life trends per plate." },
    { clause: "§6.3 External Inspection & UT Thickness", requirement: "Perform external inspections and UT thickness measurements at set intervals.", twinSatisfies: "Inspection history for every shell course kept on the twin, with due dates tracked per location." },
    { clause: "§6.4 Internal Inspection", requirement: "Perform internal inspections to assess bottom condition.", twinSatisfies: "Internal inspection findings and indications mapped to the bottom layout; automated API 653 report output." }
];

const blocks = [
    { code: "API 510", title: "Pressure Vessel Inspection Code", rows: api510 },
    { code: "API 570", title: "Piping Inspection Code", rows: api570 },
    { code: "API 653", title: "Tank Inspection, Repair, Alteration, and Reconstruction", rows: api653 }
];

export default function DigitalTwinApiMapping() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Digital Twin NDT: API 510/570/653 Clause Mapping 2026",
        "datePublished": "2026-04-22",
        "author": { "@type": "Organization", "name": "Atlantis NDT Editorial Team" },
        "publisher": { "@id": "https://atlantisndt.com/#organization" },
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/digital-twin-api-510-570-580-mapping" }
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="Digital Twin API 510/570/653 Mapping 2026 — 3 Codes"
                description="2026 clause-by-clause map: how a digital twin supports API 510, 570 and 653 requirements — CML thickness, corrosion rate, remaining life, records. For integrity engineers and Level IIIs."
                canonical="https://atlantisndt.com/digital-twin-api-510-570-580-mapping"
                structuredData={structuredData}
            />
                  <TableOfContents items={[{ id: "overview", label: "Digital Twin API Mapping Overview" }, { id: "mapping", label: "API Mapping" }, { id: "faq", label: "FAQ" }]} />
      <Breadcrumbs />

            <section className="bg-gradient-to-br from-[#004aad] to-blue-800 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="flex items-center gap-2 text-blue-200 mb-4"><BookOpen className="w-5 h-5" /><span>Regulatory Mapping · 2026</span></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Twin: API 510 / 570 / 653 Mapping</h1>
                    <p className="text-xl text-blue-100 max-w-3xl">
                        Codes do not mandate digital twins — but nearly every clause on CMLs, corrosion rates, remaining life,
                        and inspection records is a clause a properly-built twin directly supports. Below: clause-by-clause,
                        three codes.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-4xl px-6 prose prose-slate prose-lg">
                    <h2 className="text-3xl font-bold mb-4">The credibility play</h2>
                    <p className="text-slate-700 mb-4">
                        Procurement teams and insurance underwriters increasingly ask "which code clauses does your digital
                        twin evidence?" The answer has historically been hand-wavey. This page is our attempt to make it
                        unambiguous for the three in-service inspection codes that matter most to fixed-equipment integrity:
                        API 510 (vessels), API 570 (piping), and API 653 (storage tanks). Each table lists the clause, the
                        requirement in plain language, and exactly which twin capability supports it.
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
                        The codes reference one another more than casual readers notice. API 510 and API 570 both tie
                        inspection intervals to remaining life calculated from measured corrosion rates, and both allow an
                        owner to set intervals through a risk-based inspection programme under API 580 instead. Either way,
                        the underlying evidence is the same: CML thickness history and the corrosion rates derived from it.
                        When an auditor asks how an inspection interval is justified, a twin shortens the hunt for that
                        thickness and corrosion-rate history from days of PDF-hunting to a single screen. The RBI assessment
                        itself, where an owner uses one, remains the owner's own programme.
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
        <RelatedGuidesBlock links={[
              {
                    "title": "Digital Twin Platform Hub",
                    "href": "/digital-twins",
                    "description": "Atlantis DT platform features",
                    "icon": "dt"
              },
              {
                    "title": "Digital Twin ROI Calculator",
                    "href": "/digital-twin-roi-calculator",
                    "description": "Worked examples",
                    "icon": "dt"
              },
              {
                    "title": "Digital Twins NDT Guide 2026",
                    "href": "/digital-twins-ndt-guide-2026",
                    "description": "Implementation roadmap",
                    "icon": "blog"
              },
              {
                    "title": "API 510 / 570 / 653 Inspector Services",
                    "href": "/consulting/api-510-pressure-vessel-inspector-services",
                    "description": "API code consulting",
                    "icon": "consulting"
              },
              {
                    "title": "Atlantis NDT ERP Hub",
                    "href": "/erp",
                    "description": "ERP + DT integration",
                    "icon": "erp"
              },
              {
                    "title": "ASNT Level III Consulting",
                    "href": "/consulting/asnt-level-iii-consulting-services",
                    "description": "Senior technical authority",
                    "icon": "consulting"
              }
        ]} />

        <ContactDetails />
        </div>
    );
}
