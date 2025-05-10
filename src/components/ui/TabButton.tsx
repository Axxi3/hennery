'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TabButtonProps {
  heading: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

const TabButton = ({ heading, description, isActive, onClick }: TabButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className={`
        relative cursor-pointer rounded-lg border border-white/10
        ${isActive ? 'bg-white/5' : 'bg-transparent'}
        transition-all duration-300
      `}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      layout
    >
      <div className="relative pl-6 pr-4 py-6">
        {/* Left border indicator */}
        <motion.div 
          className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-orange-500 to-orange-50"
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isActive ? '100%' : isHovered ? '50%' : '0%',
            opacity: isActive ? 1 : isHovered ? 0.7 : 0
          }}
          transition={{ duration: 0.3 }}
        />

        <h3 className={`font-display text-2xl font-light mb-3 transition-colors duration-200 ${isActive ? 'text-white' : 'text-gray-400'}`}>
          {heading}
        </h3>
        
        <AnimatePresence>
          {isActive && (
            <motion.p 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-gray-400 text-lg overflow-hidden"
            >
              {description}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default TabButton;