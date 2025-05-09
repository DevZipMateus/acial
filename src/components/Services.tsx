
import React from 'react';
import { Search, FileCheck, Monitor, Users, Briefcase } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'SCPC',
    description: 'Serviço Central de Proteção ao Crédito. Oferecemos consultas para auxiliar na tomada de decisões comerciais.',
    icon: Search,
    iconColor: 'text-acial-green',
    bgColor: 'bg-acial-green/10'
  },
  {
    id: 2,
    title: 'Certificado Digital',
    description: 'Emissão de certificados digitais com validade jurídica para pessoas físicas e jurídicas.',
    icon: FileCheck,
    iconColor: 'text-acial-green',
    bgColor: 'bg-acial-green/10'
  },
  {
    id: 3,
    title: 'Sistemas de Gestão (ERP)',
    description: 'Soluções para controle de estoque, vendas, finanças e outros aspectos do seu negócio.',
    icon: Monitor,
    iconColor: 'text-acial-green',
    bgColor: 'bg-acial-green/10'
  },
  {
    id: 4,
    title: 'Ponto de Atendimento ao Empreendedor (PA)',
    description: 'Parceria entre Sebrae/PR e ACIAL para apoiar o empreendedorismo na Lapa. Oferece capacitações gratuitas — presenciais, digitais e híbridas — voltadas ao fortalecimento e desenvolvimento de micro e pequenas empresas.',
    icon: Briefcase,
    iconColor: 'text-acial-green',
    bgColor: 'bg-acial-green/10'
  },
  {
    id: 5,
    title: 'Associe-se',
    description: 'Junte-se a nós para obter inúmeras vantagens e benefícios para o seu negócio.',
    icon: Users,
    iconColor: 'text-acial-green',
    bgColor: 'bg-acial-green/10'
  }
];

const Services = () => {
  return (
    <section id="servicos" className="section bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-acial-green/10 text-acial-green font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossos Serviços
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            O que oferecemos
          </h2>
          <p className="text-gray-700 text-lg">
            A ACIAL oferece uma variedade de serviços para apoiar o crescimento e o desenvolvimento do seu negócio.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-acial-green transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`${service.bgColor} p-4 rounded-lg inline-block mb-5`}>
                <service.icon className={service.iconColor} size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
