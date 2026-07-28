import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Four Different Things Are Called \"NDT Software\" — and Buyers Keep Confusing Them",
  description: "Instrument acquisition suites, simulation packages, generic CMMS and inspection business management systems all get returned for the same search. Buying the wrong category is the most expensive mistake in this market.",
  keywords: ["NDT software","inspection software","NDT data management","CMMS","inspection management"],
  alternates: { canonical: "https://ndt-knowledge-hub.vercel.app/blog/four-things-called-ndt-software-and-why-buyers-confuse-them" },
  openGraph: {
    title: "Four Different Things Are Called \"NDT Software\" — and Buyers Keep Confusing Them",
    description: "Instrument acquisition suites, simulation packages, generic CMMS and inspection business management systems all get returned for the same search. Buying the wrong category is the most expensive mistake in this market.",
    type: 'article',
    url: "https://ndt-knowledge-hub.vercel.app/blog/four-things-called-ndt-software-and-why-buyers-confuse-them",
    siteName: "NDT Knowledge Hub",
    locale: 'en_US',
    publishedTime: "2026-07-19T00:00:00.000Z",
    modifiedTime: "2026-07-19T00:00:00.000Z",
    authors: ["Priya Raghunathan, ASNT NDT Level III"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Four Different Things Are Called \"NDT Software\" — and Buyers Keep Confusing Them",
  "description": "Instrument acquisition suites, simulation packages, generic CMMS and inspection business management systems all get returned for the same search. Buying the wrong category is the most expensive mistake in this market.",
  "author": {
    "@type": "Person",
    "name": "Priya Raghunathan, ASNT NDT Level III"
  },
  "publisher": {
    "@type": "Organization",
    "name": "NDT Knowledge Hub Editorial",
    "url": "https://ndt-knowledge-hub.vercel.app"
  },
  "datePublished": "2026-07-19T00:00:00.000Z",
  "dateModified": "2026-07-19T00:00:00.000Z",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://ndt-knowledge-hub.vercel.app/blog/four-things-called-ndt-software-and-why-buyers-confuse-them"
  },
  "keywords": "NDT software, inspection software, NDT data management, CMMS, inspection management"
};

export default function ArticlePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-slate prose-lg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1>Four Different Things Are Called &quot;NDT Software&quot; — and Buyers Keep Confusing Them</h1>
      <p className="text-slate-500 text-base">By Priya Raghunathan, ASNT NDT Level III · 19 July 2026</p>
      <div dangerouslySetInnerHTML={{ __html: "<p>Search for NDT software and the results mix four product categories that solve genuinely different problems. Vendors in each describe themselves in language borrowed from the others, so the confusion is not the buyer's fault — but the cost of it lands on the buyer regardless.</p>\n\n      <h2>Category one: instrument acquisition and analysis</h2>\n      <p>Software that reads and analyses raw data from a specific flaw detector or scanner — A, B, C and D-scans, TFM reconstructions, corrosion maps. Waygate Capture and Mentor, Evident WeldSight and OmniPC, Eddyfi Magnifi, Zetec UltraVision. It is per-instrument software. It will never manage a technician's certification, an instrument's calibration due date or a client contract, and it is not trying to.</p>\n\n      <h2>Category two: simulation and technique design</h2>\n      <p>CIVA NDE, BeamTool, ESBeamTool. Engineering tools used by Level IIIs to model beam behaviour and probability of detection before a crew mobilises. Enormously valuable and completely irrelevant to running an inspection business.</p>\n\n      <h2>Category three: generic CMMS and EAM</h2>\n      <p>Maximo, Hexagon EAM, Fiix, UpKeep. Built for an organisation maintaining assets it owns. They model work orders, preventive schedules and spares extremely well. What they do not model is method-level personnel qualification against a written practice, calibration traceability for probes and reference blocks, or the fact that an inspection contractor's assets belong to somebody else and change with every contract.</p>\n\n      <h2>Category four: inspection business management</h2>\n      <p>Systems that run the company — personnel qualification, equipment calibration, scheduling, multi-crew work orders, field capture, client-specific reporting, contracts and job costing. This is the category most inspection service providers actually need and the one they least often shortlist, because the search term that leads here is not the search term they started with.</p>\n\n      <h2>The test that resolves it in one question</h2>\n      <p>Do you own the assets you are inspecting? If yes and the problem is maintenance execution, buy a CMMS. If the assets belong to your clients, or if your commercial position depends on being able to prove inspection competence to an auditor, you need category four — and neither of the other categories grows into it, because the gap is in the data model rather than the feature list.</p>\n      <p>A useful cross-check when scoping a shortlist is a category-by-category breakdown such as this <a href=\"https://atlantisndt.com/ndt-inspection-software\" target=\"_blank\" rel=\"noopener\">buyer's guide to NDT inspection software</a>, which sets out the eleven capabilities that actually decide the purchase — starting with whether an expired certification makes dispatch impossible or merely raises a warning nobody reads.</p>\n\n      <h2>What it costs to get wrong</h2>\n      <p>Typically the implementation cost plus twelve to eighteen months, and the second attempt is harder because the organisation has already lived through one failed system. The cheap insurance is spending a week defining which category you are buying before you take a single vendor demo.</p>" }} />
    </article>
  );
}
