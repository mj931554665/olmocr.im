import type { Metadata } from 'next';
import { siteConfig } from '../../metadata';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowToUse from '@/components/HowToUse';
import Tips from '@/components/Tips';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'olm OCR - 智能文档识别系统 | 高精度表格识别 | 多语言支持',
  description: 'olm OCR 是新一代智能文档识别系统，采用深度学习技术，支持复杂表格识别、公式提取和多语言文字识别。让文档数字化更简单、更准确。',
  keywords: ['olm OCR', '智能文档识别', '表格识别工具', 'PDF文字提取', '公式识别', '开源OCR系统', '多语言OCR', '中文识别'],
  alternates: {
    canonical: `${siteConfig.url}/zh/olm-ocr`,
    languages: {
      'en': `${siteConfig.url}/olm-ocr`,
      'zh': `${siteConfig.url}/zh/olm-ocr`,
    },
  },
};

export default function ZhOlmOcrPage() {
  return (
    <main className="min-h-screen">
      <Header locale="zh" />
      <Hero locale="zh" />
      <div className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="prose dark:prose-invert max-w-none">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">olm OCR - 新一代智能文档识别系统</h1>
            <p className="text-lg mb-4">
              olm OCR 是一款革新性的开源文档识别系统，采用最新的深度学习技术，为用户提供专业级的文字识别服务。
              从简单的文本到复杂的表格、数学公式，再到多语言混排文档，olm OCR 都能以极高的准确率完成识别任务，并完整保留原始格式。
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-4">选择 olm OCR 的理由</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>开源透明：代码完全开源，社区驱动发展，可自由使用和定制</li>
              <li>精准识别：基于深度学习的智能识别技术，准确率业界领先</li>
              <li>智能表格：自动识别表格结构，完整还原单元格关系</li>
              <li>语言支持：支持全球超过100种语言识别，中英文识别效果尤其出色</li>
              <li>格式保持：智能分析文档结构，保留标题、段落、列表等原始排版</li>
              <li>数据安全：本地运算处理，无需担心敏感数据泄露</li>
            </ul>
          </div>
        </div>
      </div>
      <Features locale="zh" />
      <HowToUse locale="zh" />
      <Tips locale="zh" />
      <FAQ locale="zh" />
      <Footer locale="zh" />
    </main>
  );
} 