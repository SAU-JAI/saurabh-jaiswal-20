import React from 'react';
import { Trophy, GraduationCap, Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0d1221] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-[3/4] md:aspect-square lg:aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-cyan mix-blend-color opacity-20 z-10"></div>
                <img 
                    src="https://picsum.photos/600/800?grayscale" 
                    alt="Saurabh Jaiswal" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Floating Badge */}
                <div className="absolute bottom-8 right-8 z-20 bg-midnight/90 backdrop-blur-md p-4 rounded-xl border border-lime/30 shadow-xl max-w-[200px]">
                    <div className="flex items-center gap-2 text-lime mb-1">
                        <Trophy size={18} />
                        <span className="font-bold text-sm">Achievement</span>
                    </div>
                    <p className="text-white text-xs leading-tight">"Employee of the Month" for outstanding performance.</p>
                </div>
            </div>
            {/* Background decorative elements */}
            <div className="absolute -top-10 -left-10 w-24 h-24 border-t-2 border-l-2 border-cyan opacity-50"></div>
            <div className="absolute -bottom-10 -right-10 w-24 h-24 border-b-2 border-r-2 border-lime opacity-50"></div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-sm font-bold text-cyan tracking-widest uppercase mb-2">Who I Am</h2>
            <h3 className="text-4xl md:text-5xl font-header font-bold text-white mb-8 leading-tight">
                Designing <span className="text-gray-500">Motion.</span> <br />
                Crafting <span className="text-gray-500">Stories.</span>
            </h3>
            
            <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                <p>
                    I am a creative professional artist and animator specializing in <span className="text-white font-medium">visual storytelling, entertainment, and eLearning</span>. 
                    I blend technical skills with artistic vision to deliver impactful work that resonates with audiences.
                </p>
                <p>
                    From initial sketches to final renders, I thrive on the process of bringing static ideas to life through movement and color.
                </p>
            </div>

            <div className="mt-10 p-6 bg-white/5 rounded-xl border-l-4 border-lime">
                <div className="flex items-start gap-3">
                    <GraduationCap className="text-lime mt-1 flex-shrink-0" size={24} />
                    <div>
                        <h4 className="text-white font-bold text-lg">B.Sc. Media, Graphics & Animation</h4>
                        <p className="text-gray-400 text-sm">Yashwantrao Chavan Maharashtra Open University</p>
                    </div>
                </div>
            </div>

            <div className="mt-10 flex gap-4">
                <div className="flex-1 p-4 bg-midnight rounded-lg border border-white/10 text-center">
                    <span className="block text-3xl font-bold text-white mb-1">4+</span>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">Years Exp.</span>
                </div>
                <div className="flex-1 p-4 bg-midnight rounded-lg border border-white/10 text-center">
                    <span className="block text-3xl font-bold text-white mb-1">50+</span>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">Projects</span>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;