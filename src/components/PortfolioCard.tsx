'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface Props {
  slug: string;
  title: string;
  category: string;
  color: string;
  mockupType: 'desktop' | 'mobile';
  index: number;
}

export default function PortfolioCard({ slug, title, category, color, mockupType, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <Link href={`/work/${slug}`} className="block group">
        <div className="relative rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden card-hover">
          {/* Preview area */}
          <div className="h-56 relative overflow-hidden flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${color}15, ${color}05)` }}>
            {mockupType === 'desktop' ? (
              <div className="w-4/5 h-32 rounded-t-lg bg-navy-900/80 border border-white/10 overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                <div className="h-6 bg-navy-800 flex items-center px-3 gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-400/60" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
                  <div className="w-2 h-2 rounded-full bg-green-400/60" />
                </div>
                <div className="p-2 flex gap-2">
                  <div className="w-1/4 h-20 rounded bg-white/5" />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 rounded bg-white/5 w-3/4" />
                    <div className="h-3 rounded bg-white/5 w-1/2" />
                    <div className="h-8 rounded" style={{ background: `${color}20` }} />
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-28 h-48 rounded-2xl bg-navy-900/80 border-2 border-white/10 overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                <div className="h-4 flex justify-center items-end">
                  <div className="w-12 h-1.5 rounded-full bg-white/10" />
                </div>
                <div className="p-2 space-y-2">
                  <div className="h-3 rounded bg-white/5 w-3/4" />
                  <div className="h-12 rounded" style={{ background: `${color}20` }} />
                  <div className="h-3 rounded bg-white/5 w-1/2" />
                  <div className="h-3 rounded bg-white/5 w-2/3" />
                </div>
              </div>
            )}
          </div>

          <div className="p-6">
            <p className="text-sm font-medium mb-1" style={{ color }}>{category}</p>
            <h3 className="text-white text-xl font-semibold group-hover:text-blue-400 transition-colors">{title}</h3>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
