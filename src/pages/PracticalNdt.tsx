import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
   Gamepad2,
   Boxes,
   Target,
   TrendingUp,
   GraduationCap,
   ShieldCheck,
   Radio,
   Zap,
   Waves,
   Eye,
   Sparkles,
   ArrowRight,
   CheckCircle,
   Globe2,
   Users,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOHead } from "@/components/SEOHead";
import { Navigation } from "@/components/Navigation";
import ContactDetails from "@/components/ContactDetails";
import EnquiryCaptureForm from "@/components/EnquiryCaptureForm";
import QuickAnswerBox from "@/components/QuickAnswerBox";
import TableOfContents from "@/components/TableOfContents";

const METHODS = [
   { icon: Waves, name: "Ultrasonic Testing (UT)", detail: "Probe angle, coupling, and scan-pattern practice against virtual weld and plate geometries" },
   { icon: Radio, name: "Phased Array UT (PAUT)", detail: "S-scan and sector-scan interpretation on realistic flaw libraries, no live equipment booking required" },
   { icon: Eye, name: "Radiographic Testing (RT)", detail: "Film and digital radiograph interpretation drills across a growing indication library" },
   { icon: Target, name: "Magnetic Particle (MT)", detail: "Yoke and prod technique practice, indication recognition on castings and welds" },
   { icon: Sparkles, name: "Liquid Penetrant (PT)", detail: "Surface-breaking defect recognition across dwell-time and developer-technique scenarios" },
   { icon: ShieldCheck, name: "Visual Testing (VT)", detail: "Structured visual inspection sequences against acceptance criteria" },
   { icon: Zap, name: "Eddy Current (ET)", detail: "Signal interpretation practice for surface and near-surface discontinuities" },
   { icon: Boxes, name: "TOFD", detail: "Time-of-flight diffraction sizing practice on volumetric weld scenarios" },
];

const LEVELS = [
   {
      title: "New Trainee",
      description:
         "Guided scenarios build probe manipulation, scan-pattern discipline, and defect-recognition fundamentals before a trainee ever touches a real specimen — pattern recognition that normally takes months of limited lab access builds in a fraction of the time.",
   },
   {
      title: "Working Technician",
      description:
         "Between real assignments, skills atrophy — especially on defect types a crew rarely encounters on a given contract. Scenario libraries targeting rare and hard-to-source defect types keep a working technician's eye sharp without waiting for the right job to come along.",
   },
   {
      title: "Level III / Team Lead",
      description:
         "Level IIIs use the platform to build and assign scenario sets for their own crews, benchmark technician performance objectively, and identify where a team's coverage of defect types or methods has gaps — before an audit or a real job finds them.",
   },
];

const structuredData = {
   "@context": "https://schema.org",
   "@graph": [
      {
         "@type": "SoftwareApplication",
         "@id": "https://atlantisndt.com/practical-ndt#software",
         name: "Atlantis Practical NDT",
         description:
            "Immersive 3D, game-like skills-practice simulation platform for NDT inspection methods — UT, PAUT, RT, MT, PT, VT, ET and TOFD. Adaptive scenarios for any skill level, from first-time trainee to working Level III. Affordable, accessible, fully customizable.",
         applicationCategory: "EducationalApplication",
         operatingSystem: "Web, Windows, macOS, iOS, Android",
         url: "https://atlantisndt.com/practical-ndt",
         offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            url: "https://atlantisndt.com/practical-ndt",
         },
         featureList: METHODS.map((m) => m.name).join(", "),
         provider: { "@id": "https://atlantisndt.com/#organization" },
      },
      {
         "@type": "Service",
         "@id": "https://atlantisndt.com/practical-ndt#service",
         serviceType: "NDT Skills Practice Simulation",
         provider: { "@id": "https://atlantisndt.com/#organization" },
         areaServed: ["US", "CA", "GB", "NO", "NL", "AU", "NZ", "JP", "SG", "IN", "AE", "SA", "QA", "NG", "ZA", "ID", "MY", "PH", "VN"],
      },
      {
         "@type": "FAQPage",
         mainEntity: [
            {
               "@type": "Question",
               name: "Does Practical NDT replace the practical certification exam?",
               acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Practical NDT is a skills-practice and readiness platform. ASNT SNT-TC-1A and employer written practices require a supervised practical examination on real specimens for certification — Practical NDT builds the pattern recognition and procedural muscle memory that prepares a technician for that exam and for real work, but it does not replace it.",
               },
            },
            {
               "@type": "Question",
               name: "What experience level is Practical NDT built for?",
               acceptedAnswer: {
                  "@type": "Answer",
                  text: "Any level. New trainees build fundamentals through guided scenarios, working technicians use it to stay sharp between assignments and drill rare defect types, and Level IIIs use it to build and assign scenario sets for their own teams.",
               },
            },
            {
               "@type": "Question",
               name: "Which NDT methods does the platform cover?",
               acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ultrasonic Testing (UT), Phased Array UT (PAUT), Radiographic Testing (RT), Magnetic Particle Testing (MT), Liquid Penetrant Testing (PT), Visual Testing (VT), Eddy Current Testing (ET) and Time-of-Flight Diffraction (TOFD).",
               },
            },
         ],
      },
   ],
};

export default function PracticalNdt() {
   return (
      <div className="min-h-screen pt-20">
         <Navigation />
         <TableOfContents
            items={[
               { id: "overview", label: "Overview" },
               { id: "methods", label: "Methods" },
               { id: "levels", label: "Skill Levels" },
               { id: "training", label: "Complements Training" },
               { id: "regions", label: "Where We Deliver" },
               { id: "faq", label: "FAQ" },
            ]}
         />
         <QuickAnswerBox
            question="What is Atlantis Practical NDT?"
            answer="Atlantis Practical NDT is an immersive 3D, game-like skills-practice simulation platform. Technicians at any level — from first-time trainee to working Level III — practice inspection scenarios across UT, PAUT, RT, MT, PT, VT, ET and TOFD on realistic virtual assets, with instant scored feedback. It builds practical proficiency and readiness; it complements formal ASNT training and does not replace the required practical certification exam."
            bullets={[
               "Immersive, game-like 3D practice environment — no physical specimens or lab booking required",
               "Adaptive scenarios for trainees, working technicians, and Level III scenario-builders",
               "Complements ASNT SNT-TC-1A training — never a substitute for the certifying practical exam",
            ]}
         />

         <SEOHead
            title="Practical NDT — Immersive 3D Skills Practice Simulator | Atlantis NDT"
            description="Practice NDT inspection skills in an immersive 3D, game-like simulator — UT, PAUT, RT, MT, PT, VT, ET and TOFD, any skill level. Complements ASNT training. Affordable, accessible, fully customizable. Free demo on request."
            keywords="NDT simulator, NDT training simulator, practical NDT training, NDT skills practice, virtual NDT training, 3D NDT simulation, ultrasonic testing simulator, phased array training simulator, NDT game based learning"
            structuredData={structuredData}
            canonical="https://atlantisndt.com/practical-ndt"
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
                  className="max-w-4xl mx-auto text-center"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
               >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                     <Gamepad2 className="w-4 h-4" /> New — Immersive 3D Skills Practice
                  </div>
                  <h1 id="overview" className="text-4xl md:text-6xl font-bold mb-6">
                     Practical NDT{" "}
                     <span className="gradient-text">— Practice Inspection Skills in an Immersive 3D World</span>
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                     Hop into a game-like 3D environment and practice real NDT inspection scenarios —
                     UT, PAUT, RT, MT, PT, VT, ET and TOFD — on realistic virtual welds, pipe sections,
                     pressure vessels and castings. Built for any skill level, from a first-time trainee
                     building fundamentals to a working Level III drilling rare defect types.
                     No specimens to source, no lab time to book, no safety exposure.
                     <strong className="text-foreground"> Affordable. Accessible. Fully customizable.</strong>
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-3">
                     <a
                        href="#practical-ndt-enquiry"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg shadow-lg hover:opacity-90 transition"
                     >
                        Request a Demo <ArrowRight className="w-4 h-4" />
                     </a>
                     <Link
                        to="/contact?service=practical-ndt&subject=Practical%20NDT%20Demo%20Request"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-semibold rounded-lg shadow-lg hover:opacity-90 transition"
                     >
                        Book a Free Consultation
                     </Link>
                  </div>
               </motion.div>
            </div>
         </motion.section>

         {/* Why practice matters */}
         <section className="py-16">
            <div className="container mx-auto px-6 max-w-5xl">
               <h2 className="text-3xl font-bold mb-6 text-center">Why Hands-On Practice Is the Bottleneck</h2>
               <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Real proficiency in NDT is built through repetition against a wide range of defect
                  types — and that is exactly what's hardest to get in the real world. Specimens with
                  known, documented flaws are expensive and scarce. Lab time competes with production
                  schedules. Rare defect geometries might show up once a year on a real job, if at all.
                  Meanwhile, skills that aren't used regularly perish — a technician who spent six months
                  on thickness surveys can lose sharpness on weld interpretation fast.
               </p>
               <p className="text-muted-foreground text-lg leading-relaxed">
                  Practical NDT removes the scarcity. An unlimited, ever-growing library of realistic
                  defect scenarios is available on demand, with instant scored feedback on every attempt
                  — so a technician (or an entire crew) can drill exactly the method, defect type and
                  difficulty level that matters most, as often as it takes to get it right.
               </p>
            </div>
         </section>

         {/* Methods */}
         <section id="methods" className="py-16 bg-muted/30">
            <div className="container mx-auto px-6">
               <h2 className="text-3xl font-bold mb-10 text-center">Methods You Can Practice</h2>
               <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {METHODS.map((m) => (
                     <Card key={m.name} className="h-full">
                        <CardHeader>
                           <m.icon className="w-8 h-8 text-primary mb-2" />
                           <CardTitle className="text-lg">{m.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <p className="text-sm text-muted-foreground">{m.detail}</p>
                        </CardContent>
                     </Card>
                  ))}
               </div>
            </div>
         </section>

         {/* Skill levels */}
         <section id="levels" className="py-16">
            <div className="container mx-auto px-6 max-w-5xl">
               <h2 className="text-3xl font-bold mb-10 text-center">Built for Every Skill Level</h2>
               <div className="grid md:grid-cols-3 gap-6">
                  {LEVELS.map((l) => (
                     <Card key={l.title} className="h-full">
                        <CardHeader>
                           <Users className="w-8 h-8 text-primary mb-2" />
                           <CardTitle>{l.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <p className="text-sm text-muted-foreground leading-relaxed">{l.description}</p>
                        </CardContent>
                     </Card>
                  ))}
               </div>
            </div>
         </section>

         {/* Complements training — the critical compliance framing */}
         <section id="training" className="py-16 bg-muted/30">
            <div className="container mx-auto px-6 max-w-4xl">
               <div className="flex items-start gap-4 mb-6">
                  <GraduationCap className="w-10 h-10 text-primary shrink-0" />
                  <div>
                     <h2 className="text-3xl font-bold mb-4">Complements Formal ASNT Training — Never a Substitute</h2>
                     <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                        Practical NDT is a skills-practice and readiness tool. Certification under ASNT
                        SNT-TC-1A or an employer's written practice still requires the supervised practical
                        examination on real specimens that the standard mandates — nothing about that
                        changes. What Practical NDT does is get a technician to that exam, and to real
                        assignments, with far more repetition behind them than limited specimen access
                        would otherwise allow.
                     </p>
                     <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                        It sits alongside Atlantis's <Link to="/training" className="text-primary hover:underline">NDT
                        Training and certification programs</Link> — built for employer-based ASNT SNT-TC-1A
                        certification — as a practice layer that reinforces what's taught in the classroom
                        and on the shop floor, and keeps it sharp long after the course ends.
                     </p>
                     <ul className="space-y-2">
                        {[
                           "Builds pattern recognition before a trainee's first real specimen",
                           "Keeps working technicians sharp between assignments",
                           "Gives Level IIIs a way to benchmark and close team skill gaps",
                           "Never claims to grant certification or replace the practical exam",
                        ].map((item) => (
                           <li key={item} className="flex items-start gap-2 text-muted-foreground">
                              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /> {item}
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         </section>

         {/* Regions */}
         <section id="regions" className="py-16">
            <div className="container mx-auto px-6">
               <div className="flex items-center justify-center gap-2 mb-4">
                  <Globe2 className="w-6 h-6 text-primary" />
                  <h2 className="text-3xl font-bold text-center">Where We Deliver Practical NDT</h2>
               </div>
               <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
                  Rolling out first across North America, then Europe, Australia, New Zealand, Japan and
                  Singapore, and India, the Middle East, Africa and Southeast Asia. Browse a city below,
                  or request a demo regardless of location — the platform is browser-based and deploys
                  anywhere.
               </p>
               <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-sm max-w-5xl mx-auto">
                  {[
                     ["Houston", "houston"], ["Dallas", "dallas"], ["Calgary", "calgary"], ["Edmonton", "edmonton"],
                     ["Denver", "denver"], ["Pittsburgh", "pittsburgh"], ["New Orleans", "new-orleans"], ["Toronto", "toronto"],
                     ["Aberdeen", "aberdeen"], ["Rotterdam", "rotterdam"], ["Perth", "perth"], ["Melbourne", "melbourne"],
                     ["Singapore", "singapore"], ["Tokyo", "tokyo"], ["Mumbai", "mumbai"], ["Dubai", "dubai"],
                     ["Abu Dhabi", "abu-dhabi"], ["Riyadh", "riyadh"], ["Doha", "doha"], ["Lagos", "lagos"],
                     ["Johannesburg", "johannesburg"], ["Jakarta", "jakarta"], ["Kuala Lumpur", "kuala-lumpur"], ["Manila", "manila"],
                  ].map(([label, slug]) => (
                     <Link
                        key={slug}
                        to={`/practical-ndt-${slug}`}
                        className="px-4 py-3 rounded-lg border border-border hover:border-primary hover:text-primary transition text-center"
                     >
                        {label}
                     </Link>
                  ))}
               </div>
            </div>
         </section>

         {/* Final CTA */}
         <section className="py-14">
            <div className="container mx-auto px-6">
               <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-primary to-accent p-8 md:p-10 text-center text-white shadow-xl">
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to see it in action?</h2>
                  <p className="text-base md:text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                     Tell us the methods and skill levels you want to cover, and we'll walk you through the
                     simulator on those exact scenarios.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                     <a
                        href="#practical-ndt-enquiry"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg shadow hover:bg-white/90 transition"
                     >
                        Request a Demo <ArrowRight className="w-4 h-4" />
                     </a>
                  </div>
                  <p className="text-sm opacity-80 mt-4">
                     Affordable. Accessible. Fully customizable. Free consultation, and a quote shaped to
                     your team size and scope.
                  </p>
               </div>
            </div>
         </section>

         <div id="practical-ndt-enquiry">
            <EnquiryCaptureForm variant="practical-ndt" />
         </div>

         <ContactDetails />
      </div>
   );
}
