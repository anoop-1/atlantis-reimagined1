// City jump links 2026-10-04 (competitor teardown 2026-10-02 §4.0 item 2).
// Google ranks the regional / Level III page instead of the city training
// page for "ndt training seattle" and "ndt training san diego". The fix is
// linking, not removal: the competing page carries an exact-anchor link to the
// city page directly under its H1. Data: src/data/city-jump-links.json. The
// React layer renders the same data in src/components/CityJumpLinks.tsx
// (two-layer rule) — keep the markup text identical.
import { readFileSync, existsSync } from 'fs';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function cityJumpHtml(entry) {
  const links = entry.links.map((l) => `<a href="${esc(l.href)}">${esc(l.anchor)}</a>`).join(' · ');
  return `\n    <p class="city-jump-links"><strong>${esc(entry.lead)}</strong> ${links}</p>`;
}

export function applyCityJumpLinks(routes, root = process.cwd()) {
  const file = `${root}/src/data/city-jump-links.json`;
  if (!existsSync(file)) return { applied: 0, missing: [] };
  const map = JSON.parse(readFileSync(file, 'utf-8'));
  let applied = 0;
  const missing = [];
  for (const [path, entry] of Object.entries(map)) {
    const r = routes.find((x) => x && x.path === path);
    if (!r || typeof r.bodyContent !== 'string') { missing.push(path); continue; }
    if (r.bodyContent.includes('class="city-jump-links"')) continue;
    const i = r.bodyContent.search(/<\/h1>/i);
    if (i < 0) { missing.push(path); continue; }
    r.bodyContent = r.bodyContent.slice(0, i + 5) + cityJumpHtml(entry) + r.bodyContent.slice(i + 5);
    applied++;
  }
  return { applied, missing };
}
