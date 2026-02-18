interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
  className?: string;
}

export function LogoMark({ size = 'sm', className = '' }: { size?: 'sm' | 'md' | 'lg'; className?: string }) {
  const sizes = { sm: 32, md: 40, lg: 64 };
  const s = sizes[size];
  return (
    <svg width={s} height={s} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Outer hexagonal circuit shape */}
      <path
        d="M32 4L56 18V46L32 60L8 46V18L32 4Z"
        stroke="url(#logoGrad)"
        strokeWidth="2"
        fill="none"
      />
      {/* Inner stylized C with circuit nodes */}
      <path
        d="M40 20C40 20 36 16 28 16C20 16 14 22 14 32C14 42 20 48 28 48C36 48 40 44 40 44"
        stroke="url(#logoGrad)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* Circuit connecting lines */}
      <line x1="40" y1="20" x2="50" y2="20" stroke="url(#logoGrad)" strokeWidth="2" strokeLinecap="round" />
      <line x1="40" y1="44" x2="50" y2="44" stroke="url(#logoGrad)" strokeWidth="2" strokeLinecap="round" />
      <line x1="50" y1="20" x2="50" y2="44" stroke="url(#logoGrad)" strokeWidth="2" strokeLinecap="round" />
      {/* Circuit nodes */}
      <circle cx="40" cy="20" r="2.5" fill="#3B82F6" />
      <circle cx="50" cy="20" r="2.5" fill="#06B6D4" />
      <circle cx="40" cy="44" r="2.5" fill="#3B82F6" />
      <circle cx="50" cy="44" r="2.5" fill="#06B6D4" />
      <circle cx="50" cy="32" r="2" fill="#22D3EE" />
      {/* Center node */}
      <circle cx="28" cy="32" r="3" fill="url(#logoGrad)" />
      <defs>
        <linearGradient id="logoGrad" x1="8" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Logo({ size = 'sm', showWordmark = true, className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <LogoMark size={size} />
      {showWordmark && (
        <span className="text-white font-bold text-lg tracking-tight">
          COMPUTRON
        </span>
      )}
    </div>
  );
}
