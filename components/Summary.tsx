import React from 'react';
import { Quote } from 'lucide-react';

interface SummaryProps {
  text: string;
}

export const Summary: React.FC<SummaryProps> = ({ text }) => {
  return (
    <div className="mb-16 relative">
      <div className="absolute -top-6 -left-4 text-indigo-100 opacity-50">
        <Quote size={80} />
      </div>
      <div className="relative z-10 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <span className="w-8 h-1 bg-indigo-500 rounded-full"></span>
          Professional Summary
        </h3>
        <p className="text-slate-600 leading-relaxed text-lg">
          {text}
        </p>
      </div>
    </div>
  );
};