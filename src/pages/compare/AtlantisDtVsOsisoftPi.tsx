import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const compareRows = [
    { factor: "Pricing model", atlantis: "Affordable SaaS — quote on request, fully customizable", competitor: "Per-tag perpetual + 22% maintenance — $120K–$900K/yr typical" },
    { factor: "Brand status", atlantis: "Independent NDT software vendor", competitor: "OSIsoft acquired by AVEVA in 2021; same code base, AVEVA badging" },
    { factor: "NDT data model", atlantis: "Native — UT thickness CMLs, RT shot maps, weld registers, FFS, RBI", competitor: "Generic time-series + Asset Framework templates; NDT requires custom modeling" },
    { factor: "API 579 / API 581 engine", atlantis: "Built-in", competitor: "Not native — partner add-ons (Antea, Meridium, GE APM)" },
    { factor: "Visualization", atlantis: "Native browser 3D twin", competitor: "PI Vision (2D dashboards), PI Coresight legacy clients" },
    { factor: "Mobile inspection capture", atlantis: "Native iOS/Android, offline-capable", competitor: "Requires partner mobile (PI Mobile, Petasense, etc.)" },
    { factor: "Implementation time", atlantis: "8–14 weeks", competitor: "16–28 weeks for historian + AF + Vision build-out" },
    { factor: "Support model", atlantis: "Named ASNT Level III consultant", competitor: "Tiered AVEVA support; Level III via partner network" },
    { factor: "Best fit", atlantis: "Inspection / integrity teams", competitor: "Process control / operations historian users" },
    { factor: "Hosting", atlantis: "Cloud, on-prem, hybrid, air-gapped", competitor: "On-prem dominant; PI Cloud (now AVEVA Connect) emerging" },
];

const faqs = [
    { question: "Is OSIsoft PI different from AVEVA PI?", answer: "Functionally, no. OSIsoft was acquired by AVEVA in 2021 for ~$5 billion. The product is the same code base — what was OSIsoft PI System is now AVEVA PI System, sold and supported by AVEVA. Customers on legacy OSIsoft enterprise agreements have been migrating onto AVEVA Flex licensing over 2022–2026. References to &lsquo;OSIsoft PI&rsquo; in the wild today usually mean a pre-2021 deployment. The technology, comparison points, and the core differences vs Atlantis Digital Twin are identical." },
    { question: "What about my existing OSIsoft Enterprise Agreement?", answer: "AVEVA has been honoring OSIsoft EAs through their renewal cycles, then converting them to AVEVA Flex subscription. If you&rsquo;re on a legacy perpetual + maintenance agreement, you&rsquo;re paying ~22% annual maintenance. Switching to AVEVA Flex generally raises annual cost but adds cloud bursting, AVEVA Connect access, and consolidation across your AVEVA estate (E3D, Unified Operations, etc.). None of this changes the core question for inspection teams: the historian platform is not designed for NDT data, and you typically still need a separate IDMS for the integrity workflow. Atlantis Digital Twin replaces that IDMS layer and adds the 3D twin." },
    { question: "Can I keep OSIsoft PI as my historian and add Atlantis as the integrity layer?", answer: "Yes — this is the most common deployment for tier-1 operators with an existing PI footprint. We connect via the PI Web API (REST) using a service account with read access. Typical mapping is 50–200 process tags per major asset (skin temperatures, fluid composition, operating pressure, dew point, sulfur content) brought into the Atlantis asset record so RBI scoring and corrosion rate predictions stay in sync with operating severity. No PI-side schema changes required." },
    { question: "Which platform is more future-proof?", answer: "Both have strong roadmaps. AVEVA is investing heavily in PI&rsquo;s cloud transition (AVEVA Connect, AVEVA Data Hub) and AI/ML on top of historian data. Atlantis is investing in inspection-specific AI (defect classification on RT/PAUT, predictive corrosion modeling, automated FFS), expanded EAM connectors, and IEC 62443 OT cybersecurity. Choose based on whether your dominant future workload is process-control intelligence (PI) or inspection integrity intelligence (Atlantis). Many operators run both for exactly this reason." },
];

export default function AtlantisDtVsOsisoftPi() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "Article", "headline": "Atlantis Digital Twin vs OSIsoft PI: Pricing, NDT Workflow, Migration [2026]", "datePublished": "2026-05-09", "dateModified": "2026-05-09", "author": { "@type": "Person", "name": "Anoop Rayavarapu" }, "publisher": { "@type": "Organization", "name": "Atlantis NDT" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/compare/atlantis-dt-vs-osisoft-pi" } },
            { "@type": "ItemList", "name": "Atlantis Digital Twin vs OSIsoft PI Comparison", "itemListElement": compareRows.map((r, i) => ({ "@type": "ListItem", "position": i + 1, "name": r.factor, "description": `Atlantis: ${r.atlantis}. OSIsoft PI: ${r.competitor}` })) },
            { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="Atlantis Digital Twin vs OSIsoft PI: Pricing, NDT Workflow, Migration [2026]"
                description="OSIsoft PI (now AVEVA PI) vs Atlantis Digital Twin — historian per-tag licensing $120K-$900K/yr vs affordable accessible fully customizable SaaS. Native FFS/RBI, 3D twin, ASNT Level III support."
                canonical="https://atlantisndt.com/compare/atlantis-dt-vs-osisoft-pi"
                structuredData={structuredData}
                faq={faqs}
            />
            <Breadcrumbs />

            <section className="bg-gradient-to-br from-blue-700 to-cyan-700 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="flex items-center gap-2 text-blue-200 mb-4"><BarChart3 className="w-5 h-5" /><span>Digital Twin vs Process Historian</span></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Atlantis Digital Twin vs OSIsoft PI: Pricing, NDT Workflow, Migration [2026]</h1>
                    <p className="text-xl text-blue-100 max-w-3xl mb-8">OSIsoft PI was acquired by AVEVA in 2021 — the platform is now AVEVA PI but legacy installs are everywhere. An honest comparison from an ASNT Level III who has worked alongside PI in refineries, gas plants, and FPSOs.</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/contact" className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Book a Demo</Link>
                        <Link to="/digital-twins" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">Atlantis DT Overview</Link>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-5xl px-6 prose prose-slate max-w-none">
                    <h2>OSIsoft PI in 2026 — what&rsquo;s changed since the AVEVA acquisition</h2>
                    <p>OSIsoft and its PI System were the de-facto industrial process historian for three decades. AVEVA acquired OSIsoft in 2021 for around $5 billion, and the product has since been rebranded as AVEVA PI System. The underlying code base is the same, the connector library (450+ industrial sources) is the same, and existing OSIsoft-trained engineers are productive on day one. What has changed is licensing — AVEVA is steering customers from perpetual licenses with 22% annual maintenance toward AVEVA Flex subscription, which generally raises annual cost but consolidates with the rest of the AVEVA portfolio (E3D, Unified Operations Center, Predictive Analytics).</p>
                    <p>From an inspection team&rsquo;s perspective, none of this changes the core architectural question: PI is a real-time process historian. Its native data type is &ldquo;numeric value with timestamp and quality flag.&rdquo; That is exactly the wrong shape for a UT thickness grid, an RT shot, a PAUT B-scan, or a weld register. PI customers who want inspection integrity workflows historically bolt on Meridium APM, Antea IDMS, GE APM, or custom Asset Framework templates. Atlantis Digital Twin compresses that stack into a single inspection-native platform.</p>

                    <h2>Five-second summary</h2>
                    <ul>
                        <li><strong>Use OSIsoft / AVEVA PI</strong> for real-time process historian, control system integration, and KPI dashboards across thousands of PLC tags.</li>
                        <li><strong>Use Atlantis Digital Twin</strong> for inspection capture, CML thickness tracking, FFS/RBI engineering, 3D asset visualization, and ASNT Level III review.</li>
                        <li><strong>Use both</strong> when you have an existing PI estate and want Atlantis to be your inspection integrity layer pulling severity tags from PI.</li>
                    </ul>

                    <h2>Pricing — the practical difference</h2>
                    <p>OSIsoft PI is licensed primarily on tag count plus add-ons (PI Vision, PI Asset Framework, PI Asset Analytics, PI Integrators, AVEVA Connect). Pre-AVEVA, perpetual licensing was common with 22% annual maintenance. Today, most renewals push toward AVEVA Flex subscription. Mid-sized refinery (~25,000 tags) total spend is commonly $300K–$800K/year all-in. Tier-1 operators with multi-site deployments routinely exceed $1M/year.</p>
                    <p>Atlantis Digital Twin is affordable, accessible, and fully customizable SaaS — not per-tag. A starter tier covers one complex asset with 25 users; an enterprise tier covers unlimited assets and users with the full FFS/RBI engine. PI tags pulled in via the Web API don&rsquo;t add cost — they&rsquo;re simply mapped into the asset record. For inspection-led organizations, the economics typically favor Atlantis materially over a comparable PI + IDMS stack. Pricing varies by region and scope — contact us for a tailored quote.</p>

                    <h2>Migration paths</h2>
                    <h3>Path 1 — Replace</h3>
                    <p>Rare and not usually recommended. PI is genuinely good at what it does (process historian) and ripping it out costs more than living with it. Replacement only makes sense if your PI is purely an inspection IDMS workaround that nobody likes, you have very few process control use cases, and the maintenance cost doesn&rsquo;t justify the platform anymore.</p>
                    <h3>Path 2 — Coexist (most common)</h3>
                    <p>Keep PI for process historian and dashboards. Add Atlantis Digital Twin as the inspection / integrity layer. Atlantis pulls severity tags from PI via Web API; inspection data, FFS, RBI, and the 3D twin live in Atlantis. Each platform does what it&rsquo;s designed for. Implementation: 8–12 weeks for the Atlantis side, no PI changes required.</p>
                    <h3>Path 3 — Replace bolted-on IDMS only</h3>
                    <p>Many operators have an aging Meridium, Antea, or GE APM installation that lives downstream of PI. Atlantis can replace that IDMS layer cleanly while leaving PI untouched. This is the lowest-risk modernization path — you keep your historian investment, you replace one frustrating piece of software, and you gain the 3D twin and native FFS/RBI as a bonus.</p>

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
                                    <th className="px-4 py-3 text-left text-blue-200">Atlantis Digital Twin</th>
                                    <th className="px-4 py-3 text-left text-cyan-200">OSIsoft / AVEVA PI</th>
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
                    <h2>What inspection teams actually want</h2>
                    <p>When we talk to fixed-equipment integrity managers, the wish list rarely includes &ldquo;a faster historian.&rdquo; It&rsquo;s almost always:</p>
                    <ul>
                        <li>One place to see the current state of every CML, every weld, every RBI risk score on every asset.</li>
                        <li>A 3D model where I can click an asset, see its inspection history, see the FFS calculation if there&rsquo;s a flaw, see the RBI risk band, see the next inspection date.</li>
                        <li>Mobile data capture in the field that survives offline conditions and uploads cleanly.</li>
                        <li>FFS and RBI built in, not bolted on.</li>
                        <li>A real human with ASNT Level III credentials reachable when something doesn&rsquo;t look right.</li>
                    </ul>
                    <p>That&rsquo;s the product Atlantis built. PI is excellent at being a process historian. The two are complementary, not competitive — and sometimes the right answer for an inspection-led organization is Atlantis without PI at all.</p>

                    <h2>Honest verdict</h2>
                    <p>If you already own PI and your inspection integrity team is frustrated by an aging IDMS, replace the IDMS with Atlantis Digital Twin and keep PI. If you&rsquo;re greenfield and your dominant use case is inspection integrity (oil &amp; gas operator, FPSO operator, tank farm operator, classification society), start with Atlantis and only add PI if you have specific real-time process historian needs. If you&rsquo;re greenfield and you&rsquo;re primarily a process control / operations engineering team, start with PI and add Atlantis later when the inspection workflow needs upgrading. There&rsquo;s no universal winner — there are two products that solve adjacent but different problems.</p>
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
                        <Link to="/compare/atlantis-dt-vs-aveva-pi-system" className="group"><Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600"><CardContent className="p-5"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-slate-800 group-hover:text-blue-700">vs AVEVA PI System</h3><ArrowRight className="w-4 h-4 text-slate-400" /></div><p className="text-sm text-slate-600">Same product, post-acquisition badging — pricing details.</p></CardContent></Card></Link>
                        <Link to="/compare/atlantis-dt-vs-ibm-maximo" className="group"><Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600"><CardContent className="p-5"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-slate-800 group-hover:text-blue-700">vs IBM Maximo</h3><ArrowRight className="w-4 h-4 text-slate-400" /></div><p className="text-sm text-slate-600">EAM-rooted comparison — work order vs inspection focus.</p></CardContent></Card></Link>
                        <Link to="/compare/atlantis-dt-vs-aspen-mtell" className="group"><Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600"><CardContent className="p-5"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-slate-800 group-hover:text-blue-700">vs Aspen Mtell</h3><ArrowRight className="w-4 h-4 text-slate-400" /></div><p className="text-sm text-slate-600">Predictive maintenance ML focus vs full integrity twin.</p></CardContent></Card></Link>
                        <Link to="/digital-twins" className="group"><Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600"><CardContent className="p-5"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-slate-800 group-hover:text-blue-700">Atlantis Digital Twin</h3><ArrowRight className="w-4 h-4 text-slate-400" /></div><p className="text-sm text-slate-600">Product page — features, pricing tiers, case studies.</p></CardContent></Card></Link>
                        <Link to="/erp" className="group"><Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600"><CardContent className="p-5"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-slate-800 group-hover:text-blue-700">Atlantis NDT ERP</h3><ArrowRight className="w-4 h-4 text-slate-400" /></div><p className="text-sm text-slate-600">Companion ERP — jobs, certs, equipment calibration, invoicing.</p></CardContent></Card></Link>
                        <Link to="/contact" className="group"><Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600"><CardContent className="p-5"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-slate-800 group-hover:text-blue-700">Book a Demo</h3><ArrowRight className="w-4 h-4 text-slate-400" /></div><p className="text-sm text-slate-600">60-minute scoping call — bring a PI tag list, leave with a TCO model.</p></CardContent></Card></Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-blue-700 to-cyan-700 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Run It Side-by-Side With Your PI Estate</h2>
                    <p className="text-blue-100 mb-8 text-lg">We&rsquo;ll connect to a sample PI tag set and show you the inspection integrity workflow on top in 30 minutes.</p>
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
