'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  items: { q: string; a: string }[];
}

export default function FAQ({ items }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="border border-white/5 rounded-lg overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/[0.02] transition-colors"
          >
            <span className="text-white text-sm font-medium pr-4">{item.q}</span>
            <svg
              className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-4 text-slate-400 text-sm leading-relaxed">{item.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
