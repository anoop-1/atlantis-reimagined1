import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Coating Inspection Records That Survive a Warranty Dispute",
  description: "Coating failures surface years after application, when the argument turns on hold-point records, environmental readings and instrument calibration. What was recorded at the time decides who pays.",
  keywords: ["coating inspection","NACE inspection","AMPP","surface preparation","DFT measurement"],
  alternates: { canonical: "https://coating-inspection-guide.vercel.app/blog/coating-inspection-records-that-survive-a-warranty-dispute" },
  openGraph: {
    title: "Coating Inspection Records That Survive a Warranty Dispute",
    description: "Coating failures surface years after application, when the argument turns on hold-point records, environmental readings and instrument calibration. What was recorded at the time decides who pays.",
    type: 'article',
    url: "https://coating-inspection-guide.vercel.app/blog/coating-inspection-records-that-survive-a-warranty-dispute",
    siteName: "Coating Inspection Guide",
    locale: 'en_US',
    publishedTime: "2026-07-14T00:00:00.000Z",
    modifiedTime: "2026-07-14T00:00:00.000Z",
    authors: ["Sofia Marchetti, AMPP CIP Level 3"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Coating Inspection Records That Survive a Warranty Dispute",
  "description": "Coating failures surface years after application, when the argument turns on hold-point records, environmental readings and instrument calibration. What was recorded at the time decides who pays.",
  "author": {
    "@type": "Person",
    "name": "Sofia Marchetti, AMPP CIP Level 3"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Coating Inspection Guide",
    "url": "https://coating-inspection-guide.vercel.app"
  },
  "datePublished": "2026-07-14T00:00:00.000Z",
  "dateModified": "2026-07-14T00:00:00.000Z",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://coating-inspection-guide.vercel.app/blog/coating-inspection-records-that-survive-a-warranty-dispute"
  },
  "keywords": "coating inspection, NACE inspection, AMPP, surface preparation, DFT measurement"
};

export default function ArticlePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-slate prose-lg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1>Coating Inspection Records That Survive a Warranty Dispute</h1>
      <p className="text-slate-500 text-base">By Sofia Marchetti, AMPP CIP Level 3 · 14 July 2026</p>
      <div dangerouslySetInnerHTML={{ __html: "<p>Coating disputes have an unusual timeline. The work is inspected, accepted and invoiced; the failure appears three to seven years later; and the argument is then settled almost entirely on records created at the time of application by people who have since moved on. Whoever holds better records generally wins, largely independent of who was actually at fault.</p>\n\n      <h2>What the argument turns on</h2>\n      <ul>\n        <li><strong>Surface preparation.</strong> Achieved cleanliness against the specified standard, profile measurement, and — critically — soluble salt testing results with the test method identified.</li>\n        <li><strong>Environmental conditions at application.</strong> Substrate temperature, dew point, relative humidity and the margin between substrate and dew point, recorded at the intervals the specification required rather than once at the start of the shift.</li>\n        <li><strong>Wet and dry film thickness.</strong> The number of readings, their distribution, the gauge used and its calibration verification on that day.</li>\n        <li><strong>Hold points.</strong> Which were witnessed, by whom, and whether the signatory was the party the specification named.</li>\n        <li><strong>Product and batch.</strong> Mixing ratio, induction time, pot life and overcoat window against the actual recorded conditions.</li>\n      </ul>\n\n      <h2>Where records fail</h2>\n      <p>Rarely through absence. Usually through ambiguity: readings recorded without location, environmental readings taken at one point and applied to an entire structure, gauge calibration verified but not recorded, and hold-point sign-offs whose signatory cannot be tied to a qualification current on that date. Each of those is defensible individually and fatal collectively, because the opposing expert only needs to establish that the record cannot be relied upon.</p>\n\n      <h2>The discipline that costs nothing at the time</h2>\n      <p>Capture readings against a location on the structure rather than against a shift; record the instrument identity and its verification with the reading; and freeze the inspector's qualification state onto the report when it is issued rather than looking it up later. None of that slows the work materially, and all of it is impossible to add afterwards.</p>\n      <p>Contractors running several coating projects at once usually reach the limit of paper and spreadsheets around the point where hold-point coordination across sites becomes the constraint. The general capability set — structured records, enforced instrument calibration, location-bound readings and point-in-time recovery — is described in this overview of <a href=\"https://atlantisndt.com/inspection-management-software\" target=\"_blank\" rel=\"noopener\">inspection management software for service providers</a>, and the industry-specific configuration in <a href=\"https://atlantisndt.com/erp-industries/industrial-coatings-inspection\" target=\"_blank\" rel=\"noopener\">coatings inspection ERP</a>.</p>\n\n      <h2>The test</h2>\n      <p>Take a completed project from four years ago and assemble the pack you would hand a solicitor: preparation records, environmental logs, thickness readings with locations, hold-point sign-offs with qualification evidence, and gauge calibration certificates covering the application dates. If that takes more than an afternoon, it will take considerably longer under pressure — and by then the argument has already shifted onto your record-keeping rather than the coating.</p>" }} />
    </article>
  );
}
