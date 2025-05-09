
import React from 'react';

type Partner = {
  id: number;
  name: string;
  logo: string;
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

const FooterPartners = () => {
  return (
    <div className="mt-8 border-t border-white/10 pt-8">
      <h3 className="text-xl font-semibold mb-4 text-white">Nossos Parceiros</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3">
        {partners.map((partner) => (
          <div 
            key={partner.id} 
            className="bg-white rounded-md p-2 flex items-center justify-center h-16"
          >
            <img 
              src={partner.logo} 
              alt={`Logo de ${partner.name}`} 
              className="object-contain max-h-12 max-w-full" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterPartners;
