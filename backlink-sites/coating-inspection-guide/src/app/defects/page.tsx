export default function DefectsPage() {
  return (
    <div className="space-y-8">
      <section className="bg-emerald-50 p-8 rounded-lg">
        <h1 className="text-3xl font-bold text-emerald-900 mb-2">Defect Detection Guide</h1>
        <p className="text-emerald-800">Identifying, categorizing, and addressing coating system failures.</p>
      </section>

      <section className="prose max-w-none">
        <h2 className="text-2xl font-bold mb-4">Blistering and Adhesion Failure</h2>
        <p className="mb-4">
          Blistering—formation of raised areas where coating separates from substrate or lower coating layers—indicates moisture intrusion or incompatible material combinations. Moisture beneath coatings expands as temperature increases, creating pressure that lifts intact coating film. Inadequate substrate cleaning or contamination beneath coatings accelerates blistering.
        </p>
        <p className="mb-4">
          Blistering patterns provide diagnostic information. Scattered small blisters suggest moisture from substrate porosity or capillary rise from soil. Large continuous areas indicate moisture intrusion from edges or surfaces. Early detection through infrared thermography enables preventive action before widespread failure. Organizations implementing moisture monitoring programs through <a href="https://atlantisndt.com/digital-twins" rel="noopener" className="text-emerald-600 hover:underline">digital twin solutions</a> detect problems early.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Chalking and Weathering</h2>
        <p className="mb-4">
          Chalking—surface degradation producing powder-like residue when rubbed—results from UV degradation of resin binders in coating films. In chalking, pigments remain intact but binder decomposes, weakening surface cohesion. Topcoat quality determines chalking rate; premium formulations resist degradation longer than economy products. Environmental severity accelerates chalking; coatings in high-UV, high-temperature zones degrade faster than protected areas.
        </p>
        <p className="mb-4">
          Chalking indicates coating age and UV exposure. Light chalking (visible residue on hand when rubbed) requires monitoring but not immediate action. Heavy chalking suggests imminent topcoat failure and need for recoating. Organizations managing large coating assets benefit from systematic chalking assessment and predictive maintenance scheduling informed by <a href="https://atlantisndt.com/training" rel="noopener" className="text-emerald-600 hover:underline">professional training</a> in coating degradation patterns.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Cracking and Stress-Related Failures</h2>
        <p className="mb-4">
          Cracks in coatings indicate stress concentration exceeding film strength. Possible sources include thermal cycling causing differential expansion between coating and substrate, substrate movement from structural loading, or internal coating stress from incompatible material combinations. Crack patterns provide diagnostic clues: parallel, uniform cracks suggest thermal stress; irregular, branching patterns suggest adhesion issues or substrate movement.
        </p>
        <p className="mb-4">
          Crack identification importance increases with safety-critical applications. In petrochemical and pressure equipment contexts, cracks may indicate substrate damage requiring urgent attention. Visual inspection must be supplemented with physical inspection methods to determine whether cracks extend into substrate. Expert assessment through <a href="https://atlantisndt.com/consulting" rel="noopener" className="text-emerald-600 hover:underline">NDT consulting services</a> distinguishes cosmetic coating cracks from substrate-related structural concerns.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Peeling and Delamination</h2>
        <p className="mb-4">
          Peeling—coating separation from substrate or lower coat layers—indicates adhesion failure. Causes include inadequate substrate preparation, incompatible coating combinations, or adhesion loss from environmental degradation. Peeling often follows other defects: moisture beneath blisters initiates adhesion loss, leading to progressive peeling. Substrate corrosion generates scale that undermines coating adhesion.
        </p>
        <p className="mb-4">
          Peeling necessitates corrective action because exposed substrate immediately begins corroding. Scale formation accelerates, further undermining remaining coating. Remediation requires removing failed coating, addressing substrate condition, and reapplication per specification. Organizations implementing <a href="https://ndt-connect.com" rel="noopener" className="text-emerald-600 hover:underline">NDTConnect platform</a> integration track peeling progression and prioritize maintenance activities.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Corrosion Under Coating</h2>
        <p className="mb-4">
          Corrosion under coating (CUC) occurs when moisture and oxygen reach substrate despite coating protection. The process begins with moisture intrusion through coating pores or failed areas. Once moisture reaches substrate, corrosion initiates in oxygen-rich zones. Expanding corrosion product scale lifts coating, creating visible blisters or raised areas.
        </p>
        <p className="mb-4">
          CUC detection requires inference from visible symptoms: scattered blistering, localized swelling, or paint lifting indicates likely subsurface corrosion. Exact extent remains hidden until coating is removed. Advanced inspection through <a href="https://atlantisndt.com/erp" rel="noopener" className="text-emerald-600 hover:underline">NDT ERP software</a> systems can track historical CUC patterns, enabling predictive maintenance before visible failure occurs.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Application Defects</h2>
        <p className="mb-4">
          Application-phase defects compromise coating quality from inception. Inadequate film thickness fails to provide specified protection. Excessive thickness creates internal stress and cracking. Improper spray techniques create orange-peel texture, reducing protective properties. Cold application at temperatures below manufacturer specifications results in poor flow and inadequate film coalescence.
        </p>
        <p className="mb-4">
          Prevention proves far more cost-effective than remediation. Systematic inspection during application catches problems in real-time when correction costs little. DFT measurement, visual examination, and adhesion testing verify conformance to specification. Organizations implementing rigorous application inspection protocols through <a href="https://atlantisndt.com/training" rel="noopener" className="text-emerald-600 hover:underline">NDT training programs</a> prevent many failures before they initiate.
        </p>
      </section>
    </div>
  );
}