import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { RECRUITER_SKILL_GROUPS, DEVELOPER_SKILLS } from '../../constants.js';
import { useViewer, VIEWER_TYPES } from '../../context/ViewerContext.jsx';
import SkillWidget from './SkillWidget.jsx';
import {
  SiAngular,
  SiAmazon,
  SiDjango,
  SiDocker,
  SiGit,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const SkillSection = () => {
  const { accent, viewerType } = useViewer();
  const isRecruiter = viewerType === VIEWER_TYPES.recruiter;
  const canvasRef = useRef(null);

  const icons = {
    angular: SiAngular,
    aws: SiAmazon,
    django: SiDjango,
    docker: SiDocker,
    git: SiGit,
    java: FaJava,
    mongodb: SiMongodb,
    nodejs: SiNodedotjs,
    postgresql: SiPostgresql,
    python: SiPython,
    react: SiReact,
    springboot: SiSpringboot,
    tailwind: SiTailwindcss,
    typescript: SiTypescript,
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const stars = Array.from({ length: 48 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.0,
      dx: (Math.random() - 0.5) * 0.18,
      dy: (Math.random() - 0.5) * 0.18,
    }));

    let rafId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = `${accent}14`;
      ctx.lineWidth = 0.5;

      for (let i = 0; i < stars.length; i++) {
        const s1 = stars[i];
        for (let j = i + 1; j < stars.length; j++) {
          const s2 = stars[j];
          const dx = s1.x - s2.x;
          const dy = s1.y - s2.y;
          if (dx * dx + dy * dy < 10000) {
            ctx.beginPath();
            ctx.moveTo(s1.x, s1.y);
            ctx.lineTo(s2.x, s2.y);
            ctx.stroke();
          }
        }
      }

      stars.forEach((s) => {
        s.x += s.dx;
        s.y += s.dy;
        if (s.x < 0 || s.x > canvas.width) s.dx *= -1;
        if (s.y < 0 || s.y > canvas.height) s.dy *= -1;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `${accent}35`;
        ctx.fill();
      });

      rafId = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafId);
    };
  }, [accent]);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: 'var(--bg)' }}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-8 z-10">
        <motion.div
          key={viewerType}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
          }}
          className="mb-12 md:mb-16"
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, x: -14 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.35 } },
            }}
            className="inline-block mb-3 rounded-md border px-3 py-1 text-xs font-mono tracking-[0.16em] uppercase"
            style={{
              background: `${accent}14`,
              borderColor: `${accent}25`,
              color: accent,
            }}
          >
            {isRecruiter ? 'Skills' : '// skills'}
          </motion.span>

          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
            }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100"
          >
            {isRecruiter ? 'What I bring to your team' : 'What I actually know'}
          </motion.h2>

          {!isRecruiter ? (
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
              }}
              className="mt-2 text-sm font-mono"
              style={{ color: 'var(--fg-3)' }}
            >
              with honest annotations
            </motion.p>
          ) : null}
        </motion.div>

        {isRecruiter ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RECRUITER_SKILL_GROUPS.map((group, groupIndex) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl border overflow-hidden"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
                  borderColor: 'rgba(255,255,255,0.10)',
                }}
              >
                <div
                  className="px-5 py-4 border-b"
                  style={{
                    borderColor: 'rgba(255,255,255,0.08)',
                    background: `linear-gradient(135deg, ${accent}10, transparent)`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-5 rounded-sm" style={{ background: accent }} />
                    <div className="text-xs font-mono tracking-[0.22em] uppercase text-slate-200/90">
                      {group.label}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                  {group.skills.map((skill, index) => {
                    const Icon = icons[skill.iconKey];
                    const isRight = index % 2 === 1;
                    const isBottom = index >= 2;
                    return (
                      <div
                        key={skill.name}
                        className={[
                          'p-4',
                          isRight ? 'border-l' : '',
                          isBottom ? 'border-t' : '',
                        ].join(' ')}
                        style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 flex items-center justify-center">
                            {Icon ? <Icon size={26} className="text-slate-200/90" /> : null}
                          </div>
                          <div className="text-sm text-slate-200/80">{skill.name}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEVELOPER_SKILLS.map((skill, index) => (
              <SkillWidget
                key={skill.name}
                name={skill.name}
                Icon={icons[skill.iconKey]}
                note={skill.note}
                index={index}
                accent={accent}
                variant="tile"
                className="rounded-2xl px-6 py-5"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default SkillSection;
