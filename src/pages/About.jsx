import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Hotel, User, Globe, ShieldCheck, Heart, Leaf, Coins, Zap } from 'lucide-react';

import founderImg from '../assets/founder.png';

const About = () => {
  return (
    <div className="pt-24">
      
      {/* 1. WHO WE ARE */}
      {/* 1. WHO WE ARE */}
      <section className="py-24 lg:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            {/* Left Title */}
            <div className="w-full lg:w-1/3">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-5xl md:text-[5rem] font-serif font-black text-brand-brown leading-[1.1]">
                  Who <br /><span className="text-brand-gold italic">We</span> Are
                </h2>
              </motion.div>
            </div>
            
            {/* Right Content */}
            <div className="w-full lg:w-2/3 space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                <p className="text-lg text-brand-brown/80 leading-relaxed">
                  Ellora Cosmetics is a premium clean beauty brand rooted in the rich agricultural heritage of Ghana. We specialize in crafting 100% naturally organic skin and hair care products by innovatively upcycling local rice waste.
                </p>
                <p className="text-lg text-brand-brown/80 leading-relaxed">
                  Our mission is to prove that luxury and sustainability can exist in perfect harmony, replacing toxic, chemical-heavy products with clean, upcycled alternatives.
                </p>
                
                <div className="bg-brand-sage/10 p-6 md:p-8 rounded-lg italic text-brand-sage text-sm md:text-base leading-relaxed border-l-4 border-brand-sage">
                  "Ellora Cosmetics is a circular economy initiative that transforms agricultural waste into wellness, empowering local farmers while delivering world-class clean beauty to African homes."
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8">
                  <div>
                    <h3 className="text-4xl font-bold text-brand-brown mb-2">100%</h3>
                    <p className="text-sm text-brand-brown/60 font-medium">Naturally Organic</p>
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold text-brand-brown mb-2">0%</h3>
                    <p className="text-sm text-brand-brown/60 font-medium">Sulfates & Parabens</p>
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold text-brand-brown mb-2">1st</h3>
                    <p className="text-sm text-brand-brown/60 font-medium">Rice Upcycled Brand</p>
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold text-brand-brown mb-2">50+</h3>
                    <p className="text-sm text-brand-brown/60 font-medium">Local Farmers Supported</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE FOUNDER'S STORY */}
      <section className="py-24 lg:py-32 bg-[#fdfbf7] border-y border-[#e8decb]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-brand-brown tracking-tight">
                Founded on <span className="text-[#b58b66]">Pure</span> Intentions.
              </h1>
              <div className="space-y-6 text-lg text-brand-brown/80 leading-relaxed">
                <p>
                  Ellora Cosmetics began with a simple observation by our founder, Theodora Dankwa. In the heart of Ghana's rice-growing regions, she saw massive amounts of rice bran and husks being burnt or left to rot.
                </p>
                <p>
                  She also saw her community struggling with the effects of harsh, chemical-laden beauty products imported from abroad. The solution was right beneath her feet.
                </p>
                <p>
                  Today, Ellora is more than a beauty brand. We are a circular economy initiative that transforms waste into wellness, supporting Ghanaian farmers while delivering world-class clean beauty to African homes.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white aspect-[4/5]">
                <img 
                  src={founderImg} 
                  alt="Ellora Founder - Theodora Dankwa" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-[#b58b66] text-white p-8 rounded-3xl shadow-xl max-w-xs">
                <p className="italic text-xl">"True beauty shouldn't cost the earth or your health."</p>
                <p className="mt-4 font-bold uppercase tracking-widest text-xs opacity-80">— Theodora Dankwa</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. WHO WE SERVE */}
      <section className="py-24 lg:py-32 bg-white border-b border-[#e8decb]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            {/* Left Title */}
            <div className="w-full lg:w-1/3">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-5xl md:text-[5rem] font-serif font-black text-brand-brown leading-[1.1]">
                  Who <br /><span className="text-brand-gold italic">We</span> Serve
                </h2>
              </motion.div>
            </div>
            
            {/* Right Content */}
            <div className="w-full lg:w-2/3">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12"
              >
                {[
                  { title: "Women 18–45", desc: "Modern women seeking clean, effective alternatives to mainstream chemical brands." },
                  { title: "Hotels & Spas", desc: "Premium establishments wanting to offer unique, local, and eco-friendly amenities." },
                  { title: "Men 18–40", desc: "The growing segment of men prioritizing healthy skin and sustainable grooming." },
                  { title: "Export Markets", desc: "Global consumers looking for the finest in authentic African clean beauty." }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-3">
                    <h4 className="text-2xl font-bold text-brand-brown">{item.title}</h4>
                    <p className="text-brand-brown/70 leading-relaxed text-lg">{item.desc}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE ELLORA */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-brown rounded-[4rem] p-12 lg:p-16 text-white overflow-hidden relative shadow-[0_20px_50px_rgba(59,31,14,0.2)]">
             <div className="absolute top-0 right-0 p-8 opacity-5">
              <Zap size={300} />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Why Choose Ellora?</h2>
              <div className="w-24 h-1 bg-[#b58b66] mx-auto rounded-full" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12"
            >
              {[
                { icon: <ShieldCheck />, title: "Chemical-Free", desc: "No sulfates or parabens." },
                { icon: <Heart />, title: "Locally Made", desc: "Crafted with love in Sunyani." },
                { icon: <Coins />, title: "Affordable", desc: "Premium quality for GHS 30." },
                { icon: <Leaf />, title: "Zero Plastic", desc: "Protecting our environment." },
                { icon: <Users />, title: "Farmer-Supported", desc: "Empowering local agriculture." }
              ].map((item, idx) => (
                <div key={idx} className="text-center space-y-4">
                  <div className="w-16 h-16 bg-white/10 text-brand-cream rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3 hover:rotate-0 transition-transform shadow-sm">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold">{item.title}</h4>
                  <p className="text-white/60 text-xs uppercase tracking-[0.2em]">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
