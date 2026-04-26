import { Metadata } from "next";
import { SITE_CONFIG } from "@/config/constants";

export const metadata: Metadata = {
  title: `Terms of Use - ${SITE_CONFIG.name}`,
  description: `Terms of Use for ${SITE_CONFIG.name} Extension`,
};

export default function TermsOfUse() {
  return (
    <div className="container mx-auto pt-4 sm:pt-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">
        Terms of Use for {SITE_CONFIG.name} Extension
      </h1>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Acceptance</h2>
        <p>
          By accessing or using {SITE_CONFIG.name}, you agree to these Terms and
          our Privacy Policy. {SITE_CONFIG.name} is a Chrome extension for page
          review workflows, including anchored comments, screenshots, review
          sessions, and PDF exports. If you do not agree, do not use the
          extension.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          License and Use
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            We grant you a personal, non-exclusive, non-transferable, revocable
            license to use {SITE_CONFIG.name} for personal, non-commercial
            purposes.
          </li>
          <li>
            You must not reverse engineer, copy, resell, or misuse the extension
            or its content.
          </li>
          <li>
            You are responsible for any activity that occurs under your
            installation of {SITE_CONFIG.name}.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          User Content and Review Data
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            You are responsible for the comments, screenshots, URLs, images,
            exports, and other content you create or process with{" "}
            {SITE_CONFIG.name}.
          </li>
          <li>
            You must have the rights and permissions needed to capture,
            annotate, store, export, or share page content and screenshots.
          </li>
          <li>
            Review data is primarily stored locally in your browser. You are
            responsible for backing up any data that is important to you.
          </li>
          <li>
            PDF exports and shared review output may contain page content,
            screenshots, comments, and metadata. Review them before sharing.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          Pro Purchase and Payments
        </h2>
        <div className="space-y-3">
          <p>
            {SITE_CONFIG.name} offers a free plan and a paid Pro unlock. Pro is
            sold as a one-time purchase unless a checkout page clearly states
            otherwise.
          </p>
          <p>
            Payments are processed by Paddle. Paddle is the merchant of record
            for transactions made through our checkout. By completing a
            purchase, you agree to Paddle&apos;s terms and privacy policy.
          </p>
          <p>
            Pro access may be linked to the email address and Paddle customer
            record used at checkout. You may need to sign in to verify your
            purchase and restore Pro access.
          </p>
          <p>
            Refunds, chargebacks, and billing disputes are handled in accordance
            with Paddle&apos;s policies.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          Acceptable Use
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Do not use {SITE_CONFIG.name} to violate laws, infringe intellectual
            property rights, or breach confidentiality obligations.
          </li>
          <li>
            Do not use the extension to collect, store, export, or share
            sensitive personal information unless you have a lawful basis and
            proper authorization.
          </li>
          <li>
            Do not interfere with the service, bypass access controls, abuse
            payment or authentication systems, or attempt unauthorized access to
            our infrastructure.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          Availability and Changes
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            We may change, suspend, or discontinue any part of{" "}
            {SITE_CONFIG.name}.
          </li>
          <li>We may update these Terms from time to time.</li>
          <li>
            Continued use of {SITE_CONFIG.name} after changes means you accept
            the updated Terms.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Disclaimers</h2>
        <div className="space-y-3">
          <p>
            {SITE_CONFIG.name} is provided on an &quot;as is&quot; and &quot;as
            available&quot; basis without warranties of any kind. We do not
            guarantee uninterrupted or error-free service.
          </p>
          <p>
            Browser APIs, website layouts, permissions, and third-party services
            may change. These changes can affect comments, screenshots, anchors,
            exports, authentication, or payment verification.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          Limitation of Liability
        </h2>
        <p>
          To the maximum extent permitted by law, we will not be liable for any
          indirect, incidental, special, consequential, or punitive damages, or
          any loss of data, profits, revenue, business opportunities, or
          goodwill.
        </p>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Contact</h2>
        <p>
          If you have any questions about these Terms, please contact us at{" "}
          {SITE_CONFIG.email}.
        </p>
        <p className="mt-4 text-sm">Last updated: April 26, 2026</p>
      </section>
    </div>
  );
}
