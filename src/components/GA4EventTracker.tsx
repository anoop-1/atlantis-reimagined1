import { useEffect } from 'react';
import { enquiryContext, rememberEnquiryIntent, serviceForPath, trackEngagement } from '@/lib/enquiry-analytics';
declare global { interface Window { gtag?: (...args: unknown[]) => void; dataLayer?: unknown[]; } }

export default function GA4EventTracker() {
  // PublicationBoundary emits route views after the correct title is ready.
  useEffect(() => { enquiryContext(); }, []);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest('a');
      if (!a) return;
      const href = a.getAttribute('href') || '';
      if (href.startsWith('mailto:')) { trackEngagement('email_contact_click'); return; }
      let url: URL;
      try { url = new URL(href, window.location.origin); } catch { return; }
      if (['forms.office.com','forms.cloud.microsoft'].includes(url.hostname)) { trackEngagement('ms_form_click'); return; }
      if (url.origin !== window.location.origin) return;
      if (/^\/templates\/.+\.(xlsx|docx|pdf|csv)$/i.test(url.pathname)) { trackEngagement('template_download', { template_file: url.pathname.split('/').pop() }); return; }
      if (url.pathname === '/contact') {
        const allowed = ['training','erp','consulting','digital-twins','3d-scanning','reporting'];
        const requested = url.searchParams.get('service') || '';
        const service = allowed.includes(requested) ? requested : serviceForPath(window.location.pathname);
        rememberEnquiryIntent(service);
        trackEngagement('contact_cta_click', { service });
        return;
      }
      for (const [prefix,event] of [['/press/','press_view'],['/case-studies/','case_study_view'],['/compare/','comparison_view']]) {
        if (url.pathname.startsWith(prefix)) { trackEngagement(event, { destination_path: url.pathname }); return; }
      }
    };
    document.addEventListener('click', handler, true);
    return () => document.removeEventListener('click', handler, true);
  }, []);
  return null;
}
