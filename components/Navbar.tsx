"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-8 flex justify-between items-center max-w-7xl">
        <Link href="#" className="text-2xl font-extrabold text-[#D32F2F] tracking-tight">
          4Found
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="font-medium hover:text-[#D32F2F] transition-colors">Services</a>
          <a href="#process" className="font-medium hover:text-[#D32F2F] transition-colors">Process</a>
          <a href="#portfolio" className="font-medium hover:text-[#D32F2F] transition-colors">Portfolio</a>
          <a href="#pricing" className="font-medium hover:text-[#D32F2F] transition-colors">Pricing</a>
          <a href="#contact" className="btn-primary px-6 py-2 rounded-xl text-white font-semibold shadow-[0_4px_14px_rgba(211,47,47,0.3)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(211,47,47,0.4)] transition-all">
            Get Started
          </a>
          
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 dark:text-gray-100">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#1A1A1A] shadow-lg border-t border-gray-100 dark:border-gray-800 py-4 flex flex-col items-center gap-4">
          <a href="#services" onClick={() => setIsOpen(false)} className="w-full text-center py-2 font-medium">Services</a>
          <a href="#process" onClick={() => setIsOpen(false)} className="w-full text-center py-2 font-medium">Process</a>
          <a href="#portfolio" onClick={() => setIsOpen(false)} className="w-full text-center py-2 font-medium">Portfolio</a>
          <a href="#pricing" onClick={() => setIsOpen(false)} className="w-full text-center py-2 font-medium">Pricing</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="btn-primary w-11/12 py-3 rounded-xl text-center text-white font-semibold">
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
