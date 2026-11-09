'use client';

import { motion } from 'framer-motion';

const stats = [
  { label: '5 Platforms', sublabel: 'Shipped with Doppelgone', icon: '🚀' },
  { label: '4 App Stores', sublabel: 'Chrome, Microsoft, Apple, Google', icon: '🏪' },
  { label: 'On-Device AI', sublabel: 'Private by design', icon: '🔒' },
  { label: 'Full-Stack', sublabel: 'Web, desktop and mobile', icon: '🛠️' },
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
          <div className="text-3xl mb-2">{s.icon}</div>
          <div className="text-2xl md:text-3xl font-bold text-white mb-1">{s.label}</div>
          <p className="text-slate-400 text-sm">{s.sublabel}</p>
        </motion.div>
      ))}
    </div>
  );
}
