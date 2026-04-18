import {
  ArrowRight,
  FileText,
  Globe,
  MessageSquare,
  MonitorSmartphone,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const STORE_URL = "https://chromewebstore.google.com/detail/placeholder";
const highlights = [
  "Anchored comments on live pages",
  "Review sessions grouped by site",
  "Local-first storage with PDF export",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-28 lg:pb-24 lg:pt-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[680px] bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.14),transparent_60%)]" />

      <div className="container mx-auto">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-2xl">
              <Badge className="mb-6">Chrome extension for page review</Badge>
              <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.05em] text-slate-950 lg:text-7xl">
                Review websites with feedback pinned to the page.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 lg:text-xl">
                SiteReview helps designers, QA, and frontend teams leave
                anchored comments, manage review sessions by site, capture
                screenshots, and export polished PDF reports from the browser.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
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
                <Button as="a" href="#features" variant="secondary" size="lg">
                  Explore features
                  <ArrowRight size={18} />
                </Button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Free plan
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    10 comments per page and 10 PDF exports per day.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Pro unlock
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    One-time purchase with expanded limits and customization.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Works where you do
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Useful on localhost, staging, internal tools, and live
                    pages.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-10 top-12 hidden h-32 w-32 rounded-full bg-indigo-200/30 blur-3xl lg:block" />
              <div className="absolute -bottom-8 right-6 hidden h-40 w-40 rounded-full bg-sky-200/30 blur-3xl lg:block" />

              <div className="relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-white/90 p-3 shadow-[0_30px_90px_-45px_rgba(15,23,42,0.45)] backdrop-blur">
                <div className="rounded-[28px] border border-slate-200 bg-slate-50">
                  <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                    </div>
                    <div className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-500">
                      staging.example.com
                    </div>
                  </div>

                  <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_280px]">
                    <div className="relative min-h-[420px] border-b border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-6 lg:border-b-0 lg:border-r">
                      <div className="space-y-4">
                        <div className="h-10 w-32 rounded-2xl bg-slate-900" />
                        <div className="space-y-2">
                          <div className="h-4 w-full rounded-full bg-slate-200" />
                          <div className="h-4 w-11/12 rounded-full bg-slate-200" />
                          <div className="h-4 w-8/12 rounded-full bg-slate-200" />
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                            <div className="h-24 rounded-2xl bg-indigo-50" />
                          </div>
                          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                            <div className="h-24 rounded-2xl bg-sky-50" />
                          </div>
                        </div>
                      </div>

                      <div className="absolute left-8 top-32 rounded-2xl border border-indigo-200 bg-white px-4 py-3 shadow-lg">
                        <div className="flex items-start gap-3">
                          <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                            <MessageSquare size={16} />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-slate-900">
                              Align this CTA with the card grid.
                            </p>
                            <p className="mt-1 text-xs text-slate-500">
                              Open comment pinned to the page
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="absolute bottom-8 right-8 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm">
                        Resolved in review session 03
                      </div>
                    </div>

                    <div className="bg-white p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                            Sidebar
                          </p>
                          <p className="mt-1 text-lg font-semibold tracking-tight text-slate-900">
                            Landing page QA
                          </p>
                        </div>
                        <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                          4 open
                        </div>
                      </div>

                      <div className="mt-5 space-y-3">
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                          <div className="flex items-start gap-3">
                            <div className="rounded-full bg-indigo-100 p-2 text-indigo-600">
                              <MonitorSmartphone size={16} />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-slate-900">
                                Viewport preset
                              </p>
                              <p className="mt-1 text-xs leading-5 text-slate-500">
                                iPhone 15 Pro selected for mobile review.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                          <div className="flex items-start gap-3">
                            <div className="rounded-full bg-slate-200 p-2 text-slate-700">
                              <FileText size={16} />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-slate-900">
                                PDF export ready
                              </p>
                              <p className="mt-1 text-xs leading-5 text-slate-500">
                                Includes comment list, screenshots, and metadata.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                            Local data
                          </p>
                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            Comments, templates, and review sessions stay in your
                            browser storage by default.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
