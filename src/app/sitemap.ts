import { MetadataRoute } from 'next';
import { siteConfig } from './metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/privacy',
    '/terms',
    '/zh',
    '/zh/about',
    '/zh/privacy',
    '/zh/terms',
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
} 