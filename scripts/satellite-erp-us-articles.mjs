#!/usr/bin/env node
/**
 * Satellite articles round 2 — US ERP head-term support, 2026-08-06.
 * ─────────────────────────────────────────────────────────────────────────────
 * The USA pull (gsc-usa-90d-2026-08-06.json) confirms the software head terms
 * are an authority fight: ndt reporting software p9, ndt inspection software
 * p19, ndt software p62. §20.6 stands — aggregators own these SERPs; off-page
 * signal is what moves them. Same anti-footprint discipline as round 1
 * (satellite-money-page-articles.mjs): unique angle, author, date and anchor
 * per article; links inside the argument; two-three links max; every piece
 * stands alone. No pricing anywhere.
 *
 * Run: node scripts/satellite-erp-us-articles.mjs   (then commit — satellites
 * auto-build when their folder changes)
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..');
const SITES = join(ROOT, 'backlink-sites');

const ARTICLES = [
  {
    site: 'ndt-knowledge-hub',
    domain: 'https://ndt-knowledge-hub.vercel.app',
    siteName: 'NDT Knowledge Hub',
    publisher: 'NDT Knowledge Hub',
    slug: 'field-data-capture-offline-first-inspection',
    title: 'Offline-First Field Data Capture: The Feature Inspection Crews Discover They Needed Too Late',
    description:
      'Dig sites, tank farms and compressor stations are connectivity dead zones. Why offline-first capture beats feature lists when inspection data has to survive the trip back to the office — and what re-keyed field sheets actually cost.',
    keywords: ['field data capture', 'NDT inspection software', 'offline data collection', 'pipeline inspection', 'mobile inspection app'],
    author: 'Dana Whitfield, ASNT NDT Level III (UT, MT)',
    date: '2026-08-05',
    category: 'Inspection Technology',
    readTime: '9 min read',
    body: `
      <p>Software demonstrations happen in conference rooms, which is the first problem. The connectivity in a conference room resembles nothing about a dig site in the Permian, a tank farm's south quadrant, or the inside of a coke drum. Inspection software gets selected in the one environment where every product works and then deployed into environments where many quietly do not.</p>
      <h2>Where inspection data actually gets captured</h2>
      <p>Walk the work for a week and the pattern is obvious. Pipeline crews record wall-thickness grids at excavations an hour from the nearest tower. Tank crews work floor scans inside a steel shell that functions as a Faraday cage. Turnaround technicians examine exchangers in racks where a phone shows one defiant bar. The examination record is born in exactly the places a cloud-only application cannot reach.</p>
      <p>What happens next, in most companies, is the workaround: readings land on paper or in an offline spreadsheet, and someone re-keys them at the motel or back at the office. Every transcription is an error opportunity, every delay a day added to the report, and every field sheet a record that exists in one fragile copy — right up until it becomes the record a client audit or a litigation hold suddenly needs.</p>
      <h2>What offline-first actually means</h2>
      <p>Offline-first is an architecture, not a checkbox. The application treats the device as the primary store and the cloud as the synchronisation target: examinations are created, completed and signed locally, and reconciliation happens whenever signal returns — without the technician managing it, and without conflicts silently overwriting anyone's readings. Ask a vendor two questions: what happens when two technicians edit the same work order offline, and what exactly is on the device if it is lost. The first answer reveals the architecture; the second reveals whether security was designed or bolted on.</p>
      <p>The buying guides rarely test this. The comparison of <a href="https://atlantisndt.com/ndt-inspection-software">NDT inspection software platforms</a> worth taking seriously is the one that treats field capture as a first-class criterion rather than a bullet point — and for companies whose work is dominated by remote sites, the operational case is laid out well in the market pages for dispersed-field regions like the <a href="https://atlantisndt.com/ndt-erp-williston">Bakken</a>, where drive time and dead zones define the workflow.</p>
      <h2>The cost accounting nobody runs</h2>
      <p>Re-keying looks free because it happens in the evening. Price it honestly: the technician's hour, the error rate of tired transcription, the report days lost to the round trip, and the occasional record that never makes it at all. Against that, offline-first capture is not a software preference — it is the difference between reporting from data and reporting from memory, which is ultimately the difference an auditor or an opposing expert will find.</p>`,
  },
  {
    site: 'asset-integrity-hub',
    domain: 'https://asset-integrity-hub.vercel.app',
    siteName: 'Asset Integrity Hub',
    publisher: 'Asset Integrity Hub Research Group',
    slug: 'what-owners-should-demand-from-inspection-contractor-data',
    title: 'What Asset Owners Should Demand From Their Inspection Contractor’s Data',
    description:
      'A PDF report is a photograph of data that lives somewhere else. What owners should require of contractor examination records — structure, attribution, exportability — and why the contractor’s own systems determine whether you can have it.',
    keywords: ['inspection data management', 'asset integrity', 'contractor management', 'thickness data', 'inspection records'],
    author: 'Marcus Oyelaran, CEng',
    date: '2026-08-04',
    category: 'Data & Integrity',
    readTime: '10 min read',
    body: `
      <p>Most owners specify the inspection and accept whatever form the results arrive in. The result, across an operating life, is an integrity history scattered through hundreds of PDFs — each one a photograph of data that lived, briefly, in a contractor's system or a technician's notebook, and now lives nowhere at all.</p>
      <h2>The four demands worth writing into the contract</h2>
      <p><strong>Structure.</strong> Thickness readings, indications and locations should arrive as structured records — identifiable CMLs, consistent units, machine-readable — not as tables embedded in a document. A corrosion rate calculated across campaigns is only as good as the joinability of the underlying readings.</p>
      <p><strong>Attribution.</strong> Every reading carries its technician, instrument, calibration reference and date, or it cannot be defended later. An unattributed outlier is an outlier you will eventually discard, and discarded data is how a trend line becomes two points.</p>
      <p><strong>Certification evidence on demand.</strong> The examiner's qualification at the moment of examination is part of the record. Owners who audit this annually find gaps; owners who require it per-record make gaps impossible.</p>
      <p><strong>Exportability.</strong> When the contract ends, the data comes home — complete, structured, unassisted. This clause costs nothing to write and everything to omit.</p>
      <h2>Why the contractor's systems are the real constraint</h2>
      <p>None of this is achievable by demanding harder. A contractor running on spreadsheets and Word templates physically cannot deliver structured, attributed, exportable records at scale — the information was never captured that way. The contractors who can are the ones running purpose-built systems where examination data, technician certifications and equipment calibration live in one place; the shape of that tooling is visible in how platforms present themselves to <a href="https://atlantisndt.com/ndt-erp-solution">inspection service companies</a>, and the selection criteria differ sharply from owner-side software, as the provider-oriented guides to <a href="https://atlantisndt.com/best-ndt-reporting-software-2026">NDT reporting software</a> make clear.</p>
      <p>The practical move for an owner: ask bidders to show a sample deliverable as data, not as a document, and ask how it was produced. The answer sorts the market faster than any questionnaire — and it costs the owner nothing before contract award, which is the only time this leverage exists.</p>`,
  },
  {
    site: 'api-certification-guide',
    domain: 'https://api-certification-guide.vercel.app',
    siteName: 'API Certification Guide',
    publisher: 'API Certification Guide Editorial',
    slug: 'certification-records-national-contracts',
    title: 'Certification Records Are a System, Not a Filing Cabinet: What National Contracts Now Require',
    description:
      'Master service agreements increasingly demand auditable personnel certification across every crew and every state. Why branch-by-branch record keeping fails national audits, and what centralised written-practice administration looks like.',
    keywords: ['SNT-TC-1A', 'certification tracking', 'API certification', 'national contracts', 'written practice'],
    author: 'Elaine Kowalczyk, API 510/570/653',
    date: '2026-08-03',
    category: 'Certification & Compliance',
    readTime: '8 min read',
    body: `
      <p>The audit that ends a national contract rarely finds bad inspection work. It finds records that cannot be produced: a technician whose vision exam lapsed a month before a job, a branch tracking certifications in its own spreadsheet format, an examination administered under a written practice revision nobody can locate. The work was probably fine. The evidence was not, and on a master service agreement the evidence is the deliverable.</p>
      <h2>What changed in the contracts</h2>
      <p>Operators consolidating vendors want one thing from a national inspection contractor: consistency they can audit. The language now appearing in MSAs asks for certification under a compliant SNT-TC-1A or CP-189 written practice, records available on demand for any technician on the contract, and uniformity across every office that dispatches a crew. That last clause is the killer — it converts certification from a branch-level administrative task into a company-wide system requirement.</p>
      <h2>Why branches fail it</h2>
      <p>Federated record keeping fails nationally for a structural reason: each branch optimises for its own operations. Formats drift, renewal horizons are watched locally, and the company's answer to "show us every Level II on this contract with current vision records" requires assembling evidence from systems that were never designed to agree. Auditors read assembly time as risk, correctly.</p>
      <h2>The centralised shape</h2>
      <p>Companies that hold national work run certification as one ledger: a single written practice under one Level III authority, one qualification matrix, expiries visible far enough ahead to schedule renewals around project peaks, and an export the client's quality team accepts on the day of the request. The Level III authority itself is sometimes engaged as <a href="https://atlantisndt.com/consulting/ndt-consulting-level-iii">an outsourced service</a>; the ledger is software — the certification-tracking layer of an <a href="https://atlantisndt.com/ndt-erp-solution">ERP built for inspection companies</a> rather than a folder tree that grew by accretion. The distinction sounds administrative until the first national audit, at which point it is the contract.</p>`,
  },
  {
    site: 'construction-ndt-guide',
    domain: 'https://construction-ndt-guide.vercel.app',
    siteName: 'Construction NDT Guide',
    publisher: 'Construction NDT Guide',
    slug: 'fab-shop-inspection-reporting-speed',
    title: 'In Fab-Shop NDT, Report Turnaround Is the Product',
    description:
      'The shop cannot ship until the report exists. Why inspection companies serving fabricators win or lose on documentation speed, and where the hours actually go between probe-off and report-issued.',
    keywords: ['weld inspection', 'fabrication NDT', 'AWS D1.1', 'inspection reports', 'shop inspection'],
    author: 'Rob Castellanos, CWI, ASNT Level II (UT, MT, PT)',
    date: '2026-08-02',
    category: 'Fabrication & Welding',
    readTime: '8 min read',
    body: `
      <p>A fabricator's schedule ends at the shipping bay, and the shipping bay waits on paper. The weldment is finished, the examination is done, the findings are clean — and the load sits, because the report that releases it is in a queue behind every other report the inspection company owes. From the shop's side of the relationship, the inspection company with the fastest defensible paperwork is simply the better inspection company.</p>
      <h2>Where the hours go</h2>
      <p>Time-and-motion the gap between probe-off and report-issued at a typical shop-services inspection company and the examination itself is the smallest slice. The hours go to: transferring findings from a field sheet or instrument into a template; hunting the correct client-specific format and the correct acceptance-criteria reference for this job; chasing the reviewing Level II or III for a signature; and correcting the transcription errors the first three steps introduced. None of that is inspection. All of it is schedule.</p>
      <h2>The structural fix</h2>
      <p>The companies that turn reports in hours rather than days have restructured the flow, not hired faster typists. Findings are captured once, digitally, at the weld — against the job's weld map, with the acceptance criteria attached to the work order before anyone opens a probe case. The report is then a rendering of data that already exists, in the client's template, with the technician's certification details populated from the same system. Review happens on screen the same afternoon. The comparison work on <a href="https://atlantisndt.com/best-ndt-reporting-software-2026">NDT reporting software</a> covers what separates genuine code-referenced templating from PDF generators; for shop-heavy markets the operational context is well described in the market profile for <a href="https://atlantisndt.com/ndt-erp-chicago">Chicago's fabrication belt</a>.</p>
      <p>The commercial effect compounds. Same-day reports mean the shop calls you first, which means volume, which means your technicians know the shop's work, which means fewer queries per job. Documentation speed is not administration — in this market it is the product.</p>`,
  },
  {
    site: 'advanced-ndt-techniques',
    domain: 'https://advanced-ndt-techniques.vercel.app',
    siteName: 'Advanced NDT Techniques',
    publisher: 'Advanced NDT Techniques',
    slug: 'paut-data-management-bottleneck',
    title: 'PAUT’s Quiet Bottleneck Is Data Management, Not Data Acquisition',
    description:
      'Phased array instruments produce gigabytes per shift; most companies still manage the output like radiographs in a filing cabinet. Encoded-scan files, analyst workflow and deliverables — where advanced UT programmes actually lose time.',
    keywords: ['phased array', 'PAUT', 'PAUT software', 'encoded scanning', 'UT data analysis'],
    author: 'Dr. Henrik Lindqvist, ISO 9712 UT3',
    date: '2026-08-01',
    category: 'Advanced Ultrasonics',
    readTime: '9 min read',
    body: `
      <p>Phased array bought the industry better data and then left most companies with nowhere to put it. A single encoded corrosion-mapping shift produces file sets that dwarf a year of conventional UT records; a girth-weld campaign multiplies that by every weld. The acquisition problem is solved — instruments are excellent. The management problem mostly is not, and it is now where advanced UT programmes lose their margin.</p>
      <h2>The failure pattern</h2>
      <p>It looks like this: scan files named by whatever convention the technician improvised, stored on the instrument, a laptop and a portable drive in some combination; analysis done wherever the licensed seat happens to be; results transcribed into a report that references, but does not contain, the data; and six months later a client question about one indication that triggers an archaeology project. Every PAUT house recognises some version of this. It is what happens when instrument-side excellence meets office-side improvisation.</p>
      <h2>What competent PAUT data management looks like</h2>
      <p>Three disciplines separate the strong programmes. <strong>Provenance:</strong> every scan file tied at capture to the work order, component, procedure revision and search-unit configuration — not reconstructed later from filenames. <strong>Analyst workflow:</strong> acquisition and evaluation as separate, tracked steps, so who sized what, against which criteria, is part of the record. <strong>Deliverable linkage:</strong> the report references data the client can actually be given, in a structure their integrity system can consume — the expectation owners are now writing into contracts, as the provider-focused reviews of <a href="https://atlantisndt.com/ndt-inspection-software">NDT inspection software</a> reflect.</p>
      <p>None of this requires exotic tooling — it requires the examination records, certifications and jobs to live in one system instead of five. Companies running advanced techniques as a differentiator should read the operational side of the <a href="https://atlantisndt.com/ndt-erp-houston">turnaround-market profile</a>: PAUT wins the bid, but the data spine keeps the client.</p>`,
  },
];

/* ── page.tsx generator (round-1 pattern) ─────────────────────────────────── */
const pageTsx = (a) => {
  const iso = `${a.date}T00:00:00.000Z`;
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

let created = 0, indexed = 0, sitemapped = 0;
for (const a of ARTICLES) {
  const base = join(SITES, a.site);
  if (!existsSync(base)) { console.warn(`  skip ${a.site} — not found`); continue; }
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
console.log(`created ${created} · indexed ${indexed} · sitemapped ${sitemapped}`);
