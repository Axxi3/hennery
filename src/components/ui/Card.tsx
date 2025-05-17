import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function Card({ icon, title, description }: CardProps) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [positions, setPositions] = useState<number[][]>([]);

  useEffect(() => {
    const generatedPositions = Array.from({ length: 6 }, () => [
      15 + Math.random() * 70,
      15 + Math.random() * 70,
    ]);
    setPositions(generatedPositions);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px" }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const iconContainerVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { delay: 0.3, duration: 0.5, type: "spring", stiffness: 100 } }
  };

  const iconVariants = {
    hidden: { scale: 0.6, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { delay: 0.5, duration: 0.3, type: "spring", stiffness: 200 } }
  };

  const dotsVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({ opacity: 0.4, transition: { delay: 0.7 + (i * 0.1), duration: 0.4 } })
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.5 } }
  };

  return (
    <motion.div
      ref={cardRef}
      className="max-w-[400px] w-full rounded-3xl overflow-hidden"
      style={{ background: "radial-gradient(46% 31% at 50% 0%, #262626 0%, #141414 100%)" }}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={cardVariants}
    >
      <div className="flex flex-col items-center p-4">
        <div className="w-full aspect-[16/9] bg-black relative rounded-3xl overflow-hidden flex items-center justify-center">
          {positions.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gray-500/40 rounded-full"
              style={{ left: `${pos[0]}%`, top: `${pos[1]}%` }}
              custom={i}
              variants={dotsVariants}
            />
          ))}
          <motion.div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center relative z-10 shadow-lg shadow-orange-900/20" variants={iconContainerVariants}>
            <motion.div variants={iconVariants} className="text-white" whileHover={{ rotate: [0, -10, 10, -5, 5, 0], transition: { duration: 0.5 } }}>
              {icon}
            </motion.div>
          </motion.div>
        </div>
        <motion.div className="px-6 py-8 text-center" variants={textVariants}>
          <motion.h1 className="text-white text-2xl font-medium mb-5" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.5, delay: 0.7 }}>{title}</motion.h1>
          <motion.p className="text-gray-400 text-md leading-relaxed" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>{description}</motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}
