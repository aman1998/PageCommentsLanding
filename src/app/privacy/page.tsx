import { SITE_CONFIG } from "@/config/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Privacy Policy - ${SITE_CONFIG.name}`,
  description: `Privacy Policy for ${SITE_CONFIG.name} Extension`,
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8">
        Privacy Policy for {SITE_CONFIG.name} Extension
      </h1>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          Data Collection and Usage
        </h2>

        <h3 className="text-lg sm:text-xl font-medium mb-3">What We Collect</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-base sm:text-lg font-medium">
              1. Vocabulary Data
            </h4>
            <ul className="list-disc pl-6 mt-2">
              <li>Words and their translations that you save</li>
              <li>Learning status of each word</li>
              <li>Timestamps of when words were added</li>
              <li>Your notes for words (if any)</li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-medium">2. Settings</h4>
            <ul className="list-disc pl-6 mt-2">
              <li>Color schemes for word statuses</li>
              <li>Interface language preferences</li>
              <li>Filter settings and visible columns</li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-medium">
              3. Translation Data
            </h4>
            <ul className="list-disc pl-6 mt-2">
              <li>Text you select for translation</li>
              <li>Translation results</li>
              <li>Source and target languages</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          Data Security
        </h2>
        <div className="space-y-4">
          <div>
            <h4 className="text-base sm:text-lg font-medium">Local Storage</h4>
            <ul className="list-disc pl-6 mt-2">
              <li>Your data is stored in your browser&apos;s local storage</li>
              <li>It is not accessible to other extensions</li>
              <li>It is not accessible to websites you visit</li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-medium">
              No Data Sharing
            </h4>
            <ul className="list-disc pl-6 mt-2">
              <li>We do not share your data with third parties</li>
              <li>We do not sell your data</li>
              <li>We do not use your data for advertising</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Your Rights</h2>
        <div className="space-y-4">
          <div>
            <h4 className="text-base sm:text-lg font-medium">Data Access</h4>
            <ul className="list-disc pl-6 mt-2">
              <li>You can export your vocabulary data at any time</li>
              <li>You can import your data to another browser</li>
              <li>You can delete your data at any time</li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-medium">Data Control</h4>
            <ul className="list-disc pl-6 mt-2">
              <li>You can delete individual words</li>
              <li>You can modify word statuses</li>
              <li>
                You can clear all data through Chrome&apos;s extension settings
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          Third-Party Services
        </h2>
        <div className="space-y-4">
          <div>
            <h4 className="text-base sm:text-lg font-medium">
              Google Translate
            </h4>
            <ul className="list-disc pl-6 mt-2">
              <li>We use Google&apos;s translation service</li>
              <li>
                Google&apos;s privacy policy applies to translation requests
              </li>
              <li>No translation data is stored by us</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          Updates to Privacy Policy
        </h2>
        <ul className="list-disc pl-6">
          <li>We may update this privacy policy from time to time</li>
          <li>You will be notified of any significant changes</li>
          <li>
            Continued use of the extension after changes means you accept the
            new policy
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Contact</h2>
        <p>
          If you have any questions about this privacy policy, please contact us
          at {SITE_CONFIG.email}
        </p>
        <p className="mt-4 text-sm text-gray-600">
          Last updated: [30 may 2025]
        </p>
      </section>
    </div>
  );
}
