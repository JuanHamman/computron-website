'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import PortfolioCard from '@/components/PortfolioCard';
import ProcessStep from '@/components/ProcessStep';
import AnimatedCounter from '@/components/AnimatedCounter';
import TechMarquee from '@/components/TechMarquee';
import { services } from '@/data/services';
import { projects } from '@/data/portfolio';

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <section className={`py-24 px-6 ${className}`}><div className="max-w-7xl mx-auto">{children}</div></section>;
}

function SectionHeader({ label, title, desc }: { label?: string; title: string; desc?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      {label && <p className="text-blue-400 text-sm font-medium mb-3">{label}</p>}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
      {desc && <p className="text-slate-400 max-w-2xl mx-auto">{desc}</p>}
    </motion.div>
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      {/* Built With Modern Technology */}
      <section className="py-16 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-slate-500 text-sm mb-8">Built With Modern Technology</p>
          <TechMarquee />
        </div>
      </section>

      {/* Services */}
      <Section>
        <SectionHeader label="What We Do" title="Services Built for Growth" desc="End-to-end software development, from concept to launch and beyond." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.id} title={s.title} shortDesc={s.shortDesc} icon={s.icon} index={i} />
          ))}
        </div>
      </Section>

      {/* Capabilities Showcase */}
      <Section className="bg-white/[0.01]">
        <SectionHeader label="Our Capabilities" title="What We Can Build" desc="Concept designs showcasing our development capabilities across industries." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.filter(p => p.featured).map((p, i) => (
            <PortfolioCard key={p.slug} {...p} index={i} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/work" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
            Explore All Capabilities →
          </Link>
        </div>
      </Section>

      {/* How We Work */}
      <Section>
        <SectionHeader label="Our Process" title="How We Work" desc="A proven process that turns your idea into a shipped product — efficiently and transparently." />
        <ProcessStep />
      </Section>

      {/* Stats */}
      <Section className="bg-white/[0.01]">
        <AnimatedCounter />
      </Section>

      {/* CTA */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center rounded-2xl border border-white/5 bg-gradient-to-br from-blue-500/5 to-blue-600/5 p-12 md:p-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build Something Amazing?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Let&apos;s talk about your project. We&apos;ll help you figure out the best approach, timeline, and budget.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3.5 rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/25"
          >
            Start a Project
          </Link>
        </motion.div>
      </Section>
    </>
  );
}
