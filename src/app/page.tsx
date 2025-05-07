import { HeroSection } from "@/components/home/HeroSection";
import LogoTicker from "@/components/logos/LogoCarousel";
import Navbar from "@/components/ui/Navbar";


export default function Home() {
  return (
    <main className="min-h-screen py-24">
      
      <HeroSection />
      <LogoTicker />
    </main>
  );
}