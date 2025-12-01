import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Users, Clock, Trophy, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SEOHead } from '@/components/SEOHead';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Navigation } from '@/components/Navigation';
import ContactDetails from '@/components/ContactDetails';
import { Link } from 'react-router-dom';
export default function Training() {
   const courses = [
      {
         level: "Level I",
         title: "Trainee Certification",
         duration: "40 hours",
         methods: ["UT", "MT", "PT", "VT"],
         description:
            "Basic principles and hands-on practice for entry-level technicians.",
         features: [
            "Training material per latest SNT-TC-1A & NAS 410",
            "Hands-on training & equipment familiarization",
            "Safety protocols and practical demonstrations",
            "Exam in accordance with CP 105",
         ],
      },
      {
         level: "Level II",
         title: "NDT Inspector",
         duration: "80 hours",
         methods: ["UT", "MT", "PT", "VT", "RT"],
         description:
            "Advanced techniques and interpretation for experienced professionals.",
         features: [
            "Advanced interpretation & defect evaluation",
            "Procedure writing and reporting",
            "Equipment calibration & quality control",
            "Exam in accordance with CP 105",
            "Training aligned with SNT-TC-1A & NAS 410 standards",
         ],
      },
      {
         level: "Level III",
         title: "Senior Inspector",
         duration: "120 hours",
         methods: ["UT", "MT", "PT", "VT", "RT", "ET"],
         description:
            "Comprehensive training for senior professionals and consultants.",
         features: [
            "Procedure & program development",
            "Technical leadership and mentoring",
            "Code compliance & international standards",
            "Training material per latest SNT-TC-1A & NAS 410",
            "Exam in accordance with CP 105",
         ],
      },
   ];


   const benefits = [
      {
         icon: Award,
         title: "Industry Recognized",
         description: "Certifications recognized across oil & gas, aerospace, marine, and nuclear industries."
      },
      {
         icon: Users,
         title: "Expert Instructors",
         description: "Learn from Level III certified professionals with decades of field experience."
      },
      {
         icon: BookOpen,
         title: "Comprehensive Curriculum",
         description: "Updated course materials covering latest standards and technological advances."
      },
      {
         icon: Trophy,
         title: "High Success Rate",
         description: "95% pass rate with personalized attention and practical learning approach."
      }
   ];

   const eduOrg = {
      "@type": "EducationalOrganization",
      "name": "Atlantis NDT Training",
      "description": "Professional NDT training and certification programs",
      "areaServed": "India",
      "hasOfferCatalog": {
         "@type": "OfferCatalog",
         "name": "NDT Training Programs",
         "itemListElement": courses.map((course, index) => ({
            "@type": "Offer",
            "position": index + 1,
            "itemOffered": {
               "@type": "Course",
               "name": course.title,
               "description": course.description,
               "timeRequired": course.duration,
               "courseMode": "blended"
            }
         }))
      }
   };

   const faq = {
      "@type": "FAQPage",
      "mainEntity": [
         {
            "@type": "Question",
            "name": "What NDT certification levels do you offer?",
            "acceptedAnswer": {
               "@type": "Answer",
               "text": "We offer Level I, II and III certification courses aligned with SNT-TC-1A and NAS 410 standards."
            }
         },
         {
            "@type": "Question",
            "name": "Do you provide hands-on practical training?",
            "acceptedAnswer": {
               "@type": "Answer",
               "text": "Yes — our courses include hands-on practice with industry-grade equipment and practical assessments."
            }
         },
         {
            "@type": "Question",
            "name": "Are courses available in India?",
            "acceptedAnswer": {
               "@type": "Answer",
               "text": "Yes — we run scheduled training programs in India and can provide on-site corporate training. Contact us for the next schedule."
            }
         }
      ]
   };

   const structuredData = {
      "@context": "https://schema.org",
      "@graph": [eduOrg, faq]
   };

   return (
      <div className="min-h-screen pt-20">
         <Navigation />
         <SEOHead
            title="NDT Training Programs — India"
            description="Professional NDT training and certification programs in India. Level I, II, III courses in ultrasonic, radiographic, magnetic particle, penetrant, eddy current, and visual testing. VR/AR enhanced learning."
            keywords={`NDT training India, NDT certification India, ultrasonic training India, radiographic training India, Level I II III certification, VR AR training, hands-on NDT courses, ndt testing, non destructive testing, ultrasonic testing, ndt non destructive testing, destructive and non destructive testing, nondestructive examination, ultrasonic examination, ndt non destructive, ndt destructive testing, non destructive testing and destructive testing, destructive non destructive testing, destructive testing and non destructive testing, destructive and non destructive test, destructive and nondestructive, non destructive inspection, magnetic particle testing, non destructive evaluation, radiography testing, mpi testing, magnetic particle inspection test, magnetic inspection test, mp testing, eddy current testing, liquid penetrant testing, penetrant testing`}
            structuredData={structuredData}
            canonical="https://atlantisndt.com/training"
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
                     NDT <span className="gradient-text">Training</span>
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                     Professional NDT training programs designed to advance your
                     career with industry-recognized certifications and hands-on
                     experience.
                  </p>
               </motion.div>
            </div>
         </motion.section>

         {/* Keywords / Topics summary for SEO (naturally written) */}
         <section className="py-6">
            <div className="container mx-auto px-6 max-w-4xl">
               <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                     <p className="text-muted-foreground text-base leading-relaxed">
                        Our training covers a wide range of inspection methods
                        and testing topics, including non-destructive testing
                        (NDT), ultrasonic testing and examination, magnetic
                        particle testing (MPI), radiography and radiography
                        testing, eddy current testing, liquid penetrant and
                        penetrant testing, and both destructive and
                        non-destructive inspection techniques. We also include
                        practical courses on test planning, reporting, and
                        quality assurance to prepare candidates for industry
                        certification and real-world inspections.
                     </p>
                  </CardContent>
               </Card>
            </div>
         </section>

         {/* Training Levels */}
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
                     Certification Levels
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                     Structured training programs from foundation to expert
                     level, following international standards.
                  </p>
               </motion.div>

               <div className="grid md:grid-cols-3 gap-8">
                  {courses.map((course, index) => (
                     <motion.div
                        key={course.level}
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                     >
                        <Card className="h-full hover-scale border-0 shadow-md group relative overflow-hidden">
                           <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-primary opacity-10 rounded-bl-full" />
                           <CardHeader>
                              <div className="flex items-center justify-between mb-4">
                                 <Badge className="bg-primary text-primary-foreground">
                                    {course.level}
                                 </Badge>
                                 <div className="flex items-center gap-2 text-muted-foreground">
                                    <Clock className="w-4 h-4" />
                                    <span className="text-sm">
                                       {course.duration}
                                    </span>
                                 </div>
                              </div>
                              <CardTitle className="text-2xl mb-2">
                                 {course.title}
                              </CardTitle>
                              <p className="text-muted-foreground">
                                 {course.description}
                              </p>
                           </CardHeader>
                           <CardContent>
                              <div className="mb-6">
                                 <h4 className="font-semibold mb-3">
                                    Methods Covered:
                                 </h4>
                                 <div className="flex flex-wrap gap-2">
                                    {course.methods.map((method) => (
                                       <Badge
                                          key={method}
                                          variant="outline"
                                          className="text-xs"
                                       >
                                          {method}
                                       </Badge>
                                    ))}
                                 </div>
                              </div>
                              <div className="mb-6">
                                 <h4 className="font-semibold mb-3">
                                    Key Features:
                                 </h4>
                                 <ul className="space-y-2 h-40">
                                    {course.features.map((feature, idx) => (
                                       <li
                                          key={idx}
                                          className="flex items-center gap-2 text-sm"
                                       >
                                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                          {feature}
                                       </li>
                                    ))}
                                 </ul>
                              </div>
                              <Button
                                 asChild
                                 className="btn-primary w-full group-hover:shadow-lg transition-all duration-300"
                              >
                                 <a
                                    href="https://forms.office.com/Pages/ResponsePage.aspx?id=ufHGAhf8REe02YKd5W-vdchw0gpIkUdMqiTcsnOro6ZUQUJURlY2M09ERUYzOFAzTERBN0NFVVc3MS4u"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                 >
                                    Enquiry Form
                                 </a>
                              </Button>
                           </CardContent>
                        </Card>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* FAQ visible content (using themed Accordion) */}
         <section className="py-8">
            <div className="container mx-auto px-6 max-w-4xl">
               <h3 className="text-2xl font-semibold mb-4">
                  Frequently asked questions
               </h3>
               <Accordion type="single" collapsible>
                  <AccordionItem value="q1">
                     <AccordionTrigger>
                        What NDT certification levels do you offer?
                     </AccordionTrigger>
                     <AccordionContent>
                        <p className="text-muted-foreground">
                           We offer Level I, II and III certification courses
                           aligned with SNT-TC-1A and NAS 410 standards.
                           Practical assessments and exams are included.
                        </p>
                     </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="q2">
                     <AccordionTrigger>
                        Do you provide hands-on practical training?
                     </AccordionTrigger>
                     <AccordionContent>
                        <p className="text-muted-foreground">
                           Yes — our programs include hands-on practice with
                           industry-grade equipment and instructor-led labs to
                           build competency.
                        </p>
                     </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="q3">
                     <AccordionTrigger>
                        Are courses available in India?
                     </AccordionTrigger>
                     <AccordionContent>
                        <p className="text-muted-foreground">
                           Yes — we schedule training sessions in India and can
                           provide customized on-site corporate programs. Contact
                           our team for details and schedules.
                        </p>
                     </AccordionContent>
                  </AccordionItem>
               </Accordion>
            </div>
         </section>

         {/* Benefits Section */}
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
                     Why Choose Our Training
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                     Industry-leading training programs with proven results and
                     comprehensive support.
                  </p>
               </motion.div>

               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {benefits.map((benefit, index) => (
                     <motion.div
                        key={benefit.title}
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                     >
                        <Card className="h-full text-center border-0 shadow-md hover-scale">
                           <CardContent className="p-6">
                              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                 <benefit.icon className="w-8 h-8 text-primary-foreground" />
                              </div>
                              <h3 className="text-xl font-bold mb-3">
                                 {benefit.title}
                              </h3>
                              <p className="text-muted-foreground">
                                 {benefit.description}
                              </p>
                           </CardContent>
                        </Card>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>
         {/* Regional Training Programs Section */}
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
                     Regional Training Programs
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                     Specialized NDT training tailored to your regional market and industry needs
                  </p>
               </motion.div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                  >
                     <Card className="h-full hover:shadow-lg transition-shadow bg-card border-primary/20 hover:border-primary">
                        <CardHeader>
                           <CardTitle className="text-primary">USA Training</CardTitle>
                           <p className="text-sm text-muted-foreground mt-2">
                              Aerospace and industrial NDT programs nationwide
                           </p>
                        </CardHeader>
                        <CardContent>
                           <ul className="space-y-2 mb-6 text-sm">
                              <li className="flex items-center gap-2">
                                 <CheckCircle className="w-4 h-4 text-primary" />
                                 <span>ASNT SNT-TC-1A Compliant</span>
                              </li>
                              <li className="flex items-center gap-2">
                                 <CheckCircle className="w-4 h-4 text-primary" />
                                 <span>NAS410 Aerospace Programs</span>
                              </li>
                              <li className="flex items-center gap-2">
                                 <CheckCircle className="w-4 h-4 text-primary" />
                                 <span>Phased Array & TOFD Training</span>
                              </li>
                           </ul>
                           <Link to="/training-usa" className="cursor-pointer">
                              <Button variant="outline" className="w-full text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer">
                                 Learn More
                              </Button>
                           </Link>
                        </CardContent>
                     </Card>
                  </motion.div>
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6, delay: 0.1 }}
                  >
                     <Card className="h-full hover:shadow-lg transition-shadow bg-card border-primary/20 hover:border-primary">
                        <CardHeader>
                           <CardTitle className="text-primary">Middle East Training</CardTitle>
                           <p className="text-sm text-muted-foreground mt-2">
                              GCC oil & gas offshore training programs
                           </p>
                        </CardHeader>
                        <CardContent>
                           <ul className="space-y-2 mb-6 text-sm">
                              <li className="flex items-center gap-2">
                                 <CheckCircle className="w-4 h-4 text-primary" />
                                 <span>ARAMCO-Compliant Programs</span>
                              </li>
                              <li className="flex items-center gap-2">
                                 <CheckCircle className="w-4 h-4 text-primary" />
                                 <span>Offshore Platform Focus</span>
                              </li>
                              <li className="flex items-center gap-2">
                                 <CheckCircle className="w-4 h-4 text-primary" />
                                 <span>RBI Methodology Training</span>
                              </li>
                           </ul>
                           <Link to="/training-me" className="cursor-pointer">
                              <Button variant="outline" className="w-full text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer">
                                 Learn More
                              </Button>
                           </Link>
                        </CardContent>
                     </Card>
                  </motion.div>
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6, delay: 0.2 }}
                  >
                     <Card className="h-full hover:shadow-lg transition-shadow bg-card border-primary/20 hover:border-primary">
                        <CardHeader>
                           <CardTitle className="text-primary">India Training</CardTitle>
                           <p className="text-sm text-muted-foreground mt-2">
                              Manufacturing and industrial NDT programs
                           </p>
                        </CardHeader>
                        <CardContent>
                           <ul className="space-y-2 mb-6 text-sm">
                              <li className="flex items-center gap-2">
                                 <CheckCircle className="w-4 h-4 text-primary" />
                                 <span>ASNT SNT-TC-1A Based</span>
                              </li>
                              <li className="flex items-center gap-2">
                                 <CheckCircle className="w-4 h-4 text-primary" />
                                 <span>Manufacturing Focus</span>
                              </li>
                              <li className="flex items-center gap-2">
                                 <CheckCircle className="w-4 h-4 text-primary" />
                                 <span>Multi-State Coverage</span>
                              </li>
                           </ul>
                           <Link to="/training-india" className="cursor-pointer">
                              <Button variant="outline" className="w-full text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer">
                                 Learn More
                              </Button>
                           </Link>
                        </CardContent>
                     </Card>
                  </motion.div>
               </div>
            </div>
         </section>
         {/* VR/AR Training Section */}
         <section className="py-20">
            <div className="container mx-auto px-6">
               <div className="grid md:grid-cols-2 gap-12 items-center">
                  <motion.div
                     initial={{ x: -50, opacity: 0 }}
                     whileInView={{ x: 0, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8 }}
                  >
                     <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        <span className="gradient-text">VR/AR</span> Enhanced
                        Training
                     </h2>
                     <p className="text-lg text-muted-foreground mb-6">
                        Experience the future of NDT training with our immersive
                        Virtual and Augmented Reality programs. Practice complex
                        procedures in a safe, controlled environment before
                        working on actual equipment.
                     </p>
                     <ul className="space-y-3 mb-8">
                        <li className="flex items-center gap-3">
                           <GraduationCap className="w-5 h-5 text-primary" />
                           <span>Immersive learning experiences</span>
                        </li>
                        <li className="flex items-center gap-3">
                           <GraduationCap className="w-5 h-5 text-primary" />
                           <span>Risk-free practice environment</span>
                        </li>
                        <li className="flex items-center gap-3">
                           <GraduationCap className="w-5 h-5 text-primary" />
                           <span>Real-time feedback and assessment</span>
                        </li>
                        <li className="flex items-center gap-3">
                           <GraduationCap className="w-5 h-5 text-primary" />
                           <span>Accelerated learning curve</span>
                        </li>
                     </ul>
                     <Link to="/digital-twins">
                        <Button className="btn-primary">
                           Explore VR Training
                        </Button>
                     </Link>
                  </motion.div>
                  <motion.div
                     initial={{ x: 50, opacity: 0 }}
                     whileInView={{ x: 0, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8, delay: 0.2 }}
                  >
                     <Card className="p-8 bg-gradient-card border-0 shadow-lg">
                        <CardContent className="p-0">
                           <div className="grid grid-cols-2 gap-6 text-center">
                              <div>
                                 <div className="text-3xl font-bold text-primary mb-2">
                                    95%
                                 </div>
                                 <div className="text-muted-foreground">
                                    Success Rate
                                 </div>
                              </div>
                              <div>
                                 <div className="text-3xl font-bold text-primary mb-2">
                                    500+
                                 </div>
                                 <div className="text-muted-foreground">
                                    Students Trained
                                 </div>
                              </div>
                              <div>
                                 <div className="text-3xl font-bold text-primary mb-2">
                                    10+
                                 </div>
                                 <div className="text-muted-foreground">
                                    NDT Methods
                                 </div>
                              </div>
                              <div>
                                 <div className="text-3xl font-bold text-primary mb-2">
                                    7+
                                 </div>
                                 <div className="text-muted-foreground">
                                    Years Experience
                                 </div>
                              </div>
                           </div>
                           <div className="mt-8 p-6 bg-primary/5 rounded-lg">
                              <p className="text-center text-muted-foreground">
                                 Join hundreds of professionals who have advanced
                                 their careers through our comprehensive training
                                 programs.
                              </p>
                           </div>
                        </CardContent>
                     </Card>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* CTA Section */}
         <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-6 text-center">
               <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
               >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                     Advance Your NDT Career
                  </h2>
                  <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                     Join our next training cohort and take your professional
                     skills to the next level.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     {/* <Button
                       size="lg"
                       variant="outline"
                       className="bg-transparent border-primary text-primary hover:bg-primary hover:text-white"
                    >
                       View Schedule
                    </Button> */}
                     <Button
                        size="lg"
                        variant="outline"
                        className="bg-transparent border-primary text-primary hover:bg-primary hover:text-white"
                     >
                        {" "}
                        <a
                           href="https://forms.office.com/Pages/ResponsePage.aspx?id=ufHGAhf8REe02YKd5W-vdchw0gpIkUdMqiTcsnOro6ZUQUJURlY2M09ERUYzOFAzTERBN0NFVVc3MS4u"
                           target="_blank"
                        >
                           Contact Us Today
                        </a>
                     </Button>
                  </div>
               </motion.div>
            </div>
         </section>
         <ContactDetails />
      </div>
   );
}