import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Articles | Coating Inspection Guide",
  description: "In-depth technical articles from Coating Inspection Guide on inspection practice, codes, qualification and the records that make an inspection defensible.",
  alternates: { canonical: '/blog' },
};

const articles = [
  {
    "title": "Coating & CP Inspection Data: ERP Best Practices Guide",
    "description": "How inspection companies structure DFT, holiday testing, adhesion, and CP survey data inside an ERP for auditable, code-compliant coating programs.",
    "href": "/blog/managing-coating-inspection-data-with-erp"
  },
  {
    "title": "Coating Inspection Records That Survive a Warranty Dispute",
    "description": "Coating failures surface years after application, when the argument turns on hold-point records, environmental readings and instrument calibration. What was recorded at the time decides who pays.",
    "href": "/blog/coating-inspection-records-that-survive-a-warranty-dispute"
  },
  {
    "title": "Visualizing Corrosion & Coating Condition in a Digital Twin",
    "description": "How 3D digital twins turn DFT, holiday testing, and CP survey data into a color-mapped, RBI-linked visual model of asset corrosion risk.",
    "href": "/blog/corrosion-and-coating-in-a-digital-twin"
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
