import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { Artwork } from '../types';

interface ModalProps {
  artwork: Artwork | null;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ artwork, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!artwork) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      <div className="relative max-w-7xl w-full max-h-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl shadow-black border border-white/10 animate-fade-in">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-white hover:text-black transition-colors"
        >
          <X size={24} />
        </button>

        {/* Image Side */}
        <div className="flex-1 bg-black flex items-center justify-center p-2 sm:p-6 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]">
          <img 
            src={artwork.imageUrl} 
            alt={artwork.title}
            className="max-h-[70vh] md:max-h-[85vh] w-auto object-contain shadow-2xl"
          />
        </div>

        {/* Info Side */}
        <div className="w-full md:w-[350px] lg:w-[400px] p-8 flex flex-col border-l border-white/5 bg-zinc-950">
          <div className="flex-1">
            <h2 className="text-3xl font-serif text-white mb-2">{artwork.title}</h2>
            <div className="flex items-center gap-2 text-zinc-500 text-sm mb-6">
              <span>{artwork.year}</span>
              <span>•</span>
              <span>{artwork.medium}</span>
            </div>
            
            <p className="text-zinc-300 leading-relaxed mb-6">
              {artwork.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {artwork.tags.map(tag => (
                <span key={tag} className="text-xs text-zinc-500 border border-zinc-800 px-3 py-1 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5">
             <button className="w-full bg-white text-black py-4 rounded-xl font-medium hover:bg-zinc-200 transition-colors">
                Inquire about this piece
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};