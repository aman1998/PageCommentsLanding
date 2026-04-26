import { SITE_CONFIG } from "@/config/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200/80 px-6 py-10">
      <div className="container mx-auto">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt={SITE_CONFIG.name}
              width={48}
              height={48}
            />
            <div>
              <p className="text-sm font-semibold tracking-tight text-slate-950">
                {SITE_CONFIG.name}
              </p>
              <p className="text-sm text-slate-500">
                Chrome extension for on-page website review.
              </p>
            </div>
          </div>

          <div className="text-sm leading-7 text-slate-500 md:text-right">
            <p>Built for design review, QA passes, and frontend handoff.</p>
            <p className="flex items-center justify-start gap-3 md:justify-end">
              <Link
                href="/terms"
                className="transition-colors hover:text-slate-900"
              >
                Terms of Service
              </Link>
              <span aria-hidden="true">•</span>
              <Link
                href="/privacy"
                className="transition-colors hover:text-slate-900"
              >
                Privacy Policy
              </Link>
              <span aria-hidden="true">•</span>
              <Link
                href="/refund-policy"
                className="transition-colors hover:text-slate-900"
              >
                Refund Policy
              </Link>
              <span aria-hidden="true">•</span>
              <Link
                href="/contacts"
                className="transition-colors hover:text-slate-900"
              >
                Contacts
              </Link>
            </p>
            <p>
              © {new Date().getFullYear()} {SITE_CONFIG.name}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
