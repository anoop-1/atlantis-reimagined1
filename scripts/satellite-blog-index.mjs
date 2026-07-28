#!/usr/bin/env node
/**
 * Satellite blog indexes — 2026-07-28.
 * ─────────────────────────────────────────────────────────────────────────────
 * Seven of the eight git-linked satellites publish articles under /blog/{slug}
 * and list them in sitemap.xml, but have no /blog index page at all. Those
 * articles are therefore orphans within their own site: reachable only from the
 * sitemap, with no internal link path and no PageRank flowing to them.
 *
 * This generates a real index page for each site that lacks one, listing every
 * article found under src/app/blog/, and registers /blog in the sitemap. Titles
 * and descriptions are read from each article's own exported metadata, so the
 * index reflects the articles rather than inventing summaries for them.
 */

import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const HERE = dirname(fileURLToPath(import.meta.url));
const SITES = join(HERE, '../backlink-sites');

const TARGETS = [
  ['ndt-knowledge-hub', 'NDT Knowledge Hub'],
  ['api-certification-guide', 'API Certification Guide'],
  ['advanced-ndt-techniques', 'Advanced NDT Techniques'],
  ['aerospace-ndt-standards', 'Aerospace NDT Standards'],
  ['coating-inspection-guide', 'Coating Inspection Guide'],
  ['composite-testing-hub', 'Composite Testing Hub'],
  ['construction-ndt-guide', 'Construction NDT Guide'],
];

const first = (src, key) => {
  const m = src.match(new RegExp(`${key}:\\s*("(?:[^"\\\\]|\\\\.)*")`));
  if (!m) return null;
  try { return JSON.parse(m[1]); } catch { return null; }
};

let built = 0;

for (const [site, siteName] of TARGETS) {
  const base = join(SITES, site);
  const blogDir = join(base, 'src/app/blog');
  if (!existsSync(blogDir)) continue;

  const slugs = readdirSync(blogDir).filter((d) => {
    const p = join(blogDir, d);
    return statSync(p).isDirectory() && existsSync(join(p, 'page.tsx'));
  });
  if (!slugs.length) continue;

  const items = slugs
    .map((slug) => {
      const src = readFileSync(join(blogDir, slug, 'page.tsx'), 'utf-8');
      return {
        slug,
        title: first(src, 'title') || first(src, 'headline') || slug.replace(/-/g, ' '),
        description: first(src, 'description') || '',
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title));

  const indexPath = join(blogDir, 'page.tsx');
  if (existsSync(indexPath)) continue;

  const page = `import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: ${JSON.stringify(`Articles | ${siteName}`)},
  description: ${JSON.stringify(`In-depth technical articles from ${siteName} on inspection practice, codes, qualification and the records that make an inspection defensible.`)},
  alternates: { canonical: '/blog' },
};

const articles = ${JSON.stringify(items.map((i) => ({ title: i.title, description: i.description, href: `/blog/${i.slug}` })), null, 2)};

export default function BlogIndex() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Articles</h1>
      <p className="text-slate-600 mb-10 max-w-2xl">
        Technical writing on inspection practice, applicable codes, personnel qualification, and the
        records that determine whether an inspection stands up when it is examined.
      </p>
      <ul className="space-y-8">
        {articles.map((a) => (
          <li key={a.href} className="border-b border-slate-200 pb-8 last:border-0">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              <Link href={a.href} className="hover:text-blue-700">{a.title}</Link>
            </h2>
            {a.description ? <p className="text-slate-600 leading-relaxed">{a.description}</p> : null}
            <Link href={a.href} className="inline-block mt-3 text-blue-700 font-medium hover:underline">
              Read the article →
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
`;

  writeFileSync(indexPath, page, 'utf-8');

  // Register /blog in the sitemap if it is not already there.
  const smPath = join(base, 'src/app/sitemap.ts');
  if (existsSync(smPath)) {
    let sm = readFileSync(smPath, 'utf-8');
    if (!/\/blog`/.test(sm.replace(/\/blog\/[^`]*`/g, ''))) {
      const line = "    { url: `${baseUrl}/blog`, lastModified: '2026-07-28', changeFrequency: 'weekly' as const, priority: 0.8 },\n";
      const at = sm.lastIndexOf('  ];');
      if (at > 0) {
        sm = sm.slice(0, at).replace(/,?\s*$/, ',\n') + line + sm.slice(at);
        writeFileSync(smPath, sm, 'utf-8');
      }
    }
  }

  console.log(`  + ${site}/blog  (${items.length} articles indexed)`);
  built++;
}

console.log(`\nSatellite blog indexes built: ${built}`);
