import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { ExternalLink, Eye } from 'lucide-react';

const CATEGORIES = ['All', 'Motion Graphics', 'eLearning', 'Storytelling', '3D'] as const;

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>('All');

  const filteredProjects = PROJECTS.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section id="work" className="py-24 bg-[#0d1221]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="border-l-4 border-lime pl-6">
            <h2 className="text-3xl md:text-4xl font-header font-bold text-white mb-2">Selected Work</h2>
            <p className="text-gray-400">A curation of my best animations and designs.</p>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-cyan text-midnight shadow-[0_0_15px_rgba(0,242,234,0.4)]'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid using Tailwind Columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group break-inside-avoid relative overflow-hidden rounded-xl bg-charcoal cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover grayscale brightness-90 contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                
                {/* Overlay Content (Visible on Hover) */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-cyan text-xs font-bold uppercase tracking-wider mb-2 block">{project.category}</span>
                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                        <button className="flex items-center gap-2 text-white text-sm font-bold border-b border-cyan pb-1 hover:text-cyan transition-colors">
                            View Project <ExternalLink size={14} />
                        </button>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;