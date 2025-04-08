
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustedLogos from '@/components/TrustedLogos';
import Benefits from '@/components/Benefits';
import UseCase from '@/components/UseCase';
import Integrations from '@/components/Integrations';
import Products from '@/components/Products';
import FAQs from '@/components/FAQs';
import Footer from '@/components/Footer';

const Index = () => {
  const location = useLocation();
  const initialized = useRef(false);

  useEffect(() => {
    // Handle scrolling to sections when navigating from other pages
    if (location.state && location.state.scrollTo && !initialized.current) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      initialized.current = true;
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      <div id="home">
        <Hero />
      </div>
      <TrustedLogos />
      <div id="benefits">
        <Benefits />
      </div>
      <Products />
      <div id="integrations">
        <Integrations />
      </div>
      {/* <UseCase /> */}
      <FAQs />
      <Footer />
    </div>
  );
};

export default Index;