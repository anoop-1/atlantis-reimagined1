import { Hero } from "@/components/Hero";
import { AnimatedStats } from "@/components/AnimatedStats";
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
            "@type": "Product",
            "@id": "https://atlantisndt.com/#services",
            "name": "NDT Services & Training",
            "description": "Non-Destructive Testing services, Level III consulting, and ASNT certification training programs.",
            "brand": {
               "@type": "Brand",
               "name": "Atlantis NDT"
            },
            "aggregateRating": {
               "@type": "AggregateRating",
               "ratingValue": "4.8",
               "reviewCount": "6",
               "bestRating": "5",
               "worstRating": "1"
            },
            "review": [
               {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Emily Johnson" },
                  "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                  "reviewBody": "Atlantis has excellent consulting services. It's been a pleasure working with them."
               },
               {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Michael Brown" },
                  "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                  "reviewBody": "The Atlantis team trained our staff to Level II, and we're extremely satisfied."
               },
               {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Jessica Miller" },
                  "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                  "reviewBody": "Meeting with Mr. Anoop was a pleasure. He's very passionate and assisted us throughout our project."
               }
            ]
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
            "95% Success Rate",
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
            title="Home"
            description="Atlantis NDT - Leading provider of Non-Destructive Testing services with 50+ certified professionals. Specializing in ultrasonic, radiographic, magnetic particle, and penetrant testing across oil & gas, marine, aerospace, and nuclear industries."
            keywords="NDT services, Non-Destructive Testing, ultrasonic testing, radiographic testing, magnetic particle testing, penetrant testing, eddy current testing, visual testing, asset integrity, quality assurance"
            structuredData={structuredData}
            canonical="https://atlantisndt.com/"
         />
         <Hero />
         <AnimatedStats />
         <CursorFollower />

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
                        href="https://forms.office.com/Pages/ResponsePage.aspx?id=ufHGAhf8REe02YKd5W-vdchw0gpIkUdMqiTcsnOro6ZUQUJURlY2M09ERUYzOFAzTERBN0NFVVc3MS4u"
                        target="_blank"
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
