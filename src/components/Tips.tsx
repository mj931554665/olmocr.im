import { FiImage, FiMaximize2, FiSun, FiCrop, FiClock, FiShield } from 'react-icons/fi';

interface TipsProps {
  locale?: string;
}

export default function Tips({ locale = 'en' }: TipsProps) {
  const t = {
    en: {
      title: 'Tips & Best Practices',
      subtitle: 'Get the most accurate results with these recommendations',
      tips: [
        {
          icon: <FiImage className="w-8 h-8" />,
          title: 'Image Quality',
          description: 'For best results, use clear, high-resolution images. Recommended minimum resolution is 300 DPI.'
        },
        {
          icon: <FiMaximize2 className="w-8 h-8" />,
          title: 'File Size',
          description: 'Supports files up to 50MB. For larger files, consider splitting into smaller parts.'
        },
        {
          icon: <FiClock className="w-8 h-8" />,
          title: 'Processing Time',
          description: 'Most documents are processed within 5-10 seconds. Complex layouts may take slightly longer.'
        },
        {
          icon: <FiShield className="w-8 h-8" />,
          title: 'Security',
          description: 'All processing is done locally in your browser. Your files never leave your device.'
        }
      ]
    },
    zh: {
      title: '使用技巧和最佳实践',
      subtitle: '遵循这些建议获得最准确的结果',
      tips: [
        {
          icon: <FiImage className="w-8 h-8" />,
          title: '图像质量',
          description: '为获得最佳效果，请使用清晰的高分辨率图像。建议最低分辨率为300 DPI。'
        },
        {
          icon: <FiMaximize2 className="w-8 h-8" />,
          title: '文件大小',
          description: '支持最大50MB的文件。对于更大的文件，建议分割成小部分。'
        },
        {
          icon: <FiClock className="w-8 h-8" />,
          title: '处理时间',
          description: '大多数文档在5-10秒内完成处理。复杂布局可能需要稍长时间。'
        },
        {
          icon: <FiShield className="w-8 h-8" />,
          title: '安全性',
          description: '所有处理都在您的浏览器本地完成。您的文件永远不会离开您的设备。'
        }
      ]
    }
  };

  const text = locale === 'zh' ? t.zh : t.en;

  return (
    <section id="tips" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          {text.title}
        </h2>
        <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12">
          {text.subtitle}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {text.tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg flex items-start gap-4"
            >
              <div className="text-blue-600 dark:text-blue-400 mt-1">{tip.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{tip.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 