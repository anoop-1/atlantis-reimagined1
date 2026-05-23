import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tank Inspection Resource — In-Depth Articles',
  description: 'Long-form practical articles on aboveground storage tank inspection for API 653 inspectors, terminal operators, tank field engineers.',
};

export default function ContainerIndex() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Tank Inspection Resource — In-Depth Articles</h1>
      <p className="text-gray-600 mt-3">Practical long-form guides on aboveground storage tank inspection, written for API 653 inspectors, terminal operators, tank field engineers.</p>
      <ul className="mt-8">
        <li className="border-b border-gray-200 py-6">
          <a href="/tanks/api-653-out-of-service-internal-inspection-checklist" className="text-xl font-semibold text-gray-900 hover:text-cyan-600">API 653 Out-of-Service Internal Inspection Checklist</a>
          <p className="text-sm text-gray-500 mt-2">By Heidi Knaack, API 653 &middot; 2024-09-06</p>
          <p className="text-gray-700 mt-3">API 653 Out-of-Service Internal Inspection Checklist</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/tanks/tank-floor-mfl-vs-paut-which-fits-the-job" className="text-xl font-semibold text-gray-900 hover:text-cyan-600">Tank Floor MFL vs PAUT: Which Method Fits the Job?</a>
          <p className="text-sm text-gray-500 mt-2">By Heidi Knaack, API 653 &middot; 2025-01-28</p>
          <p className="text-gray-700 mt-3">Tank Floor MFL vs PAUT: Which Method Fits the Job?</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/tanks/tank-shell-thickness-program-with-out-of-service-inspection" className="text-xl font-semibold text-gray-900 hover:text-cyan-600">Tank Shell Thickness Program With and Without Out-of-Service Inspection</a>
          <p className="text-sm text-gray-500 mt-2">By Tomás Reinoso, API 510/653 &middot; 2025-06-26</p>
          <p className="text-gray-700 mt-3">Tank Shell Thickness Program With and Without Out-of-Service Inspection</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/tanks/floating-roof-seal-inspection-and-leak-detection" className="text-xl font-semibold text-gray-900 hover:text-cyan-600">Floating Roof Seal Inspection and Leak Detection</a>
          <p className="text-sm text-gray-500 mt-2">By Heidi Knaack, API 653 &middot; 2025-11-15</p>
          <p className="text-gray-700 mt-3">Floating Roof Seal Inspection and Leak Detection</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/tanks/soil-side-corrosion-on-tank-floors-and-detection" className="text-xl font-semibold text-gray-900 hover:text-cyan-600">Soil-Side Corrosion on Tank Floors and How to Detect It</a>
          <p className="text-sm text-gray-500 mt-2">By Tomás Reinoso, API 510/653 &middot; 2026-04-05</p>
          <p className="text-gray-700 mt-3">Soil-Side Corrosion on Tank Floors and How to Detect It</p>
        </li>
      </ul>
    </div>
  );
}
