// Store only bounded routing identifiers. Never copy arbitrary query strings or
// personal form data into analytics. This supplements normal GA4 attribution.
const storageKey = 'atlantis-satellite-referral';
const validSlug = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
type Referral = { satellite_id: string; satellite_path: string; satellite_cta: string };
export function captureSatelliteReferral() {
  try {
    const query = new URLSearchParams(window.location.search);
    const slug = query.get('satellite') || '';
    if (!slug || slug.length > 80 || !validSlug.test(slug)) return;
    const rawPath = query.get('satellite_path') || '/';
    const rawCta = query.get('cta') || 'product';
    const referral: Referral = {
      satellite_id: slug,
      satellite_path: /^\/[a-z0-9/-]*$/.test(rawPath) && rawPath.length < 180 ? rawPath : '/',
      satellite_cta: validSlug.test(rawCta) && rawCta.length < 40 ? rawCta : 'other',
    };
    sessionStorage.setItem(storageKey, JSON.stringify(referral));
  } catch { /* Storage or query parsing must never block the enquiry. */ }
}
export function satelliteReferral(): Partial<Referral> {
  try {
    const value = JSON.parse(sessionStorage.getItem(storageKey) || 'null');
    if (!value || typeof value.satellite_id !== 'string' || value.satellite_id.length > 80 || !validSlug.test(value.satellite_id)) return {};
    return {
      satellite_id: value.satellite_id,
      satellite_path: typeof value.satellite_path === 'string' && /^\/[a-z0-9/-]*$/.test(value.satellite_path) && value.satellite_path.length < 180 ? value.satellite_path : '/',
      satellite_cta: typeof value.satellite_cta === 'string' && validSlug.test(value.satellite_cta) && value.satellite_cta.length < 40 ? value.satellite_cta : 'other',
    };
  } catch { return {}; }
}
