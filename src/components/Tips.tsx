import { FiImage, FiMaximize2, FiSun, FiCrop } from 'react-icons/fi';

interface TipsProps {
  locale?: string;
}

export default function Tips({ locale = 'en' }: TipsProps) {
  const t = {
    en: {
      title: 'Best Practices',
      subtitle: 'Follow these tips for optimal recognition results',
      tips: [
        {
          icon: <FiImage className="w-6 h-6" />,
          title: 'Choose the Right Format',
          description: 'Use clear PDFs or high-quality images, avoid blurry or over-compressed images'
        },
        {
          icon: <FiMaximize2 className="w-6 h-6" />,
          title: 'Maintain Proper Resolution',
          description: 'Scan documents at 300 DPI or higher for optimal text clarity'
        },
        {
          icon: <FiSun className="w-6 h-6" />,
          title: 'Ensure Good Lighting',
          description: 'When capturing documents, ensure adequate lighting and avoid glare or shadows'
        },
        {
          icon: <FiCrop className="w-6 h-6" />,
          title: 'Crop Appropriately',
          description: 'Trim unnecessary margins and ensure the document fills the frame properly'
        }
      ]
    },
    zh: {
      title: '最佳实践',
      subtitle: '遵循这些技巧以获得最佳识别效果',
      tips: [
        {
          icon: <FiImage className="w-6 h-6" />,
          title: '选择正确的格式',
          description: '使用清晰的 PDF 或高质量图片，避免模糊或过度压缩的图片'
        },
        {
          icon: <FiMaximize2 className="w-6 h-6" />,
          title: '保持适当的分辨率',
          description: '扫描文档时使用 300 DPI 或更高分辨率以获得最佳文字清晰度'
        },
        {
          icon: <FiSun className="w-6 h-6" />,
          title: '确保良好的光线',
          description: '拍摄文档时，确保光线充足，避免眩光或阴影'
        },
        {
          icon: <FiCrop className="w-6 h-6" />,
          title: '适当裁剪',
          description: '修剪不必要的边距，确保文档正确填充画面'
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