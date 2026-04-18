import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-[28px] border border-slate-200/80 bg-white/95 p-6 shadow-[0_14px_40px_-30px_rgba(15,23,42,0.24)] backdrop-blur transition duration-200 hover:border-slate-300 hover:shadow-[0_18px_50px_-34px_rgba(15,23,42,0.28)] ${className}`}
    >
      {children}
    </div>
  );
}
