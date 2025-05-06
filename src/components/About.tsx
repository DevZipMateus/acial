
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="section bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Image */}
          <div className="lg:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="bg-acial-green/20 w-full h-full absolute -left-6 -top-6 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" 
                alt="Reunião de empresários na ACIAL" 
                className="relative z-10 rounded-lg shadow-lg w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-8 -right-8 bg-white rounded-lg shadow-lg p-6 z-20 animate-float">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-acial-green rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-600">Desde 1988</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-acial-yellow rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-600">+100 associados</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900">35+</div>
                <div className="text-sm text-gray-600">Anos de atuação na região</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="lg:w-1/2">
            <div className="inline-block bg-acial-green/10 text-acial-green font-medium px-4 py-1.5 rounded-full text-sm mb-4 animate-fade-in">
              Sobre a ACIAL
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
              Uma entidade comprometida com o desenvolvimento local
            </h2>
            <p className="text-gray-700 mb-6 animate-fade-in">
              A ACIAL é uma entidade sem fins lucrativos que atua na defesa dos interesses da classe empresarial e fomenta
              o comércio local, oferecendo serviços e produtos com valor agregado, além de promover cursos, palestras e
              benefícios aos seus associados.
            </p>
            <p className="text-gray-700 mb-8 animate-fade-in">
              Representamos empresários do comércio, indústria, agropecuária, serviços e profissionais liberais
              (pessoas físicas ou jurídicas), com foco no desenvolvimento econômico regional.
            </p>
            
            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="text-acial-green mr-3 mt-1">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <p className="text-gray-700">Organiza e mobiliza a comunidade empresarial</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-acial-green mr-3 mt-1">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <p className="text-gray-700">Representa os interesses dos empresários frente a órgãos públicos e sociedade</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-acial-green mr-3 mt-1">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <p className="text-gray-700">Valoriza projetos sociais e de utilidade pública em suas redes sociais</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-acial-green mr-3 mt-1">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <p className="text-gray-700">Atua com compromisso coletivo, promovendo integração e visibilidade dos associados</p>
                </div>
              </div>
            </div>
            
            <div className="bg-acial-green/10 p-4 rounded-lg border-l-4 border-acial-green">
              <h3 className="font-bold text-acial-green mb-1">Nossa Missão</h3>
              <p className="text-gray-700">Ir além dos serviços tradicionais, buscando sempre o bem coletivo e uma cidade melhor.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
