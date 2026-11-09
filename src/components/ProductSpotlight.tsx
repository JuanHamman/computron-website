'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Project } from '@/data/portfolio';

export function LiveBadge({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-400/30 bg-teal-400/10 text-teal-300 text-xs font-medium ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-teal-300 animate-pulse" />
      Live product
    </span>
  );
}

export default function ProductSpotlight({ project }: { project: Project }) {
  const live = project.live;
  if (!live) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-teal-400/15 bg-gradient-to-br from-teal-400/[0.06] to-transparent overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
        <div className="p-8 md:p-12">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <LiveBadge />
            <span className="text-slate-500 text-xs">Designed, built and run by Computron Tech</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">{project.title}</h3>
          <p className="text-teal-300 font-medium mb-4">{live.tagline}</p>
          <p className="text-slate-400 leading-relaxed mb-8">
            A duplicate photo cleaner for Google Photos, iCloud Photos, Windows, Mac, iPhone and Android. On-device AI keeps the best shot of every set, and photos never leave the device.
          </p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            {live.highlights.map((h) => (
              <div key={h.label}>
                <div className="text-xl sm:text-2xl font-bold text-white whitespace-nowrap">{h.value}</div>
                <div className="text-slate-500 text-xs">{h.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href={`/work/${project.slug}`}
              className="text-center bg-teal-500 hover:bg-teal-400 text-navy-950 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Read the case study
            </Link>
            <a
              href={live.url}
              target="_blank"
              rel="noopener"
              className="text-center border border-white/10 hover:border-white/20 text-white font-medium px-6 py-3 rounded-lg transition-colors hover:bg-white/5"
            >
              Visit doppelgone.app ↗
            </a>
          </div>

          <p className="text-slate-500 text-sm mt-6">
            Featured by{' '}
            <a href={live.press.href} target="_blank" rel="noopener" className="text-slate-300 hover:text-white underline underline-offset-4 decoration-white/20">
              {live.press.outlet}
            </a>
            : &ldquo;{live.press.quote}&rdquo;
          </p>
        </div>

        <Link href={`/work/${project.slug}`} className="block p-6 lg:p-8 lg:pl-0 group">
          <Image
            src={live.hero.src}
            alt={live.hero.alt}
            width={live.hero.width}
            height={live.hero.height}
            sizes="(min-width: 1024px) 600px, 100vw"
            className="w-full h-auto rounded-xl border border-white/10 shadow-2xl shadow-teal-500/10 group-hover:scale-[1.02] transition-transform duration-500"
          />
        </Link>
      </div>
    </motion.div>
  );
}
