import React from "react";
import {
  MessageSquare,
  Layout,
  CheckCircle,
  Filter,
  FileText,
  MousePointer2,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Visual Pin-drop",
    description:
      "Click any element on the page to leave a comment. Comments stay anchored to the HTML element even on reload.",
  },
  {
    icon: Layout,
    title: "Viewport Presets",
    description:
      "Switch between iPhone, Tablet, and Desktop presets to check responsiveness and leave mobile-specific feedback.",
  },
  {
    icon: CheckCircle,
    title: "Resolve Threads",
    description:
      "Keep the sidebar tidy. Mark bugs as resolved once they are fixed. Archive or delete old conversations.",
  },
  {
    icon: Filter,
    title: "Sort & Filter",
    description:
      "Quickly find comments by author, date, or resolution status. Search through threads with instant results.",
  },
  {
    icon: FileText,
    title: "PDF Export",
    description:
      "Generate a professional PDF summary of all open comments, including screenshots and metadata for documentation.",
  },
  {
    icon: MousePointer2,
    title: "No-Code Required",
    description:
      "Works on any website. No scripts to install, no libraries to import. Just install the extension and start pinning.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-x-12 gap-y-16">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 sticky top-24">
              Powerful tools for
              <br />
              modern workflows.
            </h2>
            <p className="text-gray-600 text-lg">
              Everything you need to ship faster with zero visual regressions.
              Designed to fit into your existing team dynamic.
            </p>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-x-8 gap-y-12">
            {features.map((feature, index) => (
              <div key={index}>
                <div className="h-10 w-10 text-indigo-600 mb-4">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
