import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ContainerProps {
  fluid?: boolean;
  className?: string;
  children: ReactNode;
}

export function Container({ fluid = false, className, children }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 sm:px-10 lg:px-16",
        fluid ? "max-w-[100rem]" : "max-w-6xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
