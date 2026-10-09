import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import './satellite.css';
import { site, offers, contactUrl, productUrl } from './_satellite-data';

export const metadata: Metadata = {
  verification: site.googleVerification ? { google: site.googleVerification } : undefined,
  metadataBase: new URL(site.domain),
  title: { default: `${site.name} | Atlantis NDT`, template: '%s | Atlantis NDT' },
  description: site.description,
  openGraph: { type: 'website', locale: 'en_US', siteName: site.name },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const primary = offers[0];
  return <html lang="en"><body data-theme="blue-cream-v1">
    <a className="sat-skip" href="#main-content">Skip to content</a>
    <header className="sat-header"><nav className="sat-wrap sat-nav" aria-label="Main navigation">
      <a className="sat-brand" href="/"><small>Published by Atlantis NDT</small>{site.name}</a>
      <div className="sat-navlinks"><a href="/#resource-library">Resources</a><a href="/atlantis-products-services">Products &amp; services</a><a href="/regions-and-project-planning">Regions &amp; planner</a><a href="/industries-and-applications">Industries</a><a className="sat-button" href={contactUrl(primary, 'navigation')}>Contact Atlantis</a></div>
    </nav></header>
    <main id="main-content">{children}</main>
    <section className="sat-contact" aria-labelledby="contact-heading"><div className="sat-wrap sat-contact-inner"><div><h2 id="contact-heading">Ready to discuss your requirement?</h2><p>Send the Atlantis team a short brief about {site.name.toLowerCase()}. Your contact page will retain the topic and service so you can continue the conversation.</p></div><a className="sat-button" href={contactUrl(primary, 'page-end')}>{primary.cta}</a></div></section>
    <footer className="sat-footer"><div className="sat-wrap"><strong>{site.name} · An Atlantis NDT resource</strong><p>Owned and published by Atlantis NDT. Educational material supports preparation and discussion; applicable standards, approved procedures and responsible technical authorities govern real work.</p><div className="sat-footer-links"><a href="/atlantis-products-services">All products &amp; services</a>{offers.map(offer => <a key={offer.key} href={productUrl(offer)}>{offer.name}</a>)}<a href="/atlantis-products-services#additional-options">3D scanning &amp; NDT Connect</a><a href="https://atlantisndt.com/about">About Atlantis</a><a href={contactUrl(primary, 'footer')}>Contact us</a></div><p>© {new Date().getFullYear()} Atlantis NDT. Scope, delivery availability and any required authorizations are confirmed before an engagement.</p></div></footer>
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-1EF92RXSVR" strategy="lazyOnload" />
    <Script id="satellite-analytics" strategy="lazyOnload">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-1EF92RXSVR',{'site_role':'satellite','satellite_id':${JSON.stringify(site.slug)}});`}</Script>
    <Script id="satellite-referrals" strategy="afterInteractive">{`
      document.addEventListener('click',function(event){
        var anchor=event.target instanceof Element?event.target.closest('a'):null;
        if(!anchor)return;
        var url=new URL(anchor.href,location.href);
        if(url.hostname!=='atlantisndt.com'||!url.searchParams.has('satellite'))return;
        url.searchParams.set('satellite_path',location.pathname);
        anchor.href=url.toString();
        if(url.pathname==='/contact'&&typeof window.gtag==='function')window.gtag('event','satellite_contact_click',{
          satellite_id:${JSON.stringify(site.slug)},service:url.searchParams.get('service'),
          cta_placement:url.searchParams.get('cta'),source_path:location.pathname
        });
      });
    `}</Script>
  </body></html>;
}
