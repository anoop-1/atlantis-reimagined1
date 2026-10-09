// Generated from scripts/satellite-upgrade/catalog.mjs. Edit the source and regenerate.
export const site = {
  "slug": "aerospace-ndt-standards",
  "name": "Aerospace NDT Planning",
  "primary": "consulting",
  "related": [
    "training",
    "simulation"
  ],
  "audience": "Aerospace quality and personnel qualification teams",
  "headline": "Start aerospace NDT planning with the customer and employer requirements.",
  "introduction": "Identify the applicable customer documents, materials and inspection processes before defining personnel or procedure needs. Qualification records, reference standards and technique approvals should be traceable to the work being released. Keep training support distinct from the authority to approve a production process.",
  "questions": [
    "Which customer specification and personnel qualification scheme apply?",
    "What materials, product forms and methods are in scope?",
    "Who holds approval authority for the procedure and personnel programme?"
  ],
  "boundary": "A resource page is not evidence of aerospace accreditation or customer approval. Atlantis must confirm the exact engagement and required authorizations.",
  "domain": "https://aerospace-ndt-standards.vercel.app",
  "guides": [
    {
      "href": "/standards",
      "label": "Aerospace NDT Standards Overview"
    },
    {
      "href": "/standards/nas-410",
      "label": "NAS 410 Certification Guide"
    },
    {
      "href": "/standards/nadcap",
      "label": "NADCAP Accreditation Guide"
    },
    {
      "href": "/applications",
      "label": "Aerospace NDT Applications"
    },
    {
      "href": "/applications/composite-inspection",
      "label": "Composite Material NDT"
    }
  ],
  "googleVerification": "",
  "description": "Aerospace NDT Planning: practical scoping questions and subject guides for aerospace quality and personnel qualification teams. Explore relevant Atlantis NDT support."
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
    "key": "training",
    "name": "NDT training",
    "path": "/training",
    "service": "training",
    "cta": "Ask about NDT training",
    "description": "Discuss method, level, experience, delivery format and course availability. Individual learners and employer-sponsored teams can request a suitable pathway."
  },
  {
    "key": "simulation",
    "name": "Practical NDT Simulation",
    "path": "/practical-ndt",
    "service": "practical-ndt",
    "cta": "Request a Simulation demo",
    "description": "Explore practical learning scenarios for technicians and training teams. Confirm supported methods, assessment needs and standalone or ERP-linked access with Atlantis."
  }
];
type Offer = typeof offers[number];
export function contactUrl(offer: Offer, placement: string) {
  const url = new URL('/contact', 'https://atlantisndt.com');
  url.search = new URLSearchParams({ service: offer.service, subject: site.name + ': ' + offer.name, satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: placement }).toString();
  return url.toString();
}
export function productUrl(offer: Offer) { const url = new URL(offer.path, 'https://atlantisndt.com'); url.search = new URLSearchParams({ satellite: site.slug, cta: 'product', utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: 'product' }).toString(); return url.toString(); }
