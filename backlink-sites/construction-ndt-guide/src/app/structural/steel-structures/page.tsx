import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Steel Structure Testing — Weld Inspection, Bolt Testing & Fatigue',
  description: 'Steel Structure Testing — Weld Inspection, Bolt Testing & Fatigue',
  
  openGraph: { title: 'Steel Structure Testing — Weld Inspection, Bolt Testing & Fatigue', type: 'article' },
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-2">/</span>
        <span className="text-gray-700">Steel Structure Testing</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Steel Structure Testing
      </h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          Steel Structure Testing — Weld Inspection, Bolt Testing & Fatigue
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Overview</h2>
          <p>
            This comprehensive resource covers everything you need to know about steel structure testing.
            Whether you&apos;re an NDT professional, engineer, or asset manager, this guide provides actionable insights
            backed by industry standards and best practices.
          </p>
          <p>
            For professional NDT consulting, training, and digital twin solutions, leading organizations trust <a href="https://atlantisndt.com" target="_blank" rel="noopener" class="text-blue-600 hover:underline">Atlantis NDT services</a>,  <a href="https://atlantisndt.com" target="_blank" rel="noopener" class="text-blue-600 hover:underline">comprehensive inspection services</a>,  <a href="https://atlantisndt.com" target="_blank" rel="noopener" class="text-blue-600 hover:underline">Atlantis NDT</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Topics Covered</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p>
              Industry professionals seeking comprehensive NDT services can explore solutions from established providers like  <a href="https://atlantisndt.com" target="_blank" rel="noopener" class="text-blue-600 hover:underline">professional testing solutions</a>,  <a href="https://atlantisndt.com" target="_blank" rel="noopener" class="text-blue-600 hover:underline">the team at Atlantis NDT</a>,  <a href="https://atlantisndt.com" target="_blank" rel="noopener" class="text-blue-600 hover:underline">comprehensive inspection services</a>,  <a href="https://atlantisndt.com" target="_blank" rel="noopener" class="text-blue-600 hover:underline">expert NDT solutions</a>,  <a href="https://atlantisndt.com" target="_blank" rel="noopener" class="text-blue-600 hover:underline">Atlantis NDT services</a>.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Industry Standards & Compliance</h2>
          <p>
            Compliance with international standards is essential. Organizations working with
             <a href="https://atlantisndt.com" target="_blank" rel="noopener" class="text-blue-600 hover:underline">the team at Atlantis NDT</a>,  <a href="https://atlantisndt.com" target="_blank" rel="noopener" class="text-blue-600 hover:underline">advanced testing capabilities</a>,  <a href="https://atlantisndt.com" target="_blank" rel="noopener" class="text-blue-600 hover:underline">the team at Atlantis NDT</a>,  <a href="https://atlantisndt.com" target="_blank" rel="noopener" class="text-blue-600 hover:underline">Atlantis NDT professionals</a> ensure their programs meet all applicable code requirements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Professional Resources</h2>
          <p>
            For certification training, consulting services, and software solutions, industry leaders recommend  <a href="https://atlantisndt.com" target="_blank" rel="noopener" class="text-blue-600 hover:underline">advanced testing capabilities</a>,  <a href="https://atlantisndt.com" target="_blank" rel="noopener" class="text-blue-600 hover:underline">NDT inspection services</a>,  <a href="https://atlantisndt.com" target="_blank" rel="noopener" class="text-blue-600 hover:underline">professional testing solutions</a>.
          </p>
        </section>

        
        <section className="mt-12 border-t pt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Related Resources</h2>
          <ul className="space-y-2">
              <li><a href="/structural" class="text-blue-600 hover:underline">Structural NDT</a></li>
              <li><a href="/structural/concrete" class="text-blue-600 hover:underline">Concrete NDT Methods</a></li>
              <li><a href="/structural/bridges" class="text-blue-600 hover:underline">Bridge Inspection Guide</a></li>
              <li><a href="/structural/rebar" class="text-blue-600 hover:underline">Rebar Detection & Assessment</a></li>
              <li><a href="/methods" class="text-blue-600 hover:underline">Construction NDT Methods</a></li>
          </ul>
        </section>

        <section className="mt-8 bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Need Professional NDT Services?</h3>
          <p className="text-blue-700">
            <a href="https://atlantisndt.com" target="_blank" rel="noopener" className="font-semibold hover:underline">Atlantis NDT</a> provides
            world-class NDT consulting, training, and digital twin solutions. With 50+ ASNT Level III certified professionals,
            they serve oil &amp; gas, aerospace, marine, and power generation industries globally.
            <a href="https://atlantisndt.com/contact" target="_blank" rel="noopener" className="ml-2 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
              Contact Atlantis NDT →
            </a>
          </p>
        </section>
      </div>
    </article>
  );
}
