
import React from 'react';
import { CheckCircle, Network, Users, TrendingUp, BookOpen, Building, BarChart3, Handshake } from 'lucide-react';

const benefits = [
  {
    id: 1,
    title: 'Networking',
    description: 'Acesso a uma rede de contatos empresariais locais e regionais.',
    icon: Network
  },
  {
    id: 2,
    title: 'Convênios',
    description: 'Parcerias com empresas para oferecer descontos e vantagens exclusivas.',
    icon: Handshake
  },
  {
    id: 3,
    title: 'Descontos',
    description: 'Em serviços, produtos, eventos e capacitações profissionais.',
    icon: BarChart3
  },
  {
    id: 4,
    title: 'Cursos e consultorias',
    description: 'Acesso à capacitação e orientação profissional especializada.',
    icon: BookOpen
  },
  {
    id: 5,
    title: 'Representatividade empresarial',
    description: 'Voz ativa junto às entidades governamentais e setores empresariais.',
    icon: Building
  },
  {
    id: 6,
    title: 'Participação em feiras e campanhas',
    description: 'Oportunidades para promover sua empresa em eventos locais.',
    icon: TrendingUp
  }
];

const Membership = () => {
  return (
    <section id="associe-se" className="section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="inline-block bg-acial-green/10 text-acial-green font-medium px-4 py-1.5 rounded-full text-sm mb-4">
              Associe-se
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Faça parte da ACIAL e impulsione seu negócio
            </h2>
            <p className="text-gray-700 mb-8">
              Ao se associar à ACIAL, você garante inúmeras vantagens para sua empresa e contribui para o fortalecimento 
              do comércio local. Conheça alguns dos benefícios:
            </p>
            
            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="flex items-start">
                  <div className="bg-acial-green/10 p-2 rounded-full mr-3 mt-1">
                    <benefit.icon className="text-acial-green" size={18} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">{benefit.title}</h3>
                    <p className="text-sm text-gray-700">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <a href="https://wa.me/5541362210222" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center">
              <span>Quero me associar</span>
            </a>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative">
            <div className="bg-acial-yellow/20 w-full h-full absolute -right-6 -top-6 rounded-lg"></div>
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" 
              alt="Reunião de empresários" 
              className="relative z-10 rounded-lg shadow-lg w-full h-[450px] object-cover"
            />
            <div className="absolute -bottom-8 -left-8 bg-white rounded-lg shadow-lg p-6 z-20 max-w-xs animate-float">
              <div className="flex items-center space-x-2 mb-3">
                <CheckCircle className="text-acial-green" size={20} />
                <span className="font-medium text-gray-900">Mais visibilidade</span>
              </div>
              <p className="text-gray-700 text-sm">
                Associados à ACIAL ganham maior visibilidade no mercado local e regional, além de credibilidade junto aos consumidores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
