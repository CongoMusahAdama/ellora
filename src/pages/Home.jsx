import React from 'react';
import heroImg from '../assets/hero.jpg';
import mosaicImg from '../assets/image.png';
import naturalLogo from '../assets/naturalrice.png';
import ricePatternImg from '../assets/ricepattern.png';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, ShieldCheck, Zap, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { team } from '../data/team';
import { testimonials } from '../data/testimonials';
import ProductCard from '../components/ProductCard';
import TeamCard from '../components/TeamCard';
import TestimonialCard from '../components/TestimonialCard';
import PartnersCarousel from '../components/PartnersCarousel';
import WhatsAppButton from '../components/WhatsAppButton';

import newRicePattern from '../assets/new_rice_pattern.png';
import shopHeroImg from '../assets/shop_hero.png';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  return (
    <div className="overflow-x-hidden">
      {/* 2. HERO SECTION - PREMIUM SPLIT LAYOUT (UPGRADED) */}
      <section className="relative pt-32 pb-20 lg:pt-32 lg:pb-12 bg-[#fdfbf7] overflow-hidden">
        {/* Premium Botanical Rice Pattern (Artist Sketch Style) */}
        <motion.div 
          initial={{ opacity: 0, x: -20, rotate: -5 }}
          animate={{ opacity: 0.3, x: 0, rotate: 0 }}
          transition={{ duration: 2, delay: 0.2 }}
          className="absolute -top-20 -left-20 w-[600px] h-auto pointer-events-none z-0 mix-blend-multiply"
        >
          <img src={newRicePattern} alt="" className="w-full h-auto" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30, rotate: -35 }}
          animate={{ opacity: 0.25, y: 0, rotate: -30 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute -bottom-32 -left-32 w-[700px] h-auto pointer-events-none z-0 mix-blend-multiply"
        >
          <img src={newRicePattern} alt="" className="w-full h-auto" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 40 }}
          animate={{ opacity: 0.2, scale: 1, rotate: 45 }}
          transition={{ duration: 2, delay: 0.8 }}
          className="absolute top-1/4 -right-40 w-[900px] h-auto pointer-events-none z-0 mix-blend-multiply"
        >
          <img src={newRicePattern} alt="" className="w-full h-auto" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2, delay: 1.2 }}
          className="absolute bottom-10 right-20 w-[500px] h-auto pointer-events-none z-0 rotate-[160deg] mix-blend-multiply"
        >
          <img src={newRicePattern} alt="" className="w-full h-auto" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center min-h-[75vh] gap-12 py-10 lg:py-0">
            <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-brand-gold font-bold tracking-[0.2em] uppercase text-sm mb-4 block">100% Naturally Organic</span>
                <h1 className="text-5xl md:text-[5rem] font-serif font-black text-brand-brown leading-[1.1] mb-6">
                  More Confident <br />
                  With <span className="text-brand-gold italic">Ellora.</span>
                </h1>
                <p className="text-base md:text-xl text-brand-brown/70 max-w-lg mb-8 mx-auto lg:mx-0">
                  Premium, rice-based beauty products crafted for African skin and hair. No sulfates. No parabens. No compromise.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <WhatsAppButton 
                    className="bg-brand-brown text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold hover:bg-brand-gold transition-all shadow-xl w-full sm:w-auto flex items-center justify-center gap-2"
                    message="Hi Ellora, I want to explore your products!"
                  >
                    Shop Now <ArrowRight size={18} />
                  </WhatsAppButton>
                  <Link to="/about" className="text-brand-brown font-bold border-2 border-brand-brown/10 px-8 py-4 md:px-10 md:py-5 rounded-full hover:bg-brand-brown hover:text-white transition-all w-full sm:w-auto text-center">
                    Our Story
                  </Link>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2 relative">
               <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 1 }}
                 className="relative z-10"
               >
                 <div className="rounded-t-full border-[12px] border-white shadow-2xl overflow-hidden aspect-[4/4.5] max-w-[400px] mx-auto relative">
                    <img src={shopHeroImg} alt="Ellora Model" className="w-full h-full object-cover" />
                 </div>
               </motion.div>
               {/* Floating badge */}
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 1, duration: 0.5 }}
                 className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white p-6 rounded-2xl shadow-xl z-20 border border-brand-brown/5 min-w-[200px]"
               >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold font-bold text-xl">100%</div>
                    <p className="text-xs font-bold text-brand-brown tracking-tight leading-tight">Pure Natural <br />Ingredients</p>
                  </div>
               </motion.div>
            </div>
          </div>
        </div>
      </section>





      {/* 3. PARTNERS CAROUSEL */}
      <PartnersCarousel />

      {/* 4. THE PROBLEM & THE ELLORA ANSWER (Redesigned) */}
      <section className="py-24 lg:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_20px_50px_rgba(59,31,14,0.05)] flex flex-col lg:flex-row border border-[#e8decb]/50">
            
            {/* Problem Side */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-1/2 bg-[#fdfbf7] p-12 lg:p-20 flex flex-col justify-center relative"
            >
              <div className="absolute top-8 right-8 text-brand-brown/5">
                <svg width="180" height="180" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2zm0 4l7.5 14h-15L12 6zM11 10h2v5h-2v-5zm0 6h2v2h-2v-2z"/></svg>
              </div>
              <div className="relative z-10">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-block px-4 py-1 rounded-full border border-[#b58b66]/30 text-[10px] font-bold tracking-[0.2em] uppercase text-[#b58b66] mb-6 bg-white/50 backdrop-blur-sm"
                >
                  The Problem
                </motion.span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-brown mb-6 leading-[1.2]">
                  Toxic Ingredients <br className="hidden md:block" />& False Promises
                </h2>
                <p className="text-base md:text-lg text-brand-brown/70 leading-relaxed font-medium">
                  Mainstream beauty products are packed with sulfates, parabens, and synthetic 
                  chemicals. Consumers are paying premium prices for products that ultimately disrupt their skin, hair, and health.
                </p>
              </div>
            </motion.div>
            
            {/* Answer Side */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="w-full lg:w-1/2 bg-brand-brown p-12 lg:p-20 flex flex-col justify-center text-white relative overflow-hidden"
            >
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#b58b66]/30 rounded-full blur-[80px]"></div>
              <div className="absolute -top-10 -left-10 w-60 h-60 bg-brand-gold/20 rounded-full blur-[60px]"></div>
              <div className="absolute top-10 right-10 text-[#b58b66]/20">
                <Leaf size={140} strokeWidth={1} />
              </div>
              
              <div className="relative z-10">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-block px-4 py-1 rounded-full border border-[#b58b66]/50 text-[10px] font-bold tracking-[0.2em] uppercase text-[#b58b66] mb-6 bg-[#b58b66]/10 backdrop-blur-sm">
                  The Ellora Answer
                </motion.span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#fdfbf7] mb-6 leading-[1.2]">
                  Clean Beauty,<br className="hidden md:block" />Rooted in Nature
                </h2>
                <p className="text-base md:text-lg text-white/80 leading-relaxed font-medium">
                  We replace toxins with powerful, clean, rice-based alternatives. 
                  By upcycling local rice waste, we create luxurious beauty essentials that heal your body and preserve the planet.
                </p>
                
                <div className="mt-12 flex items-center gap-6">
                  <div className="flex -space-x-4">
                    <div className="w-12 h-12 rounded-full border-[3px] border-brand-brown bg-[#fdfbf7] flex items-center justify-center text-[#b58b66] shadow-lg"><Leaf size={20} strokeWidth={2.5} /></div>
                    <div className="w-12 h-12 rounded-full border-[3px] border-brand-brown bg-[#fdfbf7] flex items-center justify-center text-[#b58b66] shadow-lg"><ShieldCheck size={20} strokeWidth={2.5} /></div>
                  </div>
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#b58b66]">100% Safe & Pure</span>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* 5. PRODUCTS SECTION */}
      <section className="py-24 lg:py-32 bg-[#fdfbf7] relative overflow-hidden">
        {/* Subtle decorative circle */}
        <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[100px] opacity-70 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <span className="inline-block px-4 py-1 rounded-full border border-[#b58b66]/30 text-[10px] font-bold tracking-[0.2em] uppercase text-[#b58b66] mb-6 bg-white/50 backdrop-blur-sm">
              Our Collection
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-brown">
              Natural Rice-Based Products
            </h2>
            <p className="mt-6 text-lg text-brand-brown/70 max-w-2xl mx-auto font-medium leading-relaxed">
              Discover our range of premium, 100% natural skincare essentials. Expertly crafted in Ghana to nourish, protect, and heal your skin.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <Link 
              to="/shop" 
              className="inline-flex items-center gap-3 text-brand-brown font-bold border-b-2 border-[#b58b66] pb-2 hover:text-[#b58b66] transition-colors uppercase tracking-widest text-sm"
            >
              View Full Collection
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 6. INNOVATION / HOW IT WORKS */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-brown leading-tight">
                  The Underlying <span className="text-brand-gold">Magic</span>
                </h2>
                <p className="text-lg text-brand-brown/70 leading-relaxed">
                  In Ghana, 10–20% of rice harvests are lost every year. We upcycle that waste 
                  into premium beauty products — good for your skin, good for farmers, good for the planet.
                </p>
              </div>
              
              <div className="space-y-10">
                {[
                  { step: "01", title: "Rice Waste Collected", desc: "We partner directly with smallholder farmers to collect rice husks and bran that would otherwise be discarded." },
                  { step: "02", title: "Processed into Formula", desc: "Our proprietary cold-process method preserves all nutrients, converting waste into potent active ingredients." },
                  { step: "03", title: "Your Clean Product", desc: "Delivered fresh to your doorstep in zero-plastic packaging. Each 50g bar replaces 2 full bottles of liquid." }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="flex gap-6"
                  >
                    <div className="shrink-0 w-12 h-12 bg-brand-cream border-2 border-brand-gold flex items-center justify-center rounded-xl font-bold text-brand-brown">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-brand-brown mb-2">{item.title}</h4>
                      <p className="text-brand-brown/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="relative">

              <div className="bg-brand-gold p-12 rounded-[3rem] text-white space-y-6 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Zap size={120} />
                </div>
                <h3 className="text-3xl font-serif font-bold">Zero Plastic Impact</h3>
                <p className="text-white/80 leading-relaxed text-lg">
                  "Each 50g bar replaces 2 full bottles of liquid shampoo. We've diverted thousands of plastic bottles from Ghanaian landfills since we started."
                </p>
                <div className="pt-4">
                  <Link to="/impact" className="bg-white text-brand-gold px-8 py-3 rounded-full font-bold inline-block hover:shadow-lg transition-all">
                    View Our Impact Report
                  </Link>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-brand-peach/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. TEAM PREVIEW */}
      <section className="py-32 bg-brand-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-brown mb-4">
                The People Behind Ellora
              </h2>
              <p className="text-brand-brown/60">
                A team of innovators, scientists, and marketers united by a single vision: clean beauty for all.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link to="/team" className="text-brand-brown font-bold group flex items-center gap-2 border-b-2 border-brand-brown/20 pb-1 hover:text-brand-gold hover:border-brand-gold transition-all">
                Meet the Full Team
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <TeamCard key={member.id} member={member} compact={true} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-cream/50 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-brown">
              Real Results, <span className="text-brand-gold">Real People</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className={t.type === 'stat' ? 'md:col-span-1' : 'md:col-span-1'}>
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CONTACT SUPPORT BANNER */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-brand-brown rounded-[3rem] p-12 text-white relative overflow-hidden"
          >
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-serif font-bold mb-8">Have a Question? <br />We're Here.</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-2">
                    <p className="text-brand-gold text-xs uppercase tracking-widest font-bold">Email Us</p>
                    <p className="text-white/80">elloracosmeticsgh@gmail.com</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-brand-gold text-xs uppercase tracking-widest font-bold">Call Us</p>
                    <p className="text-white/80">0508396233</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-brand-gold text-xs uppercase tracking-widest font-bold">Visit Us</p>
                    <p className="text-white/80">Sunyani, Ghana</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <WhatsAppButton 
                  className="bg-brand-gold text-brand-brown px-12 py-5 rounded-full text-xl font-bold flex items-center gap-3 hover:scale-105 transition-all shadow-xl"
                  message="Hi Ellora, I have a question about your products!"
                >
                  <MessageCircle size={28} />
                  Chat on WhatsApp
                </WhatsAppButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 10. FOOTER IS IN APP.JSX */}
    </div>
  );
};

export default Home;
