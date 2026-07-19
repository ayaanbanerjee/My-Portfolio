"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LINES = [
  "booting portfolio.exe",
  "loading modules: react, next, framer-motion",
  "connecting to github.com/ayaanbanerjee",
  "ready.",
];

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const lineTimer = setInterval(() => {
      setLineIndex((i) => (i < LINES.length - 1 ? i + 1 : i));
    }, 340);

    const exitTimer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 1750);

    return () => {
      clearInterval(lineTimer);
      clearTimeout(exitTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-base"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            exit={{ y: -24, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-[min(90vw,420px)] rounded-xl border border-base-border bg-base-surface px-5 py-4 shadow-card"
          >
            <div className="flex items-center gap-1.5 mb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="mono-tag text-[13px] leading-relaxed text-ink-muted">
              {LINES.slice(0, lineIndex + 1).map((line, i) => (
                <div key={i} className={i === LINES.length - 1 ? "text-wire" : ""}>
                  <span className="text-signal">$</span> {line}
                </div>
              ))}
              <span className="inline-block h-3.5 w-2 translate-y-0.5 bg-signal animate-blink" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
