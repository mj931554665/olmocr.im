export const siteConfig = {
  name: 'olmOCR - Free Online Document Recognition Tool',
  description: 'olmOCR is a free online tool that converts PDFs and images to text. Use olmOCR to easily digitize PDFs, images, and handwritten documents with high accuracy.',
  shortDescription: 'Free Online Document Recognition',
  url: 'https://olmocr.im',
  ogImage: 'https://olmocr.im/og-image.jpg',
  links: {
    github: 'https://github.com/olm-OCR/olmOCR',
    docs: 'https://docs.olmocr.im',
    demo: 'https://demo.olmocr.im',
    blog: 'https://blog.olmocr.im',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://olmocr.im',
    siteName: 'olmOCR',
    images: [
      {
        url: 'https://olmocr.im/og-image.jpg',
        width: 1200,
        height: 630,
      }
    ]
  },
  twitter: {
    handle: '@olmOCR',
    site: '@olmOCR',
    cardType: 'summary_large_image',
  },
  keywords: [
    'olmOCR',
    'OCR',
    'free OCR',
    'online OCR',
    'document recognition',
    'PDF to text',
    'image to text',
    'table recognition',
    'formula recognition',
    'handwriting recognition',
    'open source OCR',
    'free document scanner',
    'text extraction',
    'document processing',
    'AI OCR tool',
  ],
  features: [
    'Free Online OCR',
    'PDF Text Extraction',
    'Image Text Recognition',
    'Table Recognition',
    'Formula Recognition',
    'Handwriting Recognition',
    'Multiple Language Support',
    'Real-time Processing',
    'Open Source',
  ],
  alternateLanguages: {
    en: 'https://olmocr.im',
    zh: 'https://olmocr.im/zh',
  },
};

export type SiteConfig = typeof siteConfig; 