import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ClientLogos from '../components/ClientLogos';
import Services from '../components/Services';
import TrustedService from '../components/TrustedService';
import Solution from '../components/Solution';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash && location.hash !== '#angebot') {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden flex flex-col w-full">
      <Header />
      <main>
        <Hero />
        <ClientLogos />
        <Services />
        <TrustedService />
        <Solution />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
