import { Camera, History, MessageSquare, FileText } from "lucide-react";
import { Card } from "../ui/Card";
import { SITE_CONFIG } from "@/config/constants";

const features = [
  {
    icon: MessageSquare,
    title: "Comments pinned to the page",
    description:
      "Click any spot on a website and leave feedback in context, without sending people a separate screenshot or doc.",
  },
  {
    icon: History,
    title: "Site and page history",
    description:
      "Switch between all-site feedback and page-specific notes so review rounds stay grouped where they belong.",
  },
  {
    icon: Camera,
    title: "Screenshots attached to comments",
    description:
      "Attach a screen capture to a comment when spacing, layout, copy, or visual bugs need proof.",
  },
  {
    icon: FileText,
    title: "PDF reports for handoff",
    description:
      "Export comments, screenshots, labels, and page details into a clean report for clients or teammates.",
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
              Everything you need to review a website in place.
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
              {SITE_CONFIG.name} turns the current page into a shared feedback
              layer, so comments, screenshots, priorities, and exports stay in
              one browser workflow.
            </p>

            <div className="mt-8 rounded-[28px] border border-slate-200/80 bg-white/95 p-6">
              <p className="text-sm font-semibold text-slate-900">
                Works where teams actually review
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Review localhost, staging, internal tools, and live websites as
                long as the page is open in Chrome.
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
