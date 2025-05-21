import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface TagProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  icon: React.ReactNode;
}

export default function HenneryTag({ name, icon, className, ...otherProps }: TagProps) {
  return (
    <div
      className={twMerge(
        "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111111] text-white shadow-[0_4px_24px_rgba(0,0,0,0.5)]",
        className
      )}
      {...otherProps}
    >
      <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#1f1f1f] text-yellow-500">
        {icon}
      </div>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}
