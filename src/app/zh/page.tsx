import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowToUse from '@/components/HowToUse';
import Tips from '@/components/Tips';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { siteConfig } from '../metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'olmOCR - 免费在线图片文字识别工具',
  description: 'olmOCR 是一款免费的在线工具，可以将图片转换为文本。使用 olmOCR 高精度处理文档，支持表格、公式和手写文字识别。',
  alternates: {
    canonical: `${siteConfig.url}/zh`,
    languages: {
      'en': `${siteConfig.url}`,
      'zh': `${siteConfig.url}/zh`,
    },
  },
};

export default function ZhHome() {
  return (
    <main className="min-h-screen">
      <Header locale="zh" />
      <Hero locale="zh" />
      <Features locale="zh" />
      <HowToUse locale="zh" />
      <Tips locale="zh" />
      <FAQ locale="zh" />
      <CTA locale="zh" />
      <Footer locale="zh" />
    </main>
  );
} 