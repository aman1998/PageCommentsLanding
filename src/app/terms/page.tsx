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
      <p className="text-sm  mb-8">
        These Terms are written in English. Translations may be provided for
        convenience only. In case of any discrepancy, the English version shall
        prevail.
      </p>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Acceptance</h2>
        <p>
          By accessing or using {SITE_CONFIG.name}, you agree to these Terms and
          our Privacy Policy. If you do not agree, do not use the extension.
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
          Subscriptions and Payments
        </h2>
        <div className="space-y-3">
          <p>
            Paid features are offered through subscription or one-time purchase
            plans.
          </p>
          <p>
            Payments are processed by Paddle. Paddle is the merchant of record
            for transactions made through our checkout. By completing a
            purchase, you agree to Paddle&apos;s terms and privacy policy.
          </p>
          <p>
            Subscriptions renew automatically until canceled. You can manage or
            cancel your subscription using the Paddle customer portal or by
            contacting us.
          </p>
          <p>
            Refunds, chargebacks, and billing disputes are handled in accordance
            with Paddle&apos;s policies.
          </p>
        </div>
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
        <p>
          {SITE_CONFIG.name} is provided on an &quot;as is&quot; and &quot;as
          available&quot; basis without warranties of any kind. We do not
          guarantee uninterrupted or error-free service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          Limitation of Liability
        </h2>
        <p>
          To the maximum extent permitted by law, we will not be liable for any
          indirect, incidental, special, consequential, or punitive damages, or
          any loss of data, profits, or revenue.
        </p>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Contact</h2>
        <p>
          If you have any questions about these Terms, please contact us at{" "}
          {SITE_CONFIG.email}.
        </p>
        <p className="mt-4 text-sm">Last updated: [30 Jan 2026]</p>
      </section>
    </div>
  );
}
