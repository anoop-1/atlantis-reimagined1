/**
 * author-entity.mjs — crawler-layer extras for /authors/anoop-rayavarapu (2026-10-04).
 *
 * The profile sections live in src/data/author-anoop-profile.json so the React
 * page (src/pages/authors/anoop-rayavarapu.tsx) and the static prerender HTML
 * render the same words (two-layer rule). prerender.mjs splices
 * AUTHOR_PROFILE_HTML into the existing author route's bodyContent and adds
 * AUTHOR_BREADCRUMB to its @graph.
 */
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const profile = JSON.parse(readFileSync(join(__dirname, '..', 'src', 'data', 'author-anoop-profile.json'), 'utf-8'));

export const AUTHOR_URL = 'https://atlantisndt.com/authors/anoop-rayavarapu';
export const AUTHOR_ID = 'https://atlantisndt.com/#anoop-rayavarapu';

export const AUTHOR_PROFILE_HTML = profile.sections
  .map((s) => `    <section><h2>${s.h2}</h2>${s.html}</section>\n`)
  .join('');

export const AUTHOR_BREADCRUMB = {
  '@type': 'BreadcrumbList',
  '@id': `${AUTHOR_URL}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://atlantisndt.com/' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://atlantisndt.com/about' },
    { '@type': 'ListItem', position: 3, name: 'Anoop Rayavarapu', item: AUTHOR_URL },
  ],
};
