
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="section bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-acial-green/10 text-acial-green font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Contato
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Fale conosco
          </h2>
          <p className="text-gray-700 text-lg">
            Entre em contato com a ACIAL através de nossos canais de atendimento
          </p>
        </div>
        
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Phone */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-acial-green p-6 flex items-center justify-center">
              <Phone className="text-white" size={32} />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Telefone</h3>
              <p className="text-gray-700 mb-4">Estamos disponíveis em horário comercial</p>
              <a 
                href="tel:+554136221022"
                className="text-acial-green hover:underline font-medium"
              >
                (41) 3622-1022
              </a>
            </div>
          </div>
          
          {/* Email */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-acial-green p-6 flex items-center justify-center">
              <Mail className="text-white" size={32} />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">E-mail</h3>
              <p className="text-gray-700 mb-4">Envie-nos uma mensagem</p>
              <a 
                href="mailto:acial.lapa@gmail.com"
                className="text-acial-green hover:underline font-medium block"
              >
                acial.lapa@gmail.com
              </a>
              <a 
                href="mailto:suporteacial@outlook.com"
                className="text-acial-green hover:underline font-medium block mt-2"
              >
                suporteacial@outlook.com
              </a>
            </div>
          </div>
          
          {/* Address */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-acial-green p-6 flex items-center justify-center">
              <MapPin className="text-white" size={32} />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Endereço</h3>
              <p className="text-gray-700 mb-4">Venha nos visitar</p>
              <address className="text-acial-green not-italic">
                Rua Eduardo Corrêa, n° 108 – Centro<br />
                Lapa – PR – CEP 83750-023
              </address>
            </div>
          </div>
        </div>
        
        {/* Google Maps */}
        <div className="relative rounded-xl overflow-hidden shadow-lg h-[400px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.319158895046!2d-49.7188562!3d-25.7673538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e7a3a073ce307b%3A0x1a7f7e96ce312a3!2sR.%20Eduardo%20Corr%C3%AAa%2C%20108%20-%20Centro%2C%20Lapa%20-%20PR%2C%2083750-023!5e0!3m2!1spt-BR!2sbr!4v1714773227580!5m2!1spt-BR!2sbr"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da ACIAL"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
