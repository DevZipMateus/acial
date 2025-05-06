
import React from 'react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-acial-green/10 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center opacity-5"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-acial-yellow/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-acial-green/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-acial-green leading-tight mb-6 animate-fade-in">
            <span className="block">ACIAL</span>
            <span className="text-2xl md:text-3xl font-medium block mt-2">Associação Comercial, Industrial e Agropecuária da Lapa</span>
          </h1>
          
          <p className="text-lg text-gray-700 mb-10 animate-fade-in">
            <span className="font-semibold text-acial-green">"A União faz a força"</span><br />
            Representando e fortalecendo o comércio local desde 1988
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
            <a href="#servicos" className="btn-primary">
              Nossos Serviços
            </a>
            <a href="#associe-se" className="btn-secondary">
              Associe-se
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
