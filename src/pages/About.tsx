import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Award, Target, TrendingUp, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SEOHead } from "@/components/SEOHead";
import { Navigation } from "@/components/Navigation";
import ContactDetails from "@/components/ContactDetails";
import about from "@/data/about-2026-10.json";

// 2026-10-11 (owner): the page states only what Atlantis can evidence. The animated
// stat counters (years, projects, expert and consultant headcounts, combined experience),
// "ISO certified processes", the "most trusted provider" line and the Organization
// numberOfEmployees were removed. Copy comes from src/data/about-2026-10.json, which
// the crawler layer (scripts/about-page-2026-10.mjs) renders too.

const VALUE_ICONS = [Target, Award, Users, TrendingUp];

export default function About() {
   // Organization schema for Google Knowledge Panel
   const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Atlantis NDT",
      "legalName": "Atlantis Engineering Consultants LLC",
      "alternateName": "Atlantis Non-Destructive Testing",
      "url": "https://atlantisndt.com",
      "logo": "https://atlantisndt.com/favicon-96x96.jpg",
      "description": about.intro,
      "foundingDate": "2018",
      "email": "info@atlantisndt.com",
      "founder": {
         "@type": "Person",
         "@id": "https://atlantisndt.com/#anoop-rayavarapu",
         "name": "Anoop Rayavarapu",
         "url": "https://atlantisndt.com/authors/anoop-rayavarapu"
      },
      "sameAs": [
         "https://www.linkedin.com/company/atlantis-ndt"
      ],
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
      ],
      "areaServed": [
         { "@type": "Country", "name": "United States" },
         { "@type": "Country", "name": "United Arab Emirates" },
         { "@type": "Country", "name": "Saudi Arabia" },
         { "@type": "Country", "name": "India" }
      ],
      "knowsAbout": [
         "Non-Destructive Testing",
         "Ultrasonic Testing",
         "Radiographic Testing",
         "Magnetic Particle Testing",
         "Liquid Penetrant Testing",
         "Visual Testing",
         "NDT Training",
         "ASNT Certification"
      ]
   };

   return (
      <div className="min-h-screen pt-20">
         <Navigation />

         <SEOHead
            title={about.title}
            description={about.description}
            keywords="about Atlantis NDT, NDT company, ASNT Level III, non-destructive testing services, NDT consulting, NDT training, SNT-TC-1A, oil and gas NDT, aerospace NDT, marine inspection"
            canonical="https://atlantisndt.com/about"
            structuredData={structuredData}
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
                     About <span className="gradient-text">Atlantis NDT</span>
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                     {about.intro}
                  </p>
               </motion.div>
            </div>
         </motion.section>

         {/* Story + founder facts */}
         <section className="py-20">
            <div className="container mx-auto px-6">
               <div className="grid md:grid-cols-2 gap-12 items-start">
                  <motion.div
                     initial={{ x: -50, opacity: 0 }}
                     whileInView={{ x: 0, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8 }}
                  >
                     <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        {about.storyHeading}
                     </h2>
                     {about.story.map((p) => (
                        <p key={p} className="text-lg text-muted-foreground mb-6">
                           {p}
                        </p>
                     ))}
                  </motion.div>
                  <motion.div
                     initial={{ x: 50, opacity: 0 }}
                     whileInView={{ x: 0, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8, delay: 0.2 }}
                  >
                     <h2 className="text-2xl md:text-3xl font-bold mb-6">
                        Founder — Anoop Rayavarapu
                     </h2>
                     <div className="grid sm:grid-cols-2 gap-4">
                        {about.facts.map((f) => (
                           <Card key={f.label} className="border-0 shadow-md">
                              <CardContent className="p-5">
                                 <h3 className="text-lg font-semibold gradient-text mb-2">{f.label}</h3>
                                 <p className="text-muted-foreground">{f.text}</p>
                              </CardContent>
                           </Card>
                        ))}
                     </div>
                     <p className="mt-4 text-muted-foreground">
                        See the <Link to="/authors/anoop-rayavarapu" className="text-primary underline">founder profile</Link>.
                     </p>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* What we do */}
         <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
               <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                  {about.servicesHeading}
               </h2>
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {about.services.map((s) => (
                     <Link key={s.href} to={s.href} className="block">
                        <Card className="h-full hover-scale border-0 shadow-md">
                           <CardContent className="p-6">
                              <h3 className="text-xl font-bold mb-2">{s.label}</h3>
                              <p className="text-muted-foreground">{s.text}</p>
                           </CardContent>
                        </Card>
                     </Link>
                  ))}
               </div>
            </div>
         </section>

         {/* Values Section */}
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
                     {about.valuesHeading}
                  </h2>
               </motion.div>

               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {about.values.map((value, index) => {
                     const Icon = VALUE_ICONS[index % VALUE_ICONS.length];
                     return (
                        <motion.div
                           key={value.title}
                           initial={{ y: 30, opacity: 0 }}
                           whileInView={{ y: 0, opacity: 1 }}
                           viewport={{ once: true }}
                           transition={{ duration: 0.6, delay: index * 0.15 }}
                        >
                           <Card className="h-full hover-scale border-0 shadow-md">
                              <CardContent className="p-6 text-center">
                                 <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Icon className="w-8 h-8 text-primary-foreground" />
                                 </div>
                                 <h3 className="text-xl font-bold mb-3">
                                    {value.title}
                                 </h3>
                                 <p className="text-muted-foreground">
                                    {value.text}
                                 </p>
                              </CardContent>
                           </Card>
                        </motion.div>
                     );
                  })}
               </div>
            </div>
         </section>

         {/* Completed engagements + addresses */}
         <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6 max-w-5xl grid md:grid-cols-2 gap-10">
               <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{about.caseStudiesHeading}</h2>
                  <p className="text-muted-foreground mb-4">{about.caseStudies}</p>
                  <Link to="/case-studies" className="text-primary underline">Read the case studies</Link>
               </div>
               <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{about.addressesHeading}</h2>
                  <ul className="space-y-3">
                     {about.addresses.map((a) => (
                        <li key={a.label} className="flex items-start gap-3">
                           <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                           <span className="text-muted-foreground"><strong className="text-foreground">{a.label}</strong> — {a.text}</span>
                        </li>
                     ))}
                  </ul>
                  <p className="mt-4 text-muted-foreground">
                     {about.contact} <Link to="/contact" className="text-primary underline">Contact Atlantis NDT</Link>.
                  </p>
               </div>
            </div>
         </section>
         <ContactDetails />
      </div>
   );
}
