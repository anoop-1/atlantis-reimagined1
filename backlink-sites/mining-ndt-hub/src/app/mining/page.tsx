import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mining NDT Hub — In-Depth Articles',
  description: 'Long-form practical articles on mining equipment NDT for mining mechanical engineers, haul-truck and mill reliability leads.',
};

export default function ContainerIndex() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Mining NDT Hub — In-Depth Articles</h1>
      <p className="text-gray-600 mt-3">Practical long-form guides on mining equipment NDT, written for mining mechanical engineers, haul-truck and mill reliability leads.</p>
      <ul className="mt-8">
        <li className="border-b border-gray-200 py-6">
          <a href="/mining/haul-truck-frame-crack-inspection-program" className="text-xl font-semibold text-gray-900 hover:text-stone-600">Haul Truck Frame Crack Inspection Program: MT + UT Workflow</a>
          <p className="text-sm text-gray-500 mt-2">By Brendan O\'Leary, ICorr &middot; 2024-09-26</p>
          <p className="text-gray-700 mt-3">Haul Truck Frame Crack Inspection Program: MT + UT Workflow</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/mining/mill-shell-girth-weld-inspection-sag-ball" className="text-xl font-semibold text-gray-900 hover:text-stone-600">Mill Shell Girth Weld Inspection on SAG and Ball Mills</a>
          <p className="text-sm text-gray-500 mt-2">By Brendan O\'Leary, ICorr &middot; 2025-02-28</p>
          <p className="text-gray-700 mt-3">Mill Shell Girth Weld Inspection on SAG and Ball Mills</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/mining/conveyor-pulley-inspection-mt-ut-vt" className="text-xl font-semibold text-gray-900 hover:text-stone-600">Conveyor Pulley Inspection: MT, UT, and VT in Sequence</a>
          <p className="text-sm text-gray-500 mt-2">By Nadya Sharma, Mining Reliability Eng &middot; 2025-07-31</p>
          <p className="text-gray-700 mt-3">Conveyor Pulley Inspection: MT, UT, and VT in Sequence</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/mining/tailings-dam-instrumentation-and-ndt-overlap" className="text-xl font-semibold text-gray-900 hover:text-stone-600">Tailings Dam Instrumentation and Where NDT Fits In</a>
          <p className="text-sm text-gray-500 mt-2">By Brendan O\'Leary, ICorr &middot; 2025-12-05</p>
          <p className="text-gray-700 mt-3">Tailings Dam Instrumentation and Where NDT Fits In</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/mining/underground-mining-shaft-rope-inspection" className="text-xl font-semibold text-gray-900 hover:text-stone-600">Underground Mining Shaft Rope Inspection: MFL and Beyond</a>
          <p className="text-sm text-gray-500 mt-2">By Nadya Sharma, Mining Reliability Eng &middot; 2026-04-20</p>
          <p className="text-gray-700 mt-3">Underground Mining Shaft Rope Inspection: MFL and Beyond</p>
        </li>
      </ul>
    </div>
  );
}
