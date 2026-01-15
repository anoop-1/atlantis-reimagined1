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
import HoustonServices from "./pages/HoustonServices";
import HyderabadTraining from "./pages/HyderabadTraining";
import MiddleEastServices from "./pages/MiddleEastServices";
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
// Regional Pages - USA
const NDTServicesLosAngeles = lazy(() => import("./pages/ndt-services-los-angeles"));
const NDTServicesDenver = lazy(() => import("./pages/ndt-services-denver"));
const NDTServicesPhiladelphia = lazy(() => import("./pages/ndt-services-philadelphia"));
const NDTServicesChicago = lazy(() => import("./pages/ndt-services-chicago"));
const NDTServicesTexas = lazy(() => import("./pages/ndt-services-texas"));
const NDTServicesNewOrleans = lazy(() => import("./pages/ndt-services-new-orleans"));
// Regional Pages - India
const NDTServicesMumbai = lazy(() => import("./pages/ndt-services-mumbai"));
const NDTServicesChennai = lazy(() => import("./pages/ndt-services-chennai"));
const NDTServicesBangalore = lazy(() => import("./pages/ndt-services-bangalore"));
const NDTServicesDelhi = lazy(() => import("./pages/ndt-services-delhi"));
// Regional Pages - Middle East & International
const NDTServicesDubai = lazy(() => import("./pages/ndt-services-dubai"));
const NDTServicesSaudiArabia = lazy(() => import("./pages/ndt-services-saudi-arabia"));
const NDTServicesQatar = lazy(() => import("./pages/ndt-services-qatar"));
const NDTServicesAbuDhabi = lazy(() => import("./pages/ndt-services-abu-dhabi"));
const NDTServicesSingapore = lazy(() => import("./pages/ndt-services-singapore"));
const NDTServicesCalgary = lazy(() => import("./pages/ndt-services-calgary"));
const NDTServicesKuwait = lazy(() => import("./pages/ndt-services-kuwait"));
const NDTServicesUK = lazy(() => import("./pages/ndt-services-uk"));
const NDTServicesPerth = lazy(() => import("./pages/ndt-services-perth"));
const NDTServicesNorway = lazy(() => import("./pages/ndt-services-norway"));
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
const RTDubai = lazy(() => import("./pages/radiographic-testing-dubai"));
const MTSaudiArabia = lazy(() => import("./pages/magnetic-particle-testing-saudi-arabia"));
const PTLosAngeles = lazy(() => import("./pages/penetrant-testing-los-angeles"));
const ETSingapore = lazy(() => import("./pages/eddy-current-testing-singapore"));
const VTUK = lazy(() => import("./pages/visual-testing-uk"));
const UTMumbai = lazy(() => import("./pages/ultrasonic-testing-mumbai"));
const RTNewOrleans = lazy(() => import("./pages/radiographic-testing-new-orleans"));
const UTQatar = lazy(() => import("./pages/ultrasonic-testing-qatar"));
const ETChennai = lazy(() => import("./pages/eddy-current-testing-chennai"));
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
                  <Route path="/ndt-services-houston" element={<HoustonServices />} />
                  <Route path="/ndt-training-hyderabad" element={<HyderabadTraining />} />
                  <Route path="/ndt-services-middle-east" element={<MiddleEastServices />} />
                  <Route path="/case-studies" element={<CaseStudies />} />
                  <Route path="/blog/digital-twins-ndt-guide" element={<LazyRoute Component={DigitalTwinsNDTGuide} />} />
                  <Route path="/blog/digital-twins-oil-gas" element={<LazyRoute Component={DigitalTwinsOilGas} />} />
                  {/* Regional Pages - USA */}
                  <Route path="/ndt-services-los-angeles" element={<LazyRoute Component={NDTServicesLosAngeles} />} />
                  <Route path="/ndt-services-denver" element={<LazyRoute Component={NDTServicesDenver} />} />
                  <Route path="/ndt-services-philadelphia" element={<LazyRoute Component={NDTServicesPhiladelphia} />} />
                  <Route path="/ndt-services-chicago" element={<LazyRoute Component={NDTServicesChicago} />} />
                  <Route path="/ndt-services-texas" element={<LazyRoute Component={NDTServicesTexas} />} />
                  {/* Regional Pages - India */}
                  <Route path="/ndt-services-mumbai" element={<LazyRoute Component={NDTServicesMumbai} />} />
                  <Route path="/ndt-services-chennai" element={<LazyRoute Component={NDTServicesChennai} />} />
                  <Route path="/ndt-services-bangalore" element={<LazyRoute Component={NDTServicesBangalore} />} />
                  <Route path="/ndt-services-delhi" element={<LazyRoute Component={NDTServicesDelhi} />} />
                  {/* Regional Pages - Middle East & International */}
                  <Route path="/ndt-services-dubai" element={<LazyRoute Component={NDTServicesDubai} />} />
                  <Route path="/ndt-services-saudi-arabia" element={<LazyRoute Component={NDTServicesSaudiArabia} />} />
                  <Route path="/ndt-services-qatar" element={<LazyRoute Component={NDTServicesQatar} />} />
                  <Route path="/ndt-services-abu-dhabi" element={<LazyRoute Component={NDTServicesAbuDhabi} />} />
                  <Route path="/ndt-services-singapore" element={<LazyRoute Component={NDTServicesSingapore} />} />
                  <Route path="/ndt-services-calgary" element={<LazyRoute Component={NDTServicesCalgary} />} />
                  <Route path="/ndt-services-new-orleans" element={<LazyRoute Component={NDTServicesNewOrleans} />} />
                  <Route path="/ndt-services-kuwait" element={<LazyRoute Component={NDTServicesKuwait} />} />
                  <Route path="/ndt-services-uk" element={<LazyRoute Component={NDTServicesUK} />} />
                  <Route path="/ndt-services-perth" element={<LazyRoute Component={NDTServicesPerth} />} />
                  <Route path="/ndt-services-norway" element={<LazyRoute Component={NDTServicesNorway} />} />
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
                  <Route path="/radiographic-testing-dubai" element={<LazyRoute Component={RTDubai} />} />
                  <Route path="/magnetic-particle-testing-saudi-arabia" element={<LazyRoute Component={MTSaudiArabia} />} />
                  <Route path="/penetrant-testing-los-angeles" element={<LazyRoute Component={PTLosAngeles} />} />
                  <Route path="/eddy-current-testing-singapore" element={<LazyRoute Component={ETSingapore} />} />
                  <Route path="/visual-testing-uk" element={<LazyRoute Component={VTUK} />} />
                  <Route path="/ultrasonic-testing-mumbai" element={<LazyRoute Component={UTMumbai} />} />
                  <Route path="/radiographic-testing-new-orleans" element={<LazyRoute Component={RTNewOrleans} />} />
                  <Route path="/ultrasonic-testing-qatar" element={<LazyRoute Component={UTQatar} />} />
                  <Route path="/eddy-current-testing-chennai" element={<LazyRoute Component={ETChennai} />} />
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
                  <Route path="/404" element={<NotFound />} />
                  <Route path="*" element={<NotFound />} />
               </Routes>
            </BrowserRouter>
         </TooltipProvider>
      </QueryClientProvider>
   </AuthProvider>
);

export default App;
