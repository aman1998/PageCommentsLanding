import { Metadata } from "next";
import { SITE_CONFIG } from "@/config/constants";

export const metadata: Metadata = {
  title: `Refund Policy - ${SITE_CONFIG.name}`,
  description: `Refund Policy for ${SITE_CONFIG.name} purchases`,
};

export default function RefundPolicy() {
  return (
    <div className="container mx-auto py-4 sm:py-8">
      <h1 className="mb-6 text-2xl font-bold sm:text-3xl">
        Refund Policy for {SITE_CONFIG.name}
      </h1>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold sm:text-2xl">Eligibility</h2>
        <p>
          You can request a refund within 7 calendar days from the purchase date
          of your Pro unlock.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold sm:text-2xl">
          How to Request a Refund
        </h2>
        <p className="mb-3">
          To request a refund, email us at {SITE_CONFIG.email}.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Use the same email address used for the purchase when possible.
          </li>
          <li>Include your transaction or invoice ID.</li>
          <li>Briefly describe the reason for your refund request.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold sm:text-2xl">
          Review Process
        </h2>
        <p>
          We review each request manually after verifying purchase details and
          request timing.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold sm:text-2xl">
          Refund Processing
        </h2>
        <p>
          If approved, refunds are issued to the original payment method. Final
          posting time depends on your payment provider or bank.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold sm:text-2xl">
          Non-Refundable Cases
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Requests submitted more than 7 days after purchase.</li>
          <li>Requests without enough purchase details for verification.</li>
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold sm:text-2xl">Contact</h2>
        <p>For refund questions, contact us at {SITE_CONFIG.email}.</p>
        <p className="mt-4 text-sm text-slate-600">
          Last updated: April 26, 2026
        </p>
      </section>
    </div>
  );
}
