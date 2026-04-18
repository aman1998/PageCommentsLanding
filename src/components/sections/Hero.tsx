import React from "react";
import { Globe, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const STORE_URL = "https://chromewebstore.google.com/detail/placeholder";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_50%_0%,rgba(79,70,229,0.05)_0%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 text-center">
        <Badge className="mb-4">Now available for Chrome</Badge>
        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600">
          Visual Feedback,
          <br />
          Directly on the Page.
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-10 leading-relaxed">
          The ultimate browser extension for designers, developers, and QA
          testers. Pin comments to any element, manage threads, and sync
          viewport presets effortlessly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={STORE_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gap-2">
              <Globe size={20} />
              Add to Chrome — Free
            </Button>
          </a>
          <a href="#features">
            <Button variant="secondary" size="lg" className="gap-2">
              <Play size={20} className="fill-current" />
              See how it works
            </Button>
          </a>
        </div>

        <div className="mt-16 relative mx-auto max-w-5xl rounded-2xl border border-gray-200 bg-white p-2 shadow-2xl">
          <div className="overflow-hidden rounded-xl border border-gray-100 bg-gray-50 aspect-video flex items-center justify-center text-gray-400">
            {/* Placeholder for Product Screenshot */}
            <div className="text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                <Globe size={24} />
              </div>
              <p className="font-medium">Product UI Preview</p>
              <p className="text-sm text-gray-400 max-w-xs px-4 mt-2">
                Replace this with a high-res screenshot of the extension sidebar
                and pin overlays.
              </p>
            </div>
          </div>

          {/* Subtle floating elements to mimic comments */}
          <div className="absolute -top-6 -left-6 hidden lg:block bg-white p-4 rounded-xl shadow-lg border border-gray-100 float-bounce transition-all">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-sm font-medium">
                &quot;Center this button&quot;
              </span>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 hidden lg:block bg-white p-4 rounded-xl shadow-lg border border-gray-100 float-pulse">
            <div className="flex items-center gap-3 text-green-600">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-sm font-medium italic">Fixed in v2.4</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes floatBounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes floatPulse {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(0.98);
          }
        }
        .float-bounce {
          animation: floatBounce 3s ease-in-out infinite;
        }
        .float-pulse {
          animation: floatPulse 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
