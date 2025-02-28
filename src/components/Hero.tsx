'use client';

import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FiUpload } from 'react-icons/fi';
import Link from 'next/link';
import { siteConfig } from '@/app/metadata';

export default function Hero() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const processFile = async (file: File) => {
    setLoading(true);
    setError(null);
    const formData = new FormData();
    formData.append('file', file);

    try {
      console.log('Sending request to OCR API...');
      const response = await fetch('/api/ocr', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log('Response received from OCR API');
      const data = await response.json();
      console.log('Response data:', data);
      
      if (data.error) {
        throw new Error(data.error);
      }

      setResult(data.text || '');
    } catch (error) {
      console.error('Error during OCR:', error);
      setError(error instanceof Error ? error.message : 'An error occurred during processing');
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setError(null);
      await processFile(selectedFile);
    }
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      setError(null);
      await processFile(droppedFile);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="pt-20 md:pt-24 pb-8 md:pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-6 text-gray-900 dark:text-white">
          olmOCR - Free Online Document Recognition
        </h1>
        <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 mb-4">
          olmOCR is an open-source tool designed for high-throughput conversion of PDFs and images into text while preserving natural reading order.
        </p>
        <p className="text-base md:text-lg text-center text-gray-600 dark:text-gray-300 mb-8">
          Use olmOCR to process tables, equations, handwriting, and more with advanced AI technology.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
          <Link
            href={siteConfig.links.demo}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg"
          >
            Try olmOCR Demo
          </Link>
          <Link
            href={siteConfig.links.docs}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-50 hover:bg-blue-100 dark:text-blue-400 dark:bg-gray-800 dark:hover:bg-gray-700 md:text-lg"
          >
            Learn How to Use olmOCR
          </Link>
        </div>
        
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 md:p-6 rounded-lg">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Upload to olmOCR</h2>
            <div 
              className={`border-2 border-dashed ${
                loading 
                  ? 'border-gray-300 dark:border-gray-600' 
                  : 'border-blue-300 dark:border-blue-500'
              } rounded-lg p-4 md:p-8 text-center transition-colors bg-white dark:bg-gray-900`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <input
                type="file"
                onChange={handleFileChange}
                accept="image/*,.pdf"
                className="hidden"
                id="file-upload"
                disabled={loading}
              />
              <label
                htmlFor="file-upload"
                className={`cursor-pointer flex flex-col items-center justify-center gap-3 md:gap-4 ${
                  loading 
                    ? 'opacity-50' 
                    : 'hover:text-blue-600 dark:hover:text-blue-400'
                } text-gray-700 dark:text-gray-300`}
              >
                <FiUpload className="w-8 h-8 md:w-12 md:h-12" />
                <div>
                  {loading ? (
                    <div className="flex flex-col items-center">
                      <div className="animate-spin rounded-full h-5 w-5 md:h-6 md:w-6 border-b-2 border-blue-600 dark:border-blue-400 mb-2"></div>
                      <span className="text-sm md:text-base">Processing with olmOCR...</span>
                    </div>
                  ) : (
                    <div>
                      {file ? (
                        <span className="text-sm md:text-base">Upload another file to olmOCR</span>
                      ) : (
                        <span className="text-sm md:text-base">
                          Click or drag file to upload to olmOCR<br />
                          <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Supports PDF and images</span>
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </label>
              {error && (
                <p className="text-red-500 dark:text-red-400 text-xs md:text-sm mt-4">{error}</p>
              )}
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-4 md:p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">olmOCR Result</h2>
              {result && (
                <CopyToClipboard text={result} onCopy={handleCopy}>
                  <button className="text-sm md:text-base text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
                    {copied ? 'Copied!' : 'Copy Text'}
                  </button>
                </CopyToClipboard>
              )}
            </div>
            <div className="bg-white dark:bg-gray-900 p-3 md:p-4 rounded-lg min-h-[150px] md:min-h-[200px] whitespace-pre-wrap text-sm md:text-base text-gray-800 dark:text-gray-200">
              {result || 'olmOCR recognition results will be displayed here'}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          ⚠️ This is a demo version of olmOCR. For full features and batch processing, please use our toolkit. ⚠️
        </div>
      </div>
    </section>
  );
} 