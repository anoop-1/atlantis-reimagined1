import SectorsServed from "@/components/SectorsServed";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, MessageSquare } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Link } from "react-router-dom";
import ContactDetails from "@/components/ContactDetails";
import { SEOHead } from "@/components/SEOHead";
import EnquiryCaptureForm from "@/components/EnquiryCaptureForm";
import Level3Paths from "@/components/sprint/Level3Paths";
import AnswerBlock from "@/components/citation/AnswerBlock";
import GeoHubDirectory from "@/components/GeoHubDirectory";
import MONEY_META from "@/data/money-page-meta.json"; // one source with scripts/ctr-wave13-overrides.mjs
import MP from "@/data/money-pages-2026-10.json";
import STORIES from "@/data/case-stories-2026-10.json";
import { SITE, ORG_ID, founderPageNodes, faqPageNode } from "@/lib/founder-person";

// 2026-10-12 (SEO audit actions 3 and 9): /consulting opens with what an engagement
// delivers, then the four paths, the anonymised sector list (owner 2026-10-12: no client names or logos; was the client-logo carousel
// it), a worked SNT-TC-1A written-practice engagement, the trailer, the two completed
// engagements, fit and delivery, the enquiry, FAQ and regions. Copy:
// src/data/money-pages-2026-10.json — the crawler HTML is built from the same file by
// scripts/money-pages-2026-10.mjs, in the same order. No consulting prices.

const C = MP.consulting;
const G = C.engagement;
const META = MONEY_META["/consulting"];

function Bullets({ items }: { items: string[] }) {
   return (
      <ul className="space-y-2">
         {items.map((x) => (
            <li key={x} className="flex items-start gap-3">
               <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
               <span className="text-muted-foreground">{x}</span>
            </li>
         ))}
      </ul>
   );
}


export default function ConsultingServices() {
   const [h1Lead, h1Rest] = C.h1.split(" — ");
   const stories = C.stories.slugs
      .map((slug) => STORIES.stories.find((s) => s.slug === slug))
      .filter((s): s is (typeof STORIES.stories)[number] => Boolean(s));
   const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
         {
            "@type": "ProfessionalService",
            "@id": `${SITE}/consulting#service`,
            name: "Atlantis NDT — ASNT Level III consulting",
            description: C.intro,
            url: `${SITE}/consulting`,
            provider: { "@id": ORG_ID },
            serviceType: ["ASNT Level III NDT consulting", "NDT written practice development", "NDT procedure development and approval", "NDT audit readiness"],
            areaServed: { "@type": "Place", name: "Worldwide" },
         },
         faqPageNode("/consulting", C.faq),
         ...founderPageNodes("/consulting", META.title, `${SITE}/consulting#service`),
      ],
   };

   return (
      <div className="min-h-screen pt-20 bg-gray-50">
         <Navigation />
         <SEOHead
            title={META.title}
            description={META.description}
            keywords="NDT consulting services, ASNT Level III consultant, Level III NDT consulting, outsourced Level III, SNT-TC-1A written practice, NDT procedure development, NDT audit support, NDT compliance consulting, remote NDT consulting"
            structuredData={structuredData}
            canonical="https://atlantisndt.com/consulting"
         />

         {/* Hero — buyer H1 (§46, same text as SPRINT_H1 in the crawler HTML) */}
         <motion.section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <div className="container mx-auto px-6 text-center">
               <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  {h1Lead} <span className="gradient-text">— {h1Rest}</span>
               </h1>
               <div className="max-w-4xl mx-auto text-left"><AnswerBlock answer={C.answer} source={C.answerSource} /></div>
               <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-6">{C.kicker}</p>
               <div className="max-w-4xl mx-auto">
                  <p className="text-lg text-muted-foreground leading-relaxed">{C.intro}</p>
                  <p className="mt-3 text-sm text-muted-foreground">
                     {C.ledBy.text}{" "}
                     <Link to={C.ledBy.href} className="text-primary underline underline-offset-2">{C.ledBy.label}</Link>
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                     <Link to={C.ctaPrimary.href} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90">
                        {C.ctaPrimary.label} <ArrowRight className="w-4 h-4" />
                     </Link>
                     <a href={C.ctaSecondary.href} className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/10">{C.ctaSecondary.label}</a>
                     <Link to={C.ctaTertiary.href} className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/10">{C.ctaTertiary.label}</Link>
                  </div>
               </div>
            </div>
         </motion.section>
         {/* 2026-10-19: "NDT Level III consulting services" cards (ConsultingServicesBlock), same place as in the crawler HTML */}
         <div data-slot-anchor="consultingsvc" />

         {/* What every engagement delivers */}
         <section id={C.delivers.id} className="py-14 bg-white scroll-mt-24">
            <div className="container mx-auto px-6 max-w-4xl">
               <h2 className="text-3xl md:text-4xl font-bold mb-6">{C.delivers.heading}</h2>
               <Bullets items={C.delivers.items} />
            </div>
         </section>

         {/* The four paths, each with what you get, what we need, and a short form */}
         <Level3Paths />

         {/* 2026-10-18: consulting by programme and code (same data as the crawler: MP.consultingByCode) */}
         <section id={MP.consultingByCode.id} className="py-14 bg-white scroll-mt-24">
            <div className="container mx-auto px-6 max-w-4xl">
               <h2 className="text-3xl md:text-4xl font-bold mb-6">{MP.consultingByCode.heading}</h2>
               {MP.consultingByCode.paragraphs.map((para) => (
                  <p key={para.slice(0, 40)} className="text-lg text-muted-foreground mb-4">
                     {para.split(/(\[[^\]]+\]\(\/[^)\s]*\))/).map((part, i) => {
                        const m = part.match(/^\[([^\]]+)\]\((\/[^)\s]*)\)$/);
                        return m ? <Link key={i} to={m[2]} className="text-primary underline">{m[1]}</Link> : part;
                     })}
                  </p>
               ))}
               <p className="text-sm text-muted-foreground"><strong>Sources:</strong> {MP.consultingByCode.source}</p>
            </div>
         </section>

         <SectorsServed id="client-logos" />

         {/* Worked example: an SNT-TC-1A written practice (method, not a client) */}
         <section id={G.id} className="py-16 bg-white scroll-mt-24">
            <div className="container mx-auto px-6 max-w-5xl">
               <h2 className="text-3xl md:text-4xl font-bold mb-3">{G.heading}</h2>
               <p className="text-lg text-muted-foreground mb-8">{G.intro}</p>
               <div className="rounded-xl border bg-card p-6 mb-6">
                  <h3 className="text-xl font-bold mb-2">{G.scope.h}</h3>
                  <p className="text-muted-foreground">{G.scope.p}</p>
               </div>
               <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="rounded-xl border bg-card p-6">
                     <h3 className="text-xl font-bold mb-3">{G.provides.h}</h3>
                     <Bullets items={G.provides.items} />
                  </div>
                  <div className="rounded-xl border bg-card p-6">
                     <h3 className="text-xl font-bold mb-3">{G.deliverables.h}</h3>
                     <Bullets items={G.deliverables.items} />
                  </div>
               </div>
               <div className="rounded-xl border bg-card p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4">{G.timeline.h}</h3>
                  <div className="overflow-x-auto">
                     <table className="w-full text-sm text-left">
                        <caption className="caption-top pb-3 text-muted-foreground">{G.timeline.caption}</caption>
                        <thead className="bg-muted/50">
                           <tr><th className="p-3 font-semibold w-16">Step</th><th className="p-3 font-semibold">Stage</th><th className="p-3 font-semibold">What happens</th></tr>
                        </thead>
                        <tbody>
                           {G.timeline.steps.map((s, i) => (
                              <tr key={s.h} className="border-t">
                                 <td className="p-3 font-bold text-primary">{i + 1}</td>
                                 <td className="p-3 font-semibold text-foreground">{s.h}</td>
                                 <td className="p-3 text-muted-foreground">{s.p}</td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">{G.timeline.note}</p>
               </div>
               <div className="rounded-xl border bg-card p-6 mb-6">
                  <h3 className="text-xl font-bold mb-2">{G.stays.h}</h3>
                  <p className="text-muted-foreground">{G.stays.p}</p>
               </div>
               <Link to={G.cta.href} className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90">
                  {G.cta.label} <ArrowRight className="w-4 h-4" />
               </Link>
            </div>
         </section>

         {/* Trailer (§52): the global video block attaches here. */}
         <div data-slot-anchor="video" />

         {/* The two completed engagements (case-stories-2026-10.json) */}
         <section id={C.stories.id} className="py-14 bg-secondary/30">
            <div className="container mx-auto px-6 max-w-5xl">
               <h2 className="text-3xl font-bold mb-3">{C.stories.heading}</h2>
               <p className="text-muted-foreground mb-8">{C.stories.intro}</p>
               <div className="grid md:grid-cols-2 gap-6">
                  {stories.map((s) => (
                     <Link key={s.slug} to={`/case-studies/${s.slug}`} className="group block rounded-xl border bg-card p-6 shadow-sm hover:border-primary">
                        <p className="text-xs uppercase tracking-wide text-primary font-semibold mb-2">{s.sector}</p>
                        <h3 className="text-lg font-bold mb-2 group-hover:text-primary">{s.h1.replace(/^Case study:\s*/i, "").replace(/^./, (c) => c.toUpperCase())}</h3>
                        <p className="text-sm text-muted-foreground">{s.card}</p>
                     </Link>
                  ))}
               </div>
            </div>
         </section>

         {/* When it fits, typical clients, delivery */}
         <section id={C.fit.id} className="py-16">
            <div className="container mx-auto px-6 max-w-6xl grid lg:grid-cols-3 gap-10">
               <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{C.fit.heading}</h2>
                  <p className="text-muted-foreground mb-4">{C.fit.intro}</p>
                  <Bullets items={C.fit.items} />
               </div>
               <div>
                  <h3 className="text-xl font-bold mb-4">{C.fit.clientsHeading}</h3>
                  <Bullets items={C.fit.clients} />
               </div>
               <div>
                  <h3 className="text-xl font-bold mb-4">{C.fit.deliveryHeading}</h3>
                  <Bullets items={C.fit.delivery} />
               </div>
            </div>
         </section>

         {/* Enquiry */}
         <section id={C.cta.id} className="py-16 text-center bg-gradient-to-r from-primary/10 to-accent/10">
            <div className="max-w-3xl mx-auto px-6">
               <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="w-8 h-8 text-primary-foreground" />
               </div>
               <h2 className="text-3xl md:text-4xl font-bold mb-4">{C.cta.heading}</h2>
               <p className="text-lg text-muted-foreground mb-8">{C.cta.p}</p>
               <Link to={C.cta.primary.href} className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90">
                  {C.cta.primary.label} <ArrowRight className="w-4 h-4" />
               </Link>
            </div>
         </section>
         <section className="py-12 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
               <EnquiryCaptureForm variant="consulting" />
            </div>
         </section>

         {/* FAQ — the FAQPage JSON-LD above is built from exactly these questions */}
         <section id="faq" className="py-16 bg-white scroll-mt-24">
            <div className="container mx-auto px-6 max-w-4xl">
               <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Frequently asked questions</h2>
               <div className="space-y-4">
                  {C.faq.map((f) => (
                     <div key={f.q} className="bg-card rounded-lg p-6 shadow-sm border">
                        <h3 className="font-semibold text-lg text-foreground mb-2">{f.q}</h3>
                        <p className="text-muted-foreground">{f.a}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Regions + state/province directory */}
         <section id={C.regions.id} className="py-12">
            <div className="container mx-auto px-6 max-w-5xl">
               <h2 className="text-2xl md:text-3xl font-bold mb-3">{C.regions.heading}</h2>
               <p className="text-muted-foreground mb-4">{C.regions.p}</p>
               <ul className="grid sm:grid-cols-2 gap-2">
                  {C.regions.links.map((l) => (
                     <li key={l.href}><Link to={l.href} className="text-primary hover:underline">{l.label}</Link></li>
                  ))}
               </ul>
            </div>
         </section>
         <GeoHubDirectory family="consulting" />

         <ContactDetails />
      </div>
   );
}
