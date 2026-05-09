import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  if (testimonial.type === 'stat') {
    return (
      <div className="bg-brand-gold p-8 rounded-3xl text-white flex flex-col justify-center items-center text-center h-full shadow-lg">
        <h4 className="text-4xl font-bold mb-2">{testimonial.label}</h4>
        <p className="text-xl font-serif leading-relaxed italic">{testimonial.quote}</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-brown/5 h-full flex flex-col">
      <div className="flex text-brand-gold mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={16} fill="currentColor" />
        ))}
      </div>
      
      <div className="flex-grow">
        <Quote size={32} className="text-brand-brown/10 mb-4" />
        <p className="text-brand-brown text-lg italic leading-relaxed mb-6">
          "{testimonial.quote}"
        </p>
      </div>
      
      <div className="pt-6 border-t border-brand-brown/5">
        <h5 className="font-bold text-brand-brown">{testimonial.name}</h5>
        <p className="text-xs text-brand-brown/50 uppercase tracking-widest">{testimonial.location}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
