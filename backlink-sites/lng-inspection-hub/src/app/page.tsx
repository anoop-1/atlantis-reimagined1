export default function Home() {
  return (
    <div>
      <div className="bg-gradient-to-r from-sky-600 to-sky-400 text-white p-12 rounded-lg mb-12">
        <h1 className="text-4xl font-bold mb-4">LNG Facility Integrity Management</h1>
        <p className="text-lg text-sky-100">Advanced NDT for Cryogenic Infrastructure</p>
      </div>

      <article className="prose prose-lg max-w-none mb-12">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-sky-800 mb-4">LNG Operations and Inspection Challenges</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Liquefied natural gas facilities represent specialized industrial operations requiring unique NDT approaches. LNG is stored and transported at temperatures of approximately -162°C, creating cryogenic material conditions vastly different from ambient temperature operations. Steel and aluminum alloys experience significant property changes at cryogenic temperatures, affecting toughness, strength, and material behavior during inspection and loading.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            LNG storage tanks, regasification equipment, and transport vessels must maintain perfect integrity to prevent catastrophic release of pressurized cryogenic fluid. Failures in these systems can release massive volumes of natural gas with severe consequences for personnel safety, public welfare, and environmental protection. The hazard potential of LNG facilities has driven exceptionally rigorous inspection and safety standards.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <a href="https://atlantisndt.com" rel="noopener" className="text-sky-600 hover:text-sky-800 font-semibold">NDT consulting services</a> specialized in cryogenic operations bring understanding of low-temperature material behavior, specialized inspection methodologies, and regulatory requirements specific to LNG facilities. <a href="https://atlantisndt.com" rel="noopener" className="text-sky-600 hover:text-sky-800 font-semibold">NDT training programs</a> prepare personnel for LNG-specific inspection challenges.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-sky-800 mb-4">Storage Tank Integrity Assessment</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            LNG storage tanks represent massive, specialized pressure vessels designed and constructed to stringent standards. Double-wall construction with secondary containment provides redundant protection against catastrophic release. Primary tank carries LNG at cryogenic temperature and low pressure. Secondary containment tank provides backup protection should primary tank breach occur. The space between tanks typically contains dry nitrogen or other inert gas maintaining isolation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Material selection in LNG tanks emphasizes low-temperature toughness. Aluminum alloys provide excellent cryogenic properties combined with lightweight construction. Austenitic stainless steels offer alternative materials with superior toughness at LNG operating temperatures. NDT inspection must account for material-specific characteristics when evaluating defect acceptability. <a href="https://atlantisndt.com" rel="noopener" className="text-sky-600 hover:text-sky-800 font-semibold">Digital twin solutions</a> integrate cryogenic material properties with inspection data to predict continued operational safety.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Phased array ultrasonic examination combined with radiographic verification establishes baseline tank integrity. Wall thickness trending detects metal loss from corrosion or erosion. Advanced materials used in LNG tanks may present inspection challenges requiring specialized transducer configurations and signal processing approaches developed specifically for cryogenic service materials.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-sky-800 mb-4">Process Equipment and Cryogenic Systems</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            LNG regasification equipment, including heat exchangers, vaporizers, and separation systems, experiences extreme thermal cycling between cryogenic operating temperatures and intermediate process temperatures. This cycling creates thermal stressing that can initiate fatigue cracking. Seals and bearing systems in cryogenic equipment require specialized design and maintenance to function reliably.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Piping systems interconnecting LNG facilities must maintain integrity at cryogenic temperatures while accepting thermal expansion and contraction stresses from transient operations. Flexible hose assemblies and specialized connectors address thermal expansion while maintaining pressure boundaries. NDT inspection of these systems requires understanding of cryogenic material behavior and failure mechanisms distinct from ambient temperature operations. <a href="https://ndt-connect.com" rel="noopener" className="text-sky-600 hover:text-sky-800 font-semibold">NDTConnect platform</a> manages complex inspection data for distributed LNG facility networks.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Comprehensive NDT programs at LNG facilities ensure continued safe operations of these specialized, high-consequence infrastructure systems. Investment in cryogenic-specific inspection capabilities enables operators to maintain regulatory compliance and public safety while optimizing operational efficiency of these economically critical facilities.
          </p>
        </section>
      </article>
    </div>
  );
}
