'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import ShopFlowDashboard from '@/components/mockups/ShopFlowDashboard';
import VitalTrackApp from '@/components/mockups/VitalTrackApp';
import CloudDeskPlatform from '@/components/mockups/CloudDeskPlatform';
import PayNovaApp from '@/components/mockups/PayNovaApp';

type Project = {
  slug: string;
  title: string;
  category: string;
  clientType: string;
  challenge: string;
  solution: string;
  techStack: string[];
  results: string[];
  mockupType: 'desktop' | 'mobile';
  color: string;
};

const mockups: Record<string, React.ComponentType> = {
  'e-commerce': ShopFlowDashboard,
  'health-wellness': VitalTrackApp,
  'project-management': CloudDeskPlatform,
  fintech: PayNovaApp,
};

export default function CaseStudyContent({ project }: { project: Project }) {
  const Mockup = mockups[project.slug];

  return (
    <>
      <section className="pt-32 pb-16 px-6 relative">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link href="/work" className="text-slate-400 hover:text-white text-sm mb-6 inline-block transition-colors">← Back to Capabilities</Link>
            <p className="text-sm font-medium mb-2" style={{ color: project.color }}>{project.category}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
            <p className="text-slate-400">Industry: {project.clientType}</p>
            <p className="text-slate-500 text-sm mt-2 italic">Concept design showcasing our development capabilities</p>
          </motion.div>
        </div>
      </section>

      {/* Mockup */}
      <section className="py-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          {Mockup && <Mockup />}
        </motion.div>
      </section>

      {/* Details */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold text-white mb-4">Industry Challenge</h2>
            <p className="text-slate-400 leading-relaxed">{project.challenge}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h2 className="text-2xl font-bold text-white mb-4">Our Approach</h2>
            <p className="text-slate-400 leading-relaxed">{project.solution}</p>
          </motion.div>
        </div>
      </section>

      {/* Tech + Capabilities */}
      <section className="py-16 px-6 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((t) => (
                <span key={t} className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-slate-300 text-sm">{t}</span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Key Capabilities</h2>
            <div className="space-y-3">
              {project.results.map((r) => (
                <div key={r} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: `${project.color}15` }}>
                    <svg className="w-3 h-3" style={{ color: project.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
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

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Something Similar?</h2>
          <p className="text-slate-400 mb-8">Let&apos;s discuss how we can build a tailored solution for your business.</p>
          <Link href="/contact" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3.5 rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/25">
            Start a Project
          </Link>
        </div>
      </section>
    </>
  );
}
