"use client";

import { Container } from "@/components/ui/container";
import Button from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Tag from "../ui/Tag";

export const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Calculate movement based on mouse position
  const calculateMovement = (factor = 1, baseOffset = { x: 0, y: 0 }) => {
    const moveX = (mousePosition.x / window.innerWidth - 0.5) * factor;
    const moveY = (mousePosition.y / window.innerHeight - 0.5) * factor;
    
    return {
      x: baseOffset.x + moveX * 20,
      y: baseOffset.y + moveY * 20
    };
  };

  return (
    <section className="relative overflow-hidden mt-12 pb-24 flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background"></div>
        <div
          className="absolute inset-0 bg-cover bg-center z-99 opacity-20"
          style={{ backgroundImage: "url('/grid.png')" }}
        ></div>
      </div>

      {/* Floating Arrow Elements */}
      <motion.div 
        className="absolute text-purple-500 text-3xl"
        style={{
          top: "120px",
          right: "10%",
          zIndex: 5
        }}
        animate={calculateMovement(2, { x: 0, y: 0 })}
        transition={{ type: "spring", stiffness: 50 }}
      >
        ▶
      </motion.div>

      {/* <motion.div 
        className="absolute text-yellow-300 text-2xl"
        style={{
          left: "15%", 
          top: "40%",
          zIndex: 5
        }}
        animate={calculateMovement(1.5, { x: 0, y: 0 })}
        transition={{ type: "spring", stiffness: 40 }}
      >
        ◀
      </motion.div> */}

      <motion.div 
        className="absolute text-green-400 text-2xl"
        style={{
          bottom: "25%", 
          right: "25%",
          zIndex: 5
        }}
        animate={calculateMovement(1.8, { x: 0, y: 0 })}
        transition={{ type: "spring", stiffness: 45 }}
      >
        ▶
      </motion.div>

      <motion.div 
        className="absolute text-lime-300 text-2xl"
        style={{
          top: "7%", 
          left: "12%",
          zIndex: 5,
          transform: "rotate(45deg)"
        }}
        animate={calculateMovement(1.2, { x: 0, y: 0 })}
        transition={{ type: "spring", stiffness: 35 }}
      >
        ▼
      </motion.div>

      <motion.div 
        className="absolute text-orange-400 text-3xl"
        style={{
          bottom: "20%", 
          left: "20%",
          zIndex: 5
        }}
        animate={calculateMovement(1.7, { x: 0, y: 0 })}
        transition={{ type: "spring", stiffness: 30 }}
      >
        ▶
      </motion.div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <Tag>
              <span>
                <span className="mr-1.5 h-2 w-2 rounded-full"></span>
                Founder-First Personal Branding
              </span>
            </Tag>
          </motion.div>
          <motion.h1
            className="md:text-[60px] text-[40px] font-sans font-medium tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-[#F0CF3B]">We Help Entrepreneurs turn their</span>
            <br />
            <span className="relative">
              expertise into <span className="inline-block md:mx-2">◆</span> a profitable
            </span>
            <br />
            <span className="text-[#F0CF3B]">personal brand.</span>
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
              <Button variant="primary">Get Started</Button>
              <Button variant="secondary">Contact Us</Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};