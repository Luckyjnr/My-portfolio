import React from 'react';
import { Mail, Github, Linkedin, MapPin, Download, Code2, Database, Server } from 'lucide-react';
import { RESUME_DATA } from '../constants';

export const Hero: React.FC = () => {
  const { personalInfo } = RESUME_DATA;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="relative bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-800 text-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center z-10">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-white">
          {personalInfo.name}
        </h1>
        <p className="text-xl md:text-2xl text-indigo-200 mb-8 font-light tracking-wide">
          {personalInfo.title}
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-slate-300 mb-10">
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-indigo-400" />
            <span>{personalInfo.location}</span>
          </div>
          <div className="hidden md:block text-slate-500">•</div>
          <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail size={18} className="text-indigo-400" />
            <span>{personalInfo.email}</span>
          </a>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-10 text-center">
          <div className="p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
            <div className="flex justify-center mb-1 text-indigo-400"><Server size={20} /></div>
            <div className="font-bold text-xl">2+</div>
            <div className="text-xs text-slate-400">Years Exp</div>
          </div>
          <div className="p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
            <div className="flex justify-center mb-1 text-indigo-400"><Code2 size={20} /></div>
            <div className="font-bold text-xl">20+</div>
            <div className="text-xs text-slate-400">API Endpoints</div>
          </div>
          <div className="p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
            <div className="flex justify-center mb-1 text-indigo-400"><Database size={20} /></div>
            <div className="font-bold text-xl">25%</div>
            <div className="text-xs text-slate-400">Efficiency Boost</div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white text-indigo-900 rounded-full font-semibold hover:bg-indigo-50 transition-all transform hover:scale-105 shadow-lg"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-indigo-700/50 backdrop-blur-sm border border-indigo-500/30 text-white rounded-full font-semibold hover:bg-indigo-700 hover:border-indigo-500 transition-all transform hover:scale-105"
          >
            <Github size={20} />
            GitHub
          </a>
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 px-6 py-3 bg-transparent border border-slate-400 text-slate-200 rounded-full font-semibold hover:bg-white/10 transition-all hover:text-white"
          >
            <Download size={20} />
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};