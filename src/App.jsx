import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/hero/HeroSection";
import AboutSection from "./components/about/AboutSection";
import ServicesSection from "./components/services/ServicesSection";
import StrengthsSection from "./components/strengths/StrengthsSection";
import CTABanner from "./components/cta/CTABanner";
import WhyChooseUs from "./components/whychoose/WhyChooseUs";
import ClientsSection from "./components/clients/ClientsSection";
import TestimonialsSection from "./components/testimonials/TestimonialsSection";
import FAQSection from "./components/faq/FAQSection";
import CertificationSection from "./components/certification/CertificationSection";
import CTABottomBanner from "./components/certification/CTABottomBanner";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <div className="font-sans bg-[#020710]">
      <Navbar />
      <section id="home"><HeroSection /></section>
      <section id="about"><AboutSection /></section>
      <section id="expertise"><ServicesSection /></section>
      <section id="projects"><StrengthsSection /></section>
      <CTABanner />
      <section id="careers"><WhyChooseUs /></section>
      <ClientsSection />
      <TestimonialsSection />
      <section id="blogs"><FAQSection /></section>
      <CertificationSection />
      <CTABottomBanner />
      <section id="contact"><Footer /></section>
    </div>
  );
}