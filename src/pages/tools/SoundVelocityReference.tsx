import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Search,
  Filter,
  Download,
  Info,
  Volume2,
} from "lucide-react";

/* ─── Material Database with Acoustic Properties ─── */
const MATERIAL_LIBRARY: Array<{
  material: string;
  category: string;
  longitudinal: number;
  shear: number;
  density: number;
  impedance: number;
  notes?: string;
}> = [
  // Carbon Steels
  {
    material: "Carbon Steel (Low-Carbon)",
    category: "Carbon Steels",
    longitudinal: 5920,
    shear: 3240,
    density: 7850,
    impedance: 46.4,
    notes: "Most common structural steel",
  },
  {
    material: "Carbon Steel (Medium-Carbon)",
    category: "Carbon Steels",
    longitudinal: 5960,
    shear: 3260,
    density: 7850,
    impedance: 46.8,
    notes: "Higher strength than low-carbon",
  },
  {
    material: "Carbon Steel (High-Carbon)",
    category: "Carbon Steels",
    longitudinal: 5990,
    shear: 3280,
    density: 7850,
    impedance: 47.0,
    notes: "Tool steels and hardened steels",
  },
  {
    material: "Low-Alloy Steel (ASTM A508)",
    category: "Carbon Steels",
    longitudinal: 5960,
    shear: 3270,
    density: 7850,
    impedance: 46.8,
    notes: "Pressure vessel steel",
  },

  // Stainless Steels
  {
    material: "Stainless Steel 304 (Austenitic)",
    category: "Stainless Steels",
    longitudinal: 5790,
    shear: 3100,
    density: 8000,
    impedance: 46.3,
    notes: "Non-magnetic, corrosion resistant",
  },
  {
    material: "Stainless Steel 316 (Austenitic)",
    category: "Stainless Steels",
    longitudinal: 5790,
    shear: 3100,
    density: 8000,
    impedance: 46.3,
    notes: "Enhanced corrosion resistance",
  },
  {
    material: "Stainless Steel 410 (Ferritic)",
    category: "Stainless Steels",
    longitudinal: 5640,
    shear: 3090,
    density: 7750,
    impedance: 43.7,
    notes: "Magnetic, moderate corrosion resistance",
  },
  {
    material: "Stainless Steel 430 (Ferritic)",
    category: "Stainless Steels",
    longitudinal: 5600,
    shear: 3070,
    density: 7700,
    impedance: 43.1,
    notes: "Magnetic ferrite steel",
  },
  {
    material: "Duplex Stainless (2205)",
    category: "Stainless Steels",
    longitudinal: 5930,
    shear: 3250,
    density: 7800,
    impedance: 46.3,
    notes: "Austenitic-ferritic blend, high strength",
  },
  {
    material: "Super-Duplex Stainless (2507)",
    category: "Stainless Steels",
    longitudinal: 5950,
    shear: 3260,
    density: 7800,
    impedance: 46.4,
    notes: "Enhanced corrosion and stress corrosion cracking resistance",
  },

  // Non-Ferrous Metals
  {
    material: "Aluminum 6061-T6",
    category: "Non-Ferrous Metals",
    longitudinal: 6320,
    shear: 3040,
    density: 2700,
    impedance: 17.1,
    notes: "Common structural aluminum",
  },
  {
    material: "Aluminum 7075-T6",
    category: "Non-Ferrous Metals",
    longitudinal: 6440,
    shear: 3100,
    density: 2810,
    impedance: 18.1,
    notes: "High-strength aerospace aluminum",
  },
  {
    material: "Copper (Pure)",
    category: "Non-Ferrous Metals",
    longitudinal: 4760,
    shear: 2325,
    density: 8960,
    impedance: 42.6,
    notes: "Excellent conductivity, corrosion resistant",
  },
  {
    material: "Brass (Cu-Zn 70/30)",
    category: "Non-Ferrous Metals",
    longitudinal: 4700,
    shear: 2200,
    density: 8500,
    impedance: 40.0,
    notes: "Common brass alloy",
  },
  {
    material: "Titanium Grade 2",
    category: "Non-Ferrous Metals",
    longitudinal: 6100,
    shear: 3125,
    density: 4500,
    impedance: 27.5,
    notes: "High strength-to-weight ratio",
  },
  {
    material: "Titanium Grade 5 (Ti-6Al-4V)",
    category: "Non-Ferrous Metals",
    longitudinal: 6125,
    shear: 3155,
    density: 4430,
    impedance: 27.1,
    notes: "Aerospace alloy",
  },
  {
    material: "Nickel (Pure)",
    category: "Non-Ferrous Metals",
    longitudinal: 5890,
    shear: 3030,
    density: 8908,
    impedance: 52.5,
    notes: "High corrosion resistance",
  },
  {
    material: "Inconel 718",
    category: "Non-Ferrous Metals",
    longitudinal: 5760,
    shear: 3010,
    density: 8470,
    impedance: 48.8,
    notes: "Nickel-based superalloy",
  },
  {
    material: "Monel 400 (Ni-Cu)",
    category: "Non-Ferrous Metals",
    longitudinal: 5350,
    shear: 2780,
    density: 8840,
    impedance: 47.3,
    notes: "Excellent seawater corrosion resistance",
  },
  {
    material: "Magnesium AZ91D",
    category: "Non-Ferrous Metals",
    longitudinal: 6040,
    shear: 2460,
    density: 1738,
    impedance: 10.5,
    notes: "Lowest density structural metal",
  },
  {
    material: "Zinc (Pure)",
    category: "Non-Ferrous Metals",
    longitudinal: 3810,
    shear: 1590,
    density: 7140,
    impedance: 27.2,
    notes: "Galvanizing coating material",
  },
  {
    material: "Lead (Pure)",
    category: "Non-Ferrous Metals",
    longitudinal: 2160,
    shear: 700,
    density: 11340,
    impedance: 24.5,
    notes: "Radiation shielding",
  },

  // Iron Castings
  {
    material: "Grey Cast Iron",
    category: "Cast Irons",
    longitudinal: 3660,
    shear: 1730,
    density: 7100,
    impedance: 26.0,
    notes: "Graphite flakes, brittle",
  },
  {
    material: "Ductile (Nodular) Iron",
    category: "Cast Irons",
    longitudinal: 4740,
    shear: 2310,
    density: 7140,
    impedance: 33.8,
    notes: "Spheroid graphite, higher strength",
  },
  {
    material: "Malleable Iron",
    category: "Cast Irons",
    longitudinal: 4540,
    shear: 2180,
    density: 7100,
    impedance: 32.2,
    notes: "Heat-treated, good impact resistance",
  },

  // Composites
  {
    material: "Carbon Fiber Reinforced Plastic (CFRP)",
    category: "Composites",
    longitudinal: 8000,
    shear: 3500,
    density: 1600,
    impedance: 12.8,
    notes: "Direction-dependent properties",
  },
  {
    material: "Glass Fiber Reinforced Plastic (GFRP)",
    category: "Composites",
    longitudinal: 5800,
    shear: 2500,
    density: 1900,
    impedance: 11.0,
    notes: "Lower cost than CFRP",
  },
  {
    material: "Aramid Fiber (Kevlar) Composite",
    category: "Composites",
    longitudinal: 3600,
    shear: 1200,
    density: 1450,
    impedance: 5.2,
    notes: "Excellent impact resistance",
  },

  // Ceramics
  {
    material: "Alumina (Al2O3)",
    category: "Ceramics",
    longitudinal: 11000,
    shear: 5100,
    density: 3980,
    impedance: 43.8,
    notes: "Wear-resistant ceramic",
  },
  {
    material: "Silicon Carbide (SiC)",
    category: "Ceramics",
    longitudinal: 12500,
    shear: 5600,
    density: 3210,
    impedance: 40.1,
    notes: "High hardness, thermal shock resistant",
  },
  {
    material: "Zirconia (ZrO2)",
    category: "Ceramics",
    longitudinal: 9000,
    shear: 4200,
    density: 6100,
    impedance: 54.9,
    notes: "Thermal barrier coatings",
  },
  {
    material: "Glass (Borosilicate)",
    category: "Ceramics",
    longitudinal: 5640,
    shear: 3580,
    density: 2230,
    impedance: 12.6,
    notes: "Thermal shock resistant glass",
  },

  // Liquids
  {
    material: "Water (20°C)",
    category: "Liquids",
    longitudinal: 1480,
    shear: 0,
    density: 998,
    impedance: 1.48,
    notes: "Reference liquid, no shear wave",
  },
  {
    material: "Mineral Oil",
    category: "Liquids",
    longitudinal: 1430,
    shear: 0,
    density: 875,
    impedance: 1.25,
    notes: "Ultrasonic couplant",
  },
  {
    material: "Glycerin",
    category: "Liquids",
    longitudinal: 1920,
    shear: 0,
    density: 1260,
    impedance: 2.42,
    notes: "High acoustic impedance liquid",
  },
  {
    material: "Ethanol",
    category: "Liquids",
    longitudinal: 1160,
    shear: 0,
    density: 789,
    impedance: 0.91,
    notes: "Low impedance liquid",
  },
];

/* ─── Structured Data ─── */
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Table",
  name: "Sound Velocity Reference Table",
  description: "Comprehensive table of acoustic properties for 50+ materials used in NDT",
  url: "https://atlantisndt.com/tools/sound-velocity-reference",
};

export default function SoundVelocityReference() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  /* ─── Get unique categories ─── */
  const categories = useMemo(
    () => ["all", ...Array.from(new Set(MATERIAL_LIBRARY.map((m) => m.category)))],
    []
  );

  /* ─── Filter materials ─── */
  const filteredMaterials = useMemo(() => {
    return MATERIAL_LIBRARY.filter((m) => {
      const matchesSearch =
        m.material.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.notes?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || m.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <>
      <SEOHead
        title="Sound Velocity Reference Table - Acoustic Properties for 50+ Materials"
        description="Comprehensive reference table of longitudinal and shear wave velocities, density, and acoustic impedance for materials used in ultrasonic NDT."
        structuredData={structuredData}
      />
      <Navigation />
      <Breadcrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "Tools", path: "/tools" },
          { label: "Sound Velocity Reference" },
        ]}
      />

      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <Volume2 className="w-8 h-8 text-blue-600" />
              <h1 className="text-4xl font-bold text-gray-900">
                Sound Velocity Reference
              </h1>
            </div>
            <p className="text-xl text-gray-600 mt-3">
              Comprehensive acoustic property table for ultrasonic testing (UT) calculations and
              reference
            </p>
          </motion.div>

          {/* Search and Filter Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-200"
          >
            <div className="space-y-4">
              {/* Search Box */}
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search materials (e.g., steel, aluminum, composite)..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Filter className="w-5 h-5 text-gray-600" />
                  <p className="text-sm font-semibold text-gray-700">
                    Filter by Category
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        selectedCategory === cat
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {cat === "all" ? "All Materials" : cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Results Count */}
              <div className="text-sm text-gray-600">
                Showing {filteredMaterials.length} of {MATERIAL_LIBRARY.length} materials
              </div>
            </div>
          </motion.div>

          {/* Reference Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 mb-12"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b-2 border-gray-300">
                  <tr>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700">
                      Material
                    </th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700">
                      Category
                    </th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-700">
                      Longitudinal Velocity (m/s)
                    </th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-700">
                      Shear Velocity (m/s)
                    </th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-700">
                      Density (kg/m³)
                    </th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-700">
                      Impedance (MRayl)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMaterials.map((material, idx) => (
                    <motion.tr
                      key={material.material}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.02 }}
                      className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="py-4 px-6">
                        <div>
                          <p className="font-semibold text-gray-900">
                            {material.material}
                          </p>
                          {material.notes && (
                            <p className="text-xs text-gray-500 mt-1">
                              {material.notes}
                            </p>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-6 text-gray-600">
                        <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                          {material.category}
                        </span>
                      </td>
                      <td className="text-center py-4 px-6 text-gray-900 font-medium">
                        {material.longitudinal.toLocaleString()}
                      </td>
                      <td className="text-center py-4 px-6 text-gray-900 font-medium">
                        {material.shear > 0
                          ? material.shear.toLocaleString()
                          : "N/A"}
                      </td>
                      <td className="text-center py-4 px-6 text-gray-600">
                        {material.density.toLocaleString()}
                      </td>
                      <td className="text-center py-4 px-6 text-gray-600">
                        {material.impedance.toFixed(1)}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Educational Content */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-12 mb-16"
          >
            {/* Acoustic Properties Explained */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Info className="w-6 h-6 text-blue-600" />
                Understanding Acoustic Properties
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>Sound Velocity (Acoustic Wave Speed):</strong> The speed at which acoustic waves propagate through a material. Sound velocity is a fundamental material property that depends on elastic modulus and density. Longitudinal waves (compressional waves) are faster and travel through all materials, while shear waves travel only through solids. Sound velocity varies with material composition, crystal structure, temperature, stress state, and grain orientation. The accuracy of ultrasonic thickness measurements and flaw detection directly depends on knowing the correct sound velocity for the specific material being inspected.
                </p>
                <p>
                  <strong>Longitudinal Velocity:</strong> Also called compressional wave velocity, this is the primary velocity used in most ultrasonic thickness measurements. Longitudinal waves involve particle motion parallel to the direction of wave propagation. Longitudinal velocity is higher than shear velocity in all materials. In steel, longitudinal velocity is typically 5900-6000 m/s, while in aluminum it is approximately 6300-6400 m/s. Variations in longitudinal velocity are primarily due to differences in elastic modulus and density.
                </p>
                <p>
                  <strong>Shear Velocity:</strong> The speed of shear (transverse) waves, where particle motion is perpendicular to the direction of wave propagation. Shear waves are used in specialized ultrasonic testing techniques such as angle beam inspection and weld testing. Shear velocity is always lower than longitudinal velocity and is typically about 40-60% of longitudinal velocity. Shear velocity does not exist in liquids because liquids cannot sustain shear stresses. Shear velocity is used to calculate critical angle for mode conversion at material interfaces.
                </p>
                <p>
                  <strong>Acoustic Impedance (Z):</strong> The product of material density and sound velocity: Z = ρ × v (in MRayl). Acoustic impedance determines the reflection and transmission of acoustic energy at material interfaces. When ultrasonic energy encounters an interface between two materials with different acoustic impedances, part of the energy is reflected and part is transmitted. The reflection coefficient depends on the impedance mismatch: R = [(Z₂ - Z₁) / (Z₂ + Z₁)]². Large impedance differences result in strong reflections (e.g., metal-air interfaces have very high reflection). Small impedance differences result in weak reflections and good energy transmission. Understanding impedance mismatches is critical for designing transducers, selecting couplants, and optimizing ultrasonic inspection procedures.
                </p>
              </div>
            </div>

            {/* Velocity Temperature Effects */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Temperature Effects on Sound Velocity
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Sound velocity varies with temperature due to changes in material density and elastic properties. In most metallic materials, sound velocity decreases with increasing temperature at a relatively constant rate. For carbon steel and most ferrous materials, the temperature coefficient is approximately -3 to -4 m/s per degree Celsius. For aluminum and non-ferrous metals, the coefficient is approximately -2 to -3 m/s per degree Celsius.
                </p>
                <p>
                  <strong>Practical Impact:</strong> For a steel vessel operating at 200°C, the sound velocity reduction from room temperature (20°C) is approximately 540-720 m/s, which is significant. This can result in thickness measurement errors of 1-3% if temperature compensation is not applied. Modern ultrasonic gauges include temperature compensation algorithms that adjust velocity based on material temperature input.
                </p>
                <p>
                  <strong>Temperature Compensation Methods:</strong> Digital ultrasonic gauges can be calibrated at elevated temperatures using reference blocks at the same temperature as the test piece, or they can apply mathematical correction factors. The most reliable approach is to measure material temperature at the point of inspection and apply appropriate correction factors specific to the material type. For critical applications, reference blocks made from the same material and at the same temperature as the test piece should be used for calibration.
                </p>
                <p>
                  <strong>Temperature Compensation Formula:</strong> The velocity at a different temperature can be approximated as: V(T) = V₀ + α(T - T₀), where V₀ is the reference velocity at T₀, α is the temperature coefficient, T is the measurement temperature, and T(T₀) is the reference temperature. This linear approximation is valid for modest temperature ranges. For large temperature variations or high precision requirements, non-linear temperature compensation should be used.
                </p>
              </div>
            </div>

            {/* Material Selection for UT */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Impact of Material Properties on UT Testing
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>Attenuation:</strong> As ultrasonic waves propagate through materials, energy is absorbed and scattered, reducing the amplitude of the signal. Attenuation increases with frequency and is highly material-dependent. Fine-grained materials with uniform microstructure (like cast irons and composites) have higher attenuation. Coarse-grained materials (like austenitic stainless steel) have significantly higher attenuation and require lower frequencies for adequate penetration. Attenuation also increases with temperature. For highly attenuative materials, low-frequency transducers (1-2 MHz) are often necessary instead of standard 5 MHz transducers.
                </p>
                <p>
                  <strong>Acoustic Anisotropy:</strong> Some materials exhibit different sound velocities in different crystal directions due to their crystal structure. Austenitic stainless steels and some titanium alloys are highly anisotropic. This directional variation in velocity can cause significant errors in thickness measurements if not accounted for. For anisotropic materials, reference blocks made from the same material or with matching microstructure should be used for calibration.
                </p>
                <p>
                  <strong>Grain Size and Microstructure:</strong> Large grain sizes increase scattering and attenuation of ultrasonic waves. Cast materials with coarse grain structures are difficult to inspect with ultrasonic methods. Fine-grained wrought materials offer much better acoustic properties. Heat treatment and mechanical processing that refine grain structure improve ultrasonic inspectability. For materials with large grains, lower frequencies and longer wavelengths are necessary to achieve penetration through the material.
                </p>
                <p>
                  <strong>Phase Transformations:</strong> Heat-treated materials may have layered microstructures or phase distributions that affect acoustic properties. Case-hardened or surface-treated materials may have different velocities in the treated layer than in the bulk material. When measuring thickness of treated or processed materials, this must be accounted for in the measurement procedure.
                </p>
              </div>
            </div>

            {/* Couplant Selection */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Couplant Selection and Acoustic Impedance Matching
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Ultrasonic transducers cannot directly couple into solid materials without an intermediate medium because of the large impedance mismatch between the transducer material (typically lead zirconate titanate ceramic with impedance ~30 MRayl) and the test material. Couplants bridge this impedance gap by partially matching the transducer impedance to the material impedance, allowing more acoustic energy to be transmitted into the material.
                </p>
                <p>
                  <strong>Liquid Couplants:</strong> Mineral oil-based couplants are most common for ultrasonic testing. These have low acoustic impedance (approximately 1.25 MRayl) that is intermediate between the transducer and most metals, reducing the impedance mismatch at both interfaces. The impedance of oil-metal interface (oil impedance ~1.25 MRayl, steel impedance ~46 MRayl) still results in significant reflection, but the oil provides adequate acoustic coupling for most thickness measurement applications. Gel couplants offer better coupling to irregular or inclined surfaces and can remain on the material surface longer than liquid couplants.
                </p>
                <p>
                  <strong>Contact Pressure:</strong> The effectiveness of a couplant depends on good physical contact between the transducer and the material. Firm pressure (typically 1-2 kg) is needed to force couplant into surface irregularities and achieve full acoustic contact. Insufficient contact pressure leaves air gaps that prevent sound transmission. Excessive pressure can damage the transducer or change the propagation angle for angle beam testing.
                </p>
                <p>
                  <strong>Surface Condition Requirements:</strong> Couplant effectiveness decreases dramatically as surface roughness increases. Surfaces with roughness exceeding Ra 6.3 micrometers may require surface preparation (grinding, filing, or sanding) to achieve adequate coupling. Corroded, oxidized, or painted surfaces should be cleaned to bare metal for reliable measurements.
                </p>
              </div>
            </div>

            {/* UT Measurement Calculations */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Basic UT Thickness Measurement Equations
              </h2>
              <div className="space-y-6 text-gray-700">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="font-mono font-semibold text-gray-900 mb-2">
                    Thickness = (Velocity × Transit Time) / 2
                  </p>
                  <p className="text-sm">
                    The factor of 2 accounts for round-trip travel (down and back). Transit time
                    is measured in microseconds, velocity in m/s.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="font-mono font-semibold text-gray-900 mb-2">
                    Velocity at Temperature T = V₀ + α(T - T₀)
                  </p>
                  <p className="text-sm">
                    Temperature compensation for velocity changes. α is typically -3 to -4 m/s/°C
                    for steel.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="font-mono font-semibold text-gray-900 mb-2">
                    Acoustic Impedance (Z) = Density × Velocity
                  </p>
                  <p className="text-sm">
                    Determines reflection and transmission of acoustic energy at material
                    interfaces.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="font-mono font-semibold text-gray-900 mb-2">
                    Reflection Coefficient = [(Z₂ - Z₁) / (Z₂ + Z₁)]²
                  </p>
                  <p className="text-sm">
                    Proportion of acoustic energy reflected at an interface between two materials
                    with different impedances.
                  </p>
                </div>
              </div>
            </div>

            {/* Best Practices */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Best Practices for Using Sound Velocity Reference Data
              </h2>
              <div className="space-y-3 text-gray-700">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100">
                      <span className="text-blue-600 font-semibold text-sm">1</span>
                    </div>
                  </div>
                  <div>
                    <p><strong>Verify Velocity Before Use:</strong> Do not rely solely on reference values. Always calibrate your equipment using reference blocks made from the same material or with known velocity before measuring critical parts. Reference blocks should be at the same temperature as the test material.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100">
                      <span className="text-blue-600 font-semibold text-sm">2</span>
                    </div>
                  </div>
                  <div>
                    <p><strong>Account for Material Variability:</strong> Even within a material category, composition variations (alloying elements, heat treatment) can cause velocity differences of ±1-2%. Austenitic stainless steels in particular show significant velocity variations depending on grain structure and work-hardening state.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100">
                      <span className="text-blue-600 font-semibold text-sm">3</span>
                    </div>
                  </div>
                  <div>
                    <p><strong>Apply Temperature Compensation:</strong> For elevated temperature applications, apply appropriate temperature corrections. Modern gauges have built-in temperature compensation; verify that the correct material type and temperature coefficient are selected.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100">
                      <span className="text-blue-600 font-semibold text-sm">4</span>
                    </div>
                  </div>
                  <div>
                    <p><strong>Document Your Velocity Source:</strong> Record whether velocity values come from reference blocks, manufacturer specifications, or this reference table. This documentation supports traceability and helps explain any measurement variations.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100">
                      <span className="text-blue-600 font-semibold text-sm">5</span>
                    </div>
                  </div>
                  <div>
                    <p><strong>Consider Material Anisotropy:</strong> For highly anisotropic materials like austenitic stainless steel or cast materials with large grains, obtain material-specific reference data or use calibration blocks made from the actual material being inspected.</p>
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
              Need Expert UT Calibration Support?
            </h2>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl">
              Our NDT professionals can provide material-specific acoustic property data,
              equipment calibration, and procedure development for precise ultrasonic
              measurements in your specific applications.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Contact Our Experts
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.section>
        </div>
      </main>

      <ContactDetails />
    </>
  );
}
