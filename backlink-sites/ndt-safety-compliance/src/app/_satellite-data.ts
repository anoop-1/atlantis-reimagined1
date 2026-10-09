// Generated from scripts/satellite-upgrade/catalog.mjs. Edit the source and regenerate.
export const site = {
  "slug": "ndt-safety-compliance",
  "name": "NDT Safety and Quality Planning",
  "primary": "consulting",
  "related": [
    "erp",
    "training"
  ],
  "audience": "NDT supervisors and quality-system owners",
  "headline": "Make inspection readiness visible before the crew is assigned.",
  "introduction": "A job readiness review connects personnel authorization, equipment status, approved procedures and site controls. Assign responsibility for unresolved items before mobilization. Software can help maintain records, but the employer and site remain responsible for deciding whether the work is authorized and safe.",
  "questions": [
    "Which personnel qualifications and authorizations are required?",
    "What equipment, procedure and site-access records must be checked?",
    "How are overdue records or exceptions escalated before work begins?"
  ],
  "boundary": "Site-specific safety controls require the responsible employer and site authority. This guide does not authorize work or replace a risk assessment.",
  "domain": "https://ndt-safety-compliance.vercel.app",
  "guides": [
    {
      "href": "/certifications",
      "label": "Certifications"
    },
    {
      "href": "/compliance",
      "label": "Compliance"
    },
    {
      "href": "/regulations",
      "label": "Regulations"
    }
  ],
  "googleVerification": "",
  "description": "NDT Safety and Quality Planning: practical scoping questions and subject guides for ndt supervisors and quality-system owners. Explore relevant Atlantis NDT support."
};
export const offers = [
  {
    "key": "consulting",
    "name": "NDT Level III consulting",
    "path": "/consulting",
    "service": "consulting",
    "cta": "Discuss Level III support",
    "description": "Scope written-practice review, procedures, qualification programmes or audit support around your governing documents and employer responsibilities."
  },
  {
    "key": "erp",
    "name": "Atlantis NDT ERP",
    "path": "/erp",
    "service": "erp",
    "cta": "Request an ERP walkthrough",
    "description": "Connect technician records, calibration, dispatch and inspection reporting. Start with the workflow that needs attention and agree the rollout scope with Atlantis."
  },
  {
    "key": "training",
    "name": "NDT training",
    "path": "/training",
    "service": "training",
    "cta": "Ask about NDT training",
    "description": "Discuss method, level, experience, delivery format and course availability. Individual learners and employer-sponsored teams can request a suitable pathway."
  }
];
type Offer = typeof offers[number];
export function contactUrl(offer: Offer, placement: string) {
  const url = new URL('/contact', 'https://atlantisndt.com');
  url.search = new URLSearchParams({ service: offer.service, subject: site.name + ': ' + offer.name, satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: placement }).toString();
  return url.toString();
}
export function productUrl(offer: Offer) { const url = new URL(offer.path, 'https://atlantisndt.com'); url.search = new URLSearchParams({ satellite: site.slug, cta: 'product', utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: 'product' }).toString(); return url.toString(); }
