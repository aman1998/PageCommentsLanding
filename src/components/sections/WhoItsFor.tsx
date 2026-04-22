import { Bug, Code, Palette } from "lucide-react";
import { Card } from "../ui/Card";
import { SITE_CONFIG } from "@/config/constants";

const roles = [
  {
    icon: Palette,
    title: "Design review",
    description:
      "Comment on layout, spacing, hierarchy, and copy without leaving the page you are reviewing.",
    color: "bg-violet-50 text-violet-700",
  },
  {
    icon: Bug,
    title: "QA passes",
    description:
      "Pin issues on localhost, staging, or production and keep each pass organized in one session.",
    color: "bg-rose-50 text-rose-700",
  },
  {
    icon: Code,
    title: "Frontend handoff",
    description:
      "Keep developer feedback tied to the UI so fixes are clearer, faster, and easier to verify.",
    color: "bg-sky-50 text-sky-700",
  },
];

export default function WhoItsFor() {
  return (
    <section id="use-cases" className="px-6 py-24">
      <div className="container mx-auto">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Use cases
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 lg:text-5xl">
            Built for teams that review work in the browser.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            {SITE_CONFIG.name} fits the moments where visual feedback is easiest
            to understand directly on the page, not in a loose thread of
            messages.
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
