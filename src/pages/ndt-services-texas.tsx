import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, MapPin, Award, Shield, Clock, Factory, GraduationCap, Users, Cpu, Wrench, Globe, Droplets } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ndtMethods = ["Ultrasonic Testing (UT, PAUT, TOFD)", "Radiographic Testing (RT, DR)", "Magnetic Particle Testing (MT)", "Liquid Penetrant Testing (PT)", "Eddy Current Testing (ET)", "Visual Testing (VT, RVI)"];
const industries = ["Oil & Gas Offshore", "Petrochemical & Refining", "Power Generation", "Marine & Shipbuilding", "Aerospace & Defense", "Manufacturing"];

const allServices = [
    { icon: Users, title: "NDT Consulting", description: "ASNT Level III consulting for oil & gas sector", link: "/consulting-usa" },
    { icon: GraduationCap, title: "NDT Training", description: "ASNT certification courses in Texas", link: "/training-usa" },
    { icon: Cpu, title: "Digital Twins", description: "3D visualization for asset integrity", link: "/digital-twins" },
    { icon: Globe, title: "NDT Connect", description: "Cloud inspection management platform", link: "/ndt-connect" },
    { icon: Wrench, title: "ERP Solutions", description: "Enterprise planning for NDT operations", link: "/erp" }
];

export default function NDTServicesTexas() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Atlantis NDT - Texas",
        "description": "Complete NDT solutions across Texas - consulting, training, digital twins for oil & gas, refinery, and petrochemical industries.",
        "address": { "@type": "PostalAddress", "addressLocality": "Houston", "addressRegion": "TX", "addressCountry": "US" },
        "areaServed": ["Houston", "Dallas", "San Antonio", "Austin", "Texas", "Gulf Coast"],
        "telephone": "+1-832-868-6670"
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="NDT Services Texas | Houston Dallas San Antonio | Oil & Gas NDT | ASNT Level III | Atlantis"
                description="Complete NDT solutions across Texas. Oil & gas, refinery, petrochemical specialists. Training, consulting, digital twins. Houston, Dallas, San Antonio coverage. Free quote!"
                keywords="NDT services Texas, NDT Houston, NDT Dallas, NDT San Antonio, oil gas NDT Texas, refinery inspection Texas, ASNT Level III Texas, petrochemical NDT"
                canonical="https://atlantisndt.com/ndt-services-texas"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            <section className="bg-gradient-to-br from-amber-700 to-orange-800 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="flex items-center gap-2 text-amber-200 mb-4"><MapPin className="w-5 h-5" /><span>Texas • Houston, Dallas, San Antonio & Gulf Coast</span></div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">NDT Services Across Texas</h1>
                        <p className="text-xl text-amber-100 max-w-3xl mb-8">The energy capital of the world deserves world-class NDT. Complete solutions for oil & gas, refinery, and petrochemical industries statewide.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-block bg-white text-amber-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Get Free Quote</Link>
                            <Link to="/ndt-services-houston" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">Houston Office</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold text-amber-700 mb-2">50+</div><div className="text-slate-600">Level III Experts</div></div>
                        <div><div className="text-4xl font-bold text-amber-700 mb-2">2000+</div><div className="text-slate-600">Refinery Projects</div></div>
                        <div><div className="text-4xl font-bold text-amber-700 mb-2">API</div><div className="text-slate-600">Compliant Services</div></div>
                        <div><div className="text-4xl font-bold text-amber-700 mb-2">24/7</div><div className="text-slate-600">Turnaround Support</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">Complete NDT Solutions in Texas</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">From training to digital twins, we provide comprehensive NDT solutions for the Texas energy sector.</p>
                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {allServices.map((service) => (
                            <Link key={service.title} to={service.link}>
                                <Card className="h-full hover:shadow-lg transition hover:border-amber-500 cursor-pointer group">
                                    <CardHeader className="pb-2 text-center">
                                        <service.icon className="w-10 h-10 text-amber-700 mx-auto mb-2 group-hover:scale-110 transition" />
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
                        <div><h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Award className="w-6 h-6 text-amber-700" />NDT Methods</h3><ul className="space-y-3">{ndtMethods.map((s) => (<li key={s} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span>{s}</span></li>))}</ul></div>
                        <div><h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Droplets className="w-6 h-6 text-amber-700" />Industries We Serve</h3><ul className="space-y-3">{industries.map((i) => (<li key={i} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span>{i}</span></li>))}</ul></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-100">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Coverage Across Texas</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        <Card className="text-center"><CardHeader><CardTitle>Houston</CardTitle></CardHeader><CardContent><p className="text-slate-600 text-sm">HQ & Gulf Coast operations</p><Link to="/ndt-services-houston" className="text-amber-700 text-sm font-medium hover:underline">Learn more →</Link></CardContent></Card>
                        <Card className="text-center"><CardHeader><CardTitle>Dallas-Fort Worth</CardTitle></CardHeader><CardContent><p className="text-slate-600 text-sm">Manufacturing & aerospace</p></CardContent></Card>
                        <Card className="text-center"><CardHeader><CardTitle>San Antonio</CardTitle></CardHeader><CardContent><p className="text-slate-600 text-sm">Defense & energy sector</p></CardContent></Card>
                        <Card className="text-center"><CardHeader><CardTitle>Corpus Christi</CardTitle></CardHeader><CardContent><p className="text-slate-600 text-sm">Refinery & petrochemical</p></CardContent></Card>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-amber-700 to-orange-700 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Ready to Partner with Texas's NDT Experts?</h2>
                    <p className="text-amber-100 mb-8 text-lg">Contact us for training, consulting, or digital twin solutions.</p>
                    <Link to="/contact" className="inline-block bg-white text-amber-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Request Free Quote</Link>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
