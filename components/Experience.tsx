import React from 'react';
import { EXPERIENCE } from '../constants';
import { Calendar, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-midnight relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-header font-bold text-white mb-4">Experience</h2>
          <p className="text-gray-400">My professional journey in the creative industry.</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan via-purple-500 to-transparent -translate-x-1/2 md:translate-x-0 opacity-30"></div>

          <div className="flex flex-col gap-12">
            {EXPERIENCE.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={item.id} className={`flex flex-col md:flex-row items-start md:items-center relative ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <div className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10 ${item.current ? 'bg-cyan border-cyan shadow-[0_0_15px_rgba(0,242,234,0.6)] animate-pulse' : 'bg-midnight border-gray-600'}`}></div>

                  {/* Content Width Spacer for Desktop alignment */}
                  <div className="hidden md:block w-1/2"></div>

                  {/* Card */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'}`}>
                    <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl hover:bg-white/10 hover:border-cyan/30 transition-all duration-300 group">
                      <div className={`flex flex-col gap-2 ${isLeft ? 'md:items-end' : 'items-start'}`}>
                        <span className={`inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full mb-2 ${item.current ? 'bg-cyan/20 text-cyan' : 'bg-white/10 text-gray-400'}`}>
                            <Calendar size={12} /> {item.period}
                        </span>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan transition-colors">{item.role}</h3>
                        <div className={`flex items-center gap-2 text-lime font-medium text-sm ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                            <Briefcase size={14} />
                            {item.company}
                        </div>
                        <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                            {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;