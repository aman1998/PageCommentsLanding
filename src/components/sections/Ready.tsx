"use client";
import { Globe } from "lucide-react";
import { Button } from "../ui/Button";
import { SITE_CONFIG } from "@/config/constants";

const Ready = () => {
  return (
    <section className="px-6 pb-24 pt-0">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-[36px] border border-slate-200/80 bg-slate-950 px-8 py-12 text-center text-white shadow-2xl shadow-slate-950/10 lg:px-14">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.22),transparent_70%)]" />
          <div className="pointer-events-none absolute -right-12 bottom-0 h-48 w-48 rounded-full bg-sky-300/25 blur-3xl" />
          <div className="mx-auto max-w-3xl">
            <h2 className="relative text-4xl font-semibold tracking-[-0.04em] text-white lg:text-5xl">
              Keep your next review on the page.
            </h2>
            <p className="relative mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Install {SITE_CONFIG.name} and turn scattered feedback into clear,
              actionable notes.
            </p>
            <div className="relative mt-10 flex justify-center">
              <Button
                onClick={() => window.open(SITE_CONFIG.appUrl, "_blank")}
                size="lg"
                className="h-12 rounded-full px-6 text-base shadow-lg shadow-emerald-500/30"
              >
                <Globe size={18} />
                Add to Chrome
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ready;
