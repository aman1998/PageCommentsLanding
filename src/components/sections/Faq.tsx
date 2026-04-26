import { Accordion } from "@/components/ui/Accordion";
import { LIFETIME_NAME } from "@/config/constants";

const faqItems = [
  {
    question: "Where is my review data stored?",
    answer:
      "Project documentation describes local browser storage and IndexedDB as the primary data layer, so comments, sessions, templates, and related review data stay in the browser by default.",
  },
  {
    question: "Can I share feedback with people who do not use the extension?",
    answer:
      "Yes. You can export a PDF report with comments, screenshots, and metadata when you need to share review output outside the extension.",
  },
  {
    question: "Does it work on localhost, staging, or protected pages?",
    answer:
      "If the page is open in Chrome and the extension has access to it, the workflow can be used on localhost, staging environments, internal tools, and live sites.",
  },
  {
    question: `What is included in Free vs ${LIFETIME_NAME}?`,
    answer: `Free covers lighter reviews with limits on comments, exports, saved sites, and images. ${LIFETIME_NAME} unlocks higher limits plus the full set of templates, palettes, and viewport presets with a one-time purchase.`,
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="border-t border-slate-200/80 px-6 py-24">
      <div className="container mx-auto max-w-3xl">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
          FAQ
        </p>
        <h2 className="mb-12 mt-4 text-center text-4xl font-semibold tracking-[-0.04em] text-slate-950 lg:text-5xl">
          Questions before you install
        </h2>
        <Accordion items={faqItems} />
      </div>
    </section>
  );
}
