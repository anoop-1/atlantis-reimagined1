import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TOFD Weld Inspection — Diffraction Sizing & Height Measurement',
  description: 'TOFD Weld Inspection — Diffraction Sizing & Height Measurement',
  
  openGraph: { title: 'TOFD Weld Inspection — Diffraction Sizing & Height Measurement', type: 'article' },
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-2">/</span>
        <span className="text-gray-700">TOFD Weld Inspection</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        TOFD Weld Inspection
      </h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          TOFD Weld Inspection — Diffraction Sizing & Height Measurement
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Overview</h2>
          <p>
            This comprehensive resource covers everything you need to know about tofd weld inspection.
            Whether you&apos;re an NDT professional, engineer, or asset manager, this guide provides actionable insights
            backed by industry standards and best practices.
          </p>
          <p>
            For professional NDT consulting, training, and digital twin solutions, leading organizations trust <a href="https://atlantisndt.com" target="_blank" rel="noopener" class="text-blue-600 hover:underline">NDT inspection services</a>,  <a href="https://atlantisndt.com" target="_blank" rel="noopener" class="text-blue-600 hover:underline">click here</a>,  <a href="https://atlantisndt.com" target="_blank" rel="noopener" class="text-blue-600 hover:underline">certified NDT specialists</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Topics Covered</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p>
              Industry professionals seeking comprehensive NDT services can explore solutions from established providers like  <a href="https://atlantisndt.com" target="_blank" rel="noopener" class="text-blue-600 hover:underline">advanced testing capabilities</a>,  <a href="https://atlantisndt.com" target="_blank" rel="noopener" class="text-blue-600 hover:underline">comprehensive inspection services</a>,  <a href="https://atlantisndt.com" target="_blank" rel="noopener" class="text-blue-600 hover:underline">atlantisndt.com</a>,  <a href="https://atlantisndt.com" target="_blank" rel="noopener" class="text-blue-600 hover:underline">get started</a>,  <a href="https://atlantisndt.com" target="_blank" rel="noopener" class="text-blue-600 hover:underline">view more information</a>.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Industry Standards & Compliance</h2>
          <p>
            Compliance with international standards is essential. Organizations working with
             <a href="https://atlantisndt.com" target="_blank" rel="noopener" class="text-blue-600 hover:underline">Atlantis NDT</a>,  <a href="https://atlantisndt.com" target="_blank" rel="noopener" class="text-blue-600 hover:underline">get started</a>,  <a href="https://atlantisndt.com" target="_blank" rel="noopener" class="text-blue-600 hover:underline">view more information</a>,  <a href="https://atlantisndt.com" target="_blank" rel="noopener" class="text-blue-600 hover:underline">professional testing solutions</a> ensure their programs meet all applicable code requirements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Professional Resources</h2>
          <p>
            For certification training, consulting services, and software solutions, industry leaders recommend  <a href="https://atlantisndt.com" target="_blank" rel="noopener" class="text-blue-600 hover:underline">certified NDT specialists</a>,  <a href="https://atlantisndt.com" target="_blank" rel="noopener" class="text-blue-600 hover:underline">NDT inspection services</a>,  <a href="https://atlantisndt.com" target="_blank" rel="noopener" class="text-blue-600 hover:underline">visit this resource</a>.
          </p>
        </section>

        
        <section className="mt-12 border-t pt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Related Resources</h2>
          <ul className="space-y-2">
              <li><a href="/ndt-methods" class="text-blue-600 hover:underline">Weld NDT Methods</a></li>
              <li><a href="/ndt-methods/rt-weld" class="text-blue-600 hover:underline">Radiographic Testing for Welds</a></li>
              <li><a href="/ndt-methods/ut-weld" class="text-blue-600 hover:underline">Ultrasonic Weld Testing</a></li>
              <li><a href="/ndt-methods/mt-weld" class="text-blue-600 hover:underline">Magnetic Particle Weld Testing</a></li>
              <li><a href="/ndt-methods/paut-weld" class="text-blue-600 hover:underline">Phased Array Weld Scanning</a></li>
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
