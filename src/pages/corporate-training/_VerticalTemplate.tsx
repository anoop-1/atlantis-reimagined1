import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
   Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import {
   Building2, Users, GraduationCap, Laptop2, Factory, Globe, CheckCircle2,
   ShieldCheck, Award, Clock, MapPin, BookOpen, Briefcase, Wrench,
} from "lucide-react";

/**
 * Shared template for /corporate-training/<industry-vertical> pages.
 * Each vertical (oil-gas, aerospace, nuclear, marine, renewable-energy,
 * petrochemical, power-generation, fabrication, maritime, defense) supplies
 * a VerticalConfig and renders this component.
 *
 * Buyer persona: HR / L&D / Training Manager (B2B in-house training buyer),
 * NOT operations engineer. Tone: procurement-grade, audit-ready,
 * curriculum-buying focused.
 */

export interface MethodEntry {
   method: string;       // e.g. "PAUT — Phased Array UT"
   levels: string;       // e.g. "Level II + III"
   roleFit: string;      // who needs this (e.g. "Welding inspectors, turnaround leads")
   codeRef: string;      // e.g. "ASME V Article 4, ASME VIII Div 1 App 12"
}

export interface SkillGap {
   gap: string;
   impact: string;       // business consequence
}

export interface TrainingTrack {
   role: string;         // job role
   progression: string;  // Level I → II → III roadmap
   hoursTotal: string;
   coreMethods: string;  // e.g. "UT, RT, MT, PT, VT + PAUT"
}

export interface PricingTier {
   headcount: string;    // e.g. "10–24 engineers"
   perHead: string;      // e.g. "$1,250 per head"
   notes: string;        // what's included
}

export interface CityLink {
   slug: string;         // existing /corporate-ndt-training/<slug>
   label: string;        // display name
}

export interface VerticalConfig {
   slug: string;                         // route after /corporate-training/
   industryDisplay: string;              // "Oil & Gas"
   industryShort: string;                // "oil & gas operators"
   heroSubhead: string;                  // 2-sentence intro paragraph
   methods: MethodEntry[];               // 5–7 entries
   skillGaps: SkillGap[];                // 4–5 entries
   tracks: TrainingTrack[];              // 4–5 role-based tracks
   pricing: PricingTier[];               // 4 tiers (10/25/50/100+)
   deliveryNote: string;                 // industry-specific delivery comments
   complianceFootnote: string;           // record-keeping framing
   caseStudy: { headline: string; body: string };
   cityLinks: [CityLink, CityLink];      // 2 city pages relevant to this vertical
   primaryStandards: string[];           // e.g. ["API 510","API 570","API 653"]
   wordCountHint: string;                // SEO body para used to flesh out word count
}

interface Props { config: VerticalConfig; }

export default function VerticalTemplate({ config }: Props) {
   const route = `/corporate-training/${config.slug}`;
   const canonical = `https://atlantisndt.com${route}`;
   const titleN = config.pricing[2]?.headcount.split("–")[0] || "100";
   const seoTitle = `Corporate NDT Training for ${config.industryDisplay} 2026: ${titleN} Engineers, ASNT Aligned`;
   const seoDescription = `In-house NDT training for ${config.industryShort}: ${config.primaryStandards.slice(0, 3).join(", ")}, on-site / LMS / hybrid delivery, group pricing 10–100+ engineers, SNT-TC-1A audit-ready records.`;

   // Course schema — list each track as a course
   const courseSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": `Corporate NDT Training Catalog for ${config.industryDisplay}`,
      "itemListElement": config.tracks.map((t, i) => ({
         "@type": "ListItem",
         "position": i + 1,
         "item": {
            "@type": "Course",
            "name": `${t.role} — ${config.industryDisplay} NDT Training Track`,
            "description": `${t.progression}. Methods: ${t.coreMethods}. Total instructor-led hours: ${t.hoursTotal}.`,
            "provider": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
            "educationalCredentialAwarded": "ASNT SNT-TC-1A aligned Level I / II / III",
            "hasCourseInstance": [
               { "@type": "CourseInstance", "courseMode": "onsite" },
               { "@type": "CourseInstance", "courseMode": "online" },
               { "@type": "CourseInstance", "courseMode": "blended" },
            ],
         },
      })),
   };

   // Service schema for the corporate training engagement itself
   const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `Corporate NDT Training for ${config.industryDisplay}`,
      "serviceType": "Corporate Training",
      "provider": {
         "@type": "Organization",
         "name": "Atlantis NDT",
         "url": "https://atlantisndt.com",
         "telephone": "+1-281-840-8969",
      },
      "areaServed": { "@type": "Place", "name": "Worldwide" },
      "description": seoDescription,
      "url": canonical,
      "audience": {
         "@type": "BusinessAudience",
         "audienceType": `${config.industryDisplay} HR, L&D and Training Managers`,
      },
      "offers": config.pricing.map(p => ({
         "@type": "Offer",
         "name": `${p.headcount} cohort`,
         "description": `${p.perHead}. ${p.notes}`,
         "priceCurrency": "USD",
      })),
   };

   return (
      <div className="min-h-screen bg-background">
         <Navigation />
         <SEOHead
            title={seoTitle}
            description={seoDescription}
            canonical={canonical}
            keywords={`corporate ${config.industryShort} NDT training, in-house NDT training ${config.industryDisplay}, group NDT training ${config.industryDisplay}, ${config.primaryStandards.slice(0, 2).join(" training, ")} training`}
         />
         {/* JSON-LD Course list */}
         <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
         />
         {/* JSON-LD Service */}
         <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
         />
         <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Corporate Training", href: "/corporate-ndt-training" },
            { label: config.industryDisplay },
         ]} />

         {/* HERO */}
         <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white pt-28 pb-16">
            <div className="container mx-auto max-w-6xl px-6">
               <div className="flex items-center gap-2 text-blue-300 mb-4">
                  <Building2 className="w-5 h-5" />
                  <span className="text-sm uppercase tracking-wide">Industry Vertical · Corporate Training</span>
               </div>
               <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Corporate NDT Training for {config.industryDisplay}
               </h1>
               <p className="text-xl text-slate-200 max-w-3xl mb-6">{config.heroSubhead}</p>
               <p className="text-base text-slate-300 max-w-3xl mb-8">
                  Built for {config.industryDisplay} HR, Learning &amp; Development, and Training Managers
                  who need to qualify whole crews against {config.primaryStandards.slice(0, 3).join(", ")}
                  {config.primaryStandards.length > 3 ? ", and other industry codes" : ""} —
                  not single-engineer open enrolment. Cohort sizes from 10 to 100+ engineers.
                  On-site at your facility, on our LMS, or blended.
               </p>
               <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition text-center">
                     Request Custom Quote
                  </Link>
                  <Link to="/corporate-ndt-training" className="inline-flex items-center gap-2 border-2 border-slate-400 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">
                     Compare All Verticals
                  </Link>
               </div>
            </div>
         </section>

         {/* STATS */}
         <section className="py-10 bg-white border-b">
            <div className="container mx-auto max-w-6xl px-6 grid md:grid-cols-4 gap-6 text-center">
               <div><GraduationCap className="w-8 h-8 text-blue-600 mx-auto mb-2" /><div className="text-2xl font-bold">{config.tracks.length} tracks</div><div className="text-sm text-slate-600">role-mapped progressions</div></div>
               <div><Users className="w-8 h-8 text-blue-600 mx-auto mb-2" /><div className="text-2xl font-bold">10 → 100+</div><div className="text-sm text-slate-600">engineer cohorts</div></div>
               <div><Laptop2 className="w-8 h-8 text-blue-600 mx-auto mb-2" /><div className="text-2xl font-bold">3 modes</div><div className="text-sm text-slate-600">on-site · LMS · hybrid</div></div>
               <div><ShieldCheck className="w-8 h-8 text-blue-600 mx-auto mb-2" /><div className="text-2xl font-bold">SNT-TC-1A</div><div className="text-sm text-slate-600">audit-ready records</div></div>
            </div>
         </section>

         {/* SECTION 1 — INDUSTRY METHODS + CODES */}
         <section className="py-16 bg-slate-50">
            <div className="container mx-auto max-w-6xl px-6">
               <h2 className="text-3xl font-bold mb-3">{config.industryDisplay} NDT Methods &amp; Code Coverage</h2>
               <p className="text-slate-700 mb-8 max-w-3xl">
                  Every {config.industryDisplay} corporate cohort is mapped to the codes your inspections
                  actually run against. We do not teach generic SNT-TC-1A theory then leave the
                  industry-specific essential variables to your crew. The methods and code references
                  below define the curriculum baseline for {config.industryDisplay} engagements —
                  modules can be added or removed in the curriculum-builder during quoting.
               </p>
               <div className="grid md:grid-cols-2 gap-6">
                  {config.methods.map((m, i) => (
                     <Card key={i} className="border-slate-200">
                        <CardHeader>
                           <CardTitle className="flex items-start gap-2 text-lg">
                              <Wrench className="w-5 h-5 text-blue-600 mt-1" />
                              {m.method}
                           </CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-slate-700 space-y-2">
                           <div><span className="font-semibold">Levels:</span> {m.levels}</div>
                           <div><span className="font-semibold">Role fit:</span> {m.roleFit}</div>
                           <div><span className="font-semibold">Code reference:</span> {m.codeRef}</div>
                        </CardContent>
                     </Card>
                  ))}
               </div>
            </div>
         </section>

         {/* SECTION 2 — SKILL GAPS */}
         <section className="py-16 bg-white">
            <div className="container mx-auto max-w-6xl px-6">
               <h2 className="text-3xl font-bold mb-3">Common Workforce Skill Gaps in {config.industryDisplay}</h2>
               <p className="text-slate-700 mb-8 max-w-3xl">
                  Across hundreds of {config.industryDisplay} engagements, the same competence gaps
                  surface in HR audits and pre-turnaround readiness reviews. Knowing the gap pattern
                  lets us scope the right cohort instead of selling a generic Level II package.
               </p>
               <div className="space-y-4">
                  {config.skillGaps.map((g, i) => (
                     <div key={i} className="border-l-4 border-orange-500 bg-orange-50/30 px-6 py-4">
                        <div className="font-semibold text-slate-900 mb-1">{g.gap}</div>
                        <div className="text-sm text-slate-700">Business impact: {g.impact}</div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* SECTION 3 — RECOMMENDED TRAINING TRACKS */}
         <section className="py-16 bg-slate-50">
            <div className="container mx-auto max-w-6xl px-6">
               <h2 className="text-3xl font-bold mb-3">Recommended Training Tracks (Level I → III by Role)</h2>
               <p className="text-slate-700 mb-8 max-w-3xl">
                  Each role inside a {config.industryDisplay} inspection function has a different
                  Level I → II → III progression. We do not certify everyone to Level III on every method;
                  we map each engineer to the minimum viable competence for their current role and
                  the next role they are likely to hold within 18 months.
               </p>
               <div className="grid md:grid-cols-2 gap-6">
                  {config.tracks.map((t, i) => (
                     <Card key={i}>
                        <CardHeader>
                           <CardTitle className="flex items-start gap-2 text-lg">
                              <Briefcase className="w-5 h-5 text-blue-600 mt-1" />
                              {t.role}
                           </CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-slate-700 space-y-2">
                           <div><span className="font-semibold">Progression:</span> {t.progression}</div>
                           <div><span className="font-semibold">Core methods:</span> {t.coreMethods}</div>
                           <div><span className="font-semibold">Total hours:</span> {t.hoursTotal}</div>
                        </CardContent>
                     </Card>
                  ))}
               </div>
            </div>
         </section>

         {/* SECTION 4 — GROUP PRICING TIERS */}
         <section className="py-16 bg-white">
            <div className="container mx-auto max-w-6xl px-6">
               <h2 className="text-3xl font-bold mb-3">Group Pricing — 10, 25, 50, 100+ Engineers</h2>
               <p className="text-slate-700 mb-8 max-w-3xl">
                  Per-head price drops as cohort size grows. Below 10 engineers we recommend our
                  open-enrolment programs at <Link to="/training" className="text-blue-600 underline">/training</Link> instead — corporate
                  delivery economics break down below that headcount. All tiers include
                  ASNT SNT-TC-1A aligned written-practice references, instructor-led delivery,
                  exam administration, and an audit-ready competence record per trainee.
               </p>
               <div className="overflow-x-auto">
                  <table className="w-full text-left border border-slate-200 text-sm">
                     <thead className="bg-slate-100">
                        <tr>
                           <th className="px-4 py-3">Cohort Size</th>
                           <th className="px-4 py-3">Per-Head Indicative Price</th>
                           <th className="px-4 py-3">What's Included</th>
                        </tr>
                     </thead>
                     <tbody>
                        {config.pricing.map((p, i) => (
                           <tr key={i} className="border-t">
                              <td className="px-4 py-3 font-semibold">{p.headcount}</td>
                              <td className="px-4 py-3 text-blue-700">{p.perHead}</td>
                              <td className="px-4 py-3 text-slate-700">{p.notes}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
               <p className="text-xs text-slate-500 mt-3">
                  Prices indicative for typical {config.industryDisplay} scope. Final quote depends on
                  method mix, on-site travel, language requirements, and exam scheme (ASNT vs PCN vs ISO 9712).
               </p>
            </div>
         </section>

         {/* SECTION 5 — CUSTOM CURRICULUM BUILDER */}
         <section className="py-16 bg-slate-50">
            <div className="container mx-auto max-w-6xl px-6">
               <h2 className="text-3xl font-bold mb-3">Custom Curriculum Builder</h2>
               <p className="text-slate-700 mb-4 max-w-3xl">
                  No two {config.industryDisplay} corporate clients have the same competence baseline.
                  Our custom curriculum builder is a 60-minute scoping workshop with your inspection
                  authority and HR business partner, after which we issue a written training plan
                  containing:
               </p>
               <ul className="list-disc pl-6 text-slate-700 space-y-2 max-w-3xl mb-4">
                  <li>Method-by-method module list with hour allocation per cohort</li>
                  <li>Trainer profile (Atlantis NDT bench is ASNT Level III on every method we teach)</li>
                  <li>Equipment loan / on-site fixture list (we ship calibration blocks if needed)</li>
                  <li>Exam schedule and proctoring arrangements (per ASNT SNT-TC-1A 2024 edition)</li>
                  <li>Re-test policy for engineers who do not pass on the first attempt</li>
                  <li>Digital competence record format (PDF + JSON export to your LMS)</li>
               </ul>
               <p className="text-slate-700 max-w-3xl">
                  The builder is free up to a 3-page training plan. We charge only when you
                  approve the plan and the cohort is booked.
               </p>
            </div>
         </section>

         {/* SECTION 6 — DELIVERY MODES */}
         <section className="py-16 bg-white">
            <div className="container mx-auto max-w-6xl px-6">
               <h2 className="text-3xl font-bold mb-3">On-Site, LMS, or Hybrid Delivery</h2>
               <p className="text-slate-700 mb-8 max-w-3xl">
                  {config.deliveryNote}
               </p>
               <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                     <CardHeader><CardTitle className="flex items-center gap-2"><Factory className="w-5 h-5 text-blue-600" />On-Site</CardTitle></CardHeader>
                     <CardContent className="text-sm text-slate-700 space-y-2">
                        <p>Trainers fly to your facility. Theory in your training room, practicals on your equipment and your specimens.</p>
                        <p>Best for: practical-heavy methods (PAUT, RT, ECA), high cohort counts (25+), confidentiality-sensitive sites.</p>
                     </CardContent>
                  </Card>
                  <Card>
                     <CardHeader><CardTitle className="flex items-center gap-2"><Laptop2 className="w-5 h-5 text-blue-600" />LMS</CardTitle></CardHeader>
                     <CardContent className="text-sm text-slate-700 space-y-2">
                        <p>Full theory delivery on our SCORM-compatible LMS. Engineers self-pace, instructor office hours twice weekly.</p>
                        <p>Best for: distributed teams, refresher cycles, pre-work before an on-site practical week.</p>
                     </CardContent>
                  </Card>
                  <Card>
                     <CardHeader><CardTitle className="flex items-center gap-2"><Globe className="w-5 h-5 text-blue-600" />Hybrid</CardTitle></CardHeader>
                     <CardContent className="text-sm text-slate-700 space-y-2">
                        <p>Theory on the LMS, practicals on-site. Typically the most cost-effective delivery mode for cohorts over 25 engineers.</p>
                        <p>Best for: most {config.industryDisplay} clients. 20–25% saving versus pure on-site delivery.</p>
                     </CardContent>
                  </Card>
               </div>
            </div>
         </section>

         {/* SECTION 7 — CERTIFICATION & RECORD-KEEPING */}
         <section className="py-16 bg-slate-50">
            <div className="container mx-auto max-w-6xl px-6">
               <h2 className="text-3xl font-bold mb-3">Certification of Completion &amp; Employer Record-Keeping</h2>
               <p className="text-slate-700 mb-4 max-w-3xl">
                  ASNT SNT-TC-1A is an employer-based certification scheme. Your company,
                  not Atlantis NDT, formally certifies the engineer once training, examination,
                  vision tests, and OJT hours are complete. Our role is to provide the
                  audit-ready evidence package every {config.industryDisplay} regulator,
                  customer, and ISO auditor will ask for.
               </p>
               <p className="text-slate-700 mb-4 max-w-3xl">{config.complianceFootnote}</p>
               <ul className="list-disc pl-6 text-slate-700 space-y-2 max-w-3xl">
                  <li><strong>Certificate of completion</strong> per trainee, per method, per level — signed by an Atlantis ASNT Level III</li>
                  <li><strong>Examination records</strong> — written general, written specific, practical with grade sheets retained 5 years per SNT-TC-1A para 9.4</li>
                  <li><strong>Training hours log</strong> mapped to SNT-TC-1A 2024 Recommended Hours Table 6.3</li>
                  <li><strong>Vision acuity records</strong> (Jaeger #2 near-vision + Ishihara colour) at issue and annually</li>
                  <li><strong>OJT log template</strong> for the practical hours your supervisors record after the course</li>
                  <li><strong>Re-certification calendar</strong> (5-year cycle, mid-cycle refresher recommended)</li>
                  <li><strong>JSON / CSV export</strong> for ingestion into Workday, SAP SuccessFactors, Cornerstone, or your in-house LMS</li>
               </ul>
            </div>
         </section>

         {/* SECTION 8 — CASE STUDY */}
         <section className="py-16 bg-white">
            <div className="container mx-auto max-w-6xl px-6">
               <h2 className="text-3xl font-bold mb-3">Anonymised Case Study</h2>
               <Card className="border-blue-200 bg-blue-50/40">
                  <CardHeader>
                     <CardTitle className="flex items-center gap-2 text-lg">
                        <Award className="w-5 h-5 text-blue-600" />
                        {config.caseStudy.headline}
                     </CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-700 leading-relaxed">
                     {config.caseStudy.body}
                  </CardContent>
               </Card>
               <p className="text-xs text-slate-500 mt-3">
                  Client name withheld under MNDA. Reference call available on request after
                  qualifying RFQ — see <Link to="/contact" className="text-blue-600 underline">/contact</Link>.
               </p>
            </div>
         </section>

         {/* SECTION 9 — INTERNAL LINKS */}
         <section className="py-12 bg-slate-50">
            <div className="container mx-auto max-w-6xl px-6">
               <h2 className="text-2xl font-bold mb-6">Related Atlantis NDT Resources</h2>
               <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <Link to="/corporate-ndt-training" className="block bg-white border border-slate-200 rounded-lg px-4 py-3 hover:bg-blue-50 transition">
                     <div className="font-semibold text-blue-700">Corporate NDT Training Hub</div>
                     <div className="text-slate-600">Cross-vertical hub — 60+ city pages, all methods.</div>
                  </Link>
                  <Link to="/training" className="block bg-white border border-slate-200 rounded-lg px-4 py-3 hover:bg-blue-50 transition">
                     <div className="font-semibold text-blue-700">Open-Enrolment Training Catalog</div>
                     <div className="text-slate-600">For individuals or cohorts under 10 — public schedule.</div>
                  </Link>
                  <Link to={`/corporate-ndt-training/${config.cityLinks[0].slug}`} className="block bg-white border border-slate-200 rounded-lg px-4 py-3 hover:bg-blue-50 transition">
                     <div className="font-semibold text-blue-700">Corporate Training — {config.cityLinks[0].label}</div>
                     <div className="text-slate-600">Local delivery option for {config.industryDisplay} cohorts.</div>
                  </Link>
                  <Link to={`/corporate-ndt-training/${config.cityLinks[1].slug}`} className="block bg-white border border-slate-200 rounded-lg px-4 py-3 hover:bg-blue-50 transition">
                     <div className="font-semibold text-blue-700">Corporate Training — {config.cityLinks[1].label}</div>
                     <div className="text-slate-600">Local delivery option for {config.industryDisplay} cohorts.</div>
                  </Link>
                  <Link to="/contact" className="block bg-white border border-slate-200 rounded-lg px-4 py-3 hover:bg-blue-50 transition">
                     <div className="font-semibold text-blue-700">Contact &amp; Custom Quote</div>
                     <div className="text-slate-600">Talk to our corporate training desk — 30-min discovery call.</div>
                  </Link>
                  <Link to="/asnt-certification" className="block bg-white border border-slate-200 rounded-lg px-4 py-3 hover:bg-blue-50 transition">
                     <div className="font-semibold text-blue-700">ASNT Certification Pathway</div>
                     <div className="text-slate-600">SNT-TC-1A vs ACCP vs CP-189 — pick the right scheme.</div>
                  </Link>
               </div>
            </div>
         </section>

         {/* FAQ */}
         <section className="py-16 bg-white">
            <div className="container mx-auto max-w-6xl px-6">
               <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
               <Accordion type="single" collapsible className="max-w-3xl">
                  <AccordionItem value="q1">
                     <AccordionTrigger>What is the minimum cohort size for {config.industryDisplay} corporate training?</AccordionTrigger>
                     <AccordionContent>
                        10 engineers for standard ASNT methods. For specialist methods (PAUT, ECA, TOFD) we accept cohorts from 6.
                        Below those thresholds the per-head economics do not work — we will route you to <Link to="/training" className="text-blue-600 underline">/training</Link> open enrolment.
                     </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="q2">
                     <AccordionTrigger>How are Atlantis NDT certifications recognised by {config.industryDisplay} regulators and customers?</AccordionTrigger>
                     <AccordionContent>
                        We align to ASNT SNT-TC-1A by default and countersign every certificate with an Atlantis ASNT Level III.
                        For PCN / ISO 9712 / CGSB-48.9712 markets we route through our scheme partners. For
                        {config.industryDisplay}-specific schemes ({config.primaryStandards.slice(0, 3).join(", ")}) we map each
                        module to the relevant code clause so your audits trace cleanly.
                     </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="q3">
                     <AccordionTrigger>Can the curriculum be modified after the cohort starts?</AccordionTrigger>
                     <AccordionContent>
                        Minor reorderings yes, scope changes no. Once the written training plan is signed and the cohort
                        starts, scope changes require a change-order — we hold instructor and exam slots against the agreed plan.
                     </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="q4">
                     <AccordionTrigger>How long is the audit-ready competence record retained?</AccordionTrigger>
                     <AccordionContent>
                        Five years on our side per SNT-TC-1A para 9.4, plus the digital export delivered to your LMS at cohort close.
                        Your company is the certification authority and owns the records permanently.
                     </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="q5">
                     <AccordionTrigger>Do you offer LMS-only delivery for {config.industryDisplay}?</AccordionTrigger>
                     <AccordionContent>
                        Yes for theory modules. Practical methods (PAUT, MT, PT, RT) require an on-site or
                        external practical week — examinations cannot be remotely proctored under SNT-TC-1A
                        for the practical exam component.
                     </AccordionContent>
                  </AccordionItem>
               </Accordion>
            </div>
         </section>

         {/* SEO BODY — flesh out word count with industry-specific narrative */}
         <section className="py-12 bg-slate-50">
            <div className="container mx-auto max-w-4xl px-6 prose prose-slate">
               <h2 className="text-2xl font-bold mb-4">Why {config.industryDisplay} Companies Choose Atlantis NDT for Corporate Training</h2>
               <p className="text-slate-700 leading-relaxed">{config.wordCountHint}</p>
            </div>
         </section>

         {/* CTA */}
         <section className="py-16 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
            <div className="container mx-auto max-w-4xl px-6 text-center">
               <h2 className="text-3xl font-bold mb-4">Ready to scope your {config.industryDisplay} cohort?</h2>
               <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                  Send headcount, methods of interest, and target city. We respond inside 2 business days
                  with a written training plan and indicative quote.
               </p>
               <Link to="/contact" className="inline-block bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                  Request Custom Quote
               </Link>
            </div>
         </section>

         <ContactDetails />
      </div>
   );
}
