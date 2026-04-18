import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type CommonButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type NativeButtonProps = CommonButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

type AnchorButtonProps = CommonButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
  };

type ButtonProps = NativeButtonProps | AnchorButtonProps;

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full border font-medium tracking-tight transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-slate-950 bg-slate-950 text-white shadow-[0_18px_40px_-18px_rgba(15,23,42,0.55)] hover:bg-slate-800 focus:ring-slate-400",
  secondary:
    "border-slate-200 bg-white text-slate-900 shadow-sm hover:border-slate-300 hover:bg-slate-50 focus:ring-slate-300",
  outline:
    "border-slate-300 bg-transparent text-slate-900 hover:bg-slate-50 focus:ring-slate-300",
  ghost:
    "border-transparent bg-transparent text-slate-600 hover:bg-white hover:text-slate-900 focus:ring-slate-300",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

export function Button(props: ButtonProps) {
  const { children, variant = "primary", size = "md", className = "" } = props;
  const buttonClassName =
    `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`.trim();

  if (props.as === "a") {
    const {
      as,
      children: _children,
      variant: _variant,
      size: _size,
      className: _className,
      ...anchorProps
    } = props;
    void as;
    void _children;
    void _variant;
    void _size;
    void _className;

    return (
      <a className={buttonClassName} {...anchorProps}>
        {children}
      </a>
    );
  }

  const {
    as,
    type = "button",
    children: _children,
    variant: _variant,
    size: _size,
    className: _className,
    ...buttonProps
  } = props;
  void as;
  void _children;
  void _variant;
  void _size;
  void _className;

  return (
    <button type={type} className={buttonClassName} {...buttonProps}>
      {children}
    </button>
  );
}
