import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Newspaper, Mail, Download, Globe, Award, Users, Building, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pressReleases = [
    {
        date: "January 2026",
        title: "Atlantis NDT Expands Digital Twins Services to Middle East",
        summary: "Atlantis NDT announces expansion of its digital twin solutions to the Middle East region, partnering with major oil & gas operators in the GCC."
    },
    {
        date: "December 2025",
        title: "New ASNT Level III Training Facility Opens in Houston",
        summary: "State-of-the-art NDT training center opens in Houston, Texas, offering hands-on training for all major NDT methods."
    },
    {
        date: "November 2025",
        title: "Atlantis NDT Achieves ISO 9001:2015 Certification",
        summary: "Atlantis NDT achieves ISO 9001:2015 certification for its quality management system, demonstrating commitment to excellence."
    }
];

const mediaAssets = [
    { name: "Company Logo (PNG)", format: "PNG", size: "2 MB" },
    { name: "Company Logo (SVG)", format: "SVG", size: "45 KB" },
    { name: "Company Fact Sheet", format: "PDF", size: "850 KB" },
    { name: "Executive Headshots", format: "ZIP", size: "5 MB" }
];

export default function PressMedia() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Press & Media | Atlantis NDT",
        "description": "Press releases, media kit, and company information for journalists and media professionals.",
        "publisher": { "@type": "Organization", "name": "Atlantis NDT" }
    };

    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <SEOHead
                title="Press & Media | Company News & Media Kit | Atlantis NDT"
                description="Atlantis NDT press releases, media kit, and company information. Download logos, fact sheets, and press materials. Contact our media relations team."
                keywords="Atlantis NDT press, NDT company news, media kit, press releases, company information"
                canonical="https://atlantisndt.com/press"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            <section className="bg-gradient-to-br from-primary/10 to-accent/10 pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="flex items-center gap-2 text-primary mb-4">
                            <Newspaper className="w-5 h-5" />
                            <span>Media Relations</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Press & Media</h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mb-8">
                            Welcome to the Atlantis NDT press center. Find company news, press releases, media assets, and contact information for journalists and media professionals.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-16 bg-secondary/30">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <Users className="w-10 h-10 text-primary mx-auto mb-4" />
                            <div className="text-3xl font-bold text-primary mb-2">50+</div>
                            <div className="text-muted-foreground">Level III Experts</div>
                        </div>
                        <div>
                            <Globe className="w-10 h-10 text-primary mx-auto mb-4" />
                            <div className="text-3xl font-bold text-primary mb-2">15+</div>
                            <div className="text-muted-foreground">Countries Served</div>
                        </div>
                        <div>
                            <Building className="w-10 h-10 text-primary mx-auto mb-4" />
                            <div className="text-3xl font-bold text-primary mb-2">1,000+</div>
                            <div className="text-muted-foreground">Projects Completed</div>
                        </div>
                        <div>
                            <Calendar className="w-10 h-10 text-primary mx-auto mb-4" />
                            <div className="text-3xl font-bold text-primary mb-2">2018</div>
                            <div className="text-muted-foreground">Founded</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold mb-8">Recent News</h2>
                    <div className="space-y-6">
                        {pressReleases.map((release, idx) => (
                            <motion.div
                                key={release.title}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                                <Card className="hover:shadow-lg transition border-l-4 border-l-primary">
                                    <CardContent className="pt-6">
                                        <div className="text-sm text-muted-foreground mb-2">{release.date}</div>
                                        <h3 className="text-xl font-bold mb-2">{release.title}</h3>
                                        <p className="text-muted-foreground">{release.summary}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-secondary/30">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Media Kit</h2>
                            <p className="text-muted-foreground mb-6">
                                Download our media kit including company logos, fact sheets, and executive photos for press coverage.
                            </p>
                            <div className="space-y-3">
                                {mediaAssets.map(asset => (
                                    <div key={asset.name} className="flex items-center justify-between bg-background p-4 rounded-lg border border-primary/10">
                                        <div className="flex items-center gap-3">
                                            <Download className="w-5 h-5 text-primary" />
                                            <span className="font-medium">{asset.name}</span>
                                        </div>
                                        <div className="text-sm text-muted-foreground">{asset.format} • {asset.size}</div>
                                    </div>
                                ))}
                            </div>
                            <Link to="/contact">
                                <Button className="mt-6">
                                    <Mail className="w-4 h-4 mr-2" />
                                    Request Media Kit
                                </Button>
                            </Link>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Media Contact</h2>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Press Inquiries</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">
                                        For press inquiries, interview requests, or media information, please contact our communications team.
                                    </p>
                                    <div className="space-y-2 text-sm">
                                        <p><strong>Email:</strong> press@atlantisndt.com</p>
                                        <p><strong>Phone:</strong> +1-832-868-6670</p>
                                        <p><strong>Response Time:</strong> Within 24 hours</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold mb-6">About Atlantis NDT</h2>
                    <div className="prose max-w-none text-muted-foreground">
                        <p className="text-lg mb-4">
                            Atlantis NDT is a global provider of non-destructive testing (NDT) consulting, training, and digital solutions. Founded in 2018, the company specializes in delivering ASNT Level III expertise to the oil & gas, aerospace, power generation, and marine industries.
                        </p>
                        <p className="text-lg mb-4">
                            With operations spanning the United States, Middle East, and India, Atlantis NDT serves over 500 clients worldwide. The company's core offerings include outsourced ASNT Level III support, NDT training programs, digital twin solutions for asset integrity management, and enterprise resource planning (ERP) systems tailored for NDT service providers.
                        </p>
                        <p className="text-lg">
                            Atlantis NDT is committed to advancing the NDT industry through innovation, technical excellence, and professional development. The company's team includes over 50 ASNT Level III certified professionals with expertise in ultrasonic, radiographic, magnetic particle, penetrant, eddy current, and visual testing methods.
                        </p>
                    </div>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
