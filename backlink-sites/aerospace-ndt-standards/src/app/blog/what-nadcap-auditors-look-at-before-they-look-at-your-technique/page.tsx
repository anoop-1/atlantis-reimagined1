import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "What Nadcap Auditors Look At Before They Look At Your Technique",
  description: "Technique quality is rarely where a Nadcap audit is lost. The findings cluster in personnel currency, process control and the ability to reconstruct a past inspection — all of which are records problems.",
  keywords: ["Nadcap","NAS 410","EN 4179","aerospace NDT","AC7114"],
  alternates: { canonical: "https://aerospace-ndt-standards.vercel.app/blog/what-nadcap-auditors-look-at-before-they-look-at-your-technique" },
  openGraph: {
    title: "What Nadcap Auditors Look At Before They Look At Your Technique",
    description: "Technique quality is rarely where a Nadcap audit is lost. The findings cluster in personnel currency, process control and the ability to reconstruct a past inspection — all of which are records problems.",
    type: 'article',
    url: "https://aerospace-ndt-standards.vercel.app/blog/what-nadcap-auditors-look-at-before-they-look-at-your-technique",
    siteName: "Aerospace NDT Standards",
    locale: 'en_US',
    publishedTime: "2026-07-08T00:00:00.000Z",
    modifiedTime: "2026-07-08T00:00:00.000Z",
    authors: ["Hélène Dupuis, NAS 410 Level 3"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What Nadcap Auditors Look At Before They Look At Your Technique",
  "description": "Technique quality is rarely where a Nadcap audit is lost. The findings cluster in personnel currency, process control and the ability to reconstruct a past inspection — all of which are records problems.",
  "author": {
    "@type": "Person",
    "name": "Hélène Dupuis, NAS 410 Level 3"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Aerospace NDT Standards",
    "url": "https://aerospace-ndt-standards.vercel.app"
  },
  "datePublished": "2026-07-08T00:00:00.000Z",
  "dateModified": "2026-07-08T00:00:00.000Z",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://aerospace-ndt-standards.vercel.app/blog/what-nadcap-auditors-look-at-before-they-look-at-your-technique"
  },
  "keywords": "Nadcap, NAS 410, EN 4179, aerospace NDT, AC7114"
};

export default function ArticlePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-slate prose-lg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1>What Nadcap Auditors Look At Before They Look At Your Technique</h1>
      <p className="text-slate-500 text-base">By Hélène Dupuis, NAS 410 Level 3 · 8 July 2026</p>
      <div dangerouslySetInnerHTML={{ __html: "<p>Suppliers preparing for a Nadcap NDT audit tend to over-prepare the technical demonstration and under-prepare the records. The distribution of findings suggests that is backwards.</p>\n\n      <h2>Personnel currency</h2>\n      <p>Under NAS 410 and EN 4179 the employer certifies against a written practice, with a designated Level 3, documented training and experience hours, and annual vision examinations. Findings cluster here for the same reason they cluster everywhere: the vision examination runs on a shorter cycle than the method certification it supports, and nothing in a typical process checks the two against each other at the moment work is assigned.</p>\n      <p>The structural fix is the same one used in the pressure-equipment world — make currency a condition of assignment rather than a report someone reviews monthly. Systems that <a href=\"https://atlantisndt.com/erp-modules/certification-tracking\" target=\"_blank\" rel=\"noopener\">track certification currency and block assignment when anything lapses</a> remove the failure mode instead of monitoring it.</p>\n\n      <h2>Process control on the technique sheet, not the procedure</h2>\n      <p>Procedures get controlled because everyone expects the auditor to ask for them. Technique sheets — the documents the operator actually follows at the part — frequently live in a shared folder, get copied and edited per job, and circulate in several inconsistent versions. An auditor who looks past the procedure index finds this quickly, and it undermines the controlled procedure above it.</p>\n\n      <h2>Reconstruction</h2>\n      <p>The question that decides many audits is not \"is your process controlled\" but \"show me this part's inspection from eighteen months ago and prove who performed it, what they were qualified for on that date, what equipment was used and whether it was in calibration\". Organisations holding current state only cannot answer, however good their current state is.</p>\n      <p>That is a data-model property rather than a diligence one: the qualification and calibration state has to be frozen onto the record at the time of examination. Retrospective reconstruction is possible from paper archives, but it is slow, incomplete and exactly the impression you do not want to create mid-audit. The general pattern — and why it matters commercially beyond aerospace — is set out in this piece on <a href=\"https://atlantisndt.com/inspection-management-software\" target=\"_blank\" rel=\"noopener\">holding inspection evidence in recoverable form</a>.</p>\n\n      <h2>A rehearsal that costs a day</h2>\n      <p>Pick three parts inspected in the last two years, one per method. Reconstruct each completely: operator, qualification state on that date, equipment and calibration status, technique sheet revision, acceptance criteria applied, disposition. Whatever takes more than a few minutes is a finding waiting to happen, and you have found it before the auditor did.</p>" }} />
    </article>
  );
}
