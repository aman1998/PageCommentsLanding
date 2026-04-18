import React from "react";
import { UserCheck, Code, Palette, Bug } from "lucide-react";
import { Card } from "../ui/Card";

const roles = [
  {
    icon: Bug,
    title: "QA Engineers & Testers",
    description:
      "Create bug reports that stick. Pin issues directly on live staging URLs with exact viewport context. No more blurry screenshots.",
    color: "bg-red-50 text-red-600",
  },
  {
    icon: Palette,
    title: "Product Designers",
    description:
      "Leave visual feedback on layout, spacing, and typography without leaving the browser. Keep your dev handoff clean.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Code,
    title: "Frontend Developers",
    description:
      "Clarify requirements and track changes. View exact viewport dimensions and browser data tied to every comment.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: UserCheck,
    title: "Project Managers",
    description:
      "Review progress and sign off on features visually. Export PDF reports for stakeholders in one click.",
    color: "bg-green-50 text-green-600",
  },
];

export default function WhoItsFor() {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Built for high-performance teams.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stop juggling spreadsheets and Slack threads. html-comments brings
            everyone into the browser for faster sign-offs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, index) => (
            <Card
              key={index}
              className="flex flex-col h-full border-transparent hover:border-indigo-100"
            >
              <div
                className={`h-12 w-12 rounded-lg flex items-center justify-center mb-6 ${role.color}`}
              >
                <role.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {role.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                {role.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
