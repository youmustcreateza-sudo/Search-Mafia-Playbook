
import React from 'react';

export const SupportNetwork: React.FC = () => {
  return (
    <section id="support-network" className="bg-[#333] border border-neutral-700 border-t-[#666] border-b-black/80 rounded-2xl shadow-2xl p-8 md:p-12 text-white relative overflow-hidden mb-16">
      {/* Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#00AACC 1px, transparent 1px)', 
          backgroundSize: '20px 20px' 
        }} 
      />

      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">National Support Network</h2>

        <a href="tel:0800428428" className="block w-full text-center mb-10 group">
          <button className="w-full md:w-auto bg-yellow-500 hover:bg-yellow-600 text-white font-black uppercase text-lg py-4 px-8 rounded-full shadow-lg transition-all transform hover:scale-[1.02] hover:shadow-yellow-500/20 active:scale-95 border-t border-yellow-400/50">
            Call GBV Command Centre
          </button>
        </a>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          {/* Emergency & Crisis Lines */}
          <div className="bg-[#444] rounded-xl p-6 border border-neutral-600 border-t-[#777] border-b-black/60 shadow-lg">
            <h3 className="text-red-400 font-bold uppercase tracking-wide text-sm mb-5 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Emergency Crisis Lines (24/7)
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-neutral-700 pb-3">
                <span className="font-medium text-gray-200 text-sm">Suicide Help</span>
                <a href="tel:0800567567" className="text-yellow-500 hover:text-yellow-400 font-mono font-bold transition-colors">080 056 7567</a>
              </div>
              <div className="flex justify-between items-center border-b border-neutral-700 pb-3">
                <span className="font-medium text-gray-200 text-sm">Toll Free Crisis Line</span>
                <a href="tel:0861574747" className="text-yellow-500 hover:text-yellow-400 font-mono font-bold transition-colors">086 157 4747</a>
              </div>
              <div className="flex justify-between items-center border-b border-neutral-700 pb-3">
                <span className="font-medium text-gray-200 text-sm">GBV Command Centre</span>
                <a href="tel:0800428428" className="text-yellow-500 hover:text-yellow-400 font-mono font-bold transition-colors">080 021 2223</a>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="font-medium text-gray-200 text-sm">Tears Foundation (Free SMS)</span>
                <a href="tel:*134*7355#" className="bg-neutral-900 border border-neutral-600 px-3 py-1 rounded text-cyan-400 font-mono text-sm font-bold hover:bg-neutral-700 transition-colors">*134*7355#</a>
              </div>
            </div>
          </div>

          {/* Specialized Support Organizations */}
          <div className="bg-[#444] rounded-xl p-6 border border-neutral-600 border-t-[#777] border-b-black/60 shadow-lg">
            <h3 className="text-cyan-400 font-bold uppercase tracking-wide text-sm mb-5 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Specialized Support
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-neutral-700 pb-3">
                <div className="flex flex-col">
                  <span className="font-medium text-gray-200 text-sm">POWA</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider">People Opposing Women Abuse</span>
                </div>
                <a href="tel:0116424345" className="text-gray-300 hover:text-white font-mono text-sm transition-colors">011 642 4345</a>
              </div>
              
              <div className="flex justify-between items-center border-b border-neutral-700 pb-3">
                <div className="flex flex-col">
                  <span className="font-medium text-gray-200 text-sm">Rape Crisis</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider">Counseling & Support</span>
                </div>
                <a href="tel:0214479762" className="text-gray-300 hover:text-white font-mono text-sm transition-colors">021 447 9762</a>
              </div>

              <div className="flex justify-between items-center pt-1">
                <div className="flex flex-col">
                  <span className="font-medium text-gray-200 text-sm">SADAG</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider">Depression & Anxiety Group</span>
                </div>
                <a href="tel:0800212223" className="text-gray-300 hover:text-white font-mono text-sm transition-colors">080 021 2223</a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Resources Section */}
        <div className="bg-[#444] rounded-xl p-6 border border-neutral-600 border-t-[#777] border-b-black/60 shadow-lg">
            <h3 className="text-yellow-500 font-bold uppercase tracking-wide text-sm mb-5 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
              Legal & Information Resources
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="https://legal-aid.co.za/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 border border-neutral-600 group transition-colors">
                    <span className="text-sm font-medium text-gray-200">Legal Aid South Africa</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyan-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
                <a href="https://www.justice.gov.za/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 border border-neutral-600 group transition-colors">
                    <span className="text-sm font-medium text-gray-200">Dept. of Justice (Forms)</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyan-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
                <a href="https://www.saps.gov.za/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 border border-neutral-600 group transition-colors">
                    <span className="text-sm font-medium text-gray-200">SAPS Online</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyan-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
                <a href="https://genderjustice.org.za/technologically-facilitated-gender-based-violence-the-new-normal/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 border border-neutral-600 group transition-colors">
                    <span className="text-sm font-medium text-gray-200">Gender Justice: TFGBV Info</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyan-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
            </div>
        </div>

      </div>
    </section>
  );
};
