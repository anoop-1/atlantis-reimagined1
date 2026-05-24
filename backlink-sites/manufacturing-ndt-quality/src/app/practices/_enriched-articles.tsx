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
<li className="border-b border-gray-200 py-6">
          <a href="/practices/forging-ndt-acceptance-criteria-by-grade" className="text-xl font-semibold text-gray-900 hover:text-zinc-600">Forging NDT Acceptance Criteria by Grade and Service</a>
          <p className="text-sm text-gray-500 mt-2">By Florian Mautner, IWE &middot; 2025-05-28</p>
          <p className="text-gray-700 mt-3">Forging NDT Acceptance Criteria by Grade and Service</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/practices/phased-array-ut-on-thick-wall-monobloc-forgings" className="text-xl font-semibold text-gray-900 hover:text-zinc-600">Phased Array UT on Thick-Wall Monobloc Forgings</a>
          <p className="text-sm text-gray-500 mt-2">By Hannelore Veit, AS9100 LA &middot; 2025-09-21</p>
          <p className="text-gray-700 mt-3">Phased Array UT on Thick-Wall Monobloc Forgings</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/practices/plate-mill-ndt-screening-during-rolling" className="text-xl font-semibold text-gray-900 hover:text-zinc-600">Plate Mill NDT Screening During Hot Rolling</a>
          <p className="text-sm text-gray-500 mt-2">By Florian Mautner, IWE &middot; 2025-12-06</p>
          <p className="text-gray-700 mt-3">Plate Mill NDT Screening During Hot Rolling</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/practices/first-article-inspection-fai-with-ndt-integration" className="text-xl font-semibold text-gray-900 hover:text-zinc-600">First Article Inspection (FAI) With NDT Integration</a>
          <p className="text-sm text-gray-500 mt-2">By Hannelore Veit, AS9100 LA &middot; 2026-03-04</p>
          <p className="text-gray-700 mt-3">First Article Inspection (FAI) With NDT Integration</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/practices/magnetic-particle-on-castings-fluorescent-vs-dry" className="text-xl font-semibold text-gray-900 hover:text-zinc-600">Magnetic Particle on Castings: Fluorescent Wet vs Dry Method Decision</a>
          <p className="text-sm text-gray-500 mt-2">By Florian Mautner, IWE &middot; 2026-05-12</p>
          <p className="text-gray-700 mt-3">Magnetic Particle on Castings: Fluorescent Wet vs Dry Method Decision</p>
        </li>
      </ul>
    </div>
  );
}
