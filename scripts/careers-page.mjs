// /careers and /careers/{job} crawler bodies (owner, 2026-11-20). Same data and renderer as the React pages
// (src/pages/Careers.tsx, src/pages/CareerJob.tsx): src/data/careers-2026-11.{json,mjs}.
// These pages carry no sales blocks: they are excluded from the keyword links, intent routes, inline enquiry
// forms, the global enquiry bar and orphan rescue (see the 2026-11-20 comments in those modules).
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { careersHubHtml, careerJobHtml, careersHubSchema, jobPostingSchema, assertCareersClean, SITE } from '../src/data/careers-2026-11.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
export const CAREERS = JSON.parse(readFileSync(join(HERE, '..', 'src', 'data', 'careers-2026-11.json'), 'utf8'));
export const CAREERS_PATHS = [CAREERS.hub.path, ...CAREERS.jobs.map((j) => j.path)];

const HEADER = '  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/about">About</a><a href="/careers">Careers</a><a href="/training">Training</a><a href="/consulting">Consulting</a><a href="/contact">Contact</a></nav></header>';

export function careersRoutes() {
  assertCareersClean(CAREERS);
  const hub = {
    path: CAREERS.hub.path,
    title: CAREERS.hub.title,
    description: CAREERS.hub.description,
    canonical: SITE + CAREERS.hub.path,
    publishedAt: '2026-11-20',
    structuredData: careersHubSchema(CAREERS),
    bodyContent: `${HEADER}\n  <main>\n${careersHubHtml(CAREERS)}\n  </main>`,
  };
  const jobs = CAREERS.jobs.map((j) => ({
    path: j.path,
    title: j.title,
    description: j.description,
    canonical: SITE + j.path,
    publishedAt: j.datePosted,
    structuredData: jobPostingSchema(CAREERS, j),
    bodyContent: `${HEADER}\n  <main>\n${careerJobHtml(CAREERS, j)}\n  </main>`,
  }));
  return [hub, ...jobs];
}

/** Post-build check: every internal link on the careers pages points at a built page. */
export function assertCareersLinks(builtPaths) {
  assertCareersClean(CAREERS, builtPaths);
}
