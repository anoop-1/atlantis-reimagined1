import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, MapPin, Award, Shield, Clock, Factory, GraduationCap, Users, Cpu, Wrench, Globe, Droplets } from "lucide-react";
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
    { name: "Oil & Gas Offshore", link: "/ndt-for-oil-gas" },
    { name: "Petrochemical & Refining", link: "/ndt-for-oil-gas" },
    { name: "Power Generation", link: "/ndt-for-power-generation" },
    { name: "Marine & Shipbuilding", link: null },
    { name: "Aerospace & Defense", link: "/ndt-for-aerospace" },
    { name: "Manufacturing", link: null }
];

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

            <section className="bg-gradient-to-r from-primary/10 to-accent/10 pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="flex items-center gap-2 text-primary mb-4"><MapPin className="w-5 h-5" /><span>Texas • Houston, Dallas, San Antonio & Gulf Coast</span></div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">NDT Services Across <span className="gradient-text">Texas</span></h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mb-8">The energy capital of the world deserves world-class NDT. Complete solutions for oil & gas, refinery, and petrochemical industries statewide.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition text-center">Get Free Quote</Link>
                            <Link to="/ndt-services-houston" className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition justify-center">Houston Office</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-12 bg-secondary/30">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold text-primary mb-2">50+</div><div className="text-muted-foreground">Level III Experts</div></div>
                        <div><div className="text-4xl font-bold text-primary mb-2">2000+</div><div className="text-muted-foreground">Refinery Projects</div></div>
                        <div><div className="text-4xl font-bold text-primary mb-2">API</div><div className="text-muted-foreground">Compliant Services</div></div>
                        <div><div className="text-4xl font-bold text-primary mb-2">24/7</div><div className="text-muted-foreground">Turnaround Support</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-background">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">Complete NDT Solutions in Texas</h2>
                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">From training to digital twins, we provide comprehensive NDT solutions for the Texas energy sector.</p>
                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {allServices.map((service) => (
                            <Link key={service.title} to={service.link}>
                                <Card className="h-full hover:shadow-lg transition hover:border-primary cursor-pointer group border-0 shadow-sm">
                                    <CardHeader className="pb-2 text-center">
                                        <service.icon className="w-10 h-10 text-primary mx-auto mb-2 group-hover:scale-110 transition" />
                                        <CardTitle className="text-base">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent><p className="text-muted-foreground text-sm text-center">{service.description}</p></CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-secondary/30">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">NDT Inspection Services</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Award className="w-6 h-6 text-primary" />NDT Methods</h3>
                            <ul className="space-y-3">
                                {ndtMethods.map((m) => (
                                    <li key={m.name} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                                        <Link to={m.link} className="hover:text-primary transition">{m.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Droplets className="w-6 h-6 text-primary" />Industries We Serve</h3>
                            <ul className="space-y-3">
                                {industries.map((ind) => (
                                    <li key={ind.name} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                                        {ind.link ? (
                                            <Link to={ind.link} className="hover:text-primary transition">{ind.name}</Link>
                                        ) : (
                                            <span>{ind.name}</span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-background">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Coverage Across Texas</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        <Card className="text-center hover:shadow-lg transition border-0 shadow-sm"><CardHeader><CardTitle>Houston</CardTitle></CardHeader><CardContent><p className="text-muted-foreground text-sm">HQ & Gulf Coast operations</p><Link to="/ndt-services-houston" className="text-primary text-sm font-medium hover:underline">Learn more →</Link></CardContent></Card>
                        <Card className="text-center hover:shadow-lg transition border-0 shadow-sm"><CardHeader><CardTitle>Dallas-Fort Worth</CardTitle></CardHeader><CardContent><p className="text-muted-foreground text-sm">Manufacturing & aerospace</p></CardContent></Card>
                        <Card className="text-center hover:shadow-lg transition border-0 shadow-sm"><CardHeader><CardTitle>San Antonio</CardTitle></CardHeader><CardContent><p className="text-muted-foreground text-sm">Defense & energy sector</p></CardContent></Card>
                        <Card className="text-center hover:shadow-lg transition border-0 shadow-sm"><CardHeader><CardTitle>Corpus Christi</CardTitle></CardHeader><CardContent><p className="text-muted-foreground text-sm">Refinery & petrochemical</p></CardContent></Card>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10 text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Ready to Partner with Texas's NDT Experts?</h2>
                    <p className="text-muted-foreground mb-8 text-lg">Contact us for training, consulting, or digital twin solutions.</p>
                    <Link to="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition">Request Free Quote</Link>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
