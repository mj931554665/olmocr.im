import Link from 'next/link';
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">olmOCR</h3>
            <p className="text-sm">
              An open-source tool for intelligent document recognition, powered by AI technology.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#features" className="hover:text-white">Features</Link></li>
              <li><Link href="#how-to-use" className="hover:text-white">How to Use</Link></li>
              <li><Link href="#tips" className="hover:text-white">Best Practices</Link></li>
              <li><Link href="#faq" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/allenai/olmocr" target="_blank" rel="noopener noreferrer" className="hover:text-white">Documentation</a></li>
              <li><a href="https://github.com/allenai/olmocr" target="_blank" rel="noopener noreferrer" className="hover:text-white">API Reference</a></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            © {currentYear} olmOCR. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/allenai/olmocr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/allen_ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FiTwitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/allen-institute-for-artificial-intelligence/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 