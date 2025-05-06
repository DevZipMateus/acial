
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 py-4'}`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/c5b25de9-bd36-4828-8e46-e2e9061648b6.png" 
              alt="ACIAL - Associação Comercial, Industrial e Agropecuária da Lapa" 
              className="h-12 md:h-16 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <Link to="/" className="nav-link">Início</Link>
            <Link to="/#sobre" className="nav-link">Sobre</Link>
            <Link to="/#servicos" className="nav-link">Serviços</Link>
            <Link to="/equipe" className="nav-link">Nossa Equipe</Link>
            <Link to="/#associe-se" className="nav-link">Associe-se</Link>
            <Link to="/#contato" className="nav-link">Contato</Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-acial-green hover:text-acial-green-dark focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'} overflow-hidden transition-all duration-300 ease-in-out`}>
        <div className="container-custom py-4 flex flex-col space-y-3 border-t mt-2">
          <Link to="/" className="px-4 py-2 text-gray-700 hover:text-acial-green hover:bg-gray-50 rounded-md" onClick={toggleMobileMenu}>Início</Link>
          <Link to="/#sobre" className="px-4 py-2 text-gray-700 hover:text-acial-green hover:bg-gray-50 rounded-md" onClick={toggleMobileMenu}>Sobre</Link>
          <Link to="/#servicos" className="px-4 py-2 text-gray-700 hover:text-acial-green hover:bg-gray-50 rounded-md" onClick={toggleMobileMenu}>Serviços</Link>
          <Link to="/equipe" className="px-4 py-2 text-gray-700 hover:text-acial-green hover:bg-gray-50 rounded-md" onClick={toggleMobileMenu}>Nossa Equipe</Link>
          <Link to="/#associe-se" className="px-4 py-2 text-gray-700 hover:text-acial-green hover:bg-gray-50 rounded-md" onClick={toggleMobileMenu}>Associe-se</Link>
          <Link to="/#contato" className="px-4 py-2 text-gray-700 hover:text-acial-green hover:bg-gray-50 rounded-md" onClick={toggleMobileMenu}>Contato</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
