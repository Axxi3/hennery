"use client";

import { Container } from "@/components/ui/container";
import Button from "@/components/ui/button";

import { motion } from "framer-motion";
import Tag from "../ui/Tag";

export const HeroSection = () => {
  return (
    <section className=" bg-background relative overflow-hidden mt-12 flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >

            <Tag>
              <span className="">
              <span className="mr-1.5 h-2 w-2 rounded-full "></span>
              Founder-First Personal Branding
            </span>
            </Tag>
          
          </motion.div>
          
          <motion.h1 
            className="md:text-[60px]  text-[40px] font-sans font-medium tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-orange-400">We Help Entrepreneurs turn their    </span>
            <br />
            <span className="relative">
            expertise into <span className="inline-block md:mx-2">◆</span> a profitable
            </span>
            <br />
            <span className="text-orange-400">personal brand.</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
           Leverage your expertise to build a personal brand that gets trusted and followed. With a smart mix of strategy, content creation, and media systems designed for long-term growth.
</motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
             <div className="mt-0 flex justify-center gap-4">
            <Button variant="primary" >Get Started</Button>
            <Button variant="secondary" >View Projects</Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};