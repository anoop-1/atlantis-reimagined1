import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import { Navigation } from "@/components/Navigation";
import ContactDetails from "@/components/ContactDetails";
import wave15Meta from "@/data/ctr-wave15-software-meta.json";
import ndtConnect from "@/data/ndt-connect-2026-10.json";

/**
 * /ndt-connect — 2026-10-17. NDT Connect is a marketplace (ndt-connect.com), not inspection
 * management software. One source with the crawler HTML: title/description from the CTR wave 15
 * file, H1, intro and body from src/data/ndt-connect-2026-10.json (also read by
 * scripts/backlog-depth-2026-08-06.mjs). The earlier page described it as "cloud inspection
 * management software" with an unsupported "reduce report time 70%" claim, listed NDT services as
 * Offers, and set a cross-domain canonical that disagreed with the crawler's self-canonical.
 */
export default function NDTConnect() {
   return (
      <div className="min-h-screen pt-20">
         <Navigation />
         <SEOHead
            title={wave15Meta["/ndt-connect"].title}
            description={wave15Meta["/ndt-connect"].description}
            keywords="NDT Connect, NDT marketplace, find NDT service providers, NDT inspection services marketplace"
            canonical="https://atlantisndt.com/ndt-connect"
         />

         <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
            <div className="container mx-auto px-6 max-w-4xl">
               <h1 className="text-4xl md:text-5xl font-bold mb-6">{ndtConnect.h1}</h1>
               <p className="text-xl text-muted-foreground leading-relaxed">{ndtConnect.intro}</p>
            </div>
         </section>

         <main className="py-12">
            <div
               className="container mx-auto px-6 max-w-4xl prose prose-slate max-w-none [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-3 [&_p]:mb-4 [&_a]:text-primary [&_a]:underline"
               dangerouslySetInnerHTML={{ __html: ndtConnect.html }}
            />
            <div className="container mx-auto px-6 max-w-4xl mt-8 flex flex-wrap gap-4">
               <a href="https://ndt-connect.com" rel="noopener" className="inline-block rounded-md bg-primary px-5 py-2.5 text-primary-foreground font-semibold">
                  Visit NDT Connect
               </a>
               <Link to="/inspection-management-software" className="inline-block rounded-md border px-5 py-2.5 font-semibold">
                  Looking for inspection management software?
               </Link>
            </div>
         </main>

         <ContactDetails />
      </div>
   );
}
