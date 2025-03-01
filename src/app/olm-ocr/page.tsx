import type { Metadata } from 'next';
import { siteConfig } from '../metadata';
import Header from '@/components/Header';
import Features from '@/components/Features';
import HowToUse from '@/components/HowToUse';
import Tips from '@/components/Tips';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'olm OCR - Free Online Document Recognition | Instant Text Conversion',
  description: 'Transform your documents into editable text with olm OCR. Process tables, equations, and handwriting using advanced AI technology. Free, secure, and no registration required - start converting now!',
  keywords: ['olm OCR', 'document recognition', 'OCR tool', 'table recognition', 'PDF to text', 'formula recognition', 'open source OCR', 'online OCR', 'free OCR'],
  alternates: {
    canonical: `${siteConfig.url}/olm-ocr`,
  },
};

export default function OlmOcrPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="prose dark:prose-invert max-w-none">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">olm OCR - Free Document Recognition Made Simple</h1>
            <p className="text-lg mb-4">
              Transform your documents into editable text in seconds with olm OCR. Our advanced AI-powered tool handles everything from simple text to complex tables and mathematical equations.
              Experience professional-grade document recognition without any cost or registration requirements.
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose olm OCR?</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Free & Open Source: No hidden costs, fully transparent and customizable</li>
              <li>Advanced AI: State-of-the-art recognition technology for superior accuracy</li>
              <li>Smart Table Detection: Preserve complex table structures automatically</li>
              <li>Universal Language Support: Process documents in 100+ languages</li>
              <li>Format Retention: Keep your document's original layout and styling</li>
              <li>Privacy First: All processing happens locally on your device</li>
            </ul>
          </div>
        </div>
      </div>
      <Features />
      <HowToUse />
      <Tips />
      <FAQ />
      <Footer />
    </main>
  );
} 