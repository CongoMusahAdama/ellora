import React from 'react';
import fdaLogo from '../assets/fda.png';
import naturalLogo from '../assets/naturalrice.png';

const PartnersCarousel = () => {
  const partners = [
    { type: 'image', src: fdaLogo, alt: "FDA Certified" },
    { type: 'image', src: naturalLogo, alt: "100% Natural" },
  ];

  return (
    <div className="bg-brand-brown py-8 overflow-hidden border-y border-brand-cream/10">
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <p className="text-center text-brand-gold text-xs uppercase tracking-[0.3em] font-bold">
          Partners
        </p>
      </div>
      
      <div className="flex justify-center items-center gap-8 sm:gap-16">
        {partners.map((partner, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center justify-center gap-4"
          >
            <div className="h-24 w-24 sm:h-28 sm:w-28 bg-white border-4 border-brand-cream/10 rounded-full flex items-center justify-center group hover:border-brand-gold transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:-translate-y-2">
              <img 
                src={partner.src} 
                alt={partner.alt} 
                className="h-14 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-sm" 
              />
            </div>
            <span className="text-white text-xs font-bold tracking-widest uppercase text-center">{partner.alt}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersCarousel;
