interface CTAProps {
  locale?: string;
}

export default function CTA({ locale = 'en' }: CTAProps) {
  const t = {
    en: {
      title: 'Ready to Transform Your Documents?',
      subtitle: 'Start using olmOCR today and experience the power of intelligent document recognition',
      learnMore: 'Learn More',
      viewOnGitHub: 'View on GitHub'
    },
    zh: {
      title: '准备好转换您的文档了吗？',
      subtitle: '立即开始使用 olmOCR，体验智能文档识别的强大功能',
      learnMore: '了解更多',
      viewOnGitHub: '在 GitHub 上查看'
    }
  };

  const text = locale === 'zh' ? t.zh : t.en;

  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          {text.title}
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          {text.subtitle}
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#features"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            {text.learnMore}
          </a>
          <a
            href="https://github.com/allenai/olmocr"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            {text.viewOnGitHub}
          </a>
        </div>
      </div>
    </section>
  );
} 