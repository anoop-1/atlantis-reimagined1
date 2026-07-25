import { dtUsecaseKnowledge } from "@/data/dt-usecase-knowledge";

/**
 * Ultra-rich deep-dive block appended to each /digital-twins/{usecase} page.
 * Renders real damage mechanisms, inspection workflow, governing codes, key assets,
 * measurable outcomes and FAQs (with FAQ schema) for the given use-case slug.
 */
export default function UsecaseDeepDive({ slug }: { slug: string }) {
  const k = dtUsecaseKnowledge[slug];
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
      <div className="container mx-auto max-w-4xl px-6 prose prose-slate max-w-4xl">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

        <h2>Damage mechanisms the digital twin tracks</h2>
        <p>{k.damageMechanisms}</p>

        <h2>Inspection-to-decision workflow</h2>
        <p>{k.workflow}</p>

        <h2>Governing codes &amp; standards</h2>
        <ul>
          {k.codes.map((c, i) => (<li key={i}>{c}</li>))}
        </ul>

        <h2>Key assets digital-twinned</h2>
        <ul>
          {k.keyAssets.map((a, i) => (<li key={i}>{a}</li>))}
        </ul>

        <h2>Measurable outcomes</h2>
        <p>{k.roi}</p>

        <h2>Frequently asked questions</h2>
        {k.faqs.map(([q, a], i) => (
          <div key={i} className="not-prose mb-5">
            <h3 className="text-lg font-semibold text-slate-900 mb-1">{q}</h3>
            <p className="text-slate-600 leading-relaxed">{a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
