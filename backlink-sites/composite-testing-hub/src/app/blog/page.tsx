import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Articles | Composite Testing Hub",
  description: "In-depth technical articles from Composite Testing Hub on inspection practice, codes, qualification and the records that make an inspection defensible.",
  alternates: { canonical: '/blog' },
};

const articles = [
  {
    "title": "Digital Twins for Composite Structure Integrity Management",
    "description": "From wind blades to aerospace skins, composite structures need spatial defect tracking over decades. See how digital twins manage that integrity data.",
    "href": "/blog/digital-twin-for-composite-structure-integrity"
  },
  {
    "title": "Managing Composite NDT Inspection Data in an ERP System",
    "description": "Composite inspection generates dense UT and thermography datasets that outgrow spreadsheets fast. See how an ERP centralizes composite NDT records.",
    "href": "/blog/managing-composite-inspection-data-in-erp"
  },
  {
    "title": "Why Composite Inspection Records Are Harder Than Metal Records",
    "description": "Acceptance criteria come from the OEM specification rather than a general code, so the same indication can be acceptable on one programme and rejectable on another. That single difference changes what a record has to contain.",
    "href": "/blog/why-composite-inspection-records-are-harder-than-metal"
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
