/**
 * SalaryLevelPage — shared shell for the level/role-specific NDT salary pages.
 *
 * WHY THESE PAGES EXIST (GSC USA, 90d to 2026-08-06):
 * The salary cluster is the largest single US opportunity on the site —
 * 2,304 impressions across 177 distinct queries, returning FIVE clicks
 * (0.22% CTR) at average position ~8-9. 1,928 of those impressions land on
 * ONE page, /blog/ndt-salary-guide-2026-global, which is a global overview
 * being asked a specific question ("ndt level 3 salary", 207 impr, pos 9.4).
 *
 * A page ranking at position 9 for a question it only partly answers loses
 * twice: it cannot win the featured snippet, and the AI overview answers the
 * user instead. The fix is a page per query head that answers that exact
 * question in the first screen, in the questioner's own words — this site's
 * established snippet pattern (§25.4) — and then offers something an overview
 * cannot: the route from where the reader is now to the certification that
 * changes the number.
 *
 * CLAUDE.md §18: salary data is the explicit SALARY_EXEMPT carve-out (§29.1).
 * Market compensation figures are permitted and are the whole point of these
 * pages. What must NEVER appear is an Atlantis training price — every CTA here
 * routes to the enquiry form, never to a figure.
 */
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import QuickAnswerBox from "@/components/QuickAnswerBox";
import { RankSalaryNote } from "@/components/RankWave14Block"; // 2026-10-17 §58: sourced data note, author, date (same HTML as the crawler)
import EnquiryCaptureForm from "@/components/EnquiryCaptureForm";
import { Link } from "react-router-dom";
import { TrendingUp, Award, ArrowRight } from "lucide-react";
// 2026-10-18: sourced figures only, same HTML as the crawler (scripts/salary-static-render.mjs).
import SALARY_SOURCES from "@/data/salary-sources-2026-10.json";
import { sourceTableHtml, whyHtml, planHtml, inlineLinks } from "@/data/salary-sources-2026-10.mjs";

export interface SalaryLevelConfig {
  /** Route path, e.g. "/ndt-level-3-salary" */
  path: string;
  /** H1 — deliberately the query verbatim where the query reads naturally. */
  h1: string;
  title: string;
  description: string;
  /** The direct answer. First screen, one paragraph, leads with a sourced figure. */
  quickAnswer: string;
  /** Rows of the shared source table (keys of src/data/salary-sources-2026-10.json sources). */
  sourceIds: string[];
  /** Sub-heading answering "what the number depends on". Bodies may carry [text](/url) links. */
  drivers: { h: string; body: string }[];
  /** How to move up from here. */
  progression: { h: string; body: string }[];
  faqs: { q: string; a: string }[];
  /** Internal routing — the pages this one should hand traffic to. */
  related: { to: string; label: string }[];
}

export default function SalaryLevelPage({ config }: { config: SalaryLevelConfig }) {

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={config.title}
        description={config.description}
        canonical={`https://atlantisndt.com${config.path}`}
        faq={config.faqs.map((f) => ({ question: f.q, answer: f.a }))}
      />
      <Navigation />
      <Breadcrumbs />

      <main>
        <header className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-14">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{config.h1}</h1>
            <p className="text-slate-300 text-lg">{config.description}</p>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 py-10 space-y-12">
          <QuickAnswerBox question={config.h1} answer={config.quickAnswer} />
          <RankSalaryNote path={config.path} />

          {/* Above-the-fold CTA for a visitor who's already decided — the full
              form stays lower down (§conversion below) so the first screen
              can still win the featured snippet on the direct answer above. */}
          <div className="flex justify-center">
            <a
              href="#training-enquiry-inline"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Get your certification roadmap <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* What each published source says (one source file, same HTML as the crawler) */}
          <div className="prose max-w-none [&_table]:w-full [&_table]:text-sm [&_table]:border [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_td]:px-3 [&_td]:py-2 [&_td]:border-t [&_thead]:bg-slate-100 [&_a]:text-blue-700 [&_a]:underline"
            dangerouslySetInnerHTML={{ __html: sourceTableHtml(SALARY_SOURCES, config.sourceIds) + whyHtml(SALARY_SOURCES, true) }} />

          {/* What moves the number */}
          <section>
            <h2 className="text-2xl font-bold mb-5 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-blue-600" /> What moves the number
            </h2>
            <div className="space-y-5">
              {config.drivers.map((d, i) => (
                <div key={i}>
                  <h3 className="font-semibold text-lg text-slate-900">{d.h}</h3>
                  <p className="text-slate-700 mt-1 [&_a]:text-blue-700 [&_a]:underline" dangerouslySetInnerHTML={{ __html: inlineLinks(d.body) }} />
                </div>
              ))}
            </div>
          </section>

          {/* Progression */}
          <section>
            <h2 className="text-2xl font-bold mb-5 flex items-center gap-2">
              <Award className="w-6 h-6 text-blue-600" /> Moving up from here
            </h2>
            <div className="space-y-5">
              {config.progression.map((d, i) => (
                <div key={i}>
                  <h3 className="font-semibold text-lg text-slate-900">{d.h}</h3>
                  <p className="text-slate-700 mt-1 [&_a]:text-blue-700 [&_a]:underline" dangerouslySetInnerHTML={{ __html: inlineLinks(d.body) }} />
                </div>
              ))}
            </div>
          </section>

          {/* FAQ: every answer visible, as in the crawler HTML (FAQPage is built from these) */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Questions people ask about this pay band</h2>
            <div className="space-y-5">
              {config.faqs.map((f, i) => (
                <div key={i}>
                  <h3 className="font-semibold text-lg text-slate-900">{f.q}</h3>
                  <p className="text-slate-700 mt-1">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="prose max-w-none [&_a]:text-blue-700 [&_a]:underline" dangerouslySetInnerHTML={{ __html: planHtml(SALARY_SOURCES) }} />

          {/* Conversion — no pricing anywhere, enquiry only (CLAUDE.md §18) */}
          <section id="training-enquiry-inline" className="bg-blue-50 border border-blue-200 rounded-xl p-6 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-2">Work out which certification changes your number</h2>
            <p className="text-slate-700 mb-5">
              Tell us where you are now — school leaver, welder, graduate, or already certified — and
              which industry you want to work in. An ASNT NDT Level III will map the shortest route to
              the level and methods that pay in your market, and what training that requires.
            </p>
            <EnquiryCaptureForm variant="training" />
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Related</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {config.related.map((r) => (
                <li key={r.to}>
                  <Link
                    to={r.to}
                    className="flex items-center gap-2 p-3 rounded-lg border hover:border-blue-400 hover:bg-blue-50 transition"
                  >
                    <ArrowRight className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="font-medium">{r.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <ContactDetails />
        </div>
      </main>
    </div>
  );
}
