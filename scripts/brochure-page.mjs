// /brochure crawler body (owner, 2026-11-07): view and download the company brochure 2026.
// Same data and renderer as the React page (src/pages/Brochure.tsx): src/data/brochure-2026.{json,mjs}.
import { readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { brochureHtml, brochureSchema, assertBrochureClean } from '../src/data/brochure-2026.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
export const BROCHURE = JSON.parse(readFileSync(join(HERE, '..', 'src', 'data', 'brochure-2026.json'), 'utf8'));
const inPublic = (p) => existsSync(join(HERE, '..', 'public', p.replace(/^\//, '')));

export function brochureRoute() {
  assertBrochureClean(BROCHURE, inPublic);
  return {
    path: BROCHURE.path,
    title: BROCHURE.title,
    description: BROCHURE.description,
    canonical: `https://atlantisndt.com${BROCHURE.path}`,
    publishedAt: '2026-11-07',
    structuredData: brochureSchema(BROCHURE),
    bodyContent: `  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/training">Training</a><a href="/consulting">Consulting</a><a href="/inspection">Inspection</a><a href="/erp">ERP</a><a href="/contact">Contact</a></nav></header>
  <main>
${brochureHtml(BROCHURE)}
  </main>`,
  };
}
