#!/usr/bin/env node
/**
 * Generates thin wrapper pages for <ReportingLocationPage> per city.
 * Also generates route entries + App.tsx insert snippets + sitemap URLs.
 * Run: node scripts/gen-reporting-pages.mjs
 */

import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PAGES_DIR = join(__dirname, "..", "src", "pages");

// ── city → {display, country, slug, pascal} ────────────────────────────────
const cities = [
  { slug: "houston",          display: "Houston",          country: "USA",          pascal: "Houston" },
  { slug: "dubai",            display: "Dubai",            country: "UAE",          pascal: "Dubai" },
  { slug: "abu-dhabi",        display: "Abu Dhabi",        country: "UAE",          pascal: "AbuDhabi" },
  { slug: "saudi-arabia",     display: "Saudi Arabia",     country: "Saudi Arabia", pascal: "SaudiArabia" },
  { slug: "calgary",          display: "Calgary",          country: "Canada",       pascal: "Calgary" },
  { slug: "singapore",        display: "Singapore",        country: "Singapore",    pascal: "Singapore" },
  { slug: "mumbai",           display: "Mumbai",           country: "India",        pascal: "Mumbai" },
  { slug: "london",           display: "London",           country: "UK",           pascal: "London" },
  { slug: "perth",            display: "Perth",            country: "Australia",    pascal: "Perth" },
  { slug: "doha",             display: "Doha",             country: "Qatar",        pascal: "Doha" },
  { slug: "kuwait",           display: "Kuwait",           country: "Kuwait",       pascal: "Kuwait" },
  { slug: "muscat",           display: "Muscat",           country: "Oman",         pascal: "Muscat" },
  { slug: "hyderabad",        display: "Hyderabad",        country: "India",        pascal: "Hyderabad" },
  { slug: "chennai",          display: "Chennai",          country: "India",        pascal: "Chennai" },
  { slug: "kuala-lumpur",     display: "Kuala Lumpur",     country: "Malaysia",     pascal: "KualaLumpur" },
  { slug: "lagos",            display: "Lagos",            country: "Nigeria",      pascal: "Lagos" },
  { slug: "new-orleans",      display: "New Orleans",      country: "USA",          pascal: "NewOrleans" },
  { slug: "denver",           display: "Denver",           country: "USA",          pascal: "Denver" },
  { slug: "aberdeen",         display: "Aberdeen",         country: "UK",           pascal: "Aberdeen" },
  { slug: "oslo",             display: "Oslo",             country: "Norway",       pascal: "Oslo" },
  { slug: "rotterdam",        display: "Rotterdam",        country: "Netherlands",  pascal: "Rotterdam" },
  { slug: "manama",           display: "Manama",           country: "Bahrain",      pascal: "Manama" },
  { slug: "odessa",           display: "Odessa",           country: "USA",          pascal: "Odessa" },
  { slug: "bergen",           display: "Bergen",           country: "Norway",       pascal: "Bergen" },
  { slug: "ras-al-khaimah",   display: "Ras Al Khaimah",   country: "UAE",          pascal: "RasAlKhaimah" },
];

const template = (c) => `import ReportingLocationPage from '@/components/ReportingLocationPage';

export default function NDTReporting${c.pascal}() {
  return <ReportingLocationPage city="${c.display}" country="${c.country}" slug="ndt-reporting-${c.slug}" />;
}
`;

let created = 0;
let skipped = 0;
for (const c of cities) {
  const filePath = join(PAGES_DIR, `ndt-reporting-${c.slug}.tsx`);
  if (existsSync(filePath)) {
    skipped++;
    continue;
  }
  writeFileSync(filePath, template(c), "utf8");
  created++;
}

// ── App.tsx lazy-import block ─────────────────────────────────────────────
const lazyImports = cities
  .map((c) => `const NDTReporting${c.pascal} = lazy(() => import("./pages/ndt-reporting-${c.slug}"));`)
  .join("\n");

// ── App.tsx route block ───────────────────────────────────────────────────
const routes = cities
  .map(
    (c) =>
      `                  <Route path="/ndt-reporting-${c.slug}" element={<LazyRoute Component={NDTReporting${c.pascal}} />} />`
  )
  .join("\n");

// ── Sitemap URL block ─────────────────────────────────────────────────────
const today = new Date().toISOString().split("T")[0];
const sitemapEntries = cities
  .map(
    (c) => `  <url>
    <loc>https://atlantisndt.com/ndt-reporting-${c.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join("\n");

writeFileSync(
  join(__dirname, "reporting-pages-snippets.txt"),
  `=== LAZY IMPORTS (paste into App.tsx with other lazy imports) ===\n\n${lazyImports}\n\n=== ROUTES (paste into App.tsx inside <Routes>) ===\n\n${routes}\n\n=== SITEMAP ENTRIES (paste into sitemap XML) ===\n\n${sitemapEntries}\n`,
  "utf8"
);

console.log(`Reporting pages: ${created} created, ${skipped} skipped.`);
console.log(`Snippets for App.tsx + sitemap written to scripts/reporting-pages-snippets.txt`);
console.log(`Total cities: ${cities.length}`);
