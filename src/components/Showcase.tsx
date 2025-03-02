import Image from 'next/image';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

interface ShowcaseProps {
  locale?: string;
}

export default function Showcase({ locale = 'en' }: ShowcaseProps) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [copied, setCopied] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState('');

  const t = {
    en: {
      title: 'Document Examples',
      subtitle: 'Click on any example to experience olmOCR capabilities',
      resultTitle: 'Recognition Result',
      copyText: 'Copy Text',
      copied: 'Copied!',
      processing: 'Processing document...',
      placeholder: 'Click on any example above to see the recognition result',
      cases: [
        {
          id: 'handwriting',
          title: 'Handwriting',
          description: 'Convert handwritten notes and manuscripts to digital text',
          image: '/showcase/handwriting.jpg'
        },
        {
          id: 'historical',
          title: 'Historical Documents',
          description: 'Digitize historical documents while preserving their authenticity',
          image: '/showcase/historical.jpg'
        },
        {
          id: 'academic',
          title: 'Academic Papers',
          description: 'Process academic papers with complex layouts, formulas, and references',
          image: '/showcase/academic.jpg'
        },
        {
          id: 'math',
          title: 'Math Textbooks',
          description: 'Extract mathematical equations, diagrams, and explanations accurately',
          image: '/showcase/math.jpg'
        }
      ]
    },
    zh: {
      title: '文档示例',
      subtitle: '点击任意示例体验 olmOCR 的处理能力',
      resultTitle: '识别结果',
      copyText: '复制文本',
      copied: '已复制！',
      processing: '正在处理文档...',
      placeholder: '点击上方任意示例查看识别结果',
      cases: [
        {
          id: 'handwriting',
          title: '手写文档',
          description: '将手写笔记和手稿转换为数字文本',
          image: '/showcase/handwriting.jpg'
        },
        {
          id: 'historical',
          title: '历史文件',
          description: '数字化历史文档的同时保持其真实性',
          image: '/showcase/historical.jpg'
        },
        {
          id: 'academic',
          title: '学术论文',
          description: '处理包含复杂排版、公式和参考文献的学术论文',
          image: '/showcase/academic.jpg'
        },
        {
          id: 'math',
          title: '数学教科书',
          description: '准确提取数学方程式、图表和解释说明',
          image: '/showcase/math.jpg'
        }
      ]
    }
  };

  const text = locale === 'zh' ? t.zh : t.en;

  const handleImageClick = async (imagePath: string, title: string) => {
    if (loading) return;
    
    try {
      setLoading(true);
      setSelectedTitle(title);
      setResult(''); // 清空之前的结果

      // 滚动到结果区域
      const resultSection = document.getElementById('result-section');
      if (resultSection) {
        resultSection.scrollIntoView({ behavior: 'smooth' });
      }

      const response = await fetch(imagePath);
      const blob = await response.blob();
      const file = new File([blob], imagePath.split('/').pop() || 'image.jpg', { type: blob.type });
      
      // 创建 FormData 对象
      const formData = new FormData();
      formData.append('file', file);

      // 发送到 OCR API
      const ocrResponse = await fetch('/api/ocr', {
        method: 'POST',
        body: formData,
      });

      if (!ocrResponse.ok) {
        throw new Error(`HTTP error! status: ${ocrResponse.status}`);
      }

      const data = await ocrResponse.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      setResult(data.text || '');
    } catch (error) {
      console.error('Error processing image:', error);
      setResult('Error processing image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="showcase" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          {text.title}
        </h2>
        <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12">
          {text.subtitle}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {text.cases.map((item) => (
            <div
              key={item.id}
              className={`bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer ${
                loading && selectedTitle === item.title ? 'opacity-75' : ''
              }`}
              onClick={() => handleImageClick(item.image, item.title)}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div id="result-section" className="bg-white dark:bg-gray-800 rounded-lg p-6 mt-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {selectedTitle || text.resultTitle}
            </h3>
            {result && (
              <CopyToClipboard text={result} onCopy={handleCopy}>
                <button className="text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
                  {copied ? text.copied : text.copyText}
                </button>
              </CopyToClipboard>
            )}
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 min-h-[200px] relative">
            {loading ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 dark:border-blue-400"></div>
                  <p className="text-gray-600 dark:text-gray-300">{text.processing}</p>
                </div>
              </div>
            ) : (
              <pre className="whitespace-pre-wrap text-sm text-gray-800 dark:text-gray-200">
                {result || text.placeholder}
              </pre>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 