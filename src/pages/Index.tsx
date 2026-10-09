import { Hero } from "@/components/Hero";
import { SEOHead } from "@/components/SEOHead";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CursorFollower } from "@/components/CursorFollower";
import { Navigation } from "@/components/Navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import FeatureSection from "@/components/FeatureSection";
import { Link } from "react-router-dom";
import ContactDetails from "@/components/ContactDetails";
import home from "@/data/home-first-screen.json";
import SeeItFirst from "@/components/sprint/SeeItFirst";

export default function Index() {
   // Combined structured data with Organization and LocalBusiness schemas
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
            "description": "Leading provider of Non-Destructive Testing services, training, and Level III consultancy. Serving Oil & Gas, Aerospace, Marine, Nuclear, and Manufacturing industries worldwide.",
            "foundingDate": "2015",
            "areaServed": ["United States", "India", "United Arab Emirates", "Saudi Arabia", "Middle East"],
            "knowsAbout": ["Ultrasonic Testing", "Radiographic Testing", "Magnetic Particle Testing", "Eddy Current Testing", "Visual Testing", "Penetrant Testing", "ASNT Level III Certification", "NDT Training"],
            "sameAs": [
               "https://linkedin.com/company/atlantis-ndt"
            ]
         },
         {
            "@type": "LocalBusiness",
            "@id": "https://atlantisndt.com/#houston-office",
            "name": "Atlantis NDT - Houston",
            "image": "https://atlantisndt.com/atlantis.png",
            "url": "https://atlantisndt.com/consulting-usa",
            "telephone": "+1-832-868-6670",
            "priceRange": "$$",
            "address": {
               "@type": "PostalAddress",
               "streetAddress": "Houston",
               "addressLocality": "Houston",
               "addressRegion": "TX",
               "postalCode": "77001",
               "addressCountry": "US"
            },
            "geo": {
               "@type": "GeoCoordinates",
               "latitude": 29.7604,
               "longitude": -95.3698
            },
            "openingHoursSpecification": {
               "@type": "OpeningHoursSpecification",
               "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
               "opens": "08:00",
               "closes": "17:00"
            },
            "parentOrganization": { "@id": "https://atlantisndt.com/#organization" }
         },
         {
            "@type": "LocalBusiness",
            "@id": "https://atlantisndt.com/#hyderabad-office",
            "name": "Atlantis NDT - Hyderabad",
            "image": "https://atlantisndt.com/atlantis.png",
            "url": "https://atlantisndt.com/training-india",
            "telephone": "+91-40-1234-5678",
            "priceRange": "$$",
            "address": {
               "@type": "PostalAddress",
               "streetAddress": "Hyderabad",
               "addressLocality": "Hyderabad",
               "addressRegion": "Telangana",
               "postalCode": "500001",
               "addressCountry": "IN"
            },
            "geo": {
               "@type": "GeoCoordinates",
               "latitude": 17.3850,
               "longitude": 78.4867
            },
            "openingHoursSpecification": {
               "@type": "OpeningHoursSpecification",
               "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
               "opens": "09:00",
               "closes": "18:00"
            },
            "parentOrganization": { "@id": "https://atlantisndt.com/#organization" }
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

   const testimonials = [
      {
         name: "Emily Johnson",
         rating: 5,
         text: "Atlantis has excellent consulting services. It's been a pleasure working with them.",
      },
      {
         name: "Michael Brown",
         rating: 5,
         text: "The Atlantis team trained our staff to Level II, and we're extremely satisfied collaborating with them.",
      },
      {
         name: "Jessica Miller",
         rating: 5,
         text: "Meeting with Mr. Anoop was a pleasure. He's very passionate and assisted us throughout our project.",
      },
      {
         name: "Daniel Wilson",
         rating: 4,
         text: "Professional and reliable service. The team delivered as promised and exceeded expectations.",
      },
      {
         name: "Sarah Davis",
         rating: 5,
         text: "Highly knowledgeable staff and excellent consultancy. Definitely recommend Atlantis NDT for any NDT consulting needs.",
      },
      {
         name: "James Anderson",
         rating: 4,
         text: "Training sessions were thorough and informative. The team is approachable and helpful.",
      },
   ];



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
                        Atlantis NDT is a global leader in Non-Destructive Testing services. We deliver excellence in NDT consulting and training across the USA, India, and Middle East. Our founder and lead instructor, Anoop Rayavarapu, is an ASNT NDT Level III.
                     </p>

                     <p>
                        Our NDT consulting services cover all major testing methods. These include ultrasonic testing, radiographic testing, and magnetic particle testing. We also specialize in penetrant testing, eddy current testing, and visual inspection. Our consultants help businesses meet industry codes and safety standards.
                     </p>

                     <p>
                        NDT training is at the core of what we do. We offer certification programs per ASNT SNT-TC-1A guidelines. Our courses cover Level I, Level II, and Level III certifications. Students receive hands-on practice with real equipment.
                     </p>

                     <p>
                        We serve industries where quality and safety matter most. Our clients include oil and gas companies, aerospace manufacturers, and marine operators. We also work with power generation plants and nuclear facilities. Each industry has unique requirements. Our experts tailor solutions to meet those specific needs.
                     </p>

                     <p>
                        Innovation drives our approach to NDT excellence. We use Digital Twin technology for advanced asset visualization. This helps clients identify defects early and plan maintenance efficiently. Our VR and AR training modules provide immersive learning experiences. These tools set us apart from traditional NDT providers.
                     </p>

                     <p>
                        Choosing Atlantis NDT means partnering with trusted professionals. Our consulting and training services meet the highest industry standards. Contact us today to discuss your NDT requirements.
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
                     Client Reviews
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                     Hear what our clients say about our NDT services and
                     training programs.
                  </p>
               </motion.div>

               <Swiper
                  modules={[Autoplay, Pagination]}
                  spaceBetween={30}
                  slidesPerView={1}
                  breakpoints={{
                     640: { slidesPerView: 1 },
                     768: { slidesPerView: 2 },
                     1024: { slidesPerView: 3 },
                  }}
                  autoplay={{ delay: 3500, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  loop={true}
                  className="pb-12"
               >
                  {testimonials.map((testimonial, index) => (
                     <SwiperSlide key={testimonial.name}>
                        <motion.div
                           initial={{ y: 30, opacity: 0 }}
                           whileInView={{ y: 0, opacity: 1 }}
                           viewport={{ once: true }}
                           transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                           <Card className="h-62  border-0 shadow-md">
                              <CardContent className="p-6">
                                 <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => (
                                       <Star
                                          key={i}
                                          className={`w-5 h-5 ${i < testimonial.rating
                                             ? "text-yellow-400 fill-current"
                                             : "text-gray-300"
                                             }`}
                                       />
                                    ))}
                                 </div>
                                 <p className="text-muted-foreground mb-4 italic h-28">
                                    "{testimonial.text}"
                                 </p>
                                 <p className="font-semibold">
                                    - {testimonial.name}
                                 </p>
                              </CardContent>
                           </Card>
                        </motion.div>
                     </SwiperSlide>
                  ))}
               </Swiper>
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
