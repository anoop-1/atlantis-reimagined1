import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Class Survey NDT Scope: ABS vs DNV vs Lloyd's Register Side-by-Side",
  description: "Working notes for marine surveyors on class survey: how to choose the technique, document the decision, and survive the next audit.",
  keywords: ["class survey","ABS DNV LR","class society NDT","classification rules"],
  alternates: { canonical: "https://marine-offshore-ndt.vercel.app/offshore/class-survey-ndt-scope-abs-dnv-lloyd" },
  openGraph: {
    title: "Class Survey NDT Scope: ABS vs DNV vs Lloyd's Register Side-by-Side",
    description: "Working notes for marine surveyors on class survey: how to choose the technique, document the decision, and survive the next audit.",
    type: 'article',
    url: "https://marine-offshore-ndt.vercel.app/offshore/class-survey-ndt-scope-abs-dnv-lloyd",
    siteName: "Marine & Offshore NDT",
    locale: 'en_US',
    publishedTime: "2024-10-10T00:00:00.000Z",
    modifiedTime: "2024-10-10T00:00:00.000Z",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Class Survey NDT Scope: ABS vs DNV vs Lloyd's Register Compared",
  "description": "Working notes for marine surveyors on class survey: how to choose the technique, document the decision, and survive the next audit.",
  "publisher": {
    "@type": "Organization",
    "name": "Atlantis NDT",
    "url": "https://marine-offshore-ndt.vercel.app"
  },
  "datePublished": "2024-10-10T00:00:00.000Z",
  "dateModified": "2024-10-10T00:00:00.000Z",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://marine-offshore-ndt.vercel.app/offshore/class-survey-ndt-scope-abs-dnv-lloyd"
  },
  "keywords": "class survey, ABS DNV LR, class society NDT, classification rules"
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
        <a href="/offshore" className="hover:underline">offshore</a>
        <span> / </span>
        <span>Class Survey NDT Scope: ABS vs DNV vs Lloyd\'s Register Compared</span>
      </nav>
      <h1>Class Survey NDT Scope: ABS vs DNV vs Lloyd\'s Register Compared</h1>
      <p className="text-sm text-gray-500 mb-8" data-legacy-reviewed="growth-v1">Published by Atlantis NDT. Educational planning guidance; confirm technical requirements with the responsible authority.</p>
      <div dangerouslySetInnerHTML={{ __html: `<p>This article walks through the practical decisions marine surveyors, FPSO inspection leads, offshore integrity engineers need to make when working on marine and offshore NDT. The goal is not theory — it is the kind of working knowledge an experienced inspector or engineer would share over a coffee on a job site, with enough rigor to point back to code and standard references when those decisions get challenged in audit. Throughout the piece we focus on the parts of class survey that turn into real schedule or budget pain when they go wrong.</p><h2>Why this comes up so often in the field</h2>
<p>Ask any marine surveyors how often class survey drives schedule pain and you will hear the same answer: more often than the project plan ever assumes. Part of the reason is that this kind of inspection sits at the intersection of multiple owners — operations, integrity, fabrication, and QA — and the ownership boundaries are rarely clean. When a problem surfaces, it is usually too late to plan; the team is already in execution mode and looking for guidance.</p>
<p>Use the current governing documents, customer requirements and approved procedures. The suggestions in this article are discussion prompts, not clause interpretations or a record of field validation.</p><h2>Scope of this guide</h2>
<p>We cover four things explicitly:</p>
<ul>
<li><strong>The decision points</strong> that drive most class survey programs disputes between QA, integrity, and operations.</li>
<li><strong>The minimum data</strong> a defensible decision needs — what to record, in what format, and where it lives in the long term.</li>
<li><strong>Common planning gaps</strong> to consider when teams skip steps under schedule pressure.</li>
<li><strong>Reference standards</strong> that translate between geographies (US, EU, Middle East, Asia-Pacific).</li>
</ul><h2>The core decision matrix</h2>
<p>Use the following questions to prepare a technical review. They do not select a method, authorize work or establish acceptance.</p>
<table className="prose-table"><thead><tr><th>Decision area</th><th>Question for the responsible reviewer</th></tr></thead><tbody><tr><th>Survey requirements</th><td>Which examinations require coordination with a survey representative?</td></tr><tr><th>Access and execution</th><td>What dependencies could prevent the agreed examination coverage?</td></tr><tr><th>Evidence handover</th><td>Can the shore team identify the examined area and unresolved limitations?</td></tr></tbody></table>
<p>The discipline that makes this matrix actually work is forcing each row to be answered in writing — not in a verbal handoff at the morning meeting.</p><h2>Technique selection in practice</h2>
<p>The textbook approach to class survey usually points engineers at one or two techniques. The field reality is messier; the technique that ranks best on a comparison chart is often not the one that fits the access, the schedule, or the inspector skill mix actually available on the day. The following prompts distinguish different review questions.</p>
<h3>Define the examination question</h3><p>State the condition of interest and the evidence required by the technical reviewer. An examination with no reported indication does not prove the absence of every possible condition. Record coverage and limitations alongside the result.</p>
<h3>Define follow-up for uncertain findings</h3><p>Agree how uncertain observations and coverage limitations will be reviewed. Screening results may require further examination or assessment; the appropriate response depends on the application and governing programme.</p>
<h3>Connect repair and examination requirements</h3><p>Identify the approved repair documents, required examinations and acceptance responsibilities. The applicable programme and authorized reviewer determine what evidence is needed before the next decision.</p><h2>The data the audit will ask for</h2>
<p>Auditors do not argue with conclusions; they argue with the evidence behind them. For any defensible class survey report, the evidence packet needs to include at minimum:</p>
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
<li><strong>Letting one inspector own the data interpretation alone.</strong> Interpretation of class survey should always have a second reviewer for any indication that drives a fitness or repair decision.</li>
<li><strong>Treating the report as the deliverable.</strong> The deliverable is the decision the report enables. A well-formatted report that does not let the asset owner act is a failure.</li>
</ul><h2>Frequently asked questions</h2>
<h3>How long does this work typically add to a turnaround schedule?</h3>
<p>Schedule impact depends on preparation, access, examination scope, findings and review availability. Request a project-specific estimate and make the unresolved dependencies visible; this guide provides no universal duration.</p>
<h3>Who signs the decision?</h3>
<p>The governing programme assigns technical review, acceptance and operating decisions. Record those roles explicitly; NDT interpretation and engineering assessment can require different authorities.</p>
<h3>What changes when the asset is in a regulated environment?</h3>
<p>Regulatory and customer requirements can affect technical scope, qualifications, approvals and records. Confirm the actual requirements with the responsible programme owner before work begins.</p><h2>Closing thoughts</h2>
<p>If we had to summarize class survey in one line it would be this: <strong>the technique matters less than the decision discipline around it.</strong> Teams that consistently choose the right technique are usually teams that have invested in writing down their decision rationale, qualifying their procedures with care, and keeping their inspectors current. Equipment and software change every few years; that discipline does not.</p><h3>How class survey fits into the bigger picture</h3>
<p>It is easy to study class survey as an isolated subject — most courses do exactly that — but the engineering value only appears when you place class survey alongside the other levers your program already uses. Practical teams often cross-reference <a href="https://www.aws.org/standards" rel="noopener nofollow">the AWS standards catalog</a> to align their practice with what is already published in the wider community. For most marine surveyors the question is not "what is class survey?" but "where does class survey sit in our existing program, and what does it replace or complement?". That framing usually changes the procurement conversation, the training conversation, and the audit conversation in the same direction.</p>
<p>If your team is being asked to justify investment in class survey, the easiest place to start is a one-page side-by-side: current state, gap, expected uplift, and the specific risk ranking that improves. The numbers do not have to be precise; they have to be defensible.</p>
<h3>Operator behaviours that actually move the needle on ABS DNV LR</h3>
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
<h3>Procurement and contract considerations</h3>
<p>classification rules engagements have a recurring procurement pitfall: the scope of work is written in inspection-deliverable language ("ten welds inspected by PAUT"), and the contract success criteria are written in commercial language ("on time, on budget, no NCRs"). Neither captures the engineering outcome the asset owner actually needs, which is a defensible decision about fitness for service. Contracts that explicitly include a deliverable like "decision-grade report with Level III rationale signed and dated" align all three parties — owner, integrity engineer, and contractor — around the same outcome.</p>
<h3>Training and competency considerations</h3>
<p>Tooling improvements in class survey usually outpace inspector training by 18–24 months. Phased array systems, advanced eddy current arrays, and automated scanners are now common; structured training pathways for those tools are less common. The implication for hiring managers is straightforward: budget for technique-specific training as part of the equipment purchase, not as a separate line item to be defended later.</p>
<p>Competency on a written exam does not equal competency on a job site. The most reliable way to check applied competency is a witnessed scan of a known-flaw block, evaluated independently by a Level III who did not run the scan.</p>
<h3>How ABS DNV LR fits into the bigger picture</h3>
<p>It is easy to study ABS DNV LR as an isolated subject — most courses do exactly that — but the engineering value only appears when you place ABS DNV LR alongside the other levers your program already uses. Practical teams often cross-reference <a href="https://www.aws.org/standards" rel="noopener nofollow">the AWS standards catalog</a> to align their practice with what is already published in the wider community. For most marine surveyors the question is not "what is ABS DNV LR?" but "where does ABS DNV LR sit in our existing program, and what does it replace or complement?". That framing usually changes the procurement conversation, the training conversation, and the audit conversation in the same direction.</p>
<p>If your team is being asked to justify investment in ABS DNV LR, the easiest place to start is a one-page side-by-side: current state, gap, expected uplift, and the specific risk ranking that improves. The numbers do not have to be precise; they have to be defensible.</p>

<h2>Related on Marine & Offshore NDT</h2>
<ul>
<li><a href="/offshore/tanker-ballast-tank-inspection-coating-and-thickness">Tanker Ballast Tank Inspection: Coating, Thickness, and Step-Wash</a></li>
<li><a href="/offshore/jacket-platform-girth-weld-inspection-from-rope-access">Jacket Platform Girth Weld Inspection from Rope Access</a></li>
</ul>
` }} />
    </article>
  );
}
