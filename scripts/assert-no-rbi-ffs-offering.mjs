#!/usr/bin/env node
/**
 * assert-no-rbi-ffs-offering — standing gate for the owner rule (2026-09-27/30):
 *
 *   Atlantis does NOT offer risk-based inspection (API 580/581) or
 *   fitness-for-service (API 579) — not as software, module, platform feature,
 *   service or consulting. The ERP has no automatic "lapse lockout" (the real
 *   feature is expiry warnings + blocked double-booking). No API ICP training.
 *
 * Educational mentions of RBI / FFS as industry concepts are fine. What fails
 * is a sentence in which Atlantis (or its ERP / twin / platform / software /
 * consulting) is the subject that provides, performs, scores, supports or
 * includes RBI or FFS — or the known template strings ("RBI software per
 * API 581", "FFS assessment per API 579" in an offering list, "lapse lockout").
 *
 * Scans every dist/**.html (visible text, meta content, JSON-LD strings).
 * Negations ("does not", "not offered", "we don't", "your RBI software",
 * "export ... to your RBI") are allow-listed.
 *
 * Exit 1 on any hit.
 * Usage: node scripts/assert-no-rbi-ffs-offering.mjs [--dist <dir>] [--verbose] [--max N]
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Terms that make a sentence "about" RBI / FFS / the forbidden claims.
const TERM = /\b(RBI|risk[- ]based inspection|API ?58[01]|API ?579|FFS|fitness[- ]for[- ]service|lapse[- ]lockout|dispatch lockout|API ICP)\b/i;

// Always a violation (template strings / feature claims), unless negated.
const HARD = [
  /\blapse[- ]lockout\b/i,
  /\bdispatch lockout\b/i,
  /\bautomatic(?:ally)? lock(?:s|ed|ing)? out\b[^.]{0,60}\b(expired|lapsed)\b/i,
  /\bRBI software per API\b/i,
  /\bRBI, FFS,? and inspection-data integration\b/i,
  /\bAPI ICP (?:training|course|prep|exam prep|preparation) (?:from|by|with|at) Atlantis\b/i,
  // 2026-10-04: offer-shaped titles / service codes found on live pages
  /\bAPI 571 \/ 580 \/ 581\b/i,
  /\bRBI and FFS on One Model\b/i,
  /\b(?:UT\/)?RBI\/FFS\s*\|/i,
  /\bASNT Level III \+ API ?(?:579|58[01])\b/i,
  /\+ API ?579 FFS \+ (?:API ?581 )?RBI\b/i,
  /\bVisuali[sz]ation(?:,| \+) API ?579 FFS\b/i,
  /\bAPI ?579-1 FFS calculation engine\b/i,
  /\bRBI tier (?:visuali[sz]ation|colour-coding|color-coding)\b/i,
];
// Feature-shaped phrases: a violation only when a product / Atlantis is in the
// sentence (exam-prep articles legitimately say "RBI calculation drills").
const FEATURE = [
  /\bRBI (?:scoring|scores|engine|module|tier|cycle automation|calc|calculations?|overlay|integration)\b/i,
  /\bAPI ?581 (?:RBI scoring|risk-based inspection scoring)\b/i,
  /\bFFS (?:workflow|evidence|calculations?|module|engine)\b/i,
  /\bfitness-for-service (?:calculations?|workflow|module|engine|evidence)\b/i,
  /\bRBI \+ FFS\b/i,
  /\bAPI ?(?:579|58[01])(?:\/\d+)*[ -]compliant\b/i,
];
const PRODUCT = /\b(?:Atlantis|our|we|we've|we're)\b/i;
const LIST_ITEM = /[,:(]\s*(?:RBI|FFS|fitness-for-service) per API ?(?:579|58[01])/i;
const LIST_CTX = /\b(?:digital twin|twin|platform|software|ERP|services?|Comprehensive NDT inspection|overlay)\b/i;
// Subject test ignores API ICP (tracking an inspector's API ICP cert is fine).
const TERM_SUBJ = /\b(RBI|risk[- ]based inspection|API ?58[01]|API ?579|FFS|fitness[- ]for[- ]service)\b/i;

// Subject markers: Atlantis / first person / its products.
const SUBJ = new RegExp([
  String.raw`\bAtlantis\b`,
  String.raw`\b(?:our|we|we'll|we're|ours)\b`,
  String.raw`\bour (?:platform|ERP|twin|digital twin|software|module|dashboard|system|consultants?|consulting team)\b`,
  String.raw`\bEngagements span\b`,
  String.raw`\bBuilt for\b`,
  String.raw`\bships pre-configured\b`,
  String.raw`\bLevel III consulting in\b`,
  String.raw`\bconsulting (?:covers|includes|spans)\b`,
].join('|'), 'i');

// Phrases that neutralise a subject marker (questions, customer-side systems).
const NEUTRAL = /\b(?:should|can|do|could|would|must|how do|when do|what do) we\b|\bwe (?:recommend|suggest|explain|cover this)\b/gi;
const NEG = /\b(?:does not|do not|doesn't|don't|did not|not offered|not offer|not provide|not part of|is not|isn't|are not|aren't|never|no RBI|no FFS|outside (?:our|the) scope|your (?:own )?(?:RBI|integrity|FFS|risk)|(?:export|exported|feed|feeds|hand(?:s|ed)? off|pass(?:es)?) [^.]{0,80}\b(?:to|into) (?:your|the client's|an? (?:external|third-party)|third-party|existing)\b|third-party RBI|existing RBI|exportable to|ready to export to|imported from the owner's|the owner's (?:RBI|FFS|fitness-for-service|integrity)|NDT Side of (?:RBI|FFS)|(?:performed|carried out|run|prepared|done) by (?:the )?owner|the owner(?:'s|-user)? (?:engineers?|specialists?|integrity team) (?:or [a-z ]+ )?(?:run|runs|perform|performs|prepare|prepares)|owner-user runs|outside what (?:Atlantis|we) offers?|(?:reviewed|approved) (?:and (?:reviewed|approved) )?by the (?:engineer|inspector|owner)|outside what (?:Atlantis|we) offers?|(?:reviewed|approved) (?:and (?:reviewed|approved) )?by the (?:engineer|inspector|owner)|(?:they|engineers) or a specialist (?:perform|carry))/i;

export function extractSentences(html) {
  const body = html
    .replace(/<script(?![^>]*application\/ld\+json)[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, ' ');
  const chunks = [];
  body.replace(/\b(?:content|title|alt|aria-label)="([^"]*)"/g, (m, c) => { chunks.push(c); return m; });
  const text = body.replace(/<[^>]+>/g, '\n')
    .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&nbsp;/g, ' ');
  for (const c of text.split(/\n|","|":"|"\s*,\s*"/)) chunks.push(c);
  const out = [];
  for (const c of chunks) {
    if (!TERM.test(c)) continue;
    for (const s of c.split(/(?<=[.!?])\s+(?=[A-Z0-9"(])/)) {
      if (TERM.test(s)) out.push(s.trim().replace(/\s+/g, ' '));
    }
  }
  return out;
}

// Reviewed educational sentences that trip the subject heuristic (exact
// prefixes). Add here only after reading the sentence in context.
export const ALLOW = [
  'Atlantis delivers ASNT method training and employer programme support rather than API ICP training',
  'Atlantis works the procedure and personnel layer that both regimes rely on',
  'Atlantis works the Level III end of this',
  'Interval setting, run-or-repair decisions and fitness-for-service acceptance belong to the asset owner',
  'The field data our technicians collect',
  'We also see plants commission audits proactively before a planned RBI rollout',
  'In practice, we see three staffing models',
  'In practice, this is one of the biggest operational gaps we find',
  'That gap between "we have an RBI program"',
  'The term gets used loosely across the industry',
  'It\'s a question we get in nearly every digital twin conversation',
  'The integration pays off most visibly during two recurring activities',
  'The right framing is: is our risk calculation methodology itself sound',
  'Every failed digital twin/RBI integration we\'ve reviewed',
  'This checklist is built for 2026 conditions',
  'Refineries use digital twins to consolidate decades of RBI history',
  'A risk model is only as good as the inspection data behind it',
  'None of these mechanisms are unique to Idaho Falls',
  'APM vs RBI 2026 — Asset Performance Management Decoded',
  'Aramco + ADNOC + QatarEnergy lead enterprise digital-twin adoption',
  'A: Aramco + ADNOC + QatarEnergy lead enterprise digital-twin adoption',
  "Gabon's petroleum code and environmental ministry",
  'RBI per API 580/581 — Meridium Has the Engine; Atlantis Supplies the Data',
  '(API 570 Piping Inspection Code) governs in-service inspection',
  '"Do We Need a Digital Twin If We Already Have RBI Software?" Is the Wrong Question',
  // free downloadable templates / calculators (documents and worksheets, not a service)
  'Atlantis NDT releases 16 free editable templates',
  'Free Atlantis NDT tools',
];

export function classify(sentence) {
  if (NEG.test(sentence)) return null;
  // questions are not claims (FAQ answers are checked on their own)
  if (/\?\s*$/.test(sentence) || /\?\s*"?\s*$/.test(sentence)) return null;
  if (ALLOW.some((a) => sentence.startsWith(a))) return null;
  for (const re of HARD) if (re.test(sentence)) return 'hard:' + re.source.slice(0, 40);
  // brand suffix on titles ("... | Atlantis NDT") is not a subject
  const s = sentence.replace(/\s*[|—-]\s*Atlantis NDT\s*$/i, '').replace(/\| Atlantis NDT(?=[A-Z])/g, ' ').replace(NEUTRAL, ' ');
  for (const re of FEATURE) if (re.test(s) && PRODUCT.test(s)) return 'feature:' + re.source.slice(0, 40);
  // "... , RBI per API 581, FFS per API 579" as an item in a service / product list
  if (LIST_ITEM.test(s) && (PRODUCT.test(s) || LIST_CTX.test(s))) return 'list-item';
  if (TERM_SUBJ.test(s) && SUBJ.test(s)) return 'subject';
  return null;
}

export function findOfferingHits(html) {
  const hits = [];
  const seen = new Set();
  for (const s of extractSentences(html)) {
    if (seen.has(s)) continue; seen.add(s);
    const why = classify(s);
    if (why) hits.push({ why, s });
  }
  return hits;
}

function walk(d, out = []) {
  for (const n of readdirSync(d)) {
    const f = join(d, n);
    const st = statSync(f);
    if (st.isDirectory()) walk(f, out); else if (n.endsWith('.html')) out.push(f);
  }
  return out;
}

const isMain = process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url;
if (isMain) {
  const args = process.argv.slice(2);
  const di = args.indexOf('--dist');
  const DIST = di >= 0 ? args[di + 1] : join(__dirname, '..', 'dist');
  const VERBOSE = args.includes('--verbose');
  const mi = args.indexOf('--max');
  const MAX = mi >= 0 ? +args[mi + 1] : 40;
  if (!existsSync(DIST)) { console.error('dist not found:', DIST); process.exit(2); }
  const files = walk(DIST);
  let pages = 0, total = 0;
  const bySentence = new Map();
  for (const f of files) {
    const hits = findOfferingHits(readFileSync(f, 'utf8'));
    if (!hits.length) continue;
    pages++; total += hits.length;
    for (const h of hits) {
      const g = bySentence.get(h.s) || { n: 0, why: h.why, ex: f.slice(DIST.length) };
      g.n++; bySentence.set(h.s, g);
    }
  }
  const arr = [...bySentence.entries()].sort((a, b) => b[1].n - a[1].n);
  for (const [s, g] of arr.slice(0, VERBOSE ? arr.length : MAX)) console.log(`${g.n}\t${g.why}\t${g.ex}\t${s.slice(0, 260)}`);
  console.log(`\nassert-no-rbi-ffs-offering: ${files.length} pages scanned, ${pages} pages with ${total} offering sentences (${arr.length} distinct)`);
  if (pages) { console.log('FAIL'); process.exit(1); }
  console.log('PASS');
}
