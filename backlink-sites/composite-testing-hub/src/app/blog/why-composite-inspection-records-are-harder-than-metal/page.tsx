import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Why Composite Inspection Records Are Harder Than Metal Records",
  description: "Acceptance criteria come from the OEM specification rather than a general code, so the same indication can be acceptable on one programme and rejectable on another. That single difference changes what a record has to contain.",
  keywords: ["composite inspection","delamination","NAS 410","OEM specification","ultrasonic composite"],
  alternates: { canonical: "https://composite-testing-hub.vercel.app/blog/why-composite-inspection-records-are-harder-than-metal" },
  openGraph: {
    title: "Why Composite Inspection Records Are Harder Than Metal Records",
    description: "Acceptance criteria come from the OEM specification rather than a general code, so the same indication can be acceptable on one programme and rejectable on another. That single difference changes what a record has to contain.",
    type: 'article',
    url: "https://composite-testing-hub.vercel.app/blog/why-composite-inspection-records-are-harder-than-metal",
    siteName: "Composite Testing Hub",
    locale: 'en_US',
    publishedTime: "2026-07-06T00:00:00.000Z",
    modifiedTime: "2026-07-06T00:00:00.000Z",
    authors: ["Ravi Deshmukh, ASNT NDT Level III"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Why Composite Inspection Records Are Harder Than Metal Records",
  "description": "Acceptance criteria come from the OEM specification rather than a general code, so the same indication can be acceptable on one programme and rejectable on another. That single difference changes what a record has to contain.",
  "author": {
    "@type": "Person",
    "name": "Ravi Deshmukh, ASNT NDT Level III"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Composite Testing Hub",
    "url": "https://composite-testing-hub.vercel.app"
  },
  "datePublished": "2026-07-06T00:00:00.000Z",
  "dateModified": "2026-07-06T00:00:00.000Z",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://composite-testing-hub.vercel.app/blog/why-composite-inspection-records-are-harder-than-metal"
  },
  "keywords": "composite inspection, delamination, NAS 410, OEM specification, ultrasonic composite"
};

export default function ArticlePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-slate prose-lg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1>Why Composite Inspection Records Are Harder Than Metal Records</h1>
      <p className="text-slate-500 text-base">By Ravi Deshmukh, ASNT NDT Level III · 6 July 2026</p>
      <div dangerouslySetInnerHTML={{ __html: "<p>Inspecting composites is technically harder than inspecting metal — higher and anisotropic attenuation, defect types that produce no surface evidence, and structures that cannot be assumed homogeneous. Less discussed is that recording composite inspection is harder too, and for a reason that has nothing to do with the physics.</p>\n\n      <h2>Acceptance criteria are programme-specific</h2>\n      <p>In pressure equipment, acceptance criteria come from the construction code — ASME Section VIII, B31.3, AWS D1.1. They are stable, public and shared across clients. In aerospace composites, acceptance criteria come from the OEM process specification for that part. The same 12 mm delamination can be acceptable on one programme and rejectable on another, and both dispositions are correct.</p>\n      <p>The consequence for records is direct: a composite inspection record that does not cite the specification and revision applied is not merely incomplete, it is uninterpretable. A reviewer cannot determine whether the disposition was right without knowing which rule set was in force.</p>\n\n      <h2>What a defensible record contains</h2>\n      <ul>\n        <li>The part number and revision, because the layup — and therefore the reference standard — changes with it.</li>\n        <li>The technique sheet revision, and the reference standard used, identified by serial rather than by type.</li>\n        <li>The operator's NAS 410 or EN 4179 qualification state as at the date of examination, not as at today.</li>\n        <li>Equipment and probe calibration status covering the examination date.</li>\n        <li>The specification and revision providing the acceptance criteria, and the clause applied to the disposition.</li>\n      </ul>\n\n      <h2>Why it is usually the reference standard that trips people</h2>\n      <p>Composite reference standards represent a specific layup and are consumed by wear and handling. A record identifying the reference standard by type rather than serial cannot demonstrate that the standard used was itself within its verification interval — and a reviewer who notices will discount the sensitivity setting, and with it the examination.</p>\n\n      <h2>The organisational fix</h2>\n      <p>All of these are structured data rather than prose, which means the practical solution is to stop treating the inspection record as a document. Systems that hold the dataset separately from the report — and bind qualification, calibration and specification revision to it automatically — make composite records defensible without adding work at the part. That distinction, and the eleven capabilities it depends on, is set out in this <a href=\"https://atlantisndt.com/ndt-inspection-software\" target=\"_blank\" rel=\"noopener\">guide to what NDT inspection software actually has to do</a>.</p>\n      <p>For the technical side — method selection across ultrasonic, thermography, bond testing and shearography for delamination, disbond, porosity and barely visible impact damage — the corresponding <a href=\"https://atlantisndt.com/blog/aerospace-composite-inspection-ndt-methods-guide\" target=\"_blank\" rel=\"noopener\">aerospace composite inspection method comparison</a> covers where each method earns its place.</p>" }} />
    </article>
  );
}
