import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './sections/Navigation';
import HeroSection from './sections/HeroSection';
import ProductsSection from './sections/ProductsSection';
import HowItWorksSection from './sections/HowItWorksSection';
import ReviewsSection from './sections/ReviewsSection';
import ClaimAssistanceSection from './sections/ClaimAssistanceSection';
import Footer from './sections/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Refresh ScrollTrigger on load to ensure correct positions
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="relative">
      <Navigation />
      <main>
        <HeroSection />
        <ProductsSection />
        <HowItWorksSection />
        <ReviewsSection />
        <ClaimAssistanceSection />
      </main>
      <Footer />
    </div>
  );
}
