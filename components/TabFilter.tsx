import React from 'react';
import { TabState } from '../types';

interface TabFilterProps {
  activeTab: TabState;
  onTabChange: (tab: TabState) => void;
}

export const TabFilter: React.FC<TabFilterProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="sticky top-20 z-40 flex justify-center w-full pointer-events-none mb-8">
      <div className="pointer-events-auto bg-zinc-900/90 backdrop-blur-md border border-white/10 p-1 rounded-full flex gap-1 shadow-2xl shadow-black/50">
        <button
          onClick={() => onTabChange('gallery')}
          className={`
            px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
            ${activeTab === 'gallery' 
              ? 'bg-zinc-800 text-white shadow-sm' 
              : 'text-zinc-500 hover:text-zinc-300'}
          `}
        >
          Gallery
        </button>
        <button
          onClick={() => onTabChange('about')}
          className={`
            px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
            ${activeTab === 'about' 
              ? 'bg-zinc-800 text-white shadow-sm' 
              : 'text-zinc-500 hover:text-zinc-300'}
          `}
        >
          About
        </button>
      </div>
    </div>
  );
};