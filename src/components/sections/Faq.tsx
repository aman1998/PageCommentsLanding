import React from "react";
import { Accordion } from "../ui/Accordion";

const faqItems = [
  {
    question: "Do my clients need to install the extension to see comments?",
    answer:
      "No! You can export a full PDF report with screenshots and thread history to share with anyone. If you want them to reply in real-time, they will need the extension installed on their browser.",
  },
  {
    question: "How does it handle dynamic elements or single-page apps (SPAs)?",
    answer:
      "html-comments uses a unique element-path hashing system. Even if your React or Vue app re-renders, the comment stays anchored to the correct component as long as the HTML structure is somewhat stable.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. Comments are stored locally by default and only synced if you choose to enable cloud backup (Pro feature). We never 'scrape' your site or read your code.",
  },
  {
    question: "Does it work on password-protected or localhost sites?",
    answer:
      "Yes! Since it's a browser extension, it has access to whatever your browser is viewing. This makes it perfect for local development, staging servers, and internal dashboards.",
  },
  {
    question: "Can I customize the viewport presets?",
    answer:
      "Pro users can add custom resolutions (e.g., 1440x900 or specific Android devices) to their preset list for more granular testing.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <Accordion items={faqItems} />
      </div>
    </section>
  );
}
