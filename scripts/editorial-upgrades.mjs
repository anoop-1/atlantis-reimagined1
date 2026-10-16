// One editorial upgrades map for both layers (2026-10-16). Read by editorialBlogRecord()
// (scripts/editorial-blog-data.mjs → BlogDetail's per-slug JSON) and applyEditorialQuality()
// (scripts/editorial-quality-pass.mjs → the published crawler HTML), so the two cannot drift.
//   src/data/editorial-page-upgrades.json   hand-written upgrades {path: {title, description, html, replace, canonical, h1, updatedAt, dropFields, faqSchema}}
//   scripts/practice-tests-2026-10.mjs      practice-test pages generated from src/data/practice-tests/*.json
//   src/data/asnt-certification-2026-10.*   /asnt-certification crawler page, rendered from the same JSON as the React page
// Data blocks: an upgrade's html may carry <!--data:NAME--> placeholders, filled here from the
// data file that owns the figures (one source per fact, CLAUDE.md §19.1/§46.3). An unknown name fails the build.
import { readFileSync } from 'node:fs';
import { practiceTestUpgrades } from './practice-tests-2026-10.mjs';
import { asntCertificationUpgrade } from '../src/data/asnt-certification-2026-10.mjs';

const readJson = (rel) => JSON.parse(readFileSync(new URL(rel, import.meta.url), 'utf8'));
const base = readJson('../src/data/editorial-page-upgrades.json');
const HOURS = readJson('../src/data/snt-tc-1a-hours.json');
const ASNT_CERT = readJson('../src/data/asnt-certification-2026-10.json');

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** SNT-TC-1A Level I/II classroom and method-experience hours, from snt-tc-1a-hours.json only. */
function sntHoursTable() {
  const rows = Object.keys(HOURS.classroom).map((m) => {
    const c = HOURS.classroom[m], o = HOURS.ojt[m];
    const cells = [c[0], o && o[0], c[1], o && o[1]];
    if (cells.some((v) => !/^\d+$/.test(String(v)))) throw new Error(`editorial-upgrades: snt-tc-1a-hours.json ${m} Level I/II hours must be numbers`);
    return `<tr><th scope="row">${esc(HOURS.methodNames[m] || m)}</th>${cells.map((v) => `<td>${v}</td>`).join('')}</tr>`;
  }).join('');
  return '<table><caption>SNT-TC-1A recommended minimum hours by method for Level I and Level II. Level II hours are in addition to Level I. The employer’s written practice sets the binding numbers.</caption>'
    + '<thead><tr><th scope="col">Method</th><th scope="col">Level I classroom training (hours)</th><th scope="col">Level I experience in the method (hours)</th><th scope="col">Level II classroom training (hours)</th><th scope="col">Level II experience in the method (hours)</th></tr></thead>'
    + `<tbody>${rows}</tbody></table>`;
}
const DATA_BLOCKS = { 'snt-tc-1a-hours-table': sntHoursTable };
for (const [path, u] of Object.entries(base)) {
  if (!u.html || !u.html.includes('<!--data:')) continue;
  u.html = u.html.replace(/<!--data:([a-z0-9-]+)-->/g, (_, name) => {
    if (!DATA_BLOCKS[name]) throw new Error(`editorial-upgrades: ${path} uses unknown data block "${name}"`);
    return DATA_BLOCKS[name]();
  });
}

const practice = practiceTestUpgrades();
const generated = { ...practice, ...asntCertificationUpgrade(ASNT_CERT, HOURS) };
for (const path of Object.keys(generated)) {
  if (base[path]) throw new Error(`editorial-upgrades: ${path} is in editorial-page-upgrades.json and is also generated; keep one source`);
}
if (Object.keys(practice).some((p) => p in asntCertificationUpgrade(ASNT_CERT, HOURS))) throw new Error('editorial-upgrades: a generated path is produced twice');

export const EDITORIAL_PAGE_UPGRADES = { ...base, ...generated };
