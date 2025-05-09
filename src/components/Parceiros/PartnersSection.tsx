
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

type Partner = {
  id: number;
  name: string;
  logo: string;
  website?: string;
};

// Partner data using the provided images
const partners: Partner[] = [
  { id: 1, name: "Parceiro 1", logo: "/lovable-uploads/parceiros/665620516253432.jpeg" },
  { id: 2, name: "Parceiro 2", logo: "/lovable-uploads/parceiros/1382975022746243.jpeg" },
  { id: 3, name: "Parceiro 3", logo: "/lovable-uploads/parceiros/980544337566355.jpeg" },
  { id: 4, name: "Parceiro 4", logo: "/lovable-uploads/parceiros/9510635845701087.jpeg" },
  { id: 5, name: "Parceiro 5", logo: "/lovable-uploads/parceiros/1273825304747401.jpeg" },
  { id: 6, name: "Parceiro 6", logo: "/lovable-uploads/parceiros/1879631276146283.jpeg" },
  { id: 7, name: "Parceiro 7", logo: "/lovable-uploads/parceiros/690204057042556.jpeg" },
  { id: 8, name: "Parceiro 8", logo: "/lovable-uploads/parceiros/711263594910492.jpeg" },
  { id: 9, name: "Parceiro 9", logo: "/lovable-uploads/parceiros/902234958673078.jpeg" },
  { id: 10, name: "Parceiro 10", logo: "/lovable-uploads/parceiros/698004629268775.jpeg" },
  { id: 11, name: "Parceiro 11", logo: "/lovable-uploads/parceiros/679426531463431.jpeg" },
  { id: 12, name: "Parceiro 12", logo: "/lovable-uploads/parceiros/1416795856423914.jpeg" },
  { id: 13, name: "Parceiro 13", logo: "/lovable-uploads/parceiros/662564536578898.jpeg" },
  { id: 14, name: "Parceiro 14", logo: "/lovable-uploads/parceiros/633143709711574.jpeg" },
];

const PartnersSection = () => {
  return (
    <section id="parceiros" className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-acial-green/10 text-acial-green font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossos Parceiros
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Empresas que confiam em nós
          </h2>
          <p className="text-gray-700 text-lg">
            Orgulhosamente apoiados por estas organizações que compartilham nossa missão de fortalecer o comércio local.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {partners.length > 0 ? (
            partners.map((partner) => (
              <Card 
                key={partner.id} 
                className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 bg-white"
              >
                <CardContent className="flex items-center justify-center p-6">
                  {partner.website ? (
                    <a 
                      href={partner.website} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block w-full h-full"
                      aria-label={`Visitar site do parceiro ${partner.name}`}
                    >
                      <img 
                        src={partner.logo} 
                        alt={`Logo de ${partner.name}`} 
                        className="object-contain h-24 w-full" 
                      />
                    </a>
                  ) : (
                    <img 
                      src={partner.logo} 
                      alt={`Logo de ${partner.name}`} 
                      className="object-contain h-24 w-full" 
                    />
                  )}
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-500">
                Novos parceiros em breve...
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
