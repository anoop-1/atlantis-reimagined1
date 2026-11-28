// Writer check for new AWS CWI city records (2026-11-28). Validates records in src/data/audit-cwi-2026-11/ that
// are not yet in _pages.json, with the same rules as the audit/CWI build guard, plus: no 10+ word sentence shared
// with any other CWI or audit record, the "no Atlantis classroom" sentence, and the training geo-honesty scan.
// Usage: node scripts/api-training-refine/check-cwi.mjs <slug> [<slug>…]   (slug = city slug, e.g. midland)
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { AUDIT_CWI_RULES, AUDIT_CWI_NEG } from '../audit-cwi-2026-11.mjs';
import { scanTrainingGeoHonesty } from '../training-geo-honesty-2026-10.mjs';
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const DIR = join(ROOT, 'src/data/audit-cwi-2026-11');
const strip = (h) => String(h || '').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ');
const key = (s) => s.toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, ' ').trim();
const want = process.argv.slice(2).map((s) => s.replace(/^cwi-training-/, ''));
if (!want.length) { console.log('usage: check-cwi.mjs <city-slug>…'); process.exit(2); }
const all = readdirSync(DIR).filter((f) => f.endsWith('.json') && f !== '_pages.json').map((f) => [f.replace(/\.json$/, ''), JSON.parse(readFileSync(join(DIR, f), 'utf8'))]);
const errors = [];
for (const slug of want) {
  const file = `cwi-training-${slug}`;
  const rec = all.find(([f]) => f === file)?.[1];
  if (!rec) { errors.push(`${file}: no record`); continue; }
  const path = `/training/cwi-training-${slug}`;
  if (rec.path !== path) errors.push(`${file}: path should be ${path}`);
  if (rec.slug !== file) errors.push(`${file}: slug should be ${file}`);
  const words = strip(rec.html).split(' ').filter(Boolean).length;
  if (words < 2000) errors.push(`${file}: ${words} html words (2,000+ required)`);
  if (!rec.title || rec.title.length > 62) errors.push(`${file}: title length ${rec.title?.length}`);
  if (!rec.description || rec.description.length > 160) errors.push(`${file}: description length ${rec.description?.length}`);
  if ((rec.faq || []).length < 8) errors.push(`${file}: ${(rec.faq || []).length} FAQs (8+ wanted)`);
  const text = strip(`${rec.title} ${rec.description} ${rec.h1} ${rec.html} ${(rec.faq || []).map((f) => `${f.q} ${f.a}`).join(' ')}`);
  for (const [label, re, negOk] of AUDIT_CWI_RULES) {
    const g = new RegExp(re.source, re.flags.includes('g') ? re.flags : re.flags + 'g');
    let m;
    while ((m = g.exec(text)) !== null) {
      const i = m.index;
      const sent = text.slice(Math.max(0, text.lastIndexOf('. ', i)), text.indexOf('. ', i + m[0].length) + 1 || undefined);
      if (!(negOk && AUDIT_CWI_NEG.test(sent))) errors.push(`${file}: ${label}: "${sent.trim().slice(0, 160)}"`);
      if (m[0].length === 0) g.lastIndex++;
    }
  }
  if (/\bNAS[ -]?410\b/.test(text)) errors.push(`${file}: names NAS 410`);
  if (!/\b(?:six|6)[- ]day\b/i.test(text)) errors.push(`${file}: does not state the six-day course`);
  if (!/no Atlantis classroom/i.test(text)) errors.push(`${file}: missing "There is no Atlantis classroom in {City}"`);
  if (/\b(?:CITGO|PDVSA|Lukoil|Rosneft|Nayara|Russia|Venezuela|Iran)\b/.test(text)) errors.push(`${file}: names a sanctioned country or company`);
  for (const v of scanTrainingGeoHonesty(rec.html, path)) errors.push(`${file}: geo honesty ${v.rule}: "${v.sentence.slice(0, 150)}"`);
  const mine = new Set(text.split(/(?<=[.!?])\s+/).map(key).filter((k) => k.split(' ').length >= 10));
  for (const [f, other] of all) {
    if (f === file) continue;
    const ot = strip(`${other.html} ${(other.faq || []).map((x) => `${x.q} ${x.a}`).join(' ')}`);
    for (const s of ot.split(/(?<=[.!?])\s+/)) { const k = key(s); if (mine.has(k)) errors.push(`${file}: sentence shared with ${f}: "${s.slice(0, 120)}"`); }
  }
  for (const m of `${rec.html} ${(rec.faq || []).map((f) => f.a).join(' ')}`.matchAll(/href="(\/[^"?#]*)/g)) {
    const t = m[1].replace(/\/$/, '') || '/';
    if (t === '/contact') continue;
    if (!existsSync(join(ROOT, 'dist', t === '/' ? '' : t, 'index.html'))) errors.push(`${file}: link to unbuilt ${t}`);
  }
}
console.log(errors.length ? errors.join('\n') : `OK: ${want.length} record(s) pass`);
process.exit(errors.length ? 1 : 0);
