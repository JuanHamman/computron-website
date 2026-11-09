'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Project, LiveProduct } from '@/data/portfolio';
import { LiveBadge } from '@/components/ProductSpotlight';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function LiveCaseStudy({ project, live }: { project: Project; live: LiveProduct }) {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 px-6 relative">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link href="/work" className="text-slate-400 hover:text-white text-sm mb-6 inline-block transition-colors">← Back to Our Work</Link>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <LiveBadge />
              <span className="text-sm font-medium" style={{ color: project.color }}>{project.category}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{project.title}</h1>
            <p className="text-xl text-slate-300 mb-2">{live.tagline}</p>
            <p className="text-slate-500">{project.clientType}</p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a href={live.url} target="_blank" rel="noopener" className="text-center bg-teal-500 hover:bg-teal-400 text-navy-950 font-semibold px-6 py-3 rounded-lg transition-colors">
                Visit doppelgone.app ↗
              </a>
              <Link href="/contact" className="text-center border border-white/10 hover:border-white/20 text-white font-medium px-6 py-3 rounded-lg transition-colors hover:bg-white/5">
                Build something like this with us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero image */}
      <section className="px-6 pb-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="max-w-5xl mx-auto">
          <Image
            src={live.hero.src}
            alt={live.hero.alt}
            width={live.hero.width}
            height={live.hero.height}
            priority
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="w-full h-auto rounded-2xl border border-white/10 shadow-2xl shadow-teal-500/10"
          />
        </motion.div>
      </section>

      {/* Highlights */}
      <section className="px-6 pb-12">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-6 rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-center">
          {live.highlights.map((h) => (
            <div key={h.label}>
              <div className="font-display text-xl sm:text-3xl md:text-4xl font-bold text-white mb-1 whitespace-nowrap">{h.value}</div>
              <div className="text-slate-400 text-sm">{h.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Problem / approach */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl font-bold text-white mb-4">The Problem</h2>
            <p className="text-slate-400 leading-relaxed">{project.challenge}</p>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
            <h2 className="text-2xl font-bold text-white mb-4">What We Built</h2>
            <p className="text-slate-400 leading-relaxed">{project.solution}</p>
          </motion.div>
        </div>
      </section>

      {/* Platforms gallery */}
      <section className="py-16 px-6 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">One Engine, Five Platforms</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">The same scanning engine and the same rules on every device: the best shot stays, the user approves each clean-up, and everything can be restored for 30 days.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-end">
            {live.shots.map((s, i) => (
              <motion.figure key={s.label} {...fadeUp} transition={{ delay: i * 0.08 }} className="text-center">
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={s.width}
                  height={s.height}
                  sizes="(min-width: 768px) 220px, 45vw"
                  className="w-full h-auto rounded-xl border border-white/10"
                />
                <figcaption className="text-slate-400 text-sm mt-3">{s.label}</figcaption>
              </motion.figure>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {live.platforms.map((p) => (
              <a key={p.name} href={p.href} target="_blank" rel="noopener" className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 hover:border-teal-400/30 text-slate-300 hover:text-white text-sm transition-colors">
                {p.name} ↗
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Tech + results */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((t) => (
                <span key={t} className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-slate-300 text-sm">{t}</span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Results</h2>
            <div className="space-y-3">
              {project.results.map((r) => (
                <div key={r} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-teal-400/10">
                    <svg className="w-3 h-3 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-300 text-sm">{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Press + reviews */}
      <section className="py-16 px-6 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto">
          <motion.blockquote {...fadeUp} className="text-center mb-12">
            <p className="text-2xl md:text-3xl font-semibold text-white mb-3">&ldquo;{live.press.quote}&rdquo;</p>
            <a href={live.press.href} target="_blank" rel="noopener" className="text-teal-300 hover:text-teal-200 text-sm">
              {live.press.outlet}: read the article ↗
            </a>
          </motion.blockquote>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {live.reviews.map((r, i) => (
              <motion.figure key={r.author} {...fadeUp} transition={{ delay: i * 0.1 }} className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
                <blockquote className="text-slate-300 leading-relaxed mb-4">&ldquo;{r.quote}&rdquo;</blockquote>
                <figcaption className="text-slate-500 text-sm">{r.author} · {r.source}</figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Have a Product Idea?</h2>
          <p className="text-slate-400 mb-8">We took Doppelgone from idea to five platforms. Let&apos;s talk about what we can build for you.</p>
          <Link href="/contact" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3.5 rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/25">
            Start a Project
          </Link>
        </div>
      </section>
    </>
  );
}
