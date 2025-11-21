import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6 text-center">
        
        <h2 className="text-4xl md:text-6xl font-header font-bold text-white mb-8 tracking-tight">
          Let's Create Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-lime">Meaningful.</span>
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-16">
          <a href="mailto:saurabhjaiswal459@gmail.com" className="group flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-cyan group-hover:text-black transition-all duration-300">
                <Mail size={20} />
            </div>
            <span className="text-gray-300 group-hover:text-white transition-colors">saurabhjaiswal459@gmail.com</span>
          </a>

          <a href="tel:+917420037100" className="group flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-lime group-hover:text-black transition-all duration-300">
                <Phone size={20} />
            </div>
            <span className="text-gray-300 group-hover:text-white transition-colors">+91-7420037100</span>
          </a>

          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-gray-300">
                <MapPin size={20} />
            </div>
            <span className="text-gray-300">Pune, India</span>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-header font-bold tracking-tighter text-white">
                SJ
            </div>

            <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-white hover:scale-110 transition-all"><Linkedin size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-white hover:scale-110 transition-all"><Instagram size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-white hover:scale-110 transition-all"><Twitter size={24} /></a> 
                {/* Replaced Behance with Twitter Icon for demo purposes as Lucide might not have Behance in all versions, or use generic Link if strict */}
            </div>

            <p className="text-gray-600 text-sm">
                © 2025 Saurabh Jaiswal. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;