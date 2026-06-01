import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale } from "lucide-react";

const faqs = [
    {
        question: "Which digital twin platform is best for oil & gas?",
        answer: "For upstream and offshore operators with heavy RBI programs, Antea and Atlantis NDT are the strongest NDT-native fits. For integrated refining with enterprise asset scope, Hexagon or Bentley iTwin plus a specialist NDT overlay is common. Mistras OneSuite is popular where inspection services are already being procured from Mistras. IBM Maximo APM dominates where the CMMS is already Maximo and the customer wants a single-vendor stack."
    },
    {
        question: "Which platform supports offline field use?",
        answer: "Atlantis NDT and Mistras OneSuite have the deepest offline-field-inspector support; both sync to the twin once the device reconnects. Bentley iTwin offers strong offline 3D navigation but weaker inspection capture. Hexagon EAM has offline CMMS but limited NDT field flow. IBM Maximo Anywhere supports offline work orders but requires custom integration for NDT data entry."
    },
    {
        question: "Can a digital twin replace my CMMS?",
        answer: "No. The twin complements the CMMS — it consumes from and writes to it. A good twin is the source of truth for asset integrity state (thickness, damage mechanisms, FFS verdicts), while the CMMS remains the source of truth for work orders, materials, and labour. Treating them as alternatives leads to data drift; treating them as peers with clear ownership works."
    },
    {
        question: "How long does it take to integrate with SAP PM or Maximo?",
        answer: "For standard work-order and equipment-master sync: 8-12 weeks with a competent systems integrator. For deeper integration (notifications, measurement documents, functional locations, catalog codes) add another 6-12 weeks. Custom damage-mechanism writebacks are always longer — 3-6 months is typical."
    }
];

const matrix = [
    {
        name: "Antea",
        pricing: "Per-asset subscription, mid-five to low-six figures/yr",
        ndtNative: "Strong — pipe integrity, FFS, CML management",
        integrations: "SAP PM, Maximo, Osisoft PI",
        industry: "Oil & gas, petrochem",
        strengths: "Deep API 510/570/580 alignment; mature RBI engine",
        weaknesses: "Thin on rotating equipment and power gen assets",
        bestFit: "Mid-size refiner or upstream operator with RBI maturity"
    },
    {
        name: "Mistras OneSuite",
        pricing: "Bundled with inspection services; standalone rare",
        ndtNative: "Very strong — built by an NDT service company",
        integrations: "Closed ecosystem, limited third-party APIs",
        industry: "Oil & gas, aerospace, power",
        strengths: "Best-in-class mobile field capture; AE analytics",
        weaknesses: "Lock-in with Mistras services; limited open data export",
        bestFit: "Operators already sourcing inspection from Mistras"
    },
    {
        name: "Hexagon EAM / HxGN SDx",
        pricing: "Enterprise seat + module; six to seven figures/yr",
        ndtNative: "Shallow — EAM native, NDT via partner modules",
        integrations: "Broad — SAP, Oracle, Osisoft, Esri",
        industry: "Process manufacturing, utilities, mining",
        strengths: "Enterprise asset register hygiene; reality-capture strength",
        weaknesses: "NDT workflows feel bolted-on; Level III users push back",
        bestFit: "Enterprises standardising on Hexagon for asset lifecycle"
    },
    {
        name: "IBM Maximo APM",
        pricing: "Enterprise licence; six to seven figures/yr",
        ndtNative: "Shallow — reliability-native, NDT via custom",
        integrations: "Excellent — Watson, Osisoft, SAP, Azure",
        industry: "Utilities, rail, oil & gas, public sector",
        strengths: "Market-leading reliability analytics; IoT ingest; ecosystem",
        weaknesses: "Implementation drag; requires large SI footprint",
        bestFit: "Large utilities or multi-industry majors standardising on IBM"
    },
    {
        name: "Bentley iTwin",
        pricing: "Per-twin + consumption; five to six figures/yr",
        ndtNative: "Weak native NDT; strong engineering-grade 3D",
        integrations: "Strong — ProjectWise, AssetWise, Autodesk bridges",
        industry: "Infrastructure, civil, plant engineering",
        strengths: "Reality capture and 3D quality; BIM/engineering handoff",
        weaknesses: "NDT analytics must be built or sourced elsewhere",
        bestFit: "Owner-operators with deep Bentley engineering stack"
    },
    {
        name: "Atlantis NDT Digital Twin",
        pricing: "Per-asset subscription, low-five to mid-five figures/yr",
        ndtNative: "Very strong — built around Level III workflows",
        integrations: "Open APIs; native NDT Connect + ERP",
        industry: "Oil & gas, aerospace, power",
        strengths: "NDT-native UX, transparent pricing, Level III consulting built in",
        weaknesses: "Smaller install base than incumbents; fewer certified SIs",
        bestFit: "NDT-led integrity teams wanting a specialist partner"
    }
];

export default function DigitalTwinVendorComparison() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Digital Twin Platform Comparison 2026: 6-Vendor NDT Matrix",
        "datePublished": "2026-04-22",
        "author": { "@type": "Organization", "name": "Atlantis NDT Editorial Team" },
        "publisher": { "@id": "https://atlantisndt.com/#organization" },
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/digital-twin-vendor-comparison" }
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="Best Digital Twin Platforms 2026 — 6 NDT Vendors Compared"
                description="2026 NDT digital twin matrix: Antea, Mistras OneSuite, Hexagon, IBM Maximo APM, Bentley iTwin, Atlantis. Pricing, NDT fit, integrations, best-fit. Free comparison."
                canonical="https://atlantisndt.com/digital-twin-vendor-comparison"
                structuredData={structuredData}
                faq={faqs}
            />
            <Breadcrumbs />

            <section className="bg-gradient-to-br from-[#004aad] to-blue-800 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="flex items-center gap-2 text-blue-200 mb-4"><Scale className="w-5 h-5" /><span>Vendor Matrix · 2026</span></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Twin Platform Comparison: 6 Vendors, NDT-Honest</h1>
                    <p className="text-xl text-blue-100 max-w-3xl">
                        A deliberately unvarnished comparison of the six digital-twin platforms an integrity leader will
                        shortlist in 2026 — including our own. We call out our own gaps where they're real. This is the
                        matrix we wish we'd had when evaluating vendors.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-4xl px-6 prose prose-slate prose-lg">
                    <h2 className="text-3xl font-bold mb-4">How to read this</h2>
                    <p className="text-slate-700 mb-4">
                        "NDT-native" means the platform was built by people who understand API 510/570/580, SNT-TC-1A,
                        CMLs, and damage mechanisms — versus platforms that bolt NDT on top of a more general EAM, BIM, or
                        reliability product. Neither is automatically better. NDT-native platforms have the cleanest
                        inspection UX; enterprise platforms have the cleanest asset-register and work-order backbone. Most
                        mature customers end up integrating both.
                    </p>
                    <p className="text-slate-700 mb-4">
                        Pricing is a moving target and is frequently re-negotiated during enterprise procurement; treat the
                        figures as orders-of-magnitude, not quotes. Integration depth is where most PoCs stall — we rank
                        integration breadth (how many systems) over integration depth (how well a single integration works),
                        because in practice operators usually need mid-depth across SAP PM, Maximo, Osisoft PI, and Esri.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-lg shadow-sm text-xs md:text-sm border border-slate-200">
                            <thead>
                                <tr className="bg-[#004aad] text-white">
                                    <th className="px-3 py-3 text-left font-semibold">Vendor</th>
                                    <th className="px-3 py-3 text-left font-semibold">Pricing</th>
                                    <th className="px-3 py-3 text-left font-semibold">NDT-Native?</th>
                                    <th className="px-3 py-3 text-left font-semibold">Integrations</th>
                                    <th className="px-3 py-3 text-left font-semibold">Target Industry</th>
                                    <th className="px-3 py-3 text-left font-semibold">Strengths</th>
                                    <th className="px-3 py-3 text-left font-semibold">Weaknesses</th>
                                    <th className="px-3 py-3 text-left font-semibold">Best Fit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {matrix.map((v, i) => (
                                    <tr key={v.name} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                        <td className="px-3 py-3 font-bold text-slate-900">{v.name}</td>
                                        <td className="px-3 py-3 text-slate-700">{v.pricing}</td>
                                        <td className="px-3 py-3 text-slate-700">{v.ndtNative}</td>
                                        <td className="px-3 py-3 text-slate-700">{v.integrations}</td>
                                        <td className="px-3 py-3 text-slate-700">{v.industry}</td>
                                        <td className="px-3 py-3 text-emerald-700">{v.strengths}</td>
                                        <td className="px-3 py-3 text-amber-700">{v.weaknesses}</td>
                                        <td className="px-3 py-3 text-slate-700">{v.bestFit}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-4xl px-6 prose prose-slate prose-lg">
                    <h2 className="text-3xl font-bold mb-4">A note on our own gaps</h2>
                    <p className="text-slate-700 mb-4">
                        Two weaknesses we flag honestly for Atlantis NDT: our install base is smaller than Antea, Mistras, or
                        the enterprise platforms — which matters if you need a long roster of customer references with the
                        same asset class; and our certified systems-integrator ecosystem is still growing, which means for
                        multi-ERP rollouts we are more hands-on than a large platform would be. In return, we offer
                        NDT-native UX designed by Level III consultants, transparent per-asset pricing (no seat-count games),
                        and direct access to the engineering team for damage-mechanism tuning.
                    </p>
                    <p className="text-slate-700">
                        If you need the biggest install base and the broadest ecosystem, we will tell you to look at IBM or
                        Hexagon. If you need NDT-first design with Level III support built in, we are the strongest bet.
                        We would rather lose a deal than win the wrong one.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Decision Guide: Which Vendor When?</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Card><CardHeader><CardTitle>You are a mid-size refiner</CardTitle></CardHeader><CardContent className="text-sm text-slate-700">Shortlist Antea and Atlantis NDT. Both have the NDT depth and RBI discipline. Pick Antea for maximum market maturity; pick Atlantis for lower TCO and Level III consulting built in.</CardContent></Card>
                        <Card><CardHeader><CardTitle>You are standardising on Maximo</CardTitle></CardHeader><CardContent className="text-sm text-slate-700">IBM Maximo APM is the path of least resistance for your CMMS team. Pair with Atlantis NDT or Antea for the NDT-native overlay that Maximo APM alone does not provide.</CardContent></Card>
                        <Card><CardHeader><CardTitle>You already use Bentley engineering</CardTitle></CardHeader><CardContent className="text-sm text-slate-700">iTwin is the natural choice for the 3D and engineering handoff. You will still need a dedicated NDT analytics layer — plan for that procurement separately.</CardContent></Card>
                        <Card><CardHeader><CardTitle>You are scoping a pilot, not a rollout</CardTitle></CardHeader><CardContent className="text-sm text-slate-700">Start with Atlantis NDT or Antea on 2-3 critical assets. Smaller footprint, faster procurement, faster time-to-value proof. Enterprise platforms do not pilot well.</CardContent></Card>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((f, i) => (
                            <div key={i} className="bg-slate-50 p-6 rounded-lg">
                                <h3 className="font-bold text-lg mb-2">{f.question}</h3>
                                <p className="text-slate-700">{f.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-4xl px-6 text-center">
                    <div className="grid sm:grid-cols-3 gap-4">
                        <Link to="/digital-twins-ndt-guide-2026" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-[#004aad] transition">Pillar Guide</Link>
                        <Link to="/digital-twin-readiness-quiz" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-[#004aad] transition">Readiness Quiz</Link>
                        <Link to="/digital-twin-api-510-570-580-mapping" className="p-4 bg-white rounded-lg border border-slate-200 hover:border-[#004aad] transition">API Mapping</Link>
                    </div>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
