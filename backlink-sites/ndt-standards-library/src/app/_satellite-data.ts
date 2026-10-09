// Generated from scripts/satellite-upgrade/catalog.mjs. Edit the source and regenerate.
export const site = {
  "slug": "ndt-standards-library",
  "name": "NDT Standards Guide",
  "primary": "consulting",
  "related": [
    "training",
    "reporting"
  ],
  "audience": "Quality managers and procedure authors",
  "headline": "Turn a document reference into a clear inspection requirement.",
  "introduction": "Record the governing code, edition, customer supplements and applicable acceptance criteria together. Distinguish the standard describing how an examination is performed from the document establishing acceptance. A controlled register helps prevent an obsolete instruction from reaching the inspection team.",
  "questions": [
    "Which code edition and customer supplements govern the contract?",
    "Who approves the procedure and resolves conflicting requirements?",
    "How are revisions communicated and retained with the report?"
  ],
  "boundary": "This resource does not reproduce licensed standards or replace them. Obtain the applicable documents and confirm interpretation with the authorized technical reviewer.",
  "domain": "https://ndt-standards-library.vercel.app",
  "guides": [
    {
      "href": "/api",
      "label": "Api"
    },
    {
      "href": "/asme",
      "label": "Asme"
    },
    {
      "href": "/international",
      "label": "International"
    },
    {
      "href": "/library",
      "label": "Library"
    }
  ],
  "googleVerification": "",
  "description": "NDT Standards Guide: practical scoping questions and subject guides for quality managers and procedure authors. Explore relevant Atlantis NDT support."
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
    "key": "reporting",
    "name": "NDT reporting software",
    "path": "/erp/apps/ndt-reports",
    "service": "reporting",
    "cta": "Discuss your reporting workflow",
    "description": "Explore field data capture, company report templates and review workflows. Discuss standalone reporting or its role within Atlantis ERP."
  }
];
type Offer = typeof offers[number];
export function contactUrl(offer: Offer, placement: string) {
  const url = new URL('/contact', 'https://atlantisndt.com');
  url.search = new URLSearchParams({ service: offer.service, subject: site.name + ': ' + offer.name, satellite: site.slug, cta: placement, utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: placement }).toString();
  return url.toString();
}
export function productUrl(offer: Offer) { const url = new URL(offer.path, 'https://atlantisndt.com'); url.search = new URLSearchParams({ satellite: site.slug, cta: 'product', utm_source: site.slug, utm_medium: 'referral', utm_campaign: 'satellite-product-funnels', utm_content: 'product' }).toString(); return url.toString(); }
