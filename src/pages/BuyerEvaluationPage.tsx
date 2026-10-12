import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { SEOHead } from '@/components/SEOHead';
import ContactDetails from '@/components/ContactDetails';
import ErpShortForm from '@/components/erp/ErpShortForm';
import copy from '@/data/buyer-evaluation.json';

type Section = { heading: string; paragraphs?: string[]; items?: string[]; links?: string[][]; columns?: string[]; rows?: string[][] };
export default function BuyerEvaluationPage({ path }: { path: '/free-trial' | '/ndt-erp-integration-matrix' }) {
  const page = copy[path];
  return <div className="min-h-screen pt-20"><Navigation />
    <SEOHead title={page.title} description={page.description} canonical={`https://atlantisndt.com${path}`} structuredData={{
      '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: page.faq.map(f => ({'@type':'Question', name:f.q, acceptedAnswer:{'@type':'Answer', text:f.a}}))
    }} />
    <main className="container mx-auto max-w-5xl px-6 py-12">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm"><Link to="/">Home</Link> / <Link to="/erp">ERP</Link> / {path === '/free-trial' ? 'Free trial' : 'Integrations'}</nav>
      <h1 className="text-4xl md:text-5xl font-bold mb-6">{page.h1}</h1>
      <p className="text-xl text-muted-foreground mb-8">{page.intro}</p>
      <div className="flex flex-wrap gap-4 mb-12"><a href={page.cta.href} className="rounded-lg bg-primary text-primary-foreground px-6 py-3 font-semibold">{page.cta.label}</a><Link to={page.secondary.href} className="rounded-lg border px-6 py-3 font-semibold">{page.secondary.label}</Link></div>
      {(page.sections as Section[]).map(s => <section key={s.heading} className="my-10">
        <h2 className="text-2xl font-bold mb-4">{s.heading}</h2>
        {s.paragraphs?.map(p => <p key={p} className="mb-4 leading-relaxed text-muted-foreground">{p}</p>)}
        {s.items && <ul className="list-disc pl-6 space-y-3">{s.items.map(p => <li key={p}>{p}</li>)}</ul>}
        {s.rows && <div className="overflow-x-auto"><table className="w-full border-collapse text-left text-sm"><caption className="sr-only">{s.heading}</caption><thead><tr>{s.columns?.map(c => <th scope="col" className="border p-3 bg-muted" key={c}>{c}</th>)}</tr></thead><tbody>{s.rows.map(row => <tr key={row[0]}>{row.map((c,i) => i === 0 ? <th scope="row" className="border p-3" key={c}>{c}</th> : <td className="border p-3" key={c}>{c}</td>)}</tr>)}</tbody></table></div>}
        {s.links && <p className="mt-5 flex flex-wrap gap-x-6 gap-y-2">{s.links.map(([href,label]) => <Link to={href} key={href} className="text-primary underline">{label}</Link>)}</p>}
      </section>)}
      <section className="my-12"><h2 className="text-2xl font-bold mb-5">Frequently asked questions</h2>{page.faq.map(f => <details key={f.q} className="border-b py-4"><summary className="font-semibold cursor-pointer">{f.q}</summary><p className="mt-3 text-muted-foreground">{f.a}</p></details>)}</section>
      {path === '/free-trial' && <ErpShortForm id="erp-trial-enquiry" trial />}
    </main><ContactDetails />
  </div>;
}
