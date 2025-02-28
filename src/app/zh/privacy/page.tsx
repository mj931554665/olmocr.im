import { siteConfig } from '../../metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'olmOCR 隐私政策',
  description: '了解 olmOCR 如何收集、使用和保护您的个人信息。我们重视您的隐私，并采取严格的措施保护您的数据安全。',
  alternates: {
    canonical: `${siteConfig.url}/zh/privacy`,
    languages: {
      'en': `${siteConfig.url}/privacy`,
      'zh': `${siteConfig.url}/zh/privacy`,
    },
  },
};

export default function ZhPrivacy() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">隐私政策</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">信息收集</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          我们仅收集必要的信息来提供服务：
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>上传的文件内容（仅用于文字识别）</li>
          <li>基本使用统计（如访问量）</li>
          <li>错误日志（用于改进服务）</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">数据使用</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          您上传的文件仅用于文字识别服务，我们不会：
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>永久存储您的文件</li>
          <li>与第三方共享您的数据</li>
          <li>将数据用于其他商业目的</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">数据安全</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          我们采取以下措施保护您的数据：
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>所有数据传输使用 HTTPS 加密</li>
          <li>文件处理完成后立即删除</li>
          <li>定期安全审计和更新</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Cookie 使用</h2>
        <p className="text-gray-600 dark:text-gray-300">
          我们使用必要的 Cookie 来提供基本功能。这些 Cookie 不会跟踪您的个人信息。
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">联系我们</h2>
        <p className="text-gray-600 dark:text-gray-300">
          如果您对我们的隐私政策有任何疑问，请通过 GitHub 或文档网站联系我们。
        </p>
      </section>

      <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">
        最后更新：2025年3月1日
      </p>
    </div>
  );
} 