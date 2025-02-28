import { siteConfig } from '../metadata';

export const metadata = {
  title: 'olmOCR Terms of Service | Free Document Recognition',
  description: 'Read the terms of service for using olmOCR, your free online document recognition tool. Learn how to use olmOCR effectively and responsibly.',
  alternates: {
    canonical: `${siteConfig.url}/terms`,
    languages: {
      'en': `${siteConfig.url}/terms`,
      'zh': `${siteConfig.url}/zh/terms`,
    },
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          Terms of Service
        </h1>

        <div className="prose dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              1. Service Description
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              olmOCR provides AI-powered document recognition services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
              <li>Document Text Recognition</li>
              <li>Table Recognition</li>
              <li>Formula Recognition</li>
              <li>Handwriting Recognition</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              2. Terms of Use
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              By using our services, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
              <li>Comply with all applicable laws and regulations</li>
              <li>Not abuse or interfere with normal service operations</li>
              <li>Not upload files containing malware</li>
              <li>Not infringe on others' intellectual property rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              3. Intellectual Property
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              All rights to olmOCR (including but not limited to trademarks, patents, and copyrights) belong to us. The intellectual property rights of recognition results generated during use belong to the user.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              4. Service Changes
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We reserve the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
              <li>Modify or terminate services at any time</li>
              <li>Update terms of service</li>
              <li>Adjust service pricing (if applicable)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              5. Limitation of Liability
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              To the extent permitted by law:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
              <li>We make no guarantees about service accuracy</li>
              <li>We are not liable for direct or indirect losses from service use</li>
              <li>We are not responsible for third-party service availability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              6. User Accounts
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              If service requires account registration, you must:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
              <li>Provide accurate registration information</li>
              <li>Protect account security</li>
              <li>Be responsible for account activities</li>
              <li>Update account information promptly</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              7. Service Interruption
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              While we strive for service stability, interruptions may occur due to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
              <li>System maintenance</li>
              <li>Technical issues</li>
              <li>Force majeure events</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              8. Dispute Resolution
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Any service-related disputes should first be resolved through friendly negotiation. If unsuccessful, they should be submitted to a court with jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              9. Contact Information
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              For questions about these terms, please contact:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>Email: legal@olmocr.org</li>
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