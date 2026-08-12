#!/usr/bin/env node
/**
 * US strategic blog set — 2026-08-12 (second batch).
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY THESE SIX AND NOT MORE METHOD EXPLAINERS
 * A US query-gap pull (90d, country=usa, >=25 impr, best position >20, zero
 * clicks) returned 145 queries / 8,200 impressions — but almost every one
 * ALREADY has an owning page ranking deep. Eddy current, radiography, API 653,
 * heat exchanger tubes, CUI, aerospace composites: all covered, all an
 * authority problem rather than a content gap. Writing more explainers there is
 * cannibalisation (§25.2).
 *
 * What genuinely has no page is the BUYER'S DECISION, checked against all 726
 * existing posts:
 *   build in-house vs contract .......... 0 posts
 *   how to vet an NDT contractor ........ 0 posts (the one hit was ERP selection)
 *   US jurisdictional inspection ........ 1 post (NB-23 decoded), no buyer view
 *                                          — and "api 510 pressure vessel
 *                                          inspector versus a national board…"
 *                                          earns 51i at p31, so the intent is real
 *   turnaround from the contractor side . 2 posts, both operational not commercial
 *   liability / who is exposed .......... 0 posts
 *   US data-centre construction ......... 3 posts, all semiconductor/Korea
 *
 * These are also the decisions that precede a purchase, which matters because
 * USA is the only market that has ever produced a paying training customer
 * (memory: project_training_usa_only_paying_market).
 *
 * No pricing (§18). Every post carries outbound internal links, and inbound
 * links are placed in the companion module — §34.5, do not ship orphans.
 */
import { readFileSync, writeFileSync } from 'fs';

const P = 'src/data/blogs.json';
const raw = readFileSync(P, 'utf8');
const NL = raw.includes('\r\n') ? '\r\n' : '\n';
const blogs = JSON.parse(raw);
const existing = new Set(blogs.map((b) => b.slug));
const maxId = blogs.reduce((m, b) => Math.max(m, Number(b.id) || 0), 0);

const POSTS = [
  {
    slug: 'build-in-house-ndt-team-vs-contracting-us',
    title: 'Building an In-House NDT Team vs Contracting It Out — The US Decision',
    category: 'Business & Operations',
    metaDescription: 'How US asset owners and fabricators should decide between developing in-house NDT capability and contracting it: the volume threshold, the hidden obligations of certifying your own people, and the hybrid most companies land on.',
    snippet: 'The question is rarely "which is cheaper". It is which obligations you are willing to own — and most companies discover those only after they have committed.',
    content: `<h2>The question behind the question</h2>
<p>Companies usually frame this as a cost comparison and then discover the comparison was never the point. Contracting buys a service. Building in-house buys a <em>programme</em> — a Written Practice, a Level III authority, examination records, calibration management, and the audit exposure that comes with certifying your own people. The right question is not which costs less this year; it is which set of obligations fits how your business actually runs.</p>

<h2>Where in-house genuinely wins</h2>
<p><strong>Continuous, predictable volume.</strong> If inspection work is happening most weeks at the same facility, an employed technician beats a mobilised one on cost and on familiarity — knowing the plant's equipment history is worth more than most owners credit.</p>
<p><strong>Response time as a production issue.</strong> Where waiting a day for a contractor stops a line or extends an outage, having the capability on site pays for itself in avoided downtime rather than in inspection savings.</p>
<p><strong>Retaining knowledge.</strong> Contractor crews rotate. Your own technicians accumulate a mental model of your equipment that never appears in a report and is genuinely valuable at the third repeat inspection.</p>

<h2>Where contracting genuinely wins</h2>
<p><strong>Method breadth you cannot justify employing.</strong> Encoded PAUT, TOFD, tube inspection and specialist techniques require equipment and current competence that intermittent use erodes. A technician who runs a technique twice a year is not competent in it, whatever the certificate says.</p>
<p><strong>Surge capacity.</strong> Turnarounds need many technicians for a few weeks. No sensible headcount plan covers the peak.</p>
<p><strong>Independence.</strong> Some clients, insurers and jurisdictions want the examination performed by a party that does not report to the operations manager whose schedule it might delay. This is not cynicism; it is why third-party inspection exists.</p>

<h2>The obligation most companies underestimate</h2>
<p>Certifying your own NDT personnel under SNT-TC-1A means <em>you</em> are the certifying body. You write and maintain the Written Practice, you need a Level III with real technical authority behind it, you administer and retain examinations, and you produce all of it when a client audits. Companies that budget for salaries and equipment and not for that programme end up with certified technicians and an indefensible programme — the worst of both. <a href="/blog/snt-tc-1a-employer-programme-us-guide">What running that programme actually involves</a>.</p>

<h2>The hybrid most companies land on — and why it works</h2>
<p>In-house Level II capability for the routine, high-frequency methods your equipment demands weekly; contracted specialists for advanced techniques and turnaround surges; and the Level III authority engaged rather than employed, because the role is continuous but the workload is not. That last piece is the one most often got wrong: companies either appoint a Level III who is too busy performing examinations to exercise the authority, or they have no Level III at all and discover it during an audit. <a href="/consulting/ndt-consulting-level-iii">How outsourced Level III authority works</a>.</p>

<h2>A test you can apply this week</h2>
<p>Count the inspection days you bought last year, by method. Any method with continuous demand is a candidate for in-house. Any method below that line stays contracted — and the technician you were about to hire for it would have spent most of the year not doing it.</p>
<p>Related: <a href="/training">developing technicians in-house</a> · <a href="/blog/us-ndt-inspection-services-market-structure">how the US contractor market is structured</a> · <a href="/blog/ndt-technician-workforce-shortage-what-helps">the workforce constraint behind both options</a>.</p>`,
  },
  {
    slug: 'how-to-vet-an-ndt-contractor-us-checklist',
    title: 'How to Vet an NDT Contractor in the US — What Actually Predicts Quality',
    category: 'Business & Operations',
    metaDescription: 'A buyer-side vetting guide for US asset owners selecting an NDT inspection contractor: the records to demand, the questions that separate capability from marketing, and the warning signs that appear before the problems do.',
    snippet: 'Certificates prove someone passed an exam. These are the checks that predict whether the work will hold up when it is questioned.',
    content: `<h2>Start with the records, not the capability statement</h2>
<p>Every contractor's brochure lists the same methods. What differs — and what predicts whether findings will survive scrutiny — is the state of their records. Ask for four things before the technical conversation:</p>
<p><strong>The Written Practice.</strong> Their actual document, not a reference to SNT-TC-1A. Read whether the hour and examination requirements have been engaged with or left at the published defaults, and check the named Level III is someone who can describe the programme.</p>
<p><strong>Personnel files for the crew they would assign.</strong> Not a summary — certifications with levels and expiry dates, vision records with dates, and documented experience hours. Ask specifically for the people who would work your site, because the crew that shows up is often not the crew in the proposal.</p>
<p><strong>Calibration evidence.</strong> Instrument certificates in date, and the daily verification checks their procedures require. Annual certificates alone tell you nothing about the day your job runs.</p>
<p><strong>A redacted sample report</strong> from work like yours. Look for whether findings are traceable to locations, technicians and instruments, and whether the evaluation cites the acceptance criteria it applied.</p>

<h2>Four questions that separate capability from marketing</h2>
<p><strong>"Who is your Level III and what did they approve most recently?"</strong> Hesitation here is the single most informative moment in the meeting.</p>
<p><strong>"How do you deliver data — PDF, or structured records our system can consume?"</strong> The answer predicts whether you can ever build a trend across campaigns, or whether each inspection is an isolated document.</p>
<p><strong>"What happens when your technician finds something outside the scope we contracted?"</strong> You want a contractor whose answer involves telling you immediately, not one whose answer involves a change order.</p>
<p><strong>"Show me a job where the finding was disputed."</strong> Every experienced contractor has one. How they describe it — records produced, technique defended, or blame relocated — tells you what happens when it is your asset.</p>

<h2>Warning signs that appear early</h2>
<p>A proposal that names no personnel. Equipment lists without probe and wedge detail for your geometry. Willingness to commit to a schedule before seeing the scope. Reports quoted in days when the crew size implies otherwise. And the quiet one: a contractor who never says no to a scope. Specialist work that a firm cannot actually staff gets subcontracted to someone you did not vet, under your contract, with your name on the finding.</p>

<h2>What to write into the contract</h2>
<p>Personnel qualification evidence on request throughout the contract, not just at award. Notification when assigned personnel change. Structured data delivery alongside the report. And the right to audit their records — rarely exercised, but its presence changes how records are kept.</p>
<p>Related: <a href="/blog/pipeline-audit-preparation-what-operators-check">what auditors check on a contractor</a> · <a href="/resources/client-audit-evidence-pack-checklist">the evidence-pack checklist</a> · <a href="/blog/us-ndt-inspection-services-market-structure">how the US contractor market splits</a> · <a href="/consulting">independent review of a contractor's programme</a>.</p>`,
  },
  {
    slug: 'us-pressure-equipment-jurisdiction-who-inspects-what',
    title: 'Who Actually Has Authority Over Pressure Equipment in the US',
    category: 'Compliance & Standards',
    metaDescription: 'How US pressure equipment inspection authority is really divided between the National Board, state and city jurisdictions, API certification and owner-user programmes — and why an API certificate alone does not always satisfy the law.',
    snippet: 'API 510 makes you a certified inspector. It does not, by itself, make you the authority in every US state — and the difference has caught competent inspectors out.',
    content: `<h2>Three systems that overlap and are frequently confused</h2>
<p><strong>The jurisdiction.</strong> Most US states — and a few cities — have boiler and pressure vessel laws administered by a chief inspector, and those laws decide what must be inspected, how often, and by whom. This is statute, not industry practice, and it varies by state.</p>
<p><strong>The National Board.</strong> Registers pressure equipment, commissions inspectors who work for jurisdictions and authorised inspection agencies, and publishes NBIC for in-service inspection, repair and alteration. A National Board commission is what lets an inspector act on the jurisdiction's behalf.</p>
<p><strong>API certification.</strong> An industry certification demonstrating competence against API 510, 570 or 653. Widely required by owners and contracts, and in some jurisdictions recognised for owner-user programmes — but it is not a commission from a jurisdiction.</p>

<h2>Where inspectors get caught out</h2>
<p>The common error is assuming an API certificate confers authority everywhere. In practice the jurisdiction decides who may perform the statutory inspection of a registered vessel, and depending on the state that may require a commissioned inspector rather than an API-certified one — or may accept an owner-user programme with API-certified inspectors, provided the programme itself is accepted. Two facilities in different states can run legitimately different arrangements for identical vessels.</p>
<p>The second error is treating an owner-user programme as automatic. Where states permit an owner to inspect its own equipment, that permission is typically conditional on a documented programme, qualified personnel and jurisdictional acceptance. It is a status you are granted, not a default you assume.</p>

<h2>What this means practically</h2>
<p><strong>For asset owners:</strong> confirm the requirement per state where you operate, not once at head office. A multi-state programme that assumes uniformity will be non-compliant somewhere. Where you run an owner-user programme, keep its acceptance documentation as carefully as the inspection records.</p>
<p><strong>For inspection contractors:</strong> know which of your scopes are statutory and which are owner-driven. They carry different qualification requirements and different consequences when a finding is contested.</p>
<p><strong>For inspectors:</strong> API certification is the foundation, and a National Board commission is a distinct and additional credential that opens work API certification alone does not. Whether pursuing it is worth your time depends entirely on whether you intend to perform statutory inspection.</p>

<h2>The unglamorous conclusion</h2>
<p>There is no single national answer, and any source telling you otherwise is simplifying something with legal consequences. The authoritative sources are the National Board's synopsis of state rules and the jurisdiction itself — check both, per state, and record what you were told.</p>
<p>Related: <a href="/blog/national-board-nb-23-inspection-code-2026-decoded">NBIC decoded</a> · <a href="/api-510-certification">API 510 certification</a> · <a href="/compare/api-510-vs-api-570">API 510 vs API 570</a> · <a href="/consulting">programme review and jurisdictional readiness</a>.</p>`,
  },
  {
    slug: 'ndt-liability-chain-who-is-exposed',
    title: 'The NDT Liability Chain — Who Is Actually Exposed When an Inspection Is Wrong',
    category: 'Compliance & Standards',
    metaDescription: 'When an examination misses something that later fails, responsibility distributes across technician, Level III, contractor and owner in ways most parties have not thought through. What the records decide, and how exposure is actually managed.',
    snippet: 'The question is never only "who was negligent". It is "what can each party produce" — and that is decided long before anything fails.',
    content: `<h2>Why this is worth thinking about before it happens</h2>
<p>Most inspection work is never questioned. When it is — a failure, an injury, an insurance dispute — the investigation follows a predictable path, and the parties who fare well are those whose records were in order on an ordinary day months earlier. Nobody assembles a defence after the event; they either have one or they do not.</p>

<h2>How responsibility distributes</h2>
<p><strong>The technician</strong> is answerable for performing the examination per the procedure and reporting what was found. The defence is the record: certification current at the time, instrument in calibration, procedure followed, findings documented with attribution. A technician with those things is in a strong position even if the flaw was genuinely undetectable.</p>
<p><strong>The Level III</strong> is answerable for the procedure and for the personnel qualification. If the technique could not reliably detect the flaw type that failed, the question moves to who wrote and approved it. This is the exposure Level IIIs most often have not considered — signing a Written Practice is signing for the competence of everyone certified under it.</p>
<p><strong>The contractor</strong> is answerable for who they assigned, whether that person was qualified for the scope, and whether their programme was what they represented at tender. Subcontracted crews do not transfer this; if your name is on the contract, the finding is yours.</p>
<p><strong>The owner</strong> is answerable for the inspection programme itself — whether the right equipment was inspected at the right interval by the right method, and whether findings were acted on. An excellent inspection whose recommendation nobody actioned moves exposure squarely back to the owner.</p>

<h2>The three failures that turn a defensible position into an indefensible one</h2>
<p><strong>A certification that lapsed before the examination.</strong> Administrative, fatal, and the most common finding of all — it converts a competence question into a compliance one, which is far harder to defend.</p>
<p><strong>Missing calibration evidence.</strong> If the instrument's status on the day cannot be shown, the data's reliability becomes arguable.</p>
<p><strong>Findings reported but not escalated.</strong> A recommendation buried in the body of a report that nobody read is a live dispute about whether it was communicated. Anything that changes the risk picture belongs where the reader cannot miss it, with a record of who received it.</p>

<h2>What actually reduces exposure</h2>
<p>Not disclaimers — records. Certification currency tracked so nothing lapses unnoticed. Calibration traceable per examination. Procedures under revision control with evidence people were trained on changes. Findings communicated in a way that leaves a trail. Every one of these is an operational discipline, which is why companies running one system of record are in a structurally better position than companies running six spreadsheets. <a href="/ndt-erp-solution">How that record-keeping is set up</a> · <a href="/blog/inspection-contractor-spreadsheets-to-system">what changes when you consolidate</a>.</p>
<p>This is general commentary on how responsibility typically distributes in inspection work, not legal advice — take questions about a specific matter to counsel in the relevant jurisdiction.</p>
<p>Related: <a href="/blog/how-to-vet-an-ndt-contractor-us-checklist">vetting a contractor's records</a> · <a href="/blog/snt-tc-1a-employer-programme-us-guide">the employer's certification obligations</a> · <a href="/consulting/ndt-consulting-level-iii">Level III authority and what it carries</a>.</p>`,
  },
  {
    slug: 'refinery-turnaround-ndt-what-contractors-must-deliver',
    title: 'What a US Refinery Turnaround Demands From an NDT Contractor',
    category: 'Industry Insights',
    metaDescription: 'Turnaround NDT judged from the planner’s side: mobilisation and qualification evidence, discovery-work capacity, reporting speed inside the critical path, and the failures that cost schedule.',
    snippet: 'Turnarounds are won and lost on logistics and reporting speed, not on technique. Here is what the planner is actually measuring you against.',
    content: `<h2>The planner's view of your crew</h2>
<p>A turnaround compresses a year of inspection into weeks, on a critical path where a day lost is expensive and visible. From the planner's side, an NDT contractor is judged on four things — and technique quality, while assumed, is not usually the differentiator.</p>

<h2>1. Mobilisation without administrative failure</h2>
<p>Dozens of technicians arriving with current certifications, vision records, site-specific safety training and contractor-portal clearance. The most common turnaround failure is not technical: it is a technician turned away at the gate because a record lapsed, on a day when that method was on the critical path. Contractors who track certification expiry against the turnaround calendar months ahead do not have this problem; those who check on mobilisation week reliably do.</p>

<h2>2. Capacity for discovery work</h2>
<p>Every turnaround finds things nobody planned for. When a vessel is opened and the condition is worse than expected, the scope expands mid-window and the contractor who can surge — additional crews, a different method, an advanced technique to characterise what conventional examination found — protects the schedule. The one who cannot forces a decision between waiting and accepting uncertainty, and neither is welcome at that stage.</p>

<h2>3. Reporting inside the critical path, not after it</h2>
<p>This is where contractors most often lose the next contract. If the repair decision needs the examination result and the report arrives two days later, the inspection did not serve the turnaround — it documented it. Findings must reach the planning team fast enough to influence what happens while scaffolding is still up. Contractors who capture data digitally at the equipment and report from it same-shift are structurally advantaged; those retyping field sheets in the evening are not. <a href="/best-ndt-reporting-software-2026">Why reporting speed is a systems question</a>.</p>

<h2>4. Records that close out the event</h2>
<p>When the unit restarts, the owner needs the complete evidence package — every examination, personnel qualifications, calibration certificates, findings and dispositions — for the jurisdiction, the insurer and the next turnaround's planning. Contractors who deliver this as an organised package within days are remembered; those who deliver it in fragments over weeks are remembered differently.</p>

<h2>What to fix before the next season</h2>
<p>Map certification expiries against next season's calendar now, not in the mobilisation week. Establish which advanced techniques you can actually staff at surge, and be honest about it at tender. Time your own report turnaround from probe-off to issued, because that number is what the planner experiences. And build the close-out package as the work happens rather than assembling it afterwards.</p>
<p>Related: <a href="/blog/turnaround-shutdown-inspection-planning-2026-decoded">turnaround inspection planning</a> · <a href="/ndt-erp-solution">the systems that make mobilisation and reporting reliable</a> · <a href="/blog/us-ndt-inspection-services-market-structure">how turnaround work is bought in the US</a> · <a href="/ndt-erp-houston">the Gulf Coast turnaround market</a>.</p>`,
  },
  {
    slug: 'ndt-for-us-data-center-construction',
    title: 'NDT in US Data-Centre Construction — What Actually Gets Inspected',
    category: 'Industry Insights',
    metaDescription: 'The inspection scope on hyperscale data-centre construction in the US: structural steel to AWS D1.1, mechanical cooling piping, generator and fuel systems, and why schedule pressure changes how QA has to work.',
    snippet: 'The fastest-moving construction sector in America has an inspection scope most NDT companies have never bid. Here is what it actually contains.',
    content: `<h2>Why this sector behaves differently</h2>
<p>Hyperscale data-centre construction moves faster than industrial work and is judged on energisation dates that do not move. That schedule pressure shapes everything about the inspection scope: the work is conventional, the volume is high, and the intolerance for documentation delay is greater than most contractors expect coming from plant work.</p>

<h2>What actually gets inspected</h2>
<p><strong>Structural steel.</strong> The largest single scope — moment connections, base plates and the long-span framing over data halls, examined visually and volumetrically to AWS D1.1 acceptance. High weld count, repetitive geometry, and acceptance criteria that vary with the connection's loading classification.</p>
<p><strong>Mechanical piping.</strong> Cooling systems are the sector's defining feature and its growing inspection load. Chilled water, condenser water and increasingly liquid-cooling distribution — welded piping to the governing code for the service class, with pressure testing and joint examination on the critical path to commissioning.</p>
<p><strong>Generator and fuel systems.</strong> Standby generation at scale brings fuel storage tanks, fuel piping and exhaust systems, each with its own code family — and tank work brings API-adjacent requirements into a construction project.</p>
<p><strong>Electrical support structures and anchorage.</strong> Equipment pads, seismic anchorage where applicable, and the embed and anchor verification that follows a design change late in the programme.</p>

<h2>What contractors get wrong on their first project</h2>
<p><strong>Underestimating documentation volume.</strong> Thousands of welds across a campus means the weld map and traceability discipline matters more than technique. Contractors who arrive with a plant-work mentality — thorough examination, leisurely paperwork — fall behind in the first month.</p>
<p><strong>Missing the commissioning interface.</strong> Inspection is not the last step; it feeds mechanical completion and turnover packages on a defined sequence. Findings that arrive after a system is turned over create rework nobody budgeted.</p>
<p><strong>Staffing for peak without planning the surge.</strong> These projects ramp hard. The crew that starts is a fraction of the crew at peak, and every additional technician needs qualification evidence the owner's QA will check.</p>

<h2>What wins repeat work</h2>
<p>Same-day reporting, because the schedule is the client's dominant concern; clean traceability from weld map to report, because turnover packages are audited; and the ability to add qualified crews without a qualification scramble. All three are back-office capabilities more than technical ones — which is why data-centre work rewards contractors whose records systems are in order. <a href="/ndt-erp-solution">The systems side</a> · <a href="/corporate-training/data-centers">training crews for this sector</a>.</p>
<p>Related: <a href="/blog/aws-d1-1-weld-acceptance-criteria-comprehensive-guide">AWS D1.1 acceptance criteria</a> · <a href="/blog/us-ndt-inspection-services-market-structure">where this fits in the US market</a> · <a href="/blog/how-to-vet-an-ndt-contractor-us-checklist">how owners vet contractors for this work</a>.</p>`,
  },
];

let added = 0;
for (const p of POSTS) {
  if (existing.has(p.slug)) { console.log(`  skip (exists): ${p.slug}`); continue; }
  blogs.push({
    id: maxId + added + 1,
    title: p.title,
    slug: p.slug,
    date: 'August 2026',
    author: 'Atlantis NDT',
    category: p.category,
    metaDescription: p.metaDescription,
    snippet: p.snippet,
    content: p.content.trim(),
  });
  added++;
  console.log(`  + ${p.slug}`);
}

const blob = POSTS.map((p) => p.content + p.title + p.metaDescription + p.snippet).join(' ');
const price = blob.match(/[$£€₹]\s?\d|per day|per hour|\/yr\b/gi);
if (price) throw new Error(`new blog copy contains pricing: ${[...new Set(price)].join(', ')}`);

writeFileSync(P, JSON.stringify(blogs, null, 2).split('\n').join(NL) + NL, 'utf8');
console.log(`\nadded ${added} · blogs.json now ${blogs.length} records · pricing gate clean`);
