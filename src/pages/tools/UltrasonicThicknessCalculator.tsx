import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Copy,
  Check,
  Gauge,
  AlertCircle,
  Info
} from "lucide-react";

/* ─── Material Sound Velocity Database ─── */
const MATERIAL_DATA: Record<string, { velocity: number; density: number }> = {
  "carbon-steel": { velocity: 5920, density: 7850 },
  "stainless-steel-304": { velocity: 5790, density: 8000 },
  "stainless-steel-316": { velocity: 5790, density: 8000 },
  aluminum: { velocity: 6320, density: 2700 },
  copper: { velocity: 4760, density: 8960 },
  titanium: { velocity: 6100, density: 4500 },
  nickel: { velocity: 5890, density: 8908 },
  brass: { velocity: 4700, density: 8500 },
  cast_iron: { velocity: 3810, density: 7200 },
  magnesium: { velocity: 6040, density: 1738 },
  inconel: { velocity: 5760, density: 8470 },
  monel: { velocity: 5350, density: 8840 },
  zinc: { velocity: 3810, density: 7140 },
  lead: { velocity: 2160, density: 11340 },
  platinum: { velocity: 3960, density: 21450 },
  "duplex-steel": { velocity: 5930, density: 7800 },
  "super-duplex": { velocity: 5950, density: 7800 },
  hastelloy: { velocity: 5780, density: 9240 },
  "low-alloy-steel": { velocity: 5960, density: 7850 },
  "tool-steel": { velocity: 5940, density: 7750 },
  "grey-iron": { velocity: 3660, density: 7100 },
  "ductile-iron": { velocity: 4740, density: 7140 }
};

const MATERIAL_OPTIONS = Object.keys(MATERIAL_DATA).map((key) => ({
  value: key,
  label: key.replace(/[-_]/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
}));

/* ─── Types ─── */
interface CalculatorInputs {
  materialType: string;
  soundVelocity: number;
  transitTime: number;
}

interface CalculationResult {
  thicknessMillimeters: number;
  thicknessInches: number;
  acousticImpedance: number;
  reflectionCoefficient: number;
}

/* ─── Structured Data ─── */
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Ultrasonic Thickness Calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web Browser",
  url: "https://atlantisndt.com/tools/ultrasonic-thickness-calculator",
  description:
    "Calculate material thickness using ultrasonic testing (UT) measurements. Enter sound velocity and transit time to get precise thickness in mm and inches.",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock"
  },
  publisher: {
    "@type": "Organization",
    name: "Atlantis NDT",
    url: "https://atlantisndt.com"
  }
};

export default function UltrasonicThicknessCalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    materialType: "carbon-steel",
    soundVelocity: MATERIAL_DATA["carbon-steel"].velocity,
    transitTime: 100
  });
  const [copied, setCopied] = useState(false);

  /* ─── Update handlers ─── */
  const handleMaterialChange = useCallback((materialType: string) => {
    const material = MATERIAL_DATA[materialType];
    if (material) {
      setInputs((prev) => ({
        ...prev,
        materialType,
        soundVelocity: material.velocity
      }));
    }
  }, []);

  const setField = useCallback((field: keyof CalculatorInputs, value: number | string) => {
    setInputs((prev) => ({
      ...prev,
      [field]: typeof value === "string" ? parseFloat(value) || 0 : value
    }));
  }, []);

  /* ─── Core Calculation ─── */
  const result = useMemo((): CalculationResult => {
    const thicknessMillimeters = (inputs.soundVelocity * inputs.transitTime) / 2 / 1000;
    const thicknessInches = thicknessMillimeters / 25.4;

    const material = MATERIAL_DATA[inputs.materialType];
    const density = material?.density || 7850;
    const acousticImpedance = density * inputs.soundVelocity;

    // Simplified reflection coefficient (at steel/air interface ~0.9994)
    const reflectionCoefficient = Math.pow(
      (density * inputs.soundVelocity - 415) / (density * inputs.soundVelocity + 415),
      2
    );

    return {
      thicknessMillimeters,
      thicknessInches,
      acousticImpedance,
      reflectionCoefficient
    };
  }, [inputs]);

  /* ─── Severity Assessment ─── */
  const getSeverityClass = (thickness: number) => {
    if (thickness < 1) return "critical";
    if (thickness < 3) return "high";
    if (thickness < 6) return "moderate";
    return "normal";
  };

  const severity = getSeverityClass(result.thicknessMillimeters);
  const severityMap = {
    normal: { label: "Normal", color: "bg-green-50 border-green-300", textColor: "text-green-700" },
    moderate: { label: "Moderate Wear", color: "bg-yellow-50 border-yellow-300", textColor: "text-yellow-700" },
    high: { label: "High Wear", color: "bg-orange-50 border-orange-300", textColor: "text-orange-700" },
    critical: { label: "Critical Thickness", color: "bg-red-50 border-red-300", textColor: "text-red-700" }
  };

  const copyResult = () => {
    const text = `Ultrasonic Thickness Measurement:
Material: ${MATERIAL_OPTIONS.find(m => m.value === inputs.materialType)?.label}
Sound Velocity: ${inputs.soundVelocity} m/s
Transit Time: ${inputs.transitTime} μs
Thickness: ${result.thicknessMillimeters.toFixed(2)} mm (${result.thicknessInches.toFixed(3)} in)`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <SEOHead
        title="Ultrasonic Thickness Calculator - Precision UT Measurements"
        description="Calculate material thickness from ultrasonic sound velocity and transit time. Includes reference table for 20+ materials and detailed UT methodology."
        structuredData={structuredData}
      />
      <Navigation />
      <Breadcrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "Tools", path: "/tools" },
          { label: "UT Thickness Calculator" }
        ]}
      />

      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <Gauge className="w-8 h-8 text-blue-600" />
              <h1 className="text-4xl font-bold text-gray-900">
                Ultrasonic Thickness Calculator
              </h1>
            </div>
            <p className="text-xl text-gray-600 mt-3">
              Precise material thickness measurement using ultrasonic testing (UT) principles
            </p>
          </motion.div>

          {/* Calculator Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Inputs */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Measurement Inputs
                </h2>

                {/* Material Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Material Type
                  </label>
                  <select
                    value={inputs.materialType}
                    onChange={(e) => handleMaterialChange(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {MATERIAL_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <p className="text-xs text-gray-500 mt-1">
                    Auto-populates velocity based on material
                  </p>
                </div>

                {/* Sound Velocity */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Sound Velocity (m/s)
                  </label>
                  <input
                    type="number"
                    value={inputs.soundVelocity}
                    onChange={(e) => setField("soundVelocity", e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    step="10"
                    min="0"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Editable - adjust for temperature compensation or specific alloys
                  </p>
                </div>

                {/* Transit Time */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Transit Time (microseconds)
                  </label>
                  <input
                    type="number"
                    value={inputs.transitTime}
                    onChange={(e) => setField("transitTime", e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    step="1"
                    min="0"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Time for sound pulse to travel through material (round trip)
                  </p>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Calculated Results
                </h2>

                {/* Main Result */}
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className={`${severityMap[severity].color} border-2 rounded-xl p-6`}
                >
                  <div className="text-center">
                    <p className={`text-sm font-semibold ${severityMap[severity].textColor} uppercase tracking-wide mb-2`}>
                      {severityMap[severity].label}
                    </p>
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {result.thicknessMillimeters.toFixed(2)} mm
                    </div>
                    <div className="text-xl text-gray-600">
                      {result.thicknessInches.toFixed(3)} inches
                    </div>
                  </div>
                </motion.div>

                {/* Secondary Results */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-xs text-gray-600 font-semibold uppercase mb-1">
                      Acoustic Impedance
                    </p>
                    <p className="text-lg font-bold text-gray-900">
                      {(result.acousticImpedance / 1_000_000).toFixed(1)} MRayl
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-xs text-gray-600 font-semibold uppercase mb-1">
                      Reflection Coefficient
                    </p>
                    <p className="text-lg font-bold text-gray-900">
                      {(result.reflectionCoefficient * 100).toFixed(1)}%
                    </p>
                  </div>
                </div>

                {/* Copy Button */}
                <button
                  onClick={copyResult}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-5 h-5" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5" />
                      Copy Result
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Sound Velocity Reference Table */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Info className="w-6 h-6 text-blue-600" />
                Sound Velocity Reference Table
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Material</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-700">Velocity (m/s)</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-700">Density (kg/m³)</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-700">Impedance (MRayl)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(MATERIAL_DATA).map(([key, data], idx) => (
                      <tr
                        key={key}
                        className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                      >
                        <td className="py-3 px-4 font-medium text-gray-900">
                          {key.replace(/[-_]/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                        </td>
                        <td className="text-center py-3 px-4 text-gray-600">
                          {data.velocity.toLocaleString()}
                        </td>
                        <td className="text-center py-3 px-4 text-gray-600">
                          {data.density.toLocaleString()}
                        </td>
                        <td className="text-center py-3 px-4 text-gray-600">
                          {((data.velocity * data.density) / 1_000_000).toFixed(1)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.section>

          {/* Educational Content */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-12 mb-16"
          >
            {/* UT Methodology Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Ultrasonic Thickness Measurement Methodology
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Ultrasonic thickness (UT) testing is a non-destructive inspection method that uses high-frequency sound waves to measure the thickness of materials. The fundamental principle behind UT thickness measurement is based on the propagation of acoustic waves through materials and the measurement of the time taken for these waves to traverse the thickness.
                </p>
                <p>
                  The basic equation for UT thickness calculation is: <strong>Thickness = (Velocity × Transit Time) / 2</strong>. The factor of 2 accounts for the round-trip travel of the sound pulse: down through the material and back up from the bottom surface. Transit time is measured in microseconds, velocity in meters per second, and the resulting thickness in millimeters.
                </p>
                <p>
                  The sound velocity varies significantly depending on the material composition, microstructure, temperature, and grain orientation. For example, carbon steel has a longitudinal wave velocity of approximately 5920 m/s, while aluminum is approximately 6320 m/s. Temperature compensation is critical because sound velocity decreases as temperature increases, typically at a rate of approximately -3 to -4 m/s per degree Celsius for steel.
                </p>
                <p>
                  UT thickness measurement is extensively used in the inspection of pressure vessels, pipelines, storage tanks, and structural steel. It is particularly valuable for detecting wall thinning caused by corrosion, erosion, or mechanical damage. The method is rapid, provides real-time results, and requires access from only one side of the material, making it ideal for in-service inspection of equipment.
                </p>
                <p>
                  The accuracy of UT thickness measurement depends on several factors including the acoustic properties of the material, the condition of the contact surface, the stability of the reference calibration, and the skill of the operator. Typical measurement accuracy ranges from ±0.05 mm to ±0.5 mm depending on material thickness and material properties. Surfaces should be clean and smooth with good acoustic coupling to ensure accurate readings.
                </p>
              </div>
            </div>

            {/* Industry Applications */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Industry Applications and Standards Compliance
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  UT thickness measurement is specified in numerous industry standards and codes. The ASME Boiler and Pressure Vessel Code Section V provides detailed requirements for UT thickness measurement procedures, including equipment specifications, calibration requirements, acceptance criteria, and reporting. API 510 (Pressure Vessel Inspection Code) extensively incorporates UT thickness measurement for fitness-for-service assessment and remaining life calculations.
                </p>
                <p>
                  In the petrochemical and refining industries, UT thickness measurement is a primary inspection method for monitoring internal corrosion in pipelines, pressure vessels, and heat exchangers. API 570 (Piping Inspection Code) requires UT thickness measurements at specific intervals and locations to ensure safe continued operation. API 510 and API 570 provide detailed guidance on minimum thickness requirements, inspection intervals, and acceptance criteria based on risk-based inspection principles.
                </p>
                <p>
                  AWS (American Welding Society) standards incorporate UT measurement for thickness verification in weld inspection procedures. ISO 5577 and ISO 6487 provide international specifications for ultrasonic thickness measurement equipment and procedures. The ASTM E494 standard specifies measuring thickness by ultrasonic contact delay line method, while ASTM E2375 covers ultrasonic thickness measurement using contact method.
                </p>
                <p>
                  Power generation facilities use UT thickness measurement for monitoring corrosion and erosion in boiler tubes, superheater tubes, and economizer tubes. Aerospace standards including NADCAP qualification criteria require UT thickness measurement procedures for composite and metallic structure inspection. The offshore oil and gas industry relies heavily on UT thickness measurement for integrity assessment of subsea pipelines and platform structural members.
                </p>
                <p>
                  Manufacturing industries employ UT thickness measurement for quality assurance during production of sheet metal, coated products, and composite materials. The automotive industry uses UT for corrosion monitoring on vehicle chassis and structural components. Food and beverage industries use UT thickness measurement to monitor corrosion in storage tanks and process equipment.
                </p>
              </div>
            </div>

            {/* Standards and Requirements */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Key Standards and Relevant Codes
              </h2>
              <div className="space-y-3 text-gray-700">
                <p className="font-semibold text-gray-900">ASME Standards:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li><strong>ASME Section V:</strong> Nondestructive Examination - provides requirements for UT thickness measurement</li>
                  <li><strong>ASME Section VIII:</strong> Pressure Vessels - incorporates UT requirements for in-service inspection</li>
                  <li><strong>ASME Section XI:</strong> Rules for In-Service Inspection - specifies UT measurement procedures</li>
                </ul>

                <p className="font-semibold text-gray-900 mt-4">API Standards:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li><strong>API 510:</strong> Pressure Vessel Inspection Code - requires UT measurements at specific intervals</li>
                  <li><strong>API 570:</strong> Piping Inspection Code - specifies UT measurement locations and acceptance criteria</li>
                  <li><strong>API 653:</strong> Tank Inspection Code - incorporates UT for external corrosion assessment</li>
                </ul>

                <p className="font-semibold text-gray-900 mt-4">International Standards:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li><strong>ISO 5577:</strong> Ultrasonic Thickness Measurement - general principles and methods</li>
                  <li><strong>ISO 22825:</strong> Condition Monitoring - ultrasonic thickness measurement</li>
                  <li><strong>EN 12062:</strong> Ultrasonic Thickness Measurement - European standard</li>
                </ul>
              </div>
            </div>

            {/* Advanced Topics */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Advanced Considerations in UT Thickness Measurement
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>Temperature Compensation:</strong> Sound velocity varies significantly with temperature. A 100°C temperature increase can reduce sound velocity by approximately 300-400 m/s in steel. Modern ultrasonic thickness gauges include temperature compensation algorithms that adjust measurements based on material temperature. For critical applications, material samples at the same temperature as the test piece should be used for reference calibration.
                </p>
                <p>
                  <strong>Material Anisotropy:</strong> Some materials exhibit directional variation in sound velocity due to grain structure or manufacturing processes. Austenitic stainless steels and cast materials may show significant velocity variations. For accurate measurements in anisotropic materials, velocity should be verified using calibration blocks made from the same material or similar microstructure.
                </p>
                <p>
                  <strong>Coated and Lined Vessels:</strong> Internal linings or external coatings can affect UT measurement accuracy. The thickness measurement will include any coating material present. For vessels with significant coatings, the coating thickness should be measured separately or accounted for in the measurement procedure.
                </p>
                <p>
                  <strong>Surface Condition:</strong> Rough or corroded surfaces reduce acoustic coupling and can produce unreliable measurements. Surface roughness exceeding Ra 6.3 micrometers may require surface preparation or higher frequency probes. Corrosion products should be removed to bare metal for reliable measurements.
                </p>
                <p>
                  <strong>Weld Seam Variations:</strong> In welded construction, the heat-affected zone adjacent to welds may have different metallurgical properties and sound velocities. Measurements should avoid welded areas or account for potential velocity variations in weld heat-affected zones.
                </p>
                <p>
                  <strong>Laminar Defects and Delamination:</strong> UT thickness measurement reflects the first major acoustic discontinuity encountered. Laminar defects, delaminations, or internal voids between the measurement point and the back wall will produce erroneously thin readings. For accurate wall thickness, the back-surface echo must be confirmed as the actual back wall.
                </p>
              </div>
            </div>

            {/* Best Practices */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Best Practices for Reliable UT Thickness Measurements
              </h2>
              <div className="space-y-3 text-gray-700">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100">
                      <span className="text-blue-600 font-semibold text-sm">1</span>
                    </div>
                  </div>
                  <div>
                    <p><strong>Equipment Calibration:</strong> Calibrate ultrasonic gauges daily before use using reference blocks of known thickness made from similar material. Use both zero-thickness adjustment and thickness calibration points.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100">
                      <span className="text-blue-600 font-semibold text-sm">2</span>
                    </div>
                  </div>
                  <div>
                    <p><strong>Temperature Measurement:</strong> Record the material temperature at the measurement location. Apply temperature compensation using appropriate algorithms or correction factors specific to the material.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100">
                      <span className="text-blue-600 font-semibold text-sm">3</span>
                    </div>
                  </div>
                  <div>
                    <p><strong>Surface Preparation:</strong> Clean and prepare measurement surfaces to remove corrosion products, paint, and contaminants. Ensure adequate acoustic coupling using appropriate couplant material.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100">
                      <span className="text-blue-600 font-semibold text-sm">4</span>
                    </div>
                  </div>
                  <div>
                    <p><strong>Multiple Measurements:</strong> Take multiple measurements at each location and average the results. Measure above, below, and to the sides of corroded areas. Measure across the full extent of thinned regions to determine maximum loss.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100">
                      <span className="text-blue-600 font-semibold text-sm">5</span>
                    </div>
                  </div>
                  <div>
                    <p><strong>Back-Wall Verification:</strong> Confirm that the measured echo originates from the actual back wall. Use A-scan waveform display to verify signal characteristics and ensure measurement accuracy.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100">
                      <span className="text-blue-600 font-semibold text-sm">6</span>
                    </div>
                  </div>
                  <div>
                    <p><strong>Documentation:</strong> Record equipment type, serial number, calibration details, material temperature, location coordinates, and any surface conditions affecting accuracy. Maintain detailed records for trend analysis and fitness-for-service assessments.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 text-white mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Need Professional UT Inspection Services?
            </h2>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl">
              Our certified NDT professionals provide precision ultrasonic thickness measurements for pressure vessels, pipelines, and storage tanks. API and ASME compliant procedures with detailed reporting and fitness-for-service assessment.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Request Inspection Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.section>

          {/* Related Tools */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Link
              to="/tools"
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="text-blue-600 font-bold mb-2">View All Tools</div>
              <h3 className="text-lg font-semibold text-gray-900">
                NDT Tools Hub
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Explore other calculation tools and reference materials
              </p>
            </Link>

            <Link
              to="/tools/ndt-method-selector"
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="text-blue-600 font-bold mb-2">Method Selection</div>
              <h3 className="text-lg font-semibold text-gray-900">
                NDT Method Selector
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Find the right NDT method for your application
              </p>
            </Link>

            <Link
              to="/tools/sound-velocity-reference"
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="text-blue-600 font-bold mb-2">Reference Data</div>
              <h3 className="text-lg font-semibold text-gray-900">
                Sound Velocity Reference
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Comprehensive acoustic property tables for 50+ materials
              </p>
            </Link>
          </div>
        </div>
      </main>

      <ContactDetails />
    </>
  );
}
