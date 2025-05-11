import { Brain, Lightbulb, Users } from "lucide-react";
import Card from "../ui/Card";


export default function CardContainer() {
  return (
    <div className="w-full bg-black min-h-screen py-16 px-4">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-orange-500 font-medium mb-2">WHY US</p>
        <h2 className="text-white text-4xl font-medium mb-3">Why Henry Brand Labs?</h2>
        <p className="text-gray-400">Because good content is everywhere. But great brands? They&apos;re built differently.</p>
      </div>

      {/* Cards using Flex */}
      <div className="flex justify-center w-full">
        <div className="flex flex-wrap justify-center gap-6 w-full mx-auto">
          {/* First Row - 3 Cards */}
          <Card 
            icon={<Brain className="w-8 h-8" />}
            title="Founder-First Approach"
            description="We build brands around you — your voice, your story, your expertise. No cookie-cutter strategies. No fake personas."
          />
          <Card 
            icon={<Lightbulb className="w-8 h-8" />}
            title="Strategy Before Content"
            description="We dig deep before we create. Research, positioning, ICP clarity, brand story — so every post moves you closer to your goals."
          />
          <Card 
            icon={<Users className="w-8 h-8" />}
            title="Creative That Converts"
            description="Our design, scripts, and systems are crafted not just to look good — but to drive leads, trust, and sales."
          />
          
          {/* Second Row - 2 Cards */}
          <Card 
            icon={<Users className="w-8 h-8" />}
            title="Multi-Platform Execution"
            description="From Instagram to LinkedIn, we optimize your presence everywhere your audience lives — consistently and predictably."
          />
          <Card 
            icon={<Users className="w-8 h-8" />}
            title="Done-With-You, Not Just Done-For-You"
            description="We collaborate with you, not just for you. Your brand stays authentic, your voice stays true — we just scale it."
          />
        </div>
      </div>

      {/* CTA Button */}
      {/* <div className="w-full px-[20%] flex-col  items-center justify-center mt-[30px] hidden lg:flex gap-10">
          <div className="w-full items-center justify-center flex gap-10">
            <Tag>Strategy before creation</Tag>
            <Tag>Content designed for trust and growth</Tag>
            </div>
            <div className="w-full items-center justify-center flex gap-10">
            <Tag>Consistent, multi-platform distribution</Tag>
            <Tag>Systems that scale your brand — and your business</Tag>
            </div>
        
        </div> */}
    </div>
  );
}
