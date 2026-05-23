import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industrial Inspection Resources — In-Depth Articles',
  description: 'Long-form practical articles on industrial inspection across sectors for multi-industry NDT managers, integrity consultants.',
};

export default function ContainerIndex() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Industrial Inspection Resources — In-Depth Articles</h1>
      <p className="text-gray-600 mt-3">Practical long-form guides on industrial inspection across sectors, written for multi-industry NDT managers, integrity consultants.</p>
      <ul className="mt-8">
        <li className="border-b border-gray-200 py-6">
          <a href="/topics/cross-sector-ndt-program-benchmarks-2026" className="text-xl font-semibold text-gray-900 hover:text-slate-600">Cross-Sector NDT Program Benchmarks (2026)</a>
          <p className="text-sm text-gray-500 mt-2">By Caleb Yates, Integrity Consultant &middot; 2024-09-04</p>
          <p className="text-gray-700 mt-3">Cross-Sector NDT Program Benchmarks (2026)</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/topics/building-an-in-house-vs-outsourced-ndt-program" className="text-xl font-semibold text-gray-900 hover:text-slate-600">In-House vs Outsourced NDT Program: A Total-Cost View</a>
          <p className="text-sm text-gray-500 mt-2">By Caleb Yates, Integrity Consultant &middot; 2025-02-05</p>
          <p className="text-gray-700 mt-3">In-House vs Outsourced NDT Program: A Total-Cost View</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/topics/integrity-data-management-platforms-buyer-guide" className="text-xl font-semibold text-gray-900 hover:text-slate-600">Integrity Data Management Platforms: A Buyer Guide for 2026</a>
          <p className="text-sm text-gray-500 mt-2">By Nadine El-Sayed, Digital Twin Engineer &middot; 2025-06-25</p>
          <p className="text-gray-700 mt-3">Integrity Data Management Platforms: A Buyer Guide for 2026</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/topics/training-budget-allocation-ndt-team" className="text-xl font-semibold text-gray-900 hover:text-slate-600">Training Budget Allocation for a Multi-Method NDT Team</a>
          <p className="text-sm text-gray-500 mt-2">By Caleb Yates, Integrity Consultant &middot; 2025-10-08</p>
          <p className="text-gray-700 mt-3">Training Budget Allocation for a Multi-Method NDT Team</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/topics/iso-9712-vs-asnt-snt-tc-1a-multi-region-teams" className="text-xl font-semibold text-gray-900 hover:text-slate-600">ISO 9712 vs ASNT SNT-TC-1A for Multi-Region Teams</a>
          <p className="text-sm text-gray-500 mt-2">By Nadine El-Sayed, Digital Twin Engineer &middot; 2026-03-12</p>
          <p className="text-gray-700 mt-3">ISO 9712 vs ASNT SNT-TC-1A for Multi-Region Teams</p>
        </li>
      </ul>
    </div>
  );
}
