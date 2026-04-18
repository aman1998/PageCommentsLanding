"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionProps {
  items: { question: string; answer: string }[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="rounded-3xl border border-slate-200/80 bg-white/90 px-6 shadow-[0_18px_48px_-36px_rgba(15,23,42,0.22)] backdrop-blur"
        >
          <button
            className="flex w-full items-center justify-between gap-6 py-5 text-left text-base font-semibold tracking-tight text-slate-900 transition-colors hover:text-slate-700"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {item.question}
            <ChevronDown
              className={`h-5 w-5 flex-shrink-0 text-slate-500 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
          >
            <p className="pb-5 text-sm leading-7 text-slate-600">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
