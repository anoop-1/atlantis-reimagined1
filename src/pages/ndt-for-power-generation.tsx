import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Zap, Shield, Award, GraduationCap, Cpu, Globe, Wrench, Factory } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ndtMethods = [
    { name: "Ultrasonic Testing (UT/PAUT)", description: "Turbine blade inspection, rotor shafts, pressure components", link: "/ultrasonic-testing" },
    { name: "Magnetic Particle Testing (MT)", description: "Rotor forgings, generator components, valve bodies", link: "/magnetic-particle-testing" },
    { name: "Liquid Penetrant Testing (PT)", description: "Turbine blades, heat-resistant alloys, steam components", link: "/penetrant-testing" },
    { name: "Radiographic Testing (RT)", description: "Weld inspection, casting quality, pipe welds", link: "/radiographic-testing" },
    { name: "Eddy Current Testing (ET)", description: "Heat exchanger tubes, condenser tubing, surface defects", link: "/eddy-current-testing" },
    { name: "Visual Testing (VT/RVI)", description: "Borescope inspection of turbines, internal components", link: "/visual-testing" }
];

const applications = [
    "Gas Turbines: Blades, vanes, combustion chambers, rotors",
    "Steam Turbines: Rotors, diaphragms, blading, casings",
    "Generators: Rotor forgings, stator windings, retaining rings",
    "Boilers: Tubes, headers, drums, superheaters, economizers",
    "Heat Recovery Steam Generators (HRSG): Tubes, finned surfaces",
    "Balance of Plant: Piping, valves, pressure vessels, tanks"
];

const certifications = ["ASME Section V", "ASME B31.1", "API 510", "API 570", "NBIC", "AWS D1.1", "ASNT SNT-TC-1A"];

const powerTypes = [
    { name: "Nuclear Power", description: "NRC-qualified inspectors, ASME Section XI, ISI programs" },
    { name: "Combined Cycle", description: "Gas turbine, HRSG, and steam turbine inspection" },
    { name: "Coal/Fossil", description: "Boiler tubes, waterwall, superheater inspection" },
    { name: "Renewable", description: "Wind turbine components, solar support structures" }
];

const services = [
    { icon: Shield, title: "NDT Consulting", description: "Outage planning, procedure development, Level III services", link: "/consulting" },
    { icon: GraduationCap, title: "NDT Training", description: "ASME, power industry specific certification", link: "/training" },
    { icon: Cpu, title: "Digital Twins", description: "3D visualization for turbines and boilers", link: "/digital-twins" },
    { icon: Globe, title: "NDT Connect", description: "Inspection data management platform", link: "/ndt-connect" },
    { icon: Wrench, title: "ERP Solutions", description: "Outage resource planning solutions", link: "/erp" }
];

const powerFaqs = [
    { question: "What NDT methods are used in power generation?", answer: "Power plants rely on: Ultrasonic Testing (UT) and Phased Array UT (PAUT) for turbine blades, rotor shafts, and pressure components; Eddy Current Testing (ECT) for heat exchanger and condenser tube inspection; Magnetic Particle Testing (MT) for rotor forgings and generator components; Radiographic Testing (RT) for weld and casting quality; and Visual Testing (VT/RVI) via borescope for internal turbine and combustion chamber inspection." },
    { question: "What is power generation NDT?", answer: "Power generation NDT refers to non-destructive testing services performed on power plant equipment — including gas turbines, steam turbines, generators, boilers, HRSGs, and balance-of-plant piping and pressure vessels. NDT ensures equipment integrity, prevents unplanned failures, optimises planned outage efficiency, and maintains compliance with ASME, NBIC, and NRC codes." },
    { question: "How often should power plant equipment be inspected?", answer: "Inspection frequency depends on equipment type, operating conditions, and applicable codes. Gas turbine blades are typically inspected every 8,000–12,000 operating hours (hot-section inspections). Boiler tubes follow ASME Section I and API 510 intervals. Steam turbine rotors and shafts are inspected during every major overhaul (typically every 4–6 years). Risk-Based Inspection (RBI) per API 580 can optimise intervals for piping and pressure vessels." },
    { question: "What certifications do power plant NDT inspectors need?", answer: "Power plant NDT inspectors typically require: ASNT SNT-TC-1A or ASNT Level III certification in relevant methods (UT, MT, PT, RT, ET); ASME Section V qualification for code work; for nuclear plants — NRC-qualified inspectors per ASME Section XI and 10 CFR 50. API 510 certification is required for pressure vessel inspection, and API 570 for piping. Atlantis NDT provides all required certifications and training." },
];

export default function NDTForPowerGeneration() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "name": "NDT Services for Power Generation Industry",
                "provider": { "@type": "Organization", "name": "Atlantis NDT" },
                "description": "Power plant NDT inspection, training, and consulting services. Turbine, boiler, and generator inspection. ASME qualified, ASNT Level III experts.",
                "serviceType": "Non-Destructive Testing for Power Generation"
            },
            {
                "@type": "FAQPage",
                "mainEntity": powerFaqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } }))
            }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="Power Generation NDT | Turbine, Boiler & Generator Inspection | ASME Qualified | Atlantis"
                description="Power generation NDT services: gas turbine blade inspection, boiler tube testing, steam turbine rotors, HRSG, condenser tubes. ASME/NRC qualified. Outage planning & Level III consulting. Get a quote."
                keywords="power generation NDT, power plant NDT, turbine blade inspection, boiler tube testing, generator NDT, ASME Section V power, HRSG inspection, steam turbine NDT, nuclear NDT, power plant outage inspection, condenser tube inspection, ASNT power generation, NRC qualified NDT"
                canonical="https://atlantisndt.com/ndt-for-power-generation"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* Hero */}
            <section className="bg-gradient-to-br from-emerald-700 to-teal-800 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="flex items-center gap-2 text-emerald-200 mb-4"><Zap className="w-5 h-5" /><span>Industry Solutions</span></div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">NDT Services for Power Generation</h1>
                        <p className="text-xl text-emerald-100 max-w-3xl mb-8">Comprehensive inspection, training, and consulting for power plants. Turbines, boilers, generators, and balance of plant. ASME qualified outage support teams.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-block bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Get Free Quote</Link>
                            <Link to="/consulting" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">View Consulting Services</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold text-emerald-700 mb-2">500+</div><div className="text-slate-600">Outages Supported</div></div>
                        <div><div className="text-4xl font-bold text-emerald-700 mb-2">ASME</div><div className="text-slate-600">Qualified Services</div></div>
                        <div><div className="text-4xl font-bold text-emerald-700 mb-2">NRC</div><div className="text-slate-600">Nuclear Qualified</div></div>
                        <div><div className="text-4xl font-bold text-emerald-700 mb-2">24/7</div><div className="text-slate-600">Outage Support</div></div>
                    </div>
                </div>
            </section>

            {/* Power Types */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Power Plant Types We Serve</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {powerTypes.map((type) => (
                            <Card key={type.name} className="text-center hover:shadow-lg transition">
                                <CardHeader><CardTitle className="text-lg">{type.name}</CardTitle></CardHeader>
                                <CardContent><p className="text-slate-600 text-sm">{type.description}</p></CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* NDT Methods */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">NDT Methods for Power Plants</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">Specialized NDT techniques for turbines, boilers, and rotating equipment.</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ndtMethods.map((method) => (
                            <Link key={method.name} to={method.link}>
                                <Card className="h-full hover:shadow-lg transition hover:border-emerald-500 group">
                                    <CardHeader className="pb-2"><CardTitle className="text-lg group-hover:text-emerald-700 transition">{method.name}</CardTitle></CardHeader>
                                    <CardContent><p className="text-slate-600 text-sm">{method.description}</p></CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Applications */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Power Plant Applications</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {applications.map((app) => (
                            <div key={app} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span>{app}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="py-16 bg-emerald-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Codes & Standards Compliance</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {certifications.map((cert) => (
                            <div key={cert} className="bg-white px-6 py-3 rounded-lg shadow-sm font-semibold text-emerald-800 border border-emerald-200">{cert}</div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Complete Solutions */}
            <section className="py-16 bg-slate-900 text-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">Complete Power Plant NDT Solutions</h2>
                    <p className="text-center text-slate-400 mb-12">From outage planning to digital transformation</p>
                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {services.map((service) => (
                            <Link key={service.title} to={service.link}>
                                <Card className="h-full bg-slate-800 border-slate-700 hover:border-emerald-500 transition group">
                                    <CardHeader className="pb-2 text-center">
                                        <service.icon className="w-10 h-10 text-emerald-400 mx-auto mb-2 group-hover:scale-110 transition" />
                                        <CardTitle className="text-base text-white">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent><p className="text-slate-400 text-sm text-center">{service.description}</p></CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "#004aad" }}>Power Generation NDT — Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {powerFaqs.map((faq, i) => (
                            <details key={i} className="border border-slate-200 rounded-xl overflow-hidden group">
                                <summary className="p-5 font-semibold text-slate-800 cursor-pointer hover:bg-slate-50 list-none flex items-center justify-between">
                                    {faq.question}
                                    <span className="text-[#004aad] text-xl ml-4">+</span>
                                </summary>
                                <div className="px-5 pb-5 text-slate-600 leading-relaxed border-t border-slate-100">{faq.answer}</div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-emerald-700 to-teal-700 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Need Power Plant NDT Services?</h2>
                    <p className="text-emerald-100 mb-8 text-lg">Contact our ASME qualified experts for outage support, training, or consulting.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/contact" className="inline-block bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Request Free Quote</Link>
                        <Link to="/ndt-for-oil-gas" className="inline-block border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">NDT for Oil &amp; Gas</Link>
                        <Link to="/blog/eddy-current-testing" className="inline-block border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">Eddy Current Testing Guide</Link>
                    </div>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
