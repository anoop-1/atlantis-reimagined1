/**
 * PracticalNdtLocationPage
 * ────────────────────────────────────────────
 * Shared template rendering a 2,000+ word /practical-ndt-{slug} page.
 *
 * Driven entirely by a PracticalNdtCityProfile from
 * src/data/practical-ndt-cities.ts. Each city page is a thin wrapper:
 *
 *   import { PracticalNdtLocationPage } from "@/components/PracticalNdtLocationPage";
 *   import { getPracticalNdtCityProfile } from "@/data/practical-ndt-cities";
 *
 *   export default function PracticalNdtHouston() {
 *     const profile = getPracticalNdtCityProfile("houston");
 *     if (!profile) return null;
 *     return <PracticalNdtLocationPage profile={profile} />;
 *   }
 */

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Gamepad2 } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import EnquiryCaptureForm from "@/components/EnquiryCaptureForm";
import type { PracticalNdtCityProfile } from "@/data/practical-ndt-cities";

// contentHtml ships with its own <header><nav>...</nav></header> wrapper and
// leading <h1> (shared source of truth with the prerender static route) —
// Navigation and the H1 are already rendered by this component's own hero,
// so strip both and keep only the remaining <main> body before injecting.
function extractMain(html: string): string {
  const match = html.match(/<main>([\s\S]*)<\/main>/);
  const inner = match ? match[1] : html;
  return inner.replace(/^\s*<h1>[\s\S]*?<\/h1>/, "");
}

interface Props {
  profile: PracticalNdtCityProfile;
}

export function PracticalNdtLocationPage({ profile }: Props) {
  const canonical = `https://atlantisndt.com/practical-ndt-${profile.slug}`;

  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title={profile.title}
        description={profile.metaDescription}
        canonical={canonical}
        keywords={`practical NDT ${profile.city}, NDT training simulator ${profile.city}, NDT skills practice ${profile.city}, virtual NDT training ${profile.city}`}
      />
      <Breadcrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "Practical NDT", path: "/practical-ndt" },
          { label: profile.city, path: `/practical-ndt-${profile.slug}` },
        ]}
      />

      <motion.section
        className="py-16 bg-gradient-to-r from-primary/10 to-accent/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            <Gamepad2 className="w-4 h-4" /> Immersive 3D Skills Practice
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Practical NDT in {profile.city}
          </h1>
          <p className="text-lg text-muted-foreground mb-6">{profile.region}</p>
          <a
            href="#practical-ndt-enquiry"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg shadow-lg hover:opacity-90 transition"
          >
            Request a Demo <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </motion.section>

      <article
        className="container mx-auto px-6 py-12 max-w-4xl prose prose-lg prose-headings:font-bold prose-a:text-primary"
        dangerouslySetInnerHTML={{ __html: extractMain(profile.contentHtml) }}
      />

      <div className="container mx-auto px-6 pb-8 max-w-4xl text-center">
        <Link to="/practical-ndt" className="text-primary hover:underline">
          ← Back to Practical NDT overview
        </Link>
      </div>

      <div id="practical-ndt-enquiry">
        <EnquiryCaptureForm variant="practical-ndt" />
      </div>

      <ContactDetails />
    </div>
  );
}
