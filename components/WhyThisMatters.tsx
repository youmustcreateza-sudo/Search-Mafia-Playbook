
import React from 'react';
import { JusticeStats } from './JusticeStats';

export const WhyThisMatters: React.FC = () => {
  return (
    <section className="mb-20 bg-[#333] border border-neutral-700 border-t-[#666] border-b-black/80 rounded-2xl shadow-2xl p-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-cyan-500"></div>
        
        <div className="text-center mb-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight drop-shadow-md">Why This Matters</h2>
            
            <div className="space-y-4 text-gray-200 text-sm md:text-base leading-relaxed text-justify sm:text-center mb-10 font-medium">
                <p>
                    Technology-Facilitated Gender-Based Violence (TFGBV) acts as a pervasive invasion of reality, inflicting severe <strong>psychological damage</strong> beyond the screen. Victims are often plunged into a state of paralyzing <strong>fear</strong> and profound <strong>isolation</strong>, resulting in the steady <strong>erosion of self-worth</strong>. The abuse creates a sensation of being constantly watched, blurring the lines between online threats and physical safety.
                </p>
                <p>
                    Global studies highlight how abusers weaponize <strong>misinformation</strong> to destroy reputations and livelihoods. Compounding this trauma is the unique difficulty victims face in <strong>gathering evidence</strong> due to the <strong>transient nature of digital content</strong>. Posts and messages can be deleted, encrypted, or vanish in seconds, forcing victims into an urgent race against time to preserve the proof needed for justice before it disappears forever.
                </p>
            </div>

            <div className="mt-8 bg-neutral-900 border border-neutral-700 p-6 rounded-xl flex flex-col md:flex-row items-center gap-6 shadow-lg mb-10">
              <div className="flex-shrink-0 bg-white text-black font-black text-4xl h-16 w-16 rounded-full flex items-center justify-center">ⓑ</div>
              <div className="text-left">
                <h3 className="text-white font-bold text-lg">The Bodyright Movement</h3>
                <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                  Copyright marks protect intellectual property. But we don't have the same protection for our bodies online. The <strong>ⓑ symbol</strong> is the new copyright for the human body. Join the global <a href="https://www.unfpa.org/bodyright" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline hover:text-cyan-300">UNFPA Bodyright campaign</a> to demand protection from digital violence.
                </p>
              </div>
            </div>

            {/* Legal Stakes - Integrated with Raised Button Aesthetic */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-stretch mb-8">
                <div className="flex-1 bg-[#404040] border border-neutral-600 border-t-[#777] border-b-black/80 rounded-xl p-6 shadow-lg hover:-translate-y-0.5 transition-transform">
                    <span className="block text-xl font-bold text-yellow-500 mb-2 drop-shadow-sm uppercase tracking-wide">Cybercrimes Act</span>
                    <span className="text-sm text-gray-300 block leading-snug">
                    <strong className="text-white">Section 17:</strong> Unlawful sharing of intimate images is a serious criminal offense.
                    </span>
                </div>
                <div className="flex-1 bg-[#404040] border border-neutral-600 border-t-[#777] border-b-black/80 rounded-xl p-6 shadow-lg hover:-translate-y-0.5 transition-transform flex flex-col justify-center">
                    <span className="block text-4xl font-black text-cyan-400 mb-1 drop-shadow-sm">5 Years</span>
                    <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">Max Prison Sentence</span>
                </div>
            </div>
        </div>

        <JusticeStats />
    </section>
  );
};
    