/**
 * CTR wave 15 — 2026-10-17. ERP / NDT software snippets after the software
 * consolidation (one owner per intent, CLAUDE.md §56 owner links).
 * ─────────────────────────────────────────────────────────────────────────────
 * EVIDENCE (US GSC, 90 days to ~16 Oct 2026): software queries were spread over
 * 25+ URLs with 1 click on ~3.9k impressions. Head queries: "ndt inspection
 * software" 429i p21.6, "ndt software" 415i p45.8, "ndt reporting software"
 * 258i p18.9, "best ndt software" 77i p14.4; industry queries near the top
 * ("tank inspection software" 20i p6, "pipeline inspection software" 16i p6.8,
 * "construction quality control software" 15i p8.3, "petrochemical inspection
 * software" 26i p14.5, "refinery inspection software" 17i p10.2). Before this
 * wave, /ndt-erp-solution carried "NDT Inspection Software" in its title, and
 * /intelligent-reporting-software, /ndt-reporting-software-comparison and
 * /erp/inspection-reporting-software-code-templates all led with "NDT Reporting
 * Software". Owners now hold the head terms; every other page is re-angled.
 *
 * ONE SOURCE: src/data/ctr-wave15-software-meta.json, also read by
 * src/data/money-pages.ts, scripts/software-competitive/best-software.mjs,
 * ERP_HUB_META (/ndt-erp-solution) and the React pages. Depth pages, blogs.json
 * posts and src/data/erp-apps/*.json keep their own copy; assertWave15 fails the
 * build if a copy drifts, so the crawler <title> and the React <title> agree.
 *
 * Scope: ERP / NDT software paths only (another workstream owns wave 14).
 * ERP_HUB_META re-asserts /erp and /ndt-erp-solution after every wave, so the
 * /ndt-erp-solution entry is read from this file by ERP_HUB_META as well.
 * Rules: title <= 60, description 140-155 (inside the trimmer cap; listed in
 * AUTHORED_GEOMETRY_WAVES), no numerals except standards designations, no price,
 * no Odoo, every claim already on the page.
 * Re-measure: 2026-11-14 (four weeks after deploy), position first, then CTR.
 */
import { readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const ROOT = join(here, '..');
const RAW = JSON.parse(readFileSync(join(ROOT, 'src', 'data', 'ctr-wave15-software-meta.json'), 'utf-8'));

export const CTR_WAVE15_OVERRIDES = Object.fromEntries(Object.entries(RAW).filter(([k]) => k.startsWith('/')));

/** ERP / NDT software paths only. */
const SOFTWARE_PATH = /^\/(?:erp\/.+|ndt-erp-[a-z-]+|ndt-inspection-software|best-ndt-reporting-software-2026|ndt-connect|blog\/[a-z0-9-]*(?:software|erp)[a-z0-9-]*)$/;

/** Standards designations are the only numerals allowed in ERP copy. */
const STANDARDS = /\b(?:API|ISO|NAS|ASME|AWS|EN)\s?(?:Std\s)?\d[\dA-Za-z./-]*|\bSNT-TC-1A\b|\bCP-189\b|\bChapter \d+\b/g;

export function wave15Numerals(text) {
  return String(text || '').replace(STANDARDS, '').match(/\d/g) || [];
}

export function assertWave15(knownPaths) {
  const bad = [];
  for (const [p, o] of Object.entries(CTR_WAVE15_OVERRIDES)) {
    if (!SOFTWARE_PATH.test(p)) bad.push(`${p}: not an ERP/software path`);
    if (!o.title || o.title.length > 60) bad.push(`${p}: title ${o.title?.length}`);
    if (!o.description || o.description.length < 140 || o.description.length > 155) bad.push(`${p}: description ${o.description?.length}`);
    const all = `${o.title} ${o.description}`;
    if (/[$€£₹]\s?\d|\b(?:USD|INR|AED|SAR|CAD|GBP|EUR)\s?\d|\bpric(?:e|es|ing)\b/i.test(all)) bad.push(`${p}: price wording`);
    if (/odoo/i.test(all)) bad.push(`${p}: Odoo`);
    if (wave15Numerals(all).length) bad.push(`${p}: numeral outside a standards designation`);
    if (/\b(?:#1|best-in-class|leading|guaranteed|certified compliant)\b/i.test(all.replace(/^Best NDT/, ''))) bad.push(`${p}: claim word`);
    if (knownPaths && !knownPaths.has(p)) bad.push(`${p}: not a built page`);
  }

  // Copies that the React layer reads must match the crawler title exactly (§19.1).
  const depth = JSON.parse(readFileSync(join(ROOT, 'src', 'data', 'depth-pages.json'), 'utf-8'));
  const depthBySlug = new Map(depth.map((d) => [d.slug, d]));
  const blogs = JSON.parse(readFileSync(join(ROOT, 'src', 'data', 'blogs.json'), 'utf-8'));
  const blogBySlug = new Map(blogs.map((b) => [`/blog/${b.slug}`, b]));
  for (const [p, o] of Object.entries(CTR_WAVE15_OVERRIDES)) {
    const d = depthBySlug.get(p);
    if (d && (d.title !== o.title || d.description !== o.description)) bad.push(`${p}: depth-pages.json title/description differ from wave 15`);
    const b = blogBySlug.get(p);
    if (p.startsWith('/blog/') && !b) bad.push(`${p}: not in blogs.json`);
    if (b && (b.title !== o.title || b.metaDescription !== o.description)) bad.push(`${p}: blogs.json title/metaDescription differ from wave 15`);
    const app = p.match(/^\/erp\/apps\/([a-z0-9-]+)(?:\/([a-z0-9-]+))?$/);
    if (app) {
      const f = join(ROOT, 'src', 'data', 'erp-apps', `${app[1]}${app[2] ? `--${app[2]}` : ''}.json`);
      if (!existsSync(f)) bad.push(`${p}: no ${f}`);
      else {
        const a = JSON.parse(readFileSync(f, 'utf-8'));
        if (a.title !== o.title || a.metaDescription !== o.description) bad.push(`${p}: erp-apps JSON title/metaDescription differ from wave 15`);
      }
    }
  }
  if (bad.length) throw new Error(`CTR wave 15 overrides invalid:\n  ${bad.join('\n  ')}`);
  return true;
}
