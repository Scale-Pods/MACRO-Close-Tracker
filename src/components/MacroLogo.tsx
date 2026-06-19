// MACRO emblem. Single-color so it inverts with the theme via --logo-fill
// (white on the dark sidebar, dark teal on the light sidebar).
// Replace the <path>/<g> below with the official vector if a source file is provided.
export default function MacroLogo({ size = 34 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="none"
      stroke="var(--logo-fill)"
      strokeWidth="12"
      strokeLinejoin="miter"
      strokeLinecap="square"
      aria-label="MACRO"
      role="img"
    >
      {/* Outer pillars + central peak forming the M */}
      <path d="M14 86 V20 L50 54 L86 20 V86" />
      {/* Inner notch detail */}
      <path d="M50 86 V62" strokeWidth="11" />
    </svg>
  );
}
