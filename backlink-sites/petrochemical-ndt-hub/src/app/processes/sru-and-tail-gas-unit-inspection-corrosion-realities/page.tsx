import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "SRU and Tail Gas Unit Inspection: Corrosion Realities Most Plans Miss",
  description: "Practical guide for refinery / petrochemical inspection teams: how to apply SRU inspection in real inspection work, what auditors expect, and where most pr...",
  keywords: ["SRU inspection","sulfur recovery unit","tail gas unit","Claus unit corrosion"],
  alternates: { canonical: "https://petrochemical-ndt-hub.vercel.app/processes/sru-and-tail-gas-unit-inspection-corrosion-realities" },
  openGraph: {
    title: "SRU and Tail Gas Unit Inspection: Corrosion Realities Most Plans Miss",
    description: "Practical guide for refinery / petrochemical inspection teams: how to apply SRU inspection in real inspection work, what auditors expect, and where most pr...",
    type: 'article',
    url: "https://petrochemical-ndt-hub.vercel.app/processes/sru-and-tail-gas-unit-inspection-corrosion-realities",
    siteName: "Petrochemical NDT Hub",
    locale: 'en_US',
    publishedTime: "2026-05-06T00:00:00.000Z",
    modifiedTime: "2026-05-06T00:00:00.000Z",
    authors: ["Pia Lindqvist, AMPP-certified Coatings Inspector"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "SRU and Tail Gas Unit Inspection: Corrosion Realities Most Plans Miss",
  "description": "Practical guide for refinery / petrochemical inspection teams: how to apply SRU inspection in real inspection work, what auditors expect, and where most pr...",
  "author": {
    "@type": "Person",
    "name": "Pia Lindqvist, AMPP-certified Coatings Inspector"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Petrochemical NDT Hub Technical Committee",
    "url": "https://petrochemical-ndt-hub.vercel.app"
  },
  "datePublished": "2026-05-06T00:00:00.000Z",
  "dateModified": "2026-05-06T00:00:00.000Z",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://petrochemical-ndt-hub.vercel.app/processes/sru-and-tail-gas-unit-inspection-corrosion-realities"
  },
  "keywords": "SRU inspection, sulfur recovery unit, tail gas unit, Claus unit corrosion"
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
        <a href="/processes" className="hover:underline">processes</a>
        <span> / </span>
        <span>SRU and Tail Gas Unit Inspection: Corrosion Realities Most Plans Miss</span>
      </nav>
      <h1>SRU and Tail Gas Unit Inspection: Corrosion Realities Most Plans Miss</h1>
      <p className="text-sm text-gray-500 mb-8">By Pia Lindqvist, AMPP-certified Coatings Inspector &middot; Published 2026-05-06</p>
      <div dangerouslySetInnerHTML={{ __html: `<p>This article walks through the practical decisions refinery / petrochemical inspection teams, fixed-equipment engineers need to make when working on petrochemical & refinery NDT. The goal is not theory — it is the kind of working knowledge an experienced inspector or engineer would share over a coffee on a job site, with enough rigor to point back to code and standard references when those decisions get challenged in audit. Throughout the piece we focus on the parts of sru inspection that turn into real schedule or budget pain when they go wrong.</p><h2>Why this comes up so often in the field</h2>
<p>Ask any refinery / petrochemical inspection teams how often sru inspection drives schedule pain and you will hear the same answer: more often than the project plan ever assumes. Part of the reason is that this kind of inspection sits at the intersection of multiple owners — operations, integrity, fabrication, and QA — and the ownership boundaries are rarely clean. When a problem surfaces, it is usually too late to plan; the team is already in execution mode and looking for guidance.</p>
<p>The framing in this guide assumes you are the person who has to make a defensible call quickly, document it well, and live with the consequences. Where standards apply, we cite the specific clauses; where the standards leave a gap, we describe how leading operators close that gap in practice.</p><h2>Scope of this guide</h2>
<p>We cover four things explicitly:</p>
<ul>
<li><strong>The decision points</strong> that drive most sru inspection programs disputes between QA, integrity, and operations.</li>
<li><strong>The minimum data</strong> a defensible decision needs — what to record, in what format, and where it lives in the long term.</li>
<li><strong>Common failure modes</strong> we see when teams skip steps under schedule pressure.</li>
<li><strong>Reference standards</strong> that translate between geographies (US, EU, Middle East, Asia-Pacific).</li>
</ul><h2>The core decision matrix</h2>
<p>Below is the working matrix our team uses on day one of any sru inspection engagement. It is deliberately simple because complexity here costs more than it saves.</p>
<table class="prose-table">
<thead><tr><th>Question</th><th>If yes</th><th>If no</th></tr></thead>
<tbody>
<tr><td>Is the equipment in active service?</td><td>Plan on-stream NDT only; coordinate IOW windows.</td><td>Open the equipment; plan internal visual + targeted NDT.</td></tr>
<tr><td>Is the dominant damage mechanism general thinning?</td><td>Use UT scanning grids on selected CMLs.</td><td>Bias toward crack-detection methods (PAUT, MT, ECT).</td></tr>
<tr><td>Has the equipment had prior repairs?</td><td>Re-baseline with a corrosion map; re-evaluate fitness.</td><td>Use historical CML data; flag any anomalies above threshold.</td></tr>
<tr><td>Is access limited (insulation, refractory, internals)?</td><td>Screening method first (PEC, GWT, FMD).</td><td>Direct measurement methods.</td></tr>
</tbody>
</table>
<p>The discipline that makes this matrix actually work is forcing each row to be answered in writing — not in a verbal handoff at the morning meeting.</p><h2>Technique selection in practice</h2>
<p>The textbook approach to sru inspection usually points engineers at one or two techniques. The field reality is messier; the technique that ranks best on a comparison chart is often not the one that fits the access, the schedule, or the inspector skill mix actually available on the day. We walk through three patterns we see repeatedly.</p>
<h3>Pattern A: prove the absence of a known mechanism</h3>
<p>When the integrity model already predicts a specific damage mechanism — say HTHA in a hydroprocessing reactor or SCC in a chloride-bearing line — the inspection design needs to be written around <em>finding</em> that mechanism, not around generic surface coverage. Probability of detection (POD) becomes the design variable. Practical teams often cross-reference <a href="https://atlantisndt.com/ndt-reporting-software" rel="noopener">the inspection reporting software used in modern turnarounds</a> to align their practice with what is already published in the wider community.</p>
<h3>Pattern B: find what you are not expecting</h3>
<p>Screening campaigns are different. Their job is to flag anomalies you did not predict. POD is still important, but coverage and false-call rate matter more, because the field team has finite time to chase any flag the screening throws up. Practical teams often cross-reference <a href="https://www.imca-int.com/" rel="noopener nofollow">the IMCA technical resources for offshore work</a> to align their practice with what is already published in the wider community.</p>
<h3>Pattern C: requalify after a repair</h3>
<p>Post-repair inspection is the most procedural of the three patterns and the most likely to be weakened by schedule pressure. The required NDT is usually defined by the original construction code (ASME VIII, ASME XI, AWS D1.1, and so on), which is fine — but the decision about <em>how</em> to apply it under field conditions is rarely covered. Practical teams often cross-reference <a href="https://atlantisndt.com/digital-twin-vendor-comparison" rel="noopener">the digital twin vendor comparison</a> to align their practice with what is already published in the wider community.</p><h2>The data the audit will ask for</h2>
<p>Auditors do not argue with conclusions; they argue with the evidence behind them. For any defensible sru inspection report, the evidence packet needs to include at minimum:</p>
<ul>
<li>The qualified procedure (revision, approval signatures, applicable code edition).</li>
<li>The personnel certification records (level, method, and currency).</li>
<li>The calibration records for the day of inspection (block IDs, calibration block traceability).</li>
<li>The raw data set, archived in a format that can be re-evaluated by an independent reviewer years later.</li>
<li>The decision rationale — written, dated, and signed by the responsible Level III or PE.</li>
</ul>
<p>The last bullet is where most programs fail an audit. It does not take much: a one-paragraph note attached to the report explaining why the team chose method X with parameters Y is usually enough. Without it, the report stands alone and any later question becomes a guessing game.</p><h2>Common pitfalls (and how to avoid them)</h2>
<ul>
<li><strong>Reusing a procedure without a delta-review.</strong> The procedure was written for an original scope; the new scope has different geometry, different access, or different acceptance criteria. Even one of those differences can invalidate the procedure for the new application.</li>
<li><strong>Skipping the calibration block check.</strong> A worn or unverified calibration block is the single most common reason high-quality equipment generates poor data.</li>
<li><strong>Letting one inspector own the data interpretation alone.</strong> Interpretation of sru inspection should always have a second reviewer for any indication that drives a fitness or repair decision.</li>
<li><strong>Treating the report as the deliverable.</strong> The deliverable is the decision the report enables. A well-formatted report that does not let the asset owner act is a failure.</li>
</ul><h2>Frequently asked questions</h2>
<h3>How long does this work typically add to a turnaround schedule?</h3>
<p>It depends on how much of the work was pre-planned. Pre-planned screening can usually fit inside the existing critical path; reactive sru inspection after an unexpected finding can extend a turnaround by 24–96 hours per equipment item, sometimes more. The cheapest hour you will ever buy is the planning hour you spent six months earlier.</p>
<h3>Who signs the decision?</h3>
<p>Best practice is a Level III for the NDT decision and a fixed-equipment or integrity engineer (PE/CEng) for the fitness decision. The two are different decisions even when they share the same data.</p>
<h3>What changes when the asset is in a regulated environment?</h3>
<p>The data you keep, how long you keep it, and who can review it. The technical work usually does not change much — the documentation effort goes up significantly.</p><h2>Closing thoughts</h2>
<p>If we had to summarize sru inspection in one line it would be this: <strong>the technique matters less than the decision discipline around it.</strong> Teams that consistently choose the right technique are usually teams that have invested in writing down their decision rationale, qualifying their procedures with care, and keeping their inspectors current. Equipment and software change every few years; that discipline does not.</p>
<p>Practical teams often cross-reference <a href="https://atlantisndt.com/ndt-erp-ghana" rel="noopener">the ghana NDT ERP page</a> to align their practice with what is already published in the wider community.</p><h3>How SRU inspection fits into the bigger picture</h3>
<p>It is easy to study SRU inspection as an isolated subject — most courses do exactly that — but the engineering value only appears when you place SRU inspection alongside the other levers your program already uses. Practical teams often cross-reference <a href="https://www.imca-int.com/" rel="noopener nofollow">the IMCA technical resources for offshore work</a> to align their practice with what is already published in the wider community. For most refinery / petrochemical inspection teams the question is not "what is SRU inspection?" but "where does SRU inspection sit in our existing program, and what does it replace or complement?". That framing usually changes the procurement conversation, the training conversation, and the audit conversation in the same direction.</p>
<p>If your team is being asked to justify investment in SRU inspection, the easiest place to start is a one-page side-by-side: current state, gap, expected uplift, and the specific risk ranking that improves. The numbers do not have to be precise; they have to be defensible.</p>
<h3>Operator behaviours that actually move the needle on sulfur recovery unit</h3>
<p>Three behaviours we see at high-performing operators consistently show up in sulfur recovery unit programs that are working: written rationale for every off-procedure decision; a standing peer-review for indications that drive a fitness call; and a quarterly close-out review where the integrity engineer and the inspection lead sit down with the raw data, not just the summary. None of these behaviours require new hardware. All three improve outcomes more than another tool purchase usually does.</p>
<p>What we do not see at high-performing operators is over-reliance on a single inspector or a single contractor. Cross-checking — even informally — is the cheapest insurance you can buy on a sulfur recovery unit program.</p>

<h2>Related on Petrochemical NDT Hub</h2>
<ul>
<li><a href="/processes/high-temperature-hydrogen-attack-htha-inspection-strategy">High Temperature Hydrogen Attack (HTHA): Inspection Strategy for Refineries</a></li>
<li><a href="/processes/fcc-unit-inspection-priority-equipment-and-damage-mechanisms">FCC Unit Inspection: Priority Equipment and Damage Mechanisms</a></li>
</ul>
` }} />
    </article>
  );
}
