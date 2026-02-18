'use client';

import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Discovery', desc: 'We learn your business, goals, and users. Then we define scope, timeline, and success metrics.' },
  { num: '02', title: 'Design', desc: 'Wireframes, prototypes, and UI design — validated with you before a single line of code is written.' },
  { num: '03', title: 'Develop', desc: 'Agile sprints with weekly demos. Clean code, thorough testing, and transparent progress tracking.' },
  { num: '04', title: 'Deploy', desc: 'Launch day and beyond. We handle deployment, monitoring, and provide ongoing support as you grow.' },
];

export default function ProcessStep() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {steps.map((s, i) => (
        <motion.div
          key={s.num}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
          className="relative"
        >
          {i < 3 && (
            <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-blue-500/30 to-transparent" />
          )}
          <div className="text-4xl font-bold text-blue-500/20 mb-3">{s.num}</div>
          <h3 className="text-white font-semibold text-lg mb-2">{s.title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}
