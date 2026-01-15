import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, MapPin, Award, Shield, Factory, GraduationCap, Users, Cpu, Wrench, Globe, Ship } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ndtMethods = [
    { name: "Ultrasonic Testing (UT, PAUT, TOFD)", link: "/ultrasonic-testing" },
    { name: "Radiographic Testing (RT, DR)", link: "/radiographic-testing" },
    { name: "Magnetic Particle Testing (MT)", link: "/magnetic-particle-testing" },
    { name: "Liquid Penetrant Testing (PT)", link: "/penetrant-testing" },
    { name: "Eddy Current Testing (ET)", link: "/eddy-current-testing" },
    { name: "Visual Testing (VT, RVI)", link: "/visual-testing" }
];
const industries = [
    { name: "Shipbuilding & Marine", link: null },
    { name: "Automotive Manufacturing", link: null },
    { name: "Aerospace & Defense", link: "/ndt-for-aerospace" },
    { name: "Power Generation", link: "/ndt-for-power-generation" },
    { name: "Heavy Engineering", link: null },
    { name: "Refineries", link: "/ndt-for-oil-gas" }
];

const allServices = [
    { icon: Users, title: "NDT Consulting", description: "ASNT Level III consulting services", link: "/consulting-india" },
    { icon: GraduationCap, title: "NDT Training", description: "ASNT/ISNT certification courses", link: "/training-india" },
    { icon: Cpu, title: "Digital Twins", description: "3D asset visualization technology", link: "/digital-twins" },
    { icon: Globe, title: "NDT Connect", description: "Cloud inspection management", link: "/ndt-connect" },
    { icon: Wrench, title: "ERP Solutions", description: "Enterprise planning for NDT", link: "/erp" }
];

export default function NDTServicesChennai() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Atlantis NDT - Chennai",
        "description": "Complete NDT solutions in Chennai - consulting, training, digital twins for automotive, marine, and manufacturing industries.",
        "address": { "@type": "PostalAddress", "addressLocality": "Chennai", "addressRegion": "Tamil Nadu", "addressCountry": "IN" },
        "areaServed": ["Chennai", "Coimbatore", "Tamil Nadu", "South India"],
        "telephone": "+91-8688325653"
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="NDT Services Chennai | Automotive & Marine NDT | Training & Consulting | Atlantis"
                description="Complete NDT solutions in Chennai & Tamil Nadu. Automotive, marine, aerospace NDT. Training, consulting, digital twins. ASNT/ISNT certified. Get free quote!"
                keywords="NDT services Chennai, NDT training Chennai, NDT consulting Tamil Nadu, automotive NDT Chennai, marine NDT India, ASNT Level III Chennai, ISNT certification"
                canonical="https://atlantisndt.com/ndt-services-chennai"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            <section className="bg-gradient-to-br from-teal-600 to-cyan-700 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="flex items-center gap-2 text-teal-200 mb-4"><MapPin className="w-5 h-5" /><span>Chennai, Tamil Nadu • Serving South India</span></div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">NDT Services in Chennai</h1>
                        <p className="text-xl text-teal-100 max-w-3xl mb-8">Complete NDT solutions for India's automotive and manufacturing hub. Training, consulting, and digital twin solutions.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-block bg-white text-teal-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Get Free Quote</Link>
                            <Link to="/training-india" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">View Training</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold text-teal-600 mb-2">50+</div><div className="text-slate-600">Level III Experts</div></div>
                        <div><div className="text-4xl font-bold text-teal-600 mb-2">500+</div><div className="text-slate-600">Automotive Projects</div></div>
                        <div><div className="text-4xl font-bold text-teal-600 mb-2">95%</div><div className="text-slate-600">Training Pass Rate</div></div>
                        <div><div className="text-4xl font-bold text-teal-600 mb-2">OEM</div><div className="text-slate-600">Approved Vendor</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">Complete NDT Solutions in Chennai</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">Comprehensive NDT services for the automotive and manufacturing sectors.</p>
                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {allServices.map((service) => (
                            <Link key={service.title} to={service.link}>
                                <Card className="h-full hover:shadow-lg transition hover:border-teal-500 cursor-pointer group">
                                    <CardHeader className="pb-2 text-center">
                                        <service.icon className="w-10 h-10 text-teal-600 mx-auto mb-2 group-hover:scale-110 transition" />
                                        <CardTitle className="text-base">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent><p className="text-slate-600 text-sm text-center">{service.description}</p></CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">NDT Inspection Services</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Award className="w-6 h-6 text-primary" />NDT Methods</h3>
                            <ul className="space-y-3">
                                {ndtMethods.map((m) => (<li key={m.name} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /><Link to={m.link} className="hover:text-primary hover:underline transition-all duration-200">{m.name}</Link></li>))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Ship className="w-6 h-6 text-primary" />Industries We Serve</h3>
                            <ul className="space-y-3">
                                {industries.map((ind) => (<li key={ind.name} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />{ind.link ? <Link to={ind.link} className="hover:text-primary hover:underline transition-all duration-200">{ind.name}</Link> : <span>{ind.name}</span>}</li>))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-700 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Ready to Get Started in Chennai?</h2>
                    <p className="text-teal-100 mb-8 text-lg">Contact our South India team for automotive and manufacturing NDT solutions.</p>
                    <Link to="/contact" className="inline-block bg-white text-teal-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Request Free Quote</Link>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
