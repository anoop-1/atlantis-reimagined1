import { Hero } from "@/components/Hero";
import { SEOHead } from "@/components/SEOHead";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CursorFollower } from "@/components/CursorFollower";
import { Navigation } from "@/components/Navigation";
import FeatureSection from "@/components/FeatureSection";
import { Link } from "react-router-dom";
import ContactDetails from "@/components/ContactDetails";
import home from "@/data/home-first-screen.json";
import SeeItFirst from "@/components/sprint/SeeItFirst";

export default function Index() {
   // Combined structured data with Organization and Service schemas
   const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
         {
            "@type": "Organization",
            "@id": "https://atlantisndt.com/#organization",
            "name": "Atlantis NDT",
            "url": "https://atlantisndt.com",
            "logo": {
               "@type": "ImageObject",
               "url": "https://atlantisndt.com/atlantis.png"
            },
            "description": "Founder-led provider of NDT consulting, training and inspection software, led by Anoop Rayavarapu, ASNT NDT Level III (UT, RT, MT, PT, VT). Delivered remotely, online, or on-site at the client's facility.",
            "areaServed": ["United States", "India", "United Arab Emirates", "Saudi Arabia", "Middle East"],
            "knowsAbout": ["Ultrasonic Testing", "Radiographic Testing", "Magnetic Particle Testing", "Eddy Current Testing", "Visual Testing", "Penetrant Testing", "ASNT Level III Certification", "NDT Training"],
            "sameAs": [
               "https://linkedin.com/company/atlantis-ndt"
            ],
            // 2026-10-11 (owner): the two LocalBusiness nodes (opening hours, placeholder
            // phone numbers) described offices Atlantis does not run. These are the real
            // addresses and numbers, as in ContactDetails.
            "telephone": "+1-281-840-8969",
            "address": [
               {
                  "@type": "PostalAddress",
                  "streetAddress": "700 Smith St #61070, SMB#52788",
                  "addressLocality": "Houston",
                  "addressRegion": "TX",
                  "addressCountry": "US"
               },
               {
                  "@type": "PostalAddress",
                  "streetAddress": "5-68/48-132",
                  "addressLocality": "Hyderabad",
                  "addressRegion": "Telangana",
                  "postalCode": "500078",
                  "addressCountry": "IN"
               }
            ]
         },
         {
            "@type": "Service",
            "@id": "https://atlantisndt.com/#services",
            "name": "NDT Services & Training",
            "description": "Non-Destructive Testing services, Level III consulting, and ASNT certification training programs.",
            "provider": {
               "@id": "https://atlantisndt.com/#organization"
            }
         }
      ]
   };
   const services = [
      {
         title: "Digital Twins",
         description:
            "3D asset visualization for integrity management and predictive maintenance.",
         features: [
            "Asset Visualization",
            "Defect Mapping",
            "Predictive Analytics",
            "Turnaround Planning",
         ],
      },
      {
         title: "Training Programs",
         description:
            "Industry-recognized certification programs from Level I to Level III.",
         features: [
            "VR/AR Enhanced",
            "Hands-on Practice",
            "Expert Instructors",
            "ASNT SNT-TC-1A Aligned",
         ],
      },
      {
         title: "Expert Consultation",
         description:
            "Technical advisory services for complex inspection challenges.",
         features: [
            "Procedure Development",
            "Code Compliance",
            "Risk Assessment",
            "Digital Twins",
         ],
      },
   ];

   // 2026-10-11: the homepage "Client Reviews" carousel (six testimonials under generic
   // names) was removed — none could be attributed to a real customer. The client-logo
   // carousel stays: the owner curated it himself (commit a657a438, 2026-10-02).



   return (
      <div className="min-h-screen">
         <Navigation />
         <SEOHead
            title={home.title}
            description={home.description}
            keywords="NDT services, Non-Destructive Testing, ultrasonic testing, radiographic testing, magnetic particle testing, penetrant testing, eddy current testing, visual testing, asset integrity, quality assurance"
            structuredData={structuredData}
            canonical="https://atlantisndt.com/"
         />
         <Hero />
         {/* AnimatedStats (50 experts / 1000 inspections) removed from the homepage 2026-09-30: unverified figures (no-fabricated-claims rule). */}
         <CursorFollower />

         {/* 2026-10-07 owner strategy: the homepage routes the three buyer groups to
             the offer each one buys, straight under the hero. Every link carries
             ?service= so the contact form already knows why the visitor came.
             Additive: the sections below are unchanged. */}
         <section className="py-14 bg-slate-50 border-b" aria-labelledby="who-we-help">
            <div className="container mx-auto px-6">
               <h2 id="who-we-help" className="text-2xl md:text-3xl font-bold mb-8 text-center">
                  What do you need from Atlantis NDT?
               </h2>
               <div className="grid md:grid-cols-3 gap-6">
                  {[
                     {
                        who: "Inspection company owners & operations managers",
                        need: "Run jobs, technicians, certifications and reports in one place, with an ASNT Level III behind your written practice.",
                        links: [
                           { label: "Atlantis ERP for NDT companies", to: "/erp" },
                           { label: "NDT reporting software", to: "/intelligent-reporting-software" },
                           { label: "Outsourced Level III consulting", to: "/consulting" },
                        ],
                        cta: { label: "Book an ERP demo", to: "/contact?service=erp&subject=ERP%20demo" },
                     },
                     {
                        who: "Asset owners & quality managers",
                        need: "NDE for API 510, 570 and 653 programmes, delivered to your inspector of record, with results you can see on the asset.",
                        links: [
                           { label: "Inspection services", to: "/inspection-services" },
                           { label: "Digital Twin reporting", to: "/digital-twin-reporting" },
                           { label: "Level III technique and procedure review", to: "/consulting" },
                        ],
                        cta: { label: "Request an inspection quote", to: "/contact?service=inspection&subject=Inspection%20quote%20request" },
                     },
                     {
                        who: "Training managers & technicians",
                        need: "ASNT SNT-TC-1A training led by a Level III, for crews or individuals, plus hands-on practice on a 3D simulator.",
                        links: [
                           { label: "NDT training courses", to: "/training" },
                           { label: "Practical NDT simulation", to: "/practical-ndt" },
                           { label: "ASNT Level III training", to: "/asnt-level-iii-training" },
                        ],
                        cta: { label: "Request a training plan", to: "/contact?service=training&subject=Corporate%20training%20plan" },
                     },
                  ].map((g) => (
                     <Card key={g.who} className="border-0 shadow-md flex flex-col">
                        <CardHeader>
                           <CardTitle className="text-lg">{g.who}</CardTitle>
                           <p className="text-sm text-muted-foreground">{g.need}</p>
                        </CardHeader>
                        <CardContent className="flex flex-col flex-1">
                           <ul className="space-y-2 mb-6">
                              {g.links.map((l) => (
                                 <li key={l.to + l.label}>
                                    <Link to={l.to} className="text-primary font-medium hover:underline">{l.label} →</Link>
                                 </li>
                              ))}
                           </ul>
                           <Link to={g.cta.to} data-cta-variant="home-group" className="mt-auto">
                              <Button className="btn-primary w-full">{g.cta.label}</Button>
                           </Link>
                        </CardContent>
                     </Card>
                  ))}
               </div>
            </div>
         </section>

         {/* 2026-10-09 sprint (Day 3): proof you can try — one tool or funnel per line. */}
         <SeeItFirst />

         {/* SEO Content Section - Excellence in NDT Consulting & Training */}
         <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
               <motion.div
                  className="max-w-4xl mx-auto"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
               >
                  <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                     About <span className="gradient-text">Atlantis NDT</span>
                  </h2>

                  <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                     <p>
                        Atlantis NDT is a founder-led Non-Destructive Testing company offering NDT consulting, training and inspection software. Our founder and lead instructor, Anoop Rayavarapu, holds ASNT NDT Level III certification in five methods (UT, RT, MT, PT, VT) and has 11+ years of international NDT field experience.
                     </p>

                     <p>
                        Our Level III consulting covers ultrasonic, radiographic, magnetic particle, penetrant and visual testing, and helps businesses meet industry codes and safety standards.
                     </p>

                     <p>
                        NDT training is at the core of what we do. We offer certification programs per ASNT SNT-TC-1A guidelines. Our courses cover Level I, Level II, and Level III certifications. Students receive hands-on practice with real equipment.
                     </p>

                     <p>
                        The services are built for industries where quality and safety matter most: oil and gas, aerospace, marine, power generation and manufacturing. Each has its own codes and client specifications, and every engagement is scoped to them.
                     </p>

                     <p>
                        Innovation drives our approach to NDT excellence. We use Digital Twin technology for advanced asset visualization. This helps clients identify defects early and plan maintenance efficiently. Our VR and AR training modules provide immersive learning experiences. These tools set us apart from traditional NDT providers.
                     </p>

                     <p>
                        Work is delivered remotely, online, or on-site at your facility, from our offices in Houston, Texas and Hyderabad, India. Contact us to discuss your NDT requirements.
                     </p>
                  </div>

                  <div className="mt-8 text-center">
                     <Link to="/about">
                        <Button variant="outline" className="group">
                           Learn More About Us
                           <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                     </Link>
                  </div>
               </motion.div>
            </div>
         </section>

         {/* Services Preview */}
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
                     Need{" "}
                     <span className="gradient-text">Expert Support?</span>
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                     Our comprehensive NDT solutions cover every aspect of
                     non-destructive testing, from Digital Twins to
                     professional training and expert consultation.
                  </p>
               </motion.div>

               <div className="grid md:grid-cols-3 gap-8">
                  {services.map((service, index) => (
                     <motion.div
                        key={service.title}
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                     >
                        <Card className="h-full hover-scale border-0 shadow-md group">
                           <CardHeader>
                              <CardTitle className="text-xl mb-3">
                                 {service.title}
                              </CardTitle>
                              <p className="text-muted-foreground">
                                 {service.description}
                              </p>
                           </CardHeader>
                           <CardContent>
                              <ul className="space-y-2 mb-6">
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
                              <Button
                                 variant="outline"
                                 className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                              >
                                 Learn More
                                 <ArrowRight className="ml-2 w-4 h-4" />
                              </Button>
                           </CardContent>
                        </Card>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* Digital Twins CTA */}
         <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
            <div className="container mx-auto px-6">
               <motion.div
                  className="max-w-4xl mx-auto text-center"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
               >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                     <span className="gradient-text">Digital Twins</span>{" "}
                     Technology
                  </h2>

                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                     Stay up to date with Atlantis's technological advancements.
                     We offer VR/AR or web-based Digital Twins used for asset
                     integrity and enhanced learning programs in NDT.
                  </p>
                  <div className="flex items-center justify-center gap-4">
                     <Button className="btn-primary group">
                        <Link to="/digital-twins" className="flex items-center">
                           Explore Digital Twins
                           <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                     </Button>

                     <Button
                        variant="outline"
                        className="group bg-gray-50 border-gray-200 text-gray-700 hover:bg-primary hover:text-white transition-all"
                     >
                        <Link to="/training" className="flex items-center">
                           View Training
                           <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                     </Button>
                  </div>
               </motion.div>
            </div>
         </section>

         <FeatureSection />

         {/* Trusted Clients Logos */}
         <section className="py-16 bg-slate-50 border-t border-b overflow-hidden">
            <div className="container mx-auto px-6">
               <motion.div
                  className="text-center mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
               >
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">
                     Trusted by <span className="gradient-text">Industry Leaders</span>
                  </h2>
                  <p className="text-muted-foreground">
                     Serving major oil & gas, aerospace, and manufacturing companies worldwide
                  </p>
               </motion.div>

               {/* Auto-scrolling logo carousel */}
               <div className="relative">
                  <div
                     className="flex items-center gap-16 animate-scroll"
                     style={{
                        animation: 'scroll 22s linear infinite',
                     }}
                  >
                     {/* First set of logos */}
                     {[
                        { name: "Saudi Aramco", logo: "/logos/clients/aramco.png" },
                        { name: "ADNOC", logo: "/logos/clients/adnoc.png" },
                        { name: "QatarEnergy", logo: "/logos/clients/qatarenergy.png" },
                        { name: "QatarEnergy LNG", logo: "/logos/clients/qatarenergy-lng.png" },
                        { name: "Chevron", logo: "/logos/clients/chevron.png" },
                        { name: "TotalEnergies", logo: "/logos/clients/totalenergies.png" },
                        { name: "Boeing", logo: "/logos/clients/boeing.png" },
                        { name: "AST SpaceMobile", logo: "/logos/clients/ast-spacemobile.png" },
                        { name: "TÜV Rheinland", logo: "/logos/clients/tuv-rheinland.png" },
                        { name: "Metro Steel USA", logo: "/logos/clients/metro-steel-usa.png" },
                     ].map((client) => (
                        <div
                           key={client.name}
                           className="flex-shrink-0 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                           title={client.name}
                        >
                           <img
                              src={client.logo}
                              alt={`${client.name} logo`}
                              className="h-12 md:h-14 lg:h-16 w-auto object-contain min-w-[100px] max-w-[160px]"
                              loading="lazy"
                           />
                        </div>
                     ))}
                     {/* Duplicate set for seamless loop */}
                     {[
                        { name: "Saudi Aramco", logo: "/logos/clients/aramco.png" },
                        { name: "ADNOC", logo: "/logos/clients/adnoc.png" },
                        { name: "QatarEnergy", logo: "/logos/clients/qatarenergy.png" },
                        { name: "QatarEnergy LNG", logo: "/logos/clients/qatarenergy-lng.png" },
                        { name: "Chevron", logo: "/logos/clients/chevron.png" },
                        { name: "TotalEnergies", logo: "/logos/clients/totalenergies.png" },
                        { name: "Boeing", logo: "/logos/clients/boeing.png" },
                        { name: "AST SpaceMobile", logo: "/logos/clients/ast-spacemobile.png" },
                        { name: "TÜV Rheinland", logo: "/logos/clients/tuv-rheinland.png" },
                        { name: "Metro Steel USA", logo: "/logos/clients/metro-steel-usa.png" },
                     ].map((client) => (
                        <div
                           key={`${client.name}-dup`}
                           className="flex-shrink-0 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                           title={client.name}
                        >
                           <img
                              src={client.logo}
                              alt={`${client.name} logo`}
                              className="h-12 md:h-14 lg:h-16 w-auto object-contain min-w-[100px] max-w-[160px]"
                              loading="lazy"
                           />
                        </div>
                     ))}
                  </div>
               </div>

               <style>{`
                  @keyframes scroll {
                     0% { transform: translateX(0); }
                     100% { transform: translateX(-50%); }
                  }
               `}</style>

               <motion.p
                  className="text-center text-sm text-muted-foreground mt-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
               >
                  ...and many more global industry leaders
               </motion.p>
            </div>
         </section>

         {/* Final CTA */}
         <section className="py-20 bg-gray-100 text-black">
            <div className="container mx-auto px-6 text-center">
               <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
               >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                     Precision. Quality. Trust in NDT
                  </h2>
                  <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                     Your partner in NDT Excellence. We'd love to hear from you.
                  </p>
                  <Button
                     size="lg"
                     variant="outline"
                     className="btn-primary group"
                  >
                     <a
                        href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=ufHGAhf8REe02YKd5W-vdchw0gpIkUdMqiTcsnOro6ZUQUJURlY2M09ERUYzOFAzTERBN0NFVVc3MS4u"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        Contact Us Today
                     </a>
                  </Button>
               </motion.div>
            </div>
         </section>
         <ContactDetails />
      </div>
   );
}
