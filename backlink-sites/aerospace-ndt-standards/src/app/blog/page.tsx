import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Articles | Aerospace NDT Standards",
  description: "In-depth technical articles from Aerospace NDT Standards on inspection practice, codes, qualification and the records that make an inspection defensible.",
  alternates: { canonical: '/blog' },
};

const articles = [
    {
      title: "Crossing From Industrial NDT Into Aerospace: What Actually Transfers",
      excerpt: "Moving from an SNT-TC-1A programme into NAS 410 work is routine but never automatic. What carries over, what must be rebuilt, and why manufacturing and MRO differ.",
      date: "August 2026",
      readTime: "8 min read",
      href: "/blog/crossing-from-industrial-ndt-into-aerospace",
      category: "Aerospace",
    },
  {
    "title": "Digital Twins for Aircraft Fleet Structural Integrity",
    "description": "Aircraft fleet structural integrity programs generate huge NDT datasets. Learn how digital twins turn inspection history into predictive fleet decisions.",
    "href": "/blog/aerospace-digital-twin-for-fleet-integrity"
  },
  {
    "title": "Meeting NADCAP Compliance with an NDT Inspection ERP",
    "description": "NADCAP AC7114 and AS9100D compliance depend on traceable NDT records. See how inspection-management ERP systems close the audit evidence gap.",
    "href": "/blog/nadcap-compliance-with-ndt-inspection-erp"
  },
  {
    "title": "What Nadcap Auditors Look At Before They Look At Your Technique",
    "description": "Technique quality is rarely where a Nadcap audit is lost. The findings cluster in personnel currency, process control and the ability to reconstruct a past inspection — all of which are records problems.",
    "href": "/blog/what-nadcap-auditors-look-at-before-they-look-at-your-technique"
  }
];

export default function BlogIndex() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Articles</h1>
      <p className="text-slate-600 mb-10 max-w-2xl">
        Technical writing on inspection practice, applicable codes, personnel qualification, and the
        records that determine whether an inspection stands up when it is examined.
      </p>
      <ul className="space-y-8">
        {articles.map((a) => (
          <li key={a.href} className="border-b border-slate-200 pb-8 last:border-0">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              <Link href={a.href} className="hover:text-blue-700">{a.title}</Link>
            </h2>
            {a.description ? <p className="text-slate-600 leading-relaxed">{a.description}</p> : null}
            <Link href={a.href} className="inline-block mt-3 text-blue-700 font-medium hover:underline">
              Read the article →
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
