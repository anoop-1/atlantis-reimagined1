import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Cpu, TrendingUp, Shield, Zap, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const useCases = [
    { title: "Pipeline Integrity", description: "3D visualization of pipeline corrosion data, anomaly tracking, and remaining life prediction" },
    { title: "Storage Tank Monitoring", description: "Real-time tank condition monitoring with NDT data overlay and settlement tracking" },
    { title: "Pressure Vessel Management", description: "Digital replicas of vessels with inspection history, FFS evaluation, and repair tracking" },
    { title: "Heat Exchanger Inspection", description: "Tube bundle visualization with plugging records and degradation trends" },
    { title: "Offshore Platform Assets", description: "Complete asset management for offshore structures with subsea visualization" },
    { title: "Refinery Unit Modeling", description: "Process unit digital twins with equipment condition and reliability data" }
];

const benefits = [
    "Reduce inspection costs by up to 30%",
    "Extend asset life with predictive analytics",
    "Improve safety with real-time monitoring",
    "Centralize all inspection data in one platform",
    "Enable remote collaboration and decision making",
    "Meet regulatory compliance requirements"
];

const faqs = [
    { question: "What is a Digital Twin for NDT?", answer: "A Digital Twin is a 3D virtual representation of physical assets that integrates real-time NDT inspection data, enabling visualization, analysis, and predictive maintenance." },
    { question: "How does Digital Twin integrate with NDT data?", answer: "Our Digital Twin platform imports data from UT thickness gauges, corrosion mapping, PAUT scans, and other NDT equipment to create a comprehensive asset view." },
    { question: "What industries benefit from NDT Digital Twins?", answer: "Oil & gas, petrochemical, power generation, aerospace, and any industry with critical assets requiring inspection and maintenance." }
];

export default function DigitalTwinsOilGasAssets() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Digital Twins for Oil & Gas Asset Integrity",
        "provider": { "@type": "Organization", "name": "Atlantis NDT" },
        "description": "3D Digital Twin technology for oil & gas asset integrity management. Pipeline, tank, and vessel visualization with NDT data integration."
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="Digital Twins for Oil & Gas Asset Integrity | 3D NDT Visualization | Atlantis NDT"
                description="Digital Twin technology for oil & gas asset integrity. 3D visualization of pipelines, tanks, vessels with NDT data. Reduce costs 30%. Request demo!"
                keywords="digital twin oil gas, asset integrity digital twin, 3D NDT visualization, pipeline digital twin, tank monitoring, predictive maintenance"
                canonical="https://atlantisndt.com/digital-twins-oil-gas-assets"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-2 text-emerald-200 mb-4"><Cpu className="w-5 h-5" /><span>Digital Twins</span></div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Twins for Oil & Gas Asset Integrity</h1>
                        <p className="text-xl text-emerald-100 max-w-3xl mb-8">Transform asset integrity management with 3D Digital Twin technology. Visualize NDT data, predict failures, and extend asset life.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-block bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Request Demo</Link>
                            <Link to="/digital-twins" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">Learn More</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold text-emerald-600 mb-2">30%</div><div className="text-slate-600">Cost Reduction</div></div>
                        <div><div className="text-4xl font-bold text-emerald-600 mb-2">3D</div><div className="text-slate-600">Visualization</div></div>
                        <div><div className="text-4xl font-bold text-emerald-600 mb-2">Real-time</div><div className="text-slate-600">Data Integration</div></div>
                        <div><div className="text-4xl font-bold text-emerald-600 mb-2">AI</div><div className="text-slate-600">Predictive Analytics</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">Use Cases</h2>
                    <p className="text-slate-600 text-center mb-12">How oil & gas companies use our Digital Twin technology</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {useCases.map((uc) => (
                            <Card key={uc.title} className="hover:shadow-lg transition">
                                <CardHeader><CardTitle className="text-lg">{uc.title}</CardTitle></CardHeader>
                                <CardContent><p className="text-slate-600 text-sm">{uc.description}</p></CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Key Benefits</h2>
                    <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                        {benefits.map((benefit) => (
                            <div key={benefit} className="flex items-start gap-3 p-4 bg-emerald-50 rounded-lg">
                                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span>{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (<div key={index} className="bg-white p-6 rounded-lg shadow-sm"><h3 className="font-bold text-lg mb-2">{faq.question}</h3><p className="text-slate-600">{faq.answer}</p></div>))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Transform Your Asset Integrity Program</h2>
                    <p className="text-emerald-100 mb-8 text-lg">See how Digital Twins can revolutionize your inspection and maintenance strategy.</p>
                    <Link to="/contact" className="inline-block bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Request Demo</Link>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
