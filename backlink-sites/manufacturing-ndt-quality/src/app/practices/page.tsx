import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manufacturing NDT Quality — In-Depth Articles',
  description: 'Long-form practical articles on manufacturing & supplier-quality NDT for manufacturing QA, OEM quality engineers, supplier auditors.',
};

export default function ContainerIndex() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Manufacturing NDT Quality — In-Depth Articles</h1>
      <p className="text-gray-600 mt-3">Practical long-form guides on manufacturing & supplier-quality NDT, written for manufacturing QA, OEM quality engineers, supplier auditors.</p>
      <ul className="mt-8">
        <li className="border-b border-gray-200 py-6">
          <a href="/practices/inline-ut-on-tube-mills-defect-detection" className="text-xl font-semibold text-gray-900 hover:text-zinc-600">Inline UT on Tube Mills: What Production Defect Detection Actually Catches</a>
          <p className="text-sm text-gray-500 mt-2">By Florian Mautner, IWE &middot; 2024-09-23</p>
          <p className="text-gray-700 mt-3">Inline UT on Tube Mills: What Production Defect Detection Actually Catches</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/practices/casting-radiography-acceptance-by-grade" className="text-xl font-semibold text-gray-900 hover:text-zinc-600">Casting Radiography Acceptance by Grade: ASTM E446 vs E186 vs E280</a>
          <p className="text-sm text-gray-500 mt-2">By Florian Mautner, IWE &middot; 2025-02-15</p>
          <p className="text-gray-700 mt-3">Casting Radiography Acceptance by Grade: ASTM E446 vs E186 vs E280</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/practices/supplier-quality-audit-ndt-shop" className="text-xl font-semibold text-gray-900 hover:text-zinc-600">Supplier Quality Audit of an NDT Shop: A 50-Item Checklist</a>
          <p className="text-sm text-gray-500 mt-2">By Hannelore Veit, AS9100 LA &middot; 2025-07-26</p>
          <p className="text-gray-700 mt-3">Supplier Quality Audit of an NDT Shop: A 50-Item Checklist</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/practices/additive-manufactured-parts-ndt-cap-cct-vs-ut" className="text-xl font-semibold text-gray-900 hover:text-zinc-600">Additive Manufactured Parts NDT: CT vs UT vs PAUT for AM Inspection</a>
          <p className="text-sm text-gray-500 mt-2">By Florian Mautner, IWE &middot; 2025-12-12</p>
          <p className="text-gray-700 mt-3">Additive Manufactured Parts NDT: CT vs UT vs PAUT for AM Inspection</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/practices/in-process-quality-control-vs-final-ndt-trade-offs" className="text-xl font-semibold text-gray-900 hover:text-zinc-600">In-Process Quality Control vs Final NDT: Where to Spend the Budget</a>
          <p className="text-sm text-gray-500 mt-2">By Hannelore Veit, AS9100 LA &middot; 2026-04-23</p>
          <p className="text-gray-700 mt-3">In-Process Quality Control vs Final NDT: Where to Spend the Budget</p>
        </li>
      </ul>
    </div>
  );
}
