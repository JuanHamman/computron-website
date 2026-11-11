'use client';

import { motion } from 'framer-motion';

const stats = [
  {
    label: 'Since 2021',
    sublabel: 'Building software for clients',
    icon: <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />,
  },
  {
    label: 'Web, Mobile, Desktop',
    sublabel: 'One team across all three',
    icon: <path d="M4 5h16v10H4zM2 19h20M9 15v4M15 15v4" />,
  },
  {
    label: 'App Store Ready',
    sublabel: 'Published on Apple, Google, Microsoft and Chrome stores',
    icon: <path d="M4 7h16l-1 4a3 3 0 0 1-3 2 3 3 0 0 1-2-1 3 3 0 0 1-2 1 3 3 0 0 1-2-1 3 3 0 0 1-2 1 3 3 0 0 1-3-2L4 7zM5 13v7h14v-7M10 20v-4h4v4" />,
  },
  {
    label: 'Senior Engineers',
    sublabel: 'On every project, start to finish',
    icon: <path d="M16 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0zM4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" />,
  },
];

export default function AnimatedCounter() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="text-center"
        >
          <div className="w-11 h-11 mx-auto mb-4 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{s.icon}</svg>
          </div>
          <div className="font-display text-2xl md:text-3xl font-bold text-white mb-1">{s.label}</div>
          <p className="text-slate-400 text-sm">{s.sublabel}</p>
        </motion.div>
      ))}
    </div>
  );
}
