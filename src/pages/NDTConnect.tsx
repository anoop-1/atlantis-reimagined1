import { motion } from "framer-motion";
import { Search, Zap, Eye, Waves, Settings, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";
import { Navigation } from "@/components/Navigation";
import { Link } from "react-router-dom";
import ContactDetails from "@/components/ContactDetails";

export default function NDTConnect() {
   const services = [
      {
         icon: Search,
         title: "Ultrasonic Testing (UT)",
         description:
            "High-frequency sound waves for flaw detection and thickness measurement.",
         features: [
            "Thickness measurement",
            "Flaw detection",
            "Weld inspection",
            "Corrosion mapping",
         ],
      },
      {
         icon: Waves,
         title: "Magnetic Particle Testing (MT)",
         description:
            "Detects surface and near-surface discontinuities in ferromagnetic materials.",
         features: [
            "Surface crack detection",
            "Weld inspection",
            "Component testing",
            "Quality assurance",
         ],
      },
      {
         icon: Eye,
         title: "Visual Testing (VT)",
         description: "Direct and remote visual inspection techniques.",
         features: [
            "Direct examination",
            "Remote inspection",
            "Borescope inspection",
            "Documentation",
         ],
      },
      {
         icon: Zap,
         title: "Radiographic Testing (RT)",
         description:
            "X-ray and gamma ray inspection for internal structure analysis.",
         features: [
            "Internal flaw detection",
            "Weld quality assessment",
            "Structural integrity",
            "Digital radiography",
         ],
      },
      {
         icon: Settings,
         title: "Eddy Current Testing (ET)",
         description:
            "Electromagnetic induction for detecting surface and subsurface flaws.",
         features: [
            "Conductivity measurement",
            "Coating thickness",
            "Crack detection",
            "Tube inspection",
         ],
      },
      {
         icon: CheckCircle,
         title: "Penetrant Testing (PT)",
         description:
            "Liquid penetrant method for detecting surface-breaking defects.",
         features: [
            "Surface crack detection",
            "Porosity detection",
            "Non-porous materials",
            "Color contrast",
         ],
      },
   ];

   const industries = [
      "Oil & Gas",
      "Marine",
      "Aerospace",
      "Nuclear",
      "Energy",
      "Manufacturing",
      "Construction",
      "Transportation",
   ];

   const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "NDT Connect",
      provider: {
         "@type": "Organization",
         name: "Atlantis NDT",
      },
      areaServed: "Global",
      hasOfferCatalog: {
         "@type": "OfferCatalog",
         name: "NDT Connect Services",
         itemListElement: services.map((service, index) => ({
            "@type": "Offer",
            position: index + 1,
            itemOffered: {
               "@type": "Service",
               name: service.title,
               description: service.description,
            },
         })),
      },
   };

   return (
      <div className="min-h-screen pt-20">
         <Navigation />
         <SEOHead
            title="NDT Connect"
            description="NDT Connect platform providing advanced inspection services including ultrasonic, radiographic, magnetic particle, penetrant, eddy current, and visual testing."
            keywords="NDT Connect, non-destructive testing, ultrasonic testing, radiographic testing, magnetic particle, penetrant, eddy current, visual testing"
            structuredData={structuredData}
            canonical="https://atlantisndt.com/ndt-connect"
         />

         {/* Hero Section */}
         <motion.section
            className="py-20 bg-gradient-to-r from-primary/10 to-accent/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
         >
            <div className="container mx-auto px-6">
               <motion.div
                  className="max-w-4xl mx-auto text-center"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
               >
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                     NDT <span className="gradient-text">Connect</span>
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                     A complete platform for Non-Destructive Testing
                     professionals to manage inspections, track assets, and
                     ensure quality compliance efficiently.
                  </p>
               </motion.div>
            </div>
         </motion.section>

         {/* Services Section */}
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
                     Our Testing Services
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                     Advanced NDT services performed by certified professionals
                     using industry-leading equipment.
                  </p>
               </motion.div>

               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services.map((service, index) => (
                     <motion.div
                        key={service.title}
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                     >
                        <Card className="h-full hover-scale border-0 shadow-md group">
                           <CardHeader>
                              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                                 <service.icon className="w-8 h-8 text-primary-foreground" />
                              </div>
                              <CardTitle className="text-xl">
                                 {service.title}
                              </CardTitle>
                           </CardHeader>
                           <CardContent>
                              <p className="text-muted-foreground mb-6">
                                 {service.description}
                              </p>
                              <ul className="space-y-2">
                                 {service.features.map((feature, idx) => (
                                    <li
                                       key={idx}
                                       className="flex items-center gap-2 text-sm"
                                    >
                                       <CheckCircle className="w-4 h-4 text-primary" />
                                       {feature}
                                    </li>
                                 ))}
                              </ul>
                           </CardContent>
                        </Card>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* Industries Section */}
         <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
               <motion.div
                  className="text-center mb-16"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
               >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                     Industries We Serve
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                     Serving multiple industries with reliable Non-Destructive
                     Testing services for critical asset inspection.
                  </p>
               </motion.div>

               <motion.div
                  className="grid grid-cols-2 md:grid-cols-4 gap-6"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
               >
                  {industries.map((industry, index) => (
                     <motion.div
                        key={industry}
                        className="bg-card rounded-lg p-6 text-center shadow-md hover-scale"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                     >
                        <h3 className="font-semibold text-foreground">
                           {industry}
                        </h3>
                     </motion.div>
                  ))}
               </motion.div>
            </div>
         </section>

         {/* Get Demo Section */}
         <section className="py-20">
            <div className="container mx-auto px-6 text-center">
               <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
               >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                     Experience NDT Connect
                  </h2>
                  <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                     Request a demo to see how NDT Connect can streamline your
                     inspection workflows and asset management.
                  </p>
                  <Button size="lg" variant="outline" className="btn-primary">
                     <Link to={"https://ndt-connect.com/"}>Get a Demo</Link>
                  </Button>
               </motion.div>
            </div>
         </section>

         {/* Contact Section */}
         <ContactDetails />
      </div>
   );
}
