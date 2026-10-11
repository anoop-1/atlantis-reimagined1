/**
 * Owner guides — crawler body for the refreshed RT vs UT and NDT-inspection-cost guides
 * (2026-10-12 owner-links release). Copy: src/data/owner-guides-2026-10.json, also rendered by
 * React (src/components/OwnerGuideArticle.tsx), so both layers carry the same text.
 * Wired in through scripts/round7-body-overrides.mjs, which used to hold a hand-written
 * body for each of these two paths; every later pass (context blocks, related links,
 * citation layers, owner links) still runs on top of it as before.
 */
import { readFileSync } from 'fs';
import { OWNER_PAGES, ownerParagraphHtml, renderOwnerInline } from '../src/data/owner-links-2026-10.mjs';

export const OWNER_GUIDES = JSON.parse(readFileSync(new URL('../src/data/owner-guides-2026-10.json', import.meta.url), 'utf-8'));

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const NAV = '<header><nav aria-label="Main Navigation"><a href="/">Home</a> <a href="/blog">Blog</a> <a href="/training">Training</a> <a href="/erp">ERP</a> <a href="/digital-twins">Digital Twins</a> <a href="/contact">Free Consultation</a></nav></header>';

function sectionHtml(s) {
  const out = [`<h2>${esc(s.h)}</h2>`];
  for (const p of s.pFirst ? s.p || [] : []) out.push(`<p>${renderOwnerInline(p)}</p>`);
  if (s.ul) out.push(`<ul>${s.ul.map((li) => `<li>${renderOwnerInline(li)}</li>`).join('')}</ul>`);
  if (s.table) {
    const t = s.table;
    out.push(`<table><caption>${esc(t.caption)}</caption><thead><tr>${t.columns.map((c) => `<th>${esc(c)}</th>`).join('')}</tr></thead><tbody>${t.rows.map((r) => `<tr>${r.map((c) => `<td>${renderOwnerInline(c)}</td>`).join('')}</tr>`).join('')}</tbody></table>`);
  }
  for (const p of s.pFirst ? [] : s.p || []) out.push(`<p>${renderOwnerInline(p)}</p>`);
  if (s.faq) for (const f of s.faq) out.push(`<h3>${esc(f.q)}</h3><p>${renderOwnerInline(f.a)}</p>`);
  return out.join('\n');
}

/** Full bodyContent for an owner guide (header nav + main/article). */
export function ownerGuideBody(path) {
  const g = OWNER_GUIDES[path];
  const e = OWNER_PAGES[path];
  if (!g || !e?.h1) throw new Error(`owner-guides: no guide or H1 for ${path}`);
  const [first, ...rest] = g.intro;
  const parts = [
    `<h1>${esc(e.h1)}</h1>`,
    `<p class="lede">${renderOwnerInline(g.lede)}</p>`,
    `<p>${renderOwnerInline(first)}</p>`,
    ownerParagraphHtml(e.p),
    ...rest.map((p) => `<p>${renderOwnerInline(p)}</p>`),
    ...g.sections.map(sectionHtml),
    `<p class="updated">Updated <time datetime="${esc(g.updated)}">${esc(g.updated)}</time>.</p>`,
  ];
  return `${NAV}<main><article>\n${parts.join('\n')}\n</article></main>`;
}

/** FAQ pairs for schema (React builds the same FAQPage from the JSON). */
export function ownerGuideFaqs(path) {
  const g = OWNER_GUIDES[path];
  return (g?.sections || []).flatMap((s) => s.faq || []);
}
