/**
 * Page upgrades — append researched depth to EXISTING pages. 2026-08-26.
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY THIS IS NOT THE DEPTH-PAGE PIPELINE
 *
 * build-depth-pages.mjs creates NEW routes, and prerender pushes them
 * unconditionally: `routes.push(...DEPTH_PAGE_ROUTES)`. Feeding it a page that
 * already exists would put two route objects on the same path and let the last
 * one silently win. That is fine for a page being created and wrong for a page
 * being improved.
 *
 * These nine pages all exist and all earn impressions. The audit found them
 * because they are thin, not because they are missing:
 *
 *   /3d-scanning-services              194 words · 446 impressions · position 55
 *                                      — the hub of a segment earning 14,610
 *   /consulting                        559 words · 635 impressions · position 22
 *                                      — thinner than most of its own children
 *   /consulting/ndt-consulting-level-iii  227 words · 294 impressions
 *                                      — against the most valuable intent here
 *   /phased-array-training             143 words — the highest-paying method band
 *   /api-653-training                  174 words
 *   /ndt-training-denver               567 words · 805 impressions · position 43
 *   /ndt-training-atlanta              560 words · 607 impressions
 *   /ndt-training-houston              567 words · 335 impressions — and Houston
 *                                      is the densest NDT market in North America
 *   /training/asnt-level-iii-training-san-diego  545 words · 391 impressions
 *
 * So the content is APPENDED to what is already there. Nothing is rewritten or
 * removed — CLAUDE.md is explicit that improvements are additive — and the
 * existing introduction, which is what currently ranks, is left untouched.
 *
 * The appended block carries a citation answer, the decomposition table, the
 * facets and the body sections, which is the same structure every other family
 * uses, so the lint and preflight gates read it the same way.
 */
import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const esc = (s) =>
  String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * Escape first, then convert markdown links to anchors — same rule as
 * build-depth-pages.mjs renderInline(). Hrefs restricted to site-relative paths
 * and https, so a javascript: or data: href degrades to plain text.
 */
const MD_LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;
function renderInline(s) {
  return esc(s).replace(MD_LINK_RE, (whole, text, href) => {
    const h = String(href).trim();
    if (!/^(\/[^\s]*|https:\/\/[^\s]+)$/.test(h)) return text;
    return `<a href="${h}">${text}</a>`;
  });
}

function renderUpgrade(p, { withAnswerBlock = true } = {}) {
  const parts = [];
  if (withAnswerBlock) {
    parts.push('<section data-citation-block="answer" aria-label="Direct answer">'
      + `<p>${renderInline(p.answer)}</p>`
      + (p.expansion ? `<p>${renderInline(p.expansion)}</p>` : '')
      + `<p><strong>Source:</strong> ${esc(p.source)}</p></section>`);
  } else {
    // The page already carries an answer block from a family pass. Two answer
    // blocks is worse than one — the retriever has to choose — so the researched
    // answer and expansion go in as ordinary prose instead of being thrown away.
    // The depth is the point of the upgrade; the block wrapper is not.
    parts.push('    <h2>In more detail</h2>');
    parts.push(`    <p>${renderInline(p.answer)}</p>`);
    if (p.expansion) parts.push(`    <p>${renderInline(p.expansion)}</p>`);
  }

  const t = p.table;
  if (t && Array.isArray(t.rows) && t.rows.length) {
    parts.push(`<figure data-citation-block="table"><table><caption>${esc(t.caption)}</caption>`
      + '<thead><tr>' + (t.columns || []).map((c) => `<th scope="col">${esc(c)}</th>`).join('') + '</tr></thead><tbody>'
      + t.rows.map((r) => '<tr>' + r.map((c, i) => (i === 0 ? `<th scope="row">${esc(c)}</th>` : `<td>${esc(c)}</td>`)).join('') + '</tr>').join('')
      + '</tbody></table>' + (t.note ? `<figcaption>${esc(t.note)}</figcaption>` : '') + '</figure>');
  }

  for (const s of p.sections || []) {
    parts.push(`    <h2>${esc(s.heading)}</h2>`);
    for (const para of s.paragraphs || []) parts.push(`    <p>${renderInline(para)}</p>`);
  }
  for (const f of p.facets || []) {
    parts.push(`<section data-citation-block="facet"><h2>${esc(f.q)}</h2><p>${renderInline(f.a)}</p></section>`);
  }
  if ((p.faq || []).length) {
    parts.push('    <h2>Frequently asked</h2>');
    for (const f of p.faq) parts.push(`    <h3>${esc(f.q)}</h3>\n    <p>${renderInline(f.a)}</p>`);
  }
  return parts.join(String.fromCharCode(10));
}

/**
 * Appends upgrade content to the routes it names. A page already carrying a
 * citation answer is skipped rather than given a second one — two answer blocks
 * on a page is worse than none, because the retriever has to choose.
 */
export function applyPageUpgrades(routes) {
  const f = join(__dirname, 'page-upgrades.json');
  const out = { applied: 0, alreadyLayered: 0, notFound: [], words: {} };
  if (!existsSync(f)) return out;

  const upgrades = JSON.parse(readFileSync(f, 'utf-8'));
  const byPath = new Map(routes.filter((r) => r && r.path).map((r) => [r.path, r]));

  for (const p of upgrades) {
    const r = byPath.get(p.slug);
    if (!r) { out.notFound.push(p.slug); continue; }
    if (!r.bodyContent) { out.notFound.push(p.slug); continue; }
    // A page carrying a family-pass layer still gets the researched depth — only
    // the duplicate answer BLOCK is withheld. Skipping the whole upgrade left six
    // of nine thin pages unimproved on the first run, which defeated the point.
    const hasAnswer = r.bodyContent.includes('data-citation-block="answer"');
    if (hasAnswer) out.alreadyLayered++;

    const html = renderUpgrade(p, { withAnswerBlock: !hasAnswer });
    r.bodyContent = /<\/main>\s*$/.test(r.bodyContent)
      ? r.bodyContent.replace(/<\/main>\s*$/, `${html}\n  </main>`)
      : `${r.bodyContent}\n${html}`;
    // The upgraded description is better than the stub these pages shipped with;
    // the H1 and title are left alone because they are what currently ranks.
    if (p.description) r.description = p.description;
    out.applied++;
    out.words[p.slug] = html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  }
  return out;
}
