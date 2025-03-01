'use client';

import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FiUpload, FiGithub, FiBook, FiFileText } from 'react-icons/fi';
import { SiHuggingface } from 'react-icons/si';
import Link from 'next/link';
import { siteConfig } from '@/app/metadata';
import Showcase from './Showcase';

interface HeroProps {
  locale?: string;
}

export default function Hero({ locale = 'en' }: HeroProps) {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const t = {
    en: {
      title: 'olmOCR - Free Online Document Recognition',
      subtitle: 'Transform your documents into editable text in seconds. Free, fast, and secure.',
      description: 'Use olmOCR to process tables, equations, handwriting, and more with advanced AI technology. No registration required, start converting now!',
      learnMore: 'View Documentation',
      resources: 'Resources',
      technicalReport: 'Technical Report',
      toolkitCode: 'Toolkit Code',
      datasetCheckpoints: 'Dataset and Checkpoints',
      uploadTitle: 'Upload to olmOCR',
      uploadText: 'Click or drag file to upload to olmOCR',
      uploadAnother: 'Upload another file to olmOCR',
      supportedFormats: 'Supports PDF and images',
      processing: 'Processing with olmOCR...',
      resultTitle: 'olmOCR Result',
      copyText: 'Copy Text',
      copied: 'Copied!',
      placeholder: 'olmOCR recognition results will be displayed here',
      demoWarning: '⚠️ This is a demo version of olmOCR. For full features and batch processing, please use our toolkit. ⚠️'
    },
    zh: {
      title: 'olmOCR - 免费在线文档识别',
      subtitle: '秒速将文档转换为可编辑文本。免费、快速、安全。',
      description: '使用 olmOCR 处理表格、公式、手写文字等，采用先进的 AI 技术。无需注册，立即开始转换！',
      learnMore: '查看文档',
      resources: '相关资源',
      technicalReport: '技术报告',
      toolkitCode: '工具包代码',
      datasetCheckpoints: '数据集和检查点',
      uploadTitle: '上传到 olmOCR',
      uploadText: '点击或拖拽文件上传到 olmOCR',
      uploadAnother: '上传另一个文件到 olmOCR',
      supportedFormats: '支持 PDF 和图片格式',
      processing: '正在使用 olmOCR 处理...',
      resultTitle: 'olmOCR 识别结果',
      copyText: '复制文本',
      copied: '已复制！',
      placeholder: '这里将显示 olmOCR 的识别结果',
      demoWarning: '⚠️ 这是 olmOCR 的演示版本。如需完整功能和批量处理，请使用我们的工具包。 ⚠️'
    }
  };

  const text = locale === 'zh' ? t.zh : t.en;

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

  const handleShowcaseImageSelect = async (file: File) => {
    setFile(file);
    setError(null);
    setResult('');
    await processFile(file);
  };

  return (
    <>
      <section className="pt-20 md:pt-24 pb-8 md:pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-6 text-gray-900 dark:text-white">
            {text.title}
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 mb-4">
            {text.subtitle}
          </p>
          <p className="text-base md:text-lg text-center text-gray-600 dark:text-gray-300 mb-8">
            {text.description}
          </p>

          <div className="flex flex-col items-center mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">{text.resources}</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/docs/olmocr.pdf"
                target="_blank"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 gap-2"
              >
                <FiFileText className="w-4 h-4" />
                {text.technicalReport}
              </Link>
              <Link
                href="https://github.com/allenai/olmocr"
                target="_blank"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 gap-2"
              >
                <FiGithub className="w-4 h-4" />
                {text.toolkitCode}
              </Link>
              <Link
                href="https://huggingface.co/collections/allenai/olmocr-67af8630b0062a25bf1b54a1"
                target="_blank"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 gap-2"
              >
                <SiHuggingface className="w-4 h-4" />
                {text.datasetCheckpoints}
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 md:p-6 rounded-lg">
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{text.uploadTitle}</h2>
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
                        <span className="text-sm md:text-base">{text.processing}</span>
                      </div>
                    ) : (
                      <div>
                        {file ? (
                          <span className="text-sm md:text-base">{text.uploadAnother}</span>
                        ) : (
                          <span className="text-sm md:text-base">
                            {text.uploadText}<br />
                            <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">{text.supportedFormats}</span>
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
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">{text.resultTitle}</h2>
                {result && (
                  <CopyToClipboard text={result} onCopy={handleCopy}>
                    <button className="text-sm md:text-base text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
                      {copied ? text.copied : text.copyText}
                    </button>
                  </CopyToClipboard>
                )}
              </div>
              <div className="bg-white dark:bg-gray-900 p-3 md:p-4 rounded-lg min-h-[150px] md:min-h-[200px] whitespace-pre-wrap text-sm md:text-base text-gray-800 dark:text-gray-200">
                {result || text.placeholder}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            {text.demoWarning}
          </div>
        </div>
      </section>
      <Showcase locale={locale} />
    </>
  );
} 