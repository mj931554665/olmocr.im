'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiGlobe } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  locale?: string;
}

export default function Header({ locale = 'en' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // 判断当前页面类型
  const isHomePage = pathname === '/' || pathname === '/zh';
  const isOlmOcrPage = pathname.includes('/olm-ocr');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const t = {
    en: {
      home: 'Home',
      about: 'About',
      olmOcr: 'olm OCR Guide',
      switchLang: 'Switch to 中文'
    },
    zh: {
      home: '首页',
      about: '关于我们',
      olmOcr: 'olm OCR 指南',
      switchLang: 'Switch to English'
    }
  };

  const text = locale === 'zh' ? t.zh : t.en;

  const renderNavLinks = () => {
    if (isOlmOcrPage) {
      return (
        <>
          <Link href={locale === 'zh' ? '/zh' : '/'} className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
            {text.home}
          </Link>
          <Link href={locale === 'zh' ? '/zh/about' : '/about'} className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
            {text.about}
          </Link>
        </>
      );
    }
    return (
      <>
        {!isHomePage && (
          <Link href={locale === 'zh' ? '/zh' : '/'} className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
            {text.home}
          </Link>
        )}
        <Link href={locale === 'zh' ? '/zh/about' : '/about'} className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
          {text.about}
        </Link>
        <Link href={locale === 'zh' ? '/zh/olm-ocr' : '/olm-ocr'} className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
          {text.olmOcr}
        </Link>
      </>
    );
  };

  const renderMobileNavLinks = () => {
    if (isOlmOcrPage) {
      return (
        <>
          <Link
            href={locale === 'zh' ? '/zh' : '/'}
            onClick={closeMenu}
            className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
          >
            {text.home}
          </Link>
          <Link
            href={locale === 'zh' ? '/zh/about' : '/about'}
            onClick={closeMenu}
            className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
          >
            {text.about}
          </Link>
        </>
      );
    }
    return (
      <>
        {!isHomePage && (
          <Link
            href={locale === 'zh' ? '/zh' : '/'}
            onClick={closeMenu}
            className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
          >
            {text.home}
          </Link>
        )}
        <Link
          href={locale === 'zh' ? '/zh/about' : '/about'}
          onClick={closeMenu}
          className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
        >
          {text.about}
        </Link>
        <Link
          href={locale === 'zh' ? '/zh/olm-ocr' : '/olm-ocr'}
          onClick={closeMenu}
          className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
        >
          {text.olmOcr}
        </Link>
      </>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href={locale === 'zh' ? '/zh' : '/'} className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            olm OCR
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex gap-6 items-center">
            {renderNavLinks()}
            <Link
              href={locale === 'zh' ? '/' : '/zh'}
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
            >
              <FiGlobe className="w-4 h-4" />
              <span>{text.switchLang}</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <Link
              href={locale === 'zh' ? '/' : '/zh'}
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
            >
              <FiGlobe className="w-4 h-4" />
            </Link>
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'max-h-64 opacity-100 mt-4'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col gap-4 py-4">
            {renderMobileNavLinks()}
          </div>
        </div>
      </nav>
    </header>
  );
} 