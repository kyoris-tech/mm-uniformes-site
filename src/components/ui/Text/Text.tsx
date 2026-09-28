import { cn } from "@/lib/cn";
import type { TextColor, TextProps, TextSize, TextWeight } from "./text.types";

const sizeClassMap: Record<TextSize, string> = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
  "7xl": "text-7xl",
};

const colorClassMap: Record<TextColor, string> = {
  default: "text-[var(--text-color-default)]",
  muted: "text-[var(--text-color-muted)]",
  inverse: "text-[var(--text-color-inverse)]",
  "inverse-muted": "text-[var(--text-color-inverse-muted)]",
  primary: "text-[var(--text-color-primary)]",
  secondary: "text-[var(--text-color-secondary)]",
  accent: "text-[var(--text-color-accent)]",
};

const weightClassMap: Record<TextWeight, string> = {
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold font-heading",
};

export function Text({
  as: Component = "p",
  size = "base",
  color = "default",
  weight = "regular",
  className,
  children,
}: TextProps) {
  return (
    <Component
      className={cn(
        sizeClassMap[size],
        colorClassMap[color],
        weightClassMap[weight],
        className,
      )}
    >
      {children}
    </Component>
  );
}
