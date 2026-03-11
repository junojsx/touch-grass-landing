type Props = {
  title?: string;
  className?: string;
};

export default function LockKeyMark({
  title = 'Animated lock and key',
  className,
}: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 240"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="tg-accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="currentColor" stopOpacity="0.95" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.55" />
        </linearGradient>
      </defs>

      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        {/* Soft outline frame */}
        <path
          d="M56 56c0-10 8-18 18-18h172c10 0 18 8 18 18v128c0 10-8 18-18 18H74c-10 0-18-8-18-18V56z"
          strokeOpacity="0.16"
          strokeWidth="10"
        />

        {/* Lock body */}
        <g className="tg-lock" strokeWidth="10">
          <path
            d="M120 126c0-8 6-14 14-14h52c8 0 14 6 14 14v52c0 8-6 14-14 14h-52c-8 0-14-6-14-14v-52z"
            stroke="url(#tg-accent)"
          />
          <path
            d="M140 112V92c0-18 15-32 34-32s34 14 34 32v20"
            strokeOpacity="0.85"
          />
          <path d="M160 150c0-7 6-12 14-12s14 5 14 12" strokeOpacity="0.75" />
        </g>

        {/* Key */}
        <g className="tg-key" strokeWidth="10">
          <path d="M88 164l66-34" strokeOpacity="0.7" />
          <path d="M82 170l18-9" strokeOpacity="0.7" />
          <path d="M100 161l10 19" strokeOpacity="0.7" />
          <path
            d="M172 120c0 10-8 18-18 18s-18-8-18-18 8-18 18-18 18 8 18 18z"
            strokeOpacity="0.85"
          />
        </g>
      </g>
    </svg>
  );
}

