import React, { useState, useRef } from 'react';
import { Artwork } from '../types';
import { Trash2, Plus, Upload, Save, X } from 'lucide-react';

interface AdminProps {
  artworks: Artwork[];
  bio: string;
  onUpdateArtworks: (newArtworks: Artwork[]) => void;
  onUpdateBio: (newBio: string) => void;
}

export const Admin: React.FC<AdminProps> = ({ artworks, bio, onUpdateArtworks, onUpdateBio }) => {
  const [activeSection, setActiveSection] = useState<'artworks' | 'bio'>('artworks');
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [localBio, setLocalBio] = useState(bio);
  
  // New Artwork Form State
  const [showAddForm, setShowAddForm] = useState(false);
  const [newArtwork, setNewArtwork] = useState<Partial<Artwork>>({
    title: '',
    description: '',
    year: new Date().getFullYear().toString(),
    medium: 'Oil on Canvas',
    tags: [],
    width: 800,
    height: 600
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this artwork?')) {
      onUpdateArtworks(artworks.filter(a => a.id !== id));
    }
  };

  const handleSaveBio = () => {
    onUpdateBio(localBio);
    setIsEditingBio(false);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImagePreview(result);
        setNewArtwork(prev => ({ ...prev, imageUrl: result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddArtwork = () => {
    if (!newArtwork.title || !newArtwork.imageUrl) return alert('Title and Image are required');

    const artworkToAdd: Artwork = {
      id: Date.now().toString(),
      title: newArtwork.title || 'Untitled',
      description: newArtwork.description || '',
      year: newArtwork.year || '2024',
      medium: newArtwork.medium || 'Oil on Canvas',
      imageUrl: newArtwork.imageUrl || '',
      width: 800, // Default for simple masonry
      height: 600, // Default
      tags: newArtwork.tags || ['New']
    };

    onUpdateArtworks([artworkToAdd, ...artworks]);
    setShowAddForm(false);
    setNewArtwork({
        title: '',
        description: '',
        year: new Date().getFullYear().toString(),
        medium: 'Oil on Canvas',
        tags: [],
    });
    setImagePreview(null);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 animate-fade-in">
      <h1 className="text-3xl font-serif mb-8 border-b border-white/10 pb-4">Admin Dashboard</h1>

      {/* Admin Nav */}
      <div className="flex gap-4 mb-8">
        <button 
          onClick={() => setActiveSection('artworks')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeSection === 'artworks' ? 'bg-white text-black' : 'text-zinc-400 hover:text-white bg-zinc-900'}`}
        >
          Manage Artworks
        </button>
        <button 
          onClick={() => setActiveSection('bio')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeSection === 'bio' ? 'bg-white text-black' : 'text-zinc-400 hover:text-white bg-zinc-900'}`}
        >
          Edit Biography
        </button>
      </div>

      {activeSection === 'bio' && (
        <div className="bg-zinc-900 rounded-xl p-6 border border-white/10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-medium">Artist Biography</h2>
            {!isEditingBio ? (
               <button 
                onClick={() => setIsEditingBio(true)}
                className="text-indigo-400 text-sm hover:underline"
               >
                 Edit
               </button>
            ) : (
                <div className="flex gap-2">
                    <button onClick={() => setIsEditingBio(false)} className="text-zinc-400 text-sm hover:text-white">Cancel</button>
                    <button onClick={handleSaveBio} className="flex items-center gap-1 text-green-400 text-sm hover:text-green-300">
                        <Save size={14} /> Save
                    </button>
                </div>
            )}
          </div>
          {isEditingBio ? (
            <textarea 
                className="w-full h-64 bg-black border border-zinc-700 rounded-lg p-4 text-zinc-300 focus:outline-none focus:border-white/30"
                value={localBio}
                onChange={(e) => setLocalBio(e.target.value)}
            />
          ) : (
            <p className="text-zinc-400 whitespace-pre-line leading-relaxed border border-transparent p-4">
                {bio}
            </p>
          )}
        </div>
      )}

      {activeSection === 'artworks' && (
        <div className="space-y-6">
           <div className="flex justify-between items-center">
              <h2 className="text-xl font-medium">Artworks ({artworks.length})</h2>
              <button 
                onClick={() => setShowAddForm(true)}
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-full text-sm transition-colors"
              >
                <Plus size={16} /> Add New
              </button>
           </div>

           {/* Add Form */}
           {showAddForm && (
             <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-700 animate-fade-in">
                <div className="flex justify-between mb-4">
                    <h3 className="font-medium text-white">Add New Artwork</h3>
                    <button onClick={() => setShowAddForm(false)} className="text-zinc-500 hover:text-white"><X size={20}/></button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                         <div 
                            className="w-full aspect-video bg-black rounded-lg border-2 border-dashed border-zinc-700 flex flex-col items-center justify-center cursor-pointer hover:border-zinc-500 transition-colors overflow-hidden relative"
                            onClick={() => fileInputRef.current?.click()}
                         >
                            {imagePreview ? (
                                <img src={imagePreview} className="w-full h-full object-contain" alt="Preview" />
                            ) : (
                                <>
                                    <Upload size={24} className="text-zinc-500 mb-2" />
                                    <span className="text-zinc-500 text-sm">Click to upload image</span>
                                </>
                            )}
                            <input 
                                type="file" 
                                ref={fileInputRef} 
                                className="hidden" 
                                accept="image/*" 
                                onChange={handleImageUpload}
                            />
                         </div>
                         <input 
                            type="text"
                            placeholder="Or paste Image URL..."
                            className="w-full bg-black border border-zinc-800 rounded px-3 py-2 text-sm text-white"
                            onChange={(e) => {
                                setImagePreview(e.target.value);
                                setNewArtwork(prev => ({...prev, imageUrl: e.target.value}));
                            }}
                         />
                    </div>
                    
                    <div className="space-y-4">
                        <input 
                            type="text" 
                            placeholder="Title"
                            className="w-full bg-black border border-zinc-800 rounded px-3 py-2 text-white"
                            value={newArtwork.title}
                            onChange={e => setNewArtwork({...newArtwork, title: e.target.value})}
                        />
                        <div className="grid grid-cols-2 gap-4">
                            <input 
                                type="text" 
                                placeholder="Year"
                                className="w-full bg-black border border-zinc-800 rounded px-3 py-2 text-white"
                                value={newArtwork.year}
                                onChange={e => setNewArtwork({...newArtwork, year: e.target.value})}
                            />
                            <input 
                                type="text" 
                                placeholder="Medium"
                                className="w-full bg-black border border-zinc-800 rounded px-3 py-2 text-white"
                                value={newArtwork.medium}
                                onChange={e => setNewArtwork({...newArtwork, medium: e.target.value})}
                            />
                        </div>
                        <textarea 
                            placeholder="Description"
                            className="w-full h-24 bg-black border border-zinc-800 rounded px-3 py-2 text-white resize-none"
                            value={newArtwork.description}
                            onChange={e => setNewArtwork({...newArtwork, description: e.target.value})}
                        />
                         <button 
                            onClick={handleAddArtwork}
                            className="w-full bg-white text-black font-medium py-2 rounded hover:bg-zinc-200 transition-colors"
                        >
                            Save Artwork
                        </button>
                    </div>
                </div>
             </div>
           )}

           {/* List */}
           <div className="grid gap-4">
             {artworks.map(artwork => (
                <div key={artwork.id} className="flex items-center gap-4 bg-zinc-900/50 p-4 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                    <img src={artwork.imageUrl} alt={artwork.title} className="w-16 h-16 object-cover rounded bg-zinc-800" />
                    <div className="flex-1">
                        <h4 className="font-medium text-white">{artwork.title}</h4>
                        <p className="text-sm text-zinc-500">{artwork.year} • {artwork.medium}</p>
                    </div>
                    <button 
                        onClick={() => handleDelete(artwork.id)}
                        className="p-2 text-zinc-500 hover:text-red-400 transition-colors"
                        title="Delete"
                    >
                        <Trash2 size={18} />
                    </button>
                </div>
             ))}
           </div>
        </div>
      )}
    </div>
  );
};