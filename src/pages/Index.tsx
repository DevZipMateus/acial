
import React, { useEffect } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Membership from '../components/Membership';
import Contact from '../components/Contact';
import WhatsAppButton from '../components/WhatsAppButton';
import { PartnersSection } from '@/components/Parceiros';

const Index = () => {
  // Scroll to top on page load and set page title for SEO
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ACIAL - Associação Comercial, Industrial e Agropecuária da Lapa";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <PartnersSection />
        <Membership />
        <Contact />
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
