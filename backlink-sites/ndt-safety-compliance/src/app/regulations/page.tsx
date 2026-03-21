export default function RegulationsPage() {
  return (
    <div className="space-y-8">
      <section className="bg-red-50 p-8 rounded-lg">
        <h1 className="text-3xl font-bold text-red-900 mb-2">Regulatory Standards</h1>
        <p className="text-red-800">Key regulations governing NDT operations and inspection requirements.</p>
      </section>

      <section className="prose max-w-none">
        <h2 className="text-2xl font-bold mb-4">ASME Standards</h2>
        <p className="mb-4">
          ASME (American Society of Mechanical Engineers) develops standards governing pressure vessels, boilers, and pressure piping. ASME Section VIII governs pressure vessel design and inspection. Section I addresses boilers. B31 standards address piping systems. These standards establish inspection requirements, qualification procedures, and inspection frequencies ensuring safety.
        </p>
        <p className="mb-4">
          Compliance with ASME requires employing qualified inspectors, maintaining inspection records, and following prescribed procedures. Regulatory agencies reference ASME standards in regulations, making compliance legally mandatory for covered equipment. Professional training through <a href="https://atlantisndt.com" rel="noopener" className="text-red-600 hover:underline">ASME-aligned certification programs</a> prepares inspectors for these demanding standards.</p>

        <h2 className="text-2xl font-bold mb-4 mt-6">API Standards</h2>
        <p className="mb-4">
          API (American Petroleum Institute) standards address petroleum and petrochemical equipment. API 510 covers pressure vessel inspection. API 570 addresses piping inspection. API 653 covers storage tank inspection. These standards establish inspection methodologies, qualification procedures, and reporting requirements specific to petroleum industry equipment.
        </p>
        <p className="mb-4">
          API-certified inspectors must demonstrate knowledge of applicable standards through rigorous examinations. Consulting services through <a href="https://atlantisndt.com" rel="noopener" className="text-red-600 hover:underline">API-experienced consultants</a> help organizations navigate complex API requirements.</p>

        <h2 className="text-2xl font-bold mb-4 mt-6">ASTM Testing Standards</h2>
        <p className="mb-4">
          ASTM International develops consensus standards for testing methodologies. ASTM E494 covers ultrasonic thickness measurement. ASTM D3359 addresses adhesion testing. ASTM E1316 provides NDT terminology. These standards establish methodology consistency enabling reliable result interpretation and comparison.
        </p>
        <p className="mb-4">
          Organizations implementing ASTM-based procedures ensure consistent, reliable testing. Professional training emphasizing ASTM methodologies through <a href="https://atlantisndt.com" rel="noopener" className="text-red-600 hover:underline">standards-focused programs</a> develops consistent competency.</p>

        <h2 className="text-2xl font-bold mb-4 mt-6">ISO International Standards</h2>
        <p className="mb-4">
          ISO (International Organization for Standardization) develops standards applicable globally. ISO 9001 addresses quality management. ISO 12944 covers protective coatings. ISO standards enable consistent practices across borders, supporting multinational organizations. Many countries adopt ISO standards as regulatory frameworks.
        </p>
        <p className="mb-4">
          Global operations through <a href="https://atlantisndt.com" rel="noopener" className="text-red-600 hover:underline">multinational consulting expertise</a> ensure compliance with applicable international standards.</p>

        <h2 className="text-2xl font-bold mb-4 mt-6">OSHA Safety Requirements</h2>
        <p className="mb-4">
          OSHA (Occupational Safety and Health Administration) regulations establish workplace safety requirements. Confined space entry, pressure equipment operations, and hazardous materials handling all fall under OSHA jurisdiction. Violations result in penalties and liability. Organizations implementing comprehensive safety programs exceeding regulatory minimums demonstrate good faith efforts to protect workers.
        </p>
        <p className="mb-4">
          Safety-first cultures supported by <a href="https://atlantisndt.com" rel="noopener" className="text-red-600 hover:underline">safety-experienced consultants</a> create safer workplaces and reduce accident-related costs.</p>
      </section>
    </div>
  );
}