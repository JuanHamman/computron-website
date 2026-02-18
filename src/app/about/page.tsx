'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const values = [
  { title: 'Innovation', desc: 'We stay ahead of the curve with cutting-edge practices and modern tooling. Every project benefits from our commitment to using the best tools for the job.', icon: '💡' },
  { title: 'Speed', desc: 'Time-to-market matters. Our streamlined process and focused team deliver high-quality software faster than traditional agencies — without cutting corners.', icon: '⚡' },
  { title: 'Quality', desc: 'Clean code, thorough testing, and pixel-perfect design aren\'t optional — they\'re standard. We build software that\'s maintainable, scalable, and reliable.', icon: '✨' },
  { title: 'Transparency', desc: 'No black boxes. You\'ll always know where your project stands, what\'s next, and how your budget is being spent. Weekly updates and open communication.', icon: '🔍' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 relative">
        <div className="absolute inset-0 mesh-gradient opacity-50" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-blue-400 text-sm font-medium mb-3">About Us</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Small Team, Big Impact</h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Great software shouldn&apos;t take forever or cost a fortune. We&apos;re here to prove it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold text-white mb-6">Our Story</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Founded in 2025, Computron Tech was born from a simple belief: great software shouldn&apos;t take forever or cost a fortune. Too many businesses were being underserved by slow, expensive agencies that overpromised and underdelivered.
              </p>
              <p>
                We set out to build a different kind of studio — one that combines deep technical expertise with the agility and dedication of a small team. A studio where every project gets senior-level attention, where communication is transparent, and where the goal is always to deliver real, measurable results.
              </p>
              <p>
                Today, we work with startups and established businesses worldwide, building everything from MVPs to enterprise platforms. Our approach is simple: understand the problem, design the right solution, and ship it fast.
              </p>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Values */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">What We Stand For</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl border border-white/5 bg-white/[0.02]"
              >
                <div className="text-2xl mb-3">{v.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { value: '6 Weeks', label: 'Average Delivery Time' },
            { value: 'Full-Stack', label: 'Development Capabilities' },
            { value: 'Any Stack', label: 'Technology Agnostic' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-bold text-white mb-2">{s.value}</div>
              <div className="text-slate-400 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Let&apos;s Build Together</h2>
          <p className="text-slate-400 mb-8">Ready to work with a team that cares as much about your product as you do?</p>
          <Link href="/contact" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3.5 rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/25">
            Start a Project
          </Link>
        </div>
      </section>
    </>
  );
}
