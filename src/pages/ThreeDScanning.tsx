import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";

const modalities = [
  {
    title: "LiDAR-Based 3D Scanning",
    body: "Survey-grade terrestrial and mobile LiDAR capture for plants, tanks, pressure vessels, pipe racks and structures. Millimetre-accurate point clouds for as-built models, clash detection, deformation monitoring and dimensional control — registered to plant coordinates and ready for CAD, BIM and digital-twin workflows.",
  },
  {
    title: "Photogrammetry",
    body: "High-resolution photogrammetric reconstruction for surface mapping, corrosion and coating documentation, weld profiling and reverse engineering. Colourised, texture-rich meshes and orthomosaics that pair with NDT data for traceable, geo-referenced inspection records.",
  },
  {
    title: "Drone-Based (UAV) Scanning",
    body: "Drone-mounted LiDAR and photogrammetry for confined, elevated and hard-to-access assets — flare stacks, storage-tank roofs, bridges, jetties, cooling towers and offshore structures. Reduces rope-access and scaffolding cost while improving inspector safety and coverage.",
  },
];

const useCases = [
  "As-built capture & dimensional control",
  "Tank & pressure-vessel deformation / settlement surveys (API 653, API 510)",
  "Corrosion mapping & coating condition documentation",
  "BIM & digital-twin model creation and updates",
  "Reverse engineering of legacy components",
  "Clash detection & retrofit / tie-in planning",
  "Volumetric & stockpile surveys",
  "Pre-shutdown and turnaround scoping",
];

export default function ThreeDScanning() {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="3D Scanning Services — LiDAR, Photogrammetry & Drone Surveys | Atlantis NDT"
        description="Atlantis NDT 3D scanning services: survey-grade LiDAR, photogrammetry and drone-based capture for as-built models, tank & vessel deformation surveys, corrosion mapping, BIM and digital twins. ASNT Level III led. Quote: info@atlantisndt.com"
        keywords="3D scanning services, LiDAR scanning, laser scanning, photogrammetry, drone 3D scanning, UAV survey, as-built modelling, point cloud, reality capture, tank deformation survey, digital twin scanning, reverse engineering, BIM scanning, dimensional control"
        canonical="https://atlantisndt.com/3d-scanning-services"
      />
      <Navigation />
      <main className="container mx-auto max-w-6xl px-6 py-12">
        <nav className="text-sm text-slate-500 mb-6"><Link to="/" className="hover:underline">Home</Link> &rsaquo; 3D Scanning Services</nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#004aad" }}>
          3D Scanning Services — LiDAR, Photogrammetry &amp; Drone-Based Reality Capture
        </h1>
        <p className="text-lg text-slate-700 leading-relaxed mb-4">
          Atlantis NDT delivers survey-grade <strong>3D scanning and reality-capture services</strong> that turn physical
          assets into accurate, measurable digital models. We combine <strong>LiDAR laser scanning</strong>,
          <strong> photogrammetry</strong> and <strong>drone-based (UAV) capture</strong> with our ASNT Level III
          inspection expertise — so your point clouds and models are not just geometry, but integrity-grade engineering data.
        </p>
        <p className="text-lg text-slate-700 leading-relaxed mb-10">
          Our scans feed directly into as-built CAD, BIM and <Link to="/digital-twins" className="text-[#004aad] underline">digital-twin</Link> workflows,
          and complement our <Link to="/consulting" className="text-[#004aad] underline">NDT consulting</Link> and inspection programs for
          oil &amp; gas, petrochemical, power, marine and infrastructure assets.
        </p>

        <h2 className="text-2xl font-bold mb-6" style={{ color: "#004aad" }}>Our 3D Scanning Modalities</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {modalities.map((m) => (
            <div key={m.title} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="font-bold text-lg mb-3">{m.title}</h3>
              <p className="text-slate-600 leading-relaxed">{m.body}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6" style={{ color: "#004aad" }}>What We Use 3D Scanning For</h2>
        <ul className="grid md:grid-cols-2 gap-3 mb-12">
          {useCases.map((u) => (
            <li key={u} className="flex items-start gap-2 text-slate-700">
              <span className="text-[#004aad] mt-1">&#10003;</span><span>{u}</span>
            </li>
          ))}
        </ul>

        <div className="bg-[#004aad] text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Need a 3D scan, point cloud or as-built model?</h2>
          <p className="mb-6 opacity-90">We mobilise LiDAR, photogrammetry and drone crews globally — across every region we serve.</p>
          <a href="mailto:info@atlantisndt.com" className="inline-block bg-white text-[#004aad] font-semibold px-6 py-3 rounded-lg hover:bg-slate-100 transition">Request a 3D Scanning Quote</a>
        </div>
      </main>
      <ContactDetails />
    </div>
  );
}
