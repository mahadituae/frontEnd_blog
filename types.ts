export interface Author {
  name: string;
  bio: string;
}

export interface BlogPostType {
  id: string;
  title: string;
  author: Author;
  date: string;
  excerpt: string;
  content: string; // Will now contain markdown headings
  imageUrl: string;
  category: string;
  tags: string[];
  metaDescription: string;
  estimatedReadingTime: number; // in minutes
}