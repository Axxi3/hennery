"use client";
import { cn } from "./utils";
import React from "react";
import { BentoGridItem } from "./bento-grid";
import { Variants } from "framer-motion";
import {
  IconClipboardCopy,
  IconBrandInstagram,
  IconBrush,
  IconMicrophone,
  IconVideo,
  IconCurrencyDollar
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export function BentoGridSecondDemo() {
  return (
    <div className="w-full bg-black py-24">
      <div className="max-w-6xl flex flex-col items-center mx-auto text-center mb-12">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-yellow-500 font-bold text-[14px] md:text-[22px] mb-2"
        >
          WHY US?
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white text-[26px] md:text-[36px] lg:text-[42px] font-medium mb-3"
        >
          What You Get
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-400 text-[16px] md:text-[18px] max-w-4xl"
        >
          When you work with HenryBrandLabs, you&apos;re not just getting content — you&apos;re building a magnetic personal brand that commands attention and drives growth.
        </motion.p>
      </div>
   
      <div className="max-w-4xl px-6 mx-auto space-y-6">
        {/* First Row: 3 items */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch">
          {items.slice(0, 3).map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="flex-1"
            >
              <div className="h-full">
                <BentoGridItem
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  className={cn("[&>p:text-lg] h-[350px]", item.className)}
                  icon={item.icon}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Second Row: 2 items */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch">
          {items.slice(3, 5).map((item, i) => (
            <motion.div
              key={i + 3}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="flex-1"
            >
              <div className="h-[400px]">
                <BentoGridItem
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  className={cn("[&>p:text-lg] h-[400px]", item.className)}
                  icon={item.icon}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const SkeletonOne: React.FC = () => {
  const variants: Variants = {
    animate: {
      opacity: [0.6, 1, 0.6],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };
  
  const itemVariants: Variants = {
    animate: {
      x: [0, 10, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  return (
    <motion.div
      animate="animate"
      variants={variants}
      className="flex flex-1 w-full min-h-[9.2rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col justify-center items-center"
    >
      <motion.div
        variants={itemVariants}
        className="flex w-full flex-row rounded-lg border border-neutral-100 dark:border-white/[0.2] p-3 items-center space-x-3 bg-white dark:bg-black/70 mb-2"
      >
        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center shrink-0">
          <IconClipboardCopy className="h-4 w-4 text-white" />
        </div>
        <div className="h-4 w-full bg-orange-100 dark:bg-orange-900/20 rounded-full" />
      </motion.div>
      
      <motion.div
        variants={itemVariants}
        className="flex w-3/4 flex-row rounded-lg border border-neutral-100 dark:border-white/[0.2] p-3 items-center space-x-3 bg-white dark:bg-black/70"
      >
        <div className="h-4 w-full bg-orange-100 dark:bg-orange-900/20 rounded-full" />
        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center shrink-0">
          <IconBrandInstagram className="h-4 w-4 text-white" />
        </div>
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo: React.FC = () => {
  const containerVariants: Variants = {
    animate: {
      opacity: [0.6, 1, 0.6],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  const itemVariants: Variants = {
    animate: {
      width: ["70%", "100%", "70%"],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  const colors = [
    "bg-gradient-to-r from-pink-500 to-purple-500",
    "bg-gradient-to-r from-blue-500 to-teal-500",
    "bg-gradient-to-r from-orange-500 to-amber-500",
    "bg-gradient-to-r from-green-500 to-emerald-500",
  ];

  return (
    <motion.div
      animate="animate"
      variants={containerVariants}
      className="flex flex-1 w-full h-[16rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col justify-center items-center space-y-2"
    >
      {colors.map((color, i) => (
        <motion.div
          key={`design-element-${i}`}
          variants={itemVariants}
          className={`h-6 rounded-md ${color}`}
          style={{
            width: `${65 + Math.random() * 20}%`,
            marginLeft: i % 2 === 0 ? "0" : "auto",
          }}
        />
      ))}
      
      <motion.div className="text-white/80 text-sm text-center mt-2">
        Visual identity & brand voice guidelines
      </motion.div>
    </motion.div>
  );
};

const SkeletonThree: React.FC = () => {
  const containerVariants: Variants = {
    animate: {
      opacity: [0.6, 1, 0.6],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  const microVariants: Variants = {
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  const wavesVariant: Variants = {
    animate: {
      opacity: [0.2, 0.8, 0.2],
      scale: [1, 1.2, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  return (
    <motion.div
      animate="animate"
      variants={containerVariants}
      className="flex flex-1 w-full h-[16rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col justify-center items-center relative"
    >
      <motion.div 
        variants={microVariants}
        className="h-16 w-16 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center z-10"
      >
        <IconMicrophone className="h-8 w-8 text-white" />
      </motion.div>
      
      {[1, 2, 3].map((_, i) => (
        <motion.div
          key={`wave-${i}`}
          variants={wavesVariant}
          className="absolute h-16 w-16 rounded-full border-2 border-orange-500"
          style={{
            scale: 1 + (i * 0.3),
          }}
        />
      ))}
      
      <motion.div className="text-white/80 text-sm text-center mt-6 z-10">
        Just 1-2 hours a week of effortless content creation
      </motion.div>
    </motion.div>
  );
};

const SkeletonFour: React.FC = () => {
  const containerVariants: Variants = {
    animate: {
      opacity: [0.6, 1, 0.6],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  const videoVariants: Variants = {
    animate: (i: number) => ({
      y: [0, i % 2 === 0 ? -5 : 5, 0],
      x: [0, i % 3 === 0 ? -5 : i % 3 === 1 ? 5 : 0, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        delay: i * 0.2,
      },
    }),
  };

  const platforms = [
    { name: "Instagram", color: "bg-gradient-to-r from-purple-600 to-pink-500" },
    { name: "LinkedIn", color: "bg-gradient-to-r from-blue-600 to-blue-400" },
    { name: "YouTube", color: "bg-gradient-to-r from-red-600 to-red-400" },
    { name: "Twitter", color: "bg-gradient-to-r from-blue-400 to-blue-300" },
  ];

  return (
    <motion.div
      animate="animate"
      variants={containerVariants}
      className="flex flex-1 w-full h-[16rem] pb-3 dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col justify-center items-center"
    >
      <div className="grid grid-cols-2 gap-3 w-full">
        {platforms.map((platform, i) => (
          <motion.div
            custom={i}
            variants={videoVariants}
            key={`platform-${i}`}
            className={`rounded-lg ${platform.color} p-3 flex items-center justify-center h-16`}
          >
            <IconVideo className="h-5 w-5 text-white mr-2" />
            <span className="text-white text-xs font-medium">{platform.name}</span>
          </motion.div>
        ))}
      </div>
      
      <motion.div className="text-white/80 text-sm text-center mt-4">
        Polished videos, posts & consistent distribution
      </motion.div>
    </motion.div>
  );
};

const SkeletonFive: React.FC = () => {
  const containerVariants: Variants = {
    animate: {
      opacity: [0.6, 1, 0.6],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  const growVariants: Variants = {
    animate: (custom: number) => ({
      height: [`${30 + custom * 5}%`, `${50 + custom * 15}%`, `${30 + custom * 5}%`],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        repeatType: "loop",
        delay: custom * 0.1,
      },
    }),
  };

  return (
    <motion.div
      animate="animate"
      variants={containerVariants}
      className="flex flex-1 w-full h-[16rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col justify-center items-center"
    >
      <div className="w-full h-32 flex items-end justify-around mb-4">
        {[1, 2, 3, 4, 5].map((_, i) => (
          <motion.div
            custom={i}
            variants={growVariants}
            key={`bar-${i}`}
            className="w-8 bg-gradient-to-t from-green-600 to-green-400 rounded-t-md flex items-center justify-center"
          >
            <IconCurrencyDollar className="h-4 w-4 text-white" />
          </motion.div>
        ))}
      </div>
      
      <motion.div className="text-white/80 text-sm text-center">
        Turn your audience into loyal, paying customers
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: "Complete Brand Strategy",
    description: (
      <span className="text-sm">
        A clear roadmap for your brand story, audience, content pillars, and launch plan.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Custom Content Design System",
    description: (
      <span className="text-sm">
        A unique visual style and voice — consistent across all your platforms.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconBrush className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Effortless Content Pre-Production",
    description: (
      <span className="text-sm">
        Record for 1–2 hours weekly, we handle the rest to make content easy.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconMicrophone className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Full Post-Production & Distribution",
    description: (
      <span className="text-sm">
        We specialize in editing, polishing, and posting your content to help you expand your audience and establish your authority. Our expert team ensures your message is clear, engaging, and optimized for maximum impact across various platforms.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2 md:row-start-2",
    icon: <IconVideo className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Monetize With Smart Backend Systems",
    description: (
      <span className="text-sm">
        We build your website, funnels, and automations to seamlessly convert your growing audience into loyal, paying customers—aligned with your brand goals.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1 md:row-start-2 md:col-start-3",
    icon: <IconCurrencyDollar className="h-4 w-4 text-neutral-500" />,
  },
];