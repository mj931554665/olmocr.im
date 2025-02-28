import { siteConfig } from '../metadata';

export const metadata = {
  title: 'Privacy Policy - olmOCR',
  description: 'Learn about how olmOCR protects your privacy and handles your data.',
  alternates: {
    canonical: `${siteConfig.url}/privacy`,
    languages: {
      'en': `${siteConfig.url}/privacy`,
      'zh': `${siteConfig.url}/zh/privacy`,
    },
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          Privacy Policy
        </h1>

        <div className="prose dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              1. Information Collection
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              When you use olmOCR services, we may collect the following information:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
              <li>Documents and images you upload (used only for text recognition)</li>
              <li>Basic usage statistics (such as access time, usage frequency)</li>
              <li>Device information (such as browser type, operating system)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              2. Information Usage
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The information we collect is used for:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
              <li>Providing OCR text recognition services</li>
              <li>Improving our service quality</li>
              <li>Resolving technical issues</li>
              <li>Sending service-related notifications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              3. Data Security
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We take your data security seriously and implement the following measures:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
              <li>SSL/TLS encryption for all data transmission</li>
              <li>Immediate deletion of documents after processing</li>
              <li>Regular security audits and updates</li>
              <li>Strict internal access controls</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              4. Cookie Usage
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We use cookies to improve user experience, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
              <li>Remembering your preferences</li>
              <li>Analyzing website usage</li>
              <li>Optimizing website performance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              5. Third-Party Services
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We may use third-party services to support our operations. These service providers are carefully selected and must comply with our privacy protection requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              6. User Rights
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              As a user, you have the following rights:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to data processing</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              7. Policy Updates
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We may update this privacy policy from time to time. Any significant changes will be notified through website announcements or email. Continued use of our services indicates your acceptance of the new privacy policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              8. Contact Us
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              If you have any questions or suggestions about our privacy policy, please contact us:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>Email: privacy@olmocr.org</li>
              <li>Address: [Your Address]</li>
            </ul>
          </section>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">
          Last updated: March 1, 2025
        </p>
      </div>
    </div>
  );
} 