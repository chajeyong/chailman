export interface Artwork {
  id: string;
  title: string;
  description: string;
  year: string;
  medium: string;
  imageUrl: string;
  width: number; // Used for aspect ratio calc in masonry
  height: number;
  tags: string[];
}

export type TabState = 'gallery' | 'about';
export type ViewState = 'visitor' | 'admin';