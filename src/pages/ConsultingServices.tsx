import { motion } from "framer-motion";
import {
   ClipboardCheck,
   Users,
   FileSearch,
   Shield,
   Target,
   CheckCircle,
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
         title: "Procedure Development & Review",
         description:
            "Creation and validation of NDT procedures in accordance with ASNT, ISO, ASTM, and client-specific standards.",
      },
      {
         icon: Users,
         title: "Training & Certification",
         description:
            "Comprehensive Level I, II, and III training programs designed to enhance competency and meet compliance requirements.",
      },
      {
         icon: FileSearch,
         title: "Audit & Compliance",
         description:
            "Third-party audit services for NDT systems, ensuring alignment with industry codes and regulatory frameworks.",
      },
      {
         icon: Shield,
         title: "Quality Assurance Oversight",
         description:
            "Supervision of inspection teams, documentation reviews, and performance monitoring for consistent quality assurance.",
      },
      {
         icon: Target,
         title: "Failure Analysis & Expert Consultation",
         description:
            "Expert-level consultation for defect analysis, root cause investigation, and recommendations for process improvement.",
      },
   ];

   const benefits = [
      "Improved compliance with ASNT SNT-TC-1A and ISO 9712",
      "Reduced inspection errors and rework costs",
      "Standardized NDT documentation and traceability",
      "Increased asset reliability and uptime",
      "Expert oversight for high-risk inspections",
   ];

   const structuredData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      serviceType: "Level III NDT Consulting",
      provider: {
         "@type": "Organization",
         name: "Atlantis NDT",
         url: "https://atlantisndt.com",
      },
      description:
         "Expert Level III NDT consulting, training, audits, and quality assurance oversight to ensure compliance, reliability, and performance excellence.",
   };

   return (
      <div className="min-h-screen pt-20 bg-gray-50">
         <Navigation />
         <SEOHead
            title="Level III NDT Consulting Services"
            description="Expert Level III NDT consulting services including training, audits, quality assurance, and compliance for advanced inspection programs."
            keywords="Level III NDT consulting, NDT audit, NDT training, ASNT Level III, ISO 9712 consulting, NDT quality assurance"
            structuredData={structuredData}
            canonical="https://atlantisndt.com/consulting-service"
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
