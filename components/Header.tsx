import React from 'react';
import { Search, Menu, User, Sparkles, Shield, Lock } from 'lucide-react';
import { ViewState } from '../types';

interface HeaderProps {
  currentView: ViewState;
  onViewChange: (view: ViewState) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onViewChange }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-[1600px] mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo Area */}
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => onViewChange('visitor')}
        >
          <div className="w-8 h-8 bg-white text-black rounded-lg flex items-center justify-center font-bold font-serif text-lg">
            C
          </div>
          <span className="font-semibold text-lg tracking-tight text-white hidden sm:block">
            CHA IL MAN
          </span>
        </div>

        {/* Search Bar - Visual Only (Hidden in Admin) */}
        {currentView === 'visitor' && (
          <div className="hidden md:flex flex-1 max-w-lg mx-8 relative group">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-zinc-500 group-focus-within:text-zinc-300 transition-colors">
              <Sparkles size={16} />
            </div>
            <input 
              type="text" 
              placeholder="Search works, collections, or years..." 
              className="w-full bg-zinc-900 border border-zinc-800 text-sm text-zinc-200 rounded-full py-2.5 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-zinc-600 focus:bg-zinc-800 transition-all placeholder:text-zinc-600"
            />
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <span className="text-xs text-zinc-600 border border-zinc-700 rounded px-1.5 py-0.5">⌘K</span>
            </div>
          </div>
        )}
        
        {currentView === 'admin' && (
           <div className="flex-1 flex justify-center">
              <span className="bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase">
                Admin Mode
              </span>
           </div>
        )}

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {currentView === 'visitor' && (
             <button className="hidden sm:flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors">
              Contact Artist
            </button>
          )}

          <button 
            onClick={() => onViewChange(currentView === 'admin' ? 'visitor' : 'admin')}
            className={`p-2 rounded-full transition-colors ${currentView === 'admin' ? 'text-white bg-zinc-800' : 'text-zinc-400 hover:text-white'}`}
            title="Toggle Admin Mode"
          >
            {currentView === 'admin' ? <Lock size={20} /> : <Shield size={20} />}
          </button>
          
          <button className="text-zinc-400 hover:text-white transition-colors md:hidden">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};