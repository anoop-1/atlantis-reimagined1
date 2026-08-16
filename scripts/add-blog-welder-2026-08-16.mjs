/**
 * T3 — the welder career-switch post — 2026-08-16.
 * ─────────────────────────────────────────────────────────────────────────────
 * The query "can a welder with no college degree realistically become a
 * certified ndt tech" earns 35 impressions at p49.7 with ONE competing page
 * (a poor match). Adjacent harvest queries with no owner: "what's the easiest
 * api inspection certification to get for a welder…" (32i p66), "aws cwi
 * versus asnt ndt level ii for a journeyman welder" (7i p11.7) — a coherent
 * career-switcher persona nothing on the site addresses head-on.
 *
 * Checked against all 737 posts: `no-experience-required` covers entering with
 * NO background; this one is the opposite — a reader with five-plus years of
 * directly relevant trade knowledge asking how much of it transfers. §25.4
 * snippet form: the query verbatim as the opening h2, 40–55w answer first.
 * No invented hour counts (§35.1). No pricing (§18).
 */

const POST = {
  id: 1145,
  title: 'Can a Welder Become a Certified NDT Tech Without a Degree? Yes — Here Is the Actual Route',
  slug: 'welder-to-ndt-technician-no-degree-path',
  date: 'August 2026',
  author: 'Atlantis NDT',
  category: 'Training & Certification',
  metaDescription: 'A welder with no college degree can absolutely become a certified NDT technician — no US NDT certification requires a degree. What transfers from welding, what must be learned, and the CWI-vs-NDT fork.',
  snippet: 'No NDT certification in the United States requires a college degree. For a welder, the real questions are what transfers, what must be learned fresh, and whether CWI or NDT is the better fork.',
  content: `<h2>Can a welder with no college degree realistically become a certified NDT tech?</h2>
<p>Yes — and more realistically than almost any other trade. No US NDT certification requires a college degree: under SNT-TC-1A the requirements are training hours, documented supervised experience, examinations and a vision test, all achievable while employed. A welder starts with the single most valuable asset in weld inspection — knowing how defects are actually made.</p>

<h2>What transfers from welding — more than you think</h2>
<p>NDT examines welds more than any other product form, and the examiner who has <em>made</em> the defect finds it faster. Lack of fusion, undercut, porosity clusters, crater cracks, slag lines — a welder knows which joint configurations produce them, which positions make them likely, and what a rushed root pass looks like from the inside. That intuition is what Level II judgment is built from, and candidates without a trade background take years to develop it.</p>
<p>Procedure discipline transfers too. A welder who has worked to a WPS understands qualified procedures, essential variables and why deviation is forbidden — which is exactly how NDT procedures work. So does code exposure: if you have welded to <a href="/blog/aws-d1-1-weld-acceptance-criteria-comprehensive-guide">AWS D1.1</a> or ASME IX, you already know the acceptance-criteria world your future examinations live in.</p>

<h2>What does not transfer — learn these fresh</h2>
<p>The physics is new: ultrasound propagation, radiation interaction, magnetic flux behaviour, capillary action. It is teachable — the training-hours requirement exists precisely to teach it — but do not expect trade experience to shortcut the theory examination. Documentation habits are also different in kind: an inspector's product IS the record, and the evidence chain matters as much as the finding. And impartiality is its own skill — you will sometimes reject a colleague's weld, and the job is to be right, not popular.</p>

<h2>The route, step by step</h2>
<p><strong>Pick the first method for the market you are already in.</strong> For a structural welder that is usually VT then MT — visual inspection is judged against the codes you already weld to, and MT finds the surface defects you already understand. For a pipe welder heading toward plant work, VT then UT is the stronger long-term stack — <a href="/blog/which-ndt-method-should-you-learn-first">the method-order trade-offs</a> in full.</p>
<p><strong>Get the training hours.</strong> Delivered by an employer's programme, an <a href="/ndt-school">NDT school</a>, or on-site training like Atlantis delivers. Hours per method and level are set by the employer's Written Practice — the document that will govern your certification — so a specific universal number would be wrong to print.</p>
<p><strong>Accumulate supervised experience.</strong> This is the real timeline-setter, and it favours the employed: a welder already inside a fab shop or plant can often log experience in a trainee role while still earning. The <a href="/ndt-level-1-training">Level I</a> and <a href="/ndt-level-2-training">Level II</a> pages carry the requirements end to end.</p>
<p><strong>Pass the examinations</strong> — general (theory), specific (your employer's procedures), practical (on real specimens, where your hands are your advantage).</p>

<h2>The fork every welder asks about: CWI or NDT Level II?</h2>
<p>They are different jobs. A <strong>CWI</strong> (AWS Certified Welding Inspector) is a welding-quality generalist: procedures, welder qualifications, visual acceptance — the natural fork for someone who wants to stay in the welding world with authority over it. An <strong>NDT Level II</strong> is a method specialist who examines far more than welds: castings, forgings, corrosion, in-service damage. NDT stacks methods over a career and reaches into <a href="/blog/api-570-inspector-salary-2026-by-region-experience">in-service inspection</a>, where the API codes take over. Many inspectors eventually hold both; if you must choose one first, choose by where you want to work in ten years, not by which examination looks easier this year — and read <a href="/blog/accepting-ndt-certification-in-lieu-writing-policy">how employers treat the two scopes</a> before assuming either substitutes for the other.</p>

<h2>What it pays off in</h2>
<p>The <a href="/blog/ndt-salary-guide-2026-global">salary guide</a> carries the bands; the short version is that a multi-method Level II out-earns most welding positions with less physical wear, and the ceiling — <a href="/asnt-level-iii-training">Level III</a> — is a career welders reach regularly. Veterans coming through a welding rating should also read <a href="/blog/veterans-transitioning-into-ndt">the military-to-NDT route</a>, which overlaps this one.</p>
<p>Atlantis delivers method training on-site under ASNT Level III oversight — <a href="/training">ask about a route in</a>, whether you are one welder or a shop qualifying a crew.</p>`,
};

export function getWelderPost() { return POST; }

/** Inbound links — same commit (§34.5). Sources hold the career-switch demand today. */
const INBOUND = [
  ['/blog/aws-d1-1-weld-acceptance-criteria-comprehensive-guide', 'From making welds to judging them',
    `Welders who know these acceptance criteria from the torch side are closer to inspection work than they think — <a href="/blog/welder-to-ndt-technician-no-degree-path">the welder-to-NDT route, no degree required</a>.`],
  ['/blog/ndt-technician-workforce-shortage-what-helps', 'The nearest untapped talent pool',
    `The fastest credible entrants are working welders — <a href="/blog/welder-to-ndt-technician-no-degree-path">what actually transfers from welding into NDT</a> makes the case for recruiting from the trade.`],
  ['/blog/veterans-transitioning-into-ndt', 'Coming through a welding rating',
    `Veterans whose service work was welding should also read <a href="/blog/welder-to-ndt-technician-no-degree-path">the welder-specific route into NDT</a> — the two paths overlap and stack.`],
  ['/ndt-level-1-training', 'Entering from a trade',
    `Welders, machinists and pipefitters carry the most transferable background into Level I — <a href="/blog/welder-to-ndt-technician-no-degree-path">what transfers from welding and what must be learned fresh</a>.`],
  ['/visual-testing-training', 'The welder’s natural first method',
    `VT is where trade welders enter inspection — <a href="/blog/welder-to-ndt-technician-no-degree-path">the full welder-to-NDT route</a> explains why it comes first and what follows.`],
];

export function applyWelderPostInbound(routes, append) {
  const byPath = new Map(routes.map((r) => [r.path, r]));
  const out = { applied: 0, missing: [] };
  for (const [path, heading, sentence] of INBOUND) {
    const r = byPath.get(path);
    if (!r) { out.missing.push(path); continue; }
    append(r, `
    <section aria-label="${heading.replace(/"/g, '&quot;')}">
      <h2>${heading}</h2>
      <p>${sentence}</p>
    </section>`);
    out.applied++;
  }
  return out;
}

export function assertNoPricesInWelderPost() {
  const blob = JSON.stringify(POST) + JSON.stringify(INBOUND);
  const hits = blob.match(/[$£€₹]\s?\d|per (day|hour|student)|tuition/gi);
  if (hits) throw new Error(`welder post contains pricing: ${[...new Set(hits)].join(', ')}`);
}

export function assertWelderPostLinks(routes) {
  const paths = new Set(routes.map((r) => r.path));
  const bad = [];
  for (const m of POST.content.matchAll(/href="(\/[^"#?]*)"/g)) {
    if (!paths.has(m[1])) bad.push(`post -> ${m[1]}`);
  }
  for (const [from] of INBOUND) if (!paths.has(from)) bad.push(`source missing: ${from}`);
  if (bad.length) throw new Error(`welder post broken links: ${bad.join(', ')}`);
}
