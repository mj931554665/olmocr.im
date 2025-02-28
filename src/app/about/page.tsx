import Link from 'next/link';
import { siteConfig } from '../metadata';

export const metadata = {
  title: 'About olmOCR - Free Online Document Recognition Tool | How to Use',
  description: 'Learn how to use olmOCR for free document conversion. olmOCR provides easy-to-use tools for digitizing your documents. Get started with olmOCR today.',
  alternates: {
    canonical: `${siteConfig.url}/about`,
    languages: {
      'en': `${siteConfig.url}/about`,
      'zh': `${siteConfig.url}/zh/about`,
    },
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          About olmOCR
        </h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Project Overview
          </h2>
          <div className="prose dark:prose-invert">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              olmOCR is an open-source intelligent document recognition solution dedicated to providing high-precision, efficient OCR services. Our mission is to make document digitization simple and accurate.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Using advanced deep learning technology, we support recognition of various document formats, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
              <li>Scanned Documents</li>
              <li>PDF Files</li>
              <li>Image Files</li>
              <li>Handwritten Documents</li>
              <li>Tables</li>
              <li>Mathematical Formulas</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Open Source License
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            olmOCR is licensed under the Apache 2.0 License, which means you can freely use, modify, and distribute this project. We welcome community contributions and improvement suggestions.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <Link 
              href={siteConfig.links.github}
              target="_blank"
              className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Visit GitHub Repository →
            </Link>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Contact Us
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            If you have any questions, suggestions, or cooperation intentions, please contact us through:
          </p>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>
              <strong>GitHub Issues:</strong>{' '}
              <Link 
                href={`${siteConfig.links.github}/issues`}
                target="_blank"
                className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Submit Issues or Suggestions
              </Link>
            </li>
            <li>
              <strong>Email:</strong> support@olmocr.org
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Related Links
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link 
              href="/privacy" 
              className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Privacy Policy</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Learn how we protect your privacy and data security</p>
            </Link>
            <Link 
              href="/terms" 
              className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Terms of Service</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Review the terms and conditions for using olmOCR</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
} 