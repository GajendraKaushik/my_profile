import React from 'react';
import { motion } from 'framer-motion';

export default function SkillCard({ title, skills, accent }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="rounded-2xl border p-6 backdrop-blur-sm"
      style={{
        borderColor: 'var(--border)',
        background: 'var(--bg-card)',
      }}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-base sm:text-lg font-semibold text-slate-100">{title}</h3>
        <span
          className="text-xs font-mono tracking-[0.25em] uppercase"
          style={{ color: accent }}
        >
          Skills
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-xs font-semibold rounded-xl border font-mono"
            style={{
              color: 'var(--fg-2)',
              borderColor: 'rgba(255,255,255,0.10)',
              background: 'rgba(255,255,255,0.03)',
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

