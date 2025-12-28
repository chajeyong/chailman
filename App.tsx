import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { TabFilter } from './components/TabFilter';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Modal } from './components/Modal';
import { Admin } from './components/Admin';
import { ARTWORKS, ARTIST_BIO } from './constants';
import { TabState, Artwork, ViewState } from './types';

function App() {
  const [view, setView] = useState<ViewState>('visitor');
  const [activeTab, setActiveTab] = useState<TabState>('gallery');
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  // Data State with LocalStorage persistence
  const [artworks, setArtworks] = useState<Artwork[]>(() => {
    const saved = localStorage.getItem('artworks');
    return saved ? JSON.parse(saved) : ARTWORKS;
  });

  const [bio, setBio] = useState<string>(() => {
    const saved = localStorage.getItem('artistBio');
    return saved ? saved : ARTIST_BIO;
  });

  // Save to LocalStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('artworks', JSON.stringify(artworks));
  }, [artworks]);

  useEffect(() => {
    localStorage.setItem('artistBio', bio);
  }, [bio]);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black">
      <Header currentView={view} onViewChange={setView} />
      
      <main className="relative min-h-screen">
        {/* Background Ambient Glow */}
        <div className="fixed top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none z-0" />
        
        <div className="relative z-10">
            {view === 'visitor' ? (
                <>
                    <TabFilter activeTab={activeTab} onTabChange={setActiveTab} />
                    <div className="mt-4">
                        {activeTab === 'gallery' ? (
                            <Gallery 
                                artworks={artworks} 
                                onArtworkClick={setSelectedArtwork} 
                            />
                        ) : (
                            <About bio={bio} />
                        )}
                    </div>
                </>
            ) : (
                <Admin 
                    artworks={artworks}
                    bio={bio}
                    onUpdateArtworks={setArtworks}
                    onUpdateBio={setBio}
                />
            )}
        </div>
      </main>

      <Modal 
        artwork={selectedArtwork} 
        onClose={() => setSelectedArtwork(null)} 
      />
      
      {view === 'visitor' && (
        <footer className="py-12 border-t border-white/5 text-center text-zinc-600 text-sm bg-black">
          <p>© {new Date().getFullYear()} Cha Il Man. All rights reserved.</p>
        </footer>
      )}
    </div>
  );
}

export default App;