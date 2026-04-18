"use client";

import Hero from "../components/sections/Hero";
import VideoSection from "../components/sections/VideoSection";
import WhoItsFor from "../components/sections/WhoItsFor";
import Features from "../components/sections/Features";
import Pricing from "../components/sections/Pricing";
import FAQ from "@/components/sections/Faq";
import { Globe } from "lucide-react";
import { Button } from "../components/ui/Button";

const STORE_URL = "https://chromewebstore.google.com/detail/placeholder";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_48%,#ffffff_100%)] text-slate-950">
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
              SR
            </div>
            <div>
              <span className="block text-lg font-semibold tracking-tight text-slate-950">
                SiteReview
              </span>
              <span className="block text-xs uppercase tracking-[0.16em] text-slate-500">
                Chrome extension
              </span>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#use-cases" className="transition-colors hover:text-slate-950">
              Use cases
            </a>
            <a
              href="#features"
              className="transition-colors hover:text-slate-950"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="transition-colors hover:text-slate-950"
            >
              Pricing
            </a>
            <a href="#faq" className="transition-colors hover:text-slate-950">
              FAQ
            </a>
          </div>

          <Button
            as="a"
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
          >
            <Globe size={16} />
            Add to Chrome
          </Button>
        </div>
      </nav>

      <Hero />
      <VideoSection />
      <WhoItsFor />
      <Features />
      <Pricing />
      <FAQ />

      <section className="px-6 pb-24 pt-6">
        <div className="container mx-auto">
          <div className="rounded-[36px] border border-slate-200/80 bg-white/95 px-8 py-14 text-center shadow-[0_24px_70px_-46px_rgba(15,23,42,0.28)] lg:px-14">
            <div className="mx-auto max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Ready to try it
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 lg:text-5xl">
                Review the page itself, not a pile of screenshots.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Install SiteReview, start with the free plan, and keep your next
                round of design, QA, or frontend feedback in one clean flow.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  as="a"
                  href={STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                >
                  <Globe size={18} />
                  Add to Chrome
                </Button>
                <Button
                  as="a"
                  href="#pricing"
                  variant="secondary"
                  size="lg"
                >
                  Compare plans
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200/80 px-6 py-10">
        <div className="container mx-auto">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
                SR
              </div>
              <div>
                <p className="text-sm font-semibold tracking-tight text-slate-950">
                  SiteReview
                </p>
                <p className="text-sm text-slate-500">
                  Chrome extension for on-page website review.
                </p>
              </div>
            </div>

            <div className="text-sm leading-7 text-slate-500 md:text-right">
              <p>Built for design review, QA passes, and frontend handoff.</p>
              <p>© 2026 SiteReview.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
