import React from 'react';
import { Calendar, Building2, CheckCircle2 } from 'lucide-react';
import { Experience } from '../types';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
  return (
    <div className="relative container mx-auto px-4">
      {/* Central Line - Desktop */}
      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-200 rounded-full"></div>
      
      {/* Side Line - Mobile */}
      <div className="block lg:hidden absolute left-8 top-2 bottom-2 w-0.5 bg-slate-200 rounded-full"></div>

      <div className="space-y-12">
        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div key={exp.id} className={`flex flex-col lg:flex-row items-center justify-between ${isLeft ? '' : 'lg:flex-row-reverse'}`}>
              
              {/* Content Card */}
              <div className="w-full lg:w-5/12 mb-8 lg:mb-0 pl-12 lg:pl-0">
                <div className={`relative p-6 bg-white rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow duration-300 ${isLeft ? 'lg:text-right' : 'lg:text-left'}`}>
                  
                  {/* Connector Dot for Desktop */}
                  <div className={`hidden lg:block absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm z-10 
                    ${isLeft ? '-right-[calc(8.333333%+1rem)]' : '-left-[calc(8.333333%+1rem)]'}
                  `}></div>

                  {/* Connector Dot for Mobile */}
                  <div className="block lg:hidden absolute top-8 -left-[2.5rem] w-4 h-4 rounded-full bg-indigo-600 border-4 border-slate-50 shadow-sm z-10"></div>

                  {/* Header */}
                  <div className={`flex flex-col ${isLeft ? 'lg:items-end' : 'lg:items-start'} mb-4`}>
                    <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-indigo-600 font-medium">
                      <Building2 size={16} />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-sm mt-1">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 mb-4 font-medium">{exp.description}</p>

                  {/* Achievements */}
                  <ul className={`space-y-2 ${isLeft ? 'lg:items-end' : 'lg:items-start'}`}>
                    {exp.achievements.map((item, i) => (
                      <li key={i} className={`flex items-start gap-2 text-sm text-slate-600 ${isLeft ? 'lg:flex-row-reverse lg:text-right' : ''}`}>
                        <CheckCircle2 size={16} className="text-indigo-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Tags */}
                  {exp.technologies && (
                    <div className={`flex flex-wrap gap-2 mt-6 ${isLeft ? 'lg:justify-end' : 'lg:justify-start'}`}>
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium border border-slate-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Spacer for Center Line */}
              <div className="hidden lg:block w-2/12"></div>
              
              {/* Empty Space to balance flex */}
              <div className="w-full lg:w-5/12 hidden lg:block"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};