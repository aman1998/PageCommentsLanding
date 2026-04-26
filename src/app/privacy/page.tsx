import { SITE_CONFIG } from "@/config/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Privacy Policy - ${SITE_CONFIG.name}`,
  description: `Privacy Policy for ${SITE_CONFIG.name} Extension`,
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto pt-4 sm:pt-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8">
        Privacy Policy for {SITE_CONFIG.name} Extension
      </h1>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          What {SITE_CONFIG.name} Does
        </h2>
        <p>
          {SITE_CONFIG.name} is a Chrome extension for adding anchored comments
          to pages, capturing screenshots, running review sessions, and
          exporting review results to PDF. This Privacy Policy explains what
          information is handled by the extension, website, and related services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          Information We Handle
        </h2>
        <div className="space-y-4">
          <div>
            <h4 className="text-base sm:text-lg font-medium">
              Review Content
            </h4>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Comments, replies, labels, statuses, and timestamps</li>
              <li>Page URLs, page titles, anchors, and viewport metadata</li>
              <li>Screenshots and images you attach to comments</li>
              <li>Templates, palettes, presets, and extension settings</li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-medium">Account Data</h4>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                If you sign in, we process your account identifier and email
                address through Supabase authentication.
              </li>
              <li>
                If you use Google OAuth, Google provides the authentication data
                needed to create or access your account.
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-medium">Payment Data</h4>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                Paid Pro access is processed by Paddle, which acts as the
                merchant of record for purchases.
              </li>
              <li>
                We may store payment status, transaction ID, Paddle customer ID,
                product ID, price ID, and the email associated with the purchase.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          How Data Is Stored
        </h2>
        <div className="space-y-4">
          <div>
            <h4 className="text-base sm:text-lg font-medium">
              Local Browser Storage
            </h4>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                Review data is primarily stored locally in your browser,
                including local storage and IndexedDB used by the extension.
              </li>
              <li>
                Websites you visit cannot directly access the extension&apos;s
                stored data.
              </li>
              <li>
                Other extensions cannot access this data unless Chrome or your
                browser grants them permission.
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-medium">
              Cloud Services
            </h4>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                Authentication and purchase verification may require server-side
                checks with Supabase and Paddle.
              </li>
              <li>
                We do not sell your personal data or use your review content for
                advertising.
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
            <h4 className="text-base sm:text-lg font-medium">Supabase</h4>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Used for authentication and server-side account checks.</li>
              <li>
                Supabase may process account identifiers, session data, and email
                addresses.
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-medium">Google OAuth</h4>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Used when you choose to sign in with Google.</li>
              <li>
                Google&apos;s own terms and privacy policy apply to Google
                authentication.
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-medium">Paddle</h4>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Used to process one-time Pro purchases.</li>
              <li>
                Paddle may process billing details, tax information, invoices,
                and payment-related records.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          Your Choices and Controls
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>You can edit or delete comments and review data in the extension.</li>
          <li>You can export review results to PDF when you choose to do so.</li>
          <li>
            You can clear extension data through the extension or Chrome&apos;s
            extension storage controls.
          </li>
          <li>
            You can contact us to ask about account or purchase records linked
            to your email address.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          Retention and Security
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Local review data remains in your browser until you delete it,
            uninstall the extension, or clear browser storage.
          </li>
          <li>
            Account and payment records may be retained as needed to provide Pro
            access, support, accounting, tax, fraud prevention, and legal
            compliance.
          </li>
          <li>
            We use reasonable technical and organizational measures to protect
            the information processed by our services.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          Updates to Privacy Policy
        </h2>
        <ul className="list-disc pl-6 space-y-2">
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
          at {SITE_CONFIG.email}.
        </p>
        <p className="mt-4 text-sm text-gray-600">
          Last updated: April 26, 2026
        </p>
      </section>
    </div>
  );
}
