import { Bug, Code, Palette, UserCheck } from "lucide-react";
import { Card } from "../ui/Card";

const roles = [
  {
    icon: Bug,
    title: "QA Engineers & Testers",
    description:
      "Pin bugs directly on localhost, staging, or live pages and review them with viewport context, screenshots, and clear status tracking.",
    color: "bg-red-50 text-red-600",
  },
  {
    icon: Palette,
    title: "Product Designers",
    description:
      "Leave visual feedback on layout, spacing, copy, and hierarchy without leaving the page you are reviewing.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Code,
    title: "Frontend Developers",
    description:
      "Work through feedback in one sidebar, switch between device presets, and resolve comments as updates land.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: UserCheck,
    title: "Project Managers",
    description:
      "Organize review sessions by site, track progress across comments, and export clean PDF summaries for stakeholders.",
    color: "bg-green-50 text-green-600",
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
            Made for review cycles that happen in the browser.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Keep design feedback, QA findings, and sign-off notes attached to
            the page instead of scattering them across screenshots and chat
            threads.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, index) => (
            <Card
              key={index}
              className="flex h-full flex-col"
            >
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
