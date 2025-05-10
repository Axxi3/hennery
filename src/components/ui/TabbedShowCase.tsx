'use client';

import { SetStateAction, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TabbedShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      heading: 'Grapho AI',
      description: 'That\'s Why We Leverage AI to Create Impactful, Lasting Experiences that Engage and Transform Every Interaction.',
      image: 'https://images.pexels.com/photos/7047002/pexels-photo-7047002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      heading: 'VectraOps',
      description: '34% increase in online sales.',
      image: 'https://images.pexels.com/photos/7047002/pexels-photo-7047002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      heading: 'Signum',
      description: '67% increase in new customers.',
      image: 'https://images.pexels.com/photos/7047002/pexels-photo-7047002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  const handleTabClick = (index: SetStateAction<number>) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full  text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center lg:flex-row gap-12">
          {/* Left side tabs */}
          <div className="w-full lg:w-2/5 flex flex-col space-y-6">
            {tabs.map((tab, index) => (
              <div 
                key={index}
                className={`cursor-pointer border-l-4 ${activeTab === index ? 'border-white' : 'border-gray-700'} pl-6 py-6 transition-all duration-300`}
                onClick={() => handleTabClick(index)}
              >
                <h3 className="text-2xl lg:text-3xl font-semibold mb-3">{tab.heading}</h3>
                
                <AnimatePresence>
                  {activeTab === index && (
                    <motion.p 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-400 text-lg overflow-hidden"
                    >
                      {tab.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right side image */}
          <div className="w-full lg:w-3/5">
            <div className="aspect-[4/3] w-full max-w-lg mx-auto lg:mx-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full p-4 bg-gray-900 rounded-lg overflow-hidden"
                >
                  <img 
                    src={tabs[activeTab].image} 
                    alt={tabs[activeTab].heading} 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabbedShowcase;