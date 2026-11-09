'use client';

import { motion } from 'framer-motion';

const stats = [
  {
    label: '5 Platforms',
    sublabel: 'Shipped with Doppelgone',
    icon: <path d="M12 3l1.8 4.6L18 9l-4.2 1.4L12 15l-1.8-4.6L6 9l4.2-1.4L12 3zM5 17l.9 2.1L8 20l-2.1.9L5 23l-.9-2.1L2 20l2.1-.9L5 17zM19 15l.7 1.6 1.6.7-1.6.7L19 19.6l-.7-1.6-1.6-.7 1.6-.7.7-1.6z" />,
  },
  {
    label: '4 App Stores',
    sublabel: 'Chrome, Microsoft, Apple, Google',
    icon: <path d="M4 7h16l-1 4a3 3 0 0 1-3 2 3 3 0 0 1-2-1 3 3 0 0 1-2 1 3 3 0 0 1-2-1 3 3 0 0 1-2 1 3 3 0 0 1-3-2L4 7zM5 13v7h14v-7M10 20v-4h4v4" />,
  },
  {
    label: 'On-Device AI',
    sublabel: 'Private by design',
    icon: <path d="M7 11V8a5 5 0 0 1 10 0v3M6 11h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1zM12 15v3" />,
  },
  {
    label: 'Full-Stack',
    sublabel: 'Web, desktop and mobile',
    icon: <path d="M4 5h16v10H4zM2 19h20M9 15v4M15 15v4" />,
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
