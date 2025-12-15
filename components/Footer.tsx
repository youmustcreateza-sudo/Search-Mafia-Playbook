
import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-neutral-800 bg-neutral-900/50 pt-16 pb-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
            <h5 className="text-white font-bold text-lg mb-2">Digital Safety Support SA</h5>
            <a href="https://www.unfpa.org/bodyright" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-800 rounded-full border border-neutral-600 text-xs text-cyan-400 hover:text-white hover:border-cyan-400 transition-colors">
              <span className="font-bold">ⓑ</span> Supporter of the Bodyright Movement (Learn More)
            </a>
        </div>
        
        <p className="text-gray-500 text-sm mb-10">
          &copy; {currentYear} Intimate Image Abuse Protection Guide.
        </p>
        
        <div className="bg-[#262626] p-6 rounded-xl border border-neutral-700 border-t-[#444] shadow-xl inline-block max-w-2xl">
            <div className="flex items-center justify-center gap-2 mb-3 text-yellow-500/80">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <h4 className="text-xs font-bold uppercase tracking-wide">Legal Disclaimer</h4>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              This guide is for informational purposes only and does not constitute official legal advice. 
              Laws regarding digital safety and the Cybercrimes Act are complex. 
              Always consult with a registered legal professional or the South African Police Service (SAPS) for case-specific guidance.
            </p>
        </div>
      </div>
    </footer>
  );
};
        