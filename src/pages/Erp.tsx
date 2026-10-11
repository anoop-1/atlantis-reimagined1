import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { Navigation } from "@/components/Navigation";
import { Link } from "react-router-dom";
import ContactDetails from "@/components/ContactDetails";
import ErpShortForm from "@/components/erp/ErpShortForm";
import ErpPlansPricing from "@/components/ErpPlansPricing";
import { ErpModuleConfigurator, ErpSampleWorkflow } from "@/components/erp/ErpDecision";
import MP from "@/data/money-pages-2026-10.json";
import MONEY_META from "@/data/money-page-meta.json";
import STORIES from "@/data/case-stories-2026-10.json";
import { SITE, ORG_ID, founderPageNodes, faqPageNode } from "@/lib/founder-person";

// 2026-10-12 (SEO audit actions 3 and 9): /erp rebuilt for buyers. It was ~7,000 words
// in 45 sections, including a "290+ ERP City Pages" link dump and a "Customer Outcomes"
// heading with one line under it. Order now: what you get, how a job runs, real
// screens, the trailer, one real case story, the USA/Canada plans, the demo / quote
// call to action, then the enquiry form, configurator and FAQ.
// Copy: src/data/money-pages-2026-10.json — the crawler HTML is built from the same
// file by scripts/money-pages-2026-10.mjs, in the same order. No numerals in ERP copy;
// prices only through ErpPlansPricing (approved-erp-pricing.json, USA & Canada).

const E = MP.erp;
const META = MONEY_META["/erp"];

function Cta({ l, primary = false }: { l: { label: string; href: string }; primary?: boolean }) {
   const cls = primary
      ? "inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg shadow-lg hover:opacity-90 transition"
      : "inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition";
   return l.href.startsWith("#") ? (
      <a href={l.href} className={cls}>{l.label}</a>
   ) : (
      <Link to={l.href} className={cls}>
         {l.label} {primary && <ArrowRight className="w-4 h-4" />}
      </Link>
   );
}

function InlineLink({ l }: { l: { label: string; href: string } }) {
   return l.href.startsWith("#") ? (
      <a href={l.href} className="text-primary font-semibold hover:underline">{l.label}</a>
   ) : (
      <Link to={l.href} className="text-primary font-semibold hover:underline">{l.label}</Link>
   );
}

export default function Erp() {
   const [h1Lead, h1Rest] = E.h1.split(" — ");
   const story = STORIES.stories.find((s) => s.slug === E.caseStory.slug)!;
   const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
         {
            "@type": "SoftwareApplication",
            "@id": `${SITE}/erp#software`,
            name: "Atlantis NDT ERP",
            description: E.intro,
            applicationCategory: "BusinessApplication",
            applicationSubCategory: "Enterprise Resource Planning",
            operatingSystem: "Web",
            url: `${SITE}/erp`,
            featureList: E.deliver.items.map((i) => i.h),
            provider: { "@id": ORG_ID },
            publisher: { "@id": ORG_ID },
         },
         faqPageNode("/erp", E.faq),
         ...founderPageNodes("/erp", META.title, `${SITE}/erp#software`),
      ],
   };

   return (
      <div className="min-h-screen pt-20">
         <Navigation />
         <SEOHead
            title={META.title}
            description={META.description}
            keywords="ndt erp, ndt erp software, erp for inspection companies, ndt inspection software, inspection management software, ndt technician certification tracking software, calibration management software for ndt, inspection company scheduling and crew dispatch software, ndt reporting software, Atlantis ERP for NDT"
            structuredData={structuredData}
            canonical="https://atlantisndt.com/erp"
         />

         {/* Hero — buyer H1 (§46, SPRINT_H1 in scripts/sprint-2026-10.mjs) */}
         <motion.section
            className="py-20 bg-gradient-to-r from-primary/10 to-accent/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
         >
            <div className="container mx-auto px-6">
               <div className="max-w-4xl mx-auto text-center">
                  <h1 id="overview" className="text-4xl md:text-6xl font-bold mb-6">
                     {h1Lead} <span className="gradient-text">— {h1Rest}</span>
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-8">{E.intro}</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-3">
                     <Cta l={E.ctaPrimary} primary />
                     <Cta l={E.ctaSecondary} />
                  </div>
                  <p className="text-sm text-muted-foreground mt-5">{E.ctaNote}</p>
               </div>
            </div>
         </motion.section>

         {/* What you get: modules, reporting, certification tracking, deployment, support */}
         <section id={E.deliver.id} className="py-16 scroll-mt-24">
            <div className="container mx-auto px-6 max-w-5xl">
               <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">{E.deliver.heading}</h2>
               <p className="text-lg text-muted-foreground mb-10 text-center max-w-3xl mx-auto">{E.deliver.intro}</p>
               <div className="grid md:grid-cols-2 gap-6">
                  {E.deliver.items.map((it) => (
                     <div key={it.key} className="rounded-xl border bg-card p-6 shadow-sm">
                        <h3 className="text-xl font-bold mb-3 flex gap-2">
                           <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" />
                           {it.h}
                        </h3>
                        <p className="text-muted-foreground mb-4">{it.p}</p>
                        <p className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                           {it.links.map((l) => <InlineLink key={l.href} l={l} />)}
                        </p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         <ErpSampleWorkflow />

         {/* Real screens (§53) and the trailer (§52): the global blocks attach here. */}
         <div data-slot-anchor="shots" />
         <div data-slot-anchor="video" />

         {/* One real case story (case-stories-2026-10.json) */}
         <section id={E.caseStory.id} className="py-12">
            <div className="container mx-auto px-6 max-w-4xl">
               <div className="rounded-2xl border bg-card p-8 shadow-sm">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{E.caseStory.heading}</h2>
                  <p className="text-muted-foreground mb-3">
                     <strong className="text-foreground">{story.sector}:</strong> {story.card}
                  </p>
                  <p className="text-muted-foreground mb-5">{E.caseStory.why}</p>
                  <Link to={`/case-studies/${story.slug}`} className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                     {E.caseStory.linkLabel}: {story.h1.replace(/^Case study:\s*/i, "").replace(/^./, (c) => c.toUpperCase())}
                     <ArrowRight className="w-4 h-4" />
                  </Link>
               </div>
            </div>
         </section>

         {/* Plans & pricing — USA & Canada only (owner, 2026-10-07; data in approved-erp-pricing.json) */}
         <ErpPlansPricing />

         {/* Demo / quote call to action */}
         <section id={E.cta.id} className="py-14">
            <div className="container mx-auto px-6">
               <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-primary to-accent p-8 md:p-10 text-center text-white shadow-xl">
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">{E.cta.heading}</h2>
                  <p className="text-base md:text-lg opacity-90 mb-6 max-w-2xl mx-auto">{E.cta.p}</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                     <Link
                        to={E.cta.primary.href}
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg shadow hover:bg-white/90 transition"
                     >
                        {E.cta.primary.label} <ArrowRight className="w-4 h-4" />
                     </Link>
                     <Link
                        to={E.cta.secondary.href}
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/80 text-white font-semibold rounded-lg hover:bg-white/10 transition"
                     >
                        {E.cta.secondary.label}
                     </Link>
                  </div>
                  <p className="text-sm opacity-80 mt-4">{E.cta.note}</p>
               </div>
            </div>
         </section>

         <ErpShortForm id="erp-enquiry" />
         <ErpModuleConfigurator />

         {/* FAQ — the FAQPage JSON-LD above is built from exactly these questions */}
         <section id="faq" className="py-16 scroll-mt-24">
            <div className="container mx-auto px-6 max-w-4xl">
               <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Frequently asked questions</h2>
               <div className="space-y-4">
                  {E.faq.map((f) => (
                     <div key={f.q} className="bg-card rounded-lg p-6 shadow-sm border">
                        <h3 className="font-semibold text-lg text-foreground mb-2">{f.q}</h3>
                        <p className="text-muted-foreground">{f.a}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         <section id="erp-go-deeper" className="pb-12">
            <div className="container mx-auto px-6 max-w-4xl">
               <h2 className="text-2xl font-bold mb-4">{E.goDeeper.heading}</h2>
               <ul className="grid sm:grid-cols-2 gap-2">
                  {E.goDeeper.links.map((l) => (
                     <li key={l.href}>
                        <Link to={l.href} className="text-primary hover:underline">{l.label}</Link>
                     </li>
                  ))}
               </ul>
            </div>
         </section>

         <ContactDetails />
      </div>
   );
}
