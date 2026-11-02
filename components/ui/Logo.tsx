interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 36, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Rounded square background */}
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        rx="12"
        fill="var(--color-foreground)"
      />

      {/* Letter A */}
      <path
        d="M13 27L20 13L27 27"
        stroke="var(--color-background)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 22H24"
        stroke="var(--color-background)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
