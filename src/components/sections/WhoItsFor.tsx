import { Bug, Code, Palette } from "lucide-react";
import { Card } from "../ui/Card";
import { SITE_CONFIG } from "@/config/constants";

const roles = [
  {
    icon: Palette,
    title: "Design and content reviews",
    description:
      "Mark spacing, hierarchy, copy, and visual polish directly on the live page instead of rewriting feedback in chat.",
    color: "bg-violet-50 text-violet-700",
  },
  {
    icon: Bug,
    title: "QA and bug reports",
    description:
      "Pin issues on localhost, staging, or production with screenshots, labels, and the page context needed to reproduce them.",
    color: "bg-rose-50 text-rose-700",
  },
  {
    icon: Code,
    title: "Client and team handoff",
    description:
      "Collect comments into a clean PDF so founders, clients, designers, and developers can agree on what needs to change.",
    color: "bg-sky-50 text-sky-700",
  },
];

export default function WhoItsFor() {
  return (
    <section id="use-cases" className="px-6 2">
      <div className="container mx-auto">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Use cases
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 lg:text-5xl">
            Built for fast website review cycles.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Use {SITE_CONFIG.name} whenever visual feedback needs context:
            design QA, copy review, frontend fixes, client approvals, or bug
            reports.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {roles.map((role, index) => (
            <Card key={index} className="flex h-full flex-col">
              <div
                className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl ${role.color}`}
              >
                <role.icon size={24} />
              </div>
              <h3 className="mb-3 text-xl font-semibold tracking-tight text-slate-950">
                {role.title}
              </h3>
              <p className="flex-grow text-sm leading-7 text-slate-600">
                {role.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
