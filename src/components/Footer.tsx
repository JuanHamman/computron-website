import Link from 'next/link';
import Logo from '@/components/Logo';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-950">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Logo size="sm" />
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">
              Premium software development studio. We turn ambitious ideas into exceptional digital products.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Services', href: '/services' },
                { label: 'Capabilities', href: '/work' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((l) => (
                <Link key={l.label} href={l.href} className="text-slate-500 hover:text-slate-300 text-sm transition-colors">{l.label}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
            <div className="flex flex-col gap-3">
              {['Web Apps', 'Mobile Apps', 'SaaS Platforms', 'API Development'].map((s) => (
                <Link key={s} href="/services" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">{s}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Get in Touch</h4>
            <div className="flex flex-col gap-3 text-sm text-slate-500">
              <a href="mailto:hello@computrontech.com" className="hover:text-slate-300 transition-colors">hello@computrontech.com</a>
              <p>Based in South Africa</p>
              <p>Serving clients worldwide</p>
              <div className="flex gap-4 mt-2">
                {['LinkedIn', 'X', 'GitHub'].map((s) => (
                  <a key={s} href="#" className="hover:text-white transition-colors">{s}</a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">© 2025 Computron Tech. All rights reserved.</p>
          <p className="text-slate-600 text-sm">Built with ❤️ in South Africa</p>
        </div>
      </div>
    </footer>
  );
}
