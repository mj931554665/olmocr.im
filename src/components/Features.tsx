import { FiFileText, FiTable, FiEdit3, FiCpu } from 'react-icons/fi';

export default function Features() {
  const features = [
    {
      icon: <FiFileText className="w-8 h-8" />,
      title: 'High-Precision OCR',
      description: 'Advanced AI technology for accurate recognition of various fonts and text formats'
    },
    {
      icon: <FiTable className="w-8 h-8" />,
      title: 'Table Recognition',
      description: 'Intelligent detection of table structures while maintaining data integrity and format'
    },
    {
      icon: <FiEdit3 className="w-8 h-8" />,
      title: 'Handwriting Recognition',
      description: 'Support for handwritten text recognition, easily convert handwritten notes to digital format'
    },
    {
      icon: <FiCpu className="w-8 h-8" />,
      title: 'Smart Layout Analysis',
      description: 'Automatic detection of document layout, preserving original reading order and structure'
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Powerful OCR Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
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