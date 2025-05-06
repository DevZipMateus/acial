
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="container-custom text-center">
          <div className="max-w-lg mx-auto">
            <img 
              src="/lovable-uploads/c5b25de9-bd36-4828-8e46-e2e9061648b6.png" 
              alt="ACIAL Logo" 
              className="h-24 mx-auto mb-6"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-acial-green mb-6">Página não encontrada</h1>
            <p className="text-lg text-gray-700 mb-8">
              A página que você está procurando não existe ou foi removida.
            </p>
            <Link to="/" className="btn-primary inline-block">
              Voltar para o início
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
