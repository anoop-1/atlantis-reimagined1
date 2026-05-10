import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Asset Integrity Hub — In-Depth Articles',
  description: 'Long-form practical articles on asset integrity management for reliability engineers, integrity managers, plant superintendents.',
};

export default function ContainerIndex() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Asset Integrity Hub — In-Depth Articles</h1>
      <p className="text-gray-600 mt-3">Practical long-form guides on asset integrity management, written for reliability engineers, integrity managers, plant superintendents.</p>
      <ul className="mt-8">
        <li className="border-b border-gray-200 py-6">
          <a href="/blog/risk-based-inspection-vs-time-based-which-cuts-cost-more" className="text-xl font-semibold text-gray-900 hover:text-blue-600">Risk-Based Inspection vs Time-Based Inspection: Which Cuts Cost More?</a>
          <p className="text-sm text-gray-500 mt-2">By Marcus Whelan, CEng, IPlantE &middot; 2024-09-30</p>
          <p className="text-gray-700 mt-3">Risk-Based Inspection vs Time-Based: Which Cuts Cost More?</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/blog/building-an-asset-integrity-management-system-12-month-roadmap" className="text-xl font-semibold text-gray-900 hover:text-blue-600">Building an Asset Integrity Management System: A 12-Month Roadmap</a>
          <p className="text-sm text-gray-500 mt-2">By Marcus Whelan, CEng, IPlantE &middot; 2025-01-15</p>
          <p className="text-gray-700 mt-3">Building an Asset Integrity Management System: A 12-Month Roadmap</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/blog/fitness-for-service-api-579-when-to-use-which-level" className="text-xl font-semibold text-gray-900 hover:text-blue-600">Fitness-for-Service (API 579): When to Use Level 1, 2, or 3 Assessment</a>
          <p className="text-sm text-gray-500 mt-2">By Yuki Nakamura, PhD, P.Eng &middot; 2025-05-22</p>
          <p className="text-gray-700 mt-3">Fitness-for-Service (API 579): When to Use Level 1, 2, or 3</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/blog/measuring-asset-integrity-kpis-that-actually-matter" className="text-xl font-semibold text-gray-900 hover:text-blue-600">Measuring Asset Integrity: KPIs That Actually Matter</a>
          <p className="text-sm text-gray-500 mt-2">By Marcus Whelan, CEng, IPlantE &middot; 2025-10-04</p>
          <p className="text-gray-700 mt-3">Measuring Asset Integrity: KPIs That Actually Matter</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/blog/integrity-operating-windows-ow-best-practices-refineries" className="text-xl font-semibold text-gray-900 hover:text-blue-600">Integrity Operating Windows (IOWs): Best Practices for Refineries</a>
          <p className="text-sm text-gray-500 mt-2">By Yuki Nakamura, PhD, P.Eng &middot; 2026-02-11</p>
          <p className="text-gray-700 mt-3">Integrity Operating Windows (IOWs): Best Practices for Refineries</p>
        </li>
      </ul>
    </div>
  );
}
