import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, MessageSquare } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Link } from "react-router-dom";
import ContactDetails from "@/components/ContactDetails";
import { SEOHead } from "@/components/SEOHead";
import EnquiryCaptureForm from "@/components/EnquiryCaptureForm";
import Level3Paths from "@/components/sprint/Level3Paths";
import GeoHubDirectory from "@/components/GeoHubDirectory";
import MONEY_META from "@/data/money-page-meta.json"; // one source with scripts/ctr-wave13-overrides.mjs
import MP from "@/data/money-pages-2026-10.json";
import STORIES from "@/data/case-stories-2026-10.json";
import { SITE, ORG_ID, founderPageNodes, faqPageNode } from "@/lib/founder-person";

// 2026-10-12 (SEO audit actions 3 and 9): /consulting opens with what an engagement
// delivers, then the four paths, the owner's client-logo carousel (kept as he curated
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

function ClientLogos() {
   // Owner-curated carousel (a657a438, 2026-10-02). Do not remove in a claims sweep
   // (CLAUDE.md §54). The logo list lives in money-pages-2026-10.json so the crawler
   // HTML shows the same images with the same alt text.
   const logos = C.logos.items;
   return (
      <section id="client-logos" className="py-12 bg-slate-50 border-t border-b overflow-hidden">
         <div className="container mx-auto px-6">
            <motion.div className="text-center mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
               <h2 className="text-xl md:text-2xl font-bold mb-2">{C.logos.heading}</h2>
               <p className="text-sm text-muted-foreground">{C.logos.sub}</p>
            </motion.div>
            <div className="relative">
               <div className="flex items-center gap-12" style={{ animation: "scroll-consulting 16s linear infinite" }}>
                  {[...logos, ...logos].map((client, i) => (
                     <div
                        key={`${client.name}-${i}`}
                        className="flex-shrink-0 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                        title={client.name}
                        aria-hidden={i >= logos.length ? true : undefined}
                     >
                        <img
                           src={client.logo}
                           alt={i >= logos.length ? "" : `${client.name} logo`}
                           className="h-10 md:h-12 lg:h-14 w-auto object-contain min-w-[80px] max-w-[140px]"
                           loading="lazy"
                        />
                     </div>
                  ))}
               </div>
            </div>
            <style>{`
               @keyframes scroll-consulting {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
               }
            `}</style>
         </div>
      </section>
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

         {/* What every engagement delivers */}
         <section id={C.delivers.id} className="py-14 bg-white scroll-mt-24">
            <div className="container mx-auto px-6 max-w-4xl">
               <h2 className="text-3xl md:text-4xl font-bold mb-6">{C.delivers.heading}</h2>
               <Bullets items={C.delivers.items} />
            </div>
         </section>

         {/* The four paths, each with what you get, what we need, and a short form */}
         <Level3Paths />

         <ClientLogos />

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
                  <ol className="space-y-3">
                     {G.timeline.steps.map((s, i) => (
                        <li key={s.h} className="flex gap-3">
                           <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{i + 1}</span>
                           <span className="text-muted-foreground"><strong className="text-foreground">{s.h}.</strong> {s.p}</span>
                        </li>
                     ))}
                  </ol>
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
