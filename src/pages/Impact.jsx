import React, { useEffect, useRef } from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { Heart, Activity, Users, Briefcase, Globe, Star, Plus, Circle, Square, Triangle } from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../data/testimonials';
import WhatsAppButton from '../components/WhatsAppButton';
import newRicePattern from '../assets/new_rice_pattern.png';

const CountingNumber = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
  
  const springValue = useSpring(0, {
    stiffness: 100,
    damping: 30,
  });

  const displayValue = useTransform(springValue, (current) => 
    Math.floor(current).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      springValue.set(numericValue);
    }
  }, [isInView, numericValue, springValue]);

  return (
    <div ref={ref} className="flex items-baseline justify-center md:justify-start">
      <motion.span>{displayValue}</motion.span>
      <span className="text-3xl ml-1">{suffix}</span>
    </div>
  );
};

const Impact = () => {
  const stats = [
    { value: "400", label: "Farmers Empowered", ghost: "400", suffix: "+" },
    { value: "2", label: "Tons Waste Upcycled", ghost: "02", suffix: "T" },
    { value: "50", label: "Pilot Customers", ghost: "50", suffix: "+" },
    { value: "200", label: "Jobs Created", ghost: "200", suffix: "" },
    { value: "80", label: "Women-Led", ghost: "80", suffix: "%" },
    { value: "100", label: "Organic Sourcing", ghost: "100", suffix: "%" }
  ];

  const sdgs = [
    { icon: <Activity />, title: "Good Health", color: "bg-[#4C9F38]", desc: "Clean products that don't harm the skin or hair." },
    { icon: <Heart />, title: "No Poverty", color: "bg-[#E5243B]", desc: "Direct payments to rice farmers for their waste." },
    { icon: <Users />, title: "Gender Equality", color: "bg-[#FF3A21]", desc: "Empowering women throughout our supply chain." },
    { icon: <Briefcase />, title: "Decent Work", color: "bg-[#A21942]", desc: "Creating manufacturing jobs in Sunyani." },
    { icon: <Globe />, title: "Climate Action", color: "bg-[#3F7E44]", desc: "Reducing waste and eliminating plastic use." }
  ];

  const features = [
    { icon: <Plus size={14} />, text: "Direct Farmer Support" },
    { icon: <Circle size={10} />, text: "Circular Economy Focus" },
    { icon: <Triangle size={14} />, text: "Zero Chemical Policy" },
    { icon: <Square size={12} />, text: "Ethical Manufacturing" }
  ];

  return (
    <div className="pt-16 bg-white">
      {/* 1. IMPACT HERO & STATS SECTION */}
      <section className="py-12 lg:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Split */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-4">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/3"
            >
              <h1 className="text-5xl md:text-[5rem] font-serif font-black text-brand-brown leading-[1.1]">
                Why <br /><span className="text-brand-gold italic">Us</span>
              </h1>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:w-2/3"
            >
              {/* Description removed as requested */}
            </motion.div>
          </div>

          {/* Main Grid Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Sidebar */}
            <div className="lg:col-span-3 space-y-24">
              {/* Features List */}
              <div className="space-y-6">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center gap-4 text-brand-brown/70 group cursor-default">
                    <span className="text-brand-gold group-hover:scale-125 transition-transform">{f.icon}</span>
                    <span className="text-sm font-bold tracking-widest uppercase">{f.text}</span>
                  </div>
                ))}
              </div>

              {/* Mini Testimonial */}
              <div className="space-y-4 pt-12 border-t border-brand-brown/10">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="#D4AF37" color="#D4AF37" />)}
                  <span className="ml-2 text-xs font-black text-brand-brown">5.0 / 5</span>
                </div>
                <p className="text-sm text-brand-brown/60 italic leading-relaxed">
                  "Ellora didn't just give me better skin; they gave me a way to support my local 
                  farmers while using luxury products. A total game changer."
                </p>
                <div>
                  <p className="text-xs font-black text-brand-brown uppercase tracking-widest">Aba Mensah</p>
                  <p className="text-[10px] text-brand-brown/40 uppercase">Early Supporter, Sunyani</p>
                </div>
              </div>
            </div>

            {/* Right Stats Cards Grid */}
            <div className="lg:col-span-9">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-brand-cream/50 rounded-[2.5rem] p-10 h-80 flex flex-col justify-end relative overflow-hidden group hover:bg-brand-brown transition-colors duration-500"
                  >
                    {/* Ghost Number Background */}
                    <div className="absolute top-0 right-0 p-4 select-none pointer-events-none">
                      <span className="text-[10rem] font-black text-brand-brown/[0.03] group-hover:text-white/5 transition-colors leading-none tracking-tighter">
                        {stat.ghost}
                      </span>
                    </div>

                    <div className="relative z-10 space-y-2">
                      <h3 className="text-5xl md:text-6xl font-black text-brand-brown group-hover:text-brand-gold transition-colors">
                        <CountingNumber value={stat.value} suffix={stat.suffix} />
                      </h3>
                      <p className="text-brand-brown/50 text-sm font-bold uppercase tracking-[0.2em] group-hover:text-white/60 transition-colors">
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR RESPONSIBILITY SECTION */}
      <section className="py-32 bg-white border-t border-brand-brown/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse gap-20 items-start">
            
            {/* Right Header */}
            <div className="lg:w-1/2 lg:sticky lg:top-32 lg:text-right flex flex-col lg:items-end">
              <span className="text-brand-gold font-black text-xs uppercase tracking-[0.4em] mb-6 block">Key Responsibility</span>
              <h2 className="text-5xl md:text-[5rem] font-serif font-black text-brand-brown leading-[1.1] mb-8">
                Our <br /><span className="text-brand-gold italic">Values</span>
              </h2>
              <p className="text-xl text-brand-brown/60 leading-relaxed max-w-md">
                At Ellora, our responsibility guides everything we do. They shape our interactions, 
                decisions, and the way we build our sustainable beauty platform.
              </p>
            </div>

            {/* Right Grid */}
            <div className="lg:w-1/2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sdgs.slice(0, 4).map((sdg, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className={`p-10 rounded-[2rem] min-h-[320px] flex flex-col justify-between transition-all duration-500 ${
                      idx === 0 
                        ? 'bg-brand-brown text-white shadow-2xl shadow-brand-brown/20' 
                        : 'bg-brand-cream/40 border border-brand-brown/5 text-brand-brown'
                    }`}
                  >
                    <div className={`${idx === 0 ? 'text-brand-gold' : 'text-brand-brown'} mb-8`}>
                      {React.cloneElement(sdg.icon, { size: 40 })}
                    </div>
                    
                    <div className="flex-grow flex flex-col justify-center">
                      <p className={`text-lg leading-relaxed mb-6 ${idx === 0 ? 'text-white/80' : 'text-brand-brown/70'}`}>
                        {sdg.desc}
                      </p>
                      <div className={`h-px w-full mb-6 ${idx === 0 ? 'bg-white/20' : 'bg-brand-brown/10'}`} />
                    </div>

                    <h4 className="text-xl font-black uppercase tracking-widest">
                      {sdg.title}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-brown rounded-[4rem] p-12 lg:p-24 text-center relative overflow-hidden group">
             {/* Botanical Background Pattern */}
             <motion.div 
               initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
               whileInView={{ opacity: 0.1, rotate: 0, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.5 }}
               className="absolute -top-24 -left-24 w-96 h-auto pointer-events-none mix-blend-overlay"
             >
               <img src={newRicePattern} alt="" className="w-full h-auto brightness-200" />
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, rotate: 15, scale: 0.8 }}
               whileInView={{ opacity: 0.1, rotate: 0, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, delay: 0.2 }}
               className="absolute -bottom-24 -right-24 w-96 h-auto pointer-events-none mix-blend-overlay rotate-180"
             >
               <img src={newRicePattern} alt="" className="w-full h-auto brightness-200" />
             </motion.div>

             <div className="relative z-10">
               <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-6">Join the Movement</h2>
               <p className="text-white/60 max-w-2xl mx-auto mb-12 text-lg">
                 Every purchase you make directly supports a farmer in Ghana and helps us scale our 
                 waste-to-wealth circular economy.
               </p>
               <WhatsAppButton 
                 className="bg-brand-gold text-brand-brown px-12 py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl inline-block"
                 message="I want to support the Ellora impact movement!"
               >
                 Inquire Wholesale
               </WhatsAppButton>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
