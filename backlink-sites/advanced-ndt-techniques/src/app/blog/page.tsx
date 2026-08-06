import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Articles | Advanced NDT Techniques",
  description: "In-depth technical articles from Advanced NDT Techniques on inspection practice, codes, qualification and the records that make an inspection defensible.",
  alternates: { canonical: '/blog' },
};

const articles = [
    {
      title: "PAUT’s Quiet Bottleneck Is Data Management, Not Data Acquisition",
      excerpt: "Phased array instruments produce gigabytes per shift; most companies still manage the output like radiographs in a filing cabinet. Encoded-scan files, analyst workflow and deliverables — where advanced UT programmes actually lose time.",
      date: "August 2026",
      readTime: "9 min read",
      href: "/blog/paut-data-management-bottleneck",
      category: "Advanced Ultrasonics",
    },
  {
    "title": "Automating Advanced NDT Reporting with an Inspection ERP",
    "description": "How inspection companies use ERP-driven templates and workflows to automate PAUT, TOFD, and advanced method report generation and QA review.",
    "href": "/blog/automating-ndt-reporting-with-inspection-erp"
  },
  {
    "title": "Encoded PAUT Data Is Worthless Without Location Identity",
    "description": "Encoded phased array scanning promises reproducibility between campaigns. That promise only holds if the scan can be tied to the same physical location next time — which is a data problem, not a scanning one.",
    "href": "/blog/encoded-paut-data-is-worthless-without-location-identity"
  },
  {
    "title": "Managing PAUT and TOFD Data in an Asset Digital Twin",
    "description": "How to store, trend, and retrieve phased array UT and TOFD scan files inside an asset digital twin instead of a flat file archive.",
    "href": "/blog/managing-paut-tofd-data-in-a-digital-twin"
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
