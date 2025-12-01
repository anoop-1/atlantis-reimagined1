import { motion } from "framer-motion";
import {
   ClipboardCheck,
   Users,
   FileSearch,
   Shield,
   Target,
   CheckCircle,
   Zap,
   Award,
   TrendingUp,
   BookOpen,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Link } from "react-router-dom";
import ContactDetails from "@/components/ContactDetails";
import { SEOHead } from "@/components/SEOHead";

export default function ConsultingServices() {
   const expertise = [
      {
         icon: ClipboardCheck,
         title: "Procedure Development & Verification",
         description:
            "Creation, validation, and verification of NDT procedures in accordance with ASNT, ISO, ASTM, and client-specific standards. We ensure procedures meet all regulatory requirements and industry best practices.",
      },
      {
         icon: BookOpen,
         title: "Written Practice Development",
         description:
            "Comprehensive written practice (WP) development and maintenance for NDT companies. Ensures technical adequacy and compliance with applicable codes and standards.",
      },
      {
         icon: Users,
         title: "Level III Training & Certification",
         description:
            "Comprehensive NDT training programs including Level I, II, and III certification. Our Level III consultants provide expert-level training designed to enhance competency and meet compliance requirements.",
      },
      {
         icon: FileSearch,
         title: "Audit & Compliance Services",
         description:
            "Third-party audit services for NDT systems, inspection procedures, and quality programs. We ensure alignment with industry codes, regulatory frameworks, and contractual requirements.",
      },
      {
         icon: Shield,
         title: "Quality Assurance & Program Management",
         description:
            "Comprehensive QA oversight including supervision of inspection teams, documentation reviews, performance monitoring, and quality program management for consistent excellence.",
      },
      {
         icon: Target,
         title: "Failure Analysis & Root Cause Investigation",
         description:
            "Expert-level consultation for defect analysis, root cause investigation, and recommendations for process improvement and preventive action.",
      },
      {
         icon: Zap,
         title: "Code & Standards Interpretation",
         description:
            "Expert interpretation of codes, standards, and contractual documents that control non-destructive testing methods. Guidance on standards compliance and application.",
      },
      {
         icon: Award,
         title: "Personnel Qualification & Approval",
         description:
            "Training, examination, and certification of NDT personnel. Approval of NDT procedures and work instructions for technical adequacy.",
      },
   ];

   const methodologies = [
      "Ultrasonic Testing (UT) Consulting",
      "Radiographic Testing (RT) Consulting",
      "Magnetic Particle Testing (MT) Consulting",
      "Penetrant Testing (PT) Consulting",
      "Eddy Current Testing (ET) Consulting",
      "Visual Testing (VT) Consulting",
      "NDT Program Development",
      "Level III Consultation Services",
   ];

   const industries = [
      "Oil & Gas",
      "Marine",
      "Aerospace",
      "Nuclear",
      "Energy",
      "Manufacturing",
      "Construction",
      "Power Generation",
      "Transportation",
      "Chemical Processing",
   ];

   const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "NDT Level III Consulting Services",
      "description": "Expert Level III NDT consulting services including procedure development, training, audits, and quality assurance",
      "provider": {
         "@type": "Organization",
         "name": "Atlantis NDT",
         "url": "https://atlantisndt.com",
      },
      "areaServed": "United States",
      "serviceType": ["Level III NDT Consultation", "NDT Training", "Quality Assurance", "Compliance Audits"],
   };

   const benefits = [
      "Full compliance with ASNT SNT-TC-1A and ISO 9712 standards",
      "Reduced inspection errors and costly rework",
      "Standardized NDT documentation and traceability",
      "Increased asset reliability and operational uptime",
      "Expert oversight for high-risk and critical inspections",
      "Certified Level III personnel with decades of combined experience",
      "Customized training programs for your team",
      "Ongoing support and continuous improvement",
   ];

   return (
      <div className="min-h-screen pt-20 bg-gray-50">
         <Navigation />
         <SEOHead
            title="Best NDT Level III Consultant in the US | Atlantis NDT"
            description="Expert Level III NDT consulting services in the United States. ASNT certified consultants providing training, audits, quality assurance, and compliance oversight. Contact our Level III consultants today."
            keywords="best NDT Level III consultant, Level III NDT consulting, ASNT Level III consultant, NDT training, NDT audit services, ISO 9712 consultant, NDT quality assurance, non-destructive testing consultant"
            structuredData={structuredData}
            canonical="https://atlantisndt.com/consulting"
         />

         {/* Hero Section */}
         <motion.section
            className="py-20 bg-gradient-to-r from-primary/10 to-accent/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
         >
            <div className="container mx-auto px-6 text-center">
               <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Level III{" "}
                  <span className="gradient-text">Consulting Services</span>
               </h1>
               <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Expert guidance for compliance, training, and quality
                  assurance in Non-Destructive Testing. Our certified Level III
                  consultants ensure inspection excellence and regulatory
                  integrity.
               </p>
            </div>
         </motion.section>

         {/* Expertise Section */}
         <section className="py-20">
            <div className="container mx-auto px-6">
               <motion.div
                  className="text-center mb-16"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
               >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                     Areas of <span className="gradient-text">Expertise</span>
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                     Our certified Level III engineers bring years of experience
                     across multiple NDT methods and industries, ensuring full
                     compliance and operational efficiency.
                  </p>
               </motion.div>

               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {expertise.map((item, index) => (
                     <motion.div
                        key={item.title}
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                     >
                        <Card className="h-full border-0 shadow-md hover-scale group">
                           <CardHeader>
                              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                                 <item.icon className="w-8 h-8 text-primary-foreground" />
                              </div>
                              <CardTitle className="text-xl">
                                 {item.title}
                              </CardTitle>
                           </CardHeader>
                           <CardContent>
                              <p className="text-muted-foreground">
                                 {item.description}
                              </p>
                           </CardContent>
                        </Card>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* Benefits Section */}
         <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6 text-center">
               <motion.h2
                  className="text-3xl md:text-4xl font-bold mb-8"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
               >
                  Why Choose Our{" "}
                  <span className="gradient-text">Consulting</span> Services
               </motion.h2>

               <motion.ul
                  className="max-w-2xl mx-auto space-y-4 text-left"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
               >
                  {benefits.map((benefit, i) => (
                     <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1" />
                        <span className="text-lg text-muted-foreground">
                           {benefit}
                        </span>
                     </li>
                  ))}
               </motion.ul>
            </div>
         </section>

         {/* Regional Services Section */}
         <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-slate-900/10">
            <div className="max-w-6xl mx-auto">
               <motion.div
                  className="text-center mb-12"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
               >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                     Regional Expertise, Global Standards
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                     Specialized NDT consulting services tailored to your regional market and industry needs
                  </p>
               </motion.div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* USA Card */}
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                  >
                     <Card className="h-full hover:shadow-lg transition-shadow bg-card border-primary/20 hover:border-primary">
                        <CardHeader>
                           <CardTitle className="text-primary">USA Consulting</CardTitle>
                           <p className="text-sm text-muted-foreground mt-2">
                              Nationwide expertise for aerospace, oil & gas, and industrial sectors
                           </p>
                        </CardHeader>
                        <CardContent>
                           <ul className="space-y-2 mb-6 text-sm">
                              <li className="flex items-center gap-2">
                                 <CheckCircle className="w-4 h-4 text-primary" />
                                 <span>ASME, API, ASTM Compliant</span>
                              </li>
                              <li className="flex items-center gap-2">
                                 <CheckCircle className="w-4 h-4 text-primary" />
                                 <span>Strategic Nationwide Locations</span>
                              </li>
                              <li className="flex items-center gap-2">
                                 <CheckCircle className="w-4 h-4 text-primary" />
                                 <span>FAA & Defense Contractor Support</span>
                              </li>
                           </ul>
                           <Link to="/consulting-usa">
                              <Button variant="outline" className="w-full text-primary hover:bg-primary/10">
                                 Learn More
                              </Button>
                           </Link>
                        </CardContent>
                     </Card>
                  </motion.div>

                  {/* Middle East Card */}
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6, delay: 0.1 }}
                  >
                     <Card className="h-full hover:shadow-lg transition-shadow bg-card border-primary/20 hover:border-primary">
                        <CardHeader>
                           <CardTitle className="text-primary">Middle East Services</CardTitle>
                           <p className="text-sm text-muted-foreground mt-2">
                              GCC oil & gas expertise with ARAMCO compliance
                           </p>
                        </CardHeader>
                        <CardContent>
                           <ul className="space-y-2 mb-6 text-sm">
                              <li className="flex items-center gap-2">
                                 <CheckCircle className="w-4 h-4 text-primary" />
                                 <span>ARAMCO & SABIC Standards</span>
                              </li>
                              <li className="flex items-center gap-2">
                                 <CheckCircle className="w-4 h-4 text-primary" />
                                 <span>Offshore & Onshore Support</span>
                              </li>
                              <li className="flex items-center gap-2">
                                 <CheckCircle className="w-4 h-4 text-primary" />
                                 <span>Risk-Based Inspection Planning</span>
                              </li>
                           </ul>
                           <Link to="/consulting-me">
                              <Button variant="outline" className="w-full text-primary hover:bg-primary/10">
                                 Learn More
                              </Button>
                           </Link>
                        </CardContent>
                     </Card>
                  </motion.div>

                  {/* India Card */}
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6, delay: 0.2 }}
                  >
                     <Card className="h-full hover:shadow-lg transition-shadow bg-card border-primary/20 hover:border-primary">
                        <CardHeader>
                           <CardTitle className="text-primary">India Services</CardTitle>
                           <p className="text-sm text-muted-foreground mt-2">
                              Manufacturing expertise with Indian Standards compliance
                           </p>
                        </CardHeader>
                        <CardContent>
                           <ul className="space-y-2 mb-6 text-sm">
                              <li className="flex items-center gap-2">
                                 <CheckCircle className="w-4 h-4 text-primary" />
                                 <span>Indian Standards (IS) Compliant</span>
                              </li>
                              <li className="flex items-center gap-2">
                                 <CheckCircle className="w-4 h-4 text-primary" />
                                 <span>Manufacturing & Aerospace Focus</span>
                              </li>
                              <li className="flex items-center gap-2">
                                 <CheckCircle className="w-4 h-4 text-primary" />
                                 <span>Multi-State Coverage</span>
                              </li>
                           </ul>
                           <Link to="/consulting-india">
                              <Button variant="outline" className="w-full text-primary hover:bg-primary/10">
                                 Learn More
                              </Button>
                           </Link>
                        </CardContent>
                     </Card>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* CTA Section */}
         <section className="py-20 text-center bg-gradient-to-r from-primary/10 to-accent/10">
            <motion.div
               className="max-w-3xl mx-auto px-6"
               initial={{ y: 30, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
            >
               <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Schedule a Consultation with Our Level III Experts
               </h2>
               <p className="text-lg text-muted-foreground mb-8">
                  Get tailored advice for your inspection program, compliance
                  needs, or team training. Our certified experts are ready to
                  assist you.
               </p>
               <Button size="lg" className="btn-primary">
                  <Link to={"/contact"}>Book a Consultation</Link>
               </Button>
            </motion.div>
         </section>

         <ContactDetails />
      </div>
   );
}
