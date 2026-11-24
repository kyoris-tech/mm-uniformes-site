import type { IconProps } from "./icon.types";

// Colete com faixas refletivas horizontais.
export function ReflectiveIcon({ className }: IconProps) {
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
      <path d="M9 3 6 5 4 9v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9l-2-4-3-2-3 4-3-4Z" />
      <path d="M4 12h16" />
      <path d="M4 16h16" />
    </svg>
  );
}
