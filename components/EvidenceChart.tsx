
import React from 'react';

export const EvidenceChart: React.FC = () => {
  return (
    <div className="w-full bg-[#262626] border border-neutral-700 rounded-lg p-6 relative overflow-hidden font-mono text-sm shadow-inner">
        {/* Fake paper texture/header */}
        <div className="border-b border-neutral-600 pb-4 mb-4 flex justify-between items-center">
            <span className="text-cyan-500 font-bold tracking-widest uppercase">Forensic Evidence Log</span>
            <span className="text-gray-500 text-xs">REF: STOPNCII-COMPLIANT</span>
        </div>

        <div className="space-y-4">
            <div className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 rounded-sm border border-cyan-500/50 bg-cyan-900/20 flex items-center justify-center text-cyan-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </div>
                <div>
                    <strong className="text-gray-200 block">Digital Fingerprint (Hash)</strong>
                    <span className="text-gray-500 text-xs">Generated via StopNCII.org on your device. Used to block uploads across platforms without sharing the image.</span>
                </div>
            </div>

            <div className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 rounded-sm border border-cyan-500/50 bg-cyan-900/20 flex items-center justify-center text-cyan-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </div>
                <div>
                    <strong className="text-gray-200 block">Source Metadata</strong>
                    <span className="text-gray-500 text-xs">Original file headers (EXIF data). Essential for proving the file originated from the perpetrator or your device.</span>
                </div>
            </div>

            <div className="flex items-start gap-3">
                <div className="mt-1 w-4 h-4 rounded-sm border border-cyan-500/50 bg-cyan-900/20 flex items-center justify-center text-cyan-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </div>
                <div>
                    <strong className="text-gray-200 block">Perpetrator Identity</strong>
                    <span className="text-gray-500 text-xs">URL of profile, User ID (UID), Phone Number. Screenshots of the profile are valid here (unlike content).</span>
                </div>
            </div>
        </div>

        <div className="mt-6 pt-4 border-t border-neutral-600 flex justify-between items-center">
            <span className="text-xs text-yellow-500 font-semibold uppercase">Status:</span>
            <span className="text-xs text-gray-400 bg-neutral-900 px-2 py-1 rounded">StopNCII Protocol Ready</span>
        </div>
    </div>
  );
};
