export const metadata = { title: "Above-Ground Storage Tank Inspection", alternates: { canonical: "https://tank-inspection-resource.vercel.app/above-ground" } };

export default function AboveGround() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-amber-800 mb-8">Above-Ground Storage Tank Inspection</h1>
      <article className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed mb-4">
          Above-ground storage tanks (AST) experience external corrosion from atmospheric exposure, internal corrosion from stored products, and stress from product loading variations. API 653 establishes inspection intervals and methodologies enabling detection of degradation before failures occur. Ultrasonic wall thickness scanning at systematic locations establishes baseline thickness and enables trending of corrosion rates.
        </p>
        <p>API certification and examination preparation are separate from the <a href="https://atlantisndt.com/training">NDT training scope</a> linked here. API training is not offered through this link. Confirm applicable certification requirements with the scheme owner and responsible employer.</p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Remaining useful life calculations based on measured thickness and established corrosion rates inform replacement planning. <a href="https://atlantisndt.com/consulting" rel="noopener" className="text-amber-600 hover:text-amber-800 font-semibold">NDT consulting services</a> develop defensible arguments for continued operation of aging ASTs when technical analysis demonstrates adequate safety margins.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Comprehensive AST inspection programs prevent failures that might otherwise result in product loss, environmental contamination, and regulatory enforcement actions costly to resolve.
        </p>
      </article>
    </div>
  );
}
