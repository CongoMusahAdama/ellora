import React, { useState, useEffect } from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';

const ImpactStat = ({ value, suffix = "", label, color = "text-brand-brown" }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Clean the value of non-numeric chars for calculation
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
    <div ref={ref} className="text-center p-6 bg-white rounded-3xl shadow-sm border border-brand-brown/5 flex flex-col items-center justify-center min-h-[180px] hover:shadow-md transition-shadow">
      <div className={`text-4xl md:text-5xl font-bold mb-2 flex items-baseline ${color}`}>
        <motion.span>{displayValue}</motion.span>
        <span className="text-2xl ml-1">{suffix || (value.includes('+') ? '+' : '')}</span>
      </div>
      <p className="text-brand-brown/60 text-sm font-bold uppercase tracking-widest">{label}</p>
    </div>
  );
};

export default ImpactStat;
