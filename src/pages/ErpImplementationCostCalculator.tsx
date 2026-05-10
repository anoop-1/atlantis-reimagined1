// === ERP/DT PRODUCT HUB 2026-05-09 ===

import { useState, useMemo } from "react";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calculator, DollarSign } from "lucide-react";

const fmt = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);

export default function ErpImplementationCostCalculator() {
    const [users, setUsers] = useState<number>(50);
    const [sites, setSites] = useState<number>(2);
    const [erpVendor, setErpVendor] = useState<string>("atlantis");
    const [integrations, setIntegrations] = useState<number>(3);
    const [migrationComplexity, setMigrationComplexity] = useState<string>("medium");
    const [trainingHrs, setTrainingHrs] = useState<number>(40);

    const results = useMemo(() => {
        // Year 1 license costs by vendor
        const licensePerUser: Record<string, number> = {
            atlantis: 800, sap: 3500, oracle: 2800, ibm: 3200, generic: 1500
        };
        const baseLicense = (licensePerUser[erpVendor] || 1500) * users;

        // Implementation services typically 1.5x-3x license cost depending on vendor
        const implMultiplier: Record<string, number> = {
            atlantis: 1.0, sap: 2.5, oracle: 2.2, ibm: 2.4, generic: 1.8
        };
        const implementation = baseLicense * (implMultiplier[erpVendor] || 1.8);

        // Integration cost — $25K-$80K per integration depending on complexity
        const integrationCost = integrations * 45000;

        // Migration cost — depends on data complexity and history depth
        const migrationCostMap: Record<string, number> = { light: 30000, medium: 80000, heavy: 180000 };
        const migrationCost = migrationCostMap[migrationComplexity] || 80000;

        // Training cost — fully-loaded $200/hr for instructor + opportunity cost of trainee
        const trainingCost = users * trainingHrs * 200;

        // Multi-site rollout factor
        const siteMultiplier = 1 + (sites - 1) * 0.4;
        const rolloutCost = (implementation + integrationCost) * (siteMultiplier - 1);

        const yearOneTotal = baseLicense + implementation + integrationCost + migrationCost + trainingCost + rolloutCost;
        const yearOnwardLicense = baseLicense; // ongoing annual
        const fiveYrTCO = yearOneTotal + (yearOnwardLicense * 4);

        return { baseLicense, implementation, integrationCost, migrationCost, trainingCost, rolloutCost, yearOneTotal, yearOnwardLicense, fiveYrTCO };
    }, [users, sites, erpVendor, integrations, migrationComplexity, trainingHrs]);

    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "WebApplication", "name": "NDT ERP Implementation Cost Calculator", "applicationCategory": "BusinessApplication", "description": "Free interactive calculator estimating Year-1 and 5-year TCO of an NDT ERP implementation across vendors (Atlantis, SAP, Oracle, IBM Maximo).", "operatingSystem": "Any", "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" } },
            { "@type": "HowTo", "name": "How to estimate NDT ERP implementation cost", "step": [
                { "@type": "HowToStep", "text": "Enter your user count, site count, and ERP vendor preference." },
                { "@type": "HowToStep", "text": "Adjust integration count for the connected systems (SAP PM, Maximo, etc.)." },
                { "@type": "HowToStep", "text": "Select migration complexity based on your historical data depth." },
                { "@type": "HowToStep", "text": "Set training hours per user — typically 30-60 hours for inspection role users." },
                { "@type": "HowToStep", "text": "Review Year-1 cost breakdown and 5-year TCO." }
            ]}
        ]
    };

    const field = (label: string, val: number, setter: (n: number) => void, hint?: string) => (
        <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">{label}</label>
            <input type="number" value={val} onChange={e => setter(Number(e.target.value) || 0)} className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            {hint && <p className="text-xs text-slate-500 mt-1">{hint}</p>}
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="NDT ERP Implementation Cost Calculator [2026]: Atlantis, SAP, Oracle, Maximo TCO"
                description="Free interactive calculator: Year-1 and 5-year TCO for NDT ERP implementation across Atlantis, SAP S/4HANA, Oracle Fusion, IBM Maximo. License + implementation + integration + migration + training."
                canonical="https://atlantisndt.com/erp-implementation-cost-calculator"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            <section className="bg-gradient-to-br from-blue-700 to-indigo-800 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="flex items-center gap-2 text-blue-200 mb-4"><Calculator className="w-5 h-5" /><span>Interactive Calculator</span></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">NDT ERP Implementation Cost Calculator [2026]: Year-1 + 5-Year TCO Across Vendors</h1>
                    <p className="text-xl text-blue-100 max-w-3xl mb-8">Estimate the fully-loaded cost of implementing an NDT ERP — license, implementation services, integration, data migration, training, multi-site rollout. Compare Atlantis, SAP, Oracle, IBM Maximo on the same scenario.</p>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-6 text-slate-800">Your Scenario</h2>
                        <div className="space-y-4">
                            {field("Named users", users, setUsers, "Inspectors, integrity engineers, planners, admin — typically 30-200")}
                            {field("Sites", sites, setSites, "Single site = 1; multi-site rollout adds 30-50% per additional site")}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">ERP vendor</label>
                                <select value={erpVendor} onChange={e => setErpVendor(e.target.value)} className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option value="atlantis">Atlantis NDT ERP (purpose-built)</option>
                                    <option value="sap">SAP S/4HANA + custom NDT module</option>
                                    <option value="oracle">Oracle Fusion ERP + custom NDT module</option>
                                    <option value="ibm">IBM Maximo + custom NDT module</option>
                                    <option value="generic">Generic ERP customized for NDT</option>
                                </select>
                            </div>
                            {field("Integrations needed", integrations, setIntegrations, "SAP PM, Maximo, financial ERP, document management, etc. — typically 2-6")}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Migration complexity</label>
                                <select value={migrationComplexity} onChange={e => setMigrationComplexity(e.target.value)} className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option value="light">Light — &lt; 2 yr historical data, simple structure</option>
                                    <option value="medium">Medium — 2-7 yr historical data, mixed sources</option>
                                    <option value="heavy">Heavy — 10+ yr historical data, multiple legacy systems</option>
                                </select>
                            </div>
                            {field("Training hours per user", trainingHrs, setTrainingHrs, "30-60 hours typical for inspection-role users; 80+ hours for super-users")}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-6 text-slate-800">Estimated Cost Breakdown</h2>
                        <Card className="border-t-4 border-t-blue-600 mb-6">
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-lg mb-4 text-slate-800">Year-1 cost</h3>
                                <table className="w-full text-sm">
                                    <tbody>
                                        <tr className="border-b"><td className="py-2 text-slate-600">License (annual)</td><td className="py-2 text-right font-medium">{fmt(results.baseLicense)}</td></tr>
                                        <tr className="border-b"><td className="py-2 text-slate-600">Implementation services</td><td className="py-2 text-right font-medium">{fmt(results.implementation)}</td></tr>
                                        <tr className="border-b"><td className="py-2 text-slate-600">Integration build ({integrations} systems)</td><td className="py-2 text-right font-medium">{fmt(results.integrationCost)}</td></tr>
                                        <tr className="border-b"><td className="py-2 text-slate-600">Data migration</td><td className="py-2 text-right font-medium">{fmt(results.migrationCost)}</td></tr>
                                        <tr className="border-b"><td className="py-2 text-slate-600">Training ({users} users × {trainingHrs} hrs)</td><td className="py-2 text-right font-medium">{fmt(results.trainingCost)}</td></tr>
                                        <tr className="border-b"><td className="py-2 text-slate-600">Multi-site rollout ({sites} sites)</td><td className="py-2 text-right font-medium">{fmt(results.rolloutCost)}</td></tr>
                                        <tr className="bg-blue-50"><td className="py-3 font-bold text-slate-800">Year-1 total</td><td className="py-3 text-right font-bold text-blue-700 text-lg">{fmt(results.yearOneTotal)}</td></tr>
                                    </tbody>
                                </table>
                            </CardContent>
                        </Card>
                        <Card className="border-t-4 border-t-emerald-600">
                            <CardContent className="p-6 text-center">
                                <DollarSign className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                                <div className="text-sm text-slate-500 mb-1">Estimated 5-year TCO</div>
                                <div className="text-4xl font-bold text-slate-800">{fmt(results.fiveYrTCO)}</div>
                                <div className="text-xs text-slate-500 mt-2">Year-1 + 4 years recurring license at {fmt(results.yearOnwardLicense)}/yr</div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-slate-50">
                <div className="container mx-auto max-w-5xl px-6 prose prose-slate max-w-none">
                    <h2>How to read these numbers</h2>
                    <p>This calculator estimates the fully-loaded cost of implementing an NDT-fit ERP across the major vendor approaches. The numbers are calibrated to mid-2026 market data from real implementations the Atlantis team has been close to or participated in. Your actual cost will vary based on contract negotiation, implementation partner rates, and the specific scope of work — but the relative comparison across vendors is reliable.</p>

                    <h2>What drives the cost</h2>
                    <h3>License</h3>
                    <p>License cost varies dramatically by vendor and pricing model. Atlantis NDT ERP is tiered SaaS at roughly $800/user/yr loaded for typical inspection-role users. SAP S/4HANA, Oracle Fusion, and IBM Maximo are more expensive on a per-user basis ($2,500–$3,500/user/yr) because they&rsquo;re tier-1 enterprise platforms with much broader functionality than the NDT inspection workflow needs.</p>

                    <h3>Implementation services</h3>
                    <p>Implementation services typically run 1.5x–3x the license cost in Year 1 depending on vendor and customization scope. Atlantis sits at the low end (1.0x — purpose-built means less custom development). SAP, Oracle, and IBM sit at the high end (2.2x–2.5x) because customizing a general-purpose ERP for NDT inspection workflow is a significant build.</p>

                    <h3>Integration</h3>
                    <p>Each integration to a connected system (process historian, EAM, financial ERP, document management) costs $25K–$80K depending on complexity. Standard integrations (SAP PM, Maximo, Oracle EAM) are at the lower end; custom integrations to legacy IDMS or operator-specific systems are at the higher end.</p>

                    <h3>Data migration</h3>
                    <p>Migration cost scales with historical data depth and source complexity. A &lsquo;light&rsquo; migration (under 2 years of data, simple sources) runs $30K. A &lsquo;heavy&rsquo; migration (10+ years of data, multiple legacy systems including hand-written records and Excel) runs $180K.</p>

                    <h3>Training</h3>
                    <p>Inspection-role users typically need 30–60 hours of training to become productive. Super-users (admin, integration owners) need 80+ hours. The calculator uses fully-loaded $200/hr ($60/hr instructor + $140/hr trainee opportunity cost) — adjust if your loaded labor rate differs.</p>

                    <h3>Multi-site rollout</h3>
                    <p>Each additional site adds 30–50% of the first-site implementation cost. Site #2 is cheaper than site #1 (templates, integrations, processes built); sites #5+ are dramatically cheaper (operating model is mature). The calculator uses 40% per additional site as the average.</p>

                    <h2>Where the numbers go wrong</h2>
                    <p>Estimates like these miss two things: (1) opportunity cost of internal staff time during implementation (typically equal to 0.5x–1x the implementation services cost in shadow effort), and (2) productivity losses during the cutover period (typically 4–12 weeks of reduced inspection throughput as the team adjusts). These are real costs but harder to model — most operators end up adding 20–35% to the calculator estimate to account for them.</p>

                    <h2>Free assistance with your scenario</h2>
                    <p>If you&rsquo;d like Atlantis to help you build a real-numbers TCO model for your scenario — calibrated to your asset count, your existing ERP / EAM landscape, and your historical data depth — we run a free 60-minute scoping call where we pull together a side-by-side TCO comparison across vendors. Book via the contact page below.</p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-10">Related Resources</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Link to="/digital-twin-roi-calculator" className="group"><Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600"><CardContent className="p-5"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-slate-800 group-hover:text-blue-700">Digital Twin ROI Calculator</h3><ArrowRight className="w-4 h-4 text-slate-400" /></div><p className="text-sm text-slate-600">Companion ROI calculator for the digital twin side.</p></CardContent></Card></Link>
                        <Link to="/ndt-erp-roi-calculator" className="group"><Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600"><CardContent className="p-5"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-slate-800 group-hover:text-blue-700">NDT ERP ROI Calculator</h3><ArrowRight className="w-4 h-4 text-slate-400" /></div><p className="text-sm text-slate-600">ROI side of the equation — value generated from the ERP.</p></CardContent></Card></Link>
                        <Link to="/ndt-software-buyers-guide" className="group"><Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600"><CardContent className="p-5"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-slate-800 group-hover:text-blue-700">NDT Software Buyer&rsquo;s Guide</h3><ArrowRight className="w-4 h-4 text-slate-400" /></div><p className="text-sm text-slate-600">Interactive filter to find software fitting your scenario.</p></CardContent></Card></Link>
                        <Link to="/erp" className="group"><Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600"><CardContent className="p-5"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-slate-800 group-hover:text-blue-700">Atlantis NDT ERP</h3><ArrowRight className="w-4 h-4 text-slate-400" /></div><p className="text-sm text-slate-600">Product page — features, pricing tiers, case studies.</p></CardContent></Card></Link>
                        <Link to="/digital-twins" className="group"><Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600"><CardContent className="p-5"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-slate-800 group-hover:text-blue-700">Atlantis Digital Twin</h3><ArrowRight className="w-4 h-4 text-slate-400" /></div><p className="text-sm text-slate-600">Companion product — inspection integrity twin.</p></CardContent></Card></Link>
                        <Link to="/contact" className="group"><Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600"><CardContent className="p-5"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-slate-800 group-hover:text-blue-700">Book a TCO Scoping Call</h3><ArrowRight className="w-4 h-4 text-slate-400" /></div><p className="text-sm text-slate-600">60-minute call to build your real-numbers TCO model.</p></CardContent></Card></Link>
                    </div>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
