import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "On Construction Projects, the Quality Record Is What Gets Audited — Not the Programme",
  description: "Construction ERP handles cost and schedule well and the quality record badly. On fabrication-heavy projects that is the wrong way round, because the quality record is where the audit lands.",
  keywords: ["construction QA","welder qualification","ITP","material traceability","construction ERP"],
  alternates: { canonical: "https://construction-ndt-guide.vercel.app/blog/the-quality-record-is-what-gets-audited-not-the-programme" },
  openGraph: {
    title: "On Construction Projects, the Quality Record Is What Gets Audited — Not the Programme",
    description: "Construction ERP handles cost and schedule well and the quality record badly. On fabrication-heavy projects that is the wrong way round, because the quality record is where the audit lands.",
    type: 'article',
    url: "https://construction-ndt-guide.vercel.app/blog/the-quality-record-is-what-gets-audited-not-the-programme",
    siteName: "Construction NDT Guide",
    locale: 'en_US',
    publishedTime: "2026-07-24T00:00:00.000Z",
    modifiedTime: "2026-07-24T00:00:00.000Z",
    authors: ["Wei Lin Tan, CSWIP 3.2"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "On Construction Projects, the Quality Record Is What Gets Audited — Not the Programme",
  "description": "Construction ERP handles cost and schedule well and the quality record badly. On fabrication-heavy projects that is the wrong way round, because the quality record is where the audit lands.",
  "author": {
    "@type": "Person",
    "name": "Wei Lin Tan, CSWIP 3.2"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Construction NDT Guide",
    "url": "https://construction-ndt-guide.vercel.app"
  },
  "datePublished": "2026-07-24T00:00:00.000Z",
  "dateModified": "2026-07-24T00:00:00.000Z",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://construction-ndt-guide.vercel.app/blog/the-quality-record-is-what-gets-audited-not-the-programme"
  },
  "keywords": "construction QA, welder qualification, ITP, material traceability, construction ERP"
};

export default function ArticlePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-slate prose-lg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1>On Construction Projects, the Quality Record Is What Gets Audited — Not the Programme</h1>
      <p className="text-slate-500 text-base">By Wei Lin Tan, CSWIP 3.2 · 24 July 2026</p>
      <div dangerouslySetInnerHTML={{ __html: "<p>Ask a construction contractor what their ERP does well and you will hear about cost control, procurement and programme. Ask where an audit actually goes and it is somewhere else entirely: welder qualifications, NDT results per joint, material traceability by heat number, and inspection and test plan hold-point evidence.</p>\n\n      <h2>The mismatch</h2>\n      <p>Mainstream construction ERP models the quality record as documents attached to activities. That is adequate until someone asks a structured question — which joints were welded by a welder whose qualification had lapsed, or which heats were used in a particular subassembly. Answering those from attached PDFs means opening them one at a time, and on a project of any size that is not an answer, it is a project.</p>\n\n      <h2>What structured looks like</h2>\n      <ul>\n        <li><strong>Welder qualification</strong> as a record with continuity tracking, matched to the joints actually welded, rather than a certificate filed against a person.</li>\n        <li><strong>NDT results</strong> tied to joint and drawing, carrying the technician's certification and the instrument's calibration state at the time of test.</li>\n        <li><strong>Material traceability</strong> from mill certificate through to installed component, queryable by heat number.</li>\n        <li><strong>ITP execution</strong> with hold and witness points signed by the party the plan names, with evidence attached at the point.</li>\n        <li><strong>NCRs</strong> raised, dispositioned and closed with the trail intact, rather than resolved in email.</li>\n      </ul>\n\n      <h2>Where this bites hardest</h2>\n      <p>On projects with significant fabrication content — process plant, industrial and marine work, and structural steel packages with demanding weld acceptance. In markets where the documentation load is heaviest, the quality record is effectively the deliverable alongside the physical work. Contractors working Jurong Island process plant or Tuas industrial packages, for instance, deal with consultant and client regimes that examine welder qualification, NDT coverage and traceability directly — an environment discussed in more detail in this overview of <a href=\"https://atlantisndt.com/erp-construction-singapore\" target=\"_blank\" rel=\"noopener\">construction ERP for Singapore contractors and QA/QC teams</a>.</p>\n\n      <h2>Cost control still matters — but it is downstream</h2>\n      <p>None of this argues against project cost control. It argues about sequencing. A contractor who can produce the quality record on demand and knows their per-project margin is in a strong position; one who has excellent cost control and a folder structure for quality is exposed precisely where exposure is expensive. Where both run on one platform, the same work order carries the cost and the evidence, which removes the reconciliation entirely — the model described in this piece on <a href=\"https://atlantisndt.com/inspection-management-software\" target=\"_blank\" rel=\"noopener\">inspection management software for service providers</a>.</p>\n\n      <h2>The check</h2>\n      <p>Pick a completed subassembly. Produce, without opening a PDF: the welders who worked on it and their qualification status at the time, the NDT results per joint with acceptance criteria applied, and the heat numbers of the material used. If that is a query, you are in good shape. If it is an afternoon, the next audit will find the same thing.</p>" }} />
    </article>
  );
}
