export default function CTA() {
  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Transform Your Documents?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Start using olmOCR today and experience the power of intelligent document recognition
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#features"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Learn More
          </a>
          <a
            href="https://github.com/allenai/olmocr"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
} 