import React from 'react';
import { Artwork } from '../types';
import { Maximize2, Heart } from 'lucide-react';

interface ArtworkCardProps {
  artwork: Artwork;
  onClick: (artwork: Artwork) => void;
}

export const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork, onClick }) => {
  return (
    <div 
      className="group relative mb-6 break-inside-avoid rounded-xl overflow-hidden bg-zinc-900 cursor-zoom-in"
      onClick={() => onClick(artwork)}
    >
      {/* Image */}
      <div className="relative overflow-hidden w-full">
        <img 
          src={artwork.imageUrl} 
          alt={artwork.title}
          className="w-full h-auto transform transition-transform duration-700 ease-in-out group-hover:scale-105 group-hover:brightness-110"
          loading="lazy"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-medium text-lg leading-tight">{artwork.title}</h3>
                <p className="text-zinc-400 text-xs mt-1">{artwork.year} — {artwork.medium}</p>
            </div>
        </div>

        {/* Top Right Actions on Hover */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-[-10px] group-hover:translate-y-0">
            <button className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-colors">
                <Heart size={16} />
            </button>
            <button className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-colors">
                <Maximize2 size={16} />
            </button>
        </div>
      </div>
    </div>
  );
};