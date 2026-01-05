import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    Radio,
    Scan,
    Magnet,
    Droplet,
    Zap,
    Eye,
    ArrowRight,
} from "lucide-react";

const ndtMethods = [
    {
        icon: Scan,
        name: "Ultrasonic Testing (UT)",
        shortName: "UT",
        description: "Uses high-frequency sound waves to detect internal defects, measure thickness, and characterize materials. Ideal for welds, forgings, and thickness measurement.",
        applications: ["Weld inspection", "Corrosion mapping", "Thickness gauging", "Flaw detection"],
        link: "/blog/ultrasonic-testing",
        color: "from-blue-500 to-blue-700"
    },
    {
        icon: Radio,
        name: "Radiographic Testing (RT)",
        shortName: "RT",
        description: "Uses X-rays or gamma rays to create images of internal structures, revealing defects like porosity, cracks, and inclusions invisible to the naked eye.",
        applications: ["Pipeline welds", "Castings", "Pressure vessels", "Aerospace components"],
        link: "/blog/radiographic-testing",
        color: "from-purple-500 to-purple-700"
    },
    {
        icon: Magnet,
        name: "Magnetic Particle Testing (MT)",
        shortName: "MT",
        description: "Detects surface and near-surface defects in ferromagnetic materials by magnetizing the component and applying iron particles.",
        applications: ["Weld inspection", "Castings", "Forgings", "Automotive parts"],
        link: "/blog/magnetic-particle-testing",
        color: "from-red-500 to-red-700"
    },
    {
        icon: Droplet,
        name: "Liquid Penetrant Testing (PT)",
        shortName: "PT",
        description: "Reveals surface-breaking defects by applying a colored or fluorescent dye that seeps into cracks and is made visible with developer.",
        applications: ["Non-ferrous metals", "Ceramics", "Plastics", "Welds"],
        link: "/blog/penetrant-testing",
        color: "from-green-500 to-green-700"
    },
    {
        icon: Zap,
        name: "Eddy Current Testing (ET)",
        shortName: "ET",
        description: "Uses electromagnetic induction to detect surface and near-surface defects in conductive materials. Excellent for heat exchanger tube inspection.",
        applications: ["Heat exchangers", "Aircraft structures", "Tubing", "Conductivity testing"],
        link: "/blog/eddy-current-testing",
        color: "from-yellow-500 to-orange-600"
    },
    {
        icon: Eye,
        name: "Visual Testing (VT)",
        shortName: "VT",
        description: "The most fundamental NDT method using direct observation or optical aids to detect visible surface defects, corrosion, and misalignment.",
        applications: ["Weld inspection", "Corrosion monitoring", "Pre-service inspection", "General QC"],
        link: "/blog/visual-testing",
        color: "from-teal-500 to-teal-700"
    },
];

export default function NDTMethodsPage() {
    // ItemList schema for hub page
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Non-Destructive Testing Methods",
        "description": "Complete guide to all major NDT methods including Ultrasonic Testing, Radiographic Testing, Magnetic Particle Testing, Penetrant Testing, Eddy Current Testing, and Visual Testing.",
        "numberOfItems": ndtMethods.length,
        "itemListElement": ndtMethods.map((method, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": method.name,
            "url": `https://atlantisndt.com${method.link}`
        }))
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />

            <SEOHead
                title="NDT Methods | Complete Guide to Non-Destructive Testing Techniques"
                description="Explore all types of NDT testing methods: Ultrasonic (UT), Radiographic (RT), Magnetic Particle (MT), Penetrant (PT), Eddy Current (ET), and Visual Testing (VT). Learn applications and benefits."
                keywords="NDT methods, types of NDT testing, non-destructive testing techniques, ultrasonic testing, radiographic testing, magnetic particle testing, penetrant testing, eddy current testing, visual testing"
                canonical="https://atlantisndt.com/ndt-methods"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#004aad] to-blue-800 text-white pt-24">
                <div className="container mx-auto max-w-6xl px-6 py-16">
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            NDT Methods
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
                            Comprehensive guide to Non-Destructive Testing techniques.
                            Choose the right method for your inspection needs.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Methods Grid */}
            <main className="container mx-auto max-w-6xl px-6 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ndtMethods.map((method, index) => (
                        <motion.div
                            key={method.shortName}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full hover:shadow-xl transition-shadow group">
                                <CardHeader>
                                    <div
                                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-4`}
                                    >
                                        <method.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <CardTitle className="text-xl">
                                        {method.name}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {method.description}
                                    </p>
                                    <div>
                                        <h4 className="text-sm font-semibold text-slate-900 mb-2">
                                            Common Applications:
                                        </h4>
                                        <ul className="text-sm text-slate-600 space-y-1">
                                            {method.applications.map((app, idx) => (
                                                <li key={idx} className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                                    {app}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <Link
                                        to={method.link}
                                        className="inline-flex items-center gap-2 text-[#004aad] font-semibold hover:underline pt-2"
                                    >
                                        Learn More <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.section
                    className="mt-16 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 text-center text-white"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Need Help Choosing the Right NDT Method?
                    </h2>
                    <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                        Our Level III consultants can help you select the optimal testing
                        method for your specific application and requirements.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/consulting"
                            className="inline-block bg-[#004aad] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                        >
                            Consulting Services
                        </Link>
                        <Link
                            to="/training"
                            className="inline-block bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition"
                        >
                            NDT Training
                        </Link>
                    </div>
                </motion.section>
            </main>

            <ContactDetails />
        </div>
    );
}
