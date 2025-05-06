
import React, { useState, useEffect } from 'react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Pulse animation every 5 seconds
    const pulseInterval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 2000);
    }, 10000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(pulseInterval);
    };
  }, []);

  return (
    <a
      href="https://wa.me/5541362210222"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Entre em contato pelo WhatsApp"
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} ${isPulsing ? 'animate-pulse' : ''}`}
    >
      <div className="bg-[#25D366] p-3 rounded-full flex items-center justify-center shadow-lg hover:bg-[#1DA856] transition-colors">
        <img 
          src="/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png" 
          alt="WhatsApp" 
          width="36" 
          height="36" 
          className="w-9 h-9 object-contain"
        />
      </div>
    </a>
  );
};

export default WhatsAppButton;
