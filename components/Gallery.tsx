import React from 'react';
import { Artwork } from '../types';
import { ArtworkCard } from './ArtworkCard';

interface GalleryProps {
  artworks: Artwork[];
  onArtworkClick: (artwork: Artwork) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ artworks, onArtworkClick }) => {
  return (
    <div className="max-w-[1600px] mx-auto px-4 pb-20 animate-fade-in">
      {/* 
        Tailwind Masonry approach using CSS Columns.
        breakpoints: 1 col (mobile), 2 cols (sm), 3 cols (lg), 4 cols (2xl)
      */}
      <div className="columns-1 sm:columns-2 lg:columns-3 2xl:columns-4 gap-6 space-y-6">
        {artworks.map((artwork) => (
          <ArtworkCard 
            key={artwork.id} 
            artwork={artwork} 
            onClick={onArtworkClick} 
          />
        ))}
      </div>
    </div>
  );
};