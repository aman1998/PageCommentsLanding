"use client";
import { Globe } from "lucide-react";
import { Button } from "../ui/Button";
import { SITE_CONFIG } from "@/config/constants";
import { useRouter } from "next/navigation";

const Ready = () => {
  const router = useRouter();
  return (
    <section className="px-6 pb-24 pt-6">
      <div className="container mx-auto">
        <div className="rounded-[36px] border border-slate-200/80 bg-white/95 px-8 py-14 text-center shadow-[0_24px_70px_-46px_rgba(15,23,42,0.28)] lg:px-14">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Ready to try it
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 lg:text-5xl">
              Review the page
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Install {SITE_CONFIG.name}, start with the free plan, and keep
              your next round of design, QA, or frontend feedback in one clean
              flow.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button onClick={() => window.open(SITE_CONFIG.appUrl, "_blank")}>
                <Globe size={18} />
                Add to Chrome
              </Button>
              <Button
                onClick={() => router.push("/#pricing")}
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
  );
};

export default Ready;
