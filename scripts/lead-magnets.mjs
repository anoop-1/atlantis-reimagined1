// Crawler + no-JS layer for the intent-matched lead magnets. 2026-09-29.
//
// The interactive cards are React (src/components/LeadMagnet.tsx). Crawlers and
// visitors without JavaScript only ever see the prerendered <main>, so every
// matched page also gets a plain static block with the same offer and a
// pre-filled /contact link. Rules come from src/data/lead-magnets.json, the same
// file the React side uses, so the two layers cannot disagree about which page
// gets which magnet.
//
// On published pages (src/lib/published-pages.ts) React shows the prerendered
// <main> to humans; src/index.css hides [data-lead-magnet-static] inside
// .published-content there because the React card renders right below it.
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const CFG = JSON.parse(readFileSync(join(ROOT, 'src/data/lead-magnets.json'), 'utf-8'));
const RULES = CFG.rules.map((r) => ({ kind: r.magnet, re: new RegExp(r.pattern) }));
const NL = String.fromCharCode(10);

export const leadMagnetStats = { mock_exam: 0, gap_check: 0, career: 0, inspection_consult: 0, method_training: 0 };
export const leadMagnetPages = { mock_exam: [], gap_check: [], career: [], inspection_consult: [], method_training: [] };

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const contact = (service, subject) => `/contact?service=${encodeURIComponent(service)}&amp;subject=${encodeURIComponent(subject)}`;

function relatedLabel(path) {
  if (path === '/asnt-level-iii-training') return 'ASNT Level III training';
  const slug = path.split('/').pop() || path;
  return slug
    .replace(/-2026-free-mock-exam$/, ' — mock exam format guide')
    .replace(/-/g, ' ')
    .replace(/\b(ut|rt|mt|pt|vt|et|paut|tofd|asnt)\b/gi, (m) => m.toUpperCase())
    .replace(/^./, (c) => c.toUpperCase());
}

export function leadMagnetForPath(routePath) {
  const p = (routePath || '').toLowerCase().replace(/\/+$/, '') || '/';
  const hit = RULES.find((r) => r.re.test(p));
  if (!hit) return null;
  if (hit.kind !== 'mock_exam') return { kind: hit.kind };
  if (/asnt-level-3-basic-exam-prep/.test(p)) {
    return { kind: 'mock_exam', method: 'l3', short: 'Level III Basic', methodName: 'ASNT Level III Basic', level: '3', bank: CFG.banks.l3, related: CFG.relatedSets.l3 };
  }
  const m = p.match(/^\/blog\/([a-z]+)-level-(1|2|ii)-/);
  const method = m?.[1] || 'ut';
  const level = m?.[2] === '1' ? '1' : '2';
  return { kind: 'mock_exam', method, short: method.toUpperCase(), methodName: CFG.methods[method] || method.toUpperCase(), level, bank: CFG.banks[method], related: CFG.relatedSets[method] || [] };
}

function block(routePath, m) {
  const open = (label) => `    <section aria-label="${esc(label)}" data-lead-magnet-static="${m.kind}">`;
  if (m.kind === 'mock_exam') {
    const subject = `Mock exam request — ${m.short} L${m.level}`;
    const levelWord = m.level === '1' ? 'Level I' : m.level === '3' ? 'Level III' : 'Level II';
    const title = m.bank
      ? `Get the full timed ${m.short} ${m.method === 'l3' ? '' : levelWord + ' '}mock exam + answer explanations`.replace(/\s+/g, ' ')
      : `Get ${m.short} ${levelWord} study guidance from an ASNT Level III`;
    const lead = m.bank
      ? 'Tell us your method and level and the full question set opens as a timed attempt with every answer explained. An ASNT Level III will follow up with study guidance for your exam.'
      : 'Tell us your method and level and an ASNT Level III will follow up with study guidance for your exam.';
    const rel = (m.related || []).filter((p) => p !== routePath);
    return [
      open('Full mock exam'),
      `      <h2>${esc(title)}</h2>`,
      `      <p>${lead} <a href="${contact('training', subject)}" data-cta-variant="mock_exam" data-lead-magnet="mock_exam">${m.bank ? 'Request the full mock exam' : 'Request study guidance'}</a></p>`,
      rel.length ? `      <p>More ${esc(m.method === 'l3' ? 'Level III' : m.short)} question sets: ${rel.map((p) => `<a href="${p}">${esc(relatedLabel(p))}</a>`).join(', ')}.</p>` : '',
      '    </section>',
    ].filter(Boolean).join(NL);
  }
  if (m.kind === 'gap_check') {
    return [
      open('Free written-practice gap check'),
      '      <h2>Free written-practice gap check by an ASNT Level III</h2>',
      '      <p>For employers certifying technicians under ASNT SNT-TC-1A: Anoop Rayavarapu, ASNT NDT Level III, will check your written practice against SNT-TC-1A &mdash; training and experience hours, exam composition, vision exams, recertification and Level III responsibilities &mdash; and tell you where the gaps are. ' +
        `<a href="${contact('consulting', 'Written practice gap check')}" data-cta-variant="gap_check" data-lead-magnet="gap_check">Request a written-practice gap check</a>.</p>`,
      '      <p>Useful references: <a href="/resources/training-requirements-matrix">training requirements matrix</a>, <a href="/resources/ndt-written-practice-template">NDT written practice template</a>.</p>',
      '    </section>',
    ].join(NL);
  }
  // Link-only commercial modules — copy shared with React via lead-magnets.json.
  const mod = CFG.modules[m.kind];
  if (!mod) return '';
  return [
    open(mod.label),
    `      <h2>${esc(mod.title)}</h2>`,
    `      <p>${esc(mod.sub)}</p>`,
    `      <p>${mod.links.map((l) => `<a href="${esc(l.href)}" data-cta-variant="${esc(l.variant)}" data-lead-magnet="${m.kind}">${esc(l.label)}</a>`).join(' &middot; ')}</p>`,
    '    </section>',
  ].join(NL);
}

/** Insert the static lead-magnet block before </main> on matched, indexable pages. */
export function injectLeadMagnet(html, routePath) {
  const m = leadMagnetForPath(routePath);
  if (!m) return html;
  if (html.includes('data-lead-magnet-static=')) return html;
  if (!/<\/main>/i.test(html)) return html;
  const b = block(routePath, m);
  if (!b) return html;
  leadMagnetStats[m.kind]++;
  leadMagnetPages[m.kind].push(routePath);
  return html.replace(/<\/main>/i, b + NL + '  </main>');
}
