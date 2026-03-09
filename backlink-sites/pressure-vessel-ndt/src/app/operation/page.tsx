export default function Operation() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-red-800 mb-8">In-Service Operation and Inspection</h1>
      <article className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed mb-4">
          Pressure vessels in service experience multiple degradation mechanisms. Internal corrosion from tank contents, external corrosion from atmospheric exposure or soil contact, fatigue from pressure cycling, and creep at elevated temperatures all contribute to material loss and property degradation. Effective in-service inspection programs establish baseline conditions and detect degradation before failures occur.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Phased array ultrasonic examination establishes wall thickness baselines and identifies areas of metal loss requiring closer evaluation. Radiographic examination of critical welds confirms continued weld integrity. Wall thickness trending over multiple inspection campaigns establishes metal loss rates and enables prediction of remaining useful life. <a href="https://atlantisndt.com/digital-twins" rel="noopener" className="text-red-600 hover:text-red-800 font-semibold">Digital twin solutions</a> integrate inspection data with operating history and environmental factors to predict degradation progression.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Risk-based inspection approaches prioritize inspection efforts on highest-consequence vessels. Vessels with potential for large product release or environmental impact receive intensive inspection while lower-consequence equipment operates under relaxed inspection frequency. This optimization enables economically efficient inspection programs while maintaining safety standards. <a href="https://atlantisndt.com/ndt-connect" rel="noopener" className="text-red-600 hover:text-red-800 font-semibold">NDTConnect platform</a> systematizes inspection documentation and supports trending of vessel condition across facility networks.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Fitness-for-service analysis using API 579 methodology enables continued operation of vessels with detected defects where engineering analysis demonstrates adequate safety margins. This approach optimizes capital efficiency by deferring replacement of viable equipment while planning strategic replacement when degradation reaches limits of acceptable operation.
        </p>
      </article>
    </div>
  );
}
