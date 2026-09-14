export interface BlogPost {
  id: number;
  slug: string;
  permalink: string;
  title: string;
  rawTitle?: string;
  excerpt: string;
  content: string;
  date: string;
  modified: string;
  categories: number[];
  featured_image: string;
  author: string;
}

export interface SitePage {
  id: number;
  slug: string;
  permalink: string;
  title: string;
  rawTitle?: string;
  excerpt: string;
  content: string;
  date: string;
  modified: string;
}

export interface Category {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
}

export interface ServiceItem {
  title: string;
  slug: string;
  description: string;
  icon?: string;
  image: string;
  category: string;
}

export interface Testimonial {
  name: string;
  date: string;
  rating: number;
  platform: string;
  comment: string;
  service?: string;
  title?: string;
}

