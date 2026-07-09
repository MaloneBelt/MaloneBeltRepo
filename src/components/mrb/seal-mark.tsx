/* The brand seal: endless belt loop + double marigold chevron.
   Loop takes currentColor so it can sit on light or dark surfaces. */
export function SealMark({
  size = 120,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size * 0.7}
      viewBox="0 0 120 120"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="60"
        cy="60"
        r="47"
        fill="none"
        stroke="currentColor"
        strokeWidth="11"
      />
      <g
        fill="none"
        stroke="var(--color-action)"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="39,40 55,60 39,80" />
        <polyline points="60,40 76,60 60,80" />
      </g>
    </svg>
  );
}
