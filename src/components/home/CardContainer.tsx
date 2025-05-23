import { Search, Volume2, BookOpen, Eye, Gem } from "lucide-react";
import Card from "../ui/Card";

export default function CardContainer() {
  return (
    <div className="w-full bg-black min-h-screen py-16 px-4">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-white uppercase font-bold text-[14px] md:text-[22px] mb-4">
          Why Build a Personal Brand??
        </p>
        <h2 className="text-[#F0CF3B] text-2xl md:text-4xl lg:text-5xl font-medium mb-4">
          Skill Isn&apos;t Enough — Visibility Is Everything
        </h2>
        <p className="text-gray-400 text-base md:text-lg lg:text-xl">
          You might be the best at what you do, but if no one knows you, it
          won&apos;t matter. Most founders hide behind their brand name — but
          true impact comes from stepping out, owning your voice, and becoming
          the face of your expertise.
        </p>
      </div>

      {/* Cards using Flex */}

      <div className="flex justify-center w-full">
        <div className="flex flex-wrap justify-center gap-6 w-full mx-auto">
          <Card
            icon={<Search className="w-8 h-8" />}
            title="You’re Googled Before You’re Greeted"
            description="Clients, partners, and collaborators look you up online first. If your digital presence is weak, you’re missing out."
          />
          <Card
            icon={<Volume2 className="w-8 h-8" />}
            title="Your Silence is an Opportunity — For Someone Else"
            description="The people who get noticed aren’t always the best — they’re the ones who show up. Don’t let others take the spotlight."
          />
          <Card
            icon={<BookOpen className="w-8 h-8" />}
            title="Your Experiences Are Your Strength"
            description="You don’t need to be an expert to share value. Your lessons, challenges, and insights are what make you worth following."
          />
          <Card
            icon={<Eye className="w-8 h-8" />}
            title="Trust is Built Through Familiarity"
            description="People buy from those they trust. The more they see and hear from you, the more comfortable they feel working with you."
          />
          <Card
            icon={<Gem className="w-8 h-8" />}
            title="Your Brand is an Asset, Not an Option"
            description="Personal branding isn’t a luxury — it’s a necessity. The more you invest in it, the more opportunities you unlock."
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
