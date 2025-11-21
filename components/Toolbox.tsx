import React from 'react';
import { SKILLS } from '../constants';
import { Cpu, PenTool, Video, Box, Layers, MonitorPlay } from 'lucide-react';

const Toolbox: React.FC = () => {
  // Helper to get a generic icon based on name (simulated logic)
  const getIcon = (name: string) => {
    if (name.includes('Shop') || name.includes('Paint')) return <PenTool size={24} />;
    if (name.includes('Effects') || name.includes('Premiere')) return <Video size={24} />;
    if (name.includes('Blender') || name.includes('3D')) return <Box size={24} />;
    if (name.includes('Animat')) return <Layers size={24} />;
    return <MonitorPlay size={24} />;
  };

  return (
    <section className="py-20 bg-midnight relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-cyan/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-lime/5 rounded-full blur-3xl"></div>
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-12 border-l-4 border-cyan pl-6">
          <h2 className="text-3xl md:text-4xl font-header font-bold text-white mb-2">The Toolbox</h2>
          <p className="text-gray-400 max-w-lg">
            My arsenal of creative software and core competencies tailored for visual storytelling.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/5 rounded-xl hover:bg-white/10 hover:border-cyan/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
              <div className="relative flex flex-col items-center text-center gap-3">
                <div className="text-cyan group-hover:text-lime transition-colors duration-300">
                    {getIcon(skill.name)}
                </div>
                <h3 className="font-semibold text-white group-hover:text-white transition-colors">{skill.name}</h3>
                <span className="text-xs text-gray-500 uppercase tracking-wider">{skill.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toolbox;