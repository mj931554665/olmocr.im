import { siteConfig } from '../../metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'olmOCR 服务条款',
  description: '了解使用 olmOCR 服务的条款和条件。包括使用限制、责任声明和知识产权等重要信息。',
  alternates: {
    canonical: `${siteConfig.url}/zh/terms`,
    languages: {
      'en': `${siteConfig.url}/terms`,
      'zh': `${siteConfig.url}/zh/terms`,
    },
  },
};

export default function ZhTerms() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">服务条款</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">服务说明</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          olmOCR 提供在线文字识别服务，支持 PDF 和图片文件的文字提取。使用本服务即表示您同意以下条款：
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>服务仅用于合法目的</li>
          <li>不得滥用或过度使用服务</li>
          <li>不得上传违法或侵权内容</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">使用限制</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          为确保服务质量，我们设置了以下限制：
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>单个文件大小限制</li>
          <li>并发请求数限制</li>
          <li>API 调用频率限制</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">免责声明</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          我们不对以下情况承担责任：
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>服务中断或不可用</li>
          <li>识别结果的准确性</li>
          <li>数据丢失或损坏</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">知识产权</h2>
        <p className="text-gray-600 dark:text-gray-300">
          olmOCR 的所有代码和资源均采用 MIT 许可证开源。您上传的内容的知识产权归您所有。
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">条款变更</h2>
        <p className="text-gray-600 dark:text-gray-300">
          我们保留随时修改这些条款的权利。重大变更将通过网站公告通知。
        </p>
      </section>

      <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">
        最后更新：2025年3月1日
      </p>
    </div>
  );
} 