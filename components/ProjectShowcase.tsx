import React from 'react';
import { Project } from '../types';
import { Terminal, Shield, Database, Layout } from 'lucide-react';

interface ProjectShowcaseProps {
  projects: Project[];
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <div key={project.id} className="bg-slate-800 rounded-2xl p-8 hover:bg-slate-750 border border-slate-700 hover:border-indigo-500 transition-all duration-300 group">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 mt-1 font-medium">{project.subtitle}</p>
            </div>
            <div className="p-3 bg-slate-700 rounded-xl group-hover:bg-indigo-500/20 group-hover:text-indigo-400 transition-colors">
              {project.title.includes("Safe") ? <Shield size={24} /> : <Layout size={24} />}
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-sm uppercase tracking-wider text-slate-500 font-bold mb-3 flex items-center gap-2">
              <Terminal size={14} />
              Key Implementation Details
            </h4>
            <ul className="space-y-3">
              {project.points.slice(0, 4).map((point, idx) => (
                <li key={idx} className="text-slate-300 text-sm leading-relaxed flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-slate-700">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-slate-900/50 text-indigo-300 text-xs rounded border border-indigo-500/20 font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};