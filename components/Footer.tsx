import Link from "next/link";
import { Mail } from "lucide-react";
import { FaInstagram, FaFacebookF, FaYoutube, FaDiscord, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white py-16 border-t border-[#1F1F1F]">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="#" className="text-3xl font-extrabold text-[#D32F2F] tracking-tight block mb-4">
              4Found
            </Link>
            <p className="text-gray-400 max-w-sm mb-6">
              An emerging startup built by ambitious college students. We craft modern, responsive, and scalable software solutions.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#D32F2F] transition-colors"><FaInstagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#D32F2F] transition-colors"><FaFacebookF size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#D32F2F] transition-colors"><FaYoutube size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#D32F2F] transition-colors"><FaDiscord size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#D32F2F] transition-colors"><FaGithub size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="flex flex-col gap-3">
              <li className="text-gray-400 flex items-center gap-2"><Mail size={16} /> main@4found.in</li>
              <li className="text-gray-400">Tamil Nadu, India</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#1F1F1F] text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} 4Found. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
