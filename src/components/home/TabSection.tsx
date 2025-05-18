import TabbedShowcaseContent from "./TabShowcaseContent";

export default function TabSection() {
  return (
    <div className="w-full bg-black min-h-screen pt-16 px-4">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-yellow-500 font-bold uppercase text-[14px] md:text-[18px] mb-0">
          Who Is This For?
        </p>
        <h2 className="text-white text-[26px] md:text-[36px] lg:text-[42px] font-medium mb-3">
          Experience The Benefits Of Our Expertise
        </h2>
        <p className="text-gray-400 text-[16px] md:text-[18px]">
          Real-world expertise, get powerful results
        </p>
      </div>

      {/* Cards Container */}
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center">
        {/* Card 1 */}
        <TabbedShowcaseContent />
      </div>

      {/* CTA Button */}
    </div>
  );
}
