// Extracts the existing full practice-question banks (with answer explanations)
// from src/data/blogs.json into a small JSON the LeadMagnet component can load
// lazily after a visitor submits the mock-exam form. 2026-09-29.
//
// Nothing is invented here: every question, option, answer and explanation is
// copied verbatim from content already authored on the site. The banks are
// not otherwise reachable in production (the practice pages render a shorter
// published/depth version), which is why they are the honest "full set" to
// reveal on submit.
//
// Run: node scripts/build-lead-magnet-banks.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const blogs = JSON.parse(readFileSync(join(ROOT, 'src/data/blogs.json'), 'utf-8'));

const BANKS = {
  UT: 'ut-level-2-practice-questions',
  RT: 'rt-level-2-practice-questions',
  MT: 'mt-level-2-practice-questions',
  PT: 'pt-level-2-practice-questions',
  L3: 'asnt-level-3-basic-exam-prep',
};

const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', deg: '°', rsquo: '’', lsquo: '‘', rdquo: '”', ldquo: '“', mdash: '—', ndash: '–', micro: 'µ', plusmn: '±', times: '×', le: '≤', ge: '≥', lambda: 'λ', theta: 'θ', frac12: '½', sup2: '²', hellip: '…', divide: '÷', middot: '·', eacute: 'é', gamma: 'γ', minus: '−', mu: 'μ' };
const text = (html) => html
  .replace(/<[^>]+>/g, '')
  .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
  .replace(/&([a-z0-9]+);/gi, (m, n) => ENTITIES[n.toLowerCase()] ?? m)
  .replace(/\s+/g, ' ')
  .trim();

const out = {};
for (const [key, slug] of Object.entries(BANKS)) {
  const post = blogs.find((b) => b.slug === slug);
  if (!post) throw new Error(`bank source missing: ${slug}`);
  const blocks = post.content.split(/<div class="question">/).slice(1);
  const questions = [];
  for (const block of blocks) {
    const q = block.match(/<h3>\s*Question\s+\d+:\s*([\s\S]*?)<\/h3>/i);
    const opts = [...block.matchAll(/<li><strong>([A-E])\.<\/strong>\s*([\s\S]*?)<\/li>/g)].map((m) => ({ key: m[1], text: text(m[2]) }));
    const ans = block.match(/Correct Answer:\s*([A-E])/i);
    const exp = block.match(/<em>Explanation:<\/em>\s*([\s\S]*?)<\/p>/i);
    if (!q || opts.length < 2 || !ans) continue;
    questions.push({ q: text(q[1]), options: opts, answer: ans[1], explanation: exp ? text(exp[1]) : '' });
  }
  if (questions.length < 10) throw new Error(`${slug}: only ${questions.length} questions parsed`);
  out[key] = { source: `/blog/${slug}`, questions };
  console.log(`${key}: ${questions.length} questions from ${slug}`);
}
writeFileSync(join(ROOT, 'src/data/lead-magnet-banks.json'), JSON.stringify(out, null, 1) + '\n', 'utf-8');
