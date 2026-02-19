import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import ParallaxCTA from "@/components/ParallaxCTA";
import ApproachSection from "@/components/ApproachSection";
import CurriculumSection from "@/components/CurriculumSection";
import LiveClassSchedule from "@/components/LiveClassSchedule";
import FacultySection from "@/components/FacultySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AdmissionsSection from "@/components/AdmissionsSection";
import ParentAccessSection from "@/components/ParentAccessSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroCarousel />
        <AboutSection />
        <ApproachSection />
        <ParallaxCTA />
        <AdmissionsSection />
        <ParentAccessSection />
        <CurriculumSection />
        <LiveClassSchedule />
        <FacultySection />
        <TestimonialsSection />
        <GallerySection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
