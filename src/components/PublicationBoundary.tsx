import { ReactNode, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Navigation } from './Navigation';
import ContactDetails from './ContactDetails';
import EnquiryCaptureForm from './EnquiryCaptureForm';
import { createPortal } from 'react-dom';
import { leadVariantFor } from '@/data/lead-variant-2026-11.mjs';
import type { LeadVariant } from '@/data/lead-variant-2026-11.mjs';
import { trackEngagement } from '@/lib/enquiry-analytics';
import { applyPublication, initialPublication, publicationCache, readPublication, usesPublishedContent } from '@/lib/published-pages';

export default function PublicationBoundary({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const [page, setPage] = useState(initialPublication);
  const [failed, setFailed] = useState(false);
  const lastViewedPath = useRef(pathname);
  useEffect(() => {
    const controller = new AbortController();
    const reportView = () => {
      if (lastViewedPath.current !== pathname) {
        trackEngagement('page_view', { page_title: document.title });
        lastViewedPath.current = pathname;
      }
    };
    setFailed(false);
    const cached = publicationCache.get(pathname);
    if (cached) { setPage(cached); applyPublication(cached); reportView(); return; }
    setPage(null);
    // Production has a built document for every real route. Fetching that
    // document also respects HTTP redirects and preserves server status codes.
    if (import.meta.env.DEV) return;
    fetch(pathname, { signal: controller.signal, headers: { Accept: 'text/html' } })
      .then(async response => {
        if (!response.ok) throw new Error('Page unavailable');
        if (new URL(response.url).pathname !== pathname) { window.location.replace(response.url); return; }
        const next = readPublication(new DOMParser().parseFromString(await response.text(), 'text/html'), pathname);
        if (!next) throw new Error('Publication missing');
        if (controller.signal.aborted) return;
        publicationCache.set(pathname, next); applyPublication(next); setPage(next); reportView();
      }).catch(() => { if (!controller.signal.aborted) setFailed(true); });
    return () => controller.abort();
  }, [pathname]);

  if (usesPublishedContent(pathname) && !import.meta.env.DEV) {
    const current = page?.path === pathname ? page : null;
    // 2026-11-07: intent map instead of URL keyword guesses (src/data/lead-variant-2026-11.mjs).
    const variant = leadVariantFor(pathname);
    return <><Navigation />{current ? <main className="published-content" dangerouslySetInnerHTML={{ __html: current.main }} /> : <main className="published-content" aria-live="polite"><h1>{failed ? 'This page could not be loaded' : 'Loading page'}</h1>{failed && <a href={pathname}>Reload this page</a>}</main>}{current && variant && <InlineEnquiry key={pathname} variant={variant} />}<ContactDetails /></>;
  }
  return <>{children}</>;
}

/**
 * 2026-11-07: the enquiry form sits inside the article, just before its third section, where a
 * reader who has got the answer they came for is still on the page (GA4: 609 CTA clicks but only
 * 206 form starts in 28 days with the form below the article). Short articles keep it at the end.
 */
function InlineEnquiry({ variant }: { variant: LeadVariant }) {
  const [slot, setSlot] = useState<HTMLElement | null>(null);
  useEffect(() => {
    const main = document.querySelector('main.published-content');
    const sections = main ? Array.from(main.querySelectorAll('h2')).filter((h) => !h.closest('nav, aside, footer, [data-intent-route], [data-erp-solution-links]')) : [];
    const anchor = sections[2];
    if (!anchor || !anchor.parentNode) { setSlot(null); return; }
    const el = document.createElement('div');
    el.setAttribute('data-inline-enquiry', variant);
    anchor.parentNode.insertBefore(el, anchor);
    setSlot(el);
    trackEngagement('inline_enquiry_view', { form_id: `enquiry-${variant}`, placement: 'mid-article' });
    return () => { el.remove(); setSlot(null); };
  }, [variant]);
  return slot ? createPortal(<EnquiryCaptureForm variant={variant} />, slot) : <EnquiryCaptureForm variant={variant} />;
}

