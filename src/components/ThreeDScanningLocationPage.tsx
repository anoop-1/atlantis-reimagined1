import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import EnquiryCaptureForm from "@/components/EnquiryCaptureForm";

function titleCase(slug: string): string {
  return slug
    .split("-")
    .map((w) => (w.length <= 2 ? w.toUpperCase() : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(" ");
}

export default function ThreeDScanningLocationPage({ citySlug }: { citySlug: string }) {
  const city = titleCase(citySlug);
  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={`3D Scanning Services in ${city} — LiDAR, Photogrammetry & Drone Surveys | Atlantis NDT`}
        description={`Atlantis NDT 3D scanning in ${city}: survey-grade LiDAR laser scanning, photogrammetry and drone-based reality capture for as-built models, tank & vessel deformation surveys, corrosion mapping, BIM and digital twins. ASNT Level III led. Quote: info@atlantisndt.com`}
        keywords={`3D scanning ${city}, LiDAR scanning ${city}, laser scanning ${city}, photogrammetry ${city}, drone survey ${city}, as-built ${city}, point cloud ${city}, reality capture, digital twin scanning, tank deformation survey`}
        canonical={`https://atlantisndt.com/3d-scanning-${citySlug}`}
      />
      <Navigation />
      <main className="container mx-auto max-w-5xl px-6 py-12">
        <nav className="text-sm text-slate-500 mb-6">
          <Link to="/" className="hover:underline">Home</Link> &rsaquo;{" "}
          <Link to="/3d-scanning-services" className="hover:underline">3D Scanning Services</Link> &rsaquo; {city}
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#004aad" }}>
          3D Scanning Services in {city} — LiDAR, Photogrammetry &amp; Drone Surveys
        </h1>
        <p className="text-lg text-slate-700 leading-relaxed mb-4">
          Atlantis NDT provides survey-grade <strong>3D scanning and reality-capture services in {city}</strong>, combining
          <strong> LiDAR laser scanning</strong>, <strong>photogrammetry</strong> and <strong>drone-based (UAV) capture</strong>
          to turn plants, tanks, vessels, structures and components into accurate, measurable digital models.
        </p>
        <p className="text-slate-700 leading-relaxed mb-8">
          Backed by our ASNT Level III inspection team, scans captured in {city} feed straight into as-built CAD, BIM and
          {" "}<Link to="/digital-twins" className="text-[#004aad] underline">digital-twin</Link> workflows — and pair with
          our <Link to="/consulting" className="text-[#004aad] underline">NDT consulting</Link> and asset-integrity programs.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <h2 className="font-bold text-lg mb-2">LiDAR Laser Scanning</h2>
            <p className="text-slate-600 leading-relaxed">Millimetre-accurate point clouds of {city} facilities for as-builts, clash detection, dimensional control and deformation monitoring.</p>
          </div>
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <h2 className="font-bold text-lg mb-2">Photogrammetry</h2>
            <p className="text-slate-600 leading-relaxed">High-resolution colourised meshes and orthomosaics for corrosion, coating and weld documentation across {city} assets.</p>
          </div>
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <h2 className="font-bold text-lg mb-2">Drone / UAV Scanning</h2>
            <p className="text-slate-600 leading-relaxed">Aerial LiDAR &amp; photogrammetry for elevated and hard-to-access {city} structures — tank roofs, flare stacks, jetties and offshore.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#004aad" }}>Applications in {city}</h2>
        <ul className="grid md:grid-cols-2 gap-3 mb-10">
          {["As-built capture & dimensional control","Tank & pressure-vessel deformation surveys (API 653 / 510)","Corrosion & coating condition mapping","BIM & digital-twin model creation","Reverse engineering of legacy parts","Turnaround & retrofit / tie-in planning"].map((u) => (
            <li key={u} className="flex items-start gap-2 text-slate-700"><span className="text-[#004aad] mt-1">&#10003;</span><span>{u}</span></li>
          ))}
        </ul>

        <div className="bg-[#004aad] text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">3D Scanning in {city}</h2>
          <p className="mb-6 opacity-90">LiDAR, photogrammetry and drone capture — mobilised to your {city} site.</p>
          <a href="mailto:info@atlantisndt.com" className="inline-block bg-white text-[#004aad] font-semibold px-6 py-3 rounded-lg hover:bg-slate-100 transition">Request a Quote</a>
        </div>
        <div className="mt-10">
          <EnquiryCaptureForm variant="3d-scanning" />
        </div>
      </main>
      <ContactDetails />
    </div>
  );
}
