import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Training from "./pages/Training";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import DigitalTwins from "./pages/DigitalTwins";
import Erp from "./pages/Erp";
import NDTConnect from "./pages/NDTConnect";
import BlogPage from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import UltrasonicTesting from "./pages/ultrasonic-testing";
import MagneticParticleTesting from "./pages/magnetic-particle-testing";
import VisualTesting from "./pages/visual-testing";
import RadiographicTesting from "./pages/radiographic-testing";
import EddyCurrentTesting from "./pages/eddy-current-testing";
import PenetrantTesting from "./pages/penetrant-testing";
import ConsultingServices from "./pages/ConsultingServices";
import ConsultingServicesUSA from "./pages/ConsultingServices-USA";
import ConsultingServicesMiddleEast from "./pages/ConsultingServices-ME";
import ConsultingServicesIndia from "./pages/ConsultingServices-India";
import TrainingUSA from "./pages/Training-USA";
import TrainingMiddleEast from "./pages/Training-ME";
import TrainingIndia from "./pages/Training-India";
import FAQPage from "./pages/FAQ";
import NDTMethodsPage from "./pages/NDTMethods";
import HyderabadTraining from "./pages/HyderabadTraining";
import CaseStudies from "./pages/CaseStudies";
import IndustrialAnimation from "./components/IndustrialAnimation";
import { AuthProvider } from "./context/AuthContext";
import { lazy, Suspense } from "react";

// Loading component for lazy-loaded pages - prevents FOUC with solid background
const PageLoader = () => (
   <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
      <div className="text-center">
         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
         <p className="text-muted-foreground">Loading...</p>
      </div>
   </div>
);

// Helper to wrap lazy components with Suspense
const LazyRoute = ({ Component }: { Component: React.LazyExoticComponent<React.ComponentType<any>> }) => (
   <Suspense fallback={<PageLoader />}>
      <Component />
   </Suspense>
);

const DigitalTwinsNDT = lazy(() => import("./pages/digital-twins-ndt"));
const DigitalTwinsNDTGuide = lazy(() => import("./pages/digital-twins-ndt-guide"));
const DigitalTwinsOilGas = lazy(() => import("./pages/digital-twins-oil-gas"));
// Industry Landing Pages
const NDTForOilGas = lazy(() => import("./pages/ndt-for-oil-gas"));
const NDTForAerospace = lazy(() => import("./pages/ndt-for-aerospace"));
const NDTForPowerGeneration = lazy(() => import("./pages/ndt-for-power-generation"));
// Blog Posts
const API653TankInspectionGuide = lazy(() => import("./pages/api-653-tank-inspection-guide"));
const NDTCareerGuide = lazy(() => import("./pages/ndt-career-guide"));
const UTvsRTComparison = lazy(() => import("./pages/ut-vs-rt-comparison"));
// Certification Pages
const API510Certification = lazy(() => import("./pages/api-510-certification"));
const API570Certification = lazy(() => import("./pages/api-570-certification"));
const API653Certification = lazy(() => import("./pages/api-653-certification"));
const ASNTCertification = lazy(() => import("./pages/asnt-certification"));
// Programmatic SEO - Method + Location Pages
const UTHouston = lazy(() => import("./pages/ultrasonic-testing-houston"));
const UTDenver = lazy(() => import("./pages/ultrasonic-testing-denver"));
const UTChicago = lazy(() => import("./pages/ultrasonic-testing-chicago"));
const UTCalgary = lazy(() => import("./pages/ultrasonic-testing-calgary"));
const UTNorway = lazy(() => import("./pages/ultrasonic-testing-norway"));
const UTKuwait = lazy(() => import("./pages/ultrasonic-testing-kuwait"));
const UTAbuDhabi = lazy(() => import("./pages/ultrasonic-testing-abu-dhabi"));
const UTBangalore = lazy(() => import("./pages/ultrasonic-testing-bangalore"));
const UTDelhi = lazy(() => import("./pages/ultrasonic-testing-delhi"));
const UTMumbai = lazy(() => import("./pages/ultrasonic-testing-mumbai"));
const UTQatar = lazy(() => import("./pages/ultrasonic-testing-qatar"));
const RTDubai = lazy(() => import("./pages/radiographic-testing-dubai"));
const RTHouston = lazy(() => import("./pages/radiographic-testing-houston"));
const RTLosAngeles = lazy(() => import("./pages/radiographic-testing-los-angeles"));
const RTSaudiArabia = lazy(() => import("./pages/radiographic-testing-saudi-arabia"));
const RTQatar = lazy(() => import("./pages/radiographic-testing-qatar"));
const RTKuwait = lazy(() => import("./pages/radiographic-testing-kuwait"));
const RTMumbai = lazy(() => import("./pages/radiographic-testing-mumbai"));
const RTChennai = lazy(() => import("./pages/radiographic-testing-chennai"));
const RTUK = lazy(() => import("./pages/radiographic-testing-uk"));
const RTNewOrleans = lazy(() => import("./pages/radiographic-testing-new-orleans"));
const MTSaudiArabia = lazy(() => import("./pages/magnetic-particle-testing-saudi-arabia"));
const MTHouston = lazy(() => import("./pages/magnetic-particle-testing-houston"));
const MTDubai = lazy(() => import("./pages/magnetic-particle-testing-dubai"));
const MTMumbai = lazy(() => import("./pages/magnetic-particle-testing-mumbai"));
const MTSingapore = lazy(() => import("./pages/magnetic-particle-testing-singapore"));
const PTLosAngeles = lazy(() => import("./pages/penetrant-testing-los-angeles"));
const PTHouston = lazy(() => import("./pages/penetrant-testing-houston"));
const PTDubai = lazy(() => import("./pages/penetrant-testing-dubai"));
const PTNewOrleans = lazy(() => import("./pages/penetrant-testing-new-orleans"));
const PTMumbai = lazy(() => import("./pages/penetrant-testing-mumbai"));
const ETSingapore = lazy(() => import("./pages/eddy-current-testing-singapore"));
const ETChennai = lazy(() => import("./pages/eddy-current-testing-chennai"));
const ETHouston = lazy(() => import("./pages/eddy-current-testing-houston"));
const ETDubai = lazy(() => import("./pages/eddy-current-testing-dubai"));
const ETMumbai = lazy(() => import("./pages/eddy-current-testing-mumbai"));
const ETBangalore = lazy(() => import("./pages/eddy-current-testing-bangalore"));
const VTUK = lazy(() => import("./pages/visual-testing-uk"));
const VTHouston = lazy(() => import("./pages/visual-testing-houston"));
const VTDubai = lazy(() => import("./pages/visual-testing-dubai"));
const VTSaudiArabia = lazy(() => import("./pages/visual-testing-saudi-arabia"));
const VTSingapore = lazy(() => import("./pages/visual-testing-singapore"));
// New UT Pages
const UTDubai = lazy(() => import("./pages/ultrasonic-testing-dubai"));
const UTSaudiArabia = lazy(() => import("./pages/ultrasonic-testing-saudi-arabia"));
const UTSingapore = lazy(() => import("./pages/ultrasonic-testing-singapore"));
const UTUK = lazy(() => import("./pages/ultrasonic-testing-uk"));
const UTLosAngeles = lazy(() => import("./pages/ultrasonic-testing-los-angeles"));
const UTNewOrleans = lazy(() => import("./pages/ultrasonic-testing-new-orleans"));
const UTChennai = lazy(() => import("./pages/ultrasonic-testing-chennai"));
// New RT Pages
const RTDenver = lazy(() => import("./pages/radiographic-testing-denver"));
const RTChicago = lazy(() => import("./pages/radiographic-testing-chicago"));
const RTAbuDhabi = lazy(() => import("./pages/radiographic-testing-abu-dhabi"));
const RTBangalore = lazy(() => import("./pages/radiographic-testing-bangalore"));
const RTDelhi = lazy(() => import("./pages/radiographic-testing-delhi"));
const RTSingapore = lazy(() => import("./pages/radiographic-testing-singapore"));
const RTNorway = lazy(() => import("./pages/radiographic-testing-norway"));
const RTCalgary = lazy(() => import("./pages/radiographic-testing-calgary"));
// New MT Pages
const MTLosAngeles = lazy(() => import("./pages/magnetic-particle-testing-los-angeles"));
const MTNewOrleans = lazy(() => import("./pages/magnetic-particle-testing-new-orleans"));
const MTDenver = lazy(() => import("./pages/magnetic-particle-testing-denver"));
const MTChicago = lazy(() => import("./pages/magnetic-particle-testing-chicago"));
const MTQatar = lazy(() => import("./pages/magnetic-particle-testing-qatar"));
const MTKuwait = lazy(() => import("./pages/magnetic-particle-testing-kuwait"));
const MTAbuDhabi = lazy(() => import("./pages/magnetic-particle-testing-abu-dhabi"));
const MTChennai = lazy(() => import("./pages/magnetic-particle-testing-chennai"));
const MTBangalore = lazy(() => import("./pages/magnetic-particle-testing-bangalore"));
const MTDelhi = lazy(() => import("./pages/magnetic-particle-testing-delhi"));
const MTUK = lazy(() => import("./pages/magnetic-particle-testing-uk"));
const MTNorway = lazy(() => import("./pages/magnetic-particle-testing-norway"));
const MTCalgary = lazy(() => import("./pages/magnetic-particle-testing-calgary"));
// New PT Pages
const PTSaudiArabia = lazy(() => import("./pages/penetrant-testing-saudi-arabia"));
const PTQatar = lazy(() => import("./pages/penetrant-testing-qatar"));
const PTKuwait = lazy(() => import("./pages/penetrant-testing-kuwait"));
const PTAbuDhabi = lazy(() => import("./pages/penetrant-testing-abu-dhabi"));
const PTChennai = lazy(() => import("./pages/penetrant-testing-chennai"));
const PTBangalore = lazy(() => import("./pages/penetrant-testing-bangalore"));
const PTDelhi = lazy(() => import("./pages/penetrant-testing-delhi"));
const PTSingapore = lazy(() => import("./pages/penetrant-testing-singapore"));
const PTUK = lazy(() => import("./pages/penetrant-testing-uk"));
const PTNorway = lazy(() => import("./pages/penetrant-testing-norway"));
const PTCalgary = lazy(() => import("./pages/penetrant-testing-calgary"));
const PTDenver = lazy(() => import("./pages/penetrant-testing-denver"));
const PTChicago = lazy(() => import("./pages/penetrant-testing-chicago"));
// New ET Pages
const ETLosAngeles = lazy(() => import("./pages/eddy-current-testing-los-angeles"));
const ETNewOrleans = lazy(() => import("./pages/eddy-current-testing-new-orleans"));
const ETDenver = lazy(() => import("./pages/eddy-current-testing-denver"));
const ETChicago = lazy(() => import("./pages/eddy-current-testing-chicago"));
const ETSaudiArabia = lazy(() => import("./pages/eddy-current-testing-saudi-arabia"));
const ETQatar = lazy(() => import("./pages/eddy-current-testing-qatar"));
const ETKuwait = lazy(() => import("./pages/eddy-current-testing-kuwait"));
const ETAbuDhabi = lazy(() => import("./pages/eddy-current-testing-abu-dhabi"));
const ETDelhi = lazy(() => import("./pages/eddy-current-testing-delhi"));
const ETUK = lazy(() => import("./pages/eddy-current-testing-uk"));
const ETNorway = lazy(() => import("./pages/eddy-current-testing-norway"));
const ETCalgary = lazy(() => import("./pages/eddy-current-testing-calgary"));
// New VT Pages
const VTLosAngeles = lazy(() => import("./pages/visual-testing-los-angeles"));
const VTNewOrleans = lazy(() => import("./pages/visual-testing-new-orleans"));
const VTDenver = lazy(() => import("./pages/visual-testing-denver"));
const VTChicago = lazy(() => import("./pages/visual-testing-chicago"));
const VTQatar = lazy(() => import("./pages/visual-testing-qatar"));
const VTKuwait = lazy(() => import("./pages/visual-testing-kuwait"));
const VTAbuDhabi = lazy(() => import("./pages/visual-testing-abu-dhabi"));
const VTMumbai = lazy(() => import("./pages/visual-testing-mumbai"));
const VTChennai = lazy(() => import("./pages/visual-testing-chennai"));
const VTBangalore = lazy(() => import("./pages/visual-testing-bangalore"));
const VTDelhi = lazy(() => import("./pages/visual-testing-delhi"));
const VTNorway = lazy(() => import("./pages/visual-testing-norway"));
const VTCalgary = lazy(() => import("./pages/visual-testing-calgary"));
// Industry+Service Combo Pages
const OilGasNDTTraining = lazy(() => import("./pages/oil-gas-ndt-training"));
const AerospaceNDTTraining = lazy(() => import("./pages/aerospace-ndt-training"));
const PowerGenerationNDTTraining = lazy(() => import("./pages/power-generation-ndt-training"));
// Training Location Pages
const NDTTrainingUSA = lazy(() => import("./pages/ndt-training-usa"));
const NDTTrainingDubai = lazy(() => import("./pages/ndt-training-dubai"));
const NDTTrainingSaudiArabia = lazy(() => import("./pages/ndt-training-saudi-arabia"));
const NDTTrainingIndia = lazy(() => import("./pages/ndt-training-india"));
const NDTTrainingOnline = lazy(() => import("./pages/ndt-training-online"));
// Product/Solution Pages
const DigitalTwinsOilGasAssets = lazy(() => import("./pages/digital-twins-oil-gas-assets"));
const NDTConsultingLevelIII = lazy(() => import("./pages/ndt-consulting-level-iii"));
const NDTConnectPlatform = lazy(() => import("./pages/ndt-connect-platform"));
const NDTERPSolution = lazy(() => import("./pages/ndt-erp-solution"));
const IntelligentReportingSoftware = lazy(() => import("./pages/intelligent-reporting-software"));
// Location Consulting Pages
const NDTConsultingHouston = lazy(() => import("./pages/ndt-consulting-houston"));
const NDTConsultingLosAngeles = lazy(() => import("./pages/ndt-consulting-los-angeles"));
const NDTConsultingNewOrleans = lazy(() => import("./pages/ndt-consulting-new-orleans"));
const NDTConsultingDenver = lazy(() => import("./pages/ndt-consulting-denver"));
const NDTConsultingChicago = lazy(() => import("./pages/ndt-consulting-chicago"));
const NDTConsultingDubai = lazy(() => import("./pages/ndt-consulting-dubai"));
const NDTConsultingSaudiArabia = lazy(() => import("./pages/ndt-consulting-saudi-arabia"));
const NDTConsultingQatar = lazy(() => import("./pages/ndt-consulting-qatar"));
const NDTConsultingKuwait = lazy(() => import("./pages/ndt-consulting-kuwait"));
const NDTConsultingAbuDhabi = lazy(() => import("./pages/ndt-consulting-abu-dhabi"));
const NDTConsultingMumbai = lazy(() => import("./pages/ndt-consulting-mumbai"));
const NDTConsultingChennai = lazy(() => import("./pages/ndt-consulting-chennai"));
const NDTConsultingBangalore = lazy(() => import("./pages/ndt-consulting-bangalore"));
const NDTConsultingDelhi = lazy(() => import("./pages/ndt-consulting-delhi"));
const NDTConsultingSingapore = lazy(() => import("./pages/ndt-consulting-singapore"));
const NDTConsultingUK = lazy(() => import("./pages/ndt-consulting-uk"));
const NDTConsultingNorway = lazy(() => import("./pages/ndt-consulting-norway"));
const NDTConsultingCalgary = lazy(() => import("./pages/ndt-consulting-calgary"));
// Additional Location Consulting Pages (50 new)
const NDTConsultingSeattle = lazy(() => import("./pages/ndt-consulting-seattle"));
const NDTConsultingDallas = lazy(() => import("./pages/ndt-consulting-dallas"));
const NDTConsultingPhoenix = lazy(() => import("./pages/ndt-consulting-phoenix"));
const NDTConsultingPhiladelphia = lazy(() => import("./pages/ndt-consulting-philadelphia"));
const NDTConsultingSanFrancisco = lazy(() => import("./pages/ndt-consulting-san-francisco"));
const NDTConsultingDetroit = lazy(() => import("./pages/ndt-consulting-detroit"));
const NDTConsultingPittsburgh = lazy(() => import("./pages/ndt-consulting-pittsburgh"));
const NDTConsultingBatonRouge = lazy(() => import("./pages/ndt-consulting-baton-rouge"));
const NDTConsultingCorpusChristi = lazy(() => import("./pages/ndt-consulting-corpus-christi"));
const NDTConsultingTulsa = lazy(() => import("./pages/ndt-consulting-tulsa"));
const NDTConsultingBeaumont = lazy(() => import("./pages/ndt-consulting-beaumont"));
const NDTConsultingBahrain = lazy(() => import("./pages/ndt-consulting-bahrain"));
const NDTConsultingOman = lazy(() => import("./pages/ndt-consulting-oman"));
const NDTConsultingJubail = lazy(() => import("./pages/ndt-consulting-jubail"));
const NDTConsultingYanbu = lazy(() => import("./pages/ndt-consulting-yanbu"));
const NDTConsultingDammam = lazy(() => import("./pages/ndt-consulting-dammam"));
const NDTConsultingKolkata = lazy(() => import("./pages/ndt-consulting-kolkata"));
const NDTConsultingAhmedabad = lazy(() => import("./pages/ndt-consulting-ahmedabad"));
const NDTConsultingJamnagar = lazy(() => import("./pages/ndt-consulting-jamnagar"));
const NDTConsultingVizag = lazy(() => import("./pages/ndt-consulting-vizag"));
const NDTConsultingKochi = lazy(() => import("./pages/ndt-consulting-kochi"));
const NDTConsultingMalaysia = lazy(() => import("./pages/ndt-consulting-malaysia"));
const NDTConsultingIndonesia = lazy(() => import("./pages/ndt-consulting-indonesia"));
const NDTConsultingThailand = lazy(() => import("./pages/ndt-consulting-thailand"));
const NDTConsultingVietnam = lazy(() => import("./pages/ndt-consulting-vietnam"));
const NDTConsultingPhilippines = lazy(() => import("./pages/ndt-consulting-philippines"));
const NDTConsultingSouthKorea = lazy(() => import("./pages/ndt-consulting-south-korea"));
const NDTConsultingJapan = lazy(() => import("./pages/ndt-consulting-japan"));
const NDTConsultingTaiwan = lazy(() => import("./pages/ndt-consulting-taiwan"));
const NDTConsultingAustralia = lazy(() => import("./pages/ndt-consulting-australia"));
const NDTConsultingNewZealand = lazy(() => import("./pages/ndt-consulting-new-zealand"));
const NDTConsultingGermany = lazy(() => import("./pages/ndt-consulting-germany"));
const NDTConsultingNetherlands = lazy(() => import("./pages/ndt-consulting-netherlands"));
const NDTConsultingFrance = lazy(() => import("./pages/ndt-consulting-france"));
const NDTConsultingItaly = lazy(() => import("./pages/ndt-consulting-italy"));
const NDTConsultingSpain = lazy(() => import("./pages/ndt-consulting-spain"));
const NDTConsultingBelgium = lazy(() => import("./pages/ndt-consulting-belgium"));
const NDTConsultingScotland = lazy(() => import("./pages/ndt-consulting-scotland"));
const NDTConsultingAberdeen = lazy(() => import("./pages/ndt-consulting-aberdeen"));
const NDTConsultingEdmonton = lazy(() => import("./pages/ndt-consulting-edmonton"));
const NDTConsultingToronto = lazy(() => import("./pages/ndt-consulting-toronto"));
const NDTConsultingVancouver = lazy(() => import("./pages/ndt-consulting-vancouver"));
const NDTConsultingMexicoCity = lazy(() => import("./pages/ndt-consulting-mexico-city"));
const NDTConsultingBrazil = lazy(() => import("./pages/ndt-consulting-brazil"));
const NDTConsultingArgentina = lazy(() => import("./pages/ndt-consulting-argentina"));
const NDTConsultingColombia = lazy(() => import("./pages/ndt-consulting-colombia"));
const NDTConsultingTrinidad = lazy(() => import("./pages/ndt-consulting-trinidad"));
const NDTConsultingNigeria = lazy(() => import("./pages/ndt-consulting-nigeria"));
const NDTConsultingSouthAfrica = lazy(() => import("./pages/ndt-consulting-south-africa"));
const NDTConsultingEgypt = lazy(() => import("./pages/ndt-consulting-egypt"));
const NDTConsultingAngola = lazy(() => import("./pages/ndt-consulting-angola"));
const NDTConsultingAlgeria = lazy(() => import("./pages/ndt-consulting-algeria"));
// Resource Pages
const ResourcesDownloads = lazy(() => import("./pages/resources-downloads"));
const PressMedia = lazy(() => import("./pages/press-media"));
const queryClient = new QueryClient();

const App = () => (
   <AuthProvider>
      <QueryClientProvider client={queryClient}>
         <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
               <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/industry" element={<IndustrialAnimation />} />
                  <Route path="/training" element={<Training />} />
                  <Route path="/training-usa" element={<TrainingUSA />} />
                  <Route path="/training-me" element={<TrainingMiddleEast />} />
                  <Route path="/training-india" element={<TrainingIndia />} />
                  <Route path="/consulting" element={<ConsultingServices />} />
                  <Route path="/consulting-usa" element={<ConsultingServicesUSA />} />
                  <Route path="/consulting-me" element={<ConsultingServicesMiddleEast />} />
                  <Route path="/consulting-india" element={<ConsultingServicesIndia />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/blog/:slug" element={<BlogDetail />} />
                  <Route
                     path="/blog/ultrasonic-testing"
                     element={<UltrasonicTesting />}
                  />
                  <Route
                     path="/blog/magnetic-particle-testing"
                     element={<MagneticParticleTesting />}
                  />
                  <Route path="/blog/visual-testing" element={<VisualTesting />} />
                  <Route
                     path="/blog/radiographic-testing"
                     element={<RadiographicTesting />}
                  />
                  <Route
                     path="/blog/eddy-current-testing"
                     element={<EddyCurrentTesting />}
                  />
                  <Route
                     path="/blog/penetrant-testing"
                     element={<PenetrantTesting />}
                  />
                  <Route
                     path="/digital-twins"
                     element={<DigitalTwins />}
                  />
                  <Route path="/erp" element={<Erp />} />
                  <Route path="/ndt-connect" element={<NDTConnect />} />
                  <Route path="/admin/login" element={<AdminLogin />} />
                  <Route path="/admin/dashboard" element={<AdminDashboard />} />
                  <Route path="/faq" element={<FAQPage />} />
                  <Route path="/ndt-methods" element={<NDTMethodsPage />} />
                  <Route path="/ndt-training-hyderabad" element={<HyderabadTraining />} />
                  <Route path="/case-studies" element={<CaseStudies />} />
                  <Route path="/blog/digital-twins-ndt-guide" element={<LazyRoute Component={DigitalTwinsNDTGuide} />} />
                  <Route path="/blog/digital-twins-oil-gas" element={<LazyRoute Component={DigitalTwinsOilGas} />} />
                  {/* Industry Landing Pages */}
                  <Route path="/ndt-for-oil-gas" element={<LazyRoute Component={NDTForOilGas} />} />
                  <Route path="/ndt-for-aerospace" element={<LazyRoute Component={NDTForAerospace} />} />
                  <Route path="/ndt-for-power-generation" element={<LazyRoute Component={NDTForPowerGeneration} />} />
                  {/* Blog Posts */}
                  <Route path="/blog/api-653-tank-inspection-guide" element={<LazyRoute Component={API653TankInspectionGuide} />} />
                  <Route path="/blog/ndt-career-guide" element={<LazyRoute Component={NDTCareerGuide} />} />
                  <Route path="/blog/ut-vs-rt-comparison" element={<LazyRoute Component={UTvsRTComparison} />} />
                  {/* Certification Pages */}
                  <Route path="/api-510-certification" element={<LazyRoute Component={API510Certification} />} />
                  <Route path="/api-570-certification" element={<LazyRoute Component={API570Certification} />} />
                  <Route path="/api-653-certification" element={<LazyRoute Component={API653Certification} />} />
                  <Route path="/asnt-certification" element={<LazyRoute Component={ASNTCertification} />} />
                  {/* Programmatic SEO - Method + Location Pages */}
                  <Route path="/ultrasonic-testing-houston" element={<LazyRoute Component={UTHouston} />} />
                  <Route path="/ultrasonic-testing-denver" element={<LazyRoute Component={UTDenver} />} />
                  <Route path="/ultrasonic-testing-chicago" element={<LazyRoute Component={UTChicago} />} />
                  <Route path="/ultrasonic-testing-calgary" element={<LazyRoute Component={UTCalgary} />} />
                  <Route path="/ultrasonic-testing-norway" element={<LazyRoute Component={UTNorway} />} />
                  <Route path="/ultrasonic-testing-kuwait" element={<LazyRoute Component={UTKuwait} />} />
                  <Route path="/ultrasonic-testing-abu-dhabi" element={<LazyRoute Component={UTAbuDhabi} />} />
                  <Route path="/ultrasonic-testing-bangalore" element={<LazyRoute Component={UTBangalore} />} />
                  <Route path="/ultrasonic-testing-delhi" element={<LazyRoute Component={UTDelhi} />} />
                  <Route path="/ultrasonic-testing-mumbai" element={<LazyRoute Component={UTMumbai} />} />
                  <Route path="/ultrasonic-testing-qatar" element={<LazyRoute Component={UTQatar} />} />
                  <Route path="/radiographic-testing-dubai" element={<LazyRoute Component={RTDubai} />} />
                  <Route path="/radiographic-testing-houston" element={<LazyRoute Component={RTHouston} />} />
                  <Route path="/radiographic-testing-los-angeles" element={<LazyRoute Component={RTLosAngeles} />} />
                  <Route path="/radiographic-testing-saudi-arabia" element={<LazyRoute Component={RTSaudiArabia} />} />
                  <Route path="/radiographic-testing-qatar" element={<LazyRoute Component={RTQatar} />} />
                  <Route path="/radiographic-testing-kuwait" element={<LazyRoute Component={RTKuwait} />} />
                  <Route path="/radiographic-testing-mumbai" element={<LazyRoute Component={RTMumbai} />} />
                  <Route path="/radiographic-testing-chennai" element={<LazyRoute Component={RTChennai} />} />
                  <Route path="/radiographic-testing-uk" element={<LazyRoute Component={RTUK} />} />
                  <Route path="/radiographic-testing-new-orleans" element={<LazyRoute Component={RTNewOrleans} />} />
                  <Route path="/magnetic-particle-testing-saudi-arabia" element={<LazyRoute Component={MTSaudiArabia} />} />
                  <Route path="/magnetic-particle-testing-houston" element={<LazyRoute Component={MTHouston} />} />
                  <Route path="/magnetic-particle-testing-dubai" element={<LazyRoute Component={MTDubai} />} />
                  <Route path="/magnetic-particle-testing-mumbai" element={<LazyRoute Component={MTMumbai} />} />
                  <Route path="/magnetic-particle-testing-singapore" element={<LazyRoute Component={MTSingapore} />} />
                  <Route path="/penetrant-testing-los-angeles" element={<LazyRoute Component={PTLosAngeles} />} />
                  <Route path="/penetrant-testing-houston" element={<LazyRoute Component={PTHouston} />} />
                  <Route path="/penetrant-testing-dubai" element={<LazyRoute Component={PTDubai} />} />
                  <Route path="/penetrant-testing-new-orleans" element={<LazyRoute Component={PTNewOrleans} />} />
                  <Route path="/penetrant-testing-mumbai" element={<LazyRoute Component={PTMumbai} />} />
                  <Route path="/eddy-current-testing-singapore" element={<LazyRoute Component={ETSingapore} />} />
                  <Route path="/eddy-current-testing-chennai" element={<LazyRoute Component={ETChennai} />} />
                  <Route path="/eddy-current-testing-houston" element={<LazyRoute Component={ETHouston} />} />
                  <Route path="/eddy-current-testing-dubai" element={<LazyRoute Component={ETDubai} />} />
                  <Route path="/eddy-current-testing-mumbai" element={<LazyRoute Component={ETMumbai} />} />
                  <Route path="/eddy-current-testing-bangalore" element={<LazyRoute Component={ETBangalore} />} />
                  <Route path="/visual-testing-uk" element={<LazyRoute Component={VTUK} />} />
                  <Route path="/visual-testing-houston" element={<LazyRoute Component={VTHouston} />} />
                  <Route path="/visual-testing-dubai" element={<LazyRoute Component={VTDubai} />} />
                  <Route path="/visual-testing-saudi-arabia" element={<LazyRoute Component={VTSaudiArabia} />} />
                  <Route path="/visual-testing-singapore" element={<LazyRoute Component={VTSingapore} />} />
                  {/* Training Location Pages */}
                  <Route path="/ndt-training-usa" element={<LazyRoute Component={NDTTrainingUSA} />} />
                  <Route path="/ndt-training-dubai" element={<LazyRoute Component={NDTTrainingDubai} />} />
                  <Route path="/ndt-training-saudi-arabia" element={<LazyRoute Component={NDTTrainingSaudiArabia} />} />
                  <Route path="/ndt-training-india" element={<LazyRoute Component={NDTTrainingIndia} />} />
                  <Route path="/ndt-training-online" element={<LazyRoute Component={NDTTrainingOnline} />} />
                  {/* Product/Solution Pages */}
                  <Route path="/digital-twins-oil-gas-assets" element={<LazyRoute Component={DigitalTwinsOilGasAssets} />} />
                  <Route path="/ndt-consulting-level-iii" element={<LazyRoute Component={NDTConsultingLevelIII} />} />
                  <Route path="/ndt-connect-platform" element={<LazyRoute Component={NDTConnectPlatform} />} />
                  <Route path="/ndt-erp-solution" element={<LazyRoute Component={NDTERPSolution} />} />
                  <Route path="/intelligent-reporting-software" element={<LazyRoute Component={IntelligentReportingSoftware} />} />
                  {/* Location Consulting Pages */}
                  <Route path="/ndt-consulting-houston" element={<LazyRoute Component={NDTConsultingHouston} />} />
                  <Route path="/ndt-consulting-los-angeles" element={<LazyRoute Component={NDTConsultingLosAngeles} />} />
                  <Route path="/ndt-consulting-new-orleans" element={<LazyRoute Component={NDTConsultingNewOrleans} />} />
                  <Route path="/ndt-consulting-denver" element={<LazyRoute Component={NDTConsultingDenver} />} />
                  <Route path="/ndt-consulting-chicago" element={<LazyRoute Component={NDTConsultingChicago} />} />
                  <Route path="/ndt-consulting-dubai" element={<LazyRoute Component={NDTConsultingDubai} />} />
                  <Route path="/ndt-consulting-saudi-arabia" element={<LazyRoute Component={NDTConsultingSaudiArabia} />} />
                  <Route path="/ndt-consulting-qatar" element={<LazyRoute Component={NDTConsultingQatar} />} />
                  <Route path="/ndt-consulting-kuwait" element={<LazyRoute Component={NDTConsultingKuwait} />} />
                  <Route path="/ndt-consulting-abu-dhabi" element={<LazyRoute Component={NDTConsultingAbuDhabi} />} />
                  <Route path="/ndt-consulting-mumbai" element={<LazyRoute Component={NDTConsultingMumbai} />} />
                  <Route path="/ndt-consulting-chennai" element={<LazyRoute Component={NDTConsultingChennai} />} />
                  <Route path="/ndt-consulting-bangalore" element={<LazyRoute Component={NDTConsultingBangalore} />} />
                  <Route path="/ndt-consulting-delhi" element={<LazyRoute Component={NDTConsultingDelhi} />} />
                  <Route path="/ndt-consulting-singapore" element={<LazyRoute Component={NDTConsultingSingapore} />} />
                  <Route path="/ndt-consulting-uk" element={<LazyRoute Component={NDTConsultingUK} />} />
                  <Route path="/ndt-consulting-norway" element={<LazyRoute Component={NDTConsultingNorway} />} />
                  <Route path="/ndt-consulting-calgary" element={<LazyRoute Component={NDTConsultingCalgary} />} />
                  {/* Additional Location Consulting Pages (50 new) */}
                  <Route path="/ndt-consulting-seattle" element={<LazyRoute Component={NDTConsultingSeattle} />} />
                  <Route path="/ndt-consulting-dallas" element={<LazyRoute Component={NDTConsultingDallas} />} />
                  <Route path="/ndt-consulting-phoenix" element={<LazyRoute Component={NDTConsultingPhoenix} />} />
                  <Route path="/ndt-consulting-philadelphia" element={<LazyRoute Component={NDTConsultingPhiladelphia} />} />
                  <Route path="/ndt-consulting-san-francisco" element={<LazyRoute Component={NDTConsultingSanFrancisco} />} />
                  <Route path="/ndt-consulting-detroit" element={<LazyRoute Component={NDTConsultingDetroit} />} />
                  <Route path="/ndt-consulting-pittsburgh" element={<LazyRoute Component={NDTConsultingPittsburgh} />} />
                  <Route path="/ndt-consulting-baton-rouge" element={<LazyRoute Component={NDTConsultingBatonRouge} />} />
                  <Route path="/ndt-consulting-corpus-christi" element={<LazyRoute Component={NDTConsultingCorpusChristi} />} />
                  <Route path="/ndt-consulting-tulsa" element={<LazyRoute Component={NDTConsultingTulsa} />} />
                  <Route path="/ndt-consulting-beaumont" element={<LazyRoute Component={NDTConsultingBeaumont} />} />
                  <Route path="/ndt-consulting-bahrain" element={<LazyRoute Component={NDTConsultingBahrain} />} />
                  <Route path="/ndt-consulting-oman" element={<LazyRoute Component={NDTConsultingOman} />} />
                  <Route path="/ndt-consulting-jubail" element={<LazyRoute Component={NDTConsultingJubail} />} />
                  <Route path="/ndt-consulting-yanbu" element={<LazyRoute Component={NDTConsultingYanbu} />} />
                  <Route path="/ndt-consulting-dammam" element={<LazyRoute Component={NDTConsultingDammam} />} />
                  <Route path="/ndt-consulting-kolkata" element={<LazyRoute Component={NDTConsultingKolkata} />} />
                  <Route path="/ndt-consulting-ahmedabad" element={<LazyRoute Component={NDTConsultingAhmedabad} />} />
                  <Route path="/ndt-consulting-jamnagar" element={<LazyRoute Component={NDTConsultingJamnagar} />} />
                  <Route path="/ndt-consulting-vizag" element={<LazyRoute Component={NDTConsultingVizag} />} />
                  <Route path="/ndt-consulting-kochi" element={<LazyRoute Component={NDTConsultingKochi} />} />
                  <Route path="/ndt-consulting-malaysia" element={<LazyRoute Component={NDTConsultingMalaysia} />} />
                  <Route path="/ndt-consulting-indonesia" element={<LazyRoute Component={NDTConsultingIndonesia} />} />
                  <Route path="/ndt-consulting-thailand" element={<LazyRoute Component={NDTConsultingThailand} />} />
                  <Route path="/ndt-consulting-vietnam" element={<LazyRoute Component={NDTConsultingVietnam} />} />
                  <Route path="/ndt-consulting-philippines" element={<LazyRoute Component={NDTConsultingPhilippines} />} />
                  <Route path="/ndt-consulting-south-korea" element={<LazyRoute Component={NDTConsultingSouthKorea} />} />
                  <Route path="/ndt-consulting-japan" element={<LazyRoute Component={NDTConsultingJapan} />} />
                  <Route path="/ndt-consulting-taiwan" element={<LazyRoute Component={NDTConsultingTaiwan} />} />
                  <Route path="/ndt-consulting-australia" element={<LazyRoute Component={NDTConsultingAustralia} />} />
                  <Route path="/ndt-consulting-new-zealand" element={<LazyRoute Component={NDTConsultingNewZealand} />} />
                  <Route path="/ndt-consulting-germany" element={<LazyRoute Component={NDTConsultingGermany} />} />
                  <Route path="/ndt-consulting-netherlands" element={<LazyRoute Component={NDTConsultingNetherlands} />} />
                  <Route path="/ndt-consulting-france" element={<LazyRoute Component={NDTConsultingFrance} />} />
                  <Route path="/ndt-consulting-italy" element={<LazyRoute Component={NDTConsultingItaly} />} />
                  <Route path="/ndt-consulting-spain" element={<LazyRoute Component={NDTConsultingSpain} />} />
                  <Route path="/ndt-consulting-belgium" element={<LazyRoute Component={NDTConsultingBelgium} />} />
                  <Route path="/ndt-consulting-scotland" element={<LazyRoute Component={NDTConsultingScotland} />} />
                  <Route path="/ndt-consulting-aberdeen" element={<LazyRoute Component={NDTConsultingAberdeen} />} />
                  <Route path="/ndt-consulting-edmonton" element={<LazyRoute Component={NDTConsultingEdmonton} />} />
                  <Route path="/ndt-consulting-toronto" element={<LazyRoute Component={NDTConsultingToronto} />} />
                  <Route path="/ndt-consulting-vancouver" element={<LazyRoute Component={NDTConsultingVancouver} />} />
                  <Route path="/ndt-consulting-mexico-city" element={<LazyRoute Component={NDTConsultingMexicoCity} />} />
                  <Route path="/ndt-consulting-brazil" element={<LazyRoute Component={NDTConsultingBrazil} />} />
                  <Route path="/ndt-consulting-argentina" element={<LazyRoute Component={NDTConsultingArgentina} />} />
                  <Route path="/ndt-consulting-colombia" element={<LazyRoute Component={NDTConsultingColombia} />} />
                  <Route path="/ndt-consulting-trinidad" element={<LazyRoute Component={NDTConsultingTrinidad} />} />
                  <Route path="/ndt-consulting-nigeria" element={<LazyRoute Component={NDTConsultingNigeria} />} />
                  <Route path="/ndt-consulting-south-africa" element={<LazyRoute Component={NDTConsultingSouthAfrica} />} />
                  <Route path="/ndt-consulting-egypt" element={<LazyRoute Component={NDTConsultingEgypt} />} />
                  <Route path="/ndt-consulting-angola" element={<LazyRoute Component={NDTConsultingAngola} />} />
                  <Route path="/ndt-consulting-algeria" element={<LazyRoute Component={NDTConsultingAlgeria} />} />
                  {/* Resource Pages */}
                  <Route path="/resources" element={<LazyRoute Component={ResourcesDownloads} />} />
                  <Route path="/press" element={<LazyRoute Component={PressMedia} />} />
                  {/* New UT Routes */}
                  <Route path="/ultrasonic-testing-dubai" element={<LazyRoute Component={UTDubai} />} />
                  <Route path="/ultrasonic-testing-saudi-arabia" element={<LazyRoute Component={UTSaudiArabia} />} />
                  <Route path="/ultrasonic-testing-singapore" element={<LazyRoute Component={UTSingapore} />} />
                  <Route path="/ultrasonic-testing-uk" element={<LazyRoute Component={UTUK} />} />
                  <Route path="/ultrasonic-testing-los-angeles" element={<LazyRoute Component={UTLosAngeles} />} />
                  <Route path="/ultrasonic-testing-new-orleans" element={<LazyRoute Component={UTNewOrleans} />} />
                  <Route path="/ultrasonic-testing-chennai" element={<LazyRoute Component={UTChennai} />} />
                  {/* New RT Routes */}
                  <Route path="/radiographic-testing-denver" element={<LazyRoute Component={RTDenver} />} />
                  <Route path="/radiographic-testing-chicago" element={<LazyRoute Component={RTChicago} />} />
                  <Route path="/radiographic-testing-abu-dhabi" element={<LazyRoute Component={RTAbuDhabi} />} />
                  <Route path="/radiographic-testing-bangalore" element={<LazyRoute Component={RTBangalore} />} />
                  <Route path="/radiographic-testing-delhi" element={<LazyRoute Component={RTDelhi} />} />
                  <Route path="/radiographic-testing-singapore" element={<LazyRoute Component={RTSingapore} />} />
                  <Route path="/radiographic-testing-norway" element={<LazyRoute Component={RTNorway} />} />
                  <Route path="/radiographic-testing-calgary" element={<LazyRoute Component={RTCalgary} />} />
                  {/* New MT Routes */}
                  <Route path="/magnetic-particle-testing-los-angeles" element={<LazyRoute Component={MTLosAngeles} />} />
                  <Route path="/magnetic-particle-testing-new-orleans" element={<LazyRoute Component={MTNewOrleans} />} />
                  <Route path="/magnetic-particle-testing-denver" element={<LazyRoute Component={MTDenver} />} />
                  <Route path="/magnetic-particle-testing-chicago" element={<LazyRoute Component={MTChicago} />} />
                  <Route path="/magnetic-particle-testing-qatar" element={<LazyRoute Component={MTQatar} />} />
                  <Route path="/magnetic-particle-testing-kuwait" element={<LazyRoute Component={MTKuwait} />} />
                  <Route path="/magnetic-particle-testing-abu-dhabi" element={<LazyRoute Component={MTAbuDhabi} />} />
                  <Route path="/magnetic-particle-testing-chennai" element={<LazyRoute Component={MTChennai} />} />
                  <Route path="/magnetic-particle-testing-bangalore" element={<LazyRoute Component={MTBangalore} />} />
                  <Route path="/magnetic-particle-testing-delhi" element={<LazyRoute Component={MTDelhi} />} />
                  <Route path="/magnetic-particle-testing-uk" element={<LazyRoute Component={MTUK} />} />
                  <Route path="/magnetic-particle-testing-norway" element={<LazyRoute Component={MTNorway} />} />
                  <Route path="/magnetic-particle-testing-calgary" element={<LazyRoute Component={MTCalgary} />} />
                  {/* New PT Routes */}
                  <Route path="/penetrant-testing-saudi-arabia" element={<LazyRoute Component={PTSaudiArabia} />} />
                  <Route path="/penetrant-testing-qatar" element={<LazyRoute Component={PTQatar} />} />
                  <Route path="/penetrant-testing-kuwait" element={<LazyRoute Component={PTKuwait} />} />
                  <Route path="/penetrant-testing-abu-dhabi" element={<LazyRoute Component={PTAbuDhabi} />} />
                  <Route path="/penetrant-testing-chennai" element={<LazyRoute Component={PTChennai} />} />
                  <Route path="/penetrant-testing-bangalore" element={<LazyRoute Component={PTBangalore} />} />
                  <Route path="/penetrant-testing-delhi" element={<LazyRoute Component={PTDelhi} />} />
                  <Route path="/penetrant-testing-singapore" element={<LazyRoute Component={PTSingapore} />} />
                  <Route path="/penetrant-testing-uk" element={<LazyRoute Component={PTUK} />} />
                  <Route path="/penetrant-testing-norway" element={<LazyRoute Component={PTNorway} />} />
                  <Route path="/penetrant-testing-calgary" element={<LazyRoute Component={PTCalgary} />} />
                  <Route path="/penetrant-testing-denver" element={<LazyRoute Component={PTDenver} />} />
                  <Route path="/penetrant-testing-chicago" element={<LazyRoute Component={PTChicago} />} />
                  {/* New ET Routes */}
                  <Route path="/eddy-current-testing-los-angeles" element={<LazyRoute Component={ETLosAngeles} />} />
                  <Route path="/eddy-current-testing-new-orleans" element={<LazyRoute Component={ETNewOrleans} />} />
                  <Route path="/eddy-current-testing-denver" element={<LazyRoute Component={ETDenver} />} />
                  <Route path="/eddy-current-testing-chicago" element={<LazyRoute Component={ETChicago} />} />
                  <Route path="/eddy-current-testing-saudi-arabia" element={<LazyRoute Component={ETSaudiArabia} />} />
                  <Route path="/eddy-current-testing-qatar" element={<LazyRoute Component={ETQatar} />} />
                  <Route path="/eddy-current-testing-kuwait" element={<LazyRoute Component={ETKuwait} />} />
                  <Route path="/eddy-current-testing-abu-dhabi" element={<LazyRoute Component={ETAbuDhabi} />} />
                  <Route path="/eddy-current-testing-delhi" element={<LazyRoute Component={ETDelhi} />} />
                  <Route path="/eddy-current-testing-uk" element={<LazyRoute Component={ETUK} />} />
                  <Route path="/eddy-current-testing-norway" element={<LazyRoute Component={ETNorway} />} />
                  <Route path="/eddy-current-testing-calgary" element={<LazyRoute Component={ETCalgary} />} />
                  {/* New VT Routes */}
                  <Route path="/visual-testing-los-angeles" element={<LazyRoute Component={VTLosAngeles} />} />
                  <Route path="/visual-testing-new-orleans" element={<LazyRoute Component={VTNewOrleans} />} />
                  <Route path="/visual-testing-denver" element={<LazyRoute Component={VTDenver} />} />
                  <Route path="/visual-testing-chicago" element={<LazyRoute Component={VTChicago} />} />
                  <Route path="/visual-testing-qatar" element={<LazyRoute Component={VTQatar} />} />
                  <Route path="/visual-testing-kuwait" element={<LazyRoute Component={VTKuwait} />} />
                  <Route path="/visual-testing-abu-dhabi" element={<LazyRoute Component={VTAbuDhabi} />} />
                  <Route path="/visual-testing-mumbai" element={<LazyRoute Component={VTMumbai} />} />
                  <Route path="/visual-testing-chennai" element={<LazyRoute Component={VTChennai} />} />
                  <Route path="/visual-testing-bangalore" element={<LazyRoute Component={VTBangalore} />} />
                  <Route path="/visual-testing-delhi" element={<LazyRoute Component={VTDelhi} />} />
                  <Route path="/visual-testing-norway" element={<LazyRoute Component={VTNorway} />} />
                  <Route path="/visual-testing-calgary" element={<LazyRoute Component={VTCalgary} />} />
                  {/* Industry+Service Combo Pages */}
                  <Route path="/oil-gas-ndt-training" element={<LazyRoute Component={OilGasNDTTraining} />} />
                  <Route path="/aerospace-ndt-training" element={<LazyRoute Component={AerospaceNDTTraining} />} />
                  <Route path="/power-generation-ndt-training" element={<LazyRoute Component={PowerGenerationNDTTraining} />} />
                  <Route path="/404" element={<NotFound />} />
                  <Route path="*" element={<NotFound />} />
               </Routes>
            </BrowserRouter>
         </TooltipProvider>
      </QueryClientProvider>
   </AuthProvider>
);

export default App;
