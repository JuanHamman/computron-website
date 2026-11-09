import { ImageResponse } from 'next/og';

export const alt = 'Computron Tech: software that ships, from a team that owns it.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

async function loadSpaceGrotesk(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700', {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; rv:40.0) Gecko/20100101 Firefox/40.0' },
    }).then((r) => r.text());
    const url = css.match(/src: url\(([^)]+\.(?:ttf|woff))\)/)?.[1];
    if (!url) return null;
    return await fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function OpenGraphImage() {
  const font = await loadSpaceGrotesk();
  const display = font ? 'Space Grotesk' : 'sans-serif';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: '#0A0E1A',
          backgroundImage: 'radial-gradient(ellipse 700px 400px at 50% 0%, rgba(46,107,240,0.22), transparent 70%)',
          color: '#FFFFFF',
          fontFamily: display,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <svg width="88" height="88" viewBox="0 0 64 64" fill="none">
            <path d="M46.1 15.1 A22 22 0 1 0 46.1 48.9" stroke="#2E6BF0" strokeWidth="11" />
            <circle cx="47" cy="32" r="7" fill="#FFFFFF" />
          </svg>
          <div style={{ fontSize: 80, fontWeight: 700, letterSpacing: '-0.035em', marginLeft: -2, lineHeight: 1 }}>omputron</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', maxWidth: 1000 }}>
            Software that ships, from a team that owns it.
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 26, color: '#A9B4C8', fontFamily: 'sans-serif' }}>
            <div>Web, desktop and mobile · Makers of Doppelgone</div>
            <div style={{ color: '#7DA6FF' }}>computrontech.com</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: font ? [{ name: 'Space Grotesk', data: font, weight: 700, style: 'normal' }] : undefined,
    },
  );
}
