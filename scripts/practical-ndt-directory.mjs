// Crawler-layer "Practical NDT across North America" directory for /practical-ndt.
// Why: wave 2 (2026-09-30) added ~196 North American city pages and 29
// state/province hubs; without inbound links they would be orphans that Google
// discovers only via the sitemap. The React layer renders the same data in
// src/components/PracticalNdtDirectory.tsx (two-layer rule).
import { readFileSync, existsSync } from 'fs';
import { WHERE, whereGroups } from '../src/data/practical-ndt-where-2026-10.mjs';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

export function practicalNdtDirectoryHtml(root = process.cwd()) {
  const file = `${root}/src/data/practical-ndt-directory.json`;
  if (!existsSync(file)) return '';
  const groups = JSON.parse(readFileSync(file, 'utf-8'));
  const hubsFile = `${root}/src/data/geo-hubs.json`;
  const hubs = existsSync(hubsFile) ? JSON.parse(readFileSync(hubsFile, 'utf-8')) : [];
  // 2026-10-18 (traffic): one compact section (src/data/practical-ndt-where-2026-10.mjs) instead of
  // 29 "Practical NDT in {State}" H3 groups plus a separate country directory.
  const lines = whereGroups(groups, hubs).map((g) => `<p><strong>${esc(g.label)}:</strong> ${g.links.map(([href, name]) => `<a href="${href}">${esc(name)}</a>`).join(' · ')}</p>`);
  return `<section class="practical-ndt-directory"><h2>${esc(WHERE.h2)}</h2><p>${esc(WHERE.intro)}</p>${lines.join('')}</section>`;
}

export function applyPracticalNdtDirectory(routes, root = process.cwd()) {
  const html = practicalNdtDirectoryHtml(root);
  if (!html) return 0;
  const r = routes.find((x) => x.path === '/practical-ndt');
  if (!r || !r.bodyContent || r.bodyContent.includes('practical-ndt-directory')) return 0;
  const i = r.bodyContent.lastIndexOf('</main>');
  if (i < 0) return 0;
  r.bodyContent = r.bodyContent.slice(0, i) + html + r.bodyContent.slice(i);
  return 1;
}
