import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700 shadow-sm ${className}`}
    >
      {children}
    </span>
  );
}
