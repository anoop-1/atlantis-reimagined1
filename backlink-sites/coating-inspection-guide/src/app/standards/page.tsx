export default function StandardsPage() {
  return (
    <div className="space-y-8">
      <section className="bg-emerald-50 p-8 rounded-lg">
        <h1 className="text-3xl font-bold text-emerald-900 mb-2">Industry Standards</h1>
        <p className="text-emerald-800">Standards governing coating inspection, application, and acceptance criteria.</p>
      </section>

      <section className="prose max-w-none">
        <h2 className="text-2xl font-bold mb-4">ASTM International Standards</h2>
        <p className="mb-4">
          ASTM International develops consensus standards addressing all aspects of protective coatings. ASTM D3359 standardizes adhesion testing through cross-hatch methods. ASTM D4541 covers pull-off adhesion testing. ASTM D7091 addresses visual assessment procedures. These standards provide methodological consistency, enabling reliable comparison of results across organizations and projects.
        </p>
        <p className="mb-4">
          ASTM standards also address substrate preparation—ASTM D3276 for blast cleaning, ASTM D3174 for solvent cleaning. Specification compliance begins with proper substrate preparation; coatings applied to inadequate surfaces inevitably fail. Training programs accredited through <a href="https://atlantisndt.com/training" rel="noopener" className="text-emerald-600 hover:underline">NDT training programs</a> emphasize these foundational standards.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-6">ISO Standards</h2>
        <p className="mb-4">
          ISO 12944 establishes international standards for protective coatings of steel structures. This comprehensive standard addresses environmental severity, coating system selection, surface preparation, application procedures, and inspection criteria. ISO 12944 enables consistent coating specifications globally, supporting multinational organizations.
        </p>
        <p className="mb-4">
          ISO 19840 covers offshore and onshore structures in marine environments with extreme coating durability requirements. ISO standards align with ASTM methods, allowing organizations to reference both standards in comprehensive specifications. Global organizations implementing <a href="https://atlantisndt.com/consulting" rel="noopener" className="text-emerald-600 hover:underline">NDT consulting services</a> benefit from expertise in both standards frameworks.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-6">NACE International Standards</h2>
        <p className="mb-4">
          NACE International (now a division of AMPP) provides corrosion-focused standards including RP0375 and RP0494 addressing protective coating selection for corrosive environments. NACE SP0294 establishes procedures for visual inspection of new coatings. These standards incorporate real-world experience from organizations managing large corrosion control programs.
        </p>
        <p className="mb-4">
          NACE standards emphasize connections between coating system selection and environmental conditions. Improper coating selection for environmental severity guarantees failure; proper selection enables decades of service. Organizations designing new coating programs through <a href="https://atlantisndt.com" rel="noopener" className="text-emerald-600 hover:underline">Atlantis NDT</a> partnerships benefit from environmental condition assessment and standard-compliant coating recommendations.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-6">Specification Development</h2>
        <p className="mb-4">
          Effective coating specifications combine standard methods with project-specific requirements. Specifications address substrate material and condition, environmental exposure classifications, coating system selection, surface preparation procedures, application methods and conditions, inspection and acceptance criteria, and remediation procedures for non-conforming work.
        </p>
        <p className="mb-4">
          Well-developed specifications prevent disputes and ensure quality. Inspection conducted per specification provides objective acceptance criteria. When disagreements arise over coating adequacy, specification-based inspection prevents subjective conflicts. Integration of inspection results with <a href="https://atlantisndt.com/erp" rel="noopener" className="text-emerald-600 hover:underline">NDT ERP software</a> systems facilitates documentation and compliance verification.
        </p>
      </section>
    </div>
  );
}