"use client";
import { cn } from "./utils";
import React from "react";
import {  BentoGridItem } from "./bento-grid";
import { Variants } from "framer-motion";
import {
  
  IconClipboardCopy,
  
  IconBrandInstagram,
  IconBrush,
  IconMicrophone,
  IconVideo,
  IconCurrencyDollar
} from "@tabler/icons-react";
import { motion } from "motion/react";

export function BentoGridSecondDemo() {
  return (
    <div className="w-full bg-black py-24">
      <div className="max-w-6xl flex flex-col items-center mx-auto text-center mb-12">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-orange-500 font-medium mb-2"
        >
          WHY US
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white text-4xl font-medium mb-3"
        >
          What You Get
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-400 max-w-4xl"
        >
          When you work with HenryBrandLabs, you&apos;re not just getting content — you&apos;re building a magnetic personal brand that commands attention and drives growth.
        </motion.p>
      </div>
   
      <div className="max-w-4xl px-8 mx-auto space-y-6">
  {/* First Row: 3 items */}
  <div className="flex flex-wrap md:flex-nowrap gap-4 items-stretch">
    {items.slice(0, 3).map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
        className="flex-1 min-w-[calc(33.333%-1rem)] h-full"
      >
        <div className="h-full">
          <BentoGridItem
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        </div>
      </motion.div>
    ))}
  </div>

  {/* Second Row: 2 items */}
  <div className="flex flex-wrap md:flex-nowrap gap-4 items-stretch">
    {items.slice(3, 5).map((item, i) => (
      <motion.div
        key={i + 3}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
        className="flex-1 min-w-[calc(50%-1rem)] h-full"
      >
        <div className="h-full">
          <BentoGridItem
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
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

const SkeletonOne = () => {
  const variants = {
    initial: {
      opacity: 0.6,
    },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };
  
  const itemVariants = {
    initial: {
      x: 0,
    },
    hover: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      variants={variants}
      className="flex flex-1 w-full h-[16rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col justify-center items-center"
    >
      <motion.div
        variants={itemVariants}
        className="flex w-full flex-row rounded-lg border border-neutral-100 dark:border-white/[0.2] p-3 items-center space-x-3 bg-white dark:bg-black/70"
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
      
      <motion.div className="text-white/80 text-sm">
        Craft your brand story, ICP research & content pillars
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
  const containerVariants = {
    initial: {
      opacity: 0.6,
    },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const itemVariants = {
    initial: {
      width: "70%",
    },
    hover: {
      width: "100%",
      transition: {
        duration: 0.5,
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
      initial="initial"
      whileHover="hover"
      variants={containerVariants}
      className="flex flex-1 w-full h-[16rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col justify-center items-center"
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

const SkeletonThree = () => {
  const containerVariants = {
    initial: {
      opacity: 0.6,
    },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };
  
  

const microVariants: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};


  const wavesVariant:Variants = {
    initial: {
      opacity: 0.5,
      scale: 1,
    },
    hover: {
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
      initial="initial"
      whileHover="hover"
      variants={containerVariants}
      className="flex flex-1 w-full h-[16rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col justify-center items-center"
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

const SkeletonFour = () => {
  const containerVariants = {
    initial: {
      opacity: 0.6,
    },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const videoVariants: Variants = {
    initial: {
      y: 0,
      x: 0,
    },
    hover: (i: number) => ({
      y: i % 2 === 0 ? -5 : 5,
      x: i % 3 === 0 ? -5 : i % 3 === 1 ? 5 : 0,
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
      },
    }),
  };

  const platforms = [
    { name: "Instagram", color: "bg-gradient-to-r from-purple-600 to-pink-500" },
    { name: "LinkedIn", color: "bg-gradient-to-r from-blue-600 to-blue-400" },
    { name: "YouTube", color: "bg-gradient-to-r from-red-600 to-red-400" },
    { name: "Twitter", color: "bg-gradient-to-r from-blue-400 to-blue-300" },
    { name: "TikTok", color: "bg-gradient-to-r from-black to-gray-800" },
  ];

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      variants={containerVariants}
      className="flex flex-1 w-full h-[16rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col justify-center items-center"
    >
      <div className="grid grid-cols-3 gap-3 w-full">
        {platforms.map((platform, i) => (
          <motion.div
            custom={i}
            variants={videoVariants}
            key={`platform-${i}`}
            className={`rounded-lg ${platform.color} p-3 flex items-center justify-center h-16 ${i === 4 && "col-span-3"}`}
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

const SkeletonFive = () => {
  const containerVariants = {
    initial: {
      opacity: 0.6,
    },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const growVariants = {
    initial: {
      height: "30%",
    },
    hover: (custom: number) => ({
      height: `${30 + custom * 15}%`,
      transition: {
        duration: 0.5,
        delay: custom * 0.1,
      },
    }),
  };

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      variants={containerVariants}
      className="flex flex-1 w-full h-[16rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col justify-center items-center"
    >
      <div className="w-full h-48 flex items-end justify-around mb-4">
        {[1, 2, 3, 4, 5].map((_, i) => (
          <motion.div
            custom={i}
            variants={growVariants}
            key={`bar-${i}`}
            className="w-12 bg-gradient-to-t from-green-600 to-green-400 rounded-t-md flex items-center justify-center"
          >
            <IconCurrencyDollar className="h-6 w-6 text-white" />
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
        We edit, polish, and post your content to grow your reach and authority.
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
