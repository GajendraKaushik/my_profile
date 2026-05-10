import React from 'react';
import { motion } from 'framer-motion';

export default function SkillWidget({
  name,
  Icon,
  note,
  index,
  accent,
  variant = 'tile',
  className = '',
}) {
  const baseStyle = variant === 'tile'
    ? {
        background: 'rgba(255,255,255,0.04)',
        borderColor: 'rgba(255,255,255,0.10)',
      }
    : {
        background: 'rgba(255,255,255,0.03)',
        borderColor: 'rgba(255,255,255,0.08)',
      };

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.35 }}
      whileHover={{ y: -3 }}
      className={`rounded-xl border p-4 ${className}`}
      style={baseStyle}
    >
      <div className="flex items-center gap-3">
        <div className="h-11 w-11 rounded-lg flex items-center justify-center select-none">
          {Icon ? <Icon size={28} className="text-slate-200/90" /> : null}
        </div>
        <div className="min-w-0">
          <div className="text-sm font-semibold text-slate-100">{name}</div>
          {note ? (
            <div className="mt-1 text-xs leading-relaxed" style={{ color: 'var(--fg-3)' }}>
              {note}
            </div>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}
