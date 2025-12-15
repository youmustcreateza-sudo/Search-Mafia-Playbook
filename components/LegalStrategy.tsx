
import React from 'react';
import { EvidenceChart } from './EvidenceChart';
import { TimelineChart } from './TimelineChart';
import { ActionLog } from './ActionLog';

export const LegalStrategy: React.FC = () => {
  return (
    <section id="legal-strategy" className="mb-16 bg-[#333] rounded-2xl shadow-2xl border border-neutral-700 border-t-[#666] border-b-black/80 overflow-hidden">
      
      {/* Header */}
      <div className="p-6 border-b border-neutral-700 bg-neutral-900/20">
        <h3 className="text-xl font-bold text-white">Strategy Dashboard</h3>
        <p className="text-sm text-gray-400">A unified view of your legal options, timeline realities, and required evidence.</p>
      </div>

      {/* Merged Timeline Section */}
      <div className="p-6 border-b border-neutral-700 bg-neutral-900/10">
        <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wide mb-4">Estimated Timeline Reality (SA Justice System)</h4>
        <div className="h-[500px]">
            <TimelineChart />
        </div>
      </div>

      {/* Dual Path Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Civil Path */}
        <div className="p-8 border-b lg:border-b-0 lg:border-r border-neutral-700 bg-cyan-900/5 relative">
          <div className="absolute top-0 right-0 p-4 opacity-10">
             {/* Scales of Justice Icon for Civil/Interdict */}
             <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
             </svg>
          </div>
          <span className="inline-block px-3 py-1 bg-cyan-600/20 text-cyan-400 text-xs font-bold rounded mb-4 border border-cyan-500/20">
            Civil Intervention
          </span>
          <h4 className="text-2xl font-bold text-white mb-4">Urgent Relief</h4>
          <p className="text-gray-300 mb-6 text-sm leading-relaxed">
            This is not a magic "quick fix," but it is the fastest legal mechanism available. It requires strict procedural rigor to obtain a Protection Order or Interdict that legally compels content removal.
          </p>
          <ul className="space-y-6 relative z-10">
            {/* Step 1: Drafting - Document Icon */}
            <li className="flex items-start group">
                <div className="mt-1 w-8 h-8 flex-shrink-0 flex items-center justify-center bg-neutral-900 rounded-lg text-cyan-400 border border-neutral-600 group-hover:border-cyan-400 transition-colors shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </div>
                <div className="ml-4">
                    <span className="block text-sm font-bold text-white mb-1">Drafting Court Papers</span>
                    <span className="text-xs text-gray-400 leading-snug block">Preparing the Founding Affidavit and Notice of Motion with strict attention to facts.</span>
                </div>
            </li>
            
            {/* Step 2: Court App - Gavel Icon */}
            <li className="flex items-start group">
                <div className="mt-1 w-8 h-8 flex-shrink-0 flex items-center justify-center bg-neutral-900 rounded-lg text-cyan-400 border border-neutral-600 group-hover:border-cyan-400 transition-colors shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m3-4h1m-1 4h1m-1 4h1m-1 4h1" />
                    </svg>
                </div>
                <div className="ml-4">
                    <span className="block text-sm font-bold text-white mb-1">Urgent Court Application</span>
                    <span className="text-xs text-gray-400 leading-snug block">Appearing before a judge to argue urgency and secure the Interim Order.</span>
                </div>
            </li>

            {/* Step 3: Sheriff - Send/Delivery Icon */}
            <li className="flex items-start group">
                <div className="mt-1 w-8 h-8 flex-shrink-0 flex items-center justify-center bg-neutral-900 rounded-lg text-cyan-400 border border-neutral-600 group-hover:border-cyan-400 transition-colors shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                </div>
                <div className="ml-4">
                    <span className="block text-sm font-bold text-white mb-1">Sheriff Service</span>
                    <span className="text-xs text-gray-400 leading-snug block">Legal delivery of the order to the offender, making non-compliance a criminal offense.</span>
                </div>
            </li>
          </ul>
        </div>

        {/* Criminal Path */}
        <div className="p-8 bg-yellow-900/5 relative">
          <div className="absolute top-0 right-0 p-4 opacity-10">
             {/* Fingerprint Icon for Criminal/Investigation */}
             <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.2-2.858.59-4.181m-3.236 5.714A21.88 21.88 0 003 15.364" />
             </svg>
          </div>
          <span className="inline-block px-3 py-1 bg-yellow-600/20 text-yellow-500 text-xs font-bold rounded mb-4 border border-yellow-500/20">
            Criminal Justice
          </span>
          <h4 className="text-2xl font-bold text-white mb-4">Prosecution</h4>
          <p className="text-gray-300 mb-6 text-sm leading-relaxed">
            A long-term strategy to secure a criminal record. It relies on the Cybercrimes Act (Section 17) and requires patience and persistence.
          </p>
          <ul className="space-y-6 relative z-10">
            {/* Step 1: Docket - Folder Icon */}
            <li className="flex items-start group">
                <div className="mt-1 w-8 h-8 flex-shrink-0 flex items-center justify-center bg-neutral-900 rounded-lg text-yellow-500 border border-neutral-600 group-hover:border-yellow-500 transition-colors shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
                    </svg>
                </div>
                <div className="ml-4">
                    <span className="block text-sm font-bold text-white mb-1">Open SAPS Docket</span>
                    <span className="text-xs text-gray-400 leading-snug block">Laying the charge at the police station and obtaining a CAS number for the investigation.</span>
                </div>
            </li>

            {/* Step 2: Investigation - Magnifying Glass */}
            <li className="flex items-start group">
                <div className="mt-1 w-8 h-8 flex-shrink-0 flex items-center justify-center bg-neutral-900 rounded-lg text-yellow-500 border border-neutral-600 group-hover:border-yellow-500 transition-colors shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <div className="ml-4">
                    <span className="block text-sm font-bold text-white mb-1">Investigation Phase</span>
                    <span className="text-xs text-gray-400 leading-snug block">Detectives gather evidence, subpoena ISPs for data, and interview the suspect.</span>
                </div>
            </li>

            {/* Step 3: NPA - Building/Courthouse */}
            <li className="flex items-start group">
                <div className="mt-1 w-8 h-8 flex-shrink-0 flex items-center justify-center bg-neutral-900 rounded-lg text-yellow-500 border border-neutral-600 group-hover:border-yellow-500 transition-colors shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                </div>
                <div className="ml-4">
                    <span className="block text-sm font-bold text-white mb-1">Prosecutor Decision (NPA)</span>
                    <span className="text-xs text-gray-400 leading-snug block">The National Prosecuting Authority decides if there is enough evidence to go to trial.</span>
                </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Integrated Evidence Report */}
      <div className="bg-[#262626] border-t border-neutral-700 p-8 shadow-inner">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                    StopNCII Alignment
                </h3>
                
                <div className="space-y-4">
                    <div className="bg-red-900/10 border border-red-900/30 p-4 rounded-lg">
                        <h4 className="text-red-400 text-xs font-bold uppercase mb-2">Inadequate (Screenshots)</h4>
                        <p className="text-gray-400 text-xs leading-relaxed">
                            Screenshots are purely visual copies. They lack the "Source Code" (Metadata) required for forensic verification and cannot be used by tools like StopNCII.org to block the spread of content.
                        </p>
                    </div>

                    <div className="bg-green-900/10 border border-green-900/30 p-4 rounded-lg">
                        <h4 className="text-green-400 text-xs font-bold uppercase mb-2">Required (Fingerprinting)</h4>
                        <p className="text-gray-400 text-xs leading-relaxed">
                            <strong>Hashing</strong> creates a "Digital Fingerprint" of your file directly on your device.
                        </p>
                        <ul className="text-xs text-gray-400 mt-2 space-y-1 list-disc list-inside">
                            <li><strong>Prevention:</strong> Platforms detect this hash to block uploads.</li>
                            <li><strong>Prosecution:</strong> Proves the file on the suspect's device matches yours exactly.</li>
                            <li><strong>Privacy:</strong> You share the hash, not the image.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="md:col-span-2">
                <EvidenceChart />
            </div>
        </div>
        
        {/* Action Log Embedded */}
        <ActionLog />
      </div>
    </section>
  );
};
