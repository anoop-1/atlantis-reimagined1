// === ERP COMPARISON HUB 2026-05-12 ===
// Index page listing all 10 Atlantis NDT ERP vs X comparisons.

import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GitCompareArrows, ArrowRight, Mail } from "lucide-react";

const comparisons = [
    { slug: "vs-maximo", name: "IBM Maximo", category: "Enterprise EAM / APM", blurb: "Tier-1 EAM with deepest oil & gas reference base. Stronger work-order, MRO, and contracts. Atlantis wins on NDT-native workflows, faster deployment, and lower TCO for pure-play inspection." },
    { slug: "vs-sap-pm", name: "SAP S/4HANA Asset Management (PM)", category: "Enterprise ERP / EAM", blurb: "Default for $1B+ parents already on SAP. Atlantis wins for mid-size NDT shops where SAP customization budget is unbearable and NDT workflow needs to ship in 12 weeks not 18 months." },
    { slug: "vs-meridium", name: "Hexagon Meridium APM", category: "APM / RBI", blurb: "Deep API 581 RBI engine and refinery reference base. Atlantis wins on NDT-native data capture, smaller-org pricing, multi-tenant SaaS, and integration to operator templates." },
    { slug: "vs-aspentech-mtell", name: "AspenTech Mtell", category: "AI Predictive Maintenance", blurb: "Best-in-class anomaly-detection ML on time-series sensor data. Atlantis is not in that lane — Atlantis owns inspection-event data; Mtell owns sensor data. Often run together." },
    { slug: "vs-ge-vernova-apm", name: "GE Vernova APM (formerly Predix APM)", category: "APM / Reliability", blurb: "Power and utility heritage. Atlantis wins where the asset base is pressure equipment, piping, and tanks rather than rotating machinery, and where ASNT cert tracking matters." },
    { slug: "vs-bentley-assetwise", name: "Bentley AssetWise", category: "Engineering / Asset Lifecycle", blurb: "Strong in linear/infrastructure assets (rail, highway, bridge). Atlantis wins for fixed equipment integrity, NDT codes, and ISO 17025 calibration traceability." },
    { slug: "vs-netsuite", name: "Oracle NetSuite", category: "SMB Cloud ERP", blurb: "General-purpose cloud ERP for $5M–$200M businesses. Atlantis wins when more than 30% of company revenue comes from regulated NDT inspection work — NetSuite is not built for that." },
    { slug: "vs-quickbooks", name: "QuickBooks Online", category: "SMB Accounting", blurb: "Great accounting tool for very small contractors. Atlantis is operational ERP on top of that. Many sub-10-tech shops run QuickBooks for accounting and Atlantis for inspection ops." },
    { slug: "vs-procore", name: "Procore", category: "Construction Management", blurb: "Construction project management leader with QA/QC overlap. Atlantis wins when NDT methods, ASNT certification, ASME V reports, and API 510/570/653 codes are the core deliverable." },
    { slug: "vs-etq-reliance", name: "ETQ Reliance", category: "Quality Management System (QMS)", blurb: "Strong QMS for regulated manufacturers (life sciences, automotive). Atlantis wins when NDT inspection workflows — not generic CAPA / audit — are the primary use case." },
];

export default function ErpCompareHub() {
    const url = "https://atlantisndt.com/compare";
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${url}#hub`,
        name: "Atlantis NDT ERP vs Competitor Comparisons",
        description: "Honest comparisons of Atlantis NDT ERP against 10 major enterprise asset management, ERP, APM and QMS platforms. We acknowledge where each competitor wins.",
        url,
        hasPart: comparisons.map(c => ({ "@type": "WebPage", name: `Atlantis NDT ERP vs ${c.name}`, url: `${url}/${c.slug}`, description: c.blurb })),
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="Atlantis NDT ERP vs Maximo, SAP, Meridium & 7 More — Honest Comparisons 2026"
                description="Compare Atlantis NDT ERP against 10 major asset management, APM, ERP and QMS platforms — IBM Maximo, SAP PM, Hexagon Meridium, AspenTech Mtell, GE Vernova APM, Bentley AssetWise, NetSuite, QuickBooks, Procore, ETQ Reliance. We acknowledge competitor strengths."
                keywords="ndt erp comparison, atlantis ndt erp vs maximo, ndt erp vs sap, hexagon meridium alternative, aspentech mtell alternative, ge vernova apm alternative, bentley assetwise comparison, netsuite vs ndt erp, procore vs ndt erp, etq reliance alternative"
                canonical={url}
                structuredData={structuredData}
            />
            <div className="container mx-auto px-6 pt-4">
                <Breadcrumbs items={[
                    { label: "Home", href: "/" },
                    { label: "NDT ERP", href: "/ndt-erp-solution" },
                    { label: "Compare" },
                ]} />
            </div>

            <section className="bg-gradient-to-br from-blue-700 to-indigo-900 text-white pt-20 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <GitCompareArrows className="w-4 h-4" />
                            <span className="text-sm">Compare Atlantis NDT ERP</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Atlantis NDT ERP vs the Major Asset Management & ERP Platforms</h1>
                        <p className="text-xl text-blue-100 mb-6 max-w-3xl leading-relaxed">
                            Buying enterprise software for an NDT inspection company is a 5–10 year decision. These honest comparisons cover the 10 platforms we see most often in competitive deals. We acknowledge where each one beats Atlantis NDT ERP and where they do not.
                        </p>
                        <p className="text-base text-blue-200 mb-8 max-w-3xl leading-relaxed">
                            None of these competitors is bad software. The right answer almost always depends on company size, existing software stack, asset mix, and whether NDT inspection is your primary business line or a support function inside a larger parent. Read the comparison closest to your shortlist, then book a demo against your live job backlog.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link to="/contact" className="px-6 py-3 bg-white text-blue-800 font-semibold rounded-lg hover:bg-blue-50">Book Demo</Link>
                            <a href="mailto:info@atlantisndt.com?subject=Comparison%20Help%20—%20Atlantis%20NDT%20ERP" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 inline-flex items-center gap-2">
                                <Mail className="w-4 h-4" />info@atlantisndt.com
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-14">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold mb-3 text-slate-800">10 head-to-head comparisons</h2>
                    <p className="text-slate-600 mb-8 max-w-3xl">Click into the comparison that matches your shortlist. Each page covers pricing, implementation time, NDT-native features, real-world scenarios for small / mid / enterprise inspection companies, migration considerations, and FAQs.</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {comparisons.map(c => (
                            <Link key={c.slug} to={`/compare/${c.slug}`} className="group">
                                <Card className="h-full border-l-4 border-l-blue-600 hover:shadow-md transition">
                                    <CardHeader>
                                        <div className="text-xs text-blue-700 font-semibold uppercase tracking-wider mb-1">{c.category}</div>
                                        <CardTitle className="text-lg group-hover:text-blue-700">Atlantis NDT ERP vs {c.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-slate-600 mb-3 leading-relaxed">{c.blurb}</p>
                                        <span className="inline-flex items-center gap-1 text-blue-600 text-sm font-medium">
                                            Read comparison <ArrowRight className="w-3 h-3" />
                                        </span>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 bg-white">
                <div className="container mx-auto max-w-5xl px-6">
                    <h2 className="text-2xl font-bold mb-4 text-slate-800">Looking for the broader category comparison?</h2>
                    <p className="text-slate-600 mb-6">If you have not yet narrowed your shortlist, start with our category-level guide before reading the head-to-head pages.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link to="/ndt-erp-vs-generic-erp" className="group">
                            <Card className="hover:shadow-md transition border-l-4 border-l-indigo-600">
                                <CardContent className="p-5">
                                    <h3 className="font-semibold text-slate-800 group-hover:text-indigo-700 mb-2">NDT ERP vs Generic ERP vs Point Tools — Category Guide</h3>
                                    <p className="text-sm text-slate-600">11-dimension framework. Compares the three software categories, not specific vendors.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/ndt-erp-software-comparison" className="group">
                            <Card className="hover:shadow-md transition border-l-4 border-l-indigo-600">
                                <CardContent className="p-5">
                                    <h3 className="font-semibold text-slate-800 group-hover:text-indigo-700 mb-2">NDT ERP Software Comparison — Vendor Landscape</h3>
                                    <p className="text-sm text-slate-600">High-level vendor map across purpose-built NDT ERP, generic ERP, EAM, and APM platforms.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/erp-modules" className="group">
                            <Card className="hover:shadow-md transition border-l-4 border-l-indigo-600">
                                <CardContent className="p-5">
                                    <h3 className="font-semibold text-slate-800 group-hover:text-indigo-700 mb-2">ERP Modules Catalog</h3>
                                    <p className="text-sm text-slate-600">11 modules of the Atlantis NDT ERP. Pick a single module or the full suite.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/erp-industries" className="group">
                            <Card className="hover:shadow-md transition border-l-4 border-l-indigo-600">
                                <CardContent className="p-5">
                                    <h3 className="font-semibold text-slate-800 group-hover:text-indigo-700 mb-2">ERP by Industry</h3>
                                    <p className="text-sm text-slate-600">Tailored configs for 12 inspection and service industries — NDT, calibration, welding, marine survey, aerospace QC, more.</p>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
