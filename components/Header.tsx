
import React from 'react';

export const Header: React.FC = () => {
  const handleShare = async () => {
    const shareData = {
      title: 'Intimate Image Abuse Protection Guide (SA)',
      text: 'A definitive guide for victims. The law is on your side. #bodyright',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Ensure focus flows to the form for accessibility
      const firstInput = element.querySelector('input');
      if (firstInput) firstInput.focus();
    }
  };

  return (
    <header className="bg-neutral-900 text-white pt-12 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-neutral-800">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Controls Row */}
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:justify-between md:items-center no-print">
          
          {/* Badge */}
          <div className="flex justify-center md:justify-start">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#2a2a2a] border border-neutral-700 rounded-full shadow-lg">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-gray-300 uppercase tracking-widest">
                  South Africa • Cybercrimes Act
                </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center md:justify-end gap-3 w-full md:w-auto">
            <button 
              type="button"
              onClick={scrollToContact}
              className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 focus:bg-yellow-600 text-white px-6 py-3 rounded-full text-sm font-bold transition-all shadow-lg shadow-yellow-500/20 group focus:outline-none focus:ring-4 focus:ring-yellow-500/30 hover:-translate-y-0.5 border-t border-yellow-400/50 active:scale-95"
              aria-label="Contact us for support"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </button>
            <button 
              type="button"
              onClick={handleShare}
              className="flex items-center gap-2 bg-[#2a2a2a] hover:bg-neutral-700 border border-neutral-700 border-t-neutral-500/50 border-b-neutral-900 px-6 py-3 rounded-full text-sm font-medium transition-all shadow-md group focus:outline-none focus:ring-4 focus:ring-cyan-500/30 hover:-translate-y-0.5 active:scale-95 text-gray-200"
              aria-label="Share this guide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 group-hover:text-white transition-colors">
                <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
              </svg>
              Share Guide
            </button>
          </div>
        </div>

        {/* Main Content Block */}
        <div className="flex flex-col gap-4 mb-4 text-center md:text-left">
          <h1 className="flex flex-col font-black tracking-tight leading-none">
            <span className="text-4xl sm:text-6xl md:text-7xl text-white drop-shadow-xl mb-2">
              INTIMATE IMAGE ABUSE
            </span>
            <span className="text-3xl sm:text-5xl md:text-6xl text-cyan-400 drop-shadow-lg">
              PROTECTION GUIDE (SA)
            </span>
          </h1>
          
          <div className="mt-6 flex flex-col md:flex-row gap-4 items-center md:items-start">
             <div className="h-px md:h-auto md:w-1 bg-yellow-500 w-24 md:self-stretch opacity-70"></div>
             <p className="text-lg md:text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
               A definitive resource for victims of Intimate Image Abuse. <br/>
               The law is on your side, but success demands tenacity.
             </p>
          </div>
        </div>
      </div>
    </header>
  );
};
    