import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { CheckCircle, MapPin, Award, GraduationCap, Users, Cpu, Globe, Wrench, Building } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ndtMethods, keyLocations } from "@/data/programmatic-seo";

const colorMap: Record<string, { bg: string; text: string; light: string }> = {
    amber: { bg: "from-amber-600 to-orange-700", text: "text-amber-600", light: "bg-amber-50" },
    blue: { bg: "from-blue-600 to-indigo-700", text: "text-blue-600", light: "bg-blue-50" },
    purple: { bg: "from-purple-600 to-violet-700", text: "text-purple-600", light: "bg-purple-50" },
    emerald: { bg: "from-emerald-600 to-teal-700", text: "text-emerald-600", light: "bg-emerald-50" },
    green: { bg: "from-green-600 to-emerald-700", text: "text-green-600", light: "bg-green-50" },
    indigo: { bg: "from-indigo-600 to-purple-700", text: "text-indigo-600", light: "bg-indigo-50" },
    orange: { bg: "from-orange-600 to-red-700", text: "text-orange-600", light: "bg-orange-50" },
    rose: { bg: "from-rose-600 to-pink-700", text: "text-rose-600", light: "bg-rose-50" },
    red: { bg: "from-red-600 to-rose-700", text: "text-red-600", light: "bg-red-50" },
    slate: { bg: "from-slate-700 to-gray-800", text: "text-slate-600", light: "bg-slate-50" }
};

const allServices = [
    { icon: Users, title: "NDT Consulting", description: "Level III consulting services", link: "/consulting" },
    { icon: GraduationCap, title: "NDT Training", description: "Certification courses", link: "/training" },
    { icon: Cpu, title: "Digital Twins", description: "3D asset visualization", link: "/digital-twins" },
    { icon: Globe, title: "NDT Connect", description: "Cloud inspection platform", link: "/ndt-connect" },
    { icon: Wrench, title: "ERP Solutions", description: "Enterprise planning", link: "/erp" }
];

interface MethodLocationPageProps {
    methodSlug: string;
    locationSlug: string;
}

export default function MethodLocationPage({ methodSlug, locationSlug }: MethodLocationPageProps) {
    const method = ndtMethods.find(m => m.slug === methodSlug);
    const location = keyLocations.find(l => l.slug === locationSlug);

    if (!method || !location) {
        return <div>Page not found</div>;
    }

    const colors = colorMap[location.color] || colorMap.blue;
    const pageTitle = `${method.name} ${location.name} | ${method.shortName} Services & Training | Atlantis NDT`;
    const pageDesc = `Expert ${method.name} (${method.shortName}) services in ${location.name}. ${method.applications.slice(0, 3).join(", ")}. Training, consulting, inspection. ${location.industries.join(", ")} specialists. Get free quote!`;
    const keywords = `${method.name} ${location.name}, ${method.shortName} ${location.name}, ${method.slug} ${location.slug}, NDT ${location.name}, ${method.shortName} training ${location.name}`;
    const canonical = `https://atlantisndt.com/${methodSlug}-${locationSlug}`;

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `${method.name} Services in ${location.name}`,
        "provider": { "@type": "Organization", "name": "Atlantis NDT" },
        "description": pageDesc,
        "areaServed": { "@type": "Place", "name": location.name },
        "serviceType": method.name
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title={pageTitle}
                description={pageDesc}
                keywords={keywords}
                canonical={canonical}
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* Hero */}
            <section className={`bg-gradient-to-br ${colors.bg} text-white pt-24 pb-16`}>
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="flex items-center gap-2 text-white/80 mb-4">
                            <MapPin className="w-5 h-5" />
                            <span>{location.name}, {location.region}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            {method.name} in {location.name}
                        </h1>
                        <p className="text-xl text-white/90 max-w-3xl mb-8">
                            Expert {method.shortName} inspection, training, and consulting services in {location.name}.
                            Specialized in {location.industries.slice(0, 2).join(" and ")} applications.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-block bg-white text-slate-800 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">
                                Get Free Quote
                            </Link>
                            <Link to={`/blog/${method.slug}`} className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">
                                Learn About {method.shortName}
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div><div className={`text-4xl font-bold ${colors.text} mb-2`}>{method.shortName}</div><div className="text-slate-600">Specialists</div></div>
                        <div><div className={`text-4xl font-bold ${colors.text} mb-2`}>50+</div><div className="text-slate-600">Level II/III Experts</div></div>
                        <div><div className={`text-4xl font-bold ${colors.text} mb-2`}>24/7</div><div className="text-slate-600">Emergency Support</div></div>
                        <div><div className={`text-4xl font-bold ${colors.text} mb-2`}>ISO</div><div className="text-slate-600">Certified Services</div></div>
                    </div>
                </div>
            </section>

            {/* What is this method */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold mb-6">What is {method.name}?</h2>
                    <p className="text-lg text-slate-600 mb-8">{method.description}. In {location.name}, we specialize in {method.shortName} applications for {location.industries.join(", ")} industries.</p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card>
                            <CardHeader><CardTitle>Applications</CardTitle></CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {method.applications.map(app => (
                                        <li key={app} className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span>{app}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader><CardTitle>Techniques</CardTitle></CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {method.techniques.map(tech => (
                                        <li key={tech} className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span>{tech}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Local Industries */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">{method.shortName} for {location.name} Industries</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {location.industries.map(industry => (
                            <Card key={industry} className="text-center">
                                <CardHeader><CardTitle className="text-lg">{industry}</CardTitle></CardHeader>
                                <CardContent><p className="text-slate-600 text-sm">{method.shortName} inspection and testing for {industry.toLowerCase()} sector</p></CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Companies We Work With */}
            <section className={`py-16 ${colors.light}`}>
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Companies We Work With in {location.name}</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {location.companies.map(company => (
                            <div key={company} className="bg-white px-6 py-3 rounded-lg shadow-sm font-medium flex items-center gap-2">
                                <Building className="w-4 h-4 text-slate-400" />
                                {company}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Complete Solutions */}
            <section className="py-16 bg-slate-900 text-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">Complete {method.shortName} Solutions</h2>
                    <p className="text-center text-slate-400 mb-12">Beyond inspection — training, consulting, and digital transformation</p>
                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {allServices.map((service) => (
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

            {/* FAQ */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <div className="bg-slate-50 p-6 rounded-lg">
                            <h3 className="font-bold mb-2">What is {method.name} used for in {location.name}?</h3>
                            <p className="text-slate-600">{method.name} ({method.shortName}) is used in {location.name} primarily for {method.applications.slice(0, 3).join(", ")} in the {location.industries[0]} industry.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-lg">
                            <h3 className="font-bold mb-2">Do you offer {method.shortName} training in {location.name}?</h3>
                            <p className="text-slate-600">Yes, we offer comprehensive {method.shortName} training programs in {location.name} including Level I, II, and III certification courses.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-lg">
                            <h3 className="font-bold mb-2">What industries use {method.shortName} in {location.name}?</h3>
                            <p className="text-slate-600">In {location.name}, {method.shortName} is widely used in {location.industries.join(", ")} industries for quality assurance and safety compliance.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={`py-16 bg-gradient-to-r ${colors.bg} text-white text-center`}>
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Need {method.shortName} Services in {location.name}?</h2>
                    <p className="text-white/90 mb-8 text-lg">Contact our {location.name} team for {method.name} inspection, training, or consulting.</p>
                    <Link to="/contact" className="inline-block bg-white text-slate-800 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">
                        Request Free Quote
                    </Link>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
