import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Guided Wave Screening Program Design for Long Pipelines",
  description: "A field-oriented walkthrough of guided wave screening for NDT Level III engineers, with decision matrices, code references, and the documentation auditors ...",
  keywords: ["guided wave screening","LRUT","long pipeline inspection","screening NDT"],
  alternates: { canonical: "https://advanced-ndt-techniques.vercel.app/deepdives/guided-wave-screening-program-design" },
  openGraph: {
    title: "Guided Wave Screening Program Design for Long Pipelines",
    description: "A field-oriented walkthrough of guided wave screening for NDT Level III engineers, with decision matrices, code references, and the documentation auditors ...",
    type: 'article',
    url: "https://advanced-ndt-techniques.vercel.app/deepdives/guided-wave-screening-program-design",
    siteName: "Advanced NDT Techniques",
    locale: 'en_US',
    publishedTime: "2025-02-22T00:00:00.000Z",
    modifiedTime: "2025-02-22T00:00:00.000Z",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Guided Wave Screening Program Design for Long Pipelines",
  "description": "A field-oriented walkthrough of guided wave screening for NDT Level III engineers, with decision matrices, code references, and the documentation auditors ...",
  "publisher": {
    "@type": "Organization",
    "name": "Atlantis NDT",
    "url": "https://advanced-ndt-techniques.vercel.app"
  },
  "datePublished": "2025-02-22T00:00:00.000Z",
  "dateModified": "2025-02-22T00:00:00.000Z",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://advanced-ndt-techniques.vercel.app/deepdives/guided-wave-screening-program-design"
  },
  "keywords": "guided wave screening, LRUT, long pipeline inspection, screening NDT"
};

export default function ArticlePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-slate prose-lg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="breadcrumb text-sm text-gray-500 mb-6">
        <a href="/" className="hover:underline">Home</a>
        <span> / </span>
        <a href="/deepdives" className="hover:underline">deepdives</a>
        <span> / </span>
        <span>Guided Wave Screening Program Design for Long Pipelines</span>
      </nav>
      <h1>Guided Wave Screening Program Design for Long Pipelines</h1>
      <p className="text-sm text-gray-500 mb-8" data-legacy-reviewed="growth-v1">Published by Atlantis NDT. Educational planning guidance; confirm technical requirements with the responsible authority.</p>
      <div dangerouslySetInnerHTML={{ __html: `<p>This article walks through the practical decisions NDT Level III engineers, advanced technique specialists need to make when working on advanced NDT techniques. The goal is not theory — it is the kind of working knowledge an experienced inspector or engineer would share over a coffee on a job site, with enough rigor to point back to code and standard references when those decisions get challenged in audit. Throughout the piece we focus on the parts of guided wave screening that turn into real schedule or budget pain when they go wrong.</p><h2>Why this comes up so often in the field</h2>
<p>Ask any NDT Level III engineers how often guided wave screening drives schedule pain and you will hear the same answer: more often than the project plan ever assumes. Part of the reason is that this kind of inspection sits at the intersection of multiple owners — operations, integrity, fabrication, and QA — and the ownership boundaries are rarely clean. When a problem surfaces, it is usually too late to plan; the team is already in execution mode and looking for guidance.</p>
<p>Use the current governing documents, customer requirements and approved procedures. The suggestions in this article are discussion prompts, not clause interpretations or a record of field validation.</p><h2>Scope of this guide</h2>
<p>We cover four things explicitly:</p>
<ul>
<li><strong>The decision points</strong> that drive most guided wave screening programs disputes between QA, integrity, and operations.</li>
<li><strong>The minimum data</strong> a defensible decision needs — what to record, in what format, and where it lives in the long term.</li>
<li><strong>Common planning gaps</strong> to consider when teams skip steps under schedule pressure.</li>
<li><strong>Reference standards</strong> that translate between geographies (US, EU, Middle East, Asia-Pacific).</li>
</ul><h2>The core decision matrix</h2>
<p>Use the following questions to prepare a technical review. They do not select a method, authorize work or establish acceptance.</p>
<table className="prose-table"><thead><tr><th>Decision area</th><th>Question for the responsible reviewer</th></tr></thead><tbody><tr><th>Interpretation practice</th><td>Does the feedback explain the reasoning, or only reveal a preferred answer?</td></tr><tr><th>Acquisition learning</th><td>What must still be practiced with physical equipment and representative specimens?</td></tr><tr><th>Institutional use</th><td>Can the instructor distinguish completion of an exercise from demonstrated practical competence?</td></tr></tbody></table>
<p>The discipline that makes this matrix actually work is forcing each row to be answered in writing — not in a verbal handoff at the morning meeting.</p><h2>Technique selection in practice</h2>
<p>The textbook approach to guided wave screening usually points engineers at one or two techniques. The field reality is messier; the technique that ranks best on a comparison chart is often not the one that fits the access, the schedule, or the inspector skill mix actually available on the day. The following prompts distinguish different review questions.</p>
<h3>Define the examination question</h3><p>State the condition of interest and the evidence required by the technical reviewer. An examination with no reported indication does not prove the absence of every possible condition. Record coverage and limitations alongside the result.</p>
<h3>Define follow-up for uncertain findings</h3><p>Agree how uncertain observations and coverage limitations will be reviewed. Screening results may require further examination or assessment; the appropriate response depends on the application and governing programme.</p>
<h3>Connect repair and examination requirements</h3><p>Identify the approved repair documents, required examinations and acceptance responsibilities. The applicable programme and authorized reviewer determine what evidence is needed before the next decision.</p><h2>The data the audit will ask for</h2>
<p>Auditors do not argue with conclusions; they argue with the evidence behind them. For any defensible guided wave screening report, the evidence packet needs to include at minimum:</p>
<ul>
<li>The qualified procedure (revision, approval signatures, applicable code edition).</li>
<li>The personnel certification records (level, method, and currency).</li>
<li>The calibration records for the day of inspection (block IDs, calibration block traceability).</li>
<li>The raw data set, archived in a format that can be re-evaluated by an independent reviewer years later.</li>
<li>The decision rationale — written, dated, and signed by the responsible Level III or PE.</li>
</ul>
<p>Ask the quality owner which records and approvals the applicable programme requires. A short rationale can help explain a decision, but it is not a substitute for required evidence or review.</p><h2>Common pitfalls (and how to avoid them)</h2>
<ul>
<li><strong>Reusing a procedure without a delta-review.</strong> The procedure was written for an original scope; the new scope has different geometry, different access, or different acceptance criteria. Even one of those differences can invalidate the procedure for the new application.</li>
<li><strong>Skipping the calibration block check.</strong> Reference standards and equipment checks must satisfy the applicable procedure; their status should be documented rather than assumed.</li>
<li><strong>Letting one inspector own the data interpretation alone.</strong> Interpretation of guided wave screening should always have a second reviewer for any indication that drives a fitness or repair decision.</li>
<li><strong>Treating the report as the deliverable.</strong> The deliverable is the decision the report enables. A well-formatted report that does not let the asset owner act is a failure.</li>
</ul><h2>Frequently asked questions</h2>
<h3>How long does this work typically add to a turnaround schedule?</h3>
<p>Schedule impact depends on preparation, access, examination scope, findings and review availability. Request a project-specific estimate and make the unresolved dependencies visible; this guide provides no universal duration.</p>
<h3>Who signs the decision?</h3>
<p>The governing programme assigns technical review, acceptance and operating decisions. Record those roles explicitly; NDT interpretation and engineering assessment can require different authorities.</p>
<h3>What changes when the asset is in a regulated environment?</h3>
<p>Regulatory and customer requirements can affect technical scope, qualifications, approvals and records. Confirm the actual requirements with the responsible programme owner before work begins.</p><h2>Closing thoughts</h2>
<p>If we had to summarize guided wave screening in one line it would be this: <strong>the technique matters less than the decision discipline around it.</strong> Teams that consistently choose the right technique are usually teams that have invested in writing down their decision rationale, qualifying their procedures with care, and keeping their inspectors current. Equipment and software change every few years; that discipline does not.</p><h3>How guided wave screening fits into the bigger picture</h3>
<p>It is easy to study guided wave screening as an isolated subject — most courses do exactly that — but the engineering value only appears when you place guided wave screening alongside the other levers your program already uses. Practical teams often cross-reference <a href="https://www.asnt.org/" rel="noopener nofollow">ASNT (American Society for Nondestructive Testing)</a> to align their practice with what is already published in the wider community. For most NDT Level III engineers the question is not "what is guided wave screening?" but "where does guided wave screening sit in our existing program, and what does it replace or complement?". That framing usually changes the procurement conversation, the training conversation, and the audit conversation in the same direction.</p>
<p>If your team is being asked to justify investment in guided wave screening, the easiest place to start is a one-page side-by-side: current state, gap, expected uplift, and the specific risk ranking that improves. The numbers do not have to be precise; they have to be defensible.</p>
<h3>Operator behaviours that actually move the needle on LRUT</h3>
<p>Consider a documented decision rationale, appropriate technical review and an open-item register. The programme owner should define when these controls apply and how their effectiveness will be checked. No comparative performance result is claimed here.</p>
<p>Define the required review and escalation arrangements in the approved process. Informal cross-checking does not replace assigned technical authority.</p>
<h3>Documentation patterns worth borrowing</h3>
<p>Useful documentation questions to discuss with the receiving reviewer include:</p>
<ul>
<li>A short narrative section at the front of every report explaining the inspection objective in plain English. The narrative helps a receiving reviewer understand the purpose of the examination.</li>
<li>A consistent indication-numbering scheme that survives across multiple inspection campaigns, so an indication found in 2024 can be tracked through 2026 and 2028 without renaming.</li>
<li>An attached "open items" list with target dates, ownership, and the trigger that closes each item. The register should make unresolved questions and their owners visible.</li>
</ul>
<p>If your current report template is missing one of those, that is the easiest documentation improvement you can make this quarter, and it costs nothing beyond a template update.</p>

<h2>Related on Advanced NDT Techniques</h2>
<ul>
<li><a href="/deepdives/paut-vs-tofd-when-to-combine">PAUT vs TOFD: When to Combine vs When to Pick One</a></li>
<li><a href="/deepdives/eddy-current-array-for-heat-exchanger-tubes">Eddy Current Array for Heat Exchanger Tubes: A Field Workflow</a></li>
</ul>
` }} />
    </article>
  );
}
