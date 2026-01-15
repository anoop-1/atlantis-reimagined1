import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Plane, Shield, Award, GraduationCap, Cpu, Globe, Wrench, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ndtMethods = [
    { name: "Ultrasonic Testing (UT/PAUT)", description: "Composite inspection, bond line testing, thickness measurement", link: "/blog/ultrasonic-testing" },
    { name: "Eddy Current Testing (ET)", description: "Surface crack detection, conductivity testing, fastener holes", link: "/blog/eddy-current-testing" },
    { name: "Radiographic Testing (RT/DR)", description: "Casting inspection, weld examination, composite analysis", link: "/blog/radiographic-testing" },
    { name: "Liquid Penetrant Testing (PT)", description: "Surface-breaking defects on non-porous materials", link: "/blog/penetrant-testing" },
    { name: "Magnetic Particle Testing (MT)", description: "Ferromagnetic component crack detection", link: "/blog/magnetic-particle-testing" },
    { name: "Visual Testing (VT/Borescope)", description: "Engine internals, turbine blades, structural inspection", link: "/blog/visual-testing" }
];

const applications = [
    "Aircraft Structures: Fuselage, wings, empennage, landing gear",
    "Engine Components: Turbine blades, discs, shafts, casings",
    "Composites: CFRP panels, honeycomb structures, bonded assemblies",
    "Fastener Holes: Bolt hole eddy current inspection",
    "Welds: Fusion welds, electron beam welds, friction stir welds",
    "Landing Gear: High-strength steel components, chrome plating"
];

const certifications = ["NAS 410", "EN 4179", "Nadcap", "FAA AC 43.13", "EASA Part 145", "AS9100", "ASNT SNT-TC-1A"];

const services = [
    { icon: Shield, title: "NDT Consulting", description: "Nadcap preparation, procedure development, Level III services", link: "/consulting" },
    { icon: GraduationCap, title: "NDT Training", description: "NAS 410, EN 4179 certification courses", link: "/training" },
    { icon: Cpu, title: "Digital Twins", description: "3D visualization for aircraft components", link: "/digital-twins" },
    { icon: Globe, title: "NDT Connect", description: "Inspection data management platform", link: "/ndt-connect" },
    { icon: Wrench, title: "ERP Solutions", description: "MRO resource planning solutions", link: "/erp" }
];

export default function NDTForAerospace() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "NDT Services for Aerospace Industry",
        "provider": { "@type": "Organization", "name": "Atlantis NDT" },
        "description": "Aerospace NDT inspection, training, and consulting services. NAS 410, Nadcap compliant. ASNT Level III experts for aircraft and engine components.",
        "serviceType": "Non-Destructive Testing for Aerospace"
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="NDT Services for Aerospace Industry | NAS 410 Nadcap Compliant | Aircraft Inspection | Atlantis"
                description="Expert aerospace NDT services: aircraft inspection, engine components, composites. NAS 410, Nadcap compliant. ASNT Level III consulting & training. Get free quote!"
                keywords="aerospace NDT, aircraft NDT inspection, NAS 410 certification, Nadcap NDT, aviation NDT, turbine blade inspection, composite NDT, aerospace eddy current"
                canonical="https://atlantisndt.com/ndt-for-aerospace"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-800 to-indigo-900 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="flex items-center gap-2 text-blue-200 mb-4"><Plane className="w-5 h-5" /><span>Industry Solutions</span></div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">NDT Services for Aerospace Industry</h1>
                        <p className="text-xl text-blue-100 max-w-3xl mb-8">Nadcap-ready inspection, training, and consulting for aircraft manufacturers, MRO facilities, and engine overhaul shops. NAS 410 and EN 4179 compliant services.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-block bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Get Free Quote</Link>
                            <Link to="/training" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">View Training Programs</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold text-blue-800 mb-2">NAS 410</div><div className="text-slate-600">Compliant Training</div></div>
                        <div><div className="text-4xl font-bold text-blue-800 mb-2">Nadcap</div><div className="text-slate-600">Ready Services</div></div>
                        <div><div className="text-4xl font-bold text-blue-800 mb-2">50+</div><div className="text-slate-600">Level III Experts</div></div>
                        <div><div className="text-4xl font-bold text-blue-800 mb-2">OEM</div><div className="text-slate-600">Approved Procedures</div></div>
                    </div>
                </div>
            </section>

            {/* NDT Methods */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">NDT Methods for Aerospace</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">Specialized NDT techniques for aircraft structures, engine components, and composite materials.</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ndtMethods.map((method) => (
                            <Link key={method.name} to={method.link}>
                                <Card className="h-full hover:shadow-lg transition hover:border-blue-500 group">
                                    <CardHeader className="pb-2"><CardTitle className="text-lg group-hover:text-blue-700 transition">{method.name}</CardTitle></CardHeader>
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
                    <h2 className="text-3xl font-bold text-center mb-12">Aerospace Applications</h2>
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
            <section className="py-16 bg-blue-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Aerospace Standards & Certifications</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {certifications.map((cert) => (
                            <div key={cert} className="bg-white px-6 py-3 rounded-lg shadow-sm font-semibold text-blue-800 border border-blue-200">{cert}</div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Complete Solutions */}
            <section className="py-16 bg-slate-900 text-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">Complete Aerospace NDT Solutions</h2>
                    <p className="text-center text-slate-400 mb-12">From Nadcap preparation to digital transformation</p>
                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {services.map((service) => (
                            <Link key={service.title} to={service.link}>
                                <Card className="h-full bg-slate-800 border-slate-700 hover:border-blue-500 transition group">
                                    <CardHeader className="pb-2 text-center">
                                        <service.icon className="w-10 h-10 text-blue-400 mx-auto mb-2 group-hover:scale-110 transition" />
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
                    <h2 className="text-3xl font-bold text-center mb-8">Aerospace NDT Locations</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="text-center"><h3 className="font-bold mb-2">Los Angeles</h3><p className="text-slate-600 text-sm">Boeing, Northrop Grumman</p><Link to="/ndt-services-los-angeles" className="text-blue-700 text-sm hover:underline">Learn more →</Link></div>
                        <div className="text-center"><h3 className="font-bold mb-2">Bangalore</h3><p className="text-slate-600 text-sm">HAL, ISRO, Defense</p><Link to="/ndt-services-bangalore" className="text-blue-700 text-sm hover:underline">Learn more →</Link></div>
                        <div className="text-center"><h3 className="font-bold mb-2">Singapore</h3><p className="text-slate-600 text-sm">MRO Hub, Changi</p><Link to="/ndt-services-singapore" className="text-blue-700 text-sm hover:underline">Learn more →</Link></div>
                        <div className="text-center"><h3 className="font-bold mb-2">Dubai</h3><p className="text-slate-600 text-sm">Emirates, Etihad MRO</p><Link to="/ndt-services-dubai" className="text-blue-700 text-sm hover:underline">Learn more →</Link></div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-blue-800 to-indigo-800 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Need Aerospace NDT Services?</h2>
                    <p className="text-blue-100 mb-8 text-lg">Contact our NAS 410 certified experts for inspection, training, or Nadcap consulting.</p>
                    <Link to="/contact" className="inline-block bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Request Free Quote</Link>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
