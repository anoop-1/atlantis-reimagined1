import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Oil & Gas Inspection Guide — In-Depth Articles',
  description: 'Long-form practical articles on oil & gas inspection for upstream/midstream/downstream inspection leads.',
};

export default function ContainerIndex() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Oil & Gas Inspection Guide — In-Depth Articles</h1>
      <p className="text-gray-600 mt-3">Practical long-form guides on oil & gas inspection, written for upstream/midstream/downstream inspection leads.</p>
      <ul className="mt-8">
        <li className="border-b border-gray-200 py-6">
          <a href="/sectors/upstream-midstream-downstream-inspection-budget-allocation" className="text-xl font-semibold text-gray-900 hover:text-amber-600">Upstream vs Midstream vs Downstream: Where Inspection Budget Actually Goes</a>
          <p className="text-sm text-gray-500 mt-2">By Ricardo Sosa, PE &middot; 2024-10-02</p>
          <p className="text-gray-700 mt-3">Upstream vs Midstream vs Downstream: Where Inspection Budget Actually Goes</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/sectors/crude-oil-storage-tank-inspection-api-653-walkthrough" className="text-xl font-semibold text-gray-900 hover:text-amber-600">Crude Oil Storage Tank Inspection: API 653 Walkthrough</a>
          <p className="text-sm text-gray-500 mt-2">By Ricardo Sosa, PE &middot; 2025-02-25</p>
          <p className="text-gray-700 mt-3">Crude Oil Storage Tank Inspection: API 653 Walkthrough</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/sectors/gathering-system-pipeline-inspection-cost-effective" className="text-xl font-semibold text-gray-900 hover:text-amber-600">Gathering-System Pipeline Inspection: Cost-Effective Methods</a>
          <p className="text-sm text-gray-500 mt-2">By Marisa Quintero, Pipeline Eng &middot; 2025-07-09</p>
          <p className="text-gray-700 mt-3">Gathering-System Pipeline Inspection: Cost-Effective Methods</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/sectors/wellhead-inspection-and-pressure-testing" className="text-xl font-semibold text-gray-900 hover:text-amber-600">Wellhead Inspection and Pressure Testing: Field Practice</a>
          <p className="text-sm text-gray-500 mt-2">By Ricardo Sosa, PE &middot; 2025-12-08</p>
          <p className="text-gray-700 mt-3">Wellhead Inspection and Pressure Testing: Field Practice</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/sectors/lact-skid-and-meter-prover-inspection" className="text-xl font-semibold text-gray-900 hover:text-amber-600">LACT Skid and Meter Prover Inspection: What QA Should Look For</a>
          <p className="text-sm text-gray-500 mt-2">By Marisa Quintero, Pipeline Eng &middot; 2026-04-11</p>
          <p className="text-gray-700 mt-3">LACT Skid and Meter Prover Inspection: What QA Should Look For</p>
        </li>
      </ul>
    </div>
  );
}
