'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { services, faqs } from '@/data/services';
import FAQ from '@/components/FAQ';

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 relative">
        <div className="absolute inset-0 mesh-gradient opacity-50" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-blue-400 text-sm font-medium mb-3">Our Services</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Everything You Need to Ship Great Software</h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Full-stack development expertise across web, mobile, and design. One team, every capability.</p>
          </motion.div>
        </div>
      </section>

      {/* Service sections */}
      {services.map((service, i) => (
        <section key={service.id} id={service.id} className={`py-20 px-6 ${i % 2 === 0 ? '' : 'bg-white/[0.01]'}`}>
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <p className="text-blue-400 text-sm font-medium mb-2">0{i + 1}</p>
                  <h2 className="text-3xl font-bold text-white mb-4">{service.title}</h2>
                  <p className="text-slate-400 leading-relaxed mb-6">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.techStack.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium">{t}</span>
                    ))}
                  </div>
                  <Link href="/contact" className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                    Discuss Your Project →
                  </Link>
                </div>
                <div>
                  <h3 className="text-white text-sm font-semibold mb-3">Common Use Cases</h3>
                  <div className="space-y-2">
                    {service.useCases.map((uc) => (
                      <div key={uc} className="flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-white/[0.02]">
                        <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center">
                          <svg className="w-3 h-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-slate-300 text-sm">{uc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-400">Common questions about working with us.</p>
          </motion.div>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white/[0.01]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-slate-400 mb-8">Tell us about your project and we&apos;ll get back to you within 24 hours.</p>
          <Link href="/contact" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3.5 rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/25">
            Start a Project
          </Link>
        </div>
      </section>
    </>
  );
}
