'use client';

import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface FAQProps {
  locale?: string;
}

export default function FAQ({ locale = 'en' }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const t = {
    en: {
      title: 'Frequently Asked Questions',
      subtitle: 'Find answers to common questions about olmOCR',
      faqs: [
        {
          question: 'What file formats does olmOCR support?',
          answer: 'olmOCR supports common image formats including JPG, PNG, and TIFF. The maximum file size limit is 10MB for the free version.'
        },
        {
          question: 'How accurate is the text recognition?',
          answer: 'olmOCR uses advanced AI technology to achieve high accuracy in text recognition. The accuracy rate typically exceeds 95% for clear, well-formatted documents.'
        },
        {
          question: 'Can olmOCR recognize handwritten text?',
          answer: 'Yes, olmOCR can recognize handwritten text, though accuracy may vary depending on the handwriting clarity and style.'
        },
        {
          question: 'Is my data secure when using olmOCR?',
          answer: 'Yes, we take data security seriously. Files are processed securely and deleted immediately after processing. We do not store or share your documents.'
        }
      ]
    },
    zh: {
      title: '常见问题',
      subtitle: '查找关于 olmOCR 的常见问题解答',
      faqs: [
        {
          question: 'olmOCR 支持哪些文件格式？',
          answer: 'olmOCR 支持常见的图片格式，包括 JPG、PNG 和 TIFF。免费版本的最大文件大小限制为 10MB。'
        },
        {
          question: '文字识别的准确率如何？',
          answer: 'olmOCR 使用先进的 AI 技术实现高准确率的文字识别。对于清晰、格式规范的文档，准确率通常超过 95%。'
        },
        {
          question: 'olmOCR 能识别手写文字吗？',
          answer: '是的，olmOCR 可以识别手写文字，但准确率可能会因手写的清晰度和风格而有所不同。'
        },
        {
          question: '使用 olmOCR 时我的数据安全吗？',
          answer: '是的，我们非常重视数据安全。文件会被安全处理，并在处理后立即删除。我们不会存储或分享您的文档。'
        }
      ]
    }
  };

  const text = locale === 'zh' ? t.zh : t.en;

  return (
    <section id="faq" className="py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          {text.title}
        </h2>
        <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12">
          {text.subtitle}
        </p>

        <div className="space-y-4">
          {text.faqs.map((faq, index) => (
            <div
              key={index}
              className="border dark:border-gray-700 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <FiChevronUp className="w-5 h-5" />
                ) : (
                  <FiChevronDown className="w-5 h-5" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700">
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 