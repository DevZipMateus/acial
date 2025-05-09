
import React from 'react';
import { Facebook, Instagram, MapPin, Mail, Phone } from 'lucide-react';
import { FooterPartners } from '@/components/Parceiros';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-acial-green text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="mr-3 mt-1 flex-shrink-0" size={18} />
                <span>(41) 3622-1022</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 mt-1 flex-shrink-0" size={18} />
                <div className="flex flex-col">
                  <span>acial.lapa@gmail.com</span>
                  <span>suporteacial@outlook.com</span>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 flex-shrink-0" size={18} />
                <span>Rua Eduardo Corrêa, n° 108 – Centro<br />Lapa – PR – CEP 83750-023</span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-acial-yellow transition-colors duration-300 inline-block">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-acial-yellow transition-colors duration-300 inline-block">Sobre</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-acial-yellow transition-colors duration-300 inline-block">Serviços</a>
              </li>
              <li>
                <a href="#associe-se" className="hover:text-acial-yellow transition-colors duration-300 inline-block">Associe-se</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-acial-yellow transition-colors duration-300 inline-block">Contato</a>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Siga-nos</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://www.facebook.com/aciallapa" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-acial-yellow hover:text-acial-green transition-colors duration-300 p-3 rounded-full">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/acial.lapa" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-acial-yellow hover:text-acial-green transition-colors duration-300 p-3 rounded-full">
                <Instagram size={20} />
              </a>
            </div>
            
            <div className="mt-6">
              <img 
                src="/lovable-uploads/c5b25de9-bd36-4828-8e46-e2e9061648b6.png" 
                alt="ACIAL Logo" 
                className="h-16 bg-white rounded-lg p-2"
              />
            </div>
          </div>
        </div>
        
        {/* Partners Section */}
        <FooterPartners />
        
        {/* Copyright */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-white/70">
          <p>© {currentYear} ACIAL - Associação Comercial, Industrial e Agropecuária da Lapa. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
