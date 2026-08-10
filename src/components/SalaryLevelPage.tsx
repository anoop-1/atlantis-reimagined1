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
import EnquiryCaptureForm from "@/components/EnquiryCaptureForm";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, ChevronUp, TrendingUp, MapPin, Award, ArrowRight } from "lucide-react";

export interface SalaryRow {
  segment: string;
  range: string;
  note: string;
}

export interface SalaryLevelConfig {
  /** Route path, e.g. "/ndt-level-3-salary" */
  path: string;
  /** H1 — deliberately the query verbatim where the query reads naturally. */
  h1: string;
  title: string;
  description: string;
  /** The direct answer. First screen, one paragraph, leads with the number. */
  quickAnswer: string;
  /** Sub-heading answering "what the number depends on". */
  drivers: { h: string; body: string }[];
  /** US-first pay table. */
  table: { caption: string; rows: SalaryRow[] };
  /** International comparison rows. */
  intl: SalaryRow[];
  /** How to move up from here. */
  progression: { h: string; body: string }[];
  faqs: { q: string; a: string }[];
  /** Internal routing — the pages this one should hand traffic to. */
  related: { to: string; label: string }[];
}

export default function SalaryLevelPage({ config }: { config: SalaryLevelConfig }) {
  const [open, setOpen] = useState<number | null>(0);

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

          {/* What moves the number */}
          <section>
            <h2 className="text-2xl font-bold mb-5 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-blue-600" /> What actually moves this number
            </h2>
            <div className="space-y-5">
              {config.drivers.map((d, i) => (
                <div key={i}>
                  <h3 className="font-semibold text-lg text-slate-900">{d.h}</h3>
                  <p className="text-slate-700 mt-1">{d.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* US pay table */}
          <section>
            <h2 className="text-2xl font-bold mb-4">{config.table.caption}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border border-slate-200 text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-4 py-3">Segment</th>
                    <th className="px-4 py-3">Typical range (USD/yr)</th>
                    <th className="px-4 py-3">What drives it</th>
                  </tr>
                </thead>
                <tbody>
                  {config.table.rows.map((r, i) => (
                    <tr key={i} className="border-t">
                      <td className="px-4 py-3 font-medium">{r.segment}</td>
                      <td className="px-4 py-3 text-blue-700 whitespace-nowrap">{r.range}</td>
                      <td className="px-4 py-3 text-slate-700">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Ranges reflect base salary before overtime, per-diem and rotation premiums, which are
              material in field roles. See the driver notes above for how each figure is composed.
            </p>
          </section>

          {/* International */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-blue-600" /> How this compares outside the US
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border border-slate-200 text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-4 py-3">Market</th>
                    <th className="px-4 py-3">Typical range</th>
                    <th className="px-4 py-3">Context</th>
                  </tr>
                </thead>
                <tbody>
                  {config.intl.map((r, i) => (
                    <tr key={i} className="border-t">
                      <td className="px-4 py-3 font-medium">{r.segment}</td>
                      <td className="px-4 py-3 text-blue-700 whitespace-nowrap">{r.range}</td>
                      <td className="px-4 py-3 text-slate-700">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Progression */}
          <section>
            <h2 className="text-2xl font-bold mb-5 flex items-center gap-2">
              <Award className="w-6 h-6 text-blue-600" /> How to move up from here
            </h2>
            <div className="space-y-5">
              {config.progression.map((d, i) => (
                <div key={i}>
                  <h3 className="font-semibold text-lg text-slate-900">{d.h}</h3>
                  <p className="text-slate-700 mt-1">{d.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Questions people actually ask</h2>
            <div className="divide-y border rounded-lg">
              {config.faqs.map((f, i) => (
                <div key={i}>
                  <button
                    className="w-full text-left px-4 py-3 flex justify-between items-center gap-4 font-medium"
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                  >
                    <span>{f.q}</span>
                    {open === i ? <ChevronUp className="w-5 h-5 shrink-0" /> : <ChevronDown className="w-5 h-5 shrink-0" />}
                  </button>
                  {open === i && <p className="px-4 pb-4 text-slate-700">{f.a}</p>}
                </div>
              ))}
            </div>
          </section>

          {/* Conversion — no pricing anywhere, enquiry only (CLAUDE.md §18) */}
          <section className="bg-blue-50 border border-blue-200 rounded-xl p-6">
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
