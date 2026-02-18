'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6 relative">
        <div className="absolute inset-0 mesh-gradient opacity-50" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-blue-400 text-sm font-medium mb-3">Contact Us</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Let&apos;s Start Something Great</h1>
            <p className="text-slate-400 text-lg">Tell us about your project and we&apos;ll get back to you within 24 hours.</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3"
          >
            <ContactForm />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-white font-semibold mb-3">Email Us</h3>
              <a href="mailto:hello@computrontech.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                hello@computrontech.com
              </a>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-3">Location</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Based in South Africa, serving clients worldwide.<br />
                Our timezone (GMT+2) means great overlap with European and decent overlap with US business hours.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-3">Working Hours</h3>
              <p className="text-slate-400 text-sm">
                Monday – Friday: 9:00 AM – 6:00 PM (SAST)<br />
                Weekend: Available for urgent matters
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-3">What Happens Next?</h3>
              <div className="space-y-3">
                {[
                  { step: '1', text: 'We review your message within 24 hours' },
                  { step: '2', text: 'We schedule a free 30-minute discovery call' },
                  { step: '3', text: 'We provide a detailed proposal and estimate' },
                ].map((s) => (
                  <div key={s.step} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {s.step}
                    </div>
                    <p className="text-slate-400 text-sm">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
