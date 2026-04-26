import {
  ArrowRight,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SITE_CONFIG } from "@/config/constants";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/Carousel";

const highlights = [
  "Review on localhost, staging, and live URLs",
  "Add comments directly on the page",
  "Export a clean PDF when it is time to share",
];

const heroScreenshots = [
  {
    src: "/screen2.png",
    alt: "Page Comments browser extension sidebar with pinned feedback",
  },
] as const;

export default function Hero() {
  const router = useRouter();
  const cards = [
    {
      title: "In one flow",
      description:
        "Organize sessions, switch viewports, and keep the review moving from one sidebar.",
    },
    {
      title: "Build feedback into the page",
      description:
        "Add comments directly on the page so it is easier to understand and fix.",
    },
    {
      title: "Ready to share",
      description:
        "Export comments, screenshots, and metadata into a clean PDF report.",
    },
  ];
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-4 lg:pb-24 lg:pt-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[680px] bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.16),transparent_60%)]" />

      <div className="container mx-auto">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="max-w-2xl">
              <Badge className="mb-6">
                Chrome extension for website review
              </Badge>
              <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.05em] text-slate-950 lg:text-7xl">
                Keep website feedback on the page.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 lg:text-xl">
                {SITE_CONFIG.name} gives designers, QA, and frontend teams one
                clear place to review a page, leave comments in context, and
                share the result in PDF.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button
                  onClick={() => window.open(SITE_CONFIG.appUrl, "_blank")}
                  size="lg"
                >
                  <Globe size={18} />
                  Add to Chrome
                </Button>
                <Button
                  onClick={() => router.push("/#pricing")}
                  variant="secondary"
                  size="lg"
                >
                  See the essentials
                  <ArrowRight size={18} />
                </Button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {cards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-3xl border border-slate-200/80 bg-white/95 p-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      {card.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-10 top-12 hidden h-40 w-40 rounded-full bg-emerald-200/50 blur-3xl lg:block" />
              <div className="absolute -bottom-8 right-6 hidden h-48 w-48 rounded-full bg-slate-200/70 blur-3xl lg:block" />

              <div className="relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-white/95 p-3 shadow-2xl shadow-slate-950/10 backdrop-blur">
                <Carousel
                  opts={{ align: "start", loop: heroScreenshots.length > 1 }}
                  className="overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50/90"
                >
                  <CarouselContent className="-ml-0">
                    {heroScreenshots.map((screenshot) => (
                      <CarouselItem key={screenshot.src} className="pl-0">
                        <div className="relative aspect-[4/3] min-h-[360px] overflow-hidden rounded-[28px] bg-slate-100 sm:min-h-[460px]">
                          <Image
                            src={screenshot.src}
                            alt={screenshot.alt}
                            fill
                            priority
                            sizes="(min-width: 1024px) 46vw, 100vw"
                            className="object-contain"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
                <div className="pointer-events-none absolute inset-x-10 bottom-4 h-16 rounded-full bg-white/35 blur-2xl" />
                <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-1.5">
                  {heroScreenshots.map((screenshot) => (
                    <span
                      key={screenshot.src}
                      className="h-1.5 w-6 rounded-full bg-slate-900/30"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
