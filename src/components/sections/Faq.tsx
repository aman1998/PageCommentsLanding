import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";

const faqItems = [
  {
    question: "Where is my review data stored?",
    answer:
      "By default, review data stays in your browser using local storage and IndexedDB.",
  },
  {
    question: "Can I share feedback with people without the extension?",
    answer:
      "Yes. Export a PDF report with comments, screenshots, labels, and page details.",
  },
  {
    question: "Does it work on protected or local pages?",
    answer:
      "Yes, as long as the page is open in Chrome and the extension has access to it.",
  },
  {
    question: "Do I need a credit card to start?",
    answer:
      "No. The free plan works without a card. If you need higher limits later, you can upgrade to PRO with a one-time purchase.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="border-t border-slate-200/80 bg-gradient-to-b from-sky-50/30 to-white px-6 py-12 lg:py-20"
    >
      <div className="container mx-auto max-w-3xl">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
          FAQ
        </p>
        <h2 className="mb-12 mt-4 text-center text-4xl font-semibold tracking-[-0.04em] text-slate-950 lg:text-5xl">
          Before you install
        </h2>
        <div className="mx-auto max-w-3xl border border-slate-200/80 rounded-3xl p-4">
          <Accordion type="multiple">
            {faqItems.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
