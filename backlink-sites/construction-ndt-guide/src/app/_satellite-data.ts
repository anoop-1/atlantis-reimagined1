// Generated from scripts/satellite-upgrade/catalog.mjs. Edit the source and regenerate.
export const site = {
  "slug": "construction-ndt-guide",
  "name": "Construction NDT Planning",
  "primary": "inspection",
  "related": [
    "consulting",
    "reporting"
  ],
  "audience": "Fabricators, contractors and construction quality teams",
  "headline": "Organize inspection around the weld register and release sequence.",
  "introduction": "Construction inspection becomes easier to schedule when weld identification, drawing revision and examination extent are agreed. Separate readiness for inspection from final acceptance. A report should make it possible to trace the result back to the component and the applicable requirement.",
  "questions": [
    "Which welds or components require examination and to what extent?",
    "What access, sequencing and site-readiness constraints apply?",
    "How will repairs, re-examination and release status be recorded?"
  ],
  "boundary": "Request a scope review with the governing specification. Inspection availability and acceptance responsibilities must be confirmed for the project.",
  "domain": "https://construction-ndt-guide.vercel.app",
  "guides": [
    {
      "href": "/structural",
      "label": "Structural NDT"
    },
    {
      "href": "/structural/concrete",
      "label": "Concrete NDT Methods"
    },
    {
      "href": "/structural/steel-structures",
      "label": "Steel Structure Testing"
    },
    {
      "href": "/structural/bridges",
      "label": "Bridge Inspection Guide"
    },
    {
      "href": "/structural/rebar",
      "label": "Rebar Detection & Assessment"
    }
  ],
  "featured": {
    "title": "Resolving Weld-Map Drawing Revision Conflicts Before Report Issue",
    "path": "/guides/weld-map-revision-conflicts-before-report-issue",
    "description": "An evidence-led workflow for tracing construction weld identities through drawing revisions, field markups and report corrections before a report is issued."
  },
  "googleVerification": "",
  "description": "Construction NDT Planning: practical scoping questions and subject guides for fabricators, contractors and construction quality teams. Prepare a clear technical brief."
};
export const offers = [
  {
    "key": "inspection",
    "name": "NDT inspection services",
    "path": "/inspection-services",
    "service": "inspection",
    "cta": "Request an inspection scope review",
    "description": "Share the asset, location, applicable requirements and work window. The provider confirms method suitability, personnel, delivery availability and quotation scope."
  },
  {
    "key": "consulting",
    "name": "NDT Level III consulting",
    "path": "/consulting",
    "service": "consulting",
    "cta": "Discuss Level III support",
    "description": "Scope written-practice review, procedures, qualification programmes or audit support around your governing documents and employer responsibilities."
  },
  {
    "key": "reporting",
    "name": "NDT reporting software",
    "path": "/erp/apps/ndt-reports",
    "service": "reporting",
    "cta": "Discuss your reporting workflow",
    "description": "Explore field data capture, company report templates and review workflows. Discuss standalone reporting or its role within the provider's ERP."
  },
  {
    "key": "erp",
    "name": "NDT operations software",
    "path": "/erp",
    "service": "erp",
    "cta": "Request an ERP walkthrough",
    "description": "Connect technician records, calibration, dispatch and inspection reporting. Start with the workflow that needs attention and agree the rollout scope with the provider."
  },
  {
    "key": "twin",
    "name": "Digital Twin NDT reporting",
    "path": "/digital-twin-reporting",
    "service": "digital-twins",
    "cta": "Request a Digital Twin demo",
    "description": "Explore inspection results in the context of an asset model. Discuss the asset, available records and whether a standalone product or ERP module fits your requirements."
  },
  {
    "key": "simulation",
    "name": "Practical NDT Simulation",
    "path": "/practical-ndt",
    "service": "practical-ndt",
    "cta": "Request a Simulation demo",
    "description": "Explore practical learning scenarios for technicians and training teams. Confirm supported methods, assessment needs and standalone or ERP-linked access with the provider."
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
