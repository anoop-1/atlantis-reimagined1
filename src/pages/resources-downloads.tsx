import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Download, FileCheck, CheckCircle, ClipboardList, Shield, Award, BookOpen, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const resources = [
    {
        icon: ClipboardList,
        title: "NDT Inspection Checklist",
        description: "Comprehensive checklist for planning and executing NDT inspections. Covers pre-inspection, during inspection, and post-inspection requirements.",
        type: "PDF Checklist",
        pages: "4 pages",
        format: "PDF"
    },
    {
        icon: FileCheck,
        title: "API 653 Tank Inspection Template",
        description: "Template for documenting above-ground storage tank inspections per API 653 requirements. Includes shell, floor, and roof inspection forms.",
        type: "Excel Template",
        pages: "Multi-sheet",
        format: "XLSX"
    },
    {
        icon: BookOpen,
        title: "ASNT Level III Exam Study Guide",
        description: "Study guide overview for ASNT Level III certification preparation. Covers exam format, topics, and preparation strategies.",
        type: "PDF Guide",
        pages: "12 pages",
        format: "PDF"
    },
    {
        icon: FileText,
        title: "NDT Procedure Template",
        description: "General NDT procedure template aligned with ASNT SNT-TC-1A and ISO 9712 requirements. Customize for your specific method and application.",
        type: "Word Template",
        pages: "6 pages",
        format: "DOCX"
    },
    {
        icon: Shield,
        title: "NDT Safety Checklist",
        description: "Safety checklist for NDT operations including radiation safety, electrical safety, and general worksite safety requirements.",
        type: "PDF Checklist",
        pages: "3 pages",
        format: "PDF"
    },
    {
        icon: Award,
        title: "Training Requirements Matrix",
        description: "Matrix showing training hour requirements for various NDT certifications including ASNT SNT-TC-1A, ISO 9712, and PCN schemes.",
        type: "PDF Reference",
        pages: "2 pages",
        format: "PDF"
    }
];

export default function ResourcesDownloads() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Free NDT Resources & Downloads",
        "description": "Free downloadable resources for NDT professionals including inspection checklists, templates, and study guides.",
        "provider": { "@type": "Organization", "name": "Atlantis NDT" }
    };

    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <SEOHead
                title="Free NDT Resources & Downloads | Checklists, Templates, Study Guides | Atlantis NDT"
                description="Download free NDT resources: inspection checklists, API 653 templates, ASNT Level III study guides, procedure templates, and safety checklists. Professional NDT tools."
                keywords="NDT resources, NDT checklist, API 653 template, ASNT study guide, NDT procedure template, free NDT downloads, inspection checklist"
                canonical="https://atlantisndt.com/resources"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            <section className="bg-gradient-to-br from-primary/10 to-accent/10 pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="flex items-center gap-2 text-primary mb-4">
                            <Download className="w-5 h-5" />
                            <span>Free Professional Resources</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">NDT Resources & Downloads</h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mb-8">
                            Access free professional resources including inspection checklists, procedure templates, study guides, and reference materials. All resources are developed by ASNT Level III certified professionals with real industry experience.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {resources.map((resource, idx) => (
                            <motion.div
                                key={resource.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                                <Card className="h-full hover:shadow-lg transition group border-primary/10 hover:border-primary/30">
                                    <CardHeader>
                                        <div className="flex items-start justify-between">
                                            <resource.icon className="w-10 h-10 text-primary mb-2" />
                                            <span className="text-xs bg-secondary/50 px-2 py-1 rounded-full text-muted-foreground">{resource.format}</span>
                                        </div>
                                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground text-sm mb-4">{resource.description}</p>
                                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                                            <span>{resource.type}</span>
                                            <span>{resource.pages}</span>
                                        </div>
                                        <Link to="/contact">
                                            <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition">
                                                <Download className="w-4 h-4 mr-2" />
                                                Request Download
                                            </Button>
                                        </Link>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-secondary/30">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Why Use Our Resources?</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <CheckCircle className="w-10 h-10 text-primary mx-auto mb-4" />
                            <h3 className="font-bold mb-2">Industry Vetted</h3>
                            <p className="text-sm text-muted-foreground">Developed by ASNT Level III professionals with 20+ years experience</p>
                        </div>
                        <div className="text-center">
                            <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
                            <h3 className="font-bold mb-2">Standards Compliant</h3>
                            <p className="text-sm text-muted-foreground">Aligned with ASNT, API, ISO, and other major standards</p>
                        </div>
                        <div className="text-center">
                            <Award className="w-10 h-10 text-primary mx-auto mb-4" />
                            <h3 className="font-bold mb-2">Audit Ready</h3>
                            <p className="text-sm text-muted-foreground">Templates designed to meet audit and certification requirements</p>
                        </div>
                        <div className="text-center">
                            <FileCheck className="w-10 h-10 text-primary mx-auto mb-4" />
                            <h3 className="font-bold mb-2">Regularly Updated</h3>
                            <p className="text-sm text-muted-foreground">Resources updated to reflect latest industry standards</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-primary to-accent text-primary-foreground text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Need Custom Templates?</h2>
                    <p className="text-primary-foreground/90 mb-8 text-lg">
                        Our consulting team can develop custom NDT procedures, forms, and documentation tailored to your specific requirements and industry standards.
                    </p>
                    <Link to="/contact" className="inline-block bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition">
                        Contact Us for Custom Solutions
                    </Link>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
