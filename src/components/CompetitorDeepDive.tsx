import { dtCompetitorKnowledge } from "@/data/dt-competitor-knowledge";
import { CheckCircle, XCircle } from "lucide-react";

/**
 * Authoritative competitor deep-dive appended to each /compare/atlantis-dt-vs-{competitor} page.
 * Renders honest positioning, where each wins, NDT capability gaps, migration path,
 * a comparison table and FAQs (with FAQ schema) for the given competitor slug.
 */
export default function CompetitorDeepDive({ slug }: { slug: string }) {
  const k = dtCompetitorKnowledge[slug];
  if (!k) return null;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": k.faqs.map(([q, a]) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": { "@type": "Answer", "text": a },
    })),
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-5xl px-6">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

        <h2 className="text-3xl font-bold mb-4">Atlantis Digital Twin vs {k.competitorName} — the detailed comparison</h2>
        <p className="text-lg text-slate-700 leading-relaxed mb-8">{k.positioning}</p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 bg-slate-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Where {k.competitorName} is the right choice</h3>
            <ul className="space-y-2">
              {k.whereCompetitorWins.map((w, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-700"><CheckCircle className="w-4 h-4 text-slate-400 flex-shrink-0 mt-1" />{w}</li>
              ))}
            </ul>
          </div>
          <div className="p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Where Atlantis wins for NDT integrity</h3>
            <p className="text-slate-700 leading-relaxed">{k.whereAtlantisWins}</p>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mb-4">NDT &amp; inspection gaps in {k.competitorName}</h3>
        <ul className="space-y-2 mb-12">
          {k.ndtGaps.map((g, i) => (
            <li key={i} className="flex items-start gap-2 text-slate-700"><XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />{g}</li>
          ))}
        </ul>

        <h3 className="text-2xl font-semibold mb-4">Feature-by-feature comparison</h3>
        <div className="overflow-x-auto mb-12">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100">
                <th className="text-left p-3 font-semibold">Factor</th>
                <th className="text-left p-3 font-semibold text-blue-700">Atlantis Digital Twin</th>
                <th className="text-left p-3 font-semibold">{k.competitorName}</th>
              </tr>
            </thead>
            <tbody>
              {k.comparisonRows.map((r, i) => (
                <tr key={i} className="border-b border-slate-200 align-top">
                  <td className="p-3 font-medium text-slate-800">{r.factor}</td>
                  <td className="p-3 text-slate-700">{r.atlantis}</td>
                  <td className="p-3 text-slate-600">{r.competitor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-semibold mb-4">Migrating from {k.competitorName} to Atlantis</h3>
        <p className="text-slate-700 leading-relaxed mb-12">{k.migrationPath}</p>

        <h3 className="text-2xl font-semibold mb-6">Frequently asked questions</h3>
        {k.faqs.map(([q, a], i) => (
          <div key={i} className="mb-5">
            <h4 className="text-lg font-semibold text-slate-900 mb-1">{q}</h4>
            <p className="text-slate-600 leading-relaxed">{a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
