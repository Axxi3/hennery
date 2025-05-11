import CardContainer from "@/components/home/CardContainer";
import { HeroSection } from "@/components/home/HeroSection";
import Introduction from "@/components/home/Introduction";
import Navbar from "@/components/home/Navbar";
import StatsSection from "@/components/home/StatsSection";

import LogoTicker from "@/components/logos/LogoCarousel";

import TabSection from "@/components/home/TabSection";
import Process from "@/components/home/ProcessContainer";
import { BentoGridSecondDemo } from "@/grid/bentogridcolumn";
import FAQSection from "@/components/home/FaqSection";
import Foot from "@/components/home/Footer";
import HenneryCardContainer from "@/components/home/HenneryCard";





export default function Home() {
  return (
    <main className="min-h-screen pt-24">
      <Navbar/>
    
      <HeroSection />
      <LogoTicker />

      <CardContainer/>
   
      <Introduction/>
      <StatsSection/>
      <TabSection/>
      <HenneryCardContainer/>
      <Process/>
      <BentoGridSecondDemo/>
      <FAQSection/>
      <Foot/>
     
      
      
      
    </main>
  );
}