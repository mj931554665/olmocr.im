import { FiFileText, FiTable, FiEdit3, FiCpu, FiLock, FiZap, FiGrid, FiType, FiLayout, FiCode } from 'react-icons/fi';

interface FeaturesProps {
  locale?: string;
}

export default function Features({ locale = 'en' }: FeaturesProps) {
  const t = {
    en: {
      title: 'Why Choose olmOCR',
      subtitle: 'Advanced features that make document conversion effortless',
      features: [
        {
          icon: <FiLock className="w-8 h-8" />,
          title: 'Privacy First',
          description: 'Your files are processed locally and automatically deleted. No data is stored or shared.'
        },
        {
          icon: <FiZap className="w-8 h-8" />,
          title: 'Lightning Fast',
          description: 'Process documents in seconds with our optimized AI engine. Handle multiple pages efficiently.'
        },
        {
          icon: <FiGrid className="w-8 h-8" />,
          title: 'Table Recognition',
          description: 'Accurately extract tables while maintaining structure. Perfect for financial documents and reports.'
        },
        {
          icon: <FiType className="w-8 h-8" />,
          title: 'Multi-Language Support',
          description: 'Recognize text in 100+ languages including Chinese, English, Japanese, and Korean.'
        },
        {
          icon: <FiLayout className="w-8 h-8" />,
          title: 'Layout Preservation',
          description: 'Maintain original document formatting including columns, paragraphs, and text styles.'
        },
        {
          icon: <FiCode className="w-8 h-8" />,
          title: 'Open Source',
          description: 'Free to use and modify. Join our community to contribute and improve olmOCR together.'
        }
      ]
    },
    zh: {
      title: '为什么选择 olmOCR',
      subtitle: '让文档转换变得轻松的高级功能',
      features: [
        {
          icon: <FiLock className="w-8 h-8" />,
          title: '隐私优先',
          description: '文件在本地处理并自动删除。不存储或共享任何数据。'
        },
        {
          icon: <FiZap className="w-8 h-8" />,
          title: '极速处理',
          description: '优化的 AI 引擎几秒内完成处理。高效处理多页文档。'
        },
        {
          icon: <FiGrid className="w-8 h-8" />,
          title: '表格识别',
          description: '准确提取表格并保持结构。完美适用于财务文档和报告。'
        },
        {
          icon: <FiType className="w-8 h-8" />,
          title: '多语言支持',
          description: '支持识别100多种语言，包括中文、英文、日文和韩文。'
        },
        {
          icon: <FiLayout className="w-8 h-8" />,
          title: '布局保持',
          description: '保持原始文档格式，包括列、段落和文本样式。'
        },
        {
          icon: <FiCode className="w-8 h-8" />,
          title: '开源免费',
          description: '免费使用和修改。加入我们的社区，一起改进 olmOCR。'
        }
      ]
    }
  };

  const text = locale === 'zh' ? t.zh : t.en;

  return (
    <section id="features" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {text.title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {text.features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 