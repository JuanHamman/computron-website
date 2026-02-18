'use client';

import { motion } from 'framer-motion';

const techs = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Next.js', color: '#ffffff' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Node.js', color: '#339933' },
  { name: 'PostgreSQL', color: '#4169E1' },
  { name: 'React Native', color: '#61DAFB' },
  { name: 'Flutter', color: '#02569B' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'Python', color: '#3776AB' },
  { name: 'Go', color: '#00ADD8' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'Redis', color: '#DC382D' },
  { name: 'GraphQL', color: '#E10098' },
  { name: 'Figma', color: '#F24E1E' },
  { name: 'Stripe', color: '#635BFF' },
  { name: 'Firebase', color: '#FFCA28' },
];

function TechBadge({ name, color }: { name: string; color: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/5 bg-white/[0.02] flex-shrink-0">
      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
      <span className="text-slate-300 text-sm font-medium whitespace-nowrap">{name}</span>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-4"
        animate={{ x: [0, -1200] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {[...techs, ...techs].map((t, i) => (
          <TechBadge key={`${t.name}-${i}`} {...t} />
        ))}
      </motion.div>
    </div>
  );
}
