"use client";

import Hero from "../components/sections/Hero";
import WhoItsFor from "../components/sections/WhoItsFor";
import Features from "../components/sections/Features";
import Pricing from "../components/sections/Pricing";
import FAQ from "@/components/sections/Faq";
import { Globe } from "lucide-react";
import { Button } from "../components/ui/Button";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
              h/c
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">
              html-comments
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a
              href="#features"
              className="hover:text-indigo-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="hover:text-indigo-600 transition-colors"
            >
              Pricing
            </a>
            <a href="#faq" className="hover:text-indigo-600 transition-colors">
              FAQ
            </a>
          </div>

          <div>
            <a
              href="https://chromewebstore.google.com/detail/placeholder"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" className="gap-2">
                <Globe size={16} />
                Add to Chrome
              </Button>
            </a>
          </div>
        </div>
      </nav>

      <Hero />
      <WhoItsFor />
      <Features />

      {/* Social Proof Placeholder */}
      <section className="py-12 border-y border-gray-100 bg-gray-50/30">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-8">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale">
            {/* Use your intuition for clean logos - standard SVG placeholders work well */}
            <div className="text-2xl font-bold">Acme</div>
            <div className="text-2xl font-bold">Globex</div>
            <div className="text-2xl font-bold">Soylent</div>
            <div className="text-2xl font-bold">Initech</div>
            <div className="text-2xl font-bold">Hooli</div>
          </div>
        </div>
      </section>

      <Pricing />
      <FAQ />

      {/* Final CTA */}
      <section className="py-24 bg-indigo-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1)_0%,transparent_100%)] pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to speed up your reviews?
          </h2>
          <p className="text-indigo-100 text-xl mb-10 max-w-2xl mx-auto">
            Join thousands of designers and QA testers who have reclaimed their
            productivity. Free to start, no credit card required.
          </p>
          <a
            href="https://chromewebstore.google.com/detail/placeholder"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-white text-indigo-900 hover:bg-indigo-50 border-white gap-2"
            >
              <Globe size={20} />
              Install Extension Now
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 bg-indigo-600 rounded flex items-center justify-center text-white text-xs font-bold font-mono">
                h/c
              </div>
              <span className="font-bold text-gray-900 uppercase tracking-tighter">
                html-comments
              </span>
            </div>

            <div className="flex gap-8 text-sm text-gray-500">
              <a href="#" className="hover:text-indigo-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-indigo-600 transition-colors">
                Terms of Service
              </a>
              <a
                href="mailto:support@example.com"
                className="hover:text-indigo-600 transition-colors"
              >
                Contact
              </a>
            </div>

            <div className="text-sm text-gray-400">
              © 2026 html-comments. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
