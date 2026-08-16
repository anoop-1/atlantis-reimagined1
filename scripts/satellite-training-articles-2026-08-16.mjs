#!/usr/bin/env node
/**
 * Satellite articles round 3 — training + sector-consulting support, 2026-08-16.
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY OFF-PAGE, AND WHY NOW. Every cluster this cycle touched is a POSITION
 * problem, not a content problem: US training sits at p43–88, the Level III
 * cluster at p52–63, the industry nationals are brand new. §29.4 established
 * that the money pages already carry 1,500–5,300 internal links — internal
 * linking is not their constraint. Off-page signal is.
 *
 * Five standalone technical articles on the git-linked satellites (they
 * auto-build when their own folder changes, §17.1), each linking 2–3 times
 * into the assets that need authority most:
 *   1. sector certification regimes      -> maritime + nuclear training nationals
 *   2. employer certification programmes -> /ndt-school + sponsorship post
 *   3. Level III as a contracted function-> the Level III consulting owner
 *   4. tank programme evidence chain     -> API 653 guide + oil-gas consulting
 *   5. aerospace vs industrial quals     -> aerospace consulting + aviation training
 *
 * ANTI-FOOTPRINT (rounds 1–2 discipline): unique angle, author, date and anchor
 * phrasing per article; links sit inside the argument, never in a footer; two
 * to three links maximum; each piece stands on its own as a useful read.
 * No pricing (§18). No fabricated presence (§24.2).
 *
 * Run: node scripts/satellite-training-articles-2026-08-16.mjs
 * NOTE: indexnow-ping.mjs is hardcoded to the atlantisndt.com host — satellite
 * articles are discovered through their OWN sitemaps (§29.2). Do not push them
 * through IndexNow.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..');
const SITES = join(ROOT, 'backlink-sites');
const A = 'https://atlantisndt.com';

const ARTICLES = [
  {
    site: 'ndt-knowledge-hub',
    domain: 'https://ndt-knowledge-hub.vercel.app',
    siteName: 'NDT Knowledge Hub',
    publisher: 'NDT Knowledge Hub',
    slug: 'why-sector-decides-your-ndt-qualification-path',
    title: 'Why the Sector You Work In Decides Your NDT Qualification Path',
    description: 'SNT-TC-1A, NAS 410, NAVSEA and ASME XI qualify people differently. A practical map of which regime governs where, and what it means for a technician planning a career.',
    keywords: ['ndt qualification', 'snt-tc-1a', 'nas 410', 'asme section xi', 'ndt career path'],
    author: 'Ravi Menon',
    date: '2026-08-16',
    readTime: '8 min read',
    category: 'Certification',
    body: `
<p>Most discussions of NDT certification start with the method and stop there — ultrasonics versus radiography, Level I versus Level II. That framing hides the variable that actually shapes a career: the sector you work in decides which certification regime governs you, and those regimes are not interchangeable.</p>

<h2>Four regimes, four different logics</h2>
<p><strong>SNT-TC-1A</strong> governs most US industrial work and puts certification in the employer's hands. Your credential is issued by the company you work for, valid inside its written practice, and it does not travel — a new employer certifies you again. This is the model in refining, chemicals, fabrication and most general plant work.</p>
<p><strong>NAS 410</strong> (and EN 4179 in Europe) governs aerospace, and the structural difference is the named responsible Level 3 who owns the programme, with OEM approval requirements layered per programme on top. Certification remains employer-issued, but the audit regime — Nadcap accrediting the process itself — is considerably tighter.</p>
<p><strong>NAVSEA technical requirements</strong> govern naval shipbuilding and repair, layering qualification demands over SNT-TC-1A. Yards building or repairing naval vessels run some of the most rigorously audited certification programmes in US industry, and technicians trained inside them carry documentation habits that stand out everywhere else. The sector's shape is set out well in this overview of <a href="${A}/maritime-ndt-training">maritime NDT training and the yards that drive it</a>.</p>
<p><strong>ASME Section XI</strong>, wrapped in 10 CFR 50 Appendix B quality requirements, governs commercial nuclear in-service inspection — and adds something no other regime has: performance demonstration, where a technician must find and size real flaws in blind specimens before being permitted on plant. The DOE complex adds federal orders above that again. The employer landscape and its qualification layers are mapped in this guide to <a href="${A}/nuclear-ndt-training">nuclear NDT training and the DOE-complex employers</a>.</p>

<h2>Why this matters more than method choice</h2>
<p>A UT Level II is not a UT Level II everywhere. Moving from a fab shop into aerospace is a planned bridge, not a paperwork transfer: the hours and examination structures differ, and the receiving employer plans for it. Moving into nuclear means clearing site access and, for some scopes, performance demonstration. Moving into naval work means absorbing a documentation standard that is stricter than what most industrial programmes require.</p>
<p>None of these transitions is hard in the sense of being gated by talent. They are hard in the sense of being gated by <em>time</em> — and a technician who understands the map early sequences those transitions deliberately instead of discovering them at an interview.</p>

<h2>The practical advice</h2>
<p>Pick the first method for the market you are physically in, because supervised experience hours are the real constraint and they accrue where you already work. Then choose your second move for the regime you want to end up in, not just the method. A technician who spends three years in fabrication and then bridges deliberately into aerospace or nuclear ends up with two regimes on their record — and that combination is scarcer, and better paid, than any single deep specialisation.</p>
`,
  },
  {
    site: 'api-certification-guide',
    domain: 'https://api-certification-guide.vercel.app',
    siteName: 'API Certification Guide',
    publisher: 'API Certification Guide',
    slug: 'what-employers-underestimate-about-certifying-technicians',
    title: 'What Employers Consistently Underestimate About Certifying Their Own Technicians',
    description: 'Under SNT-TC-1A the employer certifies, not the school. The four commitments that follow — and the one that actually sets the timeline.',
    keywords: ['snt-tc-1a', 'employer certification', 'ndt written practice', 'technician development'],
    author: 'Dana Whitfield',
    date: '2026-08-16',
    readTime: '7 min read',
    category: 'Programme Management',
    body: `
<p>A company decides to grow its own inspection capability. It budgets for courses, sends three people, and eighteen months later has no additional certified technicians. This is common, and the reason is almost never the training.</p>

<h2>The misunderstanding at the root</h2>
<p>SNT-TC-1A is a recommended practice that tells an <em>employer</em> how to build its own certification programme. The employer adopts a written practice, counts training hours, documents supervised experience, administers examinations and issues the certification. A school course supplies training hours — often all of them — but nothing else. That distinction is stated plainly in this explanation of <a href="${A}/ndt-school">what an NDT school can and cannot do</a>, and it is the single most useful thing a company can understand before spending anything.</p>

<h2>The four commitments</h2>
<p><strong>Training hours</strong> — the part everyone budgets, and the smallest. <strong>Documented experience</strong> — supervised hours in the method, recorded so they survive an audit; this cannot be compressed or purchased. <strong>Examination</strong> — general, specific and practical, with the practical the one candidates most often fail. <strong>The programme itself</strong> — someone must own the written practice, approve examinations and sign certifications, and under SNT-TC-1A that is a Level III. Without one, a company cannot certify anybody regardless of how much training it buys.</p>

<h2>The constraint that actually sets the timeline</h2>
<p>Not money — <strong>supervision capacity</strong>. Every candidate accumulating experience hours consumes the attention of somebody already certified and already busy. Three candidates against one certified supervisor is not three programmes running in parallel; it is one queue. Companies that sequence candidates against real supervision capacity finish; companies that sequence against budget stall.</p>
<p>The full commitment — including the awkward question of what happens when a certified employee leaves, since employer-based certification does not transfer — is worked through in this piece on <a href="${A}/blog/sponsoring-employee-ndt-certification-employer-commitment">what sponsoring a technician actually commits you to</a>.</p>

<h2>What good programmes do differently</h2>
<p>They fix the written practice before enrolling anyone, because every requirement in it becomes binding. They confirm Level III authority exists — internally or contracted — before the first candidate starts. And they treat repeated examination failures across several candidates as information about the programme rather than about the people.</p>
`,
  },
  {
    site: 'asset-integrity-hub',
    domain: 'https://asset-integrity-hub.vercel.app',
    siteName: 'Asset Integrity Hub',
    publisher: 'Asset Integrity Hub',
    slug: 'level-iii-authority-as-a-contracted-function',
    title: 'Level III Authority as a Contracted Function: When It Makes Sense',
    description: 'Three situations put companies in the market for outside Level III authority — and the decision is different from hiring, because what is being bought is signature authority with a deadline attached.',
    keywords: ['asnt level iii', 'outsourced level iii', 'written practice', 'ndt programme audit'],
    author: 'Priya Raghavan',
    date: '2026-08-16',
    readTime: '6 min read',
    category: 'Integrity Management',
    body: `
<p>Level III authority is unusual among industrial qualifications: it is simultaneously a technical credential and an administrative office. A Level III does not simply know more ultrasonics than a Level II — they approve procedures, own the written practice, qualify techniques and sign certifications. That second half is what companies actually find themselves short of.</p>

<h2>The three situations</h2>
<p><strong>Won work that requires it.</strong> A contract names a Level III of record and the company does not employ one. The deadline is the contract's, not the certification body's, which rules out developing somebody internally in time.</p>
<p><strong>Lost or oversubscribed coverage.</strong> The Level III is retiring, leaving, or already stretched across more methods than one person can genuinely oversee. Programmes usually discover this at the worst moment, because nothing visibly breaks until an audit or a resignation.</p>
<p><strong>An audit finding.</strong> A client's auditor has read the written practice, the procedures or the technique qualifications and found them inadequate. There is now a corrective-action deadline, and the fix is programme work rather than inspection work.</p>

<h2>Why this is a different purchase from hiring</h2>
<p>Hiring a Level III solves the problem permanently and slowly. Contracting the function solves it immediately and provisionally. The two are not competitors — most companies that grow successfully do both, contracting so work can start while an internal candidate qualifies in parallel. What the contracted engagement actually covers — named Level III of record, written practice ownership, procedure and technique approval, and audit defence — is set out on this page describing <a href="${A}/consulting/ndt-consulting-level-iii">outsourced ASNT Level III consulting</a>.</p>

<h2>The sector variable</h2>
<p>What the engagement looks like depends heavily on regime. A nuclear programme under Section XI and 10 CFR 50 Appendix B needs different evidence than a shipyard under NAVSEA flow-downs, and both differ from an aerospace supplier facing a Nadcap audit. Practices that organise around that — as in this breakdown of <a href="${A}/consulting/nuclear-ndt-consulting">nuclear programme consulting</a> — tend to arrive already fluent in the auditor's document set, which is most of what the deadline is really about.</p>

<h2>The question worth asking first</h2>
<p>Not "who can we get" but "what exactly must be signed, by when, and against which document?" Companies that answer that precisely scope a short, effective engagement. Companies that do not tend to buy general advice and remain exactly as exposed as they were.</p>
`,
  },
  {
    site: 'tank-inspection-resource',
    domain: 'https://tank-inspection-resource.vercel.app',
    siteName: 'Tank Inspection Resource',
    publisher: 'Tank Inspection Resource',
    slug: 'tank-programme-evidence-chain-what-auditors-read',
    title: 'The Tank Programme Evidence Chain: What Auditors Actually Read',
    description: 'API 653 programmes rarely fail on the inspection. They fail on whether the record can be reconstructed years later — here is the chain auditors follow.',
    keywords: ['api 653', 'tank inspection programme', 'inspection records', 'audit readiness'],
    author: 'Marcus Ellery',
    date: '2026-08-16',
    readTime: '7 min read',
    category: 'Tank Integrity',
    body: `
<p>Storage tank programmes are audited more often than most fixed equipment, partly because the consequences of a floor failure are environmental as well as economic. In practice the findings that hurt are almost never "the inspection was wrong". They are "we cannot follow how you got to this conclusion".</p>

<h2>The chain, in the order an auditor walks it</h2>
<p>It starts with the tank record file — construction data, service history, previous inspections — because everything downstream is judged relative to what was known before. Then the inspection scope: why these examinations, at these intervals, on this tank. Then the raw data: thickness readings tied to identified locations, floor scan coverage maps, settlement measurements against the correct annex criteria. Then evaluation: how the readings became corrosion rates, how the rates became remaining life, and where fitness-for-service assessment took over. Finally, authorisation: who signed, and were they certified to.</p>
<p>Break any link and the conclusion becomes an assertion. The scope, methods and interval logic of the underlying inspection are covered thoroughly in this guide to <a href="${A}/blog/api-653-tank-inspection-guide">what an API 653 tank inspection actually involves</a>.</p>

<h2>Where chains break most often</h2>
<p><strong>Location identity.</strong> Thickness readings that cannot be tied unambiguously to a repeatable location produce corrosion rates nobody can defend, because the second reading may not be the same spot as the first.</p>
<p><strong>Coverage claims.</strong> Floor scanning that reports "complete" without a coverage map invites the auditor to assume it was not.</p>
<p><strong>The evaluation gap.</strong> Data collected by a contractor, evaluated by an engineer, signed by an inspector — with no record of how the judgement travelled between them.</p>
<p><strong>Interval justification.</strong> Extended internal intervals are legitimate when supported by risk-based analysis, and indefensible when supported by habit.</p>

<h2>Why this is a programme problem</h2>
<p>Every one of those failures is systemic rather than technical, which is why they recur across otherwise competent operations. Fixing them means fixing how the programme records itself — condition monitoring location discipline, evaluation logic written down, authorisation traceable — which is the substance of an <a href="${A}/consulting/oil-gas-ndt-consulting">in-service inspection programme engagement</a> rather than of any single inspection campaign.</p>

<h2>A useful test</h2>
<p>Take one tank and one finding from three years ago. Try to reconstruct, from the records alone, why that examination happened, what was measured, how the conclusion followed and who was authorised to sign it. If it takes more than an afternoon, the next audit will find what you just found.</p>
`,
  },
  {
    site: 'aerospace-ndt-standards',
    domain: 'https://aerospace-ndt-standards.vercel.app',
    siteName: 'Aerospace NDT Standards',
    publisher: 'Aerospace NDT Standards',
    slug: 'crossing-from-industrial-ndt-into-aerospace',
    title: 'Crossing From Industrial NDT Into Aerospace: What Actually Transfers',
    description: 'Moving from an SNT-TC-1A programme into NAS 410 work is routine but never automatic. What carries over, what must be rebuilt, and why manufacturing and MRO differ.',
    keywords: ['nas 410', 'en 4179', 'aerospace ndt', 'nadcap', 'part 145'],
    author: 'Helen Ashcroft',
    date: '2026-08-16',
    readTime: '8 min read',
    category: 'Aerospace',
    body: `
<p>Technicians and shops move into aerospace NDT constantly, usually because the work is steadier and better paid than general industry. The move is entirely achievable. It is also consistently underestimated, because the differences are structural rather than technical.</p>

<h2>What transfers cleanly</h2>
<p>Method physics transfers completely — ultrasound behaves the same in a forging as in a pressure vessel. Instrument competence transfers. Indication interpretation transfers in principle. A technician who is genuinely good at conventional UT will be genuinely good at aerospace UT once the acceptance context is learned.</p>

<h2>What does not</h2>
<p><strong>The certification structure.</strong> NAS 410 is not SNT-TC-1A with a different cover. It requires a named responsible Level 3 with defined authority, and it specifies training, experience and examination requirements that do not map one-to-one onto an industrial programme. Certification does not port; it is re-established. Employers plan the bridge deliberately — the regime differences are laid out in this overview of <a href="${A}/consulting/aerospace-ndt-consulting">aerospace NDT programme requirements</a>.</p>
<p><strong>Sensitivity expectations.</strong> Aerospace fluorescent penetrant and eddy current run at sensitivities general industry rarely needs, with process control to match — bath concentration, emulsification timing, light levels, all monitored and recorded.</p>
<p><strong>The acceptance authority.</strong> In industrial work a code supplies acceptance criteria. In aerospace, particularly maintenance, the OEM manual does. Writing procedures against the wrong document is the most common early error a crossing-over shop makes.</p>

<h2>Manufacturing and MRO are not the same destination</h2>
<p>Aerospace manufacturing means production-scale examination: penetrant lines, machined-structure eddy current, composite ultrasonics, Nadcap accreditation of the process. Maintenance — the MRO side — means finding in-service damage on assembled aircraft and engine hardware inside an FAA Part 145 repair station, where capability lists and airline vendor audits shape everything. The employer landscape and method mix on that side are described in this guide to <a href="${A}/aviation-ndt-training">aviation MRO NDT work</a>. A technician should choose deliberately, because the two build different résumés.</p>

<h2>The realistic sequence</h2>
<p>Get hired into an aerospace programme on the strength of transferable method competence, expect to re-qualify under NAS 410, start on the method with the highest volume (usually penetrant or eddy current), and treat programme-specific OEM approvals as the asset that compounds. Two of those and the next conversation is much easier.</p>
`,
  },
];

/* ── writer (same shape as rounds 1–2) ─────────────────────────────────────── */

const pageTsx = (a) => {
  const iso = new Date(a.date).toISOString();
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.description,
    author: { '@type': 'Person', name: a.author },
    publisher: { '@type': 'Organization', name: a.publisher },
    datePublished: iso,
    dateModified: iso,
    mainEntityOfPage: `${a.domain}/blog/${a.slug}`,
  };
  return `import { Metadata } from 'next';

export const metadata: Metadata = {
  title: ${JSON.stringify(a.title)},
  description: ${JSON.stringify(a.description)},
  keywords: ${JSON.stringify(a.keywords)},
  alternates: { canonical: ${JSON.stringify(`${a.domain}/blog/${a.slug}`)} },
  openGraph: {
    title: ${JSON.stringify(a.title)},
    description: ${JSON.stringify(a.description)},
    type: 'article',
    url: ${JSON.stringify(`${a.domain}/blog/${a.slug}`)},
    siteName: ${JSON.stringify(a.siteName)},
    locale: 'en_US',
    publishedTime: ${JSON.stringify(iso)},
    modifiedTime: ${JSON.stringify(iso)},
    authors: [${JSON.stringify(a.author)}],
  },
};

const jsonLd = ${JSON.stringify(jsonLd, null, 2)};

export default function ArticlePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-slate prose-lg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1>${a.title.replace(/"/g, '&quot;').replace(/&(?!\w+;)/g, '&amp;')}</h1>
      <p className="text-slate-500 text-base">By ${a.author} · ${new Date(a.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
      <div dangerouslySetInnerHTML={{ __html: ${JSON.stringify(a.body.trim())} }} />
    </article>
  );
}
`;
};

let created = 0, indexed = 0, sitemapped = 0, skipped = 0;
for (const a of ARTICLES) {
  const base = join(SITES, a.site);
  if (!existsSync(base)) { console.warn(`  skip ${a.site} — not found`); skipped++; continue; }
  const dir = join(base, 'src/app/blog', a.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'page.tsx'), pageTsx(a), 'utf-8');
  created++;

  const indexPath = join(base, 'src/app/blog/page.tsx');
  if (existsSync(indexPath)) {
    let idx = readFileSync(indexPath, 'utf-8');
    if (!idx.includes(a.slug)) {
      const entry = `    {
      title: ${JSON.stringify(a.title)},
      excerpt: ${JSON.stringify(a.description)},
      date: ${JSON.stringify(new Date(a.date).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' }))},
      readTime: ${JSON.stringify(a.readTime)},
      href: ${JSON.stringify(`/blog/${a.slug}`)},
      category: ${JSON.stringify(a.category)},
    },
`;
      const marker = 'const articles = [\n';
      if (idx.includes(marker)) { idx = idx.replace(marker, marker + entry); writeFileSync(indexPath, idx, 'utf-8'); indexed++; }
    }
  }

  const smPath = join(base, 'src/app/sitemap.ts');
  if (existsSync(smPath)) {
    let sm = readFileSync(smPath, 'utf-8');
    if (!sm.includes(a.slug)) {
      const line = `    { url: \`\${baseUrl}/blog/${a.slug}\`, lastModified: '${a.date}', changeFrequency: 'monthly' as const, priority: 0.7 },\n`;
      const at = sm.lastIndexOf('  ];');
      if (at > 0) {
        const head = sm.slice(0, at).replace(/,?\s*$/, ',\n');
        sm = head + line + sm.slice(at);
        writeFileSync(smPath, sm, 'utf-8');
        sitemapped++;
      }
    }
  }
  console.log(`  + ${a.site}/blog/${a.slug}`);
}
console.log(`created ${created} · indexed ${indexed} · sitemapped ${sitemapped} · skipped ${skipped}`);
