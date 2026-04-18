import { Accordion } from "@/components/ui/Accordion";

const faqItems = [
  {
    question: "Where is my review data stored?",
    answer:
      "Project documentation describes local browser storage and IndexedDB as the primary data layer. That means comments, sessions, templates, and related review data stay in the browser by default.",
  },
  {
    question: "Can I share feedback with someone who does not use the extension?",
    answer:
      "Yes. You can export a PDF report with comments, screenshots, and metadata when you need to share review output outside the extension.",
  },
  {
    question: "Does it work on localhost, staging, or protected pages?",
    answer:
      "If the page is open in Chrome and the extension has access to it, the workflow can be used on localhost, staging environments, internal tools, and live sites.",
  },
  {
    question: "What is included in Free vs Pro?",
    answer:
      "Free includes 10 comments per page, 10 PDF exports per day, 3 saved sites, 1 image per comment, the default template, and limited palettes and viewport presets. Pro removes those core limits and unlocks all templates, palettes, and presets.",
  },
  {
    question: "What happens on highly dynamic pages or SPAs?",
    answer:
      "The extension is designed for on-page review, but very large DOM changes can still affect how precisely older comments map back to the page. For active product review cycles, it works best when the reviewed layout remains reasonably stable between passes.",
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
          Frequently Asked Questions
        </h2>
        <Accordion items={faqItems} />
      </div>
    </section>
  );
}
