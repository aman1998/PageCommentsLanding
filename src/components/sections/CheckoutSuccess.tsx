"use client";

const CheckoutSuccess = () => {
  return (
    <section className="mt-24  px-6">
      <div className="container mx-auto">
        <div className="rounded-[36px] border border-slate-200/80 bg-white/95 px-8 py-14 text-center lg:px-14">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Success
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 lg:text-5xl">
              You have successfully purchased the extension
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Open the extension and start reviewing pages
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSuccess;
