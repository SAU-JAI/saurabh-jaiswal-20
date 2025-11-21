import React from 'react';
import { PlayCircle, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Overlay simulating video mood */}
      <div className="absolute inset-0 z-0 bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2')] bg-cover bg-center opacity-40 animate-pulse-slow"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-midnight via-midnight/80 to-transparent"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-midnight via-transparent to-midnight"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="text-cyan font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-4 animate-slide-up">
          2D Animator | Motion Graphic Artist | Storyboard Artist
        </h2>
        <h1 className="text-4xl md:text-7xl font-header font-bold text-white leading-tight mb-8 drop-shadow-lg">
          Bringing Stories to Life <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-lime">
            Through Motion & Design
          </span>
        </h1>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
          <button className="group flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-cyan hover:text-midnight hover:border-cyan transition-all duration-300">
            <PlayCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="font-bold tracking-wide">View Showreel</span>
          </button>
          <a 
            href="#work"
            className="px-8 py-4 border border-white/30 rounded-full text-white hover:bg-white hover:text-midnight transition-all duration-300 font-medium tracking-wide"
          >
            Explore Portfolio
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-70">
        <ArrowDown className="w-6 h-6 text-cyan" />
      </div>
    </section>
  );
};

export default Hero;