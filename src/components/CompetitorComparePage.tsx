import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import CompetitorDeepDive from "@/components/CompetitorDeepDive";
import EnquiryCaptureForm from "@/components/EnquiryCaptureForm";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { dtCompetitorKnowledge } from "@/data/dt-competitor-knowledge";

const SITE = "https://atlantisndt.com";

/**
 * Page shell for the Phase 2 (2026-07-27) competitor-comparison expansion.
 *
 * Competitor comparisons are the highest-performing Digital Twin asset class on
 * the site — /compare/atlantis-dt-vs-ge-predix pulled 663 impressions/90d at
 * position 11.4 — because the searcher already has a vendor shortlist and is at
 * the decision stage. This shell renders the shared CompetitorDeepDive body from
 * dt-competitor-knowledge.ts so new vendors need data, not a bespoke page.
 */
export default function CompetitorComparePage({ slug }: { slug: string }) {
  const k = dtCompetitorKnowledge[slug];
  if (!k) return null;

  const canonical = `${SITE}/compare/atlantis-dt-vs-${slug}`;

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title={`Atlantis Digital Twin vs ${k.competitorName} 2026 — Honest Feature Comparison`}
        description={`${k.competitorName} compared with the Atlantis NDT digital twin for asset integrity teams: feature matrix, NDT data gaps, migration path, and where ${k.competitorName} is genuinely the better choice.`}
        keywords={`${k.competitorName} alternative, ${k.competitorName} vs atlantis, asset integrity management software comparison, digital twin vendor comparison, rbi software comparison`}
        canonical={canonical}
        faq={k.faqs.map(([question, answer]) => ({ question, answer }))}
      />
      <Breadcrumbs />

      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white pt-24 pb-14">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="text-blue-300 text-sm font-medium uppercase tracking-wide mb-4">
            Vendor comparison · Updated 2026
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
            Atlantis Digital Twin vs {k.competitorName}
          </h1>
          <p className="text-lg text-blue-100 max-w-3xl leading-relaxed">
            A comparison written for integrity and inspection teams with a shortlist — including a
            straight answer on where {k.competitorName} is the better choice, and how the two
            coexist when replacement is not the right call.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-400 font-semibold transition"
            >
              Book a technical demo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <main>
        <CompetitorDeepDive slug={slug} />

        <section className="py-12 bg-slate-50">
          <div className="container mx-auto max-w-5xl px-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Compare against other platforms</h2>
            <div className="flex flex-wrap gap-3">
              {Object.entries(dtCompetitorKnowledge)
                .filter(([s]) => s !== slug)
                .slice(0, 12)
                .map(([s, v]) => (
                  <Link
                    key={s}
                    to={`/compare/atlantis-dt-vs-${s}`}
                    className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-blue-400 hover:text-blue-700 transition text-sm"
                  >
                    vs {v.competitorName.split("(")[0].trim()}
                  </Link>
                ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/asset-integrity-management-software" className="text-blue-700 underline text-sm">
                Asset integrity management software
              </Link>
              <Link to="/digital-twin-vendor-comparison" className="text-blue-700 underline text-sm">
                Full vendor comparison
              </Link>
              <Link to="/digital-twin-roi-calculator" className="text-blue-700 underline text-sm">
                Digital twin ROI calculator
              </Link>
              <Link to="/digital-twins" className="text-blue-700 underline text-sm">
                Atlantis Digital Twin platform
              </Link>
            </div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container mx-auto max-w-3xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Get the comparison run against your own asset base
            </h2>
            <p className="text-slate-600 mb-6">
              Thirty minutes with an ASNT NDT Level III, using your asset classes, your damage
              mechanisms and your existing integration stack. Affordable, accessible, fully
              customizable — tell us the scope and we will send a tailored quote.
            </p>
            <EnquiryCaptureForm variant="dt" />
          </div>
        </section>
      </main>

      <ContactDetails />
    </div>
  );
}
