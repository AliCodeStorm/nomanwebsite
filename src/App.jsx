import { Routes, Route } from "react-router-dom";
import HeroSection from "./components/Section/HeroSection";
import About from "./pages/AboutPage";
import Services from "./pages/ServicesPage";
import Contact from "./pages/ContactPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import ServiceDetail from "./pages/ServiceDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="/termsandconditions" element={<TermsAndConditions />} />
      <Route path="/services/:slug" element={<ServiceDetail />} />
    </Routes>
  );
}
