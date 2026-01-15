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
import { lazy } from "react";

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
                  <Route path="/blog/digital-twins-ndt-guide" element={<DigitalTwinsNDTGuide />} />
                  <Route path="/blog/digital-twins-oil-gas" element={<DigitalTwinsOilGas />} />
                  {/* Regional Pages - USA */}
                  <Route path="/ndt-services-los-angeles" element={<NDTServicesLosAngeles />} />
                  <Route path="/ndt-services-denver" element={<NDTServicesDenver />} />
                  <Route path="/ndt-services-philadelphia" element={<NDTServicesPhiladelphia />} />
                  <Route path="/ndt-services-chicago" element={<NDTServicesChicago />} />
                  <Route path="/ndt-services-texas" element={<NDTServicesTexas />} />
                  {/* Regional Pages - India */}
                  <Route path="/ndt-services-mumbai" element={<NDTServicesMumbai />} />
                  <Route path="/ndt-services-chennai" element={<NDTServicesChennai />} />
                  <Route path="/ndt-services-bangalore" element={<NDTServicesBangalore />} />
                  <Route path="/ndt-services-delhi" element={<NDTServicesDelhi />} />
                  {/* Regional Pages - Middle East & International */}
                  <Route path="/ndt-services-dubai" element={<NDTServicesDubai />} />
                  <Route path="/ndt-services-saudi-arabia" element={<NDTServicesSaudiArabia />} />
                  <Route path="/ndt-services-qatar" element={<NDTServicesQatar />} />
                  <Route path="/ndt-services-abu-dhabi" element={<NDTServicesAbuDhabi />} />
                  <Route path="/ndt-services-singapore" element={<NDTServicesSingapore />} />
                  <Route path="/ndt-services-calgary" element={<NDTServicesCalgary />} />
                  <Route path="/ndt-services-new-orleans" element={<NDTServicesNewOrleans />} />
                  <Route path="/ndt-services-kuwait" element={<NDTServicesKuwait />} />
                  <Route path="/ndt-services-uk" element={<NDTServicesUK />} />
                  <Route path="/ndt-services-perth" element={<NDTServicesPerth />} />
                  <Route path="/ndt-services-norway" element={<NDTServicesNorway />} />
                  {/* Industry Landing Pages */}
                  <Route path="/ndt-for-oil-gas" element={<NDTForOilGas />} />
                  <Route path="/ndt-for-aerospace" element={<NDTForAerospace />} />
                  <Route path="/ndt-for-power-generation" element={<NDTForPowerGeneration />} />
                  {/* Blog Posts */}
                  <Route path="/blog/api-653-tank-inspection-guide" element={<API653TankInspectionGuide />} />
                  <Route path="/blog/ndt-career-guide" element={<NDTCareerGuide />} />
                  <Route path="/blog/ut-vs-rt-comparison" element={<UTvsRTComparison />} />
                  {/* Certification Pages */}
                  <Route path="/api-510-certification" element={<API510Certification />} />
                  <Route path="/api-570-certification" element={<API570Certification />} />
                  <Route path="/api-653-certification" element={<API653Certification />} />
                  <Route path="/asnt-certification" element={<ASNTCertification />} />
                  {/* Programmatic SEO - Method + Location Pages */}
                  <Route path="/ultrasonic-testing-houston" element={<UTHouston />} />
                  <Route path="/radiographic-testing-dubai" element={<RTDubai />} />
                  <Route path="/magnetic-particle-testing-saudi-arabia" element={<MTSaudiArabia />} />
                  <Route path="/penetrant-testing-los-angeles" element={<PTLosAngeles />} />
                  <Route path="/eddy-current-testing-singapore" element={<ETSingapore />} />
                  <Route path="/visual-testing-uk" element={<VTUK />} />
                  <Route path="/ultrasonic-testing-mumbai" element={<UTMumbai />} />
                  <Route path="/radiographic-testing-new-orleans" element={<RTNewOrleans />} />
                  <Route path="/ultrasonic-testing-qatar" element={<UTQatar />} />
                  <Route path="/eddy-current-testing-chennai" element={<ETChennai />} />
                  {/* Training Location Pages */}
                  <Route path="/ndt-training-usa" element={<NDTTrainingUSA />} />
                  <Route path="/ndt-training-dubai" element={<NDTTrainingDubai />} />
                  <Route path="/ndt-training-saudi-arabia" element={<NDTTrainingSaudiArabia />} />
                  <Route path="/ndt-training-india" element={<NDTTrainingIndia />} />
                  <Route path="/ndt-training-online" element={<NDTTrainingOnline />} />
                  {/* Product/Solution Pages */}
                  <Route path="/digital-twins-oil-gas-assets" element={<DigitalTwinsOilGasAssets />} />
                  <Route path="/ndt-consulting-level-iii" element={<NDTConsultingLevelIII />} />
                  <Route path="/ndt-connect-platform" element={<NDTConnectPlatform />} />
                  <Route path="/ndt-erp-solution" element={<NDTERPSolution />} />
                  <Route path="/404" element={<NotFound />} />
                  <Route path="*" element={<NotFound />} />
               </Routes>
            </BrowserRouter>
         </TooltipProvider>
      </QueryClientProvider>
   </AuthProvider>
);

export default App;
