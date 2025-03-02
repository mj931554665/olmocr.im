/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://olmocr.im',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/server-sitemap.xml'],
  alternateRefs: [
    {
      href: 'https://olmocr.im',
      hreflang: 'en',
    },
    {
      href: 'https://olmocr.im/zh',
      hreflang: 'zh',
    },
  ],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://olmocr.im/server-sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api'],
      },
    ],
  },
  transform: async (config, path) => {
    // 移除末尾的 index
    const modifiedPath = path.replace(/\/index$/, '');
    
    // 基本配置
    const alternateRefs = config.alternateRefs;
    
    // 为中文路径特殊处理
    if (path.startsWith('/zh/')) {
      return {
        loc: modifiedPath,
        changefreq: config.changefreq,
        priority: config.priority,
        alternateRefs: [
          {
            href: `https://olmocr.im${modifiedPath.replace('/zh/', '/')}`,
            hreflang: 'en',
          },
          {
            href: `https://olmocr.im${modifiedPath}`,
            hreflang: 'zh',
          },
        ],
        lastmod: new Date().toISOString(),
      };
    }
    
    // 为英文路径处理
    return {
      loc: modifiedPath,
      changefreq: config.changefreq,
      priority: config.priority,
      alternateRefs: [
        {
          href: `https://olmocr.im${modifiedPath}`,
          hreflang: 'en',
        },
        {
          href: `https://olmocr.im/zh${modifiedPath}`,
          hreflang: 'zh',
        },
      ],
      lastmod: new Date().toISOString(),
    };
  },
} 