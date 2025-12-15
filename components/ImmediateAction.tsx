
import React from 'react';

export const ImmediateAction: React.FC = () => {
  return (
    <section className="mb-16">
      <div className="text-center mb-10">
        <span className="text-yellow-500 font-bold tracking-wider uppercase text-xs">Phase 1</span>
        <h2 className="text-3xl font-bold text-white mt-2">Immediate Shutdown Protocol</h2>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          The first 24 hours are crucial. Do not engage. Secure your digital perimeter.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: Block/Contain */}
        <div className="bg-[#333] p-6 rounded-xl shadow-xl border border-neutral-600 border-t-[#666] border-b-black/80 border-l-4 border-l-blue-500 hover:-translate-y-1 active:scale-[0.99] transition-all duration-300 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
             </svg>
          </div>
          <div className="text-4xl text-blue-500 mb-4 font-black opacity-40 select-none">01</div>
          <h3 className="text-xl font-bold text-blue-400 mb-3">Block or Contain</h3>
          <p className="text-sm text-gray-200 leading-relaxed mb-2">
            <strong className="text-white block mb-1">Reason:</strong> Engagement feeds the abuser.
          </p>
          <p className="text-xs text-gray-400 leading-relaxed">
            If blocking isn't an option (e.g. co-parenting), use <strong>containment</strong>: One boring channel (email), zero emotion, strictly necessary comms only.
          </p>
        </div>

        {/* Card 2: Zero Negotiation */}
        <div className="bg-[#333] p-6 rounded-xl shadow-xl border border-neutral-600 border-t-[#666] border-b-black/80 border-l-4 border-l-yellow-500 hover:-translate-y-1 active:scale-[0.99] transition-all duration-300 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
             </svg>
          </div>
          <div className="text-4xl text-yellow-600 mb-4 font-black opacity-40 select-none">02</div>
          <h3 className="text-xl font-bold text-yellow-500 mb-3">Zero Negotiation</h3>
          <p className="text-sm text-gray-200 leading-relaxed mb-2">
            <strong className="text-white block mb-1">Reason:</strong> Compliance guarantees nothing.
          </p>
          <p className="text-xs text-gray-400 leading-relaxed">
            Whether for money or <strong>reputation</strong>, never pay or beg. It funds future harassment. Silence breaks their control loop.
          </p>
        </div>

        {/* Card 3: Secure Proof */}
        <div className="bg-[#333] p-6 rounded-xl shadow-xl border border-neutral-600 border-t-[#666] border-b-black/80 border-l-4 border-l-cyan-500 hover:-translate-y-1 active:scale-[0.99] transition-all duration-300 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
             </svg>
          </div>
          <div className="text-4xl text-cyan-500 mb-4 font-black opacity-40 select-none">03</div>
          <h3 className="text-xl font-bold text-cyan-400 mb-3">Silent Evidence</h3>
          <p className="text-sm text-gray-200 leading-relaxed mb-2">
            <strong className="text-white block mb-1">Reason:</strong> You need a forensic trail.
          </p>
          <p className="text-xs text-gray-400 leading-relaxed">
            Screenshot everything <em>before</em> blocking. Capture numbers, URLs, and timestamps. <strong>Do not delete</strong> chat history; archive it securely.
          </p>
        </div>

        {/* Card 4: Seek Counsel */}
        <div className="bg-[#333] p-6 rounded-xl shadow-xl border border-neutral-600 border-t-[#666] border-b-black/80 border-l-4 border-l-gray-400 hover:-translate-y-1 active:scale-[0.99] transition-all duration-300 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
             </svg>
          </div>
          <div className="text-4xl text-gray-500 mb-4 font-black opacity-40 select-none">04</div>
          <h3 className="text-xl font-bold text-gray-300 mb-3">You Are Not Alone</h3>
          <p className="text-sm text-gray-200 leading-relaxed mb-2">
            <strong className="text-white block mb-1">Reason:</strong> Isolation increases trauma.
          </p>
          <p className="text-xs text-gray-400 leading-relaxed">
            Contact a crisis line or legal counsel immediately. Shifting the burden to professionals breaks the cycle of fear and helps you regain strategic control.
          </p>
        </div>
      </div>
    </section>
  );
};
