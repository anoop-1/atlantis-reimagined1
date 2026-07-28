import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Encoded PAUT Data Is Worthless Without Location Identity",
  description: "Encoded phased array scanning promises reproducibility between campaigns. That promise only holds if the scan can be tied to the same physical location next time — which is a data problem, not a scanning one.",
  keywords: ["PAUT","encoded scanning","corrosion mapping","CML","inspection data"],
  alternates: { canonical: "https://advanced-ndt-techniques.vercel.app/blog/encoded-paut-data-is-worthless-without-location-identity" },
  openGraph: {
    title: "Encoded PAUT Data Is Worthless Without Location Identity",
    description: "Encoded phased array scanning promises reproducibility between campaigns. That promise only holds if the scan can be tied to the same physical location next time — which is a data problem, not a scanning one.",
    type: 'article',
    url: "https://advanced-ndt-techniques.vercel.app/blog/encoded-paut-data-is-worthless-without-location-identity",
    siteName: "Advanced NDT Techniques",
    locale: 'en_US',
    publishedTime: "2026-07-22T00:00:00.000Z",
    modifiedTime: "2026-07-22T00:00:00.000Z",
    authors: ["Marcus Feldt, EN 4179 Level 3"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Encoded PAUT Data Is Worthless Without Location Identity",
  "description": "Encoded phased array scanning promises reproducibility between campaigns. That promise only holds if the scan can be tied to the same physical location next time — which is a data problem, not a scanning one.",
  "author": {
    "@type": "Person",
    "name": "Marcus Feldt, EN 4179 Level 3"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Advanced NDT Techniques",
    "url": "https://advanced-ndt-techniques.vercel.app"
  },
  "datePublished": "2026-07-22T00:00:00.000Z",
  "dateModified": "2026-07-22T00:00:00.000Z",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://advanced-ndt-techniques.vercel.app/blog/encoded-paut-data-is-worthless-without-location-identity"
  },
  "keywords": "PAUT, encoded scanning, corrosion mapping, CML, inspection data"
};

export default function ArticlePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-slate prose-lg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1>Encoded PAUT Data Is Worthless Without Location Identity</h1>
      <p className="text-slate-500 text-base">By Marcus Feldt, EN 4179 Level 3 · 22 July 2026</p>
      <div dangerouslySetInnerHTML={{ __html: "<p>The main technical argument for encoded phased array scanning over manual ultrasonic work is reproducibility: the same scan, run again in three years, produces a comparable dataset and therefore a real degradation trend rather than two unrelated snapshots. It is a good argument. It also fails routinely in practice, and almost never for scanning reasons.</p>\n\n      <h2>Where reproducibility actually breaks</h2>\n      <p>Not in the encoder, and not in the focal laws. It breaks because nobody can establish, three years later, that the second scan covers the same physical area as the first. The scan start position was described relative to a paint mark that has since been blasted off. The component was re-identified during a re-drawing exercise. The contractor changed and the new crew placed their own datum a hand's width from the old one.</p>\n      <p>The data is technically excellent and comparatively useless, because comparison requires shared identity and identity was never recorded with the precision the comparison needs.</p>\n\n      <h2>What \"location identity\" has to mean</h2>\n      <ul>\n        <li>A permanent identifier that is never reused, allocated centrally rather than by whichever contractor is on site.</li>\n        <li>A physical description precise enough that a different technician can find the same start position without the previous one present — typically a measured offset from a permanent feature, not a mark on the surface.</li>\n        <li>The scan geometry recorded as data: probe, wedge, focal laws, encoder resolution, start position and scan direction.</li>\n        <li>Retirement rather than reuse when a component is replaced, so the history of the old component stays intact and does not silently continue onto the new one.</li>\n      </ul>\n\n      <h2>The economic argument</h2>\n      <p>Encoded scanning costs more than manual ultrasonic work — more setup, more surface preparation, more analysis time. That premium is justified entirely by the value of the trend. If the trend cannot be constructed, the premium bought a better single snapshot at several times the price of an adequate one. Programmes that commission encoded scanning without first fixing location identity are, quite precisely, paying for a capability they have made it impossible to use.</p>\n\n      <h2>Fix the register before you buy the scanner</h2>\n      <p>The sequence that works is unglamorous: reconcile the corrosion monitoring location register, establish identity rules and enforce them across contractors, then invest in encoded acquisition. Doing it in the other order is common and produces exactly the outcome described above.</p>\n      <p>Systems that hold readings against a persistent location rather than against a report — the approach behind <a href=\"https://atlantisndt.com/asset-integrity-management-software\" target=\"_blank\" rel=\"noopener\">asset integrity platforms that bind every reading to a CML with a permanent identifier</a> — make the trend automatic rather than a reconstruction exercise. There is also a practical field guide to <a href=\"https://atlantisndt.com/blog/building-a-cml-register-that-survives-ten-years\" target=\"_blank\" rel=\"noopener\">building a CML register that survives ten years</a>, including how to re-baseline defensibly when an existing register has already degraded.</p>" }} />
    </article>
  );
}
