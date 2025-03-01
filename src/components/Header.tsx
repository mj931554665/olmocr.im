'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiGlobe } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  locale?: string;
}

export default function Header({ locale = 'en' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  
  // 判断当前页面类型
  const isHomePage = pathname === '/' || pathname === '/zh';
  const isOlmOcrPage = pathname.includes('/olm-ocr');

  const languages = [
    { code: 'en', name: 'English', path: '/' },
    { code: 'zh', name: '中文', path: '/zh' },
    // 后续可以添加更多语言
  ];

  const t = {
    en: {
      home: 'Home',
      about: 'About',
      olmOcr: 'olm OCR Guide',
      features: 'Features',
      howToUse: 'How to Use',
      bestPractices: 'Best Practices',
      faq: 'FAQ',
      language: {
        title: 'Language',
        current: 'Current Language'
      }
    },
    zh: {
      home: '首页',
      about: '关于我们',
      olmOcr: 'olm OCR 指南',
      features: '功能特点',
      howToUse: '使用说明',
      bestPractices: '最佳实践',
      faq: '常见问题',
      language: {
        title: '语言',
        current: '当前语言'
      }
    }
  };

  const text = locale === 'zh' ? t.zh : t.en;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const renderNavLinks = () => {
    if (isOlmOcrPage) {
      return (
        <>
          <Link
            href={locale === 'zh' ? '/zh' : '/'}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            {text.home}
          </Link>
          <Link
            href={locale === 'zh' ? '/zh/about' : '/about'}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
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
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            {text.home}
          </Link>
        )}
        <Link
          href={locale === 'zh' ? '/zh/about' : '/about'}
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          {text.about}
        </Link>
        <Link
          href={locale === 'zh' ? '/zh/olm-ocr' : '/olm-ocr'}
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
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
            onClick={() => {
              setIsMenuOpen(false);
              setIsLangMenuOpen(false);
            }}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            {text.home}
          </Link>
          <Link
            href={locale === 'zh' ? '/zh/about' : '/about'}
            onClick={() => {
              setIsMenuOpen(false);
              setIsLangMenuOpen(false);
            }}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
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
            onClick={() => {
              setIsMenuOpen(false);
              setIsLangMenuOpen(false);
            }}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            {text.home}
          </Link>
        )}
        <Link
          href={locale === 'zh' ? '/zh/about' : '/about'}
          onClick={() => {
            setIsMenuOpen(false);
            setIsLangMenuOpen(false);
          }}
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          {text.about}
        </Link>
        <Link
          href={locale === 'zh' ? '/zh/olm-ocr' : '/olm-ocr'}
          onClick={() => {
            setIsMenuOpen(false);
            setIsLangMenuOpen(false);
          }}
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          {text.olmOcr}
        </Link>
      </>
    );
  };

  return (
    <header className="bg-white dark:bg-gray-900 fixed w-full top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href={locale === 'zh' ? '/zh' : '/'} className="text-2xl font-bold text-gray-900 dark:text-white">
            olm OCR
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {renderNavLinks()}
            
            {/* Language Dropdown */}
            <div className="relative" ref={langMenuRef}>
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <FiGlobe className="w-5 h-5" />
                <span>{text.language.title}</span>
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
                  {languages.map((lang) => (
                    <Link
                      key={lang.code}
                      href={pathname.replace(/^\/[a-z]{2}/, '').replace(/^\//, '') || '/'}
                      locale={lang.code}
                      className={`block px-4 py-2 text-sm ${
                        locale === lang.code
                          ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                      onClick={() => setIsLangMenuOpen(false)}
                    >
                      <div className="flex items-center justify-between">
                        <span>{lang.name}</span>
                        {locale === lang.code && (
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            ({text.language.current})
                          </span>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4" ref={menuRef}>
            <div className="flex flex-col space-y-4">
              {renderMobileNavLinks()}

              {/* Mobile Language Menu */}
              <div className="border-t dark:border-gray-700 pt-4">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{text.language.title}</p>
                {languages.map((lang) => (
                  <Link
                    key={lang.code}
                    href={pathname.replace(/^\/[a-z]{2}/, '').replace(/^\//, '') || '/'}
                    locale={lang.code}
                    className={`block py-2 ${
                      locale === lang.code
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center justify-between">
                      <span>{lang.name}</span>
                      {locale === lang.code && (
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          ({text.language.current})
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
} 