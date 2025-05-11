import React from "react";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function HenneryCard({ icon, title, description }: CardProps) {
  return (
    <div
      className="max-w-[400px] w-full rounded-3xl pt-5 overflow-hidden text-center"
      style={{
        background: "radial-gradient(46% 31% at 50% 0%, #262626 0%, #141414 100%)",
      }}
    >
      <div className="flex flex-col items-center p-4">
        {/* Title on top */}
        <h1 className="text-white text-2xl font-bold mb-6">{title}</h1>

        {/* Image section with grid background */}
        <div className="w-full aspect-[16/9] bg-black relative rounded-3xl overflow-hidden flex items-center justify-center mb-6">
          {/* Grid pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='rgba(107, 114, 128, 0.2)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
              backgroundSize: "40px 40px",
            }}
          />
          {/* Random background dots */}
          {[1, 2, 3, 4].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gray-500/40 rounded-full"
              style={{
                left: `${15 + Math.random() * 70}%`,
                top: `${15 + Math.random() * 70}%`,
              }}
            />
          ))}

          {/* Icon inside orange gradient circle */}
          <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center relative z-10 shadow-lg shadow-orange-900/20">
            {icon}
          </div>
        </div>

        {/* Description at bottom */}
        <p className="text-gray-400 text-md leading-relaxed px-2">{description}</p>
      </div>
    </div>
  );
}
