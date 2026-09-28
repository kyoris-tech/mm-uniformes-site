import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

export type ButtonVariant = "primary" | "outline" | "whatsapp" | "dark";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ComponentPropsWithoutRef<"a"> {
  as?: ElementType;
  variant?: ButtonVariant;
  size?: ButtonSize;
  animated?: boolean;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
}
