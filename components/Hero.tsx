"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, ArrowUpRight } from "lucide-react";
import { personal, skills } from "@/lib/data";
import MagneticButton from "./MagneticButton";
import Avatar from "./Avatar";

const ROLES = [
  "full-stack developer",
  "MERN stack engineer",
  "React & Next.js developer",
  "backend API builder",
];

function TerminalRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const speed = deleting ? 30 : 55;

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text.length < currentRole.length) {
          setText(currentRole.slice(0, text.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        if (text.length > 0) {
          setText(text.slice(0, -1));
        } else {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % ROLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <span className="mono-tag">
      <span className="text-signal">$</span> whoami --role{" "}
      <span className="text-wire">{text}</span>
      <span className="inline-block h-[1em] w-[2px] translate-y-[2px] bg-ink animate-blink" />
    </span>
  );
}

const flatStack = Object.values(skills).flat();

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-28 pb-16"
    >
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full bg-signal/10 blur-[120px] animate-float" />
      <div className="pointer-events-none absolute bottom-0 left-[-10%] h-[360px] w-[360px] rounded-full bg-wire/10 blur-[120px] animate-float-delayed" />

      <div className="container-page relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex items-center gap-4"
        >
          <Avatar className="h-14 w-14 md:h-16 md:w-16" />
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-base-border bg-base-surface/60 px-4 py-1.5 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wire opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-wire" />
            </span>
            <span className="mono-tag text-xs text-ink-muted">
              Open to new opportunities 
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.95, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-display-1 text-ink text-balance"
        >
          {personal.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-xl text-lg text-ink-muted md:text-xl">
            {personal.subtitle} — building performant, production-ready
            software from database to deploy.
          </p>

          <div className="rounded-xl border border-base-border bg-base-surface/70 px-5 py-4 backdrop-blur w-fit">
            <div className="flex items-center gap-1.5 mb-2.5">
              <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
              <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
              <span className="h-2 w-2 rounded-full bg-[#28c840]" />
            </div>
            <div className="text-[13px] min-w-[280px]">
              <TerminalRole />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="#projects" variant="solid">
            View Projects <ArrowUpRight size={16} />
          </MagneticButton>
          <MagneticButton href={personal.resumeUrl} variant="outline" download>
            Download Resume
          </MagneticButton>
          <MagneticButton href="#contact" variant="outline">
            Contact Me
          </MagneticButton>
          <MagneticButton href="#contact" variant="ghost">
            Hire Me →
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 2.5 }}
          className="mt-10 flex items-center gap-5"
        >
          {[
            { icon: Github, href: personal.github, label: "GitHub" },
            { icon: Linkedin, href: personal.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              data-cursor-hover
              whileHover={{ y: -4, color: "#E8B44C" }}
              className="text-ink-muted transition-colors"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* marquee of stack */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.7 }}
        className="relative mt-16 border-y border-base-border py-4"
      >
        <div className="flex w-max animate-marquee">
          {[...flatStack, ...flatStack].map((tech, i) => (
            <span
              key={i}
              className="mono-tag mx-4 flex items-center gap-4 text-sm text-ink-faint whitespace-nowrap"
            >
              {tech}
              <span className="text-signal">/</span>
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 3 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-ink-faint"
      >
        <span className="mono-tag text-[11px] uppercase tracking-[0.2em]">scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
