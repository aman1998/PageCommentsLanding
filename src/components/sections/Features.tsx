import {
  Camera,
  History,
  Palette,
  PanelRight,
  MessageSquare,
  Layout,
  CheckCircle2,
  FileText,
  Tags,
} from "lucide-react";
import { Card } from "../ui/Card";

const features = [
  {
    icon: MessageSquare,
    title: "Anchored comments",
    description:
      "Click directly on the page to leave comments with element context, priority, tags, and status.",
  },
  {
    icon: History,
    title: "Sessions by site",
    description:
      "Keep multiple review sessions for the same origin and switch between them without losing context.",
  },
  {
    icon: PanelRight,
    title: "Sidebar workflow",
    description:
      "Review comments, jump back to pinned notes, and keep the current session organized from one sidebar.",
  },
  {
    icon: Tags,
    title: "Templates and tags",
    description:
      "Speed up repeated feedback with reusable templates while keeping notes structured with tags and priority.",
  },
  {
    icon: Palette,
    title: "Accent palettes",
    description:
      "Adjust the visual style of the extension UI with palette presets that match your preferred workflow.",
  },
  {
    icon: Layout,
    title: "Viewport presets",
    description:
      "Switch between device and viewport presets to leave feedback in the exact context you are reviewing.",
  },
  {
    icon: Camera,
    title: "Screenshot capture",
    description:
      "Capture a focused area on the page and attach it to a comment when visual proof matters.",
  },
  {
    icon: FileText,
    title: "PDF Export",
    description:
      "Generate a clean report with comments, screenshots, and review metadata that is easy to share outside the browser.",
  },
  {
    icon: CheckCircle2,
    title: "Free and Pro limits",
    description:
      "Start with the free plan, then unlock higher limits, more templates, palettes, and device presets with Pro.",
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
              Everything the extension handles during a review.
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
              The workflow stays inside the browser: pin feedback, move through
              sessions, capture screenshots, and export structured reports when
              you need to share the result.
            </p>

            <div className="mt-8 rounded-[28px] border border-slate-200/80 bg-white/80 p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">
                Local-first by default
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Product documentation describes browser storage and IndexedDB as
                the main data layer, so the landing keeps that expectation clear.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature, index) => (
              <Card key={index} className="h-full">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
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
