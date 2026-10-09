import type { Metadata } from 'next';
import { site, offers, contactUrl, productUrl } from './_satellite-data';

export const metadata: Metadata = {
  title: { absolute: `${site.name} | Atlantis NDT` },
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
        <div className="sat-actions"><a className="sat-button" href={contactUrl(primary, 'hero')}>{primary.cta}</a><a className="sat-button sat-button-secondary" href="#resource-library">Explore the resource library</a></div>
        <p className="sat-note">An Atlantis NDT resource. Enquiries continue on atlantisndt.com with your topic selected.</p>
      </div>
      <aside className="sat-brief" aria-labelledby="brief-title"><p className="sat-eyebrow">Before you enquire</p><h2 id="brief-title">Three questions to clarify your scope</h2><ol>{site.questions.map(question => <li key={question}>{question}</li>)}</ol><p>A clearer starting brief helps the Atlantis team discuss fit, scope and next steps.</p></aside>
    </div></section>
    <section className="sat-wrap sat-section" aria-labelledby="next-step-title"><p className="sat-eyebrow">From research to a useful conversation</p><h2 id="next-step-title">Choose the support your project needs</h2><p className="sat-copy">Use the guides to prepare your requirements, then explore the relevant Atlantis product or service. Each enquiry goes to the main Atlantis contact page; availability and scope are confirmed there.</p>
      <div className="sat-grid">{offers.map(offer => <article className="sat-card" key={offer.key}><h3>{offer.name}</h3><p>{offer.description}</p><a className="sat-text-link" href={productUrl(offer)}>Explore {offer.name} →</a><a className="sat-button sat-button-secondary" href={contactUrl(offer, 'offer-card')}>{offer.cta}</a></article>)}</div>
    </section>
    <section className="sat-library" id="resource-library"><div className="sat-wrap sat-section"><p className="sat-eyebrow">Read on this site</p><h2>Explore the resource library</h2><p className="sat-copy">Browse the subject guides below. Read them alongside your governing documents and use the scoping questions above to identify what needs a project-specific answer.</p>
      <ul className="sat-library-list">{site.guides.map(guide => <li key={guide.href}><a href={guide.href}><span>{guide.label}</span><span aria-hidden="true">↗</span></a></li>)}</ul>
    </div></section>
    <section className="sat-wrap sat-section sat-faq"><p className="sat-eyebrow">Scope and next steps</p><h2>What to know before contacting Atlantis</h2>
      <details><summary>Who publishes this resource?</summary><p>This website is owned and published by Atlantis NDT. It introduces the topic and provides a route to Atlantis products and services. It is not an independent comparison or endorsement of Atlantis.</p></details>
      <details><summary>What information should I send?</summary><p>{site.questions.join(' ')} You can begin with a short description. The contact page preselects your area of interest and the team can clarify the remaining details.</p></details>
      <details><summary>Can you support my location?</summary><p>Include your country and project location. Atlantis prioritizes enquiries from the United States, followed by Canada, Europe, Australia, New Zealand, Singapore and Japan, and also considers Middle East, India and Africa requirements. Onsite delivery, time zones and any required approvals must be confirmed for the specific engagement. This website does not imply a local office.</p></details>
      <details><summary>How are product scope and fees agreed?</summary><p>Discuss the requirement with Atlantis for a tailored scope and quotation. For software, confirm supported workflows, implementation, licensing and support. Digital Twin reporting and Practical NDT Simulation may be discussed as standalone products or ERP modules, according to the requirement.</p></details>
      <p className="sat-copy sat-boundary">{site.boundary}</p>
    </section>
  </div>;
}
