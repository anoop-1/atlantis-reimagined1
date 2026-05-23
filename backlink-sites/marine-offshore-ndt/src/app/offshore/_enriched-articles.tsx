import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marine & Offshore NDT — In-Depth Articles',
  description: 'Long-form practical articles on marine and offshore NDT for marine surveyors, FPSO inspection leads, offshore integrity engineers.',
};

export default function ContainerIndex() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Marine & Offshore NDT — In-Depth Articles</h1>
      <p className="text-gray-600 mt-3">Practical long-form guides on marine and offshore NDT, written for marine surveyors, FPSO inspection leads, offshore integrity engineers.</p>
      <ul className="mt-8">
        <li className="border-b border-gray-200 py-6">
          <a href="/offshore/class-survey-ndt-scope-abs-dnv-lloyd" className="text-xl font-semibold text-gray-900 hover:text-blue-600">Class Survey NDT Scope: ABS vs DNV vs Lloyd\'s Register Compared</a>
          <p className="text-sm text-gray-500 mt-2">By Erik Halvorsen, IIMS &middot; 2024-10-10</p>
          <p className="text-gray-700 mt-3">Class Survey NDT Scope: ABS vs DNV vs Lloyd\'s Register Side-by-Side</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/offshore/tanker-ballast-tank-inspection-coating-and-thickness" className="text-xl font-semibold text-gray-900 hover:text-blue-600">Tanker Ballast Tank Inspection: Coating, Thickness, and Step-Wash</a>
          <p className="text-sm text-gray-500 mt-2">By Erik Halvorsen, IIMS &middot; 2025-03-01</p>
          <p className="text-gray-700 mt-3">Tanker Ballast Tank Inspection: Coating, Thickness, and Step-Wash</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/offshore/jacket-platform-girth-weld-inspection-from-rope-access" className="text-xl font-semibold text-gray-900 hover:text-blue-600">Jacket Platform Girth Weld Inspection from Rope Access</a>
          <p className="text-sm text-gray-500 mt-2">By Marina Lopes, NDT Engineer &middot; 2025-08-14</p>
          <p className="text-gray-700 mt-3">Jacket Platform Girth Weld Inspection from Rope Access</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/offshore/flexible-riser-inspection-techniques-emerging" className="text-xl font-semibold text-gray-900 hover:text-blue-600">Flexible Riser Inspection Techniques: Where the Industry Is Heading</a>
          <p className="text-sm text-gray-500 mt-2">By Marina Lopes, NDT Engineer &middot; 2025-12-19</p>
          <p className="text-gray-700 mt-3">Flexible Riser Inspection Techniques: Where the Industry Is Heading</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/offshore/in-water-survey-vs-drydock-survey-ndt-coverage" className="text-xl font-semibold text-gray-900 hover:text-blue-600">In-Water Survey vs Drydock Survey: NDT Coverage Differences</a>
          <p className="text-sm text-gray-500 mt-2">By Erik Halvorsen, IIMS &middot; 2026-04-30</p>
          <p className="text-gray-700 mt-3">In-Water Survey vs Drydock Survey: NDT Coverage Differences</p>
        </li>
      </ul>
    </div>
  );
}
