import { MetadataRoute } from 'next';
import { siteConfig } from './metadata';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: 'olmOCR',
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    lang: 'en',
    dir: 'ltr',
    prefer_related_applications: false,
    categories: ['productivity', 'utilities'],
  };
} 