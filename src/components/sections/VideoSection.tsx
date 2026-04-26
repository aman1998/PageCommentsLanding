import { SITE_CONFIG } from "@/config/constants";

const YOUTUBE_EMBED_URL =
  "https://www.youtube-nocookie.com/embed/M7lc1UVf-VE?rel=0";

export default function VideoSection() {
  return (
    <section id="demo" className="px-6 py-8 lg:py-12">
      <div className="container mx-auto">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
            Product demo
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 lg:text-5xl">
            See the workflow in one quick view.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            From pinned comments to exports, the review flow stays simple, fast,
            and visible right on the page.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <div className="relative overflow-hidden rounded-[36px] border border-slate-200/80 bg-white/95 p-3">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_70%)]" />

            <div className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]">
              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                </div>

                <div className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                  YouTube demo
                </div>
              </div>

              <div className="aspect-video bg-slate-950">
                <iframe
                  className="h-full w-full"
                  src={YOUTUBE_EMBED_URL}
                  title={`${SITE_CONFIG.name} demo video`}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
