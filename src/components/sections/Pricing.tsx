"use client";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  FREE_MAX_COMMENTS_PER_PAGE,
  FREE_MAX_HISTORIES,
  FREE_MAX_IMAGES_PER_COMMENT,
  LIFETIME_NAME,
  PRO_LIFETIME_PRICE,
  PRO_MAX_COMMENTS_PER_PAGE,
  PRO_MAX_HISTORIES,
  PRO_MAX_IMAGES_PER_COMMENT,
  SITE_CONFIG,
} from "@/config/constants";

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "A simple starting point for smaller review cycles.",
    features: [
      `${FREE_MAX_COMMENTS_PER_PAGE} comments per one website`,
      `${FREE_MAX_HISTORIES} active websites`,
      `${FREE_MAX_IMAGES_PER_COMMENT} images per comment`,
      "Limited templates, palettes, and presets",
    ],
    cta: "Start free",
    variant: "secondary",
  },
  {
    name: LIFETIME_NAME,
    price: `$${PRO_LIFETIME_PRICE}`,
    description: "A one-time unlock for heavier team workflows.",
    features: [
      `${PRO_MAX_COMMENTS_PER_PAGE} comments per one website`,
      `${PRO_MAX_HISTORIES} active websites`,
      `${PRO_MAX_IMAGES_PER_COMMENT} images per comment`,
      "All templates, palettes, and presets",
    ],
    cta: "Install and unlock Pro",
    popular: true,
    variant: "default",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-24">
      <div className="container mx-auto">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Pricing
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 lg:text-5xl">
            Start free and unlock more only if you need it.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            The product keeps pricing simple: use the free plan for lighter
            reviews, then move to Pro with a one-time purchase when your
            workflow grows.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-[32px] border p-8 ${tier.popular ? "border-slate-900 bg-slate-950 text-white" : "border-slate-200/80 bg-white/95 text-slate-950"}`}
            >
              {tier.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-900">
                  Recommended
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
                  {tier.name === "Pro" && (
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
                      className={`mt-1 flex-shrink-0 ${tier.popular ? "text-emerald-300" : "text-emerald-600"}`}
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
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-slate-500">
          Pro is described in the product as a local unlock stored in the
          browser, not a recurring subscription.
        </p>
      </div>
    </section>
  );
}
