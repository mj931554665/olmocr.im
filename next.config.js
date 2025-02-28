/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['olmocr.im'],
  },
  // 如果需要支持国际化
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    localeDetection: false,  // 禁用自动语言检测
  },
};

module.exports = nextConfig; 