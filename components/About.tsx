import React from 'react';
import { Mail, Instagram, Globe } from 'lucide-react';

interface AboutProps {
  bio: string;
}

export const About: React.FC<AboutProps> = ({ bio }) => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 animate-fade-in pb-32">
        <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Image Placeholder - Artist Portrait */}
            <div className="w-full md:w-1/3 aspect-[3/4] bg-zinc-900 rounded-2xl overflow-hidden relative group">
                <img 
                    src="https://picsum.photos/400/500?grayscale" 
                    alt="Cha Il Man" 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">Cha Il Man</h1>
                <div className="h-1 w-20 bg-zinc-700 mb-8"></div>
                
                <p className="text-zinc-300 text-lg leading-relaxed mb-8 whitespace-pre-line">
                    {bio}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                    <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5">
                        <h3 className="text-white font-medium mb-2">Exhibitions</h3>
                        <ul className="text-zinc-400 text-sm space-y-2">
                            <li>2024 - "Silent Horizon", Seoul Art Center</li>
                            <li>2023 - "Textures of Light", Gallery Hyundai</li>
                            <li>2022 - Group Exhibition, Paris Beaux-Arts</li>
                        </ul>
                    </div>
                    <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5">
                        <h3 className="text-white font-medium mb-2">Awards</h3>
                        <ul className="text-zinc-400 text-sm space-y-2">
                            <li>2023 - Excellence in Oil Painting, K-Art Prize</li>
                            <li>2021 - Emerging Artist of the Year</li>
                        </ul>
                    </div>
                </div>

                <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-colors">
                        <Mail size={18} />
                        Get in Touch
                    </button>
                    <button className="p-3 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors border border-zinc-800">
                        <Instagram size={20} />
                    </button>
                    <button className="p-3 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors border border-zinc-800">
                        <Globe size={20} />
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};