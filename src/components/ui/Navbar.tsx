'use client';
import Image from "next/image";
import logo from "../../../public/logo.png";
import Button from "./button";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About us", href: "/about-us" },
  { label: "Services", href: "#integrations" },
  { label: "Contact Us", href: "#faqs" },
];

export default function Navbar() {
  return (
    <section className="py-3 lg:py-3 fixed top-0 z-50 shadow-sm max-w-[1520px] w-full mx-auto left-1/2 -translate-x-1/2">
      <div className="w-full max-w-screen-2xl mx-auto xl:px-[20%] lg:px-[10%] md:px-[3%] px-4">
        <div className="grid grid-cols-2 lg:grid-cols-3 border border-gray-300 rounded-lg p-2 lg:py-5 px-4 lg:px-16 md:pr-2 items-center bg-white shadow-sm">
          {/* Logo */}
          <div>
            <Image src={logo} alt="logo" className="h-12 md:h-11 w-auto" />
          </div>

          {/* Center Nav */}
          <div className="hidden lg:flex justify-center items-center">
            <nav className="flex gap-6 font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm md:text-base text-gray-600 hover:text-gray-900 rounded-full transition duration-150 ease-in-out"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu text-gray-800 block md:hidden"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <Button 
              link="https://api.whatsapp.com/send?phone=91729999480&text=Hey%20i%20saw%20your%20landing%20page%2C%20I%20am%20looking%20for%20something%20similar.%20Can%20we%20discuss%3F"
              variant="secondary"
              className="hidden md:flex items-center justify-center"
            >
              Contact Us
            </Button>
            <Button variant="primary" className="hidden md:block">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
