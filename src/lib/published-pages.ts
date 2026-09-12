// Pages migrated to the build's authoritative editorial content. Interactive
// navigation and enquiry forms remain React components around this content.
export const publishedPaths = new Set([
  '/training-usa', '/training-india', '/training-me',
  '/ndt-erp-solution', '/best-ndt-reporting-software-2026',
  '/ndt-training-abu-dhabi', '/ndt-training-houston',
  '/resources/calibration-certificate-template',
  '/blog/ndt-salary-guide-2026-global', '/blog/ut-level-2-practice-questions',
  '/blog/api-510-570-653-exam-schedule-2026',
  '/blog/asme-b31-3-process-piping-requirements', '/blog/asme-b31-3-process-piping-code-explained',
  '/consulting/asnt-level-iii-consulting-services', '/compliance',
]);
export const usesPublishedContent = (path: string) => publishedPaths.has(path) || /^\/(ar|es)\//.test(path);

export interface Publication {
  path: string;
  title: string;
  lang: string;
  dir: string;
  head: string;
  main: string;
}

export function readPublication(doc: Document, path: string): Publication | null {
  if (!doc.querySelector('meta[name="atlantis-publication"]')) return null;
  const selectors = 'meta[name="description"],meta[name="robots"],meta[property^="og:"],meta[name^="twitter:"],link[rel="canonical"],link[hreflang],script[type="application/ld+json"]';
  return { path, title: doc.title, lang: doc.documentElement.lang || 'en',
    dir: doc.documentElement.dir || 'ltr',
    head: Array.from(doc.head.querySelectorAll(selectors)).map(el => el.outerHTML).join('\n'),
    main: doc.querySelector('main')?.innerHTML || '' };
}

// Capture before React replaces #root. No second request on a direct load.
export const initialPublication = typeof document === 'undefined' ? null : readPublication(document, window.location.pathname);
export const publicationCache = new Map<string, Publication>();
if (initialPublication) publicationCache.set(initialPublication.path, initialPublication);

export function applyPublication(page: Publication) {
  document.title = page.title;
  document.documentElement.lang = page.lang;
  document.documentElement.dir = page.dir;
  document.head.querySelectorAll('meta[name="description"],meta[name="robots"],meta[property^="og:"],meta[name^="twitter:"],link[rel="canonical"],link[hreflang],script[type="application/ld+json"]').forEach(el => el.remove());
  const head = new DOMParser().parseFromString(`<html><head>${page.head}</head><body></body></html>`, 'text/html');
  Array.from(head.head.children).forEach(el => document.head.appendChild(document.importNode(el, true)));
}
