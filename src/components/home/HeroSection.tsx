"use client";

import { Container } from "@/components/ui/container";
import Button from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Tag from "../ui/Tag";
import { ArrowRight, Zap, Target, TrendingUp, Award, Users } from "lucide-react";
import CalBooker from "./CalBooker"; // Adjust path as needed

export const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Initialize window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calculate movement based on mouse position
  const calculateMovement = (factor = 1, baseOffset = { x: 0, y: 0 }) => {
    if (!isMounted) {
      return { x: baseOffset.x, y: baseOffset.y };
    }

    const moveX = (mousePosition.x / windowSize.width - 0.5) * factor;
    const moveY = (mousePosition.y / windowSize.height - 0.5) * factor;

    return {
      x: baseOffset.x + moveX * 20,
      y: baseOffset.y + moveY * 20,
    };
  };

  // Minor floating animations
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "easeInOut"
    }
  };

  const floatingAnimationSlow = {
    y: [0, -8, 0],
    x: [0, 5, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "easeInOut"
    }
  };

  const rotatingAnimation = {
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "easeInOut"
    }
  };

  const handleBookingClick = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <>
      <section className="relative overflow-hidden mt-18 pb-24 flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background"></div>
          <div
            className="absolute inset-0 bg-cover bg-center z-99 opacity-20"
            style={{ backgroundImage: "url('/grid.png')" }}
          ></div>
        </div>

        {/* Floating Elements - Top Right */}
        <motion.div
          className="absolute top-20 right-[10%] z-5"
          animate={{
            ...calculateMovement(2, { x: 0, y: 0 }),
            ...floatingAnimation
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        >
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-4 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="bg-purple-500 rounded-full p-2">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-purple-300">Founders</div>
                <div className="text-xs text-purple-200">Personal Brand</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Elements - Top Left */}
        <motion.div
          className="absolute top-[7%] left-[12%] z-5"
          animate={{
            ...calculateMovement(1.2, { x: 0, y: 0 }),
            ...rotatingAnimation
          }}
          transition={{ type: "spring", stiffness: 35, damping: 12 }}
        >
          <div className="bg-gradient-to-br from-yellow-400/20 to-orange-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-xl p-3 shadow-lg rotate-12">
            <Zap className="w-5 h-5 text-yellow-400 fill-current" />
          </div>
        </motion.div>

        {/* Floating Elements - Bottom Left */}
        <motion.div
          className="absolute bottom-[20%] left-[20%] z-5"
          animate={{
            ...calculateMovement(1.7, { x: 0, y: 0 }),
            ...floatingAnimation
          }}
          transition={{ type: "spring", stiffness: 30, damping: 18 }}
        >
          <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-4 shadow-lg">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-orange-400" />
              <div className="text-sm font-medium text-orange-300">Coaches</div>
            </div>
          </div>
        </motion.div>

        {/* Additional floating elements for more visual interest */}
        <motion.div
          className="absolute top-[35%] right-[5%] z-5"
          animate={{
            ...calculateMovement(1.5, { x: 0, y: 0 }),
            ...floatingAnimationSlow
          }}
          transition={{ type: "spring", stiffness: 40, damping: 16 }}
        >
          <div className="bg-gradient-to-br from-rose-500/20 to-pink-600/20 backdrop-blur-sm border border-rose-500/30 rounded-full p-3 shadow-lg">
            <Award className="w-4 h-4 text-rose-400" />
          </div>
        </motion.div>

        <motion.div
          className="absolute top-[60%] left-[8%] z-5"
          animate={{
            ...calculateMovement(1.3, { x: 0, y: 0 }),
            ...rotatingAnimation
          }}
          transition={{ type: "spring", stiffness: 38, damping: 14 }}
        >
          <div className="bg-gradient-to-br from-indigo-500/20 to-purple-600/20 backdrop-blur-sm border border-indigo-500/30 rounded-xl p-3 shadow-lg -rotate-6">
            <Target className="w-4 h-4 text-indigo-400" />
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-[40%] right-[12%] z-5"
          animate={{
            ...calculateMovement(1.1, { x: 0, y: 0 }),
            ...floatingAnimationSlow
          }}
          transition={{ type: "spring", stiffness: 32, damping: 12 }}
        >
          <div className="w-2 h-2 bg-gradient-to-br from-yellow-400 to-orange-500 rotate-45 opacity-70 shadow-lg"></div>
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
              <span className="text-[#F0CF3B]">
                We Help Entrepreneurs turn their
              </span>
              <br />
              <span className="relative">
                expertise into <span className="inline-block md:mx-2">◆</span> a
                profitable
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
              Leverage your expertise to build a personal brand that gets trusted
              and followed. With a smart mix of strategy, content creation, and
              media systems designed for long-term growth.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              <div className="mt-0 flex justify-center gap-4">
                <Button 
                  variant="secondary" 
                  className="flex items-center gap-2"
                  onClick={handleBookingClick}
                >
                  Book Free Discovery Call
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Booking Modal */}
      {isBookingModalOpen && (
        <CalBooker
          username="henry-brand-labs" // Replace with your actual Cal.com username
          eventSlug="/30min" // Replace with your actual event slug
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};