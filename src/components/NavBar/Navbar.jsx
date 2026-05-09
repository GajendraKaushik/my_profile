import { motion } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useViewer, VIEWER_TYPES, COLOR_MODES } from "../../context/ViewerContext.jsx";

const Navbar = () => {
  const { viewerType, accent, colorMode, toggleViewerType, setColorMode } = useViewer();
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  const sections = useMemo(() => (["about", "skills", "projects"]), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers = [];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  const isRecruiter = viewerType === VIEWER_TYPES.recruiter;
  const isDark = colorMode === COLOR_MODES.dark;

  const toggleTheme = () => setColorMode(isDark ? COLOR_MODES.light : COLOR_MODES.dark);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 w-full z-50 backdrop-blur-lg"
      style={{
        background: scrolled ? "rgba(8, 12, 20, 0.92)" : "rgba(8, 12, 20, 0.6)",
        borderBottom: scrolled ? `1px solid ${accent}25` : "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-8 h-16 flex items-center justify-between">
        <a href="#about" className="flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="text-sm sm:text-base font-semibold tracking-wide"
            style={{ color: accent }}
          >
            GK
          </motion.div>
          <span className="text-xs sm:text-sm text-slate-400 font-mono tracking-wider">
            {isRecruiter ? "SWE" : "DEV"}
          </span>
        </a>

        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto">
          {sections.map((id) => {
            const active = activeSection === id;
            return (
              <motion.a
                key={id}
                href={`#${id}`}
                whileHover={{ scale: 1.04 }}
                onClick={() => setActiveSection(id)}
                className="relative px-3 py-2 rounded-md text-xs sm:text-sm font-mono tracking-wider"
                style={{
                  color: active ? accent : "var(--fg-3)",
                  background: active ? `${accent}0f` : "transparent",
                }}
              >
                {id}
                {active && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: accent, boxShadow: `0 0 10px ${accent}` }}
                  />
                )}
              </motion.a>
            );
          })}

          <div className="w-px h-6 bg-white/10 mx-1" />

          <motion.button
            type="button"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={toggleViewerType}
            className="px-3 py-2 rounded-md text-xs sm:text-sm font-mono tracking-wider border"
            style={{
              color: accent,
              borderColor: `${accent}40`,
              background: `${accent}10`,
            }}
            title="Toggle recruiter/developer mode"
          >
            {isRecruiter ? "Recruiter" : "Developer"}
          </motion.button>

          <motion.button
            type="button"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={toggleTheme}
            className="p-2 rounded-md border"
            style={{
              color: "var(--fg-2)",
              borderColor: "rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.04)",
            }}
            title="Toggle dark/light theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
};

export default Navbar;
