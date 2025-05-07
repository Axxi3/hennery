import { cva } from "class-variance-authority";
import { HTMLAttributes } from "react";
import Link from "next/link";

const classes = cva(
  "border h-12 rounded-full px-6 font-medium transition-colors duration-200 inline-flex items-center justify-center",
  {
    variants: {
      variant: {
        primary:
          "bg-[#F3631F] text-white border-[#F3631F] hover:bg-[#E05517] hover:border-[#E05517]",
        secondary:
          "border-[#F3631F] text-[#F3631F] bg-transparent hover:bg-[#FFF1EC]",
      },
    },
  }
);

type ButtonProps = {
  variant: "primary" | "secondary";
  link?: string;
} & HTMLAttributes<HTMLButtonElement>;

export default function Button({
  variant,
  className,
  children,
  link,
  ...otherProps
}: ButtonProps) {
  const combinedClasses = classes({ variant, className });

  if (link) {
    return (
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClasses}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...otherProps}>
      {children}
    </button>
  );
}
