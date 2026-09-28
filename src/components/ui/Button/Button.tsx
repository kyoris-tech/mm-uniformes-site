import { cn } from "@/lib/cn";
import type { ButtonProps, ButtonSize, ButtonVariant } from "./button.types";

const variantBaseClassMap: Record<ButtonVariant, string> = {
  primary: "bg-secondary text-white shadow-secondary/25",
  outline: "border border-white/40 text-white",
  whatsapp: "bg-[#25D366] text-white shadow-[#25D366]/25",
  dark: "bg-primary text-white shadow-primary/25",
};

const variantHoverClassMap: Record<ButtonVariant, string> = {
  primary: "hover:bg-mm-orange-deep hover:shadow-secondary/40",
  outline: "hover:border-white hover:bg-white/10",
  whatsapp: "hover:bg-[#1FBE5C] hover:shadow-[#25D366]/40",
  dark: "hover:bg-mm-blue hover:shadow-primary/40",
};

const sizeClassMap: Record<ButtonSize, string> = {
  sm: "gap-1.5 px-4 py-2 text-sm",
  md: "gap-2 px-6 py-3 text-sm",
  lg: "gap-2.5 px-8 py-4 text-base",
};

export function Button({
  as: Component = "a",
  variant = "primary",
  size = "md",
  animated = true,
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <Component
      className={cn(
        "group relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full font-semibold shadow-lg",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-secondary",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60",
        animated &&
          "transition-all duration-300 ease-out will-change-transform hover:-translate-y-0.5 hover:scale-[1.03] active:translate-y-0 active:scale-[0.97]",
        variantBaseClassMap[variant],
        animated && variantHoverClassMap[variant],
        sizeClassMap[size],
        className,
      )}
      {...rest}
    >
      {animated && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
        />
      )}
      {children}
    </Component>
  );
}
