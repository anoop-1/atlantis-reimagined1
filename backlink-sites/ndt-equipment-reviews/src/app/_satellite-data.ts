// Generated from scripts/satellite-upgrade/catalog.mjs. Edit the source and regenerate.
export const site = {
  "slug": "ndt-equipment-reviews",
  "name": "NDT Equipment Selection",
  "primary": "erp",
  "related": [
    "training",
    "consulting"
  ],
  "audience": "Equipment owners and inspection supervisors",
  "headline": "Evaluate the instrument, its application and its recordkeeping together.",
  "introduction": "Begin with the material, geometry, inspection objective and governing procedure. Consider reference standards, probe access, operator competence and record exports alongside instrument features. Keeping serial numbers and calibration evidence connected to jobs is a separate operational requirement worth evaluating.",
  "questions": [
    "What material, thickness range and access constraints define the application?",
    "What calibration and reference-standard evidence must be retained?",
    "How will instrument records remain connected to job and personnel records?"
  ],
  "boundary": "This is an Atlantis-owned selection resource, not an independent product-testing laboratory. Confirm equipment suitability with the manufacturer and your responsible Level III.",
  "domain": "https://ndt-equipment-reviews.vercel.app",
  "guides": [
    {
      "href": "/reviews",
      "label": "Reviews"
    },
    {
      "href": "/ultrasonic",
      "label": "Ultrasonic"
    }
  ],
  "googleVerification": "",
  "description": "NDT Equipment Selection: practical scoping questions and subject guides for equipment owners and inspection supervisors. Explore relevant Atlantis NDT support."
};
export const offers = [
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
  },
  {
    "key": "consulting",
    "name": "NDT Level III consulting",
    "path": "/consulting",
    "service": "consulting",
    "cta": "Discuss Level III support",
    "description": "Scope written-practice review, procedures, qualification programmes or audit support around your governing documents and employer responsibilities."
  }
];
type Offer = typeof offers[number];
export function contactUrl(offer: Offer, placement: string) {
  const url = new URL('/contact', 'https://atlantisndt.com');
  url.search = new URLSearchParams({ service: offer.service, subject: site.name + ': ' + offer.name, satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: placement }).toString();
  return url.toString();
}
export function productUrl(offer: Offer) { const url = new URL(offer.path, 'https://atlantisndt.com'); url.search = new URLSearchParams({ satellite: site.slug, cta: 'product', utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: 'product' }).toString(); return url.toString(); }
