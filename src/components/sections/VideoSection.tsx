import Image from "next/image";

const steps = [
  {
    title: "Open a page",
    description: "Use PageComments on localhost, staging, or production.",
  },
  {
    title: "Pin feedback",
    description: "Add comments, screenshots, labels, and priorities.",
  },
  {
    title: "Share the result",
    description: "Export a PDF when the review is ready.",
  },
];

export default function VideoSection() {
  return (
    <section id="demo" className="px-6 py-12 lg:py-20">
      <div className="container mx-auto">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            How it works
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-slate-950 lg:text-5xl">
            A review flow in three steps.
          </h2>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div className="grid gap-4">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="flex gap-5 rounded-[28px] border border-slate-200/80 bg-white/90 p-5 shadow-sm shadow-slate-950/[0.03]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative overflow-hidden rounded-[36px] border border-slate-200/80 bg-white/90 p-3 shadow-xl shadow-slate-950/[0.06]">
              <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-slate-50">
                <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4">
                  <span className="text-sm font-medium text-slate-700">
                    Review session
                  </span>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                    Ready to export
                  </span>
                </div>
                <div className="relative aspect-[16/10] min-h-[280px]">
                  <Image
                    src="/screen2.png"
                    alt="PageComments review workflow preview"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
