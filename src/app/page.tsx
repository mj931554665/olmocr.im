import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowToUse from '@/components/HowToUse';
import Tips from '@/components/Tips';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { siteConfig } from './metadata';

export const metadata = {
  title: 'olmOCR - Free Online PDF & Image to Text Converter | OCR Tool',
  description: 'olmOCR is a free online tool that converts PDFs and images to text. Use olmOCR to process documents with high accuracy. Try olmOCR now for tables, equations, and handwriting recognition.',
  alternates: {
    canonical: `${siteConfig.url}`,
    languages: siteConfig.alternateLanguages,
  },
  openGraph: {
    ...siteConfig.openGraph,
    title: 'olmOCR - Free Online Document Recognition Tool',
    description: 'Convert PDFs and images to text with olmOCR. Process documents, tables, and handwriting using olmOCR\'s advanced AI technology. Try olmOCR for free today.',
  },
  twitter: {
    ...siteConfig.twitter,
    title: 'olmOCR - Free Online Document Recognition',
    description: 'Convert documents to text with olmOCR. Process PDFs, images, and handwriting using olmOCR\'s advanced AI technology. Try olmOCR now.',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <HowToUse />
      <Tips />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
