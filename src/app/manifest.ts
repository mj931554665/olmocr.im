import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'olmOCR - Free Online PDF & Image to Text Converter',
    short_name: 'olmOCR',
    description: 'Free online OCR tool for converting PDF and images to text with high accuracy. Supports table recognition, equation extraction, and multiple languages.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
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
    orientation: 'portrait',
    scope: '/',
    lang: 'en',
    categories: ['productivity', 'utilities'],
    shortcuts: [
      {
        name: 'Upload File',
        url: '/',
        description: 'Upload a file for OCR processing',
      },
      {
        name: 'About',
        url: '/about',
        description: 'Learn more about olmOCR',
      },
    ],
  };
} 