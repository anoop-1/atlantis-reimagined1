import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "PAUT’s Quiet Bottleneck Is Data Management, Not Data Acquisition",
  description: "Phased array instruments produce gigabytes per shift; most companies still manage the output like radiographs in a filing cabinet. Encoded-scan files, analyst workflow and deliverables — where advanced UT programmes actually lose time.",
  keywords: ["phased array","PAUT","PAUT software","encoded scanning","UT data analysis"],
  alternates: { canonical: "https://advanced-ndt-techniques.vercel.app/blog/paut-data-management-bottleneck" },
  openGraph: {
    title: "PAUT’s Quiet Bottleneck Is Data Management, Not Data Acquisition",
    description: "Phased array instruments produce gigabytes per shift; most companies still manage the output like radiographs in a filing cabinet. Encoded-scan files, analyst workflow and deliverables — where advanced UT programmes actually lose time.",
    type: 'article',
    url: "https://advanced-ndt-techniques.vercel.app/blog/paut-data-management-bottleneck",
    siteName: "Advanced NDT Techniques",
    locale: 'en_US',
    publishedTime: "2026-08-01T00:00:00.000Z",
    modifiedTime: "2026-08-01T00:00:00.000Z",
    authors: ["Dr. Henrik Lindqvist, ISO 9712 UT3"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "PAUT’s Quiet Bottleneck Is Data Management, Not Data Acquisition",
  "description": "Phased array instruments produce gigabytes per shift; most companies still manage the output like radiographs in a filing cabinet. Encoded-scan files, analyst workflow and deliverables — where advanced UT programmes actually lose time.",
  "author": {
    "@type": "Person",
    "name": "Dr. Henrik Lindqvist, ISO 9712 UT3"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Advanced NDT Techniques"
  },
  "datePublished": "2026-08-01T00:00:00.000Z",
  "dateModified": "2026-08-01T00:00:00.000Z",
  "mainEntityOfPage": "https://advanced-ndt-techniques.vercel.app/blog/paut-data-management-bottleneck"
};

export default function ArticlePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-slate prose-lg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1>PAUT’s Quiet Bottleneck Is Data Management, Not Data Acquisition</h1>
      <p className="text-slate-500 text-base">By Dr. Henrik Lindqvist, ISO 9712 UT3 · 1 August 2026</p>
      <div dangerouslySetInnerHTML={{ __html: "<p>Phased array bought the industry better data and then left most companies with nowhere to put it. A single encoded corrosion-mapping shift produces file sets that dwarf a year of conventional UT records; a girth-weld campaign multiplies that by every weld. The acquisition problem is solved — instruments are excellent. The management problem mostly is not, and it is now where advanced UT programmes lose their margin.</p>\n      <h2>The failure pattern</h2>\n      <p>It looks like this: scan files named by whatever convention the technician improvised, stored on the instrument, a laptop and a portable drive in some combination; analysis done wherever the licensed seat happens to be; results transcribed into a report that references, but does not contain, the data; and six months later a client question about one indication that triggers an archaeology project. Every PAUT house recognises some version of this. It is what happens when instrument-side excellence meets office-side improvisation.</p>\n      <h2>What competent PAUT data management looks like</h2>\n      <p>Three disciplines separate the strong programmes. <strong>Provenance:</strong> every scan file tied at capture to the work order, component, procedure revision and search-unit configuration — not reconstructed later from filenames. <strong>Analyst workflow:</strong> acquisition and evaluation as separate, tracked steps, so who sized what, against which criteria, is part of the record. <strong>Deliverable linkage:</strong> the report references data the client can actually be given, in a structure their integrity system can consume — the expectation owners are now writing into contracts, as the provider-focused reviews of <a href=\"https://atlantisndt.com/ndt-inspection-software\">NDT inspection software</a> reflect.</p>\n      <p>None of this requires exotic tooling — it requires the examination records, certifications and jobs to live in one system instead of five. Companies running advanced techniques as a differentiator should read the operational side of the <a href=\"https://atlantisndt.com/ndt-erp-houston\">turnaround-market profile</a>: PAUT wins the bid, but the data spine keeps the client.</p>" }} />
    </article>
  );
}
