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
   AlertTriangle,
   Briefcase,
   Globe,
   FileCheck,
   Headphones,
   Building,
   Anchor,
   Factory,
   Wrench,
   MessageSquare,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Link } from "react-router-dom";
import ContactDetails from "@/components/ContactDetails";
import { SEOHead } from "@/components/SEOHead";

export default function ConsultingServices() {
   // Core consulting services data
   const consultingServices = [
      {
         icon: Users,
         title: "Outsourced ASNT Level III Support",
         description:
            "We act as your external Level III, providing ongoing technical oversight without the cost of a full-time hire.",
         features: [
            "Technical advisory support",
            "Method selection guidance",
            "Procedure and technique approval",
            "Limited on-call consultation",
         ],
      },
      {
         icon: FileCheck,
         title: "Procedure Review, Development & Approval",
         description:
            "We review, develop, and approve NDT procedures in accordance with ASNT SNT-TC-1A, ISO 9712, ISO 9001, ISO 17020, and client specifications.",
         features: [
            "Approved procedures",
            "Technique sheets",
            "Compliance recommendations",
            "Code-specific documentation",
         ],
      },
      {
         icon: Shield,
         title: "Independent Third-Party Technical Opinion",
         description:
            "We provide written, independent Level III technical opinions for disputes, rejected inspections, regulatory scrutiny, and internal escalations.",
         features: [
            "Client disputes resolution",
            "Rejected inspection reviews",
            "Classification society support",
            "Technical credibility assurance",
         ],
      },
      {
         icon: AlertTriangle,
         title: "Inspection Failure Analysis & Troubleshooting",
         description:
            "When inspections fail or results are questioned, we provide expert root-cause analysis and corrective recommendations.",
         features: [
            "Root-cause technical analysis",
            "Corrective action recommendations",
            "Revised techniques or procedures",
            "Re-inspection planning",
         ],
      },
      {
         icon: ClipboardCheck,
         title: "Audit & Compliance Support (Technical)",
         description:
            "We support organizations before, during, and after audits with comprehensive technical documentation review and compliance gap identification.",
         features: [
            "Technical documentation review",
            "Compliance gap identification",
            "Corrective action implementation",
            "Level III authority during audits",
         ],
      },
   ];

   // Target clients data
   const targetClients = [
      { icon: Building, name: "NDT service providers (small to mid-size)" },
      { icon: Factory, name: "Fabricators & manufacturers" },
      { icon: Anchor, name: "Shipyards & marine contractors" },
      { icon: Wrench, name: "EPC subcontractors" },
      { icon: Briefcase, name: "Inspection startups and expanding firms" },
      { icon: Globe, name: "Overseas companies requiring US-recognized Level III oversight" },
   ];

   // Engagement models
   const engagementModels = [
      "Monthly Level III retainer",
      "Project-based technical review",
      "Audit readiness support",
      "Emergency or fast-track technical opinion",
   ];

   // Why Atlantis benefits
   const whyAtlantis = [
      "ASNT Level III–led consulting",
      "Independent & conflict-free",
      "Global experience (US, Middle East, India)",
      "Strong documentation and audit focus",
      "Practical, implementation-oriented guidance",
   ];

   // Who needs our services
   const whoNeedsServices = [
      "Do not have an in-house ASNT Level III",
      "Require independent third-party technical authority",
      "Are preparing for audits, certifications, or client approvals",
      "Face inspection failures or technical disputes",
      "Need expert review without long-term employment commitments",
   ];

   // Delivery features
   const deliveryFeatures = [
      { icon: Globe, text: "100% remote delivery" },
      { icon: Shield, text: "Confidential & independent" },
      { icon: Target, text: "No conflict with inspection execution" },
      { icon: Zap, text: "Flexible engagement models" },
   ];

   const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "ASNT Level III NDT Consulting Services",
      "description": "Independent ASNT Level III NDT consulting services for compliance, quality assurance, and technical risk reduction. Remote consulting for NDT companies, fabricators, EPCs, shipyards, and asset owners worldwide.",
      "provider": {
         "@type": "Organization",
         "name": "Atlantis NDT",
         "url": "https://atlantisndt.com",
      },
      "areaServed": ["United States", "Middle East", "India"],
      "serviceType": [
         "ASNT Level III Consulting",
         "NDT Procedure Development",
         "Technical Opinion Services",
         "Audit Compliance Support",
         "Inspection Failure Analysis"
      ],
   };

   return (
      <div className="min-h-screen pt-20 bg-gray-50">
         <Navigation />
         <SEOHead
            title="ASNT Level III NDT Consulting Services | Independent Technical Authority | Atlantis NDT"
            description="Independent ASNT Level III NDT consulting services for compliance, quality & risk reduction. Remote technical authority for NDT companies, fabricators, EPCs, shipyards worldwide. US, Middle East, India coverage."
            keywords="ASNT Level III consultant, NDT consulting services, Level III NDT consulting, independent NDT technical authority, NDT procedure development, NDT audit support, ASNT SNT-TC-1A consultant, ISO 9712 consultant, outsourced Level III, NDT compliance consulting, remote NDT consulting, third-party NDT opinion"
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
               <motion.h1
                  className="text-4xl md:text-6xl font-bold mb-6"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
               >
                  ASNT Level III{" "}
                  <span className="gradient-text">NDT Consulting Services</span>
               </motion.h1>
               <motion.p
                  className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
               >
                  Independent Technical Authority for Compliance, Quality & Risk Reduction
               </motion.p>
               <motion.div
                  className="max-w-4xl mx-auto"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
               >
                  <p className="text-lg text-muted-foreground leading-relaxed">
                     Atlantis NDT provides independent ASNT Level III–led NDT consulting services for organizations
                     that require expert technical authority but do not maintain a full-time Level III in-house.
                  </p>
               </motion.div>
            </div>
         </motion.section>

         {/* Introduction Section */}
         <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
               <motion.div
                  className="max-w-5xl mx-auto"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
               >
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                     We support NDT companies, fabricators, EPCs, shipyards, and asset owners with remote,
                     confidential, and conflict-free Level III consulting—helping clients achieve technical
                     compliance, inspection credibility, and audit readiness across global projects.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                     Our consulting services are delivered <strong>remotely worldwide</strong>, with active support
                     across the <strong>United States</strong>, <strong>Middle East</strong>, and <strong>India</strong>.
                  </p>
               </motion.div>
            </div>
         </section>

         {/* What Is Level III Consulting Section */}
         <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
               <motion.div
                  className="text-center mb-12"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
               >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                     What Is <span className="gradient-text">Level III NDT Consulting</span>?
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
                     ASNT Level III NDT consulting provides senior technical oversight across nondestructive
                     testing activities, ensuring inspections are:
                  </p>
               </motion.div>

               <motion.div
                  className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
               >
                  {[
                     { icon: CheckCircle, text: "Technically correct" },
                     { icon: FileCheck, text: "Code-compliant" },
                     { icon: ClipboardCheck, text: "Properly documented" },
                     { icon: Shield, text: "Defensible during audits" },
                  ].map((item, index) => (
                     <Card key={index} className="text-center border-0 shadow-md hover-scale">
                        <CardContent className="p-6">
                           <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                              <item.icon className="w-7 h-7 text-primary-foreground" />
                           </div>
                           <p className="font-semibold text-foreground">{item.text}</p>
                        </CardContent>
                     </Card>
                  ))}
               </motion.div>

               <motion.p
                  className="text-lg text-muted-foreground max-w-4xl mx-auto text-center"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
               >
                  A Level III consultant acts as the <strong>final technical authority</strong>, responsible for
                  procedure approval, technique validation, method selection, and oversight of Level I & Level II personnel.
               </motion.p>
            </div>
         </section>

         {/* Who Our Services Are For Section */}
         <section className="py-20">
            <div className="container mx-auto px-6">
               <div className="grid lg:grid-cols-2 gap-12">
                  {/* Left Column - Who Needs Services */}
                  <motion.div
                     initial={{ x: -50, opacity: 0 }}
                     whileInView={{ x: 0, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8 }}
                  >
                     <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Who Our <span className="gradient-text">Consulting Services</span> Are For
                     </h2>
                     <p className="text-lg text-muted-foreground mb-6">
                        Our services are designed for organizations that:
                     </p>
                     <ul className="space-y-3 mb-8">
                        {whoNeedsServices.map((item, index) => (
                           <li key={index} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                              <span className="text-muted-foreground">{item}</span>
                           </li>
                        ))}
                     </ul>
                  </motion.div>

                  {/* Right Column - Typical Clients */}
                  <motion.div
                     initial={{ x: 50, opacity: 0 }}
                     whileInView={{ x: 0, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8, delay: 0.2 }}
                  >
                     <h3 className="text-2xl font-bold mb-6">Typical Clients Include:</h3>
                     <div className="grid gap-4">
                        {targetClients.map((client, index) => (
                           <Card key={index} className="border-0 shadow-sm hover-scale">
                              <CardContent className="p-4 flex items-center gap-4">
                                 <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                                    <client.icon className="w-6 h-6 text-primary-foreground" />
                                 </div>
                                 <span className="font-medium text-foreground">{client.name}</span>
                              </CardContent>
                           </Card>
                        ))}
                     </div>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* Our Consulting Services Section */}
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
                     Our ASNT Level III <span className="gradient-text">Consulting Services</span>
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                     Comprehensive technical consulting delivered by certified Level III professionals
                     to ensure compliance and reduce risk.
                  </p>
               </motion.div>

               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {consultingServices.map((service, index) => (
                     <motion.div
                        key={service.title}
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                     >
                        <Card className="h-full border-0 shadow-md hover-scale group">
                           <CardHeader>
                              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                                 <service.icon className="w-8 h-8 text-primary-foreground" />
                              </div>
                              <CardTitle className="text-xl">
                                 {service.title}
                              </CardTitle>
                           </CardHeader>
                           <CardContent>
                              <p className="text-muted-foreground mb-4">
                                 {service.description}
                              </p>
                              <ul className="space-y-2">
                                 {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-sm">
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

         {/* How Consulting Is Delivered Section */}
         <section className="py-20">
            <div className="container mx-auto px-6">
               <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                     initial={{ x: -50, opacity: 0 }}
                     whileInView={{ x: 0, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8 }}
                  >
                     <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        How Our <span className="gradient-text">Consulting Is Delivered</span>
                     </h2>
                     <p className="text-lg text-muted-foreground mb-8">
                        We support global clients while maintaining consistent technical standards.
                     </p>
                     <div className="grid sm:grid-cols-2 gap-4">
                        {deliveryFeatures.map((feature, index) => (
                           <Card key={index} className="border-0 shadow-sm">
                              <CardContent className="p-4 flex items-center gap-3">
                                 <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                                    <feature.icon className="w-5 h-5 text-primary-foreground" />
                                 </div>
                                 <span className="font-medium text-foreground">{feature.text}</span>
                              </CardContent>
                           </Card>
                        ))}
                     </div>
                  </motion.div>

                  <motion.div
                     initial={{ x: 50, opacity: 0 }}
                     whileInView={{ x: 0, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8, delay: 0.2 }}
                  >
                     <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-accent/5">
                        <CardHeader>
                           <CardTitle className="text-2xl">Typical Engagement Models</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <ul className="space-y-4">
                              {engagementModels.map((model, index) => (
                                 <li key={index} className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                                       <span className="text-primary-foreground font-bold text-sm">{index + 1}</span>
                                    </div>
                                    <span className="font-medium text-foreground">{model}</span>
                                 </li>
                              ))}
                           </ul>
                           <p className="text-sm text-muted-foreground mt-6">
                              Engagements are clearly scoped to ensure efficiency and accountability.
                           </p>
                        </CardContent>
                     </Card>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* Why Atlantis NDT Section */}
         <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6 text-center">
               <motion.h2
                  className="text-3xl md:text-4xl font-bold mb-8"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
               >
                  Why <span className="gradient-text">Atlantis NDT</span>
               </motion.h2>

               <motion.div
                  className="max-w-3xl mx-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
               >
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                     {whyAtlantis.map((benefit, index) => (
                        <Card key={index} className="border-0 shadow-sm hover-scale">
                           <CardContent className="p-4 flex items-center gap-3">
                              <Award className="w-5 h-5 text-primary flex-shrink-0" />
                              <span className="font-medium text-foreground text-left">{benefit}</span>
                           </CardContent>
                        </Card>
                     ))}
                  </div>
                  <p className="text-lg text-muted-foreground italic">
                     We focus on reducing technical risk, not selling inspection services.
                  </p>
               </motion.div>
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
                     Regional Expertise, <span className="gradient-text">Global Standards</span>
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
                                 <span>Strategic Nationwide Coverage</span>
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
               <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-8">
                  <MessageSquare className="w-10 h-10 text-primary-foreground" />
               </div>
               <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Request a Confidential Technical Discussion
               </h2>
               <p className="text-lg text-muted-foreground mb-8">
                  If you require ASNT Level III consulting support or independent technical authority,
                  you may request a confidential discussion to assess scope and suitability.
               </p>
               <Button size="lg" className="btn-primary">
                  <Link to={"/contact"}>Schedule a Discussion</Link>
               </Button>
            </motion.div>
         </section>

         <ContactDetails />
      </div>
   );
}
