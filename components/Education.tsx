import React from 'react';
import { GraduationCap } from 'lucide-react';
import { EducationItem } from '../types';

interface EducationProps {
  education: EducationItem[];
}

export const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <div className="mt-12">
      <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
        <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
          <GraduationCap className="text-indigo-600" />
          Education
        </h3>
        <div className="space-y-8">
          {education.map((edu, idx) => (
            <div key={idx} className="relative pl-6 border-l-2 border-indigo-200">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-indigo-400"></div>
              <h4 className="font-semibold text-slate-800">{edu.degree}</h4>
              <p className="text-indigo-600 text-sm font-medium">{edu.institution}</p>
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>{edu.location}</span>
                <span>{edu.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};