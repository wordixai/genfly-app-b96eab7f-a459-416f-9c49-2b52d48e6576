import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import VideoSection from "../components/VideoSection";
import AboutSection from "../components/AboutSection";
import FeaturedSection from "../components/FeaturedSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <VideoSection />
        <AboutSection />
        <FeaturedSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;