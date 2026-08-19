import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GraduationCap, MapPin, Award, CheckCircle, TrendingUp, Users, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { isCuratedCity } from '@/data/curated-cities';
import { RelatedCityProducts } from '@/components/RelatedProducts';
import TrainingEnquiryCTA from "@/components/TrainingEnquiryCTA";

interface TrainingCity {
  name: string;
  region: string;
  detail: string;
  certStandards: string[];
}

// City data for global training pages
const trainingCities: Record<string, TrainingCity> = {
  "abu-dhabi": { name: "Abu Dhabi", region: "UAE", detail: "Abu Dhabi NDT training for ADNOC operations, offshore platforms, and petrochemical facilities. ASNT and ISO 9712 certification.", certStandards: ["ASNT SNT-TC-1A", "ISO 9712", "PCN", "CSWIP"] },
  "aberdeen": { name: "Aberdeen", region: "UK", detail: "Aberdeen NDT training for North Sea offshore oil & gas, subsea pipelines, and decommissioning projects.", certStandards: ["PCN (BINDT)", "EN ISO 9712", "CSWIP", "ASNT SNT-TC-1A"] },
  "bangalore": { name: "Bangalore", region: "India", detail: "Bangalore NDT training for HAL (Hindustan Aeronautics — Tejas, Su-30MKI, LCH, ALH), ISRO (Indian Space Research Organisation — PSLV, GSLV, Chandrayaan launch vehicles), BHEL, BEL (Bharat Electronics), Bosch India, Volvo India, Toyota Kirloskar Motor, and Airbus / Boeing engineering captives. ISNT, ASNT SNT-TC-1A, NAS-410, and NADCAP audits all converge here, making Bangalore India's primary aerospace NDT training hub.", certStandards: ["ISNT", "ASNT SNT-TC-1A", "NAS-410", "NADCAP"] },
  "chennai": { name: "Chennai", region: "India", detail: "Chennai NDT training for CPCL (Chennai Petroleum, IOCL group), Hyundai Motor India, Renault-Nissan Alliance Chennai, BMW India, Daimler India Commercial Vehicles, Ashok Leyland, Larsen & Toubro Heavy Engineering Hazira (corporate offices), and Mahindra Defence Naval Systems. ISNT is mandatory for Indian-national candidates; IATF 16949 and NADCAP audits drive automotive and aerospace QC certification demand.", certStandards: ["ISNT", "ASNT SNT-TC-1A", "IATF 16949", "NADCAP"] },
  "jakarta": { name: "Jakarta", region: "Indonesia", detail: "Jakarta NDT training for Pertamina, Indonesian mining, and oil & gas industries.", certStandards: ["BNSP", "ASNT SNT-TC-1A", "ISO 9712"] },
  "johannesburg": { name: "Johannesburg", region: "South Africa", detail: "Johannesburg NDT training for mining, Sasol operations, and South African manufacturing.", certStandards: ["SAIW", "EN ISO 9712", "ASNT SNT-TC-1A"] },
  "kuala-lumpur": { name: "Kuala Lumpur", region: "Malaysia", detail: "Kuala Lumpur NDT training for Petronas (national oil company headquarters), Sapura Energy, Dialog Group, MMHE (Malaysia Marine and Heavy Engineering), Bumi Armada, Yinson FPSO, Bintulu LNG support offices, and Pengerang RAPID contractors. Petronas Technical Standards (PTS) are mandatory; CSWIP 3.1 is the dominant welding-inspection credential at Malaysian EPC contractors.", certStandards: ["ASNT SNT-TC-1A", "PCN", "ISO 9712", "CSWIP"] },
  "lagos": { name: "Lagos", region: "Nigeria", detail: "Lagos NDT training for Nigerian oil & gas, Dangote Refinery, and offshore operations.", certStandards: ["ASNT SNT-TC-1A", "PCN", "ISO 9712"] },
  "london": { name: "London", region: "UK", detail: "London NDT training for construction, aerospace, rail industries, and nuclear sector.", certStandards: ["PCN (BINDT)", "EN ISO 9712", "CSWIP", "ASNT SNT-TC-1A"] },
  "mexico-city": { name: "Mexico City", region: "Mexico", detail: "Mexico City NDT training for PEMEX, automotive manufacturing, and Mexican industrial sectors.", certStandards: ["ASNT SNT-TC-1A", "ISO 9712"] },
  "mumbai": { name: "Mumbai", region: "India", detail: "Mumbai NDT training for BPCL Mahul Refinery, HPCL Mumbai Refinery, ONGC Mumbai High offshore platforms, Bharat Dynamics, Mazagon Dock Shipbuilders (Indian Navy submarines + destroyers), Larsen & Toubro Heavy Engineering, Tata Power, and Reliance Industries head office. ISNT, ASNT SNT-TC-1A, and BARC-specific certification (for nuclear contractor work at BARC, NPCIL) all run training cohorts in Mumbai's industrial belt.", certStandards: ["ISNT", "ASNT SNT-TC-1A", "BARC (nuclear)"] },
  "perth": { name: "Perth", region: "Australia", detail: "Perth NDT training for Western Australian mining, LNG (Gorgon, Wheatstone), and offshore operations.", certStandards: ["AINDT", "AS 3669", "ASNT SNT-TC-1A", "ISO 9712"] },
  "riyadh": { name: "Riyadh", region: "Saudi Arabia", detail: "Riyadh NDT training for Saudi Aramco headquarters, SABIC, Ma'aden mining, Saudi Electricity Company, and Vision 2030 NEOM, ROSHN, Diriyah Gate and Red Sea Global construction. SAEP-1112 / SAEP-1140 procedures are mandatory; CSWIP 3.1 is required at Saudi Aramco EPC contractors and the King Salman Energy Park (SPARK) industrial city near Dammam.", certStandards: ["SAEP-1112", "ASNT SNT-TC-1A", "CSWIP", "ISO 9712"] },
  "rotterdam": { name: "Rotterdam", region: "Netherlands", detail: "Rotterdam NDT training for Europoort refineries, petrochemical, and offshore wind industries.", certStandards: ["EN ISO 9712", "PCN", "NEN", "ASNT SNT-TC-1A"] },
  "sao-paulo": { name: "São Paulo", region: "Brazil", detail: "São Paulo NDT training for Petrobras, pre-salt deepwater, and Brazilian industrial sectors.", certStandards: ["ABENDI", "ISO 9712", "ASNT SNT-TC-1A"] },
  "singapore": { name: "Singapore", region: "Singapore", detail: "Singapore NDT training for Jurong Island petrochemical complex, marine/shipbuilding, and FPSO fabrication.", certStandards: ["ASNT SNT-TC-1A", "PCN", "ISO 9712", "MOM-recognized"] },
  // ── Training enrichment 2026-05-24 — 10 new city contexts ────────────
  "ahmedabad": { name: "Ahmedabad", region: "India", detail: "Ahmedabad NDT training for IOCL, Adani Group, Torrent Power, Welspun pipes, Arvind Mills heavy fabrication, and ONGC Gujarat operations. ISNT and ASNT certification with corporate training programs for Reliance Industries Jamnagar contractors and Petronet LNG operators.", certStandards: ["ISNT", "ASNT SNT-TC-1A", "ISO 9712"] },
  "jamnagar": { name: "Jamnagar", region: "India", detail: "Jamnagar NDT training for Reliance Industries Jamnagar Refinery (world's largest single-location refinery at 1.24 million bpd), Nayara Energy (Essar Oil), and Jamnagar Petroleum Trust. ISNT and ASNT Level III instructors with API 510/570/653 specialization for refinery inspection.", certStandards: ["ISNT", "ASNT SNT-TC-1A", "ISO 9712", "API"] },
  "visakhapatnam": { name: "Visakhapatnam", region: "India", detail: "Visakhapatnam (Vizag) NDT training for Hindustan Petroleum Visakh Refinery, Indian Navy Eastern Naval Command, Hindustan Shipyard, Visakhapatnam Steel Plant (Vizag Steel/RINL), and HPCL-Mittal Energy refinery. ISNT and ASNT certification with shipyard MIL-STD focus.", certStandards: ["ISNT", "ASNT SNT-TC-1A", "ISO 9712"] },
  "calgary": { name: "Calgary", region: "Canada", detail: "Calgary NDT training for Suncor Energy, Cenovus, Canadian Natural Resources (CNRL), Imperial Oil, TC Energy (TransCanada), Pembina Pipeline, and Enbridge. CGSB 48.9712 is the primary Canadian NDT certification with ASNT SNT-TC-1A widely accepted for cross-border work.", certStandards: ["CGSB 48.9712", "ASNT SNT-TC-1A", "CSA Z662", "API 570"] },
  "fort-mcmurray": { name: "Fort McMurray", region: "Canada", detail: "Fort McMurray NDT training for the Athabasca oil sands — Suncor Energy Base Plant + MacKay River + Firebag, Syncrude Mildred Lake + Aurora, Canadian Natural Horizon, Imperial Kearl, and Cenovus Christina Lake. CGSB Level II is the entry-level requirement, with API 510 / 570 / 653 for upgrader and SAGD facility inspection.", certStandards: ["CGSB 48.9712", "ASNT SNT-TC-1A", "API 510 / 570 / 653"] },
  "houston": { name: "Houston", region: "USA", detail: "Houston NDT training for ExxonMobil Baytown, Shell Deer Park, Chevron Phillips, LyondellBasell, Phillips 66, Valero, Marathon Petroleum, Bechtel, McDermott, KBR, and Wood. ASNT SNT-TC-1A is universal with API 510 / 570 / 653 + AWS CWI for capital projects and refinery turnarounds.", certStandards: ["ASNT SNT-TC-1A", "API 510 / 570 / 653", "AWS CWI", "ISO 9712"] },
  "stavanger": { name: "Stavanger", region: "Norway", detail: "Stavanger NDT training for Equinor (Statoil), Aker BP, ConocoPhillips Norway, Vår Energi, Aker Solutions, and Subsea 7. Norsok M-101 + NS-EN ISO 9712 dominate North Sea offshore work, with PCN and CSWIP widely accepted by Aker Solutions and Subsea 7 for fabrication QC.", certStandards: ["NS-EN ISO 9712", "PCN", "CSWIP", "ASNT SNT-TC-1A"] },
  "doha": { name: "Doha", region: "Qatar", detail: "Doha NDT training for QatarEnergy (formerly Qatar Petroleum), Qatargas, RasGas, QAFCO fertilizers, and the North Field Expansion (NFE + NFS) LNG mega-project taking Qatar from 77 to 142 MTPA by 2030. CSWIP 3.1 is mandatory at NFE construction EPC packages led by Technip Energies, Saipem, and Chiyoda.", certStandards: ["ASNT SNT-TC-1A", "ISO 9712", "CSWIP", "PCN"] },
  "kuwait": { name: "Kuwait City", region: "Kuwait", detail: "Kuwait NDT training for KOC (Kuwait Oil Company) upstream, KNPC's three refineries (Mina Abdullah, Mina Al-Ahmadi, Shuaiba — Clean Fuels Project), PIC (Petrochemical Industries Company), Al-Zour Refinery, and KGOC (Kuwait Gulf Oil Company). KOC NDT Procedure KOC-MP-014 is mandatory alongside ASNT SNT-TC-1A.", certStandards: ["ASNT SNT-TC-1A", "ISO 9712", "CSWIP", "KOC-MP-014"] },
  "muscat": { name: "Muscat", region: "Oman", detail: "Muscat NDT training for PDO (Petroleum Development Oman, the country's largest producer), OQ (Oman's national integrated energy group), Oman LNG (Qalhat), Daleel Petroleum, and BP Oman Khazzan tight gas. ASNT SNT-TC-1A is the basis with CSWIP 3.1 required at major contractors (Petrofac, TechnipFMC, Galfar).", certStandards: ["ASNT SNT-TC-1A", "ISO 9712", "CSWIP", "PCN"] },
  // ── Training enrichment 2026-05-25 (Day 2) — 6 new city contexts ──────
  "jubail": { name: "Jubail", region: "Saudi Arabia", detail: "Jubail NDT training for Saudi Aramco Jubail Refinery (SASREF — Saudi Aramco / Shell JV), Petro Rabigh (PetroChemicals JV), SABIC Jubail complex (SADAF, Ibn Sina, Kemya), Royal Commission for Jubail and Yanbu industrial city operations, and the King Salman Energy Park (SPARK) industrial zone nearby. SAEP-1112 / SAEP-1140 NDT procedures are mandatory; CSWIP 3.1 is required at Aramco EPC contractors (L&T, Hyundai E&C, Samsung Engineering, Tecnimont).", certStandards: ["SAEP-1112", "SAEP-1140", "ASNT SNT-TC-1A", "CSWIP", "ISO 9712"] },
  "yanbu": { name: "Yanbu", region: "Saudi Arabia", detail: "Yanbu NDT training for Saudi Aramco Yanbu Refinery (YASREF — Saudi Aramco / Sinopec JV), Petro Rabigh II expansion contractors, YANSAB (SABIC Yanbu Petrochemicals), Saudi Polymers, and the Yanbu Industrial City Red Sea terminal. Yanbu is Saudi Arabia's primary west-coast crude export terminal — Saudi Aramco SAEP-1112 procedures and CSWIP welding-inspection credentials dominate.", certStandards: ["SAEP-1112", "ASNT SNT-TC-1A", "CSWIP", "ISO 9712"] },
  "dammam": { name: "Dammam", region: "Saudi Arabia", detail: "Dammam NDT training for Saudi Aramco's Eastern Province operations — Dhahran headquarters, Aramco IK&PM division, Ras Tanura Refinery and Terminal, Abqaiq processing, Berri Gas Plant, Hawiyah NGL, and the major inspection contractors (Applus+ Velosi, TÜV Middle East, Bureau Veritas Saudi Arabia, Mistras Saudi Arabia, IEC). Saudi Aramco SAEP-1112 / SAEP-1140 dominate alongside ASNT SNT-TC-1A and CSWIP 3.1.", certStandards: ["SAEP-1112", "SAEP-1140", "ASNT SNT-TC-1A", "CSWIP", "ISO 9712"] },
  "vizag": { name: "Visakhapatnam (Vizag)", region: "India", detail: "Visakhapatnam (Vizag) NDT training for Hindustan Petroleum Visakh Refinery (HPCL), Indian Navy Eastern Naval Command, Hindustan Shipyard (Indian Navy submarines + warships), Visakhapatnam Steel Plant (Vizag Steel / RINL), HPCL-Mittal Energy refinery, Bharat Heavy Plate & Vessels, and Coromandel International fertilizers. ISNT-IGCAR + ASNT certification with MIL-STD-271 naval shipyard discipline and API 510 / 570 / 653 for HPCL refinery turnarounds.", certStandards: ["ISNT", "ASNT SNT-TC-1A", "ISO 9712", "MIL-STD-271"] },
  "kochi": { name: "Kochi", region: "India", detail: "Kochi NDT training for BPCL Kochi Refinery (Kerala's largest single industrial facility), Cochin Shipyard (Vikrant aircraft carrier, Indian Navy frigates and corvettes, INS Vagsheer Scorpene class submarine), Indian Oil Mathura tie-in pipelines, FACT (Fertilizers and Chemicals Travancore), and the Kochi LNG Terminal (Petronet LNG, 5 MTPA). ISNT certification is mandatory for Indian-national candidates with MIL-STD-271 driving shipyard NDT discipline.", certStandards: ["ISNT", "ASNT SNT-TC-1A", "ISO 9712", "MIL-STD-271"] },
  "vadodara": { name: "Vadodara", region: "India", detail: "Vadodara NDT training for IOCL Gujarat Refinery (Koyali, 13.7 MTPA), GSPC (Gujarat State Petroleum), L&T Heavy Engineering (Hazira fabrication), Reliance Industries Vadodara Manufacturing Division (former IPCL), GACL (Gujarat Alkalies and Chemicals), and ONGC Gujarat. Vadodara is the engineering corporate hub of Gujarat's industrial belt — ISNT + ASNT SNT-TC-1A with API 510 / 570 / 653 for refinery and petrochemical inspection.", certStandards: ["ISNT", "ASNT SNT-TC-1A", "ISO 9712", "API"] },
};

const courses = [
  { method: "Ultrasonic Testing (UT)", levels: ["Level I", "Level II", "Level III"], hours: "40–120 hrs", standard: "ASNT SNT-TC-1A / ISO 9712" },
  { method: "Radiographic Testing (RT)", levels: ["Level I", "Level II", "Level III"], hours: "40–120 hrs", standard: "ASNT SNT-TC-1A / ISO 9712" },
  { method: "Magnetic Particle Testing (MT)", levels: ["Level I", "Level II", "Level III"], hours: "24–80 hrs", standard: "ASNT SNT-TC-1A / ISO 9712" },
  { method: "Liquid Penetrant Testing (PT)", levels: ["Level I", "Level II", "Level III"], hours: "16–60 hrs", standard: "ASNT SNT-TC-1A / ISO 9712" },
  { method: "Visual Testing (VT)", levels: ["Level I", "Level II", "Level III"], hours: "16–40 hrs", standard: "ASNT SNT-TC-1A / ISO 9712" },
  { method: "Eddy Current Testing (ET)", levels: ["Level I", "Level II", "Level III"], hours: "40–80 hrs", standard: "ASNT SNT-TC-1A / ISO 9712" },
];

interface Props {
  citySlug: string;
}

export default function DynamicTrainingPage({ citySlug }: Props) {
  const cityData = trainingCities[citySlug];

  if (!cityData) {
    // Unknown city — render a generic training page without noindex
    const cityName = citySlug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    return (
      <div className="min-h-screen bg-slate-50">
        <Navigation />
        <SEOHead
          title={`NDT Training ${cityName} | ASNT Level I-III Certification | Atlantis NDT`}
          description={`Professional NDT training in ${cityName}. ASNT Level I, II & III certification for UT, MT, PT, RT, ET, VT. 95% pass rate. Enrol today.`}
          keywords={`NDT training ${cityName}, ASNT certification ${cityName}, ultrasonic testing training, NDT courses`}
          canonical={`https://atlantisndt.com/ndt-training-${citySlug}`}
          noindex={!isCuratedCity(citySlug)}
        />
        <main className="pt-24 pb-16">
          <div className="container mx-auto max-w-5xl px-6">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">NDT Training in {cityName}</h1>
            <p className="text-xl text-slate-600 mb-8">Professional ASNT-aligned NDT training. Level I, II, and III certification for all major NDT methods with 95% pass rate.</p>
            <Button asChild className="bg-[#004aad] hover:bg-[#003580]">
              <Link to="/contact">Contact Us for Training</Link>
            </Button>
            <div className="mt-12">
              <RelatedCityProducts
                currentProduct="training"
                citySlug={citySlug}
                city={cityName}
              />
            </div>
          </div>
        </main>
        <TrainingEnquiryCTA />
      <ContactDetails />
      </div>
    );
  }

  const { name, region, detail, certStandards } = cityData;
  const pageTitle = `NDT Training ${name} | ASNT Level I-III Certification | Atlantis NDT`;
  const pageDesc = `ASNT-aligned NDT training in ${name}, ${region}. Level I, II & III certification for UT, MT, PT, RT, ET, VT. ${detail} 95% pass rate.`;

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title={pageTitle}
        description={pageDesc}
        keywords={`NDT training ${name}, ASNT certification ${name}, ultrasonic testing training ${name}, NDT courses ${region}`}
        canonical={`https://atlantisndt.com/ndt-training-${citySlug}`}
        noindex={!isCuratedCity(citySlug)}
      />
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Training", href: "/training" },
        { label: `NDT Training ${name}` },
      ]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto max-w-5xl px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-2 text-amber-400 mb-4">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">{name}, {region}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">NDT Training in {name}</h1>
            <p className="text-xl text-slate-300 mb-6 max-w-3xl">{detail}</p>
            <div className="flex flex-wrap gap-3">
              {certStandards.map(cert => (
                <span key={cert} className="bg-white/10 px-3 py-1 rounded-full text-sm">{cert}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Why Train with Atlantis NDT in {name}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "Internationally Recognised", desc: `Certifications earned in ${name} are accepted by major operators and inspection companies worldwide.` },
              { icon: GraduationCap, title: "95% Pass Rate", desc: "Our structured curriculum, hands-on practice, and exam preparation consistently delivers industry-leading pass rates." },
              { icon: TrendingUp, title: "Career Growth", desc: `NDT professionals in ${region} command competitive salaries across oil & gas, aerospace, and manufacturing sectors.` },
              { icon: Users, title: "Expert Instructors", desc: "All courses taught by ASNT Level III certified professionals with 10+ years of field experience." },
              { icon: Clock, title: "Flexible Scheduling", desc: "Weekday, weekend, and intensive formats available. Online theory + in-person practical options." },
              { icon: CheckCircle, title: "Hands-on Training", desc: "Modern equipment, real-world reference specimens, and practical assessments aligned with industry standards." },
            ].map(item => (
              <Card key={item.title} className="border-slate-200">
                <CardHeader className="pb-2">
                  <item.icon className="w-8 h-8 text-[#004aad] mb-2" />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">NDT Courses Available in {name}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {courses.map(course => (
              <Card key={course.method} className="border-slate-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-[#004aad]">{course.method}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-slate-600 space-y-1">
                    <p><strong>Levels:</strong> {course.levels.join(", ")}</p>
                    <p><strong>Duration:</strong> {course.hours}</p>
                    <p><strong>Standard:</strong> {course.standard}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#004aad] text-white">
        <div className="container mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your NDT Career in {name}</h2>
          <p className="text-lg text-blue-100 mb-8">
            Contact us today for course schedules, pricing, and group booking discounts for {name}, {region}.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-[#004aad] hover:bg-slate-100">
              <Link to="/contact">Request Course Schedule</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/training">View All Training Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Sibling-city cross-links (Digital Twin / ERP / Reporting / Consulting) ── */}
      <section className="py-8 bg-white border-t border-slate-200">
        <div className="container mx-auto max-w-6xl px-6">
          <RelatedCityProducts
            currentProduct="training"
            citySlug={citySlug}
            city={name}
          />
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
