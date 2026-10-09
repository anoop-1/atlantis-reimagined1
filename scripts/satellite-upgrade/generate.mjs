import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { products, sites } from './catalog.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '../..');
const base = path.join(root, 'backlink-sites');
const write = (file, text) => fs.writeFileSync(file, text.replace(/\r\n/g, '\n'));
const walk = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? walk(path.join(dir, entry.name)) : [path.join(dir, entry.name)]);
const decode = text => text.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&apos;|&#39;|\\'/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();
let pages = 0, claims = 0;
for (const site of sites) {
  const app = path.join(base, site.slug, 'src/app');
  const home = path.join(app, 'page.tsx');
  const oldHome = fs.readFileSync(home, 'utf8');
  const dataFile = path.join(app, '_satellite-data.ts');
  let guides;
  // Preserve the original curated resource links on repeat generation.
  if (fs.existsSync(dataFile)) {
    const existing = fs.readFileSync(dataFile, 'utf8').match(/export const site = ([\s\S]*?);\nexport const offers/);
    guides = existing && JSON.parse(existing[1]).guides;
  }
  if (!guides) {
    guides = [...oldHome.matchAll(/<a\s+[^>]*href="(\/[^"#?]*)"[^>]*>([\s\S]*?)<\/a>/g)]
      .map(match => ({ href: match[1], label: decode(match[2]) }))
      .filter(guide => guide.href !== '/' && guide.label && fs.existsSync(path.join(app, guide.href, 'page.tsx')));
    guides = [...new Map(guides.map(guide => [guide.href, guide])).values()].slice(0, 8);
    if (!guides.length) {
      guides = fs.readdirSync(app, { withFileTypes: true }).filter(entry => entry.isDirectory() && fs.existsSync(path.join(app, entry.name, 'page.tsx')))
        .slice(0, 8).map(entry => ({ href: '/' + entry.name, label: entry.name.replace(/-/g, ' ').replace(/^./, c => c.toUpperCase()) }));
    }
  }
  if (!guides.length) throw new Error(`No verified resource links for ${site.slug}`);
  const googleVerification = ['ndt-knowledge-hub', 'petrochemical-ndt-hub', 'tank-inspection-resource'].includes(site.slug) ? 'dlNM5ly7deh5YYSr3uXXCL_lyNXxdluY229Ywzm34nE' : '';
  const data = { ...site, guides, googleVerification, description: `${site.name}: practical scoping questions and subject guides for ${site.audience.toLowerCase()}. Explore relevant Atlantis NDT support.` };
  const offers = [site.primary, ...site.related].map(key => ({ key, ...products[key] }));
  write(dataFile, `// Generated from scripts/satellite-upgrade/catalog.mjs. Edit the source and regenerate.\nexport const site = ${JSON.stringify(data, null, 2)};\nexport const offers = ${JSON.stringify(offers, null, 2)};\ntype Offer = typeof offers[number];\nexport function contactUrl(offer: Offer, placement: string) {\n  const url = new URL('/contact', 'https://atlantisndt.com');\n  url.search = new URLSearchParams({ service: offer.service, subject: site.name + ': ' + offer.name, satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: placement }).toString();\n  return url.toString();\n}\nexport function productUrl(offer: Offer) { return 'https://atlantisndt.com' + offer.path; }\n`);
  write(home, fs.readFileSync(path.join(here, 'home.tsx.template'), 'utf8'));
  write(dataFile, fs.readFileSync(dataFile, 'utf8').replace(
    "export function productUrl(offer: Offer) { return 'https://atlantisndt.com' + offer.path; }",
    "export function productUrl(offer: Offer) { const url = new URL(offer.path, 'https://atlantisndt.com'); url.search = new URLSearchParams({ satellite: site.slug, cta: 'product', utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: 'product' }).toString(); return url.toString(); }"
  ));
  write(path.join(app, 'layout.tsx'), fs.readFileSync(path.join(here, 'layout.tsx.template'), 'utf8'));
  write(path.join(app, 'satellite.css'), fs.readFileSync(path.join(here, 'site.css'), 'utf8'));
  const packageFile = path.join(base, site.slug, 'package.json');
  const pkg = JSON.parse(fs.readFileSync(packageFile, 'utf8'));
  // Same release line, patched version documented by the Next.js maintainer.
  pkg.dependencies.next = '14.2.35';
  write(packageFile, JSON.stringify(pkg, null, 2) + '\n');
  // Existing routes stay intact. Correct exact legacy boilerplate claims and
  // JSX attributes, provide page-specific canonicals, and retain article bodies.
  for (const file of walk(app).filter(file => file.endsWith('/page.tsx') || file.endsWith('\\page.tsx'))) {
    if (file === home) continue;
    let text = fs.readFileSync(file, 'utf8');
    const before = text;
    text = text.replace(/With 50\+ ASNT Level III certified professionals,\s*they serve oil &amp; gas, aerospace, marine, and power generation industries globally\./g, () => { claims++; return 'Discuss the required personnel qualifications, scope and delivery availability directly with Atlantis.'; });
    text = text.replace(/world-class NDT consulting, training, and digital twin solutions/g, 'NDT consulting, training, and digital twin solutions');
    text = text.replace(/\bclass="/g, 'className="');
    const route = '/' + path.relative(app, path.dirname(file)).split(path.sep).join('/');
    if (/export const metadata(?::\s*Metadata)?\s*=\s*\{/.test(text) && !/alternates\s*:/.test(text)) {
      text = text.replace(/(export const metadata(?::\s*Metadata)?\s*=\s*\{)/, `$1\n  alternates: { canonical: ${JSON.stringify(site.domain + route)} },`);
    } else if (!/export const metadata|generateMetadata/.test(text)) {
      if (/['"]use client['"]/.test(text)) throw new Error(`Client route needs a server metadata wrapper: ${file}`);
      const title = decode(text.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] || route.split('/').pop().replace(/-/g,' '));
      text = `export const metadata = { title: ${JSON.stringify(title)}, alternates: { canonical: ${JSON.stringify(site.domain + route)} } };\n\n` + text;
    }
    // Old generic homepage anchors are routed according to their actual labels.
    text = text.replace(/<a\s+([^>]*?)href="https:\/\/atlantisndt\.com\/?"([^>]*)>([\s\S]*?)<\/a>/g, (all, before, after, label) => {
      const lower=decode(label).toLowerCase();
      const key=/erp|software|digital solution/.test(lower)?'erp':/digital twin/.test(lower)?'twin':/reporting/.test(lower)?'reporting':/simulat|practical/.test(lower)?'simulation':/consult|level iii|level 3/.test(lower)?'consulting':/training|certification/.test(lower)?'training':/inspect|testing/.test(lower)?'inspection':site.primary;
      const safeKey=site.slug==='api-certification-guide'&&key==='training'?'consulting':key;
      return `<a ${before}href="https://atlantisndt.com${products[safeKey].path}"${after}>${label}</a>`;
    });
    // Replace anonymous, generic contact links with an intent-preserving route.
    const contact = new URL('/contact', 'https://atlantisndt.com');
    contact.search = new URLSearchParams({ service: products[site.primary].service, subject: `${site.name}: ${products[site.primary].name}`, satellite: site.slug, cta: 'article', utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: 'article' }).toString();
    text = text.replace(/href="https:\/\/atlantisndt\.com\/contact"/g, `href="${contact.toString().replace(/&/g, '&amp;')}"`);
    if (text !== before) { write(file, text); pages++; }
  }
  // Build the sitemap from actual published routes, not historical inventories.
  const routes = walk(app).filter(file => /[\\/]page\.tsx$/.test(file)).map(file => '/' + path.relative(app, path.dirname(file)).split(path.sep).join('/'));
  write(path.join(app, 'sitemap.ts'), `import type { MetadataRoute } from 'next';\nconst routes = ${JSON.stringify(routes.sort(), null, 2)};\nexport default function sitemap(): MetadataRoute.Sitemap {\n  return routes.map(route => ({ url: ${JSON.stringify(site.domain)} + route }));\n}\n`);
  write(path.join(app, 'robots.ts'), `import type { MetadataRoute } from 'next';\nexport default function robots(): MetadataRoute.Robots { return { rules: { userAgent: '*', allow: '/' }, sitemap: ${JSON.stringify(site.domain + '/sitemap.xml')} }; }\n`);
}
console.log(JSON.stringify({ sites: sites.length, existingPagesUpdated: pages, unsupportedBoilerplateClaimsCorrected: claims }));
