'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const capabilities = [
  {
    label: 'Web applications',
    desc: 'Dashboards, portals and customer-facing apps.',
    href: '/services#web-applications',
    icon: <path d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6zM8 21h8M12 17v4" />,
  },
  {
    label: 'Mobile apps',
    desc: 'iPhone and Android, native or cross-platform.',
    href: '/services#mobile-apps',
    icon: <path d="M9 2h6a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM11 18h2" />,
  },
  {
    label: 'Desktop software',
    desc: 'Windows and Mac apps, store-ready.',
    href: '/services',
    icon: <path d="M4 5h16v10H4zM2 19h20M9 15v4M15 15v4" />,
  },
  {
    label: 'SaaS and APIs',
    desc: 'Multi-tenant platforms, billing and integrations.',
    href: '/services#saas-platforms',
    icon: <path d="M4 7h16M4 12h16M4 17h10" />,
  },
];

const steps = ['Scope', 'Design', 'Build', 'Launch', 'Support'];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 mesh-gradient" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-[1.02] mb-6 max-w-2xl"
          >
            Custom software, designed and built for your business.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-lg md:text-xl text-slate-400 max-w-xl mb-9 leading-relaxed"
          >
            Computron Tech is a software development studio. We plan, design, build and support web, mobile and desktop applications for clients worldwide, with senior engineers on every project from the first call to launch.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link href="/contact" className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors">
              Start a project
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center h-12 px-6 rounded-lg border border-navy-800 hover:border-navy-700 hover:bg-white/5 text-white font-medium transition-colors">
              Explore our services
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24 }}
          className="hidden lg:block rounded-2xl border border-navy-800 bg-navy-900 p-6"
        >
          <div className="flex items-center justify-between gap-3 mb-5">
            <span className="text-xs font-semibold uppercase tracking-[0.08em] text-blue-400">What we build</span>
            <Link href="/services" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">All services →</Link>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {capabilities.map((c) => (
              <Link key={c.label} href={c.href} className="rounded-xl border border-navy-800 bg-navy-950/40 p-4 flex flex-col gap-2.5 hover:bg-white/[0.03] hover:border-navy-700 transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{c.icon}</svg>
                <span className="text-sm font-semibold text-white">{c.label}</span>
                <span className="text-xs text-slate-500 leading-relaxed">{c.desc}</span>
              </Link>
            ))}
          </div>

          <div className="mt-5 pt-5 border-t border-navy-800">
            <div className="text-xs text-slate-500 mb-3">How a project runs</div>
            <ol className="flex items-center gap-2">
              {steps.map((s, i) => (
                <li key={s} className="flex items-center gap-2 text-[13px] text-slate-300">
                  <span className="font-display font-semibold text-white">{s}</span>
                  {i < steps.length - 1 && <span className="w-4 h-px bg-navy-700" aria-hidden="true" />}
                </li>
              ))}
            </ol>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
