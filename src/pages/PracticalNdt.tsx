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
import PracticalNdtDirectory from "@/components/PracticalNdtDirectory";
import DeepContent from "@/components/DeepContent";
import UtAscanDemo, { ASCAN_TOOL_PATH } from "@/components/sprint/UtAscanDemo";
import ASCAN from "@/data/ascan-simulator-2026-10.json"; // 2026-10-12: intro + tool link, same text as scripts/ascan-simulator-2026-10.mjs
import MONEY_META from "@/data/money-page-meta.json"; // one source with scripts/ctr-wave13-overrides.mjs
import { PractiseNowLine, PracticalSimHubSections, PracticalSimEvidence } from "@/components/PracticalSimBlocks"; // 2026-10-17: same data as scripts/practical-ndt-simulators-2026-10.mjs
import { CATALOGUE, hubLearningResource } from "@/data/practical-ndt-simulators-2026-10.mjs";
import W16 from "@/data/ctr-wave16/traffic.json"; // 2026-10-18: wave-16 title/description, the layer the crawler applies last

// What is inside the simulator today. 2026-10-17: figures from the owner-approved white paper
// (CATALOGUE in src/data/practical-ndt-simulators-2026-10.mjs, the same numbers the crawler hub
// sentence now states); the 2026-05 five-workplace figure was out of date.
const SIM_STATS = [
   { value: String(CATALOGUE.workplaces), label: "workplaces" },
   { value: String(CATALOGUE.methodFamilies), label: "method families" },
   { value: String(CATALOGUE.lessons), label: "practical lessons" },
   { value: String(CATALOGUE.jobs), label: "catalogued jobs" },
];

const ENVIRONMENTS = [
   { name: "NDT Lab", meta: "Shared catalogue", detail: "Bench specimens and reference blocks for learning each method from first principles." },
   { name: "Welding Workshop", meta: "Shared catalogue", detail: "Weld coupons and fabrication joints inspected the way a shop QC technician does." },
   { name: "Aircraft Hangar", meta: "Shared catalogue", detail: "Airframe and component inspection in a maintenance-hangar setting." },
   { name: "Oil & Gas Site", meta: "Shared catalogue", detail: "Weld, corrosion, tube and screening practice within a process-plant setting." },
   { name: "Storage Tank", meta: "Dedicated installation: UT shell thickness · MFL floor screening", detail: "Tank shell thickness surveys and floor screening on a full-size tank." },
];

const METHOD_FAMILIES = [
   {
      icon: Eye,
      family: "Surface methods",
      methods: [
         { code: "PT", name: "Liquid penetrant", use: "Surface-breaking cracks and porosity on welds and machined parts" },
         { code: "MT", name: "Magnetic particle", use: "Surface and near-surface cracks in ferromagnetic welds and castings" },
         { code: "VT", name: "Visual examination", use: "Weld profile, corrosion, damage and access limitations" },
      ],
   },
   {
      icon: Waves,
      family: "Volumetric methods",
      methods: [
         { code: "UT", name: "Contact ultrasonics", use: "Thickness readings and flaw detection in welds and plate" },
         { code: "PAUT", name: "Phased array", use: "Sectorial weld scans and flaw sizing" },
         { code: "TOFD", name: "Time of flight diffraction", use: "Weld flaw detection and through-wall sizing" },
         { code: "RT", name: "Industrial radiography", use: "Volumetric inspection of welds and castings" },
      ],
   },
   {
      icon: Zap,
      family: "Electromagnetic methods",
      methods: [
         { code: "ET", name: "Eddy current", use: "Surface cracks and conductivity checks on non-ferrous and aircraft parts" },
         { code: "MFL", name: "Magnetic flux leakage", use: "Wall-loss screening of tank floors and pipe" },
      ],
   },
   {
      icon: Radio,
      family: "Screening & specialist",
      methods: [
         { code: "LRUT", name: "Guided-wave screening", use: "Long-range screening of pipe runs from one location" },
         { code: "IRIS", name: "Internal rotary ultrasonics", use: "Tube wall inspection in heat exchangers and boilers" },
         { code: "PMI", name: "Positive material identification", use: "Alloy verification of pipe, fittings and welds" },
      ],
   },
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
         "Level IIIs use the platform to build and assign scenario sets for their own crews, compare technicians on the same jobs under the same evidence rules, and identify where a team's coverage of defect types or methods has gaps — before an audit or a real job finds them.",
   },
];

const structuredData = {
   "@context": "https://schema.org",
   "@graph": [
      hubLearningResource(),
      {
         "@type": "SoftwareApplication",
         "@id": "https://atlantisndt.com/practical-ndt#software",
         name: "Atlantis Practical NDT",
         description:
            "Online NDT simulator: browser-based 3D skills practice in twelve method families, including UT, PAUT, RT, MT, PT, VT, ET and TOFD, standalone or inside the Atlantis LMS and ERP eLearning portal. Three levels of assistance, from guided to independent, for any skill level from first-time trainee to working Level III. Complements formal training; not a certification substitute.",
         applicationCategory: "EducationalApplication",
         operatingSystem: "Web, Windows, macOS, iOS, Android",
         url: "https://atlantisndt.com/practical-ndt",
         featureList: METHOD_FAMILIES.flatMap((f) => f.methods.map((m) => `${m.name} (${m.code})`)).join(", "),
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
                  text: "Twelve method families: Ultrasonic Testing (UT), Phased Array UT (PAUT), Time-of-Flight Diffraction (TOFD), Radiographic Testing (RT), Magnetic Particle Testing (MT), Liquid Penetrant Testing (PT), Visual Testing (VT), Eddy Current Testing (ET), Internal Rotary Inspection (IRIS), Magnetic Flux Leakage (MFL), guided-wave Long-Range UT (LRUT) and Positive Material Identification (PMI).",
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
               { id: "by-method", label: "By Method" },
               { id: "by-workplace", label: "By Workplace" },
               { id: "levels", label: "Skill Levels" },
               { id: "training", label: "Complements Training" },
               { id: "regions", label: "Where We Deliver" },
               { id: "faq", label: "FAQ" },
            ]}
         />
         <QuickAnswerBox
            question="What is Atlantis Practical NDT?"
            answer="Atlantis Practical NDT is an online NDT simulator: an immersive 3D, game-like skills-practice platform. Technicians at any level — from first-time trainee to working Level III — practice inspection jobs in twelve method families, including UT, PAUT, RT, MT, PT, VT, ET and TOFD, on realistic virtual assets, with step-by-step procedure feedback and the interpretation reviewed by the instructor. It builds practical proficiency and readiness; it complements formal ASNT training and does not replace the required practical certification exam."
            bullets={[
               "Immersive, game-like 3D practice environment — no physical specimens or lab booking required",
               "Three levels of assistance, from guided to independent, for trainees, working technicians and Level IIIs",
               "Complements ASNT SNT-TC-1A training — never a substitute for the certifying practical exam",
            ]}
         />

         <SEOHead
            title={(W16 as Record<string, { title: string; description: string }>)["/practical-ndt"]?.title ?? MONEY_META["/practical-ndt"].title}
            description={(W16 as Record<string, { title: string; description: string }>)["/practical-ndt"]?.description ?? MONEY_META["/practical-ndt"].description}
            keywords="NDT simulator, NDT training simulator, practical NDT training, NDT skills practice, 3D NDT simulation, NDT simulation software, phased array training simulator, NDT game based learning"
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
                  {/* 2026-10-09 sprint (Day 3): buyer-focused H1 naming what it is (an NDT simulator) and the methods.
                      2026-10-12: "NDT simulator" leads; same text as SPRINT_H1['/practical-ndt'] in scripts/sprint-2026-10.mjs. */}
                  <h1 id="overview" className="text-4xl md:text-6xl font-bold mb-6">
                     NDT Simulator{" "}
                     <span className="gradient-text">for Hands-On UT, PAUT, RT, MT and More — Atlantis Practical NDT</span>
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                     {ASCAN.practicalHub.intro}
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
                     <a
                        href="#ut-demo"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition"
                     >
                        Try the A-scan demo
                     </a>
                  </div>
                  {/* 2026-10-12: prominent link to the full-page tool (crawler: scripts/ascan-simulator-2026-10.mjs). */}
                  <p className="mt-6 text-base">
                     <strong>{ASCAN.practicalHub.calloutLead}</strong>{" "}
                     <Link to={ASCAN_TOOL_PATH} className="font-semibold text-primary underline underline-offset-4">{ASCAN.practicalHub.calloutLink}</Link>: {ASCAN.practicalHub.calloutTail}
                  </p>
                  <PractiseNowLine />
               </motion.div>
            </div>
         </motion.section>

         {/* 2026-10-09 sprint (Day 4): simplified, clearly labelled A-scan demo with standalone and inside-the-ERP demo requests. */}
         <UtAscanDemo fullPageLink />

         {/* 2026-10-18: evidence (MIL-HDBK-1823A, HSE PANI 3) and how an attempt is checked, from the shared hub data */}

         <PracticalSimEvidence />

         {/* Inside the simulator: environments + methods */}
         <section id="methods" className="py-16 bg-muted/30">
            <div className="container mx-auto px-6 max-w-6xl">
               <h2 className="text-3xl font-bold mb-3 text-center">Inside the Simulator: Environments &amp; Methods</h2>
               <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Choose a workplace, pick a method and technique, and start an inspection. Method and technique availability depends on the environment and the application.
               </p>
               <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-4 max-w-2xl mx-auto mb-12 text-center">
                  {SIM_STATS.map((s) => (
                     <div key={s.label}>
                        <p className="text-4xl font-bold text-primary">{s.value}</p>
                        <p className="text-sm text-muted-foreground">{s.label}</p>
                     </div>
                  ))}
               </div>

               <h3 className="text-xl font-semibold mb-4">Five of the twelve workplaces</h3>
               <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
                  {ENVIRONMENTS.map((e) => (
                     <Card key={e.name} className="h-full">
                        <CardHeader className="pb-2">
                           <CardTitle className="text-base">{e.name}</CardTitle>
                           <p className="text-xs font-medium text-primary">{e.meta}</p>
                        </CardHeader>
                        <CardContent>
                           <p className="text-sm text-muted-foreground">{e.detail}</p>
                        </CardContent>
                     </Card>
                  ))}
               </div>

               <h3 className="text-xl font-semibold mb-4">Inspection methods</h3>
               <div className="grid md:grid-cols-2 gap-6">
                  {METHOD_FAMILIES.map((f) => (
                     <Card key={f.family}>
                        <CardHeader className="pb-2 flex flex-row items-center gap-3 space-y-0">
                           <f.icon className="w-6 h-6 text-primary" />
                           <CardTitle className="text-lg">{f.family}</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <ul className="divide-y">
                              {f.methods.map((m) => (
                                 <li key={m.code} className="py-2 flex gap-3">
                                    <span className="w-14 shrink-0 font-mono text-sm font-semibold text-primary">{m.code}</span>
                                    <span>
                                       <span className="block text-sm font-medium">{m.name}</span>
                                       <span className="block text-xs text-muted-foreground">{m.use}</span>
                                    </span>
                                 </li>
                              ))}
                           </ul>
                        </CardContent>
                     </Card>
                  ))}
               </div>
               <p className="mt-6 text-xs text-center text-muted-foreground">
                  New techniques and plant procedures are added regularly. Ask for the current method-by-environment list in your demo.
               </p>
            </div>
         </section>

         {/* 2026-10-17: method grid, workplace grid and "what an NDT simulator can and cannot do",
             linking the /practical-ndt/{slug} pages (crawler: scripts/practical-ndt-simulators-2026-10.mjs). */}
         <PracticalSimHubSections />

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
                           "Gives Level IIIs a common measure of procedural competence across a crew",
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

         <DeepContent path="/practical-ndt" />
         <PracticalNdtDirectory />

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
