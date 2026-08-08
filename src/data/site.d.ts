export interface Identity {
  name: string;
  handle: string;
  role: string;
  location: string;
  email: string;
  phone?: string;
  resume: string;
  tagline: string;
  intro: string;
}

export interface SeoConfig {
  siteUrl: string;
  siteName: string;
  language: string;
  locale: string;
  defaultTitle: string;
  titleTemplate: string;
  description: string;
  image: string;
  imageAlt: string;
  imageType: string;
  imageWidth: number;
  imageHeight: number;
  twitter: string;
  sameAs: string[];
  knowsAbout: string[];
}

export const identity: Identity;
export const seo: SeoConfig;
export const navLinks: Array<{ label: string; to: string }>;
export const socials: Array<{ label: string; icon: string; href: string }>;
export const primaryLinks: Record<string, string>;
export const accents: Array<{ value: string; label: string; color: string }>;
export const footer: { copyright: string; note: string };

