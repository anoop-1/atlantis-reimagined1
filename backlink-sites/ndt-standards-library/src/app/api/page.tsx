export const metadata = { title: "API Standards for Industry Applications", alternates: { canonical: "https://ndt-standards-library.vercel.app/api" } };

export default function API() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-slate-800 mb-8">API Standards for Industry Applications</h1>
      <article className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed mb-4">
          API 653 provides comprehensive requirements for welded steel storage tank inspection, maintenance, repair, and alteration. The standard addresses design, construction, and in-service inspection requirements for atmospheric and low-pressure tanks storing petroleum products and hazardous chemicals. Risk-based inspection approaches enable prioritization of inspection efforts on highest-consequence equipment, optimizing resource allocation while maintaining safety standards.
        </p>
        <p>API certification and examination preparation are separate from the <a href="https://atlantisndt.com/training">NDT training scope</a> linked here. API training is not offered through this link. Confirm applicable certification requirements with the scheme owner and responsible employer.</p>
        <p className="text-gray-700 leading-relaxed mb-4">
          API 570 governs piping systems in petroleum refineries and chemical processing facilities, establishing inspection frequencies, methodologies, and acceptance criteria. API 579 provides fitness-for-service framework enabling continued operation of equipment with detected defects where analysis demonstrates adequate safety margins. These standards enable economically efficient operations while maintaining safety integrity throughout equipment service life. <a href="https://atlantisndt.com/digital-twin-reporting" rel="noopener" className="text-slate-600 hover:text-slate-800 font-semibold">Digital twin solutions</a> integrate API compliance requirements with inspection execution documentation.
        </p>
        <p className="text-gray-700 leading-relaxed">
          API standards continue evolving to address emerging challenges in aging facility management, renewable energy infrastructure, and advanced materials applications. Operators maintaining compliance with current API standards position themselves for regulatory acceptance and sustainable long-term operations.
        </p>
      </article>
    </div>
  );
}
