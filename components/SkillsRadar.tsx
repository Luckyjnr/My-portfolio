import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import { SkillGroup } from '../types';

interface SkillsRadarProps {
  skills: SkillGroup[];
}

export const SkillsRadar: React.FC<SkillsRadarProps> = ({ skills }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Chart Section */}
      <div className="h-[400px] w-full bg-slate-50 rounded-2xl border border-slate-100 p-4">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skills}>
            <PolarGrid stroke="#e2e8f0" />
            <PolarAngleAxis dataKey="category" tick={{ fill: '#475569', fontSize: 14, fontWeight: 500 }} />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
            <Radar
              name="Skill Level"
              dataKey="value"
              stroke="#4f46e5"
              strokeWidth={3}
              fill="#6366f1"
              fillOpacity={0.5}
            />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              itemStyle={{ color: '#4f46e5', fontWeight: 600 }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* List Section */}
      <div className="space-y-6">
        {skills.map((skill) => (
          <div key={skill.category} className="group">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-bold text-slate-800 text-lg group-hover:text-indigo-600 transition-colors">
                {skill.category}
              </h4>
              <span className="text-sm font-mono text-indigo-500">{skill.value}%</span>
            </div>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden mb-3">
              <div 
                className="h-full bg-indigo-500 rounded-full transition-all duration-1000 ease-out" 
                style={{ width: `${skill.value}%` }}
              ></div>
            </div>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span key={item} className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-sm rounded-md shadow-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};