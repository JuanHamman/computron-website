/**
 * The Computron mark: a C-shaped toggle track with a knob.
 * Off = knob resting inside on the left, grey track.
 * On  = knob docked in the gap on the right, Signal-blue track. The logo is always "on".
 * The mark doubles as the capital C of the wordmark, so the lockup is mark + "omputron".
 */

type MarkSize = 'sm' | 'md' | 'lg';

const MARK_PX: Record<MarkSize, number> = { sm: 30, md: 40, lg: 64 };
const WORD_PX: Record<MarkSize, number> = { sm: 27, md: 36, lg: 58 };

interface MarkProps {
  size?: MarkSize | number;
  /** Play the off → on toggle once when mounted. Honors prefers-reduced-motion. */
  animate?: boolean;
  /** Colour of the knob; defaults to white (for dark surfaces). */
  knob?: string;
  className?: string;
  label?: string;
}

export function LogoMark({ size = 'sm', animate = false, knob = '#FFFFFF', className = '', label }: MarkProps) {
  const px = typeof size === 'number' ? size : MARK_PX[size];
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <path
        className={animate ? 'ct-track' : undefined}
        d="M46.1 15.1 A22 22 0 1 0 46.1 48.9"
        stroke="#2E6BF0"
        strokeWidth="11"
      />
      <g className={animate ? 'ct-knob' : undefined}>
        <circle className={animate ? 'ct-knob-fill' : undefined} cx={animate ? 24 : 47} cy="32" r="7" fill={knob} />
      </g>
    </svg>
  );
}

interface LogoProps {
  size?: MarkSize;
  showWordmark?: boolean;
  animate?: boolean;
  className?: string;
}

export default function Logo({ size = 'sm', showWordmark = true, animate = false, className = '' }: LogoProps) {
  const markPx = MARK_PX[size];
  const wordPx = WORD_PX[size];
  if (!showWordmark) return <LogoMark size={size} animate={animate} label="Computron" className={className} />;
  return (
    <span role="img" aria-label="Computron" className={`inline-flex items-center ${className}`}>
      <LogoMark size={size} animate={animate} />
      <span
        aria-hidden="true"
        className={`font-display font-bold text-white leading-none ${animate ? 'ct-word' : ''}`}
        style={{ fontSize: wordPx, letterSpacing: '-0.035em', marginLeft: -markPx * 0.1 }}
      >
        omputr<span className={animate ? 'ct-on' : undefined}>on</span>
      </span>
    </span>
  );
}
