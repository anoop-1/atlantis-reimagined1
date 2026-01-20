import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, MapPin, Award, GraduationCap, Users, Cpu, Globe, BookOpen, Lightbulb, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ndtMethods, keyLocations } from "@/data/programmatic-seo";

const colorMap: Record<string, { bg: string; text: string; light: string }> = {
    amber: { bg: "from-slate-800 to-slate-900", text: "text-amber-600", light: "bg-amber-50" },
    blue: { bg: "from-slate-800 to-slate-900", text: "text-blue-600", light: "bg-blue-50" },
    purple: { bg: "from-slate-800 to-slate-900", text: "text-purple-600", light: "bg-purple-50" },
    emerald: { bg: "from-slate-800 to-slate-900", text: "text-emerald-600", light: "bg-emerald-50" },
    green: { bg: "from-slate-800 to-slate-900", text: "text-green-600", light: "bg-green-50" },
    indigo: { bg: "from-slate-800 to-slate-900", text: "text-indigo-600", light: "bg-indigo-50" },
    orange: { bg: "from-slate-800 to-slate-900", text: "text-orange-600", light: "bg-orange-50" },
    rose: { bg: "from-slate-800 to-slate-900", text: "text-rose-600", light: "bg-rose-50" },
    red: { bg: "from-slate-800 to-slate-900", text: "text-red-600", light: "bg-red-50" },
    slate: { bg: "from-slate-800 to-slate-900", text: "text-slate-600", light: "bg-slate-50" }
};

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
    const pageTitle = `${method.name} Guide | ${method.shortName} Training & Consulting ${location.name} | Atlantis NDT`;
    const pageDesc = `Complete guide to ${method.name} (${method.shortName}) for professionals in ${location.name}. Learn about ${method.applications.slice(0, 3).join(", ")}. Training courses and consulting available. ${location.industries.join(", ")} applications.`;
    const keywords = `${method.name} ${location.name}, ${method.shortName} training ${location.name}, ${method.slug} guide, learn ${method.shortName}, ${method.shortName} consulting ${location.name}`;
    const canonical = `https://atlantisndt.com/${methodSlug}-${locationSlug}`;

    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Course",
                "name": `${method.name} Training in ${location.name}`,
                "provider": { "@type": "Organization", "name": "Atlantis NDT" },
                "description": `Professional ${method.shortName} certification training per ASNT SNT-TC-1A in ${location.name}.`,
                "courseCode": `${method.shortName}-${location.slug.toUpperCase()}`
            },
            {
                "@type": "Article",
                "name": `What is ${method.name}?`,
                "description": method.description,
                "author": { "@type": "Organization", "name": "Atlantis NDT" }
            }
        ]
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

            {/* Hero - Educational Focus */}
            <section className={`bg-gradient-to-br ${colors.bg} text-white pt-28 pb-16`}>
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="flex items-center gap-2 text-white/80 mb-4">
                            <BookOpen className="w-5 h-5" />
                            <span>NDT Method Guide</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            {method.name} ({method.shortName})
                        </h1>
                        <p className="text-xl text-white/90 max-w-3xl mb-4">
                            {method.description}
                        </p>
                        <p className="text-lg text-white/70 max-w-3xl mb-8">
                            Training and consulting available in {location.name} for {location.industries.slice(0, 2).join(" and ")} professionals.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/training" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition text-center">
                                View Training Courses
                            </Link>
                            <Link to={`/blog/${method.slug}`} className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">
                                Detailed {method.shortName} Guide
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Training Stats - Not Service Stats */}
            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div><div className={`text-4xl font-bold ${colors.text} mb-2`}>95%</div><div className="text-slate-600">Pass Rate</div></div>
                        <div><div className={`text-4xl font-bold ${colors.text} mb-2`}>SNT-TC-1A</div><div className="text-slate-600">Compliant Training</div></div>
                        <div><div className={`text-4xl font-bold ${colors.text} mb-2`}>50+</div><div className="text-slate-600">Expert Instructors</div></div>
                        <div><div className={`text-4xl font-bold ${colors.text} mb-2`}>Level I-III</div><div className="text-slate-600">Certifications</div></div>
                    </div>
                </div>
            </section>

            {/* What is this method - Educational Content */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold mb-6">What is {method.name}?</h2>
                    <p className="text-lg text-slate-600 mb-4">{method.description}</p>
                    <p className="text-lg text-slate-600 mb-8">
                        {method.shortName} is widely used in {location.name} across {location.industries.join(", ")} industries.
                        Our training programs prepare technicians for real-world {method.shortName} applications in these sectors.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card>
                            <CardHeader><CardTitle className="flex items-center gap-2"><Target className="w-5 h-5 text-primary" /> Common Applications</CardTitle></CardHeader>
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
                            <CardHeader><CardTitle className="flex items-center gap-2"><Lightbulb className="w-5 h-5 text-primary" /> Techniques You'll Learn</CardTitle></CardHeader>
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

            {/* Industry Applications in Location */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">{method.shortName} Applications in {location.name}</h2>
                    <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto">
                        Learn how {method.name} is applied across different industries in {location.name}.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {location.industries.map(industry => (
                            <Card key={industry} className="text-center hover:shadow-lg transition">
                                <CardHeader><CardTitle className="text-lg">{industry}</CardTitle></CardHeader>
                                <CardContent><p className="text-slate-600 text-sm">{method.shortName} is essential for quality control and safety compliance in the {industry.toLowerCase()} sector.</p></CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Learn This Method */}
            <section className={`py-16 ${colors.light}`}>
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Why Learn {method.shortName} in {location.name}?</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card>
                            <CardHeader><CardTitle className="flex items-center gap-2"><GraduationCap className="w-5 h-5 text-primary" /> Career Growth</CardTitle></CardHeader>
                            <CardContent><p className="text-slate-600">High demand for certified {method.shortName} technicians in {location.name}'s {location.industries[0]} industry.</p></CardContent>
                        </Card>
                        <Card>
                            <CardHeader><CardTitle className="flex items-center gap-2"><Award className="w-5 h-5 text-primary" /> Industry Recognition</CardTitle></CardHeader>
                            <CardContent><p className="text-slate-600">Our {method.shortName} training meets ASNT SNT-TC-1A standards recognized worldwide.</p></CardContent>
                        </Card>
                        <Card>
                            <CardHeader><CardTitle className="flex items-center gap-2"><Users className="w-5 h-5 text-primary" /> Expert Instructors</CardTitle></CardHeader>
                            <CardContent><p className="text-slate-600">Learn from Level III professionals with real-world {method.shortName} experience.</p></CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Training & Consulting CTA */}
            <section className="py-16 bg-slate-900 text-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">Our {method.shortName} Services</h2>
                    <p className="text-center text-slate-400 mb-12">Training and consulting — we help you master {method.name}</p>
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <Link to="/training">
                            <Card className="h-full bg-slate-800 border-slate-700 hover:border-primary transition group">
                                <CardHeader className="pb-2 text-center">
                                    <GraduationCap className="w-10 h-10 text-primary mx-auto mb-2 group-hover:scale-110 transition" />
                                    <CardTitle className="text-base text-white">{method.shortName} Training</CardTitle>
                                </CardHeader>
                                <CardContent><p className="text-slate-400 text-sm text-center">Level I, II, III certification courses</p></CardContent>
                            </Card>
                        </Link>
                        <Link to="/consulting">
                            <Card className="h-full bg-slate-800 border-slate-700 hover:border-primary transition group">
                                <CardHeader className="pb-2 text-center">
                                    <Users className="w-10 h-10 text-primary mx-auto mb-2 group-hover:scale-110 transition" />
                                    <CardTitle className="text-base text-white">{method.shortName} Consulting</CardTitle>
                                </CardHeader>
                                <CardContent><p className="text-slate-400 text-sm text-center">Level III procedure development</p></CardContent>
                            </Card>
                        </Link>
                        <Link to="/digital-twins">
                            <Card className="h-full bg-slate-800 border-slate-700 hover:border-primary transition group">
                                <CardHeader className="pb-2 text-center">
                                    <Cpu className="w-10 h-10 text-primary mx-auto mb-2 group-hover:scale-110 transition" />
                                    <CardTitle className="text-base text-white">Digital Twins</CardTitle>
                                </CardHeader>
                                <CardContent><p className="text-slate-400 text-sm text-center">3D visualization for {method.shortName}</p></CardContent>
                            </Card>
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ - Educational */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <div className="bg-slate-50 p-6 rounded-lg">
                            <h3 className="font-bold mb-2">What is {method.name} used for?</h3>
                            <p className="text-slate-600">{method.name} ({method.shortName}) is primarily used for {method.applications.slice(0, 3).join(", ")}. It's a critical NDT method in {location.industries[0]} and other industries.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-lg">
                            <h3 className="font-bold mb-2">Do you offer {method.shortName} training in {location.name}?</h3>
                            <p className="text-slate-600">Yes, we offer {method.shortName} training programs per ASNT SNT-TC-1A in {location.name}. Courses include Level I, II, and Level III certification preparation.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-lg">
                            <h3 className="font-bold mb-2">What certification will I receive?</h3>
                            <p className="text-slate-600">Our training follows ASNT SNT-TC-1A guidelines. Upon passing, you'll be qualified for employer-based certification at your Level (I, II, or III).</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-lg">
                            <h3 className="font-bold mb-2">How long does {method.shortName} training take?</h3>
                            <p className="text-slate-600">Training duration varies by level: Level I typically 40 hours, Level II 40-80 hours, Level III requires additional experience and advanced coursework.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA - Training Focus */}
            <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Start Your {method.shortName} Training Journey</h2>
                    <p className="text-white/80 mb-8 text-lg">Get certified in {method.name} with our expert-led training programs.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/training" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition">
                            View Training Courses
                        </Link>
                        <Link to="/contact" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                            Ask a Question
                        </Link>
                    </div>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
