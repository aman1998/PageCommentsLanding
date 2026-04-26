const useCases = [
  {
    title: "Design QA",
    description:
      "Mark spacing, hierarchy, copy, and visual polish on the live page.",
  },
  {
    title: "Frontend fixes",
    description:
      "Attach issues to the exact element developers need to update.",
  },
  {
    title: "Client handoff",
    description: "Turn review notes into a PDF people can open anywhere.",
  },
];

export default function Features() {
  return (
    <section id="features" className="px-6 py-12 lg:py-20">
      <div className="container mx-auto">
        <div className="mx-auto max-w-6xl">
          <div className="relative grid gap-10 overflow-hidden rounded-[36px] border border-slate-200/80 bg-white/85 p-6 shadow-sm shadow-slate-950/[0.03] lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:p-10">
            <div className="pointer-events-none absolute -left-10 top-8 h-44 w-44 rounded-full bg-emerald-200/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-12 right-2 h-48 w-48 rounded-full bg-sky-200/35 blur-3xl" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Built for review rounds
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 lg:text-5xl">
                Stop turning visual feedback into chat threads.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                Use PageComments when feedback needs context: design QA, copy
                review, frontend fixes, client approvals, and bug reports.
              </p>
            </div>

            <div className="grid gap-4">
              {useCases.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/70 p-5"
                >
                  <h3 className="text-base font-semibold tracking-tight text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
