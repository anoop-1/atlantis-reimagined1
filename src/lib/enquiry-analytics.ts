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
// `extra` (2026-09-30) carries business_line / landing_page / lead_type so
// generate_lead can be segmented; optional, so existing callers are unchanged.
// `extra` (2026-09-29) carries lead_magnet; when absent, the magnet remembered from a
// lead-magnet CTA click this session (see src/lib/lead-magnets.ts) is attached instead.
export function trackAcceptedEnquiry(id: string, formId: string, service: string, method: string, extra: Record<string, unknown> = {}) {
  if (!id || !window.gtag) return;
  try { JSON.parse(sessionStorage.getItem(storageKey) || '[]').forEach((v: string) => sent.add(v)); } catch {}
  if (sent.has(id)) return;
  sent.add(id);
  try { sessionStorage.setItem(storageKey, JSON.stringify([...sent].slice(-100))); } catch {}
  const { lead_magnet, ...meta } = leadMeta(service, formId, typeof extra.lead_type === 'string' ? extra.lead_type : undefined);
  const { qualified, ...rest } = extra as Record<string, unknown> & { qualified?: unknown };
  const params = { ...enquiryContext(service), enquiry_id: id, form_id: formId, delivery_method: method, ...meta, ...(lead_magnet ? { lead_magnet } : {}), ...rest };
  trackEngagement('generate_lead', params);
  // 2026-10-09 sprint (Day 7): one named business event per commercial line, fired
  // from this single accepted-submission point so no form can fire it early. These
  // are the GA4 key events; clicks and form starts stay ordinary events.
  const business = businessEventFor(service, String(params.lead_type || ''), String(params.business_line || ''));
  if (business) trackEngagement(business, { ...params, pipeline: pipelineFor(service, String(params.lead_type || '')) });
  // qualified_lead = a form-qualified lead: work email + company + an active
  // buying stage stated by the visitor. Computed by the caller (isQualifiedLead)
  // because only the caller sees the answers; no personal data is sent to GA4.
  if (qualified === true) trackEngagement('qualified_lead', { ...params, qualification_basis: 'work_email+company+active_stage' });
}

// ── Business events + pipeline routing (2026-10-09 sprint) ────────────────────
// lead_type wins over service, so a training enquiry that asked to enrol counts as
// training_enrolment, and an ERP configurator demo request as erp_demo_request.
export function businessEventFor(service: string, leadType = '', businessLine = ''): string | null {
  const s = (service || '').toLowerCase();
  const lt = (leadType || '').toLowerCase();
  if (lt === 'training_enrolment') return 'training_enrolment';
  if (lt.startsWith('erp') || s === 'erp') return 'erp_demo_request';
  if (s === 'digital-twins' || s === 'dt' || s === 'reporting' || lt.startsWith('digital_twin')) return 'digital_twin_demo_request';
  if (s === 'practical-ndt' || lt.startsWith('ndt_simulation')) return 'ndt_simulation_demo_request';
  if (s === 'training' || s === 'academy' || s === 'lms' || businessLine === 'training') return 'training_enquiry';
  if (s === 'consulting' || lt.startsWith('level3')) return 'level3_consulting_enquiry';
  if (s === 'inspection' || lt === 'rfq') return 'inspection_rfq_submit';
  return null;
}
/** Short tag put at the front of every enquiry email subject so Outlook rules can file it. */
export function pipelineFor(service: string, leadType = ''): string {
  const ev = businessEventFor(service, leadType);
  switch (ev) {
    case 'erp_demo_request': return 'ERP';
    case 'digital_twin_demo_request': return 'DIGITAL-TWIN';
    case 'ndt_simulation_demo_request': return 'SIMULATION';
    case 'training_enrolment': return 'TRAINING-ENROL';
    case 'training_enquiry': return 'TRAINING';
    case 'level3_consulting_enquiry': return 'LEVEL-III';
    case 'inspection_rfq_submit': return 'INSPECTION-RFQ';
    default: return 'GENERAL';
  }
}
const FREE_MAIL = /@(gmail|googlemail|yahoo|ymail|hotmail|outlook|live|msn|aol|icloud|me|mac|proton|protonmail|gmx|mail|yandex|zoho|rediffmail|qq|163)\./i;
/**
 * Form-qualified lead: a work email, a company name and a stated active stage
 * (ready to enrol / need it within a quarter / comparing quotes). Deliberately
 * conservative; sales can still disqualify it later.
 */
export function isQualifiedLead(input: { email?: string; company?: string; stage?: string }): boolean {
  const email = (input.email || '').trim();
  const company = (input.company || '').trim();
  const stage = (input.stage || '').toLowerCase();
  if (!email || !company || company.length < 2) return false;
  if (FREE_MAIL.test(email)) return false;
  return /(ready|enrol|book|within|weeks|this quarter|comparing|quote|turnaround|planned)/.test(stage);
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
