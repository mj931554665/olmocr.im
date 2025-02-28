import { siteConfig } from '../../metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '关于 olmOCR - 开源文字识别工具',
  description: '了解 olmOCR 项目的起源、团队和使命。我们致力于提供高质量的开源文字识别解决方案。',
  alternates: {
    canonical: `${siteConfig.url}/zh/about`,
    languages: {
      'en': `${siteConfig.url}/about`,
      'zh': `${siteConfig.url}/zh/about`,
    },
  },
};

export default function ZhAbout() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">关于 olmOCR</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">项目概述</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          olmOCR 是一个开源的文字识别工具，专注于提供高质量的 PDF 和图片文字提取服务。
          我们的目标是让文字识别技术更加便捷、准确和易用。
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">核心功能</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>支持多种文件格式（PDF、图片）</li>
          <li>高精度表格识别</li>
          <li>数学公式识别</li>
          <li>手写文字识别</li>
          <li>多语言支持</li>
          <li>保持原始排版</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">联系我们</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          如果您有任何问题、建议或合作意向，欢迎通过以下方式联系我们：
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>GitHub: <a href={siteConfig.links.github} className="text-blue-600 dark:text-blue-400 hover:underline">olmOCR</a></li>
          <li>文档: <a href={siteConfig.links.docs} className="text-blue-600 dark:text-blue-400 hover:underline">使用文档</a></li>
          <li>博客: <a href={siteConfig.links.blog} className="text-blue-600 dark:text-blue-400 hover:underline">技术博客</a></li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">开源协议</h2>
        <p className="text-gray-600 dark:text-gray-300">
          olmOCR 采用 MIT 许可证开源。您可以自由使用、修改和分发本项目，但需要保留原始版权信息。
        </p>
      </section>
    </div>
  );
} 