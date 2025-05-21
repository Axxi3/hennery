"use client";
import CardContainer from "@/components/home/CardContainer";
import Introduction from "@/components/home/Introduction";
import Navbar from "@/components/home/Navbar";

import Process from "@/components/home/ProcessContainer";
import { BentoGridSecondDemo } from "@/grid/bentogridcolumn";
import FAQSection from "@/components/home/FaqSection";
import Foot from "@/components/home/Footer";
import HenneryCardContainer from "@/components/home/HenneryCard";
import { HeroSection } from "@/components/home/HeroSection";




export default function Home() {
  return (
    <>
      {/* Global Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="h-full w-full bg-grid-pattern"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      {/* Decorative Light Effects */}
      <div className="fixed -top-40 -left-40 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed top-1/4 right-1/4 w-6 h-6 bg-orange-400/30 rounded-full blur-sm pointer-events-none"></div>
      <div className="fixed bottom-1/3 left-1/3 w-4 h-4 bg-orange-400/40 rounded-full blur-sm pointer-events-none"></div>

      <main className="min-h-screen pt-24 relative z-10">
        <Navbar />
        <HeroSection />
        <CardContainer />
        <Introduction />
        <HenneryCardContainer />
        <Process />
        <BentoGridSecondDemo />
        <FAQSection />
        <Foot />
      </main>

      {/* Global Grid CSS */}
      <style jsx global>{`
        .bg-grid-pattern {
          background-size: 50px 50px;
          background-image:
            linear-gradient(to right, rgba(255, 255, 0, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 0, 0.3) 1px, transparent 1px);
          opacity: 1;
        }

        @media (max-width: 768px) {
          .bg-grid-pattern {
            background-size: 30px 30px;
          }
        }

        body {
          overflow-x: hidden;
        }
      `}</style>
    </>
  );
}