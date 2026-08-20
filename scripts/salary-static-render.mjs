/**
 * Salary pages: render the React data into the static layer — 2026-08-20.
 * ─────────────────────────────────────────────────────────────────────────────
 * THE BUG THIS FIXES
 *
 * src/data/salary-level-pages.ts holds ~37 KB of researched pay content: a
 * quick answer, four or five named drivers, a US pay table, international
 * comparison rows, a progression section and FAQs — per level. SalaryLevelPage
 * .tsx renders all of it beautifully.
 *
 * Crawlers never see a line of it. This site prerenders static HTML from
 * scripts/prerender.mjs's own bodyContent strings; React is not executed for
 * bots. The four salary routes were given a ~250-word stub body in the Phase-T
 * pass and nothing since, so the JS-disabled view of /ndt-level-2-salary is 279
 * words while the React view is well over 1,500.
 *
 * The consequence is measurable and expensive. reindexQualifiedPages() applies a
 * 650-word substance floor before it will lift a noindex. All four salary pages
 * sit under it, so all four ship with <meta robots="noindex, follow"> — against
 * roughly 1,030 US impressions per 90 days of documented demand:
 *
 *   /ndt-level-3-salary    ~447 impressions   ("ndt level 3 salary" 207, …)
 *   /ndt-level-2-salary    ~238 impressions
 *   /ndt-inspector-salary  ~212 impressions
 *   /ndt-level-1-salary    ~133 impressions
 *
 * So the content was written, researched and paid for; it simply never reached
 * the layer that decides whether Google indexes the page. Rendering it into the
 * static body carries every page past the floor, and the noindex lifts itself on
 * the next build — no list to maintain, no manual exemption.
 *
 * WHY RENDER RATHER THAN WRITE NEW CONTENT
 * Writing fresh prose would fork the two layers: React showing one set of
 * figures and the static HTML another, drifting apart on every edit. One data
 * store feeding both is the only version that stays true.
 *
 * CLAUDE.md §18: salary bands are the SALARY_EXEMPT carve-out — third-party pay
 * data is permitted and wanted. No Atlantis price appears here; the CTA routes
 * to training and to the enquiry form.
 */
import { loadKnowledgeTs } from './route-reconcile.mjs';

const esc = (s) =>
  String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Internal links are woven as sentences; a bare list of related URLs is not linking. */
function relatedProse(related) {
  const items = (related || []).filter((r) => r && r.to && r.label);
  if (!items.length) return '';
  const links = items.map((r) => `<a href="${esc(r.to)}">${esc(r.label)}</a>`);
  const lead = links.slice(0, -1).join(', ');
  const tail = links[links.length - 1];
  return `    <p>Where to go next: ${links.length > 1 ? `${lead} and ${tail}` : tail}.</p>\n`;
}

function renderTable(caption, rows) {
  if (!rows || !rows.length) return '';
  return (
    `    <table>\n      <caption>${esc(caption)}</caption>\n` +
    '      <thead><tr><th scope="col">Segment</th><th scope="col">Range</th><th scope="col">What drives it</th></tr></thead>\n' +
    '      <tbody>\n' +
    rows
      .map(
        (r) =>
          `        <tr><th scope="row">${esc(r.segment)}</th><td>${esc(r.range)}</td><td>${esc(r.note)}</td></tr>`,
      )
      .join('\n') +
    '\n      </tbody>\n    </table>\n'
  );
}

/**
 * Build the static body from the config. Ordered so the direct answer is the
 * first thing in the DOM: retrieval works on passages, and the passage a model
 * lifts for "what does an NDT Level II earn" should be the answer, not the nav.
 */
function renderSalaryBody(cfg) {
  let out = '';
  out += '  <header><nav aria-label="Main Navigation">';
  out += '<a href="/">Home</a><a href="/training">Training</a><a href="/asnt-certification">ASNT Certification</a>';
  out += '<a href="/ndt-technician-salary">Salary Guide</a><a href="/contact">Contact</a>';
  out += '</nav></header>\n  <main>\n';
  out += `    <h1>${esc(cfg.h1)}</h1>\n`;

  // The answer block, in the same shape the citation spec uses elsewhere so the
  // lint pass and the AI-retrieval layer both recognise it.
  out += `    <div data-citation-block="answer">\n      <p>${esc(cfg.quickAnswer)}</p>\n    </div>\n`;

  if (cfg.drivers && cfg.drivers.length) {
    out += '    <h2>What moves the number</h2>\n';
    for (const d of cfg.drivers) {
      out += `    <h3>${esc(d.h)}</h3>\n    <p>${esc(d.body)}</p>\n`;
    }
  }

  if (cfg.table) out += renderTable(cfg.table.caption, cfg.table.rows);

  if (cfg.intl && cfg.intl.length) {
    out += renderTable('International comparison — the same role in other markets', cfg.intl);
    out += '    <p>International rows are for comparison only. Atlantis delivers training on-site '
      + 'across the United States and at arranged venues; see <a href="/training-usa">NDT training '
      + 'across the US</a> for delivery by region.</p>\n';
  }

  if (cfg.progression && cfg.progression.length) {
    out += '    <h2>Moving up from here</h2>\n';
    for (const p of cfg.progression) {
      out += `    <h3>${esc(p.h)}</h3>\n    <p>${esc(p.body)}</p>\n`;
    }
  }

  if (cfg.faqs && cfg.faqs.length) {
    out += '    <h2>Questions people ask about this pay band</h2>\n';
    for (const f of cfg.faqs) {
      out += `    <h3>${esc(f.q)}</h3>\n    <p>${esc(f.a)}</p>\n`;
    }
  }

  out += '    <h2>Turning a pay band into a plan</h2>\n';
  out += '    <p>Every band on this page is an output of certification decisions. The route between '
    + 'them runs through documented training hours, examination and on-the-job experience under a '
    + 'qualified Level III — see <a href="/asnt-certification">ASNT certification requirements by '
    + 'level</a> and <a href="/blog/ndt-training-hours-requirements-by-method">training hours by '
    + 'method</a> for what each step demands. Employers building a cohort rather than an individual '
    + 'should start at <a href="/corporate-ndt-training">employer-sponsored NDT training</a>.</p>\n';
  out += relatedProse(cfg.related);
  out += '  </main>';
  return out;
}

/**
 * Replace the stub bodies on the salary routes with the full rendered content.
 * Runs BEFORE reindexQualifiedPages so the word count it measures is the real
 * one — ordering is the whole point of this pass.
 */
export async function applySalaryStaticRender(routes) {
  const mod = await loadKnowledgeTs('data/salary-level-pages.ts');
  const configs = mod.SALARY_LEVEL_PAGES || [];
  const byPath = new Map(configs.map((c) => [c.path, c]));

  const out = { applied: 0, words: {}, missing: [] };
  for (const r of routes) {
    if (!r || !r.path) continue;
    const cfg = byPath.get(r.path);
    if (!cfg) continue;
    const body = renderSalaryBody(cfg);
    r.bodyContent = body;
    r.h1 = cfg.h1;
    if (cfg.title) r.title = cfg.title;
    if (cfg.description) r.description = cfg.description;
    out.applied++;
    out.words[r.path] = body.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  }
  for (const c of configs) if (!routes.some((r) => r && r.path === c.path)) out.missing.push(c.path);
  return out;
}
