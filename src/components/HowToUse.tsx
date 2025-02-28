import { FiUpload, FiCpu, FiDownload, FiEdit } from 'react-icons/fi';

interface HowToUseProps {
  locale?: string;
}

export default function HowToUse({ locale = 'en' }: HowToUseProps) {
  const t = {
    en: {
      title: 'How to Use olmOCR',
      subtitle: 'Follow these simple steps to convert your documents',
      steps: [
        {
          icon: <FiUpload className="w-8 h-8" />,
          title: 'Upload Document',
          description: 'Upload your PDF or image file by clicking the upload button or dragging and dropping'
        },
        {
          icon: <FiCpu className="w-8 h-8" />,
          title: 'Automatic Processing',
          description: 'olmOCR will automatically process your document using advanced AI technology'
        },
        {
          icon: <FiEdit className="w-8 h-8" />,
          title: 'Review Results',
          description: 'Check the extracted text, tables, and other content in the preview window'
        },
        {
          icon: <FiDownload className="w-8 h-8" />,
          title: 'Download or Copy',
          description: 'Download the results or copy the text directly to your clipboard'
        }
      ]
    },
    zh: {
      title: '如何使用 olmOCR',
      subtitle: '按照以下简单步骤转换您的文档',
      steps: [
        {
          icon: <FiUpload className="w-8 h-8" />,
          title: '上传文档',
          description: '点击上传按钮或拖放文件来上传您的 PDF 或图片文件'
        },
        {
          icon: <FiCpu className="w-8 h-8" />,
          title: '自动处理',
          description: 'olmOCR 将使用先进的 AI 技术自动处理您的文档'
        },
        {
          icon: <FiEdit className="w-8 h-8" />,
          title: '查看结果',
          description: '在预览窗口中检查提取的文本、表格和其他内容'
        },
        {
          icon: <FiDownload className="w-8 h-8" />,
          title: '下载或复制',
          description: '下载结果或直接将文本复制到剪贴板'
        }
      ]
    }
  };

  const text = locale === 'zh' ? t.zh : t.en;

  return (
    <section id="how-to-use" className="py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          {text.title}
        </h2>
        <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12">
          {text.subtitle}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {text.steps.map((step, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 