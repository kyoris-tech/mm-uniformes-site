import type { IconProps } from "./icon.types";

export function EmbroideryIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <circle cx="8" cy="8" r="4" />
      <path d="M11 11l9 9" />
      <path d="M20 20l-2-6" />
      <path d="M20 20l-6-2" />
    </svg>
  );
}
