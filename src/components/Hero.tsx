'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const proof = ['Live on 5 platforms', 'Featured by MakeUseOf', 'Based in South Africa'];

const quickServices = [
  {
    label: 'Web apps',
    icon: <path d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6zM8 21h8M12 17v4" />,
  },
  {
    label: 'Mobile apps',
    icon: <path d="M9 2h6a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM11 18h2" />,
  },
  {
    label: 'SaaS and APIs',
    icon: <path d="M4 7h16M4 12h16M4 17h10" />,
  },
];

function Check() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-blue-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 mesh-gradient" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
        <div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2.5 h-8 pl-2.5 pr-3 rounded-full border border-navy-800 bg-navy-900/70 text-slate-400 text-[13px] font-medium mb-7">
              <span className="w-2 h-2 rounded-full bg-green-400" aria-hidden="true" />
              Now accepting new projects
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-[1.02] mb-6 max-w-2xl"
          >
            Software that ships, from a team that owns it.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="text-lg md:text-xl text-slate-400 max-w-xl mb-9 leading-relaxed"
          >
            Web, desktop and mobile products for clients worldwide, built by the studio behind Doppelgone. Senior attention on every project, from first call to app store.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link href="/contact" className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors">
              Start a project
            </Link>
            <Link href="/work" className="inline-flex items-center justify-center h-12 px-6 rounded-lg border border-navy-800 hover:border-navy-700 hover:bg-white/5 text-white font-medium transition-colors">
              See our work
            </Link>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-x-6 gap-y-2 mt-8 text-[13px] text-slate-500"
          >
            {proof.map((p) => (
              <li key={p} className="flex items-center gap-2"><Check />{p}</li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden lg:flex flex-col gap-3.5"
        >
          <Link href="/work/doppelgone" className="block rounded-2xl border border-navy-800 bg-navy-900 p-6 card-hover">
            <div className="flex items-center justify-between gap-3 mb-4">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-teal-300">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-300" aria-hidden="true" />
                Our product
              </span>
              <span className="text-xs text-slate-500">doppelgone.app</span>
            </div>
            <div className="flex items-center gap-3 mb-5">
              <svg viewBox="0 0 32 32" width="40" height="40" aria-hidden="true"><rect width="32" height="32" rx="7" fill="#0F8F7A" /><rect x="14" y="4" width="14" height="14" rx="4" fill="#FFFFFF" opacity=".55" /><rect x="4" y="14" width="14" height="14" rx="4" fill="#FFFFFF" /><circle cx="13.8" cy="18.4" r="2" fill="#0F8F7A" /><path d="M6 26L10 21L12.6 24.1L14.4 22.3L16.5 26Z" fill="#0F8F7A" /></svg>
              <div>
                <div className="font-display text-xl font-semibold text-white">Doppelgone</div>
                <div className="text-[13px] text-slate-400">Duplicate photo cleaner, on-device AI</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[['5', 'Platforms'], ['4', 'App stores'], ['100%', 'On-device']].map(([v, l]) => (
                <div key={l}>
                  <div className="font-display text-2xl font-bold text-white">{v}</div>
                  <div className="text-xs text-slate-500">{l}</div>
                </div>
              ))}
            </div>
          </Link>
          <div className="grid grid-cols-3 gap-3">
            {quickServices.map((s) => (
              <Link key={s.label} href="/services" className="rounded-xl border border-navy-800 p-4 flex flex-col gap-2.5 hover:bg-white/[0.03] transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{s.icon}</svg>
                <span className="text-sm font-semibold text-white">{s.label}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
