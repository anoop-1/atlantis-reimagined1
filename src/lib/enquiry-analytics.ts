const sent = new Set<string>();
const storageKey = 'atlantis-enquiry-ids';
const intentKey = 'atlantis-enquiry-intent';
export const newEnquiryId = () => crypto.randomUUID();

export function serviceForPath(path: string) {
  if (/training|certification|practice-questions|salary/.test(path)) return 'training';
  if (/reporting-software/.test(path)) return 'reporting';
  if (/erp|software|calibration/.test(path)) return 'erp';
  if (/digital-twin/.test(path)) return 'digital-twins';
  if (/3d-scanning/.test(path)) return '3d-scanning';
  if (/consulting|compliance/.test(path)) return 'consulting';
  return 'general';
}
export function enquiryContext(service?: string) {
  let landing = window.location.pathname;
  try {
    const saved = sessionStorage.getItem('atlantis-landing-path');
    if (saved) landing = saved; else sessionStorage.setItem('atlantis-landing-path', landing);
  } catch { /* storage may be disabled */ }
  const path = window.location.pathname;
  const region = new URLSearchParams(window.location.search).get('region') || '';
  let intent: {service?: string; target_region?: string} = {};
  try { if (path === '/contact') intent = JSON.parse(sessionStorage.getItem(intentKey) || '{}'); } catch {}
  const regions: [RegExp,string][] = [[/usa|houston|texas|california|new-york/,'US'],[/india|hyderabad|chennai|mumbai|delhi|bangalore/,'IN'],[/abu-dhabi|dubai|uae/,'AE'],[/saudi|riyadh|jubail|dammam/,'SA'],[/canada|toronto|calgary|edmonton|vancouver/,'CA'],[/singapore/,'SG'],[/malaysia|kuala-lumpur|johor/,'MY'],[/australia|sydney|perth|melbourne/,'AU'],[/united-kingdom|london|aberdeen/,'GB'],[/south-africa|johannesburg/,'ZA'],[/nigeria|lagos/,'NG'],[/bahrain/,'BH'],[/qatar|doha/,'QA'],[/mexico/,'MX'],[/sao-paulo|brazil/,'BR']];
  const inferred = regions.find(([pattern]) => pattern.test(path))?.[1] || (/training-me/.test(path) ? 'Gulf' : 'unspecified');
  return { service: service || intent.service || serviceForPath(path), target_region: /^[A-Z]{2}$/.test(region) ? region : intent.target_region || inferred, landing_path: landing, page_path: path };
}
export function rememberEnquiryIntent(service: string) {
  const { target_region } = enquiryContext(service);
  try { sessionStorage.setItem(intentKey, JSON.stringify({service,target_region})); } catch {}
}
export function trackEngagement(event: string, params: Record<string, unknown> = {}) {
  window.gtag?.('event', event, { ...enquiryContext(), page_location: window.location.origin + window.location.pathname, ...params });
}
// Only call after a delivery provider has accepted the submission. The opaque
// id is also carried into the enquiry record. Never include personal fields.
// `extra` (2026-09-29) carries lead_magnet; when absent, the magnet remembered from a
// lead-magnet CTA click this session (see src/lib/lead-magnets.ts) is attached instead.
export function trackAcceptedEnquiry(id: string, formId: string, service: string, method: string, extra: Record<string, unknown> = {}) {
  if (!id || !window.gtag) return;
  try { JSON.parse(sessionStorage.getItem(storageKey) || '[]').forEach((v: string) => sent.add(v)); } catch {}
  if (sent.has(id)) return;
  sent.add(id);
  try { sessionStorage.setItem(storageKey, JSON.stringify([...sent].slice(-100))); } catch {}
  const { lead_magnet, ...meta } = leadMeta(service, formId, typeof extra.lead_type === 'string' ? extra.lead_type : undefined);
  trackEngagement('generate_lead', { ...enquiryContext(service), enquiry_id: id, form_id: formId, delivery_method: method, ...meta, ...(lead_magnet ? { lead_magnet } : {}), ...extra });
}

// Reconciliation fields (owner-approved audit 2026-09-30, item 1). The SAME values go
// into generate_lead and into the enquiry email body (leadMetaLines), so every GA4 lead
// can be matched to a mail in info@atlantisndt.com.
const BUSINESS_LINE: Record<string, string> = {
  training: 'training', 'practical-ndt': 'practical-ndt', consulting: 'consulting', inspection: 'inspection',
  erp: 'software', reporting: 'software', lms: 'software', academy: 'training',
  'digital-twins': 'digital-twins', dt: 'digital-twins', '3d-scanning': '3d-scanning',
};
export function leadMeta(service: string, formId: string, leadType?: string) {
  let magnet = '';
  try { magnet = sessionStorage.getItem('atlantis-lead-magnet') || ''; } catch {}
  if (formId.startsWith('lead-magnet-')) magnet = formId.slice('lead-magnet-'.length);
  const ctx = enquiryContext(service);
  return {
    business_line: BUSINESS_LINE[ctx.service] || BUSINESS_LINE[service] || 'general',
    landing_page: ctx.landing_path,
    lead_type: leadType || (magnet ? `lead_magnet:${magnet}` : formId),
    lead_magnet: magnet,
  };
}
export function leadMetaLines(service: string, formId: string, leadType?: string) {
  const m = leadMeta(service, formId, leadType);
  return `Business line: ${m.business_line}\nLanding page: ${m.landing_page}\nLead type: ${m.lead_type}\nLead magnet: ${m.lead_magnet || '(none)'}\n`;
}
