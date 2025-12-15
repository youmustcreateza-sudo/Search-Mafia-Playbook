
import React from 'react';

export const SuccessStory: React.FC = () => {
  return (
    <section className="bg-[#333] border border-neutral-700 border-t-[#666] border-b-black/80 rounded-2xl shadow-2xl p-8 mb-16 border-l-4 border-l-green-500 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 p-4 opacity-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </div>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          {/* Narrative Column */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-900/30 border border-green-500/30 text-green-400 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Case Study: "Janette"
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-4">Victory Through Tenacity</h2>
            
            <p className="text-gray-200 text-sm mb-4 leading-relaxed">
              <strong>The Incident:</strong> "Janette" (anonymized) faced a threat from an ex-partner to leak private images on social media following a breakup. The perpetrator used the content as leverage for financial extortion.
            </p>
            
            <p className="text-gray-200 text-sm mb-4 leading-relaxed">
              <strong>The Dual-Path Action:</strong> Instead of negotiating, Janette engaged the <strong className="text-cyan-400">Civil Path</strong> by immediately having her attorney issue a formal <em>Cease and Desist</em> letter. She simultaneously filed an urgent application for a Protection Order (Interdict) to legally compel content deletion. On the <strong className="text-yellow-500">Criminal Path</strong>, she didn't just rely on screenshots; she gathered verified digital evidence (preserving metadata) and formally laid a charge under Section 17 of the Cybercrimes Act at SAPS, securing a CAS number to track the investigation.
            </p>

            <p className="text-gray-200 text-sm leading-relaxed">
              <strong>The Result:</strong> The content was never posted. The immediate civil pressure forced the perpetrator to delete the source files under legal supervision within 48 hours. Eighteen months later, the criminal case concluded with a guilty verdict and a suspended prison sentence, securing Janette's permanent safety and a criminal record for the offender.
            </p>
          </div>

          {/* Stats/Highlight Column */}
          <div className="w-full md:w-1/3 flex flex-col gap-4">
            <div className="bg-[#404040] border border-neutral-600 border-t-[#777] border-b-black/80 p-6 rounded-xl text-center shadow-lg hover:-translate-y-1 transition-transform duration-300">
              <span className="block text-4xl md:text-5xl font-black text-green-400 mb-2 drop-shadow-[0_0_10px_rgba(74,222,128,0.25)]">48 Hours</span>
              <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">To Content Deletion</span>
            </div>
            
            <div className="bg-[#404040] border border-neutral-600 border-t-[#777] border-b-black/80 p-6 rounded-xl text-center shadow-lg hover:-translate-y-1 transition-transform duration-300">
              <span className="block text-4xl md:text-5xl font-black text-green-400 mb-2 drop-shadow-[0_0_10px_rgba(74,222,128,0.25)]">100%</span>
              <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">Privacy Retained</span>
            </div>

            <div className="bg-neutral-900/40 border border-neutral-700 p-4 rounded-xl shadow-inner">
              <p className="text-xs text-gray-400 italic text-center">
                "The system works if you force it to work. Don't wait for them to post. Act first."
                <br/>
                <span className="not-italic font-bold text-gray-300 mt-2 block">— Janette</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
