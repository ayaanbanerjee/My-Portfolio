"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, FileText, Menu, X } from "lucide-react";
import { nav, personal } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav.map((n) => document.querySelector(n.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[70] transition-all duration-500",
          scrolled ? "py-3" : "py-6"
        )}
      >
        <div className="container-page">
          <div
            className={cn(
              "flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 border",
              scrolled
                ? "border-base-border bg-base-surface/70 backdrop-blur-xl shadow-card"
                : "border-transparent bg-transparent"
            )}
          >
            <a
              href="#home"
              className="mono-tag flex items-center gap-2 text-sm font-medium text-ink"
              data-cursor-hover
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-signal text-base font-bold">
                A
              </span>
              <span className="hidden sm:inline">Ayan Banerjee</span>
            </a>

            <nav className="hidden lg:flex items-center gap-1">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  data-cursor-hover
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm transition-colors",
                    activeSection === item.href
                      ? "text-ink"
                      : "text-ink-muted hover:text-ink"
                  )}
                >
                  {activeSection === item.href && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-base-elevated"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                data-cursor-hover
                className="text-ink-muted hover:text-signal transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                data-cursor-hover
                className="text-ink-muted hover:text-signal transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={personal.resumeUrl}
                download
                data-cursor-hover
                className="mono-tag flex items-center gap-2 rounded-full bg-signal px-4 py-2 text-xs font-semibold text-base transition-colors hover:bg-signal-soft"
              >
                <FileText size={14} />
                Resume
              </a>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="lg:hidden text-ink"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[95] bg-base/98 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="container-page py-6 flex items-center justify-between">
              <span className="mono-tag text-sm text-ink">ayan.dev</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-ink">
                <X size={26} />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center gap-2 px-8 pt-10">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  className="font-display text-display-3 text-ink py-3"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * nav.length + 0.1, duration: 0.4 }}
                className="flex items-center gap-6 mt-10"
              >
                <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-ink-muted">
                  <Github size={22} />
                </a>
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-ink-muted">
                  <Linkedin size={22} />
                </a>
                <a href={personal.resumeUrl} download className="text-ink-muted">
                  <FileText size={22} />
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
