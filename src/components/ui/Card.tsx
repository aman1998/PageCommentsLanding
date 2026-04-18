import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
  <div
    className={`rounded-[28px] border border-slate-200/70 bg-white/90 p-6 shadow-[0_18px_48px_-28px_rgba(15,23,42,0.28)] backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_24px_64px_-32px_rgba(15,23,42,0.32)] ${className}`}
  >
    {children}
  </div>
  );
}
