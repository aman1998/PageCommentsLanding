import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for individuals and small site audits.",
    features: [
      "Unlimited comments on local domains",
      "Up to 5 active threads on live URLs",
      "Desktop & Mobile viewport presets",
      "Basic thread filtering",
      "Community support",
    ],
    cta: "Start for free",
    variant: "secondary",
  },
  {
    name: "Pro",
    price: "$12",
    period: "/mo",
    description: "For professional teams and frequent QA cycles.",
    features: [
      "Unlimited threads on any URL",
      "Full PDF report exporting",
      "Priority thread sorting & search",
      "Custom viewport presets",
      "Team collaboration (Coming Soon)",
      "Priority email support",
    ],
    cta: "Go Pro",
    popular: true,
    variant: "primary",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing.
          </h2>
          <p className="text-gray-600">
            Start pinning for free and upgrade as your team grows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-8 rounded-3xl bg-white border-2 ${tier.popular ? "border-indigo-600 shadow-xl" : "border-transparent shadow-sm"}`}
            >
              {tier.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </span>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-gray-900">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-gray-500">{tier.period}</span>
                  )}
                </div>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="flex items-center gap-3 text-sm text-gray-700"
                  >
                    <Check
                      size={16}
                      className="text-indigo-600 flex-shrink-0"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant={tier.variant} className="w-full">
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
