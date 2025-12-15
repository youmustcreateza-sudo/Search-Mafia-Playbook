
import React, { useState } from 'react';

interface TodoItem {
  id: string;
  task: string;
  completed: boolean;
  timestamp: string | null;
}

export const ActionLog: React.FC = () => {
  const [items, setItems] = useState<TodoItem[]>([
    { id: '1', task: 'Do NOT delete the content (yet)', completed: false, timestamp: null },
    { id: '2', task: 'Generate Digital Fingerprint (Hash) via StopNCII.org', completed: false, timestamp: null },
    { id: '3', task: 'Save Original Files (Do not rename/edit)', completed: false, timestamp: null },
    { id: '4', task: 'Copy/Secure specific URLs (Profile & Post)', completed: false, timestamp: null },
    { id: '5', task: 'Report to Platform using Hash/Fingerprint', completed: false, timestamp: null },
    { id: '6', task: 'Block perpetrator (after securing evidence)', completed: false, timestamp: null },
    { id: '7', task: 'Open SAPS Docket (Section 17)', completed: false, timestamp: null },
  ]);

  const toggleItem = (id: string) => {
    setItems(prev => prev.map(item => {
      if (item.id === id) {
        const isCompleted = !item.completed;
        return {
          ...item,
          completed: isCompleted,
          timestamp: isCompleted ? new Date().toLocaleString('en-ZA') : null
        };
      }
      return item;
    }));
  };

  return (
    <div className="bg-[#404040] border border-neutral-600 border-t-[#666] border-b-black/50 rounded-xl p-6 shadow-lg relative overflow-hidden mt-8">
        {/* Header */}
        <div className="mb-6 border-b border-neutral-500/30 pb-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                Incident Action Log
            </h3>
            <p className="text-sm text-gray-300 mt-1">
                Follow this sequence to align with StopNCII protocols and SA Legal requirements.
            </p>
        </div>

        {/* List */}
        <div className="space-y-3">
            {items.map(item => (
                <div key={item.id} 
                     onClick={() => toggleItem(item.id)}
                     className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 flex justify-between items-center group shadow-md ${
                        item.completed 
                        ? 'bg-green-900/20 border-green-500/50' 
                        : 'bg-[#333] border-neutral-600 hover:border-cyan-500/50 hover:bg-[#383838]'
                     }`}>
                    <div className="flex items-center gap-4">
                        <div className={`w-6 h-6 rounded border flex items-center justify-center transition-colors shrink-0 ${
                            item.completed ? 'bg-green-500 border-green-500' : 'border-neutral-500 group-hover:border-cyan-400 bg-neutral-800'
                        }`}>
                            {item.completed && (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            )}
                        </div>
                        <span className={`text-sm font-medium ${item.completed ? 'text-gray-400 line-through' : 'text-gray-200'}`}>
                            {item.task}
                        </span>
                    </div>
                    
                    {item.timestamp && (
                        <div className="text-[10px] font-mono text-cyan-400 bg-cyan-900/30 px-2 py-1 rounded border border-cyan-500/30 shadow-sm shrink-0">
                            {item.timestamp.split(',')[1]}
                        </div>
                    )}
                </div>
            ))}
        </div>
        
        {/* Warning Footer */}
        <div className="mt-6 pt-4 border-t border-neutral-600/50 text-[10px] text-gray-400 flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Your session log is local. Screenshot this list after completion for your records.</span>
        </div>
    </div>
  );
};
