'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { projects } from '@/data/portfolio';
import PortfolioCard from '@/components/PortfolioCard';

export default function WorkPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6 relative">
        <div className="absolute inset-0 mesh-gradient opacity-50" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-blue-400 text-sm font-medium mb-3">Our Capabilities</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">What We Can Build For You</h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Explore how we&apos;d approach building solutions across different industries. Each showcase demonstrates our design and development capabilities.</p>
            <p className="text-slate-500 text-sm mt-4 italic">Concept designs showcasing our development capabilities</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <PortfolioCard key={p.slug} {...p} index={i} />
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-white/[0.01]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Have a Project in Mind?</h2>
          <p className="text-slate-400 mb-8">Let&apos;s discuss how we can build something great together.</p>
          <Link href="/contact" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3.5 rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/25">
            Start a Project
          </Link>
        </div>
      </section>
    </>
  );
}
