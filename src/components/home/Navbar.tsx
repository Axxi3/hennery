'use client';
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Why Us", href: "#why-us" },
  { label: "Mission", href: "#mission" },
  { label: "Works", href: "#works" },
  { label: "Services", href: "#services" },
  { label: "Pages", href: "#pages" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full  text-white py-8">
      <div className="max-w-4xl mx-auto px-4 ">
        {/* Rounded container with all nav elements */}
        <div className="rounded-full border bg-black border-gray-600 flex items-center justify-between px-6 py-4">
          {/* Left side - empty in this design */}
          <div className="w-16"></div>
          
          {/* Center - Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:text-white transition duration-150 ease-in-out text-base"
              >
                {link.label}
                {link.label === "Pages" && (
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1 inline-block" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </a>
            ))}
          </nav>
          
          {/* Right side - CTA Button */}
          <div>
            <a
              href="#contact"
              className="inline-flex items-center px-4 py-1.5 bg-transparent hover:bg-gray-800 text-white rounded-full transition duration-150 ease-in-out"
            >
              Let's Talk
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>

          {/* Mobile menu button - only shown on small screens */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-400 hover:text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 mt-2 rounded-lg mx-4">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}