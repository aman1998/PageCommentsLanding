"use client";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  FREE_MAX_COMMENTS_PER_PAGE,
  FREE_MAX_HISTORIES,
  LIFETIME_NAME,
  PRO_LIFETIME_PRICE,
  PRO_MAX_COMMENTS_PER_PAGE,
  PRO_MAX_HISTORIES,
  SITE_CONFIG,
} from "@/config/constants";

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "For quick review rounds.",
    features: [
      `${FREE_MAX_COMMENTS_PER_PAGE} comments per site`,
      `${FREE_MAX_HISTORIES} saved sites`,
      "PDF export with watermark",
    ],
    cta: "Start free",
    variant: "secondary",
  },
  {
    name: LIFETIME_NAME,
    price: `$${PRO_LIFETIME_PRICE}`,
    description: "For client work and deeper QA.",
    features: [
      `${PRO_MAX_COMMENTS_PER_PAGE} comments per site`,
      `${PRO_MAX_HISTORIES} saved sites`,
      "Clean PDF export",
      "All templates and presets",
    ],
    cta: "Unlock PRO",
    popular: true,
    variant: "default",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-12 lg:py-20">
      <div className="container mx-auto">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
            Pricing
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 lg:text-5xl">
            Start free. Upgrade once.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            No subscription. One browser unlock when your reviews grow.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-[32px] border p-8 shadow-sm ${tier.popular ? "border-slate-950 bg-slate-950 text-white shadow-slate-950/10" : "border-slate-200/80 bg-white/90 text-slate-950 shadow-slate-200/20"}`}
            >
              {tier.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full border border-sky-200 bg-sky-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">
                  Best for client work
                </span>
              )}

              <div className="mb-8">
                <h3
                  className={`mb-2 text-xl font-semibold tracking-tight ${tier.popular ? "text-white" : "text-slate-950"}`}
                >
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-5xl font-semibold tracking-tight ${tier.popular ? "text-white" : "text-slate-950"}`}
                  >
                    {tier.price}
                  </span>
                  {tier.name === LIFETIME_NAME && (
                    <span className="text-sm font-medium text-slate-400">
                      one-time
                    </span>
                  )}
                </div>
                <p
                  className={`mt-4 text-sm leading-7 ${tier.popular ? "text-slate-300" : "text-slate-600"}`}
                >
                  {tier.description}
                </p>
              </div>

              <ul className="mb-10 flex-grow space-y-4">
                {tier.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className={`flex items-start gap-3 text-sm leading-6 ${tier.popular ? "text-slate-200" : "text-slate-700"}`}
                  >
                    <Check
                      size={16}
                      className={`mt-1 flex-shrink-0 ${tier.popular ? "text-emerald-300" : "text-sky-600"}`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => {
                  window.open(SITE_CONFIG.appUrl, "_blank");
                }}
                variant={tier.variant as "secondary" | "default"}
                className="h-11 w-full rounded-full"
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-slate-500">
          No subscription. One browser unlock.
        </p>
      </div>
    </section>
  );
}
