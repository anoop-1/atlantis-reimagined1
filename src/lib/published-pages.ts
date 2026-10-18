// Pages migrated to the build's authoritative editorial content. Interactive
// navigation and enquiry forms remain React components around this content.
export const publishedPaths = new Set([
  '/training-usa', '/training-india', '/training-me',
  // 2026-10-18 consulting release: crawler <main> is the one source (scripts/consulting-release-2026-10-18.mjs).
  '/consulting/ndt-consulting-level-iii', '/consulting/ndt-technical-procedure-development',
  '/ndt-erp-solution', '/best-ndt-reporting-software-2026',
  '/ndt-training-abu-dhabi', '/ndt-training-houston',
  '/resources/calibration-certificate-template',
  '/blog/ndt-salary-guide-2026-global', '/blog/ut-level-2-practice-questions',
  '/blog/api-510-570-653-exam-schedule-2026',
  '/blog/asme-b31-3-process-piping-requirements', '/blog/asme-b31-3-process-piping-code-explained',
  '/consulting/asnt-level-iii-consulting-services', '/compliance',
  // 2026-10-18 inspection release: crawler <main> is the one source (sections, FAQ, template claim fixes).
  '/ultrasonic-testing', '/magnetic-particle-testing', '/corrosion-mapping', '/inspection-services-indiana', '/ndt-for-power-generation',
  '/power-generation-ndt-services', '/marine-offshore-ndt-services', '/pipeline-inspection-services', '/oil-gas-ndt-services', '/aerospace-ndt-services',
  '/petrochemical-ndt-services', '/nuclear-ndt-services', '/construction-ndt-services', '/verticals/refining', '/verticals/petrochem', '/verticals/marine',
  '/verticals/aerospace', '/verticals/lng', '/verticals/mining', '/verticals/power-gen', '/verticals/hydrogen', '/verticals/ccs', '/verticals/offshore-wind',
  '/blog/mining-equipment-weld-inspection', '/blog/pipeline-integrity-management-ili-dig-verification-and-api-1163-explained',
  '/blog/surface-breaking-crack-detection-comprehensive-methods',
]);
export const usesPublishedContent = (path: string) => publishedPaths.has(path) || publicationCache.get(path)?.editorial === true || /^\/(ar|es)\//.test(path);

export interface Publication {
  path: string;
  editorial: boolean;
  title: string;
  lang: string;
  dir: string;
  head: string;
  main: string;
}

export function readPublication(doc: Document, path: string): Publication | null {
  if (!doc.querySelector('meta[name="atlantis-publication"]')) return null;
  const selectors = 'meta[name="description"],meta[name="robots"],meta[property^="og:"],meta[name^="twitter:"],link[rel="canonical"],link[hreflang],script[type="application/ld+json"]';
  return { path, editorial: !!doc.querySelector('meta[name="atlantis-editorial-quality"]'), title: doc.title, lang: doc.documentElement.lang || 'en',
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
