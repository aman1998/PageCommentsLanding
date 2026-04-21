const Footer = () => {
  return (
    <footer className="border-t border-slate-200/80 px-6 py-10">
      <div className="container mx-auto">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
              SR
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight text-slate-950">
                SiteReview
              </p>
              <p className="text-sm text-slate-500">
                Chrome extension for on-page website review.
              </p>
            </div>
          </div>

          <div className="text-sm leading-7 text-slate-500 md:text-right">
            <p>Built for design review, QA passes, and frontend handoff.</p>
            <p>© 2026 SiteReview.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
