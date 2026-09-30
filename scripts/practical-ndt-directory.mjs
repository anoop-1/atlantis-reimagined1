// Crawler-layer "Practical NDT across North America" directory for /practical-ndt.
// Why: wave 2 (2026-09-30) added ~196 North American city pages and 29
// state/province hubs; without inbound links they would be orphans that Google
// discovers only via the sitemap. The React layer renders the same data in
// src/components/PracticalNdtDirectory.tsx (two-layer rule).
import { readFileSync, existsSync } from 'fs';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

export function practicalNdtDirectoryHtml(root = process.cwd()) {
  const file = `${root}/src/data/practical-ndt-directory.json`;
  if (!existsSync(file)) return '';
  const groups = JSON.parse(readFileSync(file, 'utf-8'));
  const parts = groups.map((g) => {
    const head = g.slug
      ? `<h3><a href="/practical-ndt-${g.slug}">Practical NDT in ${esc(g.name)}</a></h3>`
      : `<h3>${esc(g.name)}</h3>`;
    const links = g.cities.map((c) => `<li><a href="/practical-ndt-${c.slug}">${esc(c.city)}</a></li>`).join('');
    return `${head}<ul>${links}</ul>`;
  });
  return `<section class="practical-ndt-directory"><h2>Practical NDT across North America</h2><p>Browse the NDT simulator by state or province, or go straight to your city. Every page covers the local industries, regulators and the environments and methods that match the work there.</p>${parts.join('')}</section>`;
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
