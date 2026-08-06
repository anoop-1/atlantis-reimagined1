import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "In Fab-Shop NDT, Report Turnaround Is the Product",
  description: "The shop cannot ship until the report exists. Why inspection companies serving fabricators win or lose on documentation speed, and where the hours actually go between probe-off and report-issued.",
  keywords: ["weld inspection","fabrication NDT","AWS D1.1","inspection reports","shop inspection"],
  alternates: { canonical: "https://construction-ndt-guide.vercel.app/blog/fab-shop-inspection-reporting-speed" },
  openGraph: {
    title: "In Fab-Shop NDT, Report Turnaround Is the Product",
    description: "The shop cannot ship until the report exists. Why inspection companies serving fabricators win or lose on documentation speed, and where the hours actually go between probe-off and report-issued.",
    type: 'article',
    url: "https://construction-ndt-guide.vercel.app/blog/fab-shop-inspection-reporting-speed",
    siteName: "Construction NDT Guide",
    locale: 'en_US',
    publishedTime: "2026-08-02T00:00:00.000Z",
    modifiedTime: "2026-08-02T00:00:00.000Z",
    authors: ["Rob Castellanos, CWI, ASNT Level II (UT, MT, PT)"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "In Fab-Shop NDT, Report Turnaround Is the Product",
  "description": "The shop cannot ship until the report exists. Why inspection companies serving fabricators win or lose on documentation speed, and where the hours actually go between probe-off and report-issued.",
  "author": {
    "@type": "Person",
    "name": "Rob Castellanos, CWI, ASNT Level II (UT, MT, PT)"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Construction NDT Guide"
  },
  "datePublished": "2026-08-02T00:00:00.000Z",
  "dateModified": "2026-08-02T00:00:00.000Z",
  "mainEntityOfPage": "https://construction-ndt-guide.vercel.app/blog/fab-shop-inspection-reporting-speed"
};

export default function ArticlePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-slate prose-lg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1>In Fab-Shop NDT, Report Turnaround Is the Product</h1>
      <p className="text-slate-500 text-base">By Rob Castellanos, CWI, ASNT Level II (UT, MT, PT) · 2 August 2026</p>
      <div dangerouslySetInnerHTML={{ __html: "<p>A fabricator's schedule ends at the shipping bay, and the shipping bay waits on paper. The weldment is finished, the examination is done, the findings are clean — and the load sits, because the report that releases it is in a queue behind every other report the inspection company owes. From the shop's side of the relationship, the inspection company with the fastest defensible paperwork is simply the better inspection company.</p>\n      <h2>Where the hours go</h2>\n      <p>Time-and-motion the gap between probe-off and report-issued at a typical shop-services inspection company and the examination itself is the smallest slice. The hours go to: transferring findings from a field sheet or instrument into a template; hunting the correct client-specific format and the correct acceptance-criteria reference for this job; chasing the reviewing Level II or III for a signature; and correcting the transcription errors the first three steps introduced. None of that is inspection. All of it is schedule.</p>\n      <h2>The structural fix</h2>\n      <p>The companies that turn reports in hours rather than days have restructured the flow, not hired faster typists. Findings are captured once, digitally, at the weld — against the job's weld map, with the acceptance criteria attached to the work order before anyone opens a probe case. The report is then a rendering of data that already exists, in the client's template, with the technician's certification details populated from the same system. Review happens on screen the same afternoon. The comparison work on <a href=\"https://atlantisndt.com/best-ndt-reporting-software-2026\">NDT reporting software</a> covers what separates genuine code-referenced templating from PDF generators; for shop-heavy markets the operational context is well described in the market profile for <a href=\"https://atlantisndt.com/ndt-erp-chicago\">Chicago's fabrication belt</a>.</p>\n      <p>The commercial effect compounds. Same-day reports mean the shop calls you first, which means volume, which means your technicians know the shop's work, which means fewer queries per job. Documentation speed is not administration — in this market it is the product.</p>" }} />
    </article>
  );
}
