
import React, { useEffect } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import TeamSection from '../components/TeamSection';
import WhatsAppButton from '../components/WhatsAppButton';

const Team = () => {
  // Scroll to top on page load and set page title for SEO
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Nossa Equipe - ACIAL - Associação Comercial, Industrial e Agropecuária da Lapa";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        <div className="container-custom py-8">
          <h1 className="text-4xl font-bold text-center mb-12 text-acial-green">Nossa Equipe</h1>
          <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto mb-16">
            Nossa equipe é composta por diretores voluntários e colaboradores dedicados para melhor atender os associados e a comunidade empresarial da Lapa.
          </p>
        </div>
        <TeamSection />
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Team;
