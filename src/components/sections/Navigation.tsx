import { Globe } from "lucide-react";
import { Button } from "../ui/Button";
import { SITE_CONFIG } from "@/config/constants";

const Navigation = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
            SR
          </div>
          <div>
            <span className="block text-lg font-semibold tracking-tight text-slate-950">
              SiteReview
            </span>
            <span className="block text-xs uppercase tracking-[0.16em] text-slate-500">
              Chrome extension
            </span>
          </div>
        </div>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a
            href="#use-cases"
            className="transition-colors hover:text-slate-950"
          >
            Use cases
          </a>
          <a
            href="#features"
            className="transition-colors hover:text-slate-950"
          >
            Features
          </a>
          <a href="#pricing" className="transition-colors hover:text-slate-950">
            Pricing
          </a>
          <a href="#faq" className="transition-colors hover:text-slate-950">
            FAQ
          </a>
        </div>

        <Button
          as="a"
          href={SITE_CONFIG.appUrl}
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
        >
          <Globe size={16} />
          Add to Chrome
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
