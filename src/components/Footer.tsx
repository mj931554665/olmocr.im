'use client';

import Link from 'next/link';
import { FiGithub, FiTwitter, FiLinkedin, FiGlobe } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

interface FooterProps {
  locale?: string;
}

export default function Footer({ locale = 'en' }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  const languages = [
    { code: 'en', name: 'English', path: '/' },
    { code: 'zh', name: '中文', path: '/zh' },
    // 后续可以添加更多语言
  ];

  const t = {
    en: {
      description: 'An open-source tool for intelligent document recognition, powered by AI technology.',
      product: {
        title: 'Product',
        features: 'Features',
        howToUse: 'How to Use',
        bestPractices: 'Best Practices',
        faq: 'FAQ'
      },
      resources: {
        title: 'Resources',
        documentation: 'Documentation',
        apiReference: 'API Reference',
        aboutUs: 'About Us'
      },
      legal: {
        title: 'Legal',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service'
      },
      language: {
        title: 'Language',
        current: 'Current Language'
      },
      copyright: '© {year} olmOCR. All rights reserved.',
      partners: 'Partners & Links'
    },
    zh: {
      description: '一款用于智能文档识别的开源工具，由 AI 技术驱动。',
      product: {
        title: '产品',
        features: '功能特点',
        howToUse: '使用说明',
        bestPractices: '最佳实践',
        faq: '常见问题'
      },
      resources: {
        title: '资源',
        documentation: '文档',
        apiReference: 'API 参考',
        aboutUs: '关于我们'
      },
      legal: {
        title: '法律',
        privacy: '隐私政策',
        terms: '服务条款'
      },
      language: {
        title: '语言',
        current: '当前语言'
      },
      copyright: '© {year} olmOCR. 保留所有权利。',
      partners: '合作伙伴与链接'
    }
  };

  const text = locale === 'zh' ? t.zh : t.en;

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Link href={locale === 'zh' ? '/zh' : '/'} className="text-2xl font-bold text-white mb-4 block">
              olm OCR
            </Link>
            <p className="text-sm mb-4">{text.description}</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{text.product.title}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-white">{text.product.features}</a></li>
              <li><a href="#how-to-use" className="hover:text-white">{text.product.howToUse}</a></li>
              <li><a href="#best-practices" className="hover:text-white">{text.product.bestPractices}</a></li>
              <li><a href="#faq" className="hover:text-white">{text.product.faq}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{text.resources.title}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/docs" className="hover:text-white">{text.resources.documentation}</Link></li>
              <li><Link href="/api" className="hover:text-white">{text.resources.apiReference}</Link></li>
              <li><Link href={locale === 'zh' ? '/zh/about' : '/about'} className="hover:text-white">{text.resources.aboutUs}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{text.legal.title}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href={locale === 'zh' ? '/zh/privacy' : '/privacy'} className="hover:text-white">{text.legal.privacy}</Link></li>
              <li><Link href={locale === 'zh' ? '/zh/terms' : '/terms'} className="hover:text-white">{text.legal.terms}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{text.language.title}</h4>
            <ul className="space-y-2 text-sm">
              {languages.map((lang) => (
                <li key={lang.code}>
                  <Link
                    href={pathname.replace(/^\/[a-z]{2}/, '').replace(/^\//, '') || '/'}
                    locale={lang.code}
                    className={`hover:text-white flex items-center gap-2 ${
                      locale === lang.code ? 'text-blue-400' : ''
                    }`}
                  >
                    <FiGlobe className="w-4 h-4" />
                    <span>{lang.name}</span>
                    {locale === lang.code && (
                      <span className="text-xs text-gray-500">({text.language.current})</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 py-8">
          <h4 className="text-white font-semibold mb-4 text-center">{text.partners}</h4>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a
              href="https://www.ai-tool.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              title="AI Tools Directory"
              className="text-gray-400 hover:text-white transition-colors"
            >
              AI Tools Directory
            </a>
          </div>
        </div>

        <div className="text-center text-sm">
          {text.copyright.replace('{year}', currentYear.toString())}
        </div>
      </div>
    </footer>
  );
} 