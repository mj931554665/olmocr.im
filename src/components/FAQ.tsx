'use client';

import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What file formats are supported?',
      answer: 'olmOCR supports various file formats including PDF, JPG, PNG, and TIFF. For best results, we recommend using PDF files or high-resolution images.'
    },
    {
      question: 'Is there a file size limit?',
      answer: 'Yes, the current file size limit is 10MB per file. For larger files, we recommend splitting them into smaller parts or using our batch processing API.'
    },
    {
      question: 'How accurate is the OCR recognition?',
      answer: 'Our OCR system achieves over 99% accuracy on clear, well-formatted documents. The accuracy may vary depending on factors such as image quality, font type, and document layout.'
    },
    {
      question: 'Can it recognize handwritten text?',
      answer: 'Yes, olmOCR can recognize handwritten text, though accuracy may vary depending on the handwriting clarity and style. For best results, ensure the handwriting is clear and well-contrasted.'
    },
    {
      question: 'How is my data handled?',
      answer: 'We take data privacy seriously. All uploaded files are processed securely and deleted from our servers immediately after processing. We do not store or use your documents for any other purposes.'
    }
  ];

  return (
    <section id="faq" className="py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12">
          Find answers to common questions about olmOCR
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
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