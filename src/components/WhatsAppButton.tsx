
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
        <svg viewBox="0 0 24 24" width="36" height="36" fill="white">
          <path d="M17.6 6.3A7.8 7.8 0 0 0 12 4a8 8 0 0 0-8 8c0 1.4.4 2.8 1 4L4 20l4.1-1.1c1.2.7 2.5 1 3.9 1a8 8 0 0 0 8-8c0-2.1-.8-4.1-2.4-5.6zm-5.6 12.2a6.6 6.6 0 0 1-3.4-.9l-.2-.2-2.6.7.7-2.5-.2-.3a6.5 6.5 0 0 1-1-3.4 6.6 6.6 0 0 1 6.6-6.6 6.6 6.6 0 0 1 4.7 1.9 6.6 6.6 0 0 1 1.9 4.7 6.6 6.6 0 0 1-6.5 6.6zm3.9-4.9c-.2-.1-1.3-.7-1.5-.7l-.3.7c-.3.1-.5.2-1-.2-.5-.3-.8-.7-1.1-1-.3-.4-.6-.8-.8-1.3-.3-.3 0-.5.2-.7l.4-.6v-.4c0-.3-.6-1.3-.8-1.6l-.4-.4c-.3 0-.6.3-.7.5-.4.3-.7.7-.7 1.2 0 .6.3 1.1.4 1.3.2.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.8-1.3l.2-.6c0-.4-.3-.6-.8-.8z" />
        </svg>
      </div>
    </a>
  );
};

export default WhatsAppButton;
