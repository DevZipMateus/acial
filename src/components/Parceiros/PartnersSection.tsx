
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

type Partner = {
  id: number;
  name: string;
  logo: string;
  website?: string;
};

// Sample partner data - replace with actual partners
const partners: Partner[] = [
  // Add your partners here
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
