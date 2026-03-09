export default function Design() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-red-800 mb-8">Pressure Vessel Design Considerations</h1>
      <article className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed mb-4">
          ASME Section VIII Division 1 provides rules-based design approach for vessels at or below specified size and pressure limits. Design calculations account for internal or external pressure, material properties, and stress concentrations. Rules approach provides baseline assurance of adequate safety factors for typical operating conditions. Division 2 provides alternative analysis-based approach enabling optimization of vessel designs for specific applications.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Material selection fundamentally influences vessel performance and degradation mechanisms. Carbon steel dominates due to cost and availability, but limited corrosion resistance in many service environments. Low-alloy steels provide improved strength at elevated temperatures. Stainless steels and exotic alloys offer superior corrosion resistance for aggressive service. <a href="https://atlantisndt.com/consulting" rel="noopener" className="text-red-600 hover:text-red-800 font-semibold">NDT consulting services</a> guide material selection to optimize lifetime value considering vessel cost, service environment, and required inspection capabilities.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Design features including vessel thickness, head configurations, and nozzle attachment methods influence local stress concentrations and failure mechanisms. Advanced design analysis using finite element methods enables optimization of vessel geometry for strength and manufacturability. NDT methodologies must account for design-specific features when developing inspection procedures.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Design pressure establishes the fundamental parameter governing all subsequent construction and inspection requirements. Careful selection of design pressure reflecting actual operating needs avoids unnecessary construction costs while ensuring adequate safety margins for transient operating conditions.
        </p>
      </article>
    </div>
  );
}
