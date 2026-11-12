// Validate maritime records while they are being written (2026-11-10, Europe expansion).
// Usage: node scripts/maritime-validate.mjs <slug> [<slug> ...]   (port, country or service slugs)
//        node scripts/maritime-validate.mjs --all                  (every record that exists)
// Checks each record against the same rules as the build guard (scripts/maritime-section-2026-11.mjs):
// 2,000+ rendered words, port-specific copy >= 1,300 words (guard minimum 1,200), title <= 65 chars and
// unique, description 120-160 chars and unique, no price / presence / unoffered-service / class-approval
// wording, no sentence (10+ words) shared with any other port or country record, nearby slugs exist.
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildMaritimeSection, countryHubs, SERVICE_SLUGS, REGION_SLUGS, LANDING_SLUG, CLASS_APPROVALS } from '../src/data/maritime-section/model.mjs';
import { BANNED, APPROVAL_CLAIM } from './maritime-section-2026-11.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const DATA = join(HERE, '..', 'src', 'data', 'maritime-section');
const rows = JSON.parse(readFileSync(join(DATA, 'city-list.json'), 'utf8')).cities;
const citySlugs = new Set(rows.map((r) => r[0]));
const hubs = countryHubs(rows);
const pageSlugs = [LANDING_SLUG, ...REGION_SLUGS, ...hubs.map(([s]) => s), ...SERVICE_SLUGS];
const records = {};
const parseErrors = [];
for (const slug of [...rows.map((r) => r[0])]) { const f = join(DATA, 'cities', `${slug}.json`); if (existsSync(f)) { try { records[slug] = JSON.parse(readFileSync(f, 'utf8')); } catch (e) { parseErrors.push(`cities/${slug}.json: ${e.message}`); } } }
for (const slug of pageSlugs) { const f = join(DATA, 'pages', `${slug}.json`); if (existsSync(f)) { try { records[slug] = JSON.parse(readFileSync(f, 'utf8')); } catch (e) { parseErrors.push(`pages/${slug}.json: ${e.message}`); } } }
const strays = readdirSync(join(DATA, 'cities')).map((f) => f.replace(/\.json$/, '')).filter((s) => !citySlugs.has(s));

let section;
try { section = buildMaritimeSection(rows, records); } catch (e) { console.error('Model failed to build:', e.message); process.exit(2); }
const text = (html) => html.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, ' ');
const sentences = (t) => String(t).split(/(?<=[.?])\s+/).map((x) => x.trim().toLowerCase()).filter((x) => x.split(' ').length >= 10);
function ownText(slug, r) {
  if (citySlugs.has(slug)) return [r.intro, ...(r.highlights || []).map((h) => h.p), ...(r.port?.p || []), ...(r.facilities?.p || []), ...(r.facilities?.list || []), ...(r.context?.p || []), ...[].concat(r.jobs?.p || []), ...(r.jobs?.list || []), r.logistics, ...(r.faqs || []).map((f) => `${f.q} ${f.a}`)].join(' ');
  return [r.intro, ...(r.highlights || []).map((h) => h.p), ...(r.sections || []).flatMap((x) => [].concat(x.p || [])), ...(r.faqs || []).map((f) => f.a)].join(' ');
}
const pool = new Map();
for (const [slug, r] of Object.entries(records)) if (citySlugs.has(slug) || hubs.some(([h]) => h === slug)) for (const s of sentences(ownText(slug, r))) { if (!pool.has(s)) pool.set(s, new Set()); pool.get(s).add(slug); }

const args = process.argv.slice(2);
const targets = args.includes('--all') ? Object.keys(records) : args;
if (!targets.length) { console.error('usage: node scripts/maritime-validate.mjs <slug> ... | --all'); process.exit(2); }
const titleOwners = new Map(); const descOwners = new Map();
for (const pg of section.PAGES) if (!pg.__stub) { titleOwners.set(pg.title, [...(titleOwners.get(pg.title) || []), pg.path]); descOwners.set(pg.description, [...(descOwners.get(pg.description) || []), pg.path]); }

let failed = 0;
const CITY_FIELDS = ['slug', 'name', 'country', 'region', 'title', 'description', 'h1', 'intro', 'keywords', 'highlights', 'port', 'facilities', 'context', 'eca', 'psc', 'jobs', 'logistics', 'vessels', 'faqs', 'nearby'];
for (const slug of targets) {
  const problems = [];
  const r = records[slug];
  if (!r) { console.log(`✗ ${slug}: no record found (cities/${slug}.json or pages/${slug}.json)`); failed++; continue; }
  if (r.slug !== slug) problems.push(`"slug" field is "${r.slug}", expected "${slug}"`);
  if (citySlugs.has(slug)) {
    for (const k of CITY_FIELDS) if (r[k] === undefined) problems.push(`missing field "${k}"`);
    const row = rows.find((x) => x[0] === slug);
    if (row && (r.name !== row[1] || r.country !== row[2] || r.region !== row[3])) problems.push(`name/country/region must be "${row[1]}" / "${row[2]}" / "${row[3]}" as in city-list.json`);
    if (!['seca-north-sea-baltic', 'eca-med', 'none'].includes(r.eca)) problems.push(`eca must be seca-north-sea-baltic | eca-med | none`);
    if (!Array.isArray(r.highlights) || r.highlights.length !== 3) problems.push('highlights must have exactly 3 items');
    if (!Array.isArray(r.port?.p) || !Array.isArray(r.facilities?.p) || !Array.isArray(r.context?.p)) problems.push('port.p, facilities.p and context.p must be arrays of paragraphs');
    if (!Array.isArray(r.faqs) || r.faqs.length < 4) problems.push('faqs needs at least 4 items');
    for (const n of r.nearby || []) if (!citySlugs.has(n)) problems.push(`nearby "${n}" is not a port slug in city-list.json`);
    if (!(r.nearby || []).length) problems.push('nearby is empty');
    const own = ownText(slug, r).split(/\s+/).filter(Boolean).length;
    if (own < 1300) problems.push(`port-specific copy is ${own} words (write at least 1,300)`);
  }
  const pg = section.PAGES.find((p) => p.path.endsWith(`/${slug}`) || (slug === LANDING_SLUG && p.kind === 'landing'));
  if (pg && !pg.__stub) {
    const t = text(section.html(pg));
    const words = t.split(' ').filter(Boolean).length;
    if (words < 2000) problems.push(`page renders ${words} words (minimum 2,000)`);
    if (!pg.title || pg.title.length > 65) problems.push(`title is ${pg.title?.length} chars (max 65)`);
    if (!pg.description || pg.description.length < 120 || pg.description.length > 160) problems.push(`description is ${pg.description?.length} chars (must be 120-160)`);
    if ((titleOwners.get(pg.title) || []).length > 1) problems.push(`title duplicates ${titleOwners.get(pg.title).filter((x) => x !== pg.path).join(', ')}`);
    if ((descOwners.get(pg.description) || []).length > 1) problems.push(`description duplicates ${descOwners.get(pg.description).filter((x) => x !== pg.path).join(', ')}`);
    const all = `${pg.title} ${pg.description} ${t}`;
    for (const [re, label] of BANNED) { const m = all.match(re); if (m) problems.push(`${label}: "...${all.slice(Math.max(0, m.index - 50), m.index + 50)}..."`); }
    if (!CLASS_APPROVALS.length) { const m = all.match(APPROVAL_CLAIM); if (m) problems.push(`class-approval claim: "...${all.slice(Math.max(0, m.index - 50), m.index + 60)}..."`); }
    console.log(`${problems.length ? '✗' : '✓'} ${slug}: ${words} words rendered${citySlugs.has(slug) ? `, ${ownText(slug, r).split(/\s+/).filter(Boolean).length} port-specific` : ''}`);
  } else if (!citySlugs.has(slug) && !pageSlugs.includes(slug)) problems.push('slug is not a port, country, region, service or landing slug');
  if (citySlugs.has(slug) || hubs.some(([h]) => h === slug)) for (const s of sentences(ownText(slug, r))) { const owners = [...(pool.get(s) || [])].filter((x) => x !== slug); if (owners.length) problems.push(`sentence also in ${owners.join(', ')}: "${s.slice(0, 90)}"`); }
  for (const p of problems) console.log(`    - ${p}`);
  if (problems.length) failed++;
}
for (const e of parseErrors) { console.log(`✗ JSON error: ${e}`); failed++; }
if (strays.length) console.log(`! files in cities/ not in city-list.json: ${strays.join(', ')}`);
console.log(failed ? `\n${failed} record(s) need fixing.` : '\nAll checked records pass.');
process.exit(failed ? 1 : 0);
