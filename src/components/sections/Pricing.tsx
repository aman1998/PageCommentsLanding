import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

const STORE_URL = "https://chromewebstore.google.com/detail/placeholder";

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "A practical starting point for personal reviews and small audits.",
    features: [
      "10 comments per page",
      "10 PDF exports per day",
      "3 saved sites with comment history",
      "1 image per comment",
      "Default template and limited palettes",
      "Limited device and viewport presets",
    ],
    cta: "Install extension",
    variant: "secondary" as const,
  },
  {
    name: "Pro",
    price: "$25",
    description: "One-time purchase for heavier review workflows and more customization.",
    features: [
      "Unlimited comments, exports, and saved sites",
      "Up to 5 images per comment",
      "All custom templates",
      "All accent palettes",
      "All device and viewport presets",
      "Local Pro unlock, no subscription wording",
    ],
    cta: "Install and unlock Pro",
    popular: true,
    variant: "primary" as const,
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
            Clear plan limits without subscription language.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            The landing now mirrors the product documentation: start free, then
            unlock Pro with a one-time payment when you need higher limits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-[32px] border p-8 shadow-[0_24px_70px_-36px_rgba(15,23,42,0.3)] ${tier.popular ? "border-slate-900 bg-slate-950 text-white" : "border-slate-200/80 bg-white/90 text-slate-950"}`}
            >
              {tier.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-900 shadow-sm">
                  Recommended
                </span>
              )}

              <div className="mb-8">
                <h3 className={`mb-2 text-xl font-semibold tracking-tight ${tier.popular ? "text-white" : "text-slate-950"}`}>
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className={`text-5xl font-semibold tracking-tight ${tier.popular ? "text-white" : "text-slate-950"}`}>
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

              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className={`flex items-start gap-3 text-sm leading-6 ${tier.popular ? "text-slate-200" : "text-slate-700"}`}
                  >
                    <Check
                      size={16}
                      className={`mt-1 flex-shrink-0 ${tier.popular ? "text-indigo-300" : "text-indigo-600"}`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                as="a"
                href={STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant={tier.variant}
                className={`w-full ${tier.popular ? "bg-white text-slate-950 hover:bg-slate-100 border-white" : ""}`}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-slate-500">
          Current product documentation describes the Pro plan as a local unlock
          stored in the browser, with no subscription copy on the product side.
        </p>
      </div>
    </section>
  );
}
