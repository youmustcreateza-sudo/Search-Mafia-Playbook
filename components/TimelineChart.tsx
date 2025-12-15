
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  CartesianGrid
} from 'recharts';
import { TIMELINE_DATA } from '../constants';

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-neutral-900 border border-neutral-600 p-3 rounded shadow-xl z-50">
        <p className="text-cyan-400 font-bold text-sm">{data.stage}</p>
        <p className="text-gray-200 text-xs mt-1">{data.description}</p>
        <p className="text-yellow-500 font-bold text-lg mt-2">{data.days} <span className="text-xs font-normal text-gray-400">Days (Est.)</span></p>
      </div>
    );
  }
  return null;
};

const ShadowFilter = () => (
  <defs>
    <filter id="timelineShadow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />
      <feOffset in="blur" dx="4" dy="4" result="offsetBlur" />
      <feFlood floodColor="rgba(0,0,0,0.6)" result="offsetColor"/>
      <feComposite in="offsetColor" in2="offsetBlur" operator="in" result="offsetBlur"/>
      <feMerge>
        <feMergeNode in="offsetBlur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
);

export const TimelineChart: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 min-h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={TIMELINE_DATA}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <ShadowFilter />
            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#444" />
            <XAxis type="number" hide />
            <YAxis 
              dataKey="stage" 
              type="category" 
              width={120} 
              tick={{ fill: '#ffffff', fontSize: 12, fontWeight: 700, textShadow: '0 1px 2px rgba(0,0,0,0.8)' }} 
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(255,255,255,0.05)'}} />
            <Bar 
              dataKey="days" 
              radius={[0, 4, 4, 0]} 
              barSize={28} 
              style={{ filter: 'url(#timelineShadow)' }}
            >
              {TIMELINE_DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="text-xs text-gray-400 text-center mt-2 italic drop-shadow-sm">
        Logarithmic representation of time (Days)
      </p>
    </div>
  );
};
