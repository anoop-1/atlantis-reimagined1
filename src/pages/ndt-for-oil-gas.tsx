import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Droplets, Shield, Award, GraduationCap, Cpu, Globe, Wrench, Factory, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ndtMethods = [
    { name: "Ultrasonic Testing (UT/PAUT/TOFD)", description: "Corrosion mapping, weld inspection, thickness gauging", link: "/ultrasonic-testing" },
    { name: "Radiographic Testing (RT/DR)", description: "Weld defect detection, piping inspection", link: "/radiographic-testing" },
    { name: "Magnetic Particle Testing (MT)", description: "Surface crack detection on ferromagnetic materials", link: "/magnetic-particle-testing" },
    { name: "Liquid Penetrant Testing (PT)", description: "Surface-breaking defect detection", link: "/penetrant-testing" },
    { name: "Eddy Current Testing (ET)", description: "Heat exchanger tube inspection, conductivity testing", link: "/eddy-current-testing" },
    { name: "Visual Testing (VT/RVI)", description: "Remote visual inspection of internal components", link: "/visual-testing" }
];

const applications = [
    "Upstream: Drilling rigs, wellheads, offshore platforms",
    "Midstream: Pipelines, compressor stations, storage terminals",
    "Downstream: Refineries, petrochemical plants, tank farms",
    "Storage: Above-ground tanks (API 653), pressure vessels (API 510)",
    "Piping: Process piping (API 570), transmission pipelines (API 1104)",
    "Heat Exchangers: Tube bundles, shell inspection, baffle plates"
];

const certifications = ["API 510", "API 570", "API 653", "API 1104", "ASME Section V", "ASME B31.3", "ASNT SNT-TC-1A", "ISO 9712"];

const services = [
    { icon: Shield, title: "NDT Consulting", description: "ASNT Level III consulting, procedure development, code compliance audits", link: "/consulting" },
    { icon: GraduationCap, title: "NDT Training", description: "API, ASNT certification courses for oil & gas professionals", link: "/training" },
    { icon: Cpu, title: "Digital Twins", description: "3D visualization for refineries, tanks, and pipelines", link: "/digital-twins" },
    { icon: Globe, title: "NDT Connect", description: "Cloud-based inspection data management", link: "/ndt-connect" },
    { icon: Wrench, title: "ERP Solutions", description: "Enterprise resource planning for NDT operations", link: "/erp" }
];

export default function NDTForOilGas() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "NDT Services for Oil & Gas Industry",
        "provider": { "@type": "Organization", "name": "Atlantis NDT" },
        "description": "Comprehensive NDT inspection, training, and consulting services for the oil & gas industry. API certified, ASNT Level III experts.",
        "serviceType": "Non-Destructive Testing for Oil & Gas"
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="NDT Services for Oil & Gas Industry | API 510 570 653 Inspection | Atlantis NDT"
                description="Expert NDT services for oil & gas: refinery inspection, pipeline testing, tank inspection. API 510/570/653 certified. ASNT Level III consulting & training. Get free quote!"
                keywords="NDT oil gas, refinery NDT, pipeline inspection, API 653 tank inspection, API 510, API 570, oil gas NDT services, petrochemical NDT, offshore NDT"
                canonical="https://atlantisndt.com/ndt-for-oil-gas"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* Hero */}
            <section className="bg-gradient-to-br from-amber-700 to-orange-800 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="flex items-center gap-2 text-amber-200 mb-4"><Droplets className="w-5 h-5" /><span>Industry Solutions</span></div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">NDT Services for Oil & Gas Industry</h1>
                        <p className="text-xl text-amber-100 max-w-3xl mb-8">Comprehensive inspection, training, and consulting solutions for upstream, midstream, and downstream operations. API certified experts ensuring asset integrity and regulatory compliance.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-block bg-white text-amber-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Get Free Quote</Link>
                            <Link to="/consulting" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">View Consulting Services</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold text-amber-700 mb-2">2000+</div><div className="text-slate-600">Refinery Projects</div></div>
                        <div><div className="text-4xl font-bold text-amber-700 mb-2">API</div><div className="text-slate-600">Certified Services</div></div>
                        <div><div className="text-4xl font-bold text-amber-700 mb-2">50+</div><div className="text-slate-600">ASNT Level III Experts</div></div>
                        <div><div className="text-4xl font-bold text-amber-700 mb-2">24/7</div><div className="text-slate-600">Turnaround Support</div></div>
                    </div>
                </div>
            </section>

            {/* NDT Methods */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">NDT Methods for Oil & Gas</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">We provide all conventional and advanced NDT methods required for oil & gas asset integrity.</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ndtMethods.map((method) => (
                            <Link key={method.name} to={method.link}>
                                <Card className="h-full hover:shadow-lg transition hover:border-amber-500 group">
                                    <CardHeader className="pb-2"><CardTitle className="text-lg group-hover:text-amber-700 transition">{method.name}</CardTitle></CardHeader>
                                    <CardContent><p className="text-slate-600 text-sm">{method.description}</p></CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Applications */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Oil & Gas Applications</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {applications.map((app) => (
                            <div key={app} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span>{app}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="py-16 bg-amber-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Code & Standard Compliance</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {certifications.map((cert) => (
                            <div key={cert} className="bg-white px-6 py-3 rounded-lg shadow-sm font-semibold text-amber-800 border border-amber-200">{cert}</div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Complete Solutions */}
            <section className="py-16 bg-slate-900 text-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">Complete NDT Solutions</h2>
                    <p className="text-center text-slate-400 mb-12">Beyond inspection — training, consulting, and digital transformation</p>
                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {services.map((service) => (
                            <Link key={service.title} to={service.link}>
                                <Card className="h-full bg-slate-800 border-slate-700 hover:border-amber-500 transition group">
                                    <CardHeader className="pb-2 text-center">
                                        <service.icon className="w-10 h-10 text-amber-500 mx-auto mb-2 group-hover:scale-110 transition" />
                                        <CardTitle className="text-base text-white">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent><p className="text-slate-400 text-sm text-center">{service.description}</p></CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Regional Coverage */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Global Coverage for Oil & Gas</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="text-center"><h3 className="font-bold mb-2">USA</h3><p className="text-slate-600 text-sm">Houston, Texas, Denver, LA</p><Link to="/ndt-services-houston" className="text-amber-700 text-sm hover:underline">Learn more →</Link></div>
                        <div className="text-center"><h3 className="font-bold mb-2">Middle East</h3><p className="text-slate-600 text-sm">Dubai, Saudi Arabia, Qatar</p><Link to="/ndt-services-dubai" className="text-amber-700 text-sm hover:underline">Learn more →</Link></div>
                        <div className="text-center"><h3 className="font-bold mb-2">India</h3><p className="text-slate-600 text-sm">Mumbai, Chennai, Gujarat</p><Link to="/ndt-services-mumbai" className="text-amber-700 text-sm hover:underline">Learn more →</Link></div>
                        <div className="text-center"><h3 className="font-bold mb-2">Canada</h3><p className="text-slate-600 text-sm">Calgary, Alberta Oil Sands</p><Link to="/ndt-services-calgary" className="text-amber-700 text-sm hover:underline">Learn more →</Link></div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-amber-700 to-orange-700 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Need NDT Services for Your Oil & Gas Operations?</h2>
                    <p className="text-amber-100 mb-8 text-lg">Contact our API-certified experts for inspection, training, or consulting.</p>
                    <Link to="/contact" className="inline-block bg-white text-amber-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Request Free Quote</Link>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
