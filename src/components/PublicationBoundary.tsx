import { ReactNode, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Navigation } from './Navigation';
import ContactDetails from './ContactDetails';
import EnquiryCaptureForm from './EnquiryCaptureForm';
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
    const variant = pathname.includes('training') ? 'training' : pathname.includes('reporting-software') ? 'reporting' : pathname.includes('erp') || pathname.includes('calibration') ? 'erp' : pathname.includes('consulting') ? 'consulting' : null;
    return <><Navigation />{current ? <main className="published-content" dangerouslySetInnerHTML={{ __html: current.main }} /> : <main className="published-content" aria-live="polite"><h1>{failed ? 'This page could not be loaded' : 'Loading page'}</h1>{failed && <a href={pathname}>Reload this page</a>}</main>}{current && variant && <EnquiryCaptureForm variant={variant} />}<ContactDetails /></>;
  }
  return <>{children}</>;
}
