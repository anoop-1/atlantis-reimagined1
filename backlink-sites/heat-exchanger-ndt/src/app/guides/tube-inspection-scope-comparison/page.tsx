import type { Metadata } from 'next';
import { site, offers, contactUrl } from '../../_satellite-data';
import { growth, referralUrl } from '../../_growth-data';
const route = '/guides/' + growth.slug;
export const metadata: Metadata = {
  title: { absolute: growth.title }, description: growth.description,
  alternates: { canonical: site.domain + route },
  openGraph: { title: growth.title, description: growth.description, url: site.domain + route, type: 'article' },
};
export default function Guide() {
  const offer = offers.find(item => item.key === growth.offer)!;
  const schema = [{ '@context': 'https://schema.org', '@type': 'Article', headline: growth.title,
    description: growth.description, mainEntityOfPage: site.domain + route,
    author: { '@type': 'Organization', name: 'Atlantis NDT', url: 'https://atlantisndt.com' },
    publisher: { '@type': 'Organization', name: 'Atlantis NDT', url: 'https://atlantisndt.com' } },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: site.name, item: site.domain + '/' },
      { '@type': 'ListItem', position: 2, name: 'Resource library', item: site.domain + '/resource-library' },
      { '@type': 'ListItem', position: 3, name: growth.title, item: site.domain + route } ] }];
  return <article className="sat-home sat-editorial" data-growth-release="growth-v1">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <header className="sat-hero"><div className="sat-wrap sat-reading">
      <nav className="sat-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true"> / </span><a href="/resource-library">Resource library</a></nav>
      <p className="sat-eyebrow">Planning guide · Published by Atlantis NDT</p><h1>{growth.title}</h1><p className="sat-lead">{growth.description}</p>
      <div className="sat-actions"><a className="sat-button" href={'/tools/' + growth.slug}>Open the working brief</a><a className="sat-text-link" href="#comparison">Jump to the decision table ↓</a></div>
    </div></header>
    <div className="sat-wrap sat-reading" data-growth-body="true">
      <section className="sat-section"><h2>Start with the decision you need to make</h2><p className="sat-copy">{growth.answer}</p></section>
      <section className="sat-section" id="comparison"><h2>What to check and why it matters</h2><div className="sat-table-scroll" tabIndex={0} role="region" aria-label="Decision table, scroll horizontally on small screens"><table className="sat-decision-table"><caption>Use these questions to reveal missing evidence before deciding the next step.</caption><thead><tr><th scope="col">Decision area</th><th scope="col">Evidence to prepare</th><th scope="col">Question to resolve</th></tr></thead><tbody>{growth.decisions.map(row => <tr key={row.label}><th scope="row">{row.label}</th><td>{row.evidence}</td><td>{row.question}</td></tr>)}</tbody></table></div></section>
      <section className="sat-section sat-scenario"><p className="sat-eyebrow">Illustrative example · Not a customer case study</p><h2>Apply the questions to a real-world situation</h2><p className="sat-copy">{growth.example}</p></section>
      <section className="sat-section"><h2>Prepare your working brief</h2><p className="sat-copy">Capture what is known and name the unresolved questions. You can use the worksheet without registering or sending information to Atlantis.</p><dl className="sat-prep-list">{growth.fields.map(field => <div key={field.label}><dt>{field.label}</dt><dd>{field.hint}</dd></div>)}</dl><a className="sat-button" href={'/tools/' + growth.slug}>Create and download your brief →</a></section>
      <section className="sat-section"><h2>When you need project-specific support</h2>{growth.links.map(link => <p className="sat-copy" key={link.path}>{link.context} <a className="sat-text-link" href={referralUrl(link.path, 'guide-context')}>{link.label}</a>. Confirm the current deliverables and fit for your requirement with the Atlantis team.</p>)}<p className="sat-copy">For a US enquiry, include the project state and time zone, the responsible employer or owner, and the documents governing the work. For other countries, include the relevant recognition or customer requirements. Delivery and availability are confirmed for the engagement.</p><a className="sat-button sat-button-secondary" href={contactUrl(offer, 'growth-guide')}>{offer.cta}</a></section>
      <section className="sat-section"><h2>Scope and further reading</h2><p className="sat-copy sat-boundary">{growth.boundary}</p><p className="sat-copy">Continue with the detailed companion guide, <a className="sat-text-link" href={site.featured.path}>{site.featured.title}</a>, for a related evidence-handling workflow and its source references. The planning suggestions here are original discussion aids, not approved procedures or reproductions of standards.</p><a className="sat-text-link" href="/resource-library">Browse every guide in this resource library →</a></section>
    </div>
  </article>;
}
