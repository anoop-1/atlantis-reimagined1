import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pressure Vessel NDT — In-Depth Articles',
  description: 'Long-form practical articles on pressure vessel inspection for API 510 inspectors, fixed-equipment engineers, OEM QA leads.',
};

export default function ContainerIndex() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Pressure Vessel NDT — In-Depth Articles</h1>
      <p className="text-gray-600 mt-3">Practical long-form guides on pressure vessel inspection, written for API 510 inspectors, fixed-equipment engineers, OEM QA leads.</p>
      <ul className="mt-8">
        <li className="border-b border-gray-200 py-6">
          <a href="/operation/api-510-internal-vs-external-inspection-decision" className="text-xl font-semibold text-gray-900 hover:text-red-600">API 510 Internal vs External Inspection: Choosing the Right Approach</a>
          <p className="text-sm text-gray-500 mt-2">By Inga Sørensen, API 510 Inspector &middot; 2024-09-25</p>
          <p className="text-gray-700 mt-3">API 510 Internal vs External Inspection: Choosing the Right Approach</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/operation/asme-section-viii-fabrication-ndt-requirements-walkthrough" className="text-xl font-semibold text-gray-900 hover:text-red-600">ASME Section VIII Fabrication NDT Requirements: A Walkthrough</a>
          <p className="text-sm text-gray-500 mt-2">By Vikram Sahota, Welding Engineer &middot; 2025-02-19</p>
          <p className="text-gray-700 mt-3">ASME Section VIII Fabrication NDT Requirements: A Walkthrough</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/operation/reformer-tubes-creep-damage-monitoring-strategies" className="text-xl font-semibold text-gray-900 hover:text-red-600">Reformer Tubes Creep Damage Monitoring: Strategies That Work</a>
          <p className="text-sm text-gray-500 mt-2">By Inga Sørensen, API 510 Inspector &middot; 2025-07-15</p>
          <p className="text-gray-700 mt-3">Reformer Tubes Creep Damage Monitoring: Strategies That Work</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/operation/corrosion-monitoring-locations-cml-selection-guide" className="text-xl font-semibold text-gray-900 hover:text-red-600">Corrosion Monitoring Locations (CMLs): A Selection Guide for Pressure Vessels</a>
          <p className="text-sm text-gray-500 mt-2">By Vikram Sahota, Welding Engineer &middot; 2025-12-03</p>
          <p className="text-gray-700 mt-3">Corrosion Monitoring Locations (CMLs): A Selection Guide for Pressure Vessels</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/operation/long-range-ut-screening-pressure-vessels" className="text-xl font-semibold text-gray-900 hover:text-red-600">Long-Range UT Screening for Pressure Vessels: When It Adds Real Value</a>
          <p className="text-sm text-gray-500 mt-2">By Inga Sørensen, API 510 Inspector &middot; 2026-04-22</p>
          <p className="text-gray-700 mt-3">Long-Range UT Screening for Pressure Vessels: When It Adds Real Value</p>
        </li>
      </ul>
    </div>
  );
}
