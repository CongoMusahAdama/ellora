import React from 'react';
import { motion } from 'framer-motion';
import { team } from '../data/team';
import TeamCard from '../components/TeamCard';

const Team = () => {
  return (
    <div className="pt-24 min-h-screen bg-brand-cream">
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-serif font-bold text-brand-brown"
            >
              Meet Our <span className="text-brand-gold italic">Visionaries</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-brand-brown/60 max-w-2xl mx-auto text-lg"
            >
              The dedicated experts and innovators bringing sustainable, clean beauty to life in the heart of Ghana.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {team.map((member, idx) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24 bg-white p-12 rounded-[3rem] border border-brand-brown/5 text-center max-w-4xl mx-auto"
          >
            <h3 className="text-3xl font-serif font-bold text-brand-brown mb-6">Want to Join Us?</h3>
            <p className="text-brand-brown/70 mb-8 leading-relaxed">
              We're always looking for passionate individuals who care about sustainability, 
              African skin health, and supporting local farmers.
            </p>
            <a 
              href="mailto:elloracosmeticsgh@gmail.com" 
              className="inline-block bg-brand-brown text-white px-10 py-4 rounded-full font-bold hover:bg-brand-gold transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;
