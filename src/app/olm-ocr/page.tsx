import type { Metadata } from 'next';
import { siteConfig } from '../metadata';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowToUse from '@/components/HowToUse';
import Tips from '@/components/Tips';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'olm OCR - Free Online Document Recognition | Convert with Confidence',
  description: 'Transform your documents into editable text in seconds with olm OCR. Free, fast, and secure - no registration needed. Process tables, equations, handwriting and more using advanced AI technology.',
  keywords: ['olm OCR', 'document recognition', 'OCR tool', 'table recognition', 'PDF to text', 'formula recognition', 'open source OCR', 'online OCR', 'free OCR'],
  alternates: {
    canonical: `${siteConfig.url}/olm-ocr`,
  },
};

export default function OlmOcrPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <div className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="prose dark:prose-invert max-w-none">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">olm OCR - Instant Document Recognition</h1>
            <p className="text-lg mb-4">
              Convert any document to editable text instantly with olm OCR. Process everything from handwritten notes to complex tables with our advanced AI technology.
              Start converting now - it's free, fast, and requires no registration.
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