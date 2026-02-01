import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Users, FileText, Shield, Award, Target, MapPin, Building, Globe, AlertTriangle, Briefcase, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { keyLocations } from "@/data/programmatic-seo";

const colorMap: Record<string, { bg: string; text: string; light: string; border: string }> = {
    amber: { bg: "from-amber-700 to-amber-900", text: "text-amber-600", light: "bg-amber-50", border: "border-amber-500" },
    blue: { bg: "from-blue-700 to-blue-900", text: "text-blue-600", light: "bg-blue-50", border: "border-blue-500" },
    purple: { bg: "from-purple-700 to-purple-900", text: "text-purple-600", light: "bg-purple-50", border: "border-purple-500" },
    emerald: { bg: "from-emerald-700 to-emerald-900", text: "text-emerald-600", light: "bg-emerald-50", border: "border-emerald-500" },
    green: { bg: "from-green-700 to-green-900", text: "text-green-600", light: "bg-green-50", border: "border-green-500" },
    indigo: { bg: "from-indigo-700 to-indigo-900", text: "text-indigo-600", light: "bg-indigo-50", border: "border-indigo-500" },
    orange: { bg: "from-orange-700 to-orange-900", text: "text-orange-600", light: "bg-orange-50", border: "border-orange-500" },
    rose: { bg: "from-rose-700 to-rose-900", text: "text-rose-600", light: "bg-rose-50", border: "border-rose-500" },
    red: { bg: "from-red-700 to-red-900", text: "text-red-600", light: "bg-red-50", border: "border-red-500" },
    slate: { bg: "from-slate-700 to-slate-900", text: "text-slate-600", light: "bg-slate-50", border: "border-slate-500" }
};

const consultingServices = [
    {
        title: "Written Practice & Procedure Development",
        description: "Development and review of NDT written practices and procedures compliant with ASNT SNT-TC-1A, CP-189, NAS-410, and industry-specific codes including API, ASME Section V, and AWS D1.1. Our Level III consultants create customized documentation that addresses your specific equipment, personnel qualifications, and inspection requirements.",
        icon: FileText
    },
    {
        title: "NDT Program Audits & Assessments",
        description: "Comprehensive third-party audits of existing NDT programs to identify compliance gaps, improvement opportunities, and risk areas. We evaluate personnel qualifications, equipment calibration records, procedure adequacy, and documentation practices against applicable codes and client specifications.",
        icon: Shield
    },
    {
        title: "Technique Development & Qualification",
        description: "Custom NDT technique development for challenging applications including complex geometries, dissimilar metal welds, high-temperature components, and composite materials. Includes demonstration testing and written qualification records per ASME Section V Article 14 or equivalent.",
        icon: Target
    },
    {
        title: "Personnel Certification Program Management",
        description: "Design and implementation of employer-based certification programs per SNT-TC-1A, CP-189, or ISO 9712. Includes training curriculum development, examination preparation, practical demonstration requirements, and ongoing re-certification management.",
        icon: Award
    },
    {
        title: "Expert Witness & Litigation Support",
        description: "Technical expert services for legal proceedings involving NDT-related disputes, failure analysis investigations, and insurance claims. Our Level III experts provide depositions, written opinions, and courtroom testimony on inspection adequacy and industry standards.",
        icon: Users
    },
    {
        title: "Regulatory Compliance & Code Interpretation",
        description: "Guidance on regulatory compliance for API 510/570/653, ASME Section V, AWS D1.1/D1.5, ASNT standards, and client-specific requirements. We help organizations understand code requirements and implement compliant inspection programs.",
        icon: BookOpen
    }
];

const whyChoosePoints = [
    {
        title: "50+ Certified Level III Experts",
        description: "Access our global network of ASNT Level III certified professionals with expertise across all conventional and advanced NDT methods."
    },
    {
        title: "30+ Years Industry Experience",
        description: "Decades of hands-on experience in oil & gas, petrochemical, power generation, aerospace, and manufacturing inspection programs."
    },
    {
        title: "Code Committee Participation",
        description: "Our consultants actively participate in ASNT, API, and ASME code committees, ensuring current knowledge of evolving standards."
    },
    {
        title: "Rapid Response Availability",
        description: "Emergency consulting support available for urgent audit preparation, incident investigation, and regulatory compliance issues."
    }
];

interface ConsultingLocationPageProps {
    locationSlug: string;
}

export default function ConsultingLocationPage({ locationSlug }: ConsultingLocationPageProps) {
    const location = keyLocations.find(l => l.slug === locationSlug);

    if (!location) {
        return <div>Location not found</div>;
    }

    const colors = colorMap[location.color] || colorMap.slate;
    const pageTitle = `NDT Level III Consulting ${location.name} | ASNT Procedures & Program Audits | Atlantis NDT`;
    const pageDesc = `ASNT Level III NDT consulting services in ${location.name}. Procedure development, program audits, technique development, and expert witness services for ${location.industries.join(", ")}. 50+ certified experts. Request quote.`;
    const keywords = `NDT consulting ${location.name}, Level III consulting ${location.name}, NDT procedure development ${location.name}, NDT audit ${location.name}, ASNT consulting ${location.name}, NDT expert witness ${location.name}`;
    const canonical = `https://atlantisndt.com/ndt-consulting-${location.slug}`;

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": `NDT Level III Consulting in ${location.name}`,
        "provider": {
            "@type": "Organization",
            "name": "Atlantis NDT",
            "url": "https://atlantisndt.com"
        },
        "description": pageDesc,
        "areaServed": {
            "@type": "Place",
            "name": location.name
        },
        "serviceType": "NDT Level III Consulting",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "NDT Consulting Services",
            "itemListElement": consultingServices.map(service => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": service.title
                }
            }))
        }
    };

    const faqs = [
        {
            question: `What NDT consulting services do you offer in ${location.name}?`,
            answer: `We provide comprehensive NDT Level III consulting services in ${location.name} including written practice and procedure development per SNT-TC-1A and CP-189, third-party NDT program audits, technique development and qualification, personnel certification program management, expert witness services, and regulatory compliance guidance for API, ASME, and AWS codes. Our consultants have extensive experience with ${location.industries.join(", ")} applications specific to the ${location.region} region.`
        },
        {
            question: `Do you provide on-site NDT consulting in ${location.name}?`,
            answer: `Yes, our Level III consultants are available for on-site engagements throughout ${location.name} and the broader ${location.region} region. We offer both short-term project support and long-term embedded consulting arrangements. Remote consulting services are also available for documentation review, procedure development, and technical guidance when on-site presence is not required.`
        },
        {
            question: `Which industries do you serve in ${location.name}?`,
            answer: `We serve ${location.industries.join(", ")} and related sectors requiring NDT expertise in ${location.name}. Our consultants have direct experience with major operators in the region including ${location.companies.slice(0, 2).join(" and ")}, understanding local regulatory requirements and industry-specific inspection challenges.`
        },
        {
            question: "Can you develop employer-based NDT certification programs?",
            answer: "Absolutely. We specialize in designing and implementing employer-based NDT certification programs compliant with ASNT SNT-TC-1A, CP-189, ISO 9712, or NAS-410 requirements. This includes developing training curricula, written and practical examinations, qualification records, and ongoing recertification procedures tailored to your organization's specific needs and inspection scope."
        },
        {
            question: "How quickly can you respond to urgent consulting needs?",
            answer: "We maintain rapid response capability for urgent situations including pre-audit preparation, regulatory compliance issues, and incident investigations. For emergency consulting needs, we can typically deploy a qualified Level III consultant within 24-72 hours depending on location and availability. Contact us directly for time-sensitive requirements."
        },
        {
            question: "What certifications do your consultants hold?",
            answer: "Our consultants hold ASNT Level III certifications in multiple NDT methods including UT, RT, MT, PT, ET, and VT. Many also hold additional credentials including API 510/570/653 certifications, AWS CWI, CSWIP, and PCN qualifications. All consultants meet or exceed the experience requirements specified in SNT-TC-1A for their respective certification levels."
        }
    ];

    const problemsWeSolve = [
        {
            title: "Audit Non-Conformances",
            description: "Facing procedure deficiencies or personnel qualification issues during third-party or client audits? We help remediate findings and prevent recurrence."
        },
        {
            title: "Inconsistent Inspection Quality",
            description: "Variation in inspector interpretation and technique application? We standardize procedures and provide ongoing technical oversight."
        },
        {
            title: "Regulatory Compliance Gaps",
            description: "Uncertainty about evolving code requirements? We provide current interpretation and implementation guidance for API, ASME, and industry standards."
        },
        {
            title: "Complex Application Challenges",
            description: "Difficult geometries, new materials, or unique inspection scenarios? We develop and qualify custom techniques for challenging applications."
        }
    ];

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
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-2 text-white/80 mb-4">
                            <MapPin className="w-5 h-5" />
                            <span>NDT Level III Consulting</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            NDT Level III Consulting in {location.name}
                        </h1>
                        <p className="text-xl text-white/90 max-w-3xl mb-4">
                            Expert ASNT Level III consulting for procedure development, program audits, technique qualification, and technical oversight. Trusted by {location.industries[0].toLowerCase()} leaders across {location.region}.
                        </p>
                        <p className="text-lg text-white/70 max-w-2xl mb-8">
                            Our certified Level III consultants bring 30+ years of combined experience serving {location.industries.join(", ")} industries. We understand the unique inspection challenges and regulatory requirements in {location.name}.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-block bg-white text-slate-800 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition text-center shadow-lg">
                                Request a Consultation
                            </Link>
                            <Link to="/consulting" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition justify-center">
                                View All Consulting Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 bg-white border-b">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div><div className={`text-4xl font-bold ${colors.text} mb-2`}>50+</div><div className="text-slate-600">Certified Level III Experts</div></div>
                        <div><div className={`text-4xl font-bold ${colors.text} mb-2`}>30+</div><div className="text-slate-600">Years Combined Experience</div></div>
                        <div><div className={`text-4xl font-bold ${colors.text} mb-2`}>100%</div><div className="text-slate-600">Audit Success Rate</div></div>
                        <div><div className={`text-4xl font-bold ${colors.text} mb-2`}>All</div><div className="text-slate-600">NDT Methods Covered</div></div>
                    </div>
                </div>
            </section>

            {/* Problems We Solve */}
            <section className="py-16 bg-slate-100">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">NDT Challenges We Help You Solve</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Organizations in {location.name} trust our Level III consultants to address critical inspection program challenges.
                        </p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {problemsWeSolve.map((problem, index) => (
                            <motion.div
                                key={problem.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className={`h-full border-l-4 ${colors.border} hover:shadow-lg transition`}>
                                    <CardHeader className="pb-2">
                                        <div className="flex items-center gap-3">
                                            <AlertTriangle className={`w-6 h-6 ${colors.text}`} />
                                            <CardTitle className="text-lg">{problem.title}</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-slate-600">{problem.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Level III Consulting Services in {location.name}</h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            Our ASNT Level III consultants provide comprehensive technical support for {location.industries[0]} and related industries throughout the {location.region} region. Each engagement is tailored to your specific operational requirements and regulatory environment.
                        </p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {consultingServices.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full hover:shadow-lg transition group">
                                    <CardHeader className="pb-2">
                                        <service.icon className={`w-10 h-10 ${colors.text} mb-3 group-hover:scale-110 transition`} />
                                        <CardTitle className="text-lg">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries & Companies */}
            <section className={`py-16 ${colors.light}`}>
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-4">Industries We Serve in {location.name}</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            {location.name} is a strategic hub for {location.industries.join(", ").toLowerCase()} operations. Our consultants understand the specific inspection challenges, regulatory requirements, and quality expectations of operators in this region.
                        </p>
                    </motion.div>
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {location.industries.map((ind) => (
                            <motion.div
                                key={ind}
                                className="bg-white px-8 py-4 rounded-lg font-semibold shadow-sm border"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                            >
                                {ind}
                            </motion.div>
                        ))}
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-sm">
                        <h3 className="text-xl font-bold mb-6 text-center">Experience with Major Operators</h3>
                        <p className="text-slate-600 text-center mb-6">
                            Our consultants have direct project experience supporting NDT programs for leading companies in {location.region}:
                        </p>
                        <div className="flex flex-wrap justify-center gap-8">
                            {location.companies.map((company) => (
                                <div key={company} className="flex items-center gap-3 text-slate-700">
                                    <Building className={`w-5 h-5 ${colors.text}`} />
                                    <span className="font-medium">{company}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 bg-slate-900 text-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-4">Why Choose Atlantis NDT for Consulting in {location.name}</h2>
                        <p className="text-slate-300 max-w-2xl mx-auto">
                            When your inspection program quality and regulatory compliance are at stake, you need consultants with proven expertise and industry credibility.
                        </p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {whyChoosePoints.map((point, index) => (
                            <motion.div
                                key={point.title}
                                className="bg-slate-800 p-6 rounded-xl"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="flex items-start gap-4">
                                    <CheckCircle className={`w-6 h-6 ${colors.text} flex-shrink-0 mt-1`} />
                                    <div>
                                        <h3 className="text-lg font-bold mb-2">{point.title}</h3>
                                        <p className="text-slate-400">{point.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-4xl px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-slate-600">Common questions about our NDT consulting services in {location.name}</p>
                    </motion.div>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                className="bg-slate-50 p-6 rounded-lg"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <h3 className="font-bold text-lg mb-3">{faq.question}</h3>
                                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Pages */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Explore Related Services</h2>
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <Link to="/training">
                            <Card className="h-full hover:shadow-lg transition group text-center">
                                <CardHeader>
                                    <Briefcase className={`w-10 h-10 ${colors.text} mx-auto mb-2 group-hover:scale-110 transition`} />
                                    <CardTitle className="text-lg">NDT Training</CardTitle>
                                </CardHeader>
                                <CardContent><p className="text-slate-600 text-sm">Level I, II, III certification courses per SNT-TC-1A</p></CardContent>
                            </Card>
                        </Link>
                        <Link to="/ndt-consulting-level-iii">
                            <Card className="h-full hover:shadow-lg transition group text-center">
                                <CardHeader>
                                    <Users className={`w-10 h-10 ${colors.text} mx-auto mb-2 group-hover:scale-110 transition`} />
                                    <CardTitle className="text-lg">Global Level III Consulting</CardTitle>
                                </CardHeader>
                                <CardContent><p className="text-slate-600 text-sm">Worldwide consulting support and resources</p></CardContent>
                            </Card>
                        </Link>
                        <Link to="/intelligent-reporting-software">
                            <Card className="h-full hover:shadow-lg transition group text-center">
                                <CardHeader>
                                    <Globe className={`w-10 h-10 ${colors.text} mx-auto mb-2 group-hover:scale-110 transition`} />
                                    <CardTitle className="text-lg">Intelligent Reporting</CardTitle>
                                </CardHeader>
                                <CardContent><p className="text-slate-600 text-sm">Advanced NDT reporting and documentation software</p></CardContent>
                            </Card>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={`py-16 bg-gradient-to-r ${colors.bg} text-white text-center`}>
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Strengthen Your NDT Program in {location.name}?</h2>
                    <p className="text-white/80 mb-8 text-lg max-w-2xl mx-auto">
                        Our Level III consultants are ready to help with procedure development, program audits, and technical challenges. Request a consultation to discuss your specific requirements.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="inline-block bg-white text-slate-800 px-10 py-4 rounded-lg font-semibold hover:bg-slate-100 transition shadow-lg">
                            Request Consultation
                        </Link>
                        <a href="mailto:info@atlantisndt.com" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white/10 transition">
                            Email Directly
                        </a>
                    </div>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
