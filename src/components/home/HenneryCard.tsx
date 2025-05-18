import { Brain, Lightbulb, Rocket } from "lucide-react";
import HenneryCard from "../ui/HenneryCard";
import HenneryTag from "../ui/HenneryTags";

// Make sure this is the updated tag
export default function HenneryCardContainer() {
  return (
    <div id="why-us" className="w-full bg-black min-h-screen py-16 px-4">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-yellow-500 uppercase font-bold text-[14px] md:text-[18px] mb-0">
          What&apos;s the secret sauce?
        </p>
        <h2 className="text-white text-[26px] md:text-[36px] lg:text-[42px] font-medium mb-1">
          The Henry Method
        </h2>
        <p className="text-gray-400 text-[16px] md:text-[18px]">
          Capture attention. Create trust. Convert opportunities.
        </p>
      </div>

      {/* Cards using Flex */}
      <div className="flex justify-center w-full">
        <div className="flex flex-wrap justify-center gap-6 w-full mx-auto">
          {/* First Row - 3 Cards */}
          <HenneryCard
            icon={<Brain className="w-8 h-8" />}
            title="Capture Your Brilliance"
            description="We turn your insights and experiences into authentic content through quick interviews and custom scripts — no overthinking, just your voice made clear."
          />
          <HenneryCard
            icon={<Lightbulb className="w-8 h-8" />}
            title="Create Authority Content"
            description="We dig deep before we create. Research, positioning, ICP clarity, brand story — so every post moves you closer to your goals."
          />
          <HenneryCard
            icon={<Rocket className="w-8 h-8" />}
            title="Convert Attention into Growth"
            description="We turn your brand into a magnet for leads, collaborations, and business outcomes — through smart systems, not gimmicks."
          />
        </div>
      </div>

      {/* Strategy Tags Section */}
      <div className="w-full flex flex-col items-center justify-center mt-12 gap-4">
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
          <HenneryTag
            name="Strategy-Driven Content"
            icon={<Lightbulb className="w-4 h-4" />}
          />
          <HenneryTag
            name="Content designed for trust and growth"
            icon={<Brain className="w-4 h-4" />}
          />
          <HenneryTag
            name="Consistent, multi-platform distribution"
            icon={<Rocket className="w-4 h-4" />}
          />
          <HenneryTag
            name="Data-Backed Improvements"
            icon={<Rocket className="w-4 h-4" />}
          />
        </div>
      </div>
    </div>
  );
}
