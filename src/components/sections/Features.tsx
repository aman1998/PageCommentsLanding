import {
  Camera,
  History,
  MessageSquare,
  FileText,
} from "lucide-react";
import { Card } from "../ui/Card";

const features = [
  {
    icon: MessageSquare,
    title: "Anchored comments",
    description:
      "Leave feedback exactly where it matters so everyone sees the issue in the right context.",
  },
  {
    icon: History,
    title: "Sessions by page or site",
    description:
      "Keep separate review passes organized without losing history or mixing feedback across rounds.",
  },
  {
    icon: Camera,
    title: "Screenshots when words are not enough",
    description:
      "Capture a focused area and attach proof to a comment when visual detail matters.",
  },
  {
    icon: FileText,
    title: "Clean PDF export",
    description:
      "Turn a review session into a polished report with comments, images, and key metadata.",
  },
];

export default function Features() {
  return (
    <section id="features" className="px-6 py-24">
      <div className="container mx-auto">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Features
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 lg:text-5xl">
              The essentials for fast review cycles.
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
              Instead of spreading review work across browser tabs, screenshots,
              docs, and chat, SiteReview keeps the workflow in one place.
            </p>

            <div className="mt-8 rounded-[28px] border border-slate-200/80 bg-white/95 p-6">
              <p className="text-sm font-semibold text-slate-900">
                Works where teams actually review
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Use it on localhost, staging, internal tools, and live websites
                as long as the page is open in Chrome.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature, index) => (
              <Card key={index} className="h-full">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                  <feature.icon size={32} />
                </div>
                <h3 className="mb-3 text-xl font-semibold tracking-tight text-slate-950">
                  {feature.title}
                </h3>
                <p className="text-sm leading-7 text-slate-600">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
