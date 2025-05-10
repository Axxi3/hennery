import { Brain, Lightbulb, Users } from "lucide-react";
import Card from "../ui/Card";
import Button from "../ui/button";


export default function CardContainer() {
  return (
    <div className="w-full bg-black min-h-screen py-16 px-4">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-orange-500 font-medium mb-2">WHY US</p>
        <h2 className="text-white text-4xl font-medium mb-3">Experience The Benefits Of Our Expertise</h2>
       
        <p className="text-gray-400">Real-world expertise, get powerful results</p>
      </div>

      {/* Cards Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <Card 
          icon={<Brain className="w-[35px] h-[35px]" />}
          title="Innovative Approach"
          description="Look for works that reflect a unique character and differentiate in a crowded marketplace."
        />

        {/* Card 2 */}
        <Card 
          icon={<Lightbulb className="w-[35px] h-[35px]" />}
          title="Seamless Experience"
          description="Smooth user journey flows across all devices, ensuring every interaction connects with the user."
        />

        {/* Card 3 */}
        <Card 
          icon={<Users className="w-[35px] h-[35px]" />}
          title="Ongoing Partnership"
          description="From initial partner scoping and job planning, and after ongoing support even after the project ends."
        />
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-12">
        <Button variant="primary" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 flex items-center gap-2">
          Start Pricing
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </Button>
      </div>
    </div>
  );
}
