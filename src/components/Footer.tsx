import Link from 'next/link';
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';

interface FooterProps {
  locale?: string;
}

export default function Footer({ locale = 'en' }: FooterProps) {
  const currentYear = new Date().getFullYear();

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
      copyright: '© {year} olmOCR. All rights reserved.'
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
      copyright: '© {year} olmOCR. 保留所有权利。'
    }
  };

  const text = locale === 'zh' ? t.zh : t.en;

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">olmOCR</h3>
            <p className="text-sm">
              {text.description}
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{text.product.title}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#features" className="hover:text-white">{text.product.features}</Link></li>
              <li><Link href="#how-to-use" className="hover:text-white">{text.product.howToUse}</Link></li>
              <li><Link href="#tips" className="hover:text-white">{text.product.bestPractices}</Link></li>
              <li><Link href="#faq" className="hover:text-white">{text.product.faq}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{text.resources.title}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/allenai/olmocr" target="_blank" rel="noopener noreferrer" className="hover:text-white">{text.resources.documentation}</a></li>
              <li><a href="https://github.com/allenai/olmocr" target="_blank" rel="noopener noreferrer" className="hover:text-white">{text.resources.apiReference}</a></li>
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
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            {text.copyright.replace('{year}', currentYear.toString())}
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/allenai/olmocr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/allen_ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FiTwitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/allen-institute-for-artificial-intelligence/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 