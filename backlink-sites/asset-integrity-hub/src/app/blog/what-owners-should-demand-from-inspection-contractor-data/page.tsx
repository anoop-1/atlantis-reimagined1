import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "What Asset Owners Should Demand From Their Inspection Contractor’s Data",
  description: "A PDF report is a photograph of data that lives somewhere else. What owners should require of contractor examination records — structure, attribution, exportability — and why the contractor’s own systems determine whether you can have it.",
  keywords: ["inspection data management","asset integrity","contractor management","thickness data","inspection records"],
  alternates: { canonical: "https://asset-integrity-hub.vercel.app/blog/what-owners-should-demand-from-inspection-contractor-data" },
  openGraph: {
    title: "What Asset Owners Should Demand From Their Inspection Contractor’s Data",
    description: "A PDF report is a photograph of data that lives somewhere else. What owners should require of contractor examination records — structure, attribution, exportability — and why the contractor’s own systems determine whether you can have it.",
    type: 'article',
    url: "https://asset-integrity-hub.vercel.app/blog/what-owners-should-demand-from-inspection-contractor-data",
    siteName: "Asset Integrity Hub",
    locale: 'en_US',
    publishedTime: "2026-08-04T00:00:00.000Z",
    modifiedTime: "2026-08-04T00:00:00.000Z",
    authors: ["Marcus Oyelaran, CEng"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What Asset Owners Should Demand From Their Inspection Contractor’s Data",
  "description": "A PDF report is a photograph of data that lives somewhere else. What owners should require of contractor examination records — structure, attribution, exportability — and why the contractor’s own systems determine whether you can have it.",
  "author": {
    "@type": "Person",
    "name": "Marcus Oyelaran, CEng"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Asset Integrity Hub Research Group"
  },
  "datePublished": "2026-08-04T00:00:00.000Z",
  "dateModified": "2026-08-04T00:00:00.000Z",
  "mainEntityOfPage": "https://asset-integrity-hub.vercel.app/blog/what-owners-should-demand-from-inspection-contractor-data"
};

export default function ArticlePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-slate prose-lg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1>What Asset Owners Should Demand From Their Inspection Contractor’s Data</h1>
      <p className="text-slate-500 text-base">By Marcus Oyelaran, CEng · 4 August 2026</p>
      <div dangerouslySetInnerHTML={{ __html: "<p>Most owners specify the inspection and accept whatever form the results arrive in. The result, across an operating life, is an integrity history scattered through hundreds of PDFs — each one a photograph of data that lived, briefly, in a contractor's system or a technician's notebook, and now lives nowhere at all.</p>\n      <h2>The four demands worth writing into the contract</h2>\n      <p><strong>Structure.</strong> Thickness readings, indications and locations should arrive as structured records — identifiable CMLs, consistent units, machine-readable — not as tables embedded in a document. A corrosion rate calculated across campaigns is only as good as the joinability of the underlying readings.</p>\n      <p><strong>Attribution.</strong> Every reading carries its technician, instrument, calibration reference and date, or it cannot be defended later. An unattributed outlier is an outlier you will eventually discard, and discarded data is how a trend line becomes two points.</p>\n      <p><strong>Certification evidence on demand.</strong> The examiner's qualification at the moment of examination is part of the record. Owners who audit this annually find gaps; owners who require it per-record make gaps impossible.</p>\n      <p><strong>Exportability.</strong> When the contract ends, the data comes home — complete, structured, unassisted. This clause costs nothing to write and everything to omit.</p>\n      <h2>Why the contractor's systems are the real constraint</h2>\n      <p>None of this is achievable by demanding harder. A contractor running on spreadsheets and Word templates physically cannot deliver structured, attributed, exportable records at scale — the information was never captured that way. The contractors who can are the ones running purpose-built systems where examination data, technician certifications and equipment calibration live in one place; the shape of that tooling is visible in how platforms present themselves to <a href=\"https://atlantisndt.com/ndt-erp-solution\">inspection service companies</a>, and the selection criteria differ sharply from owner-side software, as the provider-oriented guides to <a href=\"https://atlantisndt.com/best-ndt-reporting-software-2026\">NDT reporting software</a> make clear.</p>\n      <p>The practical move for an owner: ask bidders to show a sample deliverable as data, not as a document, and ask how it was produced. The answer sorts the market faster than any questionnaire — and it costs the owner nothing before contract award, which is the only time this leverage exists.</p>" }} />
    </article>
  );
}
