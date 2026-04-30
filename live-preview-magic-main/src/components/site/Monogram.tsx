interface Props {
  size?: number;
  className?: string;
  variant?: "gold" | "parchment" | "oxblood";
}

export const Monogram = ({ size = 48, className = "", variant = "gold" }: Props) => {
  const stroke =
    variant === "gold"
      ? "hsl(var(--gold))"
      : variant === "parchment"
      ? "hsl(var(--parchment))"
      : "hsl(var(--oxblood))";

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="none"
      stroke={stroke}
      className={className}
      aria-label="Maison Aurelia monogram"
    >
      <circle cx="50" cy="50" r="46" strokeWidth="0.6" opacity="0.55" />
      <circle cx="50" cy="50" r="38" strokeWidth="0.4" opacity="0.35" />
      {/* M */}
      <path d="M28 64 L28 36 L40 56 L52 36 L52 64" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
      {/* A */}
      <path d="M56 64 L66 36 L76 64 M60 56 L72 56" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
      {/* baseline ornament */}
      <path d="M34 72 L66 72" strokeWidth="0.5" opacity="0.7" />
      <circle cx="50" cy="72" r="0.9" fill={stroke} stroke="none" />
    </svg>
  );
};
