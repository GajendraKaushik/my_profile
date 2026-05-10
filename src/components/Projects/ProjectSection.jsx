import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { DUMMY_PROJECTS } from '../../constants.js';
import { useViewer } from '../../context/ViewerContext.jsx';

function SectionLabel({ children, color }) {
  return (
    <div className="text-xs font-mono tracking-[0.22em] uppercase" style={{ color }}>
      {children}
    </div>
  );
}

function ProjectCard({ project, accent }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="rounded-2xl border p-6 sm:p-7 backdrop-blur-sm"
      style={{
        borderColor: 'var(--border)',
        background: 'var(--bg-card)',
      }}
    >
      <h3 className="text-xl sm:text-2xl font-semibold text-slate-100 font-mono tracking-tight">
        {project.title}
      </h3>

      <div className="mt-6 space-y-5">
        <div className="space-y-2">
          <SectionLabel color="#f2c078">Problem</SectionLabel>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--fg-2)' }}>
            {project.problem}
          </p>
        </div>

        <div className="space-y-2">
          <SectionLabel color="#f2c078">Solution</SectionLabel>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--fg-2)' }}>
            {project.solution}
          </p>
        </div>

        <div className="space-y-2">
          <SectionLabel color="#34d399">Impact</SectionLabel>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--fg-2)' }}>
            {project.impact}
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-semibold rounded-xl border font-mono"
            style={{
              color: 'var(--fg-2)',
              borderColor: 'rgba(255,255,255,0.10)',
              background: 'rgba(255,255,255,0.03)',
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-6 text-sm font-mono">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 transition-colors"
          style={{ color: '#f2c078' }}
        >
          View Code <Github size={16} />
        </a>
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 transition-colors"
          style={{ color: 'var(--fg-3)' }}
        >
          Live Demo <ExternalLink size={16} />
        </a>
      </div>
    </motion.div>
  );
}

export default function ProjectSection() {
  const { accent } = useViewer();

  return (
    <section className="py-14 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'var(--bg)' }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-14"
        >
          <div
            className="inline-flex items-center justify-center px-4 py-2 rounded-md mb-5 border"
            style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)' }}
          >
            <span className="text-xs font-mono tracking-[0.35em] uppercase" style={{ color: '#f2c078' }}>
              Projects
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-100">
            Things I built
          </h2>
          <p className="mt-3 text-sm md:text-base" style={{ color: 'var(--fg-3)' }}>
            personal projects • real decisions • code on GitHub
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DUMMY_PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} accent={accent} />
          ))}
        </div>
      </div>
    </section>
  );
}
