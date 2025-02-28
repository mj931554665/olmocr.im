import { FiUploadCloud, FiClock, FiDownload } from 'react-icons/fi';

export default function HowToUse() {
  const steps = [
    {
      icon: <FiUploadCloud className="w-8 h-8" />,
      title: 'Upload File',
      description: 'Supports PDF, JPG, PNG and other formats, with a file size limit of 10MB'
    },
    {
      icon: <FiClock className="w-8 h-8" />,
      title: 'Processing',
      description: 'Advanced AI model processes your file quickly, typically within seconds'
    },
    {
      icon: <FiDownload className="w-8 h-8" />,
      title: 'Get Results',
      description: 'After recognition, copy the text directly or download as a document'
    }
  ];

  return (
    <section id="how-to-use" className="py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          How to Use
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Complete document recognition in three simple steps
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-blue-600">{step.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 