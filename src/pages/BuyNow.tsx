import { motion } from "framer-motion";
import { CheckCircle, Award, Mail, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";
import { Navigation } from "@/components/Navigation";
import ContactDetails from "@/components/ContactDetails";

const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/cNi00l3WRgi3cv4cInbjW00";
const MS_FORM_LINK =
   "https://forms.office.com/Pages/ResponsePage.aspx?id=ufHGAhf8REe02YKd5W-vdchw0gpIkUdMqiTcsnOro6ZUQUJURlY2M09ERUYzOFAzTERBN0NFVVc3MS4u";

const METHODS = ["RT", "UT", "MT", "PT", "VT"];

const BUNDLES = [
   {
      level: "Level 1",
      title: "Level 1 Course Bundle",
      description:
         "Entry-level training across all five core methods — the standard starting pathway for someone new to NDT.",
      features: [
         "All 5 methods: Radiographic, Ultrasonic, Magnetic Particle, Penetrant, and Visual Testing",
         "Self-paced online access via our eLearning portal",
         "Foundational theory for each method, aligned to SNT-TC-1A",
      ],
   },
   {
      level: "Level 2",
      title: "Level 2 Course Bundle",
      description:
         "Advanced training across all five core methods, for candidates progressing from Level 1 or with prior field experience.",
      features: [
         "All 5 methods: Radiographic, Ultrasonic, Magnetic Particle, Penetrant, and Visual Testing",
         "Self-paced online access via our eLearning portal",
         "Advanced interpretation and defect-evaluation content, aligned to SNT-TC-1A",
      ],
   },
];

export default function BuyNow() {
   const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
         {
            "@type": "Service",
            name: "Atlantis NDT Training Course Bundles",
            provider: {
               "@type": "Organization",
               name: "Atlantis NDT",
               url: "https://atlantisndt.com",
            },
            serviceType: "NDT Training",
            description:
               "Level 1 and Level 2 NDT training course bundles covering Radiographic, Ultrasonic, Magnetic Particle, Penetrant, and Visual Testing methods.",
            offers: {
               "@type": "Offer",
               availability: "https://schema.org/InStock",
            },
         },
      ],
   };

   return (
      <div className="min-h-screen pt-20">
         <Navigation />
         <SEOHead
            title="Buy NDT Training Course Bundles — Level 1 & Level 2 | Atlantis NDT"
            description="Purchase an Atlantis NDT training course bundle — Level 1 or Level 2, covering RT, UT, MT, PT, and VT. Instant access via our eLearning portal after checkout."
            structuredData={structuredData}
            canonical="https://atlantisndt.com/buy-now"
         />

         {/* Hero */}
         <motion.section
            className="py-20 bg-gradient-to-r from-primary/10 to-accent/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
         >
            <div className="container mx-auto px-6">
               <motion.div
                  className="max-w-3xl mx-auto text-center"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
               >
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                     Buy Your <span className="gradient-text">NDT Course Bundle</span>
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                     Choose Level 1 or Level 2 — each bundle covers all five core
                     methods (RT, UT, MT, PT, VT). Checkout is handled securely by
                     Stripe; you'll confirm your bundle level during checkout.
                  </p>
               </motion.div>
            </div>
         </motion.section>

         {/* Bundle cards */}
         <section className="py-16">
            <div className="container mx-auto px-6">
               <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {BUNDLES.map((bundle) => (
                     <Card key={bundle.level} className="border-2 hover:border-primary/50 transition">
                        <CardHeader>
                           <div className="flex items-center gap-2 text-primary mb-2">
                              <Award className="w-5 h-5" />
                              <span className="font-semibold">{bundle.level}</span>
                           </div>
                           <CardTitle className="text-2xl">{bundle.title}</CardTitle>
                           <p className="text-muted-foreground mt-2">{bundle.description}</p>
                        </CardHeader>
                        <CardContent>
                           <div className="flex flex-wrap gap-2 mb-6">
                              {METHODS.map((m) => (
                                 <span
                                    key={m}
                                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                                 >
                                    {m}
                                 </span>
                              ))}
                           </div>
                           <ul className="space-y-3 mb-6">
                              {bundle.features.map((f, i) => (
                                 <li key={i} className="flex items-start gap-2 text-sm">
                                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                    <span>{f}</span>
                                 </li>
                              ))}
                           </ul>
                           <Button asChild className="w-full" size="lg">
                              <a href={STRIPE_PAYMENT_LINK} target="_blank" rel="noopener noreferrer">
                                 Buy {bundle.level} Bundle
                              </a>
                           </Button>
                        </CardContent>
                     </Card>
                  ))}
               </div>

               <p className="text-center text-sm text-muted-foreground mt-6 max-w-2xl mx-auto">
                  Both bundles use the same secure checkout — you'll select "Level 1" or
                  "Level 2" as part of the Stripe checkout form, so it doesn't matter
                  which button you click first.
               </p>
            </div>
         </section>

         {/* What happens after payment */}
         <section className="py-16 bg-secondary/20">
            <div className="container mx-auto px-6 max-w-3xl">
               <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                  What Happens After You Pay
               </h2>
               <div className="space-y-4">
                  <Card>
                     <CardContent className="p-6">
                        <p className="text-sm text-muted-foreground">
                           Once your payment is confirmed, we automatically create your
                           learner account using the email address from checkout and
                           enroll you in all 5 methods for your chosen level. You'll
                           receive an email with your login details and course access —
                           this is usually quick, but can occasionally take a little
                           time to arrive.
                        </p>
                     </CardContent>
                  </Card>
                  <Card>
                     <CardContent className="p-6 flex items-start gap-3">
                        <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">
                           <strong>Didn't get your access email?</strong> Reach out to{" "}
                           <a href="mailto:info@atlantisndt.com" className="text-primary underline">
                              info@atlantisndt.com
                           </a>{" "}
                           with the email you used at checkout, and our team will set up
                           your account manually.
                        </p>
                     </CardContent>
                  </Card>
               </div>
            </div>
         </section>

         {/* Individual methods fallback */}
         <section className="py-16">
            <div className="container mx-auto px-6 max-w-3xl text-center">
               <h2 className="text-2xl font-bold mb-4">Only Need One or Two Methods?</h2>
               <p className="text-muted-foreground mb-6">
                  These bundles cover all 5 core methods together. If you'd like to
                  select individual methods instead, contact us directly and we'll
                  put together the right combination for you.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="outline" size="lg">
                     <a href="mailto:info@atlantisndt.com">
                        <Mail className="w-4 h-4 mr-2" />
                        Email info@atlantisndt.com
                     </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                     <a href={MS_FORM_LINK} target="_blank" rel="noopener noreferrer">
                        <FileText className="w-4 h-4 mr-2" />
                        Fill Out Enquiry Form
                     </a>
                  </Button>
               </div>
            </div>
         </section>

         <ContactDetails />
      </div>
   );
}
