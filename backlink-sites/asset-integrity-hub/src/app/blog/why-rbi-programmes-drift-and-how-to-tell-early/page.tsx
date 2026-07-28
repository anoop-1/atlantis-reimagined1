import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Why RBI Programmes Drift, and How to Tell Early",
  description: "Risk-based inspection programmes rarely fail loudly. They drift — default corrosion rates replace measured ones, CML identity blurs, and the ranking stops reflecting condition. Six early indicators, and what each one costs.",
  keywords: ["risk based inspection","RBI programme","API 581","corrosion rate data","integrity management"],
  alternates: { canonical: "https://asset-integrity-hub.vercel.app/blog/why-rbi-programmes-drift-and-how-to-tell-early" },
  openGraph: {
    title: "Why RBI Programmes Drift, and How to Tell Early",
    description: "Risk-based inspection programmes rarely fail loudly. They drift — default corrosion rates replace measured ones, CML identity blurs, and the ranking stops reflecting condition. Six early indicators, and what each one costs.",
    type: 'article',
    url: "https://asset-integrity-hub.vercel.app/blog/why-rbi-programmes-drift-and-how-to-tell-early",
    siteName: "Asset Integrity Hub",
    locale: 'en_US',
    publishedTime: "2026-07-16T00:00:00.000Z",
    modifiedTime: "2026-07-16T00:00:00.000Z",
    authors: ["Yuki Nakamura, PhD, P.Eng"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Why RBI Programmes Drift, and How to Tell Early",
  "description": "Risk-based inspection programmes rarely fail loudly. They drift — default corrosion rates replace measured ones, CML identity blurs, and the ranking stops reflecting condition. Six early indicators, and what each one costs.",
  "author": {
    "@type": "Person",
    "name": "Yuki Nakamura, PhD, P.Eng"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Asset Integrity Hub Research Group",
    "url": "https://asset-integrity-hub.vercel.app"
  },
  "datePublished": "2026-07-16T00:00:00.000Z",
  "dateModified": "2026-07-16T00:00:00.000Z",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://asset-integrity-hub.vercel.app/blog/why-rbi-programmes-drift-and-how-to-tell-early"
  },
  "keywords": "risk based inspection, RBI programme, API 581, corrosion rate data, integrity management"
};

export default function ArticlePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-slate prose-lg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1>Why RBI Programmes Drift, and How to Tell Early</h1>
      <p className="text-slate-500 text-base">By Yuki Nakamura, PhD, P.Eng · 16 July 2026</p>
      <div dangerouslySetInnerHTML={{ __html: "<p>An RBI programme almost never announces its own failure. It degrades, and the degradation is invisible from the ranking output — the dashboard still produces a ranked list, the intervals still get set, and the audit still passes. What changes is that the ranking gradually stops reflecting the actual condition of the plant.</p>\n\n      <h2>The mechanism of drift</h2>\n      <p>Probability of failure in API 581 is driven by corrosion rate. When measured rates are available for a circuit, the model reflects reality. When they are not, a default rate is substituted — legitimately, and usually with a note. The drift occurs because those substitutions accumulate silently: a CML that could not be accessed during one turnaround, a reading discarded as an outlier and never repeated, a circuit re-drawn so its history no longer joins up.</p>\n      <p>Five years later a meaningful share of the model runs on defaults, and defaults are by construction insensitive to what is actually happening in that circuit. The ranking then encodes assumptions rather than condition, which is the precise opposite of the reason RBI was adopted.</p>\n\n      <h2>Six early indicators</h2>\n      <ol>\n        <li><strong>Rising proportion of circuits on default corrosion rates.</strong> Track it as a metric. If nobody knows the number, it is higher than anyone thinks.</li>\n        <li><strong>CML counts that change between campaigns without a documented reason.</strong> New locations appearing near old ones usually means the previous ones could not be found.</li>\n        <li><strong>Thickness readings with no instrument or technician attribution.</strong> An outlier you cannot investigate is an outlier you will eventually discard, and discarding data is how a time series becomes two points.</li>\n        <li><strong>Damage-mechanism assignments that have not been revisited after a feedstock or operating change.</strong> The mechanism drives the inspection technique; if the service changed and the assignment did not, the inspection is now looking for the wrong thing.</li>\n        <li><strong>Intervals extended more often than they are shortened.</strong> A model that only ever produces relief is not modelling.</li>\n        <li><strong>No record of integrity operating window excursions against the assessments that assumed them.</strong> The assessment presumed an envelope; nobody is checking whether operation stayed inside it.</li>\n      </ol>\n\n      <h2>What it costs</h2>\n      <p>Two ways, in opposite directions. Under-inspection of a genuinely degrading circuit is the obvious one and the one everyone plans for. The quieter cost is over-inspection: circuits that have been demonstrably stable for a decade continue to consume turnaround scope because the model, running on defaults, cannot tell that they are stable. In most refineries the second cost is larger and is never attributed to the RBI programme at all.</p>\n\n      <h2>The fix is upstream of the model</h2>\n      <p>None of this is solved by better RBI software, because the defect is in the condition data feeding it. The corrective actions are unglamorous: reconcile the corrosion monitoring location register and stop reusing identifiers; capture instrument, technician and procedure provenance with every reading so outliers can be investigated rather than discarded; and re-run assessments when new data arrives instead of inheriting the previous interval by default.</p>\n      <p>Platforms built outward from the inspection data rather than from a maintenance or historian system handle this natively — <a href=\"https://atlantisndt.com/asset-integrity-management-software\" target=\"_blank\" rel=\"noopener\">asset integrity management software that computes RBI from measured thickness trends per CML</a> rather than from tabulated defaults removes the substitution problem at source. The wider point stands regardless of vendor: a programme is only as defensible as the provenance of the readings underneath it.</p>\n\n      <h2>A one-hour diagnostic</h2>\n      <p>Pick three circuits. For each, try to produce the full thickness history at CML resolution, the instrument and technician behind each reading, the procedure revision in force, and the damage-mechanism assignment with its rationale. Whatever you cannot produce in an hour is the actual state of your programme — and it is considerably more informative than the ranking report.</p>\n      <p>Where the field-side capture is the gap rather than the modelling, the practical starting point is <a href=\"https://atlantisndt.com/inspection-management-software\" target=\"_blank\" rel=\"noopener\">inspection management software that binds qualification, calibration and procedure revision to each record as it is created</a>. Reconstructing that evidence afterwards is possible but expensive, and it is never complete.</p>" }} />
    </article>
  );
}
