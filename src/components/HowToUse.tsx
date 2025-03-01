import { FiUpload, FiCpu, FiDownload, FiEdit } from 'react-icons/fi';

interface HowToUseProps {
  locale?: string;
}

export default function HowToUse({ locale = 'en' }: HowToUseProps) {
  const t = {
    en: {
      title: 'How to Use olmOCR',
      subtitle: 'Start converting your documents in 4 simple steps - No registration required!',
      steps: [
        {
          icon: <FiUpload className="w-8 h-8" />,
          title: 'Upload Document',
          description: 'Simply drag & drop your PDF or image file, or click to select. Supports multiple formats including PDF, JPG, PNG.'
        },
        {
          icon: <FiCpu className="w-8 h-8" />,
          title: 'Instant Processing',
          description: 'Our AI instantly processes your document, maintaining layout and formatting. Most files are processed within seconds.'
        },
        {
          icon: <FiEdit className="w-8 h-8" />,
          title: 'Review & Edit',
          description: 'Preview the extracted text in real-time. Check formatting, tables, and special characters - all accurately preserved.'
        },
        {
          icon: <FiDownload className="w-8 h-8" />,
          title: 'Save Results',
          description: 'Copy text directly or download the results. Your documents are automatically deleted after processing for privacy.'
        }
      ]
    },
    zh: {
      title: '如何使用 olmOCR',
      subtitle: '4个简单步骤开始转换文档 - 无需注册！',
      steps: [
        {
          icon: <FiUpload className="w-8 h-8" />,
          title: '上传文档',
          description: '直接拖放或点击选择您的 PDF 或图片文件。支持多种格式，包括 PDF、JPG、PNG 等。'
        },
        {
          icon: <FiCpu className="w-8 h-8" />,
          title: '即时处理',
          description: '我们的 AI 立即处理您的文档，保持原有布局和格式。大多数文件在几秒内完成处理。'
        },
        {
          icon: <FiEdit className="w-8 h-8" />,
          title: '检查编辑',
          description: '实时预览提取的文本。检查格式、表格和特殊字符 - 所有内容都准确保留。'
        },
        {
          icon: <FiDownload className="w-8 h-8" />,
          title: '保存结果',
          description: '直接复制文本或下载结果。处理完成后自动删除您的文档以保护隐私。'
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