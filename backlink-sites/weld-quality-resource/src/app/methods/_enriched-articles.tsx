import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Weld Quality Resource — In-Depth Articles',
  description: 'Long-form practical articles on weld inspection and quality for CWIs, welding engineers, fabrication QC managers.',
};

export default function ContainerIndex() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Weld Quality Resource — In-Depth Articles</h1>
      <p className="text-gray-600 mt-3">Practical long-form guides on weld inspection and quality, written for CWIs, welding engineers, fabrication QC managers.</p>
      <ul className="mt-8">
        <li className="border-b border-gray-200 py-6">
          <a href="/methods/aws-d1-1-weld-acceptance-cracks-vs-incomplete-fusion" className="text-xl font-semibold text-gray-900 hover:text-amber-600">AWS D1.1 Weld Acceptance: Cracks vs Incomplete Fusion vs Slag</a>
          <p className="text-sm text-gray-500 mt-2">By Wendell Park, AWS CWI &middot; 2024-10-08</p>
          <p className="text-gray-700 mt-3">AWS D1.1 Weld Acceptance: Cracks vs Incomplete Fusion vs Slag</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/methods/phased-array-vs-radiography-girth-welds-which-finds-more" className="text-xl font-semibold text-gray-900 hover:text-amber-600">Phased Array vs Radiography on Girth Welds: Which Finds More Defects?</a>
          <p className="text-sm text-gray-500 mt-2">By Sara Klein, IWE &middot; 2025-01-19</p>
          <p className="text-gray-700 mt-3">Phased Array vs Radiography on Girth Welds: Which Finds More Defects?</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/methods/visual-weld-inspection-vt-pitfalls-cwi-experience" className="text-xl font-semibold text-gray-900 hover:text-amber-600">Visual Weld Inspection (VT) Pitfalls: A CWI Field Perspective</a>
          <p className="text-sm text-gray-500 mt-2">By Wendell Park, AWS CWI &middot; 2025-06-17</p>
          <p className="text-gray-700 mt-3">Visual Weld Inspection (VT) Pitfalls: A CWI Field Perspective</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/methods/welder-qualification-vs-procedure-qualification-records" className="text-xl font-semibold text-gray-900 hover:text-amber-600">Welder Qualification vs Procedure Qualification Records: Who Owns What?</a>
          <p className="text-sm text-gray-500 mt-2">By Sara Klein, IWE &middot; 2025-11-08</p>
          <p className="text-gray-700 mt-3">Welder Qualification vs Procedure Qualification Records: Who Owns What?</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/methods/orbital-welding-inspection-semiconductor-pharma-piping" className="text-xl font-semibold text-gray-900 hover:text-amber-600">Orbital Welding Inspection for Semiconductor & Pharma Piping</a>
          <p className="text-sm text-gray-500 mt-2">By Wendell Park, AWS CWI &middot; 2026-04-29</p>
          <p className="text-gray-700 mt-3">Orbital Welding Inspection for Semiconductor & Pharma Piping</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/methods/weld-mapping-as-a-quality-discipline" className="text-xl font-semibold text-gray-900 hover:text-amber-600">Weld Mapping as a Quality Discipline, Not a Paperwork Burden</a>
          <p className="text-sm text-gray-500 mt-2">By Wendell Park, AWS CWI &middot; 2025-05-29</p>
          <p className="text-gray-700 mt-3">Weld Mapping as a Quality Discipline, Not a Paperwork Burden</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/methods/weld-repair-vs-replace-decisions-on-pressure-piping" className="text-xl font-semibold text-gray-900 hover:text-amber-600">Weld Repair vs Replace Decisions on Pressure Piping</a>
          <p className="text-sm text-gray-500 mt-2">By Sara Klein, IWE &middot; 2025-09-11</p>
          <p className="text-gray-700 mt-3">Weld Repair vs Replace Decisions on Pressure Piping</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/methods/duplex-stainless-weld-inspection-watchouts" className="text-xl font-semibold text-gray-900 hover:text-amber-600">Duplex Stainless Steel Weld Inspection: Watchouts You Cannot Ignore</a>
          <p className="text-sm text-gray-500 mt-2">By Wendell Park, AWS CWI &middot; 2025-12-16</p>
          <p className="text-gray-700 mt-3">Duplex Stainless Steel Weld Inspection: Watchouts You Cannot Ignore</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/methods/weld-distortion-vs-residual-stress-different-problems" className="text-xl font-semibold text-gray-900 hover:text-amber-600">Weld Distortion vs Residual Stress: Two Different Problems With Different Cures</a>
          <p className="text-sm text-gray-500 mt-2">By Sara Klein, IWE &middot; 2026-03-09</p>
          <p className="text-gray-700 mt-3">Weld Distortion vs Residual Stress: Two Different Problems With Different Cures</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/methods/weld-inspection-for-cryogenic-services-9-percent-nickel" className="text-xl font-semibold text-gray-900 hover:text-amber-600">Weld Inspection for Cryogenic Services: 9% Nickel and Beyond</a>
          <p className="text-sm text-gray-500 mt-2">By Wendell Park, AWS CWI &middot; 2026-05-05</p>
          <p className="text-gray-700 mt-3">Weld Inspection for Cryogenic Services: 9% Nickel and Beyond</p>
        </li>
      </ul>
    </div>
  );
}
