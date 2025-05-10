
import TabbedShowcaseContent from "./TabShowcaseContent";


export default function TabSection() {
  return (
    <div className="w-full min-h-screen pt-16 px-4">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-orange-500 font-medium mb-2">WHY US</p>
        <h2 className="text-white text-4xl font-medium mb-3">Experience The Benefits Of Our Expertise</h2>
       
        <p className="text-gray-400">Real-world expertise, get powerful results</p>
      </div>

      {/* Cards Container */}
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center">
        {/* Card 1 */}
       <TabbedShowcaseContent/>
       
        
      </div>

      {/* CTA Button */}
      
    </div>
  );
}
