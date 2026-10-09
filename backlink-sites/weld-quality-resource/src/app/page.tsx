import type { Metadata } from 'next';
import { site, offers, contactUrl, productUrl } from './_satellite-data';

export const metadata: Metadata = {
  title: { absolute: site.name },
  description: site.description,
  alternates: { canonical: site.domain + '/' },
  openGraph: { title: site.name, description: site.description, url: site.domain + '/', type: 'website' },
};

export default function Page() {
  const primary = offers[0];
  return <div className="sat-home">
    <section className="sat-hero"><div className="sat-wrap sat-hero-grid">
      <div><p className="sat-eyebrow">{site.audience}</p><h1>{site.headline}</h1>
        <p className="sat-lead">{site.introduction}</p>
        <div className="sat-actions"><a className="sat-button" href={site.featured?.path || '#resource-library'}>Read the practical guide</a><a className="sat-button sat-button-secondary" href="#resource-library">Explore the resource library</a></div>
        <p className="sat-note">Educational guidance, practical examples and clear scope boundaries. External service links open the provider’s website.</p>
      </div>
      <aside className="sat-brief" aria-labelledby="brief-title"><p className="sat-eyebrow">Before you enquire</p><h2 id="brief-title">Three questions to clarify your scope</h2><ol>{site.questions.map(question => <li key={question}>{question}</li>)}</ol><p>A clearer starting brief helps the service team discuss fit, scope and next steps.</p></aside>
    </div></section>
    {site.featured.path&&<section className="sat-wrap sat-section" id="priority-guide"><p className="sat-eyebrow">Featured practical guide</p><h2>{site.featured.title}</h2><p className="sat-copy">{site.featured.description}</p><p className="sat-copy">A detailed educational article with a hypothetical worked example, preparation checklist and source references. Read it before deciding whether external support is needed.</p><a className="sat-button" href={site.featured.path}>Read the full guide</a></section>}
    <section className="sat-wrap sat-section" id="products-services" aria-labelledby="next-step-title"><p className="sat-eyebrow">All seven core products and services</p><h2 id="next-step-title">Choose the support your project needs</h2><p className="sat-copy">Start with the offers most relevant to this resource, or explore the full product and service range below. Each enquiry goes to the provider's contact page with your chosen service selected; availability and scope are confirmed there.</p><a className="sat-text-link" href="/atlantis-products-services">Compare the options and prepare your enquiry →</a>
      <div className="sat-grid">{offers.map(offer => <article className="sat-card" key={offer.key}><h3>{offer.name}</h3><p>{offer.description}</p><a className="sat-text-link" href={productUrl(offer)}>Explore {offer.name} →</a><a className="sat-button sat-button-secondary" href={contactUrl(offer, 'offer-card')}>{offer.cta}</a></article>)}</div>
      <p className="sat-copy">Additional options: <a className="sat-text-link" href="/atlantis-products-services#additional-options">3D scanning services and NDT Connect</a>. These are separate from the seven core offers above.</p>
    </section>
    <section className="sat-wrap sat-section" aria-labelledby="planning-guides-title"><p className="sat-eyebrow">Turn research into a usable brief</p><h2 id="planning-guides-title">Plan by location and industry</h2><div className="sat-grid"><article className="sat-card"><h3>US and international project planning</h3><p>Start with the United States, then your other priority markets. Select the service, country, project city and industry to prepare a focused enquiry. Location listings do not imply a local office.</p><a className="sat-text-link" href="/regions-and-project-planning">Explore regions and build your enquiry →</a></article><article className="sat-card"><h3>Industry applications and buying guide</h3><p>Explore 12 industry and application groups, the evidence to prepare, and the distinction between inspection, technical oversight, learning and digital workflows.</p><a className="sat-text-link" href="/industries-and-applications">Match the industry to a deliverable →</a></article></div></section>
    <section className="sat-library" id="resource-library"><div className="sat-wrap sat-section"><p className="sat-eyebrow">Read on this site</p><h2>Explore the resource library</h2><p className="sat-copy">Browse the subject guides below. Read them alongside your governing documents and use the scoping questions above to identify what needs a project-specific answer.</p>
      <ul className="sat-library-list">{site.guides.map(guide => <li key={guide.href}><a href={guide.href}><span>{guide.label}</span><span aria-hidden="true">↗</span></a></li>)}</ul>
    </div></section>
    <section className="sat-wrap sat-section sat-faq"><p className="sat-eyebrow">Scope and next steps</p><h2>What to know before contacting the provider</h2>
      <details><summary>Is this an independent supplier review?</summary><p>No. This is an affiliated educational resource; the publisher is disclosed in the footer. Product links lead to the affiliated provider, not an independently ranked marketplace.</p></details>
      <details><summary>What information should I send?</summary><p>{site.questions.join(' ')} You can begin with a short description. The contact page preselects your area of interest and the team can clarify the remaining details.</p></details>
      <details><summary>Can you support my location?</summary><p>Include your country and project location. The provider prioritizes enquiries from the United States, followed by Canada, Europe, Australia, New Zealand, Singapore and Japan, and also considers Middle East, India and Africa requirements. Onsite delivery, time zones and any required approvals must be confirmed for the specific engagement. This website does not imply a local office.</p></details>
      <details><summary>How are product scope and fees agreed?</summary><p>Discuss the requirement with the provider for a tailored scope and quotation. For software, confirm supported workflows, implementation, licensing and support. Digital Twin reporting and Practical NDT Simulation may be discussed as standalone products or ERP modules, according to the requirement.</p></details>
      <p className="sat-copy sat-boundary">{site.boundary}</p>
    </section>
  </div>;
}
