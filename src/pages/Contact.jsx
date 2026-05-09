import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle, Globe } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import WhatsAppButton from '../components/WhatsAppButton';
import newRicePattern from '../assets/new_rice_pattern.png';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-24 min-h-screen bg-white overflow-hidden relative">
      {/* Background Botanical Patterns */}
      <motion.div 
        initial={{ opacity: 0, rotate: -15 }}
        animate={{ opacity: 0.05, rotate: 0 }}
        transition={{ duration: 2 }}
        className="absolute -top-24 -left-24 w-[600px] h-auto pointer-events-none z-0"
      >
        <img src={newRicePattern} alt="" className="w-full h-auto" />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, rotate: 15 }}
        animate={{ opacity: 0.03, rotate: 0 }}
        transition={{ duration: 2 }}
        className="absolute bottom-0 -right-24 w-[800px] h-auto pointer-events-none z-0 rotate-180"
      >
        <img src={newRicePattern} alt="" className="w-full h-auto" />
      </motion.div>

      <section className="py-20 lg:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Professional Header Split */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-12 mb-16 lg:mb-24 border-b border-brand-brown/5 pb-12 lg:pb-16">
            <div className="lg:w-1/2">
              <span className="text-brand-gold font-black text-xs uppercase tracking-[0.4em] mb-4 lg:mb-6 block">Get In Touch</span>
              <h1 className="text-5xl md:text-8xl font-serif font-black text-brand-brown leading-[1.1] lg:leading-[0.9]">
                Let's <br /><span className="text-brand-gold italic">Connect</span>
              </h1>
            </div>
            <div className="lg:w-1/2">
              <p className="text-lg md:text-2xl text-brand-brown/60 leading-relaxed max-w-md lg:ml-auto">
                Have a question about our products, partnerships, or our impact? 
                We're here to help you embrace clean beauty.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Left: Contact Info & Socials */}
            <div className="lg:col-span-5 space-y-16">
              <div className="space-y-10">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-brand-brown/40">Contact Details</h3>
                
                <div className="space-y-8">
                  {[
                    { icon: <Mail size={20} />, title: "Email", detail: "elloracosmeticsgh@gmail.com" },
                    { icon: <Phone size={20} />, title: "Phone", detail: "+233 50 839 6233" },
                    { icon: <MapPin size={20} />, title: "Address", detail: "Sunyani, Bono Region, Ghana" }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-6 group"
                    >
                      <div className="w-12 h-12 bg-brand-cream rounded-full flex items-center justify-center text-brand-brown group-hover:bg-brand-brown group-hover:text-white transition-all">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-brand-gold mb-1">{item.title}</p>
                        <p className="text-lg font-bold text-brand-brown">{item.detail}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-brand-brown/40">Social Channels</h3>
                <div className="flex gap-4">
                  {[<FaInstagram />, <FaFacebookF />, <FaTwitter />, <Globe />].map((icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 rounded-full border border-brand-brown/10 flex items-center justify-center text-brand-brown hover:bg-brand-brown hover:text-white transition-all">
                      {icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-12">
                <WhatsAppButton 
                  message="Hi Ellora, I have a professional inquiry!"
                  className="w-full bg-brand-brown text-white py-6 rounded-3xl font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-brand-gold transition-all shadow-2xl"
                >
                  <MessageSquare size={20} />
                  Chat with us
                </WhatsAppButton>
              </div>
            </div>

            {/* Right: Modern Form */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-brand-cream/30 p-8 lg:p-16 rounded-[3rem] border border-brand-brown/5"
              >
                {submitted ? (
                  <div className="py-20 text-center space-y-6">
                    <div className="w-20 h-20 bg-brand-brown text-white rounded-full flex items-center justify-center mx-auto shadow-xl">
                      <CheckCircle size={40} />
                    </div>
                    <h4 className="text-3xl font-serif font-black text-brand-brown">Message Received</h4>
                    <p className="text-brand-brown/60 max-w-xs mx-auto">Thank you for reaching out. A member of our team will be in touch within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-brown/40 ml-4">Full Name</label>
                        <input 
                          type="text" 
                          required
                          className="w-full bg-white border border-brand-brown/5 rounded-2xl px-6 py-5 focus:ring-2 focus:ring-brand-gold outline-none transition-all placeholder:text-brand-brown/20 font-medium"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-brown/40 ml-4">Email Address</label>
                        <input 
                          type="email" 
                          required
                          className="w-full bg-white border border-brand-brown/5 rounded-2xl px-6 py-5 focus:ring-2 focus:ring-brand-gold outline-none transition-all placeholder:text-brand-brown/20 font-medium"
                          placeholder="jane@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-brand-brown/40 ml-4">Subject</label>
                      <select className="w-full bg-white border border-brand-brown/5 rounded-2xl px-6 py-5 focus:ring-2 focus:ring-brand-gold outline-none transition-all font-medium appearance-none">
                        <option>General Inquiry</option>
                        <option>Partnership/Wholesale</option>
                        <option>Product Feedback</option>
                        <option>Media/Press</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-brand-brown/40 ml-4">Message</label>
                      <textarea 
                        rows="6"
                        required
                        className="w-full bg-white border border-brand-brown/5 rounded-2xl px-6 py-5 focus:ring-2 focus:ring-brand-gold outline-none transition-all resize-none placeholder:text-brand-brown/20 font-medium"
                        placeholder="Tell us how we can help..."
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit"
                      className="group relative w-full bg-brand-gold text-brand-brown py-6 rounded-2xl font-black uppercase tracking-[0.2em] overflow-hidden hover:scale-[1.02] active:scale-95 transition-all shadow-xl"
                    >
                      <div className="relative z-10 flex items-center justify-center gap-3">
                        <Send size={20} />
                        Send Inquiry
                      </div>
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
