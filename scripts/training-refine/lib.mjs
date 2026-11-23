// Shared helpers for the US training refinement work (owner, 2026-11-23: "rank higher on all US cities for NDT
// training … refining everyday … make sure all city pages have 2000+ words of high quality content").
// Used by measure.mjs, validate-section.mjs and the daily scheduled run (RUNBOOK.md). Reads the built site in dist/.
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
export const DIST = join(ROOT, 'dist');
const { scanTrainingGeoHonesty } = await import(join(ROOT, 'scripts/training-geo-honesty-2026-10.mjs'));
export { scanTrainingGeoHonesty };

export const text = (h) => String(h).replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ').trim();
export const words = (h) => text(h).split(' ').filter((w) => /[A-Za-z0-9]/.test(w)).length;
export const sentences = (t) => t.split(/(?<=[.?!])\s+/).map((s) => s.trim().toLowerCase().replace(/[“”"']/g, '')).filter((s) => s.split(' ').length >= 10);

/** Copy rules for training copy (the build gates enforce most of these too; this catches them before a build). */
export const BANNED = [
  [/\$\s?\d|\bUSD\b|\d+\s?k\s?\/\s?(?:yr|year)|\bper year\b.*\d/i, 'money figure'],
  [/\b(?:cohort|intake|next class|seats? (?:left|available)|enrol(?:l)? by|start(?:s|ing)? on (?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec))/i, 'course dates / cohorts'],
  [/\bour (?:[A-Z][a-z]+ )?(?:classroom|campus|training (?:center|centre)|facility|lab|office|instructors in)\b|\batlantis (?:ndt )?(?:classroom|campus|training (?:center|centre)) in\b/i, 'Atlantis classroom/office claim'],
  [/\blive(?:[- ]online)? (?:class|classes|session|sessions|classroom|cohort)|\binstructor-led\b|\blive-virtual\b/i, 'live class claim'],
  [/within 24 hours|24-hour|same[- ]day|\bguarantee|\b#1\b|best ndt school|pass rate|job placement|placement assistance|job guarantee|\bthe only (?:ndt|company|provider)|\bfirst and only\b|\bleading provider\b|\bnumber one\b/i, 'banned promise or superlative'],
  [/NAS\s?410|NANDTB/i, 'NAS 410'],
  [/(?:atlantis|we)\s+(?:offer|provide|deliver|run)s?\s+[^.<]{0,40}(?:API\s?(?:510|570|653)|ISO\s?9712|\bPCN\b|CSWIP|CGSB)\s+(?:training|courses?|certification)/i, 'unoffered certification offered'],
  [/Level III in (?:[A-Z]{2,4}, )*(?:ET|PAUT|TOFD)\b|Level III in UT, RT, MT, PT,? (?:and )?(?:VT,? (?:and )?)?ET/i, 'founder methods wrong'],
  [/\b(?:partner(?:ed|s|ship)? with|affiliated with|accredited by|approved by|endorsed by)\b[^.]{0,60}\b(?:college|school|university|institute|ASNT|AWS)\b/i, 'partnership/approval claim'],
  [/\bwe (?:offer|provide|run) (?:radiograph|radiography|RT) (?:services|inspection)/i, 'US RT offer'],
];

export function builtMainHtml(path) {
  const f = join(DIST, path.replace(/^\//, ''), 'index.html');
  if (!existsSync(f)) return null;
  const h = readFileSync(f, 'utf8');
  const m = h.match(/<main[\s\S]*?<\/main>/);
  return (m ? m[0] : '').replace(/<script[\s\S]*?<\/script>/g, ' ');
}
export const isBuilt = (href) => {
  const p = href.split('#')[0].split('?')[0].replace(/\/$/, '');
  if (!p || p === '/contact') return true;
  return existsSync(join(DIST, p.replace(/^\//, ''), 'index.html'));
};

/** Sentence pool from every training deep-content file and every geo-depth file (minus excluded paths). */
export function sentencePool(exclude = new Set()) {
  const pool = new Map();
  const add = (owner, html) => { for (const s of sentences(text(html))) { if (!pool.has(s)) pool.set(s, new Set()); pool.get(s).add(owner); } };
  for (const [dir, key] of [['src/data/deep-content', 'bodyHtml'], ['src/data/geo-depth-2026-10', 'html']]) {
    for (const f of readdirSync(join(ROOT, dir)).filter((n) => n.endsWith('.json') && (dir.endsWith('geo-depth-2026-10') || /^ndt-training-/.test(n)))) {
      try { const d = JSON.parse(readFileSync(join(ROOT, dir, f), 'utf8')); if (!exclude.has(d.path)) add(d.path || f, d[key] || ''); } catch { /* reported by its own validator */ }
    }
  }
  return pool;
}

/** Problems shared by every kind of training copy. */
export function copyProblems(html, path, pool, ownSentences = new Set()) {
  const out = [];
  const t = text(html);
  for (const [re, label] of BANNED) { const m = t.match(re); if (m) out.push(`${label}: "...${t.slice(Math.max(0, m.index - 50), m.index + 70)}..."`); }
  for (const v of scanTrainingGeoHonesty(html, path)) out.push(`honesty gate ${v.rule}: "${v.sentence.slice(0, 140)}"`);
  if (/<(?:script|style|img|iframe|form|section|h1)\b/i.test(html) || /style="/i.test(html)) out.push('disallowed tag or inline style');
  for (const [, href] of html.matchAll(/href="([^"]+)"/g)) { if (/^https?:/.test(href)) out.push(`external link ${href}`); else if (!isBuilt(href)) out.push(`link ${href} is not a built page`); }
  for (const s of sentences(t)) {
    if (ownSentences.has(s)) out.push(`repeats a sentence already on the page: "${s.slice(0, 90)}"`);
    const owners = [...(pool.get(s) || [])].filter((x) => x !== path);
    if (owners.length) out.push(`sentence also on ${owners.slice(0, 2).join(', ')}: "${s.slice(0, 90)}"`);
  }
  return out;
}
