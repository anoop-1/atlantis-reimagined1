import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import PillarHubNav from "@/components/PillarHubNav";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertTriangle, Layers, ArrowRight, Info } from "lucide-react";

/**
 * /consulting/rbi-program-design — INFORMATIONAL ONLY (owner decision 2026-10-07).
 * Atlantis NDT does not design RBI programmes or perform RBI / FFS work. This
 * page explains what an RBI study is and the NDT data it depends on; the only
 * offer is an NDT inspection quote. Keep the URL. Mirror any change in the
 * prerender entry for this path in scripts/prerender.mjs.
 */

const QUOTE_URL = "/contact?service=inspection&subject=NDT%20data%20for%20RBI";

export default function RbiProgramDesign() {
    const studyElements = [
        { title: "Damage-mechanism review", description: "The RBI team screens each item against the damage mechanisms described in API RP 571 for its material, temperature, pressure and process chemistry. The output is a list of credible mechanisms per item — thinning, cracking, metallurgical change — and it decides which NDT techniques can actually detect them." },
        { title: "Corrosion loops", description: "Equipment and piping that share a process environment and the same credible mechanisms are grouped into corrosion loops, so inspection findings on one item inform the others in the loop." },
        { title: "Probability of failure", description: "In the API RP 581 methodology, probability of failure is built from a generic failure frequency, damage factors for each active mechanism and a management-systems factor. Damage factors depend heavily on measured data — wall loss, corrosion rate and the effectiveness of past inspections." },
        { title: "Consequence of failure", description: "Consequence models consider the fluid, release size, detection and isolation, and safety, environmental and financial impact. This side of the study is process-engineering work and does not depend on NDT data." },
        { title: "Risk ranking and inspection plan", description: "Risk is plotted on a matrix and the plan sets method, coverage and timing for each item so that risk stays below the owner's target. The plan then becomes the scope that NDT crews execute." },
    ];

    const ndtData = [
        { title: "Thickness readings tied to CMLs", description: "Repeatable readings at identified condition monitoring locations, with dates, so short- and long-term corrosion rates can be calculated. Readings that cannot be tied back to a CML are of little use to a rate calculation." },
        { title: "Documented inspection effectiveness", description: "API RP 581 credits past inspections by effectiveness category. That credit depends on what was done — technique, coverage, surface preparation and access — so the report must record those facts, not only the result." },
        { title: "Technique matched to the mechanism", description: "Spot UT finds general thinning but misses localised pitting and cracking. Wet H2S cracking calls for wet fluorescent magnetic particle (WFMT) or equivalent surface techniques; localised corrosion calls for scanning or mapping methods such as automated UT or phased array." },
        { title: "Flaw characterisation and sizing", description: "Where cracks or local thin areas are found, the RBI team needs location, length, depth and orientation, measured with a qualified procedure, to update damage factors or hand off to an engineering assessment by the owner." },
        { title: "Qualified procedures and personnel", description: "Results carry weight only if the procedure was approved and the technician was qualified under the employer's written practice — for example ASNT SNT-TC-1A, with an ASNT NDT Level III approving procedures." },
        { title: "Data in a usable format", description: "Structured, consistent reporting — item tag, CML, reading, date, technique, technician — lets the owner import results into the RBI software instead of retyping them from PDFs." },
    ];

    const mechanismTable = [
        { mechanism: "General thinning (CO2, sulfidation, naphthenic acid)", techniques: "UT thickness at CMLs; UT scanning on high-rate areas", data: "Wall readings and dates for corrosion rates" },
        { mechanism: "Localised corrosion and pitting (CUI, under-deposit, MIC)", techniques: "Automated UT or PAUT corrosion mapping, profile RT, guided-wave screening followed by UT", data: "Minimum remaining wall and extent of the affected area" },
        { mechanism: "Wet H2S cracking (SSC, HIC, SOHIC)", techniques: "WFMT on internal welds, angle-beam UT or PAUT for HIC and SOHIC", data: "Crack locations, lengths and depths; coverage achieved" },
        { mechanism: "Chloride stress corrosion cracking (austenitic steels)", techniques: "PT, eddy current on tubing, UT or PAUT where access allows", data: "Indication locations and sizes; areas examined" },
        { mechanism: "Erosion and erosion-corrosion", techniques: "UT grids or mapping at elbows, tees and reducers", data: "Thinning pattern and rate at high-velocity points" },
    ];

    const faqs = [
        { q: "What is the difference between API 580 and API 581?", a: "API RP 580 sets out what a risk-based inspection programme must contain — the elements, documentation, personnel and reassessment requirements. API RP 581 provides a quantitative methodology, with the equations, damage factors and consequence models used to calculate risk. Many programmes cite API 580 for the framework and API 581 for the calculation." },
        { q: "Does Atlantis NDT design RBI programmes or perform RBI or FFS assessments?", a: "No. Atlantis NDT does not offer RBI or fitness-for-service work. The RBI study is carried out by the owner's integrity team or a specialist RBI consultant they appoint. Atlantis provides NDT inspection and ASNT Level III services that produce the inspection data the study relies on." },
        { q: "Can RBI change the inspection intervals in API 510, 570 or 653?", a: "Each of those codes allows inspection intervals to be set by an RBI assessment that meets API RP 580, subject to the limits and conditions written in that code. The owner and the authorized inspector remain responsible for the intervals." },
        { q: "What NDT data does an RBI study need most?", a: "Dated thickness readings tied to condition monitoring locations, a record of what each inspection actually covered and with which technique, and sized flaw data where cracking or local thinning is found. Without those, the study falls back on conservative assumptions." },
        { q: "Why does the inspection technique matter to the risk result?", a: "API RP 581 credits each past inspection according to how effective it was against the mechanism in question. A spot UT survey earns little credit against pitting or cracking, so a plan that relies on it may keep risk high even when the equipment is in good condition." },
        { q: "How often is an RBI assessment updated?", a: "API RP 580 calls for reassessment when process conditions, damage mechanisms or equipment change significantly, after major repairs, and at an interval the owner defines. New inspection data is the most common trigger for updating damage factors." },
    ];

    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "RBI Programs Explained — the NDT Data an RBI Study Needs",
                "description": "What a risk-based inspection programme under API 580 and API 581 contains, and the NDT inspection data an RBI study depends on.",
                "url": "https://atlantisndt.com/consulting/rbi-program-design",
                "publisher": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqs.map((f) => ({
                    "@type": "Question",
                    "name": f.q,
                    "acceptedAnswer": { "@type": "Answer", "text": f.a },
                })),
            },
        ],
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <PillarHubNav active="consulting" />
            <SEOHead
                title="RBI Programs Explained — the NDT Data an RBI Study Needs | Atlantis NDT"
                description="How a risk-based inspection programme under API 580/581 works, and the NDT data an RBI study needs: CML thickness readings, inspection effectiveness, flaw sizing and qualified procedures."
                keywords="risk-based inspection explained, API 580, API 581, RBI inspection data, inspection effectiveness, CML thickness data, damage mechanisms API 571, NDT for RBI"
                canonical="https://atlantisndt.com/consulting/rbi-program-design"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* Hero */}
            <section className="bg-gradient-to-br from-slate-800 to-slate-950 text-white pt-24 pb-16">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
                        <div className="inline-block px-3 py-1 mb-4 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-200 text-sm font-medium">
                            API 580 + API 581 — explained
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">RBI Programs Explained — the NDT Data an RBI Study Needs</h1>
                        <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed">
                            A risk-based inspection (RBI) programme replaces a fixed inspection calendar with plans ranked by risk. This page explains how an RBI study is built under API RP 580 and API RP 581, and which NDT data it depends on.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to={QUOTE_URL}>
                                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
                                    Request an NDT inspection quote <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <Link to="/consulting">
                                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                                    Back to Consulting Hub
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Scope note */}
            <section className="py-10 bg-amber-50 border-b border-amber-200">
                <div className="container mx-auto px-6 max-w-5xl flex gap-4 items-start">
                    <Info className="text-amber-700 h-6 w-6 flex-shrink-0 mt-1" />
                    <p className="text-slate-800 leading-relaxed">
                        <strong>What Atlantis does and does not do.</strong> Atlantis NDT does not design RBI programmes or carry out RBI or fitness-for-service assessments. Those are done by the owner's integrity team or a specialist consultant they appoint. Atlantis provides NDT inspection and ASNT Level III services that produce the inspection data an RBI study uses.
                    </p>
                </div>
            </section>

            {/* Intro */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900">From fixed intervals to risk-ranked inspection</h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        Many plants still inspect on a calendar: an external examination every few years and an internal one at a fixed longer interval, whatever the damage mechanisms and consequences. That can mean inspecting low-risk equipment more than it needs and high-risk equipment less than it should.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        An RBI programme set up under <strong>API RP 580</strong>, often using the quantitative methodology in <strong>API RP 581</strong>, gives each item an inspection plan based on its probability and consequence of failure. The damage mechanisms come from <strong>API RP 571</strong>, and credit for past inspections depends on how effective those inspections were.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        The quality of an RBI result depends on the quality of its inputs. On the probability side, most of those inputs are NDT results.
                    </p>
                </div>
            </section>

            {/* Study elements */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl font-bold mb-10 text-slate-900 text-center">What an RBI study contains</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {studyElements.map((d) => (
                            <Card key={d.title} className="border-l-4 border-l-slate-500">
                                <CardHeader>
                                    <CardTitle className="flex items-center text-lg">
                                        <Layers className="text-slate-600 mr-3 h-5 w-5 flex-shrink-0" />
                                        {d.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-700">{d.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* NDT data */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl font-bold mb-10 text-slate-900 text-center">The NDT data an RBI study needs</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {ndtData.map((d) => (
                            <Card key={d.title} className="border-l-4 border-l-amber-500">
                                <CardHeader>
                                    <CardTitle className="flex items-center text-lg">
                                        <CheckCircle className="text-amber-600 mr-3 h-5 w-5 flex-shrink-0" />
                                        {d.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-700">{d.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mechanism table */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900 text-center">Damage mechanisms and the NDT that finds them</h2>
                    <div className="overflow-x-auto rounded-lg border border-slate-300 bg-white">
                        <table className="w-full border-collapse text-sm">
                            <caption className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-600 border-b border-slate-300">
                                Common mechanisms, the techniques usually applied, and the data the RBI team needs back
                            </caption>
                            <thead>
                                <tr className="bg-slate-100">
                                    <th scope="col" className="px-4 py-2.5 text-left font-semibold">Mechanism</th>
                                    <th scope="col" className="px-4 py-2.5 text-left font-semibold">Typical NDT techniques</th>
                                    <th scope="col" className="px-4 py-2.5 text-left font-semibold">Data the RBI study uses</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mechanismTable.map((r) => (
                                    <tr key={r.mechanism}>
                                        <th scope="row" className="px-4 py-2.5 text-left font-medium border-t border-slate-200">{r.mechanism}</th>
                                        <td className="px-4 py-2.5 border-t border-slate-200">{r.techniques}</td>
                                        <td className="px-4 py-2.5 border-t border-slate-200">{r.data}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-slate-600 text-sm mt-4">
                        Related: <Link to="/api-inspection/wfmt-acfm-crack-detection-sour-service" className="text-blue-700 underline">WFMT and ACFM crack detection in sour service</Link>.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-10 text-slate-900 text-center">Frequently asked questions</h2>
                    <div className="space-y-4">
                        {faqs.map((f) => (
                            <Card key={f.q}>
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-start gap-3">
                                        <AlertTriangle className="text-amber-600 h-5 w-5 flex-shrink-0 mt-1" />
                                        {f.q}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-700 leading-relaxed">{f.a}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-br from-slate-800 to-slate-950 text-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-6">Need inspection data for an RBI study?</h2>
                    <p className="text-lg text-slate-200 mb-8">
                        Atlantis NDT carries out the NDT inspection — thickness surveys at CMLs, corrosion mapping, WFMT and other crack-detection techniques — and reports it in a format your RBI team can use. Affordable. Accessible. Fully customizable. Quote on request.
                    </p>
                    <Link to={QUOTE_URL}>
                        <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
                            Request an NDT inspection quote <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
