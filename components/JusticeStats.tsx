
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis } from 'recharts';
import { GBV_SENTENCE_DATA, COURT_SATISFACTION_DATA, GLOBAL_PREVALENCE_DATA } from '../constants';

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-neutral-900 border border-neutral-500 p-3 rounded shadow-xl text-xs z-50">
        <p className="text-white font-bold mb-1">{payload[0].name}</p>
        <p className="text-gray-300 font-mono">{payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

const ShadowFilter = () => (
  <defs>
    <filter id="chartShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
      <feOffset in="blur" dx="2" dy="3" result="offsetBlur" />
      <feFlood floodColor="rgba(0,0,0,0.7)" floodOpacity="0.5" result="offsetColor"/>
      <feComposite in="offsetColor" in2="offsetBlur" operator="in" result="offsetBlur"/>
      <feMerge>
        <feMergeNode in="offsetBlur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
);

export const JusticeStats: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 mt-10">
      
      {/* Context Description */}
      <div className="bg-neutral-900/50 border border-neutral-700/50 p-4 rounded-lg max-w-3xl mx-auto text-center mb-2">
        <p className="text-gray-300 text-sm leading-relaxed">
          While the law provides a framework for justice, public perception and court satisfaction rates reveal a system under strain. These figures highlight the necessity of a well-prepared, persistent approach rather than passive reliance on the process.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Chart 1: GBV Sentences */}
        <div className="bg-[#404040] rounded-xl p-6 border border-neutral-600 border-t-[#777] border-b-black/80 shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-300 transform hover:-translate-y-1">
          <div className="mb-6 text-center">
              <h4 className="text-base font-bold text-white uppercase tracking-wide drop-shadow-md">
              Public Perception (GBV)
              </h4>
              <p className="text-sm text-red-400 mt-2 font-medium drop-shadow-sm">
              <strong>72.7%</strong> believe sentences are too short.
              </p>
          </div>
          
          <div className="w-full h-56">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <ShadowFilter />
                <Pie
                  data={GBV_SENTENCE_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={80}
                  paddingAngle={4}
                  dataKey="value"
                  stroke="none"
                  style={{ filter: 'url(#chartShadow)' }}
                >
                  {GBV_SENTENCE_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend 
                  verticalAlign="bottom" 
                  height={36} 
                  iconType="circle" 
                  wrapperStyle={{ fontSize: '13px', color: '#fff', paddingTop: '15px', fontWeight: 600, textShadow: '0 1px 2px rgba(0,0,0,0.8)' }} 
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Court Satisfaction */}
        <div className="bg-[#404040] rounded-xl p-6 border border-neutral-600 border-t-[#777] border-b-black/80 shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-300 transform hover:-translate-y-1">
          <div className="mb-6 text-center">
              <h4 className="text-base font-bold text-white uppercase tracking-wide drop-shadow-md">
              Court Satisfaction
              </h4>
              <p className="text-sm text-yellow-500 mt-2 font-medium drop-shadow-sm">
              Only <strong>44.8%</strong> are satisfied with the process.
              </p>
          </div>

          <div className="w-full h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={COURT_SATISFACTION_DATA}
                layout="vertical"
                margin={{ top: 10, right: 30, left: 40, bottom: 5 }}
              >
                <ShadowFilter />
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  width={90} 
                  tick={{ fontSize: 13, fill: '#ffffff', fontWeight: 700, textShadow: '0 1px 2px rgba(0,0,0,0.8)' }} 
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(255,255,255,0.05)'}} />
                <Bar 
                  dataKey="value" 
                  radius={[0, 4, 4, 0]} 
                  barSize={28} 
                  background={{ fill: 'rgba(0,0,0,0.2)', radius: [0, 4, 4, 0] }}
                  style={{ filter: 'url(#chartShadow)' }}
                >
                  {COURT_SATISFACTION_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Global Context Bar */}
      <div className="bg-[#404040] rounded-xl p-6 border border-neutral-600 border-t-[#777] border-b-black/80 shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-300 transform hover:-translate-y-1">
          <div className="mb-6 text-center">
              <h4 className="text-base font-bold text-white uppercase tracking-wide drop-shadow-md">
              Global Context (EIU Report)
              </h4>
              <p className="text-sm text-gray-300 mt-2 font-medium drop-shadow-sm">
              Online violence is a global crisis. You are not alone.
              </p>
          </div>
          <div className="w-full h-36">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={GLOBAL_PREVALENCE_DATA}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
              >
                <ShadowFilter />
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  width={140} 
                  tick={{ fontSize: 13, fill: '#ffffff', fontWeight: 700, textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(255,255,255,0.05)'}} />
                <Bar 
                  dataKey="value" 
                  radius={[0, 4, 4, 0]} 
                  barSize={32} 
                  background={{ fill: 'rgba(0,0,0,0.2)', radius: [0, 4, 4, 0] }}
                  style={{ filter: 'url(#chartShadow)' }}
                >
                  {GLOBAL_PREVALENCE_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
      </div>
      
      <div className="text-center bg-[#2a2a2a] p-5 rounded-lg border border-neutral-600 border-t-[#555] border-b-black/50 mx-auto max-w-3xl shadow-lg">
        <p className="text-sm text-gray-200 font-medium drop-shadow-sm">
          <span className="text-cyan-400 font-bold uppercase tracking-wide">The Takeaway:</span> The system works, but it is slow and frustrating. Only <strong>9.5%</strong> of households persisted to court last year. You must be part of that percentage.
        </p>
      </div>
    </div>
  );
};
