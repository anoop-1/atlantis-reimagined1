import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const compareRows = [
    { factor: "Pricing model", atlantis: "Tiered SaaS — $50K starter, $200K enterprise/yr", competitor: "Per-user named licensing — $1.5K–$3K/user/yr; mid-sized refinery $250K–$700K/yr" },
    { factor: "Primary use case", atlantis: "NDT inspection integrity twin with FFS/RBI", competitor: "Enterprise asset management — work orders, maintenance scheduling, MRO" },
    { factor: "NDT data depth", atlantis: "Native CMLs, weld registers, RT/UT/PAUT scans, MT/PT indications", competitor: "Inspection module exists but is generic — typically requires customization for NDT" },
    { factor: "FFS / RBI engine", atlantis: "Built-in API 579 + API 581", competitor: "Not native; integrated via partner (Antea, GE APM)" },
    { factor: "3D visualization", atlantis: "Browser WebGL twin native", competitor: "HxGN SDx and partner overlays; 3D historically tied to Hexagon&rsquo;s Intergraph CAD lineage" },
    { factor: "Strength", atlantis: "Inspection workflow + integrity engineering", competitor: "Industrial-strength CMMS / EAM with deep MRO + maintenance roots" },
    { factor: "Implementation time", atlantis: "8–14 weeks first asset live", competitor: "20–40 weeks for an enterprise EAM rollout" },
    { factor: "Integrations", atlantis: "OPC-UA, MQTT, REST, SAP PM, Maximo, Meridium, Aspen Mtell", competitor: "Strong with SAP, Oracle; deep partner ecosystem from Intergraph CAD heritage" },
    { factor: "Best fit", atlantis: "Integrity-led organizations buying inspection tools", competitor: "Asset-management-led organizations buying maintenance tools" },
];

const faqs = [
    { question: "Is Hexagon EAM the same as Infor EAM?", answer: "Hexagon acquired Infor EAM&rsquo;s product line in 2021 and rebranded it as part of HxGN EAM. The product roots go back to Datastream 7i — a deep, mature EAM platform with particular strength in industrial maintenance, MRO, fleet, and facilities. So &lsquo;Hexagon EAM&rsquo; and &lsquo;HxGN EAM&rsquo; refer to the same platform with the Hexagon badge today; legacy &lsquo;Infor EAM&rsquo; references in your environment are the predecessor brand." },
    { question: "Why would I pick Atlantis over a full EAM like Hexagon?", answer: "You wouldn&rsquo;t — if your central need is enterprise asset management (work orders, preventive maintenance scheduling, MRO inventory, technician dispatch, contracts). Hexagon EAM is built for that and does it well. You would pick Atlantis when your central need is inspection integrity (NDT data capture, CML thickness tracking, FFS, RBI, 3D twin) and you want a tool that speaks ASNT Level III workflow natively rather than via custom EAM screens. Many operators run both: Hexagon EAM for maintenance scheduling, Atlantis Digital Twin for inspection integrity, with a clean integration between them via REST." },
    { question: "Can Atlantis replace the inspection module in Hexagon EAM?", answer: "Often yes for the inspection-integrity portion. The inspection capabilities in any general-purpose EAM (Hexagon, Maximo, SAP PM) are designed for time-based and condition-based PM inspections, not for the depth needed in API 510/570/653 fixed-equipment integrity. CMLs, FFS, RBI, weld maps, and integrity operating windows are typically heavily customized in a general EAM. Atlantis ships with all of this native and connects back to your EAM for the work order side — &lsquo;here&rsquo;s the inspection finding, please raise a corrective work order.&rsquo;" },
    { question: "What integration looks like with HxGN EAM", answer: "Bi-directional REST integration via the EAM Web Services. Asset hierarchy and equipment master flow from Hexagon into Atlantis (one-time + ongoing sync). Inspection findings, FFS/RBI risk changes, and recommended work flow back to Hexagon EAM as Notifications or Service Requests. Implementation typically 3–4 weeks once both sides have a project sponsor. We have customers running this with Hexagon EAM 12.x and onward." },
    { question: "What does 5-year TCO look like running both?", answer: "For a typical mid-sized operator: Hexagon EAM ~$500K/yr × 5 = $2.5M plus implementation. Atlantis Digital Twin enterprise tier $200K/yr × 5 = $1.0M plus $80K implementation. Combined ~$3.5M over 5 years. Compared to Hexagon EAM + heavily-customized inspection module + separate IDMS partner for FFS/RBI ($120K/yr+), the combined Hexagon + Atlantis approach typically lands $400K–$700K cheaper over 5 years and removes a partner from the stack." },
];

export default function AtlantisDtVsHexagonEam() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "Article", "headline": "Atlantis Digital Twin vs Hexagon EAM: NDT Integrity vs Enterprise Asset Management [2026]", "datePublished": "2026-05-09", "dateModified": "2026-05-09", "author": { "@type": "Person", "name": "Anoop Rayavarapu" }, "publisher": { "@type": "Organization", "name": "Atlantis NDT" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/compare/atlantis-dt-vs-hexagon-eam" } },
            { "@type": "ItemList", "name": "Atlantis Digital Twin vs Hexagon EAM Comparison", "itemListElement": compareRows.map((r, i) => ({ "@type": "ListItem", "position": i + 1, "name": r.factor, "description": `Atlantis: ${r.atlantis}. Hexagon EAM: ${r.competitor}` })) },
            { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="Atlantis Digital Twin vs Hexagon EAM: NDT Integrity vs EAM [2026 Cost Comparison]"
                description="Hexagon EAM (formerly Infor EAM) vs Atlantis Digital Twin: enterprise asset management vs inspection integrity twin. Pricing, FFS/RBI, when to run both. 2026 buyer guide."
                canonical="https://atlantisndt.com/compare/atlantis-dt-vs-hexagon-eam"
                structuredData={structuredData}
                faq={faqs}
            />
            <Breadcrumbs />
            <section className="bg-gradient-to-br from-purple-700 to-indigo-800 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="flex items-center gap-2 text-purple-200 mb-4"><BarChart3 className="w-5 h-5" /><span>Digital Twin vs EAM</span></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Atlantis Digital Twin vs Hexagon EAM: NDT Integrity vs Enterprise Asset Management [2026]</h1>
                    <p className="text-xl text-purple-100 max-w-3xl mb-8">Hexagon EAM is a deep, mature enterprise asset management platform. Atlantis Digital Twin is an inspection integrity twin. Most operators end up running both — here&rsquo;s how to think about it, what each costs, and where the boundary sits.</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/contact" className="inline-block bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Book a Demo</Link>
                        <Link to="/digital-twins" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">Atlantis DT Overview</Link>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-5xl px-6 prose prose-slate max-w-none">
                    <h2>Two products solving adjacent — but different — problems</h2>
                    <p>Hexagon EAM (formerly Infor EAM, before that Datastream 7i) is a tier-1 enterprise asset management platform with deep roots in industrial maintenance: work order management, preventive maintenance scheduling, MRO inventory, technician dispatch, contracts management, fleet, facilities. Hexagon acquired the Infor EAM line in 2021 and folded it into HxGN EAM alongside their HxGN SDx asset information management products.</p>
                    <p>Atlantis Digital Twin is a different tool: it is built for inspection integrity, not for maintenance management. Its primary user is an integrity engineer or fixed-equipment inspector, not a maintenance planner. Its primary outputs are inspection findings, FFS calculations, RBI risk scores, and a 3D twin showing the live state of asset integrity. There is overlap with EAM at the seam (both touch the asset record, both care about the &lsquo;equipment&rsquo; entity, both produce work) — but the core jobs are different enough that most large operators run both.</p>

                    <h2>The honest summary</h2>
                    <ul>
                        <li><strong>Pick Hexagon EAM</strong> if your dominant need is enterprise asset management — work orders, PM scheduling, MRO inventory, technician dispatch, fleet, facilities. Hexagon does this exceptionally well at scale.</li>
                        <li><strong>Pick Atlantis Digital Twin</strong> if your dominant need is inspection integrity — CML thickness tracking, FFS, RBI, weld registers, NDT data capture and the 3D twin. Atlantis is built native to this workflow.</li>
                        <li><strong>Run both</strong> if you have a mature EAM and an inspection integrity team that needs better tools. This is the most common deployment for tier-1 oil &amp; gas, petrochemical, and power operators.</li>
                    </ul>

                    <h2>Where the inspection module in EAM falls short</h2>
                    <p>Every general-purpose EAM has an &lsquo;inspection&rsquo; module. They&rsquo;re designed for time-based and condition-based PM inspections — &lsquo;walk this rotating equipment monthly, check vibration, log readings.&rsquo; Fine for that. They are not designed for the depth needed in API 510, API 570, API 653, or API 581 fixed-equipment integrity work:</p>
                    <ul>
                        <li>CML registers with location IDs, t-min, t-actual, retirement thickness, corrosion rate, projected next inspection date — typically grafted on with custom fields and screens.</li>
                        <li>API 579 FFS calculations — not present, requires bolt-on or external tooling (Becht FFS, E2G PlantStream).</li>
                        <li>API 581 RBI scoring — same, typically integrated via partner (Antea, Meridium, GE APM).</li>
                        <li>Weld registers with NDT method, acceptance status, heat number, welder ID, repair history — heavily customized.</li>
                        <li>Visual 3D twin showing live integrity state — not in EAM scope; requires HxGN SDx, Bentley, or Atlantis layered on top.</li>
                    </ul>
                    <p>Customers who try to do all of this in their EAM end up with a heavily customized inspection module that is expensive to maintain, slow to evolve, and not trusted by the integrity team. The path most operators land on: keep Hexagon EAM for what it does best (maintenance management), use Atlantis Digital Twin for inspection integrity, integrate the two so findings flow Atlantis → EAM as work orders.</p>

                    <h2>Comparison table</h2>
                </div>
            </section>

            <section className="py-8 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl shadow-sm">
                            <thead className="bg-slate-800 text-white"><tr><th className="px-4 py-3 text-left">Factor</th><th className="px-4 py-3 text-left text-purple-200">Atlantis Digital Twin</th><th className="px-4 py-3 text-left text-amber-200">Hexagon EAM</th></tr></thead>
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
                    <h2>Integration architecture when you run both</h2>
                    <p>The standard pattern is bi-directional REST integration via Hexagon EAM Web Services. Asset hierarchy, equipment master, location master flow from Hexagon → Atlantis (Hexagon is the system of record for the asset register). Inspection findings, FFS results, RBI risk changes, and recommended work flow Atlantis → Hexagon as Service Requests or Notifications, which then route into the standard Hexagon work order workflow. Cost data, completion confirmations, and work order status flow back Hexagon → Atlantis to close the loop.</p>
                    <p>Implementation is 3–4 weeks of integration build once both sides have a sponsor. We have customers running this on Hexagon EAM 12.x and onward; the Web Services API is stable and well-documented.</p>

                    <h2>5-year TCO scenarios</h2>
                    <p><strong>Scenario A: Hexagon EAM only with custom inspection module.</strong> EAM $500K/yr + inspection module customization amortized $80K/yr + partner FFS/RBI $120K/yr = $700K/yr × 5 = <strong>$3.5M</strong>, plus the integrity team complaining the whole time.</p>
                    <p><strong>Scenario B: Hexagon EAM + Atlantis Digital Twin enterprise.</strong> EAM $500K/yr + Atlantis $200K/yr = $700K/yr × 5 = <strong>$3.5M</strong>, but with a working inspection integrity workflow, native FFS/RBI, 3D twin, and one fewer partner.</p>
                    <p><strong>Scenario C: Atlantis Digital Twin only (smaller operators).</strong> $200K/yr × 5 = <strong>$1.0M</strong>, sufficient if your asset register is small enough that you don&rsquo;t need a full EAM.</p>

                    <h2>When Hexagon EAM clearly wins</h2>
                    <p>Maintenance-management-led organizations — facilities operators, fleet operators, manufacturing plants where the dominant workload is preventive and corrective maintenance scheduling, MRO inventory, technician dispatch — should start with a tier-1 EAM. Hexagon, IBM Maximo, SAP PM, and Oracle EAM all win this competition. Atlantis is not in that race. Add Atlantis on top only when the inspection integrity workflow becomes a meaningful fraction of the operation.</p>

                    <h2>When Atlantis Digital Twin clearly wins</h2>
                    <p>Inspection-led organizations — fixed-equipment integrity teams, FPSO operators, classification societies, tank farm operators, refinery integrity departments, third-party inspection contractors — start with Atlantis. The daily user is an inspector or integrity engineer; the value is in better inspection capture, faster FFS/RBI, and a 3D twin that the team actually uses. EAM may or may not be needed depending on how big the maintenance organization is.</p>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-8 text-center text-slate-800">Frequently Asked Questions</h2>
                    <div className="space-y-3">
                        {faqs.map((faq, i) => (
                            <details key={i} className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                                <summary className="p-5 font-semibold text-slate-800 cursor-pointer hover:bg-slate-50 list-none flex items-center justify-between">{faq.question}<span className="text-purple-700 text-xl ml-4 flex-shrink-0">+</span></summary>
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
                        <Link to="/compare/atlantis-dt-vs-ibm-maximo" className="group"><Card className="h-full hover:shadow-lg transition border-l-4 border-l-purple-600"><CardContent className="p-5"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-slate-800 group-hover:text-purple-700">vs IBM Maximo</h3><ArrowRight className="w-4 h-4 text-slate-400" /></div><p className="text-sm text-slate-600">EAM giant with deep oil &amp; gas footprint — when each wins.</p></CardContent></Card></Link>
                        <Link to="/compare/atlantis-dt-vs-bentley-itwin" className="group"><Card className="h-full hover:shadow-lg transition border-l-4 border-l-purple-600"><CardContent className="p-5"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-slate-800 group-hover:text-purple-700">vs Bentley iTwin</h3><ArrowRight className="w-4 h-4 text-slate-400" /></div><p className="text-sm text-slate-600">CAD/BIM-rooted twin vs inspection-rooted twin.</p></CardContent></Card></Link>
                        <Link to="/compare/atlantis-dt-vs-aveva-pi-system" className="group"><Card className="h-full hover:shadow-lg transition border-l-4 border-l-purple-600"><CardContent className="p-5"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-slate-800 group-hover:text-purple-700">vs AVEVA PI System</h3><ArrowRight className="w-4 h-4 text-slate-400" /></div><p className="text-sm text-slate-600">Process historian comparison.</p></CardContent></Card></Link>
                        <Link to="/digital-twins" className="group"><Card className="h-full hover:shadow-lg transition border-l-4 border-l-purple-600"><CardContent className="p-5"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-slate-800 group-hover:text-purple-700">Atlantis Digital Twin</h3><ArrowRight className="w-4 h-4 text-slate-400" /></div><p className="text-sm text-slate-600">Product page — features, pricing tiers, case studies.</p></CardContent></Card></Link>
                        <Link to="/erp" className="group"><Card className="h-full hover:shadow-lg transition border-l-4 border-l-purple-600"><CardContent className="p-5"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-slate-800 group-hover:text-purple-700">Atlantis NDT ERP</h3><ArrowRight className="w-4 h-4 text-slate-400" /></div><p className="text-sm text-slate-600">Companion ERP — jobs, certs, equipment, invoicing.</p></CardContent></Card></Link>
                        <Link to="/contact" className="group"><Card className="h-full hover:shadow-lg transition border-l-4 border-l-purple-600"><CardContent className="p-5"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-slate-800 group-hover:text-purple-700">Book a Demo</h3><ArrowRight className="w-4 h-4 text-slate-400" /></div><p className="text-sm text-slate-600">60-minute scoping call with a Level III consultant.</p></CardContent></Card></Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-purple-700 to-indigo-800 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">See Atlantis Plug Into Your Hexagon EAM</h2>
                    <p className="text-purple-100 mb-8 text-lg">We&rsquo;ll demo the integration with a sample asset and show inspection findings flowing as Hexagon work orders.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/contact" className="inline-block bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Book Demo</Link>
                        <Link to="/digital-twins" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">Product Page</Link>
                    </div>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
