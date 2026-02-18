'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Mesh background */}
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Now accepting new projects
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
        >
          We Build Software
          <br />
          <span className="gradient-text">That Drives Growth</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          From idea to launch, we craft exceptional web apps, mobile apps, and SaaS platforms
          that turn your vision into real results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3.5 rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/25"
          >
            Start a Project
          </Link>
          <Link
            href="/work"
            className="border border-white/10 hover:border-white/20 text-white font-medium px-8 py-3.5 rounded-lg transition-all hover:bg-white/5"
          >
            Our Capabilities
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
