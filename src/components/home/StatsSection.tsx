'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const StatsSection = () => {
  const [counts, setCounts] = useState({
    'activeUsers': 0,
    'rating': 0,
    'reviews': 0,
    'satisfied': 0
  });
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const stats = [
    { id: 'activeUsers', finalValue: 150, suffix: 'k+', label: 'Active Users', formatter: (val) => `${Math.floor(val)}k+` },
    { id: 'rating', finalValue: 4.9, suffix: '', label: 'Rating out of 5', formatter: (val) => val.toFixed(1) },
    { id: 'reviews', finalValue: 99, suffix: 'k+', label: 'Positive Reviews', formatter: (val) => `${Math.floor(val)}k+` },
    { id: 'satisfied', finalValue: 85, suffix: 'k+', label: 'Users Satisfied', formatter: (val) => `${Math.floor(val)}k+` }
  ];

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // Animation duration in ms
      const frameDuration = 1000 / 60; // 60fps
      const totalFrames = Math.round(duration / frameDuration);
      
      let frame = 0;
      const timerId = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const easeOutQuad = progress * (2 - progress); // Easing function
        
        if (frame === totalFrames) {
          clearInterval(timerId);
          setCounts({
            'activeUsers': 150,
            'rating': 4.9,
            'reviews': 99,
            'satisfied': 85
          });
        } else {
          setCounts({
            'activeUsers': 150 * easeOutQuad,
            'rating': 4.9 * easeOutQuad,
            'reviews': 99 * easeOutQuad,
            'satisfied': 85 * easeOutQuad
          });
        }
      }, frameDuration);
      
      return () => clearInterval(timerId);
    }
  }, [isInView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20 
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="w-full bg-black text-white py-16" ref={ref}>
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center py-8 border-r border-gray-700 last:border-r-0"
              variants={itemVariants}
            >
              <motion.h2 
                className="text-5xl font-medium mb-2 flex items-center justify-center"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
              >
                {stat.formatter(counts[stat.id])}
              </motion.h2>
              <motion.p 
                className="text-gray-400"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default StatsSection;