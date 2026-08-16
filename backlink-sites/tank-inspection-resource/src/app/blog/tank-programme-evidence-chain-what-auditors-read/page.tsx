import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "The Tank Programme Evidence Chain: What Auditors Actually Read",
  description: "API 653 programmes rarely fail on the inspection. They fail on whether the record can be reconstructed years later — here is the chain auditors follow.",
  keywords: ["api 653","tank inspection programme","inspection records","audit readiness"],
  alternates: { canonical: "https://tank-inspection-resource.vercel.app/blog/tank-programme-evidence-chain-what-auditors-read" },
  openGraph: {
    title: "The Tank Programme Evidence Chain: What Auditors Actually Read",
    description: "API 653 programmes rarely fail on the inspection. They fail on whether the record can be reconstructed years later — here is the chain auditors follow.",
    type: 'article',
    url: "https://tank-inspection-resource.vercel.app/blog/tank-programme-evidence-chain-what-auditors-read",
    siteName: "Tank Inspection Resource",
    locale: 'en_US',
    publishedTime: "2026-08-16T00:00:00.000Z",
    modifiedTime: "2026-08-16T00:00:00.000Z",
    authors: ["Marcus Ellery"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The Tank Programme Evidence Chain: What Auditors Actually Read",
  "description": "API 653 programmes rarely fail on the inspection. They fail on whether the record can be reconstructed years later — here is the chain auditors follow.",
  "author": {
    "@type": "Person",
    "name": "Marcus Ellery"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Tank Inspection Resource"
  },
  "datePublished": "2026-08-16T00:00:00.000Z",
  "dateModified": "2026-08-16T00:00:00.000Z",
  "mainEntityOfPage": "https://tank-inspection-resource.vercel.app/blog/tank-programme-evidence-chain-what-auditors-read"
};

export default function ArticlePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-slate prose-lg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1>The Tank Programme Evidence Chain: What Auditors Actually Read</h1>
      <p className="text-slate-500 text-base">By Marcus Ellery · 16 August 2026</p>
      <div dangerouslySetInnerHTML={{ __html: "<p>Storage tank programmes are audited more often than most fixed equipment, partly because the consequences of a floor failure are environmental as well as economic. In practice the findings that hurt are almost never \"the inspection was wrong\". They are \"we cannot follow how you got to this conclusion\".</p>\n\n<h2>The chain, in the order an auditor walks it</h2>\n<p>It starts with the tank record file — construction data, service history, previous inspections — because everything downstream is judged relative to what was known before. Then the inspection scope: why these examinations, at these intervals, on this tank. Then the raw data: thickness readings tied to identified locations, floor scan coverage maps, settlement measurements against the correct annex criteria. Then evaluation: how the readings became corrosion rates, how the rates became remaining life, and where fitness-for-service assessment took over. Finally, authorisation: who signed, and were they certified to.</p>\n<p>Break any link and the conclusion becomes an assertion. The scope, methods and interval logic of the underlying inspection are covered thoroughly in this guide to <a href=\"https://atlantisndt.com/blog/api-653-tank-inspection-guide\">what an API 653 tank inspection actually involves</a>.</p>\n\n<h2>Where chains break most often</h2>\n<p><strong>Location identity.</strong> Thickness readings that cannot be tied unambiguously to a repeatable location produce corrosion rates nobody can defend, because the second reading may not be the same spot as the first.</p>\n<p><strong>Coverage claims.</strong> Floor scanning that reports \"complete\" without a coverage map invites the auditor to assume it was not.</p>\n<p><strong>The evaluation gap.</strong> Data collected by a contractor, evaluated by an engineer, signed by an inspector — with no record of how the judgement travelled between them.</p>\n<p><strong>Interval justification.</strong> Extended internal intervals are legitimate when supported by risk-based analysis, and indefensible when supported by habit.</p>\n\n<h2>Why this is a programme problem</h2>\n<p>Every one of those failures is systemic rather than technical, which is why they recur across otherwise competent operations. Fixing them means fixing how the programme records itself — condition monitoring location discipline, evaluation logic written down, authorisation traceable — which is the substance of an <a href=\"https://atlantisndt.com/consulting/oil-gas-ndt-consulting\">in-service inspection programme engagement</a> rather than of any single inspection campaign.</p>\n\n<h2>A useful test</h2>\n<p>Take one tank and one finding from three years ago. Try to reconstruct, from the records alone, why that examination happened, what was measured, how the conclusion followed and who was authorised to sign it. If it takes more than an afternoon, the next audit will find what you just found.</p>" }} />
    </article>
  );
}
