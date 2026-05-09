import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

const TeamCard = ({ member, compact = false }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`bg-white rounded-3xl p-8 shadow-sm border border-brand-brown/5 text-center flex flex-col items-center transition-all hover:shadow-md ${compact ? '' : 'h-full'}`}
    >
      <div className="relative mb-6">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-brand-cream shadow-inner">
          <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
        </div>
        <a 
          href={member.linkedin} 
          className="absolute bottom-0 right-0 bg-brand-brown text-white p-2 rounded-full hover:bg-brand-gold transition-colors shadow-md"
        >
          <FaLinkedinIn size={16} />
        </a>
      </div>
      
      <h4 className="text-xl font-serif font-bold text-brand-brown mb-1">{member.name}</h4>
      <p className="text-brand-gold text-sm font-bold uppercase tracking-widest mb-4">{member.role}</p>
      <p className="text-brand-brown/70 text-sm leading-relaxed">{member.bio}</p>
    </motion.div>
  );
};

export default TeamCard;
