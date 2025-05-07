import { HeroSection } from "@/components/home/HeroSection";
import LogoTicker from "@/components/logos/LogoCarousel";



export default function Home() {
  return (
    <main className="min-h-screen py-24">
      
      <HeroSection />
      <LogoTicker />
    </main>
  );
}