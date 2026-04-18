import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionProps {
  items: { question: string; answer: string }[];
}
export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="border-b border-gray-100 last:border-0 pb-4"
        >
          <button
            className="flex w-full items-center justify-between py-4 text-left font-semibold text-gray-900 hover:text-indigo-600 transition-colors"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {item.question}
            <ChevronDown
              className={`h-5 w-5 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
          >
            <p className="pb-4 text-gray-600 leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
