import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, MapPin, Award, Shield, Clock, Factory, GraduationCap, Users, Cpu, Wrench, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ndtMethods = [
    { name: "Ultrasonic Testing (UT, PAUT, TOFD)", link: "/ultrasonic-testing" },
    { name: "Radiographic Testing (RT, DR, CR)", link: "/radiographic-testing" },
    { name: "Magnetic Particle Testing (MT)", link: "/magnetic-particle-testing" },
    { name: "Liquid Penetrant Testing (PT)", link: "/penetrant-testing" },
    { name: "Eddy Current Testing (ET)", link: "/eddy-current-testing" },
    { name: "Visual Testing (VT, RVI)", link: "/visual-testing" }
];
const industries = [
    { name: "Oil & Gas Refineries", link: "/ndt-for-oil-gas" },
    { name: "Petrochemical Plants", link: "/ndt-for-oil-gas" },
    { name: "Power Generation", link: "/ndt-for-power-generation" },
    { name: "Manufacturing", link: null },
    { name: "Aerospace", link: "/ndt-for-aerospace" },
    { name: "Marine & Shipbuilding", link: null }
];

const allServices = [
    { icon: Users, title: "NDT Consulting", description: "ASNT Level III consulting, procedure development, code compliance", link: "/consulting-usa" },
    { icon: GraduationCap, title: "NDT Training", description: "Level I, II, III certification courses per ASNT SNT-TC-1A", link: "/training-usa" },
    { icon: Cpu, title: "Digital Twins", description: "3D asset visualization for integrity management", link: "/digital-twins" },
    { icon: Globe, title: "NDT Connect", description: "Cloud-based inspection management platform", link: "/ndt-connect" },
    { icon: Wrench, title: "ERP Solutions", description: "Enterprise resource planning for NDT companies", link: "/erp" }
];

export default function NDTServicesChicago() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Atlantis NDT - Chicago",
        "description": "Complete NDT solutions in Chicago - consulting, training, digital twins, ERP, and NDT Connect platform.",
        "address": { "@type": "PostalAddress", "addressLocality": "Chicago", "addressRegion": "IL", "addressCountry": "US" },
        "areaServed": ["Chicago", "Illinois", "Indiana", "Wisconsin", "Midwest"],
        "telephone": "+1-832-868-6670"
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="NDT Services Chicago IL | Training, Consulting & Digital Twins | ASNT Level III | Atlantis"
                description="Complete NDT solutions in Chicago & Midwest. Training, consulting, digital twins, NDT Connect, ERP. ASNT Level III certified. Manufacturing & refinery specialists. Free quote!"
                keywords="NDT services Chicago, NDT training Chicago, NDT consulting Illinois, ASNT Level III Chicago, digital twins manufacturing, NDT Connect, NDT ERP"
                canonical="https://atlantisndt.com/ndt-services-chicago"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* Hero */}
            <section className="bg-gradient-to-br from-[#004aad] to-[#0066cc] text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="flex items-center gap-2 text-blue-200 mb-4"><MapPin className="w-5 h-5" /><span>Chicago, Illinois • Serving the Midwest Region</span></div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">NDT Services in Chicago</h1>
                        <p className="text-xl text-blue-100 max-w-3xl mb-8">Complete NDT solutions for manufacturing and industrial sectors. Training, consulting, digital twins, and software platforms for the Midwest region.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-block bg-white text-[#004aad] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Get Free Quote</Link>
                            <Link to="/training-usa" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">Explore Training</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold text-[#004aad] mb-2">50+</div><div className="text-slate-600">Level III Experts</div></div>
                        <div><div className="text-4xl font-bold text-[#004aad] mb-2">1000+</div><div className="text-slate-600">Projects Completed</div></div>
                        <div><div className="text-4xl font-bold text-[#004aad] mb-2">95%</div><div className="text-slate-600">Training Pass Rate</div></div>
                        <div><div className="text-4xl font-bold text-[#004aad] mb-2">24/7</div><div className="text-slate-600">Support Available</div></div>
                    </div>
                </div>
            </section>

            {/* All Services */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">Complete NDT Solutions in Chicago</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">From training to consulting to cutting-edge digital solutions, we provide everything your NDT program needs.</p>
                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {allServices.map((service) => (
                            <Link key={service.title} to={service.link}>
                                <Card className="h-full hover:shadow-lg transition hover:border-[#004aad] cursor-pointer group">
                                    <CardHeader className="pb-2 text-center">
                                        <service.icon className="w-10 h-10 text-[#004aad] mx-auto mb-2 group-hover:scale-110 transition" />
                                        <CardTitle className="text-base">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent><p className="text-slate-600 text-sm text-center">{service.description}</p></CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* NDT Methods & Industries */}
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
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Factory className="w-6 h-6 text-primary" />Industries We Serve</h3>
                            <ul className="space-y-3">
                                {industries.map((ind) => (<li key={ind.name} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />{ind.link ? <Link to={ind.link} className="hover:text-primary hover:underline transition-all duration-200">{ind.name}</Link> : <span>{ind.name}</span>}</li>))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 bg-slate-100">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Choose Atlantis NDT in Chicago?</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="text-center"><CardHeader><Clock className="w-8 h-8 text-[#004aad] mx-auto mb-2" /><CardTitle>Fast Response</CardTitle></CardHeader><CardContent><p className="text-slate-600">24-48 hour mobilization across the Midwest</p></CardContent></Card>
                        <Card className="text-center"><CardHeader><Factory className="w-8 h-8 text-[#004aad] mx-auto mb-2" /><CardTitle>Manufacturing Focus</CardTitle></CardHeader><CardContent><p className="text-slate-600">Specialists in heavy industry and fabrication</p></CardContent></Card>
                        <Card className="text-center"><CardHeader><Shield className="w-8 h-8 text-[#004aad] mx-auto mb-2" /><CardTitle>Complete Solutions</CardTitle></CardHeader><CardContent><p className="text-slate-600">Training, consulting, and digital platforms</p></CardContent></Card>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-[#004aad] to-[#0066cc] text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Ready to Get Started in Chicago?</h2>
                    <p className="text-blue-100 mb-8 text-lg">Contact our Midwest team for training, consulting, or digital solutions.</p>
                    <Link to="/contact" className="inline-block bg-white text-[#004aad] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Request Free Quote</Link>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
