/**
 * Case stories from completed engagements — crawler side (CLAUDE.md §53).
 * Same data as src/pages/CaseStoryPage.tsx and the /case-studies hub section:
 * src/data/case-stories-2026-10.json.
 *   caseStoryRoutes()        full crawler pages (Article + BreadcrumbList), pushed into routes
 *   applyCaseStoriesHub(r)   "Field engagements" section on /case-studies, before </main>
 *   assertCaseStoriesClean() no prices, no outcome numbers, links built, no page under ~400 words
 */
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DATA = JSON.parse(readFileSync(join(ROOT, 'src/data/case-stories-2026-10.json'), 'utf-8'));
const SITE = 'https://atlantisndt.com';
export const STORIES_MARKER = 'data-case-stories="2026-10"';
export const caseStoryStats = { routes: 0, hub: 0 };
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const storyPath = (s) => `/case-studies/${s.slug}`;

function storyBody(s) {
  const facts = s.facts.map(([k, v]) => `<tr><th scope="row">${esc(k)}</th><td>${esc(v)}</td></tr>`).join('');
  const sections = s.sections.map((sec) => {
    const ps = (sec.p || []).map((t) => `<p>${esc(t)}</p>`).join('\n      ');
    const list = sec.list ? `<ul>${sec.list.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>` : '';
    return `<h2>${esc(sec.h)}</h2>\n      ${ps}${list ? '\n      ' + list : ''}`;
  }).join('\n      ');
  const links = s.links.map(([href, label]) => `<li><a href="${esc(href)}">${esc(label)}</a></li>`).join('');
  return `  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/case-studies">Case Studies</a><a href="/consulting">Consulting</a><a href="/contact">Contact</a></nav></header>
  <main>
    <article ${STORIES_MARKER}>
      <p><a href="/case-studies">Case studies</a> · ${esc(s.sector)}</p>
      <h1>${esc(s.h1)}</h1>
      <p>${esc(s.card)}</p>
      <table><caption>The engagement at a glance</caption><tbody>${facts}</tbody></table>
      ${sections}
      <h2>Related</h2>
      <ul>${links}</ul>
      <p><a href="${esc(s.cta[0])}">${esc(s.cta[1])}</a></p>
    </article>
  </main>`;
}

export function caseStoryRoutes() {
  const out = DATA.stories.map((s) => {
    const path = storyPath(s);
    return {
      path,
      title: s.title,
      description: s.description,
      canonical: `${SITE}${path}`,
      bodyContent: storyBody(s),
      structuredData: {
        '@context': 'https://schema.org',
        '@graph': [
          { '@type': 'Article', headline: s.h1, description: s.description, articleSection: 'Case studies',
            datePublished: '2026-10-10', dateModified: '2026-10-10', url: `${SITE}${path}`,
            author: { '@type': 'Person', name: 'Anoop Rayavarapu', url: `${SITE}/authors/anoop-rayavarapu` },
            publisher: { '@type': 'Organization', name: 'Atlantis NDT', url: SITE } },
          { '@type': 'BreadcrumbList', itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
            { '@type': 'ListItem', position: 2, name: 'Case studies', item: `${SITE}/case-studies` },
            { '@type': 'ListItem', position: 3, name: s.h1.replace(/^Case study:\s*/i, ''), item: `${SITE}${path}` },
          ] },
        ],
      },
    };
  });
  caseStoryStats.routes = out.length;
  return out;
}

export function caseStoriesHubHtml() {
  const cards = DATA.stories.map((s) => `<li><a href="${storyPath(s)}">${esc(s.h1.replace(/^Case study:\s*/i, ''))}</a>. ${esc(s.card)}</li>`).join('');
  return `
    <section ${STORIES_MARKER} aria-label="${esc(DATA.hub.heading)}">
      <h2>${esc(DATA.hub.heading)}</h2>
      <p>${esc(DATA.hub.intro)}</p>
      <ul>${cards}</ul>
    </section>
`;
}

export function applyCaseStoriesHub(route) {
  if (route?.path !== '/case-studies' || typeof route.bodyContent !== 'string' || route.bodyContent.includes(STORIES_MARKER)) return route;
  const html = caseStoriesHubHtml();
  // Lead the hub with the field engagements: right after the H1's paragraph when present.
  const h1 = route.bodyContent.indexOf('</h1>');
  let body;
  if (h1 >= 0) {
    const pEnd = route.bodyContent.indexOf('</p>', h1);
    const at = pEnd >= 0 ? pEnd + 4 : h1 + 5;
    body = route.bodyContent.slice(0, at) + html + route.bodyContent.slice(at);
  } else {
    const i = route.bodyContent.lastIndexOf('</main>');
    body = i >= 0 ? route.bodyContent.slice(0, i) + html + route.bodyContent.slice(i) : route.bodyContent + html;
  }
  caseStoryStats.hub++;
  return { ...route, bodyContent: body };
}

export function assertCaseStoriesClean(knownPaths) {
  const blob = JSON.stringify(DATA);
  if (/[$£€₹]\s?\d|\bUSD\b|\bper (day|hour)\b|\bday[- ]rate of\b/i.test(blob)) throw new Error('case-stories: pricing pattern in copy');
  if (/\d+\s?%|\b\d+\s+(?:findings|defects|technicians|welds|reports)\b/i.test(blob)) throw new Error('case-stories: outcome number in copy (owner has not supplied any)');
  for (const s of DATA.stories) {
    const text = storyBody(s).replace(/<[^>]+>/g, ' ');
    const words = text.split(/\s+/).filter(Boolean).length;
    if (words < 400) throw new Error(`case-stories: ${s.slug} renders ${words} words (minimum ~400)`);
    if (knownPaths) for (const href of [...s.links.map((l) => l[0]), s.cta[0], ...s.inbound]) {
      const base = href.split('#')[0].split('?')[0];
      if (!knownPaths.has(base)) throw new Error(`case-stories: link target not built: ${href} (${s.slug})`);
    }
  }
  return true;
}
