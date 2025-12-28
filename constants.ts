import { Artwork } from './types';

// In a real application, these URLs would point to the actual hosted images of Cha Il Man's work.
// I am using placeholders that mimic the dimensions and style of the provided references.

export const ARTWORKS: Artwork[] = [
  {
    id: '1',
    title: 'Coastal Serenity',
    description: 'A vibrant seascape capturing the interaction between the cliffs, the ocean, and the blooming coastal flora under a wide blue sky.',
    year: '2023',
    medium: 'Oil on Canvas',
    imageUrl: 'https://picsum.photos/800/500?random=1', // Landscape representation
    width: 800,
    height: 500,
    tags: ['Landscape', 'Sea', 'Nature']
  },
  {
    id: '2',
    title: 'Mont Saint-Michel at Dusk',
    description: 'The historic abbey reflected in the tidal waters during the magical twilight hour, showcasing intricate light and shadow work.',
    year: '2022',
    medium: 'Oil on Canvas',
    imageUrl: 'https://picsum.photos/700/600?random=2', // Slightly wider than square
    width: 700,
    height: 600,
    tags: ['Architecture', 'France', 'Night']
  },
  {
    id: '3',
    title: 'Solar Embrace',
    description: 'An abstract representation of the sun, dominating the canvas with warm hues and textured brushwork over a purple horizon.',
    year: '2024',
    medium: 'Oil on Canvas',
    imageUrl: 'https://picsum.photos/600/900?random=3', // Portrait representation
    width: 600,
    height: 900,
    tags: ['Abstract', 'Sun', 'Texture']
  },
  {
    id: '4',
    title: 'Autumn Solitude',
    description: 'A study of color and isolation in a dense forest setting.',
    year: '2021',
    medium: 'Oil on Canvas',
    imageUrl: 'https://picsum.photos/600/800?random=4',
    width: 600,
    height: 800,
    tags: ['Nature', 'Forest']
  },
  {
    id: '5',
    title: 'Urban Geometry',
    description: 'Exploring the shapes and shadows of city life.',
    year: '2023',
    medium: 'Acrylic on Panel',
    imageUrl: 'https://picsum.photos/800/800?random=5',
    width: 800,
    height: 800,
    tags: ['City', 'Modern']
  },
  {
    id: '6',
    title: 'Morning Haze',
    description: 'Soft light breaking through the morning mist on the river.',
    year: '2020',
    medium: 'Oil on Canvas',
    imageUrl: 'https://picsum.photos/800/600?random=6',
    width: 800,
    height: 600,
    tags: ['Landscape', 'Light']
  },
  {
    id: '7',
    title: 'Floral Symphony',
    description: 'A closeup study of garden textures and vibrant colors.',
    year: '2022',
    medium: 'Oil on Canvas',
    imageUrl: 'https://picsum.photos/600/700?random=7',
    width: 600,
    height: 700,
    tags: ['Flowers', 'Still Life']
  },
  {
    id: '8',
    title: 'The Lonely Boat',
    description: 'Minimalist composition of a boat at sea.',
    year: '2024',
    medium: 'Oil on Canvas',
    imageUrl: 'https://picsum.photos/900/600?random=8',
    width: 900,
    height: 600,
    tags: ['Sea', 'Minimalism']
  }
];

export const ARTIST_BIO = `
Cha Il Man is a contemporary painter known for his masterful handling of light and texture. 
With a focus on landscapes and abstract natural forms, his work invites viewers into a contemplative space. 
Drawing inspiration from both the grandeur of nature and the subtle shifts of the daily atmosphere, 
Cha creates worlds that feel both familiar and ethereally new. His studio is based in Seoul, 
where he continues to explore the boundaries of oil painting.
`;