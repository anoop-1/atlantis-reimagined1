import { Navigation } from "@/components/Navigation";
import CompetitorDeepDive from "@/components/CompetitorDeepDive";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import TableOfContents from "@/components/TableOfContents";
import RelatedGuidesBlock from "@/components/RelatedGuidesBlock";
const compareRows = [
    { factor: "Pricing model", atlantis: "Affordable SaaS — quote on request, fully customizable", competitor: "Per-tag licensing — typically $150K–$1.2M/yr depending on tag count" },
    { factor: "Deployment options", atlantis: "Cloud, on-prem, hybrid, air-gapped", competitor: "Primarily on-prem; PI Cloud option available" },
    { factor: "NDT data model", atlantis: "Native — UT thickness grids, RT shot maps, MT/PT indications, PAUT B/C-scan storage", competitor: "Generic time-series; NDT requires custom asset framework templates" },
    { factor: "API 579 / API 581 support", atlantis: "Built-in FFS calculator + RBI engine certified to API 581", competitor: "Requires partner add-on (Antea, Bentley, or custom)" },
    { factor: "3D visualization", atlantis: "Native WebGL 3D twin in browser, no client install", competitor: "PI Vision (2D dashboards); 3D requires AVEVA E3D or partner overlay" },
    { factor: "Implementation time", atlantis: "8–14 weeks typical for first asset live", competitor: "16–28 weeks for AF + Vision + Asset Analytics rollout" },
    { factor: "Inspection workflow", atlantis: "Mobile data capture, offline-capable, ASNT report templates included", competitor: "No native inspection workflow — typically integrated with separate IDMS (Antea, Meridium)" },
    { factor: "Connectors", atlantis: "OPC-UA, MQTT, Modbus, REST, SAP PM, Maximo, Meridium, Aspen Mtell, GE APM", competitor: "Extensive (~450+) industrial connectors; weaker on inspection IDMS" },
    { factor: "Support model", atlantis: "Named ASNT Level III consultant + 24/7 portal", competitor: "Tiered support; Level III inspection expertise via partner network" },
    { factor: "Best fit", atlantis: "Inspection-led integrity programs, RBI/FFS-driven assets", competitor: "Process-control-led plants with mature historian programs" },
];

const faqs = [
    { question: "Is Atlantis Digital Twin a direct replacement for AVEVA PI System?", answer: "No — they overlap but serve different jobs. PI System is fundamentally a real-time process historian: it excels at high-frequency time-series capture from PLCs and DCS for process variables (temperature, pressure, flow). Atlantis Digital Twin is an inspection-data-led integrity twin: it excels at storing and visualizing thickness grids, defect maps, FFS calculations, and RBI scoring on a 3D asset model. Many customers run both — PI as the process historian, Atlantis as the integrity twin — and we connect to PI via OPC-UA or PI Web API to pull the corrosion-relevant tags (skin temperature, dew point, sulfur content) into the asset record." },
    { question: "Can I integrate Atlantis with my existing AVEVA PI investment?", answer: "Yes — this is one of our most common deployments. Atlantis pulls process tags from PI via the PI Web API (REST) or OPC-UA bridge. We typically map 50–200 corrosion-relevant tags per asset (skin temperatures, fluid composition, operating pressure, dew point) into the asset record so RBI scoring and CML thickness predictions stay in sync with actual operating severity. No PI-side configuration changes are required beyond a service account with read access." },
    { question: "Which is better for FFS (API 579) calculations?", answer: "Atlantis ships with a native API 579-1/ASME FFS-1 Level 1, 2, and 3 calculator covering general metal loss, local metal loss, pitting, blisters, and crack-like flaws. PI System has no native FFS engine — customers typically run FFS in standalone tools (Becht's FFS software, E2G's PlantStream, or custom spreadsheets) and post the results back. If FFS is core to your integrity workflow, Atlantis removes a tool from the stack." },
    { question: "What is the migration path if we already have a PI Asset Framework hierarchy?", answer: "We import your AF asset hierarchy via the PI Web API in a one-time mapping step (1–2 weeks). Equipment IDs, parent-child relationships, and tag-to-asset bindings transfer automatically. CML locations from your existing IDMS (Meridium, Antea, GE APM) layer on top via a separate import. Most customers are running Atlantis side-by-side with PI within 30 days, with full integrity workflow live by week 12." },
];

export default function AtlantisDtVsAvevaPiSystem() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "Atlantis Digital Twin vs AVEVA PI System: Cost, Features, NDT Integration [2026]",
                "datePublished": "2026-05-09",
                "dateModified": "2026-05-09",
                "author": { "@type": "Person", "name": "Anoop Rayavarapu", "jobTitle": "ASNT Level III, Founder Atlantis NDT" },
                "publisher": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/compare/atlantis-dt-vs-aveva-pi-system" }
            },
            {
                "@type": "ItemList",
                "name": "Atlantis Digital Twin vs AVEVA PI System Comparison",
                "itemListElement": compareRows.map((r, i) => ({ "@type": "ListItem", "position": i + 1, "name": r.factor, "description": `Atlantis: ${r.atlantis}. AVEVA PI: ${r.competitor}` }))
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
                title="Atlantis Digital Twin vs AVEVA PI System: Cost, Features, NDT Integration [2026]"
                description="Atlantis Digital Twin vs AVEVA PI System: affordable, accessible, fully customizable SaaS vs $150K-$1.2M per-tag licensing. Native NDT data model, API 579 FFS, 3D twin vs process historian. 2026 buyer guide."
                canonical="https://atlantisndt.com/compare/atlantis-dt-vs-aveva-pi-system"
                structuredData={structuredData}
                faq={faqs}
            />
                    <TableOfContents items={[{ id: "overview", label: "Comparison Overview" }, { id: "matrix", label: "Feature Matrix" }, { id: "verdict", label: "When Each Wins" }, { id: "faq", label: "FAQ" }]} />
        <Breadcrumbs />

            <section className="bg-gradient-to-br from-blue-700 to-indigo-800 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="flex items-center gap-2 text-blue-200 mb-4"><BarChart3 className="w-5 h-5" /><span>Digital Twin Platform Comparison</span></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Atlantis Digital Twin vs AVEVA PI System: Cost, Features, NDT Integration [2026]</h1>
                    <p className="text-xl text-blue-100 max-w-3xl mb-8">Process historian or integrity twin? An honest, side-by-side comparison from a 25-year ASNT Level III who has implemented both — pricing, NDT data depth, FFS/RBI workflow, deployment time.</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/contact" className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Book a Demo</Link>
                        <Link to="/digital-twins" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">Atlantis DT Overview</Link>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-5xl px-6 prose prose-slate max-w-none">
                    <h2>Why this comparison matters</h2>
                    <p>AVEVA PI System (formerly OSIsoft PI) is the de-facto industrial process historian — it has lived in refineries, power plants, and petrochemical complexes for over three decades and powers some of the largest real-time data infrastructures on earth. So when an inspection or integrity team asks &ldquo;why don&rsquo;t we just put our NDT data into PI?&rdquo;, it&rsquo;s a fair question. The honest answer: PI was designed to capture, store, and visualize <em>continuous process variables</em> at sub-second granularity. NDT data is fundamentally different — it&rsquo;s discrete, episodic, multi-dimensional (a UT thickness grid is hundreds of points captured at one moment), and tied to engineering judgment (FFS, RBI, fitness assessments) that PI does not natively perform.</p>
                    <p>Atlantis Digital Twin was built from the inspection record outward. The data model assumes thickness grids, defect maps, weld maps, MT/PT indications, RT shot logs, PAUT B-scans, and the engineering calculations that consume them (API 579 FFS, API 581 RBI, API 510/570 inspection intervals). The 3D twin is a visualization layer on top of an inspection-native database, not a bolt-on to a historian.</p>

                    <h2>The honest summary up front</h2>
                    <ul>
                        <li><strong>Pick AVEVA PI</strong> if your primary need is real-time process historian capability across thousands of PLC/DCS tags, you&rsquo;ve already invested in Asset Framework and PI Vision dashboards, and your integrity workflow is handled in a separate IDMS (Meridium, Antea, GE APM) that you&rsquo;re happy with.</li>
                        <li><strong>Pick Atlantis Digital Twin</strong> if your primary need is to consolidate inspection data, FFS, RBI, and a 3D asset twin into one platform — and you want affordable, accessible, fully customizable SaaS instead of per-tag licensing — and you want native ASNT Level III support included rather than sourced through a partner.</li>
                        <li><strong>Run both</strong> if you have a mature PI estate and want Atlantis to be your inspection integrity layer pulling process severity tags from PI via the Web API. This is the most common deployment for tier-1 oil &amp; gas operators.</li>
                    </ul>

                    <h2>Pricing model — the biggest practical difference</h2>
                    <p>AVEVA PI is licensed primarily on tag count. Each PLC point, each calculation tag, each event frame counts. A mid-sized refinery with 25,000 PI tags — which is small by historian standards — typically lands at $150K–$400K/year for the historian core. Add PI Vision (~$60K/yr), Asset Framework templates (~$40K/yr), Asset Analytics (~$80K/yr), and the AVEVA Connect cloud bridge (~$50K/yr) and total spend climbs past $600K/year before any custom AF templates or integration work. For a tier-1 operator with 100,000+ tags across multiple sites, $1.2M+/year is normal.</p>
                    <p>Atlantis Digital Twin is affordable, accessible, and fully customizable SaaS based on asset complexity and user count, not data volume. A starter tier covers one complex asset (a refinery unit, an FPSO topsides module, a tank farm) with up to 25 named users and unlimited inspection records. An enterprise tier covers unlimited assets, unlimited users, and the full FFS/RBI engine. There is no per-tag charge for PI tags pulled in via OPC-UA — they&rsquo;re mapped into the asset record at no additional cost. Pricing varies by region and scope — contact us for a tailored quote.</p>

                    <h2>NDT data depth — where the gap is widest</h2>
                    <p>This is where the platforms diverge most. PI&rsquo;s native data type is a numeric value with a timestamp and a quality flag. Inspection data does not fit that mold:</p>
                    <ul>
                        <li>A UT thickness CML grid is 100–500 thickness readings captured at one moment, tied to a coordinate map on the equipment. Not a single value over time.</li>
                        <li>An RT shot is a digital radiograph with defect annotations, an interpretation, and a code acceptance/rejection. Not a numeric tag.</li>
                        <li>A PAUT scan produces B-scan, C-scan, and S-scan images that need to be archived, viewed, and re-interpreted years later. PI is not an image archive.</li>
                        <li>A weld map is a structured object: weld number, joint type, heat number, welder ID, NDT method, acceptance status. Relational data, not time series.</li>
                    </ul>
                    <p>Atlantis stores all of this natively. The asset record is a graph: equipment → CML → reading history → trend → predicted next inspection date. The same record holds the API 579 FFS calculation result, the API 581 RBI risk score, and the linked inspection report PDF. PI customers typically end up running these workflows in Meridium APM, Antea, or GE APM — which is fine, but it&rsquo;s another stack to license, integrate, and support.</p>

                    <h2>3D visualization</h2>
                    <p>Atlantis renders the asset as an interactive 3D twin in the browser — no client install, WebGL on any modern device including iPad in the field. CMLs, defects, FFS hot spots, and RBI risk are color-coded directly on the geometry. Inspectors click a CML to see thickness history; engineers click a flaw to open the FFS calculation. AVEVA delivers 3D primarily through AVEVA E3D Design (a CAD tool) or partner overlays; PI Vision itself is 2D dashboards, KPIs, and trends. For inspection teams that want the &ldquo;walk the plant in 3D&rdquo; experience, Atlantis is the simpler route.</p>

                    <h2>Side-by-side comparison table</h2>
                </div>
            </section>

            <section className="py-8 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl shadow-sm">
                            <thead className="bg-slate-800 text-white">
                                <tr>
                                    <th className="px-4 py-3 text-left">Factor</th>
                                    <th className="px-4 py-3 text-left text-blue-200">Atlantis Digital Twin</th>
                                    <th className="px-4 py-3 text-left text-amber-200">AVEVA PI System</th>
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
                    <h2>Implementation timeline — what to expect</h2>
                    <p>An Atlantis Digital Twin first-asset-live engagement typically runs 8–14 weeks: 2 weeks of asset model import (P&amp;ID, equipment list, existing IDMS data), 4 weeks of integration build-out (PI / SAP PM / Maximo / OPC-UA tags), 4 weeks of inspection data backfill and FFS/RBI tuning, 2 weeks of inspector and engineer training. By week 14, you have a working 3D twin with live RBI scoring on at least one asset.</p>
                    <p>An AVEVA PI rollout from scratch is heavier: 4–6 weeks of historian server provisioning (on-prem typical), 6–8 weeks of AF template build-out for your asset hierarchy, 4 weeks of PI Vision dashboard development, plus separate streams for any IDMS / RBI / FFS partner. 16–28 weeks to first business value is normal. If you already have PI live, layering Atlantis on top is dramatically faster than the reverse.</p>

                    <h2>Support model</h2>
                    <p>Atlantis includes a named ASNT Level III consultant on every enterprise engagement — the same person reviews your inspection data quality, sanity-checks FFS results, and is on the line during turnarounds. AVEVA support is tiered (Bronze/Silver/Gold) and is excellent for historian and software issues, but inspection-domain expertise typically comes through a partner (Wood, Stress Engineering, Bechtel, etc.) rather than from AVEVA itself. If you want one phone number for both software and Level III judgment, Atlantis is the more direct path.</p>

                    <h2>Total cost of ownership over 5 years</h2>
                    <p>For a single-site refinery integrity program — one process unit, 200 CMLs, 50 weld maps, RBI on 800 components — a 5-year TCO comparison looks roughly like this:</p>
                    <ul>
                        <li><strong>Atlantis enterprise tier</strong>: affordable, accessible, fully customizable SaaS — region-specific quote on request</li>
                        <li><strong>AVEVA PI + AF + Vision + partner IDMS</strong>: $400K/yr × 5 = $2.0M, plus $250K implementation + ongoing partner FFS/RBI services ($120K/yr) = <strong>~$2.85M</strong></li>
                    </ul>
                    <p>The gap shrinks when you scale to many sites (PI&rsquo;s per-tag pricing levels off after the first thousands of tags) and inverts entirely if your operation is process-control-heavy with relatively few inspection workflows. For inspection-led organizations the cost story is firmly in Atlantis&rsquo;s favor.</p>

                    <h2>When AVEVA PI is the better choice</h2>
                    <p>We&rsquo;ll be the first to say it: AVEVA PI is the right answer when your primary need is real-time process historian, control-system integration is your central use case, you already have a mature AF library, and your IDMS / RBI / FFS workflow is handled by an established partner stack you&rsquo;re not motivated to replace. PI&rsquo;s connector library (450+ industrial systems) is unmatched, and PI Vision dashboards are the language process engineers already speak. There&rsquo;s no shame in keeping PI and adding Atlantis as the inspection layer — that&rsquo;s how most large operators end up.</p>

                    <h2>Where Atlantis wins decisively</h2>
                    <ul>
                        <li>Inspection-led organizations (oil &amp; gas inspection departments, fixed-equipment integrity teams, FPSO classification societies) where the daily user is an inspector or integrity engineer, not a process control engineer.</li>
                        <li>Operators who want a single platform from inspection capture → 3D visualization → FFS/RBI → reporting, instead of a stack of 4–6 point tools.</li>
                        <li>Smaller and mid-sized operators where AVEVA&rsquo;s licensing model is structurally too expensive for the number of tags they actually need.</li>
                        <li>Teams that value affordable, accessible, fully customizable SaaS economics (predictable subscription, included upgrades, no on-prem server fleet) over perpetual on-prem licensing.</li>
                    </ul>

                    <h2>Next steps</h2>
                    <p>If you&rsquo;d like to see the comparison applied to your asset list, we run a free 60-minute scoping call where we map your current PI footprint (or whatever you&rsquo;re running), look at your inspection data sources, and build a side-by-side TCO model with real numbers. Book a slot via the contact page or compare alternative platforms below.</p>
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
                    <h2 className="text-3xl font-bold text-center mb-10">Compare More Platforms</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Link to="/compare/atlantis-dt-vs-osisoft-pi" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-blue-700">vs OSIsoft PI</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Same lineage as AVEVA PI — pre-acquisition pricing and deployment differences.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/compare/atlantis-dt-vs-hexagon-eam" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-blue-700">vs Hexagon EAM</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">EAM-first vs inspection-first — when to pick which.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/compare/atlantis-dt-vs-bentley-itwin" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-blue-700">vs Bentley iTwin</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">CAD/BIM-rooted twin vs inspection-rooted twin.</p>
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
                                    <p className="text-sm text-slate-600">Full product page with features, pricing tiers, and case studies.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/erp" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-blue-700">Atlantis NDT ERP</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">The ERP that pairs with the digital twin — jobs, certs, equipment, invoicing.</p>
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
                                    <p className="text-sm text-slate-600">60-minute scoping call — bring your PI tag list, leave with a TCO model.</p>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-blue-700 to-indigo-800 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">See It Side-by-Side With Your Own Data</h2>
                    <p className="text-blue-100 mb-8 text-lg">Bring a PI tag list, an asset register, and one CML report. We&rsquo;ll show you the exact same data running in Atlantis Digital Twin in 30 minutes.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/contact" className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Book Demo</Link>
                        <Link to="/digital-twins" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">Product Page</Link>
                    </div>
                </div>
            </section>
        <CompetitorDeepDive slug="aveva-pi-system" />
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
