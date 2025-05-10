'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import TabButton from '../ui/TabButton';


 const showcaseData = [
    {
      heading: "Grapho AI",
      description: "We leverage AI to create impactful experiences that transform every interaction.",
      image: "https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg"
    },
    {
      heading: "VectraOps",
      description: "Redesigned e-commerce platform with 34% increase in sales.",
      image: "https://images.pexels.com/photos/7989247/pexels-photo-7989247.jpeg"
    },
    {
      heading: "Signum",
      description: "Brand identity refresh leading to 67% more customers.",
      image: "https://images.pexels.com/photos/8348457/pexels-photo-8348457.jpeg"
    }
  ];

const TabbedShowcaseContent = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="w-full  text-white py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left side tabs */}
          <div className="w-full lg:w-2/5 flex flex-col space-y-8">
            {showcaseData.map((tab, index) => (
              <TabButton 
                key={index}
                heading={tab.heading}
                description={tab.description}
                isActive={activeTab === index}
                onClick={() => setActiveTab(index)}
              />
            ))}
          </div>

          {/* Right side image */}
          <div className="w-full flex  items-center justify-center lg:w-3/5">
            <motion.div 
              className="relative aspect-video w-full rounded-2xl overflow-hidden bg-gray-900 shadow-2xl"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  className="w-full h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                  <img 
                    src={showcaseData[activeTab].image} 
                    alt={showcaseData[activeTab].heading} 
                    className="w-full h-full object-cover"
                  />
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="absolute bottom-0 left-0 p-6 z-20"
                  >
                    <motion.button
                      className="flex items-center text-sm font-medium text-white/90 hover:text-white group"
                      animate={{ x: isHovered ? 5 : 0 }}
                    >
                      View case study 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </motion.button>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabbedShowcaseContent;