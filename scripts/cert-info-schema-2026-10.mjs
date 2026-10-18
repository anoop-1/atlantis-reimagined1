// Certification-info pages (2026-10-18, training.md §7): TechArticle with dateModified and the
// founder Person (the one entity in src/data/author-anoop-profile.json, via scripts/author-entity.mjs)
// on the ISO 9712, NAS 410, EN 4179 and NAVSEA pages. Called from applyTrainingReleaseRoute.
// Only an existing TechArticle node is changed; nothing is added where the page has none.
import { AUTHOR_ID, AUTHOR_URL, FOUNDER_PERSON } from './author-entity.mjs';

export const CERT_INFO_MODIFIED = '2026-10-18';
export const CERT_INFO_PATHS = new Set([
  '/blog/iso-9712-vs-asnt-snt-tc-1a-certification-comparison',
  '/blog/iso-9712-certification-process-step-by-step-guide',
  '/nas-410-certification-requirements',
  '/blog/en-4179-recertification-european-aerospace-2028',
  '/consulting/navsea-ndt-requirements-shipyard',
]);
const PERSON_REF = { '@type': 'Person', '@id': AUTHOR_ID, name: FOUNDER_PERSON.name || 'Anoop Rayavarapu', url: AUTHOR_URL };
const isTechArticle = (n) => n && typeof n === 'object' && (n['@type'] === 'TechArticle' || (Array.isArray(n['@type']) && n['@type'].includes('TechArticle')));
export const certInfoStats = { pages: 0 };

export function applyCertInfoSchema(path, sd) {
  if (!CERT_INFO_PATHS.has(path) || !sd || typeof sd !== 'object') return sd;
  let hit = false;
  const walk = (n) => {
    if (Array.isArray(n)) return n.map(walk);
    if (!n || typeof n !== 'object') return n;
    const o = { ...n };
    if (isTechArticle(o)) { o.author = PERSON_REF; o.dateModified = CERT_INFO_MODIFIED; hit = true; }
    if (o['@graph']) o['@graph'] = walk(o['@graph']);
    return o;
  };
  const out = walk(sd);
  if (hit) certInfoStats.pages++;
  return out;
}
