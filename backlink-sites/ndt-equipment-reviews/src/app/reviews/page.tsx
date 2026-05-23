import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NDT Equipment Reviews — In-Depth Articles',
  description: 'Long-form practical articles on NDT equipment selection and reviews for inspection contractors, NDT equipment buyers, QA leads.',
};

export default function ContainerIndex() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">NDT Equipment Reviews — In-Depth Articles</h1>
      <p className="text-gray-600 mt-3">Practical long-form guides on NDT equipment selection and reviews, written for inspection contractors, NDT equipment buyers, QA leads.</p>
      <ul className="mt-8">
        <li className="border-b border-gray-200 py-6">
          <a href="/reviews/epoch-6lt-vs-epoch-650-real-world-comparison" className="text-xl font-semibold text-gray-900 hover:text-emerald-600">Epoch 6LT vs Epoch 650: A Real-World Comparison for Field UT</a>
          <p className="text-sm text-gray-500 mt-2">By Lukas Holt, NDT Equipment Reviewer &middot; 2024-10-26</p>
          <p className="text-gray-700 mt-3">Epoch 6LT vs Epoch 650: A Real-World Comparison for Field UT</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/reviews/omniscan-x3-vs-x3-64-which-channel-count-fits" className="text-xl font-semibold text-gray-900 hover:text-emerald-600">OmniScan X3 vs X3 64: Which Channel Count Actually Fits Your Work?</a>
          <p className="text-sm text-gray-500 mt-2">By Lukas Holt, NDT Equipment Reviewer &middot; 2025-03-08</p>
          <p className="text-gray-700 mt-3">OmniScan X3 vs X3 64: Which Channel Count Actually Fits Your Work?</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/reviews/crawler-vs-handheld-aut-for-pipeline-girths" className="text-xl font-semibold text-gray-900 hover:text-emerald-600">Crawler vs Handheld AUT for Pipeline Girth Welds</a>
          <p className="text-sm text-gray-500 mt-2">By Yara Ahmadi, Pipeline AUT &middot; 2025-08-12</p>
          <p className="text-gray-700 mt-3">Crawler vs Handheld AUT for Pipeline Girth Welds</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/reviews/calibration-blocks-buying-guide-2026" className="text-xl font-semibold text-gray-900 hover:text-emerald-600">Calibration Blocks Buying Guide (2026)</a>
          <p className="text-sm text-gray-500 mt-2">By Lukas Holt, NDT Equipment Reviewer &middot; 2025-11-29</p>
          <p className="text-gray-700 mt-3">Calibration Blocks Buying Guide (2026): Don\'t Buy the Cheapest</p>
        </li>
<li className="border-b border-gray-200 py-6">
          <a href="/reviews/digital-rt-detectors-flat-panel-vs-line-scan" className="text-xl font-semibold text-gray-900 hover:text-emerald-600">Digital RT Detectors: Flat Panel vs Line Scan in 2026</a>
          <p className="text-sm text-gray-500 mt-2">By Yara Ahmadi, Pipeline AUT &middot; 2026-04-13</p>
          <p className="text-gray-700 mt-3">Digital RT Detectors: Flat Panel vs Line Scan in 2026</p>
        </li>
      </ul>
    </div>
  );
}
