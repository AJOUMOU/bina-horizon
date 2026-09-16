export function Hills({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 220"
      preserveAspectRatio="none"
      className={className}
      aria-hidden
    >
      <path
        d="M0 160 C 180 90, 280 190, 460 130 C 620 80, 720 170, 900 110 C 1080 55, 1220 150, 1440 90 L1440 220 L0 220 Z"
        fill="#5A3218"
        opacity="0.18"
      />
      <path
        d="M0 180 C 220 130, 340 200, 520 155 C 700 110, 860 190, 1040 150 C 1200 118, 1320 170, 1440 140 L1440 220 L0 220 Z"
        fill="#5A3218"
        opacity="0.32"
      />
      <path
        d="M0 198 C 160 170, 300 210, 480 186 C 680 158, 840 205, 1080 176 C 1260 158, 1360 190, 1440 178 L1440 220 L0 220 Z"
        fill="#3A1E0E"
        opacity="0.55"
      />
    </svg>
  );
}
