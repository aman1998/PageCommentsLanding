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
  "Pin feedback directly on the page",
  "Review on localhost, staging, and live URLs",
  "Export a clean PDF when it is time to share",
];

export default function Hero() {
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
                SiteReview gives designers, QA, and frontend teams one clear
                place to review a page, leave comments in context, and share the
                result without bouncing between screenshots and chat threads.
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
                  See the essentials
                  <ArrowRight size={18} />
                </Button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-slate-200/80 bg-white/95 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    In context
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Click any part of the page and leave feedback where the
                    issue actually happens.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200/80 bg-white/95 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    In one flow
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Organize sessions, switch viewports, and keep the review
                    moving from one sidebar.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200/80 bg-white/95 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Ready to share
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Export comments, screenshots, and metadata into a clean PDF
                    report.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-10 top-12 hidden h-32 w-32 rounded-full bg-slate-200/40 blur-3xl lg:block" />
              <div className="absolute -bottom-8 right-6 hidden h-40 w-40 rounded-full bg-slate-100 blur-3xl lg:block" />

              <div className="relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-white/95 p-3 shadow-[0_26px_80px_-48px_rgba(15,23,42,0.35)] backdrop-blur">
                <div className="rounded-[28px] border border-slate-200 bg-slate-50/90">
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
                      <div className="space-y-5">
                        <div className="h-10 w-36 rounded-2xl bg-slate-900" />
                        <div className="space-y-2">
                          <div className="h-4 w-full rounded-full bg-slate-200" />
                          <div className="h-4 w-10/12 rounded-full bg-slate-200" />
                          <div className="h-4 w-7/12 rounded-full bg-slate-200" />
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="rounded-3xl border border-slate-200 bg-white p-4">
                            <div className="h-24 rounded-2xl bg-slate-100" />
                          </div>
                          <div className="rounded-3xl border border-slate-200 bg-white p-4">
                            <div className="h-24 rounded-2xl bg-slate-100" />
                          </div>
                        </div>
                      </div>

                      <div className="absolute left-8 top-32 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-[0_20px_50px_-32px_rgba(15,23,42,0.35)]">
                        <div className="flex items-start gap-3">
                          <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                            <MessageSquare size={16} />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-slate-900">
                              Tighten spacing above the hero CTA.
                            </p>
                            <p className="mt-1 text-xs text-slate-500">
                              Comment pinned to the page
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="absolute bottom-8 right-8 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_16px_30px_-24px_rgba(15,23,42,0.35)]">
                        Resolved in session 03
                      </div>
                    </div>

                    <div className="bg-white p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                            Sidebar
                          </p>
                          <p className="mt-1 text-lg font-semibold tracking-tight text-slate-900">
                            Homepage review
                          </p>
                        </div>
                        <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                          4 open
                        </div>
                      </div>

                      <div className="mt-5 space-y-3">
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                          <div className="flex items-start gap-3">
                            <div className="rounded-full bg-slate-200 p-2 text-slate-700">
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
                                Includes comment list, screenshots, and
                                metadata.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                            Session summary
                          </p>
                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            Comments, screenshots, and review history stay
                            organized in one browser workflow.
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
